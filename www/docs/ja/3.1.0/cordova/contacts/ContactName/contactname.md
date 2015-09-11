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

# 得意先コード

についての異なる種類情報にはが含まれています、 `Contact` オブジェクトの名前。

## プロパティ

*   **フォーマット**: <a href="../parameters/contactFields.html">連絡先</a>の完全な名前。*（，）*

*   **familyName**: <a href="../parameters/contactFields.html">連絡先</a>の姓。*（，）*

*   **givenName**: <a href="../parameters/contactFields.html">連絡先</a>の名前。*（，）*

*   **ミドル ネーム**: <a href="../parameters/contactFields.html">連絡先</a>のミドル ネーム。*（，）*

*   **honorificPrefix**: <a href="../parameters/contactFields.html">連絡先</a>のプレフィックス (例*氏*または*博士*) *(，)*

*   **honorificSuffix**: <a href="../parameters/contactFields.html">連絡先</a>のサフィックス (*弁護士*の例)。*（，）*

## 詳細

`ContactName`オブジェクト、<a href="../parameters/contactFields.html">連絡先</a>の名前のプロパティが格納されます。

## サポートされているプラットフォーム

*   アンドロイド 2.X
*   ブラックベリー WebWorks (OS 5.0 およびより高い)
*   iOS
*   Windows Phone 7 と 8
*   Windows 8

## 簡単な例

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
    

## 完全な例

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
    

## Android の癖

*   **フォーマット**： 部分的にサポートされると読み取り専用です。 連結を返します `honorificPrefix` 、 `givenName` 、 `middleName` 、 `familyName` と`honorificSuffix`.

## ブラックベリー WebWorks (OS 5.0 およびより高い) 癖

*   **フォーマット**： 部分的にサポートされます。ブラックベリー **firstName**と**lastName**フィールドの連結を返します。

*   **familyName**: サポートされています。ブラックベリー **[氏名]**フィールドに格納されます。

*   **givenName**: サポートされています。ブラックベリーの**firstName**フィールドに格納されます。

*   **ミドル ネーム**: サポートされていないを返す`null`.

*   **honorificPrefix**: サポートされていないを返す`null`.

*   **honorificSuffix**: サポートされていないを返す`null`.

## iOS の癖

*   **フォーマット**： 部分的にサポートされます。IOS 複合名を返しますが、読み取り専用です。