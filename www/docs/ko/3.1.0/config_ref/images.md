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

CLI에서 작업할 때 아이콘 소스 파일은 프로젝트 내에서 다양 한 플랫폼 관련 하위 디렉터리 내에 있는 `www/res/icons` 디렉터리. 새로 만든된 프로젝트 대상으로 하고자 하는 플랫폼에 대 한 대체 수 코르 도우 바 아이콘의 기본 집합을 갖추고 있습니다.

안 드 로이드는 낮은, 중간, 높은, 매우 높은 해상도 대 한 아이콘을 지정합니다.

        android/icon-36-ldpi.png
        android/icon-48-mdpi.png
        android/icon-72-hdpi.png
        android/icon-96-xhdpi.png
    

IOS 플랫폼 iPads, 72 픽셀 사각형 아이콘을 지정 하 고 아이폰과 아이팟, 망막에 대 한 고해상도 *2 x* 변형 57 픽셀 아이콘 표시.

        ios/icon-57-2x.png
        ios/icon-57.png
        ios/icon-72-2x.png
        ios/icon-72.png
    

Windows Phone는 다음과 같은 다양 한 [장치](../cordova/device/device.html) 배경 이미지 사용 하는 응용 프로그램을 나타내는 때 기와 함께 기본 48 픽셀 아이콘을 지정 합니다.

        windows-phone/icon-48.png
        windows-phone/icon-62-tile.png
        windows-phone/icon-173-tile.png
    

블랙베리 80 픽셀 아이콘을 필요로합니다.

        blackberry/icon-80.png
    

Tizen은 128 픽셀 아이콘을 필요로합니다.

        tizen/icon-128.png
    

## CLI에서 시작 화면을 구성

[Splashscreen](../cordova/splashscreen/splashscreen.html) API를 사용 하 여 여러 플랫폼에서 애플 리 케이 션의 소개 시작 화면을 표시 하도록 설정 합니다. 시작 화면 소스 [파일](../cordova/file/fileobj/fileobj.html) 프로젝트의 내 [위치](../cordova/geolocation/Position/position.html) 하는 CLI에서 작업할 때 `www/res/screens` 하위 디렉터리.

안 드 로이드는 낮은, 중간, 높은, 매우 높은 해상도 대 한 두 초상화와 가로 중심 스플래시 스크린 이미지를 지정합니다.

        android/screen-hdpi-landscape.png
        android/screen-hdpi-portrait.png
        android/screen-ldpi-landscape.png
        android/screen-ldpi-portrait.png
        android/screen-mdpi-landscape.png
        android/screen-mdpi-portrait.png
        android/screen-xhdpi-landscape.png
        android/screen-xhdpi-portrait.png
    

IOS 플랫폼 변형 망막 디스플레이 및 다른 방향에 대 한 아이폰/아이팟과 아이 패드에 대 한 이체를 지정합니다. *568 H* [파일](../cordova/file/fileobj/fileobj.html) 아이폰 5의 키가 화면에 대 한 사용자 지정:

        ios/screen-ipad-landscape-2x.png
        ios/screen-ipad-landscape.png
        ios/screen-ipad-portrait-2x.png
        ios/screen-ipad-portrait.png
        ios/screen-iphone-landscape-2x.png
        ios/screen-iphone-landscape.png
        ios/screen-iphone-portrait-2x.png
        ios/screen-iphone-portrait.png
        ios/screen-iphone-portrait-568h-2x.png
    

블랙베리와 Windows Phone 단일 시작 화면 이미지를 지정합니다.

        blackberry/screen-225.png
        windows-phone/screen-portrait.jpg
    

다음 섹션에서는 Sdk 및 관련된 명령줄 도구 플랫폼 가이드에서 설명 하는 경우 시작 화면을 설정 하는 방법을 자세히 설명.

## 안 드 로이드 플랫폼에 대 한 시작 화면

안 드 로이드 프로젝트에 [9 패치 이미지][1] 파일을 배치 `res/drawable` 디렉터리. 각각에 대 한 크기 이어야 합니다.

 [1]: https://developer.android.com/tools/help/draw9patch.html

*   xlarge (xhdpi): 적어도 960 × 720
*   대형 (hdpi): 640 × 480 이상
*   매체 (mdpi): 적어도 470 × 320
*   작은 (ldpi): 적어도 426 × 320

에 `config.xml` , 다음과 같은 환경 설정 추가:

    <preference name="splashscreen", "splash" />
    <preference name="splashScreenDelay", 10000 />
    

첫 줄 시작 화면으로 표시 하려면 이미지를 설정 합니다. 당신이 이름을 이미지 아무것도 이외의 경우 `splash.png` ,이 줄을 수정 해야 합니다.

두 번째 줄에는 얼마나 오래는 splashscreen 나타납니다 밀리초에서의 지연 설정 합니다. App 받게 되 면 스플래시 화면을 해제 하는 `[deviceready](../cordova/events/events.deviceready.html)` [이벤트](../cordova/events/events.html), 전화는 `navigator.splashscreen.hide()` 방법.

## IOS 플랫폼에 대 한 시작 화면

IOS 프로젝트에 스플래시 스크린 이미지를 복사 `Resources/splash` 디렉터리. 만 iPad 또는 아이폰 지원 장치에 대 한 이미지를 추가 합니다. 각 이미지의 크기 이어야 합니다.

*   Default-568h@2x~iphone.png (640x1136 pixels)
*   Default-Landscape@2x~ipad.png (2048 x 1496 픽셀)
*   Default-Landscape~ipad.png (1024x748 pixels)
*   Default-Portrait@2x~ipad.png (1536x2008 pixels)
*   Default-Portrait~ipad.png (768x1004 pixels)
*   Default@2x~iphone.png (640x960 pixels)
*   Default~iphone.png (320x480 pixels)

## 블랙베리 10 플랫폼에 대 한 시작 화면

프로젝트의 시작 화면 이미지 복사 `res/screen/blackberry10` 디렉터리. [파일](../cordova/file/fileobj/fileobj.html) 이름 이어야 합니다.

*   splash-1280x768.png (1280x768 pixels)
*   splash-720x720.png (720x720 pixels)
*   splash-768x1280.png (768x1280 pixels)