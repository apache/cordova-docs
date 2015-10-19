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

title: Uaktualnianie BlackBerry
---

# Uaktualnianie BlackBerry

Ten poradnik pokazuje jak zmodyfikować BlackBerry projektów do uaktualnienia ze starszych wersji Cordova. Te instrukcje dotyczą projektów utworzonych w starszych zestaw narzędzi wiersza polecenia, które poprzedzają `cordova` Narzędzia CLI. Zobacz interfejs wiersza poleceń do informacji jak zaktualizować wersja od CLI.

## Projekty modernizacji 2.8.0 do 2.9.0

Jeżyna 10:

1.  Pobierz i rozpakuj źródła Cordova 2.9.0 do stałej lokalizacji na dysku twardym, na przykład do`~/Cordova-2.9.0`.

2.  Zamknąć uruchomione narzędzi SDK: Eclipse, Momentics i tym podobne.

3.  Przejdź do katalogu, gdzie można umieścić pobrać źródła powyżej, za pomocą systemu unix jak terminalu: Terminal.app, Bash, Cygwin, itp.

4.  Tworzenie nowego projektu, opisanych w przewodniku narzędziem BlackBerry powłoki. Staje się to w domu zaktualizowanego projektu.

5.  Skopiuj swój projekt źródła od starego projektu `/www` katalogu do nowego projektu `/www` katalogu.

6.  [Aktualizacja](../android/upgrade.html) Cordova odniesienia skrypt w `www/index.html` pliku (i innych plików, które zawierają odniesienia skrypt) do nowej `cordova.js` pliku.

### BlackBerryOS/Playbook

1.  Pobierz i rozpakuj źródła Cordova 2.9.0 do stałej lokalizacji na dysku twardym, na przykład do`~/Cordova-2.9.0`.

2.  Zamknąć uruchomione narzędzi SDK: Eclipse, Momentics i tym podobne.

3.  Przejdź do katalogu, gdzie można umieścić pobrać źródła powyżej, za pomocą systemu unix jak terminalu: Terminal.app, Bash, Cygwin, itp.

4.  Tworzenie nowego projektu, zgodnie z opisem w BlackBerry Shell narzędzia przewodnik. Potrzebujesz aktywów od ten nowy projekt.

5.  Kopia `www/cordova.js` pliku z nowego projektu w `www` katalogu i Usuń `www/cordova.js` pliku.

6.  [Aktualizacja](../android/upgrade.html) Cordova odniesienia skrypt w `www/index.html` pliku (i innych plików, które zawierają odniesienia skrypt) do nowej `cordova.js` pliku.

7.  Kopia `native` katalogu z nowym projektem do istniejącego projektu, zastępując stare `native` katalogu.

8.  Kopia `lib` katalogu z nowym projektem do istniejącego projektu, zastępując stare `lib` katalogu.

9.  Kopia `cordova` katalogu z nowym projektem do istniejącego projektu, zastępując stare `cordova` katalogu.

## Projekty modernizacji 2.7.0 do 2.8.0

Jeżyna 10:

BlackBerry 10 korzysta z nowych narzędzi CLI i zarządza podstawowe API jako wtyczki. Instrukcje przenieść swój projekt do nowego projektu, zamiast aktualizacji istniejącego projektu, ze względu na złożoność aktualizacji starej projektem. Także Uwaga, że cordova js skrypt plik nazywa się teraz "cordova.js" i już zawiera ciąg wersja.

1.  Pobierz i rozpakuj źródła Cordova 2.8.0 do stałej lokalizacji na dysku twardym, na przykład do`~/Cordova-2.8.0`.

2.  Zamknąć uruchomione narzędzi SDK: Eclipse, Momentics i tym podobne.

3.  Przejdź do katalogu, gdzie można umieścić pobrać źródła powyżej, za pomocą systemu unix jak terminalu: Terminal.app, Bash, Cygwin, itp.

