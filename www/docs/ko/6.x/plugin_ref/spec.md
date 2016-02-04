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

title: 플러그인 명세
---

# 플러그인 명세

`plugin.xml`파일은 XML 문서에는 `plugins` 네임 스페이스: `http://apache.org/cordova/ns/plugins/1.0` . 그것은 포함 한 최상위 `plugin` 플러그인, 정의 하는 요소와 플러그인의 구조를 정의 하는 아이 들.

샘플 플러그인 요소:

    <?xml version="1.0" encoding="UTF-8"?>
    <plugin xmlns="http://apache.org/cordova/ns/plugins/1.0"
        xmlns:android="http://schemas.android.com/apk/res/android"
        id="com.alunny.foo"
        version="1.0.2">
    

## *플러그인* 요소

`plugin`요소는 플러그인 매니페스트의 최상위 요소입니다. 다음과 같은 특성을 보유 하 고:

*   `xmlns`(필수): 플러그인 네임 스페이스 `http://apache.org/cordova/ns/plugins/1.0` . 문서에 추가할 태그와 같은 다른 네임 스페이스에서 XML에 포함 된 경우는 `AndroidManifest.xml` 파일을 최상위 요소에도 이러한 네임 스페이스를 포함 합니다.

*   `id`(필수): 리버스 도메인 같은 식별자는 플러그인에 대 한 스타일`com.alunny.foo`

*   `version`(필수): 다음 메이저 마이너 패치 스타일 정규식과 일치 하는 플러그인에 대 한 버전 번호:
    
        ^\d+[.]\d+[.]\d+$
        

## *엔진* 및 *엔진* 요소

자식 요소는 `<engines>` 요소가이 플러그인 지원 아파치 코르도바 기반 프레임 워크의 버전을 지정 합니다. 예를 들어:

    <engines>
        <engine name="cordova" version="1.7.0" />
        <engine name="cordova" version="1.8.1" />
        <engine name="worklight" version="1.0.0" platform="android" scriptSrc="worklight_version"/>
    </engines>
    

유사는 `<plugin>` 요소의 `version` 특성을 지정 된 버전 문자열과 정규 표현식에 부합 하는 메이저 마이너 패치 문자열 일치 해야 합니다:

        ^\d+[.]\d+[.]\d+$
    

엔진 요소 또한 반복을 방지 하 고 기본 플랫폼 업데이트 될 때 [유지](../guide/next/index.html) 보수를 줄이기 위해 유사 항목 일치를 지정할 수 있습니다. 도구 최소 지원 한다 `>` , `>=` , `<` 및 `<=` , 예를 들면:

    <engines>
        <engine name="cordova" version=">=1.7.0" />
        <engine name="cordova" version="<1.8.1" />
    </engines>
    

`<engine>`태그 또한 코르도바에 있는 주요 플랫폼에 대 한 기본 지원 하고있다. 지정 하는 `cordova` 엔진 태그 의미 모든 플랫폼에서 코르도바의 모든 버전 엔진 버전 특성을 만족 해야 합니다. 당신은 또한 잡기-모든 재정의 하기 위하여 그들의 버전과 특정 플랫폼을 나열할 수 있습니다 `cordova` 엔진:

    <engines>
        <engine name="cordova" version=">=1.7.0" />
        <engine name="cordova-android" version=">=1.8.0" />
        <engine name="cordova-ios" version=">=1.7.1" />
    </engines>
    

여기는 기본값의 목록을 그 엔진는 `<engine>` 태그를 지원 합니다:

*   `cordova`
*   `cordova-plugman`
*   `cordova-amazon-fireos`
*   `cordova-android`
*   `cordova-ios`
*   `cordova-blackberry10`
*   `cordova-wp8`
*   `cordova-windows8`
*   `android-sdk` // returns the highest Android api level installed
*   `apple-xcode` // returns the xcode version 
*   `apple-ios` // returns the highest iOS version installed
*   `apple-osx` // returns the OSX version
*   `blackberry-ndk` // returns the native blackberry SDK version

