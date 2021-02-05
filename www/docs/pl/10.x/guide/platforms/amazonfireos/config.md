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

title: Amazon ogień OS konfiguracja
---

# Amazon ogień OS konfiguracja

`config.xml`Plik steruje aplikacji podstawowe ustawienia, które mają zastosowanie w każdej aplikacji i wystąpienie CordovaWebView. Buduje to sekcja szczegóły preferencje, które stosuje się tylko do Amazon ogień OS. Zobacz [plik config.xml][1] informacji na temat opcji konfiguracji globalnej.

 [1]: config_ref_index.md.html#The%20config.xml%20File

*   `KeepRunning`(domyślnie wartość logiczna, `true` ): określa, czy aplikacja pozostanie uruchomiony w tle, nawet po `[pause](../../../cordova/events/events.pause.html)` pożary zdarzenia. Ustawienie `false` nie zabić aplikacji po `[pause](../../../cordova/events/events.pause.html)` wydarzenia, ale po prostu zatrzymuje wykonywanie kodu w webview cordova, podczas gdy aplikacja jest w tle.
    
        <preference name="KeepRunning" value="false"/>
        

*   `ErrorUrl`(Adres URL, domyślnie `null` ): Jeśli ustawiona, zostanie wyświetlona strona odwołanie na błąd w aplikacji okno dialogowe z tytułu "Błąd aplikacji".
    
        <preference name="ErrorUrl" value="error.html"/>
        

*   `LoadingDialog`(ciąg, domyślnie `null` ): Jeśli zestaw, wyświetla okno dialogowe i określony tytuł wiadomości i pokrętła, podczas ładowania na pierwszej stronie wniosku. Tytuł i wiadomość są oddzielone przecinkiem w tym ciąg wartości, i że przecinek jest usunięty przed wyświetleniem okna dialogowego.
    
        <preference name="LoadingDialog" value="Please wait, the app is loading"/>
        

*   `LoadingPageDialog`(ciąg, domyślnie `null` ): taki sam jak `LoadingDialog` , ale do załadunku każdej strony po pierwszej strony w aplikacji.
    
        <preference name="LoadingPageDialog" value="Please wait, the data is loading"/>
        

*   `LoadUrlTimeoutValue`(liczba, domyślnie jest `20000` ): podczas ładowania strony, czas oczekiwania przed wyrzucanie pewien czas min¹³ b³¹d. W tym przykładzie określa 10 sekund, a nie 20:
    
        <preference name="LoadUrlTimeoutValue" value="10000"/>
        

*   `SplashScreen`: Nazwa pliku minus jego rozszerzenia w `res/drawable` katalogu. Różne aktywa muszą dzielić to nazwa zwyczajowa, w różnych podkatalogach.
    
        <preference name="SplashScreen" value="splash"/>
        

*   `SplashScreenDelay`(liczba, domyślnie `5000` ): czas wyświetla obraz ekranu powitalnego.
    
        <preference name="SplashScreenDelay" value="10000"/>
        

*   `ShowTitle`(domyślnie wartość logiczna, `false` ): Pokaż tytuł w górnej części ekranu.
    
        <preference name="ShowTitle" value="true"/>
        

*   `LogLevel`(ciąg, domyślnie `ERROR` ): ustawia poziom minimalny dziennika za pomocą których dziennika będzie filtrowane wiadomości od aplikacji. Prawidłowe wartości to `ERROR` , `WARN` , `INFO` , `DEBUG` , i`VERBOSE`.
    
        <preference name="LogLevel" value="VERBOSE"/>