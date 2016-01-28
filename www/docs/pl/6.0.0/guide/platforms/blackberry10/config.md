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

title: Konfiguracja blackBerry 10
---

# Konfiguracja blackBerry 10

`config.xml`Plik steruje aplikacji podstawowe ustawienia, które mają zastosowanie w każdej aplikacji i wystąpienie CordovaWebView. Buduje to sekcja szczegóły preferencje, które stosuje się tylko do BlackBerry 10. Zobacz [plik config.xml][1] informacji na temat opcji konfiguracji globalnej.

 [1]: config_ref_index.md.html#The%20config.xml%20File

*   `ChildBrowser`( `disable` lub `enable` ): wyłącza dziecko okna przeglądarki. Domyślnie aplikacje uruchomić okno drugorzędnej przeglądarce aby wyświetlić zasoby dostępne za pośrednictwem `window.open()` lub określając `_blank` docelowej kotwicy. Określ `disable` Aby zastąpić to domyślne zachowanie.
    
        <preference name="ChildBrowser" value="disable"/>
        

*   `PopupBlocker`( `enable` lub `disable` ): umożliwia lud zablokowany, co uniemożliwia wzywa do `window.open()` . Domyślnie wyskakujące okienka wyświetlane w oknie przeglądarki dziecko. Ustawienie preferencji `enable` zapobiega wyświetlaniu w ogóle.
    
        <preference name="PopupBlocker" value="enable"/>
        

*   `WebSecurity`( `disable` lub `enable` ): zestaw `disable` zastąpić ustawienia zabezpieczeń sieci web, umożliwiając dostęp do zdalnej zawartości z nieznanych źródeł. To ustawienie jest przeznaczony jako udogodnienie rozwoju tylko, tak go usunąć przed pakowania aplikacji do dystrybucji. Wydany aplikacji, wszystkie identyfikatory URI powinny być znane i białej liście przy użyciu `<access>` element, opisane w podręczniku białej listy domen.
    
        <preference name="WebSecurity" value="disable"/>