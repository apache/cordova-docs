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

title: 플랫폼 및 플러그인 버전 관리
---

# 플랫폼 및 플러그인 버전 관리

버전 4.3.0 이상, 코르도바는 저장 하 고 복원 플랫폼과 플러그인 기능을 제공 한다.

이 기능은 개발자가 저장 하 고 모든 플랫폼과 플러그인 소스 코드 체크인 하지 않고 그들의 애플 리 케이 션 알려진 상태로 복원할 수 있습니다.

'저장' 명령을 config.xml에 응용 프로그램의 플랫폼 및 플러그인 버전에 대 한 세부 정보를 저장합니다. '복원' 단계 자동으로 발생 했을 때 **'cordova prepare'** 가 만드는 이전 config.xml 파일에 저장 된 정보를 사용 하 여.

한 시나리오에서 저장/복원 기능 편리한 플랫폼 또는 플러그인에 초점을 맞추고 각 팀 멤버는 애플 리 케이 션에 사용 하는 큰 팀에서입니다. 이 기능은 쉽게 프로젝트를 공유 하 고 체크 인 저장소 중복 코드의 양을 줄일 수 있습니다.

## 플랫폼 버전 관리

### 저장 플랫폼

플랫폼을 저장 하려면 다음 명령을 실행:

    $ cordova platform add <platform[@<version>] | directory | git_url> --save
    

위의 명령을 실행 후 결과 config.xml이 같습니다.

    <?xml version='1.0' encoding='utf-8'?>
        ...
        <engine name="android" spec="~4.0.0" />
        ...
    </xml>
    

몇 가지 예제:

  * **''코르도바 플랫폼 추가 안 드 로이드-저장** => 안 드 로이드 플랫폼의 고정 된 버전을 검색, 프로젝트에 추가 하 고 config.xml을 업데이트 합니다.
  * **''코르도바 플랫폼 추가 android@3.7.0-저장** 검색 => 안 드 로이드 플랫폼 버전 3.7.0 고궁 박물원, 프로젝트 및 다음 업데이트 config.xml 그것를 추가합니다.
  * => **'코르도바 플랫폼 안 드 로이드 @https://github.com/apache/cordova-android.git-저장 추가'** 지정된 코르도바-안 드 로이드 git 저장소를 복제, 프로젝트, 안 드 로이드 플랫폼을 추가 다음 config.xml을 업데이트 하 고 지정된 된 git url 그것의 버전을 가리킵니다.
  * **''코르도바 플랫폼 추가 c: / 경로 / / 안 드 로이드/플랫폼으로-저장** 검색 => 지정된 된 디렉터리에서 안 드 로이드 플랫폼 프로젝트, 다음 업데이트 config.xml 및 디렉터리를 추가 합니다.

### 기존 프로젝트에서 플랫폼을 저장 하는 질량

'-저장 ' 위에서 설명한 플래그는 플랫폼 추가 하는 동안 그것을 사용 해야 하는 경우에 유용. 기존 프로젝트를 있고 프로젝트에 현재 추가 된 모든 플랫폼을 저장 하려는 경우 사용할 수 있습니다.

    $ cordova platform save
    

### 업데이트/제거 플랫폼

그것은 또한 명령 '코르도바 플랫폼 업데이트'과 'cordova 플랫폼 '을 제거 하는 동안 config.xml에서 업데이트/삭제 수 있습니다:

    $ cordova platform update <platform[@<version>] | directory | git_url> --save
    $ cordova platform remove <platform> --save
    

몇 가지 예제:

  * 고정 된 버전, 업데이트 config.xml 항목을 업데이트 하는 안 드 로이드 플랫폼 이외에 => **'코르도바 플랫폼 업데이트 안 드 로이드-저장'** 을
  * 안 드 로이드 플랫폼 버전 3.8.0, 업데이트 config.xml 항목을 업데이트 하는 것 외에도 => **'코르도바 플랫폼 업데이트 android@3.8.0-저장**
  * 폴더, 업데이트 config.xml 항목에에서 버전 안 드 로이드 플랫폼으로 업데이 트 뿐만 아니라 => **'코르도바 플랫폼 업데이트 /path/to/android/platform-저장**
  * => **'코르도바 플랫폼 안 드 로이드-저장 제거** 프로젝트에서 안 드 로이드 플랫폼을 제거 하 고 config.xml에서 항목을 삭제 합니다.

### 플랫폼을 복원

플랫폼 **'코르도바 준비'** 명령을 실행 하면 config.xml에서 자동으로 복원 됩니다.

버전/폴더/git_url을 지정 하지 않고 플랫폼을 추가 하면 설치를 버전 config.xml에서 수행 **경우 발견**.

