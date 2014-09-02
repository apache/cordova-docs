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

# BlackBerry 10 の更新

このガイドでは、新しいバージョンの Cordova へ移行するときに必要となる、 BlackBerry プロジェクト側の修正点に関して解説します。このガイドで使用する手順のほとんどは、 `cordova` の CLI ユーティリティがリリースされる前のコマンドライン ツールを使用して作成されたプロジェクトに適用するものです。CLI 自体のバージョン更新に関しては、『 コマンドライン インターフェイス 』 をご確認ください。

## 3.1.0 から 3.2.0 への更新

cordova CLI を使用して作成したプロジェクトの場合、以下の処理を行います。

1. `cordova` CLI のバージョンを更新します。『 コマンドライン インターフェイス 』 をご確認ください。

2. `cordova platform update blackberry` を実行します。

cordova CLI を使用せずに作成したプロジェクトの場合、以下を実行します。

        bin/update <project_path>

## 3.0.0 から 3.1.0 への更新

1. 『 コマンドライン インターフェイス 』 の記載内容に従い、cordova CLI を使用して、Apache Cordova 3.1.0 プロジェクトを新規作成します。

2. プラットフォームを cordova プロジェクトに追加します。例 ： 「 `cordova platform add blackberry10` 」 

3. 旧プロジェクトの `www` ディレクトリのコンテンツを、先ほど作成した cordova プロジェクトの root ( ルート ) に位置する `www` ディレクトリにコピーします。

4. ネイティブのアセット ( native assets ) のコピーまたは上書きを、旧プロジェクトから行います ( `Resources` など )。

5. `config.xml` ファイルを `www` ディレクトリにコピーして、次に、プラグインの定義を削除します。プラットフォーム下のディレクトリのファイルではなく、このファイルの設定の更新を行います。

6. cordova CLI ツールを使用して、必要なプラグインをインストールします。CLI では、すべてのコア API をプラグインとして取り扱うため、すべてのプラグインをインストールしておくことを推奨します。また、3.0.0 系以上のプラグインのみ、CLI で取り扱うことができます。

7. ビルドとテストを行います。

CLI では、BlackBerry10 のプラットフォームのみ、サポートを行っています。PlayBook と BBOS に関しては、以下に記す内容と Cordova バージョン 2.9.0 の方をご確認ください。

## 2.9.0 から CLI ( 3.0.0 ) への更新

1. 『 コマンドライン インターフェイス 』 の記載内容に従い、cordova CLI を使用して、Apache Cordova 3.0.0 プロジェクトを新規作成します。

2. プラットフォームを cordova プロジェクトに追加します。例 ： 「 `cordova
   platform add blackberry10` 」 

3. 旧プロジェクトの `www` ディレクトリのコンテンツを、先ほど作成した cordova プロジェクトの root ( ルート ) に位置する `www` ディレクトリにコピーします。

4. ネイティブのアセット ( native assets ) のコピーまたは上書きを、旧プロジェクトから行います ( `Resources` など )。

5. `config.xml` ファイルを `www` ディレクトリにコピーして、次に、プラグインの定義を削除します。プラットフォーム下のディレクトリのファイルではなく、このファイルの設定の更新を行います。

6. cordova CLI ツールを使用して、必要なプラグインをインストールします。CLI では、すべてのコア API をプラグインとして取り扱うため、すべてのプラグインをインストールしておくことを推奨します。また、3.0.0 系のプラグインのみ、CLI で取り扱うことができます。

7. ビルドとテストを行います。

## 2.8.0 プロジェクト から 2.9.0 への更新

BlackBerry 10 では、以下の処理を行います。

1. Cordova 2.9.0 のソースのダウンロード後、ハードドライブ上の恒常的なディレクトリへ解凍を行います ( 例 : `~/Cordova-2.9.0` )。

2. 実行中の SDK ツール ( Eclipse、Momentics など ) を終了します。

3. unix 類似のターミナル ( Terminal.app、Bash、Cygwin など ) を使用して、上記でダウンロードしたソースを置いたディレクトリへ移動します。

4. 『 BlackBerry コマンドライン ツール 』 の記載内容に従い、プロジェクトを新規作成してください。これが、更新を行っていくプロジェクトのホーム ( home ) となります。

