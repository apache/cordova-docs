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

# <a href="../contacts.html">연락처</a>

<a href="../contacts.html">연락처</a>를 사용자의 개인 또는 비즈니스 <a href="../contacts.html">연락처</a> 등을 설명 하는 속성이 포함 되어 있습니다.

## 속성

*   **id**: 글로벌 고유 식별자. *(DOMString)*

*   **displayName**: 최종 사용자에 게 표시에 적합이 <a href="../contacts.html">연락처</a>의 이름. *(DOMString)*

*   **이름**: 사람 이름의 모든 구성 요소를 포함 하는 개체. *(<a href="../ContactName/contactname.html">담당자 이름</a>)*

*   **별명**: 캐주얼 이름 <a href="../contacts.html">연락처</a> 주소입니다. *(DOMString)*

*   **phoneNumbers**: 모든 <a href="../contacts.html">연락처</a>의 전화 번호의 배열. *(<a href="../ContactField/contactfield.html">ContactField</a>[])*

*   **이메일**: 모든 <a href="../contacts.html">연락처</a>의 전자 메일 주소의 배열. *(<a href="../ContactField/contactfield.html">ContactField</a>[])*

*   **주소**: 모든 <a href="../contacts.html">연락처</a>의 주소 배열. *(<a href="../ContactAddress/contactaddress.html">ContactAddress</a>[])*

*   **ims**: 모든 <a href="../contacts.html">연락처</a>의 IM 주소 배열. *(<a href="../ContactField/contactfield.html">ContactField</a>[])*

*   **조직**: 다양 한 모든 <a href="../contacts.html">연락처</a>의 조직. *(<a href="../ContactOrganization/contactorganization.html">ContactOrganization</a>[])*

*   **생일**: <a href="../contacts.html">연락처</a>의 생일. *(날짜)*

*   **참고**: <a href="../contacts.html">연락처</a>에 대 한 참고. *(DOMString)*

*   **사진**: <a href="../contacts.html">연락처</a>의 사진을 배열. *(<a href="../ContactField/contactfield.html">ContactField</a>[])*

*   **카테고리**: 모든 사용자 정의 범주 <a href="../contacts.html">연락처</a>에 <a href="../../connection/connection.html">연결</a> 된 배열. *(<a href="../ContactField/contactfield.html">ContactField</a>[])*

*   **url**: <a href="../contacts.html">연락처</a>에 <a href="../../connection/connection.html">연결</a> 된 웹 페이지의 배열. *(<a href="../ContactField/contactfield.html">ContactField</a>[])*

## 메서드

*   **복제**: 새로운 반환 합니다 `Contact` 으로 호출 하는 개체의 전체 복사본은 개체는 `id` 속성으로 설정`null`.

*   **제거**: <a href="../../device/device.html">장치</a> <a href="../contacts.html">연락처</a> <a href="../../storage/database/database.html">데이터베이스</a>에서 <a href="../contacts.html">연락처</a>를 제거 합니다, 그렇지 않으면와 오류 콜백을 실행 한 `<a href="../ContactError/<a href="../parameters/contactError.html">contactError</a>.html">ContactError</a>` 개체.

*   **저장**: <a href="../../device/device.html">장치</a> <a href="../contacts.html">연락처</a> <a href="../../storage/database/database.html">데이터베이스</a>를 새 <a href="../contacts.html">연락처</a>를 저장 또는 동일한 **id** 를 가진 <a href="../contacts.html">연락처</a>가 이미 있는 경우 기존 <a href="../contacts.html">연락처</a>를 업데이트 합니다.

## 세부 정보

`Contact`개체는 사용자의 <a href="../contacts.html">연락처</a>를 나타냅니다. <a href="../contacts.html">연락처</a> 생성 수, 저장 또는 <a href="../../device/device.html">장치</a> <a href="../contacts.html">연락처</a> <a href="../../storage/database/database.html">데이터베이스</a>에서 제거 합니다. <a href="../contacts.html">연락처</a>도 검색할 수 있습니다 (개별적으로 또는 일괄적으로) <a href="../../storage/database/database.html">데이터베이스</a>에서 호출 하 여는 `<a href="../contacts.find.html">contacts.find</a>` 방법.

