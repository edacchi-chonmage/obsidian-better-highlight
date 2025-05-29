import { LanguageStrings } from './types';

// 日本語翻訳
const ja: LanguageStrings = {
	// Plugin messages
	pluginLoaded: 'Better Highlight Plugin が読み込まれました！',
	pluginWorking: 'Better Highlight Plugin は正常に動作しています！',
	
	// Highlight actions
	highlightRemoved: 'ハイライトを削除しました',
	highlightRemovedCount: 'ハイライトを削除しました ({count}個)',
	customHighlightRemoved: 'カスタムハイライトを削除しました',
	noHighlightFound: '選択範囲にハイライトが見つかりませんでした',
	noHighlightAtCursor: 'カーソル位置にハイライトが見つかりませんでした',
	
	// Settings UI
	settingsTitle: 'Better Highlight Settings',
	addColorButton: '+ 色を追加',
	addColorDesc: 'カスタムハイライト色を追加します',
	usageTitle: '使用方法：',
	usageCustom: 'カスタムハイライト：<code>===(colorname)テキスト===</code>',
	usageNormal: '通常のハイライト：<code>==テキスト==</code>',
	hotkeyTitle: 'ホットキー：',
	hotkeyDesc: '設定 → ホットキー → "Better Highlight" で各色のショートカットを設定できます',
	
	// Color settings
	enabledLabel: '有効',
	enabledDesc: 'この色を使用可能にする',
	colorNameLabel: '色名',
	colorNameDesc: '===(colorname)text=== で使用する名前',
	displayNameLabel: '表示名',
	displayNameDesc: '設定画面で表示される名前',
	colorPickerLabel: 'ハイライト色',
	colorPickerDesc: 'ハイライトの背景色を選択',
	deleteColorTooltip: 'この色を削除',
	previewText: 'サンプルテキスト',
	
	// Commands
	testCommand: 'プラグインテスト（動作確認用）',
	createDefaultHighlight: 'デフォルトハイライトを作成',
	removeHighlight: 'ハイライトを削除',
	createColorHighlight: '{color}ハイライトを作成'
};

// 英語翻訳
const en: LanguageStrings = {
	// Plugin messages
	pluginLoaded: 'Better Highlight Plugin loaded successfully!',
	pluginWorking: 'Better Highlight Plugin is working properly!',
	
	// Highlight actions
	highlightRemoved: 'Highlight removed',
	highlightRemovedCount: 'Highlights removed ({count} items)',
	customHighlightRemoved: 'Custom highlight removed',
	noHighlightFound: 'No highlights found in selection',
	noHighlightAtCursor: 'No highlight found at cursor position',
	
	// Settings UI
	settingsTitle: 'Better Highlight Settings',
	addColorButton: '+ Add Color',
	addColorDesc: 'Add a custom highlight color',
	usageTitle: 'Usage:',
	usageCustom: 'Custom highlight: <code>===(colorname)text===</code>',
	usageNormal: 'Normal highlight: <code>==text==</code>',
	hotkeyTitle: 'Hotkeys:',
	hotkeyDesc: 'Go to Settings → Hotkeys → "Better Highlight" to set shortcuts for each color',
	
	// Color settings
	enabledLabel: 'Enabled',
	enabledDesc: 'Enable this color for use',
	colorNameLabel: 'Color Name',
	colorNameDesc: 'Name used in ===(colorname)text=== syntax',
	displayNameLabel: 'Display Name',
	displayNameDesc: 'Name shown in settings',
	colorPickerLabel: 'Highlight Color',
	colorPickerDesc: 'Select the background color for highlighting',
	deleteColorTooltip: 'Delete this color',
	previewText: 'Sample Text',
	
	// Commands
	testCommand: 'Test Plugin (Debug)',
	createDefaultHighlight: 'Create Default Highlight',
	removeHighlight: 'Remove Highlight',
	createColorHighlight: 'Create {color} Highlight'
};

