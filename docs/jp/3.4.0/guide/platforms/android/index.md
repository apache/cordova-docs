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

# Android プラットフォームに関する解説

SDK 開発環境の設定方法、および、Android 搭載のデバイスへの Cordova アプリの展開方法を説明します。
Android SDK のインストール、Eclipse SDK 上での Android プロジェクトの作成、ならびに、エミュレータまたはデバイス ( 実機 ) への展開手順を解説します。どちらの作業手順 ( 「 _Web プロジェクト開発_ 」 または 「 _ネイティブ プラットフォーム開発_ 」 ) を使用するかにかかわらず、少なくとも、Android SDK のインストール時には、こちらの解説の記載内容に沿って、作業を行う必要があります ( どちらの作業手順においても、Android SDK のインスールをして、次に、環境変数 PATH を設定して、アクセスができるようにする必要があります )。

こちらのプラットフォームに関する詳細情報に関しては、下記のリンク先をご確認ください。

* Android の設定
* Android WebView
* Android プラグイン
* Android の更新
* Android コマンドライン ツール

上記の 『 コマンドライン ツール 』 では、旧バージョン ( Cordova 3.0 以前 ) に実装されていたツールでの作業手順を記しています。
現コマンドライン インターフェイス ( CLI ) に関しては、『 コマンドライン インターフェイス 』 の記載内容をご確認ください。

## システム要件とサポート

