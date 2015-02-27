* * *

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

## under the License.

# 화이트 리스트 가이드

허용 된 도메인은 액세스를 제어 하는 보안 모델 외부 도메인에 없는 응용 프로그램에서 관리 하지 않는. 코르도바의 기본 보안 정책에는 어떤 사이트에 액세스할 수 있습니다. 프로덕션 응용 프로그램을 이동 하기 전에 화이트 리스트를 공식화 하 고 특정 네트워크 도메인 및 하위 도메인에 대 한 액세스를 허용 해야 합니다.

코르 도우 바 사양을 준수 하는 [W3C 위젯 액세스][1] 에 의존 하는 `<access>` 애플 리 케이 션의 내의 요소 `config.xml` 특정 도메인에 대 한 네트워크 액세스를 사용 하도록 파일. 설명 명령줄 인터페이스 CLI 워크플로에 의존 하는 프로젝트에 대 한이 파일은 프로젝트의 최상위 디렉토리에 있습니다. 그렇지 않으면 플랫폼별 개발 경로, 위치는 아래 섹션에 나열 됩니다. (각 플랫폼에 대 한 자세한 내용은 다양 한 플랫폼 가이드를 참조 하십시오.)

 [1]: http://www.w3.org/TR/widgets-access/

다음 예제에서는 허용 된 구문을 보여 줍니다.

*   [Google.com][2]에 대 한 액세스:
    
        <access origin="http://google.com" />
        

*   보안 [google.com][3] 에 대 한 액세스 ( `https://` ):
    
        <access origin="https://google.com" />
        

*   하위 도메인 [maps.google.com][4]에 대 한 액세스:
    
        <access origin="http://maps.google.com" />
        

*   하위 모든 도메인 [google.com][2], 예를 들면 [mail.google.com][5] 및 [docs.google.com][6]액세스:
    
        <access origin="http://*.google.com" />
        

*   예를 들어, [google.com][2] 및 [developer.mozilla.org][7] *모든* 도메인에 대 한 액세스:
    
        <access origin="*" />
        
    
    이 새로 만든된 CLI 프로젝트의 기본값입니다.

 [2]: http://google.com
 [3]: https://google.com
 [4]: http://maps.google.com
 [5]: http://mail.google.com
 [6]: http://docs.google.com
 [7]: http://developer.mozilla.org

일부 웹 사이트를 다른 url, https 프로토콜을 사용 하 여 또는 특정 국가 도메인을 그들의 홈 페이지에서 자동으로 리디렉션 수 있습니다 것을 유의 하십시오. 예 http://www.google.com https://www.google.com에서 SSL/TLS를 사용 하도록 리디렉션합니다 및 다음 https://www.google.co.uk와 같은 지리를 리디렉션 추가 수 있습니다. 이러한 시나리오 초기 요구 사항을 넘어 수정 되었거나 추가 목록 항목을 요구할 수 있습니다. 당신의 화이트 리스트를 작성 하는 때이 고려 하시기 바랍니다.

Note는 whitelist 주요 코르도바 webview에만 적용 되며 InAppBrowser webview 또는 시스템 웹 브라우저에서 열기 링크에 적용 되지 않습니다.

## 아마존 화재 OS 수단이

`Res/xml/config.xml`에서 발견 되는 플랫폼 특정 허용 된 규칙.

## 안 드 로이드 화이트

`res/xml/config.xml`에서 발견 되는 플랫폼 특정 허용 된 규칙.

**참고**: 도메인 허용 하기 전에 안 드 로이드 2.3에 `href` 하이퍼링크에 대 한 작품만 이미지 및 스크립트와 같은 리소스를 참조 하지. 스크립트에서 응용 프로그램에 삽입 되지 않도록 하는 조치를 취할.

**참고**: 외부 Url을과 같은 방지 하기 위하여 `mailto:` 코르도바 3.6.0, 현재 코르도바 webview에서 열리지 못하게 지정 `origin = "*"` 암시적 http 및 https 프로토콜에 대 한 규칙을 추가 합니다. 추가 사용자 지정 프로토콜에 액세스 해야 하는 경우 추가 해야 합니다 또한 그들 명시적으로 화이트 리스트에 있습니다. 또한 url이 외부 응용 프로그램 실행에 대 한 자세한 내용은 아래 "외부 응용 프로그램 허용" 참조.

