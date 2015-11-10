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

title: Android のアップグレード
---

# Android のアップグレード

このガイドは、コルドバの旧バージョンからアップグレードする Android プロジェクトを変更する方法を示します。 これらの命令のほとんど、古いの前にあるコマンド ライン ツールのセットで作成されたプロジェクトに適用されます、 `cordova` CLI ユーティリティ。 CLI のバージョンを更新する方法については、コマンド ライン インターフェイス参照してください。

## 4.0.0 へのアップグレード

4.0.0 では重要な変更を活用するために必要な特定のアップグレード手順があります。 まず、以下の通り、共通のアップグレードの手順が必要です。

非 CLI プロジェクトを実行します。

        bin/update path/to/project
    

CLI のプロジェクト。

1.  更新、 `cordova` CLI バージョン。コマンド ライン インターフェイスを参照してください。

2.  既存のプロジェクトで `cordova platform update android` を実行します。

### ホワイト リストをアップグレードします。

ホワイト リストのすべての機能は、今のプラグインを介して実装されます。 プラグインを使わず、アプリはもはや 4.0.0 へのアップグレード後にホワイト リストによって保護されます。 コルドヴァには 2 つのホワイト リストのプラグインは、異なるレベルの保護を提供します。

1.  `ホワイト リスト コルドバ-プラグイン`プラグイン*(推奨)*
    
    *   このプラグインは強くお勧めします、それはより安全でより以前のバージョンでホワイト リストも設定可能
    *   必要な構成変更の[コルドバ プラグイン ホワイト リスト][1]の詳細を参照してください。
    *   Run: `cordova plugin add cordova-plugin-crosswalk-webview`

2.  `コルドバ プラグイン レガシー ホワイト`プラグイン
    
    *   この動作は以前のバージョンと同じホワイト リストを提供します。[コルドバのプラグイン-レガシー ホワイト リスト][2]を参照してください。
    *   構成の変更は必要ありませんが推奨されるプラグインよりも少ないの保護を提供します
    *   Run: `cordova plugin add cordova-plugin-legacy-whitelist`

 [1]: https://github.com/apache/cordova-plugin-whitelist
 [2]: https://github.com/apache/cordova-plugin-legacy-whitelist

### 横断歩道の WebView を使用します。

既定では、アプリは WebView デバイスによって提供されるシステムを使用していきます。 横断歩道の WebView を代わりに使用する場合は、単に、クロスウォーク ・ プラグインを追加します。

    cordova plugin add cordova-plugin-crosswalk-webview
    

プラグインを追加時に、アプリは横断歩道 WebView 正しくインストールおよび構成を取得します。

### Splashscreen プラグインへのアップグレード

アプリになる場合、スプラッシュ スクリーンの使用機能をプラグインに移動されていること。 スプラッシュ スクリーン用の構成オプションは変更されません。 必要な唯一のアップグレード手順は、プラグインを追加します。

    cordova plugin add cordova-plugin-splashscreen
    

## 3.6.0 から 3.7.1 にアップグレードします。

非 CLI プロジェクトを実行します。

        bin/update path/to/project
    

CLI のプロジェクト。

1.  更新、 `cordova` CLI バージョン。コマンド ライン インターフェイスを参照してください。

2.  実行 `cordova platform update android` 既存のプロジェクトで。

## 3.2.0 から 3.3.0 へのアップグレード

`3.2.0`として同じ指示に従ってください。.

3.3.0 にはじまって、コルドバ ランタイム今 jar ファイルの代わりにアンドロイドをライブラリとしてコンパイルされます。 これがコマンドラインの使用法の効果がない IDE ユーザーのワークスペースに新しく追加された`MyProject-CordovaLib`プロジェクトをインポートする必要があります。

## 3.1.0 から 3.2.0 にアップグレード

コルドバ CLI で作成されたプロジェクト。

1.  更新、 `cordova` 、CLI バージョン。コマンド ライン インターフェイスを参照してください。

2.  Run `cordova platform update android`

