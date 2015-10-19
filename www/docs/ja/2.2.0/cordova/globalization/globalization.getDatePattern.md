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

title: globalization.getDatePattern
---

globalization.getDatePattern
===========

クライアントのユーザー設定を元に、日時のフォーマットと変換のためのパターン文字列を返します。

    navigator.globalization.getDatePattern(successCB, errorCB, options);

概要
-----------

successCB コールバック関数に、プロパティーオブジェクトをパラメーターとしてパターンを返します。このオブジェクトは以下のプロパティーを持っています:

- pattern {String}: 日時のフォーマットと変換のための日付および時間のパターンを表します。このパターンは Unicode Technical Standard #35 に従っています。 <http://unicode.org/reports/tr35/tr35-4.html>
- timezone {String}: クライアントのタイムゾーンの省略名を表します。
- utc\_offset {Number}: クライアントのタイムゾーンと協定世界時との現在の差を秒で表します。
- dst\_offset {Number}: 現在のサマータイム (デイライトセービングタイム) のオフセットを秒で表します。

もしパターン取得中にエラーが発生した場合、 errorCB コールバックが [GlobalizationError](GlobalizationError/globalizationerror.html) オブジェクトをパラメーターとして呼び出されます。このエラーに対するエラーコードは [GlobalizationError](GlobalizationError/globalizationerror.html).PATTERN\_ERROR です。

`options.formatLength` には 'short', 'medium', 'long', または 'full' が指定出来ます。
`options.selector` には 'date', 'time' または 'date and time' が指定出来ます。

デフォルトのオプションは `{formatLength:'short', selector:'date and time'}` です。
この options パラメーターはオプション (任意) です。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iPhone

[使用例](../storage/storage.opendatabase.html)
-------------

ブラウザーのロケールが en\_US に設定されている場合、次のコードは "pattern: M/d/yyyy h:mm a" といったような文字列をポップアップダイアログに表示します。

    function checkDatePattern() {
      navigator.globalization.getDatePattern(
        function (date) {alert('pattern: ' + date.pattern + '\n');},
        function () {alert('Error getting pattern\n');},
        {formatLength:'short', selector:'date and time'}
      );
    }

詳細な使用例
------------

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>Cordova</title>
        <script type="text/javascript" charset="utf-8" src="cordova-2.2.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        function checkDatePattern() {
          navigator.globalization.getDatePattern(
            function (date) {alert('pattern: ' + date.pattern + '\n');},
            function () {alert('Error getting pattern\n');},
            {formatLength:'short', selector:'date and time'}
          );
        }

        </script>
      </head>
      <body>
        <button onclick="checkDatePattern()">クリックしてパターンを表示</button>
      </body>
    </html>

