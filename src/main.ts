import { Plugin, PluginSettingTab, Setting, App, Editor, MarkdownView, Modifier, Notice } from 'obsidian';
import { BetterHighlightSettings, HighlightColor, DEFAULT_SETTINGS } from './types';
import { I18n } from './i18n';
import { Extension } from '@codemirror/state';
import { Decoration, DecorationSet, EditorView, PluginValue, ViewPlugin, ViewUpdate, WidgetType } from '@codemirror/view';
import { RangeSetBuilder } from '@codemirror/state';

/**
 * Better Highlight Plugin
 * 拡張Markdownハイライト機能
 * 
 * 機能:
 * - カスタム構文: ===(colorname)content===
 * - ユーザー定義カラー
 * - 多言語対応
 */
export default class BetterHighlightPlugin extends Plugin {
	settings!: BetterHighlightSettings;
	i18n!: I18n;

	async onload() {
		console.log('Better Highlight Plugin loading...');
		
		// 設定の読み込み
		await this.loadSettings();
		
		// 翻訳システムの初期化
		this.i18n = new I18n();
		
		// プラグイン読み込み確認用のアラート
		new Notice(this.i18n.t('pluginLoaded'));

		// CSSスタイルの追加
		this.addStyles();

		// エディター拡張の登録（ライブプレビュー用）
		this.registerEditorExtension(this.createEditorExtension());

		// Markdown post processorの登録（リーディングビュー用）
		this.setupMarkdownPostProcessor();

		// コマンドの登録
		this.registerCommands();

		// 設定タブの追加
		this.addSettingTab(new BetterHighlightSettingTab(this.app, this));

		console.log('Better Highlight Plugin loaded successfully!');
	}

	onunload() {
		console.log('Better Highlight Plugin unloading...');
		// スタイルの削除
		const existingStyle = document.getElementById('better-highlight-styles');
		if (existingStyle) {
			existingStyle.remove();
		}
	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
		this.addStyles(); // 設定変更時にスタイルを更新
		this.registerCommands(); // コマンドを再登録
	}

	private registerCommands() {
		// 既存のコマンドをクリア（再登録時の重複を防ぐ）
		// @ts-ignore
		this.app.commands.removeCommand(`${this.manifest.id}:create-default-highlight`);
		// @ts-ignore
		this.app.commands.removeCommand(`${this.manifest.id}:remove-highlight`);
		
		// 既存の色コマンドをクリア
		this.settings.colors.forEach((color) => {
			// @ts-ignore
			this.app.commands.removeCommand(`${this.manifest.id}:highlight-${color.id}`);
		});

		// 基本的なハイライトコマンド
		this.addCommand({
			id: 'create-default-highlight',
			name: this.i18n.t('createDefaultHighlight'),
			editorCallback: (editor) => {
				this.createHighlight(editor);
			}
		});

		// ハイライト削除コマンド
		this.addCommand({
			id: 'remove-highlight',
			name: this.i18n.t('removeHighlight'),
			editorCallback: (editor) => {
				this.removeHighlight(editor);
			}
		});

		// 各色のハイライトコマンド
		this.settings.colors.forEach((color) => {
			if (color.enabled) {
				this.addCommand({
					id: `highlight-${color.id}`,
					name: this.i18n.t('createColorHighlight', { color: this.getColorDisplayName(color) }),
					editorCallback: (editor) => {
						this.createHighlight(editor, color);
					}
				});
			}
		});
	}

	private createHighlight(editor: Editor, color?: HighlightColor) {
		const selection = editor.getSelection();
		if (!selection) {
			return;
		}

		let replacement: string;
		if (color) {
			// カスタムカラーハイライト: ===(colorname)content===
			replacement = `===(${color.name})${selection}===`;
		} else {
			// デフォルトハイライト: ==content==
			replacement = `==${selection}==`;
		}

		editor.replaceSelection(replacement);
	}

	private removeHighlight(editor: Editor) {
		const selection = editor.getSelection();
		
		if (selection) {
			// 選択されたテキストがある場合は従来の処理
			this.removeHighlightFromSelection(editor, selection);
		} else {
			// 選択されたテキストがない場合はカーソル位置のハイライトを削除
			this.removeHighlightAtCursor(editor);
		}
	}

