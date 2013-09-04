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

# 連絡人

包含描述聯繫，如使用者的個人或業務連絡人的屬性。

## 屬性

*   **id**： 一個全域唯一識別碼。*() DOMString*

*   **顯示名稱**： 此連絡人，適合於向最終使用者顯示的名稱。*() DOMString*

*   **名稱**： 包含所有元件的人的名稱的物件。*(連絡人姓名)*

*   **昵稱**: 休閒的解決連絡人名稱。*() DOMString*

*   **手機**： 一個陣列的所有連絡人的電話號碼。*(ContactField[])*

*   **電子郵件**： 所有連絡人的電子郵件地址的陣列。*(ContactField[])*

*   **位址**： 該連絡人的所有位址的陣列。*(ContactAddress[])*

*   **ims**： 所有連絡人的 IM 位址的陣列。*(ContactField[])*

*   **組織**： 該連絡人的所有組織的陣列。*(ContactOrganization[])*

*   **生日**： 連絡人的生日。*（日期）*

*   **注**： 有關連絡人的注釋。*() DOMString*

*   **照片**： 陣列連絡人的照片。*(ContactField[])*

*   **類別**： 陣列與連絡人關聯的所有使用者定義的類別。*(ContactField[])*

*   **url**： 陣列與連絡人關聯的 web 頁。*(ContactField[])*

## 方法

*   **克隆**： 返回一個新的 `Contact` 物件就是調用物件的深層副本 `id` 屬性設置為`null`.

*   **刪除**： 從設備的連絡人資料庫中刪除連絡人，否則執行錯誤回檔與 `ContactError` 物件。

*   **保存**： 將一個新的連絡人保存到設備的連絡人資料庫中，或更新現有的連絡人 （如果已存在具有相同**id**的連絡人。

## 詳細資訊

