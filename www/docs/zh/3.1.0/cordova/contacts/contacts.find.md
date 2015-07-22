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

查詢設備連絡人資料庫，並返回一個或多個 `Contact` 物件，每個包含指定的欄位。

    navigator.contacts.find(contactFields, contactSuccess, contactError, contactFindOptions);
    

## 說明

`contacts.find`方法以非同步方式，執行設備的連絡人資料庫查詢並返回一個陣列的 `Contact` 物件。 所得到的物件傳遞給 `contactSuccess` **contactSuccess**參數所指定的回呼函數。

**ContactFields**參數指定要搜索的限定詞，作為使用的欄位，只有那些結果傳遞給**contactSuccess**回呼函數。 零長度**contactFields**參數是不正確結果在 `ContactError.INVALID_ARGUMENT_ERROR` 。 **ContactFields**值為 `"*"` 返回所有連絡人欄位。

**ContactFindOptions.filter**字串查詢連絡人資料庫時，可以用作搜索篩選器。 如果提供，不區分大小寫，部分值匹配應用於在**contactFields**參數中指定的每個欄位。 如果有*任何*指定的欄位的匹配，則返回該連絡人。

## 參數

*   **contactFields**： 連絡人欄位使用作為搜索的限定詞。生成的 `Contact` 物件只能使用這些欄位的值。*(DOMString[])*[要求]

*   **contactSuccess**： 從資料庫返回成功回呼函數調用時使用的連絡人。[要求]

*   **contactError**： 錯誤回呼函數，當發生錯誤時調用。[可選]

*   **contactFindOptions**: 搜索選項，以過濾連絡人。[可選]

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
    
    function onError(contactError) {
        alert('onError!');
    };
    
    // find all contacts with 'Bob' in any name field
    var options      = new ContactFindOptions();
    options.filter   = "Bob";
    options.multiple = true;
    var fields       = ["displayName", "name"];
    navigator.contacts.find(fields, onSuccess, onError, options);
    

## 完整的示例

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