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

# BlackBerry 10 プラットフォーム ガイド

このガイドはブラックベリー 10 デバイス用 Cordova アプリを展開する SDK 環境を設定する方法を示します。 以前のバージョンの BlackBerry の異なる SDK 環境と BlackBerry プラットフォーム ガイドで説明されている、コマンド ライン ツールのセットを使用する必要があります。 ブラックベリー 10 の開発、またはコマンド ライン ツールのプラットフォーム中心の狭いセットのクロス プラットフォーム コルドバ CLI を使用するかどうかに関係なく SDK をインストールする必要があります。 2 つの開発パスの比較の概要を参照してください。 それぞれ詳細については、コマンド ライン インターフェイスとブラックベリー 10 シェル ツールのガイドを参照してください。

## 要件

開発環境は、Windows、Mac および Linux で利用できます。

開発者を使用する必要があります、 `cordova` ブラックベリー WebWorks SDK またはブラックベリー ネイティブ SDK と共にユーティリティ。 インストールする方法については、コマンド ライン インターフェイスを参照してください `cordova` 、プロジェクトを追加し、ビルドおよび各プラットフォームの配置。

ブラックベリー 10 デバイス シミュレーター:

*   プロセッサ: インテルデュアルコア 2.0 GHz/AMD Athlon 4200 + またはより高い
*   ディスクの空き容量: 10 ギガバイト
*   RAM メモリ: 4 GB
*   仮想化： 次のいずれか。
    *   **インテル バーチャライゼーション ・ テクノロジー**(VT、VT-x、vmx) → [Intel VT-x 対応のプロセッサ一覧][1]
    *   **AMD の仮想化**（AMD-V、SVM）(2006 年 5 月以来すべての AMD の Cpu を含む AMD-V Sempron を除く)。

 [1]: http://ark.intel.com/products/virtualizationtechnology

要件についての詳細： [BB10 シミュレータ要件][2].

 [2]: http://developer.blackberry.com/devzone/develop/simulator/simulator_systemrequirements.html

## ブラックベリー WebWorks SDK をインストールします。

ダウンロードして[developer.blackberry.com][3]からブラックベリー WebWorks SDK をインストールします。

 [3]: https://developer.blackberry.com/html5/download/

インストーラーは、あなたのパスにコマンド ライン ツールを追加します。お使いの OS に応じて新しいターミナル ・ ウィンドウを開いたり、再ログインする必要があります。

## ブラックベリーのネイティブ SDK をインストールします。

ネイティブのプラグインを開発するときの例のためのネイティブ コードをコンパイルする必要がある場合は、ブラックベリーのネイティブ SDK をインストールする必要があります。

ネイティブ SDK は、ブラックベリーを得るためにダウンロードし、[developer.blackberry.com][4] から利用できるブラックベリーのための IDE をインストールするブラックベリーのネイティブ SDK のインストール、IDE を使用して。 インストール直後は、そのコマンド ライン ツールをシステム パスに追加する必要があります。

 [4]: http://developer.blackberry.com/native/download/

Windows:

*   **私のコンピューター → プロパティ → 詳細設定 → 環境変数**に行く.

*   ネイティブ SDK は、インストール ディレクトリのパスに追加、たとえば。

        ;C:\bbndk\host_10_1_0_132\win32\x86\usr\bin\


Mac および Linux:

*   編集、 `~/.bash_profile` ネイティブ SDK のインストール先に応じて、次のような行を追加するファイル。

        $ export PATH=${PATH}:/Applications/bbndk/host_10_1_0_132/darwin/x86/usr/bin/


    または 10.2 ネイティブ SDK:

        $ export PATH=${PATH}:/Applications/Momentics.app/host_10_2_0_15/darwin/x86/usr/bin/


*   現在のセッションで変更を適用するのには、次を実行します。

        $ source ~/.bash_profile


得た場合は、環境問題、コマンド ・ ラインからネイティブ SDK を使用して、実行、適切なプラットフォーム用のファイル、インストール先のパス内にある：

*   Windows → MS-DOS シェル。

        C:\> \bbndk\bbndk-env_xx_xx_xx_xxxx.bat


*   Windows → git bash シェル。

        $ `\bbndk\bbndk-env_xx_xx_xx_xxxx.bat`


*   Linux の → ルート ユーザーとしてインストールされています。

        $ `./opt/bbndk/bbndk-env_xx_xx_xx_xxxx.sh`


*   Linux の → 非ルートユーザとしてインストールされています。

        $ `./home/username/bbndk/bbndk-env_xx_xx_xx_xxxx.sh`


*   Mac:

        $ `/Developer/SDKs/bbndk/bbndk-env_xx_xx_xx_xxxx.sh`


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

