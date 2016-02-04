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

title: Aktualizacja iOS
---

# Aktualizacja iOS

Ten poradnik pokazuje jak zmodyfikować iOS projektów do uaktualnienia ze starszych wersji Cordova. Większość tych instrukcji ma zastosowanie do projektów utworzonych w starszych zestaw narzędzi wiersza polecenia, które poprzedzają `cordova` Narzędzia CLI. Zobacz interfejs wiersza poleceń do informacji jak zaktualizować do wersji CLI.

**Uwaga**: wymagane jest Xcode 6. Obecnie do przedłożenia w Apple App Store, należy użyć najnowsze wysłane wersji iOS SDK, który jest iOS 8 i to jest tylko dołączony Xcode 6.

## Projekty modernizacji 3.6.0 4.0.0

Projekty-CLI, uruchom:

        bin/update path/to/project
    

Dla projektów CLI:

1.  [Aktualizacja](../android/upgrade.html) `cordova` wersji CLI. Zobacz interfejs wiersza poleceń.

2.  Uruchom `cordova platform update ios` w istniejących projektach.

## Projekty modernizacji 3.3.0 3.4.0

Projekty-CLI, uruchom:

        bin/update path/to/project
    

Dla projektów CLI:

1.  [Aktualizacja](../android/upgrade.html) `cordova` wersji CLI. Zobacz interfejs wiersza poleceń.

2.  Uruchom`cordova platform update ios`

## Projekty modernizacji 3.2.0 3.3.0

Projekty-CLI, uruchom:

        bin/update path/to/project
    

Dla projektów CLI:

1.  [Aktualizacja](../android/upgrade.html) `cordova` wersji CLI. Zobacz interfejs wiersza poleceń.

2.  Uruchom`cordova platform update ios`

## Projekty modernizacji 3.1.0 3.2.0

Projekty-CLI, uruchom:

        bin/update path/to/project
    

Dla projektów CLI:

1.  [Aktualizacja](../android/upgrade.html) `cordova` wersji CLI. Zobacz interfejs wiersza poleceń.

2.  Uruchom`cordova platform update ios`

## Projekty modernizacji 3.0.0 3.1.0

Projekty-CLI, uruchom:

        bin/update path/to/project
    

Dla projektów CLI:

1.  [Aktualizacja](../android/upgrade.html) `cordova` wersji CLI. Zobacz interfejs wiersza poleceń.

2.  Uruchom`cordova platform update ios`

iOS 7 problemy:

1.  Usuń `width=device-width, height=device-height` z pliku `index.html` `viewport` tag `meta`. (Zobacz [istotnych błędów][1].)

2.  Zaktualizować swoje wtyczki podstawowych mediów, media przechwytywania i ekranu powitalnego dla iOS 7 wsparcie.

 [1]: https://issues.apache.org/jira/browse/CB-4323

Xcode 5 problemy:

1.  Zaktualizować ustawienia projektu, jeśli Xcode 5 monituje to zrobić (w kwestii nawigatora).

2.  [Aktualizacja](../android/upgrade.html) twój **kompilator C / C + +/ Objective-C** ustawienia na karcie **Ustawienia budować**, **Budować opcje** sekcji. Wybierz **domyślny kompilator (Apple LLVM 5.0)**.

## Uaktualnienie do consoli (3.0.0) z 2.9.0

1.  Tworzenie nowego projektu Apache Cordova 3.0.0 za pomocą CLI, cordova, zgodnie z opisem w interfejs wiersza poleceń.

2.  Dodać swojej platformy do projektu cordova, na przykład: `cordova platform add ios`.

3.  Skopiuj zawartość projektu `www` katalogu `www` katalog w katalogu głównym projektu cordova właśnie utworzyłeś.

4.  Skopiuj lub zastąpić rodzimych aktywów z oryginalnego projektu (`Resources`, itp.), upewniając się dodać wszelki nowy akta do projektu `.xcodeproj`. Projekt iOS opiera się wewnątrz katalogu `platforms\ios`.

5.  Skopiuj `plik config.xml` do katalogu `www` i usunąć wszelkie definicje plugin. Modyfikowanie ustawień tutaj zamiast katalogu.

6.  Narzędzia CLI cordova instalowac pluginy, czego potrzebujesz. Należy zauważyć, że CLI obsługuje wszystkie podstawowe API jako wtyczki, więc mogą one potrzebować do dodania. Tylko 3.0.0 wtyczki są kompatybilne z CLI.

7.  Tworzenie i testowanie.

## Projekty modernizacji 2.9.0 3.0.0

1.  Pobierz i rozpakuj źródła Cordova 3.0.0 na miejsce stałe katalogu na dysku twardym, na przykład do `~/Documents/Cordova-3.0.0`.

2.  Zamknąć Xcode, jeśli jest uruchomiony.

3.  Za pomocą Terminal.app, przejdź do katalogu, gdzie można umieścić pobrany źródła powyżej.

4.  Tworzenie nowego projektu, zgodnie z opisem w iOS Shell narzędzia przewodnik. Potrzebujesz aktywów od ten nowy projekt.

5.  Kopia `www/cordova.js` (należy pamiętać, że to nie ma już przyrostka wersji, wersja jest w pliku nagłówka) plik z nowego projektu w `www` katalogu i Usuń `www/cordova.js` pliku.

6.  [Aktualizacja](../android/upgrade.html) Cordova odniesienia skrypt w `www/index.html` pliku (i innych plików, które zawierają odniesienia skrypt) do nowej `cordova.js` pliku.

7.  Usuń `CordovaLib` katalogu, a kopia `CordovaLib` katalogu z nowego projektu w katalogu projektu.

**Uwaga**: począwszy od Cordova 3.0.0, wtyczki nie są wstępnie zainstalowany, i trzeba zainstalować je samodzielnie za pomocą narzędzia wiersza polecenia `plugman`. Zobacz za pomocą Plugman do zarządzania wtyczki.

## Projekty modernizacji 2.8.0 do 2.9.0

1.  Pobierz i rozpakuj źródła Cordova 2.9.0 na miejsce stałe katalogu na dysku twardym, na przykład do `~/Documents/Cordova-2.9.0`.

2.  Zamknąć Xcode, jeśli jest uruchomiony.

3.  Za pomocą Terminal.app, przejdź do katalogu, gdzie można umieścić pobrany źródła powyżej.

4.  Tworzenie nowego projektu, zgodnie z opisem w iOS Shell narzędzia przewodnik. Potrzebujesz aktywów od ten nowy projekt.

5.  Kopia `www/cordova.js` (należy pamiętać, że to nie ma już przyrostka wersji, wersja jest w pliku nagłówka) plik z nowego projektu w `www` katalogu i Usuń `www/cordova.js` pliku.

