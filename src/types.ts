/**
 * ハイライトカラー設定
 */
export interface HighlightColor {
	id: string;
	name: string;
	displayName: string;
	color: string;
	hotkey?: string;
	enabled: boolean;
}

/**
 * プラグイン設定
 */
export interface BetterHighlightSettings {
	colors: HighlightColor[];
	defaultColorId: string;
	enableLivePreview: boolean;
}

/**
 * デフォルト設定
 */
export const DEFAULT_SETTINGS: BetterHighlightSettings = {
	colors: [
		{
			id: 'yellow',
			name: 'yellow',
			displayName: '黄色',
			color: '#ffeb3b',
			hotkey: 'Mod+Shift+Y',
			enabled: true
		},
		{
			id: 'blue',
			name: 'blue', 
			displayName: '青',
			color: '#2196f3',
			hotkey: 'Mod+Shift+B',
			enabled: true
		},
		{
			id: 'green',
			name: 'green',
			displayName: '緑',
			color: '#4caf50',
			hotkey: 'Mod+Shift+G',
			enabled: true
		},
		{
			id: 'red',
			name: 'red',
			displayName: '赤',
			color: '#f44336',
			hotkey: 'Mod+Shift+R',
			enabled: true
		},
		{
			id: 'purple',
			name: 'purple',
			displayName: '紫',
			color: '#9c27b0',
			hotkey: 'Mod+Shift+P',
			enabled: true
		}
	],
	defaultColorId: 'yellow',
	enableLivePreview: true
}; 