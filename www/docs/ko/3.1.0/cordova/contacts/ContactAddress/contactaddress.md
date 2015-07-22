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

주소 속성을 포함 한 `Contact` 개체.

## 속성

*   **pref**: 설정 `true` 이 경우 `ContactAddress` 사용자의 기본 설정된 값이 포함 됩니다. *(부울)*

*   **유형**: 예를 들어 필드, *홈* 의 어떤 종류를 나타내는 문자열. *(DOMString)*

*   **포맷**: 전체 주소 표시를 위해 서식이 지정 된. *(DOMString)*

*   **streetAddress**: 전체 주소. *(DOMString)*

*   **지역**: 구, 군 또는 도시. *(DOMString)*

*   **지역**: 상태 또는 지역. *(DOMString)*

*   **postalCode**: 우편 번호 또는 우편 번호. *(DOMString)*

*   **국가**: 국가 이름. *(DOMString)*

## 세부 정보

`ContactAddress`개체는 연락처의 단일 주소 속성을 저장 합니다. A `Contact` 개체에 하나 이상의 주소가 포함 될 수 있습니다는 `ContactAddress[]` 배열.

## 지원 되는 플랫폼

*   안 드 로이드
*   블랙베리 WebWorks (운영 체제 5.0와 더 높은)
*   iOS
*   Windows Phone 7과 8
*   윈도우 8

## 빠른 예제

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
    

## 전체 예제

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
    

## 안 드 로이드 2.X 단점

*   **pref**: 지원 되지 않는 반환 `false` 안 드 로이드 2.X 장치에.

## 블랙베리 WebWorks (운영 체제 5.0와 더 높은) 단점이

*   **pref**: 반환 BlackBerry 장치에서 지원 되지 않습니다`false`.

*   **유형**: 부분적으로 지원 합니다. *작업* 및 *홈* 형식 주소 각 단 하나 접촉 당 저장할 수 있습니다.

*   **포맷**: 부분적으로 지원 합니다. 모든 검은 딸기 주소 필드의 연결을 반환합니다.

*   **streetAddress**: 지원. 블랙베리 **address1** **주소 2** 의 연결 주소 필드를 반환합니다.

*   **지역**: 지원. 블랙베리 **시** 주소 필드에 저장 합니다.

*   **지역**: 지원. 블랙베리 **stateProvince** 주소 필드에 저장 합니다.

*   **postalCode**: 지원. 블랙베리 **zipPostal** 주소 필드에 저장 합니다.

*   **국가**: 지원.

## iOS 단점

*   **pref**: 반환 하는 iOS 장치에서 지원 되지 않습니다`false`.

*   **포맷**: 현재 지원 되지 않습니다.