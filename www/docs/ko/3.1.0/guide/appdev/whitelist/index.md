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

## 개요

리소스 허용과 같은 외부 네트워크 리소스에 액세스를 제어 하는 보안 모델은 `http://google.com` . 아파치 코르도바의 기본 보안 정책은 인터넷에서 어떤 사이트에 리소스에 액세스할 수 있습니다. 프로덕션 응용 프로그램을 이동 하기 전에 그것의 허용을 검토 하 고 특정 네트워크 도메인 및 하위 도메인에 대 한 액세스를 선언 해야.

## 사양

도메인 허용 [W3C 위젯 액세스][1] 사양에 대 한 기초를 낳는다. 위젯 액세스 사양에는 `<access>` 요소 선언 특정 네트워크 리소스에 액세스 하는 데 사용 됩니다. 아파치 코르도바 개별 네트워크 리소스 (Url)의 허용 된 수 있도록이 개념을 확장 합니다. 미래에 아파치 코르도바 플랫폼 수단이 구현을 추상화 됩니다. 그러나, 지금은 각 플랫폼 자체 리소스 또는 도메인 허용을 구현합니다. 플랫폼 구현 간의 차이이 문서의 뒷부분에 설명 되어 있습니다.

 [1]: http://www.w3.org/TR/widgets-access/

목록 항목에 대 한 일반적인 형식 "[패턴 일치][2]" 사양을 구글 크롬 패키지 애플 리 케이 션에 대 한 다음과 같습니다. 리소스 URL, 하지만 별표 지정 (*) 문자를 나타내는 "값은 여기 갈 수 있습니다" 여러 장소에서 "와일드 카드"로 사용할 수 있습니다. 구체적인 예제는 아래와 같습니다.

 [2]: http://developer.chrome.com/apps/match_patterns.html

## 구문

[Google.com][3]에서 모든 리소스에 액세스할:

 [3]: http://google.com

    http://google.com/*
    

보안 [google.com][4] 에서 모든 리소스에 액세스 ( `https://` ):

 [4]: https://google.com

    https://google.com/ *
    

특정 하위 도메인 [maps.google.com][5]에 대 한 액세스:

 [5]: http://maps.google.com

    http://maps.google.com/*
    

[Google.com][3] (예: [mail.google.com][6] 및 [docs.google.com][7])에 모든 하위 도메인에 대 한 액세스:

 [6]: http://mail.google.com
 [7]: http://docs.google.com

    http://*.google.com/*
    

[Www.google.com][8] "/ 모바일" 경로 아래에 있는 모든 리소스에 액세스할:

 [8]: http://www.google.com

    http://www.google.com/mobile/*
    

[Google.com][3] 프로토콜 (예: HTTP, HTTPS, FTP, 등)에 대 한 액세스:

    *://google.com/*
    

인터넷에 (예를 들어, [google.com][3] [developer.mozilla.org][9]) 모든 리소스에 액세스할:

 [9]: http://developer.mozilla.org

    *
    

## 안 드 로이드

### 세부 정보

허용 규칙에서 찾을 수 있습니다 `res/xml/config.xml` 요소를 선언 하 고`<access origin="..." />`.

안 드 로이드는 완벽 하 게 허용 된 구문을 지원합니다.

### 구문

[Google.com][3]에 대 한 액세스:

    <access origin="http://google.com/*" />
    

## 블랙베리 10

### 세부 정보

허용 규칙에서 찾을 수 있습니다 `www/config.xml` 요소를 선언 하 고`<access origin="..." />`.

블랙베리 10은 두 가지 방법으로 다른 플랫폼 보다 다르게 와일드 카드를 처리합니다.

1) 콘텐츠 XMLHttpRequest 액세스는 명시적으로 선언 되어야 합니다. 출처 = "*"이 사용 사례에 대 한 존중 하지 것 이다. 양자 택일로, 모든 웹 보안 환경 설정을 사용 하 여 비활성화 될 수 있습니다.

2) 하위 =의 대신에 사용 될 수 있습니다 "true" "*.domain"

