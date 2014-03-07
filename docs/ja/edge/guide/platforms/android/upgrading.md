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

# Android のアップグレード

このガイドは、コルドバの旧バージョンからアップグレードする Android プロジェクトを変更する方法を示します。 これらの命令のほとんど、古いの前にあるコマンド ライン ツールのセットで作成されたプロジェクトに適用されます、 `cordova` CLI ユーティリティ。 CLI のバージョンを更新する方法については、コマンド ライン インターフェイス参照してください。

## 3.2.0 から 3.3.0 へのアップグレード

用として同じ instructinos に従ってください。`3.2.0`.

3.3.0 にはじまって、コルドバ ランタイム今 jar ファイルの代わりにアンドロイドをライブラリとしてコンパイルされます。 これがコマンドラインの使用法の効果がない IDE ユーザーが新しく追加されたインポートする必要があります `MyProject-CordovaLib` のワークスペースにプロジェクト。

## 3.1.0 から 3.2.0 へのアップグレード

コルドバ CLI で作成されたプロジェクト。

1.  更新、 `cordova` CLI バージョン。コマンド ライン インターフェイスを参照してください。

2.  実行`cordova platform update android`

コルドバ CLI で作成されていないプロジェクトの場合に実行します。

        bin/update <project_path>
    

## 3.1.0 3.0.0 からアップグレード

コルドバ CLI で作成されたプロジェクト。

1.  更新、 `cordova` CLI バージョン。コマンド ライン インターフェイスを参照してください。

2.  実行`cordova platform update android`

コルドバ CLI で作成されていないプロジェクトの場合に実行します。

        bin/update <project_path>
    

## 2.9.0 から CLI (3.0.0) へのアップグレード

1.  コマンド ライン インターフェイスで説明されているようにコルドバ、CLI を使用して新しい Apache コルドバ 3.0.0 プロジェクトを作成します。

2.  コルドバ プロジェクトたとえば、プラットフォームの追加します。`cordova
platform add android`.

3.  プロジェクトの内容をコピー `www` ディレクトリを `www` で作成したコルドバ プロジェクトのルート ディレクトリ。

4.  下で適切なディレクトリに、古いプロジェクトから、ネイティブ アセットをコピー `platforms/android` ： このディレクトリには、ネイティブのコルドバ android プロジェクトが存在します。

5.  コルドバ CLI ツールを使用して、必要な任意のプラグインをインストールします。CLI 処理するすべてのコア Api のプラグインとして追加する必要がありますので注意してください。のみ 3.0.0 プラグインは CLI と互換性があります。

## 2.9.0 から 3.0.0 にアップグレードします。

1.  新しい Apache コルドバ Android プロジェクトを作成します。

2.  内容をコピーして `www` を新しいプロジェクト ディレクトリ。

3.  コピーからネイティブ Android 資産あなた `res` を新しいプロジェクト ディレクトリ。

4.  インストールされている任意のプラグイン経由でのコピー、 `src` サブディレクトリを新しいプロジェクトにします。

5.  非推奨アップグレードすることを確認 `<plugin>` あなたの古いからの参照 `config.xml` ファイルを新しい `<feature>` 仕様。

6.  参照を更新、 `org.apache.cordova.api` パッケージになるまで`org.apache.cordova`.
    
    **注**： すべてのコア Api が削除されているし、のプラグインとしてインストールする必要があります。詳細についてを使用して Plugman 管理プラグイン ガイドを参照してください。

## 2.8.0 から 2.9.0 へのアップグレードします。

1.  実行`bin/update <project_path>`.

## 2.8.0 へ 2.7.0 からのアップグレードします。

1.  削除 `cordova-2.7.0.jar` プロジェクトの `libs` ディレクトリ。

2.  追加 `cordova-2.8.0.jar` プロジェクトの `libs` ディレクトリ。

3.  Eclipse を使用すると、Eclipse プロジェクトを更新して、クリーンを行います。

<!-- SS Eclipse -->

1.  コピー、新しい `cordova.js` プロジェクトに。

2.  あなたの HTML を使用して、新しい更新 `cordova.js` ファイル。

