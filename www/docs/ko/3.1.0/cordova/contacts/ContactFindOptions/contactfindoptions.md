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

# ContactFindOptions

결과 필터링 하는 데 사용할 수 있는 속성을 포함 한 `contacts.find` 작업.

## 속성

*   **필터**: 연락처를 찾는 데 사용할 검색 문자열. *(DOMString)* (기본:`""`)

*   **여러**: 찾기 작업 여러 연락처를 반환 합니다 경우 결정 합니다. *(부울)* (기본:`false`)

## 지원 되는 플랫폼

*   안 드 로이드
*   블랙베리 WebWorks (운영 체제 5.0와 더 높은)
*   iOS
*   Windows Phone 7과 8
*   윈도우 8

## 빠른 예제

    // success callback
    function onSuccess(contacts) {
        for (var i=0; i<contacts.length; i++) {
            alert(contacts[i].displayName);
        }
    };
    
    // error callback
    function onError(contactError) {
        alert('onError!');
    };
    
    // specify contact search criteria
    var options = new ContactFindOptions();
        options.filter="";        // empty search string returns all contacts
        options.multiple=true;    // return multiple results
        filter = ["displayName"]; // return contact.displayName field
    
        // find contacts
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
            // specify contact search criteria
            var options = new ContactFindOptions();
            options.filter = "";      // empty search string returns all contacts
            options.multiple = true;  // return multiple results
            filter = ["displayName"]; // return contact.displayName field
    
            // find contacts
            navigator.contacts.find(filter, onSuccess, onError, options);
        }
    
        // onSuccess: Get a snapshot of the current contacts
        //
        function onSuccess(contacts) {
            for (var i=0; i<contacts.length; i++) {
                alert(contacts[i].displayName);
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