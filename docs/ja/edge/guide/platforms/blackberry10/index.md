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

このガイドはブラックベリー 10 デバイス用 Cordova アプリを展開する SDK 環境を設定する方法を示します。 以前のバージョンの BlackBerry の異なる SDK 環境と BlackBerry プラットフォーム ガイドで説明されている、コマンド ライン ツールのセットを使用する必要があります。 ブラックベリー 10 の開発、またはコマンド ライン ツールのプラットフォーム中心の狭いセットのクロス プラットフォーム コルドバ CLI を使用するかどうかに関係なく SDK をインストールする必要があります。 For a comparison of the two development paths, see the Overview. For details on each, see The Command-Line Interface and the BlackBerry 10 Shell Tool Guide.

## 要件

開発環境は、Windows、Mac および Linux で利用できます。

開発者を使用する必要があります、 `cordova` ブラックベリー WebWorks SDK またはブラックベリー ネイティブ SDK と共にユーティリティ。 See The Command-Line Interface for information how to install `cordova`, add projects, then build and deploy for each platform.

Blackberry 10 Device Simulator:

*   Processor: Intel dual core 2.0 GHz/AMD Athlon 4200+ or higher
*   ディスクの空き容量: 10 ギガバイト 
*   RAM Memory: 4 GB 
*   Virtualization: one of the following: 
    *   **Intel Virtualization Technology** (VT, VT-x, vmx) → [Intel VT-x supported processor list][1]
    *   **AMD Virtualization** (AMD-V, SVM) (Since May 2006 all AMD CPUs include AMD-V except Sempron).

 [1]: http://ark.intel.com/products/virtualizationtechnology

More information about requirements: [BB10 Simulator requeriments][2].

 [2]: http://developer.blackberry.com/devzone/develop/simulator/simulator_systemrequirements.html

## Install the BlackBerry WebWorks SDK

Download and install the BlackBerry WebWorks SDK from [developer.blackberry.com][3]

 [3]: https://developer.blackberry.com/html5/download/

The installer will add command-line tools to your path. Depending on your OS, you may need to open a new terminal window or re-log in.

## ブラックベリーのネイティブ SDK をインストールします。

ネイティブのプラグインを開発するときの例のためのネイティブ コードをコンパイルする必要がある場合は、ブラックベリーのネイティブ SDK をインストールする必要があります。

ネイティブ SDK は、ブラックベリーを得るためにダウンロードし、 [developer.blackberry.com][4]から利用できるブラックベリーのための IDE をインストールするブラックベリーのネイティブ SDK のインストール、IDE を使用して。 インストール直後は、そのコマンド ライン ツールをシステム パスに追加する必要があります。

 [4]: http://developer.blackberry.com/native/download/

Windows:

*   Go to **My Computer → Properties → Advanced → Environment Variables**.

*   Append the Native SDK's install directory to the PATH, for example:
    
        ;C:\bbndk\host_10_1_0_132\win32\x86\usr\bin\
        

Mac および Linux:

*   編集、 `~/.bash_profile` ネイティブ SDK のインストール先に応じて、次のような行を追加するファイル。
    
        $ export PATH=${PATH}:/Applications/bbndk/host_10_1_0_132/darwin/x86/usr/bin/
        
    
    または 10.2 ネイティブ SDK:
    
        $ export PATH=${PATH}:/Applications/Momentics.app/host_10_2_0_15/darwin/x86/usr/bin/
        

*   現在のセッションで変更を適用するのには、次を実行します。
    
        $ ソース ~/.bash_profile
        

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

Use the `cordova` utility to set up a new project, as described in The Command-line Interface. For example, in a source-code directory:

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

 [6]: img/guide/platforms/blackberry10/bb_home.png

移動し、**セキュリティとプライバシー → 開発モード**セクションし、オプションを有効にします。

![][7]

 [7]: img/guide/platforms/blackberry10/bb_devel.png

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

 [8]: img/guide/platforms/blackberry10/bb_pin.png

名前に関連付ける IP アドレス、デバイスのパスワードと PIN とターゲット コマンド ライン ユーティリティを実行します。

*   Windows:
    
        $ platforms\blackberry10\cordova\target.bat add mydevice 169.254.0.1 -t device --password 123456 --pin FFFF972E
        

*   Mac の/Linux: 上
    
        $ platforms/blackberry10/cordova/target add mydevice 169.254.0.1 -t device --password 123456 --pin FFFF972E
        

where:

*   `--password`デバイスのロックを解除するパスワードを指します。

*   `--pin`デバイス**の設定**アプリケーションから取得した PIN を指します。

Then, run the `run` command to view the app:

        blackberry10 を実行 $ コルドバ
    

デバッグ トークンがまだ設定されていないデバイスの場合、エラー メッセージはキーに署名するための登録時に指定したパスワードでスクリプトを実行するプラットフォームを使用するよう指示します。

*   Windows:
    
        $ platforms\blackberry10\cordova\run.bat --device --keystorepass mysecret
        

*   Mac の/Linux: 上
    
        $ platforms/blackberry10/cordova/run --device --keystorepass mysecret
        

## WebInspector とデバッグ

When debugging on the device or an emulator, you may run WebInspector remotely to view the application's internal state. A prompt displays the URL that allows you to connect to the app with a standard web browser. For more information, see [Debugging using WebInspector][9].

 [9]: http://developer.blackberry.com/html5/documentation/web_inspector_overview_1553586_11.html

## リリース バージョンをビルド

By default, running the `cordova build` command creates an unsigned *.bar* package file suitable for testing on a device or simulator.

Use `--release` to create a release version suitable for distribution through BlackBerry World.

    $ cordova build --release --keystorepass <signing password>
    

The `--keystorepass` option specifies the password you defined when configuring your computer to sign applications.

## 他の場所に配置します。

The instructions above assume a device is plugged in via USB or a simulator is running on the local machine. It is also possible to deploy to other locations.

コマンド ライン ユーティリティのセットを追加、プロジェクトの BlackBerry 10 プラットフォームを設定するときに含められます。 The following command, in this case invoked from the project top-level directory, associates a target named *emu* with an IP address.

*   Windows:
    
        $ platforms\blackberry10\cordova\build.bat --release --keystorepass mysecret
        

*   Mac の/Linux: 上
    
        $ platforms/blackberry10/cordova/build --release --keystorepass mysecret
        

Once the target is defined, you can provide it to the run command using `--target`:

    $ cordova run blackberry10 --target=emu