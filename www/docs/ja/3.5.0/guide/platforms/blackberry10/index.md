---

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0

         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations


   under the License.
---

# BlackBerry 10 プラットフォーム ガイド

このガイドは、開発環境にビルドおよび配置のブラックベリー 10 デバイス Cordova アプリを設定する方法を示します。 以前のバージョンのブラックベリー、ブラックベリーのプラットホームのガイドで説明されている、コマンド ライン ツールの異なるセットを使用する必要があります。

## 要件

開発環境は、Windows、Mac および Linux で利用できます。

開発者が使用する、 `cordova` 、ブラックベリーのネイティブ SDK と共にユーティリティ。 インストールする方法については、コマンド ライン インターフェイスを参照してください `cordova` 、プロジェクトを追加し、ビルドおよび各プラットフォームの配置。

## ブラックベリーのネイティブ SDK をインストールします。

ブラックベリーのネイティブ SDK は、 [developer.blackberry.com][1]から利用可能なです。 インストール直後は、そのコマンド ライン ツールをシステム パスに追加する必要があります。

 [1]: http://developer.blackberry.com/native/download/

Windows:

*   **私のコンピューター → プロパティ → 詳細設定 → 環境変数**に行く.

*   ネイティブ SDK のインストール ディレクトリ パスに追加、たとえば。

    ;C:\bbndk\host\_10\_2\_0\_132\darwin\x86\usr\bin\

Mac および Linux:

*   編集、 `~/.bash_profile` ネイティブ SDK のインストール先に応じて、次のような行を追加するファイル。

    $ export PATH=${PATH}:/Applications/Momentics.app/host\_10\_2\_0\_15/darwin/x86/usr/bin/

*   現在のセッションで変更を適用するのには、次を実行します。

    $ ソース ~/.bash_profile

## 署名を設定します。

デバイスのテストやブラックベリーの世界を通じてアプリケーションを配布する場合、システムはコード署名用のセットアップをなければなりません。

署名キーを取得するために、\[ブラックベリー キー注文フォーム\] (https://www.blackberry.com/SignedKeys/codesigning.html) に移動します。

最初のチェック ボックスを選択します:"ブラックベリー NDK を使用して開発された BlackBerry10 アプリ」のため署名し、BBID を作成することも。

パスワードを入力し、「トークンの取得」bbidtoken.csk をダウンロードする] をクリックします。ダウンロード ページに表示されますお使いの OS のデフォルトの場所にこのファイルを保存します。

最後の手順は、署名証明書を生成します。

    $ blackberry-keytool -genkeypair -storepass <password> -author 'Your Name’


## プロジェクトを作成します。

使用の `cordova` コマンド ライン インターフェイスで説明されているように、新しいプロジェクトを設定するユーティリティ。たとえば、ソース コード ディレクトリ: で

    $ cordova create hello com.example.hello
    $ cd hello
    $ cordova platform add blackberry10
    $ cordova build


## エミュレーターへの展開します。

デバイス エミュレーターを実行する場合は、ダウンロードして、ブラックベリー 10 シミュレータをインストールします。

*   [ダウンロード][1]
*   [はじめに][2]

 [2]: http://developer.blackberry.com/devzone/develop/simulator/blackberry_10_simulator_start.html

デバイスまたはエミュレーターでアプリケーションをテストする前に開発モードを有効にする必要があります。

エミュレーター イメージを起動し、ホーム画面から**設定**を選択します。

![][3]

 [3]: {{ site.baseurl }}/static/img/guide/platforms/blackberry10/bb_home.png

移動し、**セキュリティとプライバシー → 開発モード**セクションし、オプションを有効にします。

![][4]

 [4]: {{ site.baseurl }}/static/img/guide/platforms/blackberry10/bb_devel.png

その後、実行、 `emulate` アプリケーションを表示するコマンド。

    $ cordova emulate blackberry10 --devicepass <password>


## デバイスへの配置します。

デバイスへの配備をお使いのコンピューターに接続されているし、開発モードが有効になってを確認します。

その後、実行、 `run` アプリケーションを表示するコマンド。

    $ cordova run blackberry10 --devicepass <password>


デバッグ トークンがまだない場合、デバイスの設定、エラー メッセージされたらパスワードを入力するときにアプリケーションに署名するお使いのコンピューターの構成を定義しています。

    $ cordova run blackberry10 --devicepass <password> --keystorepass <signing password>


## WebInspector とデバッグ

デバイスまたはエミュレーター上でのデバッグ、アプリケーションの内部状態を表示するリモート WebInspector を実行ことがあります。 プロンプトは標準の web ブラウザーを使ってアプリを接続することができます URL を表示します。 詳細については、[デバッグ使用 WebInspector][5]を参照してください。.

 [5]: http://developer.blackberry.com/html5/documentation/web_inspector_overview_1553586_11.html

## リリース バージョンをビルド

既定では、実行して、 `cordova build` コマンドはデバイスまたはシミュレータにテストに適した符号なし*.bar*パッケージ ファイルを作成します。

使用する `--release` BlackBerry の世界を介して配信に適してリリース バージョンを作成します。

    $ cordova build --release --keystorepass <signing password>


`--keystorepass`オプションに署名するお使いのコンピューターを構成するときに定義されたパスワードを指定しますアプリケーション。

## 他の場所に配置します。

上記の手順は、デバイスは USB 経由で接続されてまたはシミュレータが、ローカル コンピューターで実行されていると仮定します。また、他の場所に展開することが可能です。

コマンド ライン ユーティリティのセットを追加、プロジェクトの BlackBerry 10 プラットフォームを設定するときに含められます。 この場合、プロジェクトの最上位ディレクトリから呼び出される、次のコマンドは*emu* IP アドレスを持つという名前のターゲットを関連付けます。

*   Windows:

    $ platforms\blackberry10\cordova\target.bat add emu 192.168.2.24 -t simulator

*   Mac の/Linux: 上

    $ platforms/blackberry10/cordova/target add emu 192.168.2.24 -t simulator

ターゲットが定義されたら、実行するコマンドを使用する提供できます `--target` :

    $ cordova run blackberry10 --target=emu