// 中国語簡体字翻訳
const zhCN: LanguageStrings = {
	// Plugin messages
	pluginLoaded: 'Better Highlight 插件加载成功！',
	pluginWorking: 'Better Highlight 插件运行正常！',
	
	// Highlight actions
	highlightRemoved: '高亮已删除',
	highlightRemovedCount: '已删除高亮 ({count}个)',
	customHighlightRemoved: '自定义高亮已删除',
	noHighlightFound: '选择范围内未找到高亮',
	noHighlightAtCursor: '光标位置未找到高亮',
	
	// Settings UI
	settingsTitle: 'Better Highlight 设置',
	addColorButton: '+ 添加颜色',
	addColorDesc: '添加自定义高亮颜色',
	usageTitle: '使用方法：',
	usageCustom: '自定义高亮：<code>===(colorname)文本===</code>',
	usageNormal: '普通高亮：<code>==文本==</code>',
	hotkeyTitle: '快捷键：',
	hotkeyDesc: '前往 设置 → 快捷键 → "Better Highlight" 设置各颜色的快捷键',
	
	// Color settings
	enabledLabel: '启用',
	enabledDesc: '启用此颜色',
	colorNameLabel: '颜色名称',
	colorNameDesc: '在 ===(colorname)text=== 语法中使用的名称',
	displayNameLabel: '显示名称',
	displayNameDesc: '在设置中显示的名称',
	colorPickerLabel: '高亮颜色',
	colorPickerDesc: '选择高亮的背景颜色',
	deleteColorTooltip: '删除此颜色',
	previewText: '示例文本',
	
	// Commands
	testCommand: '测试插件（调试）',
	createDefaultHighlight: '创建默认高亮',
	removeHighlight: '删除高亮',
	createColorHighlight: '创建{color}高亮'
};

// 中国语繁体字翻訳
const zhTW: LanguageStrings = {
	// Plugin messages
	pluginLoaded: 'Better Highlight 外掛載入成功！',
	pluginWorking: 'Better Highlight 外掛運行正常！',
	
	// Highlight actions
	highlightRemoved: '螢光筆已刪除',
	highlightRemovedCount: '已刪除螢光筆 ({count}個)',
	customHighlightRemoved: '自訂螢光筆已刪除',
	noHighlightFound: '選擇範圍內未找到螢光筆',
	noHighlightAtCursor: '游標位置未找到螢光筆',
	
	// Settings UI
	settingsTitle: 'Better Highlight 設定',
	addColorButton: '+ 新增顏色',
	addColorDesc: '新增自訂螢光筆顏色',
	usageTitle: '使用方法：',
	usageCustom: '自訂螢光筆：<code>===(colorname)文字===</code>',
	usageNormal: '普通螢光筆：<code>==文字==</code>',
	hotkeyTitle: '快速鍵：',
	hotkeyDesc: '前往 設定 → 快速鍵 → "Better Highlight" 設定各顏色的快速鍵',
	
	// Color settings
	enabledLabel: '啟用',
	enabledDesc: '啟用此顏色',
	colorNameLabel: '顏色名稱',
	colorNameDesc: '在 ===(colorname)text=== 語法中使用的名稱',
	displayNameLabel: '顯示名稱',
	displayNameDesc: '在設定中顯示的名稱',
	colorPickerLabel: '螢光筆顏色',
	colorPickerDesc: '選擇螢光筆的背景顏色',
	deleteColorTooltip: '刪除此顏色',
	previewText: '範例文字',
	
	// Commands
	testCommand: '測試外掛（除錯）',
	createDefaultHighlight: '建立預設螢光筆',
	removeHighlight: '刪除螢光筆',
	createColorHighlight: '建立{color}螢光筆'
};

// 韓国語翻訳
const ko: LanguageStrings = {
	// Plugin messages
	pluginLoaded: 'Better Highlight 플러그인이 로드되었습니다!',
	pluginWorking: 'Better Highlight 플러그인이 정상적으로 작동하고 있습니다!',
	
	// Highlight actions
	highlightRemoved: '하이라이트가 삭제되었습니다',
	highlightRemovedCount: '하이라이트가 삭제되었습니다 ({count}개)',
	customHighlightRemoved: '사용자 정의 하이라이트가 삭제되었습니다',
	noHighlightFound: '선택 범위에서 하이라이트를 찾을 수 없습니다',
	noHighlightAtCursor: '커서 위치에서 하이라이트를 찾을 수 없습니다',
	
	// Settings UI
	settingsTitle: 'Better Highlight 설정',
	addColorButton: '+ 색상 추가',
	addColorDesc: '사용자 정의 하이라이트 색상을 추가합니다',
	usageTitle: '사용법:',
	usageCustom: '사용자 정의 하이라이트: <code>===(colorname)텍스트===</code>',
	usageNormal: '일반 하이라이트: <code>==텍스트==</code>',
	hotkeyTitle: '단축키:',
	hotkeyDesc: '설정 → 단축키 → "Better Highlight"에서 각 색상의 단축키를 설정할 수 있습니다',
	
	// Color settings
	enabledLabel: '활성화',
	enabledDesc: '이 색상을 사용 가능하게 합니다',
	colorNameLabel: '색상 이름',
	colorNameDesc: '===(colorname)text=== 구문에서 사용되는 이름',
	displayNameLabel: '표시 이름',
	displayNameDesc: '설정에서 표시되는 이름',
	colorPickerLabel: '하이라이트 색상',
	colorPickerDesc: '하이라이트의 배경 색상을 선택합니다',
	deleteColorTooltip: '이 색상을 삭제합니다',
	previewText: '샘플 텍스트',
	
	// Commands
	testCommand: '플러그인 테스트 (디버그)',
	createDefaultHighlight: '기본 하이라이트 생성',
	removeHighlight: '하이라이트 제거',
	createColorHighlight: '{color} 하이라이트 생성'
};

