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

title: Aktualizacja
---

# Aktualizacja

Ten poradnik pokazuje jak zmodyfikować Android projektów do uaktualnienia ze starszych wersji Cordova. Większość tych instrukcji ma zastosowanie do projektów utworzonych w starszych zestaw narzędzi wiersza polecenia, które poprzedzają `cordova` Narzędzia CLI. Zobacz interfejs wiersza poleceń do informacji jak zaktualizować do wersji CLI.

## Uaktualnienie do 4.0.0

Istnieją konkretne kroki uaktualnienia wymagane do skorzystania z istotnych zmian w 4.0.0. Po pierwsze wspólne kroki uaktualnienia są potrzebne jak poniżej.

Projekty-CLI, uruchom:

        bin/update path/to/project
    

Dla projektów CLI:

1.  Aktualizacja `cordova` wersji CLI. Zobacz interfejs wiersza poleceń.

2.  Uruchom `cordova platform update android` w istniejących projektach.

### Uaktualnianie biała

Wszystkie funkcje Biała jest teraz realizowane za pośrednictwem wtyczki. Bez wtyczki Twoja aplikacja jest już chronione przez Biała po uaktualnieniu do 4.0.0. Cordova ma dwie wtyczki białej listy, które zapewniają różne poziomy ochrony.

1.  Plugin `cordova-plugin-whitelist` *(zalecane)*
    
    *   Ten plugin jest wysoce zalecane, ponieważ jest bardziej bezpieczne i konfigurowalne niż biała w poprzednich wersjach
    *   Zobacz [cordova-plugin-whitelist][1] szczegóły na zmiany konfiguracja wymagane
    *   Run: `cordova plugin add cordova-plugin-crosswalk-webview`

2.  Plugin `cordova-plugin-legacy-whitelist`
    
    *   Plugin daje takie samo zachowanie białej jak poprzednie wersje. Zobacz [cordova-plugin-legacy-whitelist][2]
    *   Wymagane są żadne zmiany konfiguracji, ale zapewnia mniejszą ochronę niż zalecane plugin
    *   Run: `cordova plugin add cordova-plugin-legacy-whitelist`

 [1]: https://github.com/apache/cordova-plugin-whitelist
 [2]: https://github.com/apache/cordova-plugin-legacy-whitelist

### Za pomocą widoku sieci Web przejście dla pieszych

Domyślnie aplikacja będzie nadal korzystać WebView oferowanego przez urządzenie. Czy chcesz zamiast tego użyj widoku sieci Web przejście dla pieszych, po prostu dodać plugin przejście dla pieszych:

    cordova plugin add cordova-plugin-crosswalk-webview
    

Po dodaniu wtyczki, aplikacji dostanie WebView pieszych są zainstalowane i skonfigurowane poprawnie.

### Aktualizacja wtyczki ekranu powitalnego

Jeśli Twoja aplikacja sprawia, że korzystanie z ekranu powitalnego, że funkcjonalność została przeniesiona do pluginu. Opcje konfiguracja dla ekrany powitalne w aplikacjach są niezmienione. Krok tylko uaktualnienia, wymagane jest aby dodać plugin:

    cordova plugin add cordova-plugin-splashscreen
    

## Uaktualnienie do 3.7.1 od 3.6.0

Projekty-CLI, uruchom:

        bin/update path/to/project
    

Dla projektów CLI:

1.  Aktualizacja `cordova` wersji CLI. Zobacz interfejs wiersza poleceń.

2.  Uruchomić `cordova platform update android` w istniejących projektach.

## Uaktualnienie do 3.3.0 od 3.2.0

Wykonaj te same instrukcje co `3.2.0`.

Począwszy od 3.3.0, Cordova runtime jest teraz skompilowany jako bibliotekę Android w miejsce przepisów Jar. Będzie to miało żadnego wpływu na sposób użycia wiersza polecenia, ale IDE użytkownicy będą musieli importować nowo dodane projektu `MyProject-CordovaLib` do ich obszaru roboczego.

## Ulepszanie wobec 3.2.0 od 3.1.0

