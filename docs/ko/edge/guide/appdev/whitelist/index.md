* * *

면허: 아파치 소프트웨어 재단 (ASF)에 하나 이상의 참가자 사용권 계약 하에서 허가 된. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

## under the License.

# 화이트 리스트 가이드

허용 된 도메인은 액세스를 제어 하는 보안 모델 외부 도메인을 통해 당신은 응용 프로그램에서 제어 합니다. 코르도바의 기본 보안 정책에는 어떤 사이트에 액세스할 수 있습니다. 프로덕션 응용 프로그램을 이동 하기 전에 화이트 리스트를 공식화 하 고 특정 네트워크 도메인 및 하위 도메인에 대 한 액세스를 허용 해야 합니다.

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

## 아마존 화재 OS 수단이

발견 되는 플랫폼 특정 허용 된 규칙`res/xml/config.xml`.

## 안 드 로이드 화이트

발견 되는 플랫폼 특정 허용 된 규칙`res/xml/config.xml`.

**참고**: 안 드 로이드 2.3에와 도메인 허용에만 작동 하기 전에 `href` 하이퍼링크, 이미지 및 스크립트와 같은 리소스를 참조 하지. 스크립트에서 응용 프로그램에 삽입 되지 않도록 하는 조치를 취할.

**참고**: 외부 Url을과 같은 방지 하기 위하여 `mailto:` 코르도바 3.6.0, 현재 코르도바 webview에서 열리지 못하게 지정 `origin="*"` 암시적 http 및 https 프로토콜에 대 한 규칙을 추가 합니다. 추가 사용자 지정 프로토콜에 액세스 해야 하는 경우 추가 해야 합니다 또한 그들 명시적으로 화이트 리스트에 있습니다. 또한 url이 외부 응용 프로그램 실행에 대 한 자세한 내용은 아래 "외부 응용 프로그램 허용" 참조.

**참고**: 일부 네트워크 요청 코르도바 Whitelist를 통해 이동 하지 마십시오. 이것은 포함 한다 <video> 그리고 <audio> 리소스, WebSocket 연결 (안 드 로이드 4.4 +), 그리고 다른 비 http 요청. 안 드 로이드 4.4 +에 포함할 수 있는 [CSP][8] 리소스에 대 한 액세스를 제한 하 여 HTML 문서에 헤더입니다. 안 드 로이드의 이전 버전에서 그들을 제한 하는 것이 가능 하지 않을 수 있습니다.

 [8]: https://developer.mozilla.org/en-US/docs/Web/Security/CSP/Introducing_Content_Security_Policy

### 외부 응용 프로그램 허용

코르 도우 바 3.6.0 소개 두 번째 목록, 제한에 대 한 Url은 외부 응용 프로그램을 실행할 수 있는. 코르도바, 모든 비 http Url의 이전 버전에서와 같은 `mailto:` , `geo:` , `sms:` 및 `intent` , 암시적으로의 표적이 될 수 있었습니다 한는 <a>태그.</a> 누출 정보를 응용 프로그램에 대 한 가능성 때문에 XSS 취약점 허용 공격자가 임의의 링크를 생성 하는 경우이 Url 이어야 허용 뿐만 아니라, 코르도바 3.6.0에서에서 시작.

외부 응용 프로그램을 시작 하는 URL 패턴을 허용 하려면 사용을 <access> 태그에 대 한 당신의 `config.xml` 파일와 `launch-external` 특성 세트.

예:

*   링크 SMS 메시지를 보낼 수 있도록:
    
    <access origin="sms:*" launch-external="yes" />

*   지도 열고 링크를 허용:
    
    <access origin="geo:*" launch-external="yes" />

*   외부 브라우저에서 열려면 example.com에 대 한 링크를 허용:
    
    <access origin="http://example.com/*" launch-external="yes" />

*   외부 브라우저에서 열려면 모든 비 허용 된 웹 사이트 수를: (이것은 비 허용 된 Url에 대 한 이전 행동와 동일)
    
    <access origin="http://*" launch-external="yes" /> <access origin="https://*" launch-external="yes" />

*   코르 도우 바 3.5.0 정책 (권장 하지 않음)을 모든 Url에 액세스할 수 있도록:
    
    <access origin="*" launch-external="yes" />

내경 허용 먼저 테스트 하 고 응용 프로그램 내에서 URL을 탐색할 때 고 URL 허용 거기 없는 경우에, 외부 목록 테스트 됩니다. 즉 어떤 `http:` 또는 `https:` 두 주소록이 일치 하는 Url 보다는 외부 브라우저 시작 코르도바 응용 프로그램 안으로 열릴 것 이다.

## iOS 수단이

