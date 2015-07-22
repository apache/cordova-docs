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

title: globalization.isDayLightSavingsTime
---

globalization.isDayLightSavingsTime
===========

クライアントのタイムゾーンとカレンダーを元に、夏時間が与えられた日付で有効かどうかを返します。

    navigator.globalization.isDayLightSavingsTime(date, successCB, errorCB);

概要
-----------

successCB コールバック関数に、プロパティーオブジェクトをパラメーターとして夏時間かどうかを返します。このオブジェクトは Boolean の ``dst`` プロパティーを持っています。 'true' は夏時間が現在有効であること、 'false' はそうでないことを表します。

引数の ``date`` パラメーターは ``Date`` 型である必要があります。

もし日付の読み取り中にエラーが発生した場合、 errorCB コールバックが呼び出されます。このエラーに対するエラーコードは [GlobalizationError](GlobalizationError/globalizationerror.html).UNKNOWN\_ERROR です。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iPhone

[使用例](../storage/storage.opendatabase.html)
-------------

ブラウザーが DST が有効なタイムゾーンで、夏の場合、次のコードは "dst: true" といったような文字列をポップアップダイアログに表示します。

    navigator.globalization.isDayLightSavingsTime(
      new Date(),
      function (date) {alert('dst: ' + date.dst + '\n');},
      function () {alert('Error getting names\n');}
    );

詳細な使用例
------------

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>Cordova</title>
        <script type="text/javascript" charset="utf-8" src="cordova-2.2.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        function checkDayLightSavings() {
          navigator.globalization.isDayLightSavingsTime(
            new Date(),
            function (date) {alert('dst: ' + date.dst + '\n');},
            function () {alert('Error getting names\n');}
          );
        }

        </script>
      </head>
      <body>
        <button onclick="checkDayLightSavings()">クリックして夏時間かどうかを表示</button>
      </body>
    </html>