6.  [Aktualizacja](../android/upgrade.html) Cordova odniesienia skrypt w `www/index.html` pliku (i innych plików, które zawierają odniesienia skrypt) do nowej `cordova.js` pliku.

7.  Usuń `CordovaLib` katalogu, a kopia `CordovaLib` katalogu z nowego projektu w katalogu projektu.

## Projekty modernizacji 2.7.0 do 2.8.0

1.  Pobierz i rozpakuj źródła Cordova 2.8.0 na miejsce stałe katalogu na dysku twardym, na przykład do `~/Documents/Cordova-2.8.0`.

2.  Zamknąć Xcode, jeśli jest uruchomiony.

3.  Za pomocą Terminal.app, przejdź do katalogu, gdzie można umieścić pobrany źródła powyżej.

4.  Tworzenie nowego projektu, zgodnie z opisem w iOS Shell narzędzia przewodnik. Potrzebujesz aktywów od ten nowy projekt.

5.  Kopia `www/cordova.js` (należy pamiętać, że to nie ma już przyrostka wersji, wersja jest w pliku nagłówka) plik z nowego projektu w katalogu `www` i usunąć plik `www/cordova-2.7.0.js`.

6.  [Aktualizacja](../android/upgrade.html) Cordova odniesienia skrypt w `www/index.html` pliku (i innych plików, które zawierają odniesienia skrypt) do nowej `cordova.js` pliku.

