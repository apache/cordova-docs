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

# contacts.find

查询设备联系人数据库，并返回一个或多个 `Contact` 对象，每个包含指定的字段。

    navigator.contacts.find(contactFields, contactSuccess, contactError, contactFindOptions);
    

## 说明

`contacts.find`方法以异步方式，执行设备的联系人数据库查询并返回一个数组的 `Contact` 对象。 所得到的对象传递给 `contactSuccess` **contactSuccess**参数所指定的回调函数。

**ContactFields**参数指定要搜索的限定符，作为使用的字段，只有那些结果传递给**contactSuccess**回调函数。 零长度**contactFields**参数是无效的结果在 `ContactError.INVALID_ARGUMENT_ERROR` 。 **ContactFields**值为 `"*"` 返回所有联系人字段。

**ContactFindOptions.filter**字符串查询联系人数据库时，可以用作搜索筛选器。 如果提供，不区分大小写，部分值匹配应用于在**contactFields**参数中指定的每个字段。 如果有*任何*指定的字段的匹配，则返回该联系人。

## 参数

*   **contactFields**： 联系人字段使用作为搜索的限定符。生成的 `Contact` 对象只能使用这些字段的值。*(DOMString[])*[要求]

*   **contactSuccess**： 从数据库返回成功回调函数调用时使用的联系人。[要求]

*   **contactError**： 错误回调函数，当发生错误时调用。[可选]

*   **contactFindOptions**: 搜索选项，以过滤联系人。[可选]

## 支持的平台

*   Android 系统
*   黑莓手机 WebWorks （OS 5.0 和更高）
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