	private removeHighlightFromSelection(editor: Editor, selection: string) {
		// 選択範囲の開始・終了位置を取得
		const selectionFrom = editor.getCursor('from');
		const selectionTo = editor.getCursor('to');
		
		console.log(`Selection from line ${selectionFrom.line} ch ${selectionFrom.ch} to line ${selectionTo.line} ch ${selectionTo.ch}`);
		
		let foundHighlight = false;
		let removedCount = 0;
		
		// 全体のテキストを取得
		const fullText = editor.getValue();
		const lines = fullText.split('\n');
		
		// 選択範囲に関わる全ての行を処理
		for (let lineNum = selectionFrom.line; lineNum <= selectionTo.line; lineNum++) {
			const line = lines[lineNum];
			console.log(`Processing line ${lineNum}: "${line}"`);
			
			// 選択範囲がこの行のどの部分に該当するかを計算
			const lineSelectionStart = lineNum === selectionFrom.line ? selectionFrom.ch : 0;
			const lineSelectionEnd = lineNum === selectionTo.line ? selectionTo.ch : line.length;
			
			console.log(`Line ${lineNum} selection range: ${lineSelectionStart}-${lineSelectionEnd}`);
			
			// カスタムハイライト構文を検索
			const customHighlightRegex = /===\([^)]+\)([^=]+)===/g;
			const normalHighlightRegex = /==([^=]+)==/g;
			
			let match;
			let newLine = line;
			let lineChanged = false;
			
			// カスタムハイライトをチェック
			customHighlightRegex.lastIndex = 0;
			while ((match = customHighlightRegex.exec(line)) !== null) {
				const matchStart = match.index;
				const matchEnd = match.index + match[0].length;
				
				console.log(`Found custom highlight: "${match[0]}" at ${matchStart}-${matchEnd}`);
				
				// 選択範囲とハイライトが重複するかチェック
				const overlaps = !(lineSelectionEnd <= matchStart || lineSelectionStart >= matchEnd);
				
				if (overlaps) {
					console.log(`Selection overlaps with custom highlight, removing...`);
					const content = match[1]; // 抽出されたコンテンツ
					const beforeMatch = newLine.substring(0, matchStart);
					const afterMatch = newLine.substring(matchEnd);
					newLine = beforeMatch + content + afterMatch;
					lineChanged = true;
					foundHighlight = true;
					removedCount++;
					break; // 1つのハイライトを削除したら次の行へ
				}
			}
			
			// カスタムハイライトが見つからなかった場合、通常のハイライトをチェック
			if (!lineChanged) {
				normalHighlightRegex.lastIndex = 0;
				while ((match = normalHighlightRegex.exec(line)) !== null) {
					const matchStart = match.index;
					const matchEnd = match.index + match[0].length;
					
					console.log(`Found normal highlight: "${match[0]}" at ${matchStart}-${matchEnd}`);
					
					// 選択範囲とハイライトが重複するかチェック
					const overlaps = !(lineSelectionEnd <= matchStart || lineSelectionStart >= matchEnd);
					
					if (overlaps) {
						console.log(`Selection overlaps with normal highlight, removing...`);
						const content = match[1]; // 抽出されたコンテンツ
						const beforeMatch = newLine.substring(0, matchStart);
						const afterMatch = newLine.substring(matchEnd);
						newLine = beforeMatch + content + afterMatch;
						lineChanged = true;
						foundHighlight = true;
						removedCount++;
						break; // 1つのハイライトを削除したら次の行へ
					}
				}
			}
			
			// 行が変更された場合は配列を更新
			if (lineChanged) {
				lines[lineNum] = newLine;
			}
		}
		