3.  コピー、 `res/xml/config.xml` と一致するファイル`framework/res/xml/config.xml`.

4.  更新プログラム `framework/res/xml/config.xml` を以前のように同様の設定を持っています。

5.  ファイルのコピー元 `bin/templates/cordova` プロジェクトの `cordova` ディレクトリ。

## 2.6.0 からへ 2.7.0 をアップグレードします。

1.  削除 `cordova-2.6.0.jar` プロジェクトの `libs` ディレクトリ。

2.  追加 `cordova-2.7.0.jar` プロジェクトの `libs` ディレクトリ。

3.  Eclipse を使用すると、Eclipse プロジェクトを更新して、クリーンを行います。

4.  コピー、新しい `cordova-2.7.0.js` プロジェクトに。

5.  あなたの HTML を使用して、新しい更新 `cordova-2.7.0.js` ファイル。

6.  コピー、 `res/xml/config.xml` 一致するように`framework/res/xml/config.xml`.

7.  更新プログラム `framework/res/xml/config.xml` を以前のように同様の設定を持っています。

8.  ファイルのコピー元 `bin/templates/cordova` プロジェクトの `cordova` ディレクトリ。

## 2.5.0 から 2.6.0 にアップグレードします。

1.  削除 `cordova-2.5.0.jar` プロジェクトの `libs` ディレクトリ。

2.  追加 `cordova-2.6.0.jar` プロジェクトの `libs` ディレクトリ。

3.  Eclipse を使用すると、Eclipse プロジェクトを更新して、クリーンを行います。

4.  コピー、新しい `cordova-2.6.0.js` プロジェクトに。

5.  あなたの HTML を使用して、新しい更新 `cordova-2.6.0.js` ファイル。

6.  コピー、 `res/xml/config.xml` 一致するように`framework/res/xml/config.xml`.

7.  更新プログラム `framework/res/xml/config.xml` を以前のように同様の設定を持っています。

8.  ファイルのコピー元 `bin/templates/cordova` プロジェクトの `cordova` ディレクトリ。

実行 `bin/update <project>` プロジェクト パスを持つコルドバのソース ディレクトリに表示されます。

## 2.4.0 から 2.5.0 にアップグレードします。

1.  削除 `cordova-2.4.0.jar` プロジェクトの `libs` ディレクトリ。

2.  追加 `cordova-2.5.0.jar` プロジェクトの `libs` ディレクトリ。

3.  Eclipse を使用すると、Eclipse プロジェクトを更新して、クリーンを行います。

4.  コピー、新しい `cordova-2.5.0.js` プロジェクトに。

5.  あなたの HTML を使用して、新しい更新 `cordova-2.5.0.js` ファイル。

6.  コピー、 `res/xml/config.xml` 一致するように`framework/res/xml/config.xml`.

7.  更新プログラム `framework/res/xml/config.xml` を以前のように同様の設定を持っています。

8.  ファイルのコピー元 `bin/templates/cordova` プロジェクトの `cordova` ディレクトリ。

## 2.3.0 から 2.4.0 にアップグレードします。

1.  削除 `cordova-2.3.0.jar` プロジェクトの `libs` ディレクトリ。

2.  追加 `cordova-2.4.0.jar` プロジェクトの `libs` ディレクトリ。

3.  Eclipse を使用すると、Eclipse プロジェクトを更新して、クリーンを行います。

4.  コピー、新しい `cordova-2.4.0.js` プロジェクトに。

5.  あなたの HTML を使用して、新しい更新 `cordova-2.4.0.js` ファイル。

6.  コピー、 `res/xml/config.xml` 一致するように`framework/res/xml/config.xml`.

7.  ファイルのコピー元 `bin/templates/cordova` プロジェクトの `cordova` ディレクトリ。

## 2.2.0 から 2.3.0 にアップグレードします。

1.  削除 `cordova-2.2.0.jar` プロジェクトの `libs` ディレクトリ。

2.  追加 `cordova-2.3.0.jar` プロジェクトの `libs` ディレクトリ。

