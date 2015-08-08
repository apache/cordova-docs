---
license: Licensed to the Apache Software Foundation (ASF) under one
         or more contributor license agreements.  See the NOTICE file
         distributed with this work for additional information
         regarding copyright ownership.  The ASF licenses this file
         to you under the Apache License, Version 2.0 (the
         "License"); you may not use this file except in compliance
         with the License.  You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0

         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
         under the License.
---

# iOS プラットフォーム ガイド

このガイドは、iPhone や iPad などの iOS デバイスのための Cordova アプリを展開する SDK の開発環境を設定する方法を示します。詳細なプラットフォーム固有の情報は、次を参照してください。

*   iOS 構成
*   IOS のアップグレード
*   iOS の web 表示
*   iOS のプラグイン
*   iOS コマンド ライン ツール

上記のコマンド ライン ツールはコルドバ 3.0 より前のバージョンを参照してください。現在のインタ フェースについての情報は、コマンド ライン インターフェイスを参照してください。

## 要件、およびサポート

Apple ® ツール インテル ベースの Mac OS X オペレーティング システム上でのみ実行 iOS アプリケーションを構築するために必要です。 OS X バージョン 10.9 (異端者) でのみ実行されます Xcode ® 6.0 (最低限必要なバージョン) 以上に設定すると、iOS 8 が含まれています SDK （ソフトウェア開発キット）。 アップルのアプリ Store℠ にアプリを提出するには、アップル ツールの最新バージョンが必要です。

多くの iOS SDK と Xcode のインストール iOS エミュレーターを使用してコルドバ機能をテストできますが、実際のデバイスを完全に App Store に提出する前にすべてのアプリのデバイス機能をテストする必要があります。 デバイスを少なくともいる必要があります iOS 6.x がインストールされて、コルドバ 3.0 現在サポートされている最小の iOS のバージョン。サポート デバイスなどがすべて計算された ® モデル、iPhone ® 3 gs と、上記と iPod ® タッチ第 3 世代またはそれ以降。 アプリをインストールするデバイス上に、アップルの[iOS デベロッパー プログラム][1], そのコスト $99 1 年ごとのメンバーが必要です。 このガイド開発者プログラムに登録する必要はありません iOS エミュレーターにアプリケーションを展開する方法を示しています。

 [1]: https://developer.apple.com/programs/ios/

[Ios の sim][2]と[ios-deploy][3]ツール - iOS のシミュレータに iOS アプリと iOS デバイスをコマンドラインから起動することができます。

 [2]: https://www.npmjs.org/package/ios-sim
 [3]: https://www.npmjs.org/package/ios-deploy

## SDK をインストールします。

Xcode をダウンロードする 2 つの方法があります。

*   から[App Store][4]、 **App Store**のアプリケーションで「Xcode」を捜すことによって利用できます。

*   [Apple の開発者のダウンロード][5]アップルの開発者として登録する必要があります。

 [4]: https://itunes.apple.com/us/app/xcode/id497799835?mt=12
 [5]: https://developer.apple.com/downloads/index.action

Xcode をインストールすると、いくつかのコマンド ライン ツールはコルドバを実行するを有効にする必要があります。 **Xcode**メニューから**環境設定**の [**ダウンロード**] タブを選択します。 [**コンポーネント**] パネルから**コマンド ライン ツール**の一覧の横にある [**インストール**] ボタンを押します。

## インストール展開ツール

Comman ライン ・ ターミナルから実行します。

        $ npm install -g ios-sim
        $ npm install -g ios-deploy


## 新しいプロジェクトを作成します。

コルドバのコマンド ライン インターフェイスで説明されているように、新しいプロジェクトをセットアップする`コルドバ`ユーティリティを使用します。たとえば、ソース コード ディレクトリ: で

        $ コルドバ作成こんにちは com.example.hello"HelloWorld"$ cd こんにちは $ コルドバ プラットフォームは、ios を追加 $ コルドバ準備 # または"構築コルドバ"


## アプリを展開します。

接続されている iOS デバイス上のアプリを展開。

        $ cordova run ios --device


