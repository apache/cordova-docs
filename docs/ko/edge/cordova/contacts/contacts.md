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