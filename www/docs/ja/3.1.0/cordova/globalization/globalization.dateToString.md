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

# globalization.dateToString

日付を返します、クライアントのロケールおよびタイムゾーンに従って文字列として書式設定されます。

    navigator.globalization.dateToString(date, successCallback, errorCallback, options);
    

## 説明

書式設定された日付を返します `String` を介して、 `value` にパラメーターとして渡されたオブジェクトからアクセス可能なプロパティ、`successCallback`.

受信 `date` パラメーター型である必要があります`Date`.

場合は、日付の書式設定エラーがあるし、 `errorCallback` で実行する、 `GlobalizationError` オブジェクトをパラメーターとして。 予想されるエラーコードです。`GlobalizationError.FORMATTING\_ERROR`.

`options`パラメーターはオプションであり、既定値は。

    {formatLength: 'ショート' セレクター： '日付と時刻'}
    

`options.formatLength`することができます `short` 、 `medium` 、 `long` 、または`full`.

`options.selector`することができます `date` 、 `time` または`date and time`.

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー WebWorks (OS 5.0 およびより高い)
*   iOS
*   Windows Phone 8

## 簡単な例

ブラウザー設定されている場合、 `en\_US` のロケールのようなテキストとポップアップ ダイアログが表示されます `date: 9/25/2012 4:21PM` 既定のオプションを使用して。

    navigator.globalization.dateToString(
        new Date(),
        function (date) { alert('date: ' + date.value + '\n'); },
        function () { alert('Error getting dateString\n'); },
        { formatLength: 'short', selector: 'date and time' }
    );
    

## 完全な例

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>dateToString Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkDateString() {
          navigator.globalization.dateToString(
            new Date(),
            function (date) {alert('date: ' + date.value + '\n');},
            function () {alert('Error getting dateString\n');,
            {formatLength:'short', selector:'date and time'}}
          );
        }
        </script>
      </head>
      <body>
        <button onclick="checkDateString()">Click for date string</button>
      </body>
    </html>
    

## Windows Phone 8 癖

*   `formatLength`オプションをサポートするだけ `short` と `full` の値。