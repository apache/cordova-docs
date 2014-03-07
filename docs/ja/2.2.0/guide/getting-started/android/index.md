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

Getting Started with Android
============================

このガイドは、 Cordova のための開発環境セットアップ方法、またシンプルなアプリの動かし方を解説します。


1. 必要なもの
---------------

- Eclipse 3.4以上


2. SDK と Cordova のインストール
------------------------

- [Eclipse Classic](http://www.eclipse.org/downloads/) のダウンロードとインストール
- [Android SDK](http://developer.android.com/sdk/index.html) のダウンロードとインストール
- [ADT Plugin](http://developer.android.com/sdk/eclipse-adt.html#installing) のダウンロードとインストール
- [Cordova](http://incubator.apache.org/cordova/#download) の最新版をダウンロードし解凍します。これから Android ディレクトリと一緒に作業を進めます。


3A. PATH 環境変数の設定 (Mac OS)
---------------------------------------

- ターミナルを開きます (デフォルトでは、 Applications/Utilites フォルダーにあります)
- 以下のコマンドを実行します

`touch ~/.bash_profile; open ~/.bash_profile`

- これにより、ファイルをあなたのデフォルトテキストエディタで開きます
- Android SDK platform-tools と tools ディレクトリにパスを通す必要があります。この例では、 "/Development/android-sdk-macosx" を SDK がインストールされているフォルダーとします。以下の行を追加します:

`export PATH=${PATH}:/Development/android-sdk-macosx/platform-tools:/Development/android-sdk-macosx/tools`

- ファイルを保存し、テキストエディタを終了します
- PATH を更新するために、 .bash_profile を実行します

`source ~/.bash_profile`

- これで、ターミナルを開く度に Android SDK へのパスが通っているようになります

3B. PATH 環境変数の設定 (Windows)
---------------------------------------

- デスクトップから、マイコンピューターを右クリックし、プロパティーをクリックします
- 左側の列から、詳細設定をクリックします
- システムプロパティーのウィンドウで、環境変数ボタンをクリックします
- システム環境変数から、 PATH を選択します
- 編集ボタンをクリックします
- Android SDK platform-tools と tools ディレクトリにパスを通す必要があります。この例では、 "C:\Development\android-sdk-macosx" を SDK がインストールされているフォルダーとします。以下をテキストボックスに追加します:

`;C:\Development\android-sdk-windows\platform-tools;C:\Development\android-sdk-windows\tools`

- 編集を保存します。環境変数ダイアログを閉じます
- 追加で、 `%JAVA_HOME%\bin` も PATH に追加する必要があるかもしれません。この作業が必要かどうかを確認するには、コマンドプロンプトで `java` を入力してください。もしプログラムが見つからなかった場合は、 `%JAVA_HOME%\bin` を PATH に追加してください。場合によっては、 %JAVA_HOME% の環境変数ではなくフルパスを指定する必要があるかもしれません
- `%ANT_HOME%\bin` も PATH に追加する必要があるかもしれません。この作業が必要かどうかを確認するには、コマンドプロンプトで `ant` を入力してください。もしプログラムが見つからなかった場合は、 `%ANT_HOME%\bin` を PATH に追加してください。場合によっては、 %ANT_HOME% の環境変数ではなくフルパスを指定する必要があるかもしれません


4. 新規プロジェクトの作成
---------------------

- ターミナルで、 Cordova の `android` サブフォルダーの中にある `bin` ディレクトリまで移動します
- `./create <project_folder_path> <package_name> <project_name>` と入力し、 **"Enter"** を押します

        <project_folder_path> は新規 Cordova Android プロジェクトへのパスです
        <package_name> はパッケージ名です。例: com.YourCompany.YourAppName
        <project_name> はプロジェクト名です。例: YourApp (スペースを含まない)

- Eclipse を起動し、メニューから **新規プロジェクト** を選択します
    ![](img/guide/getting-started/android/eclipse_new_project.png)
- `<project_folder_path>` で使用したディレクトリを選択します
- Finish をクリックします

もしプロジェクトがa red X indicatingを保つ場合には問題があるので、以下の追加の手順が必要です

- プロジェクトフォルダーを右クリックします
- プロパティーダイアログで、ナビゲーションパネルから Android を選択します
- Project build target には、インストールしてある中での最新バージョンの Android API を選択します
- OK をクリックします
- プロジェクトメニューバーから Clean を選択します
- これでプロジェクトからエラーが無くなるはずです

5A. エミュレーターへのデプロイ
-----------------------

- プロジェクトを右クリックし、次を **実行 &gt; Android Application** を選択
- 適切な AVD を選択。 もしない場合は、作成する必要があります

**注意: より早く動かすために、 Intel ベースのエミュレーターを使用します:**

- Android SDK Manager を開きます
  ![](img/guide/getting-started/android/eclipse_android_sdk_button.png)
- ひとつ以上の `Intel x86 Atom` システムイメージおよび `Intel Hardware Accelerated Execution Manager` (Extras 以下にあります) をインストールします
- Android SDK の中の `extras/intel/Hardware_Accelerated_Execution_Manager` にダウンロードされた Intel installer を実行します
- Target を Intel のイメージとした新しい AVD を作成します
- エミュレーターがスタートするとき、 HAX モジュールのロードに失敗したといったエラーメッセージが出力されないことを確認します


5B. デバイスへのデプロイ
--------------------

- デバイスの設定で USB デバッグが有効になっていること、またコンピュータに接続されていることを確認 (**設定 &gt; アプリケーション &gt; 開発**)
- プロジェクトを右クリックし、次を **実行 > Android Application** を選択