コルドバ CLI で作成されていないプロジェクトでは、以下を実行します。

        bin/update <project_path>
    

**警告:** アンドロイド 4.4 - アンドロイド 4.4.3、ファイルを作成する入力型を持つ要素 =「ファイル」ファイル選択ダイアログ ボックスは開きません。 これは Android 上のクロムと回帰であり、問題を再現することができますスタンドアロン クロムブラウザー Android 上でアンドロイド 4.4 のファイル転送とファイルのプラグインを使用するは、回避策 (http://code.google.com/p/android/issues/detail?id=62220 を参照)。入力の型から、onClick イベントをリッスンすることができます「ファイル」を = し、ファイル ピッカー UI をポップアップします。 アップロードとフォーム データのネクタイ、するために JavaScript を使用して、出色のマルチパートのポストの要求にフォームの値をアタッチすることができます。

## 3.1.0 3.0.0 からアップグレード

コルドバ CLI で作成されたプロジェクト。

1.  更新、 `cordova` 、CLI バージョン。コマンド ライン インターフェイスを参照してください。

2.  Run `cordova platform update android`

コルドバ CLI で作成されていないプロジェクトでは、以下を実行します。

        bin/update <project_path>
    

## 2.9.0 から CLI (3.0.0) へのアップグレード

1.  前述のコマンド ライン インターフェイスで、コルドバ CLI を使用して新しい Apache コルドバ 3.0.0 プロジェクトを作成します。

2.  コルドバ プロジェクトたとえば、プラットフォームの追加:`cordova platform add android`.

3.  作成したコルドバ プロジェクトのルートでの`www`ディレクトリにプロジェクトの`www`ディレクトリの内容をコピーします。

4.  `プラットフォーム/android`の下の適切なディレクトリに、古いプロジェクトから、ネイティブ アセットをコピー： このディレクトリには、ネイティブのコルドバ android プロジェクトが存在します。

5.  コルドバ CLI ツールを使用する必要があります任意のプラグインをインストールします。CLI がすべてコア Api を処理するプラグインとして追加する必要がありますので注意してください。3.0.0 のみ、CLI と互換性のあるプラグインです。

## 2.9.0 から 3.0.0 にアップグレードします。

1.  新しい Apache コルドバ Android プロジェクトを作成します。

2.  `Www`ディレクトリの内容を新しいプロジェクトにコピーします。

3.  新しいプロジェクトに、ネイティブ Android 資産`res`ディレクトリからコピーします。

4.  新しいプロジェクトに`src`サブディレクトリからインストールされている任意のプラグインをコピーします。

5.  いずれかのアップグレードを確認古い`config.xml`ファイルから新しい`< 機能 >`仕様への`< プラグイン >`参照使用されなくなりました。

6.  `Org.apache.cordova`である`org.apache.cordova.api`パッケージへの参照を更新します。.
    
    **注**： すべてのコア Api が削除されているし、のプラグインとしてインストールする必要があります。詳細についてを使用して Plugman 管理プラグイン ガイドを参照してください。

## 2.8.0 から 2.9.0 にアップグレードします。

1.  Run `bin/update <project_path>`.

## 2.7.0 から 2.8.0 にアップグレードします。

1.  `cordova-2.7.0.jar`プロジェクトの`libs`ディレクトリから削除します。

2.  `cordova-2.8.0.jar`プロジェクトの`lib`ディレクトリに追加します。

3.  Eclipse を使用すると、Eclipse プロジェクトを更新して、クリーンを行います。

<!-- SS Eclipse -->

1.  プロジェクトに新しい`cordova.js`をコピーします。

2.  新しい`cordova.js`ファイルを使用してあなたの HTML を更新します。

3.  `Framework/res/xml/config.xml`を一致するように`res/xml/config.xml`ファイルをコピーします。.

4.  更新 `framework/res/xml/config.xml` 以前のように同様の設定を持っています。

5.  ファイルのコピー元 `bin/templates/cordova` プロジェクトの `cordova` ディレクトリ。

## 2.6.0 からへ 2.7.0 をアップグレードします。

1.  `cordova-2.6.0.jar`プロジェクトの`libs`ディレクトリから削除します。

2.  `cordova-2.7.0.jar`プロジェクトの`lib`ディレクトリに追加します。

3.  Eclipse を使用すると、Eclipse プロジェクトを更新して、クリーンを行います。

4.  新しい`コルドバ 2.7.0.js`がプロジェクトにコピーします。

5.  新しい`cordova-2.7.0.js`ファイルを使用してあなたの HTML を更新します。

6.  コピー、 `res/xml/config.xml` 一致するように`framework/res/xml/config.xml`.

7.  更新プログラム `framework/res/xml/config.xml` を以前のように同様の設定を持っています。

8.  ファイルのコピー元 `bin/templates/cordova` プロジェクトの `cordova` ディレクトリ。

## 2.5.0 から 2.6.0 にアップグレードします。

1.  `cordova-2.5.0.jar`プロジェクトの`libs`ディレクトリから削除します。

2.  `cordova-2.6.0.jar`プロジェクトの`lib`ディレクトリに追加します。

3.  Eclipse を使用すると、Eclipse プロジェクトを更新して、クリーンを行います。

4.  新しいコピー `cordova-2.6.0.js` プロジェクトに。

5.  新しいを使用する HTML を更新 `cordova-2.6.0.js` ファイル。

6.  コピー、 `res/xml/config.xml` 一致するように`framework/res/xml/config.xml`.

7.  更新 `framework/res/xml/config.xml` 以前のように同様の設定を持っています。

8.  ファイルのコピー元 `bin/templates/cordova` プロジェクトの `cordova` ディレクトリ。

`bin/update <project>` コルドバのソース ディレクトリに表示されるプロジェクト パスを実行します。<0>

## 2.4.0 から 2.5.0 にアップグレードします。

1.  `cordova-2.4.0.jar`プロジェクトの`libs`ディレクトリから削除します。

2.  `cordova-2.5.0.jar`プロジェクトの`lib`ディレクトリに追加します。

3.  Eclipse を使用すると、Eclipse プロジェクトを更新して、クリーンを行います。

4.  新しいコピー `cordova-2.5.0.js` プロジェクトに。

5.  新しいを使用する HTML を更新 `cordova-2.5.0.js` ファイル。

6.  コピー、 `res/xml/config.xml` 一致するように`framework/res/xml/config.xml`.

7.  更新 `framework/res/xml/config.xml` 以前のように同様の設定を持っています。

8.  ファイルのコピー元 `bin/templates/cordova` プロジェクトの `cordova` ディレクトリ。

## 2.3.0 から 2.4.0 にアップグレードします。

1.  `cordova-2.3.0.jar`プロジェクトの`libs`ディレクトリから削除します。

2.  `cordova-2.4.0.jar`プロジェクトの`lib`ディレクトリに追加します。

3.  Eclipse を使用すると、Eclipse プロジェクトを更新して、クリーンを行います。

4.  新しいコピー `cordova-2.4.0.js` プロジェクトに。

5.  新しいを使用する HTML を更新 `cordova-2.4.0.js` ファイル。

6.  コピー、 `res/xml/config.xml` 一致するように`framework/res/xml/config.xml`.

7.  ファイルのコピー元 `bin/templates/cordova` プロジェクトの `cordova` ディレクトリ。

## 2.2.0 から 2.3.0 にアップグレードします。

1.  `cordova-2.2.0.jar`プロジェクトの`libs`ディレクトリから削除します。

2.  `cordova-2.3.0.jar`プロジェクトの`lib`ディレクトリに追加します。

3.  Eclipse を使用すると、Eclipse プロジェクトを更新して、クリーンを行います。

4.  新しいコピー `cordova-2.3.0.js` プロジェクトに。

5.  新しいを使用する HTML を更新 `cordova-2.3.0.js` ファイル。

6.  コピー、 `res/xml/config.xml` 一致するように`framework/res/xml/config.xml`.

7.  ファイルのコピー元 `bin/templates/cordova` プロジェクトの `cordova` ディレクトリ。

## 2.1.0 から 2.2.0 へのアップグレードします。

1.  `cordova-2.1.0.jar`プロジェクトの`libs`ディレクトリから削除します。

2.  `cordova-2.2.0.jar`プロジェクトの`lib`ディレクトリに追加します。

3.  Eclipse を使用すると、Eclipse プロジェクトを更新して、クリーンを行います。

4.  新しいコピー `cordova-2.2.0.js` プロジェクトに。

5.  新しいを使用する HTML を更新 `cordova-2.2.0.js` ファイル。

6.  コピー、 `res/xml/config.xml` 一致するように`framework/res/xml/config.xml`.

7.  ファイルのコピー元 `bin/templates/cordova` プロジェクトの `cordova` ディレクトリ。

## 2.0.0 から 2.1.0 にアップグレードします。

1.  `cordova-2.0.0.jar`プロジェクトの`libs`ディレクトリから削除します。

2.  `cordova-2.1.0.jar`プロジェクトの`lib`ディレクトリに追加します。

3.  Eclipse を使用すると、Eclipse プロジェクトを更新して、クリーンを行います。

4.  新しいコピー `cordova-2.1.0.js` プロジェクトに。

5.  新しいを使用する HTML を更新 `cordova-2.1.0.js` ファイル。

6.  コピー、 `res/xml/config.xml` に合わせて`framework/res/xml/config.xml`.

7.  ファイルのコピー元 `bin/templates/cordova` プロジェクトの `cordova` ディレクトリ。

## 1.9.0 から 2.0.0 にアップグレードします。

1.  `cordova-1.9.0.jar`プロジェクトの`libs`ディレクトリから削除します。

2.  `cordova-2.0.0.jar`プロジェクトの`lib`ディレクトリに追加します。

3.  Eclipse を使用すると、Eclipse プロジェクトを更新して、クリーンを行います。

4.  新しいコピー `cordova-2.0.0.js` プロジェクトに。

5.  新しいを使用する HTML を更新 `cordova-2.0.0.js` ファイル。

6.  コピー、 `res/xml/config.xml` に合わせて`framework/res/xml/config.xml`.

2.0.0 のリリースでは、 `config.xml`ファイルを組み合わせた、 `cordova.xml`と`plugins.xml`に置き換えられます。 古いファイルは廃止され、彼らはまだ、2.0.0 で作業中、将来のリリースで動作しなくなります。

## 1.8.1 から 1.9.0 にアップグレードします。

1.  `cordova-1.8.0.jar`プロジェクトの`libs`ディレクトリから削除します。

2.  `cordova-1.9.0.jar`プロジェクトの`lib`ディレクトリに追加します。

3.  Eclipse を使用すると、Eclipse プロジェクトを更新して、クリーンを行います。

4.  新しい`cordova-1.9.0.js`がプロジェクトにコピーします。

5.  新しい`cordova- 1.9.0.js`ファイルを使用してあなたの HTML を更新します。

6.  更新 `res/xml/plugins.xml` 一致するように`framework/res/xml/plugins.xml`.

解放は 1.9.0 に`CordovaWebView`の導入により、サード パーティのプラグインが動作しない場合があります。 これらのプラグインは、 `getContext()`または`getActivity()`を使用して`CordovaInterface`からコンテキストを取得する必要があります。 経験豊富なアンドロイドの開発者でない場合プラグインのメンテナに連絡して、バグ追跡システムにこのタスクを追加してください。

## 1.8.0 から 1.8.0 へのアップグレードします。

1.  `cordova-1.8.0.jar`プロジェクトの`libs`ディレクトリから削除します。

2.  `cordova-1.8.1.jar`プロジェクトの`lib`ディレクトリに追加します。

3.  Eclipse を使用すると、Eclipse プロジェクトを更新して、クリーンを行います。

4.  新しい`cordova-1.8.1.js`がプロジェクトにコピーします。

5.  新しい`cordova-1.8.1.js`ファイルを使用してあなたの HTML を更新します。

6.  更新 `res/xml/plugins.xml` 一致するように`framework/res/xml/plugins.xml`.

## 1.7.0 から 1.8.0 へのアップグレードします。

1.  `cordova-1.7.0.jar`プロジェクトの`libs`ディレクトリから削除します。

2.  `cordova-1.8.0.jar`プロジェクトの`lib`ディレクトリに追加します。

3.  Eclipse を使用すると、Eclipse プロジェクトを更新して、クリーンを行います。

4.  新しいコピー `cordova-1.8.0.js` プロジェクトに。

5.  新しいを使用する HTML を更新 `cordova-1.8.0.js` ファイル。

6.  更新 `res/xml/plugins.xml` に合わせて`framework/res/xml/plugins.xml`.

## 1.7.0 から 1.8.0 へのアップグレードします。

1.  `cordova-1.7.0.jar`プロジェクトの`libs`ディレクトリから削除します。

2.  `cordova-1.8.0.jar`プロジェクトの`lib`ディレクトリに追加します。

3.  Eclipse を使用すると、Eclipse プロジェクトを更新して、クリーンを行います。

4.  新しいコピー `cordova-1.8.0.js` プロジェクトに。

5.  新しいを使用する HTML を更新 `cordova-1.8.0.js` ファイル。

6.  更新 `res/xml/plugins.xml` に合わせて`framework/res/xml/plugins.xml`.

## 1.6.1 から 1.7.0 へのアップグレードします。

1.  `cordova-1.6.1.jar`プロジェクトの`libs`ディレクトリから削除します。

2.  `cordova-1.7.0.jar`プロジェクトの`lib`ディレクトリに追加します。

3.  Eclipse を使用すると、Eclipse プロジェクトを更新して、クリーンを行います。

4.  新しい`cordova-1.7.0.js`がプロジェクトにコピーします。

5.  更新 `res/xml/plugins.xml` に合わせて`framework/res/xml/plugins.xml`.

## 1.6.0 から 1.6.1 へのアップグレードします。

1.  `cordova- 1.6.0.jar`プロジェクトの`libs`ディレクトリから削除します。

2.  `cordova-1.6.1.jar`プロジェクトの`lib`ディレクトリに追加します。

3.  Eclipse を使用すると、Eclipse プロジェクトを更新して、クリーンを行います。

4.  新しい`cordova-1.6.1.js`がプロジェクトにコピーします。

5.  更新 `res/xml/plugins.xml` に合わせて`framework/res/xml/plugins.xml`.

## 1.5.0 から 1.6.0 にアップグレードします。

1.  `cordova-1.5.0.jar`プロジェクトの`libs`ディレクトリから削除します。

2.  `cordova-1.6.0.jar`プロジェクトの`lib`ディレクトリに追加します。

3.  Eclipse を使用すると、Eclipse プロジェクトを更新して、クリーンを行います。

4.  新しい`cordova-1.6.0.js`がプロジェクトにコピーします。

5.  新しい`cordova-1.6.0.js`ファイルを使用してあなたの HTML を更新します。

6.  更新 `res/xml/plugins.xml` 一致するように`framework/res/xml/plugins.xml`.

7.  `Res/xml/cordova.xml` `framework/res/xml/cordova.xml`を一致するように`res/xml/phonegap.xml`を置き換える.

## 1.4.0 から 1.5.0 にアップグレードします。

1.  `phonegap-1.4.0.jar`プロジェクトの`libs`ディレクトリから削除します。

2.  `cordova-1.5.0.jar`プロジェクトの`lib`ディレクトリに追加します。

3.  Eclipse を使用すると、Eclipse プロジェクトを更新して、クリーンを行います。

4.  新しい`cordova- 1.5.0.js`がプロジェクトにコピーします。

5.  新しい`cordova-1.5.0.js`ファイルを使用してあなたの HTML を更新します。

6.  更新 `res/xml/plugins.xml` 一致するように`framework/res/xml/plugins.xml`.

7.  `Res/xml/cordova.xml` `framework/res/xml/cordova.xml`を一致するように`res/xml/phonegap.xml`を置き換える.

## 1.3.0 から 1.4.0 にアップグレードします。

1.  `phonegap-1.3.0.jar`プロジェクトの`libs`ディレクトリから削除します。

2.  `phonegap-1.4.0.jar`プロジェクトの`lib`ディレクトリに追加します。

3.  Eclipse を使用すると、Eclipse プロジェクトを更新して、クリーンを行います。

4.  新しい`phonegap-1.4.0.js`がプロジェクトにコピーします。

5.  新しい`phonegap-1.4.0.js`ファイルを使用してあなたの HTML を更新します。

6.  更新 `res/xml/plugins.xml` 一致するように`framework/res/xml/plugins.xml`.

7.  更新 `res/xml/phonegap.xml` 一致するように`framework/res/xml/phonegap.xml`.

## 1.3.0 に 1.2.0 からアップグレードします。

1.  `phonegap-1.2.0.jar`プロジェクトの`libs`ディレクトリから削除します。

2.  `phonegap-1.3.0.jar`プロジェクトの`lib`ディレクトリに追加します。

3.  Eclipse を使用すると、Eclipse プロジェクトを更新して、クリーンを行います。

4.  新しい `phonegap-1.1.0.js` がプロジェクトにコピーします。

5.  新しい`phonegap-1.2.0.js`ファイルを使用してあなたの HTML を更新します。

6.  更新 `res/xml/plugins.xml` 一致するように`framework/res/xml/plugins.xml`.

7.  更新 `res/xml/phonegap.xml` に合わせて`framework/res/xml/phonegap.xml`.

## 1.1.0 から 1.2.0 にアップグレードします。

1.  `phonegap-1.1.0.jar`プロジェクトの`libs`ディレクトリから削除します。

2.  `phonegap-1.2.0.jar`プロジェクトの`lib`ディレクトリに追加します。

3.  Eclipse を使用すると、Eclipse プロジェクトを更新して、クリーンを行います。

4.  新しい`phonegap-1.2.0.js`がプロジェクトにコピーします。

5.  新しい`phonegap-1.2.0.js`ファイルを使用してあなたの HTML を更新します。

6.  更新 `res/xml/plugins.xml` に合わせて`framework/res/xml/plugins.xml`.

7.  更新 `res/xml/phonegap.xml` に合わせて`framework/res/xml/phonegap.xml`.

## 1.0.0 1.1.0 にアップグレードします。

1.  `phonegap-1.0.0.jar`プロジェクトの`libs`ディレクトリから削除します。

2.  `phonegap-1.1.0.jar`プロジェクトの`lib`ディレクトリに追加します。

3.  Eclipse を使用する場合は、Eclipse プロジェクトを更新し、クリーンを行うください。

4.  新しい`phonegap-1.1.0.js`がプロジェクトにコピーします。

5.  新しい`phonegap-1.1.0.js`ファイルを使用してあなたの HTML を更新します。

6.  更新 `res/xml/plugins.xml` に合わせて`framework/res/xml/plugins.xml`.

## 0.9.6 から 1.0.0 へのアップグレードします。

1.  `phonegap-0.9.6.jar`プロジェクトの`libs`ディレクトリから削除します。

2.  `phonegap-1.0.0.jar`プロジェクトの`lib`ディレクトリに追加します。

3.  Eclipse を使用する場合は、Eclipse プロジェクトを更新し、クリーンを行うください。

4.  新しい`phonegap-1.0.0.js`がプロジェクトにコピーします。

5.  新しい`phonegap-1.0.0.js`ファイルを使用してあなたの HTML を更新します。

6.  `Framework/res/xml/plugins.xml`を一致するように`res/xml/plugins.xml`を追加します。.