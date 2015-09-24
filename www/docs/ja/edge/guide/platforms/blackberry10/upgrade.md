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

title: ブラックベリー 10 のアップグレード
---

# ブラックベリー 10 のアップグレード

このガイドは、コルドバの旧バージョンからアップグレードするブラックベリー プロジェクトを変更する方法を示します。 これらの命令のほとんど、古いの前にあるコマンド ライン ツールのセットで作成されたプロジェクトに適用されます、 `cordova` CLI ユーティリティ。 CLI のバージョンを更新する方法については、コマンド ライン インターフェイス参照してください。

## アップグレード 3.6.0 プロジェクト 4.0.0

CLI 以外のプロジェクトを実行します。

        bin/update path/to/project
    

CLI のプロジェクト。

1.  更新、 `cordova` CLI バージョン。コマンド ライン インターフェイスを参照してください。

2.  既存のプロジェクトでは、`コルドバ プラットフォーム更新ブラックベリー` を実行します。

## 3.1.0 から 3.2.0 へのアップグレード

コルドバ CLI で作成されたプロジェクト。

1.  更新、 `cordova` 、CLI バージョン。コマンド ライン インターフェイスを参照してください。

2.  `cordova platform update blackberry` を実行します。

コルドバ CLI で作成されていないプロジェクトの場合に実行します。

        bin/update <project_path>
    

## 3.1.0 3.0.0 からアップグレードします。

1.  コマンド ライン インターフェイスで説明されているようにコルドバ、CLI を使用して新しい Apache コルドバ 3.1.0 プロジェクトを作成します。

2.  たとえばコルドバ プロジェクトにあなたのプラットフォームを追加します。`cordova
platform add blackberry10`.

3.  元のプロジェクトの内容をコピー `www` ディレクトリを `www` で作成したコルドバ プロジェクトのルート ディレクトリ。

4.  コピーまたは元のプロジェクトから任意のネイティブの資産を上書き ( `Resources` など)。

5.  コピー、 `config.xml` ファイルに、 `www` ディレクトリ、すべてのプラグインの定義を削除します。ここではなくプラットフォーム ディレクトリ内の設定を変更する必要があります。

6.  コルドバ CLI ツールを使用して、必要な任意のプラグインをインストールします。 CLI が処理するすべてのコア Api のプラグインとして追加する必要がありますので注意してください。 プラグインだけマーク 3.0.0 と上記 CLI と互換性のあります。

7.  ビルドおよびテストします。

CLI を専ら BlackBerry10 プラットフォームをサポートすることに注意してください。脚本と管理された BBOS、コルドバ バージョン 2.9.0 以降を参照してくださいと下。

## 2.9.0 から CLI (3.0.0) へのアップグレード

1.  コマンド ライン インターフェイスで説明されているようにコルドバ、CLI を使用して新しい Apache コルドバ 3.0.0 プロジェクトを作成します。

2.  たとえばコルドバ プロジェクトにプラットフォームを追加します。`cordova
platform add blackberry10`.

3.  元のプロジェクトの内容をコピー `www` ディレクトリを `www` で作成したコルドバ プロジェクトのルート ディレクトリ。

4.  コピーまたは元のプロジェクトから任意のネイティブの資産を上書き ( `Resources` など)。

5.  コピー、 `config.xml` ファイルに、 `www` ディレクトリ、プラグインの定義は削除とします。ここではなくプラットフォーム ディレクトリ内の設定を変更する必要があります。

6.  コルドバ CLI ツールを使用して、必要な任意のプラグインをインストールします。CLI が処理するすべてのコア Api のプラグインとして追加する必要がありますので注意してください。のみ 3.0.0 プラグインは CLI と互換性があります。

7.  ビルドおよびテストします。

## アップグレード 2.8.0 プロジェクト 2.9.0

ブラックベリー 10: のため

1.  ダウンロードし、するたとえば、ハード ドライブ上の永続的なディレクトリ場所にコルドバ 2.9.0 ソースを展開`~/Cordova-2.9.0`.

2.  SDK ツールを実行する任意の終了: Eclipse、Momentics など。

3.  端末のような unix を使用して、上記ダウンロードしたソースを配置したディレクトリに移動します： ターミナル.app、Bash、Cygwin など。

