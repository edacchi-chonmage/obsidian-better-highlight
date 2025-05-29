#!/bin/bash

# Obsidianにプラグインをデプロイするスクリプト

# ボルトパスを指定（適宜変更してください）
VAULT_PATH="${1:-$HOME/obsidian}"
PLUGIN_NAME="better-highlight"

# プラグインディレクトリを作成
PLUGIN_DIR="$VAULT_PATH/.obsidian/plugins/$PLUGIN_NAME"

echo "=== Better Highlight Plugin Deploy ==="
echo "ボルトパス: $VAULT_PATH"
echo "プラグインディレクトリ: $PLUGIN_DIR"

# .obsidianディレクトリが存在するかチェック
if [ ! -d "$VAULT_PATH/.obsidian" ]; then
    echo "エラー: Obsidianボルトが見つかりません: $VAULT_PATH"
    echo "使用方法: $0 [ボルトパス]"
    echo "例: $0 ~/Documents/MyVault"
    exit 1
fi

# プラグインディレクトリを作成
mkdir -p "$PLUGIN_DIR"

# 必要なファイルをコピー
echo "ファイルをコピー中..."
cp main.js "$PLUGIN_DIR/"
cp manifest.json "$PLUGIN_DIR/"

# styles.cssがある場合はコピー（現在はなし）
if [ -f "styles.css" ]; then
    cp styles.css "$PLUGIN_DIR/"
fi

echo "✅ デプロイ完了！"
echo ""
echo "次の手順:"
echo "1. Obsidianを開く"
echo "2. 設定 > コミュニティプラグイン"
echo "3. セーフモードを無効化"
echo "4. インストール済みプラグインで 'Better Highlight' を有効化"
echo "5. コマンドパレット (Cmd/Ctrl+P) で 'ハイライトを作成' を検索してテスト" 