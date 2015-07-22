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

title: Uaktualnianie BlackBerry 10
---

# Uaktualnianie BlackBerry 10

Ten poradnik pokazuje jak zmodyfikować BlackBerry projektów do uaktualnienia ze starszych wersji Cordova. Większość tych instrukcji ma zastosowanie do projektów utworzonych w starszych zestaw narzędzi wiersza polecenia, które poprzedzają `cordova` Narzędzia CLI. Zobacz interfejs wiersza poleceń do informacji jak zaktualizować do wersji CLI.

## Projekty modernizacji 3.6.0 4.0.0

Projekty-CLI, uruchom:

        bin/update path/to/project
    

Dla projektów CLI:

1.  [Aktualizacja](../android/upgrade.html) `cordova` wersji CLI. Zobacz interfejs wiersza poleceń.

2.  Uruchom `cordova platform update blackberry` w istniejących projektach.

## Uaktualnienie do 3.2.0 od 3.1.0

Dla projektów, które zostały utworzone z cordova CLI:

1.  [Aktualizacja](../android/upgrade.html) `cordova` wersji CLI. Zobacz interfejs wiersza poleceń.

2.  Uruchom `cordova platform update blackberry`

Dla projektów nie stworzony z cordova CLI Uruchom:

        bin/update <project_path>
    

## Uaktualnić do 3.1.0 3.0.0

1.  Tworzenie nowego projektu Apache Cordova 3.1.0 za pomocą CLI, cordova, zgodnie z opisem w interfejs wiersza poleceń.

2.  Dodać swojej platformy do projektu cordova, na przykład:`cordova
platform add blackberry10`.

3.  Skopiuj zawartość oryginalnego projektu `www` katalogu `www` katalog w katalogu głównym projektu cordova właśnie utworzyłeś.

4.  Skopiuj lub zastąpić rodzimych aktywów z oryginalnego projektu ( `Resources` , itp.)

5.  Kopia `config.xml` plik w `www` katalogu i usunąć wszelkie definicje plugin. Należy zmodyfikować ustawienia, tutaj raczej niż w katalogu.

6.  Narzędzia CLI cordova instalowac pluginy, czego potrzebujesz. Należy zauważyć, że CLI obsługuje wszystkie podstawowe API jako wtyczki, więc mogą one potrzebować do dodania. Tylko wtyczek oznaczone 3.0.0 i powyżej są zgodne z CLI.

7.  Tworzenie i testowanie.

Należy pamiętać, że CLI obsługuje wyłącznie na platformie BlackBerry10. PlayBook i BBOS, zapoznaj się z Cordova wersja 2.9.0 i poniżej.

## Uaktualnienie do consoli (3.0.0) z 2.9.0

1.  Tworzenie nowego projektu Apache Cordova 3.0.0 za pomocą CLI, cordova, zgodnie z opisem w interfejs wiersza poleceń.

2.  Dodaj swojej platformy do projektu cordova, na przykład:`cordova
platform add blackberry10`.

3.  Skopiuj zawartość oryginalnego projektu `www` katalogu do `www` katalog w katalogu głównym projektu cordova właśnie utworzyłeś.

4.  Skopiuj lub zastąpić rodzimych aktywów z oryginalnego projektu ( `Resources` , itp.)

5.  Kopia `config.xml` plik w `www` katalogu i usunąć wszelkie definicje plugin. Należy zmodyfikować ustawienia tutaj a nie w katalogu.

6.  Narzędzia CLI cordova instalowac pluginy, czego potrzebujesz. Należy zauważyć, że CLI obsługuje wszystkie podstawowe API jako wtyczki, więc mogą one potrzebować do dodania. Tylko 3.0.0 wtyczki są kompatybilne z CLI.

7.  Tworzenie i testowanie.

## Projekty modernizacji 2.8.0 do 2.9.0

Dla BlackBerry 10:

1.  Pobierz i rozpakuj źródła Cordova 2.9.0 na miejsce stałe katalogu na dysku twardym, na przykład do`~/Cordova-2.9.0`.

