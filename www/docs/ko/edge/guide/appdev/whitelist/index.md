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

title: 화이트 리스트 가이드
---

# 화이트 리스트 가이드

허용 된 도메인은 액세스를 제어 하는 보안 모델 외부 도메인에 없는 응용 프로그램에서 관리 하지 않는. 코르 도우 바는 외부 사이트에 액세스할 수 있습니다 정의할 구성 가능한 보안 정책을 제공 합니다. 기본적으로 새로운 애플 리 케이 션은 어떤 사이트에 액세스를 허용 하도록 구성 됩니다. 프로덕션 응용 프로그램을 이동 하기 전에 화이트 리스트를 공식화 하 고 특정 네트워크 도메인 및 하위 도메인에 대 한 액세스를 허용 해야 합니다.

안 드 로이드와 iOS (현재 그들의 4.0 버전), 코르도바의 보안 정책 플러그인 인터페이스를 통해 확장 됩니다. 더 나은 보안 및 코르도바의 이전 버전 보다 구성 제공 앱 [코르도바 플러그인 화이트 리스트][1]를 사용 해야 합니다. 허용 된 사이트 목록은 플러그인을 구현할 수 있지만, 당신의 애플 리 케이 션은 매우 구체적인 보안 정책 요구 하지 않는 한 권장 하지 않습니다. 사용 및 구성에 [코르 도우 바 플러그인 허용 된 사이트 목록][1] 대 한 자세한 내용은 참조 하십시오.

 [1]: https://github.com/apache/cordova-plugin-whitelist

다른 플랫폼에 대 한 코르도바 사양을 준수 하는 [W3C 위젯 액세스][2] , 응용 프로그램의 특정 도메인에 대 한 네트워크 액세스를 사용 하도록 설정 하려면 `config.xml` 파일에서 `< 액세스 >` 요소에 의존 하. 설명 [명령줄 인터페이스](../../cli/index.html) CLI 워크플로에 의존 하는 프로젝트에 대 한이 파일은 프로젝트의 최상위 디렉토리에 있습니다. 그렇지 않으면 플랫폼별 개발 경로, 위치는 아래 섹션에 나열 됩니다. (각 플랫폼에 대 한 자세한 내용은 다양 한 플랫폼 가이드를 참조 하십시오.)

 [2]: http://www.w3.org/TR/widgets-access/

다음 예에서는 `<access>` 화이트 리스트 구문을 보여 줍니다.

*   [Google.com][3]에 대 한 액세스:
    
        <access origin="http://google.com" />
        

*   보안 [google.com][4] 에 대 한 액세스 ( `https://` ):
    
        <access origin="https://google.com" />
        

*   하위 도메인 [maps.google.com][5]에 대 한 액세스:
    
        <access origin="http://maps.google.com" />
        

*   하위 모든 도메인 [google.com][3], 예를 들면 [mail.google.com][6] 및 [docs.google.com][7]액세스:
    
        <access origin="http://*.google.com" />
        

*   예를 들어, [google.com][3] 및 [developer.mozilla.org][8] *모든* 도메인에 대 한 액세스:
    
        <access origin="*" />
        
    
    이 새로 만든된 CLI 프로젝트의 기본값입니다.

 [3]: http://google.com
 [4]: https://google.com
 [5]: http://maps.google.com
 [6]: http://mail.google.com
 [7]: http://docs.google.com
 [8]: http://developer.mozilla.org

일부 웹 사이트를 다른 url, https 프로토콜을 사용 하 여 또는 특정 국가 도메인을 그들의 홈 페이지에서 자동으로 리디렉션 수 있습니다 것을 유의 하십시오. 예 http://www.google.com https://www.google.com에서 SSL/TLS를 사용 하도록 리디렉션합니다 및 다음 https://www.google.co.uk와 같은 지리를 리디렉션 추가 수 있습니다. 이러한 시나리오 초기 요구 사항을 넘어 수정 되었거나 추가 목록 항목을 요구할 수 있습니다. 당신의 화이트 리스트를 작성 하는 때이 고려 하시기 바랍니다.

