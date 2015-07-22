---
license: >
    Licensed to the Apache Software Foundation (ASF) under one
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

title: Embedding Cordova WebView on iOS
---

Embedding Cordova WebView on iOS
================================

Cordova 1.4 からは、 Cordova を iOS アプリケーションの中でコンポーネントとして使用できます。このコンポーネントのコードネームは "Cleaver" です。

Cordova 1.4 以降の Xcode テンプレートを用いて作られた新しい Cordova バースのアプリケーションは Cleaver を使用し、このテンプレートは Cleaver の参照実装と捉えられます。

Cordova 2.0.0 からは、 Cleaver を実装したサブプロジェクトのみをサポートしています。

必要なもの
-------------

1. **Cordova 2.0.0** またはそれ以降
2. **Xcode 4.3** またはそれ以降
3. `Cordova.plist` ファイル


Xcode プロジェクトへの Cleaver の追加 (CordovaLib サブプロジェクト)
-------------------------------------------------------------

0. Cordova を **インストール** します
1. `Cordova.plist` ファイルをディスクのプロジェクトフォルダー内に **コピー** します
2. `Cordova.plist` ファイルを Xcode の Project Navigator に **ドラッグアンドドロップ** します
3. **"Create groups for any added folders"** のラジオボタンを **選択** します
4. **Option-Command-A** キーを押します。ファイルをプロジェクトに追加するためのドロップダウン画面 (**"Add Files..." 画面**) が開きます。 **"Created groups for any added folders"** のラジオボタンが選択されていることを確認します
5. **Shift-Command-G** キーを押します。フォルダー移動のための別のドロップダウン画面 (**"Go to the folder:" 画面**) が開きます
6. `~/Documents/CordovaLib/` と入力し、 **"Go"** ボタンをクリックします
7. **"Add Files..." 画面** で `VERSION` ファイルを選択します
8. **"Add Files..." 画面** で **"Add"** ボタンをクリックします
9. **Option-Command-A** キーを押します。ファイルをプロジェクトに追加するためのドロップダウン画面 (**"Add Files..." 画面**) が開きます。 **"Created groups for any added folders"** のラジオボタンが選択されていることを確認します
10. **Shift-Command-G** キーを押します。フォルダー移動のための別のドロップダウン画面 (**"Go to the folder:" 画面**) が開きます
11. `~/Documents/CordovaLib/CordovaLib.xcodeproj` と入力し、 **"Go"** ボタンをクリックします
12. **"Add Files..." 画面** で **"Add"** ボタンをクリックします
13. Project Navigator で `CordovaLib.xcodeproj` を選択します
14. **File Inspector** を開くため、 **Option-Command-1** キーを押します
15. **Location** のドロップダウンメニューのため、 **File Inspector** から **"Relative to CORDOVALIB"** を選択します
16. Project Navigator の **Project アイコン** をクリックし、 **Target** を選択し、 **"Build Settings"** タブを選択します
17. **"Other Linker [Flags](../../cordova/file/flags/flags.html)"** の値に `-all_load` と `-Obj-C` を追加します
18. Project Navigator の **Project アイコン** をクリックし、 **Target** を選択し、 **"Build Phases"** タブを選択します
19. **"Link Binaries with Libraries"** を展開します
20. **"+" ボタン** をクリックし、以下の **framework** を追加します (オプションで、 Project Navigator の中でこれらを Frameworks グループに **移動** します):

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

21. **"Target Dependencies"** を展開します。 (もしこのラベルのボックスが複数ある場合は、一番上のものを選んでください)
22. **"+" ボタン** をクリックし、 `CordovaLib` ビルドプロダクトを追加します
23. **"Link Binaries with Libraries"** を展開します。
    (もしこのラベルのボックスが複数ある場合は、一番上のものを選んでください)
24. **"+" ボタン** をクリックし、 `libCordova.a` を追加します

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

