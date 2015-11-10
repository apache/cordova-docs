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

title: Plugin API
---

# Plugin API

Cordova statki rezygnować minimalny zestaw interfejsów API, i projekty dodać jakie dodatkowe API, wymagają one za pomocą wtyczek.

Możesz przeszukiwać wszystkie istniejące pluginy (w tym zewnętrznych wtyczek) w [npm][1].

 [1]: https://www.npmjs.com/search?q=ecosystem%3Acordova

Tradycyjny zestaw podstawowych Cordova wtyczki są następująco:

*   [Stan baterii][2]
    
    > Monitorowanie stanu baterii urządzenia.

*   [Aparat][3]
    
    > Przechwytywanie zdjęcia za pomocą aparatu urządzenia.

*   [Konsoli][4]
    
    > Dodać dodatkowe zdolności do console.log().

*   [Kontakty][5]
    
    > Praca z bazą danych kontaktowych urządzenia.

*   [Urządzenia][6]
    
    > Zebrać konkretne informacje o urządzeniu.

*   [Ruch urządzenie (akcelerometr)][7]
    
    > Wykorzystać czujnik ruchu urządzenia.

*   [Urządzenie orientacji (kompas)][8]
    
    > Uzyskania kierunku, który wskazuje urządzenie.

*   [Dialogi][9]
    
    > Powiadomienia wizualne urządzenie.

*   [System plików][10]
    
    > Hak do natywnego systemu poprzez JavaScript.

*   [Transfer plików][11]
    
    > Hak do natywnego systemu poprzez JavaScript.

*   [Geolocation][12]
    
    > Uświadomić lokalizacji aplikacji.

*   [Globalizacja][13]
    
    > Włączyć reprezentację obiekty specyficzne dla ustawień regionalnych.

*   [InAppBrowser][14]
    
    > Uruchomienie adresów URL w innej instancji w app przeglądarki.

*   [Media][15]
    
    > Nagrywać i odtwarzać pliki audio.

*   [Media Capture][16]
    
    > Przechwytywać pliki multimedialne za pomocą urządzenia multimedialne przechwytywania.

*   [Informacje o sieci (połączenia)][17]
    
    > Szybko sprawdzić stan sieci i informacje o sieci komórkowej.

*   [Ekranu powitalnego][18]
    
    > Pokaż i Ukryj ekran powitalny aplikacji.

*   [Wibracje][19]
    
    > Interfejs API do wibrować urządzenia.

*   [Pasek stanu][20]
    
    > API dla Wyświetlono, ukrywanie i konfigurowania tła paska stanu.

*   [Biała][21]
    
    > Plugin do białej listy sieci żądań. Należy zainstalować do każdego żądania sieciowe w aplikacji.

*   [Dziedzictwo biała][22]
    
    > Wtyczki do wykorzystania starego stylu Biała, zanim został wyrwane i zmienił w białej wtyczki.

 [2]: https://www.npmjs.com/package/cordova-plugin-battery-status
 [3]: https://www.npmjs.com/package/cordova-plugin-camera
 [4]: https://www.npmjs.com/package/cordova-plugin-console
 [5]: https://www.npmjs.com/package/cordova-plugin-contacts
 [6]: https://www.npmjs.com/package/cordova-plugin-device
 [7]: https://www.npmjs.com/package/cordova-plugin-device-motion
 [8]: https://www.npmjs.com/package/cordova-plugin-device-orientation
 [9]: https://www.npmjs.com/package/cordova-plugin-dialogs
 [10]: https://www.npmjs.com/package/cordova-plugin-file
 [11]: https://www.npmjs.com/package/cordova-plugin-file-transfer
 [12]: https://www.npmjs.com/package/cordova-plugin-geolocation
 [13]: https://www.npmjs.com/package/cordova-plugin-globalization
 [14]: https://www.npmjs.com/package/cordova-plugin-inappbrowser
 [15]: https://www.npmjs.com/package/cordova-plugin-media
 [16]: https://www.npmjs.com/package/cordova-plugin-media-capture
 [17]: https://www.npmjs.com/package/cordova-plugin-network-information
 [18]: https://www.npmjs.com/package/cordova-plugin-splashscreen
 [19]: https://www.npmjs.com/package/cordova-plugin-vibration
 [20]: https://www.npmjs.com/package/cordova-plugin-statusbar
 [21]: https://www.npmjs.com/package/cordova-plugin-whitelist
 [22]: https://www.npmjs.com/package/cordova-plugin-legacy-whitelist

Non-angielski tłumaczenie tych dokumentów plugin można znaleźć przechodząc do wtyczki github repo i patrząc w folderze docs