**참고**: 일부 네트워크 요청 코르도바 허용을 통해 가지 않는다. 이 포함 하는 <video>와 <audio> 리소스, WebSocket 연결 (안 드 로이드 4.4 +), 및 기타 비 http 요청. 안 드 로이드 4.4 +, 리소스에 대 한 액세스를 제한 하 여 HTML 문서에 [CSP][8] 헤더를 포함할 수 있습니다. 안 드 로이드의 이전 버전에서 그들을 제한 하는 것이 가능 하지 않을 수 있습니다.

 [8]: https://developer.mozilla.org/en-US/docs/Web/Security/CSP/Introducing_Content_Security_Policy

### 외부 응용 프로그램 허용

코르 도우 바 3.6.0 소개 두 번째 목록, 제한에 대 한 Url은 외부 응용 프로그램을 실행할 수 있는. 코르 도우 바, 모든 비 http Url의 이전 버전에서와 같은 `mailto:`, `geo:`, `sms:` 및 `intent`, 암시적으로 <access> 태그의 표적이 될 수 있었습니다. 누출 정보를 응용 프로그램에 대 한 가능성 때문에 XSS 취약점 허용 공격자가 임의의 링크를 생성 하는 경우이 Url 이어야 허용 뿐만 아니라, 코르도바 3.6.0에서에서 시작.

외부 응용 프로그램을 시작 하는 URL 패턴을 허용 하려면 <access> 태그를 사용 하 여 `launch-external` 속성 세트와 함께 당신의 `config.xml` 파일에.

예:

*   링크 SMS 메시지를 보낼 수 있도록:
    
        <access origin="sms:*" launch-external="yes" />
        

*   지도 열고 링크를 허용:
    
        <access origin="geo:*" launch-external="yes" />
        

*   외부 브라우저에서 열려면 example.com에 대 한 링크를 허용:
    
        <access origin="http://example.com/*" launch-external="yes" />
        

*   외부 브라우저에서 열려면 모든 비 허용 된 웹 사이트 수를: (이것은 비 허용 된 Url에 대 한 이전 행동와 동일)
    
        <access origin="http://*" launch-external="yes" />
        <access origin="https://*" launch-external="yes" />
        

*   코르 도우 바 3.5.0 정책 (권장 하지 않음)을 모든 Url에 액세스할 수 있도록:
    
        <access origin="*" launch-external="yes" />
        

내경 허용 먼저 테스트 하 고 응용 프로그램 내에서 URL을 탐색할 때 고 URL 허용 거기 없는 경우에, 외부 목록 테스트 됩니다. 즉 어떤 `http:` 또는 `https:` 모두 커스터마이징을 일치 하는 Url 보다는 외부 브라우저 시작 코르도바 응용 프로그램 안으로 열릴 것 이다.

## iOS 수단이

플랫폼의 허용 규칙은 명명 된 응용 프로그램 디렉터리의 `config.xml` 파일에 있습니다.

기원은 `http://www.apache.org`, 보다는 오히려 `www.apache.org` 같은 프로토콜 없이 모든 `http`, `https`, `ftp`, `ftps` 구성표의 기본 지정.

IOS 플랫폼에서 와일드 카드는 [W3C 위젯 액세스][1] 사양 보다 더 유연 합니다. 예를 들어, 다음 액세스 모든 하위 도메인과 최상위 도메인 `.com`, `.net` 등:

        <access origin="*.google.*" />
    

`Href`를 통해 비 허용 도메인으로 이동, 위에 언급 된 안 드 로이드 플랫폼과 달리 iOS에서 하이퍼링크 모든 열에서 페이지를 방지할 수 있습니다.

## 블랙베리 10 화이트

허용 규칙은 `www/config.xml`에서 발견.

블랙베리 10 사용 와일드 카드의 두 가지 방법으로 다른 플랫폼에서 다릅니다.

