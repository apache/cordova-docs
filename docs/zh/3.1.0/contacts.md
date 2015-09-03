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


# 連絡人

> `contacts`物件提供對設備的連絡人資料庫的訪問。

**重要的隱私注：**連絡人資料的收集和使用提出了重要的隱私問題。 您的應用程式的隱私權原則應該討論如何應用程式使用的連絡人資料和它是否被共用與任何其他方。 聯繫資訊被視為敏感，因為它揭示了人與人通信的人們。 因此，除了您的應用程式的隱私權原則，您應強烈考慮提供在您的應用程式訪問或使用連絡人資料 （如果設備作業系統不會這樣做已經） 之前的時間只是通知。 該通知應提供相同的資訊上文指出的並獲取該使用者的許可權 （例如，通過為**確定**並**不感謝**提出的選擇）。 請注意有些應用程式市場可能需要您的應用程式提供只是時間的通知，並從訪問連絡人資料之前使用者獲得的許可權。 周圍的連絡人資料將有助於避免使用者混淆使用感知的和濫用的連絡人資料的清晰和易於理解的使用者體驗。 有關詳細資訊，請參閱隱私指南。

## 方法

*   contacts.create
*   contacts.find

## 參數

*   contactFields
*   contactSuccess
*   contactError
*   contactFindOptions

## 物件

*   連絡人
*   連絡人姓名
*   ContactField
*   ContactAddress
*   ContactOrganization
*   ContactFindOptions
*   ContactError

## 訪問功能

從 3.0 版，科爾多瓦作為*外掛程式*實現了設備級 Api。 使用 CLI 的 `plugin` 命令，描述在命令列介面，可以添加或刪除一個專案，為此功能：

        $ cordova plugin add org.apache.cordova.contacts
        $ cordova plugin ls
        [ 'org.apache.cordova.contacts' ]
        $ cordova plugin rm org.apache.cordova.contacts
    

這些命令適用于所有有針對性的平臺，但修改如下所述的特定于平臺的配置設置：

*   Android 系統
    
        (in app/res/xml/config.xml)
        <feature name="Contacts">
            <param name="android-package" value="org.apache.cordova.ContactManager" />
        </feature>
        
        (in app/AndroidManifest.xml)
        <uses-permission android:name="android.permission.GET_ACCOUNTS" />
        <uses-permission android:name="android.permission.READ_CONTACTS" />
        <uses-permission android:name="android.permission.WRITE_CONTACTS" />
        

*   黑莓手機 WebWorks
    
        (in www/plugins.xml)
        <feature name="Contact">
            <param name="blackberry-package" value="org.apache.cordova.pim.Contact" />
        </feature>
        
        (in www/config.xml)
        <feature id="blackberry.find"        required="true" version="1.0.0.0" />
        <feature id="blackberry.identity"    required="true" version="1.0.0.0" />
        <feature id="blackberry.pim.Address" required="true" version="1.0.0.0" />
        <feature id="blackberry.pim.Contact" required="true" version="1.0.0.0" />
        

*   （在 iOS`config.xml`)
    
        <feature name="Contacts">
            <param name="ios-package" value="CDVContacts" />
        </feature>
        

*   Windows Phone
    
        (in Properties/WPAppManifest.xml)
        <Capabilities>
            <Capability Name="ID_CAP_CONTACTS" />
        </Capabilities>
        
    
    引用：[為 Windows Phone 應用程式清單][1]

 [1]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx

一些平臺可能支援此功能，而無需任何特殊的配置。請參見在概述部分中*的平臺支援*。


# contacts.create

返回一個新的連絡人物件。

    var contact = navigator.contacts.create(properties);
    

## 說明

`contacts.create`方法是同步的並返回一個新的 `Contact` 物件。

此方法不會保留連絡人物件在設備的連絡人資料庫中，您需要為其調用 `Contact.save` 方法。

## 支援的平臺

*   Android 系統
*   黑莓手機 WebWorks （OS 5.0 和更高）
*   iOS
*   Windows Phone 7 和 8

## 快速的示例

    var myContact = navigator.contacts.create({"displayName": "Test User"});
    

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
            var myContact = navigator.contacts.create({"displayName": "Test User"});
            myContact.note = "This contact has a note.";
            console.log("The contact, " + myContact.displayName + ", note: " + myContact.note);
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>Create Contact</p>
      </body>
    </html>


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


# ContactAddress

包含位址屬性的 `Contact` 物件。

## 屬性

*   **上一頁**: 設置為 `true` 如果此 `ContactAddress` 包含使用者的首選的值。*（布林）*

*   **類型**： 一個字串，例如指示哪種類型的欄位這是*回家*。*() DOMString*

*   **格式**： 顯示格式的完整位址。*() DOMString*