이렇게 사용자 정의 아파치 코르도바 기반 프레임 워크 엔진 태그 아래 나열 되어야 합니다 지정:

    <engines>
        <engine name="my_custom_framework" version="1.0.0" platform="android" scriptSrc="path_to_my_custom_framework_version"/>
        <engine name="another_framework" version=">0.2.0" platform="ios|android" scriptSrc="path_to_another_framework_version"/>
        <engine name="even_more_framework" version=">=2.2.0" platform="*" scriptSrc="path_to_even_more_framework_version"/>
    </engines>
    

사용자 정의 아파치 코르도바 기반 프레임 워크 엔진 요소는 다음 특성을 포함 해야 합니다: `name` , `version` , `scriptSrc` , 그리고`platform`.

*   `name`(필수): 당신의 사용자 정의 프레임 워크에 대 한 인간-읽을 수 있는 이름.

*   `version`(필수): 당신의 프레임 워크 설치 해야 하는 버전.

*   `scriptSrc`(필수): 스크립트 파일을 사용자 정의 프레임 워크의 버전은 plugman에 게 말한다. 이상적으로,이 파일은 플러그인 디렉토리의 최상위 디렉토리 이어야 한다.

*   `platform`(필수): 당신의 프레임 워크를 지 원하는 어떤 플랫폼. 와일드 카드를 사용할 수 있습니다 `*` 모든 플랫폼에 대 한 지원, 말 처럼 파이프 문자로 여러 개 지정 `android|ios|blackberry10` 또는 같은 단일 플랫폼`android`.

plugman 누구의 대상 프로젝트 엔진의 제약 조건을 충족 하지 않는 모든 플러그인에 대 한 0이 아닌 코드를 중단 합니다.

없는 경우 `<engine>` 태그 지정, plugman 맹목적으로 지정 된 코르 도우 바 프로젝트 디렉터리에 설치 하려고 합니다.

## *이름* 요소

텍스트 내용이 플러그인의 이름을 포함 하는 플러그인에 대 한 인간-읽을 수 있는 이름입니다. 예를 들어:

    <name>Foo</name>
    

이 요소 하지 않습니다 (아직) 지역화를 처리 합니다.

## *설명* 요소

플러그인에 대 한 인간-읽을 수 있는 설명입니다. 요소의 텍스트 콘텐츠 플러그인의 설명을 포함합니다. 예를 들어:

    <description>Foo plugin description</description>
    

이 요소 하지 않습니다 (아직) 지역화를 처리 합니다.

## *저자* 요소

플러그인 작성자 이름입니다. 요소의 텍스트 콘텐츠 플러그인 작성자의 이름을 포함합니다. 예를 들어:

    <author>Foo plugin description</author>
    

## *키워드* 요소

플러그인 키워드입니다. 요소의 텍스트 콘텐츠 플러그인을 설명 하는 쉼표로 구분 된 키워드를 포함 합니다. 예를 들어:

    <keywords>foo,bar</keywords>
    

## *라이센스* 요소

플러그인 라이센스입니다. 요소의 텍스트 콘텐츠 플러그인 라이선스를 포함 되어 있습니다. 예를 들어:

    <license>Apache 2.0 License</license>
    

## *자산* 요소

하나 이상의 요소 목록 파일 또는 코르도바 응용 프로그램에 복사할 수 디렉터리 `www` 디렉터리. 예:

    <!-- a single file, to be copied in the root directory -->
    <asset src="www/foo.js" target="foo.js" />
    <!-- a directory, also to be copied in the root directory -->
    <asset src="www/foo" target="foo" />
    

모든 `<asset>` 태그 필요 둘 다 `src` 와 `target` 특성. 웹 전용 플러그인 포함 주로 `<asset>` 요소. 모든 `<asset>` 요소 안에 중첩 된 `<platform>` 아래 설명 된 대로 요소 플랫폼 관련 웹 자산을 지정 합니다. 특성은 다음과 같습니다.

*   `src`(필수): 파일 또는 디렉터리 위치 플러그인 패키지에 상대적으로 `plugin.xml` 문서. 파일에 지정 된 존재 하지 않는 경우 `src` 위치, plugman 중지 하 고 설치 과정을 반전, 충돌에 대 한 알림을 문제점과 0이 아닌 코드와 함께 종료.

