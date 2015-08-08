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

# Windows Phone 7 플랫폼 가이드

이 가이드에서는 Windows Phone 7 장치에 대 한 코르도바 애플 리 케이 션을 배포 하기 위해 SDK 개발 환경을 설정 하는 방법을 보여 줍니다. 애플 리 케이 션은 또한 동일한 Api, 그러나 버전 7 부족 Windows Phone 8에서 사용할 수 있는 IE10의 고급 기능 중 일부를 사용 하 여 Windows Phone 8 장치에 실행 합니다. Windows Phone 8 애플 리 케이 션 *하지* Windows Phone 7 장치에서 실행.

두 버전 모두에 적용 되는 자세한 플랫폼 관련 정보에 대 한 다음 참조.

*   Windows Phone 업그레이드
*   Windows Phone 플러그인
*   Windows Phone 명령줄 도구

위의 명령줄 도구 코르도바 3.0 이전 버전을 참조 하십시오. 현재 인터페이스에 대 한 내용은 명령줄 인터페이스를 참조 하십시오.

## 1. 시스템 요구 사항

*   운영 체제:

    *   윈도우 7 또는 윈도우 8 (프로) 또는 s p 2와 윈도 즈 조망
        *   Windows의 64 비트 버전 (64)가 SDK에 대 한 필요 합니다.
        *   프로 버전은 장치 에뮬레이터를 실행 하기 위한 것이 좋습니다.

*   등록 및 실제 장치에 응용 프로그램을 설치 하거나 시장 장소에 그것을 제출 하는 경우 [Windows Phone 개발 센터][1] 계정에 대 한 지불.

 [1]: http://dev.windowsphone.com/en-us/publish

**참고:** 가상 컴퓨터에서 SDK를 실행 몇 가지 도전을 제시 수도 있습니다. [Mac에서 Windows Phone][2] 에 대 한 개발 솔루션에 통찰력을 제공이 블로그에 게시물을 읽을 수 있습니다..

 [2]: http://aka.ms/BuildaWP8apponaMac

## 2. 설치 SDK + 코르 도우 바

*   다운로드 하 고 [Windows Phone SDK][3] 설치

*   다운로드 및 [코르도바][4]의 최신 복사본을 추출 합니다. 일 하 게 될 것입니다는 `lib\windows-phone-8\wp7` 하위 디렉터리, `lib\windows-phone-8\wp8` 코르도바의 Windwos 전화 8 버전이 포함 되어 있습니다.

*   복사는 `CordovaWP7_x_x_x.zip` 파일은 `\My Documents\Visual Studio 2012\Templates\ProjectTemplates\` 디렉터리.

 [3]: http://www.microsoft.com/download/en/details.aspx?displaylang=en&id=27570/
 [4]: http://phonegap.com/download

## 2.1. 건물 템플릿

**참고:** 이 단계는 필요 하지 않을 수 있습니다. Lib\windows 전화 번호부 파일 CordovaWP7\_x\_x_x.zip에 이미 포함 되어 있는 경우이 단계를 건너뛸 수 있습니다.

개발 프로세스를 단순화 하기 위해 코르 도우 바 Visual Studio 템플릿을 빌드하는 스크립트와 함께 제공. Visual Studio 내부 코르도바 응용 프로그램의 빠른 생성을 위한 수 있습니다. 필요한 경우이 서식 파일을 수정할 수 있습니다 그리고 아래 단계 진행 서식 파일을 생성 하려면 방법을 나타냅니다.

### 설치 서식 파일을 만들고 배치 파일을 실행 합니다.

*   Repo의 루트 파일 createTemplates.bat에 포함 되어 있습니다. 더블 클릭이 파일 2.zip 파일을 생성 합니다. (CordovaWP7\_x\_x\_x.zip + CordovaWP8\_x\_x\_x.zip x.x.x는 현재 버전 번호) 쉽게 복사 Visual Studio에서 이러한 파일을 사용 하 여 그들에 게 "내 Documents\Visual Studio 2012\Templates\ProjectTemplates\" 다음 수 새 프로젝트 메뉴-> Visual Studio 파일에서 새로운 아파치 코르도바 Windows Phone 응용 프로그램을 만들 수 있습니다. 있습니다

*   명령줄에서 배치 파일을 실행 하는 경우 호출할 수 있습니다 또한 자동으로 설치 하는 매개 변수

스크립트를 실행 합니다.

    > createTemplates.bat-설치


## 3. 새 프로젝트 설정

*   Visual Studio Express에 대 한 Windows Phone 열고 **새 프로젝트** 선택.

*   **CordovaWP7**를 선택 합니다. (버전 번호 서식 파일 설명에 표시 됩니다.)

*   프로젝트에 이름을 하 고 **확인** 을 선택 합니다.

## 4. 프로젝트 구조를 검토

*   `www`디렉터리에 당신의 코르도바 `html/js/css` 및 응용 프로그램에 포함 된 기타 리소스.

*   여기에 추가 하는 콘텐츠 Visual Studio 프로젝트의 일부가 될 필요가 있고 내용으로 설정 해야 합니다.

*   참고:이 화면 캡처 wp8 코르도바 2.3.0 다운로드에서 귀하의 목록을 실제 버전 설치에 따라 달라 집니다.

![][5]

 [5]: {{ site.baseurl }}/static/img/guide/platforms/wp8/projectStructure.png

## 6. 장치에 대 한 프로젝트를 빌드

장치에서 응용 프로그램을 테스트 하려면 장치를 등록 해야 합니다. 클릭 [여기][6] 배포 하 고 Windows Phone 7에 대 한 테스트에 설명서를 읽을 수 있습니다.

 [6]: http://msdn.microsoft.com/en-us/library/windowsphone/develop/ff402565(v=vs.105).aspx

*   귀하의 휴대 전화 연결 되어 있으며 화면 잠긴 ㄴ 다는 것을 확인 하십시오.

*   Visual Studio에서 상단 드롭다운 메뉴에서 '장치'를 선택 합니다.

*   디버깅을 시작 하려면 주요 드롭 다운 메뉴 옆에 있는 녹색 **재생** 버튼을 누르거나 **f5 키** 를 입력합니다.

![][7]

 [7]: {{ site.baseurl }}/static/img/guide/platforms/wp7/wpd.png

## 끝 났 어!
