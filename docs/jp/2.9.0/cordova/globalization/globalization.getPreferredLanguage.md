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

globalization.getPreferredLanguage
===========

クライアントの現在の言語の識別文字列を取得します。

    navigator.globalization.getPreferredLanguage(successCallback, errorCallback);


概要
-----------

`successCallback` コールバック関数に、プロパティーオブジェクトをパラメーターとして言語の識別文字列を返します。このオブジェクトは文字列の `value` プロパティーを持っています。

もし言語の取得中にエラーが発生した場合、 `errorCallback` コールバックが `GlobalizationError` オブジェクトをパラメーターとして呼び出されます。このエラーに対するエラーコードは `GlobalizationError.UNKNOWN_ERROR` です。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iOS
- Windows Phone 8


使用例
-------------

ブラウザーのロケールが `en_US` に設定された場合、次のコードは `language: English` という文字列をポップアップダイアログに表示します。

    navigator.globalization.getPreferredLanguage(
        function (language) {alert('language: ' + language.value + '\n');},
        function () {alert('Error getting language\n');}
    );

詳細な使用例
------------

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>Cordova</title>
        <script type="text/javascript" charset="utf-8" src="cordova-x.x.x.js"></script>
        <script type="text/javascript" charset="utf-8">

        function checkLanguage() {
          navigator.globalization.getPreferredLanguage(
            function (language) {alert('language: ' + language.value + '\n');},
            function () {alert('Error getting language\n');}
          );
        }
        </script>
      </head>
      <body>
        <button onclick="checkLanguage()">クリックして言語を表示</button>
      </body>
    </html>

Windows Phone 8 に関する注意点
-------
- 現在の言語として、 ISO 639-1 言語コード (2文字) を返します。
