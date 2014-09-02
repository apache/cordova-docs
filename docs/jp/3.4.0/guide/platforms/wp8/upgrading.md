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

# Windows Phone の更新

このガイドでは、新しいバージョンの Cordova へ移行するときに必要となる、 Windows Phone ( バージョン 7 と 8 ) プロジェクト側の修正点に関して解説します。このガイドで使用する手順のほとんどは、 `cordova` の CLI ユーティリティがリリースされる前のコマンドライン ツールを使用して作成されたプロジェクトに適用するものです。CLI 自体のバージョン更新に関しては、『 コマンドライン インターフェイス 』 をご確認ください。
以下の節では、CLI を使用せずに作成したプロジェクトの更新方法も解説しています。

## 3.1.0 から 3.2.0 への更新

cordova CLI を使用して作成したプロジェクトの場合、以下の処理を行います。

1. `cordova` CLI のバージョンを更新します。『 コマンドライン インターフェイス 』 をご確認ください。

2. `cordova platform update wp8` を実行します ( または、 `wp7` 。プロジェクトに追加するプラットフォームに依ります。 ) 。

cordova CLI を使用せずに作成したプロジェクトの場合、以下を実行します。

        bin\update <project_path>

## 3.0.0 から 3.1.0 への更新

cordova CLI を使用して作成したプロジェクトの場合、以下の処理を行います。

1. cordova` CLI のバージョンを更新します。『 コマンドライン インターフェイス 』 をご確認ください。

2. `cordova platform update wp8` を実行します ( または、 `wp7` 。プロジェクトに追加するプラットフォームに依ります。 ) 。

cordova CLI を使用せずに作成したプロジェクトの場合、以下を実行します。

        bin\update <project_path>

## 2.9.0 から CLI ( 3.0.0 ) への更新

1. 『 コマンドライン インターフェイス 』 の記載内容に従い、cordova CLI を使用して、Apache Cordova 3.0.0 プロジェクトを新規作成します。

2. プラットフォームを cordova プロジェクトに追加します。例 ： 「 `cordova
   platform add wp7 wp8` 」 

3. プロジェクトの `www` ディレクトリのコンテンツを、先ほど作成した cordova プロジェクトの root ( ルート ) に位置する `www` ディレクトリにコピーします。

4. ネイティブ アセット ( native assets ) のコピーまたは上書きを、旧プロジェクトから行ってください ( `SplashScreen` 、 `ApplicationIcon` など )。 新しいファイルへの参照を `.csproj` ファイルに追加してください。
windows phone のプロジェクトは、 `platforms\wp7` または `platforms\wp8` ディレクトリ内でビルドされます。

5. 
cordova CLI ツールを使用して、必要なプラグインをインストールします。CLI では、すべてのコア API をプラグインとして取り扱うため、すべてのプラグインをインストールしておくことを推奨します。また、3.0.0 系のプラグインのみ、CLI で取り扱うことができます。

6. ビルドとテストを行います。

## 2.9.0 から 3.0.0 ( CLI 以外 ) への更新

Visual Studio の Solution Explorer 上で以下の処理を行います。

1. Apache Cordova WP7 または WP8 3.0.0 プロジェクトを新規作成します。

2. 開発者の `www` ディレクトリのコンテンツを、新規のプロジェクトにコピーします。必要なアイテムが VS プロジェクトに追加されていることを確認してください。

3. スプラッシュ画面またはアイコン画像のコピーおよび上書きをしてください。

4. plugins` ディレクトリから新規のプロジェクトにプラグインをコピーしてください。必要なプラグインが VS プロジェクトに追加されていることを確認してください。

5. ビルドとテストを行います。

__注意__ : 
Cordova バージョン 3.0 から、コア API のすべてが削除されています。コア API は、プラグインとして、個別にインストールを行う必要があります。CLI を使用しない作業手順において、プラグインを使用する場合、『 Plugman を使用した、プラグインの管理 』 をご確認ください。

## 2.8.0 から 2.9.0 への更新

Visual Studio の Solution Explorer 上で以下の処理を行います。

1. Apache Cordova WP7 または WP8 2.9.0 プロジェクトを新規作成します。

