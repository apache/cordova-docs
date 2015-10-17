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

title: Firefox platformy OS Przewodnik
---

# Firefox platformy OS Przewodnik

Ten poradnik opisuje jak skonfigurować swoje środowisko programistyczne do tworzenia Cordova aplikacje dla urządzeń systemu operacyjnego programu Firefox, a następnie przetestować i publikowania tych aplikacji.

## Wymagania i wsparcie

Firefox OS aplikacje są w zasadzie tylko aplikacji internetowych, z dodatkiem plik manifest.webapp, który definiuje metadane dotyczące aplikacji i pozwala zainstalować na urządzeniach Firefox OS. Platformy, która obsługuje Cordova mogą być używane.Aby dowiedzieć się więcej na temat tworzenia aplikacji sieci web, skonsultować się z [Centrum aplikacji][1] na [MDN][2].

 [1]: https://developer.mozilla.org/en-US/Apps
 [2]: https://developer.mozilla.org/en-US/

## Instalacji i konfiguracji środowiska

Najpierw zainstalować [Node.js][3], a następnie zainstaluj pakiet Cordova tak:

 [3]: http://nodejs.org/

    $ npm install -g cordova
    

Następnie utworzyć aplikację Cordova próbki, a następnie przejdź do nowo utworzonego katalogu:

    $ cordova create test-app
    $ cd test-app
    

Dodać Firefox OS jako obsługiwane platformy do aplikacji z następujących czynności:

    $ cordova platform add firefoxos
    

Tworzy aplikację Firefox OS w platform/firefoxos/www katalog, który obecnie wygląda tak samo, z tą różnicą, że Firefox manifestu pliku (manifest.webapp) wewnątrz katalogu www.

## Rozwój aplikacji

W tym momencie jesteś gotowy przejść — zmienic cokolwiek chcesz swojej aplikacji jest kod wewnątrz test-app/www. Do aplikacji przy "cordova plugin dodać", na przykład, można dodać [obsługiwanych wtyczek]() :

    cordova plugin add cordova-plugin-device
    cordova plugin add cordova-plugin-vibration
    

Po zapisaniu kodu aplikacji, wdrożyć zmian do aplikacji Firefox OS, które dodane do projektu z

    $ cordova prepare firefoxos
    

Aby utworzyć aplikację pakowane jednym zip katalogu platform/firefoxos/www. Można też po prostu zbudować go za pomocą

    $ cordova build firefoxos
    

Firefox OS pakowane aplikacji zostanie zbudowany w platforms/firefoxos/build/package.zip

## Testowanie i debugowanie

Aplikacja może być testowana przy użyciu Firefox OS [Sieci Web IDE][4].

 [4]: https://developer.mozilla.org/en-US/docs/Tools/WebIDE

Po podłączeniu Web IDE na swoje badania urządzenia/symulator, wybierz opcję "Otwórz pakowane aplikacji", a następnie upewnij się, że punkt do badania app/platform/firefoxos/www/katalogu do aplikacji w Manager interfejs.

Tutaj można zainstalować aplikację na urządzenia testowe/symulator (za pomocą przycisku "Play"). Za pomocą "Pauza" przycisk, można następnie debugowania aplikacji i edytować kod na żywo.

Uwaga: Przed próbą opublikowania aplikacji należy rozważyć sprawdzenie ją przy użyciu [walidatora aplikacji][5].

 [5]: https://marketplace.firefox.com/developers/validator

## Publikowanie aplikacji na rynku programu Firefox

Prześlij swoją aplikację na rynek Firefox lub opublikować go samodzielnie. Odwiedź [Firefox rynku strefy][6] na MDN aby dowiedzieć się więcej o tym, jak to zrobić; [Opcje publikowania aplikacji][7] jest najlepszym miejscem do rozpoczęcia.

 [6]: https://developer.mozilla.org/en-US/Marketplace
 [7]: https://developer.mozilla.org/en-US/Marketplace/Publishing/Publish_options