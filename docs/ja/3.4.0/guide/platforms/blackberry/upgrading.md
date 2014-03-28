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

# ブラックベリーのアップグレード

このガイドは、コルドバの旧バージョンからアップグレードするブラックベリー プロジェクトを変更する方法を示します。 古いの前にあるコマンド ライン ツールのセットで作成されたプロジェクトにこれらの指示を適用、 `cordova` CLI ユーティリティ。 CLI のバージョンを更新する方法については、コマンド ライン インターフェイス参照してください。

## アップグレード 2.8.0 プロジェクト 2.9.0

ブラックベリー 10:

1.  ダウンロードし、するたとえば、ハード ドライブ上の永続的な場所にコルドバ 2.9.0 ソースを展開`~/Cordova-2.9.0`.

2.  SDK ツールを実行する任意の終了: Eclipse、Momentics など。

3.  端末のような unix を使用して、上記ダウンロードしたソースを配置したディレクトリに移動します： ターミナル.app、Bash、Cygwin など。

4.  ブラックベリーのコマンド ライン ツールで説明されているように、新しいプロジェクトを作成します。これが、更新されたプロジェクトのホームになります。

5.  以前のプロジェクトからプロジェクトのソースをコピー `/www` を新しいプロジェクトのディレクトリ `/www` ディレクトリ。

6.  コルドバ スクリプト参照を更新して、 `www/index.html` ファイルとスクリプト参照が含まれている他のファイル) を指す、新しい `cordova.js` ファイル。

### BlackBerryOS/脚本

1.  ダウンロードし、するたとえば、ハード ドライブ上の永続的な場所にコルドバ 2.9.0 ソースを展開`~/Cordova-2.9.0`.

2.  SDK ツールを実行する任意の終了: Eclipse、Momentics など。

3.  端末のような unix を使用して、上記ダウンロードしたソースを配置したディレクトリに移動します： ターミナル.app、Bash、Cygwin など。

4.  IOS コマンド ライン ツールで説明されているように、新しいプロジェクトを作成します。この新しいプロジェクトから資産必要があります。

5.  コピー、 `www/cordova.js` に新しいプロジェクトからファイルを `www` ディレクトリ、および削除を `www/cordova.js` ファイル。

6.  コルドバ スクリプト参照を更新して、 `www/index.html` ファイルとスクリプト参照が含まれている他のファイル) を指す、新しい `cordova.js` ファイル。

7.  コピー、 `native` 、古いを上書きする既存のプロジェクトに新しいプロジェクト ディレクトリ `native` ディレクトリ。

8.  コピー、 `lib` 、古いを上書きする既存のプロジェクトに新しいプロジェクト ディレクトリ `lib` ディレクトリ。

9.  コピー、 `cordova` 、古いを上書きする既存のプロジェクトに新しいプロジェクト ディレクトリ `cordova` ディレクトリ。

## アップグレード 2.7.0 2.8.0 にプロジェクトします。

ブラックベリー 10:

ブラックベリー 10 新しい CLI ツールを使用して、コア Api のプラグインとして管理します。 指示は更新、古いプロジェクトの複雑さのため、既存のプロジェクトを更新するのではなく、新しいプロジェクトにプロジェクトを移行します。 またメモ コルドバ js スクリプト ファイルは今 'cordova.js' と呼ばれもはやバージョン文字列が含まれています。

1.  ダウンロード ソース展開と、コルドバ 2.8.0、ハード ドライブ上の永続的な場所を例に`~/Cordova-2.8.0`.

2.  SDK ツールを実行する任意の終了: Eclipse、Momentics など。

3.  端末のような unix を使用して、上記ダウンロードしたソースを配置したディレクトリに移動します： ターミナル.app、Bash、Cygwin など。

4.  ブラックベリーのコマンド ライン ツールで説明されているように、新しいプロジェクトを作成します。これが、更新されたプロジェクトのホームになります。

5.  以前のプロジェクトからプロジェクトのソースをコピー `/www` を新しいプロジェクトのディレクトリ `/www` ディレクトリ。

6.  コルドバ スクリプト参照を更新して、 `www/index.html` ファイルとスクリプト参照が含まれている他のファイル) を指す、新しい `cordova.js` ファイル。

BlackBerryOS/脚本:

1.  ダウンロード ソース展開と、コルドバ 2.8.0、ハード ドライブ上の永続的な場所を例に`~/Cordova-2.8.0`.

