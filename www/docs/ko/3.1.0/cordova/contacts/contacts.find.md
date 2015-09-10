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

# contacts.find

<a href="../device/device.html">장치</a> <a href="contacts.html">연락처</a> <a href="../storage/database/database.html">데이터베이스</a> 쿼리 및 반환 합니다 하나 이상의 `Contact` 개체를 지정 하는 필드가 들어 있는 각.

    navigator.contacts.find(<a href="parameters/contactFields.html">contactFields</a>, <a href="parameters/contactSuccess.html">contactSuccess</a>, <a href="parameters/contactError.html">contactError</a>, <a href="parameters/contactFindOptions.html">contactFindOptions</a>);
    

## 설명

`contacts.find`<a href="../device/device.html">장치</a> <a href="contacts.html">연락처</a> <a href="../storage/database/database.html">데이터베이스</a> 쿼리 및의 배열을 반환 메서드가 비동기적으로 실행 될 `Contact` 개체. 결과 객체에 전달 되는 `<a href="parameters/contactSuccess.html">contactSuccess</a>` **<a href="parameters/contactSuccess.html">contactSuccess</a>** 매개 <a href="../../plugin_ref/spec.html">변수</a>로 지정 된 콜백 함수.

**<a href="ContactField/contactfield.html">ContactField</a>s** 매개 <a href="../../plugin_ref/spec.html">변수</a> 검색 한정자로 사용할 수 있는 필드를 지정 하 고 그 결과 **<a href="parameters/contactSuccess.html">contactSuccess</a>** 콜백 함수에 전달 됩니다. 길이가 0 인 **<a href="parameters/contactFields.html">contactFields</a>** 매개 <a href="../../plugin_ref/spec.html">변수</a> 유효 하지 않습니다 및 결과 `<a href="ContactError/<a href="parameters/contactError.html">contactError</a>.html">ContactError</a>.INVALID_ARGUMENT_ERROR` . **<a href="ContactField/contactfield.html">ContactField</a>s** 값이 `"*"` 모든 <a href="contacts.html">연락처</a> 필드를 반환 합니다.

**<a href="ContactFindOptions/contactfindoptions.html">ContactFindOptions</a>.filter** 문자열 <a href="contacts.html">연락처</a> <a href="../storage/database/database.html">데이터베이스</a>를 쿼리할 때 검색 필터로 사용할 수 있습니다. 제공 된, 대/소문자, 부분 값 일치 **<a href="parameters/contactFields.html">contactFields</a>** 매개 <a href="../../plugin_ref/spec.html">변수</a>에 지정 된 각 필드에 적용 됩니다. *모든* 지정 된 필드의 일치 하는 경우 <a href="contacts.html">연락처</a> 반환 됩니다.

## 매개 <a href="../../plugin_ref/spec.html">변수</a>

*   **<a href="parameters/contactFields.html">contactFields</a>**: 검색 한정자로 사용 하는 필드에 문의. 그 결과 `Contact` 만이 필드의 값을 보유 하는 개체. *(DOMString[])* [필수]

*   **<a href="parameters/contactSuccess.html">contactSuccess</a>**: <a href="../storage/database/database.html">데이터베이스</a>에서 반환 되는 성공 콜백 함수는 <a href="contacts.html">연락처</a>와 함께 호출 합니다. [필수]

*   **<a href="parameters/contactError.html">contactError</a>**: 오류 콜백 함수에 오류가 발생할 때 호출 됩니다. [선택 사항]

*   **<a href="parameters/contactFindOptions.html">contactFindOptions</a>**: <a href="contacts.html">연락처</a>를 필터링 하는 옵션을 검색 합니다. [선택 사항]

## 지원 되는 플랫폼

*   안 드 로이드
*   블랙베리 WebWorks (운영 체제 5.0와 더 높은)
*   iOS
*   Windows Phone 7과 8
*   윈도우 8

## 빠른 예제

    function onSuccess(contacts) {
        alert('Found ' + contacts.length + ' contacts.');
    };
    
    function onError(<a href="parameters/contactError.html">contactError</a>) {
        alert('onError!');
    };
    
    // find all contacts with 'Bob' in any name field
    var options      = new <a href="ContactFindOptions/contactfindoptions.html">ContactFindOptions</a>();
    options.filter   = "Bob";
    options.multiple = true;
    var fields       = ["displayName", "name"];
    navigator.contacts.find(fields, onSuccess, onError, options);
    

## 전체 예제

    <!DOCTYPE html>
    <html>
        <head>
            <title>Contact <a href="../storage/storage.opendatabase.html">Example</a></title>
            <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
            <script type="text/javascript" charset="utf-8">
    
                // Wait for device API libraries to load
                document.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>("<a href="../events/events.deviceready.html">deviceready</a>", onDeviceReady, false);
    
                // device APIs are available
    
                function onDeviceReady() {
                    // find all contacts with 'Bob' in any name field
                    var options = new <a href="ContactFindOptions/contactfindoptions.html">ContactFindOptions</a>();
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
    
                function onError(<a href="parameters/contactError.html">contactError</a>) {
                    alert('onError!');
                }
            </script>
        </head>
    
        <body>
            <h1><a href="../storage/storage.opendatabase.html">Example</a></h1>
            <p>Find Contacts</p>
        </body>
    </html>