*   `target` (required):
    
    파일 또는 디렉터리 한다 위치 코르도바 애플 리 케이 션에 상대적으로 `www` 디렉터리. 자산 수 대상으로 지정할 하위 디렉터리, 예를 들면.
    
        <asset src="www/new-foo.js" target="js/experimental/foo.js" />
        
    
    만듭니다는 `js/experimental` 디렉토리 내에서 `www` 디렉터리, 하지 않는 한 이미 현재 다음 복사본은 `new-foo.js` 파일 및 그것의 이름을 바꾸고 `foo.js` . 파일이 대상 위치에 이미 있으면 plugman 중지 하 고 설치 과정을 반전, 충돌에 대 한 알림을 고 0이 아닌 코드와 함께 종료 됩니다.

## *js 모듈* 요소

대부분의 플러그인 하나 이상의 JavaScript 파일이 포함 됩니다. 각 `<js-module>` 태그 자바 스크립트 파일에 해당 하 고 플러그인의 사용자 추가 하는 데 하지 못하도록 한 `<script>` 각 파일에 대 한 태그. 반면 `<asset>` 태그 복사한 파일에 플러그인 디렉터리에서 `www` , `<js-module>` 태그는 훨씬 더 정교한. 그들은 다음과 같습니다.

    <js-module src="socket.js" name="Socket">
        <clobbers target="chrome.socket" />
    </js-module>
    

예를 들어, 위의 플러그인을 설치할 때 `socket.js` 에 복사 `www/plugins/my.plugin.id/socket.js` 에 항목으로 추가 하 고 `www/cordova_plugins.js` . 로드 시 코드 `cordova.js` XHR을 사용 하 여 각 파일을 주입 한 `<script>` html 태그. 지우다 또는 아래에 설명 된 대로 적절 한 병합에 대 한 매핑을 추가 합니다.

*안* 랩 파일을 `cordova.define` , 그것은 자동으로 추가 됩니다. 모듈을 폐쇄에 싸여 있다 `module` , `exports` , 및 `require` 범위에서 마찬가지로 AMD 모듈에 대 한 정상입니다.

에 대 한 세부 정보는 `<js-module>` 태그:

*   `src`관련 플러그인 디렉토리에서 파일을 참조는 `plugin.xml` 파일.

*   `name`모듈 이름의 마지막 부분을 제공 합니다. 그것은 일반적으로 당신이 무엇을 좋아 하든지 수 고만 사용 하려는 경우 중요 한 `cordova.require` 를 JavaScript 코드에서 플러그인의 다른 부분을 가져오는. 모듈 이름을 `<js-module>` 플러그인의 `id` 의 값에 따라 `name` . 위의 예제와 `id` 의 `chrome.socket` , 모듈 이름이`chrome.socket.Socket`.

*   3 태그 내에서 사용할 수 있습니다 `<js-module>` .
    
    *   `<clobbers target="some.value"/>`나타냅니다는 `module.exports` 에 삽입 되는 `window` 개체를 `window.some.value` . 만큼 당신이 수 있는 `<clobbers>` 당신 처럼. 모든 개체에 사용할 수 없는 `window` 만들어집니다.
    
    *   `<merges target="some.value"/>`모듈에서 모든 기존 값을 병합 해야 나타냅니다 `window.some.value` . 어떤 키가 이미 있는 경우 모듈의 버전에는 원래 보다 우선 합니다. 만큼 당신이 수 있는 `<merges>` 당신 처럼. 모든 개체에 사용할 수 없는 `window` 만들어집니다.
    
    *   `<runs/>`코드와 함께 지정 해야 합니다 즉 `cordova.require` 에 설치 되어 있지 하지만 `window` 개체. 이 이벤트 처리기를 연결 하는 모듈을 초기화 하는 경우에 유용 하거나 그렇지 않으면. 수 있습니다 당신은 1까지 `<runs/>` 태그. 그 등을 참고는 `<runs/>` 와 `<clobbers/>` 또는 `<merges/>` 는 중복, 이후 그들은 또한 `cordova.require` 를 모듈.
    
    *   빈 `<js-module>` 아직도 로드 하 고를 통해 다른 모듈에 액세스할 수 있습니다`cordova.require`.