2.  Zamknąć uruchomione narzędzi SDK: Eclipse, Momentics i tym podobne.

3.  Przejdź do katalogu, gdzie można umieścić pobrać źródła powyżej, za pomocą systemu unix jak terminalu: Terminal.app, Bash, Cygwin, itp.

4.  Tworzenie nowego projektu, zgodnie z opisem w BlackBerry Shell narzędzia przewodnik. To staje się domem zaktualizowanego projektu.

5.  Skopiować źródła projektów od starego projektu `/ www` katalogu do nowego projektu `/ www` katalogu.

6.  [Aktualizacja](../android/upgrade.html) Cordova odniesienia skrypt w `www/index.html` pliku (i innych plików, które zawierają odniesienia skrypt) do nowej `cordova.js` pliku.

Dla BlackBerryOS/Playbook:

1.  Pobierz i rozpakuj źródła Cordova 2.9.0 do lokalizacji stałych katalogu na dysku twardym, na przykład do`~/Cordova-2.9.0`.

2.  Zamknąć uruchomione narzędzi SDK: Eclipse, Momentics i tym podobne.

3.  Przejdź do katalogu, gdzie można umieścić pobrać źródła powyżej, za pomocą systemu unix jak terminalu: Terminal.app, Bash, Cygwin, itp.

4.  Tworzenie nowego projektu, zgodnie z opisem w BlackBerry Shell narzędzia przewodnik. Potrzebujesz aktywów od ten nowy projekt.

5.  Kopia `www/cordova.js` pliku z nowego projektu w `www` katalogu i Usuń `www/cordova.js` pliku.

6.  [Aktualizacja](../android/upgrade.html) Cordova odniesienia skrypt w `www/index.html` pliku (i innych plików, które zawierają odniesienia skrypt) do nowej `cordova.js` pliku.

7.  Kopia `native` katalogu z nowym projektem do istniejącego projektu, zastępując stare `native` katalogu.

8.  Kopia `lib` katalogu z nowym projektem do istniejącego projektu, zastępując stare `lib` katalogu.

9.  Kopia `cordova` katalogu z nowym projektem do istniejącego projektu, zastępując stare `cordova` katalogu.

## Projekty modernizacji 2.7.0 do 2.8.0

BlackBerry 10 korzysta z nowych narzędzi CLI i zarządza podstawowych interfejsów API jako wtyczki. Instrukcji migracji projektu nowego projektu, zamiast aktualizacji istniejącego projektu, ze względu na złożoność aktualizacji starego projektu. Także Uwaga, że cordova js skrypt pliku teraz nazywa się "cordova.js" i już zawiera ciąg wersji.

1.  Pobierz i rozpakuj źródła Cordova 2.8.0 do lokalizacji stałych katalogu na dysku, na przykład do`~/Cordova-2.8.0`.

2.  Zamknąć uruchomione narzędzi SDK: Eclipse, Momentics i tym podobne.

3.  Przejdź do katalogu, gdzie można umieścić pobrać źródła powyżej, za pomocą systemu unix jak terminalu: Terminal.app, Bash, Cygwin, itp.

4.  Tworzenie nowego projektu, zgodnie z opisem w BlackBerry Shell narzędzia przewodnik. To staje się domem zaktualizowanego projektu.

5.  Skopiować źródła projektów od starego projektu `/ www` katalogu do nowego projektu `/ www` katalogu.

6.  [Aktualizacja](../android/upgrade.html) Cordova odniesienia skrypt w `www/index.html` pliku (i innych plików, które zawierają odniesienia skrypt) do nowej `cordova.js` pliku.

Dla BlackBerryOS/Playbook:

1.  Pobierz i rozpakuj źródła Cordova 2.8.0 do lokalizacji stałych katalogu na dysku twardym, na przykład do`~/Cordova-2.8.0`.

2.  Zamknąć uruchomione narzędzi SDK: Eclipse, Momentics i tym podobne.

3.  Przejdź do katalogu, gdzie można umieścić pobrać źródła powyżej, za pomocą systemu unix jak terminalu: Terminal.app, Bash, Cygwin, itp.

