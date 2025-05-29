import { Plugin, PluginSettingTab, Setting, App, Editor, MarkdownView, Modifier } from 'obsidian';
import { BetterHighlightSettings, HighlightColor, DEFAULT_SETTINGS } from './types';

/**
 * Better Highlight Plugin
 * 拡張Markdownハイライト機能
 * 
 * 機能:
 * - カスタム構文: ===(colorname)content===
 * - ユーザー定義カラー
 * - ホットキー対応
 */
export default class BetterHighlightPlugin extends Plugin {
	settings!: BetterHighlightSettings;

	async onload() {
		console.log('Better Highlight Plugin loading...');
		
		// 設定の読み込み
		await this.loadSettings();

		// CSSスタイルの追加
		this.addStyles();

		// コマンドとホットキーの登録
		this.registerCommands();

		// 設定タブの追加
		this.addSettingTab(new BetterHighlightSettingTab(this.app, this));

		console.log('Better Highlight Plugin loaded successfully!');
	}

	onunload() {
		console.log('Better Highlight Plugin unloading...');
	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
		this.addStyles(); // 設定変更時にスタイルを更新
	}

	private registerCommands() {
		// 基本的なハイライトコマンド
		this.addCommand({
			id: 'create-default-highlight',
			name: 'デフォルトハイライトを作成',
			editorCallback: (editor) => {
				this.createHighlight(editor);
			}
		});

		// 各色のハイライトコマンドとホットキー
		this.settings.colors.forEach((color) => {
			if (color.enabled) {
				const hotkeys = color.hotkey ? [this.parseHotkey(color.hotkey)] : [];
				this.addCommand({
					id: `highlight-${color.id}`,
					name: `${color.displayName}ハイライトを作成`,
					hotkeys: hotkeys,
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
`;

		// 各色のCSSルールを生成
		this.settings.colors.forEach((color) => {
			if (color.enabled) {
				css += `
.better-highlight-${color.id} {
	background-color: ${color.color};
	color: ${this.getContrastColor(color.color)};
	padding: 1px 2px;
	border-radius: 2px;
}
`;
			}
		});

		style.textContent = css;
		document.head.appendChild(style);

		// カスタム構文のレンダリング登録
		this.setupMarkdownPostProcessor();
	}

	private setupMarkdownPostProcessor() {
		this.registerMarkdownPostProcessor((element) => {
			// ===(colorname)content=== を検索して置換
			const walker = document.createTreeWalker(
				element,
				NodeFilter.SHOW_TEXT
			);

			const textNodes: Text[] = [];
			let node;
			while (node = walker.nextNode()) {
				textNodes.push(node as Text);
			}

			textNodes.forEach((textNode) => {
				const text = textNode.textContent || '';
				const regex = /===\(([^)]+)\)([^=]+)===/g;
				
				if (regex.test(text)) {
					const parent = textNode.parentNode;
					if (!parent) return;

					const fragment = document.createDocumentFragment();
					let lastIndex = 0;
					let match;
					
					regex.lastIndex = 0; // regexをリセット
					while ((match = regex.exec(text)) !== null) {
						// マッチ前のテキスト
						if (match.index > lastIndex) {
							fragment.appendChild(document.createTextNode(text.slice(lastIndex, match.index)));
						}

						// ハイライトスパン
						const colorName = match[1];
						const content = match[2];
						const color = this.settings.colors.find(c => c.name === colorName);
						
						const span = document.createElement('span');
						if (color && color.enabled) {
							span.className = `better-highlight-${color.id}`;
						} else {
							// 未定義の色の場合はデフォルトスタイル
							span.style.backgroundColor = '#ffeb3b';
						}
						span.textContent = content;
						fragment.appendChild(span);

						lastIndex = match.index + match[0].length;
					}

					// 残りのテキスト
					if (lastIndex < text.length) {
						fragment.appendChild(document.createTextNode(text.slice(lastIndex)));
					}

					parent.replaceChild(fragment, textNode);
				}
			});
		});
	}

	private parseHotkey(hotkey: string): { modifiers: Modifier[], key: string } {
		const parts = hotkey.split('+');
		const key = parts.pop() || '';
		const modifiers = parts.map(mod => mod.toLowerCase()) as Modifier[];
		
		return { modifiers, key };
	}

	private getContrastColor(hexColor: string): string {
		// 簡単なコントラスト計算
		const r = parseInt(hexColor.slice(1, 3), 16);
		const g = parseInt(hexColor.slice(3, 5), 16);
		const b = parseInt(hexColor.slice(5, 7), 16);
		const brightness = (r * 299 + g * 587 + b * 114) / 1000;
		
		return brightness > 128 ? '#000000' : '#ffffff';
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

				// ホットキー
				new Setting(colorDiv)
					.setName('ホットキー')
					.setDesc('このカラーのショートカット（例: Mod+Shift+B）')
					.addText(text => text
						.setPlaceholder('Mod+Shift+B')
						.setValue(color.hotkey || '')
						.onChange(async (value) => {
							this.plugin.settings.colors[index].hotkey = value;
							await this.plugin.saveSettings();
						}));
			}
		});
	}
} 