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

包含 `Contact` 对象的组织属性。

## 属性

*   **上一页**: 设置为 `true` 如果此 `ContactOrganization` 包含用户的首选的值。*（布尔）*

*   **类型**： 一个字符串，例如指示哪种类型的字段这是*回家*。_(DOMString)

*   **名称**： 组织的名称。*() DOMString*

*   **部门**： 新闻部的工程合约。*() DOMString*

*   **标题**： 在组织联系人的标题。*() DOMString*

## 详细信息

`ContactOrganization`对象存储的联系人的组织属性。A `Contact` 对象存储一个或多个 `ContactOrganization` 数组中的对象。

## 支持的平台

*   Android 系统
*   黑莓手机 WebWorks （OS 5.0 和更高）
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

*   **上一页**: 不支持的 Android 2.X 的设备，返回`false`.

## 黑莓手机 WebWorks （OS 5.0 和更高） 的怪癖

*   **上一页**: 不支持的黑莓设备，返回`false`.

*   **类型**： 不支持的黑莓设备，返回`null`.

*   **名称**： 部分支持。第一次组织名称存储在黑莓**公司**字段中。

*   **部**: 不受支持，返回`null`.

*   **标题**: 部分支持。第一次组织标题是黑莓**jobTitle**字段中存储的。

## iOS 的怪癖

*   **上一页**： 返回的 iOS 设备上不支持`false`.

*   **类型**： 不支持的 iOS 设备上，返回`null`.

*   **名称**： 部分支持。第一次组织名称存储在 iOS **kABPersonOrganizationProperty**字段中。

*   **新闻部**： 部分支持。第一部名称存储在 iOS **kABPersonDepartmentProperty**字段中。

*   **标题**: 部分支持。第一个标题是 iOS **kABPersonJobTitleProperty**字段中存储的。