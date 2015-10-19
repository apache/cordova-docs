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

title: globalization.getLocaleName
---

globalization.getLocaleName
===========

クライアントの現在のロケールの設定の識別文字列を取得します。

    navigator.globalization.getLocaleName(successCB, errorCB);


概要
-----------

successCB コールバック関数に、プロパティーオブジェクトをパラメーターとしてロケールの識別文字列を返します。このオブジェクトは文字列の ``value`` プロパティーを持っています。

もしロケールの取得中にエラーが発生した場合、 errorCB コールバックが [GlobalizationError](GlobalizationError/globalizationerror.html) オブジェクトをパラメーターとして呼び出されます。このエラーに対するエラーコードは [GlobalizationError](GlobalizationError/globalizationerror.html).UNKNOWN\_ERROR です。


サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iPhone


[使用例](../storage/storage.opendatabase.html)
-------------

ブラウザーのロケールが en\_US に設定された場合、次のコードは "locale: en\_US" という文字列をポップアップダイアログに表示します。

    navigator.globalization.getLocaleName(
      function (locale) {alert('locale: ' + locale.value + '\n');},
      function () {alert('Error getting locale\n');}
    );

詳細な使用例
------------

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>Cordova</title>
        <script type="text/javascript" charset="utf-8" src="cordova-2.2.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        function checkLocale() {
          navigator.globalization.getLocaleName(
            function (locale) {alert('locale: ' + locale.value + '\n');},
            function () {alert('Error getting locale\n');}
          );
        }
        </script>
      </head>
      <body>
        <button onclick="checkLocale()">クリックしてロケールを表示</button>
      </body>
    </html>