2.  SDK ツールを実行する任意の終了: Eclipse、Momentics など。

3.  端末のような unix を使用して、上記ダウンロードしたソースを配置したディレクトリに移動します： ターミナル.app、Bash、Cygwin など。

4.  IOS コマンド ライン ツールで説明されているように、新しいプロジェクトを作成します。この新しいプロジェクトから資産必要があります。

5.  コピー、 `www/cordova.js` に新しいプロジェクトからファイルを `www` ディレクトリ、および削除を `www/cordova.js` ファイル。

6.  コルドバ スクリプト参照を更新して、 `www/index.html` ファイルとスクリプト参照が含まれている他のファイル) を指す、新しい `cordova.js` ファイル。

7.  コピー、 `native` 、古いを上書きする既存のプロジェクトに新しいプロジェクト ディレクトリ `native` ディレクトリ。

8.  コピー、 `lib` 、古いを上書きする既存のプロジェクトに新しいプロジェクト ディレクトリ `lib` ディレクトリ。

9.  コピー、 `cordova` 、古いを上書きする既存のプロジェクトに新しいプロジェクト ディレクトリ `cordova` ディレクトリ。

## アップグレード 2.6.0 へ 2.7.0 プロジェクトします。

1.  ダウンロードして、たとえば、ハード ドライブ上の永続的な場所へ 2.7.0 コルドバ ソースを抽出するには`~/Cordova-2.7.0`.

2.  SDK ツールを実行する任意の終了: Eclipse、Momentics など。

3.  端末のような unix を使用して、上記ダウンロードしたソースを配置したディレクトリに移動します： ターミナル.app、Bash、Cygwin など。

4.  ブラックベリーのコマンド ライン ツールで説明されているように、新しいプロジェクトを作成します。この新しいプロジェクトから資産必要があります。

5.  コピー、 `www/cordova-2.7.0.js` に新しいプロジェクトからファイルを `www` ディレクトリ、および削除を `www/cordova-2.6.0.js` ファイル。

6.  コルドバ スクリプト参照を更新して、 `www/index.html` ファイルとスクリプト参照が含まれている他のファイル) を指す、新しい `cordova-2.7.0.js` ファイル。

7.  コピー、 `native` 、古いを上書きする既存のプロジェクトに新しいプロジェクト ディレクトリ `native` ディレクトリ。

8.  コピー、 `lib` 、古いを上書きする既存のプロジェクトに新しいプロジェクト ディレクトリ `lib` ディレクトリ。

9.  コピー、 `cordova` 、古いを上書きする既存のプロジェクトに新しいプロジェクト ディレクトリ `cordova` ディレクトリ。

## 2.5.0 から 2.6.0 にアップグレードします。

PhoneGap のダウンロード ディレクトリを更新しています。

ディレクトリ全体の新鮮なコピーをダウンロードすることをお勧めします。

ただし、段階的な部分の更新に必要な新しいパーツ以下します。

1.  Cordova.blackberry.js ファイルを更新する、 `Phonegap-2.6.0/lib/blackberry/javascript` ディレクトリ。

2.  更新プログラム、 `ext` 、 `ext-air` 、および `ext-qnx` で、 `Phonegap-2.6.0/lib/blackberry/framework` ディレクトリ。

3.  更新、 `build.xml` ファイルで、 `Phonegap-2.6.0/lib/blackberry` ディレクトリ。

4.  更新、 `Phonegap-2.6.0/lib/blackberry/bin` ディレクトリ。

5.  更新、 `VERSION` ファイルで、 `Phonegap-2.6.0/lib/blackberry` ディレクトリ。

更新、 `example/` ディレクトリまたは既存のプロジェクトを移行します。

1.  オープン、 `www/` ディレクトリ、アプリが含まれます。

2.  削除し、更新の .jar ファイルは `ext/` ディレクトリ。

3.  内容を更新、 `ext-air/` ディレクトリ。

4.  内容を更新、 `ext-qnx/` ディレクトリ。

5.  コピー、新しい `cordova-2.6.0.js` プロジェクトに。

6.  あなたの HTML を使用して、新しい更新 `cordova-2.6.0.js` ファイル。

## 2.4.0 から 2.5.0 にアップグレードします。

PhoneGap のダウンロード ディレクトリを更新しています。

ディレクトリ全体の新鮮なコピーをダウンロードすることをお勧めします。

ただし、段階的な部分の更新に必要な新しいパーツ以下します。

