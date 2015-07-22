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

title: 안 드 로이드 쉘 도구 가이드
---

# 안 드 로이드 쉘 도구 가이드

이 가이드에는 코르도바의 플랫폼을 중심으로 셸 도구 세트를 사용 하 여 안 드 로이드 애플 리 케이 션을 개발 하는 방법을 보여 줍니다. 이 개발 경로 개요에서 설명한 명령줄 인터페이스에 설명 된 크로스 플랫폼 CLI 도구 보다 개발 옵션의 넓은 범위를 제공할 수 있습니다. 예를 들어, 네이티브 구성 요소와 함께 사용자 지정 코르도바 WebView를 배포 하는 경우 셸 도구를 사용 해야 합니다. 개발 경로 중 하나를 사용 하기 전에 먼저 구성 해야 안 드 로이드 SDK 환경 안 드 로이드 플랫폼 가이드에 설명 된 대로.

안 드 로이드에 대 한 셸 도구를 사용 하려면 [cordova.apache.org][1]에서 코르도바를 다운로드. 다운로드는 각 플랫폼에 대 한 별도 아카이브를 포함합니다. 대상으로 하 고 싶은 각 확장 `android` 이 경우. 관련 도구는 일반적으로 최상위 수준에서 사용할 수 있는 `bin` 자세한 지시 사항에 대 한 디렉터리, 그렇지 않으면 **README** 파일을 참조 하십시오.

 [1]: http://cordova.apache.org

이러한 도구를 사용 하 여 작성, 구축 및 실행 안 드 로이드 애플 리 케이 션 수 있습니다. 모든 플랫폼에 걸쳐 플러그인 기능을 활성화 하는 추가 명령줄 인터페이스에 대 한 정보를 관리 플러그인을 사용 하 여 Plugman를 참조 하십시오. 플러그인을 개발 하는 방법에 대 한 내용은 응용 프로그램 플러그인을 참조 하십시오.

## 프로젝트 만들기

실행은 `create` 프로젝트, 리버스 도메인 스타일 패키지 식별자 및 응용 프로그램의 표시 이름에 대 한 기존 경로 지정 하는 명령을. 다음은 맥/리눅스와 윈도우에 대 한 구문이입니다.

        $ /path/to/cordova-android/bin/create /path/to/project com.example.project_name ProjectName
    
        C:\>\path\to\cordova-android\bin\create.bat \path\to\project com.example.project_name ProjectName
    

## 빌드

이 청소 다음 프로젝트를 빌드합니다.

맥/리눅스 또는 윈도우에서 디버그:

        $ /path/to/project/cordova/build --debug
    
        C:\>\path\to\project\cordova\build.bat --debug
    

맥/리눅스 또는 창 출시:

        $ /path/to/project/cordova/build --release
    
        C:\>\path\to\project\cordova\build.bat --release
    

## 응용 프로그램 실행

`run`명령 다음 *선택적* 매개 변수:

*   대상 사양입니다. 이것은 포함 한다 `--emulator` , `--device` , 또는`--target=<targetID>`.

*   빌드 사양. 이것은 포함 한다 `--debug` , `--release` , 또는`--nobuild`.
    
        $ /path/to/project/cordova/run [Target] [Build]
        
        C:\>\path\to\project\cordova\run.bat [Target] [Build]
        

적어도 하나의 안 드 로이드 가상 장치, 그렇지 않으면으로 그렇게 하 라는 메시지가 만들 다는 것을 확인은 `android` 명령. 여러 개의 AVD를 대상으로 사용할 수 있는 경우 하나를 선택 하 라는 메시지가 표시. 기본적으로는 `run` 명령 검색 연결 된 장치 또는 현재 실행 중인 에뮬레이터 없는 장치가 발견 되 면.

## 응용 프로그램 서명

요구 사항을 여기에 서명 안 드 로이드 애플 리 케이 션을 검토할 수 있습니다: http://developer.android.com/tools/publishing/app-signing.html

응용 프로그램에 서명 하기 위해 다음 매개 변수가 필요 합니다.

*   키 ( `--keystore` ): 키 집합을 저장할 수 있는 이진 파일의 경로를.

*   키 저장 암호 ( `--storePassword` ): 암호 키를

*   별칭 ( `--alias` ): 노래에 사용 되는 개인 키를 지정 하는 id.

*   비밀 번호 ( `--password` ): 지정 된 개인 키에 대 한 암호.

*   키의 형식 ( `--keystoreType` ): pkcs12, jks (기본값: 자동 검색 파일 확장명에 따라)

위의 대 한 명령줄 인수를 사용 하 여 이러한 매개 변수를 지정할 수 있습니다 `build` 또는 `run` 스크립트.