4.  ブラックベリー シェル ツール ガイドで説明されているように、新しいプロジェクトを作成します。これが、更新されたプロジェクトのホームになります。

5.  以前のプロジェクトから、プロジェクトのソースをコピー `/www` を新しいプロジェクトのディレクトリ `/www` ディレクトリ。

6.  コルドバ スクリプト参照を更新して、 `www/index.html` ファイルとスクリプト参照が含まれている他のファイル) を指す、新しい `cordova.js` ファイル。

BlackBerryOS/脚本。

1.  たとえば、ハード ドライブ上の永続的なディレクトリ場所にコルドバ 2.9.0 ソースを抽出をダウンロードして`~/Cordova-2.9.0`.

2.  SDK ツールを実行する任意の終了: Eclipse、Momentics など。

3.  端末のような unix を使用して、上記ダウンロードしたソースを配置したディレクトリに移動します： ターミナル.app、Bash、Cygwin など。

4.  ブラックベリー シェル ツール ガイドで説明されているように、新しいプロジェクトを作成します。この新しいプロジェクトから資産が必要です。

5.  コピー、 `www/cordova.js` ファイルに新しいプロジェクトから、 `www` ディレクトリ、および削除、 `www/cordova.js` ファイル。

6.  コルドバ スクリプト参照を更新して、 `www/index.html` ファイルとスクリプト参照が含まれている他のファイル) を指す、新しい `cordova.js` ファイル。

7.  コピー、 `native` 古いを上書きする既存のプロジェクトに新しいプロジェクトのディレクトリ `native` ディレクトリ。

8.  コピー、 `lib` 古いを上書きする既存のプロジェクトに新しいプロジェクトのディレクトリ `lib` ディレクトリ。

9.  コピー、 `cordova` 古いを上書きする既存のプロジェクトに新しいプロジェクトのディレクトリ `cordova` ディレクトリ。

## アップグレード 2.7.0 2.8.0 にプロジェクト

ブラックベリー 10 は新しい CLI ツールを使用して、コア Api のプラグインとしてを管理します。 指示は、古いプロジェクトの更新の複雑さのため、既存のプロジェクトを更新するのではなく、新しいプロジェクト、プロジェクトを移行します。 またコルドバ js スクリプト ファイルであることに注意してください 'cordova.js' と呼ばれて、もはやバージョン文字列が含まれています。

1.  ダウンロードし、するたとえば、ハード ドライブ上の永続的なディレクトリ場所にコルドバ 2.8.0 ソースを展開`~/Cordova-2.8.0`.

2.  SDK ツールを実行する任意の終了: Eclipse、Momentics など。

3.  端末のような unix を使用して、上記ダウンロードしたソースを配置したディレクトリに移動します： ターミナル.app、Bash、Cygwin など。

4.  ブラックベリー シェル ツール ガイドで説明されているように、新しいプロジェクトを作成します。これが、更新されたプロジェクトのホームになります。

5.  以前のプロジェクトから、プロジェクトのソースをコピー `/www` を新しいプロジェクトのディレクトリ `/www` ディレクトリ。

6.  コルドバ スクリプト参照を更新して、 `www/index.html` ファイルとスクリプト参照が含まれている他のファイル) を指す、新しい `cordova.js` ファイル。

BlackBerryOS/脚本: の

1.  たとえば、ハード ドライブ上の永続的なディレクトリ場所にコルドバ 2.8.0 ソースを抽出をダウンロードして`~/Cordova-2.8.0`.

2.  SDK ツールを実行する任意の終了: Eclipse、Momentics など。

3.  端末のような unix を使用して、上記ダウンロードしたソースを配置したディレクトリに移動します： ターミナル.app、Bash、Cygwin など。

4.  ブラックベリー シェル ツール ガイドで説明されているように、新しいプロジェクトを作成します。この新しいプロジェクトから資産が必要です。

5.  コピー、 `www/cordova.js` ファイルに新しいプロジェクトから、 `www` ディレクトリ、および削除、 `www/cordova.js` ファイル。

6.  コルドバのスクリプト参照を更新、 `www/index.html` ファイル (およびスクリプト参照を含む他のファイル) を指す新しい `cordova.js` ファイル。

