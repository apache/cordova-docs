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

# 联系人姓名

包含有关的不同种类的信息 `Contact` 对象的名称。

## 属性

*   **格式化**： 该联系人的完整名称。*() DOMString*

*   **家族**： 联系人的姓氏。*() DOMString*

*   **givenName**： 联系人的名字。*() DOMString*

*   **之间**： 联系人的中间名。*() DOMString*

*   **honorificPrefix**： 联系人的前缀 (例如*先生*或*博士*） *(DOMString)*

*   **honorificSuffix**： 联系人的后缀 （如*律师*）。*() DOMString*

## 详细信息

`ContactName`对象存储的联系人的名称属性。

## 支持的平台

*   Android 2.X
*   黑莓手机 WebWorks （OS 5.0 和更高）
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

*   **格式化**： 部分支持，和只读。 返回的串联的 `honorificPrefix` ， `givenName` ， `middleName` ， `familyName` ，和`honorificSuffix`.

## 黑莓手机 WebWorks （OS 5.0 和更高） 的怪癖

*   **格式化**： 部分支持。返回的串联的黑莓手机**名字**和**姓氏**字段。

*   **家族**: 支持。黑莓**姓氏**字段中存储。

*   **givenName**： 支持。黑莓**名字**字段中存储。

*   **之间**： 不受支持，返回`null`.

*   **honorificPrefix**: 不受支持，返回`null`.

*   **honorificSuffix**: 不受支持，返回`null`.

## iOS 的怪癖

*   **格式化**： 部分支持。返回 iOS 复合名称，但为只读。