1.  Cordova.blackberry.js ファイルを更新する、 `Phonegap-2.5.0/lib/blackberry/javascript` ディレクトリ。

2.  更新プログラム、 `ext` 、 `ext-air` 、および `ext-qnx` で、 `Phonegap-2.5.0/lib/blackberry/framework` ディレクトリ。

3.  更新、 `build.xml` ファイルで、 `Phonegap-2.5.0/lib/blackberry` ディレクトリ。

4.  更新、 `Phonegap-2.5.0/lib/blackberry/bin` ディレクトリ。

5.  更新、 `VERSION` ファイルで、 `Phonegap-2.5.0/lib/blackberry` ディレクトリ。

例を更新/ディレクトリまたは、既存の移行プロジェクト：

1.  オープン、 `www/` ディレクトリ、アプリが含まれます。

2.  削除し、更新の .jar ファイルは `ext/` ディレクトリ。

3.  内容を更新、 `ext-air/` ディレクトリ。

4.  内容を更新、 `ext-qnx/` ディレクトリ。

5.  コピー、新しい `cordova-2.5.0.js` プロジェクトに。

6.  あなたの HTML を使用して、新しい更新 `cordova-2.5.0.js` ファイル。

## 2.3.0 から 2.4.0 にアップグレードします。

更新、ちょうど `www` ディレクトリ。

1.  オープン、 `www/` ディレクトリ、アプリが含まれます。

2.  削除し、更新の .jar ファイルは `ext/` ディレクトリ。

3.  内容を更新、 `ext-air/` ディレクトリ。

4.  コピー、新しい `cordova-2.4.0.js` プロジェクトに。
    
    *   脚本、それから更新の .js ファイルの場合、 `playbook/` ディレクトリ。
    *   ブラックベリー 10、.js ファイルで更新かどうか、 `qnx/` ディレクトリ。

5.  あなたの HTML を使用して、新しい更新 `cordova-2.4.0.js` ファイル。

（すなわち、更新、ant ツールを使用して)、サンプル ディレクトリの更新。

1.  オープン、 `sample/lib/` ディレクトリ。

2.  末尾が .jar のファイル更新、 `cordova.2.3.0/ext/` ディレクトリ。

3.  内容を更新、 `cordova.2.3.0/ext-air/` ディレクトリ。

4.  内容を更新、 `cordova.2.3.0/ext-qnx/` ディレクトリ。

5.  .Js ファイル更新、 `cordova.2.3.0/javascript/` ディレクトリ。

6.  オープン、 `sample/lib/` ディレクトリおよび名前の変更、 `cordova.2.3.0/` ディレクトリを`cordova.2.4.0/`.

7.  タイプ `ant blackberry build` または `ant playbook build` を更新する、 `www/` 更新コルドバとディレクトリ。

8.  オープン、 `www/` ディレクトリを使用して、新しい HTML の更新と `cordova-2.4.0.js` ファイル。

## 2.2.0 から 2.3.0 にアップグレードします。

更新、ちょうど `www` ディレクトリ。

1.  オープン、 `www/` ディレクトリ、アプリが含まれます。

2.  削除し、更新の .jar ファイルは `ext/` ディレクトリ。

3.  内容を更新、 `ext-air/` ディレクトリ。

4.  コピー、新しい `cordova-2.3.0.js` プロジェクトに。
    
    *   脚本、それから更新の .js ファイルの場合、 `playbook/` ディレクトリ。
    *   ブラックベリー 10、.js ファイルで更新かどうか、 `qnx/` ディレクトリ。

5.  あなたの HTML を使用して、新しい更新 `cordova-2.3.0.js` ファイル。

（すなわち、更新、ant ツールを使用して)、サンプル ディレクトリの更新。

1.  オープン、 `sample/lib/` ディレクトリ。

2.  末尾が .jar のファイル更新、 `cordova.2.2.0/ext/` ディレクトリ。

3.  内容を更新、 `cordova.2.2.0/ext-air/` ディレクトリ。

4.  内容を更新、 `cordova.2.2.0/ext-qnx/` ディレクトリ。

5.  .Js ファイル更新、 `cordova.2.2.0/javascript/` ディレクトリ。

6.  オープン、 `sample/lib/` ディレクトリおよび名前の変更、 `cordova.2.2.0/` ディレクトリを`cordova.2.3.0/`.

7.  タイプ `ant blackberry build` または `ant playbook build` を更新する、 `www/` 更新コルドバとディレクトリ。

