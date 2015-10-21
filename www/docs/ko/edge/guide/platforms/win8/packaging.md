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

title: 윈도우 포장
---

# 윈도우 포장

서명 및 [msdn](https://msdn.microsoft.com/en-us/library/hh446593(v=vs.85).aspx) Windows 스토어 애플 리 케이 션의 포장에 대 한 자세한 배울 수 있습니다..

올바르게 패키지 및 Windows 로그인 수 애플 리 케이 션 몇 가지 필요한:

  * 서명 인증서
  * 일치 하는 제공 된 서명 인증서 신원 정보

Windows 프로젝트에서 신원 정보는 package.appxmanifest 라는 파일에 보관 됩니다. 이 파일은 자동으로 코르도바 애플 리 케이 션 빌드될 때마다 채워집니다. 신원 3 중요 한 필드를 보유합니다.

  * Name
  * Publisher
  * Version

*Name* 및 *Version* **config.xml**에서 설정할 수 있습니다. *Publisher* 빌드 매개 변수로 제공 될 수 있다 또는 **build.json** 파일에 설정할 수 있습니다.

![]({{ site.baseurl }}/static/img/guide/platforms/win8/packaging.png)

서명 인증서 중 CLI에서 또는 build.json 파일을 통해 제공할 수 있습니다. 인증서 관련 CLI 플래그:

  * `--packageCertificateKeyFile` : 패키지 서명 인증서 생성 되 면이 매개 변수 인증서 응용 프로그램에 연결 하 사용할 수 있습니다. 이 플래그는 인수로 파일 경로 사용합니다. 예를 들어. `> cordova build -- --packageCertificateKeyFile="platforms\windows\CordovaApp_TemporaryKey.pfx"`
  * `--packageThumbprint` : 패키지 지문 패키지 인증서 키 파일의 진위를 확인 하기 위해 사용 됩니다. 인증서 키 파일을 만들 때이 값을 최종 사용자에 게 제공 됩니다. 예를 들어. `> cordova build -- --packageCertificateKeyFile="platforms\windows\CordovaApp_TemporaryKey.pfx" --packageThumbprint="ABCABCABCABC123123123123"`

또는, 이러한 값을 CLI를 사용 하 여 빌드 구성 파일 (build.json)를 사용 하 여 지정할 수 수 (-buildConfig). 샘플 빌드 구성 파일:

    {
        "windows": {
            "debug": {
                "packageCertificateKeyFile": "platforms\\windows\\CordovaApp_TemporaryKey.pfx"
            },
            "release": {
                "packageCertificateKeyFile": "c:\\path-to-key\\keycert.pfx",
                "packageThumbprint": "ABCABCABCABC123123123123",
                "publisherId": "CN=FakeCorp.com, L=Redmond, S=Washington, C=US"
            }
        }
    }
    

또한 혼합 하 고 일치 명령줄 인수 및 매개 변수 build.json 파일에서 지원이 됩니다. 명령줄 인수에서 값 우선 순위를 얻을 것 이다.

# 인증서 키와 서명 코르도바 윈도우 애플 리 케이 션을 만드는 방법

서명 하는 것이 Windows 스토어 애플 리 케이 션을 설치 및 배포에 대 한 필요 합니다. 이 과정은 일반적으로 릴리스 패키지를 배포할 때 Visual Studio에 의해 처리 됩니다. Tmhis Visual Studio 없이 할 우리는 우리 자신의 인증서를 만들기 위해 필요 합니다.

인증서를 만들기 위한 [makecert.exe](https://msdn.microsoft.com/en-us/library/ff548309(v=vs.85).aspx) 유틸리티를 사용 하 여 필요가 우리 이 도구는 Windows SDK와 함께 제공 하 고 `%ProgramFiles(x86) %\Windows Kits\8.1\bin\x64` 또는 `%ProgramFiles(x86) %\Windows Kits\8.1\bin\x86에서` 찾을 수 있습니다..

우리가 해야 할 첫 번째 일 우리의 애플 리 케이 션 서명 루트 키를 만드는 것입니다.

`makecert.exe -n "CN=FakeCorp.com" -r -eku "1.3.6.1.5.5.7.3.3,1.3.6.1.4.1.311.10.3.13" -e "01/01/2020" –h 0 -sv FakeCorp.com.pvk FakeCorp.com.cer`

이해 하려면 어떤 makecert 않습니다, 여기에 매개 할의 간략 한 설명이입니다.

  * -n "CN=FakeCorp.com": 주제 [X.509](http://en.wikipedia.org/wiki/X.509) 인증서 이름입니다. 이 예제에서는 **C**ommon**N**ame=FakeCorp.com입니다.
  * -r: [자체 서명 인증서](http://en.wikipedia.org/wiki/Self-signed_certificate) 생성.
  * -eku #EKU_VAL #: 쉼표로 구분 된 향상 된 키 용도 Oid. 
      * 1.3.6.1.5.5.7.3.3 인증서는 코드 서명에 유효한 나타냅니다. 항상 인증서 용도 제한 하려면이 값을 지정 합니다.
      * 1.3.6.1.4.1.311.10.3.13은 인증서 수명 서명 존중을 나타냅니다. 일반적으로, 이면 서명이 시간 스탬프, 스탬프 시간 때 인증서가 유효한 시점으로 서명이 남아 있다 유효한 인증서가 만료 하는 경우에. 이 EKU 서명에 타임 스탬프가 기록 여부에 관계 없이 만료 서명을 하면 됩니다.
  * -e "01/01/2020": 인증서의 만료 날짜를 설정 합니다. 
  * -h 0: 0 사용으로 인증 기관 (CA) 다른 인증서를 발급할 수 있는 인증서를 방지 하기 위해이 인증서 아래 트리의 최대 높이 설정 합니다.
  * -sv FakeCorp.com.pvk: 출력 PVK 파일. Windows 코드 서명 개인 키 저장 하 PVK 파일을 사용 합니다.
  * FakeCorp.com.cer: 출력 인증서 파일입니다. CER 파일은 X.509 인증서를 저장 하는 데 사용 됩니다.

처음으로 makecert를 실행 후 팝업 화면에 개인 암호 입력:

![]({{ site.baseurl }}/static/img/guide/platforms/win8/createprivatekeywindow.png)

Pvk 파일과 cer 파일 생성 되 면, 우리가 이러한 인증서에서 pfx 파일을 만들 필요가. Pfx (개인 교환 형식) 파일에는 인증서, 루트 인증 기관 인증서, 인증서 체인 및 개인 키 암호화 정보를 다양 한을 포함 되어 있습니다. 패키지는 인증서, 사용 합니다는 도구 라는 [pvk2pfx](https://msdn.microsoft.com/en-us/library/ff550672(v=vs.85).aspx). 이 도구는 Windows SDK와 함께 제공 하 고에서 찾을 수 있습니다 `%ProgramFiles(x86)%\Windows Kits\8.1\bin\x64` 또는`%ProgramFiles(x86)%\Windows Kits\8.1\bin\x86`.

`pvk2pfx -pvk FakeCorp.com.pvk -pi pvkPassword -spc FakeCorp.com.cer -pfx FakeCorp.com.pfx -po pfxPassword`

장소:

  * pvk: 입력 pvk 파일 이름
  * pi: pvk 암호
  * spc: 입력 인증서 파일 이름
  * pfx: 출력 pfx 파일 이름
  * 포: pfx 암호; pvk 암호 제공 하지 않는 경우와 동일

만약 우리가이 pfx 파일 build.json 파일을 제공, 우리는 다음과 같은 오류 해야한다: "키 파일이 암호로 보호 되어 있을 수 있습니다. 이 문제를 해결 하려면 현재 사용자의 개인 인증서 저장소에 인증서를 수동으로 가져옵니다 하려고. ". 그것을 가져오기 위하여 우리 관리자 프롬프트에서 [certutil](https://technet.microsoft.com/en-us/library/ee624045(v=ws.10).aspx) 을 사용 해야 합니다.

`certutil -user -p PASSWORD -importPFX FakeCorp.com.pfx`

장소:

  * user: "현재 사용자"를 지정 합니다 개인 저장소
  * p: pfx 파일 암호
  * importPfx: pfx 파일의 이름

일단 설치 해, 다음 단계는 packageThumbprint 및 packageCertificateKeyFile build.json를 추가 하는. packageThumbprint을 찾기 위해 우리는 인증서와 연결 된 했습니다 CommonName 검색:

`powershell -Command " & {dir -path cert:\LocalMachine\My | where { $_.Subject -like \"*FakeCorp.com*\" }}"`

일단 마지막 값이 제공 됩니다. 코르도바는 성공적으로 패키지 하 고 응용 프로그램을 서명 해야 합니다.