**참고:** 모든 <a href="../contacts.html">연락처</a> 필드 위에 나열 된 모든 <a href="../../device/device.html">장치</a> 플랫폼에서 지원 됩니다. 자세한 내용은 각 플랫폼의 *단점이* 섹션을 확인 하시기 바랍니다.

## 지원 되는 플랫폼

*   안 드 로이드
*   블랙베리 WebWorks (운영 체제 5.0와 더 높은)
*   iOS
*   Windows Phone 7과 8
*   윈도우 8

## 빠른 예를 들어 저장

    function onSuccess(contact) {
        alert("Save Success");
    };
    
    function onError(<a href="../parameters/contactError.html">contactError</a>) {
        alert("Error = " + <a href="../parameters/contactError.html">contactError</a>.code);
    };
    
    // create a new contact object
    var contact = navigator.<a href="../contacts.create.html">contacts.create</a>();
    contact.displayName = "Plumber";
    contact.nickname = "Plumber";            // specify both to support all devices
    
    // populate some fields
    var name = new ContactName();
    name.givenName = "Jane";
    name.familyName = "Doe";
    contact.name = name;
    
    // save to device
    contact.save(onSuccess,onError);
    

## 복제 빠른 예

        // clone the contact object
        var clone = contact.clone();
        clone.name.givenName = "John";
        console.log("Original contact name = " + contact.name.givenName);
        console.log("Cloned contact name = " + clone.name.givenName);
    

## 빠른 예를 들어 제거

    function onSuccess() {
        alert("Removal Success");
    };
    
    function onError(<a href="../parameters/contactError.html">contactError</a>) {
        alert("Error = " + <a href="../parameters/contactError.html">contactError</a>.code);
    };
    
        // remove the contact from the device
        contact.remove(onSuccess,onError);
    

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
            // create
            var contact = navigator.<a href="../contacts.create.html">contacts.create</a>();
            contact.displayName = "Plumber";
            contact.nickname = "Plumber";                 // specify both to support all devices
            var name = new ContactName();
            name.givenName = "Jane";
            name.familyName = "Doe";
            contact.name = name;
    
            // save
            contact.save(onSaveSuccess,onSaveError);
    
            // clone
            var clone = contact.clone();
            clone.name.givenName = "John";
            console.log("Original contact name = " + contact.name.givenName);
            console.log("Cloned contact name = " + clone.name.givenName);
    
            // remove
            contact.remove(onRemoveSuccess,onRemoveError);
        }
    
        // onSaveSuccess: Get a snapshot of the current contacts
        //
        function onSaveSuccess(contact) {
            alert("Save Success");
        }
    
        // onSaveError: Failed to get the contacts
        //
        function onSaveError(<a href="../parameters/contactError.html">contactError</a>) {
            alert("Error = " + <a href="../parameters/contactError.html">contactError</a>.code);
        }
    
        // onRemoveSuccess: Get a snapshot of the current contacts
        //
        function onRemoveSuccess(contacts) {
            alert("Removal Success");
        }
    
        // onRemoveError: Failed to get the contacts
        //
        function onRemoveError(<a href="../parameters/contactError.html">contactError</a>) {
            alert("Error = " + <a href="../parameters/contactError.html">contactError</a>.code);
        }
    
        </script>
      </head>
      <body>
        <h1><a href="../../storage/storage.opendatabase.html">Example</a></h1>
        <p>Find Contacts</p>
      </body>
    </html>
    

## 안 드 로이드 2.X 단점

*   **카테고리**: 안 드 로이드 2.X <a href="../../device/device.html">장치</a>, 반환에서 지원 되지 않습니다`null`.

## 블랙베리 WebWorks (운영 체제 5.0와 더 높은) 단점이

*   **id**: 지원. <a href="../contacts.html">연락처</a>를 저장 하면 <a href="../../device/device.html">장치</a>에 의해 할당 된.

*   **displayName**: 지원. 블랙베리 **사용자 1** 필드에 저장 합니다.

*   **별명**: 지원 되지 않는 반환`null`.

