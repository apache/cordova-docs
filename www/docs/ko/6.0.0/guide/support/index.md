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

title: 플랫폼 지원
---

# 플랫폼 지원

다음 개발 도구 및 각 모바일 플랫폼에 대 한 장치 사용할 수 있는 Api의 집합을 보여 줍니다. Api는 여기에 나열 된 장치는 추가 Api는 [타사 플러그인][1]을 통해 사용할 수 있는 핵심 플러그인에 의해 제공 됩니다. 열 머리글 표시 CLI의 속기 이름.

 [1]: http://plugins.cordova.io

<!-- START HTML -->

<table class="compat" width="100%">
  <tr>
    <th>
      </td> <th>
        아마존 fireos
      </th>

      <th>
        안 드 로이드
      </th>

      <th>
        blackberry10
      </th>

      <th>
        Firefox 운영 체제
      </th>

      <th>
        ios
      </th>

      <th>
        우분투
      </th>

      <th>
        wp8<br />(Windows Phone 8)
      </th>

      <th>
        윈도우<br />(8.0, 8.1, 10,<br />8.1 전화)
      </th>

      <th>
        tizen
      </th></tr> </thead>

      <tr>
        <th>
          <a href="../cli/index.html">코르 도우 바<br />CLI</a>
        </th>

        <td data-col="amazon-fireos" class="y">
          맥, 윈도우, 리눅스
        </td>

        <td data-col="android"    class="y">
          맥, 윈도우, 리눅스
        </td>

        <td data-col="blackberry10" class="y">
          맥, 윈도우
        </td>

        <td data-col="firefoxos" class="y">
          맥, 윈도우, 리눅스
        </td>

        <td data-col="ios"        class="y">
          맥
        </td>

        <td data-col="ubuntu"        class="y">
          우분투
        </td>

        <td data-col="winphone8"  class="y">
          윈도우
        </td>

        <td data-col="win8"       class="y">
        </td>

        <td data-col="tizen"       class="n">
        </td>
      </tr>

      <tr>
        <th>
          <a href="../hybrid/webviews/index.html">임베디드<br />WebView</a>
        </th>

        <td data-col="amazon-fireos" class="y">
          <a href="../platforms/amazonfireos/webview.html">(상세 내용 보기)</a>
        </td>

        <td data-col="android"    class="y">
          <a href="../platforms/android/webview.html">(상세 내용 보기)</a>
        </td>

        <td data-col="blackberry10" class="n">
        </td>

        <td data-col="firefoxos" class="n">
        </td>

        <td data-col="ios"        class="y">
          <a href="../platforms/ios/webview.html">(상세 내용 보기)</a>
        </td>

        <td data-col="ubuntu"        class="y">
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

        <td data-col="amazon-fireos" class="y">
          <a href="../platforms/amazonfireos/plugin.html">(상세 내용 보기)</a>
        </td>

        <td data-col="android"    class="y">
          <a href="../platforms/android/plugin.html">(상세 내용 보기)</a>
        </td>

        <td data-col="blackberry10" class="y">
          <a href="../platforms/blackberry10/plugin.html">(상세 내용 보기)</a>
        </td>

        <td data-col="firefoxos" class="n">
        </td>

        <td data-col="ios"        class="y">
          <a href="../platforms/ios/plugin.html">(상세 내용 보기)</a>
        </td>

        <td data-col="ubuntu"        class="y">
        </td>

        <td data-col="winphone8"  class="y">
          <a href="../platforms/wp8/plugin.html">(상세 내용 보기)</a>
        </td>

        <td data-col="win8"       class="y">
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
          <a href="https://www.npmjs.com/package/cordova-plugin-device-motion">가 속도계</a>
        </th>

        <td data-col="amazon-fireos" class="y">
        </td>

        <td data-col="android"    class="y">
        </td>

        <td data-col="blackberry10" class="y">
        </td>

        <td data-col="firefoxos" class="y">
        </td>

        <td data-col="ios"        class="y">
        </td>

        <td data-col="ubuntu"        class="y">
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
          <a href="https://www.npmjs.com/package/cordova-plugin-battery-status">BatteryStatus</a>
        </th>

        <td data-col="amazon-fireos" class="y">
        </td>

        <td data-col="android"    class="y">
        </td>

        <td data-col="blackberry10" class="y">
        </td>

        <td data-col="firefoxos" class="y">
        </td>

        <td data-col="ios"        class="y">
        </td>

        <td data-col="ubuntu"        class="n">
        </td>

        <td data-col="winphone8"  class="y">
        </td>

        <td data-col="win8"       class="y">
          * Windows Phone 13.1만
        </td>

        <td data-col="tizen"       class="y">
        </td>
      </tr>

      <tr>
        <th>
          <a href="https://www.npmjs.com/package/cordova-plugin-camera">카메라</a>
        </th>

        <td data-col="amazon-fireos" class="y">
        </td>

        <td data-col="android"    class="y">
        </td>

        <td data-col="blackberry10" class="y">
        </td>

        <td data-col="firefoxos" class="y">
        </td>

        <td data-col="ios"        class="y">
        </td>

        <td data-col="ubuntu"        class="y">
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
          <a href="https://www.npmjs.com/package/cordova-plugin-media-capture">캡처</a>
        </th>

        <td data-col="amazon-fireos" class="y">
        </td>

        <td data-col="android"    class="y">
        </td>

        <td data-col="blackberry10" class="y">
        </td>

        <td data-col="firefoxos" class="n">
        </td>

        <td data-col="ios"        class="y">
        </td>

        <td data-col="ubuntu"        class="y">
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
          <a href="https://www.npmjs.com/package/cordova-plugin-device-orientation">나침반</a>
        </th>

        <td data-col="amazon-fireos" class="y">
        </td>

        <td data-col="android"    class="y">
        </td>

        <td data-col="blackberry10" class="y">
        </td>

        <td data-col="firefoxos" class="n">
        </td>

        <td data-col="ios"        class="y">
          (3GS +)
        </td>

        <td data-col="ubuntu"        class="y">
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
          <a href="https://www.npmjs.com/package/cordova-plugin-network-information">연결</a>
        </th>

        <td data-col="amazon-fireos" class="y">
        </td>

        <td data-col="android"    class="y">
        </td>

        <td data-col="blackberry10" class="y">
        </td>

        <td data-col="firefoxos" class="n">
        </td>

        <td data-col="ios"        class="y">
        </td>

        <td data-col="ubuntu"        class="y">
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
          <a href="https://www.npmjs.com/package/cordova-plugin-contacts">연락처</a>
        </th>

        <td data-col="amazon-fireos" class="y">
        </td>

        <td data-col="android"    class="y">
        </td>

        <td data-col="blackberry10" class="y">
        </td>

        <td data-col="firefoxos" class="y">
        </td>

        <td data-col="ios"        class="y">
        </td>

        <td data-col="ubuntu"        class="y">
        </td>

        <td data-col="winphone8"  class="y">
        </td>

        <td data-col="win8"       class="p">
          부분적으로
        </td>

        <td data-col="tizen"       class="n">
        </td>
      </tr>

      <tr>
        <th>
          <a href="https://www.npmjs.com/package/cordova-plugin-device">장치</a>
        </th>

        <td data-col="amazon-fireos" class="y">
        </td>

        <td data-col="android"    class="y">
        </td>

        <td data-col="blackberry10" class="y">
        </td>

        <td data-col="firefoxos" class="y">
        </td>

        <td data-col="ios"        class="y">
        </td>

        <td data-col="ubuntu"        class="y">
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

        <td data-col="amazon-fireos" class="y">
        </td>

        <td data-col="android"    class="y">
        </td>

        <td data-col="blackberry10" class="y">
        </td>

        <td data-col="firefoxos" class="n">
        </td>

        <td data-col="ios"        class="y">
        </td>

        <td data-col="ubuntu"        class="y">
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
          <a href="https://www.npmjs.com/package/cordova-plugin-file">파일</a>
        </th>

        <td data-col="amazon-fireos" class="y">
        </td>

        <td data-col="android"    class="y">
        </td>

        <td data-col="blackberry10" class="y">
        </td>

        <td data-col="firefoxos" class="n">
        </td>

        <td data-col="ios"        class="y">
        </td>

        <td data-col="ubuntu"        class="y">
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
          <a href="https://www.npmjs.com/package/cordova-plugin-file-transfer">파일 전송</a>
        </th>

        <td data-col="amazon-fireos" class="y">
        </td>

        <td data-col="android"    class="y">
        </td>

        <td data-col="blackberry10" class="y">
          * Onprogress를 지원 하거나 중단 하지 마십시오
        </td>

        <td data-col="firefoxos" class="n">
        </td>

        <td data-col="ios"        class="y">
        </td>

        <td data-col="ubuntu"        class="n">
        </td>

        <td data-col="winphone8"  class="y">
          * Onprogress를 지원 하거나 중단 하지 마십시오
        </td>

        <td data-col="win8"       class="y">
          * Onprogress를 지원 하거나 중단 하지 마십시오
        </td>

        <td data-col="tizen"       class="n">
        </td>
      </tr>

      <tr>
        <th>
          <a href="https://www.npmjs.com/package/cordova-plugin-geolocation">지리적 위치</a>
        </th>

        <td data-col="amazon-fireos" class="y">
        </td>

        <td data-col="android"    class="y">
        </td>

        <td data-col="blackberry10" class="y">
        </td>

        <td data-col="firefoxos" class="y">
        </td>

        <td data-col="ios"        class="y">
        </td>

        <td data-col="ubuntu"        class="y">
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
          <a href="https://www.npmjs.com/package/cordova-plugin-globalization">세계화</a>
        </th>

        <td data-col="amazon-fireos" class="y">
        </td>

        <td data-col="android"    class="y">
        </td>

        <td data-col="blackberry10" class="y">
        </td>

        <td data-col="firefoxos" class="n">
        </td>

        <td data-col="ios"        class="y">
        </td>

        <td data-col="ubuntu"        class="y">
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
          <a href="https://www.npmjs.com/package/cordova-plugin-inappbrowser">InAppBrowser</a>
        </th>

        <td data-col="amazon-fireos" class="y">
        </td>

        <td data-col="android"    class="y">
        </td>

        <td data-col="blackberry10" class="y">
        </td>

        <td data-col="firefoxos" class="n">
        </td>

        <td data-col="ios"        class="y">
        </td>

        <td data-col="ubuntu"        class="y">
        </td>

        <td data-col="winphone8"  class="y">
        </td>

        <td data-col="win8"       class="p">
          iframe을 사용 하 여
        </td>

        <td data-col="tizen"       class="n">
        </td>
      </tr>

      <tr>
        <th>
          <a href="https://www.npmjs.com/package/cordova-plugin-media">미디어</a>
        </th>

        <td data-col="amazon-fireos" class="y">
        </td>

        <td data-col="android"    class="y">
        </td>

        <td data-col="blackberry10" class="y">
        </td>

        <td data-col="firefoxos" class="n">
        </td>

        <td data-col="ios"        class="y">
        </td>

        <td data-col="ubuntu"        class="y">
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
          <a href="https://www.npmjs.com/package/cordova-plugin-dialogs">알림</a>
        </th>

        <td data-col="amazon-fireos" class="y">
        </td>

        <td data-col="android"    class="y">
        </td>

        <td data-col="blackberry10" class="y">
        </td>

        <td data-col="firefoxos" class="n">
        </td>

        <td data-col="ios"        class="y">
        </td>

        <td data-col="ubuntu"        class="y">
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
          <a href="https://www.npmjs.com/package/cordova-plugin-splashscreen">Splashscreen</a>
        </th>

        <td data-col="amazon-fireos" class="y">
        </td>

        <td data-col="android"    class="y">
        </td>

        <td data-col="blackberry10" class="y">
        </td>

        <td data-col="firefoxos" class="n">
        </td>

        <td data-col="ios"        class="y">
        </td>

        <td data-col="ubuntu"        class="y">
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
          <a href="https://www.npmjs.com/package/cordova-plugin-statusbar">상태 표시줄</a>
        </th>

        <td data-col="amazon-fireos" class="n">
        </td>

        <td data-col="android"    class="y">
        </td>

        <td data-col="blackberry10" class="n">
        </td>

        <td data-col="firefoxos" class="n">
        </td>

        <td data-col="ios"        class="y">
        </td>

        <td data-col="ubuntu"        class="n">
        </td>

        <td data-col="winphone8"  class="y">
        </td>

        <td data-col="win8"       class="y">
          * Windows Phone 13.1만
        </td>

        <td data-col="tizen"       class="n">
        </td>
      </tr>

      <tr>
        <th>
          <a href="../../cordova/storage/storage.html">스토리지</a>
        </th>

        <td data-col="amazon-fireos" class="y">
        </td>

        <td data-col="android"    class="y">
        </td>

        <td data-col="blackberry10" class="y">
        </td>

        <td data-col="firefoxos" class="n">
        </td>

        <td data-col="ios"        class="y">
        </td>

        <td data-col="ubuntu"        class="y">
        </td>

        <td data-col="winphone8"  class="y">
          <a href="../../cordova/storage/localstorage/localstorage.html">localStorage</a> & indexedDB
        </td>

        <td data-col="win8"       class="y">
          <a href="../../cordova/storage/localstorage/localstorage.html">localStorage</a> & indexedDB
        </td>

        <td data-col="tizen"       class="y">
        </td>
      </tr>

      <tr>
        <th>
          <a href="https://www.npmjs.com/package/cordova-plugin-vibration">진동</a>
        </th>

        <td data-col="amazon-fireos" class="y">
        </td>

        <td data-col="android"    class="y">
        </td>

        <td data-col="blackberry10" class="y">
        </td>

        <td data-col="firefoxos" class="y">
        </td>

        <td data-col="ios"        class="y">
        </td>

        <td data-col="ubuntu"        class="n">
        </td>

        <td data-col="winphone8"  class="y">
        </td>

        <td data-col="win8"       class="y">
          * Windows Phone 13.1만
        </td>

        <td data-col="tizen"       class="n">
        </td>
      </tr></table>

      <!-- END HTML -->
