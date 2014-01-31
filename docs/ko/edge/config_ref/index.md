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

# Config.xml 파일

응용 프로그램의 행동의 여러 측면 전역 구성 파일을 제어할 수 있습니다 `config.xml` . 이 플랫폼-불가 지론 XML 파일 W3C의 [웹 응용 프로그램 (위젯) 포장][1] 사양에 따라 및 핵심 코르도바 API 기능, 플러그인, 및 플랫폼 관련 설정을 지정 하려면 확장 된 배열입니다.

 [1]: http://www.w3.org/TR/widgets/

코르도바 CLI (명령줄 인터페이스에 설명)를 사용 하 여 만든 프로젝트에 대 한 최상위 디렉터리에이 파일을 찾을 수 있습니다.

        app/config.xml
    

버전 3.3.1-0.2.0, 이전 파일에 존재 했음을 참고 `app/www/config.xml` , 여기 데이 지원 여전히.

CLI를 사용 하 여 프로젝트 빌드을이 파일의 버전은 수 동적으로 복사할 다양 한 `platforms/` 하위 디렉터리, 예를 들면:

        app/platforms/ios/AppName/config.xml
        app/platforms/blackberry10/www/config.xml
        app/platforms/android/res/xml/config.xml
    

이 섹션에는 글로벌 및 크로스 플랫폼 구성 옵션 자세히 설명합니다. 플랫폼 특정 옵션에 대 한 다음 섹션을 참조 하십시오.

*   iOS 구성
*   안 드 로이드 구성
*   블랙베리 10 구성

다양 한 구성 옵션 아래에 선발 외에 각 대상 플랫폼에 대 한 이미지는 응용 프로그램의 핵심 집합을 구성할 수 있습니다. 자세한 내용은 아이콘 및 시작 화면을 참조 하십시오.

## 핵심 구성 요소

이 예제는 기본 `config.xml` 는 CLI에서 생성 된 `create` 명령, 명령줄 인터페이스 설명:

        <widget id="com.example.hello" version="0.0.1">
            <name>HelloWorld</name>
            <description>
                A sample Apache Cordova application that responds to the deviceready event.
            </description>
            <author email="dev@callback.apache.org" href="http://cordova.io">
                Apache Cordova Team
            </author>
            <content src="index.html" />
            <access origin="*" />
        </widget>
    

다음 구성 요소는 최상위에 표시 `config.xml` 파일 및 모든 지원된 코르도바 플랫폼에서 지원 됩니다:

*   `<widget>`요소의 `id` 특성은 응용 프로그램의 리버스-도메인 식별자를 제공 합니다 그리고 `version` 메이저/마이너/패치 표기법 그것의 전체 버전 번호.

*   `<name>`요소 및 애플 리 케이 션 스토어 인터페이스 내에서 디바이스의 홈 화면에 나타나는 응용 프로그램의 정식 이름을 지정 합니다.

*   `<description>`및 `<author>` 요소 메타 데이터 및 응용 프로그램 저장소 목록에서 나타날 수 있는 연락처 정보를 지정 합니다.

*   옵션 `<content>` 요소는 최상위 웹 자산 디렉터리에서 응용 프로그램의 시작 페이지를 정의 합니다. 기본값은 `index.html` , 최상위의 관례는 프로젝트에 나타나는 `www` 디렉터리.

*   `<access>`요소는 app와 통신 하도록 허용 하는 외부 도메인 집합을 정의 합니다. 기본 값 위에 표시 된 모든 서버에 액세스할 수 있습니다. 자세한 내용은 도메인 화이트 리스트 가이드를 참조 하십시오.

*   `<preference>`태그의 쌍으로 다양 한 옵션을 설정 합니다. `name` / `value` 특성. 각 기본 설정 `name` 은 대/소문자 구분. 이 페이지의 상단에 나열 된 많은 특혜는 특정 플랫폼에 고유한. 다음 섹션에서는 세부 둘 이상의 플랫폼에 적용 되는 환경 설정.

