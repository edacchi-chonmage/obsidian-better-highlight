import { Plugin, PluginSettingTab, Setting, App, Editor, MarkdownView, Modifier, Notice } from 'obsidian';
import { BetterHighlightSettings, HighlightColor, DEFAULT_SETTINGS } from './types';
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
 */
export default class BetterHighlightPlugin extends Plugin {
	settings!: BetterHighlightSettings;

	async onload() {
		console.log('Better Highlight Plugin loading...');
		
		// プラグイン読み込み確認用のアラート
		new Notice('Better Highlight Plugin が読み込まれました！');
		
		// 設定の読み込み
		await this.loadSettings();

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
	}

	private registerCommands() {
		// テスト用コマンド（デバッグ用）
		this.addCommand({
			id: 'test-plugin',
			name: 'プラグインテスト（動作確認用）',
			callback: () => {
				new Notice('Better Highlight Plugin は正常に動作しています！');
				console.log('Plugin test command executed');
				console.log('Current settings:', this.settings);
			}
		});

		// 基本的なハイライトコマンド
		this.addCommand({
			id: 'create-default-highlight',
			name: 'デフォルトハイライトを作成',
			editorCallback: (editor) => {
				this.createHighlight(editor);
			}
		});

		// ハイライト削除コマンド
		this.addCommand({
			id: 'remove-highlight',
			name: 'ハイライトを削除',
			editorCallback: (editor) => {
				this.removeHighlight(editor);
			}
		});

		// 各色のハイライトコマンド
		this.settings.colors.forEach((color) => {
			if (color.enabled) {
				this.addCommand({
					id: `highlight-${color.id}`,
					name: `${color.displayName}ハイライトを作成`,
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
		// カスタムハイライト構文を削除: ===(colorname)content=== -> content
		let cleaned = selection.replace(/===\([^)]+\)([^=]+)===/g, '$1');
		
		// 通常のハイライト構文を削除: ==content== -> content
		cleaned = cleaned.replace(/==([^=]+)==/g, '$1');

		if (cleaned !== selection) {
			editor.replaceSelection(cleaned);
			new Notice('ハイライトを削除しました');
		} else {
			new Notice('選択範囲にハイライトが見つかりませんでした');
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
				
				new Notice('カスタムハイライトを削除しました');
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
					
					new Notice('ハイライトを削除しました');
					foundHighlight = true;
					break;
				}
			}
		}

		if (!foundHighlight) {
			new Notice('カーソル位置にハイライトが見つかりませんでした');
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

/* カスタムカラーハイライト */
.better-highlight-processed {
	font-style: normal !important;
	font-weight: normal !important;
}

`;

		// 各色のCSSルールを生成
		this.settings.colors.forEach((color) => {
			if (color.enabled) {
				css += `
.better-highlight-${color.id} {
	background-color: ${color.color} !important;
	color: ${this.getContrastColor(color.color)} !important;
	padding: 1px 2px !important;
	border-radius: 2px !important;
	display: inline !important;
	font-style: normal !important;
	font-weight: normal !important;
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
				return `<span style="background-color: #ffeb3b; color: #000000; padding: 1px 2px; border-radius: 2px;">${content}</span>`;
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
				return `<span style="background-color: #ffeb3b; color: #000000; padding: 1px 2px; border-radius: 2px;">${content}</span>`;
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

	private getContrastColor(hexColor: string): string {
		// 簡単なコントラスト計算
		const r = parseInt(hexColor.slice(1, 3), 16);
		const g = parseInt(hexColor.slice(3, 5), 16);
		const b = parseInt(hexColor.slice(5, 7), 16);
		const brightness = (r * 299 + g * 587 + b * 114) / 1000;
		
		return brightness > 128 ? '#000000' : '#ffffff';
	}

	private createEditorExtension(): Extension {
		const plugin = this;
		return ViewPlugin.fromClass(class implements PluginValue {
			decorations: DecorationSet;

			constructor(view: EditorView) {
				this.decorations = this.buildDecorations(view);
			}

			update(update: ViewUpdate) {
				if (update.docChanged || update.viewportChanged) {
					this.decorations = this.buildDecorations(update.view);
				}
			}

			buildDecorations(view: EditorView): DecorationSet {
				const builder = new RangeSetBuilder<Decoration>();
				const text = view.state.doc.toString();
				
				console.log('🔍 Building decorations for editor text');
				
				// カスタムハイライト構文を検索
				const regex = /===\(([^)]+)\)([^=]+)===/g;
				let match;
				
				while ((match = regex.exec(text)) !== null) {
					const colorName = match[1];
					const content = match[2];
					const from = match.index;
					const to = match.index + match[0].length;
					
					console.log(`Found custom syntax in editor: ${match[0]}, color: ${colorName}, content: ${content}`);
					
					const color = plugin.settings.colors.find(c => c.name === colorName);
					
					if (color && color.enabled) {
						console.log(`Creating decoration for ${colorName} at ${from}-${to}`);
						
						// カスタムWidget型を作成
						class HighlightWidget extends WidgetType {
							constructor(private content: string, private className: string) {
								super();
							}
							
							toDOM() {
								const span = document.createElement('span');
								span.textContent = this.content;
								span.className = this.className;
								return span;
							}
						}
						
						// 元の構文を完全に置換
						const replacement = Decoration.replace({
							widget: new HighlightWidget(content, `better-highlight-${color.id} better-highlight-processed`)
						});
						
						builder.add(from, to, replacement);
					}
				}
				
				return builder.finish();
			}
		}, {
			decorations: (plugin) => plugin.decorations
		});
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

		containerEl.createEl('h2', { text: 'Better Highlight Settings' });
		
		// 使用方法の説明
		const descEl = containerEl.createDiv('setting-item-description');
		descEl.innerHTML = `
			<p><strong>使用方法：</strong></p>
			<ul>
				<li>カスタムハイライト：<code>===(colorname)テキスト===</code></li>
				<li>通常のハイライト：<code>==テキスト==</code></li>
			</ul>
			<p><strong>ホットキー：</strong> 設定 → ホットキー → "Better Highlight" で各色のショートカットを設定できます</p>
		`;

		// 各色の設定
		this.plugin.settings.colors.forEach((color, index) => {
			const colorDiv = containerEl.createDiv('better-highlight-color-setting');
			
			colorDiv.createEl('h3', { text: `Color: ${color.displayName}` });

			// 有効/無効
			new Setting(colorDiv)
				.setName('有効')
				.setDesc('この色を使用可能にする')
				.addToggle(toggle => toggle
					.setValue(color.enabled)
					.onChange(async (value) => {
						this.plugin.settings.colors[index].enabled = value;
						await this.plugin.saveSettings();
						this.display(); // 再描画
					}));

			if (color.enabled) {
				// 色名
				new Setting(colorDiv)
					.setName('色名')
					.setDesc('===(colorname)text=== で使用する名前')
					.addText(text => text
						.setPlaceholder('blue')
						.setValue(color.name)
						.onChange(async (value) => {
							this.plugin.settings.colors[index].name = value;
							await this.plugin.saveSettings();
						}));

				// 表示名
				new Setting(colorDiv)
					.setName('表示名')
					.setDesc('設定画面で表示される名前')
					.addText(text => text
						.setPlaceholder('青')
						.setValue(color.displayName)
						.onChange(async (value) => {
							this.plugin.settings.colors[index].displayName = value;
							await this.plugin.saveSettings();
						}));

				// カラーコード
				new Setting(colorDiv)
					.setName('カラーコード')
					.setDesc('ハイライトの背景色')
					.addText(text => text
						.setPlaceholder('#2196f3')
						.setValue(color.color)
						.onChange(async (value) => {
							this.plugin.settings.colors[index].color = value;
							await this.plugin.saveSettings();
						}));
			}
		});
	}
} 