4.  Tworzenie nowego projektu, opisanych w przewodniku narzędziem BlackBerry powłoki. Staje się to w domu zaktualizowanego projektu.

5.  Skopiuj swój projekt źródła od starego projektu `/www` katalogu do nowego projektu `/www` katalogu.

6.  [Aktualizacja](../android/upgrade.html) Cordova odniesienia skrypt w `www/index.html` pliku (i innych plików, które zawierają odniesienia skrypt) do nowej `cordova.js` pliku.

BlackBerryOS/Playbook:

1.  Pobierz i rozpakuj źródła Cordova 2.8.0 do stałej lokalizacji na dysku twardym, na przykład do`~/Cordova-2.8.0`.

2.  Zamknąć uruchomione narzędzi SDK: Eclipse, Momentics i tym podobne.

3.  Przejdź do katalogu, gdzie można umieścić pobrać źródła powyżej, za pomocą systemu unix jak terminalu: Terminal.app, Bash, Cygwin, itp.

4.  Tworzenie nowego projektu, zgodnie z opisem w BlackBerry Shell narzędzia przewodnik. Potrzebujesz aktywów od ten nowy projekt.

5.  Kopia `www/cordova.js` pliku z nowego projektu w `www` katalogu i Usuń `www/cordova.js` pliku.

6.  [Aktualizacja](../android/upgrade.html) Cordova odniesienia skrypt w `www/index.html` pliku (i innych plików, które zawierają odniesienia skrypt) do nowej `cordova.js` pliku.

7.  Kopia `native` katalogu z nowym projektem do istniejącego projektu, zastępując stare `native` katalogu.

8.  Kopia `lib` katalogu z nowym projektem do istniejącego projektu, zastępując stare `lib` katalogu.

9.  Kopia `cordova` katalogu z nowym projektem do istniejącego projektu, zastępując stare `cordova` katalogu.

## Projekty modernizacji 2.6.0 2.7.0

1.  Pobierz i rozpakuj źródła Cordova 2.7.0 do stałej lokalizacji na dysku twardym, na przykład do`~/Cordova-2.7.0`.

2.  Zamknąć uruchomione narzędzi SDK: Eclipse, Momentics i tym podobne.

3.  Przejdź do katalogu, gdzie można umieścić pobrać źródła powyżej, za pomocą systemu unix jak terminalu: Terminal.app, Bash, Cygwin, itp.

4.  Tworzenie nowego projektu, opisanych w przewodniku narzędziem BlackBerry powłoki. Potrzebujesz aktywów od ten nowy projekt.

5.  Kopia `www/cordova-2.7.0.js` pliku z nowego projektu w `www` katalogu i Usuń `www/cordova-2.6.0.js` pliku.

6.  [Aktualizacja](../android/upgrade.html) Cordova odniesienia skrypt w `www/index.html` pliku (i innych plików, które zawierają odniesienia skrypt) do nowej `cordova-2.7.0.js` pliku.

7.  Kopia `native` katalogu z nowym projektem do istniejącego projektu, zastępując stare `native` katalogu.

8.  Kopia `lib` katalogu z nowym projektem do istniejącego projektu, zastępując stare `lib` katalogu.

9.  Kopia `cordova` katalogu z nowym projektem do istniejącego projektu, zastępując stare `cordova` katalogu.

## Aktualizacja z wersji 2.5.0 do wersji 2.6.0

[Aktualizacja](../android/upgrade.html) katalogu download telefon:

Zalecane jest, że można pobrać nową kopię całego katalogu.

Jednakże tu są nowe części potrzebne do aktualizacji fragmentaryczne:

1.  Zaktualizować plik cordova.blackberry.js w `Phonegap-2.6.0/lib/blackberry/javascript` katalogu.

2.  [Aktualizacja](../android/upgrade.html) `ext` , `ext-air` , i `ext-qnx` w `Phonegap-2.6.0/lib/blackberry/framework` katalogu.