Dla projektów, które zostały utworzone z cordova CLI:

1.  Aktualizacja `cordova` wersji CLI. Zobacz interfejs wiersza poleceń.

2.  Run `cordova platform update android`

Dla projektów nie stworzony z cordova CLI Uruchom:

        bin/update <project_path>
    

**Ostrzeżenie:** Na Android 4.4 - Android 4.4.3, tworząc plik wprowadzania elementu typu="file" nie zostanie otwarte okno wyboru pliku. To jest regresja z chromu na Android i problem może być odtworzone w standalone Chrom przeglądarka na Androidzie (patrz http://code.google.com/p/android/issues/detail?id=62220) sugeruje workaround jest wobec używać FileTransfer i plik wtyczki dla Android 4.4. Można posłuchać na zdarzenie onClick, z typem danych type = "file" a następnie pojawiają się wyboru plików interfejsu użytkownika. Aby powiązać z przesyłanie danych formularza, można użyć JavaScript aby dołączyć wartości formularza do wieloczęściowego żądanie POST, który sprawia, że FileTransfer.

## Uaktualnienie do 3.1.0 od 3.0.0

Dla projektów, które zostały utworzone z cordova CLI:

1.  Aktualizacja `cordova` wersji CLI. Zobacz interfejs wiersza poleceń.

2.  Run `cordova platform update android`

Dla projektów nie stworzony z cordova CLI Uruchom:

        bin/update <project_path>
    

## Uaktualnienia do consoli (3.0.0) z 2.9.0

1.  Tworzenie nowego projektu Apache Cordova 3.0.0 za pomocą CLI, cordova, zgodnie z opisem w interfejs wiersza poleceń.

2.  Dodać platform cordova projektu, na przykład: `dodać cordova platformy android`.

3.  Skopiuj zawartość katalogu `www` projektu do katalogu `www` w katalogu głównym projektu cordova, który właśnie utworzyłeś.

4.  Skopiuj rodzimych aktywów od starego projektu do odpowiednich katalogów na `platformach lub android`: jest to katalog, gdzie istnieje projektu cordova-android rodzimych.

5.  Użyj narzędzia CLI cordova instalowac pluginy, czego potrzebujesz. Należy zauważyć, że CLI obsługuje wszystkie podstawowe API jako wtyczek, dzięki czemu mogą one potrzebować do dodania. Tylko 3.0.0 wtyczki są kompatybilne z CLI.

## Uaktualnienie do 3.0.0 z 2.9.0

1.  Tworzenie nowego projektu Apache Cordova Android.

2.  Skopiuj zawartość katalogu `www` do nowego projektu.

3.  Skopiuj rodzimych aktywów Android z katalogu `res` do nowego projektu.

4.  Kopiujemy jakieś pluginy, instalowanego z podkatalogów `src` do nowego projektu.

5.  Upewnij się, że wszelki uaktualnić przestarzałe odniesienia `< plugin >` z pliku `config.xml` starych nowych specyfikacji `<feature>` .

6.  Zaktualizować wszelkie odniesienia do pakietu `org.apache.cordova.api` do `org.apache.cordova`.
    
    **Uwaga**: wszystkie podstawowe API zostały usunięte i musi być zainstalowany jako wtyczki. Aby uzyskać szczegółowe informacje, zapoznaj się z za pomocą Plugman do zarządzania Plugins przewodnik.

## Upgrade do 2.9.0 od 2.8.0

1.  Run `bin/update <project_path>`.

## Uaktualnienie do 2.8.0 od 2.7.0

1.  Usunąć `cordova-2.7.0.jar` z projektu w katalogu `libs` .

2.  Dodać `cordova-2.8.0.jar` do projektu w katalogu `libs` .

3.  Jeśli możesz użyć Eclipse, proszę odświeżyć projektu Eclipse i czynić pewien czysty.

<!-- SS Eclipse -->

1.  Skopiuj nowe `cordova.js` do projektu.

2.  Uaktualnić twój HTML używać nowy plik `cordova.js` .

3.  Skopiuj plik `res/xml/config.xml` do `framework/res/xml/config.xml`.

4.  Aktualizacja `framework/res/xml/config.xml` mają podobne ustawienia, jak to miało miejsce wcześniej.

5.  Skopiuj pliki z `bin/templates/cordova` do projektu `cordova` katalogu.

## Uaktualnić do 2.7.0 2.6.0

1.  Usunąć `cordova-2.6.0.jar` z projektu w katalogu `libs` .

2.  Dodać `cordova-2.7.0.jar` do projektu w katalogu `libs` .

3.  Jeśli możesz użyć Eclipse, proszę odświeżyć projektu Eclipse i czynić pewien czysty.

4.  Skopiuj nowe `cordova-2.7.0.js` do projektu.

5.  Uaktualnić twój HTML za pomocą nowego pliku `cordova-2.7.0.js` .

6.  Kopiowanie `res/xml/config.xml` do meczu`framework/res/xml/config.xml`.

7.  Aktualizacja `framework/res/xml/config.xml` mają podobne ustawienia, jak to miało miejsce wcześniej.

8.  Skopiuj pliki z `bin/templates/cordova` do projektu `cordova` katalogu.

## Uaktualnienie do 2.6.0 z 2.5.0

1.  Usunąć `cordova-2.5.0.jar` z projektu w katalogu `libs` .

2.  Dodać `cordova-2.6.0.jar` do projektu w katalogu `libs` .

3.  Jeśli możesz użyć Eclipse, proszę odświeżyć projektu Eclipse i czynić pewien czysty.

4.  Skopiuj nowe `cordova-2.6.0.js` do projektu.

5.  Uaktualnić twój HTML do używania nowych `cordova-2.6.0.js` pliku.

6.  Kopiowanie `res/xml/config.xml` do meczu`framework/res/xml/config.xml`.

7.  Aktualizacja `framework/res/xml/config.xml` mają podobne ustawienia, jak to miało miejsce wcześniej.

8.  Skopiuj pliki z `bin/templates/cordova` do projektu `cordova` katalogu.

Uruchom `bin/update <project>` ścieżka projektu wymienione w katalogu źródłowym Cordova.

## Uaktualnienie do 2.5.0 od 2.4.0

1.  Usunąć `cordova-2.4.0.jar` z projektu w katalogu `libs` .

2.  Dodać `cordova-2.5.0.jar` do projektu w katalogu `libs` .

3.  Jeśli możesz użyć Eclipse, proszę odświeżyć projektu Eclipse i czynić pewien czysty.

4.  Skopiuj nowe `cordova-2.5.0.js` do projektu.

5.  Uaktualnić twój HTML do używania nowych `cordova-2.5.0.js` pliku.

6.  Kopiowanie `res/xml/config.xml` do meczu`framework/res/xml/config.xml`.

7.  Aktualizacja `framework/res/xml/config.xml` mają podobne ustawienia, jak to miało miejsce wcześniej.

8.  Skopiuj pliki z `bin/templates/cordova` do projektu `cordova` katalogu.

## Uaktualnienie do 2.4.0 od 2.3.0

1.  Usunąć `cordova-2.3.0.jar` z projektu w katalogu `libs` .

2.  Dodać `cordova-2.4.0.jar` do projektu w katalogu `libs` .

3.  Jeśli możesz użyć Eclipse, proszę odświeżyć projektu Eclipse i czynić pewien czysty.

4.  Skopiuj nowe `cordova-2.4.0.js` do projektu.

5.  Uaktualnić twój HTML do używania nowych `cordova-2.4.0.js` pliku.

6.  Kopiowanie `res/xml/config.xml` do meczu`framework/res/xml/config.xml`.

7.  Skopiuj pliki z `bin/templates/cordova` do projektu `cordova` katalogu.

## Uaktualnienie do 2.3.0 od 2.2.0

1.  Usunąć `cordova-2.2.0.jar` z projektu w katalogu `libs` .

2.  Dodać `cordova-2.3.0.jar` do projektu w katalogu `libs` .

3.  Jeśli możesz użyć Eclipse, proszę odświeżyć projektu Eclipse i czynić pewien czysty.

4.  Skopiuj nowe `cordova-2.3.0.js` do projektu.

5.  Uaktualnić twój HTML do używania nowych `cordova-2.3.0.js` pliku.

6.  Kopiowanie `res/xml/config.xml` do meczu`framework/res/xml/config.xml`.

7.  Skopiuj pliki z `bin/templates/cordova` do projektu `cordova` katalogu.

## Uaktualnienie do 2.2.0 z 2.1.0

1.  Usunąć `cordova-2.1.0.jar` z projektu w katalogu `libs` .

2.  Dodać `cordova-2.2.0.jar` do projektu w katalogu `libs` .

3.  Jeśli możesz użyć Eclipse, proszę odświeżyć projektu Eclipse i czynić pewien czysty.

4.  Skopiuj nowe `cordova-2.2.0.js` do projektu.

5.  Uaktualnić twój HTML do używania nowych `cordova-2.2.0.js` pliku.

6.  Kopiowanie `res/xml/config.xml` do meczu`framework/res/xml/config.xml`.

7.  Skopiuj pliki z `bin/templates/cordova` do projektu `cordova` katalogu.

## Uaktualnienie do 2.1.0 z 2.0.0

1.  Usunąć `cordova-2.0.0.jar` z projektu w katalogu `libs` .

2.  Dodać `cordova-2.1.0.jar` do projektu w katalogu `libs` .

3.  Jeśli możesz użyć Eclipse, proszę odświeżyć projektu Eclipse i czynić pewien czysty.

4.  Skopiuj nowe `cordova-2.1.0.js` do projektu.

5.  Uaktualnić twój HTML do używania nowych `cordova-2.1.0.js` pliku.

6.  Kopiowanie `res/xml/config.xml` do meczu`framework/res/xml/config.xml`.

7.  Skopiuj pliki z `bin/templates/cordova` do projektu `cordova` katalogu.

## Uaktualnienie do 2.0.0 od 1.9.0

1.  Usunąć `cordova-1.9.0.jar` z projektu w katalogu `libs` .

2.  Dodać `cordova-2.0.0.jar` do projektu w katalogu `libs` .

3.  Jeśli możesz użyć Eclipse, proszę odświeżyć projektu Eclipse i czynić pewien czysty.

4.  Skopiuj nowe `cordova-2.0.0.js` do projektu.

5.  Uaktualnić twój HTML do używania nowych `cordova-2.0.0.js` pliku.

6.  Kopiowanie `res/xml/config.xml` do meczu`framework/res/xml/config.xml`.

W 2.0.0 wersji pliku `config.xml` łączy i zastępuje `cordova.xml` i `plugins.xml`. Stare pliki są przestarzałe i chociaż nadal pracują w 2.0.0, przestanie działać w przyszłym wydaniu.

## Uaktualnić do 1.9.0 1.8.1

1.  Usunąć `cordova-1.8.0.jar` z projektu w katalogu `libs` .

2.  Dodać `cordova-1.9.0.jar` do projektu w katalogu `libs` .

3.  Jeśli możesz użyć Eclipse, proszę odświeżyć projektu Eclipse i czynić pewien czysty.

4.  Skopiuj nowe `cordova-1.9.0.js` do projektu.

5.  Uaktualnić twój HTML za pomocą nowego pliku `cordova-1.9.0.js` .

6.  Aktualizacja `res/xml/plugins.xml` do meczu`framework/res/xml/plugins.xml`.

Ze względu na wprowadzenie `CordovaWebView` w 1.9.0 wydania, wtyczki innych firm mogą nie działać. Te pluginy musiał uzyskać kontekstu z `CordovaInterface` za pomocą `getContext()` lub `getActivity()`. Jeśli nie jesteś doświadczony programista Android, prosimy o kontakt z opiekunem plugin i dodać ten zadanie do ich zgłaszania błędów.

## Uaktualnienie do 1.8.0 z 1.8.0

1.  Usunąć `cordova-1.8.0.jar` z projektu w katalogu `libs` .

2.  Dodać `cordova-1.8.1.jar` do projektu w katalogu `libs` .

3.  Jeśli możesz użyć Eclipse, proszę odświeżyć projektu Eclipse i czynić pewien czysty.

4.  Skopiuj nowe `cordova-1.8.1.js` do projektu.

5.  Uaktualnić twój HTML za pomocą nowego pliku `cordova-1.8.1.js` .

6.  Aktualizacja `res/xml/plugins.xml` do meczu`framework/res/xml/plugins.xml`.

## Uaktualnienie do 1.8.0 z 1.7.0

1.  Usunąć `cordova-1.7.0.jar` z projektu w katalogu `libs` .

2.  Dodać `cordova-1.8.0.jar` do projektu w katalogu `libs` .

3.  Jeśli możesz użyć Eclipse, proszę odświeżyć projektu Eclipse i czynić pewien czysty.

4.  Skopiuj nowe `cordova-1.8.0.js` do projektu.

5.  Uaktualnić twój HTML do używania nowych `cordova-1.8.0.js` pliku.

6.  Aktualizacja `res/xml/plugins.xml` do meczu`framework/res/xml/plugins.xml`.

## Uaktualnienie do 1.8.0 z 1.7.0

1.  Usunąć `cordova-1.7.0.jar` z projektu w katalogu `libs` .

2.  Dodać `cordova-1.8.0.jar` do projektu w katalogu `libs` .

3.  Jeśli możesz użyć Eclipse, proszę odświeżyć projektu Eclipse i czynić pewien czysty.

4.  Skopiuj nowe `cordova-1.8.0.js` do projektu.

5.  Uaktualnić twój HTML do używania nowych `cordova-1.8.0.js` pliku.

6.  Aktualizacja `res/xml/plugins.xml` do meczu`framework/res/xml/plugins.xml`.

## Uaktualnić do 1.7.0 1.6.1

1.  Usunąć `cordova-1.6.1.jar` z projektu w katalogu `libs` .

2.  Dodać `cordova-1.7.0.jar` do projektu w katalogu `libs` .

3.  Jeśli możesz użyć Eclipse, proszę odświeżyć projektu Eclipse i czynić pewien czysty.

4.  Skopiuj nowe `cordova-1.7.0.js` do projektu.

5.  Aktualizacja `res/xml/plugins.xml` do meczu`framework/res/xml/plugins.xml`.

## Uaktualnić do 1.6.1 1.6.0

1.  Usunąć `cordova-1.6.0.jar` z projektu w katalogu `libs` .

2.  Dodać `cordova-1.6.1.jar` do projektu w katalogu `libs` .

3.  Jeśli możesz użyć Eclipse, proszę odświeżyć projektu Eclipse i czynić pewien czysty.

4.  Skopiuj nowe `cordova-1.6.1.js` do projektu.

5.  Aktualizacja `res/xml/plugins.xml` do meczu`framework/res/xml/plugins.xml`.

## Uaktualnić do 1.6.0 1.5.0

1.  Usunąć `cordova-1.5.0.jar` z projektu w katalogu `libs` .

2.  Dodać `cordova-1.6.0.jar` do projektu w katalogu `libs` .

3.  Jeśli możesz użyć Eclipse, proszę odświeżyć projektu Eclipse i czynić pewien czysty.

4.  Skopiuj nowe `cordova-1.6.0.js` do projektu.

5.  Uaktualnić twój HTML za pomocą nowego pliku `cordova-1.6.0.js` .

6.  Aktualizacja `res/xml/plugins.xml` do meczu`framework/res/xml/plugins.xml`.

7.  Zastąpić `res/xml/phonegap.xml` z `res/xml/cordova.xml` do `framework/res/xml/cordova.xml`.

## Uaktualnienie do 1.5.0 od 1.4.0

1.  Usunąć `telefon 1.4.0.jar` z projektu w katalogu `libs` .

2.  Dodać `cordova-1.5.0.jar` do projektu w katalogu `libs` .

3.  Jeśli możesz użyć Eclipse, proszę odświeżyć projektu Eclipse i czynić pewien czysty.

4.  Skopiuj nowe `cordova-1.5.0.js` do projektu.

5.  Uaktualnić twój HTML za pomocą nowego pliku `cordova-1.5.0.js` .

6.  Aktualizacja `res/xml/plugins.xml` do meczu`framework/res/xml/plugins.xml`.

7.  Zastąpić `res/xml/phonegap.xml` z `res/xml/cordova.xml` do `framework/res/xml/cordova.xml`.

## Uaktualnić do 1.4.0 1.3.0

1.  Usunąć `telefon 1.3.0.jar` z projektu w katalogu `libs` .

2.  Dodać `phonegap-1.4.0.jar` do projektu w katalogu `libs` .

3.  Jeśli możesz użyć Eclipse, proszę odświeżyć projektu Eclipse i czynić pewien czysty.

4.  Skopiuj nowy `phonegap-1.4.0.js` do projektu.

5.  Uaktualnić twój HTML, aby użyć pliku nowy `phonegap-1.4.0.js` .

6.  Aktualizacja `res/xml/plugins.xml` do meczu`framework/res/xml/plugins.xml`.

7.  Aktualizacja `res/xml/phonegap.xml` do meczu`framework/res/xml/phonegap.xml`.

## Uaktualnienie do wersji 1.3.0 z 1.2.0

1.  Usunąć `phonegap-1.2.0.jar` z projektu w katalogu `libs` .

2.  Dodać `phonegap-1.3.0.jar` do projektu w katalogu `libs` .

3.  Jeśli możesz użyć Eclipse, proszę odświeżyć projektu Eclipse i czynić pewien czysty.

4.  Skopiuj nowy `phonegap-1.3.0.js` do projektu.

5.  Uaktualnić twój HTML, aby użyć pliku nowy `phonegap-1.2.0.js` .

6.  Aktualizacja `res/xml/plugins.xml` do meczu`framework/res/xml/plugins.xml`.

7.  Aktualizacja `res/xml/phonegap.xml` do meczu`framework/res/xml/phonegap.xml`.

## Uaktualnienie do 1.2.0 z 1.1.0

1.  Usunąć `phonegap-1.1.0.jar` z projektu w katalogu `libs` .

2.  Dodać `phonegap-1.2.0.jar` do projektu w katalogu `libs` .

3.  Jeśli możesz użyć Eclipse, proszę odświeżyć projektu Eclipse i czynić pewien czysty.

4.  Skopiuj nowy `phonegap-1.2.0.js` do projektu.

5.  Uaktualnić twój HTML, aby użyć pliku nowy `phonegap-1.2.0.js` .

6.  Aktualizacja `res/xml/plugins.xml` do meczu`framework/res/xml/plugins.xml`.

7.  Aktualizacja `res/xml/phonegap.xml` do meczu`framework/res/xml/phonegap.xml`.

## Uaktualnić do 1.1.0 1.0.0

1.  Usunąć `phonegap-1.0.0.jar` z projektu w katalogu `libs` .

2.  Dodać `phonegap-1.1.0.jar` do projektu w katalogu `libs` .

3.  Jeśli możesz użyć Eclipse, proszę odświeżyć projektu Eclipse i czynić pewien czysty.

4.  Skopiuj nowy `phonegap-1.1.0.js` do projektu.

5.  Uaktualnić twój HTML, aby użyć pliku nowy `phonegap-.1.0.js` .

6.  Aktualizacja `res/xml/plugins.xml` do meczu`framework/res/xml/plugins.xml`.

## Uaktualnić do 1.0.0 0.9.6

1.  Usunąć `phonegap-0.9.6.jar` z projektu w katalogu `libs` .

2.  Dodać `phonegap-1.0.0.jar` do projektu w katalogu `libs` .

3.  Jeśli możesz użyć Eclipse, proszę odświeżyć projektu Eclipse i czynić pewien czysty.

4.  Skopiuj nowy `phonegap-1.0.0.js` do projektu.

5.  Uaktualnić twój HTML, aby użyć pliku nowy `phonegap-1.0.0.js` .

6.  Dodaj `res/xml/plugins.xml` do `framework/res/xml/plugins.xml`.