만약 `src` plugman 중지 및 설치 반대, 문제, 알림 문제 및 0이 아닌 코드와 함께 종료는 기존 파일에 해결 되지 않습니다.

중첩 `<js-module>` 내의 요소 `<platform>` 플랫폼 관련 자바 스크립트 모듈 바인딩을 선언 합니다.

## *종속성* 요소

`<dependency>`태그를 사용 하면 현재 플러그인이 종속 된 다른 플러그인을 지정할 수 있습니다. 미래 버전 플러그인 저장소에서 액세스할 것 이다, 하는 동안 짧은 기간에 플러그인 직접 참조 하 여 Url로 `<dependency>` 태그. 다음과 같이 배열 된다:

    <dependency id="com.plugin.id" url="https://github.com/myuser/someplugin" commit="428931ada3891801" subdir="some/path/here" />
    

*   `id`: 플러그인의 ID를 제공 합니다. 그것은 세계적으로 독특하고 리버스 도메인 스타일 표현 해야 합니다. 이러한 제한의 어느 쪽도 아니는 현재 적용 하는 동안 그들은 미래에 있을 수 있습니다.

*   `url`플러그인: URL입니다. 이 plugman 복제 하려고 git 저장소를 참조 해야 합니다.

*   `commit`: 이것은 어떤 자식 참조 이해 `git checkout` : 브랜치 또는 태그 이름 (예: `master` , `0.3.1` ), 커밋 (예를 들어, 해시 또는`975ddb228af811dd8bb37ed1dfd092a3d05295f9`).

*   `subdir`: 타겟된 플러그인 종속성 git 저장소의 하위 있음을 지정 합니다. 여러 관련된 플러그인을 포함 하는 저장소를 허용 하기 때문에 이것은 도움이, 각각 개별적으로 지정 합니다.

나중에 버전 제약 도입, 그리고 플러그인 저장소 명시적 Url 대신 이름으로 페치를 지원 하기 위해 존재 합니다.

### 상대 종속성 경로

설정 하는 경우는 `url` 의 한 `<dependency>` 태그 `"."` 제공 하 고는 `subdir` , 동일한 지역에서 종속 플러그인 설치 또는 부모 플러그인으로 원격 git 저장소를 지정 하는 `<dependency>` 태그.

참고는 `subdir` 항상 하지 부모 플러그인 git 저장소의 *루트* 에 상대적인 경로 지정 합니다. 로컬 경로 직접 플러그인을 설치 하는 경우에이 사실이.입니다. Plugman은 git 저장소의 루트를 발견 하 고 거기에서 다른 플러그인을 찾습니다.

## *플랫폼* 요소

`<platform>`태그 연결 된 네이티브 코드 또는 구성 파일을 수정 해야 하는 플랫폼을 식별 합니다. 이 명세를 사용 하 여 도구 지원 되는 플랫폼을 식별 하 고 코르 도우 바 프로젝트에 코드를 설치할 수 있습니다.

플러그인 없이 `<platform>` 태그 자바 스크립트 전용 및 따라서 모든 플랫폼에서 설치 가능한 것으로 간주 합니다.

샘플 플랫폼 태그:

    <platform name="android">
        <!-- android-specific elements -->
    </platform>
    <platform name="ios">
        <!-- ios-specific elements -->
    </platform>
    

필요한 `name` 특성을 식별 하는 [플랫폼 지원](../guide/support/index.html), 플랫폼 요소의 자식 연결.

플랫폼 이름은 소문자 이어야 합니다. 로 임의로 선택한 플랫폼 이름은 나열 되어 있습니다.

*   아마존-fireos
*   안 드 로이드
*   blackberry10
*   ios
*   wp8
*   windows8

## *소스 파일* 요소

`<source-file>`요소는 프로젝트에는 설치 되어 있어야 실행 가능한 소스 코드를 식별 합니다. 예:

    <!-- android -->
    <source-file src="src/android/Foo.java"
                    target-dir="src/com/alunny/foo" />
    <!-- ios -->
    <source-file src="src/ios/CDVFoo.m" />
    <source-file src="src/ios/someLib.a" framework="true" />
    <source-file src="src/ios/someLib.a" compiler-flags="-fno-objc-arc" />
    

그것은 다음과 같은 특성을 지원합니다.

