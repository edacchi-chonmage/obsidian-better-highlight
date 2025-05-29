import { Plugin } from 'obsidian';

/**
 * Better Highlight Plugin
 * Obsidianのハイライト機能を拡張するプラグイン
 */
export default class BetterHighlightPlugin extends Plugin {
	async onload() {
		console.log('Better Highlight Plugin loading...');
		
		// 基本的なハイライトコマンドを追加
		this.addCommand({
			id: 'create-highlight',
			name: 'ハイライトを作成',
			editorCallback: (editor) => {
				const selection = editor.getSelection();
				if (selection) {
					// 現在は簡単なMarkdownハイライト構文を適用
					editor.replaceSelection(`==${selection}==`);
				}
			}
		});

		console.log('Better Highlight Plugin loaded successfully!');
	}

	onunload() {
		console.log('Better Highlight Plugin unloading...');
	}
} 