// ドイツ語翻訳
const de: LanguageStrings = {
	// Plugin messages
	pluginLoaded: 'Better Highlight Plugin erfolgreich geladen!',
	pluginWorking: 'Better Highlight Plugin funktioniert ordnungsgemäß!',
	
	// Highlight actions
	highlightRemoved: 'Markierung entfernt',
	highlightRemovedCount: 'Markierungen entfernt ({count} Elemente)',
	customHighlightRemoved: 'Benutzerdefinierte Markierung entfernt',
	noHighlightFound: 'Keine Markierungen in der Auswahl gefunden',
	noHighlightAtCursor: 'Keine Markierung an der Cursor-Position gefunden',
	
	// Settings UI
	settingsTitle: 'Better Highlight Einstellungen',
	addColorButton: '+ Farbe hinzufügen',
	addColorDesc: 'Eine benutzerdefinierte Markierungsfarbe hinzufügen',
	usageTitle: 'Verwendung:',
	usageCustom: 'Benutzerdefinierte Markierung: <code>===(colorname)text===</code>',
	usageNormal: 'Normale Markierung: <code>==text==</code>',
	hotkeyTitle: 'Tastenkürzel:',
	hotkeyDesc: 'Gehen Sie zu Einstellungen → Tastenkürzel → "Better Highlight", um Tastenkürzel für jede Farbe zu setzen',
	
	// Color settings
	enabledLabel: 'Aktiviert',
	enabledDesc: 'Diese Farbe zur Verwendung aktivieren',
	colorNameLabel: 'Farbname',
	colorNameDesc: 'Name, der in der ===(colorname)text=== Syntax verwendet wird',
	displayNameLabel: 'Anzeigename',
	displayNameDesc: 'In den Einstellungen angezeigter Name',
	colorPickerLabel: 'Markierungsfarbe',
	colorPickerDesc: 'Hintergrundfarbe für die Markierung auswählen',
	deleteColorTooltip: 'Diese Farbe löschen',
	previewText: 'Beispieltext',
	
	// Commands
	testCommand: 'Plugin testen (Debug)',
	createDefaultHighlight: 'Standard-Markierung erstellen',
	removeHighlight: 'Markierung entfernen',
	createColorHighlight: '{color} Markierung erstellen'
};

// フランス語翻訳
const fr: LanguageStrings = {
	// Plugin messages
	pluginLoaded: 'Plugin Better Highlight chargé avec succès !',
	pluginWorking: 'Le plugin Better Highlight fonctionne correctement !',
	
	// Highlight actions
	highlightRemoved: 'Surlignage supprimé',
	highlightRemovedCount: 'Surlignages supprimés ({count} éléments)',
	customHighlightRemoved: 'Surlignage personnalisé supprimé',
	noHighlightFound: 'Aucun surlignage trouvé dans la sélection',
	noHighlightAtCursor: 'Aucun surlignage trouvé à la position du curseur',
	
	// Settings UI
	settingsTitle: 'Paramètres Better Highlight',
	addColorButton: '+ Ajouter une couleur',
	addColorDesc: 'Ajouter une couleur de surlignage personnalisée',
	usageTitle: 'Utilisation :',
	usageCustom: 'Surlignage personnalisé : <code>===(colorname)texte===</code>',
	usageNormal: 'Surlignage normal : <code>==texte==</code>',
	hotkeyTitle: 'Raccourcis clavier :',
	hotkeyDesc: 'Allez dans Paramètres → Raccourcis clavier → "Better Highlight" pour définir des raccourcis pour chaque couleur',
	
	// Color settings
	enabledLabel: 'Activé',
	enabledDesc: 'Activer cette couleur pour utilisation',
	colorNameLabel: 'Nom de la couleur',
	colorNameDesc: 'Nom utilisé dans la syntaxe ===(colorname)text===',
	displayNameLabel: 'Nom d\'affichage',
	displayNameDesc: 'Nom affiché dans les paramètres',
	colorPickerLabel: 'Couleur de surlignage',
	colorPickerDesc: 'Sélectionnez la couleur d\'arrière-plan pour le surlignage',
	deleteColorTooltip: 'Supprimer cette couleur',
	previewText: 'Texte d\'exemple',
	
	// Commands
	testCommand: 'Tester le plugin (Debug)',
	createDefaultHighlight: 'Créer un surlignage par défaut',
	removeHighlight: 'Supprimer le surlignage',
	createColorHighlight: 'Créer un surlignage {color}'
};

