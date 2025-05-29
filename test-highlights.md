# Better Highlight Plugin デバッグテスト

## 基本テスト（===なし）
これは通常のテキストです。MarkdownPostProcessorが呼ばれるかテスト。

normal text for testing processor

## 旧構文テスト
===(blue)青いテキスト===

## 複数テスト
複数のハイライトを同じ行に：

===(red)赤=== と ===(green)緑===

## 各色テスト
- ===(yellow)黄色===
- ===(purple)紫色===

## 従来構文（比較用）
従来の ==通常のハイライト== も確認

## デバッグ用手順
1. F12でデベロッパーツールを開く
2. Consoleタブを開く
3. このファイルをプレビューモードで開く
4. コンソールログを確認：
   - "MarkdownPostProcessor called" が出力されるか
   - "Found custom syntax in HTML" が出力されるか
   - エラーメッセージがないか 