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

title: 아이콘 및 시작 화면
---

# 아이콘 및 시작 화면

이 섹션에서는 응용 프로그램의 아이콘과 코르도바 CLI (명령줄 인터페이스에서 설명)에서 작업할 때 둘 다 다양 한 플랫폼에 대 한 선택적 스플래시 화면을 구성 하는 방법 (플랫폼 가이드에 자세히 설명) 플랫폼 SDK 도구를 사용 하 여 또는.

## CLI 구성 아이콘

CLI에서 근무를 통해 애플 리 케이 션 아이콘을 정의할 수 있습니다 때 `<icon>` 요소 ( `config.xml` ). 아이콘을 지정 하지 않으면 아파치 코르도바 로고 사용 됩니다.

        <icon src="res/ios/icon.png" platform="ios" width="57" height="57" density="mdpi" />
    

src: (필수) 이미지 파일을 프로젝트 디렉터리에 상대적인 위치를 지정 합니다

플랫폼: (선택 사항) 대상 플랫폼

폭: (선택 사항) 아이콘 너비 (픽셀)

높이: (선택 사항) 아이콘 높이 (픽셀)

밀도: 특정 일 (선택 사항) 안 드 로이드 아이콘 밀도 지정 합니다.

다음 구성은 모든 플랫폼에 사용할 수 있는 단일 기본 아이콘을 정의 하기 위해 사용할 수 있습니다.

        <icon src="res/icon.png" />
    

각 플랫폼에 대해 다른 화면 해상도 맞게 설정 픽셀 완벽 한 아이콘을 정의할 수 있습니다.

아마존 화재 운영 체제

         <platform name="amazon-fireos">
                  <icon src="res/android/ldpi.png" density="ldpi" />
                  <icon src="res/android/mdpi.png" density="mdpi" />
                  <icon src="res/android/hdpi.png" density="hdpi" />
                  <icon src="res/android/xhdpi.png" density="xhdpi" />
         </platform>
    

안 드 로이드

         <platform name="android">
                  <icon src="res/android/ldpi.png" density="ldpi" />
                  <icon src="res/android/mdpi.png" density="mdpi" />
                  <icon src="res/android/hdpi.png" density="hdpi" />
                  <icon src="res/android/xhdpi.png" density="xhdpi" />
         </platform>
    

BlackBerry10

         <platform name="blackberry10">
                  <icon src="res/bb10/icon-86.png" />
                  <icon src="res/bb10/icon-150.png" />
         </platform>
    