		// 変更がある場合は全体を一度に置換（1つのundo単位）
		if (foundHighlight) {
			const newText = lines.join('\n');
			editor.setValue(newText);
			
			// 選択範囲を復元
			editor.setSelection(selectionFrom, selectionTo);
			
			new Notice(this.i18n.t('highlightRemovedCount', { count: removedCount }));
		} else {
			new Notice(this.i18n.t('noHighlightFound'));
		}
	}

	private removeHighlightAtCursor(editor: Editor) {
		const cursor = editor.getCursor();
		const line = editor.getLine(cursor.line);
		const cursorPos = cursor.ch;

		console.log(`Cursor at line ${cursor.line}, position ${cursorPos}`);
		console.log(`Line content: "${line}"`);

		// カーソル位置周辺のハイライト構文を検索
		const customHighlightRegex = /===\([^)]+\)([^=]+)===/g;
		const normalHighlightRegex = /==([^=]+)==/g;

		let match;
		let foundHighlight = false;

		// カスタムハイライトをチェック
		customHighlightRegex.lastIndex = 0;
		while ((match = customHighlightRegex.exec(line)) !== null) {
			const matchStart = match.index;
			const matchEnd = match.index + match[0].length;
			
			console.log(`Found custom highlight: "${match[0]}" at ${matchStart}-${matchEnd}`);
			
			if (cursorPos >= matchStart && cursorPos <= matchEnd) {
				console.log('Cursor is inside custom highlight, removing...');
				const beforeMatch = line.substring(0, matchStart);
				const afterMatch = line.substring(matchEnd);
				const content = match[1]; // 抽出されたコンテンツ
				
				const newLine = beforeMatch + content + afterMatch;
				
				// 行全体を置換
				editor.setLine(cursor.line, newLine);
				
				// カーソル位置を調整（削除されたマークアップ分だけ左に移動）
				const removedChars = match[0].length - content.length;
				const newCursorPos = Math.max(0, cursorPos - (cursorPos > matchStart + content.length ? removedChars : 0));
				editor.setCursor(cursor.line, newCursorPos);
				
				new Notice(this.i18n.t('customHighlightRemoved'));
				foundHighlight = true;
				break;
			}
		}

		// カスタムハイライトが見つからなかった場合、通常のハイライトをチェック
		if (!foundHighlight) {
			normalHighlightRegex.lastIndex = 0;
			while ((match = normalHighlightRegex.exec(line)) !== null) {
				const matchStart = match.index;
				const matchEnd = match.index + match[0].length;
				
				console.log(`Found normal highlight: "${match[0]}" at ${matchStart}-${matchEnd}`);
				
				if (cursorPos >= matchStart && cursorPos <= matchEnd) {
					console.log('Cursor is inside normal highlight, removing...');
					const beforeMatch = line.substring(0, matchStart);
					const afterMatch = line.substring(matchEnd);
					const content = match[1]; // 抽出されたコンテンツ
					
					const newLine = beforeMatch + content + afterMatch;
					
					// 行全体を置換
					editor.setLine(cursor.line, newLine);
					
					// カーソル位置を調整
					const removedChars = match[0].length - content.length;
					const newCursorPos = Math.max(0, cursorPos - (cursorPos > matchStart + content.length ? removedChars : 0));
					editor.setCursor(cursor.line, newCursorPos);
					
					new Notice(this.i18n.t('highlightRemoved'));
					foundHighlight = true;
					break;
				}
			}
		}

		if (!foundHighlight) {
			new Notice(this.i18n.t('noHighlightAtCursor'));
		}
	}

	private addStyles() {
		// 既存のスタイルを削除
		const existingStyle = document.getElementById('better-highlight-styles');
		if (existingStyle) {
			existingStyle.remove();
		}

		// 新しいスタイルを追加
		const style = document.createElement('style');
		style.id = 'better-highlight-styles';
		
		let css = `
/* Better Highlight Plugin Styles */

/* デフォルトハイライト（変更なし） */
mark, .cm-highlight {
	background-color: #ffeb3b;
	color: inherit;
}

/* カスタムカラーハイライト - 標準ハイライトと同じスタイル */
.better-highlight-processed {
	font-style: normal !important;
	font-weight: normal !important;
	background: transparent !important;
	border: none !important;
	padding: 0 !important;
	margin: 0 !important;
	text-decoration: none !important;
}

/* 設定画面のスタイル */
.better-highlight-color-setting {
	border: 1px solid var(--background-modifier-border);
	border-radius: 8px;
	padding: 16px;
	margin-bottom: 16px;
	background: var(--background-secondary);
}

.color-setting-header {
	margin-bottom: 12px;
	padding-bottom: 0px;
}

/* カラーピッカーのhover時outline修正 */
input[type="color"] {
	outline: none !important;
	box-shadow: none !important;
}

input[type="color"]:focus,
input[type="color"]:hover {
	outline: none !important;
	box-shadow: none !important;
}

/* より具体的なセレクターでObsidianのデフォルトスタイルを上書き */
.setting-item input[type="color"],
.mod-settings input[type="color"] {
	outline: none !important;
	border: none !important;
	box-shadow: none !important;
}

.setting-item input[type="color"]:focus,
.setting-item input[type="color"]:hover,
.mod-settings input[type="color"]:focus,
.mod-settings input[type="color"]:hover {
	outline: none !important;
	border: none !important;
	box-shadow: none !important;
}

`;

		// 各色のCSSルールを生成 - markタグと同じスタイル
		this.settings.colors.forEach((color) => {
			if (color.enabled) {
				css += `
/* ${color.displayName}ハイライト */
span.better-highlight-${color.id}.better-highlight-processed,
.better-highlight-${color.id} {
	background: linear-gradient(to bottom, transparent 0%, transparent 60%, ${color.color} 60%, ${color.color} 100%) !important;
	color: inherit !important;
	font-style: inherit !important;
	font-weight: inherit !important;
	text-decoration: inherit !important;
	border: none !important;
	padding: 0 !important;
	margin: 0 !important;
	display: inline !important;
	box-shadow: none !important;
	outline: none !important;
}
`;
			}
		});

		style.textContent = css;
		document.head.appendChild(style);
		
		console.log('CSS styles added:', css);
	}

	private setupMarkdownPostProcessor() {
		console.log('Setting up MarkdownPostProcessor...');
		
		this.registerMarkdownPostProcessor((element, context) => {
			console.log('=== MarkdownPostProcessor called ===');
			console.log('Processing element:', element);
			console.log('Element tagName:', element.tagName);
			console.log('Element textContent:', element.textContent);
			console.log('Element innerHTML:', element.innerHTML);
			
			// より積極的にMarkdownPostProcessorの動作を確認
			if (element.textContent) {
				console.log('🔍 Processing element with content:', element.textContent.substring(0, 100));
			}
			
			// シンプルなアプローチ：innerHTML全体を処理
			this.processElementForReading(element);
		});
		
		console.log('MarkdownPostProcessor registered successfully');
	}

	private processElementForReading(element: HTMLElement) {
		console.log('🔄 Processing element for reading view');
		
		// innerHTML全体をチェック
		let html = element.innerHTML;
		console.log('Original HTML:', html);
		
		// Obsidianによって変換された形式を処理: <mark>=(colorname)content</mark>=
		const obsidianConvertedRegex = /<mark>=\(([^)]+)\)([^<]+)<\/mark>=/g;
		let hasChanges = false;
		
		html = html.replace(obsidianConvertedRegex, (match, colorName, content) => {
			console.log(`🎯 Found Obsidian-converted syntax in reading view: ${match}`);
			console.log(`Color: ${colorName}, Content: ${content}`);
			
			const color = this.settings.colors.find(c => c.name === colorName);
			
			if (color && color.enabled) {
				console.log(`✅ Applying color ${colorName} to content: ${content}`);
				hasChanges = true;
				return `<span class="better-highlight-${color.id} better-highlight-processed">${content}</span>`;
			} else {
				console.log(`❌ Unknown color ${colorName}, using default`);
				hasChanges = true;
				return `<span style="background: linear-gradient(to bottom, transparent 0%, transparent 60%, #ffeb3b 60%, #ffeb3b 100%);">${content}</span>`;
			}
		});
		
		// 元の構文も念のためチェック（万が一直接含まれている場合）
		const originalRegex = /===\(([^)]+)\)([^=]+)===/g;
		html = html.replace(originalRegex, (match, colorName, content) => {
			console.log(`🎯 Found original syntax in reading view: ${match}`);
			console.log(`Color: ${colorName}, Content: ${content}`);
			
			const color = this.settings.colors.find(c => c.name === colorName);
			
			if (color && color.enabled) {
				console.log(`✅ Applying color ${colorName} to content: ${content}`);
				hasChanges = true;
				return `<span class="better-highlight-${color.id} better-highlight-processed">${content}</span>`;
			} else {
				console.log(`❌ Unknown color ${colorName}, using default`);
				hasChanges = true;
				return `<span style="background: linear-gradient(to bottom, transparent 0%, transparent 60%, #ffeb3b 60%, #ffeb3b 100%);">${content}</span>`;
			}
		});
		
		if (hasChanges) {
			console.log('🎉 Updating element HTML in reading view');
			console.log('New HTML:', html);
			element.innerHTML = html;
		} else {
			console.log('No changes needed for this element');
		}
	}

	private createEditorExtension(): Extension {
		const plugin = this;
		return [
			// マウスイベントハンドラーを追加
			EditorView.domEventHandlers({
				mousedown: (event, view) => {
					// マウスドラッグ開始をマーク
					(view as any)._betterHighlightDragging = true;
					return false;
				},
				mouseup: (event, view) => {
					// マウスドラッグ終了をマーク
					if ((view as any)._betterHighlightDragging) {
						(view as any)._betterHighlightDragging = false;
						// 少し遅延を入れてデコレーションを更新
						setTimeout(() => {
							view.requestMeasure();
						}, 1);
					}
					return false;
				}
			}),
			ViewPlugin.fromClass(class implements PluginValue {
				decorations: DecorationSet;

				constructor(view: EditorView) {
					this.decorations = this.buildDecorations(view);
				}

				update(update: ViewUpdate) {
					if (update.docChanged || update.viewportChanged || update.selectionSet) {
						this.decorations = this.buildDecorations(update.view);
					}
				}

				buildDecorations(view: EditorView): DecorationSet {
					const builder = new RangeSetBuilder<Decoration>();
					const text = view.state.doc.toString();
					const selection = view.state.selection.main;
					const cursorPos = selection.head;
					const selectionFrom = selection.from;
					const selectionTo = selection.to;
					const hasSelection = selectionFrom !== selectionTo;
					const isDragging = (view as any)._betterHighlightDragging || false;
					
					console.log('🔍 Building decorations for editor text');
					console.log(`Cursor: ${cursorPos}, Selection: ${selectionFrom}-${selectionTo}, Has selection: ${hasSelection}, Dragging: ${isDragging}`);
					
					// カスタムハイライト構文を検索
					const regex = /===\(([^)]+)\)([^=]+)===/g;
					let match;
					
					while ((match = regex.exec(text)) !== null) {
						const colorName = match[1];
						const content = match[2];
						const fullMatch = match[0];
						const from = match.index;
						const to = match.index + fullMatch.length;
						
						console.log(`Found custom syntax: ${fullMatch} at ${from}-${to}`);
						
						const color = plugin.settings.colors.find(c => c.name === colorName);
						
						if (color && color.enabled) {
							// カーソルがハイライト範囲内にあるか、または選択範囲がハイライトと重複するかチェック
							const cursorInRange = cursorPos >= from && cursorPos <= to;
							
							// ドラッグ中は選択範囲の重複判定を無効にする
							const selectionOverlaps = hasSelection && !isDragging && !(selectionTo <= from || selectionFrom >= to);
							
							// ドラッグ中は構文表示を完全に無効にする
							const shouldShowSyntax = !isDragging && (cursorInRange || selectionOverlaps);
							
							console.log(`Range ${from}-${to}: cursor=${cursorPos}, selection=${selectionFrom}-${selectionTo}, cursorInRange=${cursorInRange}, selectionOverlaps=${selectionOverlaps}, shouldShowSyntax=${shouldShowSyntax}, isDragging=${isDragging}`);
							
							if (shouldShowSyntax) {
								// カーソルが範囲内または選択範囲が重複する場合：構文全体を表示しつつハイライト効果も適用
								console.log(`Cursor in range or selection overlaps ${from}-${to}, showing syntax with highlight`);
								
								// 構文全体にハイライト効果を適用
								builder.add(from, to, Decoration.mark({
									class: `better-highlight-${color.id}`,
								}));
							} else {
								// カーソルが範囲外かつ選択範囲が重複しない場合：マークアップを隠してコンテンツのみ表示
								console.log(`Cursor outside range and no selection overlap ${from}-${to}, hiding markup`);
								
								// 開始マークアップの位置を計算
								const openMarkupStart = from;
								const openMarkupEnd = from + `===(${colorName})`.length;
								
								// コンテンツの位置を計算
								const contentStart = openMarkupEnd;
								const contentEnd = to - 3; // "===" の長さ分
								
								// 終了マークアップの位置を計算
								const closeMarkupStart = contentEnd;
								const closeMarkupEnd = to;
								
								// 開始マークアップを隠す
								builder.add(openMarkupStart, openMarkupEnd, Decoration.replace({}));
								
								// コンテンツ部分にハイライト効果を適用
								builder.add(contentStart, contentEnd, Decoration.mark({
									class: `better-highlight-${color.id}`,
								}));
								
								// 終了マークアップを隠す
								builder.add(closeMarkupStart, closeMarkupEnd, Decoration.replace({}));
							}
							
							console.log(`Applied decorations for ${colorName}`);
						}
					}
					
					return builder.finish();
				}
			}, {
				decorations: (plugin) => plugin.decorations
			})
		];
	}

	getColorDisplayName(color: HighlightColor): string {
		// 色の名前を各言語で翻訳
		const colorNames: Record<string, Record<string, string>> = {
			yellow: { en: 'Yellow', ja: '黄色', 'zh-cn': '黄色', 'zh-tw': '黃色', ko: '노란색', de: 'Gelb', fr: 'Jaune', es: 'Amarillo', it: 'Giallo', ru: 'Жёлтый' },
			blue: { en: 'Blue', ja: '青', 'zh-cn': '蓝色', 'zh-tw': '藍色', ko: '파란색', de: 'Blau', fr: 'Bleu', es: 'Azul', it: 'Blu', ru: 'Синий' },
			green: { en: 'Green', ja: '緑', 'zh-cn': '绿色', 'zh-tw': '綠色', ko: '초록색', de: 'Grün', fr: 'Vert', es: 'Verde', it: 'Verde', ru: 'Зелёный' },
			red: { en: 'Red', ja: '赤', 'zh-cn': '红色', 'zh-tw': '紅色', ko: '빨간색', de: 'Rot', fr: 'Rouge', es: 'Rojo', it: 'Rosso', ru: 'Красный' },
			purple: { en: 'Purple', ja: '紫', 'zh-cn': '紫色', 'zh-tw': '紫色', ko: '보라색', de: 'Lila', fr: 'Violet', es: 'Morado', it: 'Viola', ru: 'Фиолетовый' }
		};

		const currentLang = this.i18n.getCurrentLanguage();
		const translatedName = colorNames[color.name]?.[currentLang];
		
		return translatedName || color.displayName || color.name;
	}
}