4.  Tworzenie nowego projektu, zgodnie z opisem w BlackBerry Shell narzędzia przewodnik. Potrzebujesz aktywów od ten nowy projekt.

5.  Kopia `www/cordova.js` pliku z nowego projektu w `www` katalogu i Usuń `www/cordova.js` pliku.

6.  Zaktualizować odniesienia skrypt Cordova w `www/index.html` pliku (i innych plików, które zawierają odniesienia skrypt) wskaż Nowy `cordova.js` pliku.

7.  Kopia `native` katalogu z nowym projektem do istniejącego projektu, zastępując stare `native` katalogu.

8.  Kopia `lib` katalogu z nowym projektem do istniejącego projektu, zastępując stare `lib` katalogu.

9.  Kopia `cordova` katalogu z nowym projektem do istniejącego projektu, zastępując stare `cordova` katalogu.

## Projekty modernizacji 2.6.0 2.7.0

1.  Pobierz i rozpakuj źródła Cordova 2.7.0 na miejsce stałe katalogu na dysku twardym, na przykład do `~/Cordova-2.7.0`.

2.  Zamknąć uruchomione narzędzi SDK: Eclipse, Momentics i tym podobne.

3.  Przejdź do katalogu, gdzie można umieścić pobrany źródła powyżej, za pomocą systemu unix jak terminal: Terminal.app, Bash, Cygwin, itp.

4.  Tworzenie nowego projektu, zgodnie z opisem w BlackBerry Shell narzędzia przewodnik. Potrzebujesz aktywów od ten nowy projekt.

5.  Kopia `www/cordova-2.7.0.js` pliku z nowego projektu w `www` katalogu i Usuń `www/cordova-2.6.0.js` pliku.

6.  Zaktualizować odniesienia skrypt Cordova w `www/index.html` pliku (i innych plików, które zawierają odniesienia skrypt) wskaż Nowy `cordova-2.7.0.js` pliku.

7.  Kopia `native` katalogu z nowym projektem do istniejącego projektu, zastępując stare `native` katalogu.

8.  Kopia `lib` katalogu z nowym projektem do istniejącego projektu, zastępując stare `lib` katalogu.

9.  Kopia `cordova` katalogu z nowym projektem do istniejącego projektu, zastępując stare `cordova` katalogu.

## Uaktualnienie do 2.6.0 z 2.5.0

[Aktualizacja](../android/upgrade.html) katalogu download PhoneGap:

Zalecane jest, że można pobrać nową kopię całego katalogu.

Jednakże tu są nowe części potrzebne do aktualizacji fragmentaryczne:

1.  Zaktualizować plik cordova.blackberry.js w `Phonegap-2.6.0/lib/blackberry/javascript` katalogu.

2.  [Aktualizacja](../android/upgrade.html) `ext` , `ext-air` , i `ext-qnx` w `Phonegap-2.6.0/lib/blackberry/framework` katalogu.

3.  [Aktualizacja](../android/upgrade.html) `build.xml` plik w `Phonegap-2.6.0/lib/blackberry` katalogu.

4.  [Aktualizacja](../android/upgrade.html) `Phonegap-2.6.0/lib/blackberry/bin` katalogu.

5.  [Aktualizacja](../android/upgrade.html) `VERSION` plik w `Phonegap-2.6.0/lib/blackberry` katalogu.

Aktualizowanie w przykładzie / katalogu lub migracja istniejącego projektu:

1.  Otwarte `www` katalogu, który zawiera aplikację.

2.  Usuwania i aktualizacji pliku .jar w `ext/` katalogu.

3.  Aktualizowanie zawartości `ext-air/` katalogu.

4.  Aktualizowanie zawartości `ext-qnx/` katalogu.

5.  Skopiuj nowe `cordova-2.6.0.js` do projektu.

6.  Uaktualnić twój HTML do używania nowych `cordova-2.6.0.js` pliku.

## Uaktualnienie do 2.5.0 od 2.4.0

[Aktualizacja](../android/upgrade.html) katalogu download PhoneGap:

Zalecane jest, że można pobrać nową kopię całego katalogu.

