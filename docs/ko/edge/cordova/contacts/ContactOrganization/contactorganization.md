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

포함 된 `Contact` 개체의 조직 속성.

## 속성

*   **pref**: 설정 `true` 이 경우 `ContactOrganization` 사용자의 기본 설정된 값이 포함 됩니다. *(부울)*

*   **유형**: 예를 들어 필드, *홈* 의 어떤 종류를 나타내는 문자열입니다. _(DOMString)

*   **이름**: 조직 이름. *(DOMString)*

*   **부서**: 계약을 위해 일 하는 부서. *(DOMString)*

*   **제목**: 조직에서 연락처의 제목. *(DOMString)*

## 세부 정보

`ContactOrganization`개체를 연락처의 조직 속성을 저장 합니다. A `Contact` 개체 저장 하나 이상의 `ContactOrganization` 개체 배열에.

## 지원 되는 플랫폼

*   안 드 로이드
*   블랙베리 WebWorks (운영 체제 5.0와 더 높은)
*   iOS
*   Windows Phone 7과 8
*   윈도우 8

## 빠른 예제

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
    

## 안 드 로이드 2.X 단점

*   **pref**: 반환 안 드 로이드 2.X 장치에 의해 지원 되지 않습니다`false`.

## 블랙베리 WebWorks (운영 체제 5.0와 더 높은) 단점이

*   **pref**: 반환 블랙베리 장치에 의해 지원 되지 않습니다`false`.

*   **유형**: 반환 블랙베리 장치에 의해 지원 되지 않습니다`null`.

*   **이름**: 부분적으로 지원 합니다. 첫 번째 조직 이름 블랙베리 **회사** 필드에 저장 됩니다.

*   **부서**: 지원 되지 않는 반환`null`.

*   **제목**: 부분적으로 지원 합니다. 첫 번째 조직 제목 블랙베리 **jobTitle** 필드에 저장 됩니다.

## iOS 단점

*   **pref**: 반환 하는 iOS 장치에서 지원 되지 않습니다`false`.

*   **유형**: 반환 하는 iOS 장치에서 지원 되지 않습니다`null`.

*   **이름**: 부분적으로 지원 합니다. 첫 번째 조직 이름은 iOS **kABPersonOrganizationProperty** 필드에 저장 됩니다.

*   **부서**: 부분적으로 지원 합니다. 첫 번째 부서 이름은 iOS **kABPersonDepartmentProperty** 필드에 저장 됩니다.

*   **제목**: 부분적으로 지원 합니다. 첫 번째 타이틀 iOS **kABPersonJobTitleProperty** 필드에 저장 됩니다.