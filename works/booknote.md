---
caption: "書籍管理・読書メモアプリ"
type: "Mobile App"
cover: "booknote-0.png"
---

### スキャン機能
<video autoplay loop muted playsinline>
  <source src="/movies/booknote-scan.mp4" type="video/mp4">
</video>

書籍のリスト画面からすぐにアクセスできる場所に配置しました。読み込み完了時に触覚フィードバックを動作させています。

### 全文検索
<video autoplay loop muted playsinline>
  <source src="/movies/booknote-search.mp4" type="video/mp4">
</video>

読み仮名などのデータを書誌情報APIから取得、CoreDataに保存して検索に利用しています。Spotlight検索機能にも対応しました。

### テキストのコピー機能の独自実装
<video autoplay loop muted playsinline>
  <source src="/movies/booknote-copy.mp4" type="video/mp4">
</video>

書籍管理アプリとして書誌情報のコピー機能は不可欠なものの、SwiftUIのAPIはテキストの選択・コピー機能を提供していないため、独自のコピー機能を実装しました。

### Screenshots
![スクリーンショット1](/images/booknote-1.png)
![スクリーンショット2](/images/booknote-2.png)
![スクリーンショット3](/images/booknote-3.png)

2019年に発表されたiOSのUI用フレームワーク（SwiftUI）を活用したiOS, iPadOS用書籍管理・読書メモツールを開発、配信しています。App Storeには多くの読書管理アプリがありますが、Appleのデザインガイドラインに準拠したものはほとんどありません。Appleのデザインガイドラインに準拠したアプリや、iOSらしさを意識したアプリには一定の需要があると考え、このアプリを開発しました。iCloud同期、Spotlight検索対応などのiOS独自の機能も実装しています。

<p>
  <a href="https://apps.apple.com/jp/app/booknote/id1546487927" target="_blank" rel="noopener noreferrer" >BookNote - App Store</a>
</p>