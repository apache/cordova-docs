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

# iOS WebView

比較的に規模が大きい Android アプリへ　Cordova WebView コンポーネントを組み込む方法に関して、この節で解説します。
これらのコンポーネント間の処理に関しては、『 プラグイン開発ガイド 』 ( 原文 「 Application Plugins 」 ) をご確認ください。

`Cleaver` コンポーネントを使用する、iOS WebView のサポートは、Cordova バージョン 1.4 から始まりました。
Xcode テンプレートに実装している Cleaver コンポーネントは、リファレンス実装 ( reference implementaion ) として提供しています。2.0 以降の Cordova での Cleaver の実装は、サブプロジェクトのレベルでのみサポートします。

下記の手順を行うには、Cordova 2.3 と Xcode 4.5 以上、ならびに、新規作成した iOS プロジェクトの `config.xml` ファイルが必要となります。プロジェクトの新規作成を行うときには、『 コマンドライン インターフェイス 』 の記載内容をご確認ください。 `config.xml` は、
アプリのサブディレクトリの `platforms/ios` 下に置かれています。

また、最新の Cordova を入手してください。 [cordova.apache.org](http://cordova.apache.org) から最新版をダウンロードして、iOS パッケージを解凍します。

## Xcode プロジェクトへの Cleaver の追加 ( CordovaLib サブプロジェクト )

1. Xcode を実行している場合、終了させます。

1. Terminal を使用して、Cordova iOS のソースディレクトリへ移動します。

1. 上述した `config.xml` ファイルを、プロジェクトのディレクトリへコピーします。

1. Xcode の Finder を使用して、 `config.xml` を検索して、 __Project Navigator__ ウィンドウ上に、ファイルをコピーします。

1. __Create groups for any added folders__ を選択して、 __Finish__ をクリックします。

1. Finder を使用して、 `CordovaLib/CordovaLib.xcodeproj` を検索して、 __Project Navigator__ 上に、ファイルをコピーします。

1. __Project Navigator__ 上の `CordovaLib.xcodeproj` を選択します。

1. __Option-Command-1__ のショートカットキーを押して、 __File Inspector__ を表示します。

1. __File Inspector__ の __Location__ ドロップダウンメニューから、 __Relative to Group__ を選択します。

1. __Project Navigator__ 上の __プロジェクトアイコン__ を選択して、次に、 __Target__ を選択して、そして、 __Build Settings__ タブを選択します。

1. __Other Linker Flags__ 項目に、 `-force_load` と `-Obj-C` を追加します。

1. Project Navigator 上の __プロジェクトアイコン__ を選択して、次に、 __Target__ を選択して、そして、 __Build Phases__ タブを選択します。

1. __Link Binaries with Libraries__ を開きます。

1. __+__ ボタンをクリックして、以下の __フレームワーク__ を追加します。または、 __Project Navigator__ 上で、これらのフレームワークを __Frameworks__ グループ下に置いて、追加することもできます。

        AddressBook.framework
        AddressBookUI.framework
        AudioToolbox.framework
        AVFoundation.framework
        CoreLocation.framework
        MediaPlayer.framework
        QuartzCore.framework
        SystemConfiguration.framework
        MobileCoreServices.framework
        CoreMedia.framework

1. __Target Dependencies__ を開きます。

1. __+__ ボタンをクリックして、 `CordovaLib` を追加します。

1. __Link Binaries with Libraries__ を開きます。

1. __+__ ボタンをクリックして、 `libCordova.a` を追加します。

1. __Xcode Preferences &rarr; Locations &rarr; Derived Data
   &rarr; Advanced...__ を選択して、 __Unique__ に設定します。

1. Project Navigator 上の __プロジェクトアイコン__ を選択して、次に、 __Target__ を選択して、そして、 __Build Settings__ タブを選択します。

1. __Header Search Paths__ に移動して、以下の 3 つの値 ( 引用符を含む ) を追加します。

        "$(TARGET_BUILD_DIR)/usr/local/lib/include"        
        "$(OBJROOT)/UninstalledProducts/include"
        "$(BUILT_PRODUCTS_DIR)"

    Cordova 2.1.0 では、 __Automatic Reference Counting ( ARC )__ を使用できるように、 `CordovaLib` のアップグレードを行っています。 `CordovaLib` を使用するために、 __ARC__ にアップグレードを行う必要はありません。ただし、 __ARC__ を使用するために、プロジェクトをアップグレードしたい場合には、メニューから Xcode migration wizard を起動させて、 __Edit &rarr; Refactor &rarr; Convert to Objective-C ARC...__ を選択して、libCordova.a を非選択にして、ウィザードの最終ステップまで終了させてください。

## CDVViewController の使用

1. 以下の記述を追加します。

        #import <Cordova/CDVViewController.h>

1. `CDVViewController` を新規にインスタンス化して、インスタンスを保持 ( クラスプロパティなどを使用 ) しておきます。

        CDVViewController* viewController = [CDVViewController new];

1. `wwwFolderName` プロパティを、任意で設定することもできます ( デフォルトは、 `www` )。

        viewController.wwwFolderName = @"myfolder";

1. `config.xml` ファイルの `<content>` タグのスタートページに、ローカルのファイルを、任意に設定するか。。。

        <content src="index.html" />

    または、リモートサイトを、任意に設定できます。

        <content src="http://apache.org" />

1. `useSplashScreen` プロパティを、任意で設定することもできます ( デフォルトは、 `NO` )。 

        viewController.useSplashScreen = YES;

1. __view frame__ を設定します。このプロパティは、常に、最後に設定します。

        viewController.view.frame = CGRectMake(0, 0, 320, 480);

1. view に Cleaver を追加します。

        [myView addSubview:viewController.view];

## HTML・CSS・JavaScript アセット ( Assets ) の追加

1. プロジェクト内にディレクトリを新規作成します ( 例 : `www` )。

1. このディレクトリーに、HTML・CSS・JavaScript アセットを置きます。

1. Xcode の Finder を使用して、 __Project Navigator__ ウィンドウ上に、このディレクトリをコピーします。

1. __Create folder references for any added folders__ を選択します。

1. ディレクトリの `wwwFolderName` と `startPage` プロパティを、適宜、設定します。または、 `CDVViewController` をインスタンス化するときのデフォルト ( 上述のデフォルト値を参照のこと ) を使用します。

        /*
         下記の例では、 'myfolder' と 'mypage.html' を設定していますが、適宜、変更できます。
        */
        viewController.wwwFolderName = @"myfolder";
        viewController.startPage = @"mypage.html"