// スペイン語翻訳
const es: LanguageStrings = {
	// Plugin messages
	pluginLoaded: '¡Plugin Better Highlight cargado exitosamente!',
	pluginWorking: '¡El plugin Better Highlight está funcionando correctamente!',
	
	// Highlight actions
	highlightRemoved: 'Resaltado eliminado',
	highlightRemovedCount: 'Resaltados eliminados ({count} elementos)',
	customHighlightRemoved: 'Resaltado personalizado eliminado',
	noHighlightFound: 'No se encontraron resaltados en la selección',
	noHighlightAtCursor: 'No se encontró resaltado en la posición del cursor',
	
	// Settings UI
	settingsTitle: 'Configuración de Better Highlight',
	addColorButton: '+ Añadir color',
	addColorDesc: 'Añadir un color de resaltado personalizado',
	usageTitle: 'Uso:',
	usageCustom: 'Resaltado personalizado: <code>===(colorname)texto===</code>',
	usageNormal: 'Resaltado normal: <code>==texto==</code>',
	hotkeyTitle: 'Atajos de teclado:',
	hotkeyDesc: 'Ve a Configuración → Atajos de teclado → "Better Highlight" para establecer atajos para cada color',
	
	// Color settings
	enabledLabel: 'Habilitado',
	enabledDesc: 'Habilitar este color para uso',
	colorNameLabel: 'Nombre del color',
	colorNameDesc: 'Nombre usado en la sintaxis ===(colorname)text===',
	displayNameLabel: 'Nombre de visualización',
	displayNameDesc: 'Nombre mostrado en la configuración',
	colorPickerLabel: 'Color de resaltado',
	colorPickerDesc: 'Selecciona el color de fondo para el resaltado',
	deleteColorTooltip: 'Eliminar este color',
	previewText: 'Texto de ejemplo',
	
	// Commands
	testCommand: 'Probar plugin (Debug)',
	createDefaultHighlight: 'Crear resaltado por defecto',
	removeHighlight: 'Eliminar resaltado',
	createColorHighlight: 'Crear resaltado {color}'
};

// イタリア語翻訳
const it: LanguageStrings = {
	// Plugin messages
	pluginLoaded: 'Plugin Better Highlight caricato con successo!',
	pluginWorking: 'Il plugin Better Highlight sta funzionando correttamente!',
	
	// Highlight actions
	highlightRemoved: 'Evidenziazione rimossa',
	highlightRemovedCount: 'Evidenziazioni rimosse ({count} elementi)',
	customHighlightRemoved: 'Evidenziazione personalizzata rimossa',
	noHighlightFound: 'Nessuna evidenziazione trovata nella selezione',
	noHighlightAtCursor: 'Nessuna evidenziazione trovata alla posizione del cursore',
	
	// Settings UI
	settingsTitle: 'Impostazioni Better Highlight',
	addColorButton: '+ Aggiungi colore',
	addColorDesc: 'Aggiungi un colore di evidenziazione personalizzato',
	usageTitle: 'Utilizzo:',
	usageCustom: 'Evidenziazione personalizzata: <code>===(colorname)testo===</code>',
	usageNormal: 'Evidenziazione normale: <code>==testo==</code>',
	hotkeyTitle: 'Scorciatoie da tastiera:',
	hotkeyDesc: 'Vai su Impostazioni → Scorciatoie da tastiera → "Better Highlight" per impostare scorciatoie per ogni colore',
	
	// Color settings
	enabledLabel: 'Abilitato',
	enabledDesc: 'Abilita questo colore per l\'uso',
	colorNameLabel: 'Nome del colore',
	colorNameDesc: 'Nome usato nella sintassi ===(colorname)text===',
	displayNameLabel: 'Nome di visualizzazione',
	displayNameDesc: 'Nome mostrato nelle impostazioni',
	colorPickerLabel: 'Colore di evidenziazione',
	colorPickerDesc: 'Seleziona il colore di sfondo per l\'evidenziazione',
	deleteColorTooltip: 'Elimina questo colore',
	previewText: 'Testo di esempio',
	
	// Commands
	testCommand: 'Testa plugin (Debug)',
	createDefaultHighlight: 'Crea evidenziazione predefinita',
	removeHighlight: 'Rimuovi evidenziazione',
	createColorHighlight: 'Crea evidenziazione {color}'
};

