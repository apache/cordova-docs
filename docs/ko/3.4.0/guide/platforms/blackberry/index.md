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

# 블랙베리 플랫폼 가이드

이 가이드 대상 응용 프로그램 이전 버전 10 블랙베리 플랫폼을 위한 SDK 환경을 설정 하는 방법을 보여 줍니다. 가장 최근 버전을 대상으로 블랙베리 10 플랫폼 설명서를 참조 하십시오. 자세한 플랫폼 관련 내용은 다음을 참조 하십시오.

*   블랙베리 구성
*   블랙베리 업그레이드
*   블랙베리 플러그인
*   블랙베리 명령줄 도구

위의 명령줄 도구 코르도바 3.0 이전 버전을 참조 하십시오. 현재 인터페이스에 대 한 내용은 명령줄 인터페이스를 참조 하십시오.

## 요구 사항 및 지원

블랙베리의이 버전에서 지원 되지 않습니다는 `cordova` 유틸리티 명령줄 인터페이스에만 별도 명령줄 도구 집합을 설명 합니다. [Cordova.apache.org][1] 에서 코르도바 배포 다운로드.

 [1]: http://cordova.apache.org/#download

윈도 즈 7 (32 비트 및 64 비트)와 맥 (OS X 10.6.4+) 블랙베리에 대 한 코르도바 [블랙베리 WebWorks 프레임 워크][2], 윈도우 XP (32 비트)에 대 한 사용할 수 있는 사용 합니다. WebWorks 응용 프로그램 수 ** 다음 블랙베리 플랫폼에서 배포:

 [2]: https://bdsc.webapps.blackberry.com/html5

*   블랙베리 OS 5.0 및 높은
*   블랙베리 각 본
*   블랙베리 (QNX) 10

WebWorks 자바 개발 키트 (JDK는)이 필요합니다. 윈도 즈를 위해 [오라클 JDK][3]의 32 비트 버전을 사용 합니다. 자바에서 [별도 설치가][4]필요 없는 버전 10.7, 맥 OS X에 기본적으로 설치 합니다. 그것은 또한 맥에는 Java 설치 아파치 개미 필요 합니다. 윈도우 버전은 [ant.apache.org][5] 에서 사용할 수.

 [3]: http://www.oracle.com/technetwork/java/javase/downloads/index.html#jdk
 [4]: http://support.apple.com/kb/DL1421
 [5]: http://ant.apache.org/bindownload.cgi

## SDK 설치

다운로드 및 귀하의 개발에 대 한 적절 한 WebWorks SDK를 설치 합니다. 블랙베리 플레이 북과 블랙베리 스마트폰 WebWorks Sdk 다음 위치에서 다운로드할 수 있습니다.

