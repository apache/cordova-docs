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

一般的なフィールドをサポートしている、 `Contact` オブジェクト。いくつかのプロパティとして格納されている `ContactField` オブジェクトには、電子メール アドレス、電話番号と Url が含まれます。

## プロパティ

*   **タイプ**: たとえばフィールドこれは*ホーム*の種類を示す文字列。*（，）*

*   **値**: 電話番号や電子メール アドレスなど、フィールドの値。*（，）*

*   **県**: に設定されている `true` 場合は、この `ContactField` ユーザーの推奨値が含まれています。*(ブール値)*

## 詳細

`ContactField`オブジェクトは連絡先フィールドを総称を表す再利用可能なコンポーネントです。 各 `ContactField` オブジェクトが含まれています、 `value` 、 `type` 、および `pref` プロパティ。 A `Contact` オブジェクトのいくつかのプロパティに格納されます `ContactField[]` 携帯電話番号、メール アドレスなどの配列。

ほとんどの場合、事前に決められた値がない、 `ContactField` オブジェクトの**type**属性。 たとえば、電話番号が*ホーム*、*仕事*、*モバイル*、 *iPhone*、または特定のデバイス プラットフォームの連絡先データベースでサポートされている他の値の**型**の値を指定できます。 ただし、ため、 `Contact` **写真**] フィールドに、**種類**フィールド、返されるイメージの形式を示します: **url** **値**属性**値**を base64 でエンコードされたイメージの文字列が含まれる場合に写真イメージまたは*base64*に URL が含まれる場合。 

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー WebWorks (OS 5.0 およびより高い)
*   iOS
*   Windows Phone 7 と 8
*   Windows 8

## 簡単な例

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
    

## 完全な例

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
    

## Android の癖

*   **県**: サポートされていないを返す`false`.

## ブラックベリー WebWorks (OS 5.0 およびより高い) 癖

*   **種類**: 部分的にサポートされます。電話番号を使用します。

*   **値**: サポートされています。

*   **県**: サポートされていないを返す`false`.

## iOS の癖

*   **県**: サポートされていないを返す`false`.