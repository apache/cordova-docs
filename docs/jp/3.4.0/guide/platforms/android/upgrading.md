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

# Android の更新

このガイドでは、新しいバージョンの Cordova へ移行するときに必要となる、 Android プロジェクト側の修正点に関して解説します。このガイドで使用する手順のほとんどは、 `cordova` の CLI ユーティリティがリリースされる前のコマンドライン ツールを使用して作成されたプロジェクトに適用するものです。CLI 自体のバージョン更新に関しては、『 コマンドライン インターフェイス 』 をご確認ください。

## 3.2.0 から 3.3.0 への更新

`3.2.0` 記載の手順に従います。

3.3.0 から使用する場合、Cordova ランタイムは、Jar ではなく、Android ライブラリとしてコンパイルされます。コマンドラインを使用している場合には、影響はありませんが、IDE を使用している場合には、新規追加を行った `MyProject-CordovaLib` ( MyProject > CordovaLib ) プロジェクトを、ワークスペースにインポートする必要があります。

## 3.1.0 から 3.2.0 への更新

cordova CLI を使用して作成したプロジェクトの場合、以下の処理を行います。

1. `cordova` CLI のバージョンを更新します。『 コマンドライン インターフェイス 』 をご確認ください。

2. `cordova platform update android` を実行します。

cordova CLI を使用せずに作成したプロジェクトの場合、以下を実行します。

        bin/update <project_path>