Jednakże tu są nowe części potrzebne do aktualizacji fragmentaryczne:

1.  Zaktualizować plik cordova.blackberry.js w `Phonegap-2.5.0/lib/blackberry/javascript` katalogu.

2.  [Aktualizacja](../android/upgrade.html) `ext` , `ext-air` , i `ext-qnx` w `Phonegap-2.5.0/lib/blackberry/framework` katalogu.

3.  [Aktualizacja](../android/upgrade.html) `build.xml` plik w `Phonegap-2.5.0/lib/blackberry` katalogu.

4.  [Aktualizacja](../android/upgrade.html) `Phonegap-2.5.0/lib/blackberry/bin` katalogu.

5.  [Aktualizacja](../android/upgrade.html) `VERSION` plik w `Phonegap-2.5.0/lib/blackberry` katalogu.

Aktualizowanie w przykładzie / katalogu lub migracja istniejącego projektu:

1.  Otwarte `www` katalogu, który zawiera aplikację.

2.  Usuwania i aktualizacji pliku .jar w `ext/` katalogu.

3.  Aktualizowanie zawartości `ext-air/` katalogu.

4.  Aktualizowanie zawartości `ext-qnx/` katalogu.

5.  Skopiuj nowe `cordova-2.5.0.js` do projektu.

6.  Uaktualnić twój HTML do używania nowych `cordova-2.5.0.js` pliku.

## Uaktualnienie do 2.4.0 od 2.3.0

[Aktualizacja](../android/upgrade.html) tylko `www` katalogu:

1.  Otwarte `www` katalogu, który zawiera aplikację.

2.  Usuwania i aktualizacji pliku .jar w `ext/` katalogu.

3.  Aktualizowanie zawartości `ext-air/` katalogu.

4.  Skopiuj nowe `cordova-2.4.0.js` do projektu.
    
    *   Jeśli playbook, a następnie aktualizacja JS plików w `playbook/` katalogu.
    *   Jeśli BlackBerry 10, a następnie zaktualizować plik js w `qnx/` katalogu.

5.  Uaktualnić twój HTML do używania nowych `cordova-2.4.0.js` pliku.

[Aktualizacja](../android/upgrade.html) katalogu sample (tj, aktualizacji za pomocą narzędzia):

1.  Otwarte `sample/lib/` katalogu.

2.  [Aktualizacja](../android/upgrade.html) pliku .jar w `cordova.2.3.0/ext/` katalogu.

3.  Aktualizowanie zawartości `cordova.2.3.0/ext-air/` katalogu.

4.  Aktualizowanie zawartości `cordova.2.3.0/ext-qnx/` katalogu.

5.  [Aktualizacja](../android/upgrade.html) pliku js w `cordova.2.3.0/javascript/` katalogu.

6.  Otwarte `sample/lib/` katalogu i nazwy `cordova.2.3.0/` katalogu`cordova.2.4.0/`.

7.  Typ `ant blackberry build` lub `ant playbook build` do aktualizacji `www` katalogu z zaktualizowaną Cordova.

8.  Otwarte `www` katalog i uaktualnić twój HTML do używania nowych `cordova-2.4.0.js` pliku.

## Uaktualnienie do 2.3.0 od 2.2.0

[Aktualizacja](../android/upgrade.html) tylko `www` katalogu:

1.  Otwarte `www` katalogu, który zawiera aplikację.

2.  Usuwania i aktualizacji pliku .jar w `ext/` katalogu.

3.  Aktualizowanie zawartości `ext-air/` katalogu.

4.  Skopiuj nowe `cordova-2.3.0.js` do projektu.
    
    *   Jeśli playbook, a następnie aktualizacja JS plików w `playbook/` katalogu.
    *   Jeśli BlackBerry 10, a następnie zaktualizować plik js w `qnx/` katalogu.

5.  Uaktualnić twój HTML do używania nowych `cordova-2.3.0.js` pliku.

[Aktualizacja](../android/upgrade.html) katalogu sample (tj, aktualizacji za pomocą narzędzia):

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

