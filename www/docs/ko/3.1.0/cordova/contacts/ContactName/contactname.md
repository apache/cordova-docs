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

# 담당자 이름

에 대 한 다양 한 정보를 포함 한 `Contact` 개체의 이름.

## 속성

*   **포맷**: <a href="../contacts.html">연락처</a>의 전체 이름. *(DOMString)*

*   **familyName**: <a href="../contacts.html">연락처</a>의 성. *(DOMString)*

*   **givenName**: <a href="../contacts.html">연락처</a>의 이름. *(DOMString)*

*   **middleName**: <a href="../contacts.html">연락처</a>의 중간 이름을. *(DOMString)*

*   **honorificPrefix**: <a href="../contacts.html">연락처</a>의 접두사 (예: *미스터* 또는 *닥터*) *(DOMString)*

*   **honorificSuffix**: <a href="../contacts.html">연락처</a>의 접미사 ( *esq.*예). *(DOMString)*

## 세부 정보

`ContactName`개체는 <a href="../contacts.html">연락처</a>의 이름 속성에 저장 합니다.

## 지원 되는 플랫폼

*   안 드 로이드 2.X
*   블랙베리 WebWorks (운영 체제 5.0와 더 높은)
*   iOS
*   Windows Phone 7과 8
*   윈도우 8

## 빠른 예제

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
    

## 전체 예제

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
    

## 안 드 로이드 단점

*   **포맷**: 부분적으로 지원 되 고 읽기 전용. <a href="../../connection/connection.html">연결</a>을 반환 합니다 `honorificPrefix` , `givenName` , `middleName` , `familyName` , 그리고`honorificSuffix`.

## 블랙베리 WebWorks (운영 체제 5.0와 더 높은) 단점이

*   **포맷**: 부분적으로 지원 합니다. 블랙베리 **firstName** 및 **lastName** 필드의 <a href="../../connection/connection.html">연결</a>을 반환합니다.

*   **familyName**: 지원. 블랙베리 **lastName** 필드에 저장 합니다.

*   **givenName**: 지원. 블랙베리 **firstName** 필드에 저장 합니다.

*   **middleName**: 지원 되지 않는 반환`null`.

*   **honorificPrefix**: 지원 되지 않는 반환`null`.

*   **honorificSuffix**: 지원 되지 않는 반환`null`.

## iOS 단점

*   **포맷**: 부분적으로 지원 합니다. IOS 복합 이름 반환 하지만 읽기 전용입니다.