8.  オープン、 `www/` ディレクトリを使用して、新しい HTML の更新と `cordova-2.3.0.js` ファイル。

## 2.1.0 から 2.2.0 にアップグレードします。

ちょうど www ディレクトリを更新しています。

1.  オープン、 `www/` ディレクトリ、アプリが含まれます。

2.  削除し、更新の .jar ファイルは `ext/` ディレクトリ。

3.  内容を更新、 `ext-air/` ディレクトリ。

4.  コピー、新しい `cordova-2.2.0.js` プロジェクトに。
    
    *   脚本、それから更新の .js ファイルの場合、 `playbook/` ディレクトリ。
    *   ブラックベリー 10、.js ファイルで更新かどうか、 `qnx/` ディレクトリ。

5.  あなたの HTML を使用して、新しい更新 `cordova-2.2.0.js` ファイル。

（すなわち、更新、ant ツールを使用して)、サンプル ディレクトリの更新。

1.  オープン、 `sample/lib/` ディレクトリ。

2.  末尾が .jar のファイル更新、 `cordova.2.1.0/ext/` ディレクトリ。

3.  内容を更新、 `cordova.2.1.0/ext-air/` ディレクトリ。

4.  内容を更新、 `cordova.2.1.0/ext-qnx/` ディレクトリ。

5.  .Js ファイル更新、 `cordova.2.1.0/javascript/` ディレクトリ。

6.  オープン、 `sample/lib/` ディレクトリおよび名前の変更、 `cordova.2.1.0/` ディレクトリを`cordova.2.2.0/`.

7.  タイプ `ant blackberry build` または `ant playbook build` を更新する、 `www/` 更新コルドバとディレクトリ。

8.  オープン、 `www/` ディレクトリを使用して、新しい HTML の更新と `cordova-2.2.0.js` ファイル。

## 2.0.0 から 2.1.0 にアップグレードします。

更新、ちょうど `www` ディレクトリ。

1.  オープン、 `www/` ディレクトリ、アプリが含まれます。

2.  削除し、更新の .jar ファイルは `ext/` ディレクトリ。

3.  内容を更新、 `ext-air/` ディレクトリ。

4.  コピー、新しい `cordova-2.1.0.js` プロジェクトに。
    
    *   脚本、それから更新の .js ファイルの場合、 `playbook/` ディレクトリ。

5.  あなたの HTML を使用して、新しい更新 `cordova-2.1.0.js` ファイル。

（すなわち、更新、ant ツールを使用して)、サンプル ディレクトリの更新。

1.  オープン、 `sample/lib/` ディレクトリ。

2.  末尾が .jar のファイル更新、 `cordova.2.0.0/ext/` ディレクトリ。

3.  内容を更新、 `cordova.2.0.0/ext-air/` ディレクトリ。

4.  .Js ファイル更新、 `cordova.2.0.0/javascript/` ディレクトリ。

5.  オープン、 `sample/lib/` ディレクトリおよび名前の変更、 `cordova.2.0.0/` ディレクトリを`cordova.2.1.0/`.

6.  タイプ `ant blackberry build` または `ant playbook build` を更新する、 `www/` 更新コルドバとディレクトリ。

7.  オープン、 `www/` ディレクトリを使用して、新しい HTML の更新と `cordova-2.1.0.js` ファイル。

## 1.9.0 から 2.0.0 にアップグレードします。

更新、ちょうど `www` ディレクトリ。

1.  オープン、 `www/` ディレクトリ、アプリが含まれます。

2.  削除し、更新の .jar ファイルは `ext/` ディレクトリ。

3.  内容を更新、 `ext-air/` ディレクトリ。

4.  コピー、新しい `cordova-2.0.0.js` プロジェクトに。
    
    *   脚本、それから更新の .js ファイルの場合、 `playbook/` ディレクトリ。

5.  あなたの HTML を使用して、新しい更新 `cordova-2.0.0.js` ファイル。

6.  更新プログラムを `www/plugins.xml` ファイル。2 つのプラグインの名前空間のサービス ラベルを変更。キャプチャと接触のプラグインからの古いエントリを変更します。
    
        < プラグイン名 =「キャプチャ」value="org.apache.cordova.media.MediaCapture"/>< プラグイン名 =「お問い合わせ」value="org.apache.cordova.pim.Contact"/>
        
    
    宛先：
    
        < プラグイン名 =「キャプチャ」value="org.apache.cordova.capture.MediaCapture"/>< プラグイン名「連絡先」value="org.apache.cordova.pim.Contact"/= >
        