5. 旧プロジェクトの `/www` ディレクトリから新規のプロジェクトの `/www` ディレクトリへ、プロジェクトソースのコピーを行ってください。

6. 開発者の `www/index.html` ファイル ( および、スクリプトの参照を行っているファイル ) 内で Cordova スクリプトを参照している箇所を、新 `cordova.js` ファイルを指すように更新します。

BlackBerryOS/Playbook では、以下の処理を行います。

1. Cordova 2.9.0 のソースのダウンロード後、ハードドライブ上の恒常的なディレクトリへ解凍を行います ( 例 : `~/Cordova-2.9.0` )。

2. 実行中の SDK ツール ( Eclipse、Momentics など ) を終了します。

3. unix 類似のターミナル ( Terminal.app、Bash、Cygwin など ) を使用して、上記でダウンロードしたソースを置いたディレクトリへ移動します。

4. 『 BlackBerry ( 原文 「 iOS 」 ) のコマンドライン ツール 』 の記載内容に従い、プロジェクトを新規作成してください。この新規のプロジェクトの `assets` が必要となります。

5. 新規のプロジェクトの `www/cordova.js` ファイルを開発者の `www` ディレクトリへコピーして、開発者の `www/cordova.js` ファイルを削除します。

6. 開発者の `www/index.html` ファイル ( および、スクリプトの参照を行っているファイル ) 内で Cordova スクリプトを参照している箇所を、新 `cordova.js` ファイルを指すように更新します。

7. 新規のプロジェクトの `native` ディレクトリを、既存のプロジェクトにコピーして、旧 `native` ディレクトリの上書きを行います。

8. 新規のプロジェクトの `lib` ディレクトリを、既存のプロジェクトにコピーして、旧 `lib` ディレクトリの上書きを行います。

9. 新規のプロジェクトの `cordova` ディレクトリを、既存のプロジェクトにコピーして、旧 `cordova` ディレクトリの上書きを行います。

## 2.7.0 プロジェクト から 2.8.0 への更新

BlackBerry 10 では、新たな CLI ツールの使用、および、プラグインとしてのコア API の制御を行っています。既存のプロジェクトの更新は複雑な処理を含むため、「 更新 」 よりも、既存のプロジェクトから新規のプロジェクトへの 「 移行 」 手順を示します。また、cordova js スクリプトファイルの呼称を改め、 'cordova.js' とします。また、ファイル名にバージョン文字列は含めません。

1. Cordova 2.8.0 のソースのダウンロード後、ハードドライブ上の恒常的なディレクトリへ解凍を行います ( 例 : `~/Cordova-2.8.0` )。

2. 実行中の SDK ツール ( Eclipse、Momentics など ) を終了します。

3. unix 類似のターミナル ( Terminal.app、Bash、Cygwin など ) を使用して、上記でダウンロードしたソースを置いたディレクトリへ移動します。

4. 『 BlackBerry コマンドライン ツール 』 の記載内容に従い、プロジェクトを新規作成してください。これが、更新を行っていくプロジェクトのホーム ( home ) となります。

5. 旧プロジェクトの `/www` ディレクトリから新規のプロジェクトの `/www` ディレクトリへ、プロジェクトソースのコピーを行ってください。

6. 開発者の `www/index.html` ファイル ( および、スクリプトの参照を行っているファイル ) 内で Cordova スクリプトを参照している箇所を、新 `cordova.js` ファイルを指すように更新します。

BlackBerryOS/Playbook では、以下の処理を行います。

1. Cordova 2.8.0 のソースのダウンロード後、ハードドライブ上の恒常的なディレクトリへ解凍を行います ( 例 : `~/Cordova-2.8.0` )。

2. 実行中の SDK ツール ( Eclipse、Momentics など ) を終了します。

3. unix 類似のターミナル ( Terminal.app、Bash、Cygwin など ) を使用して、上記でダウンロードを行ったソースを置いたディレクトリへ移動します。

4. 『 BlackBerry ( 原文 「 iOS 」 ) のコマンドライン ツール 』 の記載内容に従い、プロジェクトを新規作成してください。この新規のプロジェクトの `assets` が必要となります。

