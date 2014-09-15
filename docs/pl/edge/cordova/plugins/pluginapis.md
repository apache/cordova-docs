* * *

Licencja: na licencji Apache Software Foundation (ASF) jedną lub więcej umów licencyjnych współautorów. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

## under the License.

# Plugin API

Cordova statki rezygnować minimalny zestaw interfejsów API, i projekty dodać jakie dodatkowe API, wymagają one za pomocą wtyczek.

Możesz przeszukiwać wszystkich istniejących wtyczek (włączając pluginy trzeciej) za pomocą [Rejestru Plugin][1].

 [1]: http://plugins.cordova.io/

Tradycyjny zestaw podstawowych Cordova wtyczki są następująco:

*   [Stan baterii][2]
    
    > Monitorowanie stanu baterii urządzenia.

*   [Aparat fotograficzny][3]
    
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

 [2]: http://plugins.cordova.io/#/package/org.apache.cordova.battery-status
 [3]: http://plugins.cordova.io/#/package/org.apache.cordova.camera
 [4]: http://plugins.cordova.io/#/package/org.apache.cordova.console
 [5]: http://plugins.cordova.io/#/package/org.apache.cordova.contacts
 [6]: http://plugins.cordova.io/#/package/org.apache.cordova.device
 [7]: http://plugins.cordova.io/#/package/org.apache.cordova.device-motion
 [8]: http://plugins.cordova.io/#/package/org.apache.cordova.device-orientation
 [9]: http://plugins.cordova.io/#/package/org.apache.cordova.dialogs
 [10]: http://plugins.cordova.io/#/package/org.apache.cordova.file
 [11]: http://plugins.cordova.io/#/package/org.apache.cordova.file-transfer
 [12]: http://plugins.cordova.io/#/package/org.apache.cordova.geolocation
 [13]: http://plugins.cordova.io/#/package/org.apache.cordova.globalization
 [14]: http://plugins.cordova.io/#/package/org.apache.cordova.inappbrowser
 [15]: http://plugins.cordova.io/#/package/org.apache.cordova.media
 [16]: http://plugins.cordova.io/#/package/org.apache.cordova.media-capture
 [17]: http://plugins.cordova.io/#/package/org.apache.cordova.network-information
 [18]: http://plugins.cordova.io/#/package/org.apache.cordova.splashscreen
 [19]: http://plugins.cordova.io/#/package/org.apache.cordova.vibration
 [20]: https://github.com/apache/cordova-plugin-statusbar/blob/master/doc/index.md

Non-angielski tłumaczenie tych dokumentów plugin można znaleźć przez patrząc na starsze wersje dokumentacji Cordova. Użyj menu rozwijanego w bardzo prawym górnym rogu tej strony, aby przełączyć wersje.