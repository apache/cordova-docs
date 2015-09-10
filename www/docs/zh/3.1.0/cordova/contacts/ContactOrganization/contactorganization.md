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

# ContactOrganization

包含 `Contact` 物件的組織屬性。

## 屬性

*   **上一頁**: 設置為 `true` 如果此 `ContactOrganization` 包含使用者的首選的值。*（布林）*

*   **類型**： 一個字串，例如指示哪種類型的欄位這是*回家*。_(DOMString)

*   **名稱**： 組織的名稱。*() DOMString*

*   **部門**： 新聞部的工程合約。*() DOMString*

*   **標題**： 在組織<a href="../contacts.html">連絡人</a>的標題。*() DOMString*

## 詳細資訊

`ContactOrganization`物件<a href="../../storage/storage.html">存儲</a>的<a href="../contacts.html">連絡人</a>的組織屬性。A `Contact` 物件<a href="../../storage/storage.html">存儲</a>一個或多個 `ContactOrganization` 陣列中的物件。

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
    
    function onError(<a href="../parameters/contactError.html">contactError</a>) {
        alert('onError!');
    };
    
    var options = new <a href="../ContactFindOptions/contactfindoptions.html">ContactFindOptions</a>();
    options.filter = "";
    filter = ["displayName", "organizations"];
    navigator.<a href="../contacts.find.html">contacts.find</a>(filter, onSuccess, onError, options);
    

## 完整的示例

    <!DOCTYPE html>
    <html>
      <head>
        <title>Contact <a href="../../storage/storage.opendatabase.html">Example</a></title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.<a href="../../inappbrowser/inappbrowser.html">addEventListener</a>("<a href="../../events/events.deviceready.html">deviceready</a>", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            var options = new <a href="../ContactFindOptions/contactfindoptions.html">ContactFindOptions</a>();
            options.filter="";
            filter = ["displayName","organizations"];
            navigator.<a href="../contacts.find.html">contacts.find</a>(filter, onSuccess, onError, options);
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
        function onError(<a href="../parameters/contactError.html">contactError</a>) {
            alert('onError!');
        }
    
        </script>
      </head>
      <body>
        <h1><a href="../../storage/storage.opendatabase.html">Example</a></h1>
        <p>Find Contacts</p>
      </body>
    </html>
    

## Android 2.X 的怪癖

*   **上一頁**: 不支援的 Android 2.X 的<a href="../../device/device.html">設備</a>，返回`false`.

## 黑莓手機 WebWorks （OS 5.0 和更高） 的怪癖

*   **上一頁**: 不支援的黑莓<a href="../../device/device.html">設備</a>，返回`false`.

*   **類型**： 不支援的黑莓<a href="../../device/device.html">設備</a>，返回`null`.

*   **名稱**： 部分支援。第一次組織名稱<a href="../../storage/storage.html">存儲</a>在黑莓**公司**欄位中。

*   **部**: 不受支援，返回`null`.

*   **標題**: 部分支援。第一次組織標題是黑莓**jobTitle**欄位中<a href="../../storage/storage.html">存儲</a>的。

## iOS 的怪癖

*   **上一頁**： 返回的 iOS <a href="../../device/device.html">設備</a>上不支援`false`.

*   **類型**： 不支援的 iOS <a href="../../device/device.html">設備</a>上，返回`null`.

*   **名稱**： 部分支援。第一次組織名稱<a href="../../storage/storage.html">存儲</a>在 iOS **kABPersonOrganizationProperty**欄位中。

*   **新聞部**： 部分支援。第一部名稱<a href="../../storage/storage.html">存儲</a>在 iOS **kABPersonDepartmentProperty**欄位中。

*   **標題**: 部分支援。第一個標題是 iOS **kABPersonJobTitleProperty**欄位中<a href="../../storage/storage.html">存儲</a>的。