예:

가정 config.xml 파일에 다음 항목이 포함 되어 있습니다.

    <?xml version='1.0' encoding='utf-8'?>
        ...
        <engine name="android" spec="3.7.0" />
        ...
    </xml>
    

명령 **'코르도바 플랫폼 추가 안 드 로이드'** (아무 버전/폴더/git_url 지정)를 실행 하면 플랫폼 'android@3.7.0' (config.xml에서 검색)로 설치 됩니다.

* * *

## 플러그인 버전 관리

*(플러그인 명령어는 플러그인 명령의 거울)*

### 플러그인을 저장

플러그인을 저장 하려면 다음 명령을 실행:

    $ cordova plugin add <plugin[@<version>] | directory | git_url> --save
    

위의 명령을 실행 후 결과 config.xml이 같습니다.

    <?xml version='1.0' encoding='utf-8'?>
        ...
        <plugin name="cordova-plugin-console" spec="~1.0.0" />
        ...
    </xml>
    

몇 가지 예제:

  * **''코르도바 플러그인 추가 코르도바-플러그인-콘솔-저장** => 콘솔 플러그인의 고정 된 버전을 검색, 프로젝트에 추가 하 고 config.xml을 업데이트 합니다.
  * **''코르도바 플러그인 추가 cordova-plugin-console@0.2.13-저장** 검색 => [안 드 로이드 플러그인](../guide/platforms/android/plugin.html) 버전 0.2.13 고궁 박물원, 프로젝트 및 다음 업데이트 config.xml 그것를 추가합니다.
  * **''코르도바 플러그인 추가 https://github.com/apache/cordova-plugin-console.git-저장** => 지정 된 콘솔 플러그인 git 저장소를 복제, 콘솔 플러그인 프로젝트에 추가 다음 config.xml을 업데이트 하 고 지정된 된 git url 그것의 버전을 가리킵니다.
  * 검색 => **''코르도바 플러그인 추가 c: / 경로/로/콘솔/플러그인-저장** 지정된 된 디렉터리에서 콘솔 플러그인 프로젝트, 다음 업데이트 config.xml 및 디렉터리를 추가 합니다.

### 기존 프로젝트에 플러그인을 저장 하는 질량

'-저장 ' 위에서 설명한 플래그는 플러그인 추가 하는 동안 그것을 사용 해야 하는 경우에 유용. 기존 프로젝트를 있고 저장 하려는 경우 모든 현재 프로젝트에 플러그인을 추가, 사용할 수 있습니다.

    $ cordova plugin save
    

### 업데이트/제거 플러그인

그것은 또한 명령 '코르도바 플러그인 업데이트'과 'cordova 플러그인 제거' 동안 config.xml에서 업데이트/삭제 수 있습니다:

    $ cordova plugin update <plugin[@<version>] | directory | git_url> --save
    $ cordova plugin remove <plugin> --save
    

몇 가지 예제:

  * 고정 된 버전, 업데이트 config.xml 항목을 콘솔 플러그인을 업데이 트 뿐만 아니라 => **'코르도바 플러그인 업데이트 코르도바-플러그인-콘솔-저장**
  * [안 드 로이드 플러그인](../guide/platforms/android/plugin.html) 버전 업데이트 하 3.8.0, 업데이트 config.xml 항목 이외에 => **'코르도바 플러그인 업데이트 cordova-plugin-console@0.2.13-저장**
  * 폴더, 업데이트 config.xml 항목에에서 버전 콘솔 플러그인을 업데이 트 뿐만 아니라 => **'코르도바 플러그인 업데이트 /path/to/console/plugin-저장**
  * => **'코르도바 플러그인 저장 코르도바-플러그인-콘솔-제거'** 를 프로젝트에서 콘솔 플러그인을 제거 하 고 config.xml에서 항목을 삭제 합니다.

### 플러그인을 복원

플러그인 **'코르도바 준비'** 명령을 실행 하면 config.xml에서 자동으로 복원 됩니다.

설치할 버전 config.xml에서 가져온 것 입니다/폴더/git_url 버전을 지정 하지 않고 플러그인을 추가 하면 **경우 발견**.

예:

가정 config.xml 파일에 다음 항목이 포함 되어 있습니다.

    <?xml version='1.0' encoding='utf-8'?>
        ...
        <plugin name="cordova-plugin-console" spec="0.2.11" />
        ...
    </ xml>
    

명령 **'코르도바 플러그인 추가 코르도바-플러그인-콘솔'** (아무 버전/폴더/git_url 지정)를 실행 하면 플러그인 'cordova-plugin-console@0.2.11' (config.xml에서 검색)로 설치 됩니다.