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

通常は、以下の `Cordova.framework` の手順に従ってください。 `CordovaLib` サブプロジェクトの手順は、 Cordova のコアデベロッパーもしくはカスタム `CordovaLib` のあるユーザ向けとなっています (コアのデバッグを容易にするため)。

必要なもの
-------------

1. **Cordova 1.4.1** またはそれ以降
2. **Xcode 4.2** またはそれ以降
3. `Cordova.plist` ファイル

Xcode プロジェクトへの Cleaver の追加 (Cordova.framework)
--------------------------------------------------------

1. `Cordova.plist` ファイルをディスクのプロジェクトフォルダー内に **コピー** します
2. `Cordova.plist` ファイルを Xcode の Project Navigator に **ドラッグアンドドロップ** します
3. **"Create groups for any added folders"** のラジオボタンを **選択** します
4. **Option-Command-A** キーを押します。ファイルをプロジェクトに追加するためのドロップダウン画面 (**"Add Files..." 画面**) が開きます。 **"Created groups for any added folders"** のラジオボタンが選択されていることを確認します
5. **Shift-Command-G** キーを押します。フォルダー移動のための別のドロップダウン画面 (**"Go to the folder:" 画面**) が開きます
6. `/Users/Shared/Cordova/Frameworks/Cordova.framework` と入力し、 **"Go"** ボタンをクリックします
7. **"Add Files..." 画面** で **"Add"** ボタンをクリックします
8. Project Navigator で `Cordova.framework` を選択します
9. **File Inspector** を開くため、 **Option-Command-1** キーを押します
10. **Location** のドロップダウンメニューのため、 **File Inspector** から **"Absolute Path"** を選択します
11. Project Navigator の **Project アイコン** をクリックし、 **Target** を選択し、 **"Build Settings"** タブを選択します
12. **"Link Binaries with Libraries"** を展開します
13. **"+" ボタン** をクリックし、以下の **framework** を追加します (オプションで、 Project Navigator の中でこれらを Frameworks グループに **移動** します):

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

Xcode プロジェクトへの Cleaver の追加 (CordovaLib サブプロジェクト)
-------------------------------------------------------------

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
17. 検索フィールドに **"Header Search Paths"** と入力します
18. **"Header Search Paths"** の値に `$(CORDOVALIB)/Classes` を追加し、 **Recursive** チェックボックス (このチェックボックスはラベルがない可能性があります) にチェックします
19. **"Other Linker [Flags](../../cordova/file/flags/flags.html)"** の値に `-all_load` と `-Obj-C` を追加します
20. Project Navigator の **Project アイコン** をクリックし、 **Target** を選択し、 **"Build Phases"** タブを選択します
21. **"Link Binaries with Libraries"** を展開します
22. **"+" ボタン** をクリックし、以下の **framework** を追加します (オプションで、 Project Navigator の中でこれらを Frameworks グループに **移動** します):

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

23. **"Target Dependencies"** を展開します。
    (もしこのラベルのボックスが複数ある場合は、一番上のものを選んでください)
24. **"+" ボタン** をクリックし、 `CordovaLib` ビルドプロダクトを追加します
25. **"Link Binaries with Libraries"** を展開します。
    (もしこのラベルのボックスが複数ある場合は、一番上のものを選んでください)
26. **"+" ボタン** をクリックし、 `libCordova.a` を追加します

CordovaLib サブプロジェクトへの新規クラスの追加
--------------------------------------------

通常、もし既存の CordovaLib クラスだけを編集したりデバッグするだけならば
上のステップに問題はありません。しかし、もし新しいクラスを追加している場合、
次の追加ステップが必要になります:

1. Xcode のプロジェクトの Frameworks ディレクトリから
   `Cordova.framework` を削除します。
2. ステップ18から20までを再度行います。 dependencies や libraries が
   プロジェクトの Target の Build Phases の中の一番上のボックス
   であることを確認してください。
3. プロジェクトの Target の Build Settings で、 "Other Linker [Flags](../../cordova/file/flags/flags.html)" を
   検索します。 `-Obj-C` と `-all_load` をこれに追加します。

コード中での CDVViewController の使用法
------------------------------------

1. `Cordova.framework` を使用している場合、この **header** を追加します:

        #import <Cordova/CDVViewController.h>

2. `CordovaLib` サブプロジェクトを使用している場合、この **header** を追加します:

        #import "CDVViewController.h"

3. **新しい** `CDVViewController` のインスタンスを作成し、どこかで保持します:

        CDVViewController* viewController = [CDVViewController new];

4. (_オプション_) `wwwFolderName` プロパティーをセットします (デフォルトは `"www"`):

        viewController.wwwFolderName = @"myfolder";

5. (_オプション_) `startPage` プロパティーをセットします (デフォルトは `"index.html"`):

        viewController.startPage = @"mystartpage.html";

6. (_オプション_) `useSplashScreen` プロパティーをセットします (デフォルトは `NO`):

        viewController.useSplashScreen = YES;

5. **view frame** をセットします (常にこれを最後のプロパティーとしてセットします):

        viewController.view.frame = CGRectMake(0, 0, 320, 480);

6. Cleaver を view に **追加** します:

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

