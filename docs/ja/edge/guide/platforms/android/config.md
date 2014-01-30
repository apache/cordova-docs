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
        

*   `LoadUrlTimeoutValue`(数は、既定では `20000` 、20 秒間): タイムアウト エラーをスローする前に待機する時間の量、ページの読み込み中。 この例では 20 よりもむしろ 10 秒を指定します。
    
        <preference name="LoadUrlTimeoutValue" value="10000"/>
        

*   `SplashScreen`: からの拡張子を除いたファイル名、 `res/drawable` ディレクトリ。様々 な資産は、さまざまなサブディレクトリでこの共通名を共有しなければなりません。
    
        <preference name="SplashScreen" value="splash"/>
        

*   `SplashScreenDelay`(数は、既定値は `5000` ): 時間量スプラッシュ スクリーンのイメージが表示されます。
    
        <preference name="SplashScreenDelay" value="10000"/>
        

*   `InAppBrowserStorageEnabled`(ブール値、既定値は `true` ): コントロール、InAppBrowser 内でページを開くかどうかとしてアクセスできます同じ localStorage および WebSQL ストレージ ページ、既定のブラウザーで開かれます。