7.  コピー、 `native` 、古いを上書きする既存のプロジェクトに新しいプロジェクト ディレクトリ `native` ディレクトリ。

8.  コピー、 `lib` 、古いを上書きする既存のプロジェクトに新しいプロジェクト ディレクトリ `lib` ディレクトリ。

9.  コピー、 `cordova` 、古いを上書きする既存のプロジェクトに新しいプロジェクト ディレクトリ `cordova` ディレクトリ。

## アップグレード 2.6.0 へ 2.7.0 プロジェクト

1.  ダウンロードし、`~/Cordova-2.7.0` にたとえば、ハード ドライブ上の永続的なディレクトリ場所にコルドバ 2.7.0 ソース抽出.

2.  SDK ツールを実行する任意の終了: 日食、Momentics など。

3.  上記、ターミナルのような unix を使用してダウンロードしたソースを置く場所のディレクトリに移動します: ターミナル、Bash、Cygwin など。

4.  ブラックベリー シェル ツール ガイドで説明されているように、新しいプロジェクトを作成します。この新しいプロジェクトから資産が必要です。

5.  コピー、 `www/cordova-2.7.0.js` ファイルに新しいプロジェクトから、 `www` ディレクトリ、および削除、 `www/cordova-2.6.0.js` ファイル。

6.  コルドバのスクリプト参照を更新、 `www/index.html` ファイル (およびスクリプト参照を含む他のファイル) を指す新しい `cordova-2.7.0.js` ファイル。

7.  コピー、 `native` 古いを上書きする既存のプロジェクトに新しいプロジェクトのディレクトリ `native` ディレクトリ。

8.  コピー、 `lib` 古いを上書きする既存のプロジェクトに新しいプロジェクトのディレクトリ `lib` ディレクトリ。

9.  コピー、 `cordova` 古いを上書きする既存のプロジェクトに新しいプロジェクトのディレクトリ `cordova` ディレクトリ。

## 2.5.0 から 2.6.0 にアップグレードします。

PhoneGap ダウンロード ディレクトリを更新するには。

全体のディレクトリの新しいコピーをダウンロードすることをお勧めします。

ただし、段階的な部分の更新に必要な新しい部品を示します。

1.  Cordova.blackberry.js ファイルを更新、 `Phonegap-2.6.0/lib/blackberry/javascript` ディレクトリ。

2.  更新、 `ext` 、 `ext-air` 、および `ext-qnx` で、 `Phonegap-2.6.0/lib/blackberry/framework` ディレクトリ。

3.  更新、 `build.xml` ファイルで、 `Phonegap-2.6.0/lib/blackberry` ディレクトリ。

4.  更新、 `Phonegap-2.6.0/lib/blackberry/bin` ディレクトリ。

5.  更新、 `VERSION` ファイルで、 `Phonegap-2.6.0/lib/blackberry` ディレクトリ。

例の更新/プロジェクト ・ ディレクトリまたは既存の移行します。

1.  オープン、 `www` ディレクトリ、アプリケーションが含まれています。

2.  取り外しての .jar ファイルを更新、 `ext/` ディレクトリ。

3.  内容を更新、 `ext-air/` ディレクトリ。

4.  内容を更新、 `ext-qnx/` ディレクトリ。

5.  新しいコピー `cordova-2.6.0.js` プロジェクトに。

6.  新しいを使用する HTML を更新 `cordova-2.6.0.js` ファイル。

## 2.4.0 から 2.5.0 にアップグレードします。

PhoneGap ダウンロード ディレクトリを更新するには。

全体のディレクトリの新しいコピーをダウンロードすることをお勧めします。

ただし、段階的な部分の更新に必要な新しい部品を示します。

1.  Cordova.blackberry.js ファイルを更新、 `Phonegap-2.5.0/lib/blackberry/javascript` ディレクトリ。

2.  更新、 `ext` 、 `ext-air` 、および `ext-qnx` で、 `Phonegap-2.5.0/lib/blackberry/framework` ディレクトリ。

3.  更新、 `build.xml` ファイルで、 `Phonegap-2.5.0/lib/blackberry` ディレクトリ。

4.  更新、 `Phonegap-2.5.0/lib/blackberry/bin` ディレクトリ。

