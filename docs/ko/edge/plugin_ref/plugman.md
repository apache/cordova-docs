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

버전 3.0 이후, 코르도바 모든 장치, 플러그인으로 Api를 구현 하 고 기본적으로 비활성화 그들을 떠난다. 또한 두 가지 방법으로 추가 하 고 제거 플러그인을 지원 합니다. 첫 번째는 사용 하 여는 `cordova` CLI 명령줄 인터페이스를 설명 합니다. 두 번째는 저수준 [Plugman][1] 명령줄 인터페이스 ("네이티브 플랫폼 개발" 워크플로)를 사용 하 여 이러한 두 가지 개발 경로 사이의 주요 차이점은 그 Plugman만 추가할 수 있습니다 플러그인 하나의 플랫폼을 한 번에 반해 CLI 모든 플랫폼을 대상으로 하는 플러그인을 추가 합니다. 이 때문에, 그것은 작업 하는 경우 밀접 하 게 따라서 단일 플랫폼으로 워크플로 "네이티브 플랫폼 개발" 이름 Plugman를 사용 하 여 더 이해.

 [1]: https://github.com/apache/cordova-plugman/

Plugman에 대 한 자세한 노드 모듈로 Plugman 소모 또는 Plugman 코드에 해킹에 관심이 있다면, 하는 경우에 특히 [그것의 저장소에서 README 파일][2] 을 참조합니다.

 [2]: https://github.com/apache/cordova-plugman/blob/master/README.md

## Plugman 설치

Plugman를 설치 하려면 [노드][3] 컴퓨터에 설치 되어 있어야 합니다. 그럼 다음을 실행할 수 있습니다 어디에서 나 세계적으로, 컴퓨터에 모든 디렉터리에서 사용할 수 있도록 plugman를 설치 하 여 환경에서 명령:

 [3]: http://nodejs.org/

    $ npm install -g plugman
    

당신이 있어야 `git` 에 당신의 `PATH` 원격 git Url에서 직접 플러그인을 설치할 수 있습니다.

**팁:** 찾으면 그 plugman npm으로 설치한 후 있습니다 여전히 실행할 수 `plugman` 명령, 추가 했는지 확인은 `/npm/` 디렉토리에 당신의`PATH`.

**참고:** 세계적으로 Plugman를 설치 하 여 고궁 박물원 글로벌 네임 스페이스를 오염 하지 않으려는 경우이 단계를 건너뛸 수 있습니다. 만약이 사건이 다음 셸 도구와 코르 도우 바 프로젝트를 만들 때 있을 것입니다는 `node_modules` Plugman를 포함 하 여 프로젝트 내부 디렉터리. 이후 세계적으로 instally 하지 않았다, 예를 들면 모든 Plugman 명령에 대 한 노드를 호출 해야 합니다 `node ./node_modules/plugman/main.js -version` . 이 가이드의 나머지 부분에서는 가정 합니다 설치 Plugman 세계적으로, 그것을 그냥 호출할 수 있습니다 의미`plugman`.

## 코르 도우 바 프로젝트 만들기

Plugman를 사용 하 여 코르도바 프로젝트를 만들어야 합니다. 이렇게 하려면 명령줄 인터페이스 또는 낮은 수준의 쉘 스크립트. 쉘 스크립트를 사용 하 여 프로젝트를 만드는 데 대 한 지침 플랫폼 가이드 페이지에 나열 된 다양 한 "명령줄 도구" 가이드에 있습니다.

## 플러그인 추가

Plugman 설치 하 고 코르 도우 바 프로젝트를 만들었습니다와 플랫폼에 플러그인을 추가 시작할 수 있습니다.

    $ plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin <name|url|path> [--plugins_dir <directory>] [--www <directory>] [--variable <name>=<value> [--variable <name>=<value> ...]]
    

최소 매개 변수를 사용 하 여,이 명령은 코르도바 프로젝트에 플러그인을 설치 합니다. 해당 플랫폼에 대 한 플랫폼 및 코르도바 프로젝트 위치를 지정 해야 합니다. 또한 지정 해야 플러그인을 다른 `--plugin` 매개 변수 형성 되 고:

*   `name`플러그인 내용이 존재: 디렉터리 이름입니다. 이 기존 디렉터리 여야는 `--plugins_dir` 경로 (아래 추가 정보 참조) 또는 코르도바 레지스트리에서 플러그인.
*   `url`: URL https:// 또는 git로 시작: / /를 포함 하는 시그니처의 유효한 git 저장소를 가리키는 한 `plugin.xml` 파일. 이 저장소의 내용을 복사할 것이 고`--plugins_dir`.
*   `path`: 디렉터리 경로를 포함 하는 유효한 플러그인을 포함 하는 `plugin.xml` 파일. 이 패스의이 내용을 복사할 수 있는`--plugins_dir`.

다른 매개 변수:

*   `--plugins_dir`기본값은 `<project>/cordova/plugins` , 하지만 수 있습니다 각각에 대 한 하위 디렉터리 포함 된 디렉터리 가져와야 플러그인.
*   `--www`프로젝트의 기본값 `www` 폴더 위치 하지만 코르도바 프로젝트 응용 프로그램 웹 자산으로 사용 되는 모든 디렉터리를 수 있습니다.
*   `--variable`특정 변수를 지정할 필요 설치 시 특정 API 키 또는 다른 사용자 정의 사용자 정의 매개 변수를 필요로 하는 플러그인을 수 있습니다. 자세한 내용은 [플러그인 명세][4] 를 참조 하십시오.

 [4]: plugin_spec.md

## 플러그인 제거

플러그인을 제거 하려면 단순히 전달 된 `--uninstall` 플래그와 플러그인 ID를 제공

    $ plugman --uninstall --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin <id> [--www <directory>] [--plugins_dir <directory>]
    

## 도움말 명령

Plugman 전역 도움말 명령 집착 하거나 문제가 발생 하는 경우 도움이 될 수 있는 특징 이다. 그것은 모든 사용 가능한 Plugman 명령 및 구문 목록을 표시 합니다.

    plugman -help
    plugman  # same as above
    

**참고**: `plugman -help` 몇 가지 추가 레지스트리 관련 명령이 표시 될 수 있습니다. 이 명령은 플러그인 개발자 이며 제 3 자 플러그인 레지스트리에 구현 되지 않을 수 있습니다.

추가할 수 있습니다는 `--debug|-d` 플래그 방출 하 고 당신을 도울 수 있습니다 내부 디버깅 메시지를 표시 하는 자세한 정보 표시 모드에서 해당 명령을 실행 하는 모든 Plugman 명령에 누락 된 파일 같은 문제를 추적 합니다.

    # Adding Android battery-status plugin to "myProject":
    plugman -d --platform android --project myProject --plugin org.apache.cordova.battery-status
    

마지막으로, 사용할 수 있습니다는 `--version|-v` 플래그를 사용 하는 Plugman의 버전을 참조 하십시오.

    plugman -v
    

## 레지스트리 작업

[플러그인 레지스트리][5]상호 작용을 위해 사용 될 수 있는 plugman 명령 수가 있습니다. 이러한 레지스트리 명령을 *plugins.cordova.io* 플러그인 레지스트리 관련 되며 제 3 자 플러그인 레지스트리에서 구현 되지 않을 수 있습니다 note 하시기 바랍니다.

 [5]: http://plugins.cordova.io

### 플러그인에 대 한 검색

Plugman를 사용 하 여 플러그인 id 주어진된 공간 구분 된 키워드 목록이 일치 하는 [플러그 접속식 레지스트리][5] 검색 수 있습니다.

    plugman search <plugin keywords>
    

### 플러그인 레지스트리 변경

당신이 얻을 수 또는 현재 플러그인 레지스트리 URL 설정 plugman를 사용 하 여. 일반적으로 http://registry.cordova.io에서 설정 하는 제 3 자 플러그인 레지스트리를 사용 하려는 경우가 아니면이 떠나야 한다.

    plugman config set registry <url-to-registry>
    plugman config get registry
    

### 플러그인 정보

함께 플러그인 저장소에 저장 된 어떤 특정 플러그인에 대 한 정보를 얻을 수 있습니다.

    plugman info <id>
    

이 플러그인의 버전 번호와 같은 플러그인 레지스트리 정보와 인출 연락을 드릴 것입니다.

## 코어 플러그인 설치

아래 예제에서는 코르도바 Api 프로젝트에서는 여전히 작동 버전 3.0으로 업그레이드 한 후 필요에 따라 플러그인을 추가 하는 방법을 보여 줍니다. 각 명령에 대 한 대상 플랫폼을 선택 하 고 플랫폼의 프로젝트 디렉토리를 참조 해야 합니다.

*   cordova-plugin-battery-status
    
    plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.battery-status

*   cordova-plugin-camera plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.camera

*   cordova-plugin-console plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.console

*   cordova-plugin-contacts plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.contacts

*   cordova-plugin-device plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.device

*   cordova-plugin-device-motion (accelerometer) plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.device-motion

*   cordova-plugin-device-orientation (compass) plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.device-orientation

*   cordova-plugin-dialogs plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.dialogs

*   cordova-plugin-file plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.file

*   cordova-plugin-file-transfer plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.file-transfer

*   cordova-plugin-geolocation plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.geolocation

*   cordova-plugin-globalization plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.globalization

*   cordova-plugin-inappbrowser plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.inappbrowser

*   cordova-plugin-media plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.media

*   cordova-plugin-media-capture plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.media-capture

*   cordova-plugin-network-information plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.network-information

*   cordova-plugin-splashscreen plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.splashscreen

*   cordova-plugin-vibration plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.vibration