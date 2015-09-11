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

# ContactAddress

包含位址屬性的 `Contact` 物件。

## 屬性

*   **上一頁**: 設置為 `true` 如果此 `ContactAddress` 包含使用者的首選的值。*（布林）*

*   **類型**： 一個字串，例如指示哪種類型的欄位這是*回家*。*() DOMString*

*   **格式**： <a href="../../inappbrowser/inappbrowser.html">顯示</a>格式的完整位址。*() DOMString*

*   **streetAddress**： 完整的街道位址。*() DOMString*

*   **地點**： 城市或地點。*() DOMString*

*   **區域**： 國家或地區。*() DOMString*

*   **郵遞區號**： 郵遞區號或郵政代碼。*() DOMString*

*   **國家**： 國家名稱。*() DOMString*

## 詳細資訊

`ContactAddress`物件<a href="../../storage/storage.html">存儲</a>的單一位址的<a href="../contacts.html">連絡人</a>的屬性。 A `Contact` 物件可能包括多個位址在 `ContactAddress[]` 陣列。

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
    
    function onError(<a href="../parameters/contactError.html">contactError</a>) {
        alert('onError!');
    };
    
    // find all contacts
    var options = new <a href="../ContactFindOptions/contactfindoptions.html">ContactFindOptions</a>();
    options.filter = "";
    var filter = ["displayName", "addresses"];
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
            // find all contacts
            var options = new <a href="../ContactFindOptions/contactfindoptions.html">ContactFindOptions</a>();
            options.filter = "";
            var filter = ["displayName", "addresses"];
            navigator.<a href="../contacts.find.html">contacts.find</a>(filter, onSuccess, onError, options);
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

*   **上一頁**: 不受支援，返回 `false` Android 2.X 的<a href="../../device/device.html">設備</a>上。

## 黑莓手機 WebWorks （OS 5.0 和更高） 的怪癖

*   **上一頁**： 返回的黑莓<a href="../../device/device.html">設備</a>上不支援`false`.

*   **類型**： 部分支援。*工作*和*家庭*類型位址的每個唯一一個可以<a href="../../storage/storage.html">存儲</a>每個<a href="../contacts.html">連絡人</a>。

*   **格式化**： 部分支援。返回的串聯的所有黑莓手機位址欄位。

*   **streetAddress**: 支援。返回的串聯的黑莓**位址 1**和**位址 2**的位址欄位。

*   **現場**: 支援。黑莓手機**城**位址欄位中<a href="../../storage/storage.html">存儲</a>。

*   **區域**： 支援。黑莓手機**stateProvince**位址欄位中<a href="../../storage/storage.html">存儲</a>。

*   **郵遞區號**: 支援。黑莓手機**zipPostal**位址欄位中<a href="../../storage/storage.html">存儲</a>。

*   **國家**： 支援。

## iOS 的怪癖

*   **上一頁**： 返回的 iOS <a href="../../device/device.html">設備</a>上不支援`false`.

*   **格式化**： 目前不支援。