2. 開発者の `www` ディレクトリのコンテンツを、新規のプロジェクトにコピーします。必要なアイテムが VS プロジェクトに追加されていることを確認してください。

3. 「 cordova-バージョン番号 」 形式の .js ファイルを使用している場合には、HTML 内に記述された `cordova.js` の名前を更新します ( 本来使用すべきファイル名は、 `cordova.js` です )。

4. スプラッシュ画面またはアイコン画像のコピーおよび上書きをしてください。

5. `plugins` ディレクトリから新規のプロジェクトにプラグインをコピーしてください。必要なプラグインへの参照が .csproj ファイルに追加されていることを確認してください。

6. ビルドとテストを行います。

## 2.7.0 から 2.8.0 への更新

Visual Studio の Solution Explorer 上で以下の処理を行います。

1. Apache Cordova WP7 または WP8 2.8.0 プロジェクトを新規作成します。

2. 開発者の `www` ディレクトリのコンテンツを、新規のプロジェクトにコピーします。必要なアイテムが VS プロジェクトに追加されていることを確認してください。

3. 新 `cordova.js` ファイルを使用できるように、開発者の HTML を更新します ( バージョン番号を含んだファイル名ではないことに注意してください )。

4. スプラッシュ画面またはアイコン画像のコピーおよび上書きをしてください。

5. `plugins` ディレクトリから新規のプロジェクトにプラグインをコピーしてください。必要なプラグインが VS プロジェクトに追加されていることを確認してください。

6. ビルドとテストを行います。

## 2.6.0 から 2.7.0 への更新

Visual Studio の Solution Explorer 上で以下の処理を行います。

1. Apache Cordova WP7 または WP8 2.7.0 プロジェクトを新規作成します。

2. 開発者の `www` ディレクトリのコンテンツを、新規のプロジェクトにコピーします。必要なアイテムが VS プロジェクトに追加されていることを確認してください。

3. 新 `cordova-2.7.0.js` ファイルを使用できるように、開発者の HTML を更新します。

4. スプラッシュ画面またはアイコン画像のコピーおよび上書きをしてください。

5. `plugins` ディレクトリから新規のプロジェクトにプラグインをコピーしてください。必要なプラグインが VS プロジェクトに追加されていることを確認してください。

6. ビルドとテストを行います。

## 2.5.0 から 2.6.0 への更新

Visual Studio の Solution Explorer 上で以下の処理を行います。

1. Apache Cordova WP7 または WP8 2.6.0 プロジェクトを新規作成します。

2. 開発者の `www` ディレクトリのコンテンツを、新規のプロジェクトにコピーします。必要なアイテムが VS プロジェクトに追加されていることを確認してください。

3. 新 `cordova-2.6.0.js` ファイルを使用できるように、開発者の HTML を更新します。

4. スプラッシュ画面またはアイコン画像のコピーおよび上書きをしてください。

5. `plugins` ディレクトリから新規のプロジェクトにプラグインをコピーしてください。必要なプラグインが VS プロジェクトに追加されていることを確認してください。

6. ビルドとテストを行います。

## 2.4.0 から 2.5.0 への更新

Visual Studio の Solution Explorer 上で以下の処理を行います。

1. Apache Cordova WP7 または WP8 2.5.0 プロジェクトを新規作成します。

2. 開発者の `www` ディレクトリのコンテンツを、新規のプロジェクトにコピーします。必要なアイテムが VS プロジェクトに追加されていることを確認してください。

3. 新 `cordova-2.5.0.js` ファイルを使用できるように、開発者の HTML を更新します。

4. スプラッシュ画面またはアイコン画像のコピーおよび上書きをしてください。

5. `plugins` ディレクトリから新規のプロジェクトにプラグインをコピーしてください。必要なプラグインが VS プロジェクトに追加されていることを確認してください。

6. ビルドとテストを行います。

## 2.3.0 から 2.4.0 への更新

Visual Studio の Solution Explorer 上で以下の処理を行います。

1. Apache Cordova WP7 または WP8 2.4.0 プロジェクトを新規作成します。

2. 開発者の `www` ディレクトリのコンテンツを、新規のプロジェクトにコピーします。必要なアイテムが VS プロジェクトに追加されていることを確認してください。

