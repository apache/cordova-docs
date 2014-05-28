---

Licencja: na licencji Apache Software Foundation (ASF) jedną lub więcej umów licencyjnych współautorów. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

   under the License.
---

# Plugin API

Cordova statki rezygnować minimalny zestaw interfejsów API, i projekty dodać jakie dodatkowe API, wymagają one za pomocą wtyczek.

Możesz przeszukiwać wszystkich istniejących wtyczek (włączając pluginy trzeciej) za pomocą [Rejestru Plugin][1].

 [1]: http://plugins.cordova.io/

Tradycyjny zestaw podstawowych Cordova wtyczki są następująco:

*   [Stan baterii][2]
    
    > Monitorowanie stanu baterii urządzenia.

*   [Aparat fotograficzny][3]
    
    > Przechwytywanie zdjęcia za pomocą aparatu urządzenia.

*   [Kontakty][4]
    
    > Praca z bazą danych kontaktowych urządzenia.

*   [Urządzenia][5]
    
    > Zebrać konkretne informacje o urządzeniu.

*   [Ruch urządzenie (akcelerometr)][6]
    
    > Wykorzystać czujnik ruchu urządzenia.

*   [Urządzenie orientacji (kompas)][7]
    
    > Uzyskania kierunku, który wskazuje urządzenie.

*   [Dialogi][8]
    
    > Powiadomienia wizualne urządzenie.

*   [System plików][9]
    
    > Hak do natywnego systemu poprzez JavaScript.

*   [Transfer plików][10]
    
    > Hak do natywnego systemu poprzez JavaScript.

*   [Geolocation][11]
    
    > Uświadomić lokalizacji aplikacji.

*   [Globalizacja][12]
    
    > Włączyć reprezentację obiekty specyficzne dla ustawień regionalnych.

*   [InAppBrowser][13]
    
    > Uruchomienie adresów URL w innej instancji w app przeglądarki.

*   [Media][14]
    
    > Nagrywać i odtwarzać pliki audio.

*   [Media Capture][15]
    
    > Przechwytywać pliki multimedialne za pomocą urządzenia multimedialne przechwytywania.

*   [Informacje o sieci (połączenia)][16]
    
    > Szybko sprawdzić stan sieci i informacje o sieci komórkowej.

*   [Ekranu powitalnego][17]
    
    > Pokaż i Ukryj ekran powitalny aplikacji.

*   [Wibracje][18]
    
    > Interfejs API do wibrować urządzenia.

 [2]: https://github.com/apache/cordova-plugin-battery-status/blob/master/doc/index.md
 [3]: https://github.com/apache/cordova-plugin-camera/blob/master/doc/index.md
 [4]: https://github.com/apache/cordova-plugin-contacts/blob/master/doc/index.md
 [5]: https://github.com/apache/cordova-plugin-device/blob/master/doc/index.md
 [6]: https://github.com/apache/cordova-plugin-device-motion/blob/master/doc/index.md
 [7]: https://github.com/apache/cordova-plugin-device-orientation/blob/master/doc/index.md
 [8]: https://github.com/apache/cordova-plugin-dialogs/blob/master/doc/index.md
 [9]: https://github.com/apache/cordova-plugin-file/blob/master/doc/index.md
 [10]: https://github.com/apache/cordova-plugin-file-transfer/blob/master/doc/index.md
 [11]: https://github.com/apache/cordova-plugin-geolocation/blob/master/doc/index.md
 [12]: https://github.com/apache/cordova-plugin-globalization/blob/master/doc/index.md
 [13]: https://github.com/apache/cordova-plugin-inappbrowser/blob/master/doc/index.md
 [14]: https://github.com/apache/cordova-plugin-media/blob/master/doc/index.md
 [15]: https://github.com/apache/cordova-plugin-media-capture/blob/master/doc/index.md
 [16]: https://github.com/apache/cordova-plugin-network-information/blob/master/doc/index.md
 [17]: https://github.com/apache/cordova-plugin-splashscreen/blob/master/doc/index.md
 [18]: https://github.com/apache/cordova-plugin-vibration/blob/master/doc/index.md

Non-angielski tłumaczenie tych dokumentów plugin można znaleźć przez patrząc na starsze wersje dokumentacji Cordova. Użyj menu rozwijanego w bardzo prawym górnym rogu tej strony, aby przełączyć wersje.