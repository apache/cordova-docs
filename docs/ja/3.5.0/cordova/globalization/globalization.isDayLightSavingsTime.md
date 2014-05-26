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

# globalization.isDayLightSavingsTime

夏時間の時間が、クライアントのタイム ゾーンとカレンダーを使用して特定の日付に対して有効かどうかを示します。

    navigator.globalization.isDayLightSavingsTime(date, successCallback, errorCallback);
    

## 説明

夏時間が有効にするかどうかを示します、 `successCallback` と、 `properties` オブジェクトをパラメーターとして。 そのオブジェクトが必要な `dst` を持つプロパティ、 `Boolean` 値。 A `true` 値は、夏時間の時間が指定した日付のために有効であることを示しますと `false` がないことを示します。

受信パラメーター `date` 型である必要があります`Date`.

日付を読み取り中にエラーがある場合、 `errorCallback` を実行します。予想されるエラーコードです。`GlobalizationError.UNKNOWN\_ERROR`.

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー WebWorks (OS 5.0 およびより高い)
*   iOS
*   Windows Phone 8

## 簡単な例

夏の間、これでのようなテキストとポップアップ ダイアログを表示するブラウザーは、DST が有効なタイム ゾーンに設定されている場合と `dst: true` ：

    navigator.globalization.isDayLightSavingsTime(
        new Date(),
        function (date) {alert('dst: ' + date.dst + '\n');},
        function () {alert('Error getting names\n');}
    );
    

## 完全な例

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>isDayLightSavingsTime Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
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
        <button onclick="checkDayLightSavings()">Click for daylight savings</button>
      </body>
    </html>