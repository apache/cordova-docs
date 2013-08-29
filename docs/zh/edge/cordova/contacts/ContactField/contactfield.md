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

# ContactField

支持泛型字段在 `Contact` 对象。某些属性存储作为 `ContactField` 对象包括电子邮件地址、 电话号码和 Url。

## 属性

*   **类型**： 一个字符串，例如指示哪种类型的字段这是*回家*。*() DOMString*

*   **值**： 字段的值，如电话号码或电子邮件地址。*() DOMString*

*   **上一页**: 设置为 `true` 如果此 `ContactField` 包含用户的首选的值。*（布尔）*

## 详细信息

`ContactField`对象是可重用的组件表示泛指联系人字段。 每个 `ContactField` 对象包含 `value` ， `type` ，和 `pref` 属性。 A `Contact` 对象存储中的几个属性 `ContactField[]` 数组，如电话号码和电子邮件地址。

在大多数情况下，没有任何预先确定的值为 `ContactField` 对象的**type**属性。 例如，电话号码可以指定**类型**的*家庭*、*工作*、*移动*、 *iPhone*或由一个特定的设备平台联系数据库支持的任何其他值的值。 然而，对于 `Contact` **的照片**字段，**类型**字段指示返回图像的格式： **url**的**值**属性包含的照片图像或*base64*的 URL 时的**值**包含一个 base64 编码的图像字符串时。 

## 支持的平台

*   Android 系统
*   黑莓手机 WebWorks （OS 5.0 和更高）
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

*   **上一页**: 不受支持，返回`false`.

## 黑莓手机 WebWorks （OS 5.0 和更高） 的怪癖

*   **类型**： 部分支持。使用的电话号码。

*   **值**： 支持。

*   **上一页**: 不受支持，返回`false`.

## iOS 的怪癖

*   **上一页**: 不受支持，返回`false`.