3.  [Aktualizacja](../android/upgrade.html) `build.xml` plik w `Phonegap-2.6.0/lib/blackberry` katalogu.

4.  [Aktualizacja](../android/upgrade.html) `Phonegap-2.6.0/lib/blackberry/bin` katalogu.

5.  [Aktualizacja](../android/upgrade.html) `VERSION` plik w `Phonegap-2.6.0/lib/blackberry` katalogu.

Aktualizowanie `example/` katalogu lub migracja istniejącego projektu:

1.  Otwarte `www` katalogu, który zawiera aplikację.

2.  Usuwania i aktualizacji pliku .jar w `ext/` katalogu.

3.  Aktualizowanie zawartości `ext-air/` katalogu.

4.  Aktualizowanie zawartości `ext-qnx/` katalogu.

5.  Skopiuj nowe `cordova-2.6.0.js` do projektu.

6.  Uaktualnić twój HTML, aby skorzystać z nowego `cordova-2.6.0.js` pliku.

## Uaktualnić do 2.5.0 2.4.0

[Aktualizacja](../android/upgrade.html) katalogu download telefon:

Zalecane jest, że można pobrać nową kopię całego katalogu.

Jednakże tu są nowe części potrzebne do aktualizacji fragmentaryczne:

1.  Zaktualizować plik cordova.blackberry.js w `Phonegap-2.5.0/lib/blackberry/javascript` katalogu.

2.  [Aktualizacja](../android/upgrade.html) `ext` , `ext-air` , i `ext-qnx` w `Phonegap-2.5.0/lib/blackberry/framework` katalogu.

3.  [Aktualizacja](../android/upgrade.html) `build.xml` plik w `Phonegap-2.5.0/lib/blackberry` katalogu.

4.  [Aktualizacja](../android/upgrade.html) `Phonegap-2.5.0/lib/blackberry/bin` katalogu.

5.  [Aktualizacja](../android/upgrade.html) `VERSION` plik w `Phonegap-2.5.0/lib/blackberry` katalogu.

Aktualizowanie w przykładzie / katalog lub migracja istniejącego projektu:

1.  Otwarte `www` katalogu, który zawiera aplikację.

2.  Usuwania i aktualizacji pliku .jar w `ext/` katalogu.

3.  Aktualizowanie zawartości `ext-air/` katalogu.

4.  Aktualizowanie zawartości `ext-qnx/` katalogu.

5.  Skopiuj nowe `cordova-2.5.0.js` do projektu.

6.  Uaktualnić twój HTML, aby skorzystać z nowego `cordova-2.5.0.js` pliku.

## Uaktualnić do 2.4.0 2.3.0

[Aktualizacja](../android/upgrade.html) tylko `www` katalogu:

1.  Otwarte `www` katalogu, który zawiera aplikację.

2.  Usuwania i aktualizacji pliku .jar w `ext/` katalogu.

3.  Aktualizowanie zawartości `ext-air/` katalogu.

4.  Skopiuj nowe `cordova-2.4.0.js` do projektu.
    
    *   Jeśli playbook, a następnie aktualizacja JS plików w `playbook/` katalogu.
    *   Jeśli BlackBerry 10, a następnie zaktualizować plik js w `qnx/` katalogu.

5.  Uaktualnić twój HTML, aby skorzystać z nowego `cordova-2.4.0.js` pliku.

[Aktualizacja](../android/upgrade.html) katalogu sample (czyli aktualizacji używając narzędzia):

1.  Otwarte `sample/lib/` katalogu.

2.  [Aktualizacja](../android/upgrade.html) pliku .jar w `cordova.2.3.0/ext/` katalogu.

3.  Aktualizowanie zawartości `cordova.2.3.0/ext-air/` katalogu.

4.  Aktualizowanie zawartości `cordova.2.3.0/ext-qnx/` katalogu.