3.  Eclipse を使用すると、Eclipse プロジェクトを更新して、クリーンを行います。

4.  コピー、新しい `cordova-2.3.0.js` プロジェクトに。

5.  あなたの HTML を使用して、新しい更新 `cordova-2.3.0.js` ファイル。

6.  コピー、 `res/xml/config.xml` 一致するように`framework/res/xml/config.xml`.

7.  ファイルのコピー元 `bin/templates/cordova` プロジェクトの `cordova` ディレクトリ。

## 2.1.0 から 2.2.0 にアップグレードします。

1.  削除 `cordova-2.1.0.jar` プロジェクトの `libs` ディレクトリ。

2.  追加 `cordova-2.2.0.jar` プロジェクトの `libs` ディレクトリ。

3.  Eclipse を使用すると、Eclipse プロジェクトを更新して、クリーンを行います。

4.  コピー、新しい `cordova-2.2.0.js` プロジェクトに。

5.  あなたの HTML を使用して、新しい更新 `cordova-2.2.0.js` ファイル。

6.  コピー、 `res/xml/config.xml` 一致するように`framework/res/xml/config.xml`.

7.  ファイルのコピー元 `bin/templates/cordova` プロジェクトの `cordova` ディレクトリ。

## 2.0.0 から 2.1.0 にアップグレードします。

1.  削除 `cordova-2.0.0.jar` プロジェクトの `libs` ディレクトリ。

2.  追加 `cordova-2.1.0.jar` プロジェクトの `libs` ディレクトリ。

3.  Eclipse を使用すると、Eclipse プロジェクトを更新して、クリーンを行います。

4.  コピー、新しい `cordova-2.1.0.js` プロジェクトに。

5.  あなたの HTML を使用して、新しい更新 `cordova-2.1.0.js` ファイル。

6.  コピー、 `res/xml/config.xml` 一致するように`framework/res/xml/config.xml`.

7.  ファイルのコピー元 `bin/templates/cordova` プロジェクトの `cordova` ディレクトリ。

## 1.9.0 から 2.0.0 にアップグレードします。

1.  削除 `cordova-1.9.0.jar` プロジェクトの `libs` ディレクトリ。

2.  追加 `cordova-2.0.0.jar` プロジェクトの `libs` ディレクトリ。

3.  Eclipse を使用すると、Eclipse プロジェクトを更新して、クリーンを行います。

4.  コピー、新しい `cordova-2.0.0.js` プロジェクトに。

5.  あなたの HTML を使用して、新しい更新 `cordova-2.0.0.js` ファイル。

6.  コピー、 `res/xml/config.xml` 一致するように`framework/res/xml/config.xml`.

2.0.0 リリース、 `config.xml` ファイルを結合し、置換 `cordova.xml` と `plugins.xml` 。 古いファイルは廃止され、彼らはまだ、2.0.0 で動作しながら、将来のリリースで動作しなくなります。

## 1.8.1 から 1.9.0 にアップグレードします。

1.  削除 `cordova-1.8.0.jar` プロジェクトの `libs` ディレクトリ。

2.  追加 `cordova-1.9.0.jar` プロジェクトの `libs` ディレクトリ。

3.  Eclipse を使用すると、Eclipse プロジェクトを更新して、クリーンを行います。

4.  コピー、新しい `cordova-1.9.0.js` プロジェクトに。

5.  あなたの HTML を使用して、新しい更新 `cordova-1.9.0.js` ファイル。

6.  更新 `res/xml/plugins.xml` 一致するように`framework/res/xml/plugins.xml`.

導入により、 `CordovaWebView` では 1.9.0 リリースでは、サード パーティのプラグインが動作しません。 これらのプラグインからコンテキストを取得する必要があります、 `CordovaInterface` を使用して `getContext()` または `getActivity()` 。 経験豊富なアンドロイドの開発者でない場合プラグインのメンテナに連絡して、バグ追跡システムにこのタスクを追加してください。

## 1.8.0 から 1.8.0 へのアップグレードします。

1.  削除 `cordova-1.8.0.jar` プロジェクトの `libs` ディレクトリ。

