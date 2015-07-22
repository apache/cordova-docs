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

# globalization.getDatePattern

クライアントのユーザーの設定に従った日付を解析するパターン文字列を返します。

    navigator.globalization.getDatePattern(successCallback, errorCallback, options);
    

## 説明

パターンを返します、 `successCallback` 。パラメーターとして渡されたオブジェクトには、次のプロパティが含まれています。

*   **パターン**: 書式し、日付を解析する日付と時刻のパターン。 パターンは、Unicode 技術標準 #35 に従ってください。 <http://unicode.org/reports/tr35/tr35-4.html>。 *(文字列)*

*   **タイムゾーン**: クライアントのタイム ゾーンの省略名。*(文字列)*

*   **とおりです。**: クライアントのタイム ゾーンと世界協定時刻間の秒で現在の差異。*(数)*

*   **dst_offset**： クライアントの非夏時間 (秒単位) は、現在の夏時間オフセットのタイムゾーンとクライアントの夏時間保存のタイム ゾーン。*(数)*

パターンを取得時にエラーがある場合、 `errorCallback` で実行する、 `GlobalizationError` オブジェクトをパラメーターとして。 予想されるエラーコードです。`GlobalizationError.PATTERN\_ERROR`.

`options`パラメーターはオプションであり、次の値を既定値します。

    {formatLength: 'ショート' セレクター： '日付と時刻'}
    

`options.formatLength`することができます `short` 、 `medium` 、 `long` 、または `full` 。 `options.selector`することができます `date` 、 `time` または`date and
time`.

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー WebWorks (OS 5.0 およびより高い)
*   iOS
*   Windows Phone 8

## 簡単な例

ブラウザーに設定すると、 `en\_US` ロケール、例など、テキストとポップアップ ダイアログを表示します `pattern: M/d/yyyy h:mm a` :

    function checkDatePattern() {
        navigator.globalization.getDatePattern(
            function (date) { alert('pattern: ' + date.pattern + '\n'); },
            function () { alert('Error getting pattern\n'); },
            { formatLength: 'short', selector: 'date and time' }
        );
    }
    

## 完全な例

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>getDatePattern Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
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
        <button onclick="checkDatePattern()">Click for pattern</button>
      </body>
    </html>
    

## Windows Phone 8 癖

*   `formatLength`のみをサポートしています `short` と `full` の値。

*   `pattern`の `date and time` パターンは完全な datetime 形式のみを返します。

*   `timezone`完全なタイム ゾーン名を返します。

*   `dst_offset`プロパティはサポートされていませんし、常に 0 を返します。