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

Upgrading Cordova iOS
=====================

**Xcode 4 が必須** であることに注意してください。 Apple App Store に提出するためには、最新バージョンの iOS SDK (iOS 5.1) を使用する必要があります。 iOS 5.1 は Xcode 4 を必要とします。

## 2.0.0 から 2.1.0 へのアップグレード ##

**Cordova 2.1.0** では、 CordovaLib は **Automatic Reference Counting (ARC)** を使用するようにアップグレードされました。 CordovaLib を使用するにあたって **ARC** にアップグレードする必要はありませんが、もしプロジェクトを **ARC** を使用するようにアップグレードしたい場合は、メニューから Xcode migration wizard : **Edit -> Refactor -> Convert to Objective-C ARC…** を使用して、 **libCordova.a を選択解除** し、ウィザードを完了してください。

1. ハードディスクの**恒久的なフォルダー** (例: ~/Documents/Cordova-2.1.0) に **Cordova 2.1.0 をダウンロードし解凍**します
2. Xcode が起動している場合、 **終了** します
3. **Terminal.app** を使用して、Cordova をダウンロードしたディレクトリまで **移動**します
4. コマンドラインツールから [**新規プロジェクトを作成**](guide_command-line_index.md.html#Command-Line%20Usage_ios) します - この新規プロジェクトからアセットを持っていきます
5. 新規プロジェクトから **www/cordova-2.1.0.js** ファイルを **www** フォルダーに **コピー** し、 **www/cordova-2.0.0.js** ファイルを削除します
6. **www/index.html** ファイル (また、他に Cordova script を参照しているファイル) の Cordova script 参照部分を、新しい **cordova-2.1.0.js** ファイルを参照するように **更新** します
7. **AppDelegate.m** を新規プロジェクトから更新 (または、もしファイルを変更してなかった場合は置換) します:
    - 編集されたもの -> application:didFinishLaunchingWithOptions:
    - 追加されたもの -> application:supportedInterfaceOrientationsForWindow:
8. **MainViewController.m** を新規プロジェクトから更新 (または、もしファイルを変更してなかった場合は置換) します:
    - 追加されたもの -> viewWillAppear
9. **"cordova"** フォルダーを新しいプロジェクトから既存プロジェクトのルートフォルダーにコピーします **(2.1.0 では、スペースを含むパスをサポートするようになりました)**
10. **プロジェクト** から **VERSION** ファイルの参照を削除します (CordovaLib にあるものでは**ありません**)
11. 次に、 CordovaLib のサブプロジェクトの参照を更新します。 Cordova 2.1.0 から、 CordovaLib がどこに存在するかを示す CORDOVALIB という Xcode の変数は使用しなくなり、絶対ファイル参照となりました。
    1. **Terminal.app** を起動します
    2. **ステップ 1** で Cordova をインストールした位置の、 **bin** サブフォルダーに移動します
    3. 以下のスクリプトを走らせます。パラメーターは、プロジェクトの **.xcodeproj** ファイルへのパスです

        `update_cordova_subproject path/to/your/project/xcodeproj`

## 1.9.0 から 2.0.0 へのアップグレード ##

1. Cordova 2.0.0 を **インストール** します
2. コマンドラインツールから [**新規プロジェクトを作成**](guide_command-line_index.md.html#Command-Line%20Usage_ios) します - この新規プロジェクトからアセットを持っていきます
3. 新規プロジェクトから **www/cordova-2.0.0.js** ファイルを **www** フォルダーに **コピー** し、 **www/cordova-1.9.0.js** ファイルを削除します
4. **www/index.html** ファイル (また、他に Cordova script を参照しているファイル) の Cordova script 参照部分を、新しい **cordova-2.0.0.js** ファイルを参照するように **更新** します
5. 新規プロジェクトから **"cordova"** フォルダーを、 root フォルダーにコピーします (もしコマンドラインツールを使用したい場合)
6. **Cordova.plist** ファイル (**Supporting Files** グループの下) の中の **Plugins** 以下に新しいエントリーを **追加** します - キーは **Device** で値は **CDVDevice** です
7. **Cordova.framework** を削除します
8. **Supporting Files** グループから **verify.sh** を削除します
9. Project Navigator の **Project アイコン** をクリックし、 **Target** を選択し、 **"Build Settings"** タブを選択します
10.  **"Preprocessor Macros"** を検索し、すべての **"CORDOVA_FRAMEWORK=1"** の値を削除します
11. ハードドライブのホームディレクトリの下の **Documents** フォルダーにインストールされた **CordovaLib** フォルダーを開きます
12. **CordovaLib** フォルダーの中にある **CordovaLib.xcodeproj** ファイルを見つけ、ファイルをプロジェクトに **ドラッグアンドドロップ** します - このフォルダは **サブプロジェクト** として表示されるはずです
13. プロジェクトを **ビルド** します。いくつかの **#import** ディレクティブに関する **エラー** が検出されるはずです
14. **#import に関するエラー** に対しては、すべての **引用符ベースの** import 文を、次から:

        #import "CDV.h"

    次の **山括弧ベース** のスタイルに変更します:

        #import <Cordova/CDV.h>

    そして、 **#ifdef** で囲まれたすべての Cordova に関する import を削除します。これらはもう必要ありません (import は **統合** されました)
15. プロジェクトを再び **ビルド** します。ここでは、 **#import** エラーが検出されないはずです
16. Project Navigator の **Project アイコン** をクリックし、 **Target** を選択し、 **"Build Phases"** タブを選択します
17. **"Target Dependencies"** phase を展開し、 **"+"** ボタンを選択します
18. **"CordovaLib"** target を選択し、 **"Add"** ボタンを選択します
19. 一番上の **"Link Binary with Libraries"** phase (既に多くの framework が入っているはずです) を展開し、 **"+"** ボタンを選択します
20. **libCordova.a** static library を選択し、 **"Add"** ボタンを選択します
21. **"Ran Script"** phase を削除します
22. Project Navigator の **Project アイコン** をクリックし、 **Target** を選択し、 **"Build Settings"** タブを選択します
23. **"Other Linker Flags"** を探し、 **-all_load** と **-Obj-C** を値に追加します
24. **"CordovaLib" sub-project** を展開します
25. **"VERSION"** ファイルを見つけ、メインプロジェクトにドラッグします (ここではコピーではなくリンクを作成します)
26. **"Create groups for any added folders"** ラジオボタンを選択し、 **"Finish"** ボタンを選択します
27. 前のステップでドラッグした **"VERSION"** ファイルを選択します
28. **File Inspector** を開くため、 **Option-Command-1** キーを押します (または、メニューから **View -> Utilities -> Show File Inspector**)
29. **Location** のドロップダウンメニューのため、 **File Inspector** から **"Relative to CORDOVALIB"** を選択します
30. プロジェクトを **ビルド** します。 **問題なく** コンパイルされるはずです
31. **Scheme** ドロップダウンから **プロジェクトを選択** し、 **"iPhone 5.1 Simulator"** を選択します
32. **Run** ボタンを選択します

**注意1:**
もしプロジェクトがシミュレーターで期待通りに **動かない** 場合は、 **Xcode のコンソールログ** にある **すべてのエラーに注意して** 原因を探ってください。

**注意2:**
**統合した #import ヘッダー** が機能するために、ビルドプロダクトは **同じビルドディレクトリでビルドする** 必要があります。 **"Xcode Preferences -> Locations -> Derived Data -> Advanced…"** の設定を **"Unique"** に変更する必要があるかもしれません。

## 1.8.x から 1.9.0 へのアップグレード ##

1. Cordova 1.9.0 を **インストール** します
2. **新規プロジェクトを作成します** - この新規プロジェクトからアセットを持っていきます
3. 新規プロジェクトから **www/cordova-1.9.0.js** ファイルを **www** フォルダーに **コピー** し、 **www/cordova-1.8.x.js** ファイルを削除します
4. **www/index.html** ファイル (また、他に Cordova script を参照しているファイル) の Cordova script 参照部分を、新しい **cordova-1.9.0.js** ファイルを参照するように **更新** します

**注意:**

1.9.0 は、 Cordova.plist で新しい boolean の **"BackupWebStorage"** 設定値をサポートします。デフォルトでは、これは有効に設定されています。 "false" と設定することで無効にすることができます (特に iOS 6 のため) 。詳しくは [Release Notes - Safari and UIKit Section](https://developer.apple.com/library/prerelease/ios/#releasenotes/General/RN-iOSSDK-6_0/_index.html) を参照してください


## 1.7.0 から 1.8.x へのアップグレード ##

1. Cordova 1.8.0 を **インストール** します
2. **新規プロジェクトを作成します** - この新規プロジェクトからアセットを持っていきます
3. 新規プロジェクトから **www/cordova-1.8.0.js** ファイルを **www** フォルダーに **コピー** し、 **www/cordova-1.7.x.js** ファイルを削除します
4. **www/index.html** ファイル (また、他に Cordova script を参照しているファイル) の Cordova script 参照部分を、新しい **cordova-1.8.0.js** ファイルを参照するように **更新** します

もし **Capture API** を使う場合は、新しい **iPad retina-display** アセットが必要です:

1.  新規プロジェクトから **Resources/Capture.bundle** を既存プロジェクトの **Resources/Capture.bundle** に上書きコピーします
2.  既存プロジェクトで、 Xcode の Project Navigator の中の **Capture.bundle** を選択し、 **Delete** キーを押します。ポップアップダイアログで、 **Remove Reference** を選択します
3.  ステップ1から新しい **Capture.bundle** を Xcode の Project Navigator 上にドラッグし、 **Create groups for any added folders** ラジオボタンを選択します

## 1.6.x から 1.7.0 へのアップグレード ##

1. Cordova 1.7.0 を **インストール** します
2. **新規プロジェクトを作成します** - この新規プロジェクトからアセットを持っていきます
3. 新規プロジェクトから **www/cordova-1.7.0.js** ファイルを **www** フォルダーに **コピー** し、 **www/cordova-1.6.0.js** ファイルを削除します
4. **www/index.html** ファイル (また、他に Cordova script を参照しているファイル) の Cordova script 参照部分を、新しい **cordova-1.7.0.js** ファイルを参照するように **更新** します

## 1.5.0 から 1.6.x へのアップグレード ##

1. Cordova 1.6.1 を **インストール** します
2. プロジェクト内の **AppDelegate.m**, **AppDelegate.h**, **MainViewController.m**, **MainViewController.h**, **Cordova.plist** の **バックアップを作成します**
3. **新規プロジェクトを作成します** - この新規プロジェクトからアセットを持って行きます
4. 以下のファイルを **新しい** プロジェクトから1.5.0ベースのプロジェクトのフォルダーにコピーし、古いファイルは **置き換え** ます (上のステップ2でファイルを **バックアップ** します):

        AppDelegate.h
        AppDelegate.m
        MainViewController.h
        MainViewController.m
        Cordova.plist
5. すべての新しい **MainViewController** と **AppDelegate** ファイルを Xcode プロジェクトに **追加** します
6. 新規プロジェクトから **www/cordova-1.6.1.js** ファイルを **www** フォルダーに **コピー** し、 **www/cordova-1.5.0.js** ファイルを削除します
7.  **www/index.html** ファイル (また、他に Cordova script を参照しているファイル) の Cordova script 参照部分を、新しい **cordova-1.6.1.js** ファイルを参照するように **更新** します
8. 新しい **Cordova.plist** ファイルをプロジェクトに **追加** します - これは、 Android や Blackberry のものと一致するような、統一した Cordova JavaScript ファイル (cordova-js) にするよう、コアプラグインサービス名を変更するためです
9. **バックアップした Cordova.plist** にあった各設定, **Plugins**, **ExternalHosts** を新しい **Cordova.plist** に **統合** します
10. **バックアップした AppDelegate.h 及び AppDelegate.m** にあったプロジェクト固有のコードを新しい AppDelegate ファイルに **統合** します。 **AppDelegate.m** の中の **UIWebViewDelegate** または **CDVCommandDelegate** にあったコードは MainViewController.m に移動します (詳しくはファイル中のコメントアウトされた箇所を参照してください)
11. **バックアップした MainViewController.h 及び MainViewController.m** にあったプロジェクト固有のコードを新しい MainViewController ファイルに **統合** します
12. Project Navigator の **Project アイコン** をクリックし、 **Project** を選択し、 **"Build Settings"** タブを選択します
13. 検索フィールドに **"Compiler for C/C++/Objective-C"** と入力します
14. **"Apple LLVM Compiler 3.1"** を選択します


## 1.4.x から 1.5.0 へのアップグレード ##

1. Cordova 1.5.0 を **インストール** します
2. **新規プロジェクトを作成し** 一度実行します - この新規プロジェクトからアセットを持って行きます
3. 新規プロジェクトから **www/cordova-1.5.0.js** ファイルを **www** フォルダーに **コピー** し、 **www/cordova-1.5.x.js** ファイルを削除します
4. **www/index.html** ファイル (また、他に Cordova script を参照しているファイル) の Cordova script 参照部分を、新しい **cordova-1.5.0.js** ファイルを参照するように **更新** します
5. Project Navigator から **"PhoneGap.framework"** を探し、選択します
6. **Delete** キーを押して、 Project Navigator の中の **"PhoneGap.framework"** の参照を削除します
7. **Option-Command-A** キーを押します。ファイルをプロジェクトに追加するためのドロップダウン画面 (**"Add Files.." 画面**) が開きます。 **"Created groups for any added folders"** のラジオボタンが選択されていることを確認します
8. **Shift-Command-G** キーを押します。フォルダー移動のための別のドロップダウン画面 (**"Go to the folder:" 画面**) が開きます
9. **"/Users/Shared/Cordova/Frameworks/Cordova.framework"** と入力し、 **"Go"** ボタンをクリックします
10. **"Add Files.." 画面** で **"Add"** ボタンをクリックします
11. Project Navigator で **"Cordova.framework" を選択** します
12. **File Inspector** を開くため、 **Option-Command-1** キーを押します
13. **Location** のドロップダウンメニューのため、 **File Inspector** から **"Absolute Path"** を選択します
14. **Option-Command-A** キーを押します。ファイルをプロジェクトに追加するためのドロップダウン画面 (**"Add Files.." 画面**) が開きます。 **"Created groups for any added folders"** のラジオボタンが選択されていることを確認します
15. **Shift-Command-G** キーを押します。フォルダー移動のための別のドロップダウン画面 (**"Go to the folder:" 画面**) が開きます
16. **"~/Documents/CordovaLib/Classes/deprecated"** と入力し、 **"Go"** ボタンをクリックします
17. **"Add Files.." 画面** で **"Add"** ボタンをクリックします
18. **AppDelegate.h, AppDelegate.m, MainViewController.h** ファイルの **#ifdef PHONEGAP_FRAMEWORK** の部分を以下に置き換えます:

        #import "CDVDeprecated.h"
19. Project Navigator の **Project アイコン** をクリックし、 **Target** を選択し、 **"Build Settings"** タブを選択します
20. **"Framework Search Paths"** を探します
21. 値を **"/Users/Shared/Cordova/Frameworks"** に置き換えます
22. **"Preprocessor Macros"** を探します
23. 最初の (複合の) 値を **"CORDOVA_FRAMEWORK=YES"** に置き換えます
24. **"Build Phases"** タブを選択します
25. **"Run Script"** を展開します
26. すべての **PhoneGap** を **Cordova** に置き換えます
27. Project Navigator から **"PhoneGap.plist"** を探し、ファイル名をクリックしてファイル名が編集可能な状態にします
28. ファイル名の **"PhoneGap.plist"** を **"Cordova.plist"** に変更します
29. **"Cordova.plist"** を右クリックし、**"Open As" --> "Source Code"** を選択します
30. **Option-Command-F** キーを押し、 Source ウィンドウ左上のドロップダウンから **"Replace"** を選択します
31. 検索文字に **com.phonegap** 、置換文字に **org.apache.cordova** を入力します。 **"Replace All"** ボタンをクリックします
32. 検索文字に **PG** 、置換文字に **CDV** を入力します。 **"Replace All"** ボタンをクリックします
33. **Command-B** キーを押してビルドします。まだいくつかの非推奨コードが残っていますが、これらは取り除くことができます (**CDVDeprecated.h** を参照してください。ソースコードの中のクラスを、 PG* から CDV* に変更するなどが方法として挙げられます)

## 1.4.0 から 1.4.1 へのアップグレード ##

1. Cordova 1.4.1 を **インストール** します
2. **MainViewController.m** の **バックアップを作成します**
3. **新規プロジェクトを作成します** - この新規プロジェクトからアセットを持って行きます
4. **MainViewController.m** を **新しい** プロジェクトから1.4.0ベースのプロジェクトのフォルダーにコピーし、古いファイルは **置き換え** ます (上のステップ2でファイルを **バックアップ** します)
5. **MainViewController.m** を Xcode プロジェクトに **追加** します
6. **バックアップした MainViewController.m** にあったプロジェクト固有のコードを新しいファイルに **統合** します
7. phonegap-X.X.X.js ファイルは任意で更新してください。 JavaScript の中身は、1.4.0と1.4.1で違いがありません

## 1.3.0 から 1.4.0 へのアップグレード ##

1. Cordova 1.4.0 を **インストール** します
2. **AppDelegate.m** と **AppDelegate.h** の **バックアップを作成します**
3. **新規プロジェクトを作成します** - この新規プロジェクトからアセットを持って行きます
4. 以下のファイルを **新しい** プロジェクトから1.3.0ベースのプロジェクトのフォルダーにコピーし、古いファイルは **置き換え** ます (上のステップ2でファイルを **バックアップ** します):

        AppDelegate.h
        AppDelegate.m
        MainViewController.h
        MainViewController.m
        MainViewController.xib
5. すべての新しい **MainViewController** ファイルを Xcode プロジェクトに **追加** します
6. 新規プロジェクトから **www/phonegap-1.4.0.js** ファイルを **www** フォルダーに **コピー** し、 **www/phonegap-1.3.0.js** ファイルを削除します
7.  **www/index.html** ファイル (また、他に Cordova script を参照しているファイル) の Cordova script 参照部分を、新しい **phonegap-1.4.0.js** ファイルを参照するように **更新** します
8. **PhoneGap.plist** ファイルの **Plugins** の下に新しい要素を **追加** します - キーは **com.phonegap.battery** で値は **PGBattery** です
9. **バックアップした AppDelegate.h 及び AppDelegate.m** にあったプロジェクト固有のコードを新しい AppDelegate ファイルに **統合** します

## 1.2.0 から 1.3.0 へのアップグレード ##

1. Cordova 1.3.0 を **インストール** します
2. **AppDelegate.m** と **AppDelegate.h** の **バックアップを作成します**
3. **新規プロジェクトを作成します** - この新規プロジェクトからアセットを持って行きます
4. 以下のファイルを **新しい** プロジェクトから1.2.0ベースのプロジェクトのフォルダーにコピーし、古いファイルは **置き換え** ます (上のステップ2でファイルを **バックアップ** します):

        AppDelegate.h
        AppDelegate.m
        MainViewController.h
        MainViewController.m
        MainViewController.xib
5. すべての新しい **MainViewController** ファイルを Xcode プロジェクトに **追加** します
6. 新規プロジェクトから **www/phonegap-1.3.0.js** ファイルを **www** フォルダーに **コピー** し、 **www/phonegap-1.2.0.js** ファイルを削除します
7.  **www/index.html** ファイル (また、他に Cordova script を参照しているファイル) の Cordova script 参照部分を、新しい **phonegap-1.3.0.js** ファイルを参照するように **更新** します
8. **PhoneGap.plist** ファイルの **Plugins** の下に新しい要素を **追加** します - キーは **com.phonegap.battery** で値は **PGBattery** です
9. **バックアップした AppDelegate.h 及び AppDelegate.m** にあったプロジェクト固有のコードを新しい AppDelegate ファイルに **統合** します

## 1.1.0 から 1.2.0 へのアップグレード ##

1. Cordova 1.2.0 を **インストール** します
2. **AppDelegate.m** と **AppDelegate.h** の **バックアップを作成します**
3. **新規プロジェクトを作成します** - この新規プロジェクトからアセットを持って行きます
4. 以下のファイルを **新しい** プロジェクトから1.1.0ベースのプロジェクトのフォルダーにコピーし、古いファイルは **置き換え** ます (上のステップ2でファイルを **バックアップ** します):

        AppDelegate.h
        AppDelegate.m
        MainViewController.h
        MainViewController.m
        MainViewController.xib
5. すべての新しい **MainViewController** ファイルを Xcode プロジェクトに **追加** します
6. 新規プロジェクトから **www/phonegap-1.2.0.js** ファイルを **www** フォルダーに **コピー** し、 **www/phonegap-1.1.0.js** ファイルを削除します
7.  **www/index.html** ファイル (また、他に Cordova script を参照しているファイル) の Cordova script 参照部分を、新しい **phonegap-1.2.0.js** ファイルを参照するように **更新** します
8. **PhoneGap.plist** ファイルの **Plugins** の下に新しい要素を **追加** します - キーは **com.phonegap.battery** で値は **PGBattery** です
9. **バックアップした AppDelegate.h 及び AppDelegate.m** にあったプロジェクト固有のコードを新しい AppDelegate ファイルに **統合** します

## 1.0.0 から 1.1.0 へのアップグレード ##

1. Cordova 1.1.0 を **インストール** します
2. **AppDelegate.m** と **AppDelegate.h** の **バックアップを作成します**
3. **新規プロジェクトを作成します** - この新規プロジェクトからアセットを持って行きます
4. 以下のファイルを **新しい** プロジェクトから1.1.0ベースのプロジェクトのフォルダーにコピーし、古いファイルは **置き換え** ます (上のステップ2でファイルを **バックアップ** します):

        AppDelegate.h
        AppDelegate.m
        MainViewController.h
        MainViewController.m
        MainViewController.xib
5. すべての新しい **MainViewController** ファイルを Xcode プロジェクトに **追加** します
6. 新規プロジェクトから **www/phonegap-1.2.0.js** ファイルを **www** フォルダーに **コピー** し、 **www/phonegap-1.1.0.js** ファイルを削除します
7.  **www/index.html** ファイル (また、他に Cordova script を参照しているファイル) の Cordova script 参照部分を、新しい **phonegap-1.2.0.js** ファイルを参照するように **更新** します
8. **PhoneGap.plist** ファイルの **Plugins** の下に新しい要素を **追加** します - キーは **com.phonegap.battery** で値は **PGBattery** です
9. **バックアップした AppDelegate.h 及び AppDelegate.m** にあったプロジェクト固有のコードを新しい AppDelegate ファイルに **統合** します

## 0.9.6 から 1.0.0 へのアップグレード ##

1. Cordova 1.0.0 を **インストール** します
2. **AppDelegate.m** と **AppDelegate.h** の **バックアップを作成します**
3. **新規プロジェクトを作成します** - この新規プロジェクトからアセットを持って行きます
4. 以下のファイルを **新しい** プロジェクトから0.9.6ベースのプロジェクトのフォルダーにコピーし、古いファイルは **置き換え** ます (上のステップ2でファイルを **バックアップ** します):

        AppDelegate.h
        AppDelegate.m
        MainViewController.h
        MainViewController.m
        MainViewController.xib
5. すべての新しい **MainViewController** ファイルを Xcode プロジェクトに **追加** します
6. 新規プロジェクトから **www/phonegap-1.0.0.js** ファイルを **www** フォルダーに **コピー** し、 **www/phonegap-0.9.6.js** ファイルを削除します
7.  **www/index.html** ファイル (また、他に Cordova script を参照しているファイル) の Cordova script 参照部分を、新しい **phonegap-1.0.0.js** ファイルを参照するように **更新** します
8. **PhoneGap.plist** ファイルの **Plugins** の下に新しい要素を **追加** します - キーは **com.phonegap.battery** で値は **PGBattery** です
9. **バックアップした AppDelegate.h 及び AppDelegate.m** にあったプロジェクト固有のコードを新しい AppDelegate ファイルに **統合** します