5. 新規のプロジェクトの `www/cordova.js` ファイルを開発者の `www` ディレクトリへコピーして、開発者の `www/cordova.js` ファイルを削除します。

6. 開発者の `www/index.html` ファイル ( および、スクリプトの参照を行っているファイル ) 内で Cordova スクリプトを参照している箇所を、新 `cordova.js` ファイルを指すように更新します。

7. 新規のプロジェクトの `native` ディレクトリを、既存のプロジェクトにコピーして、旧 `native` ディレクトリの上書きを行います。

8. 新規のプロジェクトの `lib` ディレクトリを、既存のプロジェクトにコピーして、旧 `lib` ディレクトリの上書きを行います。

9. 新規のプロジェクトの `cordova` ディレクトリを、既存のプロジェクトにコピーして、旧 `cordova` ディレクトリの上書きを行います。

## 2.6.0 プロジェクト から 2.7.0 への更新

1. Cordova 2.7.0 のソースのダウンロード後、ハードドライブ上の恒常的なディレクトリへ解凍を行います ( 例 : `~/Cordova-2.7.0` )。

2. 実行中の SDK ツール ( Eclipse、Momentics など ) を終了します。

3. unix 類似のターミナル ( Terminal.app、Bash、Cygwin など ) を使用して、上記でダウンロードしたソースを置いたディレクトリへ移動します。

4. 『 BlackBerry のコマンドライン ツール 』 の記載内容に従い、プロジェクトを新規作成してください。この新規のプロジェクトの `assets` が必要となります。

5. 新規のプロジェクトの `www/cordova-2.7.0.js` ファイルを開発者の `www` ディレクトリへコピーして、開発者の `www/cordova-2.6.0.js` ファイルを削除します。

6. 開発者の `www/index.html` ファイル ( および、スクリプトの参照を行っているファイル ) 内で Cordova スクリプトを参照している箇所を、新 `cordova-2.7.0.js` ファイルを指すように更新します。

7. 新規のプロジェクトの `native` ディレクトリを、既存のプロジェクトにコピーして、旧 `native` ディレクトリの上書きを行います。

8. 新規のプロジェクトの `lib` ディレクトリを、既存のプロジェクトにコピーして、旧 `lib` ディレクトリの上書きを行います。

9. 新規のプロジェクトの `cordova` ディレクトリを、既存のプロジェクトにコピーして、旧 `cordova` ディレクトリの上書きを行います。

## 2.5.0 から 2.6.0 への更新

PhoneGap のダウンロード先のディレクトリを更新します。

ディレクトリ全体の最新コピーのダウンロードを推奨します。

ただし、以下の箇所に関しては、個別に更新していくことを推奨します。

1. `Phonegap-2.6.0/lib/blackberry/javascript` ディレクトリの cordova.blackberry.js ファイルを更新します。

2. `Phonegap-2.6.0/lib/blackberry/framework` ディレクトリの `ext` 、 `ext-air` 、 `ext-qnx` を更新します。

3. `Phonegap-2.6.0/lib/blackberry` ディレクトリの `build.xml` ファイルを更新します。

4. `Phonegap-2.6.0/lib/blackberry/bin` ディレクトリを更新します。

5. `Phonegap-2.6.0/lib/blackberry` ディレクトリの `VERSION` ファイルを更新します。

「 / 」 下のディレクトリの更新、または、既存のプロジェクトを移行します。

1. アプリが置かれた `www/` ディレクトリを開きます。

2. `ext/` ディレクトリの .jar ファイルの削除と更新をします。

3. `ext-air/` ディレクトリのコンテンツを更新します。

4. `ext-qnx/` ディレクトリのコンテンツを更新します。

5. 開発者のプロジェクトに新 `cordova-2.6.0.js` をコピーします。

6. 新 `cordova-2.6.0.js` ファイルを使用できるように、HTML の更新を行います。

## 2.4.0 から 2.5.0 への更新

PhoneGap のダウンロード先のディレクトリを更新します。

ディレクトリ全体の最新コピーのダウンロードを推奨します。

ただし、以下の箇所に関しては、個別に更新していくことを推奨します。

1. `Phonegap-2.5.0/lib/blackberry/javascript` ディレクトリの cordova.blackberry.js ファイルを更新します。

