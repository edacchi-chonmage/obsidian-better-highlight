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
	usageCustom: 'カスタムハイライト：<code>==(colorname)テキスト==</code>',
	usageNormal: '通常のハイライト：<code>==テキスト==</code>',
	hotkeyTitle: 'ホットキー：',
	hotkeyDesc: '設定 → ホットキー → "Better Highlight" で各色のショートカットを設定できます',
	
	// Color settings
	enabledLabel: '有効',
	enabledDesc: 'この色を使用可能にする',
	colorNameLabel: '色名',
	colorNameDesc: '==(colorname)text== で使用する名前',
	displayNameLabel: '表示名',
	displayNameDesc: '設定画面で表示される名前',
	colorPickerLabel: 'ハイライト色',
	colorPickerDesc: 'ハイライトの背景色を選択',
	deleteColorTooltip: 'この色を削除',
	previewText: 'サンプルテキスト',
	
	// Commands
	createDefaultHighlight: 'デフォルトハイライトを作成',
	removeHighlight: 'ハイライトを削除',
	createColorHighlight: '{color}ハイライトを作成',
	
	// Settings UI new
	documentation: 'ドキュメント',
	documentationDesc: '完全なドキュメントと使用例を表示',
	openReadme: 'READMEを開く',
	colorsSection: '色',
	enableHighlight: 'ハイライトを有効にする',
	enableHighlightDesc: '{color}ハイライトを有効または無効にします。',
	colorName: '色名',
	colorNameDescNew: 'Markdownシンタックスで使用される識別子 (例: \"blue\" で ==(blue)テキスト==)',
	displayName: '表示名',
	displayNameDescNew: 'コマンドとUIで表示される名前',
	color: '色',
	colorDescNew: 'カラーサークルをクリックしてハイライト色を変更します。',
	remove: '削除',
	removeConfirm: '本当に "{colorName}" 色を削除しますか？この操作は元に戻せません。',
	supportSection: 'サポート',
	buyMeACoffee: 'Buy me a coffee',
	buyMeACoffeeDesc: 'このプラグインを気に入っていただけましたら、開発者にコーヒーを一杯おごっていただけると嬉しいです☕'
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
	usageCustom: 'Custom highlight: <code>==(colorname)text==</code>',
	usageNormal: 'Normal highlight: <code>==text==</code>',
	hotkeyTitle: 'Hotkeys:',
	hotkeyDesc: 'Go to Settings → Hotkeys → "Better Highlight" to set shortcuts for each color',
	
	// Color settings
	enabledLabel: 'Enabled',
	enabledDesc: 'Enable this color for use',
	colorNameLabel: 'Color Name',
	colorNameDesc: 'Name used in ==(colorname)text== syntax',
	displayNameLabel: 'Display Name',
	displayNameDesc: 'Name shown in settings',
	colorPickerLabel: 'Highlight Color',
	colorPickerDesc: 'Select the background color for highlighting',
	deleteColorTooltip: 'Delete this color',
	previewText: 'Sample Text',
	
	// Commands
	createDefaultHighlight: 'Create Default Highlight',
	removeHighlight: 'Remove Highlight',
	createColorHighlight: 'Create {color} Highlight',
	
	// Settings UI new
	documentation: 'Documentation',
	documentationDesc: 'Display complete documentation and usage examples',
	openReadme: 'Open README',
	colorsSection: 'Colors',
	enableHighlight: 'Enable Highlight',
	enableHighlightDesc: 'Enable or disable {color} highlight',
	colorName: 'Color Name',
	colorNameDescNew: 'Identifier used in Markdown syntax (e.g., \"blue\" for ==(blue)text==)',
	displayName: 'Display Name',
	displayNameDescNew: 'Name shown in command and UI',
	color: 'Color',
	colorDescNew: 'Click the color circle to change the highlight color',
	remove: 'Remove',
	removeConfirm: 'Are you sure you want to remove "{colorName}"? This operation cannot be undone.',
	supportSection: 'Support',
	buyMeACoffee: 'Buy me a coffee',
	buyMeACoffeeDesc: 'Enjoying this plugin? I would really appreciate it if you could buy me a coffee to fuel future development! ☕'
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
	usageCustom: '自定义高亮：<code>==(colorname)文本==</code>',
	usageNormal: '普通高亮：<code>==文本==</code>',
	hotkeyTitle: '快捷键：',
	hotkeyDesc: '前往 设置 → 快捷键 → "Better Highlight" 设置各颜色的快捷键',
	
	// Color settings
	enabledLabel: '启用',
	enabledDesc: '启用此颜色',
	colorNameLabel: '颜色名称',
	colorNameDesc: '在 ==(colorname)text== 语法中使用的名称',
	displayNameLabel: '显示名称',
	displayNameDesc: '在设置中显示的名称',
	colorPickerLabel: '高亮颜色',
	colorPickerDesc: '选择高亮的背景颜色',
	deleteColorTooltip: '删除此颜色',
	previewText: '示例文本',
	
	// Commands
	createDefaultHighlight: '创建默认高亮',
	removeHighlight: '删除高亮',
	createColorHighlight: '创建{color}高亮',
	
	// Settings UI new
	documentation: '文档',
	documentationDesc: '显示完整的文档和使用示例',
	openReadme: '打开README',
	colorsSection: '颜色',
	enableHighlight: '启用高亮',
	enableHighlightDesc: '启用或禁用{color}高亮',
	colorName: '颜色名称',
	colorNameDescNew: '在Markdown语法中使用的标识符（例如：\"blue\"用于==(blue)text==)',
	displayName: '显示名称',
	displayNameDescNew: '在命令和UI中显示的名称',
	color: '颜色',
	colorDescNew: '点击颜色圆圈以更改高亮颜色',
	remove: '删除',
	removeConfirm: '您确定要删除"{colorName}"?此操作无法撤消',
	supportSection: '支持',
	buyMeACoffee: '请我喝杯咖啡',
	buyMeACoffeeDesc: '喜欢这个插件吗？如果可以请我喝杯咖啡为未来的开发提供动力，我会非常感激的！☕'
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
	usageCustom: '自訂螢光筆：<code>==(colorname)文字==</code>',
	usageNormal: '普通螢光筆：<code>==文字==</code>',
	hotkeyTitle: '快速鍵：',
	hotkeyDesc: '前往 設定 → 快速鍵 → "Better Highlight" 設定各顏色的快速鍵',
	
	// Color settings
	enabledLabel: '啟用',
	enabledDesc: '啟用此顏色',
	colorNameLabel: '顏色名稱',
	colorNameDesc: '在 ==(colorname)text== 語法中使用的名稱',
	displayNameLabel: '顯示名稱',
	displayNameDesc: '在設定中顯示的名稱',
	colorPickerLabel: '螢光筆顏色',
	colorPickerDesc: '選擇螢光筆的背景顏色',
	deleteColorTooltip: '刪除此顏色',
	previewText: '範例文字',
	
	// Commands
	createDefaultHighlight: '建立預設螢光筆',
	removeHighlight: '刪除螢光筆',
	createColorHighlight: '建立{color}螢光筆',
	
	// Settings UI new
	documentation: '文件',
	documentationDesc: '顯示完整的文件和使用示例',
	openReadme: '開啟README',
	colorsSection: '顏色',
	enableHighlight: '啟用高亮',
	enableHighlightDesc: '啟用或禁用{color}高亮',
	colorName: '顏色名稱',
	colorNameDescNew: '在Markdown語法中使用的識別符（例如：\"blue\"用於==(blue)text==)',
	displayName: '顯示名稱',
	displayNameDescNew: '在命令和UI中顯示的名稱',
	color: '顏色',
	colorDescNew: '點擊顏色圓圈以更改高亮顏色',
	remove: '刪除',
	removeConfirm: '您確定要刪除"{colorName}"?此操作無法撤銷',
	supportSection: '支持',
	buyMeACoffee: '請我喝杯咖啡',
	buyMeACoffeeDesc: '喜歡這個外掛嗎？如果可以請我喝杯咖啡為未來的開發提供動力，我會非常感激的！☕'
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
	usageCustom: '사용자 정의 하이라이트: <code>==(colorname)텍스트==</code>',
	usageNormal: '일반 하이라이트: <code>==텍스트==</code>',
	hotkeyTitle: '단축키:',
	hotkeyDesc: '설정 → 단축키 → "Better Highlight"에서 각 색상의 단축키를 설정할 수 있습니다',
	
	// Color settings
	enabledLabel: '활성화',
	enabledDesc: '이 색상을 사용 가능하게 합니다',
	colorNameLabel: '색상 이름',
	colorNameDesc: '==(colorname)text== 구문에서 사용되는 이름',
	displayNameLabel: '표시 이름',
	displayNameDesc: '설정에서 표시되는 이름',
	colorPickerLabel: '하이라이트 색상',
	colorPickerDesc: '하이라이트의 배경 색상을 선택합니다',
	deleteColorTooltip: '이 색상을 삭제합니다',
	previewText: '샘플 텍스트',
	
	// Commands
	createDefaultHighlight: '기본 하이라이트 생성',
	removeHighlight: '하이라이트 제거',
	createColorHighlight: '{color} 하이라이트 생성',
	
	// Settings UI new
	documentation: '문서',
	documentationDesc: '완전한 문서와 사용 예제를 표시',
	openReadme: 'README 열기',
	colorsSection: '색상',
	enableHighlight: '하이라이트 활성화',
	enableHighlightDesc: '{color} 하이라이트를 활성화 또는 비활성화',
	colorName: '색상 이름',
	colorNameDescNew: 'Markdown 구문에서 사용되는 식별자 (예: \"blue\"는 ==(blue)텍스트==)',
	displayName: '표시 이름',
	displayNameDescNew: '명령어와 UI에서 표시되는 이름',
	color: '색상',
	colorDescNew: '색상 원을 클릭하여 하이라이트 색상을 변경',
	remove: '제거',
	removeConfirm: '"{colorName}"을 정말로 제거하시겠습니까? 이 작업은 되돌릴 수 없습니다.',
	supportSection: '지원',
	buyMeACoffee: '커피 사주기',
	buyMeACoffeeDesc: '이 플러그인이 마음에 드시나요? 앞으로의 개발에 힘이 될 수 있도록 커피 한 잔 사주시면 정말 감사하겠습니다! ☕'
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
	usageCustom: 'Benutzerdefinierte Markierung: <code>==(colorname)text==</code>',
	usageNormal: 'Normale Markierung: <code>==text==</code>',
	hotkeyTitle: 'Tastenkürzel:',
	hotkeyDesc: 'Gehen Sie zu Einstellungen → Tastenkürzel → "Better Highlight", um Tastenkürzel für jede Farbe zu setzen',
	
	// Color settings
	enabledLabel: 'Aktiviert',
	enabledDesc: 'Diese Farbe zur Verwendung aktivieren',
	colorNameLabel: 'Farbname',
	colorNameDesc: 'Name, der in der ==(colorname)text== Syntax verwendet wird',
	displayNameLabel: 'Anzeigename',
	displayNameDesc: 'In den Einstellungen angezeigter Name',
	colorPickerLabel: 'Markierungsfarbe',
	colorPickerDesc: 'Hintergrundfarbe für die Markierung auswählen',
	deleteColorTooltip: 'Diese Farbe löschen',
	previewText: 'Beispieltext',
	
	// Commands
	createDefaultHighlight: 'Standard-Markierung erstellen',
	removeHighlight: 'Markierung entfernen',
	createColorHighlight: '{color} Markierung erstellen',
	
	// Settings UI new
	documentation: 'Dokumentation',
	documentationDesc: 'Vollständige Dokumentation und Verwendungsbeispiele anzeigen',
	openReadme: 'README öffnen',
	colorsSection: 'Farben',
	enableHighlight: 'Hervorhebung aktivieren',
	enableHighlightDesc: '{color} Hervorhebung aktivieren oder deaktivieren',
	colorName: 'Farbname',
	colorNameDescNew: 'Bezeichner, der in der Markdown-Syntax verwendet wird (z.B. \"blue\" für ==(blue)text==)',
	displayName: 'Anzeigename',
	displayNameDescNew: 'Name, der in Befehlen und der Benutzeroberfläche angezeigt wird',
	color: 'Farbe',
	colorDescNew: 'Klicken Sie auf die Farbkreise, um die Hervorhebungsfarbe zu ändern',
	remove: 'Entfernen',
	removeConfirm: 'Sind Sie sicher, dass Sie "{colorName}" entfernen möchten? Diese Aktion kann nicht rückgängig gemacht werden.',
	supportSection: 'Unterstützung',
	buyMeACoffee: 'Buy me a coffee',
	buyMeACoffeeDesc: 'Gefällt Ihnen dieses Plugin? Ich würde mich sehr freuen, wenn Sie mir einen Kaffee spendieren könnten, um die zukünftige Entwicklung zu unterstützen! ☕'
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
	usageCustom: 'Surlignage personnalisé : <code>==(colorname)texte==</code>',
	usageNormal: 'Surlignage normal : <code>==texte==</code>',
	hotkeyTitle: 'Raccourcis clavier :',
	hotkeyDesc: 'Allez dans Paramètres → Raccourcis clavier → "Better Highlight" pour définir des raccourcis pour chaque couleur',
	
	// Color settings
	enabledLabel: 'Activé',
	enabledDesc: 'Activer cette couleur pour utilisation',
	colorNameLabel: 'Nom de la couleur',
	colorNameDesc: 'Nom utilisé dans la syntaxe ==(colorname)text==',
	displayNameLabel: 'Nom d\'affichage',
	displayNameDesc: 'Nom affiché dans les paramètres',
	colorPickerLabel: 'Couleur de surlignage',
	colorPickerDesc: 'Sélectionnez la couleur d\'arrière-plan pour le surlignage',
	deleteColorTooltip: 'Supprimer cette couleur',
	previewText: 'Texte d\'exemple',
	
	// Commands
	createDefaultHighlight: 'Créer un surlignage par défaut',
	removeHighlight: 'Supprimer le surlignage',
	createColorHighlight: 'Créer un surlignage {color}',
	
	// Settings UI new
	documentation: 'Documentation',
	documentationDesc: 'Afficher la documentation complète et les exemples d\'utilisation',
	openReadme: 'Ouvrir README',
	colorsSection: 'Couleurs',
	enableHighlight: 'Activer la mise en évidence',
	enableHighlightDesc: 'Activer ou désactiver la mise en évidence {color}',
	colorName: 'Nom de la couleur',
	colorNameDescNew: 'Identificateur utilisé dans la syntaxe Markdown (par exemple, \"blue\" pour ==(blue)texte==)',
	displayName: 'Nom d\'affichage',
	displayNameDescNew: 'Nom affiché dans les paramètres',
	color: 'Couleur',
	colorDescNew: 'Cliquez sur les cercles de couleur pour changer la couleur de mise en évidence',
	remove: 'Supprimer',
	removeConfirm: 'Êtes-vous sûr de vouloir supprimer "{colorName}"? Cette opération ne peut être annulée',
	supportSection: 'Support',
	buyMeACoffee: 'Buy me a coffee',
	buyMeACoffeeDesc: 'Vous aimez ce plugin ? J\'apprécierais vraiment si vous pouviez m\'offrir un café pour alimenter le développement futur ! ☕'
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
	usageCustom: 'Resaltado personalizado: <code>==(colorname)texto==</code>',
	usageNormal: 'Resaltado normal: <code>==texto==</code>',
	hotkeyTitle: 'Atajos de teclado:',
	hotkeyDesc: 'Ve a Configuración → Atajos de teclado → "Better Highlight" para establecer atajos para cada color',
	
	// Color settings
	enabledLabel: 'Habilitado',
	enabledDesc: 'Habilitar este color para uso',
	colorNameLabel: 'Nombre del color',
	colorNameDesc: 'Nombre usado en la sintaxis ==(colorname)text==',
	displayNameLabel: 'Nombre de visualización',
	displayNameDesc: 'Nombre mostrado en la configuración',
	colorPickerLabel: 'Color de resaltado',
	colorPickerDesc: 'Selecciona el color de fondo para el resaltado',
	deleteColorTooltip: 'Eliminar este color',
	previewText: 'Texto de ejemplo',
	
	// Commands
	createDefaultHighlight: 'Crear resaltado por defecto',
	removeHighlight: 'Eliminar resaltado',
	createColorHighlight: 'Crear resaltado {color}',
	
	// Settings UI new
	documentation: 'Documentación',
	documentationDesc: 'Mostrar documentación completa y ejemplos de uso',
	openReadme: 'Abrir README',
	colorsSection: 'Colores',
	enableHighlight: 'Habilitar resaltado',
	enableHighlightDesc: 'Habilitar o deshabilitar resaltado {color}',
	colorName: 'Nombre del color',
	colorNameDescNew: 'Identificador usado en la sintaxis Markdown (por ejemplo, \"blue\" para ==(blue)texto==)',
	displayName: 'Nombre de visualización',
	displayNameDescNew: 'Nombre mostrado en la configuración',
	color: 'Color',
	colorDescNew: 'Haga clic en los círculos de color para cambiar el color de resaltado',
	remove: 'Eliminar',
	removeConfirm: '¿Está seguro de que desea eliminar "{colorName}"? Esta operación no se puede deshacer',
	supportSection: 'Soporte',
	buyMeACoffee: 'Buy me a coffee',
	buyMeACoffeeDesc: '¿Te gusta este plugin? ¡Realmente apreciaría si pudieras invitarme a un café para impulsar el desarrollo futuro! ☕'
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
	usageCustom: 'Evidenziazione personalizzata: <code>==(colorname)testo==</code>',
	usageNormal: 'Evidenziazione normale: <code>==testo==</code>',
	hotkeyTitle: 'Scorciatoie da tastiera:',
	hotkeyDesc: 'Vai su Impostazioni → Scorciatoie da tastiera → "Better Highlight" per impostare scorciatoie per ogni colore',
	
	// Color settings
	enabledLabel: 'Abilitato',
	enabledDesc: 'Abilita questo colore per l\'uso',
	colorNameLabel: 'Nome del colore',
	colorNameDesc: 'Nome usato nella sintassi ==(colorname)text==',
	displayNameLabel: 'Nome di visualizzazione',
	displayNameDesc: 'Nome mostrato nelle impostazioni',
	colorPickerLabel: 'Colore di evidenziazione',
	colorPickerDesc: 'Seleziona il colore di sfondo per l\'evidenziazione',
	deleteColorTooltip: 'Elimina questo colore',
	previewText: 'Testo di esempio',
	
	// Commands
	createDefaultHighlight: 'Crea evidenziazione predefinita',
	removeHighlight: 'Rimuovi evidenziazione',
	createColorHighlight: 'Crea evidenziazione {color}',
	
	// Settings UI new
	documentation: 'Documentazione',
	documentationDesc: 'Mostrare la documentazione completa e gli esempi di utilizzo',
	openReadme: 'Apri README',
	colorsSection: 'Colori',
	enableHighlight: 'Abilita evidenziazione',
	enableHighlightDesc: 'Abilita o disabilita evidenziazione {color}',
	colorName: 'Nome del colore',
	colorNameDescNew: 'Identificatore usato nella sintassi Markdown (ad esempio, \"blue\" per ==(blue)testo==)',
	displayName: 'Nome di visualizzazione',
	displayNameDescNew: 'Nome mostrato nelle impostazioni',
	color: 'Colore',
	colorDescNew: 'Fare clic sui cerchi di colore per cambiare il colore di evidenziazione',
	remove: 'Rimuovere',
	removeConfirm: 'Sei sicuro di voler rimuovere "{colorName}"? Questa operazione non può essere annullata',
	supportSection: 'Supporto',
	buyMeACoffee: 'Buy me a coffee',
	buyMeACoffeeDesc: 'Ti piace questo plugin? Apprezzerei davvero se potessi offrirmi un caffè per alimentare lo sviluppo futuro! ☕'
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
	usageCustom: 'Пользовательское выделение: <code>==(colorname)текст==</code>',
	usageNormal: 'Обычное выделение: <code>==текст==</code>',
	hotkeyTitle: 'Горячие клавиши:',
	hotkeyDesc: 'Перейдите в Настройки → Горячие клавиши → "Better Highlight" для настройки горячих клавиш для каждого цвета',
	
	// Color settings
	enabledLabel: 'Включено',
	enabledDesc: 'Включить этот цвет для использования',
	colorNameLabel: 'Название цвета',
	colorNameDesc: 'Имя, используемое в синтаксисе ==(colorname)text==',
	displayNameLabel: 'Отображаемое имя',
	displayNameDesc: 'Имя, показываемое в настройках',
	colorPickerLabel: 'Цвет выделения',
	colorPickerDesc: 'Выберите цвет фона для выделения',
	deleteColorTooltip: 'Удалить этот цвет',
	previewText: 'Пример текста',
	
	// Commands
	createDefaultHighlight: 'Создать выделение по умолчанию',
	removeHighlight: 'Удалить выделение',
	createColorHighlight: 'Создать выделение {color}',
	
	// Settings UI new
	documentation: 'Документация',
	documentationDesc: 'Показать полную документацию и примеры использования',
	openReadme: 'Открыть README',
	colorsSection: 'Цвета',
	enableHighlight: 'Включить выделение',
	enableHighlightDesc: 'Включить или выключить выделение {color}',
	colorName: 'Название цвета',
	colorNameDescNew: 'Идентификатор, используемый в синтаксисе Markdown (например, \"blue\" для ==(blue)текст==)',
	displayName: 'Отображаемое имя',
	displayNameDescNew: 'Имя, показываемое в настройках',
	color: 'Цвет',
	colorDescNew: 'Нажмите на круги цветов, чтобы изменить цвет выделения',
	remove: 'Удалить',
	removeConfirm: 'Вы уверены, что хотите удалить "{colorName}"? Это действие нельзя отменить',
	supportSection: 'Поддержка',
	buyMeACoffee: 'Buy me a coffee',
	buyMeACoffeeDesc: 'Нравится этот плагин? Я был бы очень признателен, если бы вы угостили меня кофе для поддержки будущей разработки! ☕'
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