[Aktualizacja](../android/upgrade.html) katalogu sample (tj, aktualizacji za pomocą narzędzia):

1.  Otwarte `sample/lib/` katalogu.

2.  [Aktualizacja](../android/upgrade.html) pliku .jar w `cordova.2.1.0/ext/` katalogu.

3.  Aktualizowanie zawartości `cordova.2.1.0/ext-air/` katalogu.

4.  Aktualizowanie zawartości `cordova.2.1.0/ext-qnx/` katalogu.

5.  [Aktualizacja](../android/upgrade.html) pliku js w `cordova.2.1.0/javascript/` katalogu.

6.  Otwarte `sample/lib/` katalogu i nazwy `cordova.2.1.0/` katalogu`cordova.2.2.0/`.

7.  Typ `ant blackberry build` lub `ant playbook build` do aktualizacji `www` katalogu z zaktualizowaną Cordova.

8.  Otwarte `www` katalog i uaktualnić twój HTML do używania nowych `cordova-2.2.0.js` pliku.

## Uaktualnienie do 2.1.0 z 2.0.0

[Aktualizacja](../android/upgrade.html) tylko `www` katalogu:

1.  Otwarte `www` katalogu, który zawiera aplikację.

2.  Usuwania i aktualizacji pliku .jar w `ext/` katalogu.

3.  Aktualizowanie zawartości `ext-air/` katalogu.

4.  Skopiuj nowe `cordova-2.1.0.js` do projektu.
    
    *   Jeśli playbook, a następnie aktualizacja JS plików w `playbook/` katalogu.

5.  Uaktualnić twój HTML do używania nowych `cordova-2.1.0.js` pliku.

[Aktualizacja](../android/upgrade.html) katalogu sample (tj, aktualizacji za pomocą narzędzia):

1.  Otwarte `sample/lib/` katalogu.

2.  [Aktualizacja](../android/upgrade.html) pliku .jar w `cordova.2.0.0/ext/` katalogu.

3.  Aktualizowanie zawartości `cordova.2.0.0/ext-air/` katalogu.

4.  [Aktualizacja](../android/upgrade.html) pliku js w `cordova.2.0.0/javascript/` katalogu.

5.  Otwarte `sample/lib/` katalogu i nazwy `cordova.2.0.0/` katalogu`cordova.2.1.0/`.

6.  Typ `ant blackberry build` lub `ant playbook build` do aktualizacji `www` katalogu z zaktualizowaną Cordova.

7.  Otwarte `www` katalog i uaktualnić twój HTML do używania nowych `cordova-2.1.0.js` pliku.

## Uaktualnienie do 2.0.0 od 1.9.0

[Aktualizacja](../android/upgrade.html) tylko `www` katalogu:

1.  Otwarte `www` katalogu, który zawiera aplikację.

2.  Usuwania i aktualizacji pliku .jar w `ext/` katalogu.

3.  Aktualizowanie zawartości `ext-air/` katalogu.

4.  Skopiuj nowe `cordova-2.0.0.js` do projektu.
    
    *   Jeśli playbook, a następnie aktualizacja JS plików w `playbook/` katalogu.

5.  Uaktualnić twój HTML do używania nowych `cordova-2.0.0.js` pliku.

6.  [Aktualizacja](../android/upgrade.html) `www/plugins.xml` pliku. Dwie wtyczki zmienił ich etykiecie nazw usług. Zmienić stare wpisy dla wtyczek przechwytywania i kontakt z:
    
        <plugin name="Capture" value="org.apache.cordova.media.MediaCapture"/>
        <plugin name="Contact" value="org.apache.cordova.pim.Contact"/>
        
    
    Do:
    
        <plugin name="Capture" value="org.apache.cordova.capture.MediaCapture"/>
        <plugin name="Contacts" value="org.apache.cordova.pim.Contact"/>
        

[Aktualizacja](../android/upgrade.html) katalogu sample (tj, aktualizacji za pomocą narzędzia):

1.  Otwarte `sample/lib/` katalogu.

2.  [Aktualizacja](../android/upgrade.html) pliku .jar w `cordova.1.9.0/ext/` katalogu.