/**
 * 設定タブ
 */
class BetterHighlightSettingTab extends PluginSettingTab {
	plugin: BetterHighlightPlugin;

	constructor(app: App, plugin: BetterHighlightPlugin) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const { containerEl } = this;
		containerEl.empty();

		// Documentation
		new Setting(containerEl)
			.setName(this.plugin.i18n.t('documentation'))
			.setDesc(this.plugin.i18n.t('documentationDesc'))
			.addButton(button => button
				.setButtonText(this.plugin.i18n.t('openReadme'))
				.onClick(() => {
					window.open('https://github.com/edacchi-chonmage/better-highlight#better-highlight-plugin-for-obsidian', '_blank');
				}));

		// 色追加ボタン
		new Setting(containerEl)
			.setName(this.plugin.i18n.t('addColorButton'))
			.setDesc(this.plugin.i18n.t('addColorDesc'))
			.addButton(button => button
				.setButtonText(this.plugin.i18n.t('addColorButton'))
				.setCta()
				.onClick(async () => {
					const newId = `color-${Date.now()}`;
					const newColor = {
						id: newId,
						name: `color${this.plugin.settings.colors.length + 1}`,
						displayName: `Color ${this.plugin.settings.colors.length + 1}`,
						color: '#ff9800',
						enabled: true
					};
					this.plugin.settings.colors.push(newColor);
					await this.plugin.saveSettings();
					this.display();
				}));

