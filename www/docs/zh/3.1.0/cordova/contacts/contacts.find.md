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

查詢<a href="../device/device.html">設備</a><a href="contacts.html">連絡人</a><a href="../storage/database/database.html">資料庫</a>，並返回一個或多個 `Contact` 物件，每個包含指定的欄位。

    navigator.contacts.find(<a href="parameters/contactFields.html">contactFields</a>, <a href="parameters/contactSuccess.html">contactSuccess</a>, <a href="parameters/contactError.html">contactError</a>, <a href="parameters/contactFindOptions.html">contactFindOptions</a>);
    

## 說明

`contacts.find`方法以非同步方式，執行<a href="../device/device.html">設備</a>的<a href="contacts.html">連絡人</a><a href="../storage/database/database.html">資料庫</a>查詢並返回一個陣列的 `Contact` 物件。 所得到的物件傳遞給 `<a href="parameters/contactSuccess.html">contactSuccess</a>` **<a href="parameters/contactSuccess.html">contactSuccess</a>**參數所指定的回呼函數。

**<a href="ContactField/contactfield.html">ContactField</a>s**參數指定要搜索的限定詞，作為使用的欄位，只有那些結果傳遞給**<a href="parameters/contactSuccess.html">contactSuccess</a>**回呼函數。 零長度**<a href="parameters/contactFields.html">contactFields</a>**參數是不正確結果在 `<a href="ContactError/<a href="parameters/contactError.html">contactError</a>.html">ContactError</a>.INVALID_ARGUMENT_ERROR` 。 **<a href="ContactField/contactfield.html">ContactField</a>s**值為 `"*"` 返回所有<a href="contacts.html">連絡人</a>欄位。

**<a href="ContactFindOptions/contactfindoptions.html">ContactFindOptions</a>.filter**字串查詢<a href="contacts.html">連絡人</a><a href="../storage/database/database.html">資料庫</a>時，可以用作搜索篩選器。 如果提供，不區分大小寫，部分值匹配應用於在**<a href="parameters/contactFields.html">contactFields</a>**參數中指定的每個欄位。 如果有*任何*指定的欄位的匹配，則返回該<a href="contacts.html">連絡人</a>。

## 參數

*   **<a href="parameters/contactFields.html">contactFields</a>**： <a href="contacts.html">連絡人</a>欄位使用作為搜索的限定詞。生成的 `Contact` 物件只能使用這些欄位的值。*(DOMString[])*[要求]

*   **<a href="parameters/contactSuccess.html">contactSuccess</a>**： 從<a href="../storage/database/database.html">資料庫</a>返回成功回呼函數調用時使用的<a href="contacts.html">連絡人</a>。[要求]

*   **<a href="parameters/contactError.html">contactError</a>**： 錯誤回呼函數，當發生錯誤時調用。[可選]

*   **<a href="parameters/contactFindOptions.html">contactFindOptions</a>**: 搜索選項，以過濾<a href="contacts.html">連絡人</a>。[可選]

## 支援的平臺

*   Android 系統
*   黑莓手機 WebWorks （OS 5.0 和更高）
*   iOS
*   Windows Phone 7 和 8
*   Windows 8

## 快速的示例

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
    

## 完整的示例

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