2.  追加 `cordova-1.8.1.jar` プロジェクトの `libs` ディレクトリ。

3.  Eclipse を使用すると、Eclipse プロジェクトを更新して、クリーンを行います。

4.  コピー、新しい `cordova-1.8.1.js` プロジェクトに。

5.  あなたの HTML を使用して、新しい更新 `cordova-1.8.1.js` ファイル。

6.  更新 `res/xml/plugins.xml` 一致するように`framework/res/xml/plugins.xml`.

## 1.7.0 から 1.8.0 へのアップグレードします。

1.  削除 `cordova-1.7.0.jar` プロジェクトの `libs` ディレクトリ。

2.  追加 `cordova-1.8.0.jar` プロジェクトの `libs` ディレクトリ。

3.  Eclipse を使用すると、Eclipse プロジェクトを更新して、クリーンを行います。

4.  コピー、新しい `cordova-1.8.0.js` プロジェクトに。

5.  あなたの HTML を使用して、新しい更新 `cordova-1.8.0.js` ファイル。

6.  更新 `res/xml/plugins.xml` 一致するように`framework/res/xml/plugins.xml`.

## 1.7.0 から 1.8.0 へのアップグレードします。

1.  削除 `cordova-1.7.0.jar` プロジェクトの `libs` ディレクトリ。

2.  追加 `cordova-1.8.0.jar` プロジェクトの `libs` ディレクトリ。

3.  Eclipse を使用すると、Eclipse プロジェクトを更新して、クリーンを行います。

4.  コピー、新しい `cordova-1.8.0.js` プロジェクトに。

5.  あなたの HTML を使用して、新しい更新 `cordova-1.8.0.js` ファイル。

6.  更新 `res/xml/plugins.xml` 一致するように`framework/res/xml/plugins.xml`.

## 1.6.1 から 1.7.0 へのアップグレードします。

1.  削除 `cordova-1.6.1.jar` プロジェクトの `libs` ディレクトリ。

2.  追加 `cordova-1.7.0.jar` プロジェクトの `libs` ディレクトリ。

3.  Eclipse を使用すると、Eclipse プロジェクトを更新して、クリーンを行います。

4.  コピー、新しい `cordova-1.7.0.js` プロジェクトに。

5.  更新 `res/xml/plugins.xml` 一致するように`framework/res/xml/plugins.xml`.

## 1.6.0 から 1.6.1 へのアップグレードします。

1.  削除 `cordova-1.6.0.jar` プロジェクトの `libs` ディレクトリ。

2.  追加 `cordova-1.6.1.jar` プロジェクトの `libs` ディレクトリ。

3.  Eclipse を使用すると、Eclipse プロジェクトを更新して、クリーンを行います。

4.  コピー、新しい `cordova-1.6.1.js` プロジェクトに。

5.  更新 `res/xml/plugins.xml` 一致するように`framework/res/xml/plugins.xml`.

## 1.5.0 から 1.6.0 にアップグレードします。

1.  削除 `cordova-1.5.0.jar` プロジェクトの `libs` ディレクトリ。

2.  追加 `cordova-1.6.0.jar` プロジェクトの `libs` ディレクトリ。

3.  Eclipse を使用すると、Eclipse プロジェクトを更新して、クリーンを行います。

4.  コピー、新しい `cordova-1.6.0.js` プロジェクトに。

5.  あなたの HTML を使用して、新しい更新 `cordova-1.6.0.js` ファイル。

6.  更新 `res/xml/plugins.xml` 一致するように`framework/res/xml/plugins.xml`.

7.  交換 `res/xml/phonegap.xml` と `res/xml/cordova.xml` と一致するには`framework/res/xml/cordova.xml`.

## 1.4.0 から 1.5.0 にアップグレードします。

1.  削除 `phonegap-1.4.0.jar` プロジェクトの `libs` ディレクトリ。

2.  追加 `cordova-1.5.0.jar` プロジェクトの `libs` ディレクトリ。

3.  Eclipse を使用すると、Eclipse プロジェクトを更新して、クリーンを行います。