*   [ダウンロード][4]
*   [はじめに][5]

 [5]: http://developer.blackberry.com/devzone/develop/simulator/blackberry_10_simulator_start.html

デバイスまたはエミュレーターでアプリケーションをテストする前に開発モードを有効にする必要があります。

エミュレーター イメージを起動し、ホーム画面から**設定**を選択します。

![][6]

 [6]: {{ site.baseurl }}/static/img/guide/platforms/blackberry10/bb_home.png

移動し、**セキュリティとプライバシー → 開発モード**セクションし、オプションを有効にします。

![][7]

 [7]: {{ site.baseurl }}/static/img/guide/platforms/blackberry10/bb_devel.png

コマンド ライン ユーティリティのセットを追加、プロジェクトの BlackBerry 10 プラットフォームを設定するときに含められます。 この場合、プロジェクトの最上位ディレクトリから呼び出される、次のコマンドは、 *emu*上に表示される IP アドレスを持つという名前のターゲットを関連付けます。

*   Windows:

        $ platforms\blackberry10\cordova\target.bat add emu 169.254.0.1 -t simulator


*   Mac の/Linux: 上

        $ platforms/blackberry10/cordova/target add emu 169.254.0.1 -t simulator


その後、実行、 `emulate` アプリケーションを表示するコマンド。

        $ cordova emulate blackberry10


## デバイスへの配置します。

デバイスへの配備をお使いのコンピューターに接続されていることを確認します。 開発モードを有効にして上記のエミュレーター desribed として IP アドレスを取得します。 ピンを取得する必要があります、下の**設定**アプリケーション**→ についてハードウェア**:

![][8]

 [8]: {{ site.baseurl }}/static/img/guide/platforms/blackberry10/bb_pin.png

名前に関連付ける IP アドレス、デバイスのパスワードと PIN とターゲット コマンド ライン ユーティリティを実行します。

*   Windows:

        $ platforms\blackberry10\cordova\target.bat add mydevice 169.254.0.1 -t device --password 123456 --pin FFFF972E


*   Mac の/Linux: 上

        $ platforms/blackberry10/cordova/target add mydevice 169.254.0.1 -t device --password 123456 --pin FFFF972E


場所：

*   `--password`デバイスのロックを解除するパスワードを指します。

*   `--pin`デバイス**の設定**アプリケーションから取得した PIN を指します。

その後、実行、 `run` アプリケーションを表示するコマンド。

        blackberry10 を実行 $ コルドバ


デバッグ トークンがまだ設定されていないデバイスの場合、エラー メッセージはキーに署名するための登録時に指定したパスワードでスクリプトを実行するプラットフォームを使用するよう指示します。

*   Windows:

        $ platforms\blackberry10\cordova\run.bat --device --keystorepass mysecret


*   Mac の/Linux: 上

        $ platforms/blackberry10/cordova/run --device --keystorepass mysecret


## WebInspector とデバッグ

デバイスまたはエミュレーター上でのデバッグ、アプリケーションの内部状態を表示するリモート WebInspector を実行ことがあります。 プロンプトは、標準の web ブラウザーでアプリケーションを接続することができます URL を表示します。 詳細については、[デバッグ使用 WebInspector][9]を参照してください。.

 [9]: http://developer.blackberry.com/html5/documentation/web_inspector_overview_1553586_11.html

## リリース バージョンをビルド

既定では、実行して、 `cordova build` コマンドはデバイスまたはシミュレータにテストに適した符号なし*.bar*パッケージ ファイルを作成します。

使用する `--release` BlackBerry の世界を介して配信に適してリリース バージョンを作成します。

    $ cordova build --release --keystorepass <signing password>


`--keystorepass`オプションに署名するお使いのコンピューターを構成するときに定義されたパスワードを指定しますアプリケーション。

## 他の場所に配置します。

上記の手順は、デバイスは USB 経由で接続されてまたはシミュレータが、ローカル コンピューターで実行されていると仮定します。また、他の場所に展開することが可能です。

コマンド ライン ユーティリティのセットを追加、プロジェクトの BlackBerry 10 プラットフォームを設定するときに含められます。 この場合、プロジェクトの最上位ディレクトリから呼び出される、次のコマンドは*emu* IP アドレスを持つという名前のターゲットを関連付けます。

*   Windows:

        $ platforms\blackberry10\cordova\build.bat --release --keystorepass mysecret


*   Mac の/Linux: 上

        $ platforms/blackberry10/cordova/build --release --keystorepass mysecret


ターゲットが定義されたら、実行するコマンドを使用する提供できます `--target` :

    $ cordova run blackberry10 --target=emu
