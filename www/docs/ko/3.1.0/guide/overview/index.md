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

title: 개요
---

# 개요

코르 도우 바는 오픈 소스 모바일 개발 프레임 워크입니다. 각 모바일 플랫폼의 네이티브 개발 언어를 피하고 크로스 플랫폼 개발을 위한 HTML5, CSS3, 자바 스크립트 등 표준 웹 기술을 사용할 수 있습니다. 응용 프로그램 각 플랫폼을 타겟으로 래퍼 내에서 실행 하 고 표준 API 바인딩을 액세스할 각 [장치](../../cordova/device/device.html) 센서, 데이터 및 네트워크 상태에 의존.

코르도바를 사용 하 여 있습니다.

*   모바일 개발자 및 다시 각 플랫폼의 언어와 도구를 구현 하지 않고 하나 이상의 플랫폼에서 응용 프로그램을 확장 하려면 원하는 설정 합니다.

*   웹 애플 리 케이 션은 다양 한 애플 리 케이 션에 배포 패키지를 배포 하 고 웹 개발자 포털을 저장 합니다.

*   모바일 개발자는 *WebView* (브라우저 창) [장치](../../cordova/device/device.html) 레벨 Api에 액세스할 수 있는 기본 응용 프로그램 구성 요소를 혼합에 관심된 또는 네이티브 및 WebView 구성 요소 간의 인터페이스를 플러그인을 개발 하려는 경우.

## 기본 구성 요소

일반적인 의존 코르도바 응용 프로그램 `config.xml` 파일을 응용 프로그램에 대 한 정보를 제공 하 고에 영향을 미치는 어떻게 작동 하는지, 교대 방향 응답 여부와 같은 매개 변수를 지정 합니다. 이 [파일](../../cordova/file/fileobj/fileobj.html) 사양을 준수 하는 W3C의 [웹 응용 프로그램 패키지][1], 또는 *위젯*.

 [1]: http://www.w3.org/TR/widgets/

응용 프로그램 자체 웹 페이지로 구현, *index.html* 어떤 CSS, 자바 스크립트, 이미지, [미디어](../../cordova/media/media.html) 파일을 참조 하는 기본적으로 명명 된 또는 다른 리소스는 실행에 필요한. App는 app 상점에 배 부하는 네이티브 응용 프로그램 래퍼 내에서 *WebView* 로 실행 합니다. 다양 한 [장치](../../cordova/device/device.html) 기능 방식으로 네이티브 애플 리 케이 션과 상호 작용을 웹 응용 프로그램에 대 한 그것은 또한 참조 해야 합니다는 `cordova.js` API 바인딩을 제공 하는 [파일](../../cordova/file/fileobj/fileobj.html). <!-- XREF
(See the API Reference for an overview, and the Application
Development Guide for examples of how to use them.)
XREF -->

코르 도우 바 활성화 WebView의 전체 사용자 인터페이스와 응용 프로그램을 제공할 수 있습니다. 또한 네이티브 응용 프로그램 구성 요소와 WebView를 혼합, 하이브리드 응용 프로그램 내에서 구성 요소 수 있습니다. 코르 도우 바 서로 통신 하려면 이러한 구성 요소에 대 한 *플러그인* 인터페이스를 제공 합니다.

## 개발 경로

응용 프로그램을 설정 하는 가장 쉬운 방법은 실행 하는 것입니다는 `cordova` 명령줄 유틸리티, 일컬어 *명령줄 인터페이스* (CLI). (CLI를 설치 하는 [명령줄 인터페이스](../cli/index.html) 참조.) 플랫폼 대상 원하는 설정에 따라 개발 사이클의 진보적으로 더 큰 주식에 대해 CLI에 의존 수 있습니다.

*   가장 기본적인 시나리오에서 간단 하 게 수정할 수 있습니다에 대 한 기본 구성으로 채워지는 새로운 프로젝트를 생성 하려면 CLI를 사용할 수 있습니다.

*   많은 모바일 플랫폼에 대 한 각 SDK에서 컴파일 하는 데 필요한 추가 프로젝트 파일을 설정 하는 CLI를 사용할 수 있습니다. 이 대 한 각 대상된 플랫폼의 SDK를 설치 해야 합니다. (자세한 내용은 플랫폼 가이드를 참조 하십시오.) 플랫폼 지원 테이블 아래에 표시 된 대로 대상된 플랫폼에 따라 서로 다른 운영 체제에서 CLI를 실행 해야 할 수도 있습니다.