5.  更新、 `VERSION` ファイルで、 `Phonegap-2.5.0/lib/blackberry` ディレクトリ。

例の更新/プロジェクト ・ ディレクトリまたは既存の移行します。

1.  オープン、 `www` アプリケーションを含むディレクトリ。

2.  削除し、更新の .jar ファイルは `ext/` ディレクトリ。

3.  内容を更新、 `ext-air/` ディレクトリ。

4.  内容を更新、 `ext-qnx/` ディレクトリ。

5.  新しいコピー `cordova-2.5.0.js` プロジェクトに。

6.  新しいを使用する HTML を更新 `cordova-2.5.0.js` ファイル。

## 2.3.0 から 2.4.0 にアップグレードします。

更新、ちょうど `www` ディレクトリ。

1.  オープン、 `www` ディレクトリ、アプリケーションが含まれています。

2.  取り外しての .jar ファイルを更新、 `ext/` ディレクトリ。

3.  内容を更新、 `ext-air/` ディレクトリ。

4.  新しいコピー `cordova-2.4.0.js` プロジェクトに。
    
    *   脚本、後、更新の .js ファイルの場合、 `playbook/` ディレクトリ。
    *   ブラックベリー 10、.js ファイルを更新かどうか、 `qnx/` ディレクトリ。

5.  新しいを使用する HTML を更新 `cordova-2.4.0.js` ファイル。

（すなわち、更新ツールを使用して、ant） サンプル ディレクトリを更新しています。

1.  オープン、 `sample/lib/` ディレクトリ。

2.  .Jar ファイルを更新、 `cordova.2.3.0/ext/` ディレクトリ。

3.  内容を更新、 `cordova.2.3.0/ext-air/` ディレクトリ。

4.  内容を更新、 `cordova.2.3.0/ext-qnx/` ディレクトリ。

5.  .Js ファイルを更新、 `cordova.2.3.0/javascript/` ディレクトリ。

6.  オープン、 `sample/lib/` ディレクトリおよび名前の変更、 `cordova.2.3.0/` ディレクトリを`cordova.2.4.0/`.

7.  種類 `ant blackberry build` または `ant playbook build` を更新する、 `www` ディレクトリを更新されたコルドバ。

8.  オープン、 `www` ディレクトリと新しいを使用する HTML を更新 `cordova-2.4.0.js` ファイル。

## 2.2.0 から 2.3.0 にアップグレードします。

更新だけ `www` ディレクトリ。

1.  オープン、 `www` ディレクトリ、アプリケーションが含まれています。

2.  取り外しての .jar ファイルを更新、 `ext/` ディレクトリ。

3.  内容を更新、 `ext-air/` ディレクトリ。

4.  新しいコピー `cordova-2.3.0.js` プロジェクトに。
    
    *   脚本、後、更新の .js ファイルの場合、 `playbook/` ディレクトリ。
    *   ブラックベリー 10、.js ファイルを更新かどうか、 `qnx/` ディレクトリ。

5.  新しいを使用する HTML を更新 `cordova-2.3.0.js` ファイル。

（すなわち、更新ツールを使用して、ant） サンプル ディレクトリを更新しています。

1.  オープン、 `sample/lib/` ディレクトリ。

2.  末尾が .jar のファイル更新、 `cordova.2.2.0/ext/` ディレクトリ。

3.  内容を更新、 `cordova.2.2.0/ext-air/` ディレクトリ。

4.  内容を更新、 `cordova.2.2.0/ext-qnx/` ディレクトリ。

5.  .Js ファイル更新、 `cordova.2.2.0/javascript/` ディレクトリ。

6.  オープン、 `sample/lib/` ディレクトリおよび名前の変更、 `cordova.2.2.0/` ディレクトリを`cordova.2.3.0/`.

7.  タイプ `ant blackberry build` または `ant playbook build` を更新する、 `www` 更新コルドバとディレクトリ。

8.  オープン、 `www` ディレクトリを使用して、新しい HTML の更新と `cordova-2.3.0.js` ファイル。

## 2.1.0 から 2.2.0 にアップグレードします。

ちょうど www ディレクトリを更新しています。