플랫폼의 허용 규칙 명명 된 응용 프로그램 디렉터리에서 찾을 수 있습니다 `config.xml` 파일.

기원과 같은 프로토콜을 하지 않고 지정 된 `www.apache.org` 보다는 `http://www.apache.org` 의 모든 기본은 `http` , `https` , `ftp` , 및 `ftps` 계획.

IOS 플랫폼에서 와일드 카드는 [W3C 위젯 액세스][1] 사양 보다 더 유연 합니다. 예를 들어, 다음 액세스 모든 하위 도메인과 최상위 도메인 같은 `.com` 및 `.net` :

        < 원본 액세스 = "*.google. *" / >
    

안 드 로이드 플랫폼 위에서 언급을 통해 비 허용 도메인 탐색 달리 `href` iOS에서 하이퍼링크 모든 열에서 페이지 방지.

## 블랙베리 10 화이트

허용 규칙에서 찾을 수 있습니다.`www/config.xml`.

블랙베리 10 사용 와일드 카드의 두 가지 방법으로 다른 플랫폼에서 다릅니다.

*   콘텐츠 액세스 `XMLHttpRequest` 명시적으로 선언 해야 합니다. 설정 `origin="*"` 이 경우 작동 하지 않습니다. 양자 택일로, 모든 웹 보안 비활성화 될 수 있습니다 사용 하는 `WebSecurity` 블랙베리 구성에서 설명 하는 기본 설정:
    
        < 선호 이름 = "websecurity" 값 = "사용 안 함" / >
        

*   설정 하는 대신 `*.domain` , 설정 추가로 `subdomains` 속성을 `true` . 로 설정 해야 `false` 기본적으로. 다음에 액세스할 수 있습니다 예를 들어 `google.com` , `maps.google.com` , 및 `docs.google.com` :
    
        < 출처에 액세스 "http://google.com" 하위 도메인 = = "true" / >
        
    
    다음 우 스 액세스를 `google.com` :
    
        < 출처에 액세스 "http://google.com" 하위 도메인 = = "false" / >
        
    
    지역을 포함 하 여 모든 도메인에 대 한 액세스 지정 `file://` 프로토콜:
    
    <access origin="*" subdomains="true" />

(자세한 내용은 지원 설명서를 참조 하십시오 블랙베리의 [액세스 요소][9] 에.)

 [9]: https://developer.blackberry.com/html5/documentation/ww_developing/Access_element_834677_11.html

## 3.1.0 iOS 변화

이전 버전 3.1.0, 코르도바 iOS 일부 비표준 확장 다른 코르도바 플랫폼에서 지 원하는 도메인 whilelisting 체계를 포함. 3.1.0, 현재 iOS 허용 지금이 문서 상단에 설명 된 리소스 허용 구문을 따릅니다. 전 3.1.0에서 업그레이드 하는 경우 이러한 확장을 사용 하는 변경 해야 할 수 있습니다는 `config.xml` 전에 허용 된 자원의 동일한 집합을 계속 하려면 파일.

특히, 이러한 패턴 업데이트 해야 합니다.

*   " `apache.org` " (프로토콜):이 이전 일치 하는 것 `http` , `https` , `ftp` , 및 `ftps` 프로토콜. 변경 " `*://apache.org/*` " 모든 프로토콜을 포함 하거나 지원 해야 할 각 프로토콜에 대 한 행을 포함 합니다.

*   " `http://apache.*` " (와일드 카드 도메인의 끝에):이 이전 모든 탑-레벨 도메인, 모든 가능한 두 글자 Tld를 포함 하 여 일치 하는 것 (하지만 유용 하지 않은 도메인. co.uk). 실제로 제어 하 고 허용 하는 데 필요한 각 TLD에 대 한 줄을 포함 합니다.

*   " `h*t*://ap*he.o*g` " (임의 누락 된 문자에 대 한 와일드 카드):이 더 이상 지원, 각 도메인에 대 한 줄을 포함 하 고 당신이 프로토콜 변경 실제로 허용 해야 합니다.

## Windows Phone 수단이

애플 리 케이 션의에서 발견 되는 Windows Phone 8에 대 한 허용 규칙 `config.xml` 파일.

## Tizen 화이트

애플 리 케이 션의에서 발견 되는 허용 된 규칙 `config.xml` 파일. 같은 플랫폼 의존 `subdomains` 블랙베리 플랫폼으로 특성. (에 대 한 자세한 내용은 지원, Tizen의 설명서 참조 [액세스 요소][10] 에.)

 [10]: https://developer.tizen.org/help/index.jsp?topic=%2Forg.tizen.web.appprogramming%2Fhtml%2Fide_sdk_tools%2Fconfig_editor_w3celements.htm