3.  Aktualizowanie zawartości `cordova.1.9.0/ext-air/` katalogu.

4.  [Aktualizacja](../android/upgrade.html) pliku js w `cordova.1.9.0/javascript/` katalogu.

5.  Otwarte `sample/lib/` katalogu i nazwy `cordova.1.9.0/` katalogu`cordova.2.0.0/`.

6.  Typ `ant blackberry build` lub `ant playbook build` do aktualizacji `www` katalogu z zaktualizowaną Cordova.

7.  Otwarte `www` katalog i uaktualnić twój HTML do używania nowych `cordova-2.0.0.js` pliku.

8.  Otwarte `www` katalog i aktualizacji `plugins.xml` pliku. Dwie wtyczki zmienił ich etykiecie nazw usług. Zmienić stare wpisy dla wtyczek przechwytywania i kontakt z:
    
         <plugin name="Capture" value="org.apache.cordova.media.MediaCapture"/>
         <plugin name="Contact" value="org.apache.cordova.pim.Contact"/>
        
    
    Do:
    
         <plugin name="Capture" value="org.apache.cordova.capture.MediaCapture"/>
         <plugin name="Contacts" value="org.apache.cordova.pim.Contact"/>
        

*   Aby uaktualnić 1.8.0, proszę przejść od 1.7.0

## Uaktualnienie do 1.8.0 z 1.7.0

[Aktualizacja](../android/upgrade.html) tylko `www` katalogu:

1.  Otwarte `www` katalogu, który zawiera aplikację.

2.  Usuwania i aktualizacji pliku .jar w `ext/` katalogu.

3.  Aktualizowanie zawartości `ext-air/` katalogu.

4.  Skopiuj nowe `cordova-1.8.0.js` do projektu.
    
    *   Jeśli playbook, a następnie aktualizacja JS plików w `playbook/` katalogu.

5.  Uaktualnić twój HTML do używania nowych `cordova-1.8.0.js` pliku.

6.  [Aktualizacja](../android/upgrade.html) `www/plugins.xml` pliku. Dwie wtyczki zmienił ich etykiecie nazw usług. Zmienić stare wpisy dla wtyczek przechwytywania i kontakt z:
    
        <plugin name="Capture" value="org.apache.cordova.media.MediaCapture"/>
        <plugin name="Contact" value="org.apache.cordova.pim.Contact"/>
        
    
    Do:
    
        <plugin name="Capture" value="org.apache.cordova.capture.MediaCapture"/>
        <plugin name="Contacts" value="org.apache.cordova.pim.Contact"/>
        

[Aktualizacja](../android/upgrade.html) katalogu sample (tj, aktualizacji za pomocą narzędzia):

1.  Otwarte `sample/lib/` katalogu.

2.  [Aktualizacja](../android/upgrade.html) pliku .jar w `cordova.1.7.0/ext/` katalogu.

3.  Aktualizowanie zawartości `cordova.1.7.0/ext-air/` katalogu.

4.  [Aktualizacja](../android/upgrade.html) pliku js w `cordova.1.7.0/javascript/` katalogu.

5.  Otwarte `sample/lib/` katalogu i nazwy `cordova.1.7.0/` katalogu`cordova.1.8.0/`.

6.  Typ `ant blackberry build` lub `ant playbook build` do aktualizacji `www` katalogu z zaktualizowaną Cordova.

7.  Otwarte `www` katalog i uaktualnić twój HTML do używania nowych `cordova-1.8.0.js` pliku.

8.  Otwarte `www` katalog i aktualizacji `plugins.xml` pliku. Dwie wtyczki zmienił ich etykiecie nazw usług. Zmienić stare wpisy dla wtyczek przechwytywania i kontakt z:
    
         <plugin name="Capture" value="org.apache.cordova.media.MediaCapture"/>
         <plugin name="Contact" value="org.apache.cordova.pim.Contact"/>
        
    
    Do:
    
         <plugin name="Capture" value="org.apache.cordova.capture.MediaCapture"/>
         <plugin name="Contacts" value="org.apache.cordova.pim.Contact"/>