Android SDK の詳細に関しては、 [システム要件](http://developer.android.com/sdk/index.html) をご確認ください。

Cordova では、Android 2.2、2.3、4.x をサポートしています。Google が調査を行っている [シェアに関するダッシュボード](http://developer.android.com/about/dashboards/index.html) 上で、プラットフォームのシェアが 5 ％を下回る場合には、原則として、該当プラットフォームのサポートは廃止します。

<!--
備考 ： 
- Android 2.1 ( 2013年5月　廃止 )
- Android 3.x ( 2013年5月　廃止 )
-->

Android SDK と併用して、`cordova` ユーティリティを使用してください。コマンドライン インターフェイスのインストール方法、および、プロジェクトの追加・ビルド・展開方法に関しては、『 コマンドライン インターフェイス 』 をご確認ください。

[developer.android.com/sdk](http://developer.android.com/sdk/) から Android SDK をインストールします。同サイトでは 'adt-bundle-<os>-<arch>-<ver>' 形式のファイルとして、Android SDK を配布しています。Windows 用は、インストーラもパッケージに含まれています。OSX と Linux に関しては、各種開発ツールを置いている場所で、 'adt-bundle' を解凍します。
[Android SDK のセットアップ手順の詳細は、こちらで確認できます。](http://developer.android.com/sdk/installing/bundle.html)

Cordova のコマンドライン ツールを使用するには、SDK の `tools` と `platform-tools` ディレクトリを PATH 環境変数に設定する必要があります。Mac では、以下のように設定を追加して、 `~/.bash_profile` ファイルの作成または変更することができます ( 下記のパスは、SDK のインストール場所により異なります )。

    export PATH=${PATH}:/Development/adt-bundle/sdk/platform-tools:/Development/adt-bundle/sdk/tools

この処理により、Terminal 上で、SDK ツールの内容を確認できるようになります ( Terminal は作業後、新たに開くこと )。または、現在のセッション内で使用したい場合には、以下を実行します。

    $ source ~/.bash_profile

Windows 7 で、環境変数 PATH を変更する場合には、以下の手順に従います。

* デスクトップ左下の __スタート__ メニューをクリックして、次に、 __コンピューター__ を右クリックして、そして __プロパティ__ をクリックします。

* 左側の __システムの詳細設定__ をクリックします。

* 表示されたダイアログ上で、 __環境変数__ ボタンを押します。

* __PATH__ システム環境変数を選択して、 __修正__ ボタンを押します。

* 以下の PATH を追記してください ( PATH は、SDK のインストール先によっては、異なる場合があります )。

        ;C:\Development\adt-bundle\sdk\platform-tools;C:\Development\adt-bundle\sdk\tools

* 値を保存して、ダイアログボックスを閉じます。

Java と Ant を有効化したい場合には、コマンドプロンプトを起動させ、 `java` と `ant` を入力します。
実行に失敗した方を PATH に追記します。

        ;%JAVA_HOME%\bin;%ANT_HOME%\bin

## SDK でプロジェクトを開く

`cordova` ユーティリティを使用して、『 コマンドライン インターフェイス 』 の記載内容に従い、プロジェクトを新規作成します。
たとえば、ソースコードディレクトリ上で以下のコマンドを実行します。

        $ cordova create hello com.example.hello "HelloWorld"
        $ cd hello
        $ cordova platform add android
        $ cordova build

作成後は、Eclipse を使用して、プロジェクトを修正します ( Elicpse と Android SDK は併用可 )。

* __Eclipse__ アプリを起動します。

* __New Project__ メニューを選択します。

* 表示されたダイアログ上で、 __Android Project from Existing Code__ を選択して、 __Next__ ボタンを押します。

    ![](img/guide/platforms/android/eclipse_new_project.png)

* `hello` ( または、プロジェクトの作成先ディレクトリ ) に移動して、次に、 `platforms/android` サブディレクトリに移動します。

* インポートの対象として、 `hello` プロジェクトと `hello-CordovaLib` プロジェクトが選択されていることを確認してください。Cordova 3.3.0 以降では、.jar ファイルの代わりに、Cordova ( CordovaLib ) を、Android ライブラリとして使用しています。

* __Finish__ ボタンを押します。

Eclipse ウィンドウが開きます。未解決の問題 ( Problems ) がある場合、赤色の __X__ が表示されます。
未解決の問題がある場合、以下の手順に従います。

* プロジェクトのディレクトリを右クリックします。

* __プロパティ__ ダイアログを開いて、ナビから __Android__ を選択します。

* Project Build Target 項目から、インストールを行った Android API の中で、最も高い Level の Android API を選択します。

* __OK__ ボタンを押します。

* __プロジェクト__ メニューから、 __Clean__ を選択します。これにより、プロジェクト内の問題をすべて解決できるはずです。

## エミュレーターへの展開

`cordova` ユーティリティを使用して、エミュレータ上でアプリを実行します。または、SDK 内でアプリを実行することもできます。どちらの方法でも、1 つ以上のデバイスを表示できるように、SDK を最初に設定する必要があります。設定を行う場合、Android SDK Manager ( Eclipse とは別に実行される Java アプリケーション ) を使用します。Android SDK マネージャー を起動する方法は、2 通りあります。

* コマンドライン上で、 `android` を実行します。

* Eclipse 上で、こちらのツールバーアイコンをクリックします。

  ![](img/guide/platforms/android/eclipse_android_sdk_button.png)

Android SDK マネージャー を開くと、さまざまなランタイム ライブラリが表示されます。

![](img/guide/platforms/android/asdk_window.png)

__Tools &rarr; Manage AVDs__ ( Android 仮想デバイス ) を選択して、次に、表示されたダイアログ上の __Device Definitions__ から、アイテムを 1 つ選択します ( どのアイテムでも可 )。

![](img/guide/platforms/android/asdk_device.png)

__Create AVD__ ボタンを押して、AVD Name を変更 ( 任意 ) して、 __OK__ ボタンを押して、変更を保存します。

![](img/guide/platforms/android/asdk_newAVD.png)

__Android Virtual Devices__ 一覧内に AVD が表示されます。

![](img/guide/platforms/android/asdk_avds.png)

別個のアプリとしてエミュレータを起動させる場合、AVD を選択して、 __Start__ ボタンを押します。
ハードウェア関連の制御画面と共に、デバイス上の画面と同じような画面が表示されます。

![](img/guide/platforms/android/asdk_emulator.png)

ここまでの手順で、 `cordova` ユーティリティ ( コマンドライン ) を使用して、エミュレータにアプリを展開することができます。

        $ cordova emulate android

Eclipse 上で作業をする場合、プロジェクトを右クリックして、 __Run As &rarr; Android Application__ を選択します。AVD を起動させたことがない場合、ここで、AVD を指定することになります。

`仮想マシーン アクセラレーション` ( Virtual Machine Acceleration ) を使用して、実行スピードを改善することもできます。仮想マシーンを実行するためのさまざまな機構を、多くの CPU で提供しています。この種のアクセラレーションを使用する前に、現在の開発システムの CPU が、以下の仮想化支援のテクノロジーをサポートしているか確認する必要があります。

* __インテル バーチャライゼーション テクノロジー__ ( VT-x、vmx ) &rarr; [Intel VT-x をサポートしているプロセッサーの一覧](http://ark.intel.com/products/virtualizationtechnology)

* __AMD Virtualization__ ( AMD-V、SVM )。Linux のみサポートします ( 2006年5月から、すべての AMD 社の CPU には、AMD-V が実装されています。Sempron は対象外 )。

使用中の Intel プロセッサーが VT-x テクノロジーをサポートしているか確認するには、 `インテル プロセッサー識別ユーティリティー` ( Intel Processor Identification Utility ) を実行する方法があります。 `Windows` に関しては、インテルの [ ダウンロードセンター ](https://downloadcenter.intel.com/Detail_Desc.aspx?ProductID=1881&DwnldID=7838) からダウンロードするか、または、[ ブート可能 ( bootable ) 版のユーティリティ ](https://downloadcenter.intel.com/Detail_Desc.aspx?ProductID=1881&DwnldID=7840&lang=eng) ( `OS 依存性なし` ) を使用することができます。

`インテル プロセッサー識別ユーティリティー` の Windows へのインストール・実行後、以下のウィンドウが表示されるので、仮想化テクノロジーを CPU がサポートしているか確認することができます。

![](img/guide/platforms/android/intel_pid_util_620px.png)

エミュレータを高速化するため、1 つ以上の `Intel x86 Atom` System Image と `Intel Hardware Accelerated Execution Manager ( HAXM )` をダウンロードして、インストールする必要があります。

Android SDK マネージャーを開き、 `Intel x86 Atom` System Image ( 検証対象のバージョンをサポートしていること ) を選択します。次に、 `Extras` に移動して、 `Intel x86 Emulator Accelerator ( HAXM )` を選択して、これらのパッケージをインストールします。

![](img/guide/platforms/android/asdk_man_intel_image_haxm.png)

ダウンロード後、Android SDK の `extras/intel/Hardware_Accelerated_Execution_Manager` に置かれている Intel のインストーラーを実行します。

__注意__ : パッケージのインストール時に問題が発生した場合には、こちらの 
[ Intel の記事 ](http://software.intel.com/en-us/android/articles/speeding-up-the-android-emulator-on-intel-architecture) をご確認ください。

インストール後に検証を行うため、 `CPU/ABI` を `Intel (Atom) x86` Image に設定して、AVD を新規に作成します。

![](img/guide/platforms/android/asdk_new_and_dev_intel.png)

`Linux 系のシステム` を使用している場合には、 [Android Developer のサイト](http://developer.android.com/tools/devices/emulator.html#vm-linux) の手順に従ってください。

エミュレータの起動時に、HAXM モジュールの読み込み失敗を示すエラーがないことを確認してください。

## デバイスへの展開

デバイスへアプリを、直接、プッシュ ( push ) するには、 [Android Developer のサイト](http://developer.android.com/tools/device.html) の記載内容に従い、USB debugging が有効にされていることを確認してください。また、デバイスとの接続には、mini USB ケーブルを使用してください。

または、コマンドラインから、デバイスへアプリをプッシュすることもできます。

        $ cordova run android

または、Eclipse 上で、プロジェクトを右クリックして、 __Run
As &rarr; Android Application__ を選択することもできます。