---

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

   under the License.
---

# globalization.stringToDate

クライアントのユーザーの基本設定や、クライアントのタイム ゾーンを使用して予定表によると、文字列として書式設定された日付を解析し、対応する日付オブジェクトを返します。

    navigator.globalization.stringToDate(dateString, successCallback, errorCallback, options);
    

## 説明

日付の成功時のコールバックを返します、 `properties` オブジェクトをパラメーターとして。そのオブジェクトは、次のプロパティが必要です。

*   **年**： 4 桁の年。*(数)*

*   **月**: (0-11) から 1 カ月。*(数)*

*   **日**: 日 (1 から 31)。*(数)*

*   **時間**: 時間 (0-23) から。*(数)*

*   **分**: (0-59） から分です。*(数)*

*   **2 番目**: (0-59） から 2 番目。*(数)*

*   **ミリ秒**： 時間をミリ秒単位 (0 ～ 999) まですべてのプラットフォームでは利用できません。*(数)*

受信 `dateString` パラメーター型である必要があります`String`.

`options`パラメーターはオプションであり、次の値を既定値します。

    {formatLength: 'ショート' セレクター： '日付と時刻'}
    

`options.formatLength`することができます `short` 、 `medium` 、 `long` 、または `full` 。 `options.selector`することができます `date` 、 `time` または`date and
time`.

日付文字列の解析エラーがある場合、 `errorCallback` で実行する、 `GlobalizationError` オブジェクトをパラメーターとして。 予想されるエラーコードです。`GlobalizationError.PARSING\_ERROR`.

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー WebWorks (OS 5.0 およびより高い)
*   iOS
*   Windows Phone 8

## 簡単な例

ブラウザーに設定すると、 `en\_US` のロケールのようなテキストとポップアップ ダイアログが表示されます `month:8 day:25 year:2012` 。 注意： 整数は 1 ヶ月未満の文字列、月整数として配列のインデックスを表します。

    navigator.globalization.stringToDate(
        '9/25/2012',
        function (date) {alert('month:' + date.month +
                               ' day:'  + date.day   +
                               ' year:' + date.year  + '\n');},
        function () {alert('Error getting date\n');},
        {selector: 'date'}
    );
    

## 完全な例

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>stringToDate Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkStringDate() {
          navigator.globalization.stringToDate(
            '9/25/2012',
            function (date) {alert('month:' + date.month +
                                   ' day:' + date.day +
                                   ' year:' + date.year + '\n');},
            function () {alert('Error getting date\n');},
            {selector:'date'}
          );
        }
    
        </script>
      </head>
      <body>
        <button onclick="checkStringDate()">Click for parsed date</button>
      </body>
    </html>
    

## Windows Phone 8 癖

*   `formatLength`オプションをサポートするだけ `short` と `full` の値。