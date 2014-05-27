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

含まれています、 `Contact` オブジェクトの組織のプロパティです。

## プロパティ

*   **県**: に設定されている `true` 場合は、この `ContactOrganization` ユーザーの推奨値が含まれています。*(ブール値)*

*   **タイプ**: たとえばフィールドこれは*ホーム*の種類を示す文字列。_(DOMString)

*   **名前**: 組織の名前。*（，）*

*   **部門**: 契約に勤めている部門。*（，）*

*   **タイトル**: 組織の連絡先のタイトル。*（，）*

## 詳細

`ContactOrganization`オブジェクトは、連絡先の組織のプロパティを格納します。A `Contact` 1 つまたは複数のオブジェクトに格納されます `ContactOrganization` 配列内のオブジェクト。

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー WebWorks (OS 5.0 およびより高い)
*   iOS
*   Windows Phone 7 と 8
*   Windows 8

## 簡単な例

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
    

## アンドロイド 2.X 癖

*   **県**: 返す 2.X の Android デバイスでサポートされていません`false`.

## ブラックベリー WebWorks (OS 5.0 およびより高い) 癖

*   **県**： 戻る、BlackBerry デバイスでサポートされていません`false`.

*   **タイプ**： 戻る、BlackBerry デバイスでサポートされていません`null`.

*   **名前**： 部分的にサポートされます。最初の組織名は、**会社**のブラックベリーのフィールドに格納されます。

*   **部門**: サポートされていないを返す`null`.

*   **タイトル**: 部分的にサポートされます。組織の最初のタイトルはブラックベリー**氏名**フィールドに格納されます。

## iOS の癖

*   **県**: 戻る iOS デバイスでサポートされていません`false`.

*   **タイプ**： 戻る iOS デバイスでサポートされていません`null`.

*   **名前**： 部分的にサポートされます。最初の組織名は、iOS **kABPersonOrganizationProperty**フィールドに格納されます。

*   **部門**: 部分的にサポートされます。最初の部署名は iOS **kABPersonDepartmentProperty**フィールドに格納されます。

*   **タイトル**: 部分的にサポートされます。最初のタイトルは、iOS **kABPersonJobTitleProperty**フィールドに格納されます。