*   플랫폼 지원에 대 한 CLI 실행 응용 프로그램을 컴파일 하 고 SDK 기반 [장치](../../cordova/device/device.html) 에뮬레이터에서 실행 수 있습니다. <!-포괄적인 테스트에 대 한 외부 참조 (참조 응용 프로그램 개발 가이드를 자세한 내용은.) 외부 참조-->, 또한 응용 프로그램 파일을 생성 하 고 장치에 직접 설치할 수 있습니다.

개발 주기에서 어느 시점에서 옵션 풍부한 집합을 제공할 수 있습니다 플랫폼 SDK 도구에 사용할 수 있습니다. (각 플랫폼 SDK 도구에 대 한 자세한 내용은 플랫폼 [가이드](../../index.html) 설정을 참조 하십시오.) SDK 환경 웹 기반 및 기본 응용 프로그램 구성 요소를 혼합 한 하이브리드 애플 리 케이 션을 구현 하려는 경우에 더 적합 하다. <!-당신이--> 외부 참조 (참조 하이브리드 응용 프로그램 가이드에 대 한 자세한 내용은) 외부 처음 애플 리 케이 션을 생성 하 명령줄 유틸리티를 사용할 수 있습니다 또는 반복적으로 그 후 SDK 도구 업데이트 코드를 피드를 합니다. 당신은 또한 만들 수 있습니다 응용 프로그램의 구성 [파일](../../cordova/file/fileobj/fileobj.html) 자신. <!-- XREF
(See The config.xml File for details.)
XREF -->

<!-- XREF
To build projects on some platforms, you may need to apply digital signatures.
See Distributing Applications for information on how to upload your app to various store portals.
XREF -->

## 플랫폼 지원

다음 개발 도구 및 각 모바일 플랫폼에 대 한 [장치](../../cordova/device/device.html) 사용할 수 있는 Api의 집합을 보여 줍니다. (열 머리글 CLI의 속기 스텁이 표시.)

<!-- START HTML -->