1.  オープン、 `www` アプリケーションを含むディレクトリ。

2.  削除し、更新の .jar ファイルは `ext/` ディレクトリ。

3.  内容を更新、 `ext-air/` ディレクトリ。

4.  コピー、新しい `cordova-2.2.0.js` プロジェクトに。
    
    *   脚本、それから更新の .js ファイルの場合、 `playbook/` ディレクトリ。
    *   ブラックベリー 10、.js ファイルで更新かどうか、 `qnx/` ディレクトリ。

5.  あなたの HTML を使用して、新しい更新 `cordova-2.2.0.js` ファイル。

（すなわち、更新ツールを使用して、ant） サンプル ディレクトリを更新しています。

1.  オープン、 `sample/lib/` ディレクトリ。

2.  末尾が .jar のファイル更新、 `cordova.2.1.0/ext/` ディレクトリ。

3.  内容を更新、 `cordova.2.1.0/ext-air/` ディレクトリ。

4.  内容を更新、 `cordova.2.1.0/ext-qnx/` ディレクトリ。

5.  .Js ファイルを更新、 `cordova.2.1.0/javascript/` ディレクトリ。

6.  オープン、 `sample/lib/` ディレクトリおよび名前の変更、 `cordova.2.1.0/` ディレクトリを`cordova.2.2.0/`.

7.  種類 `ant blackberry build` または `ant playbook build` を更新する、 `www` ディレクトリを更新されたコルドバ。

8.  オープン、 `www` ディレクトリと新しいを使用する HTML を更新 `cordova-2.2.0.js` ファイル。

## 2.0.0 から 2.1.0 にアップグレードします。

更新、ちょうど `www` ディレクトリ。

1.  オープン、 `www` ディレクトリ、アプリケーションが含まれています。

2.  取り外しての .jar ファイルを更新、 `ext/` ディレクトリ。

3.  内容を更新、 `ext-air/` ディレクトリ。

4.  新しいコピー `cordova-2.1.0.js` プロジェクトに。
    
    *   脚本、後、更新の .js ファイルの場合、 `playbook/` ディレクトリ。

5.  新しいを使用する HTML を更新 `cordova-2.1.0.js` ファイル。

（すなわち、更新ツールを使用して、ant） サンプル ディレクトリを更新しています。

1.  オープン、 `sample/lib/` ディレクトリ。

2.  .Jar ファイルを更新、 `cordova.2.0.0/ext/` ディレクトリ。

3.  内容を更新、 `cordova.2.0.0/ext-air/` ディレクトリ。

4.  .Js ファイルを更新、 `cordova.2.0.0/javascript/` ディレクトリ。

5.  オープン、 `sample/lib/` ディレクトリおよび名前の変更、 `cordova.2.0.0/` ディレクトリを`cordova.2.1.0/`.

6.  種類 `ant blackberry build` または `ant playbook build` を更新する、 `www` ディレクトリを更新されたコルドバ。

7.  オープン、 `www` ディレクトリと新しいを使用する HTML を更新 `cordova-2.1.0.js` ファイル。

## 1.9.0 から 2.0.0 にアップグレードします。

更新、ちょうど `www` ディレクトリ。

1.  オープン、 `www` ディレクトリ、アプリケーションが含まれています。

2.  取り外しての .jar ファイルを更新、 `ext/` ディレクトリ。

3.  内容を更新、 `ext-air/` ディレクトリ。

4.  新しいコピー `cordova-2.0.0.js` プロジェクトに。
    
    *   脚本、後、更新の .js ファイルの場合、 `playbook/` ディレクトリ。

5.  新しいを使用する HTML を更新 `cordova-2.0.0.js` ファイル。

6.  更新、 `www/plugins.xml` ファイル。2 つのプラグインは、その名前空間/サービス ラベルを変更しました。キャプチャおよび接触のプラグインの古いエントリを変更します。
    
        <plugin name="Capture" value="org.apache.cordova.media.MediaCapture"/>
        <plugin name="Contact" value="org.apache.cordova.pim.Contact"/>
        
    
    宛先：
    
        <plugin name="Capture" value="org.apache.cordova.capture.MediaCapture"/>
        <plugin name="Contacts" value="org.apache.cordova.pim.Contact"/>
        