Note는 whitelist 주요 코르도바 webview에만 적용 되며 InAppBrowser webview 또는 시스템 웹 브라우저에서 열기 링크에 적용 되지 않습니다.

## 아마존 화재 OS 수단이

`res/xml/config.xml`에서 발견 되는 플랫폼 특정 허용 된 규칙.

## 안 드 로이드 화이트

위와 같이 [코르도바 플러그인 허용 된 사이트 목록][1] 대 한 자세한 내용은 참조 하십시오. 코르 도우 바-안 드 로이드 4.0.0 이전에,이 설명서의 이전 버전을 참조 하십시오.

## iOS 수단이

위와 같이 [코르도바 플러그인 허용 된 사이트 목록][1] 대 한 자세한 내용은 참조 하십시오. 4.0.0 이전 코르도바 ios에 대 한이 설명서의 이전 버전을 참조 하십시오.

## 블랙베리 10 화이트

허용 규칙은 `www/config.xml` 에서 발견.

블랙베리 10 사용 와일드 카드의 두 가지 방법으로 다른 플랫폼에서 다릅니다.

*   `XMLHttpRequest` 액세스할 콘텐츠는 명시적으로 선언 해야 합니다. 설정 `origin="*"` 이 경우 작동 하지 않습니다. 양자 택일로, 모든 웹 보안 블랙베리 구성에 설명 된 `WebSecurity` 기본 설정 사용 하 여 비활성화 될 수 있습니다.
    
        <preference name="websecurity" value="disable" />
        

*   설정 `*.domain`, 안으로 추가 `subdomains` 특성을 `true`로 설정 합니다. 그것은 기본적으로 `false` 로 설정 해야 합니다. 예를 들어 다음 `google.com`, `maps.google.com`및 `docs.google.com`에 액세스할 수 있습니다:
    
        <access origin="http://google.com" subdomains="true" />
        
    
    `Google.com`다음 우 스 액세스:
    
        <access origin="http://google.com" subdomains="false" />
        
    
    로컬 `file://` 프로토콜을 포함 하 여 모든 도메인에 대 한 액세스를 지정 합니다.
    
        <access origin="*" subdomains="true" />
        

(자세한 내용은 지원 설명서를 참조 하십시오 블랙베리의 [액세스 요소][9] 에.)

 [9]: https://developer.blackberry.com/html5/documentation/ww_developing/Access_element_834677_11.html

## Firefox 운영 체제

파이어 폭스 OS에서 허용 된의 개념 특정 도메인 있다. 대신 [SystemXHR][10]라는 특수 사용 권한입니다. `Config.xml`에이 권한을 추가 하는 필요가 이다:

 [10]: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest#Permissions

    <platform name="firefoxos">
        <permission name="systemXHR" privileged="true" description="load data from server" />
    </platform>
    

`XMLHttpRequest` 개체는 두 개의 매개 변수 `mozAnon` 와 `mozSystem`를 인스턴스화할 수 합니다.

    var request = new XMLHttpRequest({
        mozAnon: true,
        mozSystem: true});
    

이 솔루션은 다른 플랫폼에 대 한 차이가 없습니다 그래서 투명 합니다.

## Windows Phone 수단이

Windows Phone 8에 대 한 허용 규칙 애플 리 케이 션의 `config.xml` 파일에서 찾을 수 있습니다.

## Tizen 화이트

허용 규칙은 애플 리 케이 션의 `config.xml` 파일에 있습니다. 플랫폼은 블랙베리 플랫폼으로 동일한 `subdomains` 특성에 의존합니다. (에 대 한 자세한 내용은 지원, Tizen의 설명서 참조 [액세스 요소][11] 에.)

 [11]: https://developer.tizen.org/help/index.jsp?topic=%2Forg.tizen.web.appprogramming%2Fhtml%2Fide_sdk_tools%2Fconfig_editor_w3celements.htm