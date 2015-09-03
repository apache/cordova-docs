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


# 연락처

> `contacts`개체는 장치 연락처 데이터베이스에 대 한 액세스를 제공 합니다.

**중요 한 개인 정보 보호 참고:** 연락처 데이터의 수집 및 사용 중요 한 개인 정보 보호 문제를 발생 시킵니다. 응용 프로그램의 개인 정보 보호 정책 응용 프로그램 연락처 데이터를 사용 하는 방법 및 다른 당사자와 함께 공유 하는 여부를 토론 해야 한다. 연락처 정보 누구와 통신 하는 사람이 사람들 보여 때문에 민감한으로 간주 됩니다. 따라서, 응용 프로그램의 개인 정보 보호 정책 뿐만 아니라 강하게 좋습니다 그냥--시간 통지 이전에 귀하의 응용 프로그램에 액세스 하거나 사용 하 여 연락처 데이터 (장치 운영 체제는 이미 그래서를 하지 않습니다). 그 통지는 (예를 들어, **확인** 및 **아니오**선택 제시) 하 여 사용자의 허가 취득 뿐만 아니라, 위에서 언급 된 동일한 정보를 제공 해야 합니다. Note 일부 애플 리 케이 션 장 터 그냥--시간 공지 및 연락처 데이터에 액세스 하기 전에 사용자에 게 허가를 귀하의 응용 프로그램에 필요할 수 있습니다. 연락처 데이터는 사용자의 혼동을 방지 하는 데 도움이 됩니다를 사용 하 여 및 연락처 데이터의 인식된 오용 명확 하 고 이해 하기 쉬운 사용자 경험. 자세한 내용은 개인 정보 보호 가이드를 참조 하십시오.

## 메서드

*   contacts.create
*   contacts.find

## 인수

*   contactFields
*   contactSuccess
*   contactError
*   contactFindOptions

## 개체

*   연락처
*   담당자 이름
*   ContactField
*   ContactAddress
*   ContactOrganization
*   ContactFindOptions
*   ContactError

## 기능 액세스

버전 3.0, 코르도바 *플러그인*으로 장치 수준 Api를 구현합니다. CLI의 사용 `plugin` 명령 설명에 명령줄 인터페이스를 추가 하거나 프로젝트에 대 한이 기능을 제거 하려면:

        $ cordova plugin add org.apache.cordova.contacts
        $ cordova plugin ls
        [ 'org.apache.cordova.contacts' ]
        $ cordova plugin rm org.apache.cordova.contacts
    

이 명령은 모든 타겟된 플랫폼에 적용 하지만 플랫폼 관련 구성 설정을 아래에 설명 된 수정:

*   안 드 로이드
    
        (in app/res/xml/config.xml)
        <feature name="Contacts">
            <param name="android-package" value="org.apache.cordova.ContactManager" />
        </feature>
        
        (in app/AndroidManifest.xml)
        <uses-permission android:name="android.permission.GET_ACCOUNTS" />
        <uses-permission android:name="android.permission.READ_CONTACTS" />
        <uses-permission android:name="android.permission.WRITE_CONTACTS" />
        

*   블랙베리 WebWorks
    
        (in www/plugins.xml)
        <feature name="Contact">
            <param name="blackberry-package" value="org.apache.cordova.pim.Contact" />
        </feature>
        
        (in www/config.xml)
        <feature id="blackberry.find"        required="true" version="1.0.0.0" />
        <feature id="blackberry.identity"    required="true" version="1.0.0.0" />
        <feature id="blackberry.pim.Address" required="true" version="1.0.0.0" />
        <feature id="blackberry.pim.Contact" required="true" version="1.0.0.0" />
        

*   (iOS`config.xml`)
    
        <feature name="Contacts">
            <param name="ios-package" value="CDVContacts" />
        </feature>
        

*   Windows Phone
    
        (in Properties/WPAppManifest.xml)
        <Capabilities>
            <Capability Name="ID_CAP_CONTACTS" />
        </Capabilities>
        
    
    참고: [Windows Phone 대 한 응용 프로그램 매니페스트][1]

 [1]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx

