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

# 구성 참조

플랫폼-불가 지론 구성 파일 응용 프로그램의 행동의 여러 측면을 제어할 수 있습니다 `config.xml` , W3C의 [웹 응용 프로그램 패키지 (위젯)][1] 사양을 기반으로 하는 형식이 있습니다.

 [1]: http://www.w3.org/TR/widgets/

코르 도우 바 CLI (명령줄 인터페이스에 설명)를 사용 하 여 만든 프로젝트에 대 한이 파일은 최상위 수준에서 찾을 수 있습니다 `www` 디렉터리. 내에서 다양 한 하위 디렉터리에이 파일의 버전을 재생성 프로젝트를 빌드하는 CLI를 사용 하 여 `platforms` . -CLI가 아닌 프로젝트에 대 한 각 플랫폼 전용 파일 소스 역할을 합니다.

위치 동안에 `config.xml` 파일 플랫폼에 따라 변경 될 수 있습니다, 그것의 내용이 일반적으로 하지 않습니다. 일부 플랫폼 관련 기능 또한 동일한 구성 파일에 지정 됩니다. 자세한 내용은 다음과 같습니다.

*   iOS 구성
*   안 드 로이드 구성
*   블랙베리 구성

## config.xml 요소

[아파치 코르 도우 바][2] 프로젝트는 무 겁 게 구동 및 웹 지역 사회에 의해 채택 된 표준 웹 영감 및 웹 기반 추상화를 통해 추상 멀리 네이티브 플랫폼 구체적인 노력 합니다. 제발 [config.xml 사양][1]에 익숙해 몇 분이 걸릴, 응용 프로그램 메타 데이터 아파치 코르도바 프로젝트의 종류를 이해 하는 것 추상화에 대 한 간단한 엔트리 포인트를 제공 하 것을 목표로.

 [2]: http://cordova.io

예를 들어:

        <widget>
            <preference name="MySetting" value="true" />
            <feature name="MyPlugin" value="MyPluginClass" />
            <access origin="*" />
            <content src="index.html" />
        </widget>
    

아파치 코르도바에서 지원 되는 주요 플랫폼에서 지원 되는 요소 목록에 따라.

### `<feature>`

이러한 요소는 응용 프로그램에 액세스할 네이티브 Api를 매핑합니다. 런타임에 아파치 코르도바 프레임 워크 지도 `<feature>` 요소 코르도바 응용 프로그램 장치 전형적인 웹-기반 응용 프로그램에 사용할 수 없는 Api에 액세스할 수 있도록 하는 네이티브 코드를.

### `<access>`

이러한 요소는 당신의 whitelist 작동 하는 방식을 정의 합니다. 자세한 내용은 도메인 화이트 리스트 가이드를 참조 하십시오.

### `<content>`

이 요소는 프로젝트의 표준 웹 자산 루트 디렉터리를 기준으로 응용 프로그램의 시작 페이지를 정의합니다. 이 요소는 선택 사항, 기본값은`index.html`.