`Contact`物件表示使用者的連絡人。 可以創建、 存儲，或從設備的連絡人資料庫中刪除的連絡人。 連絡人可以還 (單獨或批量） 從資料庫中檢索通過調用 `contacts.find` 方法。

**注：**不是所有的上面列出的連絡人欄位平臺支援的每個設備。請檢查每個平臺*的怪癖*節瞭解詳細資訊。

## 支援的平臺

*   Android 系統
*   黑莓手機 WebWorks （OS 5.0 和更高）
*   iOS
*   Windows Phone 7 和 8
*   Windows 8

## 保存快速示例

    function onSuccess(contact) {
        alert("Save Success");
    };
    
    function onError(contactError) {
        alert("Error = " + contactError.code);
    };
    
    // create a new contact object
    var contact = navigator.contacts.create();
    contact.displayName = "Plumber";
    contact.nickname = "Plumber";            // specify both to support all devices
    
    // populate some fields
    var name = new ContactName();
    name.givenName = "Jane";
    name.familyName = "Doe";
    contact.name = name;
    
    // save to device
    contact.save(onSuccess,onError);
    

## 克隆快速示例

        // clone the contact object
        var clone = contact.clone();
        clone.name.givenName = "John";
        console.log("Original contact name = " + contact.name.givenName);
        console.log("Cloned contact name = " + clone.name.givenName);
    

## 刪除快速示例

    function onSuccess() {
        alert("Removal Success");
    };
    
    function onError(contactError) {
        alert("Error = " + contactError.code);
    };
    
        // remove the contact from the device
        contact.remove(onSuccess,onError);
    

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
            // create
            var contact = navigator.contacts.create();
            contact.displayName = "Plumber";
            contact.nickname = "Plumber";                 // specify both to support all devices
            var name = new ContactName();
            name.givenName = "Jane";
            name.familyName = "Doe";
            contact.name = name;
    
            // save
            contact.save(onSaveSuccess,onSaveError);
    
            // clone
            var clone = contact.clone();
            clone.name.givenName = "John";
            console.log("Original contact name = " + contact.name.givenName);
            console.log("Cloned contact name = " + clone.name.givenName);
    
            // remove
            contact.remove(onRemoveSuccess,onRemoveError);
        }
    
        // onSaveSuccess: Get a snapshot of the current contacts
        //
        function onSaveSuccess(contact) {
            alert("Save Success");
        }
    
        // onSaveError: Failed to get the contacts
        //
        function onSaveError(contactError) {
            alert("Error = " + contactError.code);
        }
    
        // onRemoveSuccess: Get a snapshot of the current contacts
        //
        function onRemoveSuccess(contacts) {
            alert("Removal Success");
        }
    
        // onRemoveError: Failed to get the contacts
        //
        function onRemoveError(contactError) {
            alert("Error = " + contactError.code);
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>Find Contacts</p>
      </body>
    </html>
    

## Android 2.X 的怪癖

*   **類別**： 不支援 Android 2.X 設備上，返回`null`.

## 黑莓手機 WebWorks （OS 5.0 和更高） 的怪癖

*   **id**： 支援。由該設備分配時保存該連絡人。

*   **顯示名稱**： 支援。黑莓**user1**欄位中存儲。

*   **昵稱**: 不受支援，返回`null`.

*   **手機**： 部分支援。 電話號碼存儲在黑莓的欄位**homePhone1**和**homePhone2**中，如果*類型*是 '回家'， **workPhone1**和**workPhone2**如果*類型*是 '工作'，**手機**如果*類型*為行動電話， **faxPhone** ，如果*類型*是傳真， **pagerPhone** ，如果*類型*是 '呼叫器' 和**otherPhone**如果*類型*是以上都不是。

*   **電子郵件**： 部分支援。 第三個電子郵件地址分別存儲在黑莓**電子郵件 1**，**電子郵件 2**、**電子郵件 3**欄位。

*   **位址**： 部分支援。第一和第二個位址分別存儲在黑莓**家庭位址**和**workAddress**欄位中。

*   **ims**: 不受支援，返回`null`.

*   **組織**： 部分支援。 **名稱**和**標題**的第一個組織存儲在黑莓**公司**和**標題**欄位中，分別。

*   **照片**： 部分支援。 支援單一的縮略圖大小的照片。 若要設置連絡人的照片，通過在任一 base64 編碼的圖像或指向圖像的 URL。 圖像保存到黑莓手機的連絡人資料庫前按比例縮小。 連絡人照片返回 base64 編碼的圖像。

*   **類別**： 部分支援。支援的只有*商業*和*個人*的類別。

*   **url**： 部分支援。第一個 URL 存儲在黑莓手機**網頁**欄位中。

## iOS 的怪癖

*   **顯示名稱**： 上返回的 iOS 不支援 `null` 除非有沒有 `ContactName` 指定，在這種情況下它將返回複合名稱，**綽號**或 `""` ，分別。

*   **生日**： 必須輸入 JavaScript 作為 `Date` 物件，它將返回相同的方式。

*   **照片**： 返回到圖像，存儲在應用程式的臨時目錄中的檔的 URL。當應用程式退出時刪除臨時目錄的內容。

*   **類別**： 這目前不支援屬性，返回`null`.

## Windows Phone 7 和 8 怪癖

*   **顯示名稱**： 當創建一個連絡人，提供的顯示名稱參數不同于顯示名稱的值檢索查找連絡人時。

*   **url**： 當創建一個連絡人，使用者可以輸入和保存多個 web 位址，但只有一個是可用時，可以使用搜索連絡人。

*   **手機**： 不支援*參照*選項。 在*查找*操作中不是支援的*類型*。 只有一個 `phoneNumber` 允許為每個*類型*.

*   **電子郵件**：*參照*選項不受支援。家庭和個人使用引用同一電子郵件項。只有一項被允許為每個*類型*.

*   **位址**： 僅支援工作和家庭/個人*類型*。家庭和個人*類型*引用相同的位址條目。只有一項被允許為每個*類型*.

*   **組織**： 唯一一個允許的並且不支援的*治安*、*類型*和*新聞部*的屬性。

*   **注意**： 不支援返回`null`.

*   **ims**: 不受支援，返回`null`.

*   **生日**: 不受支援，返回`null`.

*   **類別**: 不受支援，返回`null`.