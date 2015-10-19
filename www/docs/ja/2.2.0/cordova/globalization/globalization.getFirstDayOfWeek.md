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

title: globalization.getFirstDayOfWeek
---

globalization.getFirstDayOfWeek
===========

クライアントのユーザー設定とカレンダーを元に、週の最初の曜日を返します。

    navigator.globalization.getFirstDayOfWeek(successCB, errorCB);

概要
-----------

週の曜日は 1 から始まり、 1 は日曜日を表します。 successCB コールバック関数に、プロパティーオブジェクトをパラメーターとして曜日を返します。このオブジェクトは数字の ``value`` プロパティーを持っています。

もし曜日の取得中にエラーが発生した場合、 errorCB コールバックが [GlobalizationError](GlobalizationError/globalizationerror.html) オブジェクトをパラメーターとして呼び出されます。このエラーに対するエラーコードは [GlobalizationError](GlobalizationError/globalizationerror.html).UNKNOWN\_ERROR です。


サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iPhone

[使用例](../storage/storage.opendatabase.html)
-------------

ブラウザーのロケールが en\_US に設定されている場合、次のコードは "day: 1" といったような文字列をポップアップダイアログに表示します。

    navigator.globalization.getFirstDayOfWeek(
      function (day) {alert('day: ' + day.value + '\n');},
      function () {alert('Error getting day\n');}
    );

詳細な使用例
------------

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>Cordova</title>
        <script type="text/javascript" charset="utf-8" src="cordova-2.2.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        function checkFirstDay() {
          navigator.globalization.getFirstDayOfWeek(
            function (day) {alert('day: ' + day.value + '\n');},
            function () {alert('Error getting day\n');}
          );
        }

        </script>
      </head>
      <body>
        <button onclick="checkFirstDay()">クリックして週の最初の曜日を表示</button>
      </body>
    </html>

