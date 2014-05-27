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