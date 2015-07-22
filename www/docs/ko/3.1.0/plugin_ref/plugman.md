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

title: Plugman를 사용 하 여 플러그인을 관리 하
---

# Plugman를 사용 하 여 플러그인을 관리 하

버전 3.0 이후, 코르도바 모든 [장치](../cordova/device/device.html), 플러그인으로 Api를 구현 하 고 기본적으로 비활성화 그들을 떠난다. 또한 두 가지 방법으로 추가 하 고 제거 플러그인을 지원 합니다. 첫 번째는 사용 하 여는 `cordova` CLI 명령줄 인터페이스를 설명 합니다. 두 번째는 저수준 [plugman][1] 명령줄 인터페이스를 사용 하 여. 이 가이드는 Cordova의 그들의 버전을 업그레이드 하 고 싶어 하지만 누가 아직 그들의 워크플로에서 코르도바 CLI를 채택 하지 않은 개발자를 위한 유용할 수 있습니다 두 번째 접근에 집중 한다.

 [1]: https://github.com/apache/cordova-plugman/

대 한 자세한 내용은 plugman, [그것의 저장소에서 README 파일][2] 을 참조합니다.

 [2]: https://github.com/apache/cordova-plugman/blob/master/README.md

## 기본 명령

Plugman를 설치 하려면 [노드][3] 컴퓨터에 설치 되어 있어야 합니다.

 [3]: http://nodejs.org/

    npm install -g plugman
    

다음은 각 플랫폼에 대 한 플러그인을 추가 하는 구문이입니다.

    plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin <name|url|path> [--plugins_dir <directory>] [--www <directory>] [--variable <name>=<value> [--variable <name>=<value> ...]]
    

플러그인을 제거:

    plugman --uninstall --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin <id> [--www <directory>] [--plugins_dir <directory>]
    

## 코어 플러그인 설치

아래 예제에서는 코르도바 Api 프로젝트에서는 여전히 작동 버전 3.0으로 업그레이드 한 후 필요에 따라 플러그인을 추가 하는 방법을 보여 줍니다. 각 명령에 대 한 대상 플랫폼을 선택 하 고 플랫폼의 프로젝트 디렉토리를 참조 해야 합니다.

*   cordova-plugin-battery-status plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.battery-status

*   cordova-plugin-camera plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.camera

*   cordova-plugin-console plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.console

*   cordova-plugin-contacts plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.contacts

*   cordova-plugin-device plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.device

*   cordova-plugin-device-motion (accelerometer) plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.device-motion

*   cordova-plugin-device-orientation (compass) plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.device-orientation

*   cordova-plugin-dialogs plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.dialogs

*   cordova-plugin-file plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.file

*   cordova-plugin-file-transfer plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.file-transfer

*   cordova-plugin-geolocation plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.geolocation

*   cordova-plugin-globalization plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.globalization

*   cordova-plugin-inappbrowser plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.inappbrowser

*   cordova-plugin-media plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.media

*   cordova-plugin-media-capture plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.media-capture

*   cordova-plugin-network-information plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.network-information

*   cordova-plugin-splashscreen plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.splashscreen

*   cordova-plugin-vibration plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.vibration