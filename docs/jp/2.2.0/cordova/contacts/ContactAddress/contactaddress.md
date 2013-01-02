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

ContactAddress
==============

`Contact` オブジェクトの住所プロパティーを表します。

プロパティー
----------
- __pref:__ `ContactAddress` がユーザーの推奨値を含むかどうかを表します。含む場合、 `true` がセットされます _(boolean)_
- __type:__ フィールドのタイプを表します (例: 'home') _(DOMString)_
- __formatted:__ 住所全体を表します _(DOMString)_
- __streetAddress:__ 番地を表します _(DOMString)_
- __locality:__ 都市名を表します _(DOMString)_
- __region:__ 地域名を表します _(DOMString)_
- __postalCode:__ 郵便番号を表します _(DOMString)_
- __country:__ 国を表します _(DOMString)_

詳細
-------

`ContactAddress` オブジェクトは連絡先の住所に関するプロパティーを表します。 `Contact` オブジェクトは、複数の住所が格納された `ContactAddress[]` 配列を保持しています。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iOS
- Bada 1.2 & 2.0

使用例
-------------

    // すべての連絡先の住所情報を取得し、表示します
    function onSuccess(contacts) {
        for (var i=0; i<contacts.length; i++) {
            for (var j=0; j<contacts[i].addresses.length; j++) {
                alert("推奨値: " + contacts[i].addresses[j].pref + "\n" +
                        "タイプ: " + contacts[i].addresses[j].type + "\n" +
                        "住所: " + contacts[i].addresses[j].formatted + "\n" +
                        "番地: " + contacts[i].addresses[j].streetAddress + "\n" +
                        "都市名: " + contacts[i].addresses[j].locality + "\n" +
                        "地域名: " + contacts[i].addresses[j].region + "\n" +
                        "郵便番号: " + contacts[i].addresses[j].postalCode + "\n" +
                        "国名: " + contacts[i].addresses[j].country);
            }
        }
    };

    function onError(contactError) {
        alert('エラーが発生しました。');
    };

    // 連絡先を検索します
    var options = new ContactFindOptions();
    options.filter="";
    var filter = ["displayName","addresses"];
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
            // find all contacts
            var options = new ContactFindOptions();
            options.filter="";
            var filter = ["displayName","addresses"];
            navigator.contacts.find(filter, onSuccess, onError, options);
        }

        // onSuccess: 連絡先の取得に成功した場合
        //
        function onSuccess(contacts) {
            // すべての連絡先の住所情報を取得し、表示します
            for (var i=0; i<contacts.length; i++) {
                for (var j=0; j<contacts[i].addresses.length; j++) {
                    alert("推奨値: " + contacts[i].addresses[j].pref + "\n" +
                            "タイプ: " + contacts[i].addresses[j].type + "\n" +
                            "住所: " + contacts[i].addresses[j].formatted + "\n" +
                            "番地: " + contacts[i].addresses[j].streetAddress + "\n" +
                            "都市名: " + contacts[i].addresses[j].locality + "\n" +
                            "地域名: " + contacts[i].addresses[j].region + "\n" +
                            "郵便番号: " + contacts[i].addresses[j].postalCode + "\n" +
                            "国名: " + contacts[i].addresses[j].country);
                }
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

Android 2.X に関する注意点
------------------

- __pref:__ このプロパティーは Android 2.X ではサポートされておらず、常に `false` を返します。

Android 1.X に関する注意点
------------------

- __pref:__ このプロパティーは Android 1.X ではサポートされておらず、常に `false` を返します。
- __type:__ このプロパティーは Android 1.X ではサポートされておらず、常に `null` を返します。
- __streetAddress:__ このプロパティーは Android 1.X ではサポートされておらず、常に `null` を返します。
- __locality:__ このプロパティーは Android 1.X ではサポートされておらず、常に `null` を返します。
- __region:__ このプロパティーは Android 1.X ではサポートされておらず、常に `null` を返します。
- __postalCode:__ このプロパティーは Android 1.X ではサポートされておらず、常に `null` を返します。
- __country:__ このプロパティーは Android 1.X ではサポートされておらず、常に `null` を返します。

BlackBerry WebWorks (OS 5.0 and higher) に関する注意点
--------------------------------------------

- __pref:__ このプロパティーは BlackBerry ではサポートされておらず、常に `false` を返します。
- __type:__ 部分的にサポートされています。 一つの連絡先につき、一つずつの "Work" と "Home" タイプの住所が保存できます。
- __formatted:__ 部分的にサポートされています。 BlackBerry のアドレスフィールドの連結を返します。
- __streetAddress:__ サポートされています。 BlackBerry の __address1__ と __address2__ アドレスフィールドの連結を返します。
- __locality:__ サポートされています。 BlackBerry の __city__ アドレスフィールドに保存されます。
- __region:__ サポートされています。 BlackBerry の __stateProvince__ アドレスフィールドに保存されます。
- __postalCode:__ サポートされています。 BlackBerry の __zipPostal__ アドレスフィールドに保存されます。
- __country:__ サポートされています。

iOS に関する注意点
----------

- __pref:__ このプロパティーは iOS ではサポートされておらず、常に `false` を返します。
- __formatted:__ サポートされていません。

Bada に関する注意点
-----------
- __formatted:__ このプロパティーはサポートされていません。
- __type:__ WORK か HOME かのいずれかである必要があります。
