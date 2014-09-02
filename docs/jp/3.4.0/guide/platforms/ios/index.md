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

# iOS プラットフォームに関する解説

SDK 開発環境の設定方法、および、iOS 搭載のデバイス ( iPhone、iPad など ) への Cordova アプリの展開方法を説明します。
プラットフォーム固有の詳細情報に関しては、以下をご確認ください。

* iOS の設定
* iOS のアップグレード
* iOS WebViews
* iOS プラグイン
* iOS コマンドライン ツール

上記の 『 コマンドライン ツール 』 では、旧バージョン ( Cordova 3.0 以前 ) に実装されていたツールでの作業手順を記しています。
現コマンドライン インターフェイス ( CLI ) に関しては、『 コマンドライン インターフェイス 』 の記載内容をご確認ください。

## システム要件とサポート

iOS アプリのビルド時に必要となる Apple® ツールは、OS X オペレーティングシステム ( Intel 搭載の Mac ) 上でのみ動作します。Xcode® 4.5 ( 開発に必要な最低限のバージョン、iOS 6 SDK を実装 ) は、バージョン 10.7 Lion 以上の OS X 上でのみ動作します。
Apple の App Store℠ にアプリを提出する場合、Apple ツールの最新版が必要です。

iOS SDK と Xcode に実装されている iOS エミュレーターを使用して、Cordova の性能をテストすることができますが、App Store へ提出する前には、アプリの全性能を、実機上でテストする必要があります。実機には、最低限、5.x 系の iOS がインストールされている必要があります ( Cordova 2.3 でサポートしている、最小限の iOS バージョン )。サポート対象のデバイスは、iPad® モデルのすべて、iPhone® 3GS　以上、iPod® Touch 第 3 世代以上です。 デバイスにアプリをインストールするには、Apple の 
[iOS Developer Program](https://developer.apple.com/programs/ios/) の会員である必要があります ( 年会費 99 ドル )。ここでは、iOS エミュレータへのアプリの展開方法を解説します ( エミュレータへの展開の場合、Developer Program への登録は不要です )。

## SDK のインストール

Xcode のダウンロード方法には、2 通りあります。

* [App Store](https://itunes.apple.com/us/app/xcode/id497799835?mt=12) から "Xcode" をダウンロードします。

* [Apple Developer ダウンロード](https://developer.apple.com/downloads/index.action) から取得します。Apple Developer へ登録する必要があります。

Xcode のインストール後、Cordova を実行するため、コマンドライン ツール を有効にする必要があります。
__Xcode__ メニューから、 __Preferences__ を選択して、次に __Downloads__ タブを選択します。 __Components__ 画面の一覧表の __Command Line Tools__ の横に表示された __Install__ ボタンを押します。

## SDK でプロジェクトを開く

`cordova` ユーティリティを使用して、『 コマンドライン インターフェイス 』 の記載内容に従い、プロジェクトを新規作成します。
たとえば、ソースコードディレクトリ上で以下のコマンドを実行します。

        $ cordova create hello com.example.hello "HelloWorld"
        $ cd hello
        $ cordova platform add ios
        $ cordova prepare              # or "cordova build"

作成後は、Xcode 上で開くことができます。 `hello/platforms/ios/hello.xcodeproj` ファイルを、ダブルクリックして開きます。
以下のような画面が表示されます。

![](img/guide/platforms/ios/helloworld_project.png)

## エミュレーターへの展開

iOS エミュレータ上で、アプリを起動させる場合、以下の手順に従います。

1. 左側の画面上で、 _.xcodeproj_ ファイルが選択されているか確認してください。

2. 左から 2 番目の枠内の __hello__ アプリを選択します。

3. ツールバー上の __Scheme__ メニューから、対象のデバイスを選択します。ここでは、以下のように、iPhone 6.0 Simulator を選択します。

   ![](img/guide/platforms/ios/select_xcode_scheme.png)

4. ツールバーの左端 ( __Scheme__ メニューの左 ) の __Run__ ボタンを押します。ボタンを押すと、ビルド、ならびに、エミュレータへのアプリの展開および実行を行います。エミュレータアプリが別個に起動して、アプリの表示を行います。

   ![](img/guide/platforms/ios/HelloWorldStandard.png)

   1 度に実行できるエミュレータは、1 つです。別のエミュレータ上でアプリのテストを行う場合には、エミュレータアプリを閉じて、Xcode 上で別のデバイスを選択します。

Xcode には、最新バージョンの iPhone と iPad 用の複数のエミュレータが実装されています。旧バージョンのいくつかは、 __Xcode &rarr;
Preferences &rarr; Downloads &rarr; Components__ から使用できます。

## デバイスへの展開

デバイスへの展開時の各種要件に関しては、Apple の [iOS ツールワークフロー ガイド](http://developer.apple.com/library/ios/#documentation/Xcode/Conceptual/ios_development_workflow/00-About_the_iOS_Application_Development_Workflow/introduction.html#//apple_ref/doc/uid/TP40007959) の _開発アセット、配布アセットの設定_ をご確認ください。展開時の手順を、以下に、簡単に説明します。

1. Apple iOS Developer Program に登録します。

2. [iOS Provisioning Portal](https://developer.apple.com/ios/manage/overview/index.action) で、 _プロビジョニング プロファイル_ を作成します。 _Development Provisioning Assistant_ を使用して、Xcode 側で必要とする、プロファイルと証明書を、作成・インストールすることができます。

3. プロジェクトの設定内の _コード署名 ( Code Signing )_ 項目の _コード署名 ID ( Code Signing Identity )_ に、開発者のプロビジョニング プロファイルの名前が設定されているか確認します。

デバイス上に展開する手順を以下に記します。

1. USB ケーブルを使用して、デバイスと Mac を接続します。

2. Xcode ウィンドウ上の __Scheme__ ドロップダウン リストから、プロジェクトの名前を選択します。
   drop-down list.

3. __Devices__ 一覧からデバイスを選択します。 USB 接続を使用していると、デバイスが一覧上で表示されない場合があります。その場合には、 __Organizer__ から問題を解決してください。

4. __実行__ ボタンを押して、ビルド、ならびに、デバイスへのアプリの展開および実行を行います。
   on your device.

## 注意事項

__廃止された API に関する注意点__ : 新 API、または別の API が存在して、現 API の変更・置き換えをしなければならない場合、 _廃止 ( deprecated )_ と注意書きされています。対象の API は、一定期間中は使用することができますが、その期間を越えると削除されます。
廃止対象のインターフェイスのいくつかは、Apache Cordova 側にも反映されます。また、Xcode 側では、アプリのビルド・展開のときに、これらのインターフェイスに関しては、警告 ( Warnings ) が発行されます。

`invokeString` メソッドについての　Xcode の警告メッセージは、カスタム URL ( custom ) からアプリを起動する機能と関係があります。
カスタム URL から読み込みを行う機能は変更されているため、このコードを使用して、旧バージョンの Cordova アプリ用に後方互換性を提供しています。このサンプルアプリでは、この機能は使用していませんので、これらの警告を無視することもできます。警告の表示を止めたい場合には、廃止した invokeString API を参照しているコードを削除します。

* _Classes/MainViewController.m_ ファイル内を変更します。コメントマーク ( `/*` と `*/` ) を挿入して、以下のコードをコメントアウトします。挿入後、 __Command-s__ ショットカットキーをタイプして、変更を保存します。

        (void)webViewDidFinishLoad:(UIWebView*)theWebView
        {
        // ___PROJECTNAME__-Info.plist 内で、取り扱うプロトコルを指定している場合だけ、有効です。
        /*
        if (self.invokeString) {
          // deviceready イベントが発火する前に、ここを通過します。これにより、deviceready を受け取るときに、js 内で、アクセスできます。
          NSLog(@"window.invokeString は、廃止されています。window.handleOpenURL(url) 関数を代わりに使用してください。こちらの関数は、 カスタム URL スキーム ( custom scheme url )経由で、アプリが起動したときに、常に、呼び出されます。");
          NSString* jsString = [NSString stringWithFormat:@"var invokeString = \"%@\";", self.invokeString];
          [theWebView stringByEvaluatingJavaScriptFromString:jsString];
        }
        */
        // ネイティブアプリの背景色と一致するよう、黒を設定します。
        theWebView.backgroundColor = [UIColor blackColor];

        return [super webViewDidFinishLoad:theWebView];
        }

* _Classes/AppViewDelegate.m_ ファイル内を変更します。スラッシュを 2 つ挿入して、以下のラインをコメントアウトします。次に、 __Command-s__ ショットカットキーをタイプして、ファイルの変更を保存します。

        //self.viewController.invokeString = invokeString;

* __Command-b__ ショートカットキーをタイプして、プロジェクトの再ビルドを行い、警告メッセージを止めます。

<!-- この修正で支障なく実行できるのは、次の "cordova prepare" まで？ ( おそらく、開発者のメモ書きと思われます ) -->

__ヘッダーがありません ( Missing Header ) __ : Build Location ( ビルドロケーション ) に問題があることから発生するコンパイルエラー ( ヘッダーの欠如も起因 ) です。Xcode の Preference から修正できます。

1. __Xcode &rarr; Preferences &rarr; Locations__ を選択します。

2. __Derived Data__ 項目の左下の __Advanced__ ボタンを押して、 __Build Location__ 項目の __Unique__ を選択します。

   ![](img/guide/platforms/ios/xcode_build_location.png)

こちらが Xcode の新規インストール時のデフォルト設定です。Xcode の旧バージョンからアップグレードを行う場合には、異なる設定になっている場合があります。

詳細に関しては、Apple のドキュメントをご確認ください。

*  [Start Developing iOS Apps Today ( 今日から始めよう、iOS アプリ開発 )](http://developer.apple.com/library/ios/#referencelibrary/GettingStarted/RoadMapiOS/index.html#//apple_ref/doc/uid/TP40011343) では、iOS アプリの開発手順の概要を解説しています。

* [メンバーセンターのホームページ](https://developer.apple.com/membercenter/index.action) では、複数の iOS 開発関連のリソースへのリンクを提供しています。開発関連のリソースには、開発関連の情報、provisioning portal、配布ガイド、コミュニティフォーラムなどが含まれます。

* [iOS ツールワークフローガイド](http://developer.apple.com/library/ios/#documentation/Xcode/Conceptual/ios_development_workflow/00-About_the_iOS_Application_Development_Workflow/introduction.html#//apple_ref/doc/uid/TP40007959)

* [Xcode 4 ユーザーガイド](http://developer.apple.com/library/ios/#documentation/ToolsLanguages/Conceptual/Xcode4UserGuide/000-About_Xcode/about.html#//apple_ref/doc/uid/TP40010215)

* [講演ビデオ](https://developer.apple.com/videos/wwdc/2012/) Apple World Wide Developer Conference 2012 ( WWDC2012 ) での講演 ( Session ) を録画しています。

* [xcode-select コマンド](http://developer.apple.com/library/mac/#documentation/Darwin/Reference/ManPages/man1/xcode-select.1.html) は、複数の Xcode がインストールされている場合、対象の Xcode のバージョンを指定するときに使用します。

(Mac®、OS X®、Apple®、Xcode®、App Store℠、iPad®、iPhone®、iPod® および Finder® は、Apple 社の登録商標マークです。)