*   **phoneNumbers**: 부분적으로 지원 합니다. 전화 번호 *형식이 '홈', **workPhone1** 및 **workPhone2** *형식이 '작품', **모바일 폰** *형식이 '모바일'* * , **faxPhone** *형식이 '팩스', **pagerPhone** *형식이 '호출기'와 **otherPhone** *형식이 위의 아무도--- * 블랙베리 필드 **homePhone1** 및 **homePhone2** 에 저장 됩니다.

*   **이메일**: 부분적으로 지원 합니다. 첫번째 3 개의 이메일 주소는 각각 블랙베리 **email1**, **email2**및 **email3** 필드에 저장 됩니다.

*   **주소**: 부분적으로 지원 합니다. 첫 번째와 두 번째 주소는 각각 블랙베리 **homeAddress** 및 **workAddress** 필드에 저장 됩니다.

*   **ims**: 지원 되지 않는 반환`null`.

*   **조직**: 부분적으로 지원 합니다. **이름** 및 **제목** 첫 번째 조직의 각각 블랙베리 **회사** 및 **제목** 필드에 저장 됩니다.

*   **사진**: 부분적으로 지원 합니다. 단일 축소판 그림 크기의 사진 지원 됩니다. <a href="../contacts.html">연락처</a>의 사진으로 설정 하려면 전달에 base64 인코딩된 이미지 또는 이미지를 가리키는 URL. 블랙베리 <a href="../contacts.html">연락처</a> <a href="../../storage/database/database.html">데이터베이스</a>에 저장 하기 전에 이미지는 축소 된. <a href="../contacts.html">연락처</a> 사진 base64 인코딩 이미지로 반환 됩니다.

*   **카테고리**: 부분적으로 지원 합니다. *비즈니스* 및 *개인적인* 종류만 지원 됩니다.

*   **url**: 부분적으로 지원 합니다. 첫 번째 URL 블랙베리 **웹 페이지** 필드에 저장 됩니다.

## iOS 단점

*   **displayName**: 반환 iOS에서 지원 되지 않는 `null` 가 아무 `ContactName` 지정 된,이 경우 복합 이름, **닉네임** 을 반환 합니다 또는 `""` , 각각.

*   **생일**: 자바 스크립트로 입력 해야 합니다 `Date` 개체를 같은 방식으로 반환 됩니다.

*   **사진**: 응용 프로그램의 임시 디렉터리에 저장 된 이미지 <a href="../../file/fileobj/fileobj.html">파일</a> URL을 반환 합니다. 응용 프로그램이 종료 될 때 임시 디렉터리의 내용은 제거 됩니다.

*   **카테고리**:이 속성은 현재 지원 되지 않습니다, 반환`null`.

## Windows Phone 7, 8 특수

*   **displayName**: <a href="../contacts.html">연락처</a>를 만들 때 표시 이름에서 표시 이름 매개 <a href="../../../plugin_ref/spec.html">변수</a> 다릅니다 제공 값 검색 <a href="../contacts.html">연락처</a>를 찾을 때.

*   **url**: 때 <a href="../contacts.html">연락처</a>를 만드는 사용자가 입력을 하나 이상의 웹 주소를 저장 하지만 하나만 사용할 수 때 사용할 수 있는 <a href="../contacts.html">연락처</a>를 검색 합니다.

*   **phoneNumbers**: *pref* 옵션이 지원 되지 않습니다. *형식* *찾기* 작업에서 지원 되지 않습니다. 단 하나 `phoneNumber` 각 *형식* 에 대 한 허용.

*   **이메일**: *pref* 옵션이 지원 되지 않습니다. 가정 및 개인 동일한 이메일 항목 참조. 각 *형식* 에 대 한 항목이 하나만 허용.

*   **주소**: 직장, 및 가정/개인 *유형*을 지원 합니다. 가정 및 개인 *유형* 동일한 주소 항목 참조. 각 *형식* 에 대 한 항목이 하나만 허용.

*   **조직**: 하나만 허용 되 고 *pref*, *유형*및 *부서* 특성을 지원 하지 않습니다.

*   **참고**: 지원 되지 않는 반환`null`.

*   **ims**: 지원 되지 않는 반환`null`.

*   **생일**: 지원 되지 않는 반환`null`.

*   **카테고리**: 지원 되지 않는 반환`null`.