（すなわち、更新ツールを使用して、ant） サンプル ディレクトリを更新しています。

1.  オープン、 `sample/lib/` ディレクトリ。

2.  .Jar ファイルを更新、 `cordova.1.9.0/ext/` ディレクトリ。

3.  内容を更新、 `cordova.1.9.0/ext-air/` ディレクトリ。

4.  .Js ファイルを更新、 `cordova.1.9.0/javascript/` ディレクトリ。

5.  オープン、 `sample/lib/` ディレクトリおよび名前の変更、 `cordova.1.9.0/` ディレクトリを`cordova.2.0.0/`.

6.  種類 `ant blackberry build` または `ant playbook build` を更新する、 `www` ディレクトリを更新されたコルドバ。

7.  オープン、 `www` ディレクトリと新しいを使用する HTML を更新 `cordova-2.0.0.js` ファイル。

8.  オープン、 `www` ディレクトリおよび更新、 `plugins.xml` ファイル。2 つのプラグインは、その名前空間/サービス ラベルを変更しました。キャプチャおよび接触のプラグインの古いエントリを変更します。
    
         <plugin name="Capture" value="org.apache.cordova.media.MediaCapture"/>
         <plugin name="Contact" value="org.apache.cordova.pim.Contact"/>
        
    
    宛先：
    
         <plugin name="Capture" value="org.apache.cordova.capture.MediaCapture"/>
         <plugin name="Contacts" value="org.apache.cordova.pim.Contact"/>
        

*   1.8.0 へのアップグレード、1.7.0 から行ってください。

## 1.7.0 から 1.8.0 へのアップグレードします。

更新だけ `www` ディレクトリ。

1.  オープン、 `www` ディレクトリ、アプリケーションが含まれています。

2.  取り外しての .jar ファイルを更新、 `ext/` ディレクトリ。

3.  内容を更新、 `ext-air/` ディレクトリ。

4.  新しいコピー `cordova-1.8.0.js` プロジェクトに。
    
    *   脚本、後、更新の .js ファイルの場合、 `playbook/` ディレクトリ。

5.  新しいを使用する HTML を更新 `cordova-1.8.0.js` ファイル。

6.  更新、 `www/plugins.xml` ファイル。2 つのプラグインは、その名前空間/サービス ラベルを変更しました。キャプチャおよび接触のプラグインの古いエントリを変更します。
    
        <plugin name="Capture" value="org.apache.cordova.media.MediaCapture"/>
        <plugin name="Contact" value="org.apache.cordova.pim.Contact"/>
        
    
    宛先：
    
        <plugin name="Capture" value="org.apache.cordova.capture.MediaCapture"/>
        <plugin name="Contacts" value="org.apache.cordova.pim.Contact"/>
        

(すなわち、更新ツールを使用して、ant) サンプルのディレクトリを更新するには。

1.  オープン、 `sample/lib/` ディレクトリ。

2.  .Jar ファイルを更新、 `cordova.1.7.0/ext/` ディレクトリ。

3.  内容を更新、 `cordova.1.7.0/ext-air/` ディレクトリ。

4.  .Js ファイルを更新、 `cordova.1.7.0/javascript/` ディレクトリ。

5.  オープン、 `sample/lib/` ディレクトリおよび名前の変更、 `cordova.1.7.0/` ディレクトリを`cordova.1.8.0/`.

6.  種類 `ant blackberry build` または `ant playbook build` を更新する、 `www` ディレクトリを更新されたコルドバ。

7.  オープン、 `www` ディレクトリと新しいを使用する HTML を更新 `cordova-1.8.0.js` ファイル。

8.  オープン、 `www` ディレクトリおよび更新、 `plugins.xml` ファイル。2 つのプラグインは、その名前空間/サービス ラベルを変更しました。キャプチャおよび接触のプラグインの古いエントリを変更します。
    
         <plugin name="Capture" value="org.apache.cordova.media.MediaCapture"/>
         <plugin name="Contact" value="org.apache.cordova.pim.Contact"/>
        
    
    宛先：
    
         <plugin name="Capture" value="org.apache.cordova.capture.MediaCapture"/>
         <plugin name="Contacts" value="org.apache.cordova.pim.Contact"/>