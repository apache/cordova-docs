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

title: Konfiguracja dla platformy Android
---

# Konfiguracja dla platformy Android

`config.xml`Plik steruje aplikacji podstawowe ustawienia, które mają zastosowanie w każdej aplikacji i wystąpienie CordovaWebView. Ta sekcja zawiera szczegóły preferencje, które stosuje się tylko do Android buduje. Zobacz [plik config.xml][1] informacji na temat opcji konfiguracji globalnej.

 [1]: config_ref_index.md.html#The%20config.xml%20File

*   `KeepRunning`(domyślnie wartość logiczna, `true` ): określa, czy aplikacja pozostanie uruchomiony w tle, nawet po `[pause](../../../cordova/events/events.pause.html)` pożary zdarzenia. Ustawienie `false` nie zabić aplikacji po `[pause](../../../cordova/events/events.pause.html)` wydarzenia, ale po prostu zatrzymuje wykonywanie kodu w webview cordova, podczas gdy aplikacja jest w tle.

        <preference name="KeepRunning" value="false"/>


*   `LoadUrlTimeoutValue`(numer w milisekundach, domyślnie `20000` , 20 sekund): podczas ładowania strony, czas oczekiwania przed wyrzucanie pewien czas min¹³ b³¹d. W tym przykładzie określa 10 sekund, a nie 20:

        <preference name="LoadUrlTimeoutValue" value="10000"/>


*   `SplashScreen`(ciąg, domyślnie `splash` ): Nazwa pliku minus jego rozszerzenia w `res/drawable` katalogu. Różne aktywa muszą dzielić to nazwa zwyczajowa, w różnych podkatalogach.

        <preference name="SplashScreen" value="mySplash"/>


*   `SplashScreenDelay`(liczba w milisekundach, zgodnie z `3000` ): czas wyświetla obraz ekranu powitalnego.

        <preference name="SplashScreenDelay" value="10000"/>


*   `InAppBrowserStorageEnabled`(domyślnie wartość logiczna, `true` ): kontroli czy stron otwarty w InAppBrowser ma dostęp do samego localStorage i WebSQL przechowywania jako otwieranych z domyślnej przeglądarki stron.

        <preference name="InAppBrowserStorageEnabled" value="true"/>


*   `LoadingDialog`(ciąg, domyślnie `null` ): Jeśli zestaw, wyświetla okno dialogowe i określony tytuł wiadomości i pokrętła, podczas ładowania na pierwszej stronie wniosku. Tytuł i wiadomość są oddzielone przecinkiem w tym ciąg wartości, i że przecinek jest usunięty przed wyświetleniem okna dialogowego.

        <preference name="LoadingDialog" value="My Title,My Message"/>


*   `LoadingPageDialog`(ciąg, domyślnie `null` ): taki sam jak `LoadingDialog` , ale do załadunku każdej strony po pierwszej strony w aplikacji.

        <preference name="LoadingPageDialog" value="My Title,My Message"/>


*   `ErrorUrl`(Adres URL, domyślnie `null` ): Jeśli ustawiona, zostanie wyświetlona strona odwołanie na błąd w aplikacji okno dialogowe z tytułu "Błąd aplikacji".

        <preference name="ErrorUrl" value="myErrorPage.html"/>


*   `ShowTitle`(domyślnie wartość logiczna, `false` ): Pokaż tytuł w górnej części ekranu.

        <preference name="ShowTitle" value="true"/>


*   `LogLevel`(ciąg, domyślnie `ERROR` ): ustawia poziom minimalny dziennika za pomocą których dziennika będzie filtrowane wiadomości od aplikacji. Prawidłowe wartości to `ERROR` , `WARN` , `INFO` , `DEBUG` , i`VERBOSE`.

        <preference name="LogLevel" value="VERBOSE"/>


*   `SetFullscreen`(domyślnie wartość logiczna, `false` ): tak samo jak `Fullscreen` parametr w konfiguracji globalnej tego pliku xml. Ten element specyficzne dla Android jest zastąpiona globalnym `Fullscreen` elementu i zostaną usunięte w przyszłej wersji.

*   `AndroidLaunchMode`(ciąg, domyślnie `singleTop` ): ustawia działanie `android:launchMode` atrybut. Zmienia to, co się dzieje, gdy aplikacja jest uruchomiona z zamiarem lub ikonę aplikacji i jest już uruchomiony. Prawidłowe wartości to `standard` , `singleTop` , `singleTask` ,`singleInstance`.

        <preference name="AndroidLaunchMode" value="singleTop"/>


*   `DefaultVolumeStream`(ciąg, domyślnie `default` , dodane w cordova-android 3.7.0): ustawia wielkość sprzętowych przycisków link do wielkości. Domyślnie to, "nazywamy" telefony i "media" na tabletki. Ustawienie tego parametru na "media", aby mieć przyciski głośności Twojej aplikacji zawsze zmienić objętość nośnika. Należy pamiętać, że gdy za pomocą wtyczki Cordova w mediach, przyciski głośności dynamicznie zmieni się do sterowania głośnością mediów, gdy wszelkie obiekty multimedialne są aktywne.

*   `OverrideUserAgent` (ciąg, nie ustawiona domyślnie): Jeśli ustawiona, wartość zastąpi stary UserAgent widoku sieci Web. To jest przydatne do identyfikowania wniosek z aplikacji/przeglądarki podczas żądania stron zdalnego. Należy zachować ostrożność, może to powoduje compitiable problem z serwerami sieci web. Dla większości przypadków Użyj AppendUserAgent zamiast.

        <preference name="OverrideUserAgent" value="Mozilla/5.0 My Browser" />


*   `AppendUserAgent` (ciąg, nie ustawiona domyślnie): Jeśli ustawiona, wartość dołączy do końca starego UserAgent widoku sieci Web. Podczas korzystania z OverrideUserAgent, wartość ta zostanie zignorowana.

        <preference name="AppendUserAgent" value="My Browser" />
