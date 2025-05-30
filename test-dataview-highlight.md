# Dataview Highlight Test

## ハイライトのテスト

以下のハイライト構文をテストします：

==(red)重要な情報==

==(blue)参考情報==

==(yellow)注意事項==

==(green)成功例==

==(purple)課題==

## Dataview確認用クエリ

プラグインでインラインフィールドを生成した後、以下のクエリで確認できます：

```dataview
LIST highlight-red, highlight-blue, highlight-yellow, highlight-green, highlight-purple
WHERE file = this.file
```

```dataview
TABLE highlight-red AS "重要", highlight-blue AS "参考", highlight-yellow AS "注意"
WHERE file = this.file
```

## 使用方法

1. このファイルを開く
2. コマンドパレット（Cmd/Ctrl + P）を開く
3. "Dataview用インラインフィールドを生成 (現在のノート)" を実行
4. ソースモードに切り替えて、ハイライト構文の後にインラインフィールドが追加されているか確認
5. 上記のDataviewクエリが正しく動作するか確認 