5.  [Aktualizacja](../android/upgrade.html) pliku js w `cordova.2.3.0/javascript/` katalogu.

6.  Otwarte `sample/lib/` katalogu i nazwy `cordova.2.3.0/` katalogu`cordova.2.4.0/`.

7.  Typ `ant blackberry build` lub `ant playbook build` do aktualizacji `www` katalogu z aktualizacja Cordova.

8.  Otwarte `www` katalog i uaktualnić twój HTML, aby skorzystać z nowego `cordova-2.4.0.js` pliku.

## Uaktualnić do 2.3.0 2.2.0

[Aktualizacja](../android/upgrade.html) tylko `www` katalogu:

1.  Otwarte `www` katalogu, który zawiera aplikację.

2.  Usuwania i aktualizacji pliku .jar w `ext/` katalogu.

3.  Aktualizowanie zawartości `ext-air/` katalogu.

4.  Skopiuj nowe `cordova-2.3.0.js` do projektu.
    
    *   Jeśli playbook, a następnie aktualizacja JS plików w `playbook/` katalogu.
    *   Jeśli BlackBerry 10, a następnie zaktualizować plik js w `qnx/` katalogu.

5.  Uaktualnić twój HTML, aby skorzystać z nowego `cordova-2.3.0.js` pliku.

[Aktualizacja](../android/upgrade.html) katalogu sample (czyli aktualizacji używając narzędzia):

1.  Otwarte `sample/lib/` katalogu.

2.  [Aktualizacja](../android/upgrade.html) pliku .jar w `cordova.2.2.0/ext/` katalogu.

3.  Aktualizowanie zawartości `cordova.2.2.0/ext-air/` katalogu.

4.  Aktualizowanie zawartości `cordova.2.2.0/ext-qnx/` katalogu.

5.  [Aktualizacja](../android/upgrade.html) pliku js w `cordova.2.2.0/javascript/` katalogu.

6.  Otwarte `sample/lib/` katalogu i nazwy `cordova.2.2.0/` katalogu`cordova.2.3.0/`.

7.  Typ `ant blackberry build` lub `ant playbook build` do aktualizacji `www` katalogu z aktualizacja Cordova.

8.  Otwarte `www` katalog i uaktualnić twój HTML, aby skorzystać z nowego `cordova-2.3.0.js` pliku.

## Uaktualnienie do 2.2.0 z 2.1.0

[Aktualizacja](../android/upgrade.html) katalogu www:

1.  Otwarte `www` katalogu, który zawiera aplikację.

2.  Usuwania i aktualizacji pliku .jar w `ext/` katalogu.

3.  Aktualizowanie zawartości `ext-air/` katalogu.

4.  Skopiuj nowe `cordova-2.2.0.js` do projektu.
    
    *   Jeśli playbook, a następnie aktualizacja JS plików w `playbook/` katalogu.
    *   Jeśli BlackBerry 10, a następnie zaktualizować plik js w `qnx/` katalogu.

5.  Uaktualnić twój HTML, aby skorzystać z nowego `cordova-2.2.0.js` pliku.

[Aktualizacja](../android/upgrade.html) katalogu sample (czyli aktualizacji używając narzędzia):

1.  Otwarte `sample/lib/` katalogu.

2.  [Aktualizacja](../android/upgrade.html) pliku .jar w `cordova.2.1.0/ext/` katalogu.

3.  Aktualizowanie zawartości `cordova.2.1.0/ext-air/` katalogu.

4.  Aktualizowanie zawartości `cordova.2.1.0/ext-qnx/` katalogu.

5.  [Aktualizacja](../android/upgrade.html) pliku js w `cordova.2.1.0/javascript/` katalogu.

6.  Otwarte `sample/lib/` katalogu i nazwy `cordova.2.1.0/` katalogu`cordova.2.2.0/`.

