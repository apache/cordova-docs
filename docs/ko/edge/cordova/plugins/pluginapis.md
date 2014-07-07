* * *

면허: 아파치 소프트웨어 재단 (ASF)에 하나 이상의 참가자 사용권 계약 하에서 허가 된. NOTICE 파일 저작권 소유권에 관한 자세한 내용은이 작업 배포를 참조 하십시오. ASF 라이센스 아파치 라이센스 버전 2.0 ("라이센스");이 파일 당신이 라이선스 준수를 제외 하 고이 파일을 사용할 수 없습니다. 라이센스의 복사본을 얻을 수 있습니다.

           http://www.apache.org/licenses/LICENSE-2.0 적용 가능한 법률에 의해 요구 또는 서 면으로 동의 하지 않는 한 소프트웨어 라이선스 하에 배포에 배포 되는 "있는 그대로" 기준, 보증 또는 조건 어떤 종류의 없이, 명시적 또는 묵시적.  라이센스 권한 및 제한 적용 되는 특정 언어에 대 한 참조
    

## 라이센스.

# 플러그인 Api

코르도바 api, 최소한의 세트와 함께 제공 하 고 프로젝트 추가 플러그인을 통해 필요한 어떤 추가 Api.

[플러그인 레지스트리][1] 를 사용 하 여 모든 기존 플러그인 (포함 한 제 3 자 플러그인)을 통해 검색할 수 있습니다..

 [1]: http://plugins.cordova.io/

코어 코르 도우 바 플러그인의 전통적인 세트는 다음과 같습니다.

*   [배터리 상태][2]
    
    > 단말기의 배터리의 상태를 모니터링 합니다.

*   [카메라][3]
    
    > 사진을 단말기의 카메라를 사용 하 여 캡처.

*   [콘솔][4]
    
    > Console.log()에 추가 기능을 추가 합니다.

*   [연락처][5]
    
    > 장치 연락처 데이터베이스와 함께 작동 합니다.

*   [장치][6]
    
    > 장치 특정 정보를 수집 합니다.

*   [장치 동작 (가 속도계)][7]
    
    > 소자의 모션 센서로 누릅니다.

*   [장치 방향 (나침반)][8]
    
    > 장치 가리키는 방향을 가져옵니다.

*   [대화 상자][9]
    
    > 시각적 장치 알림입니다.

*   [파일 시스템][10]
    
    > 자바 스크립트를 통해 기본 파일 시스템에 연결 합니다.

*   [파일 전송][11]
    
    > 자바 스크립트를 통해 기본 파일 시스템에 연결 합니다.

*   [지리적 위치][12]
    
    > 응용 프로그램 위치를 인식 하 게 합니다.

*   [세계화][13]
    
    > 로케일에 특정 개체의 표현을 가능 하 게 합니다.

*   [InAppBrowser][14]
    
    > 다른 응용 프로그램에서 브라우저 인스턴스에 Url을 시작 합니다.

*   [미디어][15]
    
    > 녹음 한 오디오 파일을 재생 합니다.

*   [미디어 캡처][16]
    
    > 장치의 미디어 캡처 응용 프로그램을 사용 하 여 미디어 파일을 캡처하십시오.

*   [네트워크 정보 (연결)][17]
    
    > 신속 하 게 네트워크 상태 및 셀룰러 네트워크 정보를 확인 합니다.

*   [Splashscreen][18]
    
    > 표시 및 응용 프로그램 시작 화면을 숨깁니다.

*   [진동][19]
    
    > 장치를 진동 하는 API.

 [2]: http://plugins.cordova.io/#/package/org.apache.cordova.battery-status
 [3]: http://plugins.cordova.io/#/package/org.apache.cordova.camera
 [4]: http://plugins.cordova.io/#/package/org.apache.cordova.console
 [5]: http://plugins.cordova.io/#/package/org.apache.cordova.contacts
 [6]: http://plugins.cordova.io/#/package/org.apache.cordova.device
 [7]: http://plugins.cordova.io/#/package/org.apache.cordova.device-motion
 [8]: http://plugins.cordova.io/#/package/org.apache.cordova.device-orientation
 [9]: http://plugins.cordova.io/#/package/org.apache.cordova.dialogs
 [10]: http://plugins.cordova.io/#/package/org.apache.cordova.file
 [11]: http://plugins.cordova.io/#/package/org.apache.cordova.file-transfer
 [12]: http://plugins.cordova.io/#/package/org.apache.cordova.geolocation
 [13]: http://plugins.cordova.io/#/package/org.apache.globalization
 [14]: http://plugins.cordova.io/#/package/org.apache.cordova.inappbrowser
 [15]: http://plugins.cordova.io/#/package/org.apache.cordova.media
 [16]: http://plugins.cordova.io/#/package/org.apache.cordova.media-capture
 [17]: http://plugins.cordova.io/#/package/org.apache.cordova.network-information
 [18]: http://plugins.cordova.io/#/package/org.apache.cordova.splashscreen
 [19]: http://plugins.cordova.io/#/package/org.apache.cordova.vibration

이러한 플러그인 워드 프로세서의 비 영어 번역 코르도바 설명서의 이전 버전을 보고 하 여 찾을 수 있습니다. 매우 상단 오른쪽에이 사이트의 드롭 다운 메뉴를 사용 하 여 버전을 전환할.