2. `Phonegap-2.5.0/lib/blackberry/framework` ディレクトリの `ext` 、 `ext-air` 、 `ext-qnx` を更新します。

3. `Phonegap-2.5.0/lib/blackberry` ディレクトリの `build.xml` ファイルを更新します。

4. `Phonegap-2.5.0/lib/blackberry/bin` ディレクトリを更新します。

5. `Phonegap-2.5.0/lib/blackberry` ディレクトリの `VERSION` ファイルを更新します。

「 / 」 下のディレクトリの更新、または、既存のプロジェクトを移行します。

1. アプリが置かれた `www/` ディレクトリを開きます。

2. `ext/` ディレクトリの .jar ファイルの削除と更新をします。

3. `ext-air/` ディレクトリのコンテンツを更新します。

4. `ext-qnx/` ディレクトリのコンテンツを更新します。

5. 開発者のプロジェクトに新 `cordova-2.5.0.js` をコピーします。

6. 新 `cordova-2.5.0.js` ファイルを使用できるように、HTML の更新を行います。

## 2.3.0 から 2.4.0 への更新

`www` ディレクトリの更新のみを行います。

1. アプリが置かれた `www/` ディレクトリを開きます。

2. `ext/` ディレクトリの .jar ファイルの削除と更新をします。

3. `ext-air/` ディレクトリのコンテンツを更新します。

4. 開発者のプロジェクトに新 `cordova-2.4.0.js` をコピーします。
    - playbook の場合、 `playbook/` ディレクトリの .js ファイルを更新します。
    - BlackBerry 10 の場合、 `qnx/` ディレクトリの .js ファイルを更新します。

5. 新 `cordova-2.4.0.js` ファイルを使用できるように、HTML の更新を行います。

sample ディレクトリの更新を行います ( ant ツールを使用した更新 )。

1. `sample/lib/` ディレクトリを開きます。

2. `cordova.2.3.0/ext/` ディレクトリの .jar ファイルを更新します。

3. `cordova.2.3.0/ext-air/` ディレクトリのコンテンツを更新します。

4. `cordova.2.3.0/ext-qnx/` ディレクトリのコンテンツを更新します。

5. `cordova.2.3.0/javascript/` ディレクトリの .js ファイルを更新します。

6. `sample/lib/` ディレクトリを開き、 `cordova.2.3.0/` ディレクトリ名を `cordova.2.4.0/` へ変更します。

7. 更新した Cordova を使用して、 `www/` ディレクトリを更新します。 `ant blackberry build` または `ant playbook build` と入力します。

8. `www/` ディレクトリを開き、新 `cordova-2.4.0.js` ファイルを使用できるように、HTML の更新を行います。

## 2.2.0 から 2.3.0 への更新

`www` ディレクトリの更新のみを行います。

1. アプリが置かれた `www/` ディレクトリを開きます。

2. `ext/` ディレクトリの .jar ファイルの削除と更新をします。

3. `ext-air/` ディレクトリのコンテンツを更新します。

4. 開発者のプロジェクトに新 `cordova-2.3.0.js` をコピーします。
    - playbook の場合、 `playbook/` ディレクトリの .js ファイルを更新します。
    - BlackBerry 10 の場合、 `qnx/` ディレクトリの .js ファイルを更新します。

5. 新 `cordova-2.3.0.js` ファイルを使用できるように、HTML の更新を行います。

sample ディレクトリの更新を行います ( ant ツールを使用した更新 )。

1. Open the`sample/lib/` ディレクトリを開きます。

2. `cordova.2.2.0/ext/` ディレクトリの .jar ファイルを更新します。

3. `cordova.2.2.0/ext-air/` ディレクトリのコンテンツを更新します。

4. `cordova.2.2.0/ext-qnx/` ディレクトリのコンテンツを更新します。

5. `cordova.2.2.0/javascript/` ディレクトリの .js ファイルを更新します。

6. `sample/lib/` ディレクトリを開き、 `cordova.2.2.0/` ディレクトリ名を `cordova.2.3.0/` へ変更します。

7. 更新した Cordova を使用して、 `www/` ディレクトリを更新します。 `ant blackberry build` または `ant playbook build` と入力します。

8. `www/` ディレクトリを開き、新 `cordova-2.3.0.js` ファイルを使用できるように、HTML の更新を行います。

