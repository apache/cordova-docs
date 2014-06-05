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

アドレスのプロパティを格納する `Contact` オブジェクト。

## プロパティ

*   **県**: に設定されている `true` 場合は、この `ContactAddress` ユーザーの推奨値が含まれています。*(ブール値)*

*   **タイプ**: たとえばフィールドこれは*ホーム*の種類を示す文字列。*（，）*

*   **書式設定**: 表示用にフォーマットの完全なアドレス。*（，）*

*   **番地**： 完全な住所。*（，）*

*   **局所性**: 都市または場所。*（，）*

*   **地域**: 状態または地域。*（，）*

*   **郵便番号**： 郵便番号または郵便番号。*（，）*

*   **国**: 国の名前。*（，）*

## 詳細

`ContactAddress`オブジェクトの連絡先の 1 つのアドレスのプロパティが格納されます。 A `Contact` オブジェクトで 1 つ以上のアドレスを含めることができます、 `ContactAddress[]` 配列。

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー WebWorks (OS 5.0 およびより高い)
*   iOS
*   Windows Phone 7 と 8
*   Windows 8

## 簡単な例

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
    

## アンドロイド 2.X 癖

*   **県**: サポートされていない返す `false` 2.X の Android デバイスで。

## ブラックベリー WebWorks (OS 5.0 およびより高い) 癖

*   **県**： 戻る、BlackBerry デバイスでサポートされていません`false`.

*   **種類**: 部分的にサポートされます。連絡先ごとの 1 つだけ各*仕事*と*家庭*の種類のアドレスを格納できます。

*   **フォーマット**： 部分的にサポートされます。すべての BlackBerry アドレス フィールドの連結を返します。

*   **番地**： サポートされています。ブラックベリーの**住所 1** **住所 2**の連結アドレス フィールドを返します。

*   **局所性**： サポートされています。ブラックベリー**市**アドレス フィールドに格納されます。

*   **地域**: サポートされています。ブラックベリー **stateProvince**アドレス フィールドに格納されます。

*   **郵便番号**： サポートされています。ブラックベリー **zipPostal**アドレス フィールドに格納されます。

*   **国**: サポートされています。

## iOS の癖

*   **県**: 戻る iOS デバイスでサポートされていません`false`.

*   **フォーマット**: 現在サポートされていません。