3. 新 `cordova-2.4.0.js` ファイルを使用できるように、開発者の HTML を更新します。

4. スプラッシュ画面またはアイコン画像のコピーおよび上書きをしてください。

5. `plugins` ディレクトリから新規のプロジェクトにプラグインをコピーしてください。必要なプラグインが VS プロジェクトに追加されていることを確認してください。

6. ビルドとテストを行います。

## 2.2.0 から 2.3.0 への更新

Visual Studio の Solution Explorer 上で以下の処理を行います。

1. Apache Cordova WP7 2.3.0 プロジェクトを新規作成します。

2. 開発者の `www` ディレクトリのコンテンツを、新規のプロジェクトにコピーします。必要なアイテムが VS プロジェクトに追加されていることを確認してください。

3. 新 `cordova-2.3.0.js` ファイルを使用できるように、開発者の HTML を更新します。

4. スプラッシュ画面またはアイコン画像のコピーおよび上書きをしてください。

5. `plugins` ディレクトリから新規のプロジェクトにプラグインをコピーしてください。必要なプラグインが VS プロジェクトに追加されていることを確認してください。

6. ビルドとテストを行います。

## 2.1.0 から 2.2.0 への更新

Visual Studio の Solution Explorer 上で以下の処理を行います。

1. Apache Cordova WP7 2.2.0 プロジェクトを新規作成します。

2. 開発者の `www` ディレクトリのコンテンツを、新規のプロジェクトにコピーします。必要なアイテムが VS プロジェクトに追加されていることを確認してください。

3. 新 `cordova-2.2.0.js` ファイルを使用できるように、開発者の HTML を更新します。

4. スプラッシュ画面またはアイコン画像のコピーおよび上書きをしてください。

5. `plugins` ディレクトリから新規のプロジェクトにプラグインをコピーしてください。必要なプラグインが VS プロジェクトに追加されていることを確認してください。

6. ビルドとテストを行います。

## 2.0.0 から 2.1.0 への更新

Visual Studio の Solution Explorer 上で以下の処理を行います。

1. Apache Cordova WP7 2.1.0 プロジェクトを新規作成します。

2. 開発者の `www` ディレクトリのコンテンツを、新規のプロジェクトにコピーします。必要なアイテムが VS プロジェクトに追加されていることを確認してください。

3. 新 `cordova-2.1.0.js` ファイルを使用できるように、開発者の HTML を更新します。

4. スプラッシュ画面またはアイコン画像のコピーおよび上書きをしてください。

5. `plugins` ディレクトリから新規のプロジェクトにプラグインをコピーしてください。必要なプラグインが VS プロジェクトに追加されていることを確認してください。

6. ビルドとテストを行います。

## 1.9.0 から 2.0.0 への更新

Apache Cordova 2.0.0 では、WP7 プロジェクトの構造に大きな変化があります。よって、いままでのアップグレードよりも、処理の手順が若干煩雑になり、アップグレードというよりは、プロジェクトの新規作成と既存の Source ファイルのコピーが主な作業内容になります。

Visual Studio の Solution Explorer 上で以下の処理を行います。

1. Apache Cordova WP7 2.0 プロジェクトを新規作成します。

2. 開発者の `www` ディレクトリのコンテンツを、新規のプロジェクトにコピーします。必要なアイテムが VS プロジェクトに追加されていることを確認してください。

3. 新 `cordova-2.0.0.js` ファイルを使用できるように、開発者の HTML を更新します。

4. スプラッシュ画面またはアイコン画像のコピーおよび上書きをしてください。

5. `plugins` ディレクトリから新規のプロジェクトにプラグインをコピーしてください。必要なプラグインが VS プロジェクトに追加されていることを確認してください。

6. ビルドとテストを行います。

## 1.8.0 から 1.9.0 への更新

Visual Studio の Solution Explorer 上で以下の処理を行います。

1. `GapLib/WP7CordovaClassLib.dll` を開発者のプロジェクトから削除します。

2. References__ ディレクトリの `WP7CordovaClassLib` への参照を削除します。

