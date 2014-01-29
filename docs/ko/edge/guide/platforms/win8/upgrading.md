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

# 윈도우 8을 업그레이드

이 가이드에는 코르도바의 이전 버전에서 업그레이드 하려면 Windows 8 프로젝트를 수정 하는 방법을 보여 줍니다. 이러한 명령의 대부분 명령줄 도구 앞의 오래 된 세트를 사용 하 여 만든 프로젝트에 적용 된 `cordova` CLI 유틸리티. Cli 버전을 업데이트 하는 방법 정보에 대 한 명령줄 인터페이스를 참조.

## 3.2.0 3.1.0에서 업그레이드

코르 도우 바 CLI로 만든 프로젝트의 경우:

1.  업데이트는 `cordova` CLI 버전. 명령줄 인터페이스를 참조 하십시오.

2.  실행`cordova platform update windows8`.

아니라 코르도바 CLI 사용 하 여 만든 프로젝트에 대 한 실행.

        bin\update <project_path>
    

## 3.1.0에 (게) 업그레이드

윈도우 8에 대 한 코르도바 CLI 지원 코르도바 3.1.0에에서 도입 되었다. 업그레이 드 하려면, 프로젝트 및 모든 필요한 자산 이동 새로운 코르도바 CLI를 만드는 것이 좋습니다.

## 2.9.0 2.8.0에서 업그레이드

다음 명령은 할 수에서 Visual Studio 내에서 확실 하 게 어떤 프로젝트 참조 업데이트/삭제 됩니다.

1.  제거 `cordova-2.8.0.js` 프로젝트의 `www` 디렉터리.

2.  추가 `cordova.js` 파일 소스에서 프로젝트의 `www` 디렉터리. (Note 파일 더 이상 파일 이름에 버전 번호를 포함 합니다.)

3.  빌드 및 테스트!

## 2.7.0에서 2.8.0로 업그레이드

다음 명령은 할 수에서 Visual Studio 내에서 확실 하 게 어떤 프로젝트 참조 업데이트/삭제 됩니다.

1.  제거 `cordova-2.7.0.js` 프로젝트의 `www` 디렉터리.

2.  추가 `cordova.js` 파일 소스에서 프로젝트의 `www` 디렉터리. (Note 파일 더 이상 파일 이름에 버전 번호를 포함 합니다.)

3.  빌드 및 테스트!