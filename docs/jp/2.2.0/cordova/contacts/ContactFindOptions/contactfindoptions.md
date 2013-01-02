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

ContactFindOptions
==================

`contacts.find` 関数の検索結果を絞るために使用するプロパティーを表します。

プロパティー
----------

- __filter:__ 絞り込み検索用の文字列を指定します _(DOMString)_ (デフォルト: "")
- __multiple:__ 検索時に複数の連絡先を返すかどうかを指定します _(Boolean)_ (デフォルト: false)


サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iOS
- Bada 1.2 & 2.0

使用例
-------------

    // 呼び出し成功
    function onSuccess(contacts) {
        for (var i=0; i<contacts.length; i++) {
            alert(contacts[i].displayName);
        }
    };

    // 呼び出し失敗
    function onError(contactError) {
        alert('エラーが発生しました。');
    };

    // 検索条件を指定
    var options = new ContactFindOptions();
    options.filter="";          // 空のサーチは全ての連絡先を返す
    options.multiple=true;      // 複数の結果を返す
    filter = ["displayName"];   // contact.displayName フィールドを返す

    // 連絡先を検索します
    navigator.contacts.find(filter, onSuccess, onError, options);

詳細な使用例
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Contact の使用例</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.1.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Cordova の読み込み完了まで待機
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // Cordova 準備完了
        //
        function onDeviceReady() {
            // 検索条件を指定
            var options = new ContactFindOptions();
            options.filter="";          // 空のサーチは全ての連絡先を返す
            options.multiple=true;      // 複数の結果を返す
            filter = ["displayName"];   // contact.displayName フィールドを返す

            // 連絡先を検索します
            navigator.contacts.find(filter, onSuccess, onError, options);
        }

        // onSuccess: 連絡先の取得に成功した場合
        //
        function onSuccess(contacts) {
            for (var i=0; i<contacts.length; i++) {
                alert(contacts[i].displayName);
            }
        };

        // onError: 連絡先の取得に失敗した場合
        //
        function onError(contactError) {
            alert('エラーが発生しました。');
        }

        </script>
      </head>
      <body>
        <h1>使用例</h1>
        <p>連絡先の検索</p>
      </body>
    </html>

Bada に関する注意点
-----------
__filter:__ このプロパティーには次の値のみ適用できます: "firstName", "lastName", "nickname", "phoneNumber", "email", "address"
