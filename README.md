# Better Highlight Plugin for Obsidian

Enhanced Markdown highlighting for Obsidian with custom colors.

## Features

- **Custom Color Highlights**: Use `==(colorname)text==` syntax for custom colored highlights
- **Standard Highlights**: Regular `==text==` highlighting still works
- **Configurable Colors**: Add, remove, and customize highlight colors
- **Hotkey Support**: Set keyboard shortcuts for each color
- **Live Preview**: Real-time highlight rendering in editor
- **Reading View**: Full support for custom highlights in reading mode
- **Multi-Language Support**: Auto-detects Obsidian language (10 languages supported)

## Supported Languages

The plugin automatically detects your Obsidian language and supports:
- English (en)
- Japanese (ja)
- Chinese Simplified (zh-cn)
- Chinese Traditional (zh-tw)
- Korean (ko)
- German (de)
- French (fr)
- Spanish (es)
- Italian (it)
- Russian (ru)

## Usage

### Basic Highlighting
- Standard highlight: `==text==`
- Custom color highlight: `==(colorname)text==`

### Examples
```markdown
==This is a standard yellow highlight==
==(blue)This is a blue highlight==
==(red)This is a red highlight==
==(green)This is a green highlight==
```

### Setting Up Hotkeys
1. Go to Settings → Hotkeys
2. Search for "Better Highlight"
3. Set keyboard shortcuts for each color

## Installation

### From Obsidian Community Plugins
1. Open Obsidian Settings
2. Go to Community Plugins
3. Search for "Better Highlight"
4. Install and enable the plugin

### Manual Installation
1. Download the latest release from GitHub
2. Extract the files to your vault's `.obsidian/plugins/better-highlight/` folder
3. Enable the plugin in Settings → Community Plugins

## Configuration

Access plugin settings through Settings → Better Highlight Settings:

- **Add/Remove Colors**: Customize your highlight color palette
- **Color Names**: Set the names used in `==(colorname)text==` syntax
- **Display Names**: Set the names shown in menus and commands
- **Enable/Disable**: Toggle colors on/off without deleting them

## Commands

The plugin adds several commands you can use:
- Create Default Highlight
- Remove Highlight
- Create [Color] Highlight (for each enabled color)

## Removing Highlights

You can remove highlights in two ways:
1. **Selection-based**: Select text containing highlights and use "Remove Highlight" command
2. **Cursor-based**: Place cursor inside a highlight and use "Remove Highlight" command

## Development

This plugin is built with TypeScript and uses CodeMirror 6 for live preview functionality.

### Building from Source
```bash
npm install
npm run build
```

## Support

If you find this plugin helpful, consider supporting its development:

[![Buy Me A Coffee](https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png)](https://www.buymeacoffee.com/edacchi_chonmage)

## License

MIT License - see LICENSE file for details.

## Contributing

Contributions are welcome! Please feel free to submit issues and pull requests.

## Changelog

### Version 1.0.0 (Initial Release)
- ✨ **NEW**: Custom color highlights with `==(colorname)text==` syntax
- ✨ **NEW**: Standard `==text==` highlighting support
- ✨ **NEW**: Configurable color palette (add, remove, customize colors)
- ✨ **NEW**: Hotkey support for all highlight colors
- ✨ **NEW**: Live preview in editor with real-time rendering
- ✨ **NEW**: Full reading view support
- ✨ **NEW**: Multi-language support (10 languages)
- ✨ **NEW**: Intelligent highlight removal (selection and cursor-based)
- ✨ **NEW**: Native Obsidian UI integration
- 🔧 **BREAKING**: Uses `==` syntax for consistency with Obsidian native highlights

### Latest Features
- Auto-detection of Obsidian language
- Support for 10 languages
- Improved highlight removal (partial selection support)
- Single undo operation for multiple highlight removals
- Enhanced selection behavior matching native Obsidian highlights 