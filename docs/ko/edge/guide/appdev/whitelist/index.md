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

# 도메인 화이트 리스트 가이드

## 개요

허용 된 도메인와 같은 외부 도메인에 액세스를 제어 하는 보안 모델은 `http://google.com` . 아파치 코르도바의 기본 보안 정책에는 어떤 사이트에 액세스할 수 있습니다. 프로덕션 응용 프로그램을 이동 하기 전에 그것의 허용을 검토 하 고 특정 네트워크 도메인 및 하위 도메인에 대 한 액세스를 선언 해야.

## 사양

도메인 허용 [W3C 위젯 액세스][1] 사양에 대 한 기초를 낳는다. 위젯 액세스 사양에는 `<access>` 요소는 특정 네트워크 도메인에 대 한 액세스를 선언 하는 데 사용 됩니다. 미래에 아파치 코르도바 W3C 위젯 액세스 사양을 플랫폼 수단이 구현을 추상화 됩니다. 그러나, 지금은 각 플랫폼 자체 도메인 허용을 구현 해야 합니다.

 [1]: http://www.w3.org/TR/widgets-access/

## 구문

[Google.com][2]에 대 한 액세스:

 [2]: http://google.com

    http://google.com
    

보안 [google.com][3] 에 대 한 액세스 ( `https://` ):

 [3]: https://google.com

    https://google.com
    

하위 도메인 [maps.google.com][4]에 대 한 액세스:

 [4]: http://maps.google.com

    http://maps.google.com
    

[Google.com][2] (예: [mail.google.com][5] 및 [docs.google.com][6])에 모든 하위 도메인에 대 한 액세스:

 [5]: http://mail.google.com
 [6]: http://docs.google.com

    http://*.google.com
    

모든 도메인 (예를 들어, [google.com][2] [developer.mozilla.org][7])에 대 한 액세스:

 [7]: http://developer.mozilla.org

    *
    

## 안 드 로이드

### 세부 정보

허용 규칙에서 찾을 수 있습니다 `res/xml/config.xml` 요소를 선언 하 고`<access origin="..." />`.

안 드 로이드는 완벽 하 게 허용 된 구문을 지원합니다.

### 구문

[Google.com][2]에 대 한 액세스:

    < 원본 액세스 = "http://google.com" / >
    

## 블랙베리

### 세부 정보

허용 규칙에서 찾을 수 있습니다 `www/config.xml` 요소를 선언 하 고`<access uri="..." />`.

완벽 한 기준에 대 한 [블랙베리 WebWorks 액세스 요소 설명서][8] 를 참조 하십시오..

 [8]: https://developer.blackberry.com/html5/documentation/ww_developing/Access_element_834677_11.html

### 구문

[Google.com][2]에 대 한 액세스:

    < 액세스 uri 하위 도메인 "http://google.com" = = "false" / >
    

[Maps.google.com][4]에 대 한 액세스:

    < 액세스 uri 하위 도메인 "http://maps.google.com" = = "false" / >
    

[Google.com][2]에 모든 하위 도메인에 대 한 액세스:

    < 액세스 uri 하위 도메인 "http://google.com" = = "true" / >
    

포함 하 여 모든 도메인에 액세스 권한을 `file://` 프로토콜:

    < 액세스 uri = "*" 하위 도메인 = "true" / >
    

## iOS

### 세부 정보

허용 규칙에서 찾을 수 있습니다 `AppName/config.xml` 요소를 선언 하 고`<access origin="..." />`.

iOS는 완벽 하 게 허용 된 구문을 지원합니다.

**참고:** 기원과 같은 프로토콜을 하지 않고 지정 된 `www.apache.org` 보다는 `http://www.apache.org` 의 모든 기본은 `http` , `https` , `ftp` , 및 `ftps` 계획.

### 구문

IOS에 와일드 카드 ( `*` )는 [W3C 위젯 액세스][1] 사양 보다 더 유연 합니다.

모든 하위 도메인을 Tld ( `.com` , `.net` , 등):

    *. google.*
    

## Windows Phone (7 & 8)

허용 규칙에서 찾을 수 있습니다 `config.xml` 요소를 선언 하 고`<access origin="..." />`.

안 드 로이드는 완벽 하 게 허용 된 구문을 지원합니다.

### 구문

[Google.com][2]에 대 한 액세스:

    < 원본 액세스 = "http://google.com" / >
    

## Tizen

### 세부 정보

응용 프로그램 루트 디렉터리의 `config.xml` 파일 지정 도메인 허용 규칙을 사용 하는 `<access origin="..." />` 요소. 완벽 한 레퍼런스 참조 \[Tizen 외부 네트워크 리소스 액세스 문서\] \[10\].

### 구문

[Google.com][2]에 대 한 액세스:

    < 출처에 액세스 "http://google.com" 하위 도메인 = = "false" / >
    

보안 [google.com][3] 에 대 한 액세스 ( `https://` ):

    < 원본 액세스 = "https://google.com" 하위 도메인 = "false" / >
    

[Google.com][2]에 모든 하위 도메인에 대 한 액세스:

    < 출처에 액세스 "http://google.com" 하위 도메인 = = "true" / >
    

포함 하 여 모든 도메인에 액세스 권한을 `file://` 프로토콜:

    < 원본 액세스 = "*" 하위 도메인 = "true" / >