7.  Tagi `<feature>` aktualizacja żadnych tagów `<plugin>` w pliku `config.xml`. Należy zauważyć, że istniejące Tagi `<plugin>` nadal działa, ale są przestarzałe. Możesz skopiować te informacje w pliku `config.xml` do nowego projektu. Na przykład:
    
        <plugins>
            <plugin name="LocalStorage" value="CDVLocalStorage" />
            <!-- other plugins -->
        </plugins>
        
        <!-- change to: (note that a <feature> tag is on the same level as <plugins> -->
        <feature name="LocalStorage">
            <param name="ios-package" value="CDVLocalStorage" />
        </feature>
        <!-- other <feature> tags -->
        

8.  Usuń `CordovaLib` katalogu, a kopia `CordovaLib` katalogu z nowego projektu w katalogu projektu.

9.  Dodać te dwie ramy do projektu:
    
        OpenAL
        ImageIO
        

10. Cel projektu **Budowy ustawienia** aktualizacji. Zgodnie z **linkami → inne Linker flagi**, edycja **"- Obj - C"** się **"-ObjC"**.

11. Cel projektu **Budowy ustawienia** aktualizacji. Zgodnie z **linkami → inne flagi Linker**, zmienić **"-wszystkie _ załadować"** się `-force\_load ${BUILT\_PRODUCTS\_DIR}/libCordova.a`. Tylko trzeba by to zrobić, jeśli masz problem, zdefiniowane w [ten problem.][2].

 [2]: https://issues.apache.org/jira/browse/CB-3458

## Projekty modernizacji 2.6.0 2.7.0

1.  Pobierz i rozpakuj źródła Cordova 2.7.0 na miejsce stałe katalogu na dysku twardym, na przykład do `~/Documents/Cordova-2.7.0`.

2.  Zamknąć Xcode, jeśli jest uruchomiony.

3.  Za pomocą Terminal.app, przejdź do katalogu, gdzie można umieścić pobrany źródła powyżej.

4.  Tworzenie nowego projektu, zgodnie z opisem w iOS Shell narzędzia przewodnik. potrzebujesz aktywów od ten nowy projekt.

5.  Kopia `www/cordova-2.7.0.js` pliku z nowego projektu w `www` katalogu i Usuń `www/cordova-2.6.0.js` pliku.

6.  [Aktualizacja](../android/upgrade.html) Cordova odniesienia skrypt w `www/index.html` pliku (i innych plików, które zawierają odniesienia skrypt) do nowej `cordova-2.7.0.js` pliku.

7.  [Aktualizacja](../android/upgrade.html) (lub zastąpić, jeśli nigdy nie zmieniono plik) plik `AppDelegate.m`, zgodnie z jednym z nowych projektu (patrz [ten diff][3]).

8.  W pliku `config.xml`, [usunąć ten wiersz][4].

9.  Usuń `CordovaLib` katalogu, a kopia `CordovaLib` katalogu z nowego projektu w katalogu projektu.

 [3]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/Classes/AppDelegate.m;h=5c05ac80e056753c0e8736f887ba9f28d5b0774c;hp=623ad8ec3c46f656ea18c6c3a190d650dd64e479;hb=c6e71147386d4ad94b07428952d1aae0a9cbf3f5;hpb=c017fda8af00375a453cf27cfc488647972e9a23
 [4]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=537705d76a5ef6bc5e57a8ebfcab78c02bb4110b;hp=8889726d9a8f8c530fe1371c56d858c34552992a;hb=064239b7b5fa9a867144cf1ee8b2fb798ce1f988;hpb=c9f233250d4b800f3412eeded811daaafb17b2cc

## Projekty modernizacji 2.5.0 do 2.6.0

1.  Pobierz i rozpakuj źródła Cordova 2.6.0 na miejsce stałe katalogu na dysku twardym, na przykład do `~/Documents/Cordova-2.6.0`.

2.  Zamknąć Xcode, jeśli jest uruchomiony.

3.  Za pomocą Terminal.app, przejdź do katalogu, gdzie można umieścić pobrany źródła powyżej.

4.  Tworzenie nowego projektu, zgodnie z opisem w iOS Shell narzędzia przewodnik. Potrzebujesz aktywów od ten nowy projekt.

5.  Kopiowanie projektu `www/cordova-2.6.0.js` plik do katalogu `www` i usunąć plik `www/cordova-2.5.0.js`.

6.  [Aktualizacja](../android/upgrade.html) Cordova odniesienia skrypt w pliku `www/index.html` (oraz wszelkie inne pliki, które odwołują się do skryptu) odnosi się do nowego pliku `cordova-2.6.0.js`.

7.  [Aktualizacja](../android/upgrade.html) (lub zastąpić, jeśli nigdy nie zmieniono plik) plik `AppDelegate.m`, zgodnie z jednym z nowych projektu (patrz [ten diff][5]).

8.  W pliku `config.xml`, [dodać nowej linii][6].

9.  W pliku `config.xml`, [dodać nowej linii][7].

10. W pliku `config.xml`, [UIWebViewBounce został zmieniony na DisallowOverscroll, i wartości domyślne są różne][8].

11. W pliku `config.xml` preferencji `EnableLocation` została zdeprecjonowana.

12. Usuń `CordovaLib` katalogu, a kopia `CordovaLib` katalogu z nowego projektu w katalogu projektu.

 [5]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/Classes/AppDelegate.m;h=124a56bb4f361e95616f44d6d6f5a96ffa439b60;hp=318f79326176be8f16ebc93bad85dd745f4205b6;hb=a28c7712810a63396e9f32fa4eb94fe3f8b93985;hpb=36acdf55e4cab52802d73764c8a4b5b42cf18ef9
 [6]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=1555b5e81de326a07efe0bccaa5f5e2326b07a9a;hp=0652d60f8d35ac13c825c572dca6ed01fea4a540;hb=95f16a6dc252db0299b8e2bb53797995b1e39aa1;hpb=a2de90b8f5f5f68bd9520bcbbb9afa3ac409b96d
 [7]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=d307827b7e67301171a913417fb10003d43ce39d;hp=04260aa9786d6d74ab20a07c86d7e8b34e31968c;hb=97b89edfae3527828c0ca6bb2f6d58d9ded95188;hpb=942d33c8e7174a5766029ea1232ba2e0df745c3f
 [8]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=8889726d9a8f8c530fe1371c56d858c34552992a;hp=d307827b7e67301171a913417fb10003d43ce39d;hb=57982de638a4dce6ae130a26662591741b065f00;hpb=ec411f18309d577b4debefd9a2f085ba719701d5

## Projekty modernizacji 2.4.0 do 2.5.0

1.  Pobierz i rozpakuj źródła Cordova 2.5.0 do lokalizacji stałych katalogu na dysku twardym, na przykład do `~/Documents/Cordova-2.5.0`.

2.  Zamknąć Xcode, jeśli jest uruchomiony.

3.  Za pomocą Terminal.app, przejdź do katalogu, gdzie można umieścić pobrany źródła powyżej.

4.  Tworzenie nowego projektu, zgodnie z opisem w iOS Shell narzędzia przewodnik. Potrzebujesz aktywów od ten nowy projekt.

5.  Skopiuj plik `www/cordova-2.5.0.js` z nowego projektu w katalogu `www` i usunąć plik `www/cordova-2.4.0.js`.

6.  [Aktualizacja](../android/upgrade.html) Cordova odniesienia skrypt w pliku `www/index.html` (i innych plików, które zawierają odniesienia skrypt) aby wskazywało nowy plik `cordova-2.5.0.js`.

7.  [Aktualizacja](../android/upgrade.html) (lub zastąpić, jeśli nigdy nie zmieniono plik) plik `AppDelegate.m`, zgodnie z jednym z nowych projektu (patrz [ten diff][9]).

8.  W pliku `config.xml`, [dodać te nowe linie][10].

9.  W pliku `config.xml`, [Edytuj element główny, zmienić ją cordova do widget][11].

10. W pliku `config.xml`, [Usuń preferencje OpenAllWhitelistURLsInWebView][12].

11. Usuń katalog `cordova` i skopiować katalogu `cordova` z nowego projektu w katalogu projektu. W 2.5.0 to ma zaktualizować skrypty.

12. Usuń `CordovaLib` katalogu, a kopia `CordovaLib` katalogu z nowego projektu w katalogu projektu.

 [9]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/Classes/AppDelegate.m;h=318f79326176be8f16ebc93bad85dd745f4205b6;hp=6dc7bfc84f0ecede4cc43d2a3256ef7c5383b9fe;hb=4001ae13fcb1fcbe73168327630fbc0ce44703d0;hpb=299a324e8c30065fc4511c1fe59c6515d4842f09
 [10]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=903944c4b1e58575295c820e154be2f5f09e6314;hp=721c734120b13004a4a543ee25f4287e541f34be;hb=ae467249b4a256bd31ee89aea7a06f4f2316b8ac;hpb=9e39f7ef8096fb15b38121ab0e245a3a958d9cbb
 [11]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=64e71636f5dd79fa0978a97b9ff5aa3860a493f5;hp=d8579352dfb21c14e5748e09b2cf3f4396450163;hb=0e711f8d09377a7ac10ff6be4ec17d22cdbee88d;hpb=57c3c082ed9be41c0588d0d63a1d2bfcd2ed878c
 [12]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=721c734120b13004a4a543ee25f4287e541f34be;hp=7d67508b70914aa921a16e79f79c00512502a8b6;hb=187bf21b308551bfb4b98b1a5e11edf04f699791;hpb=03b8854bdf039bcefbe0212db937abd81ac675e4

## Projekty modernizacji 2.3.0 2.4.0

1.  Pobierz i rozpakuj źródła Cordova 2.4.0 na miejsce stałe katalogu na dysku twardym, na przykład do `~/Documents/Cordova-2.4.0`.

2.  Zamknąć Xcode, jeśli jest uruchomiony.

3.  Za pomocą Terminal.app, przejdź do katalogu, gdzie można umieścić pobrany źródła powyżej.

4.  Tworzenie nowego projektu, zgodnie z opisem w iOS Shell narzędzia przewodnik. Potrzebujesz aktywów od ten nowy projekt.

5.  Skopiuj plik `www/cordova-2.4.0.js` z nowego projektu w katalogu `www` i usunąć plik `www/cordova-2.3.0.js`.

6.  [Aktualizacja](../android/upgrade.html) Cordova odniesienia skrypt w pliku `www/index.html` (i innych plików, które zawierają odniesienia skrypt) aby wskazywało nowy plik `cordova-2.4.0.js`.

7.  Aktualizacji (lub zastąpić, jeśli nigdy nie zmieniono pliki) plik `MainViewController.m`, zgodnie z jednym z nowych projektów (patrz [ten diff][13]).

8.  [Aktualizacja](../android/upgrade.html) (lub zastąpić, jeśli nigdy nie zmieniono plik) plik `AppDelegate.m`, zgodnie z jednym z nowych projektu (patrz [ten diff][14]).

9.  W pliku `config.xml`, [dodać nowej linii][15].

10. Usuń katalog `cordova` i skopiować katalogu `cordova` z nowego projektu w katalogu projektu. W 2.4.0 to ma stałe skrypty.

11. Usuń `CordovaLib` katalogu, a kopia `CordovaLib` katalogu z nowego projektu w katalogu projektu.

12. Dodaj AssetsLibrary.framework jako zasób do projektu. (Patrz [Dokumentacja firmy Apple][16] instrukcje jak to zrobić.).

 [13]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/Classes/MainViewController.m;h=5f9eeac15c2437cd02a6eb5835b48374e9b94100;hp=89da1082d06ba5e5d0dffc5b2e75a3a06d5c2aa6;hb=b4a2e4ae0445ba7aec788090dce9b822d67edfd8;hpb=a484850f4610e73c7b20cd429a7794ba829ec997
 [14]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/Classes/AppDelegate.m;h=6dc7bfc84f0ecede4cc43d2a3256ef7c5383b9fe;hp=1ca3dafeb354c4442b7e149da4f281675aa6b740;hb=6749c17640c5fed8a7d3a0b9cca204b89a855baa;hpb=deabeeb6fcb35bac9360b053c8bf902b45e6de4d
 [15]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=7d67508b70914aa921a16e79f79c00512502a8b6;hp=337d38da6f40c7432b0bce05aa3281d797eec40a;hb=6749c17640c5fed8a7d3a0b9cca204b89a855baa;hpb=deabeeb6fcb35bac9360b053c8bf902b45e6de4d
 [16]: https://developer.apple.com/library/ios/#recipes/xcode_help-project_editor/Articles/AddingaLibrarytoaTarget.html

## Projekty modernizacji 2.2.0 2.3.0

1.  Pobierz i rozpakuj źródła Cordova 2.3.0 na miejsce stałe katalogu na dysku twardym, na przykład do `~/Documents/Cordova-2.3.0`.

2.  Zamknąć Xcode, jeśli jest uruchomiony.

3.  Za pomocą Terminal.app, przejdź do katalogu, gdzie można umieścić pobrany źródła powyżej.

4.  Tworzenie nowego projektu, zgodnie z opisem w iOS Shell narzędzia przewodnik. Potrzebujesz aktywów od ten nowy projekt.

5.  Skopiuj plik `www/cordova-2.3.0.js` z nowego projektu w katalogu `www` i usunąć plik `www/cordova-2.2.0.js`.

6.  [Aktualizacja](../android/upgrade.html) Cordova odniesienia skrypt w pliku `www/index.html` (i innych plików, które zawierają odniesienia skrypt) aby wskazywało nowy plik `cordova-2.3.0.js`.

7.  [Aktualizacja](../android/upgrade.html) (lub zastąpić, jeśli nigdy nie zmieniono plik) `MainViewController.m` według jednej z nowego projektu.

8.  Usuń katalog `cordova` i skopiować katalogu `cordova` z nowego projektu w katalogu projektu. W 2.3.0 to ma nowe skrypty.

9.  Usuń `CordovaLib` katalogu, a kopia `CordovaLib` katalogu z nowego projektu w katalogu projektu.

10. Konwersja pliku `Cordova.plist` do `pliku config.xml`, uruchamiając skrypt `bin/cordova\_plist\_to\_config\_xml` w pliku projektu.

11. Dodaj wtyczkę InAppBrowser do `pliku config.xml`, dodając ten tag pod `<cordova><plugins>`:
    
        <plugin name="InAppBrowser" value="CDVInAppBrowser" />
        

12. Należy zauważyć, że Objective-C wtyczki są już *nie* Białej liście. Do białej listy połączeń z białej listy aplikacji, musisz ustawić nagłówek `User-Agent` połączenia sam user-agent jako główny Cordova WebView. Można to uzyskać poprzez uzyskiwanie dostępu do Właściwość `userAgent` wyłączyć główny widok kontroler. Główny widok kontroler (`CDVViewController`) ma również metodę `URLisAllowed`, aby sprawdzić, czy adres URL przechodzi białej listy.

13. Urządzenie interfejsu API zmiany:
    
    *   Dla iOS, device.platform używane do zwracania `iPhone`, `iPad` lub `iPod Touch`; Teraz wraca (poprawnie) `iOS`.
    *   Dla iOS, device.name (niezalecany dla wszystkich platform) używane do zwracania nazwy użytkownika urządzenia (np. ' Shazron w iPhone 5); teraz zwraca co device.platform używane do zwracania: `iPhone`, `iPad` lub `iPod Touch`.
    *   Na wszystkich platformach jest nową właściwość o nazwie device.model; zwraca modelu określonego urządzenia, np. `iPad2, 5` (dla innych platform, zwraca to co device.name używane do zwracania).

## Projekty modernizacji 2.1.0 2.2.0

1.  Pobierz i rozpakuj źródła Cordova 2.2.0 na miejsce stałe katalogu na dysku twardym, na przykład do `~/Documents/Cordova-2.2.0`.

2.  Zamknąć Xcode, jeśli jest uruchomiony.

3.  Za pomocą Terminal.app, przejdź do katalogu, gdzie można umieścić pobrany źródła powyżej.

4.  Tworzenie nowego projektu, zgodnie z opisem w iOS Shell narzędzia przewodnik. Potrzebujesz aktywów od ten nowy projekt.

5.  Skopiuj plik `www/cordova-2.2.0.js` z nowego projektu w katalogu `www` i usunąć plik `www/cordova-2.1.0.js`.

6.  [Aktualizacja](../android/upgrade.html) Cordova odniesienia skrypt w pliku `www/index.html` (i innych plików, które zawierają odniesienia skrypt) aby wskazywało nowy plik `cordova-2.2.0.js`.

7.  [Aktualizacja](../android/upgrade.html) (lub zastąpić, jeśli nigdy nie zmieniono plik) `MainViewController.m` zgodnie z nowym projektem:
    
    *   Updated → viewWillAppear

8.  Kopiowanie katalogu `cordova` z nowego projektu w katalogu projektu. W wersji 2.2.0 to ma zaktualizować skrypt "naśladować".

9.  Następnie zaktualizować odwołanie sub-projektu `CordovaLib`. Począwszy od Cordova 2.1.0, nie używamy zmiennej CORDOVALIB Xcode już kiedy odwołującego się, gdzie znajduje się `CordovaLib`, odwołanie jest odwołanie do pliku teraz.
    
    1.  Uruchomienie Terminal.app
    2.  Przejdź do lokalizacji, w którym zainstalowano Cordova (patrz krok 1), w podkatalogu `bin`
    3.  Uruchom skrypt poniżej gdzie pierwszym parametrem jest ścieżka do pliku `.xcodeproj` projektu:
        
        `update_cordova_subproject path/to/your/project/xcodeproj`

**Uwaga**: W wersji 2.2.0, `bin/create` skryptu kopiowanie w pod-projekcie `CordovaLib` do projektu. Do tego samego rodzaju instalacji, wystarczy skopiować w prawo `CordovaLib` do katalogu projektu i zaktualizować lokalizację projektu pod `CordovaLib` (w stosunku do projektu) w Xcode inspektor pliku.

## Projekty modernizacji 2.0.0 2.1.0

Z Cordova 2.1.0 `CordovaLib` ma był ulepszony wobec używać **Automatycznego liczenia odniesienia (ARC)**. Nie potrzeba uaktualnienia do **ŁUKU** do używania CordovaLib, ale jeśli chcesz uaktualnić twój projekt za pomocą **ŁUKU**, proszę używasz Kreatora migracji Xcode z menu: **Edycja → refaktoringu → konwersji do ŁUKU Objective-C...**, usuń zaznaczenie pola wyboru libCordova.a, a następnie uruchomić kreatora do zakończenia.

1.  Pobierz i rozpakuj źródła Cordova 2.1.0 do lokalizacji stałych katalogu na dysku twardym, na przykład do `~/Documents/Cordova-2.1.0`.

2.  Zamknąć Xcode, jeśli jest uruchomiony.

3.  Za pomocą Terminal.app, przejdź do katalogu, gdzie można umieścić pobrany źródła powyżej.

4.  Tworzenie nowego projektu, zgodnie z opisem w iOS Shell narzędzia przewodnik. Potrzebujesz aktywów od ten nowy projekt.

5.  Skopiuj plik `www/cordova-2.1.0.js` z nowego projektu w katalogu `www` i usunąć plik `www/cordova-2.0.0.js`.

6.  [Aktualizacja](../android/upgrade.html) Cordova odniesienia skrypt w pliku `www/index.html` (i innych plików, które zawierają odniesienia skrypt) aby wskazywało nowy plik `cordova-2.1.0.js`.

7.  [Aktualizacja](../android/upgrade.html) (lub zastąpić, jeśli nigdy nie zmieniono plik) `AppDelegate.m` zgodnie z nowym projektem:
    
    *   Edited → application:didFinishLaunchingWithOptions:
    *   Added → application:supportedInterfaceOrientationsForWindow:

8.  [Aktualizacja](../android/upgrade.html) (lub zastąpić, jeśli nigdy nie zmieniono plik) `MainViewController.m` zgodnie z nowym projektem:
    
    *   Added → viewWillAppear

9.  Kopiowanie katalogu `cordova` z nowego projektu w katalogu projektu. W 2.1.0 to ma aktualizacja skryptów do obsługi ścieżek z pomieszczenia.

10. Usunąć odniesienie do pliku `wersja` z projektu (*nie* ten w `CordovaLib`).

11. Następnie zaktualizować odwołanie sub-projektu `CordovaLib`. Począwszy od Cordova 2.1.0, nie używamy zmiennej CORDOVALIB Xcode już kiedy odwołującego się, gdzie znajduje się `CordovaLib`, odwołanie jest odwołanie do pliku teraz.
    
    1.  Uruchomienie Terminal.app
    2.  Przejdź do lokalizacji, w którym zainstalowano Cordova (patrz krok 1), w podkatalogu `bin`
    3.  Uruchom skrypt poniżej gdzie pierwszym parametrem jest ścieżka do pliku `.xcodeproj` projektu:
        
        `update_cordova_subproject path/to/your/project/xcodeproj`

## Projekty modernizacji 1.9.0 2.0.0

1.  Zainstalować Cordova 2.0.0.

2.  Tworzenie nowego projektu, zgodnie z opisem w iOS Shell narzędzia przewodnik. Potrzebujesz aktywów od ten nowy projekt.

3.  Skopiuj plik `www/cordova-2.0.0.js` z nowego projektu w katalogu `www` i usunąć plik `www/cordova-1.9.0.js`.

4.  [Aktualizacja](../android/upgrade.html) Cordova odniesienia skrypt w pliku `www/index.html` (i innych plików, które zawierają odniesienia skrypt) aby wskazywało nowy plik `cordova-2.0.0.js`.

5.  Kopiowanie katalogu `cordova` z nowego projektu w katalogu głównym projektu (jeśli chcesz projektu narzędzia wiersza polecenia).

6.  Dodaj nowy wpis `Plugins` w pliku `Cordova.plist`, w grupie **Wsparcia plików**. Ten klucz jest `Device`, a wartość jest `CDVDevice`.

7.  Usuń `Cordova.framework`.

8.  Usuń `verify.sh` z grupy **Wsparcia plików**.

9.  Wybierz ikonę projektu w Nawigatorze projektu, wybierz **cel** projektu, a następnie wybierz kartę **Ustawienia budować**.

10. Szukaj **Preprocesora makra**, a następnie usuń wszystkie **CORDOVA_FRAMEWORK = 1** wartości.

11. Zlokalizuj katalog `CordovaLib`, który został zainstalowany na dysku twardym w twój ognisko domowe teczka na `dokumenty` podkatalogu.

12. Znajdź plik `CordovaLib.xcodeproj` w katalogu `CordovaLib`, a następnie przeciągnij i upuść plik do projektu. Powinien pojawiać się jako podprojekt.

13. Budowania projektu, powinieneś dostać jakieś błędy, odnoszących się do dyrektyw `#import`.

14. `#import` błędy zmiany jakiegokolwiek przywozu opartego na ofertę w tym stylu:
    
        #import "CDV.h"
        
    
    do tego stylu opartego na nawiasy:
    
        #import <Cordova/CDV.h>
        
    
    i usunąć wszelkie `#ifdef` nakładkami do przywozu Cordova, nie są one już potrzebne (przywóz teraz są zunifikowane)

15. Budować swój projekt ponownie, i to nie powinno mieć żadnych błędów `#import`.

16. Wybierz **ikonę projektu** w Nawigatorze projektu, wybierz **cel** projektu, a następnie wybierz kartę **Faz budowy**.

17. Rozwiń fazy **Zależności miejsce docelowe**, a następnie wybierz **+** przycisk.

18. Wybierz obiekt docelowy, `CordovaLib`, a następnie kliknij przycisk **Dodaj**.

19. Rozwiń w pierwszej fazie **Binarne Link z biblioteki** (już powinna zawierać kilka RAM), a następnie wybierz **+** przycisk.

20. Wybierz `libCordova.a` biblioteki statyczne, a następnie kliknij przycisk **Dodaj**.

21. Usuń fazy **Uruchomienia skryptu**.

22. Wybierz **ikonę projektu** w Nawigatorze projektu, wybierz **cel** projektu, a następnie wybierz kartę **Ustawienia budować**.

23. Wyszukaj **Inne flagi Linker** i dodać wartości **-force_load** i **- Obj - C**.

24. Rozwiń `CordovaLib` podprojektu.

25. Zlokalizuj plik `VERSION`, przeciągnij go do projektu głównego (chcemy utworzyć link do niego, nie kopia).

26. Wybierz przycisk opcji **utworzyć grupy o wszelkie dodane foldery**, a następnie kliknij przycisk **Zakończ**.

27. Wybierz `VERSION` pliku, który zaledwie przeciągane w poprzednim kroku.

28. Typ **opcji-polecenia-1** kombinację klawiszy, aby pokazać **Plik inspektor** (lub menuitem **Widok → narzędzia → Pokaż plik inspektor**).

29. Wybierz **w stosunku do CORDOVALIB** w **Pliku inspektor** spadać-w dół menu dla **lokalizacji**.

30. Ustawić preferencje Xcode **Xcode preferencje → lokalizacje → uzyskanych danych → zaawansowane...** na **unikalne**, tak że jednolite nagłówki można znaleźć.

31. Wybierz **ikonę projektu** w Nawigatorze projektu, wybierz **miejsce docelowe**, a następnie wybierz kartę **Ustawienia budować**.

32. Szukaj dla **nagłówka ścieżki wyszukiwania**. Dla tego ustawienia, należy dołączyć te trzy wartości, łącznie z cytatów:
    
        "$(TARGET_BUILD_DIR)/usr/local/lib/include"
        
        "$(OBJROOT)/UninstalledProducts/include"
        
        "$(BUILT_PRODUCTS_DIR)"
        

33. Wyszukaj **inne flagi Linker**. Dla tego ustawienia, należy dołączyć tę wartość:
    
        -weak_framework CoreFoundation
        

34. Budowania projektu, to należy skompilować i zlinkować bez **żadnych problemów**.

35. Wybierz projekt z listy rozwijanej **systemu**, a następnie wybierz **iPhone 5.1 symulator**.

36. Kliknij przycisk **Uruchom**.

**Uwaga**: Jeśli twój projekt nie działa zgodnie z oczekiwaniami w symulatorze, proszę wziąć pod uwagę wszelkie błędy w Dzienniku konsoli w Xcode wskazówek.

## Ulepszanie projektów 1.8.x do 1.9.0

1.  Zainstalować Cordova 1.9.0.

2.  Tworzenie nowego projektu. Trzeba będzie niektórych aktywów od ten nowy projekt.

3.  Skopiuj plik `www/cordova-1.9.0.js` z nowego projektu w katalogu `www` i usunąć plik `www/cordova-1.8.x.js`.

4.  [Aktualizacja](../android/upgrade.html) Cordova odniesienia skrypt w pliku `www/index.html` (i innych plików, które zawierają odniesienia skrypt) aby wskazywało nowy plik `cordova-1.9.0.js`.

**Uwaga**: 1.9.0 obsługuje nowe ustawienie `Cordova.plist` logiczna `BackupWebStorage`. To jest umożliwiał przy nie wykonać, tak na wartość `Fałsz` wobec uczyniæ kalek¹ ono, zwłaszcza na iOS 6. Zobacz [wydaniu: Safari i sekcja UIKit][17]

 [17]: https://developer.apple.com/library/prerelease/ios/#releasenotes/General/RN-iOSSDK-6_0/_index.html

## Projekty modernizacji 1.7.0 do 1.8.x

1.  Zainstalować Cordova 1.8.0.

2.  Tworzenie nowego projektu. Trzeba będzie niektórych aktywów od ten nowy projekt.

3.  Skopiuj plik `www/cordova-1.8.0.js` z nowego projektu w katalogu `www` i usunąć plik `www/cordova-1.7.x.js`.

4.  [Aktualizacja](../android/upgrade.html) Cordova odniesienia skrypt w pliku `www/index.html` (i innych plików, które zawierają odniesienia skrypt) aby wskazywało nowy plik `cordova-1.8.0.js`.

Jeśli zamierzasz na korzystanie z API przechwytywania, trzeba będzie nowe aktywa **wyświetlacz retina iPad**:

1.  Skopiuj element `Resources/Capture.bundle` z nowym projektem do katalogu projektu, nadpisanych twój istniejący element `Resources/Capture.bundle`.

2.  W projekcie wybierz element `Capture.bundle` do nawigatora projektu w Xcode, typ klawisz **Delete**, a następnie wybierz **Usunąć odwołanie** z wynikaj¹cy dialog.

3.  Przeciągnij nowy `Capture.bundle` od kroku 1 powyżej w Xcode nawigatora projektu, a następnie wybierz przycisk opcji **utworzyć grupy o wszelkie dodane foldery**.

## Projekty modernizacji 1.6.x 1.7.0

1.  Zainstalować Cordova 1.7.0.

2.  Tworzenie nowego projektu. Trzeba będzie niektórych aktywów od ten nowy projekt.

3.  Skopiuj plik `www/cordova-1.7.0.js` z nowego projektu w katalogu `www` i usunąć plik `www/cordova-1.6.0.js`.

4.  [Aktualizacja](../android/upgrade.html) Cordova odniesienia skrypt w pliku `www/index.html` (i innych plików, które zawierają odniesienia skrypt) aby wskazywało nowy plik `cordova-1.7.0.js`.

## Projekty modernizacji 1.5.0 1.6.x

1.  Zainstalować Cordova 1.6.1.

2.  Zrób kopię zapasową, `AppDelegate.m`, `AppDelegate.h`, `MainViewController.m`, `MainViewController.h` i `Cordova.plist` w projekcie.

3.  Tworzenie nowego projektu. Trzeba będzie niektórych aktywów od ten nowy projekt.

4.  Skopiuj następujące pliki z nowego projektu w 1.5.0-based projekt katalogu na dysku, zastępując wszystkie stare pliki (backup plików najpierw z kroku 2 powyżej):
    
        AppDelegate.h
        AppDelegate.m
        MainViewController.h
        MainViewController.m
        Cordova.plist
        

5.  Dodaj wszystkie nowe pliki `MainViewController` i `AppDelegate` do projektu Xcode.

6.  Skopiuj plik `www/cordova-1.6.1.js` z nowego projektu w katalogu `www` i usunąć plik `www/cordova-1.5.0.js`.

7.  [Aktualizacja](../android/upgrade.html) Cordova odniesienia skrypt w pliku `www/index.html` (i innych plików, które zawierają odniesienia skrypt) aby wskazywało nowy plik `cordova-1.6.1.js`.

8.  Dodaj nowy plik `Cordova.plist` do projektu. Jest to konieczne, ponieważ nazwy usługi podstawowe wtyczki muszą zmienić do nich z Android i BlackBerry, jednolity pliku Cordova JavaScript (`cordova js`).

9.  Integrować żadnych ustawień, **wtyczek** i **ExternalHosts** wpisy, które miał w swojej **kopii zapasowej Cordova.plist** do nowych `Cordova.plist`.

10. Włączenie jakiegokolwiek kodu specyficzne dla projektu, który masz w swojej kopii zapasowej `AppDelegate.h` i `AppDelegate.m` do nowych plików `AppDelegate`. Każdy kod `UIWebViewDelegate` lub `CDVCommandDelegate` w `AppDelegate.m` musi iść do `MainViewController.m` teraz (patrz sekcje wypowiedziało się w tym pliku).

11. Włączenie jakiegokolwiek kodu specyficzne dla projektu, który masz w swojej kopii zapasowej `MainViewController.h` i `MainViewController.m` do nowych plików MainViewController.

12. Kliknij na ikonę projektu w Nawigatorze projektu, wybierz **projekt**, a następnie wybierz kartę **Ustawienia budować**.

13. Wprowadź **kompilator C / C + +/ Objective-C** w polu wyszukiwania.

14. Wybierz wartość **Apple LLVM kompilator 3.1**.

## Projekty modernizacji 1.4.x 1.5.0

1.  Zainstalować Cordova 1.5.0.

2.  Tworzenie nowego projektu i raz go uruchomić. Trzeba będzie niektórych aktywów od ten nowy projekt.

3.  Skopiuj plik `www/cordova-1.5.0.js` z nowego projektu w katalogu `www` i usunąć plik `www/phonegap-1.4.x.js`.

4.  [Aktualizacja](../android/upgrade.html) Cordova odniesienia skrypt w pliku `www/index.html` (i innych plików, które zawierają odniesienia skrypt) aby wskazywało nowy plik `cordova-1.5.0.js` Cordova.

5.  Znajdź `PhoneGap.framework` w nawigatora projektu, zaznacz go.

6.  Wpisz klucz **delegować** i usunąć `PhoneGap.framework` odniesienia w Nawigatorze projektu.

7.  Wpisz klucz kombinacja **Opcji-Command-A**, które powinno spadać w dół arkusz do dodawania plików do projektu (arkusz **Dodaj pliki...**). Upewnij się, że **utworzono grupy o wszelkie dodane foldery** przycisk wybrano.

8.  Wpisz klucz kombinacja **Shift-Command-G**, które powinno spadać w dół innym arkuszu, aby przejść do folderu (**Przejdź do folderu:** arkuszy).

9.  Wprowadź `/Users/Shared/Cordova/Frameworks/Cordova.framework` w **Przejdź do folderu:** arkusz, a następnie naciśnij przycisk **Przejdź**.

10. Naciśnij przycisk **Dodaj**, **Dodaj pliki...** arkuszu.

11. Wybierz `Cordova.framework` w Nawigatorze projektu.

12. Typ **opcji-polecenia-1** kombinację klawiszy, aby pokazać **Plik inspektor**.

13. Wybierz **Ścieżkę bezwzględną** w **Pliku inspektor** spadać-w dół menu dla **lokalizacji**.

14. Wpisz klucz kombinacja **Opcji-Command-A**, które powinno spadać w dół arkusz do dodawania plików do projektu (arkusz **Dodaj pliki...**). Upewnij się, że **utworzono grupy o wszelkie dodane foldery** przycisk wybrano.

15. Wpisz klucz kombinacja **Shift-Command-G**, które powinno spadać w dół innym arkuszu, aby przejść do folderu (**Przejdź do folderu:** arkuszy).

16. Wprowadź `~/Documents/CordovaLib/Classes/deprecated` w **Przejdź do folderu:** arkusz, a następnie naciśnij przycisk **Przejdź**.

17. Naciśnij przycisk **Dodaj**, **Dodaj pliki...** arkuszu.

18. W `AppDelegate.h`, `AppDelegate.m` i `MainViewController.h` pliki zastąpić cały `#ifdef PHONEGAP_FRAMEWORK` bloku:
    
        #import "CDVDeprecated.h"
        

19. Kliknij na **ikonę projektu** w Nawigatorze projektu, wybierz **miejsce docelowe**, a następnie wybierz kartę **Ustawienia budować**.

20. Poszukiwanie **ścieżki wyszukiwania w ramach**.

21. Zastąpić istniejącą `/Users/Shared/Cordova/Frameworks`.

22. Szukaj **preprocesora makra**.

23. Pierwsza wartość (połączone), Zamień wartość z **CORDOVA_FRAMEWORK = YES**.

24. Wybierz kartę **Faz budowy**.

25. Rozwiń węzeł, **Uruchom skrypt**.

26. Zastąpienie wszelkich wystąpień **PhoneGap** **Cordova**.

27. Znajdź plik `PhoneGap.plist` w Nawigatorze projektu i kliknij na pliku, gdy do wprowadź nazwę trybu edycji.

28. Zmienić nazwę `PhoneGap.plist` wobec `Cordova.plist`.

29. Kliknij prawym przyciskiem myszy na `Cordova.plist` i wybierz **Otwórz jako → kod źródłowy**.

30. Naciśnij **Opcję-polecenia-F**, wybierz **zastąpić** z listy rozwijanej u góry po lewej stronie okna źródłowego.

31. Wprowadź `com.phonegap` dla ciąg wyszukiwania i `org.apache.cordova` Zamień ciąg, a następnie naciśnij przycisk **Zamień wszystko**.

32. Wprowadź **PG** Znajdź ciąg i **CDV** Zamień ciąg, a następnie naciśnij przycisk **Zamień wszystko**.

33. Naciśnij klawisz **Command-B** do budowy. Masz jeszcze deprecations, które można pozbyć się w przyszłości (patrz: `CDVDeprecated.h`. Na przykład, Zamień klasy w kodzie, które używają PG * do CDV *).

## 1.4.1 projekty modernizacji 1.4.0

1.  Zainstalować Cordova 1.4.1.

2.  Zrób kopię zapasową `MainViewController.m`.

3.  Tworzenie nowego projektu. Trzeba będzie niektórych aktywów od ten nowy projekt.

4.  Skopiuj plik `MainViewController.m` z nowego projektu w 1.4.0-based projekt katalogu na dysku, zastępując stary plik (kopia zapasowa plików po raz pierwszy od kroku 2 powyżej).

5.  Dodaj plik `MainViewController.m` do projektu Xcode.

6.  Włączenie jakiegokolwiek kodu specyficzne dla projektu, który masz w twój poparty-w górze `MainViewController.m` do nowego pliku.

7.  [Aktualizacja](../android/upgrade.html) pliku `phonegap-1.4.0.js` jest opcjonalne, nic się nie zmieniło w JavaScript między 1.4.0 i 1.4.1.

## Projekty modernizacji 1.3.0 1.4.0

1.  Zainstalować Cordova 1.4.0.

2.  Zrób kopię zapasową `AppDelegate.m` i `AppDelegate.h` w projekcie.

3.  Tworzenie nowego projektu. Trzeba będzie niektórych aktywów od ten nowy projekt.

4.  Skopiuj następujące pliki z nowego projektu w 1.3.0-based projekt katalogu na dysku, zastępując wszystkie stare pliki (backup plików najpierw z kroku 2 powyżej):
    
        AppDelegate.h
        AppDelegate.m
        MainViewController.h
        MainViewController.m
        MainViewController.xib
        

5.  Dodaj wszystkie `MainViewController` pliki na swój projekt Xcode.

6.  Skopiuj plik `www/phonegap-1.4.0.js` z nowego projektu w katalogu `www` i usunąć plik `www/phonegap-1.3.0.js`.

7.  [Aktualizacja](../android/upgrade.html) Cordova odniesienia skrypt w pliku `www/index.html` (i innych plików, które zawierają odniesienia skrypt) wskaż plik nowy `telefon 1.4.0.js`.

8.  Dodaj nowy wpis w `Plugins` w `PhoneGap.plist` pliku. Kluczem do sukcesu jest `com.phonegap.battery` , a wartość jest`PGBattery`.

9.  Włączenie jakiegokolwiek kodu specyficzne dla projektu, który masz w swojej kopii zapasowej `AppDelegate.h` i `AppDelegate.m` do nowych plików AppDelegate.

## Projekty modernizacji 1.2.0 1.3.0

1.  Zainstalować Cordova 1.3.0.

2.  Zrób kopię zapasową `AppDelegate.m` i `AppDelegate.h` w projekcie.

3.  Tworzenie nowego projektu. Trzeba będzie niektórych aktywów od ten nowy projekt.

4.  Skopiuj następujące pliki z nowego projektu w 1.2.0-based projekt katalogu na dysku, zastępując wszystkie stare pliki (backup plików najpierw z kroku 2 powyżej):
    
        AppDelegate.h
        AppDelegate.m
        MainViewController.h
        MainViewController.m
        MainViewController.xib
        

5.  Dodaj wszystkie `MainViewController` pliki na swój projekt Xcode.

6.  Skopiuj plik `www/phonegap-1.3.0.js` z nowego projektu w katalogu `www` i usunąć plik `www/phonegap-1.2.0.js`.

7.  [Aktualizacja](../android/upgrade.html) Cordova odniesienia skrypt w pliku `www/index.html` (i innych plików, które zawierają odniesienia skrypt) wskaż plik nowy `telefon 1.3.0.js`.

8.  Dodaj nowy wpis w `Plugins` w `PhoneGap.plist` pliku. Kluczem do sukcesu jest `com.phonegap.battery` , a wartość jest`PGBattery`.

9.  Włączenie jakiegokolwiek kodu specyficzne dla projektu, który masz w swojej kopii zapasowej `AppDelegate.h` i `AppDelegate.m` do nowych plików AppDelegate.

## Projekty modernizacji 1.1.0 1.2.0

1.  Zainstalować Cordova 1.2.0.

2.  Zrób kopię zapasową `AppDelegate.m` i `AppDelegate.h` w projekcie.

3.  Tworzenie nowego projektu. Trzeba będzie niektórych aktywów od ten nowy projekt.

4.  Skopiuj następujące pliki z nowego projektu w 1.1.0-based projekt katalogu na dysku, zastępując wszystkie stare pliki (backup plików najpierw z kroku 2 powyżej):
    
        AppDelegate.h
        AppDelegate.m
        MainViewController.h
        MainViewController.m
        MainViewController.xib
        

5.  Dodaj wszystkie `MainViewController` pliki na swój projekt Xcode.

6.  Skopiuj plik `www/phonegap-1.2.0.js` z nowego projektu w katalogu `www` i usunąć plik `www/phonegap-1.1.0.js`.

7.  [Aktualizacja](../android/upgrade.html) Cordova odniesienia skrypt w pliku `www/index.html` (i innych plików, które zawierają odniesienia skrypt) wskaż plik nowy `telefon 1.2.0.js`.

8.  Dodaj nowy wpis w `Plugins` w `PhoneGap.plist` pliku. Kluczem do sukcesu jest `com.phonegap.battery` , a wartość jest`PGBattery`.

9.  Włączenie jakiegokolwiek kodu specyficzne dla projektu, który masz w swojej kopii zapasowej `AppDelegate.h` i `AppDelegate.m` do nowych plików AppDelegate.

## Projekty modernizacji 1.0.0 1.1.0

1.  Zainstalować Cordova 1.1.0.

2.  Zrób kopię zapasową `AppDelegate.m` i `AppDelegate.h` w projekcie.

3.  Tworzenie nowego projektu. Trzeba będzie niektórych aktywów od ten nowy projekt.

4.  Skopiuj następujące pliki z nowego projektu w 1.0.0-based projekt katalogu na dysku, zastępując wszystkie stare pliki (backup plików najpierw z kroku 2 powyżej):
    
        AppDelegate.h
        AppDelegate.m
        MainViewController.h
        MainViewController.m
        MainViewController.xib
        

5.  Dodaj wszystkie `MainViewController` pliki na swój projekt Xcode.

6.  Skopiuj plik `www/phonegap-1.1.0.js` z nowego projektu w katalogu `www` i usunąć plik `www/phonegap-1.0.0.js`.

7.  [Aktualizacja](../android/upgrade.html) Cordova odniesienia skrypt w pliku `www/index.html` (i innych plików, które zawierają odniesienia skrypt) wskaż plik nowy `telefon 1.1.0.js`.

8.  Dodaj nowy wpis w `Plugins` w `PhoneGap.plist` pliku. Kluczem do sukcesu jest `com.phonegap.battery` , a wartość jest`PGBattery`.

9.  Włączenie jakiegokolwiek kodu specyficzne dla projektu, który masz w swojej kopii zapasowej `AppDelegate.h` i `AppDelegate.m` do nowych plików AppDelegate.

## Projekty modernizacji 0.9.6 1.0.0

1.  Zainstalować Cordova 1.0.0.

2.  Zrób kopię zapasową `AppDelegate.m` i `AppDelegate.h` w projekcie.

3.  Tworzenie nowego projektu. Trzeba będzie niektórych aktywów od ten nowy projekt.

4.  Skopiuj następujące pliki z nowego projektu w 0.9.6-based projekt katalogu na dysku, zastępując wszystkie stare pliki (backup plików najpierw z kroku 2 powyżej):
    
        AppDelegate.h
        AppDelegate.m
        MainViewController.h
        MainViewController.m
        MainViewController.xib
        

5.  Dodaj wszystkie `MainViewController` pliki na swój projekt Xcode.

6.  Skopiuj plik `www/phonegap-1.0.0.js` z nowego projektu w katalogu `www` i usunąć plik `www/phonegap-0.9.6.js`.

7.  [Aktualizacja](../android/upgrade.html) Cordova odniesienia skrypt w pliku `www/index.html` (i innych plików, które zawierają odniesienia skrypt) wskaż plik nowy `telefon 1.0.0.js`.

8.  Dodaj nowy wpis w `Plugins` w `PhoneGap.plist` pliku. Kluczem do sukcesu jest `com.phonegap.battery` , a wartość jest`PGBattery`.

9.  Włączenie jakiegokolwiek kodu specyficzne dla projektu, który masz w swojej kopii zapasowej `AppDelegate.h` i `AppDelegate.m` do nowych plików AppDelegate.