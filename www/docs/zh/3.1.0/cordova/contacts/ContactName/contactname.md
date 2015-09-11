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

# <a href="../contacts.html">連絡人</a>姓名

包含有關的不同種類的資訊 `Contact` 物件的名稱。

## 屬性

*   **格式化**： 該<a href="../contacts.html">連絡人</a>的完整名稱。*() DOMString*

*   **家族**： <a href="../contacts.html">連絡人</a>的姓氏。*() DOMString*

*   **givenName**： <a href="../contacts.html">連絡人</a>的名字。*() DOMString*

*   **之間**： <a href="../contacts.html">連絡人</a>的中間名。*() DOMString*

*   **honorificPrefix**： <a href="../contacts.html">連絡人</a>的首碼 (例如*先生*或*博士*） *(DOMString)*

*   **honorificSuffix**： <a href="../contacts.html">連絡人</a>的尾碼 （如*律師*）。*() DOMString*

## 詳細資訊

`ContactName`物件<a href="../../storage/storage.html">存儲</a>的<a href="../contacts.html">連絡人</a>的名稱屬性。

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
    
    function onError(<a href="../parameters/contactError.html">contactError</a>) {
        alert('onError!');
    };
    
    var options = new <a href="../ContactFindOptions/contactfindoptions.html">ContactFindOptions</a>();
    options.filter = "";
    filter = ["displayName", "name"];
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
            filter = ["displayName","name"];
            navigator.<a href="../contacts.find.html">contacts.find</a>(filter, onSuccess, onError, options);
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
    

## Android 的怪癖

*   **格式化**： 部分支援，和唯讀。 返回的串聯的 `honorificPrefix` ， `givenName` ， `middleName` ， `familyName` ，和`honorificSuffix`.

## 黑莓手機 WebWorks （OS 5.0 和更高） 的怪癖

*   **格式化**： 部分支援。返回的串聯的黑莓手機**名字**和**姓氏**欄位。

*   **家族**: 支援。黑莓**姓氏**欄位中<a href="../../storage/storage.html">存儲</a>。

*   **givenName**： 支援。黑莓**名字**欄位中<a href="../../storage/storage.html">存儲</a>。

*   **之間**： 不受支援，返回`null`.

*   **honorificPrefix**: 不受支援，返回`null`.

*   **honorificSuffix**: 不受支援，返回`null`.

## iOS 的怪癖

*   **格式化**： 部分支援。返回 iOS 複合名稱，但為唯讀。