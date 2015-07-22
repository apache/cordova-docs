---

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied. See the License for the
         specific language governing permissions and limitations
    

   under the License.
---

# Android の構成

`config.xml`ファイルは、各アプリケーションと CordovaWebView のインスタンス全体に適用される、アプリの基本的な設定を制御します。 このセクションの詳細設定アンドロイドのビルドにのみ適用されます。 グローバル構成のオプションには、config.xml ファイル情報を参照してください。

*   `KeepRunning`(ブール値、既定値は `true` ): アプリケーション滞在後もバック グラウンドで実行されているかどうかを判断します、 `pause` イベントが発生します。 注: これを false に設定がない殺すアプリ一時停止イベントの後、アプリはバック グラウンドでコルドバ webview でコードの実行を停止のみです。
    
        <preference name="KeepRunning" value="false"/>
        

*   `LoadUrlTimeoutValue`(数はミリ秒単位で、既定の `20000` 、20 秒間): タイムアウト エラーをスローする前に待機する時間の量、ページの読み込み中。 この例では 20 よりもむしろ 10 秒を指定します。
    
        <preference name="LoadUrlTimeoutValue" value="10000"/>
        

*   `SplashScreen`(文字列、既定値は `splash` ): からの拡張子を除いたファイル名、 `res/drawable` ディレクトリ。 様々 な資産は、さまざまなサブディレクトリでこの共通名を共有しなければなりません。
    
        <preference name="SplashScreen" value="mySplash"/>
        

*   `SplashScreenDelay`(既定値は、ミリ秒単位で番号 `3000` ): スプラッシュ画面のイメージが表示されます時間の量。
    
        <preference name="SplashScreenDelay" value="10000"/>
        

*   `InAppBrowserStorageEnabled`(ブール値、既定値は `true` ): コントロール、InAppBrowser 内でページを開くかどうかとしてアクセスできます同じ localStorage および WebSQL ストレージ ページ、既定のブラウザーで開かれます。
    
        <preference name="InAppBrowserStorageEnabled" value="true"/>
        

*   `LoadingDialog`(文字列、既定値は `null` ): 場合セット、スピナーは、アプリケーションの最初のページの読み込み時に指定したタイトルとメッセージ、ダイアログ ボックスが表示されます。 タイトルとメッセージは、この値の文字列でコンマで区切られます、ダイアログ ボックスが表示される前に、そのカンマが削除されます。
    
        <preference name="LoadingDialog" value="My Title,My Message"/>
        

*   `LoadingPageDialog`(文字列、既定値は `null` ): と同じ `LoadingDialog` 、しかし、アプリケーションの最初のページの後のすべてのページをロードするため。
    
        <preference name="LoadingPageDialog" value="My Title,My Message"/>
        

*   `ErrorUrl`(デフォルトで、URL `null` ): 場合設定、「アプリケーション エラー」というタイトルのダイアログではなくアプリケーションで、エラー発生時に参照先のページが表示されます。
    
        <preference name="ErrorUrl" value="myErrorPage.html"/>
        

*   `ShowTitle`(ブール値、既定値は `false` )： 画面の上部にタイトルを表示します。
    
        <preference name="ShowTitle" value="true"/>
        

*   `LogLevel`(文字列、既定値は `ERROR` ): アプリケーションからメッセージ ログをフィルタ リングの最小のログ レベルを設定します。 有効な値は `ERROR` 、 `WARN` 、 `INFO` 、 `DEBUG` と`VERBOSE`.
    
        <preference name="LogLevel" value="VERBOSE"/>
        

*   `SetFullscreen`(ブール値、既定値は `false` ): と同じ、 `Fullscreen` でこの xml ファイルのグローバルな構成パラメーター。 このアンドロイド固有要素は推奨されませんグローバル `Fullscreen` 要素、将来のバージョンで削除されます。