*   `src`(필수): 관련 파일의 위치 `plugin.xml` . 경우는 `src` 파일을 찾을 수 없습니다, plugman 중지 설치 반대, 문제는 문제에 대 한 알림을 하 고 0이 아닌 코드와 함께 종료 됩니다.

*   `target-dir`: 디렉토리는 파일 복사 해야, 코르도바 프로젝트의 루트를 기준으로. 실제로, 이것은 어디에 파일 자바 기반 플랫폼에 대 한 가장 중요 한는 `com.alunny.foo` 패키지 내에서 찾을 수 있어야 합니다에 `com/alunny/foo` 디렉터리. 플랫폼 소스 디렉토리는 중요 하지 않습니다,이 특성을 생략 한다.
    
    자산, 것과 같이 경우는 `target` 의 한 `source-file` 는 기존 파일을 덮어쓸 것, plugman 중지 설치 반대, 문제, 문제에 대 한 알림을 고 0이 아닌 코드와 함께 종료.

*   `framework`(iOS만): 만약 설정 `true` , 또한 프로젝트에는 프레임 워크 지정된 된 파일을 추가 합니다.

*   `compiler-flags`(iOS만): 만약 설정, 특정 소스 파일에 대 한 지정 된 컴파일러 플래그를 할당 합니다.

## *구성 파일* 요소

수정, 어디 그 문서에서 수정 자리 한다와 무엇을 수정 해야 하는 XML 기반 구성 파일을 식별 합니다.

이 요소와 수정에 대 한 테스트 된 두 가지 파일 형식은 `xml` 및 `plist` 파일.

`config-file`요소는만 XML 문서 트리에 새로운 아이 추가할 수 있습니다. 이들이 XML 리터럴을 대상 문서에 삽입할 수 있습니다.

XML에 대 한 예제:

    <config-file target="AndroidManifest.xml" parent="/manifest/application">
        <activity android:name="com.foo.Foo" android:label="@string/app_name">
            <intent-filter>
            </intent-filter>
        </activity>
    </config-file>
    

예 `plist` :

    <config-file target="*-Info.plist" parent="CFBundleURLTypes">
        <array>
            <dict>
                <key>PackageName</key>
                <string>$PACKAGE_NAME</string>
            </dict>
        </array>
    </config-file>
    

그것은 다음과 같은 특성을 지원합니다.

*   `target`:
    
    파일을 수정할 수 및 코르도바 프로젝트의 루트에 상대적인 경로입니다.
    
    대상에는 와일드 카드 포함 될 수 있습니다 ( `*` ) 요소. 이 경우에, plugman 재귀적으로 프로젝트 디렉터리 구조를 통해 검색 하 고 첫 번째 일치 항목을 사용 하 여.
    
    IOS에 프로젝트 디렉터리 루트를 기준으로 구성 파일의 위치는 알려져 있지, 그래서의 대상 지정 `config.xml` 확인`cordova-ios-project/MyAppName/config.xml`.
    
    지정된 된 파일을 존재 하지 않는 경우 도구 구성 변화를 무시 하 고 설치를 계속.

*   `parent`구성 파일에 추가 될 요소의 부모를 참조: XPath 선택기입니다. 절대 선택기를 사용 하는 경우 와일드 카드를 사용할 수 있습니다 ( `*` ) 예를 들어, 루트 요소를 지정 하려면`/*/plugins`.
    
    대 한 `plist` 파일은 `parent` 어떤 부모 키 아래 지정 된 XML을 삽입 해야 합니다 결정 합니다.
    
    선택기는 지정된 된 문서에의 아이 게 해결 되지 않으면, 도구 중지 되 고 반전 설치 과정 경고, 고 0이 아닌 코드와 함께 종료 됩니다.

