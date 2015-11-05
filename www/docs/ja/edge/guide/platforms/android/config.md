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

title: Android の構成
---

# Android の構成

`config.xml`ファイルは、各アプリケーションと CordovaWebView のインスタンス全体に適用される、アプリの基本的な設定を制御します。 このセクションの詳細設定アンドロイドのビルドにのみ適用されます。 グローバル構成オプションの詳細については、 [config.xml ファイル][1]を参照してください。

 [1]: config_ref_index.md.html#The%20config.xml%20File

*   `KeepRunning`(ブール値、既定値は `true` ): アプリケーション滞在後もバック グラウンドで実行されているかどうかを判断します、 `[pause](../../../cordova/events/events.pause.html)` イベントが発生します。 これを設定する `false` 後アプリを殺すことはありません、 `[pause](../../../cordova/events/events.pause.html)` イベントが、単にアプリがバック グラウンドでのコルドバ webview 内のコードの実行を停止します。

        <preference name="KeepRunning" value="false"/>


*   `LoadUrlTimeoutValue`(数はミリ秒単位で、既定の `20000` 、20 秒間): タイムアウト エラーをスローする前に待機する時間の量、ページの読み込み中。 この例では 20 よりもむしろ 10 秒を指定します。

        <preference name="LoadUrlTimeoutValue" value="10000"/>


*   `SplashScreen`(文字列、既定値は `splash` ): からの拡張子を除いたファイル名、 `res/drawable` ディレクトリ。 様々 な資産は、さまざまなサブディレクトリでこの共通名を共有しなければなりません。

        <preference name="SplashScreen" value="mySplash"/>


*   `SplashScreenDelay`(既定値は、ミリ秒単位で番号 `3000` ): スプラッシュ画面のイメージが表示されます時間の量。

        <preference name="SplashScreenDelay" value="10000"/>


*   `InAppBrowserStorageEnabled`(ブール値、既定値は `true` ): コントロール、InAppBrowser 内でページを開くかどうかとしてアクセスできます同じ [localStorage](../../../cordova/storage/localstorage/localstorage.html) および WebSQL [ストレージ](../../../cordova/storage/storage.html) ページ、既定のブラウザーで開かれます。

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

*   `AndroidLaunchMode`(文字列、既定値は `singleTop` ): アクティビティを設定します `android:launchMode` 属性。 これは、アプリはアプリのアイコンまたは意図から起動が既に実行されているときに何が起こるかを変更します。 有効な値は `standard` 、 `singleTop` 、 `singleTask` 、`singleInstance`.

        <preference name="AndroidLaunchMode" value="singleTop"/>


*   `DefaultVolumeStream`(文字列、既定値は `default` 、コルドバ アンドロイド 3.7.0 に追加)： ボリューム、ハードウェアのボリューム ボタンにリンクを設定します。 既定ではこれは「電話」携帯電話とタブレットのための「メディア」です。 常に音量を変更するメディア アプリの音量ボタンを「メディア」に設定します。 コルドバのメディア プラグインを使用して、ボリューム ボタンは任意のメディア オブジェクトがアクティブな場合にメディア ボリュームを制御する変更は動的に注意してください。

*   `OverrideUserAgent`(文字列、既定では設定されていない): 設定すると、値は webview の古い UserAgent を交換します。 リモート ページを要求するときにアプリ ・ ブラウザーから要求を識別すると便利です。 注意して使用、これは web サーバーと compitiable 問題を原因します。 ほとんどの場合、AppendUserAgent を代わりに使用します。

        <preference name="OverrideUserAgent" value="Mozilla/5.0 My Browser" />


*   `AppendUserAgent`(文字列、既定では設定されていない): 設定、webview の古いユーザ エージェントの末尾に値が追加されます。 OverrideUserAgent を使用する場合は、この値が無視されます。

        <preference name="AppendUserAgent" value="My Browser" />
