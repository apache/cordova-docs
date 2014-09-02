---
license: Licensed to the Apache Software Foundation (ASF) under one
         or more contributor license agreements. See the NOTICE file
         distributed with this work for additional information
         regarding copyright ownership. The ASF licenses this file
         to you under the Apache License, Version 2.0 (the
         "License"); you may not use this file except in compliance
         with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0

         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied. See the License for the
         specific language governing permissions and limitations
         under the License.
---

# Amazon Fire OS の設定

`config.xml` ファイルを使用して、各アプリと各 CordovaWebView のインスタンス間に適用する、アプリの基本的な設定を行います。
この節では、Amazon Fire OS のビルドのみに適用する preference に関して解説します。グローバル設定で使用する各種オプションに関しては、『 config.xml ファイル 』 をご確認ください。

- `KeepRunning` ( boolean、デフォルトは `true` ) : `pause` ( 一時停止 ) イベントの発火後でも、バックグラウンドにおいて、アプリの実行を継続するか決定するときに使用します。

        <preference name="KeepRunning" value="false"/>

- `ErrorUrl` : HTTP の標準エラー ( 400　から 500 までのステータスコード ) が発生した場合に表示するエラーページを指定します。
ホームページと他のリソースを格納している最上位 ( top-level ) のディレクトリに、指定するファイルを置きます。

        <preference name="ErrorUrl" value="error.html"/>

- `LoadingDialog` : アプリを読み込んでいるとき、ネイティブのダイアログを表示します。value の形式は、 _タイトル , メッセージ_ です。

        <preference name="LoadingDialog" value="Please wait, the app is loading"/>

- `LoadingPageDialog` : アプリがサブページ ( sub-page ) を読み込んでいるとき、ネイティブのダイアログを表示します。value の形式は、 _タイトル , メッセージ_ です。

        <preference name="LoadingPageDialog" value="Please wait, the data is loading"/>

- `LoadUrlTimeoutValue` ( number、デフォルトは `20000` ) : ページの読み込み時における、タイムアウトエラーを投げるまでの待ち時間です。下の例では、20 秒ではなく、10 秒に設定しています。

        <preference name="LoadUrlTimeoutValue" value="10000"/>

-  `SplashScreen`: `res/drawable` ディレクトリ内に格納されたファイルの名前 ( 拡張子なし ) です。また、画面上で使用する各種リソースは、このディレクトリ ( res/ ) 下に格納する必要があります。

        <preference name="SplashScreen" value="splash"/>

- `SplashScreenDelay` ( number、 デフォルトは `5000` ) : スプラッシュ画像を表示する時間です。

        <preference name="SplashScreenDelay" value="10000"/>