// ロシア語翻訳
const ru: LanguageStrings = {
	// Plugin messages
	pluginLoaded: 'Плагин Better Highlight успешно загружен!',
	pluginWorking: 'Плагин Better Highlight работает корректно!',
	
	// Highlight actions
	highlightRemoved: 'Выделение удалено',
	highlightRemovedCount: 'Выделений удалено ({count} элементов)',
	customHighlightRemoved: 'Пользовательское выделение удалено',
	noHighlightFound: 'Выделения в выбранной области не найдены',
	noHighlightAtCursor: 'Выделение в позиции курсора не найдено',
	
	// Settings UI
	settingsTitle: 'Настройки Better Highlight',
	addColorButton: '+ Добавить цвет',
	addColorDesc: 'Добавить пользовательский цвет выделения',
	usageTitle: 'Использование:',
	usageCustom: 'Пользовательское выделение: <code>===(colorname)текст===</code>',
	usageNormal: 'Обычное выделение: <code>==текст==</code>',
	hotkeyTitle: 'Горячие клавиши:',
	hotkeyDesc: 'Перейдите в Настройки → Горячие клавиши → "Better Highlight" для настройки горячих клавиш для каждого цвета',
	
	// Color settings
	enabledLabel: 'Включено',
	enabledDesc: 'Включить этот цвет для использования',
	colorNameLabel: 'Название цвета',
	colorNameDesc: 'Имя, используемое в синтаксисе ===(colorname)text===',
	displayNameLabel: 'Отображаемое имя',
	displayNameDesc: 'Имя, показываемое в настройках',
	colorPickerLabel: 'Цвет выделения',
	colorPickerDesc: 'Выберите цвет фона для выделения',
	deleteColorTooltip: 'Удалить этот цвет',
	previewText: 'Пример текста',
	
	// Commands
	testCommand: 'Тест плагина (Отладка)',
	createDefaultHighlight: 'Создать выделение по умолчанию',
	removeHighlight: 'Удалить выделение',
	createColorHighlight: 'Создать выделение {color}'
};

// 言語データのマップ
const languages: Record<string, LanguageStrings> = {
	en, ja, 'zh-cn': zhCN, 'zh-tw': zhTW, ko, de, fr, es, it, ru
};

/**
 * 翻訳クラス
 */
export class I18n {
	private currentLanguage: string = 'en';
	
	constructor() {
		this.setLanguage();
	}
	
	/**
	 * 言語を自動設定
	 */
	setLanguage() {
		// Obsidianの言語設定を取得
		const obsidianLang = (window as any).moment?.locale?.() || 'en';
		
		// 言語マッピング
		if (obsidianLang.startsWith('ja')) {
			this.currentLanguage = 'ja';
		} else if (obsidianLang.startsWith('zh-cn') || obsidianLang.startsWith('zh_CN')) {
			this.currentLanguage = 'zh-cn';
		} else if (obsidianLang.startsWith('zh-tw') || obsidianLang.startsWith('zh_TW')) {
			this.currentLanguage = 'zh-tw';
		} else if (obsidianLang.startsWith('ko')) {
			this.currentLanguage = 'ko';
		} else if (obsidianLang.startsWith('de')) {
			this.currentLanguage = 'de';
		} else if (obsidianLang.startsWith('fr')) {
			this.currentLanguage = 'fr';
		} else if (obsidianLang.startsWith('es')) {
			this.currentLanguage = 'es';
		} else if (obsidianLang.startsWith('it')) {
			this.currentLanguage = 'it';
		} else if (obsidianLang.startsWith('ru')) {
			this.currentLanguage = 'ru';
		} else {
			this.currentLanguage = 'en'; // デフォルト
		}
		
		console.log(`Better Highlight: Language auto-detected as ${this.currentLanguage} (from ${obsidianLang})`);
	}
	
	/**
	 * 翻訳を取得
	 */
	t(key: keyof LanguageStrings, params?: Record<string, string | number>): string {
		const strings = languages[this.currentLanguage] || languages.en;
		let text = strings[key] || languages.en[key] || key;
		
		// パラメータ置換
		if (params) {
			Object.entries(params).forEach(([param, value]) => {
				text = text.replace(`{${param}}`, String(value));
			});
		}
		
		return text;
	}
	
	/**
	 * 現在の言語を取得
	 */
	getCurrentLanguage(): string {
		return this.currentLanguage;
	}
} 