3. References__ を右クリックして、 __Add Reference__ を選択します。

4. 配布ファイルの新規一覧へ移動して、 `WP7CordovaClassLib.dll` ファイルを追加します。

    __参考__ : 一覧上の DLL を右クリックして、 __Properties__ を選択して、バージョンを確認することができます。

5. 新 `cordova-1.9.0.js` を開発者のプロジェクトにコピーします ( Content としてマーク付けされていることを確認してください )。

6. 新 `cordova-1.9.0.js` ファイルを使用できるように、開発者の HTML を更新します。

## 1.7.0 から 1.8.0 への更新

Visual Studio の Solution Explorer 上で以下の処理を行います。

1. `GapLib/WP7CordovaClassLib.dll` を開発者のプロジェクトから削除します。

2. __References__ ディレクトリの `WP7CordovaClassLib` への参照を削除します。

3. __References__ を右クリックして、 __Add Reference__ を選択します。

4. 配布ファイルの新規一覧へ移動して、 `WP7CordovaClassLib.dll` ファイルを追加します。

    __参考__: 一覧上の DLL を右クリックした後、 __Properties__ を選択して、バージョンを確認することができます。

5. 新 `cordova-1.8.0.js` を開発者のプロジェクトにコピーします ( Content としてマーク付けされていることを確認してください )。

6. 新 `cordova-1.8.0.js` ファイルを使用できるように、開発者の HTML を更新します。

## 1.6.0 から 1.7.0 への更新

Visual Studio の Solution Explorer 上で以下の処理を行います。

1. `GapLib/WP7CordovaClassLib.dll` を開発者のプロジェクトから削除します。

2. __References__ ディレクトリの `WP7CordovaClassLib` への参照を削除します。

3. __References__ を右クリックして、 __Add Reference__ を選択します。

4. 配布ファイルの新規一覧へ移動して、 `WP7CordovaClassLib.dll` ファイルを追加します。

    __参考__: 一覧上の DLL を右クリックした後、 __Properties__ を選択して、バージョンを確認することができます。

5. 新 `cordova-1.7.0.js` を開発者のプロジェクトにコピーします ( Content としてマーク付けされていることを確認してください )。

6. 新 `cordova-1.7.0.js` ファイルを使用できるように、開発者の HTML を更新します。

## 1.6.0 から 1.6.1 への更新

Visual Studio の Solution Explorer 上で以下の処理を行います。

1. `GapLib/WP7CordovaClassLib.dll` を開発者のプロジェクトから削除します。

2. __References__ ディレクトリの `WP7CordovaClassLib` への参照を削除します。

3. __References__ を右クリックして、 __Add Reference__ を選択します。

4. 配布ファイルの新規一覧へ移動して、 `WP7CordovaClassLib.dll` ファイルを追加します。

    __参考__: 一覧上の DLL を右クリックした後、 __Properties__ を選択して、バージョンを確認することができます。

5. 新 `cordova-1.6.1.js` を開発者のプロジェクトにコピーします ( Content としてマーク付けされていることを確認してください )。

6. 新 `cordova-1.6.1.js` ファイルを使用できるように、開発者の HTML を更新します。

## 1.5.0 から 1.6.0 への更新

Visual Studio の Solution Explorer 上で以下の処理を行います。

1. `GapLib/WP7CordovaClassLib.dll` を開発者のプロジェクトから削除します。

2. __References__ ディレクトリの `WP7CordovaClassLib` への参照を削除します。

3. __References__ を右クリックして、 __Add Reference__ を選択します。

4. 配布ファイルの新規一覧へ移動して、 `WP7CordovaClassLib.dll` ファイルを追加します。

    __参考__: 一覧上の DLL を右クリックした後、 __Properties__ を選択して、バージョンを確認することができます。

5. 新 `cordova-1.6.0.js` を開発者のプロジェクトにコピーします ( Content としてマーク付けされていることを確認してください )。

6. 新 `cordova-1.6.0.js` ファイルを使用できるように、開発者の HTML を更新します。

## 1.4.0 から 1.5.0 への更新

Visual Studio の Solution Explorer 上で以下の処理を行います。

