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

title: Windows Phone 8 업그레이드
---

# Windows Phone 8 업그레이드

이 가이드에는 코르도바의 이전 버전에서 업그레이드 하려면 Windows Phone 8 프로젝트를 수정 하는 방법을 보여 줍니다. 이러한 지침 중 일부 명령줄 도구 앞의 오래 된 세트를 사용 하 여 만든 프로젝트에 적용 된 `cordova` CLI 유틸리티. 내용은 참조 하십시오 [명령줄 인터페이스](../../cli/index.html) CLI의 버전을 업데이트 하는 방법. 다음 섹션에서는 비 CLI와 CLI 프로젝트에서 업그레이드 하는 방법을 보여 줍니다.

## 4.0.0를 프로젝트 업그레이드 3.6.0

-CLI가 아닌 프로젝트에 대 한 실행.

        bin/update path/to/project
    

CLI 프로젝트:

1.  업데이트는 `cordova` CLI 버전. 명령줄 인터페이스를 참조 하십시오.

2.  실행 `cordova platform update wp8` 기존 프로젝트에서.

## 3.2.0 3.1.0에서 업그레이드

코르 도우 바 CLI로 만든 프로젝트의 경우:

1.  업데이트는 `cordova` CLI 버전. 명령줄 인터페이스를 참조 하십시오.

2.  실행`cordova platform update wp8`

아니라 코르도바 CLI 사용 하 여 만든 프로젝트에 대 한 실행.

        bin\update < project_path >
    

## 3.1.0 3.0.0에서 업그레이드

코르 도우 바 CLI로 만든 프로젝트의 경우:

1.  업데이트는 `cordova` CLI 버전. 명령줄 인터페이스를 참조 하십시오.

2.  실행`cordova platform update wp8`

아니라 코르도바 CLI 사용 하 여 만든 프로젝트에 대 한 실행.

        bin\update <project_path>
    

## 2.9.0에서 CLI (3.0.0) 업그레이드

1.  명령줄 인터페이스에 설명 된 대로 코르도바 CLI를 사용 하 여 새로운 아파치 코르도바 3.0.0 프로젝트를 만듭니다.

2.  예를 들어 당신의 플랫폼 코르도바 프로젝트에 추가:`cordova
platform add wp8`.

3.  프로젝트의 내용을 복사 `www` 디렉토리에 `www` 에서 방금 만든 코르 도우 바 프로젝트의 루트 디렉토리.

4.  복사 또는 모든 기본 자산 (`SplashScreen` `ApplicationIcon`, 등), 원래 프로젝트에서 덮어쓸 `.csproj` 파일에 새로운 파일을 추가 하려면 확인. Windows 전화 `platforms\wp8` 디렉토리 안에 프로젝트 빌드.

5.  코르 도우 바 CLI 도구를 사용 하 여 필요한 어떤 플러그인을 설치 하려면. 참고 CLI를 처리 하는 모든 핵심 Api 플러그인으로 추가 될 필요가 있습니다. 만 3.0.0 플러그인 CLI와 호환 됩니다.

6.  빌드 및 테스트 합니다.

## 3.0.0 (비 CLI) 2.x에서 업그레이드

Visual Studio의 솔루션 탐색기 창에서:

1.  만들기 새로운 아파치 코르도바 WP8 3.0.0 프로젝트.

2.  내용을 복사 하는 `www` 디렉토리를 새로운 프로젝트 대 프로젝트에 이러한 항목을 추가 해야 하 고.

3.  복사 하 고 모든 시작 화면 또는 아이콘 이미지를 덮어씁니다.

4.  어떤 플러그인 `plugins` 디렉토리에서 새 프로젝트에 복사 하 고 그들은 또한 대 프로젝트에 추가 되도록.

5.  빌드 및 테스트 합니다.

**참고**: 모든 핵심 Api 버전 3.0, 코르도바에서 제거 되 고 플러그인으로 따로 설치 해야 합니다. 다시 비 CLI 워크플로에서 이러한 기능을 사용 하도록 설정 하는 방법에 자세한 내용은 플러그인 관리를 사용 하 여 Plugman를 참조 하십시오.