## 2.1.0 から 2.2.0 への更新

`www` ディレクトリの更新のみを行います。

1. アプリが置かれた `www/` ディレクトリを開きます。

2. `ext/` ディレクトリの .jar ファイルの削除と更新をします。

3. `ext-air/` ディレクトリのコンテンツを更新します。

4. 開発者のプロジェクトに新 `cordova-2.2.0.js` をコピーします。
    - playbook の場合、 `playbook/` ディレクトリの .js ファイルを更新します。
    - BlackBerry 10 の場合、 `qnx/` ディレクトリの .js ファイルを更新します。

5. 新 `cordova-2.2.0.js` ファイルを使用できるように、HTML の更新を行います。

sample ディレクトリの更新を行います ( ant ツールを使用した更新 )。

1. `sample/lib/` ディレクトリを開きます。

2. `cordova.2.1.0/ext/` ディレクトリの .jar ファイルを更新します。

3. `cordova.2.1.0/ext-air/` ディレクトリのコンテンツを更新します。

4. `cordova.2.1.0/ext-qnx/` ディレクトリのコンテンツを更新します。

5. `cordova.2.1.0/javascript/` ディレクトリの .js ファイルを更新します。

6. `sample/lib/` ディレクトリを開き、 `cordova.2.1.0/` ディレクトリ名を `cordova.2.2.0/` へ変更します。

7. 更新した Cordova を使用して、 `www/` ディレクトリを更新します。 `ant blackberry build` または `ant playbook build` と入力します。

8. `www/` ディレクトリを開き、新 `cordova-2.2.0.js` ファイルを使用できるように、HTML の更新を行います。

## 2.0.0 から 2.1.0 への更新

`www` ディレクトリの更新のみを行います。

1. アプリが置かれた `www/` ディレクトリを開きます。

2. `ext/` ディレクトリの .jar ファイルの削除と更新をします。

3. `ext-air/` ディレクトリのコンテンツを更新します。

4. 開発者のプロジェクトに新 `cordova-2.1.0.js` をコピーします。
    - playbook の場合、 `playbook/` ディレクトリの .js ファイルを更新します。

5. 新 `cordova-2.1.0.js` ファイルを使用できるように、HTML の更新を行います。

sample ディレクトリの更新を行います ( ant ツールを使用した更新 )。

1. `sample/lib/` ディレクトリを開きます。

2. `cordova.2.0.0/ext/` ディレクトリの .jar ファイルを更新します。

3. `cordova.2.0.0/ext-air/` ディレクトリのコンテンツを更新します。

4. `cordova.2.0.0/javascript/` ディレクトリの .js ファイルを更新します。

5. `sample/lib/` ディレクトリを開き、 `cordova.2.0.0/` ディレクトリ名を `cordova.2.1.0/` へ変更します。

6. 更新した Cordova を使用して、 `www/` ディレクトリを更新します。 `ant blackberry build` または `ant playbook build` と入力します。

7. `www/` ディレクトリを開き、新 `cordova-2.1.0.js` ファイルを使用できるように、HTML の更新を行います。

## 1.9.0 から 2.0.0 への更新

`www` ディレクトリの更新のみを行います。

1. アプリが置かれた `www/` ディレクトリを開きます。

2. `ext/` ディレクトリの .jar ファイルの削除と更新をします。

3. `ext-air/` ディレクトリのコンテンツを更新します。

4. 開発者のプロジェクトに新 `cordova-2.0.0.js` をコピーします。
    - playbook の場合、 `playbook/` ディレクトリの .js ファイルを更新します。

5. 新 `cordova-2.0.0.js` ファイルを使用できるように、HTML の更新を行います。

6. 開発者の `www/plugins.xml` ファイルを更新します。2 つのプラグインの名前空間/サービスが変わっています。
Capture プラグインと Contact プラグインに関する、下記の 2 つのエントリーを更新します。

        <plugin name="Capture" value="org.apache.cordova.media.MediaCapture"/>
        <plugin name="Contact" value="org.apache.cordova.pim.Contact"/>

   更新後は下記のようになります。

        <plugin name="Capture" value="org.apache.cordova.capture.MediaCapture"/>
        <plugin name="Contacts" value="org.apache.cordova.pim.Contact"/>

