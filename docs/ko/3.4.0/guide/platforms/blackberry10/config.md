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

`config.xml`파일을 각 응용 프로그램 및 CordovaWebView 인스턴스에 적용 되는 응용 프로그램의 기본 설정 제어. 블랙베리 10에만 적용이 섹션 세부 환경 설정을 작성 합니다. 글로벌 구성 옵션에 config.xml 파일 정보를 참조 하십시오.

*   `ChildBrowser`( `disable` 기본 `enable` ): 아이 브라우저 창을 사용 하지 않도록 설정 합니다. 기본적으로 애플 리 케이 션을 통해 액세스 하는 리소스를 표시 하려면 보조 브라우저 창을 시작 `window.open()` 또는 지정 하는 `_blank` 앵커 대상. 지정 `disable` 이 기본 동작을 재정의 합니다.
    
        <preference name="ChildBrowser" value="disable"/>
        

*   `PopupBlocker`( `enable` 기본 `disable` ): 팝업 차단기에 대 한 호출을 방지 수 있습니다 `window.open()` . 기본적으로 팝업 하위 브라우저 창에 표시 됩니다. 기본 설정 `enable` 전혀 표시 되지 않도록 방지 합니다.
    
        <preference name="PopupBlocker" value="enable"/>
        

*   `WebSecurity`( `disable` 기본 `enable` ): 설정 `disable` 알 수 없는 소스에서 원격 콘텐츠에 액세스할 수 있도록 웹 보안 설정을 무시 합니다. 이 기본 설정은 개발 편의, 그래서 제거 배포에 대 한 귀하의 응용 프로그램을 포장 하기 전에 것입니다. 출시 애플 리 케이 션에 대 한 모든 Uri 해야 알려진 허용을 사용 하는 `<access>` 도메인 화이트 리스트 가이드에 설명 된 요소.
    
        <preference name="WebSecurity" value="disable"/>