7.  Typ `ant blackberry build` lub `ant playbook build` do aktualizacji `www` katalogu z aktualizacja Cordova.

8.  Otwarte `www` katalog i uaktualnić twój HTML, aby skorzystać z nowego `cordova-2.2.0.js` pliku.

## Uaktualnienie do 2.1.0 z 2.0.0

[Aktualizacja](../android/upgrade.html) tylko `www` katalogu:

1.  Otwarte `www` katalogu, który zawiera aplikację.

2.  Usuwania i aktualizacji pliku .jar w `ext/` katalogu.

3.  Aktualizowanie zawartości `ext-air/` katalogu.

4.  Skopiuj nowe `cordova-2.1.0.js` do projektu.
    
    *   Jeśli playbook, a następnie aktualizacja JS plików w `playbook/` katalogu.

5.  Uaktualnić twój HTML, aby skorzystać z nowego `cordova-2.1.0.js` pliku.

[Aktualizacja](../android/upgrade.html) katalogu sample (czyli aktualizacji używając narzędzia):

1.  Otwarte `sample/lib/` katalogu.

2.  [Aktualizacja](../android/upgrade.html) pliku .jar w `cordova.2.0.0/ext/` katalogu.

3.  Aktualizowanie zawartości `cordova.2.0.0/ext-air/` katalogu.

4.  [Aktualizacja](../android/upgrade.html) pliku js w `cordova.2.0.0/javascript/` katalogu.

5.  Otwarte `sample/lib/` katalogu i nazwy `cordova.2.0.0/` katalogu`cordova.2.1.0/`.

6.  Typ `ant blackberry build` lub `ant playbook build` do aktualizacji `www` katalogu z aktualizacja Cordova.

7.  Otwarte `www` katalog i uaktualnić twój HTML, aby skorzystać z nowego `cordova-2.1.0.js` pliku.

## Uaktualnić do 2.0.0 1.9.0

[Aktualizacja](../android/upgrade.html) tylko `www` katalogu:

1.  Otwarte `www` katalogu, który zawiera aplikację.

2.  Usuwania i aktualizacji pliku .jar w `ext/` katalogu.

3.  Aktualizowanie zawartości `ext-air/` katalogu.

4.  Skopiuj nowe `cordova-2.0.0.js` do projektu.
    
    *   Jeśli playbook, a następnie aktualizacja JS plików w `playbook/` katalogu.

5.  Uaktualnić twój HTML, aby skorzystać z nowego `cordova-2.0.0.js` pliku.

6.  [Aktualizacja](../android/upgrade.html) `www/plugins.xml` pliku. Dwie wtyczki zmienił ich etykiecie nazw usług. Zmienić stare wpisy do przechwytywania i kontaktu wtyczki od:
    
        < nazwa pluginu = "Przechwytywania" value="org.apache.cordova.media.MediaCapture"/ >< nazwa pluginu "Kontakt" value="org.apache.cordova.pim.Contact"/ = >
        
    
    Do:
    
        < nazwa pluginu = "Przechwytywania" value="org.apache.cordova.capture.MediaCapture"/ >< nazwa pluginu "Kontakty" value="org.apache.cordova.pim.Contact"/ = >
        

[Aktualizacja](../android/upgrade.html) katalogu sample (czyli aktualizacji używając narzędzia):

1.  Otwarte `sample/lib/` katalogu.

2.  [Aktualizacja](../android/upgrade.html) pliku .jar w `cordova.1.9.0/ext/` katalogu.

3.  Aktualizowanie zawartości `cordova.1.9.0/ext-air/` katalogu.

4.  [Aktualizacja](../android/upgrade.html) pliku js w `cordova.1.9.0/javascript/` katalogu.

5.  Otwarte `sample/lib/` katalogu i nazwy `cordova.1.9.0/` katalogu`cordova.2.0.0/`.

