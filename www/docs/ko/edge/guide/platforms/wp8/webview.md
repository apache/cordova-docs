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

title: Windows Phone 8.0 WebViews
---

# Windows Phone 8.0 WebViews

이 가이드에서는 더 큰 Windows Phone 8.0 응용 프로그램 내에서 WebView 코르도바 활성화 구성 요소를 포함 하는 방법을 보여 줍니다.

이러한 지침에 따라, 최신 코르도바 분포를가지고 있는지 확인 합니다. [Cordova.apache.org](http://cordova.apache.org) 에서 다운로드 하 고 Windows Phone 8.0 패키지 (코르도바-wp8-*.zip)의 압축을 풉니다.

  1. 패키지의 이동 `wp8/framework` 디렉토리 및 빌드 `WPCordovaClassLib.sln` . 그것은 생성에`Bin\Debug[Release]\WPCordovaClassLib.dll`.

  2. 복사는 `WPCordovaClassLib.dll` Windows Phone 8 프로젝트에 파일 `/libs` 디렉터리를 포함 하 고 `WPCordovaClassLib.dll` 을 통해 프로젝트 `Project->References->Add Reference` . 양자 택일로, 직접 참조할 수는 `wp8/framework/WPCordovaClassLib.csproj` 파일.

  3. 추가 `CordovaView` (예를 들어, 페이지 구성 요소`MainPage.xaml`).
    
        xmlns:my="clr-namespace:WPCordovaClassLib;assembly=WPCordovaClassLib">
        ...
        <my:CordovaView HorizontalAlignment="Stretch" Margin="0,0,0,0" 
        StartPageUri="html/index.html" x:Name="CordovaView" VerticalAlignment="Stretch" />
        

  4. 복사 `common/www/cordova.js` Windows Phone 8 프로젝트에 응용 프로그램의 HTML과 자바 스크립트 파일과 함께 `html` 디렉터리 프로젝트에 새 파일을 포함 합니다.

  5. 복사는 `wp8/template/config.xml` 프로젝트의 루트 디렉터리에 및

위의 지침 코어 코르 도우 바 구성 요소만을 링크, 코르도바 플러그인 연결 관리 플러그인을 사용 하 여 Plugman를 참조 하십시오.