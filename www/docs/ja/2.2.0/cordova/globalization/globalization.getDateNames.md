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

title: globalization.getDateNames
---

globalization.getDateNames
===========

クライアントのユーザー設定とカレンダーを元に、月と曜日の名前の配列を返します。

    navigator.globalization.getDateNames(successCB, errorCB, options);

概要
-----------

successCB コールバック関数に、プロパティーオブジェクトをパラメーターとして名前の配列を返します。このオブジェクトは文字列配列の ``value`` プロパティーを持っています。この文字列配列は、オプションで何が選択されたかによって、最初の月もしくは最初の曜日の名前から始まります。

もし名前の取得中にエラーが発生した場合、 errorCB コールバックが [GlobalizationError](GlobalizationError/globalizationerror.html) オブジェクトをパラメーターとして呼び出されます。このエラーに対するエラーコードは [GlobalizationError](GlobalizationError/globalizationerror.html).UNKNOWN\_ERROR です。

`options.type` には 'narrow' または 'wide' が指定出来ます。
`options.item` には 'months' または 'days' が指定出来ます。

デフォルトのオプションは `{type:'wide', item:'months'}` です。
この `options` パラメーターはオプション (任意) です。


サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iPhone

[使用例](../storage/storage.opendatabase.html)
-------------

ブラウザーのロケールが en\_US に設定されている場合、次のコードは 12 個のポップアップダイアログを次々と表示します。それぞれのポップアップダイアログには、 "month: January" といったような文字列が表示されます。

    navigator.globalization.getDateNames(
      function (names) {
        for (var i=0; i<names.value.length; i++) {
          alert('month: ' + names.value[i] + '\n');
        }
      },
      function () {alert('Error getting names\n');},
      {type:'wide', item:'months'}
    );


詳細な使用例
------------

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>Cordova</title>
        <script type="text/javascript" charset="utf-8" src="cordova-2.2.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        function checkDateNames() {
          navigator.globalization.getDateNames(
            function (names) {
              for (var i=0; i<names.value.length; i++) {
                alert('month: ' + names.value[i] + '\n');
              }
            },
            function () {alert('Error getting names\n');},
            {type:'wide', item:'months'}
          );
        }

        </script>
      </head>
      <body>
        <button onclick="checkDateNames()">クリックして月の名前を表示</button>
      </body>
    </html>