6.  Typ `ant blackberry build` lub `ant playbook build` do aktualizacji `www` katalogu z aktualizacja Cordova.

7.  Otwarte `www` katalog i uaktualnić twój HTML, aby skorzystać z nowego `cordova-2.0.0.js` pliku.

8.  Otwarte `www` katalog i aktualizacji `plugins.xml` pliku. Dwie wtyczki zmienił ich etykiecie nazw usług. Zmienić stare wpisy do przechwytywania i kontaktu wtyczki od:
    
         < nazwa pluginu = "Przechwytywania" value="org.apache.cordova.media.MediaCapture"/ >< plugin name = "Kontakt" value="org.apache.cordova.pim.Contact"/ >
        
    
    Do:
    
         < nazwa pluginu = "Przechwytywania" value="org.apache.cordova.capture.MediaCapture"/ >< plugin name = "Kontakty" value="org.apache.cordova.pim.Contact"/ >
        

*   Aby uaktualnić 1.8.0, proszę przejść od 1.7.0

## Uaktualnienie do 1.8.0 z 1.7.0

[Aktualizacja](../android/upgrade.html) tylko `www` katalogu:

1.  Otwarte `www` katalogu, który zawiera aplikację.

2.  Usuwania i aktualizacji pliku .jar w `ext/` katalogu.

3.  Aktualizowanie zawartości `ext-air/` katalogu.

4.  Skopiuj nowe `cordova-1.8.0.js` do projektu.
    
    *   Jeśli playbook, a następnie aktualizacja JS plików w `playbook/` katalogu.

5.  Uaktualnić twój HTML, aby skorzystać z nowego `cordova-1.8.0.js` pliku.

6.  [Aktualizacja](../android/upgrade.html) `www/plugins.xml` pliku. Dwie wtyczki zmienił ich etykiecie nazw usług. Zmienić stare wpisy do przechwytywania i kontaktu wtyczki od:
    
        < nazwa pluginu = "Przechwytywania" value="org.apache.cordova.media.MediaCapture"/ >< nazwa pluginu "Kontakt" value="org.apache.cordova.pim.Contact"/ = >
        
    
    Do:
    
        < nazwa pluginu = "Przechwytywania" value="org.apache.cordova.capture.MediaCapture"/ >< nazwa pluginu "Kontakty" value="org.apache.cordova.pim.Contact"/ = >
        

[Aktualizacja](../android/upgrade.html) katalogu sample (czyli aktualizacji używając narzędzia):

1.  Otwarte `sample/lib/` katalogu.

2.  [Aktualizacja](../android/upgrade.html) pliku .jar w `cordova.1.7.0/ext/` katalogu.

3.  Aktualizowanie zawartości `cordova.1.7.0/ext-air/` katalogu.

4.  [Aktualizacja](../android/upgrade.html) pliku js w `cordova.1.7.0/javascript/` katalogu.

5.  Otwarte `sample/lib/` katalogu i nazwy `cordova.1.7.0/` katalogu`cordova.1.8.0/`.

6.  Typ `ant blackberry build` lub `ant playbook build` do aktualizacji `www` katalogu z aktualizacja Cordova.

7.  Otwarte `www` katalog i uaktualnić twój HTML, aby skorzystać z nowego `cordova-1.8.0.js` pliku.

8.  Otwarte `www` katalog i aktualizacji `plugins.xml` pliku. Dwie wtyczki zmienił ich etykiecie nazw usług. Zmienić stare wpisy do przechwytywania i kontaktu wtyczki od:
    
         < nazwa pluginu = "Przechwytywania" value="org.apache.cordova.media.MediaCapture"/ >< plugin name = "Kontakt" value="org.apache.cordova.pim.Contact"/ >
        
    
    Do:
    
         < nazwa pluginu = "Przechwytywania" value="org.apache.cordova.capture.MediaCapture"/ >< plugin name = "Kontakty" value="org.apache.cordova.pim.Contact"/ >