4.  コピー、新しい `cordova-1.5.0.js` プロジェクトに。

5.  あなたの HTML を使用して、新しい更新 `cordova-1.5.0.js` ファイル。

6.  更新 `res/xml/plugins.xml` 一致するように`framework/res/xml/plugins.xml`.

7.  交換 `res/xml/phonegap.xml` と `res/xml/cordova.xml` と一致するには`framework/res/xml/cordova.xml`.

## 1.3.0 から 1.4.0 にアップグレードします。

1.  削除 `phonegap-1.3.0.jar` プロジェクトの `libs` ディレクトリ。

2.  追加 `phonegap-1.4.0.jar` プロジェクトの `libs` ディレクトリ。

3.  Eclipse を使用すると、Eclipse プロジェクトを更新して、クリーンを行います。

4.  コピー、新しい `phonegap-1.4.0.js` プロジェクトに。

5.  あなたの HTML を使用して、新しい更新 `phonegap-1.4.0.js` ファイル。

6.  更新 `res/xml/plugins.xml` 一致するように`framework/res/xml/plugins.xml`.

7.  更新 `res/xml/phonegap.xml` 一致するように`framework/res/xml/phonegap.xml`.

## 1.3.0 に 1.2.0 からアップグレードします。

1.  削除 `phonegap-1.2.0.jar` プロジェクトの `libs` ディレクトリ。

2.  追加 `phonegap-1.3.0.jar` プロジェクトの `libs` ディレクトリ。

3.  Eclipse を使用すると、Eclipse プロジェクトを更新して、クリーンを行います。

4.  コピー、新しい `phonegap-1.3.0.js` プロジェクトに。

5.  あなたの HTML を使用して、新しい更新 `phonegap-1.2.0.js` ファイル。

6.  更新 `res/xml/plugins.xml` 一致するように`framework/res/xml/plugins.xml`.

7.  更新 `res/xml/phonegap.xml` 一致するように`framework/res/xml/phonegap.xml`.

## 1.1.0 から 1.2.0 にアップグレードします。

1.  削除 `phonegap-1.1.0.jar` プロジェクトの `libs` ディレクトリ。

2.  追加 `phonegap-1.2.0.jar` プロジェクトの `libs` ディレクトリ。

3.  Eclipse を使用すると、Eclipse プロジェクトを更新して、クリーンを行います。

4.  コピー、新しい `phonegap-1.2.0.js` プロジェクトに。

5.  あなたの HTML を使用して、新しい更新 `phonegap-1.2.0.js` ファイル。

6.  更新 `res/xml/plugins.xml` 一致するように`framework/res/xml/plugins.xml`.

7.  更新 `res/xml/phonegap.xml` 一致するように`framework/res/xml/phonegap.xml`.

## 1.0.0 1.1.0 にアップグレードします。

1.  削除 `phonegap-1.0.0.jar` プロジェクトの `libs` ディレクトリ。

2.  追加 `phonegap-1.1.0.jar` プロジェクトの `libs` ディレクトリ。

3.  Eclipse を使用すると、Eclipse プロジェクトを更新して、クリーンを行います。

4.  コピー、新しい `phonegap-1.1.0.js` プロジェクトに。

5.  あなたの HTML を使用して、新しい更新 `phonegap-1.1.0.js` ファイル。

6.  更新 `res/xml/plugins.xml` 一致するように`framework/res/xml/plugins.xml`.

## 0.9.6 から 1.0.0 へのアップグレードします。

1.  削除 `phonegap-0.9.6.jar` プロジェクトの `libs` ディレクトリ。

2.  追加 `phonegap-1.0.0.jar` プロジェクトの `libs` ディレクトリ。

3.  Eclipse を使用すると、Eclipse プロジェクトを更新して、クリーンを行います。

4.  コピー、新しい `phonegap-1.0.0.js` プロジェクトに。

5.  あなたの HTML を使用して、新しい更新 `phonegap-1.0.0.js` ファイル。

6.  追加の `res/xml/plugins.xml` 一致するように`framework/res/xml/plugins.xml`.