*   콘텐츠 액세스 `XMLHttpRequest` 명시적으로 선언 해야 합니다. 설정 `origin="*"` 이 경우 작동 하지 않습니다. 양자 택일로, 모든 웹 보안 비활성화 될 수 있습니다 사용 하는 `WebSecurity` 블랙베리 구성에서 설명 하는 기본 설정:
    
        <preference name="websecurity" value="disable" />
        

*   설정 하는 대신 `*.domain` , 설정 추가로 `subdomains` 속성을 `true` . 로 설정 해야 `false` 기본적으로. 다음에 액세스할 수 있습니다 예를 들어 `google.com` , `maps.google.com` , 및 `docs.google.com` :
    
        <access origin="http://google.com" subdomains="true" />
        
    
    다음 우 스 액세스를 `google.com` :
    
        <access origin="http://google.com" subdomains="false" />
        
    
    지역을 포함 하 여 모든 도메인에 대 한 액세스 지정 `file://` 프로토콜:
    
    <access origin="*" subdomains="true" />

(자세한 내용은 지원 설명서를 참조 하십시오 블랙베리의 [액세스 요소][9]에.)

 [9]: https://developer.blackberry.com/html5/documentation/ww_developing/Access_element_834677_11.html

## Firefox 운영 체제

파이어 폭스 OS에서 허용 된의 개념 특정 도메인 있다. 대신 [SystemXHR][10] 라는 특수 사용 권한입니다. `config.xml`에이 권한을 추가 하는 필요가 이다:

 [10]: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest#Permissions

    <platform name="firefoxos">
        <permission name="systemXHR" privileged="true" description="load data from server" />
    </platform>
    

`XMLHttpRequest` 개체는 두 개의 매개 변수 `mozAnon`와 `mozSystem`를 인스턴스화할 수 합니다.

    var request = new XMLHttpRequest({
        mozAnon: true,
        mozSystem: true});
    

이 솔루션은 다른 플랫폼에 대 한 차이가 없습니다 그래서 투명 합니다.

## 3.1.0 iOS 변화

이전 버전 3.1.0, 코르도바 iOS 일부 비표준 확장 다른 코르도바 플랫폼에서 지 원하는 도메인 whilelisting 체계를 포함. 3.1.0, 현재 iOS 허용 지금이 문서 상단에 설명 된 리소스 허용 구문을 따릅니다. 전 3.1.0에서 업그레이드 당신은 이러한 확장을 사용 하는 앞으로 자원의 동일한 집합 수단이 계속 하려면 `config.xml` 파일을 변경 해야.

특히, 이러한 패턴 업데이트 해야 합니다.

*   " `apache.org` " (프로토콜):이 이전 일치 하는 것 `http` , `https` , `ftp` , 및 `ftps` 프로토콜. 변경 " `*://apache.org/*` " 모든 프로토콜을 포함 하거나 지원 해야 할 각 프로토콜에 대 한 행을 포함 합니다.

*   " `http://apache.*` " (와일드 카드 도메인의 끝에):이 이전 모든 탑-레벨 도메인, 모든 가능한 두 글자 Tld를 포함 하 여 일치 하는 것 (하지만 유용 하지 않은 도메인. co.uk). 실제로 제어 하 고 허용 하는 데 필요한 각 TLD에 대 한 줄을 포함 합니다.

*   " `h*t*://ap*he.o*g` " (임의 누락 된 문자에 대 한 와일드 카드):이 더 이상 지원, 각 도메인에 대 한 줄을 포함 하 고 당신이 프로토콜 변경 실제로 허용 해야 합니다.

## Windows Phone 수단이

Windows Phone 8에 대 한 허용 규칙 애플 리 케이 션의 `config.xml` 파일에서 찾을 수 있습니다.

## Tizen 화이트

허용 규칙은 애플 리 케이 션의 `config.xml` 파일에 있습니다. 플랫폼은 블랙베리 플랫폼으로 동일한 `하위 도메인` 특성에 의존합니다. (에 대 한 자세한 내용은 지원, Tizen의 설명서 참조 [액세스 요소][11]에.)

 [11]: https://developer.tizen.org/help/index.jsp?topic=%2Forg.tizen.web.appprogramming%2Fhtml%2Fide_sdk_tools%2Fconfig_editor_w3celements.htm