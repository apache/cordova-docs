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

# ContactAddress

包含地址属性的 `Contact` 对象。

## 属性

*   **上一页**: 设置为 `true` 如果此 `ContactAddress` 包含用户的首选的值。*（布尔）*

*   **类型**： 一个字符串，例如指示哪种类型的字段这是*回家*。*() DOMString*

*   **格式**： 显示格式的完整地址。*() DOMString*

*   **streetAddress**： 完整的街道地址。*() DOMString*

*   **地点**： 城市或地点。*() DOMString*

*   **区域**： 国家或地区。*() DOMString*

*   **邮政编码**： 邮政编码或邮政代码。*() DOMString*

*   **国家**： 国家名称。*() DOMString*

## 详细信息

`ContactAddress`对象存储的单一地址的联系人的属性。 A `Contact` 对象可能包括多个地址在 `ContactAddress[]` 数组。

## 支持的平台

*   Android 系统
*   黑莓手机 WebWorks （OS 5.0 和更高）
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

*   **上一页**: 不受支持，返回 `false` Android 2.X 的设备上。

## 黑莓手机 WebWorks （OS 5.0 和更高） 的怪癖

*   **上一页**： 返回的黑莓设备上不支持`false`.

*   **类型**： 部分支持。*工作*和*家庭*类型地址的每个唯一一个可以存储每个联系人。

*   **格式化**： 部分支持。返回的串联的所有黑莓手机地址字段。

*   **streetAddress**: 支持。返回的串联的黑莓**地址 1**和**地址 2**的地址字段。

*   **现场**: 支持。黑莓手机**城**地址字段中存储。

*   **区域**： 支持。黑莓手机**stateProvince**地址字段中存储。

*   **邮政编码**: 支持。黑莓手机**zipPostal**地址字段中存储。

*   **国家**： 支持。

## iOS 的怪癖

*   **上一页**： 返回的 iOS 设备上不支持`false`.

*   **格式化**： 目前不支持。