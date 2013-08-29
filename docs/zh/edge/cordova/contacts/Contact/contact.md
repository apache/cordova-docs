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

# 联系人

包含描述联系，如用户的个人或业务联系人的属性。

## 属性

*   **id**： 一个全局唯一标识符。*() DOMString*

*   **显示名称**： 此联系人，适合于向最终用户显示的名称。*() DOMString*

*   **名称**： 包含所有组件的人的名称的对象。*(联系人姓名)*

*   **昵称**: 休闲的解决联系人名称。*() DOMString*

*   **手机**： 一个数组的所有联系人的电话号码。*(ContactField[])*

*   **电子邮件**： 所有联系人的电子邮件地址的数组。*(ContactField[])*

*   **地址**： 该联系人的所有地址的数组。*(ContactAddress[])*

*   **ims**： 所有联系人的 IM 地址的数组。*(ContactField[])*

*   **组织**： 该联系人的所有组织的数组。*(ContactOrganization[])*

*   **生日**： 联系人的生日。*（日期）*

*   **注**： 有关联系人的注释。*() DOMString*

*   **照片**： 数组联系人的照片。*(ContactField[])*

*   **类别**： 数组与联系人关联的所有用户定义的类别。*(ContactField[])*

*   **url**： 数组与联系人关联的 web 页。*(ContactField[])*

## 方法

*   **克隆**： 返回一个新的 `Contact` 对象就是调用对象的深层副本 `id` 属性设置为`null`.

*   **删除**： 从设备的联系人数据库中删除联系人，否则执行错误回调与 `ContactError` 对象。

*   **保存**： 将一个新的联系人保存到设备的联系人数据库中，或更新现有的联系人 （如果已存在具有相同**id**的联系人。

## 详细信息

`Contact`对象表示用户的联系人。 可以创建、 存储，或从设备的联系人数据库中删除的联系人。 联系人可以还 (单独或批量） 从数据库中检索通过调用 `contacts.find` 方法。

**注：**不是所有的上面列出的联系人字段平台支持的每个设备。请检查每个平台*的怪癖*节了解详细信息。

## 支持的平台

*   Android 系统
*   黑莓手机 WebWorks （OS 5.0 和更高）
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
    

## 删除快速示例

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

*   **类别**： 不支持 Android 2.X 设备上，返回`null`.

## 黑莓手机 WebWorks （OS 5.0 和更高） 的怪癖

*   **id**： 支持。由该设备分配时保存该联系人。

*   **显示名称**： 支持。黑莓**user1**字段中存储。

*   **昵称**: 不受支持，返回`null`.

*   **手机**： 部分支持。 电话号码存储在黑莓的字段**homePhone1**和**homePhone2**中，如果*类型*是 '回家'， **workPhone1**和**workPhone2**如果*类型*是 '工作'，**手机**如果*类型*为移动电话， **faxPhone** ，如果*类型*是传真， **pagerPhone** ，如果*类型*是 '寻呼机' 和**otherPhone**如果*类型*是以上都不是。

*   **电子邮件**： 部分支持。 第三个电子邮件地址分别存储在黑莓**电子邮件 1**，**电子邮件 2**、**电子邮件 3**字段。

*   **地址**： 部分支持。第一和第二个地址分别存储在黑莓**家庭地址**和**workAddress**字段中。

*   **ims**: 不受支持，返回`null`.

*   **组织**： 部分支持。 **名称**和**标题**的第一个组织存储在黑莓**公司**和**标题**字段中，分别。

*   **照片**： 部分支持。 支持单一的缩略图大小的照片。 若要设置联系人的照片，通过在任一 base64 编码的图像或指向图像的 URL。 图像保存到黑莓手机的联系人数据库前按比例缩小。 联系人照片返回 base64 编码的图像。

*   **类别**： 部分支持。支持的只有*商业*和*个人*的类别。

*   **url**： 部分支持。第一个 URL 存储在黑莓手机**网页**字段中。

## iOS 的怪癖

*   **显示名称**： 上返回的 iOS 不支持 `null` 除非有没有 `ContactName` 指定，在这种情况下它将返回复合名称，**绰号**或 `""` ，分别。

*   **生日**： 必须输入 JavaScript 作为 `Date` 对象，它将返回相同的方式。

*   **照片**： 返回到图像，存储在应用程序的临时目录中的文件的 URL。当应用程序退出时删除临时目录的内容。

*   **类别**： 这目前不支持属性，返回`null`.

## Windows Phone 7 和 8 怪癖

*   **显示名称**： 当创建一个联系人，提供的显示名称参数不同于显示名称的值检索查找联系人时。

*   **url**： 当创建一个联系人，用户可以输入和保存多个 web 地址，但只有一个是可用时，可以使用搜索联系人。

*   **手机**： 不支持*参照*选项。 在*查找*操作中不是支持的*类型*。 只有一个 `phoneNumber` 允许为每个*类型*.

*   **电子邮件**：*参照*选项不受支持。家庭和个人使用引用同一电子邮件项。只有一项被允许为每个*类型*.

*   **地址**： 仅支持工作和家庭/个人*类型*。家庭和个人*类型*引用相同的地址条目。只有一项被允许为每个*类型*.

*   **组织**： 唯一一个允许的并且不支持的*治安*、*类型*和*新闻部*的属性。

*   **注意**： 不支持返回`null`.

*   **ims**: 不受支持，返回`null`.

*   **生日**: 不受支持，返回`null`.

*   **类别**: 不受支持，返回`null`.