デフォルト iOS エミュレーター上でアプリケーションを展開するには

        $ cordova emulate ios


使用することができます**cordova run ios --list**を見るすべての利用可能なターゲットと**cordova run ios --target=target_name** 、特定のデバイスまたはエミュレーターでアプリケーションを実行する (たとえば、`cordova run ios --target="iPhone-6"`).

**コルドバの実行 - ヘルプ**を使用して、追加のビルドを参照してください、オプションを実行することもできます。

## SDK でプロジェクトを開く

Ios プラットフォームをプロジェクトに追加すると、Xcode の内でからそれを開くことができます。`Hello/platforms/ios/hello.xcodeproj`ファイルを開くをダブルクリックします。このような画面になります。

![][6]

 [6]: {{ site.baseurl }}/static/img/guide/platforms/ios/helloworld_project.png

## エミュレーターへの展開します。

: IOS のエミュレーターでアプリケーションをプレビューするには

1.  *.Xcodeproj*ファイルが左側のパネルで選択されていることを確認してください。

2.  右側のパネルで**こんにち**はアプリを選択します。

3.  ツールバーの**配色**メニューから目的のデバイスを選択します、iPhone などとして 6.0 シミュレータはここに強調：

    ![][7]

4.  **スキーム**の左側に同じツールバーに表示される**実行**ボタンを押します。 ビルド、配置、エミュレーターでアプリケーションを実行します。 独立したエミュレータ アプリケーションは、アプリを表示するが開きます。

    ![][8]

    1 つだけのエミュレーターでは一度に実行可能性がありますので、別のエミュレーターでアプリケーションをテストする場合は、エミュレーターのアプリケーションを終了し、Xcode の内で別のターゲットを実行する必要があります。

 [7]: {{ site.baseurl }}/static/img/guide/platforms/ios/select_xcode_scheme.png
 [8]: {{ site.baseurl }}/static/img/guide/platforms/ios/HelloWorldStandard.png

Xcode は、iPhone および iPad の最新バージョン用のエミュレーターが付属しています。 古いバージョンはから入手できます、 **Xcode → 設定 → ダウンロード → コンポーネント**パネル。

## デバイスへの配置します。

デバイスに展開するさまざまな要件の詳細については Apple の[iOS 用ツール ワークフロー ガイド][9]の*構成の開発と配布の資産*セクションを参照してください。 簡単に言えば、展開する前に以下を行う必要があります。

 [9]: http://developer.apple.com/library/ios/#documentation/Xcode/Conceptual/ios_development_workflow/00-About_the_iOS_Application_Development_Workflow/introduction.html#//apple_ref/doc/uid/TP40007959

1.  アップルの iOS 開発者プログラムに参加します。

2.  *プロビジョニング プロファイル* [iOS プロビジョニング ポータル][10]内を作成します。 その*開発のプロビジョニングのアシスタント*を使用して作成し、プロファイルをインストールすることができ、Xcode の証明書が必要です。

3.  プロジェクトの設定内の [*コード署名*] セクションの*コード署名 Id*プロビジョニング プロファイル名に設定されていることを確認します。

 [10]: https://developer.apple.com/ios/manage/overview/index.action

デバイスに展開します。

1.  Mac にデバイスを接続するのに USB ケーブルを使用します。

2.  Xcode ウィンドウ**方式**のドロップ ダウン リストで、プロジェクトの名前を選択します。

3.  **デバイス**のドロップ ダウン リストからお使いのデバイスを選択します。それが USB 経由で接続されているがまだ表示されない場合、すべてのエラーを解決するために**主催者**ボタンを押します。

4.  ビルド、配置、およびお使いのデバイスでアプリケーションを実行する**実行**ボタンを押します。

## 一般的な問題

**警告**: アプリケーション プログラミング インターフェイス (API) を変更または別の API に置き換え、それとしてマークされますが*使用されなくなりました*。 API は、短期的に動作しますが、最終的に削除されます。 これらの非推奨インターフェイスは Apache コルドバに反映され、Xcode 問題それらについての警告をビルドしてアプリケーションを配置するとき。