일부 플랫폼은 특별 한 구성이 필요 없이이 기능을 지원할 수 있습니다. *플랫폼 지원* 개요 섹션에서을 참조 하십시오.


# contacts.create

새 연락처 개체를 반환합니다.

    var contact = navigator.contacts.create(properties);
    

## 설명

`contacts.create`메서드는 동기적, 및 새로운 반환 합니다 `Contact` 개체.

이 메서드를 호출 해야 장치 연락처 데이터베이스에 연락처 개체를 유지 하지 않습니다는 `Contact.save` 방법.

## 지원 되는 플랫폼

*   안 드 로이드
*   블랙베리 WebWorks (운영 체제 5.0와 더 높은)
*   iOS
*   Windows Phone 7과 8

## 빠른 예제

    var myContact = navigator.contacts.create({"displayName": "Test User"});
    

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
            var myContact = navigator.contacts.create({"displayName": "Test User"});
            myContact.note = "This contact has a note.";
            console.log("The contact, " + myContact.displayName + ", note: " + myContact.note);
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>Create Contact</p>
      </body>
    </html>


# contacts.find

장치 연락처 데이터베이스 쿼리 및 반환 합니다 하나 이상의 `Contact` 개체를 지정 하는 필드가 들어 있는 각.

    navigator.contacts.find(contactFields, contactSuccess, contactError, contactFindOptions);
    

## 설명

`contacts.find`장치 연락처 데이터베이스 쿼리 및의 배열을 반환 메서드가 비동기적으로 실행 될 `Contact` 개체. 결과 객체에 전달 되는 `contactSuccess` **contactSuccess** 매개 변수로 지정 된 콜백 함수.

**ContactFields** 매개 변수 검색 한정자로 사용할 수 있는 필드를 지정 하 고 그 결과 **contactSuccess** 콜백 함수에 전달 됩니다. 길이가 0 인 **contactFields** 매개 변수 유효 하지 않습니다 및 결과 `ContactError.INVALID_ARGUMENT_ERROR` . **ContactFields** 값이 `"*"` 모든 연락처 필드를 반환 합니다.

**ContactFindOptions.filter** 문자열 연락처 데이터베이스를 쿼리할 때 검색 필터로 사용할 수 있습니다. 제공 된, 대/소문자, 부분 값 일치 **contactFields** 매개 변수에 지정 된 각 필드에 적용 됩니다. *모든* 지정 된 필드의 일치 하는 경우 연락처 반환 됩니다.

## 매개 변수

*   **contactFields**: 검색 한정자로 사용 하는 필드에 문의. 그 결과 `Contact` 만이 필드의 값을 보유 하는 개체. *(DOMString[])* [필수]

*   **contactSuccess**: 데이터베이스에서 반환 되는 성공 콜백 함수는 연락처와 함께 호출 합니다. [필수]

*   **contactError**: 오류 콜백 함수에 오류가 발생할 때 호출 됩니다. [선택 사항]

*   **contactFindOptions**: 연락처를 필터링 하는 옵션을 검색 합니다. [선택 사항]

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
    
    function onError(contactError) {
        alert('onError!');
    };
    
    // find all contacts with 'Bob' in any name field
    var options      = new ContactFindOptions();
    options.filter   = "Bob";
    options.multiple = true;
    var fields       = ["displayName", "name"];
    navigator.contacts.find(fields, onSuccess, onError, options);
    

