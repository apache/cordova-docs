# Apache コルドバ API ドキュメント

[Apache コルドバ](http://cordova.io/)の JavaScript API ドキュメント.

マニュアルは、 [docs.cordova.io](http://docs.cordova.io/).

## ドキュメントの形式

すべての[Apache コルドバ](http://cordova.io/)ドキュメントは[値下げ](http://daringfireball.net/projects/markdown/syntax)HTML にタイプセットすることができます軽量マークアップ言語で書き込まれます。 値下げは、コルドバのコア API やプラットフォーム固有の Api を文書化する簡単かつ柔軟な方法を提供します。

## ファイル構造

    docs/
    docs/LANGUAGE
    docs/LANGUAGE/VERSION
    docs/LANGUAGE/VERSION/cordova/
    docs/LANGUAGE/VERSION/guide/platforms/PLATFORMNAME/


## ドキュメントに貢献

### 問題を修正または報告

我々 は、 [Apache JIRA](https://issues.apache.org/jira/browse/CB)を使用してください。

ところで、あなたは揺れ動きます!ドキュメントの改善にご協力いただきありがとうございます!

### Git を使ってください。

あなたは Git または GitHub に貢献する新しいですか。

我々 が[書かれていくつかの Git チュートリアル](http://wiki.apache.org/cordova/ContributorWorkflow)ドキュメントに貢献を始めるため。

### プル要求を送信します。

プルリクエストは大歓迎です!

トピック ブランチの使用お願い申し上げます。

    git checkout -b issue_23

    # code

    git commit -m "Issue 23: Fix a bad bug."

    git push origin issue_23

    # send pull request from branch issue_23 to cordova:master


### 言語を追加します。

別の言語で Apache コルドバ ドキュメントですか? 我々 はあまりにも行う! [Crowdin](http://crowdin.net/project/cordova)、翻訳およびローカリゼーション管理プラットフォームのサポート、翻訳は簡単に使用できるツールにログインし、彼らのようで、少し翻訳支援を提供できます。 場合してくださいコルドバをサポートし、貢献する別の言語を知っています。 http://crowdin.net/project/cordova. Crowdin ツールを使用してのいくつかのベスト プラクティスは、私たちの wiki の http://wiki.apache.org/cordova/CordovaTranslations を参照してください。

コルドバ言語管理者は、これらの手順を忘れてはいけない。

**1. config.json**

各言語およびバージョン、言語とファイルをマージする方法の名前を定義する`config.json`があります。

**2. HTML テンプレートをカスタマイズします。**

各言語の`テンプレート/ドキュメント/言語`で既定のテンプレートをオーバーライドできます。.

### 編集ガイドライン

言語および使用に関するガイドラインの`STYLEGUIDE.md`ファイルを参照してください。

## Node.js のドキュメントを生成します。

今、Windows または Linux ボックスのいずれか、Node.js を使用してドキュメントを実行でした。

    $ rm -r tmp public      # Clear out old docs
    $ ./bin/genjs           # compile all docs
    $ ./bin/genjs en dev    # compile English Dev docs
    $ ./bin/genjs ru dev    # compile Russian Dev docs
    $ ./bin/genjs es 3.5.0  # compile Spanish 3.5.0 docs


### Node.js を設定

  1. Node.JS[のダウンロード ページ](http://nodejs.org/download/)へ
  2. ダウンロードして、あなたの操作システムにパッケージをインストールします。
  3. チェック アウトこのリポジトリは Git を使って

        git clone https://github.com/apache/cordova-docs


  4. 依存関係をインストールします。実行クローン コルドバ docs フォルダーのルートに

        npm install


  5. 今ローカルでドキュメントをビルドすることができます。

### クイック プレビュー

細部の編集の際、通常単に HTML に値下げから編集レンダリングしても安全です。 多くのコード エディターは、記法を HTML に表示するプラグインを持っているし、[良い](http://dillinger.io/)オンライン編集者の一握りがあります。

現在、Node.JS スクリプトと[joDoc js](https://github.com/kant2002/jodoc-js)を使用して HTML ドキュメントを生成します。

## バージョンのリリースを生成します。

バージョンをインクリメント、バージョン、ディレクトリを生成し、エッジのマニュアルを更新する Rake タスクがあります。

    # generate version 4.1.0 for english.
    .\bin\incrementversion en 4.1.0