*   **streetAddress**： 完整的街道位址。*() DOMString*

*   **地點**： 城市或地點。*() DOMString*

*   **區域**： 國家或地區。*() DOMString*

*   **郵遞區號**： 郵遞區號或郵政代碼。*() DOMString*

*   **國家**： 國家名稱。*() DOMString*

## 詳細資訊

`ContactAddress`物件存儲的單一位址的連絡人的屬性。 A `Contact` 物件可能包括多個位址在 `ContactAddress[]` 陣列。

## 支援的平臺

*   Android 系統
*   黑莓手機 WebWorks （OS 5.0 和更高）
*   iOS
*   Windows Phone 7 和 8
*   Windows 8

## 快速的示例

    // display the address information for all contacts
    
    function onSuccess(contacts) {
        for (var i = 0; i < contacts.length; i++) {
            for (var j = 0; j < contacts[i].addresses.length; j++) {
                alert("Pref: "         + contacts[i].addresses[j].pref          + "\n" +
                    "Type: "           + contacts[i].addresses[j].type          + "\n" +
                    "Formatted: "      + contacts[i].addresses[j].formatted     + "\n" +
                    "Street Address: " + contacts[i].addresses[j].streetAddress + "\n" +
                    "Locality: "       + contacts[i].addresses[j].locality      + "\n" +
                    "Region: "         + contacts[i].addresses[j].region        + "\n" +
                    "Postal Code: "    + contacts[i].addresses[j].postalCode    + "\n" +
                    "Country: "        + contacts[i].addresses[j].country);
            }
        }
    };
    
    function onError(contactError) {
        alert('onError!');
    };
    
    // find all contacts
    var options = new ContactFindOptions();
    options.filter = "";
    var filter = ["displayName", "addresses"];
    navigator.contacts.find(filter, onSuccess, onError, options);
    

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
            // find all contacts
            var options = new ContactFindOptions();
            options.filter = "";
            var filter = ["displayName", "addresses"];
            navigator.contacts.find(filter, onSuccess, onError, options);
        }
    
        // onSuccess: Get a snapshot of the current contacts
        //
        function onSuccess(contacts) {
            // display the address information for all contacts
            for (var i = 0; i < contacts.length; i++) {
                for (var j = 0; j < contacts[i].addresses.length; j++) {
                    alert("Pref: "           + contacts[i].addresses[j].pref          + "\n" +
                          "Type: "           + contacts[i].addresses[j].type          + "\n" +
                          "Formatted: "      + contacts[i].addresses[j].formatted     + "\n" +
                          "Street Address: " + contacts[i].addresses[j].streetAddress + "\n" +
                          "Locality: "       + contacts[i].addresses[j].locality      + "\n" +
                          "Region: "         + contacts[i].addresses[j].region        + "\n" +
                          "Postal Code: "    + contacts[i].addresses[j].postalCode    + "\n" +
                          "Country: "        + contacts[i].addresses[j].country);
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
    

## Android 2.X 的怪癖

*   **上一頁**: 不受支援，返回 `false` Android 2.X 的設備上。

## 黑莓手機 WebWorks （OS 5.0 和更高） 的怪癖

*   **上一頁**： 返回的黑莓設備上不支援`false`.

*   **類型**： 部分支援。*工作*和*家庭*類型位址的每個唯一一個可以存儲每個連絡人。

*   **格式化**： 部分支援。返回的串聯的所有黑莓手機位址欄位。

*   **streetAddress**: 支援。返回的串聯的黑莓**位址 1**和**位址 2**的位址欄位。

*   **現場**: 支援。黑莓手機**城**位址欄位中存儲。

*   **區域**： 支援。黑莓手機**stateProvince**位址欄位中存儲。

*   **郵遞區號**: 支援。黑莓手機**zipPostal**位址欄位中存儲。

*   **國家**： 支援。

## iOS 的怪癖

*   **上一頁**： 返回的 iOS 設備上不支援`false`.

*   **格式化**： 目前不支援。


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


# ContactFindOptions

包含可用於篩選結果的屬性 `contacts.find` 操作。

## 屬性

*   **篩選器**： 用來查找連絡人的搜索字串。*() DOMString*（預設值：`""`)

*   **多個**： 確定是否查找操作返回多個連絡人。*（布林）*（預設值：`false`)

## 支援的平臺

*   Android 系統
*   黑莓手機 WebWorks （OS 5.0 和更高）
*   iOS
*   Windows Phone 7 和 8
*   Windows 8

## 快速的示例

    // success callback
    function onSuccess(contacts) {
        for (var i=0; i<contacts.length; i++) {
            alert(contacts[i].displayName);
        }
    };
    
    // error callback
    function onError(contactError) {
        alert('onError!');
    };
    
    // specify contact search criteria
    var options = new ContactFindOptions();
        options.filter="";        // empty search string returns all contacts
        options.multiple=true;    // return multiple results
        filter = ["displayName"]; // return contact.displayName field
    
        // find contacts
    navigator.contacts.find(filter, onSuccess, onError, options);
    

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
            // specify contact search criteria
            var options = new ContactFindOptions();
            options.filter = "";      // empty search string returns all contacts
            options.multiple = true;  // return multiple results
            filter = ["displayName"]; // return contact.displayName field
    
            // find contacts
            navigator.contacts.find(filter, onSuccess, onError, options);
        }
    
        // onSuccess: Get a snapshot of the current contacts
        //
        function onSuccess(contacts) {
            for (var i=0; i<contacts.length; i++) {
                alert(contacts[i].displayName);
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


# 連絡人姓名

包含有關的不同種類的資訊 `Contact` 物件的名稱。

## 屬性

*   **格式化**： 該連絡人的完整名稱。*() DOMString*

*   **家族**： 連絡人的姓氏。*() DOMString*

*   **givenName**： 連絡人的名字。*() DOMString*

*   **之間**： 連絡人的中間名。*() DOMString*

*   **honorificPrefix**： 連絡人的首碼 (例如*先生*或*博士*） *(DOMString)*

*   **honorificSuffix**： 連絡人的尾碼 （如*律師*）。*() DOMString*

## 詳細資訊

`ContactName`物件存儲的連絡人的名稱屬性。

## 支援的平臺

*   Android 2.X
*   黑莓手機 WebWorks （OS 5.0 和更高）
*   iOS
*   Windows Phone 7 和 8
*   Windows 8

## 快速的示例

    function onSuccess(contacts) {
        for (var i = 0; i < contacts.length; i++) {
            alert("Formatted: "  + contacts[i].name.formatted       + "\n" +
                "Family Name: "  + contacts[i].name.familyName      + "\n" +
                "Given Name: "   + contacts[i].name.givenName       + "\n" +
                "Middle Name: "  + contacts[i].name.middleName      + "\n" +
                "Suffix: "       + contacts[i].name.honorificSuffix + "\n" +
                "Prefix: "       + contacts[i].name.honorificSuffix);
        }
    };
    
    function onError(contactError) {
        alert('onError!');
    };
    
    var options = new ContactFindOptions();
    options.filter = "";
    filter = ["displayName", "name"];
    navigator.contacts.find(filter, onSuccess, onError, options);
    

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
            var options = new ContactFindOptions();
            options.filter="";
            filter = ["displayName","name"];
            navigator.contacts.find(filter, onSuccess, onError, options);
        }
    
        // onSuccess: Get a snapshot of the current contacts
        //
        function onSuccess(contacts) {
            for (var i = 0; i < contacts.length; i ++) {
                alert("Formatted: " + contacts[i].name.formatted       + "\n" +
                    "Family Name: " + contacts[i].name.familyName      + "\n" +
                    "Given Name: "  + contacts[i].name.givenName       + "\n" +
                    "Middle Name: " + contacts[i].name.middleName      + "\n" +
                    "Suffix: "      + contacts[i].name.honorificSuffix + "\n" +
                    "Prefix: "      + contacts[i].name.honorificPrefix);
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

*   **格式化**： 部分支援，和唯讀。 返回的串聯的 `honorificPrefix` ， `givenName` ， `middleName` ， `familyName` ，和`honorificSuffix`.

## 黑莓手機 WebWorks （OS 5.0 和更高） 的怪癖

*   **格式化**： 部分支援。返回的串聯的黑莓手機**名字**和**姓氏**欄位。

*   **家族**: 支援。黑莓**姓氏**欄位中存儲。

*   **givenName**： 支援。黑莓**名字**欄位中存儲。

*   **之間**： 不受支援，返回`null`.

*   **honorificPrefix**: 不受支援，返回`null`.

*   **honorificSuffix**: 不受支援，返回`null`.

## iOS 的怪癖

*   **格式化**： 部分支援。返回 iOS 複合名稱，但為唯讀。


# ContactOrganization

包含 `Contact` 物件的組織屬性。

## 屬性

*   **上一頁**: 設置為 `true` 如果此 `ContactOrganization` 包含使用者的首選的值。*（布林）*

*   **類型**： 一個字串，例如指示哪種類型的欄位這是*回家*。_(DOMString)

*   **名稱**： 組織的名稱。*() DOMString*

*   **部門**： 新聞部的工程合約。*() DOMString*

*   **標題**： 在組織連絡人的標題。*() DOMString*

## 詳細資訊

`ContactOrganization`物件存儲的連絡人的組織屬性。A `Contact` 物件存儲一個或多個 `ContactOrganization` 陣列中的物件。

## 支援的平臺

*   Android 系統
*   黑莓手機 WebWorks （OS 5.0 和更高）
*   iOS
*   Windows Phone 7 和 8
*   Windows 8

## 快速的示例

    function onSuccess(contacts) {
        for (var i = 0; i < contacts.length; i++) {
            for (var j = 0; j < contacts[i].organizations.length; j++) {
                alert("Pref: "      + contacts[i].organizations[j].pref       + "\n" +
                    "Type: "        + contacts[i].organizations[j].type       + "\n" +
                    "Name: "        + contacts[i].organizations[j].name       + "\n" +
                    "Department: "  + contacts[i].organizations[j].department + "\n" +
                    "Title: "       + contacts[i].organizations[j].title);
            }
        }
    };
    
    function onError(contactError) {
        alert('onError!');
    };
    
    var options = new ContactFindOptions();
    options.filter = "";
    filter = ["displayName", "organizations"];
    navigator.contacts.find(filter, onSuccess, onError, options);
    

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
            var options = new ContactFindOptions();
            options.filter="";
            filter = ["displayName","organizations"];
            navigator.contacts.find(filter, onSuccess, onError, options);
        }
    
        // onSuccess: Get a snapshot of the current contacts
        //
        function onSuccess(contacts) {
            for (var i = 0; i < contacts.length; i++) {
                for (var j = 0; j < contacts[i].organizations.length; j++) {
                    alert("Pref: "     + contacts[i].organizations[j].pref       + "\n" +
                        "Type: "       + contacts[i].organizations[j].type       + "\n" +
                        "Name: "       + contacts[i].organizations[j].name       + "\n" +
                        "Department: " + contacts[i].organizations[j].department + "\n" +
                        "Title: "      + contacts[i].organizations[j].title);
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
    

## Android 2.X 的怪癖

*   **上一頁**: 不支援的 Android 2.X 的設備，返回`false`.

## 黑莓手機 WebWorks （OS 5.0 和更高） 的怪癖

*   **上一頁**: 不支援的黑莓設備，返回`false`.

*   **類型**： 不支援的黑莓設備，返回`null`.

*   **名稱**： 部分支援。第一次組織名稱存儲在黑莓**公司**欄位中。

*   **部**: 不受支援，返回`null`.

*   **標題**: 部分支援。第一次組織標題是黑莓**jobTitle**欄位中存儲的。

## iOS 的怪癖

*   **上一頁**： 返回的 iOS 設備上不支援`false`.

*   **類型**： 不支援的 iOS 設備上，返回`null`.

*   **名稱**： 部分支援。第一次組織名稱存儲在 iOS **kABPersonOrganizationProperty**欄位中。

*   **新聞部**： 部分支援。第一部名稱存儲在 iOS **kABPersonDepartmentProperty**欄位中。

*   **標題**: 部分支援。第一個標題是 iOS **kABPersonJobTitleProperty**欄位中存儲的。


# ContactError

A `ContactError` 物件傳遞給 `contactError` 回檔時出現錯誤。

## 屬性

*   **代碼**： 下面列出的預定義的錯誤代碼之一。

## 常量

*   `ContactError.UNKNOWN_ERROR`
*   `ContactError.INVALID_ARGUMENT_ERROR`
*   `ContactError.TIMEOUT_ERROR`
*   `ContactError.PENDING_OPERATION_ERROR`
*   `ContactError.IO_ERROR`
*   `ContactError.NOT_SUPPORTED_ERROR`
*   `ContactError.PERMISSION_DENIED_ERROR`

## 說明

`ContactError`物件返回到使用者通過 `contactError` 回呼函數時出現錯誤。


# contactSuccess

提供的成功回呼函數 `Contact` 陣列產生的 `contacts.find` 操作。

    function(contacts) {
        // Do something
    }
    

## 參數

*   **連絡人**： 連絡人陣列產生的查找操作。*（連絡人）*

## 示例

    function contactSuccess(contacts) {
        for (var i=0; i<contacts.length; i++) {
            console.log("Display Name = " + contacts[i].displayName);
        }
    }


# contactError

聯繫函數的錯誤回呼函數。

    function(error) {
        // Handle the error
    }


# contactFields

所需參數的 `contacts.find` 方法，用來指定哪些欄位應包含在 `Contact` 產生的查找操作的物件。

    ["名稱"、"手機"、"電子郵件"]


# contactFindOptions

可選的參數， `contacts.find` 方法，用於篩選從連絡人資料庫返回的連絡人。

    {篩選器：""、 多個： true，} ；
    

## 選項

*   **篩選器**： 用於過濾連絡人的搜索字串。*() DOMString*（預設值：`""`)

*   **多個**： 確定是否查找操作返回多個連絡人。*（布林）*（預設值：`false`)
