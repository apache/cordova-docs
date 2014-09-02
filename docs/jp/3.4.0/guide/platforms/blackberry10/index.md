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

# BlackBerry 10 プラットフォームに関する解説

SDK 開発環境の設定方法、および、BlackBerry 10 搭載のデバイスへの Cordova アプリの展開方法を説明します。
以前のバージョンの BlackBerry の場合には、『 BlackBerry コマンドライン ツール 』 ( 原文では、「 BlackBerry Platform Guide 」 と記載 ) の記載内容に従い、以前のコマンドラインツール群を使用して、セットアップを行う必要があります。

## システム要件

開発環境は、Windows、Mac、Linux 上で使用できます。

Blackberry Native SDK と併用して、`cordova` ユーティリティを使用してください。コマンドライン インターフェイスのインストール方法、および、プロジェクトの追加・ビルド・展開方法に関しては、『 コマンドライン インターフェイス 』 をご確認ください。

Blackberry 10 デバイス シミュレーターの仕様を以下に記します。

	* `プロセッサー :`Intel dual core 2.0 GHz/AMD Athlon 4200+ 以上
	* `ディスク容量 : 10 GB`
	* `RAM メモリー : 4 GB`
	* `仮想化機構 :
		* __インテル バーチャライゼーション テクノロジー__ ( VT、VT-x、vmx ) &rarr; [Intel VT-x をサポートしているプロセッサーの一覧](http://ark.intel.com/products/virtualizationtechnology)
		* __AMD Virtualization__ ( AMD-V、SVM ) 2006年5月から、すべての AMD 社の CPU には、AMD-V が実装されています。Sempron は対象外となります。

システム要件の詳細に関しては、 [BB10 シミュレータの要件](http://developer.blackberry.com/devzone/develop/simulator/simulator_systemrequirements.html) をご確認ください。

## BlackBerry Native SDK のインストール

BlackBerry Native SDK を取得するには、[developer.blackberry.com](http://developer.blackberry.com/native/download/) から、BlackBerry 用の IDE をダウンロード・インストールして、IDE 経由で、BlackBerry Native SDK をインストールします。また、以下に記すように、インストール時に、システム環境変数のパス ( system path ) にコマンドライン ツールを追加する必要があります。

Windows 上の設定方法を以下に記します。

* __マイ コンピュータ &rarr; プロパティ &rarr; 詳細設定 &rarr; 環境変数__ に移動します。

* Native SDK のインストール先ディレクトリを、PATH に追加します。例を以下に記します。

    ;C:\bbndk\host_10_2_0_132\darwin\x86\usr\bin\

Mac と Linux の設定方法を以下に記します。

* 以下のラインを追加して、 `~/.bash_profile` ファイルを編集します ( Native SDK のインストール先によっては、記述が異なります )。

    $ export PATH=${PATH}:/Applications/Momentics.app/host_10_2_0_15/darwin/x86/usr/bin/

* 現在のセッション内で変更を反映したい場合には、以下を実行します。

    $ source ~/.bash_profile

コマンドラインから Native SDK を使用するときに障害が発生した場合、インストール先 ( installation path ) に置かれた、以下の各プラットフォーム用のファイルを適宜実行します。

    * Windows の場合 :
		$ `\bbndk\bbndk-env_xx_xx_xx_xxxx.bat`

    * Linux の場合 ( root ユーザーとしてインストール ) :
		$ `./opt/bbndk/bbndk-env_xx_xx_xx_xxxx.sh`
		

    * Linux の場合 ( root ユーザー以外でインストール ) :
		$ `./home/username/bbndk/bbndk-env_xx_xx_xx_xxxx.sh`

　　　 * Mac の場合 :
		$ `/Developer/SDKs/bbndk/bbndk-env_xx_xx_xx_xxxx.sh`
	
## 署名 ( Signing ) の設定

実機でのテスト、または、BlackBerry World 上でアプリの配布を検討している場合、コード署名 ( code signing ) を設定する必要があります。

署名キー ( signing key ) の取得は、 [ BlackBerry キー取得申請フォーム ](https://www.blackberry.com/SignedKeys/codesigning.html) から行います。

最初のチェックボックス ( "for BlackBerry10 apps developed using BlackBerry
NDK" ) を選択して、サインインまたは BBID の作成を行ってください。

パスワードを入力して、 "Get Token" をクリックして、bbidtoken.csk をダウンロードします。ダウンロードページ上で指定されている、デフォルトのディレクトリに、このファイルを保存します。

最後の手順は、署名証明書 ( signing certificate ) の発行です。

    $ blackberry-keytool -genkeypair -storepass <password> -author 'Your Name’

## プロジェクトの作成

`cordova` ユーティリティを使用して、『 コマンドライン インターフェイス 』 の記載内容に従い、プロジェクトを新規作成します。
たとえば、ソースコードディレクトリ上で以下のコマンドを実行します。

    $ cordova create hello com.example.hello
    $ cd hello
    $ cordova platform add blackberry10
    $ cordova build

## エミュレータへの展開

デバイスのエミュレータを実行する場合、BlackBerry 10 シミュレータをダウンロード・インストールします。

* [ダウンロード](http://developer.blackberry.com/native/download/)
* [はじめに](http://developer.blackberry.com/devzone/develop/simulator/blackberry_10_simulator_start.html)

エミュレータまたはデバイス上でアプリをテストする前に、開発モード ( development mode ) を有効化する必要があります。

エミュレータ画面を起動させ、ホーム画面から __設定__ を選択します。

![](img/guide/platforms/blackberry10/bb_home.png)

__セキュリティとプライバシー &rarr; 開発モード__ を選択して、該当オプションを有効化します。

![](img/guide/platforms/blackberry10/bb_devel.png)

次に、 `emulate` コマンドを使用して、アプリを表示します。

    $ cordova emulate blackberry10 --devicepass <password>

## デバイスへの展開

デバイスへの展開を行う場合、コンピュータとデバイスが接続され、開発モードが有効になっているか確認してください。

次に、 `run` コマンドを使用して、アプリを表示します。

    $ cordova run blackberry10 --devicepass <password>

デバッグトークン ( debug token ) を、デバイスに設定していない場合、エラーメッセージが表示されますので、そのときは、アプリの署名時に使用したパスワードを入力してください。

    $ cordova run blackberry10 --devicepass <password> --keystorepass <signing password>

## Web インスペクタ ( Inspector ) を使用したデバッグ

デバイスまたはエミュレータ上でデバッグを行うとき、Web インスペクタ をリモートで実行して、アプリの状態を確認することもできます。画面に表示された URL を使用して、標準 Web ブラウザからアプリへ接続することができます。詳細に関しては、 [Web インスペクタを使用したデバッグ](http://developer.blackberry.com/html5/documentation/web_inspector_overview_1553586_11.html) をご確認ください。

## リリースバージョンのビルド

デフォルトでは、 `cordova build` コマンドを実行して、署名なしの _.bar_ パッケージファイルを作成します。こちらのファイルは、デバイスまたはシミュレータ上でのテスト用に使用します。

`--release` オプションを使用して、リリース版を作成します。こちらは、BlackBerry World 上での配布用に使用できます。

    $ cordova build --release --keystorepass <signing password>

`--keystorepass` オプションを使用して、アプリの署名時に設定したパスワードを指定します。

## 上述の場所以外への展開

上述の手順では、USB 経由でデバイスを接続する場合、または、ローカルのマシーン上でシミュレータを実行する場合を想定していました。
それ以外の場合でも、アプリの展開を行うことができます。

BlackBerry 10 プラットフォームを設定したときにインストールしたコマンドライン ユーティリティには、追加のコマンドが用意されています。_emu_ と名称設定した Target ( 展開先のデバイス ) と その IP アドレスを使用して、以下のコマンドを実行します ( ここでは、プロジェクトのトップディレクトリから実行します )。

* Windows の場合 :

    $ platforms\blackberry10\cordova\target.bat add emu 192.168.2.24 -t simulator

* Mac/Linux の場合 :

    $ platforms/blackberry10/cordova/target add emu 192.168.2.24 -t simulator

Target を定義している場合、 `--target` オプションを使用して、run コマンドに追加できます。

    $ cordova run blackberry10 --target=emu
