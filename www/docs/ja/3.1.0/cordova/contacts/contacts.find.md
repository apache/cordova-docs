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

# contacts.find

デバイスの連絡先データベースに照会し、1 つまたは複数を返します `Contact` オブジェクトは、指定されたフィールドを含む各。

    navigator.contacts.find(contactFields, contactSuccess, contactError, contactFindOptions);
    

## 説明

`contacts.find`デバイスの連絡先データベースをクエリの配列を返すメソッドは、非同期的に実行されます `Contact` オブジェクト。 結果として得られるオブジェクトに渡される、 `contactSuccess` 、 **contactSuccess**パラメーターで指定されたコールバック関数。

**連絡先**パラメーター検索の修飾子として使用するフィールドを指定してだけこれらの結果は**contactSuccess**コールバック関数に渡されます。 **連絡先**のゼロ長さのパラメーターが無効である結果 `ContactError.INVALID_ARGUMENT_ERROR` 。 **連絡先**値 `"*"` すべての連絡先フィールドを返します。

**ContactFindOptions.filter**文字列の連絡先データベースを照会するときに検索フィルターとして使用できます。 指定した場合、大文字と小文字、部分的な値の一致する**連絡先**パラメーターで指定されたフィールドごとに適用されます。 一致する*任意*指定のフィールドがある場合は、連絡先が返されます。

## パラメーター

*   **連絡先**: 連絡先検索修飾子として使用するフィールド。結果として `Contact` オブジェクトのみ機能のこれらのフィールドの値。*(DOMString[])*[必須]

*   **contactSuccess**: 連絡先で呼び出される成功コールバック関数は、データベースから返されます。[必須]

*   **contactError**: エラー コールバック関数は、エラーが発生したときに呼び出されます。[オプション]

*   **contactFindOptions**: 検索オプションを連絡先をフィルター処理します。[オプション]

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー WebWorks (OS 5.0 およびより高い)
*   iOS
*   Windows Phone 7 と 8
*   Windows 8

## 簡単な例

    function onSuccess(contacts) {
        alert('Found ' + contacts.length + ' contacts.');
    };
    
    function onError(contactError) {
        alert('onError!');
    };
    
    // find all contacts with 'Bob' in any name field
    var options      = new ContactFindOptions();
    options.filter   = "Bob";
    options.multiple = true;
    var fields       = ["displayName", "name"];
    navigator.contacts.find(fields, onSuccess, onError, options);
    

## 完全な例

    <!DOCTYPE html>
    <html>
        <head>
            <title>Contact Example</title>
            <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
            <script type="text/javascript" charset="utf-8">
    
                // Wait for device API libraries to load
                document.addEventListener("deviceready", onDeviceReady, false);
    
                // device APIs are available
    
                function onDeviceReady() {
                    // find all contacts with 'Bob' in any name field
                    var options = new ContactFindOptions();
                    options.filter = "Bob";
                    var fields = ["displayName", "name"];
                    navigator.contacts.find(fields, onSuccess, onError, options);
                }
    
                // onSuccess: Get a snapshot of the current contacts
    
                function onSuccess(contacts) {
                    for (var i = 0; i < contacts.length; i++) {
                        console.log("Display Name = " + contacts[i].displayName);
                    }
                }
    
                // onError: Failed to get the contacts
    
                function onError(contactError) {
                    alert('onError!');
                }
            </script>
        </head>
    
        <body>
            <h1>Example</h1>
            <p>Find Contacts</p>
        </body>
    </html>