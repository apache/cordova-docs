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

title: 윈도우 10 코르도바
---

# 윈도우 10 코르도바

어쩌면 당신은 수 대신 전화 "Cordova에 대 한 창 10." 윈도우 10의 HTML과 자바 스크립트 애플 리 케이 션 플랫폼을 코르도바 지원 웹 하 고 플랫폼 보안 제한을 제거 하는 방법을 다시 설계 했다.

## 윈도우 10 시작 하기

추가 윈도우 10 응용 프로그램을 지원 만큼 쉽습니다 Windows 대상 플랫폼 버전 10.0으로 설정:

    <preference name="windows-target-version" value="10.0" />
    <preference name="windows-phone-target-version" value="10.0" />


이러한 환경 설정을 모두 설정으로 빌드할 때만 한 단일.appx (및.appxupload)를 건설 된다. 그들은 최소한 윈도우 10 필요 합니다.

### 로컬 대 원격 모드 모드 이해

원격 모드 Windows 10에서 HTML 응용 프로그램에 대 한 윈도 즈 플랫폼의 새로운 기능입니다. 윈도우 8과 8.1에서 HTML 응용 프로그램은 Windows 10에서 "로컬 모드" 라고에서 일했다. 로컬 모드에서 HTML 응용 프로그램 전체에 접근이 네이티브 Windows API 표면 및 기능. 악성 코드 때문에 개인 식별 정보를 유출 될 수 있는 스크립트 주입 공격을 방지, 로컬 모드 인라인 스크립트를 허용 하지 않습니다 고 명시적 컨텍스트 (`MSApp.execUnsafeLocalFunction` 내에서 그렇게 DOM 조작을 수행 하는 개발자가 필요 하다).

원격 모드를 직접 변경 하지 않고 코드에서에서 jQuery 또는 AngularJS 같은 수정 되지 않은 라이브러리를 사용 하 여 가능 하 게 그 요구 사항을 제거 합니다. 이렇게 하려면, 그것은 Windows 스토어에서 앱을 인증 하는 경우 특정 기능을 선언 하는 능력을 제거 합니다. 일반적으로 이러한 기능의 제거 특정 기능을 방지 하지 않습니다 하지만 그것은 Api 또는 전술의 다른 조합을 사용 해야 할 수도 있습니다.

### 기능에 원격 모드의 효과

다음과 같은 기능을 Windows 스토어 원격 모드 응용 프로그램을 배포할 때 사용할 수 없습니다.

  * 기업 인증 (`enterpriseAuthentication`)
  * 공유 사용자 인증서 (`sharedUserCertificates`)
  * 문서 라이브러리 (`documentsLibrary`)
  * 음악 라이브러리 (`musicLibrary`)
  * 사진 라이브러리 (`picturesLibrary`)
  * 비디오 라이브러리 (`videosLibrary`)
  * 이동식 저장소 (`removableStorage`)
  * 인터넷 클라이언트/서버 (`internetClientServer`)-참고는 `internetClient` 은 여전히 허용
  * 개인 네트워크 클라이언트/서버 (`privateNetworkClientServer`)

