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

title: Windows Phone 7 플랫폼 가이드
---

# Windows Phone 7 플랫폼 가이드

이 가이드에서는 Windows Phone 7 장치에 대 한 코르도바 애플 리 케이 션을 배포 하기 위해 SDK 개발 환경을 설정 하는 방법을 보여 줍니다. 애플 리 케이 션은 또한 동일한 Api, 그러나 버전 7 부족 Windows Phone 8에서 사용할 수 있는 IE10의 고급 기능 중 일부를 사용 하 여 Windows Phone 8 장치에 실행 합니다. Windows Phone 8 애플 리 케이 션 *하지* Windows Phone 7 장치에서 실행.

두 버전 모두에 적용 되는 자세한 플랫폼 관련 정보에 대 한 다음 참조.

*   [Windows Phone 업그레이드](../wp8/upgrading.html)
*   Windows Phone 플러그인
*   [Windows Phone 명령줄 도구](../wp8/tools.html)

위의 명령줄 도구 코르도바 3.0 이전 버전을 참조 하십시오. 현재 인터페이스에 대 한 내용은 명령줄 인터페이스를 참조 하십시오.

## 시스템 요구 사항

윈도우 7 또는 윈도우 8 (프로) 또는 Windows Vista를 사용 하 여 s p 2와 함께. Windows의 64 비트 버전 (64)가 SDK에 대 한 필요 합니다. 프로 버전은 장치 에뮬레이터를 실행 하기 위한 것이 좋습니다.

등록 및 실제 장치에 응용 프로그램을 설치 하거나 시장 장소에 그것을 제출 하는 경우 [Windows Phone 개발 센터][1] 계정에 대 한 지불.

 [1]: http://dev.windowsphone.com/en-us/publish

**참고**: 가상 컴퓨터에서 SDK를 실행 과제를 제공할 수 있습니다. [Mac에서 Windows Phone][2] 개발 솔루션에 대 한 통찰력에 대 한 읽기.

 [2]: http://aka.ms/BuildaWP8apponaMac

## SDK 및 코르 도우 바 설치

다운로드 하 고 [Windows Phone SDK][3] 설치.

 [3]: http://www.microsoft.com/download/en/details.aspx?displaylang=en&id=27570/

다운로드 및 [코르도바][4]의 최신 복사본을 추출 합니다. 일 하기 위해 필요는 `lib\windows-phone-8\wp7` 하위 디렉터리, `lib\windows-phone-8\wp8` 코르도바의 Windwos 전화 8 버전이 포함 되어 있습니다.

 [4]: http://phonegap.com/download

복사는 `CordovaWP7_x_x_x.zip` 파일은 `\My Documents\Visual
Studio 2012\Templates\ProjectTemplates\` 디렉터리.

## 서식 파일 작성

**참고**: 경우이 단계를 건너뛰고는 `lib\windows-phone` 디렉터리에 이미 포함 되어 있는 `CordovaWP7_x_x_x.zip` 파일.

개발을 간소화 하기 위해 코르 도우 바 Visual Studio 템플릿을 빌드하는 스크립트를 묶는다. 이들은 빠르게 코르도바 애플 리 케이 션을 생성 하 고 필요한 경우 수정할 수 있습니다. 아래 단계에는 그것을 생성 하는 방법을 보여 줍니다.

### 설치 된 서식 파일을 만들고 배치 파일을 실행

Repo의 루트를 포함 한 `createTemplates.bat` 파일. 2 생성이 파일을 두 번 클릭 하면 `.zip` 파일: `CordovaWP7_x_x_x.zip` 및 `CordovaWP8_x_x_x.zip` *x.x.x* 는 현재 버전 번호. 쉽게 Visual Studio에서에서 이러한 파일을 사용 하 여 복사 하는 `My Documents\Visual Studio
2012\Templates\ProjectTemplates\` 하위 디렉터리. 당신은 새로운 **프로젝트에서 Visual Studio _\_File → 새로운 아파치 코르도바 Windows Phone\_ apps** 메뉴를 만들 수 있습니다.

명령줄에서 배치 파일을 실행 하면 자동으로 설치 하도록 매개 변수와 함께 호출할 수 있습니다.

        > createTemplates.bat-설치
    

## 새 프로젝트 설정

*   Visual Studio Express에 대 한 Windows Phone 열고 **새 프로젝트** 선택.

*   **CordovaWP7**를 선택 합니다. 서식 파일 설명에 버전 번호 표시입니다.

*   프로젝트에 이름을 하 고 **확인** 을 선택 합니다.

## 프로젝트 구조를 검토

`www`디렉터리 기능 `html` , `js` , 및 `css` 하위 디렉터리 및 다른 리소스 응용 프로그램 요구 한다. 모든 추가 콘텐츠 Visual Studio 프로젝트의 일부가 될 필요가 있고 내용으로 설정 해야 합니다.

2.3.0는 다음 샘플 구조 대표 프로젝트, 하지만 설치 된 버전에 따라 다를 수 있습니다.

![][5]

 [5]: {{ site.baseurl }}/static/img/guide/platforms/wp8/projectStructure.png

## 장치에 대 한 프로젝트를 구축

장치에서 응용 프로그램을 테스트 하기 전에 장치를 등록 해야 합니다. 배포 하 고 Windows Phone 7에서 테스트 하는 방법에 대 한 자세한 내용은 [Microsoft의 설명서][6] 를 참조 하십시오. 다음은 기본적인 단계입니다.

 [6]: http://msdn.microsoft.com/en-us/library/windowsphone/develop/ff402565(v=vs.105).aspx

*   귀하의 휴대 전화 연결 되어 있으며 화면 잠긴 ㄴ 다는 것을 확인 하십시오.

*   Visual Studio에서 상단에 드롭 다운 메뉴에서 **장치** 를 선택 합니다.

*   디버깅을 시작 하려면 주요 드롭 다운 메뉴 옆에 있는 녹색 **재생** 버튼을 눌러 또는 다른 **f5 키** 입력.

![][7]

 [7]: {{ site.baseurl }}/static/img/guide/platforms/wp7/wpd.png

이 시점에서, 당신이 끝났습니다.
