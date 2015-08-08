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

    ;C:\bbndk\host\_10\_1\_0\_132\darwin\x86\usr\bin\

Mac および Linux:

*   編集、 `~/.bash_profile` ネイティブ SDK のインストール先に応じて、次のような行を追加するファイル。

    $ エクスポート パス ${path} =：/アプリケーション/bbndk/host\_10\_1\_0\_132/ダーウィン/x 86/usr/bin/

    または 10.2 ネイティブ SDK:

    $ 輸出 PATH=${PATH}:/Applications/Momentics.app/host\_10\_2\_0\_15/darwin/x86/usr/bin/

*   現在のセッションで変更を適用するのには、次を実行します。

    $ ソース ~/.bash_profile

## 署名を設定します。

デバイスのテストやブラックベリーの世界を通じてアプリケーションを配布する場合、システムはコード署名用のセットアップをなければなりません。

署名キーを取得するためにブラックベリーのウェブサイトに移動し、指定したパスワードを保持することを確認します。 実行して、 `blackberry-signer` ユーティリティ ブラックベリー ネイティブ SDK に含まれています。

－ の詳細は、こちらをご覧ください。

*   [コード署名キーに登録します。][2]

*   [コードの署名用にシステムを設定します。][3]

 [2]: https://www.blackberry.com/SignedKeys/codesigning.html
 [3]: https://developer.blackberry.com/html5/documentation/signing_setup_bb10_apps_2008396_11.html

## プロジェクトを作成します。

使用の `cordova` コマンド ライン インターフェイスで説明されているように、新しいプロジェクトを設定するユーティリティ。たとえば、ソース コード ディレクトリ: で

    $ コルドバ作成こんにちは com.example.hello $ cd こんにちは $ コルドバ プラットフォーム blackberry10 $ コルドバ ビルドを追加


## エミュレーターへの展開します。

デバイス エミュレーターを実行する場合は、ダウンロードして、ブラックベリー 10 シミュレータをインストールします。

*   [ダウンロード][1]
*   [はじめに][4]

 [4]: http://developer.blackberry.com/devzone/develop/simulator/blackberry_10_simulator_start.html

デバイスまたはエミュレーターでアプリケーションをテストする前に*ターゲット*プロジェクトを追加する必要があります。 それぞれ一意の名前で識別され、IP アドレスに関連付けられています。 アプリの表示に使用する前に、エミュレーターから IP アドレスを取得する必要があります。

エミュレーター イメージを起動し、ホーム画面から**設定**を選択します。

![][5]

 [5]: {{ site.baseurl }}/static/img/guide/platforms/blackberry10/bb_home.png

移動し、**セキュリティとプライバシー → 開発モード**セクションのオプションを有効にして IP アドレスを取得する：

![][6]

 [6]: {{ site.baseurl }}/static/img/guide/platforms/blackberry10/bb_devel.png

コマンド ライン ユーティリティのセットを追加、プロジェクトの BlackBerry 10 プラットフォームを設定するときに含められます。 この場合、プロジェクトの最上位ディレクトリから呼び出される、次のコマンドは、 *emu*上に表示される IP アドレスを持つという名前のターゲットを関連付けます。

*   Windows:

    $ platforms\blackberry10\cordova\target.bat -t のエミュー 169.254.0.1 シミュレータを追加します。

*   Mac の/Linux: 上

    $ プラットフォーム/blackberry10/コルドバ/ターゲット追加エミュー 169.254.0.1-t シミュレータ

その後、実行、 `emulate` アプリケーションを表示するコマンド。

    $ コルドバ エミュレート blackberry10


## デバイスへの配置します。

デバイスへの配備をお使いのコンピューターに接続されていることを確認します。 開発モードを有効にして上記のエミュレーター desribed として IP アドレスを取得します。 ピンを取得する必要があります、下の**設定**アプリケーション**→ についてハードウェア**:

![][7]

 [7]: {{ site.baseurl }}/static/img/guide/platforms/blackberry10/bb_pin.png

名前に関連付ける IP アドレス、デバイスのパスワードと PIN とターゲット コマンド ライン ユーティリティを実行します。

*   Windows:

    $ platforms\blackberry10\cordova\target.bat mydevice 169.254.0.1 t デバイス--パスワード 123456 - ピン FFFF972E を追加します。

*   Mac の/Linux: 上

    $ プラットフォーム/blackberry10/コルドバ/ターゲット mydevice 169.254.0.1 t デバイス--パスワード 123456 - ピン FFFF972E を追加します。

場所：

*   `--password`デバイスのロックを解除するパスワードを指します。

*   `--pin`デバイス**の設定**アプリケーションから取得した PIN を指します。

その後、実行、 `run` アプリケーションを表示するコマンド。

    blackberry10 を実行 $ コルドバ


デバッグ トークンがまだ設定されていないデバイスの場合、エラー メッセージはキーに署名するための登録時に指定したパスワードでスクリプトを実行するプラットフォームを使用するよう指示します。

*   Windows:

    $ platforms\blackberry10\cordova\run.bat - デバイス - keystorepass mysecret

*   Mac の/Linux: 上

    $ プラットフォーム/blackberry10/コルドバ/実行--デバイス--keystorepass mysecret

## WebInspector とデバッグ

デバイスまたはエミュレーター上でのデバッグ、アプリケーションの内部状態を表示するリモート WebInspector を実行ことがあります。 プロンプトは標準の web ブラウザーを使ってアプリを接続することができます URL を表示します。 詳細については、[デバッグ使用 WebInspector][8]を参照してください。.

 [8]: http://developer.blackberry.com/html5/documentation/web_inspector_overview_1553586_11.html

## リリース バージョンをビルド

既定では、実行して、 `cordova build` コマンドはデバイスまたはシミュレータにテストに適した符号なし*.bar*パッケージ ファイルを作成します。

別に実行する必要があります `build` のブラックベリーの世界を介して配信に適してリリース バージョンを作成するコマンド。 依存しない、 `cordova` CLI ツールし、代わりに、次の構文を使用します。

*   Windows:

    $ platforms\blackberry10\cordova\build.bat - リリース--keystorepass mysecret

*   Mac の/Linux: 上

    $ プラットフォーム/blackberry10/コルドバ/ビルド - リリース--keystorepass mysecret

`--keystorepass`オプションに署名するお使いのコンピューターを構成するときに定義されたパスワードを指定しますアプリケーション。
