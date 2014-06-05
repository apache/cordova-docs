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

# GlobalizationError

グローバリゼーション API からエラーを表すオブジェクト。

## プロパティ

*   **コード**: エラーの種類を表す次のコードの 1 つ *(数)* 
    *   GlobalizationError.UNKNOWN _ エラー： 0
    *   GlobalizationError.FORMATTING _ エラー: 1
    *   GlobalizationError.PARSING _ エラー: 2
    *   GlobalizationError.PATTERN _ エラー: 3
*   **メッセージ**: エラーの説明が含まれていますおよび/または*(文字列)*の詳細をテキスト メッセージ

## 説明

このオブジェクトが作成され、コルドバ、によって移入エラーの場合のコールバックに返されます。

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー WebWorks (OS 5.0 およびより高い)
*   iOS

## 簡単な例

次のエラー コールバックを実行するのようなテキストとポップアップ ダイアログが表示されます `code: 3` と`message:`

    function errorCallback(error) {
        alert('code: ' + error.code + '\n' +
              'message: ' + error.message + '\n');
    };
    

## 完全な例

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>GlobalizationError Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function successCallback(date) {
          alert('month:' + date.month +
                ' day:' + date.day +
                ' year:' + date.year + '\n');
        }
    
        function errorCallback(error) {
          alert('code: ' + error.code + '\n' +
                'message: ' + error.message + '\n');
        };
    
        function checkError() {
          navigator.globalization.stringToDate(
            'notADate',
            successCallback,
            errorCallback,
            {selector:'foobar'}
          );
        }
    
        </script>
      </head>
      <body>
        <button onclick="checkError()">Click for error</button>
      </body>
    </html>