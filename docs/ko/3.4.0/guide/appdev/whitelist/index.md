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

통해 비 허용 도메인 탐색 `href` 하이퍼링크 기본 브라우저가 아닌 응용 프로그램 내에서 열려면 페이지 원인. (아래에 언급 된 iOS의 행동에이 비교.)

## iOS 수단이

플랫폼의 허용 규칙 명명 된 응용 프로그램 디렉터리에서 찾을 수 있습니다 `config.xml` 파일.

기원과 같은 프로토콜을 하지 않고 지정 된 `www.apache.org` 보다는 `http://www.apache.org` 의 모든 기본은 `http` , `https` , `ftp` , 및 `ftps` 계획.

IOS 플랫폼에서 와일드 카드는 [W3C 위젯 액세스][1] 사양 보다 더 유연 합니다. 예를 들어, 다음 액세스 모든 하위 도메인과 최상위 도메인 같은 `.com` 및 `.net` :

        <access origin="*.google.*" />
    

안 드 로이드 플랫폼 위에서 언급을 통해 비 허용 도메인 탐색 달리 `href` iOS에서 하이퍼링크 모든 열에서 페이지 방지.

## 블랙베리 10 화이트

허용 규칙에서 찾을 수 있습니다.`www/config.xml`.

블랙베리 10 사용 와일드 카드의 두 가지 방법으로 다른 플랫폼에서 다릅니다.

*   콘텐츠 액세스 `XMLHttpRequest` 명시적으로 선언 해야 합니다. 설정 `origin="*"` 이 경우 작동 하지 않습니다. 양자 택일로, 모든 웹 보안 비활성화 될 수 있습니다 사용 하는 `WebSecurity` 블랙베리 구성에서 설명 하는 기본 설정:
    
        <preference name="websecurity" value="disable" />
        

*   설정 하는 대신 `*.domain` , 설정 추가로 `subdomains` 속성을 `true` . 로 설정 해야 `false` 기본적으로. 다음에 액세스할 수 있습니다 예를 들어 `google.com` , `maps.google.com` , 및 `docs.google.com` :
    
        <access origin="http://google.com" subdomains="true" />
        
    
    다음 우 스 액세스를 `google.com` :
    
        <access origin="http://google.com" subdomains="false" />
        
    
    지역을 포함 하 여 모든 도메인에 대 한 액세스 지정 `file://` 프로토콜:
    
    <access origin="*" subdomains="true" />

(대 한 자세한 내용은 지원, 블랙베리의 설명서를 참조 하십시오 [액세스 요소][8] 에.)

 [8]: https://developer.blackberry.com/html5/documentation/ww_developing/Access_element_834677_11.html

## 3.1.0 iOS 변화

이전 버전 3.1.0, 코르도바 iOS 일부 비표준 확장 다른 코르도바 플랫폼에서 지 원하는 도메인 whilelisting 체계를 포함. 3.1.0, 현재 iOS 허용 지금이 문서 상단에 설명 된 리소스 허용 구문을 따릅니다. 전 3.1.0에서 업그레이드 하는 경우 이러한 확장을 사용 하는 변경 해야 할 수 있습니다 당신의 `config.xml` 전에 허용 된 자원의 동일한 집합을 계속 하려면 파일.

특히, 이러한 패턴 업데이트 해야 합니다.

*   `apache.org`(프로토콜):이 이전 일치 하는 것 `http` , `https` , `ftp` , 및 `ftps` 프로토콜. 변경 " `*://apache.org/*` " 모든 프로토콜을 포함 하거나 지원 해야 할 각 프로토콜에 대 한 행을 포함 합니다.

*   `http://apache.*`(와일드 카드 도메인의 끝에):이 이전 모든 탑-레벨 도메인, 모든 가능한 두 글자 Tld를 포함 하 여 일치 하는 것 (하지만 유용 하지 않은 도메인. co.uk). 실제로 제어 하 고 허용 하는 데 필요한 각 TLD에 대 한 줄을 포함 합니다.

*   `h*t*://ap*he.o*g`(무작위로 누락 된 글자에 대 한 와일드 카드):이 더 이상 지원; 각 도메인 및 실제로 허용을 해야 하는 프로토콜에 대 한 행을 포함 하도록 변경 합니다.

## Windows Phone 수단이

애플 리 케이 션의에서 발견 되는 Windows Phone 7과 8에 대 한 허용 규칙 `config.xml` 파일.

## Tizen 화이트

애플 리 케이 션의에서 발견 되는 허용 된 규칙 `config.xml` 파일. 같은 플랫폼 의존 `subdomains` 블랙베리 플랫폼으로 특성. (대 한 자세한 내용은 지원, Tizen의 설명서를 참조 하십시오 [액세스 요소][9] 에.)

 [9]: https://developer.tizen.org/help/index.jsp?topic=%2Forg.tizen.web.appprogramming%2Fhtml%2Fide_sdk_tools%2Fconfig_editor_w3celements.htm