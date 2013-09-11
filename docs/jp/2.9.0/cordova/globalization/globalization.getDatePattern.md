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

globalization.getDatePattern
===========

クライアントのユーザー設定を元に、日時のフォーマットと変換のためのパターン文字列を返します。

    navigator.globalization.getDatePattern(successCallback, errorCallback, options);

概要
-----------

`successCallback` コールバック関数に、プロパティーオブジェクトをパラメーターとしてパターンを返します。このオブジェクトは以下のプロパティーを持っています:

- __pattern__: 日時のフォーマットと変換のための日付および時間のパターンを表します。このパターンは Unicode Technical Standard #35 に従っています。 <http://unicode.org/reports/tr35/tr35-4.html>  _(String)_
- __timezone__: クライアントのタイムゾーンの省略名を表します。  _(String)_
- __utc\_offset__: クライアントのタイムゾーンと協定世界時との現在の差を秒で表します。 _(Number)_
- __dst\_offset__: 現在のサマータイム (デイライトセービングタイム) のオフセットを秒で表します。 _(Number)_

もしパターン取得中にエラーが発生した場合、 `errorCallback` コールバックが `GlobalizationError` オブジェクトをパラメーターとして呼び出されます。このエラーに対するエラーコードは `GlobalizationError.PATTERN_ERROR` です。

options パラメーターはオプション (任意) ですあり、デフォルト値は以下の通りです:

    {formatLength: 'short', selector: 'date and time'}


`options.formatLength` には `short`, `medium`, `long`, または `full` が指定出来ます。 `options.selector` には `date`, `time` または `date and time` が指定出来ます。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iOS
- Windows Phone 8

使用例
-------------

ブラウザーのロケールが `en_US` に設定されている場合、次のコードは `pattern: M/d/yyyy h:mm a` といったような文字列をポップアップダイアログに表示します。

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
        <script type="text/javascript" charset="utf-8" src="cordova-x.x.x.js"></script>
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


Windows Phone 8 に関する注意点
--------------

- `formatLength` は `short` と `full` のみサポートしています。
- `date and time` が指定されている場合、 `pattern` は日時とタイムゾーンを含むフォーマットを返します。
- `timezone` はタイムゾーンの正式名称を返します。
- `dst_offset` プロパティはサポートされておらず、常に 0 を返します。