		// Colors section header
		if (this.plugin.settings.colors.length > 0) {
			containerEl.createEl('h3', { text: this.plugin.i18n.t('colorsSection') });
		}

		// 各色の設定
		this.plugin.settings.colors.forEach((color, index) => {
			// Color group header
			const headerEl = containerEl.createEl('h4', { text: `${this.plugin.getColorDisplayName(color)}` });
			headerEl.setAttribute('data-color-index', index.toString()); // ヘッダーを識別するためのID
			
			// Enable/Disable toggle
			new Setting(containerEl)
				.setName(this.plugin.i18n.t('enableHighlight'))
				.setDesc(this.plugin.i18n.t('enableHighlightDesc', { color: this.plugin.getColorDisplayName(color) }))
				.addToggle(toggle => toggle
					.setValue(color.enabled)
					.onChange(async (value) => {
						this.plugin.settings.colors[index].enabled = value;
						await this.plugin.saveSettings();
						this.display(); // Need to refresh to show/hide sub-settings
					}))
				.addButton(button => button
					.setButtonText(this.plugin.i18n.t('remove'))
					.setWarning()
					.onClick(async () => {
						// 確認ダイアログを表示
						const confirmed = confirm(this.plugin.i18n.t('removeConfirm', { colorName: this.plugin.getColorDisplayName(color) }));
						if (confirmed) {
							this.plugin.settings.colors.splice(index, 1);
							await this.plugin.saveSettings();
							this.display();
						}
					}));

			if (color.enabled) {
				// Color name
				new Setting(containerEl)
					.setName(this.plugin.i18n.t('colorName'))
					.setDesc(this.plugin.i18n.t('colorNameDescNew'))
					.addText(text => text
						.setPlaceholder('blue')
						.setValue(color.name)
						.onChange(async (value) => {
							this.plugin.settings.colors[index].name = value;
							await this.plugin.saveSettings();
						}));

				// Display name
				new Setting(containerEl)
					.setName(this.plugin.i18n.t('displayName'))
					.setDesc(this.plugin.i18n.t('displayNameDescNew'))
					.addText(text => text
						.setPlaceholder('Blue')
						.setValue(color.displayName)
						.onChange(async (value) => {
							this.plugin.settings.colors[index].displayName = value;
							await this.plugin.saveSettings();
							
							// ヘッダーのテキストのみを更新（フォーカスを保持）
							const headerToUpdate = containerEl.querySelector(`h4[data-color-index="${index}"]`) as HTMLElement;
							if (headerToUpdate) {
								headerToUpdate.textContent = this.plugin.getColorDisplayName(this.plugin.settings.colors[index]);
							}
						}));

				// Color picker
				new Setting(containerEl)
					.setName(this.plugin.i18n.t('color'))
					.setDesc(this.plugin.i18n.t('colorDescNew'))
					.addColorPicker(colorPicker => colorPicker
						.setValue(color.color)
						.onChange(async (value) => {
							this.plugin.settings.colors[index].color = value;
							await this.plugin.saveSettings();
						}));
			}
			
			// Add separator between colors (except for the last one)
			if (index < this.plugin.settings.colors.length - 1) {
				containerEl.createEl('hr', { attr: { style: 'margin: 24px 0 16px 0; border: none; border-top: 1px solid var(--background-modifier-border);' } });
			}
		});

		// Support section
		containerEl.createEl('h3', { text: this.plugin.i18n.t('supportSection') });
		
		const supportSetting = new Setting(containerEl)
			.setDesc(this.plugin.i18n.t('buyMeACoffeeDesc'));
		
		// Buy me a coffeeボタンを追加
		const supportContainer = supportSetting.controlEl.createDiv();
		const link = supportContainer.createEl('a', {
			href: 'https://www.buymeacoffee.com/edacchi_chonmage'
		});
		link.style.display = 'inline-block';
		const img = link.createEl('img', {
			attr: {
				src: 'https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png',
				alt: 'Buy Me A Coffee',
				style: 'height: 40px; width: auto; border-radius: 8px;'
			}
		});
		link.addEventListener('click', (e) => {
			e.preventDefault();
			window.open('https://www.buymeacoffee.com/edacchi_chonmage', '_blank');
		});
	}
} 