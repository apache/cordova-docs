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

# Plugman를 사용 하 여 플러그인을 관리 하

버전 3.0 이후, 코르도바 모든 장치, 플러그인으로 Api를 구현 하 고 기본적으로 비활성화 그들을 떠난다. 또한 두 가지 방법으로 추가 하 고 제거 플러그인을 지원 합니다. 첫 번째는 사용 하 여는 `cordova` CLI 명령줄 인터페이스를 설명 합니다. 두 번째는 저수준 [plugman][1] 명령줄 인터페이스를 사용 하 여. 이 가이드는 Cordova의 그들의 버전을 업그레이드 하 고 싶어 하지만 누가 아직 그들의 워크플로에서 코르도바 CLI를 채택 하지 않은 개발자를 위한 유용할 수 있습니다 두 번째 접근에 집중 한다.

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

*   코르 도우 바 플러그인 배터리 상태 plugman-플랫폼 < ios|android|blackberry10|wp7|wp8 >-프로젝트 <directory> -플러그인 https://git-wip-us.apache.org/repos/asf/cordova-plugin-battery-status.git

*   코르 도우 바 플러그인 카메라 plugman-플랫폼 < ios|android|blackberry10|wp7|wp8 >-프로젝트 <directory> -플러그인 https://git-wip-us.apache.org/repos/asf/cordova-plugin-camera.git

*   코르 도우 바-플러그인-콘솔 plugman-플랫폼 < ios|android|blackberry10|wp7|wp8 >-프로젝트 <directory> -플러그인 https://git-wip-us.apache.org/repos/asf/cordova-plugin-console.git

*   코르 도우 바-플러그인-연락처 plugman-플랫폼 < ios|android|blackberry10|wp7|wp8 >-프로젝트 <directory> -플러그인 https://git-wip-us.apache.org/repos/asf/cordova-plugin-contacts.git

*   코르 도우 바 플러그인 장치 plugman-플랫폼 < ios|android|blackberry10|wp7|wp8 >-프로젝트 <directory> -플러그인 https://git-wip-us.apache.org/repos/asf/cordova-plugin-device.git

*   코르 도우 바 플러그인 장치 모션 (가 속도계) plugman-플랫폼 < ios|android|blackberry10|wp7|wp8 >-프로젝트 <directory> -플러그인 https://git-wip-us.apache.org/repos/asf/cordova-plugin-device-motion.git

*   코르 도우 바 플러그인 장치 방향 (나침반) plugman-플랫폼 < ios|android|blackberry10|wp7|wp8 >-프로젝트 <directory> -플러그인 https://git-wip-us.apache.org/repos/asf/cordova-plugin-device-orientation.git

*   코르 도우 바 플러그인 대화 상자 plugman-플랫폼 < ios|android|blackberry10|wp7|wp8 >-프로젝트 <directory> -플러그인 https://git-wip-us.apache.org/repos/asf/cordova-plugin-dialogs.git

*   코르 도우 바 플러그인 파일 plugman-플랫폼 < ios|android|blackberry10|wp7|wp8 >-프로젝트 <directory> -플러그인 https://git-wip-us.apache.org/repos/asf/cordova-plugin-file.git

*   코르 도우 바 플러그인 파일 전송 plugman-플랫폼 < ios|android|blackberry10|wp7|wp8 >-프로젝트 <directory> -플러그인 https://git-wip-us.apache.org/repos/asf/cordova-plugin-file-transfer.git

*   코르 도우 바 플러그인 위치 정보 plugman-플랫폼 < ios|android|blackberry10|wp7|wp8 >-프로젝트 <directory> -플러그인 https://git-wip-us.apache.org/repos/asf/cordova-plugin-geolocation.git

*   코르 도우 바 플러그인 세계화 plugman-플랫폼 < ios|android|blackberry10|wp7|wp8 >-프로젝트 <directory> -플러그인 https://git-wip-us.apache.org/repos/asf/cordova-plugin-globalization.git

*   코르 도우 바-플러그인-inappbrowser plugman-플랫폼 < ios|android|blackberry10|wp7|wp8 >-프로젝트 <directory> -플러그인 https://git-wip-us.apache.org/repos/asf/cordova-plugin-inappbrowser.git

*   코르 도우 바 플러그인 미디어 plugman-플랫폼 < ios|android|blackberry10|wp7|wp8 >-프로젝트 <directory> -플러그인 https://git-wip-us.apache.org/repos/asf/cordova-plugin-media.git

*   코르 도우 바 플러그인 미디어 캡처 plugman-플랫폼 < ios|android|blackberry10|wp7|wp8 >-프로젝트 <directory> -플러그인 https://git-wip-us.apache.org/repos/asf/cordova-plugin-media-capture.git

*   코르 도우 바 플러그인 네트워크 정보 plugman-플랫폼 < ios|android|blackberry10|wp7|wp8 >-프로젝트 <directory> -플러그인 https://git-wip-us.apache.org/repos/asf/cordova-plugin-network-information.git

*   코르 도우 바 플러그인 splashscreen plugman-플랫폼 < ios|android|blackberry10|wp7|wp8 >-프로젝트 <directory> -플러그인 https://git-wip-us.apache.org/repos/asf/cordova-plugin-splashscreen.git

*   코르 도우 바 플러그인 진동 plugman-플랫폼 < ios|android|blackberry10|wp7|wp8 >-프로젝트 <directory> -플러그인 https://git-wip-us.apache.org/repos/asf/cordova-plugin-vibration.git