**警告 :**  Android 4.4 では、type="file" 指定をした input 要素の記述を行った場合、「 ファイルを開く 」 ダイアログは開きません。これは、Android の Chromium 側の問題です。Android の独立型 ( standalone ) の Chrome ブラウザーを使用して、この問題を再現することができます ( http://code.google.com/p/android/issues/detail?id=62220 を参照のこと )。回避策として、Android 4.4 では、FileTransfer プラグインと File プラグインの使用を提案します。input 要素 ( type="file" ) に onClick イベントを挿入して、「 ファイルを開く 」 ダイアログ UI を表示することもできます。form data を使用して、アップロードを行う場合、JavaScript を使用して、FileTransfer が行う multi-part POST リクエストに、 form の値をアタッチ ( attach ) します。Android 4.4.2 でも、このバグがあります。

## 3.0.0 から 3.1.0 への更新

cordova CLI を使用して作成したプロジェクトの場合、以下の処理を行います。

1. `cordova` CLI のバージョンを更新します。『 コマンドライン インターフェイス 』 をご確認ください。

2. `cordova platform update android` を実行します。

cordova CLI を使用せずに作成したプロジェクトの場合、以下を実行します。

        bin/update <project_path>

## 2.9.0 から CLI ( 3.0.0 ) への更新

1. 『 コマンドライン インターフェイス 』 の記載内容に従い、cordova CLI を使用して、Apache Cordova 3.0.0 プロジェクトを新規作成します。

2. プラットフォームを cordova プロジェクトに追加します。例 ： 「 `cordova
   platform add android` 」 

3. 開発者のプロジェクトの `www` ディレクトリのコンテンツを、先ほど作成した cordova プロジェクトの root ( ルート ) に位置する `www` ディレクトリにコピーします。

4. 旧プロジェクトで使用していたネイティブのアセット ( native assets ) を、 `platforms/android` 下の適当なディレクトリにコピーします。 `platforms/android` のディレクトリは、ネイティブの cordova-android プロジェクトが置かれているディレクトリです。

5. cordova CLI ツールを使用して、必要なプラグインをインストールします。CLI では、すべてのコア API をプラグインとして取り扱うため、すべてのプラグインをインストールしておくことを推奨します。また、3.0.0 系のプラグインのみ、CLI で取り扱うことができます。

## 2.9.0 から 3.0.0 への更新　

1. Apache Cordova Android プロジェクトを新規に作成します。

2. 開発者の `www` ディレクトリのコンテンツを、新規のプロジェクトにコピーします。

3. 開発者の `res` ディレクトリから Android のネイティブ側のアセット ( assets ) を新規のプロジェクトにコピーします。

4. インストールしていたプラグインを、`src` サブディレクトリから新規のプロジェクトにコピーします。

5. 旧 `config.xml` ファイルの `<plugin>` のリファレンスの中から、すでに廃止されている プラグインの修正も行います。このとき、新しい `<feature>` の仕様に適合するように、編集してください。

6. `org.apache.cordova.api` パッケージへの参照を、 `org.apache.cordova` へ更新します。

   __注意__: コア API のすべてを一度削除して、プラグインとして再インストールする必要があります。詳細に関しては、『 Plugman を使用した、プラグインの管理 』 ガイドをご確認ください。

## 2.8.0 から 2.9.0 への更新　

1. `bin/update <project_path>` を実行します。

## 2.7.0 から 2.8.0 への更新　

1. プロジェクトの `libs` ディレクトリから、 `cordova-2.7.0.jar` を削除します。

2. プロジェクトの `libs` ディレクトリへ、 `cordova-2.8.0.jar` を追加します。

3. Eclipse を使用している場合、Eclipse プロジェクトのリフレッシュとクリーンアップを行ってください。

<!-- SS Eclipse -->

4. 新しい `cordova.js` をプロジェクトにコピーします。

5. 新 `cordova.js` ファイルを使用できるように、HTML の更新を行います。

6. `framework/res/xml/config.xml` に一致するように、 `res/xml/config.xml` ファイルをコピーします。

7. 以前のような設定になるように、 `framework/res/xml/config.xml` を更新します。

8. `bin/templates/cordova` のファイルを、プロジェクトの `cordova` ディレクトリへコピーします。

## 2.6.0 から 2.7.0 への更新

1. プロジェクトの `libs` ディレクトリから、 `cordova-2.6.0.jar` を削除します。

2. プロジェクトの `libs` ディレクトリへ、 `cordova-2.7.0.jar` を追加します。

3. Eclipse を使用している場合、Eclipse プロジェクトのリフレッシュとクリーンアップを行ってください。

4. 新しい `cordova-2.7.0.js` をプロジェクトにコピーします。

5. 新 `cordova-2.7.0.js` ファイルを使用できるように、HTML の更新を行います。

6. `framework/res/xml/config.xml` に一致するように、 `res/xml/config.xml` ファイルをコピーします。

7. 以前のような設定になるように、 `framework/res/xml/config.xml` を更新します。

8. `bin/templates/cordova` のファイルを、プロジェクトの `cordova` ディレクトリへコピーします。

## 2.5.0 からの 2.6.0 への更新

1. プロジェクトの `libs` ディレクトリから、 `cordova-2.5.0.jar` を削除します。

2. プロジェクトの `libs` ディレクトリへ、 `cordova-2.6.0.jar` を追加します。

3. Eclipse を使用している場合、Eclipse プロジェクトのリフレッシュとクリーンアップを行ってください。

4. 新しい `cordova-2.6.0.js` をプロジェクトにコピーします。

5. 新 `cordova-2.6.0.js` ファイルを使用できるように、HTML の更新を行います。

6. `framework/res/xml/config.xml` に一致するように、 `res/xml/config.xml` ファイルをコピーします。

7. 以前のような設定になるように、 `framework/res/xml/config.xml` を更新します。

8. `bin/templates/cordova` のファイルを、プロジェクトの `cordova` ディレクトリへコピーします。

Cordova の Source ディレクトリ内で一覧化されているプロジェクトパスを使用して、 `bin/update <project>` を実行します。

## 2.4.0 から 2.5.0 への更新

1. プロジェクトの `libs` ディレクトリから、 `cordova-2.4.0.jar` を削除します。

2. プロジェクトの `libs` ディレクトリへ、 `cordova-2.5.0.jar` を追加します。

3. Eclipse を使用している場合、Eclipse プロジェクトのリフレッシュとクリーンアップを行ってください。

4. 新しい `cordova-2.5.0.js` をプロジェクトにコピーします。

5. 新 `cordova-2.5.0.js.js` ファイルを使用できるように、HTML の更新を行います。

6. `framework/res/xml/config.xml` に一致するように、 `res/xml/config.xml` ファイルをコピーします。

7. 以前のような設定になるように、 `framework/res/xml/config.xml` を更新します。

8. `bin/templates/cordova` のファイルを、プロジェクトの `cordova` ディレクトリへコピーします。

## 2.3.0 から 2.4.0 への更新

1. プロジェクトの `libs` ディレクトリから、 `cordova-2.3.0.jar` を削除します。

2. プロジェクトの `libs` ディレクトリへ、 `cordova-2.4.0.jar` を追加します。

3. Eclipse を使用している場合、Eclipse プロジェクトのリフレッシュとクリーンアップを行ってください。

4. 新しい `cordova-2.4.0.js` をプロジェクトにコピーします。

5. 新 `cordova-2.4.0.js` ファイルを使用できるように、HTML の更新を行います。

6. `framework/res/xml/config.xml` に一致するように、 `res/xml/config.xml` ファイルをコピーします。

7. `bin/templates/cordova` のファイルを、プロジェクトの `cordova` ディレクトリへコピーします。

## 2.2.0 から 2.3.0 への更新

1. プロジェクトの `libs` ディレクトリから、 `cordova-2.2.0.jar` を削除します。

2. プロジェクトの `libs` ディレクトリへ、 `cordova-2.3.0.jar` を追加します。

3. Eclipse を使用している場合、Eclipse プロジェクトのリフレッシュとクリーンアップを行ってください。

4. 新しい `cordova-2.3.0.js` をプロジェクトにコピーします。

5. 新 `cordova-2.3.0.js.js` ファイルを使用できるように、HTML の更新を行います。

6. `framework/res/xml/config.xml` に一致するように、 `res/xml/config.xml` ファイルをコピーします。

7. `bin/templates/cordova` のファイルを、プロジェクトの `cordova` ディレクトリへコピーします。

## 2.1.0 から 2.2.0 への更新

1. プロジェクトの `libs` ディレクトリから、 `cordova-2.1.0.jar` を削除します。

2. プロジェクトの `libs` ディレクトリへ、 `cordova-2.2.0.jar` を追加します。

3. Eclipse を使用している場合、Eclipse プロジェクトのリフレッシュとクリーンアップを行ってください。

4. 新しい `cordova-2.2.0.js` をプロジェクトにコピーします。

5. 新 `cordova-2.2.0.js` ファイルを使用できるように、HTML の更新を行います。

6. `framework/res/xml/config.xml` に一致するように、 `res/xml/config.xml` ファイルをコピーします。

7. `bin/templates/cordova` のファイルを、プロジェクトの `cordova` ディレクトリへコピーします。

## 2.0.0 から 2.1.0 への更新

1. プロジェクトの `libs` ディレクトリから、 `cordova-2.0.0.jar` を削除します。

2. プロジェクトの `libs` ディレクトリへ、 `cordova-2.1.0.jar` を追加します。

3. Eclipse を使用している場合、Eclipse プロジェクトのリフレッシュとクリーンアップを行ってください。

4. 新しい `cordova-2.1.0.js` をプロジェクトにコピーします。

5. 新 `cordova-2.1.0.js` ファイルを使用できるように、HTML の更新を行います。

6. `framework/res/xml/config.xml` に一致するように、 `res/xml/config.xml` ファイルをコピーします。

7. `bin/templates/cordova` のファイルを、プロジェクトの `cordova` ディレクトリへコピーします。

## 1.9.0 から 2.0.0 への更新

1. プロジェクトの `libs` ディレクトリから、 `cordova-1.9.0.jar` を削除します。

2. プロジェクトの `libs` ディレクトリへ、 `cordova-2.0.0.jar` を追加します。

3. Eclipse を使用している場合、Eclipse プロジェクトのリフレッシュとクリーンアップを行ってください。

4. 新しい `cordova-2.0.0.js` をプロジェクトにコピーします。

5. 新 `cordova-2.0.0.js` ファイルを使用できるように、HTML の更新を行います。

6. `framework/res/xml/config.xml` に一致するように、 `res/xml/config.xml` ファイルをコピーします。

2.0.0 のリリースでは、 `cordova.xml` と `plugins.xml` の代わりに、 `config.xml` ファイルが使用されるようになりました。これらの旧設定ファイルは、2.0.0 では、サポートしておりますが、将来のリリースでは、廃止する予定です。

## 1.8.1 から 1.9.0 への更新

1. プロジェクトの `libs` ディレクトリから、 `cordova-1.8.0.jar` を削除します。

2. プロジェクトの `libs` ディレクトリへ、 `cordova-1.9.0.jar` を追加します。

3. Eclipse を使用している場合、Eclipse プロジェクトのリフレッシュとクリーンアップを行ってください。

4. 新しい `cordova-1.9.0.js` をプロジェクトにコピーします。

5. 新 `cordova-1.9.0.js` ファイルを使用できるように、HTML の更新を行います。

6. `framework/res/xml/plugins.xml` に一致するように、`res/xml/plugins.xml` ファイルを更新します。 

1.9.0 のリリースから導入された `CordovaWebView` では、第三者提供のプラグインを使用できない場合もあります。その場合、 `getContext()` または `getActivity()` を使用して、 `CordovaInterface` から Context を取得する必要があります。Android 開発の上級者ではない場合、プラグインの開発者に連絡を取ったり、彼らが運営するバグの掲示板 ( bug tracker ) にこの問題を投稿してください。

## 1.8.0 から 1.8.1 ( 原文 「 1.8.0 」 ) への更新

1. プロジェクトの `libs` ディレクトリから、 `cordova-1.8.0.jar` を削除します。

2. プロジェクトの `libs` ディレクトリへ、 `cordova-1.8.1.jar` を追加します。

3. Eclipse を使用している場合、Eclipse プロジェクトのリフレッシュとクリーンアップを行ってください。

4. 新しい `cordova-1.8.1.js` をプロジェクトにコピーします。

5. 新 `cordova-1.8.1.js` ファイルを使用できるように、HTML の更新を行います。

6. `framework/res/xml/plugins.xml` に一致するように、`res/xml/plugins.xml` ファイルを更新します。 

## 1.7.0 から 1.8.0 への更新

1. プロジェクトの `libs` ディレクトリから、 `cordova-1.7.0.jar` を削除します。

2. プロジェクトの `libs` ディレクトリへ、 `cordova-1.8.0.jar` を追加します。

3. Eclipse を使用している場合、Eclipse プロジェクトのリフレッシュとクリーンアップを行ってください。

4. 新しい `cordova-1.8.0.js.js` をプロジェクトにコピーします。

5. 新 `cordova-1.8.0.js` ファイルを使用できるように、HTML の更新を行います。

6. `framework/res/xml/plugins.xml` に一致するように、`res/xml/plugins.xml` ファイルを更新します。 

## 1.7.0 から 1.8.0 への更新

1. プロジェクトの `libs` ディレクトリから、 `cordova-1.7.0.jar` を削除します。

2. プロジェクトの `libs` ディレクトリへ、 `cordova-1.8.0.jar` を追加します。

3. Eclipse を使用している場合、Eclipse プロジェクトのリフレッシュとクリーンアップを行ってください。

4. 新しい `cordova-1.8.0.js` をプロジェクトにコピーします。

5. 新 `cordova-1.8.0.js` ファイルを使用できるように、HTML の更新を行います。

6. `framework/res/xml/plugins.xml` に一致するように、`res/xml/plugins.xml ファイルを更新します。 

## 1.6.1 から 1.7.0 への更新

1. プロジェクトの `libs` ディレクトリから、 `cordova-1.6.1.jar` を削除します。

2. プロジェクトの `libs` ディレクトリへ、 `cordova-1.7.0.jar` を追加します。

3. Eclipse を使用している場合、Eclipse プロジェクトのリフレッシュとクリーンアップを行ってください。

4. 新しい `cordova-1.7.0.js` をプロジェクトにコピーします。

5. `framework/res/xml/plugins.xml` に一致するように、`res/xml/plugins.xml` ファイルをコピーします。 

## 1.6.0 から 1.6.1 への更新

1. プロジェクトの `libs` ディレクトリから、 `cordova-1.6.0.jar` を削除します。

2. プロジェクトの `libs` ディレクトリへ、 `cordova-1.6.1.jar` を追加します。

3. Eclipse を使用している場合、Eclipse プロジェクトのリフレッシュとクリーンアップを行ってください。

4. 新しい `cordova-1.6.1.js` をプロジェクトにコピーします。

5. `framework/res/xml/plugins.xml` に一致するように、`res/xml/plugins.xml` ファイルを更新します。 

## 1.5.0 から 1.6.0 への更新

1. プロジェクトの `libs` ディレクトリから、 `cordova-1.5.0.jar` を削除します。

2. プロジェクトの `libs` ディレクトリへ、 `cordova-1.6.0.jar` を追加します。

3. Eclipse を使用している場合、Eclipse プロジェクトのリフレッシュとクリーンアップを行ってください。

4. 新しい `cordova-1.6.0.js` をプロジェクトにコピーします。

5. 新 `cordova-1.6.0.js` ファイルを使用できるように、HTML の更新を行います。

6. `framework/res/xml/plugins.xm` に一致するように、`res/xml/plugins.xml` ファイルを更新します。 

7. `framework/res/xml/cordova.xml` に一致するように、 `res/xml/cordova.xml` を使用して、 `res/xml/phonegap.xml` を置き換えます。

## 1.4.0 から 1.5.0 への更新

1. プロジェクトの `libs` ディレクトリから、 `phonegap-1.4.0.jar` を削除します。

2. プロジェクトの `libs` ディレクトリへ、 `cordova-1.5.0.jar` を追加します。

3. Eclipse を使用している場合、Eclipse プロジェクトのリフレッシュとクリーンアップを行ってください。

4. 新しい `cordova-1.5.0.js` をプロジェクトにコピーします。

5. 新 `cordova-1.5.0.js` ファイルを使用できるように、HTML の更新を行います。

6. `framework/res/xml/plugins.xml` に一致するように、`res/xml/plugins.xml` ファイルを更新します。 

7. `framework/res/xml/cordova.xml` に一致するように、 `res/xml/cordova.xml` を使用して、 `res/xml/phonegap.xml` を置き換えます。

## 1.3.0 から 1.4.0 への更新

1. プロジェクトの `libs` ディレクトリから、 `phonegap-1.3.0.jar` を削除します。

2. プロジェクトの `libs` ディレクトリへ、 `cordova-1.4.0.jar` を追加します。

3. Eclipse を使用している場合、Eclipse プロジェクトのリフレッシュとクリーンアップを行ってください。

4. 新しい `phonegap-1.4.0.js` をプロジェクトにコピーします。

5. 新 `phonegap-1.4.0.js` ファイルを使用できるように、HTML の更新を行います。

6. `framework/res/xml/plugins.xml` に一致するように、`res/xml/plugins.xml` ファイルを更新します。 

7. `framework/res/xml/phonegap.xml` に一致するように、`res/xml/phonegap.xml` ファイルを更新します。 

## 1.2.0 から 1.3.0 への更新

1. プロジェクトの `libs` ディレクトリから、 `phonegap-1.2.0.jar` を削除します。

2. プロジェクトの `libs` ディレクトリへ、 `phonegap-1.3.0.jar` を追加します。

3. Eclipse を使用している場合、Eclipse プロジェクトのリフレッシュとクリーンアップを行ってください。

4. 新しい `phonegap-1.3.0.js` をプロジェクトにコピーします。

5. 新 `phonegap-1.2.0.js` ファイルを使用できるように、HTML の更新を行います。

6. `framework/res/xml/plugins.xml` に一致するように、`res/xml/plugins.xml` ファイルを更新します。

7. `framework/res/xml/phonegap.xml` に一致するように、`res/xml/phonegap.xml` ファイルを更新します。

## 1.1.0 から 1.2.0 への更新

1. プロジェクトの `libs` ディレクトリから、 `phonegap-1.1.0.jar` を削除します。

2. プロジェクトの `libs` ディレクトリへ、 `phonegap-1.2.0.jar` を追加します。

3. Eclipse を使用している場合、Eclipse プロジェクトのリフレッシュとクリーンアップを行ってください。

4. 新しい `phonegap-1.2.0.js` をプロジェクトにコピーします。

5. 新 `phonegap-1.2.0.js` ファイルを使用できるように、HTML の更新を行います。

6. `framework/res/xml/plugins.xml` に一致するように、`res/xml/plugins.xml` ファイルを更新します。 

7. `framework/res/xml/phonegap.xml` に一致するように、`res/xml/phonegap.xml` ファイルを更新します。 

## 1.0.0 から 1.1.0 への更新

1. プロジェクトの `libs` ディレクトリから、 `phonegap-1.0.0.jar` を削除します。

2. プロジェクトの `libs` ディレクトリへ、 `phonegap-1.1.0.jar` を追加します。

3. Eclipse を使用している場合、Eclipse プロジェクトのリフレッシュとクリーンアップを行ってください。

4. 新しい `phonegap-1.1.0.js` をプロジェクトにコピーします。

5. 新 `phonegap-1.1.0.js` ファイルを使用できるように、HTML の更新を行います。

6. `framework/res/xml/plugins.xml` に一致するように、`res/xml/plugins.xml` ファイルを更新します。 

## 0.9.6 から 1.0.0 への更新

1. プロジェクトの `libs` ディレクトリから、 `phonegap-0.9.6.jar` を削除します。

2. プロジェクトの `libs` ディレクトリへ、 `phonegap-1.0.0.jar` を追加します。

3. Eclipse を使用している場合、Eclipse プロジェクトのリフレッシュとクリーンアップを行ってください。

4. 新しい `phonegap-1.0.0.js` をプロジェクトにコピーします。

5. 新 `phonegap-1.0.0.js` ファイルを使用できるように、HTML の更新を行います。

6. `framework/res/xml/plugins.xml` に一致するように、`res/xml/plugins.xml` ファイルを追加します。 