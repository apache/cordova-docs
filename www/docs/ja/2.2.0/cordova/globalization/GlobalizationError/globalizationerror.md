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

title: GlobalizationError
---

GlobalizationError
============

[Globalization](../globalization.html) API からのエラーを表すオブジェクトです。

プロパティー
----------

- __code:__  以下のエラータイプを表すコードのうちの1つを表します (`Number`)
  - GlobalizationError.UNKNOWN\_ERROR: 0
  - GlobalizationError.FORMATTING\_ERROR: 1
  - GlobalizationError.PARSING\_ERROR: 2
  - GlobalizationError.PATTERN\_ERROR: 3
- __message:__  エラーの内容を表すエラーメッセージを表します (`String`)

概要
-----------

このオブジェクトは Cordova によって作られ、エラー発生時にコールバック関数に渡されます。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iOS

[使用例](../../storage/storage.opendatabase.html)
-------------

以下のエラーコールバックが呼び出されるとき、 "code: 3" と "message: " といったような文字列とともにポップアップダイアログが表示されます。

    function errorCB(error) {
        alert('code: ' + error.code + '\n' +
              'message: ' + error.message + '\n');
    };

詳細な使用例
------------

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>Cordova</title>
        <script type="text/javascript" charset="utf-8" src="cordova-2.2.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        function successCB(date) {
          alert('month:' + date.month +
                ' day:' + date.day +
                ' year:' + date.year + '\n');
        }

        function errorCB(error) {
          alert('code: ' + error.code + '\n' +
                'message: ' + error.message + '\n');
        };

        function checkError() {
          navigator.globalization.stringToDate(
            'notADate',
            successCB,
            errorCB,
            {selector:'foobar'}
          );
        }

        </script>
      </head>
      <body>
        <button onclick="checkError()">クリックしてエラーを発生</button>
      </body>
    </html>