（すなわち、更新、ant ツールを使用して)、サンプル ディレクトリの更新。

1.  オープン、 `sample/lib/` ディレクトリ。

2.  末尾が .jar のファイル更新、 `cordova.1.9.0/ext/` ディレクトリ。

3.  内容を更新、 `cordova.1.9.0/ext-air/` ディレクトリ。

4.  .Js ファイル更新、 `cordova.1.9.0/javascript/` ディレクトリ。

5.  オープン、 `sample/lib/` ディレクトリおよび名前の変更、 `cordova.1.9.0/` ディレクトリを`cordova.2.0.0/`.

6.  タイプ `ant blackberry build` または `ant playbook build` を更新する、 `www/` 更新コルドバとディレクトリ。

7.  オープン、 `www/` ディレクトリを使用して、新しい HTML の更新と `cordova-2.0.0.js` ファイル。

8.  オープン、 `www/` ディレクトリと更新、 `plugins.xml` ファイル。2 つのプラグインの名前空間のサービス ラベルを変更。キャプチャと接触のプラグインからの古いエントリを変更します。
    
         < プラグイン名 =「キャプチャ」value="org.apache.cordova.media.MediaCapture"/>< プラグイン名 =「お問い合わせ」value="org.apache.cordova.pim.Contact"/>
        
    
    宛先：
    
         < プラグイン名 =「キャプチャ」value="org.apache.cordova.capture.MediaCapture"/>< プラグイン名「連絡先」value="org.apache.cordova.pim.Contact"/= >
        

*   1.8.0 へのアップグレード、1.7.0 から行ってください。

## 1.7.0 から 1.8.0 へのアップグレードします。

更新、ちょうど `www` ディレクトリ。

1.  オープン、 `www/` ディレクトリ、アプリが含まれます。

2.  削除し、更新の .jar ファイルは `ext/` ディレクトリ。

3.  内容を更新、 `ext-air/` ディレクトリ。

4.  コピー、新しい `cordova-1.8.0.js` プロジェクトに。
    
    *   脚本、それから更新の .js ファイルの場合、 `playbook/` ディレクトリ。

5.  あなたの HTML を使用して、新しい更新 `cordova-1.8.0.js` ファイル。

6.  更新プログラムを `www/plugins.xml` ファイル。2 つのプラグインの名前空間のサービス ラベルを変更。キャプチャと接触のプラグインからの古いエントリを変更します。
    
        < プラグイン名 =「キャプチャ」value="org.apache.cordova.media.MediaCapture"/>< プラグイン名 =「お問い合わせ」value="org.apache.cordova.pim.Contact"/>
        
    
    宛先：
    
        < プラグイン名 =「キャプチャ」value="org.apache.cordova.capture.MediaCapture"/>< プラグイン名「連絡先」value="org.apache.cordova.pim.Contact"/= >
        

（すなわち、更新、ant ツールを使用して)、サンプル ディレクトリの更新。

1.  オープン、 `sample/lib/` ディレクトリ。

2.  末尾が .jar のファイル更新、 `cordova.1.7.0/ext/` ディレクトリ。

3.  内容を更新、 `cordova.1.7.0/ext-air/` ディレクトリ。

4.  .Js ファイル更新、 `cordova.1.7.0/javascript/` ディレクトリ。

5.  オープン、 `sample/lib/` ディレクトリおよび名前の変更、 `cordova.1.7.0/` ディレクトリを`cordova.1.8.0/`.

6.  タイプ `ant blackberry build` または `ant playbook build` を更新する、 `www/` 更新コルドバとディレクトリ。

7.  オープン、 `www/` ディレクトリを使用して、新しい HTML の更新と `cordova-1.8.0.js` ファイル。

8.  オープン、 `www/` ディレクトリと更新、 `plugins.xml` ファイル。2 つのプラグインの名前空間のサービス ラベルを変更。キャプチャと接触のプラグインからの古いエントリを変更します。
    
         < プラグイン名 =「キャプチャ」value="org.apache.cordova.media.MediaCapture"/>< プラグイン名 =「お問い合わせ」value="org.apache.cordova.pim.Contact"/>
        
    
    宛先：
    
         < プラグイン名 =「キャプチャ」value="org.apache.cordova.capture.MediaCapture"/>< プラグイン名「連絡先」value="org.apache.cordova.pim.Contact"/= >