라이브러리 제한의 각 사용자는 [파일 선택기](https://msdn.microsoft.com/en-us/library/windows/apps/windows.storage.pickers.fileopenpicker.aspx)를 통해 파일 시스템 상호 작용 요청 하 여 주위 일 수 있습니다. 이 임의로 액세스 하는 파일 시스템에서 악성 코드를 주입된을 방지할 수 있습니다.

네트워크 관련 제한 기능 검사를 사용 하지 않는 API를 사용 하 여 또는 `XMLHttpRequest` 또는 웹 소켓 같은 표준 인터넷 통신 채널을 통해 통신을 중개 하 여 주위 근무 해야 합니다.

기업 인증 및 사용자 인증서 공유 기능 엔터프라이즈 시나리오에서 구체적으로 타겟팅 됩니다. 이러한 기능은 개인/엔터프라이즈 기반 응용 프로그램 저장소, 지원 되는 내부 배포 메커니즘을 배포 하는 애플 리 케이 션을 작성 하는 경우 지원할 수 있습니다 여전히 이러한. 그러나, 그들은 공개 Windows 스토어에서 원격 모드 애플 리 케이 션에 대 한 지원 되지 않습니다. 이러한 기능 중 하나는 응용 프로그램 매니페스트에 감지 되 면 Windows 10를 대상으로 작성 하는 경우 경고가 표시 됩니다.

## 참조

### config.xml 환경 설정

#### windows-target-version, windows-phone-target-version

    <preference name="windows-target-version" value="10.0" />
    <preference name="windows-phone-target-version" value="10.0" />


*적어도 하나는 필요 합니다.*

이러한 기본 설정이 Windows 또는 Windows Phone 해제할 대상 응용 프로그램 패키지의 버전을 식별 합니다.

**유효한 값**

  * `10.0`, `UAP`: 윈도우 10 범용 응용 프로그램 플랫폼에 대 한 빌드
  * `8.1`: 8.1 Windows 또는 Windows Phone에 대 한 빌드 8.1
  * `8.0`: 8.0 윈도우용 구축. Windows Phone 대 한 유효 하지 않습니다 (대신 **wp8** 코르도바 플랫폼 사용)

**시나리오**

윈도우 10를만 타겟팅 하는 경우 config.xml 파일에 있는 단일 `windows 대상 버전` 설정 하기만 하면 됩니다.

#### WindowsDefaultUriPrefix

    <preference name="WindowsDefaultUriPrefix" value="ms-appx://|ms-appx-web://" />


이 기본 설정은 귀하의 응용 프로그램으로 시작 URI는 **로컬 컨텍스트** 또는 **원격** 대상 여부를 식별 합니다. 윈도우 10을 만들 때 기본값은 원격 컨텍스트 (`ms-appx-web:/ /`).

하기 위해서는 원격 모드 기능 제한에 의해 영향을 받지 않습니다 로컬 모드 응용 프로그램, 설정 해야 합니다이 기본 설정은 `ms-appx:/ /` 하지 원격 Uri 어떤 `< access >` 요소를 선언 하 고.

**유효한 값**

  * `ms-appx://` (기본값 Windows 8.0, 8.1): 로컬 컨텍스트에서 실행 되는 시작 페이지
  * `ms-appx-web://` (창 10에 대 한 기본): 원격 컨텍스트에서 실행 되는 시작 페이지

#### {SDK}-MinVersion, {SDK}-MaxVersionTested

*(선택 사항)*

    <preference name="Windows.Universal-MinVersion" value="10.0.0.0" />
    <preference name="Windows.Mobile-MinVersion" value="10.0.9927.0" />
    <preference name="Windows.Mobile-MaxVersionTested" value="10.0.10031.0" />
    <preference name="Microsoft.Band-MinVersion" value="10.0.11.0" />


이러한 기본 설정을 식별 (를 포함 하 여 Windows 범용, 윈도우 모바일, 또는 Xbox에 국한 되지 않음) 어떤 생태계 그리고 그들의 최소/최대 버전은 호환. 그들은 여전히 있어야 그 플랫폼 범용 응용 프로그램 플랫폼 (기본 OS로 서 너무 창 10)에 대 한 지원 합니다. 그러나, 이러한 응용 프로그램은 인식만 (게임 x 박스에 스트리밍) 같은 특정 장치에 사용할 수 있는 특정 기능을 나타낼 수 있습니다.

**유효한 값**

각 값에 3 개 부품이 있다: **SDK**, **버전 제한**및 **버전 값**. 이러한 기본 설정이 `Windows` 또는 `Microsoft` 시작 하 고 끝나는 `MinVersion-` 또는 `-MaxVersionTested`에 의해 검색:

  * **SDK** 는 타겟팅 하려는 전문된 플랫폼을 정의 합니다. 기본값은 `Windows.Universal`. 이 대 한 유효한 값은 AppxManifest 스키마 `패키지/Depednencies/TargetPlatform` 요소에 정의 됩니다.
  * 는 **버전 제한** 응용 프로그램 호환성 규칙을 정의합니다. 예를 들어 경우는 `-MinVersion` 다음 해당 SDK의 적어도 10.1.0.0을 지원 하지 않는 운영 체제 버전 그것을 로드할 수 없습니다 10.1.0.0로 설정 됩니다.
      * `-MinVersion` 필요한 SDK의 최소 버전을 지정 합니다.
      * `-MaxVersionTested` 는 SDK의 높은 테스트 버전을 지정합니다. 해당 SDK의 새로운 버전을 출시 하는 경우 지정된 된 버전에 대 한 호환성 모드에서 실행 됩니다.
  * **버전 값** 은 *major.minor.build.qfe* 의 형태로 4 정수 튜플.

이러한 종류의 아무 기본 config.xml 파일에 지정 된 Windows.Universal 버전 10.0.0.0 기본적으로 선택 됩니다.
