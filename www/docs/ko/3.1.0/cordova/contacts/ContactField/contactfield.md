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

일반 필드에 지원 한 `Contact` 개체. 일부 속성으로 저장 `ContactField` 이메일 주소, 전화 번호 및 Url을 포함 하는 개체.

## 속성

*   **유형**: 예를 들어 필드, *홈* 의 어떤 종류를 나타내는 문자열입니다. *(DOMString)*

*   **값**: 전화 번호 또는 이메일 주소와 같은 필드 값. *(DOMString)*

*   **pref**: 설정 `true` 이 경우 `ContactField` 사용자의 기본 설정된 값이 포함 됩니다. *(부울)*

## 세부 정보

`ContactField`개체는 재사용 가능한 구성 요소를 나타내는 필드를 일반적으로 문의. 각 `ContactField` 개체에 포함 되어 있는 `value` , `type` , 및 `pref` 속성. A `Contact` 개체에 여러 속성이 저장 `ContactField[]` 배열, 전화 번호 및 이메일 주소.

대부분의 경우에는 미리 결정 된 값에 대 한는 `ContactField` 개체의 **type** 속성. 예를 들어 전화 번호 *홈*, *작품*, *모바일*, *아이폰*, 또는 특정 장치 플랫폼의 연락처 데이터베이스에서 지원 되는 다른 값 **형식** 값을 지정할 수 있습니다. 그러나는 `Contact` **사진** 필드 **유형** 필드 나타냅니다 반환 된 이미지 형식: **url** **값** 특성 **값** 이미지 base64 인코딩된 문자열을 포함 하는 경우 사진 이미지 또는 *base64* URL이 포함 된 경우. 

## 지원 되는 플랫폼

*   안 드 로이드
*   블랙베리 WebWorks (운영 체제 5.0와 더 높은)
*   iOS
*   Windows Phone 7과 8
*   윈도우 8

## 빠른 예제

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
    

## 안 드 로이드 단점

*   **pref**: 지원 되지 않는 반환`false`.

## 블랙베리 WebWorks (운영 체제 5.0와 더 높은) 단점이

*   **유형**: 부분적으로 지원 합니다. 전화 번호에 대 한 사용.

*   **값**: 지원.

*   **pref**: 지원 되지 않는 반환`false`.

## iOS 단점

*   **pref**: 지원 되지 않는 반환`false`.