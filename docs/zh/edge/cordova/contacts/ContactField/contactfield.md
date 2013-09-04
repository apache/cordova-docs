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

# ContactField

支援泛型欄位在 `Contact` 物件。某些屬性存儲作為 `ContactField` 物件包括電子郵件地址、 電話號碼和 Url。

## 屬性

*   **類型**： 一個字串，例如指示哪種類型的欄位這是*回家*。*() DOMString*

*   **值**： 欄位的值，如電話號碼或電子郵件地址。*() DOMString*

*   **上一頁**: 設置為 `true` 如果此 `ContactField` 包含使用者的首選的值。*（布林）*

## 詳細資訊

`ContactField`物件是可重用的元件表示泛指連絡人欄位。 每個 `ContactField` 物件包含 `value` ， `type` ，和 `pref` 屬性。 A `Contact` 物件存儲中的幾個屬性 `ContactField[]` 陣列，如電話號碼和電子郵件地址。

在大多數情況下，沒有任何預先確定的值為 `ContactField` 物件的**type**屬性。 例如，電話號碼可以指定**類型**的*家庭*、*工作*、*移動*、 *iPhone*或由一個特定的設備平臺聯繫資料庫支援的任何其他值的值。 然而，對於 `Contact` **的照片**欄位，**類型**欄位指示返回圖像的格式： **url**的**值**屬性包含的照片圖像或*base64*的 URL 時的**值**包含一個 base64 編碼的圖像字串時。 

## 支援的平臺

*   Android 系統
*   黑莓手機 WebWorks （OS 5.0 和更高）
*   iOS
*   Windows Phone 7 和 8
*   Windows 8

## 快速的示例

        // create a new contact
        var contact = navigator.contacts.create();
    
        // store contact phone numbers in ContactField[]
        var phoneNumbers = [];
        phoneNumbers[0] = new ContactField('work', '212-555-1234', false);
        phoneNumbers[1] = new ContactField('mobile', '917-555-5432', true); // preferred number
        phoneNumbers[2] = new ContactField('home', '203-555-7890', false);
        contact.phoneNumbers = phoneNumbers;
    
        // save the contact
        contact.save();
    

## 完整的示例

    <!DOCTYPE html>
    <html>
      <head>
        <title>Contact Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
    
        function onDeviceReady() {
            // create a new contact
            var contact = navigator.contacts.create();
    
            // store contact phone numbers in ContactField[]
            var phoneNumbers = [];
            phoneNumbers[0] = new ContactField('work', '212-555-1234', false);
            phoneNumbers[1] = new ContactField('mobile', '917-555-5432', true); // preferred number
            phoneNumbers[2] = new ContactField('home', '203-555-7890', false);
            contact.phoneNumbers = phoneNumbers;
    
            // save the contact
            contact.save();
    
            // search contacts, returning display name and phone numbers
            var options = new ContactFindOptions();
            options.filter = "";
            filter = ["displayName", "phoneNumbers"];
            navigator.contacts.find(filter, onSuccess, onError, options);
        }
    
        // onSuccess: Get a snapshot of the current contacts
        //
        function onSuccess(contacts) {
            for (var i = 0; i < contacts.length; i++) {
                // display phone numbers
                for (var j = 0; j < contacts[i].phoneNumbers.length; j++) {
                    alert("Type: "      + contacts[i].phoneNumbers[j].type  + "\n" +
                          "Value: "     + contacts[i].phoneNumbers[j].value + "\n" +
                          "Preferred: " + contacts[i].phoneNumbers[j].pref);
                }
            }
        };
    
        // onError: Failed to get the contacts
        //
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
    

## Android 的怪癖

*   **上一頁**: 不受支援，返回`false`.

## 黑莓手機 WebWorks （OS 5.0 和更高） 的怪癖

*   **類型**： 部分支援。使用的電話號碼。

*   **值**： 支援。

*   **上一頁**: 不受支援，返回`false`.

## iOS 的怪癖

*   **上一頁**: 不受支援，返回`false`.