## 전체 환경 설정

모든 플랫폼에 적용 되는 다음과 같은 글로벌 환경 설정.

*   `Fullscreen`화면 상단의 상태 표시줄을 숨길 수 있습니다. 기본값은 `false` . 예를 들어:
    
        <preference name="Fullscreen" value="true" />
        

*   `Orientation`잠금 방향 및 회전 방향에서 변화에 대응에서 인터페이스를 방지 수 있습니다. 가능한 값은 `default` , `landscape` , 또는 `portrait` . 예를 들어:
    
        <preference name="Orientation" value="landscape" />
        
    
    **참고**: 있는 `default` 값은 *모두* 가로 및 세로 방향 사용 됩니다. 각 플랫폼의 기본 설정 (일반적으로 세로 전용)를 사용 하려는 경우이 태그를 두고는 `config.xml` 파일.

## 멀티 플랫폼 환경 설정

다음과 같은 기본 설정 하나 이상의 플랫폼, 하지만 그들 모두 적용 됩니다.

*   `DisallowOverscroll`(boolean, 기본값은 `false` ): 설정 `true` 인터페이스를 사용자가 시작 또는 끝 콘텐츠의 과거 스크롤할 때 어떤 피드백을 표시 하지 않으려면 경우.
    
        <preference name="DisallowOverscroll" value="true"/>
        
    
    안 드 로이드와 iOS에 적용 됩니다. IOS에서, overscroll 제스처 원인 콘텐츠를 원래 위치로 다시 반송. 안 드 로이드, 그들은 콘텐츠 위쪽 또는 아래쪽 가장자리를 따라 더 미묘한 빛나는 효과 생산.

*   `BackgroundColor`: 응용 프로그램의 배경 색을 설정 합니다. 다음 세 가지 바이트에 대 한 알파 채널을 대표 하는 첫 번째 바이트와 4 바이트 16 진수 값 및 표준 RGB 값을 지원 합니다. 이 예제에서는 파란색을 지정합니다.
    
        <preference name="BackgroundColor" value="0xff0000ff"/>
        
    
    안 드 로이드와 블랙베리에 적용 됩니다. 예를 들어 *모든* 플랫폼에서 그렇지 않으면 사용할 수 있는 CSS 재정의:`body{background-color:blue}`.

*   `HideKeyboardFormAccessoryBar`(boolean, 기본값은 `false` ): 설정 `true` 도움, 키보드 위에 표시 되는 추가 도구 모음을 숨기려면 사용자가 다른 하나의 양식 입력에서 탐색.
    
        <preference name="HideKeyboardFormAccessoryBar" value="true"/>
        
    
    IOS와 블랙베리에 적용 됩니다.

## *기능* 요소

CLI를 사용 하 여 응용 프로그램을 구축할 경우 사용 된 `plugin` 장치 Api를 사용 하려면 명령. 이 최상위 수정 하지 않습니다 `config.xml` 파일, 그래서 `<feature>` 요소 작업 흐름에 적용 되지 않습니다. SDK 및 플랫폼 특정 사용 하 여에서 직접 작업 하는 경우 `config.xml` 파일 원본으로 사용 된 `<feature>` 장치 수준 Api와 외부 플러그인을 사용 하려면 태그. 그들은 종종 특정 플랫폼에에서 사용자 지정 값으로 나타납니다 `config.xml` 파일. 예를 들어, 여기에 안 드 로이드 프로젝트에 대 한 장치 API를 지정 하는 방법이입니다.

        <feature name="Device">
            <param name="android-package" value="org.apache.cordova.device.Device" />
        </feature>
    

여기에 iOS 프로젝트에 대 한 요소가 표시 되는 방식을입니다.

        <feature name="Device">
            <param name="ios-package" value="CDVDevice" />
        </feature>
    

각 기능을 지정 하는 방법에 대 한 자세한 내용은 API 참조를 참조 하십시오. 플러그인에 대 한 자세한 내용은 플러그인 개발 가이드를 참조 하십시오.