Xcode の警告`invokeString`方法についてカスタム URL からアプリケーションを起動する機能にかかわる。 カスタム URL から読み込むためのメカニズムが変更されており、このコードはまだ存在している後方コルドバの古いバージョンで作成されたアプリの機能を提供します。 これらの警告を無視することができますので、サンプル アプリはこの機能を使用しません。 これらの警告が表示されないように、非推奨となった invokeString API を参照するコードを削除します。

*   *Classes/MainViewController.m*ファイルを編集して、コードの次のブロックを囲む `/*` および `*/` 下図のように、そのタイプのコメント**コマンドの**ファイルを保存します。

        (void)webViewDidFinishLoad:(UIWebView*)theWebView
        {
        // only valid if ___PROJECTNAME__-Info.plist specifies a protocol to handle
        /*
        if (self.invokeString) {
          // this is passed before the deviceready event is fired, so you can access it in js when you receive deviceready
          NSLog(@"DEPRECATED: window.invokeString - use the window.handleOpenURL(url) function instead, which is always called when the app is launched through a custom scheme url.");
          NSString* jsString = [NSString stringWithFormat:@"var invokeString = \"%@\";", self.invokeString];
          [theWebView stringByEvaluatingJavaScriptFromString:jsString];
        }
        */
        // Black base color for background matches the native apps
        theWebView.backgroundColor = [UIColor blackColor];

        return [super webViewDidFinishLoad:theWebView];
        }


*   下図のように、2 つのスラッシュを挿入して次の行をコメント アウト、 *Classes/AppViewDelegate.m*ファイルを編集し、**コマンドの**ファイルを保存する入力します。

        //self.viewController.invokeString = invokeString;


*   **コマンド + b**ボタンを押して、プロジェクトをリビルドし、警告を除去します。

<!-- Does this fix only last until the next "cordova prepare"? -->

**不足しているヘッダー**: 不足しているヘッダーに関するコンパイル エラー ビルドの場所との問題に起因して Xcode 設定を介して固定することができます。

1.  **Xcode → 設定 → 場所**を選択します.

2.  **派生データ**] セクションで、**詳細設定**ボタンを押しますをここに示すように**ビルド場所**として**ユニークな**を選択します。

    ![][11]

 [11]: {{ site.baseurl }}/static/img/guide/platforms/ios/xcode_build_location.png

これは新しい Xcode のインストールの既定の設定が異なる Xcode の旧バージョンからのアップグレード、次を設定可能性があります。

詳細は、Apple のドキュメントを参照してください。

*   [開発開始 iOS アプリ今日][12]iOS アプリを開発するための手順の概要を提供します。

*   [メンバー センターのホーム ページ][13]はテクニカル リソース テクニカル リソース、プロビジョニング ポータル、配布ガイドおよびコミュニティ フォーラムを含むいくつかの iOS へのリンクを提供します。

*   [IOS 用ツール ワークフロー ガイド][9]

*   [Xcode ユーザー ガイド][14]

*   アップル世界広い開発者会議 2012 (WWDC2012) からの[セッションのビデオ][15]

*   [Xcode 選択コマンド][16]が複数ある場合、Xcode の正しいバージョンを指定することができますがインストールされています。

 [12]: http://developer.apple.com/library/ios/#referencelibrary/GettingStarted/RoadMapiOS/index.html#//apple_ref/doc/uid/TP40011343
 [13]: https://developer.apple.com/membercenter/index.action
 [14]: http://developer.apple.com/library/ios/#documentation/ToolsLanguages/Conceptual/Xcode4UserGuide/000-About_Xcode/about.html#//apple_ref/doc/uid/TP40010215
 [15]: https://developer.apple.com/videos/wwdc/2012/
 [16]: http://developer.apple.com/library/mac/#documentation/Darwin/Reference/ManPages/man1/xcode-select.1.html

(Mac ® OS X ® アップル ®、Xcode ® アプリ Store℠、iPad ®、iPhone ®、iPod ® ファインダー ® はアップル社の商標です）