## 전체 예제

    <!DOCTYPE html>
    <html>
        <head>
            <title>Contact Example</title>
            <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
            <script type="text/javascript" charset="utf-8">
    
                // Wait for device API libraries to load
                document.addEventListener("deviceready", onDeviceReady, false);
    
                // device APIs are available
    
                function onDeviceReady() {
                    // find all contacts with 'Bob' in any name field
                    var options = new ContactFindOptions();
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


# 연락처

연락처를 사용자의 개인 또는 비즈니스 연락처 등을 설명 하는 속성이 포함 되어 있습니다.

## 속성

*   **id**: 글로벌 고유 식별자. *(DOMString)*

*   **displayName**: 최종 사용자에 게 표시에 적합이 연락처의 이름. *(DOMString)*

*   **이름**: 사람 이름의 모든 구성 요소를 포함 하는 개체. *(담당자 이름)*

*   **별명**: 캐주얼 이름 연락처 주소입니다. *(DOMString)*

*   **phoneNumbers**: 모든 연락처의 전화 번호의 배열. *(ContactField[])*

*   **이메일**: 모든 연락처의 전자 메일 주소의 배열. *(ContactField[])*

*   **주소**: 모든 연락처의 주소 배열. *(ContactAddress[])*

*   **ims**: 모든 연락처의 IM 주소 배열. *(ContactField[])*

*   **조직**: 다양 한 모든 연락처의 조직. *(ContactOrganization[])*

*   **생일**: 연락처의 생일. *(날짜)*

*   **참고**: 연락처에 대 한 참고. *(DOMString)*

*   **사진**: 연락처의 사진을 배열. *(ContactField[])*

*   **카테고리**: 모든 사용자 정의 범주 연락처에 연결 된 배열. *(ContactField[])*

*   **url**: 연락처에 연결 된 웹 페이지의 배열. *(ContactField[])*

## 메서드

*   **복제**: 새로운 반환 합니다 `Contact` 으로 호출 하는 개체의 전체 복사본은 개체는 `id` 속성으로 설정`null`.

*   **제거**: 장치 연락처 데이터베이스에서 연락처를 제거 합니다, 그렇지 않으면와 오류 콜백을 실행 한 `ContactError` 개체.

*   **저장**: 장치 연락처 데이터베이스를 새 연락처를 저장 또는 동일한 **id** 를 가진 연락처가 이미 있는 경우 기존 연락처를 업데이트 합니다.

## 세부 정보

`Contact`개체는 사용자의 연락처를 나타냅니다. 연락처 생성 수, 저장 또는 장치 연락처 데이터베이스에서 제거 합니다. 연락처도 검색할 수 있습니다 (개별적으로 또는 일괄적으로) 데이터베이스에서 호출 하 여는 `contacts.find` 방법.

**참고:** 모든 연락처 필드 위에 나열 된 모든 장치 플랫폼에서 지원 됩니다. 자세한 내용은 각 플랫폼의 *단점이* 섹션을 확인 하시기 바랍니다.

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
    
    function onError(contactError) {
        alert("Error = " + contactError.code);
    };
    
    // create a new contact object
    var contact = navigator.contacts.create();
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
    
    function onError(contactError) {
        alert("Error = " + contactError.code);
    };
    
        // remove the contact from the device
        contact.remove(onSuccess,onError);
    

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
            // create
            var contact = navigator.contacts.create();
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
        function onSaveError(contactError) {
            alert("Error = " + contactError.code);
        }
    
        // onRemoveSuccess: Get a snapshot of the current contacts
        //
        function onRemoveSuccess(contacts) {
            alert("Removal Success");
        }
    
        // onRemoveError: Failed to get the contacts
        //
        function onRemoveError(contactError) {
            alert("Error = " + contactError.code);
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>Find Contacts</p>
      </body>
    </html>
    

## 안 드 로이드 2.X 단점

*   **카테고리**: 안 드 로이드 2.X 장치, 반환에서 지원 되지 않습니다`null`.

## 블랙베리 WebWorks (운영 체제 5.0와 더 높은) 단점이

*   **id**: 지원. 연락처를 저장 하면 장치에 의해 할당 된.

*   **displayName**: 지원. 블랙베리 **사용자 1** 필드에 저장 합니다.

*   **별명**: 지원 되지 않는 반환`null`.

*   **phoneNumbers**: 부분적으로 지원 합니다. 전화 번호 *형식이 '홈', **workPhone1** 및 **workPhone2** *형식이 '작품', **모바일 폰** *형식이 '모바일'* * , **faxPhone** *형식이 '팩스', **pagerPhone** *형식이 '호출기'와 **otherPhone** *형식이 위의 아무도--- * 블랙베리 필드 **homePhone1** 및 **homePhone2** 에 저장 됩니다.

*   **이메일**: 부분적으로 지원 합니다. 첫번째 3 개의 이메일 주소는 각각 블랙베리 **email1**, **email2**및 **email3** 필드에 저장 됩니다.

*   **주소**: 부분적으로 지원 합니다. 첫 번째와 두 번째 주소는 각각 블랙베리 **homeAddress** 및 **workAddress** 필드에 저장 됩니다.

*   **ims**: 지원 되지 않는 반환`null`.

*   **조직**: 부분적으로 지원 합니다. **이름** 및 **제목** 첫 번째 조직의 각각 블랙베리 **회사** 및 **제목** 필드에 저장 됩니다.

*   **사진**: 부분적으로 지원 합니다. 단일 축소판 그림 크기의 사진 지원 됩니다. 연락처의 사진으로 설정 하려면 전달에 base64 인코딩된 이미지 또는 이미지를 가리키는 URL. 블랙베리 연락처 데이터베이스에 저장 하기 전에 이미지는 축소 된. 연락처 사진 base64 인코딩 이미지로 반환 됩니다.

*   **카테고리**: 부분적으로 지원 합니다. *비즈니스* 및 *개인적인* 종류만 지원 됩니다.

*   **url**: 부분적으로 지원 합니다. 첫 번째 URL 블랙베리 **웹 페이지** 필드에 저장 됩니다.

## iOS 단점

*   **displayName**: 반환 iOS에서 지원 되지 않는 `null` 가 아무 `ContactName` 지정 된,이 경우 복합 이름, **닉네임** 을 반환 합니다 또는 `""` , 각각.

*   **생일**: 자바 스크립트로 입력 해야 합니다 `Date` 개체를 같은 방식으로 반환 됩니다.

*   **사진**: 응용 프로그램의 임시 디렉터리에 저장 된 이미지 파일 URL을 반환 합니다. 응용 프로그램이 종료 될 때 임시 디렉터리의 내용은 제거 됩니다.

*   **카테고리**:이 속성은 현재 지원 되지 않습니다, 반환`null`.

## Windows Phone 7, 8 특수

*   **displayName**: 연락처를 만들 때 표시 이름에서 표시 이름 매개 변수 다릅니다 제공 값 검색 연락처를 찾을 때.

*   **url**: 때 연락처를 만드는 사용자가 입력을 하나 이상의 웹 주소를 저장 하지만 하나만 사용할 수 때 사용할 수 있는 연락처를 검색 합니다.

*   **phoneNumbers**: *pref* 옵션이 지원 되지 않습니다. *형식* *찾기* 작업에서 지원 되지 않습니다. 단 하나 `phoneNumber` 각 *형식* 에 대 한 허용.

*   **이메일**: *pref* 옵션이 지원 되지 않습니다. 가정 및 개인 동일한 이메일 항목 참조. 각 *형식* 에 대 한 항목이 하나만 허용.

*   **주소**: 직장, 및 가정/개인 *유형*을 지원 합니다. 가정 및 개인 *유형* 동일한 주소 항목 참조. 각 *형식* 에 대 한 항목이 하나만 허용.

*   **조직**: 하나만 허용 되 고 *pref*, *유형*및 *부서* 특성을 지원 하지 않습니다.

*   **참고**: 지원 되지 않는 반환`null`.

*   **ims**: 지원 되지 않는 반환`null`.

*   **생일**: 지원 되지 않는 반환`null`.

*   **카테고리**: 지원 되지 않는 반환`null`.


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


# 담당자 이름

에 대 한 다양 한 정보를 포함 한 `Contact` 개체의 이름.

## 속성

*   **포맷**: 연락처의 전체 이름. *(DOMString)*

*   **familyName**: 연락처의 성. *(DOMString)*

*   **givenName**: 연락처의 이름. *(DOMString)*

*   **middleName**: 연락처의 중간 이름을. *(DOMString)*

*   **honorificPrefix**: 연락처의 접두사 (예: *미스터* 또는 *닥터*) *(DOMString)*

*   **honorificSuffix**: 연락처의 접미사 ( *esq.*예). *(DOMString)*

## 세부 정보

`ContactName`개체는 연락처의 이름 속성에 저장 합니다.

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
    
    function onError(contactError) {
        alert('onError!');
    };
    
    var options = new ContactFindOptions();
    options.filter = "";
    filter = ["displayName", "name"];
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
            filter = ["displayName","name"];
            navigator.contacts.find(filter, onSuccess, onError, options);
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

*   **포맷**: 부분적으로 지원 되 고 읽기 전용. 연결을 반환 합니다 `honorificPrefix` , `givenName` , `middleName` , `familyName` , 그리고`honorificSuffix`.

## 블랙베리 WebWorks (운영 체제 5.0와 더 높은) 단점이

*   **포맷**: 부분적으로 지원 합니다. 블랙베리 **firstName** 및 **lastName** 필드의 연결을 반환합니다.

*   **familyName**: 지원. 블랙베리 **lastName** 필드에 저장 합니다.

*   **givenName**: 지원. 블랙베리 **firstName** 필드에 저장 합니다.

*   **middleName**: 지원 되지 않는 반환`null`.

*   **honorificPrefix**: 지원 되지 않는 반환`null`.

*   **honorificSuffix**: 지원 되지 않는 반환`null`.

## iOS 단점

*   **포맷**: 부분적으로 지원 합니다. IOS 복합 이름 반환 하지만 읽기 전용입니다.


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


# ContactError

A `ContactError` 개체에 전달 되는 `contactError` 콜백 때 오류가 발생 합니다.

## 속성

*   **코드**: 미리 정의 된 오류 코드 중 하나가 아래에 나열 된.

## 상수

*   `ContactError.UNKNOWN_ERROR`
*   `ContactError.INVALID_ARGUMENT_ERROR`
*   `ContactError.TIMEOUT_ERROR`
*   `ContactError.PENDING_OPERATION_ERROR`
*   `ContactError.IO_ERROR`
*   `ContactError.NOT_SUPPORTED_ERROR`
*   `ContactError.PERMISSION_DENIED_ERROR`

## 설명

`ContactError`개체를 통해 사용자에 게 반환 되는 `contactError` 콜백 함수는 오류가 발생 한 경우.


# contactSuccess

성공 콜백 함수를 제공 하는 `Contact` 배열에서 결과 `contacts.find` 작업.

    function(contacts) {
        // Do something
    }
    

## 매개 변수

*   **연락처**: 연락처 배열 찾기 작업에서 유래한. *(연락처)*

## 예를 들어

    function contactSuccess(contacts) {
        for (var i=0; i<contacts.length; i++) {
            console.log("Display Name = " + contacts[i].displayName);
        }
    }


# contactError

연락처 기능에 대 한 오류 콜백 함수입니다.

    function(error) {
        // Handle the error
    }


# contactFields

필요에 대 한 매개 변수는 `contacts.find` 에 포함 되어야 하는 필드를 지정 하는 데 사용 하는 메서드는 `Contact` 개체 찾기 작업에서 유래.

    ["이름", "phoneNumbers", "이메일"]


# contactFindOptions

선택적 매개 변수는 `contacts.find` 메서드, 연락처 데이터베이스에서 반환 된 연락처를 필터링 하는 데 사용 합니다.

    {필터: "", 여러: true};
    

## 옵션

*   **필터**: 연락처를 필터링 하는 데 사용 하는 검색 문자열. *(DOMString)* (기본:`""`)

*   **여러**: 찾기 작업 여러 연락처를 반환 합니다 경우 결정 합니다. *(부울)* (기본:`false`)
