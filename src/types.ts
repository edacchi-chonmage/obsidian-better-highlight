/**
 * ハイライトカラー設定
 */
export interface HighlightColor {
	id: string;
	name: string;
	displayName: string;
	color: string;
	enabled: boolean;
}

/**
 * プラグイン設定
 */
export interface BetterHighlightSettings {
	colors: HighlightColor[];
}

/**
 * 言語文字列のインターフェース
 */
export interface LanguageStrings {
	// Plugin messages
	pluginLoaded: string;
	pluginWorking: string;
	
	// Highlight actions
	highlightRemoved: string;
	highlightRemovedCount: string;
	customHighlightRemoved: string;
	noHighlightFound: string;
	noHighlightAtCursor: string;
	
	// Settings UI
	settingsTitle: string;
	addColorButton: string;
	addColorDesc: string;
	usageTitle: string;
	usageCustom: string;
	usageNormal: string;
	hotkeyTitle: string;
	hotkeyDesc: string;
	
	// Color settings
	enabledLabel: string;
	enabledDesc: string;
	colorNameLabel: string;
	colorNameDesc: string;
	displayNameLabel: string;
	displayNameDesc: string;
	colorPickerLabel: string;
	colorPickerDesc: string;
	deleteColorTooltip: string;
	previewText: string;
	
	// Commands
	createDefaultHighlight: string;
	removeHighlight: string;
	createColorHighlight: string;
	
	// Settings UI new
	documentation: string;
	documentationDesc: string;
	openReadme: string;
	colorsSection: string;
	enableHighlight: string;
	enableHighlightDesc: string;
	colorName: string;
	colorNameDescNew: string;
	displayName: string;
	displayNameDescNew: string;
	color: string;
	colorDescNew: string;
	remove: string;
	removeConfirm: string;
	supportSection: string;
	buyMeACoffee: string;
	buyMeACoffeeDesc: string;
}

/**
 * デフォルト設定
 */
export const DEFAULT_SETTINGS: BetterHighlightSettings = {
	colors: [
		{
			id: 'yellow',
			name: 'yellow',
			displayName: 'Yellow',
			color: '#ffeb3b',
			enabled: true
		},
		{
			id: 'blue',
			name: 'blue', 
			displayName: 'Blue',
			color: '#2196f3',
			enabled: true
		},
		{
			id: 'green',
			name: 'green',
			displayName: 'Green',
			color: '#4caf50',
			enabled: true
		},
		{
			id: 'red',
			name: 'red',
			displayName: 'Red',
			color: '#f44336',
			enabled: true
		},
		{
			id: 'purple',
			name: 'purple',
			displayName: 'Purple',
			color: '#9c27b0',
			enabled: true
		}
	]
}; 