*   \[블랙베리 각 본 SDK\] (https://developer.blackberry.com/html5/download/#playbook)와 [어도비 Air SDK][6]

*   \[블랙베리 스마트폰 SDK\] (https://developer.blackberry.com/html5/download/#smartphones)

 [6]: http://www.adobe.com/devnet/air/air-sdk-download.html

## 서명 키에 대 한 등록

블랙베리 응용 프로그램 세계 또는 실제 장치에 응용 프로그램을 게시 하려는 경우 무료로 코드 서명 키 집합 등록 해야 합니다. 이렇게 하려면 [블랙베리 키 주문 양식][7]을 완성 합니다. 서명 키를 받으시면 설치가 필요 합니다. 정보에 대 한 [블랙베리 HTML5/WebWorks 웹사이트][8] 를 참조 하십시오.

 [7]: https://www.blackberry.com/SignedKeys
 [8]: https://developer.blackberry.com/html5/documentation/signing_setup_bb10_apps_2008396_11.html

## 코르 도우 바 설치

다운로드 및 [코르도바][1] 의 최신 복사본을 추출.

## 새 프로젝트 설정

*   터미널을 열고 코르도바의 압축을 푼 이동.

*   코르 도우 바 지 원하는 각 플랫폼에 대 한 디렉터리가입니다. 이동 하는 `blackberry` 디렉터리.

*   `blackberry`여러 하위 디렉터리에 포함 되어 있습니다. `example`디렉터리에 완전 한 코르도바 프로젝트. 복사는 `example` 디렉토리를 사용자의 컴퓨터에 다른 위치로 거기 이동.

*   편집은 `project.properties` WebWorks SDK를 사용 하는 지정 하는 파일. 예를 들어, 여기 블랙베리 플레이 북, 블랙베리 스마트폰 (OS5-7), 또는 블랙베리 10 (QNX) 각각 설정이 있습니다.
    
        playbook.bbwp.dir=C:\\Program Motion\\BlackBerry WebWorks SDK에서 Files\\Research TabletOS 2.1.0.6\\bbwp blackberry.bbwp.dir=C:\\Program Files\\Research Motion\\BlackBerry WebWorks 포장기에서 qnx.bbwp.dir=C:\\Program 파일 (86) \\Research In Motion\\BlackBerry 10 WebWorks SDK 1.0.2.9
        

이러한 프로젝트를 빌드할 때 지정 하는 매개 변수에 해당 합니다. 처음이이 명령을 실행 하면 그들은 "HelloWorld" 응용 프로그램을 생성:

        코르 도우 바/빌드 각 본 코르도바/빌드 블랙베리 코르도바/빌드 qnx
    

SDK를 함께 또한 코드 서명 키 및 디버그 토큰 등록 해야 합니다. 서명 키를 사용 하면 검은 딸기 세계를 통해 애플 리 케이 션을 배포할 수 있습니다. 디버그 토큰을 사용 하면 블랙베리 에뮬레이터 또는 장치에서 서명 되지 않은 애플 리 케이 션을 테스트할 수 있습니다. 만들고 디버그 토큰; 설치 필요가 없습니다. 키 저장 암호를 입력 하는 경우 빌드 스크립트 생성 하 고 당신을 위해 디버그 토큰을 설치 합니다. 서명 키를 설정 하려면, 그것을 얻기 위해, 지정한 암호를 유지 하기 위해 확인 하 고 검은 딸기 웹사이트로 이동 합니다. 그런 다음 실행 하는 `blackberry-signer` SDK에 포함 된 유틸리티. 블랙베리 여기 더 많은 정보를 제공 합니다.

*   [코드 서명 키에 대 한 등록][9]

*   [코드 서명 컴퓨터 설정][10]

*   [SDK 환경 설정에 포괄적인 가이드][11]

 [9]: https://www.blackberry.com/SignedKeys/codesigning.html
 [10]: http://developer.blackberry.com/html5/documentation/set_up_for_signing.html
 [11]: http://developer.blackberry.com/native/documentation/bb10/com.qnx.doc.native_sdk.quickstart/topic/set_up_your_environment.html

## 에뮬레이터에 배포

블랙베리 스마트폰 에뮬레이터 에서만 Windows에 사용할 수 있습니다. 블랙베리 각 본 에뮬레이터 vm 웨어 플레이어 (Windows) 또는 vm 웨어 퓨전 (Mac OS X) 필요합니다. WebWorks SDK 기본 에뮬레이터를 제공 하지만 추가 에뮬레이터 [블랙베리를 통해 사용할 수][12] 있습니다..

 [12]: http://us.blackberry.com/developers/resources/simulators.jsp

프로젝트 디렉터리에서 입력 `./cordova/run <target>` , 교체 `<target>` 와 `qnx` , `playbook` , 또는 `blackberry` . 참고는 블랙베리 10 및 각 본, 에뮬레이터 가상 이미지 이미 시작 해야 합니다.

자세한 내용은 다음을 참조 하십시오.

*   [블랙베리 각 본][13]

*   [블랙베리 스마트폰][14]

 [13]: https://developer.blackberry.com/html5/documentation/using_the_tablet_simulator_1866980_11.html
 [14]: https://developer.blackberry.com/html5/documentation/run_your_app_on_smartphone_sim_1876976_11.html

블랙베리 각 본에 대 한 편집은 `project.properties` 파일을 사용자 지정 하는 `playbook.sim.ip` 및 `playbook.sim.password` 속성. 에뮬레이터의 IP 주소는 홈 화면에서 **설정** 응용 프로그램을 통해 사용할 수 있습니다. 활성화는 **보안 및 개인 정보 → 개발 모드** 주소를 표시 하는 옵션. **보안 및 개인 정보** 탭에서 암호를 설정할 수도 있습니다.

블랙베리 스마트폰에 대 한 편집은 `project.properties` 파일을 사용자 지정 하는 `blackberry.sim.dir` 및 `blackberry.sim.bin` 속성. 예를 들어 Windows에서 디렉터리 경로 지정할 때 경로 구분 기호를 이스케이프 해야 합니다.`C:\\Program
Files\\BlackBerry\\Simulator`.

일단 에뮬레이터 설치 하 고 실행, 홈 스크린에 응용 프로그램을 설치 하려면 다음 중 하나를 실행:

        코르 도우 바/실행 각 본 코르도바/실행 블랙베리
    

장치를 컴퓨터에 연결 되어 있는지 여부를 묻는 메시지가 아니오 대답.

**참고:** 블랙베리 OS 5 응용 프로그램에 설치 된 `Downloads` 디렉터리.

## 장치에 배포

장치에 응용 프로그램을 배포, 그것 연결 해야 합니다, 그리고 당신은 코드 서명 키 위에서 설명한 대로 등록 해야 합니다. 또한, 블랙베리 각 본에 애플 리 케이 션을 배포 하는 **설정 → 보안 → 개발 모드** 옵션을 사용 하도록 설정 해야 합니다.

블랙베리 각 본, 편집은 `project.properties` 파일을 수정 반영 장치의 IP 및 암호 descibed 위의 함께 서명 키 암호를 설정 하려면 다음:

프로젝트 디렉터리에서 입력 `./cordova/run <target>` , 교체 `<target>` 와 `qnx` , `playbook` , 또는`blackberry`.

블랙베리 스마트폰 (OS5-7), 지정 된 `blackberry.sigtool.password` 서명 키 암호 속성.

프로젝트의 디렉터리에서 실행 에뮬레이터에서 응용 프로그램을 볼 것 이다 명령 중 하나:

        코르 도우 바/실행 각 본 코르도바/실행 블랙베리
    

장치를 컴퓨터에 연결 되어 있는지 여부를 묻는 메시지가 예 응답.

**참고:** 블랙베리 OS 5 응용 프로그램에 설치 된 `Downloads` 디렉터리.

## 추가 정보

다음 문서 블랙베리 WebWorks 프레임 워크에 구축 된 응용 프로그램을 개발할 때 일반적인 문제를 해결 도울 수 있습니다.

*   [블랙베리 WebWorks 개발 함정][15]

*   [포장 WebWorks 응용 프로그램에 대 한 모범 사례][16]

 [15]: http://supportforums.blackberry.com/t5/Web-and-WebWorks-Development/Common-BlackBerry-WebWorks-development-pitfalls-that-can-be/ta-p/624712
 [16]: https://bdsc.webapps.blackberrycom/html5/documentation/ww_developing/bestpractice_compiling_ww_apps_1873324_11.html