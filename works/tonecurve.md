---
caption: "トーンカーブの使い方を学ぶためのWeb App"
type: "Web App"
cover: "tonecurve-0.png"
---

### 
<video autoplay loop muted playsinline poster="/images/posters/tonecurve.png">
  <source src="/movies/tonecurve.mp4" type="video/mp4">
</video>

### 開発プロセス
<img src="/images/tonecurve-1.png" alt="開発プロセス">

アイデア検討、実装、ユーザービリティテストを行いました。

### 制御点の生成
<img src="/images/tonecurve-2.png" alt="制御点の生成">

実際の画像編集を想定したトーンカーブの制御点の配置をランダムに生成する機能を実装しました。制御点が1点のみの単純な曲線、S字カーブ、逆S字カーブなどの形状パターンを定義し、パターンごとに制御点を配置可能な領域を設定しています。

### スプライン曲線の計算, Lookup Tableの生成
<img src="/images/tonecurve-3.png" alt="スプライン曲線の計算, Lookup Tableの生成">

配置された制御点からスプライン曲線を計算し、Look-up Tableとして保持しています。

### スコアリング
<img src="/images/tonecurve-4.png" alt="スコアリング">

正答とユーザーによる回答の類似度を比較し、0~1の値でスコア化する機能を実装しました。トーンカーブの面積に基づいたスコアを算出しています。

<div class="iframe-margin"></div>

### スライド資料
<div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 74.9296%;"><iframe src="https://speakerdeck.com/player/461220a7e5b143ec891651afe31c17ce" style="top: 0; left: 0; width: 100%; height: 100%; position: absolute; border: 0;" allowfullscreen scrolling="no" allow="encrypted-media;"></iframe></div>

デザイン系の学生をターゲットとして、トーンカーブの使い方をインタラクティブに学ぶためのWebツールを開発しました。トーンカーブが使えると画像編集の効率が大きく向上しますが、初心者にとってはトーンカーブは動作原理や概念の理解が難しいツールであると考えられます。最初から原理を学ぶのではなく、まずはトーンカーブを使って直感的に操作に慣れたほうが効率的にテクニックを習得できるという発想をベースに開発しました。

<p>
  <a href="https://tonecurve.netlify.app" target="_blank" rel="noopener noreferrer" >Tone Curve Tool（PCのみで動作します）</a>
</p>

<p>
  <a href="https://github.com/ReoHokazono/tonecurve" target="_blank" rel="noopener noreferrer" >Source Code(GitHub)</a>
</p>