여러 크기 및 로케일을 타겟팅에 대 한 블랙베리의 설명서를 참조 하십시오. [http://developer.blackberry.com/html5/documentation/icon_element.html]

Firefox 운영 체제

         <platform name="firefoxos">
                  <icon src="res/ff/logo.png" width="60" height="60" />
         </platform>
    

iOS

         <platform name="ios">
                  <!-- iOS 8.0+ -->
                  <!-- iPhone 6 Plus  -->
                  <icon src="res/ios/icon-60@3x.png" width="180" height="180" />
                  <!-- iOS 7.0+ -->
                  <!-- iPhone / iPod Touch  -->
                  <icon src="res/ios/icon-60.png" width="60" height="60" />
                  <icon src="res/ios/icon-60@2x.png" width="120" height="120" />
                  <!-- iPad -->
                  <icon src="res/ios/icon-76.png" width="76" height="76" />
                  <icon src="res/ios/icon-76@2x.png" width="152" height="152" />
                  <!-- iOS 6.1 -->
                  <!-- Spotlight Icon -->
                  <icon src="res/ios/icon-40.png" width="40" height="40" />
                  <icon src="res/ios/icon-40@2x.png" width="80" height="80" />
                  <!-- iPhone / iPod Touch -->
                  <icon src="res/ios/icon.png" width="57" height="57" />
                  <icon src="res/ios/icon@2x.png" width="114" height="114" />
                  <!-- iPad -->
                  <icon src="res/ios/icon-72.png" width="72" height="72" />
                  <icon src="res/ios/icon-72@2x.png" width="144" height="144" />
                  <!-- iPhone Spotlight and Settings Icon -->
                  <icon src="res/ios/icon-small.png" width="29" height="29" />
                  <icon src="res/ios/icon-small@2x.png" width="58" height="58" />
                  <!-- iPad Spotlight and Settings Icon -->
                  <icon src="res/ios/icon-50.png" width="50" height="50" />
                  <icon src="res/ios/icon-50@2x.png" width="100" height="100" />
         </platform>
    

Tizen

         <platform name="tizen">
                  <icon src="res/tizen/icon-128.png" width="128" height="128" />
         </platform>
    

윈도우 Phone8

         <platform name="wp8">
                  <icon src="res/wp/ApplicationIcon.png" width="99" height="99" />
                  <!-- tile image -->
                  <icon src="res/wp/Background.png" width="159" height="159" />
         </platform>
    

Windows8

         <platform name="windows8">
                  <icon src="res/windows8/logo.png" width="150" height="150" />
                  <icon src="res/windows8/smalllogo.png" width="30" height="30" />
                  <icon src="res/windows8/storelogo.png" width="50" height="50" />
         </platform>
    

## CLI에서 시작 화면을 구성

최상위 수준에서 `config.xml` 파일 (아니라 하나에 `platforms` ), 여기에 지정 된 것과 같은 구성 요소를 추가 합니다.

# 예제 구성

"Src" 특성의 값은 프로젝트 디렉터리를 기준으로 그리고 www 디렉토리를 주의 하십시오. 원하는 소스 이미지 이름을 지정할 수 있습니다. 응용 프로그램에서 내부 이름은 코르도바에 의해 결정 됩니다.

    <platform name="android">
        <!-- you can use any density that exists in the Android project -->
        <splash src="res/screen/android/splash-land-hdpi.png" density="land-hdpi"/>
        <splash src="res/screen/android/splash-land-ldpi.png" density="land-ldpi"/>
        <splash src="res/screen/android/splash-land-mdpi.png" density="land-mdpi"/>
        <splash src="res/screen/android/splash-land-xhdpi.png" density="land-xhdpi"/>
    
        <splash src="res/screen/android/splash-port-hdpi.png" density="port-hdpi"/>
        <splash src="res/screen/android/splash-port-ldpi.png" density="port-ldpi"/>
        <splash src="res/screen/android/splash-port-mdpi.png" density="port-mdpi"/>
        <splash src="res/screen/android/splash-port-xhdpi.png" density="port-xhdpi"/>
    </platform>
    
    <platform name="ios">
        <!-- images are determined by width and height. The following are supported -->
        <splash src="res/screen/ios/Default~iphone.png" width="320" height="480"/>
        <splash src="res/screen/ios/Default@2x~iphone.png" width="640" height="960"/>
        <splash src="res/screen/ios/Default-Portrait~ipad.png" width="768" height="1024"/>
        <splash src="res/screen/ios/Default-Portrait@2x~ipad.png" width="1536" height="2048"/>
        <splash src="res/screen/ios/Default-Landscape~ipad.png" width="1024" height="768"/>
        <splash src="res/screen/ios/Default-Landscape@2x~ipad.png" width="2048" height="1536"/>
        <splash src="res/screen/ios/Default-568h@2x~iphone.png" width="640" height="1136"/>
        <splash src="res/screen/ios/Default-667h.png" width="750" height="1334"/>
        <splash src="res/screen/ios/Default-736h.png" width="1242" height="2208"/>
        <splash src="res/screen/ios/Default-Landscape-736h.png" width="2208" height="1242"/>
    </platform>
    
    <platform name="wp8">
        <!-- images are determined by width and height. The following are supported -->
        <splash src="res/screen/wp8/SplashScreenImage.jpg" width="768" height="1280"/>
    </platform>
    
    <platform name="windows8">
        <!-- images are determined by width and height. The following are supported -->
        <splash src="res/screen/windows8/splashscreen.png" width="620" height="300"/>
    </platform>
    
    <platform name="blackberry10">
        <!-- Add a rim:splash element for each resolution and locale you wish -->
        <!-- http://developer.blackberry.com/html5/documentation/rim_splash_element.html -->
        <rim:splash src="res/screen/windows8/splashscreen.png"/>
    </platform>
    
    
    <preference name="SplashScreenDelay" value="10000" />
    

# 지원 되는 플랫폼

지금 현재 (코르도바 3.5.0 7 월 2014) 다음 [플랫폼 지원](../guide/support/index.html) 시작 화면.

    android
    ios
    wp8
    windows8
    blackberry10
    

# Splashscreen 플러그인

또한 프로그래밍 방식으로 표시 하 고 응용 프로그램 실행 https://github.com/apache/cordova-plugin-splashscreen 동안 시작 화면을 숨기는 데 사용할 수 있는 특별 한 스플래시 화면 플러그인을 제공 하는 아파치 코르도바