*   `after`: XML 조각을 추가 허용된 형제 자매의 우선 순위 목록입니다. [Http://msdn.microsoft.com/en-us/library/windowsphone/develop/ff769509%28v=vs.105%29.aspx#BKMK_EXTENSIONSelement][1] 같은 XML 요소의 엄격한 순서 필요로 하는 파일에 변경 내용을 지정 하는 데 유용

 [1]: http://msdn.microsoft.com/en-us/library/windowsphone/develop/ff769509%28v=vs.105%29.aspx#BKMK_EXTENSIONSelement

Windows [플랫폼 지원](../guide/support/index.html) (모두 선택) 2 개의 추가적인 특성 메타 이름 `package.appxmanifest`에 영향을 미치는 때:

`device-target` 특성을 나타냅니다는 지정 된 대상 장치 유형에 대 한 빌드할 때 포함 되어야만 합니다. 지원 되는 값은 `win`, `phone`또는 `all`.

`versions` 특성은 특정 Windows 버전에 대 한 응용 프로그램 매니페스트에 지정 된 버전 문자열과 일치 하는 버전에 대 한 변경만 해야 나타냅니다. 모든 유효한 노드 의미 버전 범위 문자열 값일 수 있습니다.

이러한 Windows 특정 특성을 사용 하 여의 예:

    <config-file target="package.appxmanifest" parent="/Package/Capabilities" versions="<8.1.0">
        <Capability Name="picturesLibrary" />
        <DeviceCapability Name="webcam" />
    </config-file>
    <config-file target="package.appxmanifest" parent="/Package/Capabilities" versions=">=8.1.0" device-target="phone">
        <DeviceCapability Name="webcam" />
    </config-file>
    

위의 예제에서는 pre-8.1 플랫폼 설정 합니다 (윈도우 8, 구체적으로) `웹캠` 장치 기능 및 `picturesLibrary` 일반적인 기능 요구 및 `웹캠` 장치 기능 Windows Phone 대 한 빌드 윈도우 8.1 프로젝트에만 적용. Windows 데스크톱 8.1 시스템 수정 되지 않습니다.

## *플러그인 plist* 요소

이것은 *오래 된* 코르 도우 바-ios 2.2.0 아래만 적용 됩니다. 코르 도우 바의 최신 버전에 대 한 `< config 파일 >` 태그를 사용 합니다.

예:

    <config-file target="config.xml" parent="/widget/plugins">
        <feature name="ChildBrowser">
            <param name="ios-package" value="ChildBrowserCommand"/>
        </feature>
    </config-file>
    

키와 iOS 코르도바 프로젝트에 올바른 `AppInfo.plist` 파일에 추가할 값을 지정 합니다. 예를 들어:

    <plugins-plist key="Foo" string="CDVFoo" />
    

## *리소스 파일* 및 *헤더 파일* 요소

소스 파일 처럼 하지만 iOS 같은 플랫폼에 맞게 하는 소스 파일, 헤더 및 리소스 구분. iOS 예제:

    <resource-file src="CDVFoo.bundle" />
    <resource-file src="CDVFooViewController.xib" />
    <header-file src="CDVFoo.h" />
    

안 드 로이드 예제:

    <resource-file src="FooPluginStrings.xml" target="res/values/FooPluginStrings.xml" />
    

## *lib 파일* 요소

블랙베리 10 같은 플랫폼만 소스, 리소스 및 헤더 파일 처럼 사용자가 만든 라이브러리를 사용 하는. 예:

    <lib-file src="src/BlackBerry10/native/device/libfoo.so" arch="device" />
    <lib-file src="src/BlackBerry10/native/simulator/libfoo.so" arch="simulator" />
    

지원된 특성:

*   `src`(필수): 관련 파일의 위치 `plugin.xml` . 경우 `src` plugman 중지를 설치, 문제는 문제에 대 한 경고를 취소 하 고 0이 아닌 코드와 함께 종료 됩니다 찾을 수 없습니다.

*   `arch`: 어떤 아키텍처는 `.so` 파일은 건설 되었습니다, 어느 `device` 또는`simulator`.

Windows 플랫폼 `<lib-file>` 요소는 `< SDKReference >` 생성 된 Windows 프로젝트 파일에 포함을 할 수 있습니다.

지원된 특성:

*   `src`(필수 사항): 포함 SDK의 이름 (는의 값으로 사용 될 것입니다는 `Include` 는 생성의 특성 `<SDKReference>` 요소).

*   `arch`: 나타냅니다는 `<SDKReference>` 지정 된 아키텍처에 대 한 만들 때 포함 되어야만 한다. 지원 되는 값은 `x86` , `x64` 또는`ARM`.

*   `device-target`: 나타냅니다는 `<SDKReference>` 지정 된 대상 장치 유형에 대 한 빌드할 때 포함 되어야만 한다. 지원 되는 값은 `win` (또는 `windows` ), `phone` 또는`all`.

*   `versions`: 나타냅니다는 `<SDKReference>` 지정 된 버전 문자열과 일치 하는 버전을 작성할 때 포함 되어야만 한다. 모든 유효한 노드 의미 버전 범위 문자열 값일 수 있습니다.

예:

    <lib-file src="Microsoft.WinJS.2.0, Version=1.0" arch="x86" />
    <lib-file src="Microsoft.WinJS.2.0, Version=1.0" versions=">=8.1" />
    <lib-file src="Microsoft.WinJS.2.0, Version=1.0" target="phone" />
    <lib-file src="Microsoft.WinJS.2.0, Version=1.0" target="win" versions="8.0" arch="x86" />
    

## *프레임 워크* 요소

에 따라 플러그인 프레임 워크 (일반적으로 운영 체제/플랫폼의 일부)를 식별 합니다.

옵션의 `사용자 지정` 특성은 프레임 워크 하나 플러그인 파일의 일부로 포함 되어 있는지 여부를 나타내는 boolean (따라서 아니에요 시스템 프레임 워크).

### iOS를 위한 *프레임 워크*

    <framework src="libsqlite3.dylib" />
    <framework src="social.framework" weak="true" />
    <framework src="relative/path/to/my.framework" custom="true" />
    

옵션의 `weak` 특성은 프레임 워크 약하게 연결 되어야 하는지 여부를 나타내는 boolean입니다. 기본값은 `false`.

### 안 드 로이드 *프레임 워크*

(Cordova-android@4.0.0) 현재 안 드 로이드에 *프레임 워크* 태그 받는다는 종속성을 포함 하도록 또는 번들된 라이브러리 프로젝트를 포함 하도록 사용 된다.

예:

    <!-- Depend on latest version of GCM from play services -->
    <framework src="com.google.android.gms:play-services-gcm:+" />
    <!-- Depend on v21 of appcompat-v7 support library -->
    <framework src="com.android.support:appcompat-v7:21+" />
    <!-- Depend on library project included in plugin -->
    <framework src="relative/path/FeedbackLib" custom="true" />
    

*framework* 는 또한 하위 주요 프로젝트의.gradle 파일에 포함 된 사용자 지정.gradle 파일을 사용할 수 있습니다.

    <framework src="relative/path/rules.gradle" custom="true" type="gradleReference" />
    

Pre-android@4.0.0 (개미 기반 프로젝트)에 대 한:

선택적 `type` 특성을 추가 하는 프레임 워크의 형식을 나타내는 문자열입니다. 현재 `projectReference` 지원 Windows 용만. 사용 하 여 `custom='true'` 및 `type='projectReference'`는 컴파일 추가 됩니다 + 코르 도우 바 프로젝트의 단계를 연결 하는 프로젝트에 대 한 참조를 추가 합니다. 이 본질적으로 유일한 방법입니다 현재 프레임 워크를 '사용자 정의'로 그들은 명시적으로 참조 코르도바 응용 프로그램 종속성으로 빌드된 여러 아키텍처를 타겟팅 할 수 있습니다.

선택적 `parent` 를 참조 추가할 하위 프로젝트를 포함 하는 디렉터리를 상대 경로 설정 합니다. 기본값은 `.`, 즉 응용 프로그램 프로젝트. 그것은이 예제에서 같은 하위 프로젝트 간의 참조를 추가할 수 있습니다.

    <framework src="extras/android/support/v7/appcompat" custom="false" parent="FeedbackLib" />
    

### Windows에 대 한 *프레임 워크*

Windows 플랫폼 프레임 워크를 포함 해야 하는 경우 수정 3 추가 특성을 (모두 선택)을 지원 합니다.

    <framework src="path/to/project/LibProj.csproj" custom="true" type="projectReference"/>
    

`arch` 특성 프레임 워크만 포함 되어야 함을 지정 된 아키텍처에 대 한 구축 하는 경우를 나타냅니다. 지원 되는 값은 `x86`, `x64` 또는 `ARM`.

`device-target` 특성을 나타냅니다는 지정 된 대상 장치 유형에 대 한 빌드할 때 포함 되어야만 합니다. 지원 되는 값은 `win` (또는 `windows`), `phone` 또는 `all`.

`versions` 특성은 프레임 워크만 포함 되어야 함을 지정 된 버전 문자열과 일치 하는 버전을 작성할 때 나타냅니다. 모든 유효한 노드 의미 버전 범위 문자열 값일 수 있습니다.

이러한 Windows 특정 특성을 사용 하 여의 예:

    <framework src="src/windows/example.dll" arch="x64" />
    <framework src="src/windows/example.dll" versions=">=8.0" />
    <framework src="src/windows/example.vcxproj" type="projectReference" target="win" />
    <framework src="src/windows/example.vcxproj" type="projectReference" target="all" versions="8.1" arch="x86" />
    

## *정보* 요소

사용자에 게 제공 하는 추가 정보입니다. 이 추가 단계를 쉽게 자동화 될 수 없는 또는 plugman의 범위는 필요한 경우에 유용 합니다. 예:

    <info>
    You need to install __Google Play Services__ from the `Android Extras` section using the Android SDK manager (run `android`).
    
    You need to add the following line to the `local.properties`:
    
    android.library.reference.1=PATH_TO_ANDROID_SDK/sdk/extras/google/google_play_services/libproject/google-play-services_lib
    </info>
    

## *hook* 요소

특정 동작이 발생 하면 코르도바에 의해 호출 됩니다 사용자 지정 스크립트를 나타냅니다 (예를 들어 후 플러그인 추가 또는 논리를 준비 하는 플랫폼 호출 됩니다). 코르도바의 기본 기능을 확장 해야 할 때 유용 합니다. 자세한 내용은 후크 가이드를 참조 하십시오.

    <hook type="after_plugin_install" src="scripts/afterPluginInstall.js" />
    

## 변수

어떤 경우에는 플러그인 구성 변경 대상 응용 프로그램에 의존 해야 합니다. 예를 들어 안 드 로이드에서 C2DM에 등록 하는 응용 프로그램 패키지 id가 `com.alunny.message` 필요로 사용 권한 같은:

    <uses-permission android:name="com.alunny.message.permission.C2D_MESSAGE"/>
    

`Plugin.xml` 파일에서 삽입 하는 내용을 미리 알려져 있지 경우에 변수는 달러 기호 뒤에 일련의 대문자, 숫자 또는 밑줄 표시 수 있습니다. 위의 예제에서는 `plugin.xml` 파일이이 태그를 포함할 것입니다.

    <uses-permission android:name="$PACKAGE_NAME.permission.C2D_MESSAGE"/>
    

plugman 지정된 된 값 또는 빈 문자열을 변수 참조를 대체 하는 경우 없는합니다. 변수 참조의 값 (이 경우에, `AndroidManifest.xml` 파일)에서 검색 하거나 도구;의 사용자 지정 수 수 있습니다. 정확한 프로세스는 특정 도구에 의존 합니다.

plugman은 플러그인의 필요한 변수를 지정 하는 사용자를 요청할 수 있습니다. 예를 들어 명령줄 인수로 C2M 및 구글 맵 스 API 키를 지정할 수 있습니다.

    plugman --platform android --project /path/to/project --plugin name|git-url|path --variable API_KEY=!@CFATGWE%^WGSFDGSDFW$%^#$%YTHGsdfhsfhyer56734
    

변수를 필수 있도록, `< platform >` 태그를 `< preference >` 태그를 포함 해야 합니다. 예를 들면:

    <preference name="API_KEY" />
    

plugman 확인이 필요한 환경에 전달 됩니다. 그렇지 않다면, 그것에 변수를 전달 하 고 0이 아닌 코드를 종료 하는 방법 사용자를 경고 한다.

특정 변수 이름은 아래 예약 한다.

## $PACKAGE_NAME

IOS 또는 `AndroidManifest.xml` 파일에 최상위 `매니페스트` 요소의 `패키지` 특성에 `CFBundleIdentifier` 을 해당 패키지에 대 한 리버스 도메인 스타일 고유 식별자입니다.