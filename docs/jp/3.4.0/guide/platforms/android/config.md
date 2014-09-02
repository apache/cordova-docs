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

# Android の設定

`config.xml` ファイルを使用して、各アプリと各 CordovaWebView のインスタンス間に適用する、アプリの基本的な設定を行います。
この節では、Android のビルドのみに適用する preference に関して解説します。グローバル設定で使用する各種オプションに関しては、『 config.xml ファイル 』 をご確認ください。

- `KeepRunning` ( boolean、デフォルトでは `true` ) : `pause` ( 一時停止 ) イベントの発火後でも、バックグラウンドにおいて、アプリの実行を継続するか決定するときに使用します。注意 : 値を false に設定している場合、 pause イベント後でも、アプリは終了しません。アプリは、バックグラウンドに移動して、cordova webview 内で冬眠状態となります。

        <preference name="KeepRunning" value="false"/>

-  `LoadUrlTimeoutValue` [ number ( ミリ秒単位 )、デフォルトは `20000` ( 20 秒 ) ] : ページの読み込み時において、タイムアウトエラーを投げるまでの待ち時間です。下の例では、20 秒ではなく、10 秒に設定しています。

        <preference name="LoadUrlTimeoutValue" value="10000"/>

-  `SplashScreen` ( 文字列、デフォルトでは `splash` ) : `res/drawable` ディレクトリ内に格納されたファイルの名前 ( 拡張子なし ) です。また、画面上で使用する各種リソースは、このディレクトリ ( res/ ) 下に格納する必要があります。

        <preference name="SplashScreen" value="mySplash"/>

- `SplashScreenDelay` [ number ( ミリ秒単位 )、 デフォルトは `3000` ] : スプラッシュ画像を表示する時間です。

        <preference name="SplashScreenDelay" value="10000"/>

- `InAppBrowserStorageEnabled` ( boolean、デフォルトでは `true` ) : 標準ブラウザーで開いたページと同じように、InAppBrowser 内で開いたページからでも、標準ブラウザーと同じ localStorage と WebSQL ストレージにアクセスできるか指定します。

        <preference name="InAppBrowserStorageEnabled" value="true"/>

- `LoadingDialog` ( 文字列、デフォルトでは `null` ) : 設定をした場合、アプリの最初のページを読み込んでいるとき、指定したタイトルとメッセージを使用したダイアログの表示、ならびに、処理中表示 ( spinner ) を行います。タイトルとメッセージは、文字列の中で、コンマ ( , ) を使用して区切ります。コンマ自体は表示されません。

        <preference name="LoadingDialog" value="My Title,My Message"/>

- `LoadingPageDialog` ( 文字列、デフォルトでは `null` ) : `LoadingDialog` とほぼ同じですが、こちらは、アプリの最初のページを読み込んだあと、別のページを読み込む度に行われる設定となります。

        <preference name="LoadingPageDialog" value="My Title,My Message"/>

- `ErrorUrl` ( URL、デフォルトでは `null` ) :
  アプリでエラーが発生した場合に表示するページを指定します。通常では、タイトル部に "Application Error" と表示されたダイアログが使用されます。

        <preference name="ErrorUrl" value="myErrorPage.html"/>

- `ShowTitle` ( boolean、デフォルトでは `false` ) : 画面トップにタイトルを表示します。

        <preference name="ShowTitle" value="true"/>

- `LogLevel` ( 文字列、デフォルトでは `ERROR` ) : アプリが出力するログメッセージのフィルタを設定します。有効な値は `ERROR` 、 `WARN` 、 `INFO` 、 `DEBUG` または `VERBOSE` となります。

        <preference name="LogLevel" value="VERBOSE"/>

- `SetFullscreen` ( boolean、デフォルトでは `false` ) : xml ファイルのグローバル設定で使用する `Fullscreen` パラメータと同じです。グローバル `Fullscreen` 要素を既に使用している場合には、こちらの Android 特有の要素は無視されます。また、将来のバージョンでは、この設定は削除する予定です。

