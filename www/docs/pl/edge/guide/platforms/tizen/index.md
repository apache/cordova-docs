---
license: Licensed to the Apache Software Foundation (ASF) under one
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
---

# Platforma Tizen Przewodnik

Ten poradnik opisuje jak skonfigurować SDK środowiska wdrażania Cordova aplikacje dla urządzeń z systemem operacyjnym Tizen.

## Wymagania i wsparcie

Tizen SDK wymaga 10.04/10.10/11.04/11.10 Linux Ubuntu (32-bitowa) lub Windows XP SP3/7 (32-bitowa).

Programiści powinni używać `cordova` narzędzie w połączeniu z Tizen SDK. Zobacz interfejs wiersza poleceń do informacji jak go zainstalować, dodać projektów, a następnie tworzenia i wdrażania projektu.

## Instalowanie SDK

Pobrać Tizen SDK z [tizen.org][1].

 [1]: https://developer.tizen.org/sdk

<!--

- (optional) Install Tizen Cordova template projects: copy the
  `/templates` directory content into the Tizen Eclipse IDE web
  templates directory (e.g.:
  `/home/my_username/tizen-sdk/IDE/Templates/web`).

- __Method #2: Use Tizen Eclipse IDE Cordova Tizen project templates__
    - Launch Tizen Eclipse IDE
    - Select  __File &rarr; New &rarr; Tizen Web Project__
    - Select __User Template__ and __User defined__ items
    - Select one of the Tizen Cordova template (e.g.: __CordovaBasicTemplate__)
    - Fill the __Project name__ and its target __Location__

    ![](img/guide/platforms/tizen/project_template.png)

    - Click __Finish__

    ![](img/guide/platforms/tizen/project_explorer.png)

    - Your project should now appear in the __Project Explorer__ view

-->

## Otwieranie projektu w SDK

1.  Uruchomienie Tizen Eclipse IDE.

2.  Wybierz **plik → → Importuj Tizen projektu sieci Web**:

    ![][2]

3.  Naciśnij przycisk **następny**.

4.  Upewnij się, że zaznaczone jest pole **Wybierz katalog główny** .

5.  Upewnij się, że **kopiowanie projektów w obszarze roboczym** jest zaznaczone.

6.  Naciśnij przycisk **Przeglądaj** i wybierz Cordova Tizen `samples` katalogu projektu (takich jak `/cordova-basic` ):

    ![][3]

7.  Naciśnij przycisk **Zakończ**. Projekt powinien teraz być przywożone i pojawiają się w widoku **Eksplorator projektu** :

    ![][4]

 [2]: {{ site.baseurl }}/static/img/guide/platforms/tizen/import_project.png
 [3]: {{ site.baseurl }}/static/img/guide/platforms/tizen/import_widget.png
 [4]: {{ site.baseurl }}/static/img/guide/platforms/tizen/project_explorer.png

Aby odbudować projekt, kliknij prawym przyciskiem myszy w widoku **Eksplorator projektu** i wybierz **Projekt budowy**:

![][5]

 [5]: {{ site.baseurl }}/static/img/guide/platforms/tizen/build_project.png

Plik pakietu widżet jak *hello.wgt* powinien generować w katalogu projektu.

## Uruchamianie na emulatorze

Kliknij prawym przyciskiem myszy w widoku **Eksplorator projektu** projektu i wybierz **Uruchom jako → Tizen www symulator aplikacji**:

![][6]

 [6]: {{ site.baseurl }}/static/img/guide/platforms/tizen/runas_web_sim_app.png

## Uruchamianie na urządzeniu

*   Upewnij się, że urządzenie jest prawidłowo rozpoczęła, połączone i skonfigurowany. Ustawienia **daty i czasu** muszą być ustawione prawidłowo.

*   Za pomocą widoku **Połączenie Explorer** wybierz celem wdrożenia aplikacji: **okno → Pokaż widok → połączenia Explorer**.

    ![][7]

*   Kliknij prawym przyciskiem myszy w widoku **Eksplorator projektu** projektu, a następnie wybierz **Uruchom jako → Tizen aplikacji sieci Web**:

    ![][8]

 [7]: {{ site.baseurl }}/static/img/guide/platforms/tizen/connection_explorer.png
 [8]: {{ site.baseurl }}/static/img/guide/platforms/tizen/runas_web_app.png