또는 사용 하 여 빌드 구성 파일 (build.json)에서 그들을 지정할 수 있습니다 ( `--buildConfig` ) 인수. 빌드 구성 파일의 예제는 다음과 같습니다.

    {
         "android": {
             "debug": {
                 "keystore": "..\android.keystore",
                 "storePassword": "android",
                 "alias": "mykey1",
                 "password" : "password",
                 "keystoreType": ""
             },
             "release": {
                 "keystore": "..\android.keystore",
                 "storePassword": "",
                 "alias": "mykey2",
                 "password" : "password",
                 "keystoreType": ""
             }
         }
     }
    

릴리스는 서명, 암호 제외 될 수 있습니다 및 빌드 시스템에서 암호를 묻는 프롬프트를 발행 합니다.

또한 혼합 하 고 일치 명령줄 인수 및 매개 변수 build.json 파일에서 지원이 됩니다. 명령줄 인수에서 값 우선 순위를 얻을 것 이다. 이 명령줄에 암호를 지정 하는 데 유용할 수 있습니다.

## 로깅

        $ /path/to/project/cordova/log
    
        C:\>\path\to\project\cordova\log.bat
    

## 청소

        $ /path/to/project/cordova/clean
    
        C:\>\path\to\project\cordova\clean.bat
    

## Gradle 건물

현재 cordova-android@4.0.0, [Gradle][2]를 사용 하 여 프로젝트 빌드 에 대 한 지침은 개미와 건물, 이전 버전의 문서를 참조 하십시오.

 [2]: http://www.gradle.org/

### Gradle 속성

빌드를 사용자 지정 하려면이 [속성][3] 을 설정할 수 있습니다.

 [3]: http://www.gradle.org/docs/current/userguide/tutorial_this_and_that.html

*   **cdvBuildMultipleApks** (기본값: false)
    
    이 설정 되어, 경우 여러 APK 파일 생성 됩니다: 하나씩 라이브러리 프로젝트에서 지 원하는 네이티브 플랫폼 (x86, 팔, 등). 이 프로젝트는 크게 생성 된 APK의 크기를 증가 시킬 수 있는 큰 네이티브 라이브러리를 사용 하는 경우에 중요할 수 있습니다.
    
    그렇지 않으면 설정, 모든 장치에서 사용할 수 있는 단일 APK 생성 될 것 이다.

*   **cdvVersionCode**
    
    VersionCode 설정 재정의`AndroidManifest.xml`

*   **cdvReleaseSigningPropertiesFile** (기본: 릴리스-signing.properties)
    
    릴리스에 대 한 서명 정보를 포함 하는.properties 파일 경로를 작성 합니다. 파일은 다음과 같습니다.
    
        storeFile=relative/path/to/keystore.p12
        storePassword=SECRET1
        storeType=pkcs12
        keyAlias=DebugSigningKey
        keyPassword=SECRET2
        
    
    `storePassword`그리고 `keyPassword` , 선택적인 및 생략 하는 경우에 대 한 메시지가 표시 됩니다.

*   **cdvDebugSigningPropertiesFile** (기본: 디버그-signing.properties)
    
    같지만 cdvReleaseSigningPropertiesFile, 디버그 빌드. 다른 개발자와 서명 키를 공유 해야 할 때 유용 합니다.

*   **cdvMinSdkVersion**
    
    값을 재정의 `minSdkVersion` 에 `AndroidManifest.xml` . 여러 만들 때 유용한 APKs SDK 버전에 따라.

*   **cdvBuildToolsVersion**
    
    자동으로 검색 된 재정의 `android.buildToolsVersion` 값.

*   **cdvCompileSdkVersion**
    
    자동으로 검색 된 재정의 `android.compileSdkVersion` 값.

### Build.gradle 확장

사용자 지정 하려는 경우 `build.gradle` , 오히려 직접 편집, 보다 만들어야 합니다 라는 형제 파일 `build-extras.gradle` . 이 파일은 주에 의해 포함 될 것입니다 `build.gradle` 때 제시. 여기에 예가입니다.

    # Example build-extras.gradle
    # This file is included at the beginning of `build.gradle`
    ext.cdvDebugSigningPropertiesFile = '../../android-debug-keys.properties'
    # When set, this function allows code to run at the end of `build.gradle`
    ext.postBuildExtras = {
        android.buildTypes.debug.applicationIdSuffix = '.debug'
    }
    

플러그인도 포함 수 `build-extras.gradle` 파일을 통해:

    <framework src="some.gradle" custom="true" type="gradleReference" />
    

### 예제 빌드

    export ORG_GRADLE_PROJECT_cdvMinSdkVersion=14
    cordova build android -- --gradleArg=-PcdvBuildMultipleApks=true