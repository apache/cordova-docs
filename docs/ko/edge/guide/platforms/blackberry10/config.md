---

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied. See the License for the
         specific language governing permissions and limitations
    

   under the License.
---

# 블랙베리 10 구성

`config.xml`파일을 다양 한 코르도바 설정을 제어 합니다. 이러한 응용 프로그램에서 적용 됩니다. `config.xml`파일은 위치에서 `<project folder>/<www>` 디렉터리.

## `< 기본 설정 >`

다양 한 환경 설정 (로 `<preference>` 태그) 소멸 되지 않고 기존 애플 리 케이 션에 기본. 사용할 수 특혜는:

*   `autoHideSplashScreen`: ( `true` 또는 `false` ): 설정 `false` 는 splashscreen 자바 스크립트 API를 통해 숨겨진 때 제어할 수 있습니다. 이 기본 설정은 true로 기본값입니다.

*   `backgroundColor`: 앱의 배경 색상을 지정합니다. 값은 ARGB 픽셀 형식 8 진수를 사용 하 여 색상 값을 지정 해야 합니다.

*   `childBrowser`: 아이 브라우저 창을 비활성화합니다. 기본적으로 콘텐츠 새 창 또는 탭에서 리소스를 열려고 하면 (window.open ()를 사용 하 여 또는 지정 하 여 `_blank` 앵커의 대상으로), WebWorks 응용 프로그램 리소스를 표시 하려면 보조 브라우저 창이 열립니다. 이 기능은 기본적으로 활성화 됩니다. 값을 지정 해야 합니다 `disable` 발생에서 위의 작업을 방지 하기 위해.

*   `hideKeyboardFormAccessoryBar`: ( `enable` 또는 `disable` ) HTML 폼에 키보드 모양 액세서리 막대를 사용 하지 않습니다. 키보드 모양 액세서리 바는 버튼 (이전, 다음, 및 제출) 사용자가 양식을 통해 탐색 하는 데 사용할 수 있는 행입니다. 기본적으로 WebWorks 응용 프로그램 포함 된 HTML 폼 및 `<input>` 요소 초점, WebWorks이 양식을 액세서리 막대가 표시 됩니다. 이 기능을 사용 하면 응용 프로그램으로 값을 지정 하 여 양식을 액세서리 막대를 표시 하지 않도록`enable`.

*   `orientation`: ( `auto` , `portrait` , 또는 `landscape` ) 응용 프로그램에서 화면에 대 한 영구 방향을 지정 합니다. 기본적으로 화면 방향을 지정 하지 않으면 방향이 자동으로 설정 됩니다.

*   `popupBlocker`: 팝업 차단기를 사용 하면 수 있습니다. 기본적으로 모든 팝업 하위 브라우저 창에 블랙베리 WebWorks 애플 리 케이 션에 의해 표시 됩니다. 팝업에서 팝업 차단기를 사용 하 여 사용자의 개입 없이 표시 방지할 수 있습니다. 이 값을 지정 하 여 이루어집니다.`enable`.

*   `webSecurity`: 비활성화 웹 보안. 웹 보안을 비활성화 하면 개발 하는 동안 알 수 없는 소스에서 원격 콘텐츠를 액세스할 수 있습니다. 배포에 대 한 귀하의 응용 프로그램을 포장 하기 전에 당신이이 설정을 제거 해야 합니다. 이 기능은 개발 편의 것입니다. 생산, 모든 Uri 알려져야 하 고 허용 사용 해야는 `<access>` 요소. 로 값을 지정 하지 않으려면,`disable`.