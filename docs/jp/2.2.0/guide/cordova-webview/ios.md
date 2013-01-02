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

Embedding Cordova WebView on iOS
================================

Cordova 1.4 からは、 Cordova を iOS アプリケーションの中でコンポーネントとして使用できます。このコンポーネントのコードネームは "Cleaver" です。

Cordova 1.4 以降の Xcode テンプレートを用いて作られた新しい Cordova バースのアプリケーションは Cleaver を使用し、このテンプレートは Cleaver の参照実装と捉えられます。

Cordova 2.0.0 以降は、 Cleaver を実装したサブプロジェクトのみをサポートしています。

必要なもの
-------------

1. **Cordova 2.1.0** またはそれ以降
2. **Xcode 4.3** またはそれ以降
3. `Cordova.plist` ファイル ([新しく作成した](guide_command-line_index.md.html#Command-Line%20Usage_ios) Cordova プロジェクトから)


Xcode プロジェクトへの Cleaver の追加 (CordovaLib サブプロジェクト)
-------------------------------------------------------------

1. ハードディスクの**恒久的なフォルダー** (例: ~/Documents/Cordova) に **Cordova をダウンロードし解凍**します
2. Xcode が起動している場合、 **終了** します
3. **Terminal.app** を使用して、Cordova をダウンロードしたディレクトリまで **移動**します
4. `Cordova.plist` ファイルをディスクのプロジェクトフォルダー内に **コピー** します (上の **必要なもの** を参照してください)
5. `Cordova.plist` ファイルを Xcode の Project Navigator に **ドラッグアンドドロップ** します
6. **"Create groups for any added folders"** のラジオボタンを **選択** し、 **Finish** ボタンをクリックします
7. `CordovaLib.xcodeproj` ファイルを Xcode の Project Navigator に **ドラッグアンドドロップ** します (上の、 CordovaLib のサブディレクトリ、恒久的なフォルダーから)
8. Project Navigator で `CordovaLib.xcodeproj` を選択します
9. **File Inspector** を開くため、 **Option-Command-1** キーを押します
10. **Location** のドロップダウンメニューのため、 **File Inspector** から **"Relative to CORDOVALIB"** を選択します
11. Project Navigator の **Project アイコン** をクリックし、 **Target** を選択し、 **"Build Settings"** タブを選択します
12. **"Other Linker Flags"** の値に `-all_load` と `-Obj-C` を追加します
13. Project Navigator の **Project アイコン** をクリックし、 **Target** を選択し、 **"Build Phases"** タブを選択します
14. **"Link Binaries with Libraries"** を展開します
15. **"+" ボタン** をクリックし、以下の **framework** を追加します (オプションで、 Project Navigator の中でこれらを Frameworks グループに **移動** します):

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

16. **"Target Dependencies"** を展開します。 (もしこのラベルのボックスが複数ある場合は、一番上のものを選んでください)
17. **"+" ボタン** をクリックし、 `CordovaLib` ビルドプロダクトを追加します
18. **"Link Binaries with Libraries"** を展開します。
    (もしこのラベルのボックスが複数ある場合は、一番上のものを選んでください)
19. **"+" ボタン** をクリックし、 `libCordova.a` を追加します
20. Xcode 設定 **"Xcode Preferences -> Locations -> Derived Data -> Advanced…"** を **"Unique"** にセットします
21. Project Navigator の **Project アイコン** をクリックし、 **Target** を選択し、 **"Build Settings"** タブを選択します
22. **"Header Search Paths"** で検索をします。この設定に、以下の値を追加します (クォートを含む)

        "$(TARGET_BUILD_DIR)/usr/local/lib/include"

        "$(OBJROOT)/UninstalledProducts/include"

        "$(BUILT_PRODUCTS_DIR)"

    **Cordova 2.1.0** では、 CordovaLib は **Automatic Reference Counting (ARC)** を使用するようにアップグレードされました。 CordovaLib を使用するにあたって **ARC** にアップグレードする必要はありませんが、もしプロジェクトを **ARC** を使用するようにアップグレードしたい場合は、メニューから Xcode migration wizard : **Edit -> Refactor -> Convert to Objective-C ARC…** を使用して、 **libCordova.a を選択解除** し、ウィザードを完了してください。

コード中での CDVViewController の使用法
------------------------------------

1. この **header** を追加します:

        #import <Cordova/CDVViewController.h>

2. **新しい** `CDVViewController` のインスタンスを作成し、どこかで保持します:

        CDVViewController* viewController = [CDVViewController new];

3. (_オプション_) `wwwFolderName` プロパティーをセットします (デフォルトは `"www"`):

        viewController.wwwFolderName = @"myfolder";

4. (_オプション_) `startPage` プロパティーをセットします (デフォルトは `"index.html"`):

        viewController.startPage = @"mystartpage.html";

5. (_オプション_) `useSplashScreen` プロパティーをセットします (デフォルトは `NO`):

        viewController.useSplashScreen = YES;

6. **view frame** をセットします (常にこれを最後のプロパティーとしてセットします):

        viewController.view.frame = CGRectMake(0, 0, 320, 480);

7. Cleaver を view に **追加** します:

        [myView addSubview:viewController.view];

HTML, CSS, JavaScript ファイルの追加
-------------------------------------------

1. **新しいフォルダー** を **ディスク上の** プロジェクト内に作成します。例として名前は `www` とします
2. **HTML, CSS, JavaScript ファイル** をこのフォルダーの中に入れます
3. このフォルダーを Xcode の Project Navigator に **ドラッグアンドドロップ** します
4. **"Create groups for any added folders"** のラジオボタンを **選択** します
5. `CDVViewController` をインスタンス化するとき、 **(1)** で作成したフォルダーに **適切な `wwwFolderName` と `startPage` プロパティーをセット** するか、デフォルト値を使用します (前のセクションを参照してください)。

        /*
         もし 'myfolder' という名前のフォルダーを作成し、
         startPage として 'mypage.html' を
         使用したい場合
        */
        viewController.wwwFolderName = @"myfolder";
        viewController.startPage = @"mypage.html"

