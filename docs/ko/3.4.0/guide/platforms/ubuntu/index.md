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

# 우분투 플랫폼 가이드

## 초기 릴리스

코르 도우 바에서 우분투 플랫폼 지원의 초기 릴리스 오신 것을 환영 합니다. 이 릴리스와 함께, 초점은 우분투 시스템에서 개발 하 고 코르 도우 바 웹 프로젝트 개발 워크플로 사용 하 여. 우분투 플랫폼 프로젝트, 표준 코르도바 플러그인을 추가 하 고, 물론, 빌드하고 실행 우분투 플랫폼을 위한 애플 리 케이 션을 추가 포함 됩니다.

### 우분투 SDK

우분투 QtCreator 개발 환경을 설치 수 있습니다. 자세한 내용은 [developer.ubuntu.com][1] 를 참조 하십시오. (QtCreator SDK 필요가 없습니다 우분투 플랫폼을 지 원하는 앱을 추가 코르도바.)

 [1]: http://developer.ubuntu.com

### 우분투 런타임 플랫폼

우분투의 데스크탑 환경 (노트북, Pc와 같은)에 대 한 잘 알려져 있습니다. 우분투 터치 휴대폰 및 정제에 우분투 운영 체제를 확장합니다. 우분투 런타임 플랫폼에는 다양 한 CPU 아키텍처 (x86, armhf, 등.). 애플 리 케이 션 및 플러그인 코드는 적절 하 게 컴파일해야 합니다. 이 광범위 한 영역에 대 한 지원을 우분투에서 급속 하 게 진화 하.

### 최신 정보

코르 도우 바 애플 리 케이 션 지원 우분투 런타임 플랫폼에 대 한 최신 정보에 대 한 [wiki.ubuntu.com/Cordova][2] 를 참조 하십시오..

 [2]: http://wiki.ubuntu.com/Cordova

## 개발 플랫폼 요구 사항

이 초기 릴리스 개발 플랫폼은 우분투 데스크톱 이어야 합니다. 우분투 13.10 (코드명 '건 방진') 또는 나중에 지원 기능의 전체 집합을 즐길 하는 데 필요한.

코르 도우 바 (npm)를 사용 하 여 비 우분투 시스템에 설치할 수는 있지만이 이번에 우분투 데비안 패키지 통해 제공 되는 중요 한 기능.

## 코르 도우 바 설치

우분투 시스템 우분투 코르도바 [개인 패키지 보관 함][3] 에 추가:

 [3]: https://launchpad.net/~cordova-ubuntu/+archive/ppa

    $ sudo add-apt-repository ppa:cordova-ubuntu/ppa
    $ sudo apt-get update
    

코르 도우 바 cli 패키지 (및 해당 종속성) 설치:

    $ sudo apt-get install cordova-cli
    

## 프로젝트 워크플로우

### 프로젝트 만들기

    $ cordova create project1 REVERSEDNSNAME.project1 project1
    

### 프로젝트 디렉토리로 이동

    $ cd project1
    

### 우분투 플랫폼 추가

    $ cordova platform add ubuntu
    

### 우분투에 대 한 빌드

    $ cordova build ubuntu
    

### 응용 프로그램 실행

    $ cordova run ubuntu
    

### 배터리 상태 플러그인 추가

    $ cordova plugin add org.apache.cordova.battery-status