<table class="compat" width="100%">
  <tr>
    <th>
      </td> <th>
        <tt>안 드 로이드</tt>
      </th>
      
      <th>
        <tt>블랙베리</tt> (6)
      </th>
      
      <th>
        <tt>blackberry10</tt>
      </th>
      
      <th>
        <tt>ios</tt>
      </th>
      
      <th>
        <tt>wp7</tt> (윈도우<br />전화 번호 7)
      </th>
      
      <th>
        <tt>wp8</tt> (윈도우<br />전화 번호 8)
      </th>
      
      <th>
        <tt>win8</tt><br />(윈도우 8)
      </th>
      
      <th>
        <tt>firefoxos</tt>
      </th>
      
      <th>
        <tt>tizen</tt>
      </th></tr> </thead> 
      
      <tr>
        <th>
          <a href="../cli/index.html">코르 도우 바<br />CLI</a>
        </th>
        
        <td data-col="android"    class="y">
          맥, 윈도우, 리눅스
        </td>
        
        <td data-col="blackberry" class="n">
          맥, 윈도우
        </td>
        
        <td data-col="blackberry10" class="y">
          맥, 윈도우
        </td>
        
        <td data-col="ios"        class="y">
          맥
        </td>
        
        <td data-col="winphone7"  class="y">
          윈도우
        </td>
        
        <td data-col="winphone8"  class="y">
          윈도우
        </td>
        
        <td data-col="win8"       class="n">
        </td>
        
        <td data-col="tizen"       class="n">
        </td>
      </tr>
      
      <tr>
        <th>
          <a href="../hybrid/webviews/index.html">임베디드<br />WebView</a>
        </th>
        
        <td data-col="android"    class="y">
          <a href="../platforms/android/webview.html">(상세 내용 보기)</a>
        </td>
        
        <td data-col="blackberry" class="n">
        </td>
        
        <td data-col="blackberry10" class="n">
        </td>
        
        <td data-col="ios"        class="y">
          <a href="../platforms/ios/webview.html">(상세 내용 보기)</a>
        </td>
        
        <td data-col="winphone7"  class="n">
        </td>
        
        <td data-col="winphone8"  class="n">
        </td>
        
        <td data-col="win8"       class="n">
        </td>
        
        <td data-col="tizen"       class="n">
        </td>
      </tr>
      
      <tr>
        <th>
          <a href="../hybrid/plugins/index.html">플러그 인<br />인터페이스</a>
        </th>
        
        <td data-col="android"    class="y">
          <a href="../guide/platforms/android/plugin.html">(상세 내용 보기)</a>
        </td>
        
        <td data-col="blackberry" class="y">
          <a href="../guide/platforms/blackberry/plugin.html">(상세 내용 보기)</a>
        </td>
        
        <td data-col="blackberry10" class="y">
          <a href="../guide/platforms/blackberry10/plugin.html">(상세 내용 보기)</a>
        </td>
        
        <td data-col="ios"        class="y">
          <a href="../guide/platforms/ios/plugin.html">(상세 내용 보기)</a>
        </td>
        
        <td data-col="winphone7"  class="y">
          <a href="../guide/platforms/wp8/plugin.html">(상세 내용 보기)</a>
        </td>
        
        <td data-col="winphone8"  class="y">
        </td>
        
        <td data-col="win8"       class="n">
        </td>
        
        <td data-col="tizen"       class="n">
        </td>
      </tr>
      
      <tr>
        <th>
        </th>
        
        <th colspan="20">
          플랫폼 Api
        </th>
      </tr>
      
      <tr>
        <th>
          <a href="../../cordova/accelerometer/accelerometer.html">가 속도계</a>
        </th>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry" class="y">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="ios"        class="y">
        </td>
        
        <td data-col="winphone7"  class="y">
        </td>
        
        <td data-col="winphone8"  class="y">
        </td>
        
        <td data-col="win8"       class="y">
        </td>
        
        <td data-col="tizen"       class="y">
        </td>
      </tr>
      
      <tr>
        <th>
          <a href="../../cordova/camera/camera.html">카메라</a>
        </th>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry" class="y">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="ios"        class="y">
        </td>
        
        <td data-col="winphone7"  class="y">
        </td>
        
        <td data-col="winphone8"  class="y">
        </td>
        
        <td data-col="win8"       class="y">
        </td>
        
        <td data-col="tizen"       class="y">
        </td>
      </tr>
      
      <tr>
        <th>
          <a href="../../cordova/media/capture/capture.html">캡처</a>
        </th>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry" class="y">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="ios"        class="y">
        </td>
        
        <td data-col="winphone7"  class="y">
        </td>
        
        <td data-col="winphone8"  class="y">
        </td>
        
        <td data-col="win8"       class="n">
        </td>
        
        <td data-col="tizen"       class="n">
        </td>
      </tr>
      
      <tr>
        <th>
          <a href="../../cordova/compass/compass.html">나침반</a>
        </th>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry" class="n">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="ios"        class="y">
          (3GS +)
        </td>
        
        <td data-col="winphone7"  class="y">
        </td>
        
        <td data-col="winphone8"  class="y">
        </td>
        
        <td data-col="win8"       class="y">
        </td>
        
        <td data-col="tizen"       class="y">
        </td>
      </tr>
      
      <tr>
        <th>
          <a href="../../cordova/connection/connection.html">연결</a>
        </th>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry" class="y">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="ios"        class="y">
        </td>
        
        <td data-col="winphone7"  class="y">
        </td>
        
        <td data-col="winphone8"  class="y">
        </td>
        
        <td data-col="win8"       class="y">
        </td>
        
        <td data-col="tizen"       class="y">
        </td>
      </tr>
      
      <tr>
        <th>
          <a href="../../cordova/contacts/contacts.html">연락처</a>
        </th>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry" class="y">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="ios"        class="y">
        </td>
        
        <td data-col="winphone7"  class="y">
        </td>
        
        <td data-col="winphone8"  class="y">
        </td>
        
        <td data-col="win8"       class="y">
        </td>
        
        <td data-col="tizen"       class="n">
        </td>
      </tr>
      
      <tr>
        <th>
          <a href="../../cordova/device/device.html">장치</a>
        </th>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry" class="y">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="ios"        class="y">
        </td>
        
        <td data-col="winphone7"  class="y">
        </td>
        
        <td data-col="winphone8"  class="y">
        </td>
        
        <td data-col="win8"       class="y">
        </td>
        
        <td data-col="tizen"       class="y">
        </td>
      </tr>
      
      <tr>
        <th>
          <a href="../../cordova/events/events.html">이벤트</a>
        </th>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry" class="y">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="ios"        class="y">
        </td>
        
        <td data-col="winphone7"  class="y">
        </td>
        
        <td data-col="winphone8"  class="y">
        </td>
        
        <td data-col="win8"       class="y">
        </td>
        
        <td data-col="tizen"       class="y">
        </td>
      </tr>
      
      <tr>
        <th>
          <a href="../../cordova/file/file.html">파일</a>
        </th>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry" class="y">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="ios"        class="y">
        </td>
        
        <td data-col="winphone7"  class="p">
          없음 <a href="../../cordova/file/filetransfer/filetransfer.html">FileTransfer</a>
        </td>
        
        <td data-col="winphone8"  class="p">
          없음 <a href="../../cordova/file/filetransfer/filetransfer.html">FileTransfer</a>
        </td>
        
        <td data-col="win8"       class="y">
        </td>
        
        <td data-col="tizen"       class="n">
        </td>
      </tr>
      
      <tr>
        <th>
          <a href="../../cordova/geolocation/geolocation.html">지리적 위치</a>
        </th>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry" class="y">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="ios"        class="y">
        </td>
        
        <td data-col="winphone7"  class="y">
        </td>
        
        <td data-col="winphone8"  class="y">
        </td>
        
        <td data-col="win8"       class="y">
        </td>
        
        <td data-col="tizen"       class="y">
        </td>
      </tr>
      
      <tr>
        <th>
          <a href="../../cordova/globalization/globalization.html">세계화</a>
        </th>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry" class="y">
        </td>
        
        <td data-col="blackberry10" class="n">
        </td>
        
        <td data-col="ios"        class="y">
        </td>
        
        <td data-col="winphone7"  class="n">
        </td>
        
        <td data-col="winphone8"  class="y">
        </td>
        
        <td data-col="win8"       class="n">
        </td>
        
        <td data-col="tizen"       class="n">
        </td>
      </tr>
      
      <tr>
        <th>
          <a href="../../cordova/inappbrowser/inappbrowser.html">InAppBrowser</a>
        </th>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry" class="y">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="ios"        class="y">
        </td>
        
        <td data-col="winphone7"  class="y">
        </td>
        
        <td data-col="winphone8"  class="y">
        </td>
        
        <td data-col="win8"       class="n">
        </td>
        
        <td data-col="tizen"       class="n">
        </td>
      </tr>
      
      <tr>
        <th>
          <a href="../../cordova/media/media.html">미디어</a>
        </th>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry" class="n">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="ios"        class="y">
        </td>
        
        <td data-col="winphone7"  class="y">
        </td>
        
        <td data-col="winphone8"  class="y">
        </td>
        
        <td data-col="win8"       class="y">
        </td>
        
        <td data-col="tizen"       class="y">
        </td>
      </tr>
      
      <tr>
        <th>
          <a href="../../cordova/notification/notification.html">알림</a>
        </th>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry" class="y">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="ios"        class="y">
        </td>
        
        <td data-col="winphone7"  class="y">
        </td>
        
        <td data-col="winphone8"  class="y">
        </td>
        
        <td data-col="win8"       class="y">
        </td>
        
        <td data-col="tizen"       class="y">
        </td>
      </tr>
      
      <tr>
        <th>
          <a href="../../cordova/splashscreen/splashscreen.html">Splashscreen</a>
        </th>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry" class="n">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="ios"        class="y">
        </td>
        
        <td data-col="winphone7"  class="y">
        </td>
        
        <td data-col="winphone8"  class="y">
        </td>
        
        <td data-col="win8"       class="y">
        </td>
        
        <td data-col="tizen"       class="n">
        </td>
      </tr>
      
      <tr>
        <th>
          <a href="../../cordova/storage/storage.html">스토리지</a>
        </th>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry" class="y">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="ios"        class="y">
        </td>
        
        <td data-col="winphone7"  class="p">
          localStorage만
        </td>
        
        <td data-col="winphone8"  class="p">
          localStorage만
        </td>
        
        <td data-col="win8"       class="y">
        </td>
        
        <td data-col="tizen"       class="y">
        </td>
      </tr></table> 
      
      <!-- END HTML -->