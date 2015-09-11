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
---

# contacts.find

<a href="../device/device.html">デバイス</a>の<a href="parameters/contactFields.html">連絡先</a><a href="../storage/database/database.html">データベース</a>に照会し、1 つまたは複数を返します `Contact` オブジェクトは、指定されたフィールドを含む各。

    navigator.contacts.find(contactFields, <a href="parameters/contactSuccess.html">contactSuccess</a>, <a href="parameters/contactError.html">contactError</a>, <a href="parameters/contactFindOptions.html">contactFindOptions</a>);
    

## 説明

`contacts.find`<a href="../device/device.html">デバイス</a>の<a href="parameters/contactFields.html">連絡先</a><a href="../storage/database/database.html">データベース</a>をクエリの配列を返すメソッドは、非同期的に実行されます `Contact` オブジェクト。 結果として得られるオブジェクトに渡される、 `<a href="parameters/contactSuccess.html">contactSuccess</a>` 、 **<a href="parameters/contactSuccess.html">contactSuccess</a>**パラメーターで指定されたコールバック関数。

**<a href="parameters/contactFields.html">連絡先</a>**パラメーター検索の修飾子として使用するフィールドを指定してだけこれらの結果は**<a href="parameters/contactSuccess.html">contactSuccess</a>**コールバック関数に渡されます。 **<a href="parameters/contactFields.html">連絡先</a>**のゼロ長さのパラメーターが無効である結果 `<a href="ContactError/<a href="parameters/contactError.html">contactError</a>.html">ContactError</a>.INVALID_ARGUMENT_ERROR` 。 **<a href="parameters/contactFields.html">連絡先</a>**値 `"*"` すべての<a href="parameters/contactFields.html">連絡先</a>フィールドを返します。

**<a href="ContactFindOptions/contactfindoptions.html">ContactFindOptions</a>.filter**文字列の<a href="parameters/contactFields.html">連絡先</a><a href="../storage/database/database.html">データベース</a>を照会するときに検索フィルターとして使用できます。 指定した場合、大文字と小文字、部分的な値の一致する**<a href="parameters/contactFields.html">連絡先</a>**パラメーターで指定されたフィールドごとに適用されます。 一致する*任意*指定のフィールドがある場合は、<a href="parameters/contactFields.html">連絡先</a>が返されます。

## パラメーター

*   **<a href="parameters/contactFields.html">連絡先</a>**: <a href="parameters/contactFields.html">連絡先</a>検索修飾子として使用するフィールド。結果として `Contact` オブジェクトのみ機能のこれらのフィールドの値。*(DOMString[])*[必須]

*   **<a href="parameters/contactSuccess.html">contactSuccess</a>**: <a href="parameters/contactFields.html">連絡先</a>で呼び出される成功コールバック関数は、<a href="../storage/database/database.html">データベース</a>から返されます。[必須]

*   **<a href="parameters/contactError.html">contactError</a>**: エラー コールバック関数は、エラーが発生したときに呼び出されます。[オプション]

*   **<a href="parameters/contactFindOptions.html">contactFindOptions</a>**: 検索オプションを<a href="parameters/contactFields.html">連絡先</a>をフィルター処理します。[オプション]

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
    
    function onError(<a href="parameters/contactError.html">contactError</a>) {
        alert('onError!');
    };
    
    // find all contacts with 'Bob' in any name field
    var options      = new <a href="ContactFindOptions/contactfindoptions.html">ContactFindOptions</a>();
    options.filter   = "Bob";
    options.multiple = true;
    var fields       = ["displayName", "name"];
    navigator.contacts.find(fields, onSuccess, onError, options);
    

## 完全な例

    <!DOCTYPE html>
    <html>
        <head>
            <title>Contact <a href="../storage/storage.opendatabase.html">Example</a></title>
            <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
            <script type="text/javascript" charset="utf-8">
    
                // Wait for device API libraries to load
                document.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>("<a href="../events/events.deviceready.html">deviceready</a>", onDeviceReady, false);
    
                // device APIs are available
    
                function onDeviceReady() {
                    // find all contacts with 'Bob' in any name field
                    var options = new <a href="ContactFindOptions/contactfindoptions.html">ContactFindOptions</a>();
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
    
                function onError(<a href="parameters/contactError.html">contactError</a>) {
                    alert('onError!');
                }
            </script>
        </head>
    
        <body>
            <h1><a href="../storage/storage.opendatabase.html">Example</a></h1>
            <p>Find Contacts</p>
        </body>
    </html>