### 구문

[Google.com][3]에 대 한 액세스:

    <access origin="http://google.com" subdomains="false" />
    

[Maps.google.com][5]에 대 한 액세스:

    <access origin="http://maps.google.com" subdomains="false" />
    

[Google.com][3]에 모든 하위 도메인에 대 한 액세스:

    <access origin="http://google.com" subdomains="true" />
    

포함 하 여 모든 도메인에 액세스 권한을 `file://` 프로토콜:

    <access origin="*" subdomains="true" />
    

모든 웹 보안 사용 안 함:

    <preference name="websecurity" value="disable" />
    

## iOS

### 세부 정보

허용 규칙에서 찾을 수 있습니다 `AppName/config.xml` 요소를 선언 하 고`<access origin="..." />`.

iOS는 완벽 하 게 허용 된 구문을 지원합니다.

### 3.1.0에서 변경:

이전 버전 3.1.0, 코르도바 iOS 일부 비표준 확장 다른 코르도바 플랫폼에서 지 원하는 도메인 whilelisting 체계를 포함. 3.1.0, 현재 iOS 허용 지금이 문서 상단에 설명 된 리소스 허용 구문을 따릅니다. 전 3.1.0에서 업그레이드 하는 경우 이러한 확장을 사용 하는 변경 해야 할 수 있습니다 당신의 `config.xml` 전에 허용 된 자원의 동일한 집합을 계속 하려면 [파일](../../../cordova/file/fileobj/fileobj.html).

특히, 이러한 패턴 업데이트 해야 합니다.

*   " `apache.org` " (프로토콜):이 이전 일치 하는 것 `http` , `https` , `ftp` , 및 `ftps` 프로토콜. 변경 " `*://apache.org/*` " 모든 프로토콜을 포함 하거나 지원 해야 할 각 프로토콜에 대 한 행을 포함 합니다.

*   " `http://apache.*` " (와일드 카드 도메인의 끝에):이 이전 모든 탑-레벨 도메인, 모든 가능한 두 글자 Tld를 포함 하 여 일치 하는 것 (하지만 유용 하지 않은 도메인. co.uk). 실제로 제어 하 고 허용 하는 데 필요한 각 TLD에 대 한 줄을 포함 합니다.

*   " `h*t*://ap*he.o*g` " (임의 누락 된 문자에 대 한 와일드 카드):이 더 이상 지원, 각 도메인에 대 한 줄을 포함 하 고 당신이 프로토콜 변경 실제로 허용 해야 합니다.

### 구문

[Google.com][3]에 대 한 액세스:

    <access origin="http://google.com/*" />
    

## Windows Phone (7 & 8)

허용 규칙에서 찾을 수 있습니다 `config.xml` 요소를 선언 하 고`<access origin="..." />`.

### 구문

[Google.com][3]에 대 한 액세스:

    <access origin="http://google.com" />
    

## Tizen

### 세부 정보

응용 프로그램 루트 디렉터리의 `config.xml` [파일](../../../cordova/file/fileobj/fileobj.html) 지정 도메인 허용 규칙을 사용 하는 `<access origin="..." />` 요소. 완벽 한 기준에 대 한 [Tizen 외부 네트워크 리소스 액세스 문서][10] 를 참조 하십시오..

 [10]: https://developer.tizen.org/help/topic/org.tizen.help.gs/Creating%20a%20Project.html?path=0_1_1_4#8814682_CreatingaProject-AccessingExternalNetworkResources

### 구문

[Google.com][3]에 대 한 액세스:

    <access origin="http://google.com" subdomains="false" />
    

보안 [google.com][4] 에 대 한 액세스 ( `https://` ):

    <access origin="https://google.com" subdomains="false" />
    

[Google.com][3]에 모든 하위 도메인에 대 한 액세스:

    <access origin="http://google.com" subdomains="true" />
    

포함 하 여 모든 도메인에 액세스 권한을 `file://` 프로토콜:

    <access origin="*" subdomains="true" />