sample ディレクトリの更新を行います ( ant ツールを使用した更新 )。

1. `sample/lib/` ディレクトリを開きます。

2. `cordova.1.9.0/ext/` ディレクトリの .jar ファイルを更新します。

3. `cordova.1.9.0/ext-air/` ディレクトリのコンテンツを更新します。

4. `cordova.1.9.0/javascript/` ディレクトリの .js ファイルを更新します。

5. `sample/lib/` ディレクトリを開き、 `cordova.1.9.0/` ディレクトリ名を `cordova.2.0.0/` へ変更します。

6. 更新した Cordova を使用して、 `www/` ディレクトリを更新します。 `ant blackberry build` または `ant playbook build` と入力します。

7. `www/` ディレクトリを開き、新 `cordova-2.0.0.js` ファイルを使用できるように、HTML の更新を行います。

8. `www/` ディレクトリを開き、 `plugins.xml` ファイルを更新します。2 つのプラグインの名前空間/サービスが変わっています。
Capture プラグインと Contact プラグインに関する、下記の 2 つのエントリーを更新します。

         <plugin name="Capture" value="org.apache.cordova.media.MediaCapture"/>
         <plugin name="Contact" value="org.apache.cordova.pim.Contact"/>

   更新後は下記のようになります。

         <plugin name="Capture" value="org.apache.cordova.capture.MediaCapture"/>
         <plugin name="Contacts" value="org.apache.cordova.pim.Contact"/>

- 1.8.0 へ更新する場合、1.7.0 の手順から開始してください。

## 1.7.0 から 1.8.0 への更新

`www` ディレクトリの更新のみを行います。

1. アプリが置かれた `www/` ディレクトリを開きます。

2. `ext/` ディレクトリの .jar ファイルの削除と更新をします。

3. `ext-air/` ディレクトリのコンテンツを更新します。

4. 開発者のプロジェクトに新 `cordova-1.8.0.js` をコピーします。
    - playbook の場合、 `playbook/` ディレクトリの .js ファイルを更新します。

5. 新 `cordova-1.8.0.js` ファイルを使用できるように、HTML の更新を行います。

6. 開発者の `www/plugins.xml` ファイルを更新します。2 つのプラグインの名前空間/サービスが変わっています。
Capture プラグインと Contact プラグインに関する、下記の 2 つのエントリーを更新します。

        <plugin name="Capture" value="org.apache.cordova.media.MediaCapture"/>
        <plugin name="Contact" value="org.apache.cordova.pim.Contact"/>

   更新後は下記のようになります。

        <plugin name="Capture" value="org.apache.cordova.capture.MediaCapture"/>
        <plugin name="Contacts" value="org.apache.cordova.pim.Contact"/>

sample ディレクトリの更新を行います ( ant ツールを使用した更新 )。

1. `sample/lib/` ディレクトリを開きます。

2. `cordova.1.7.0/ext/` ディレクトリの .jar ファイルを更新します。

3. `cordova.1.7.0/ext-air/` ディレクトリのコンテンツを更新します。

4. `cordova.1.7.0/javascript/` ディレクトリの .js ファイルを更新します。

5. `sample/lib/` ディレクトリを開き、 `cordova.1.7.0/` ディレクトリ名を `cordova.1.8.0/` へ変更します。

6. 更新した Cordova を使用して、 `www/` ディレクトリを更新します。 `ant blackberry build` または `ant playbook build` と入力します。

7. `www/` ディレクトリを開き、新 `cordova-1.8.0.js` ファイルを使用できるように、HTML の更新を行います。

8. `www/` ディレクトリを開き、 `plugins.xml` ファイルを更新します。2 つのプラグインの名前空間/サービスが変わっています。
Capture プラグインと Contact プラグインに関する、下記の 2 つのエントリーを更新します。

         <plugin name="Capture" value="org.apache.cordova.media.MediaCapture"/>
         <plugin name="Contact" value="org.apache.cordova.pim.Contact"/>

   更新後は下記のようになります。

         <plugin name="Capture" value="org.apache.cordova.capture.MediaCapture"/>
         <plugin name="Contacts" value="org.apache.cordova.pim.Contact"/>