1. `GapLib/WP7CordovaClassLib.dll` を開発者のプロジェクトから削除します。

2. __References__ ディレクトリの `WP7CordovaClassLib` への参照を削除します。

3. __References__ を右クリックして、 __Add Reference__ を選択します。

4. 配布ファイルの新規一覧へ移動して、 `WP7CordovaClassLib.dll` ファイルを追加します。

    __参考__: 一覧上の DLL を右クリックした後、 __Properties__ を選択して、バージョンを確認することができます。

5. 新 `cordova-1.5.0.js` を開発者のプロジェクトにコピーします ( Content としてマーク付けされていることを確認してください )。

6. 新 `cordova-1.5.0.js` ファイルを使用できるように、開発者の HTML を更新します。

## 1.3.0 から 1.4.0 への更新

Visual Studio の Solution Explorer 上で以下の処理を行います。

1. `GapLib/WP7CordovaClassLib.dll` を開発者のプロジェクトから削除します。

2. __References__ ディレクトリの `WP7CordovaClassLib` への参照を削除します。

3. __References__ を右クリックして、 __Add Reference__ を選択します。

4. 配布ファイルの新規一覧へ移動して、 `WP7CordovaClassLib.dll` ファイルを追加します。

    __参考__: 一覧上の DLL を右クリックした後、 __Properties__ を選択して、バージョンを確認することができます。

5. 新 `cordova-1.4.0.js` を開発者のプロジェクトにコピーします ( Content としてマーク付けされていることを確認してください )。

6. 新 `cordova-1.4.0.js` ファイルを使用できるように、開発者の HTML を更新します。

## 1.2.0 から 1.3.0 への更新

Visual Studio の Solution Explorer 上で以下の処理を行います。

1. `GapLib/WP7CordovaClassLib.dll` を開発者のプロジェクトから削除します。

2. __References__ ディレクトリの `WP7CordovaClassLib` への参照を削除します。

3. __References__ を右クリックして、 __Add Reference__ を選択します。

4. 配布ファイルの新規一覧へ移動して、 `WP7CordovaClassLib.dll` ファイルを追加します。

    __参考__: 一覧上の DLL を右クリックした後、 __Properties__ を選択して、バージョンを確認することができます。

5. 新 `cordova-1.3.0.js` を開発者のプロジェクトにコピーします ( Content としてマーク付けされていることを確認してください )。

6. 新 `cordova-1.3.0.js` ファイルを使用できるように、開発者の HTML を更新します。

## 1.1.0 から 1.2.0 への更新

Visual Studio の Solution Explorer 上で以下の処理を行います。

1. `GapLib/WP7CordovaClassLib.dll` を開発者のプロジェクトから削除します。

2. __References__ ディレクトリの `WP7CordovaClassLib` への参照を削除します。

3. __References__ を右クリックして、 __Add Reference__ を選択します。

4. 配布ファイルの新規一覧へ移動して、 `WP7CordovaClassLib.dll` ファイルを追加します。

    __参考__ : 一覧上の DLL を右クリックした後、 __Properties__ を選択して、バージョンを確認することができます。

5. 新 `cordova-1.2.0.js` を開発者のプロジェクトにコピーします ( Content としてマーク付けされていることを確認してください )。

6. 新 `cordova-1.2.0.js` ファイルを使用できるように、開発者の HTML を更新します。

## 1.0.0 から 1.1.0 への更新

Visual Studio の Solution Explorer 上で以下の処理を行います。

1. `GapLib/WP7CordovaClassLib.dll` を開発者のプロジェクトから削除します。

2. __References__ ディレクトリの `WP7CordovaClassLib` への参照を削除します。

3. __References__ を右クリックして、 __Add Reference__ を選択します。

4. 配布ファイルの新規一覧へ移動して、 `WP7CordovaClassLib.dll` ファイルを追加します。

    __参考__: 一覧上の DLL を右クリックした後、 __Properties__ を選択して、バージョンを確認することができます。

5. 新 `cordova-1.1.0.js` を開発者のプロジェクトにコピーします ( Content としてマーク付けされていることを確認してください )。

6. 新 `cordova-1.1.0.js` ファイルを使用できるように、開発者の HTML を更新します。