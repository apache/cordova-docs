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

title: Platform i Zarządzanie wersjami pluginów
---

# Platform i Zarządzanie wersjami pluginów

Od wersji starszej niż 4.3.0 Cordova zapewnia możliwość zapisać i przywrócić platform i wtyczek.

Funkcja ta umożliwia deweloperom zapisać i przywrócić ich aplikacji w znanym stanie bez konieczności sprawdzania w wszystkie platformy i plugin kodu źródłowego.

Polecenie 'Zapisz' zapisuje szczegółowe informacje na temat platformy aplikacji i wersje wtyczki w pliku config.xml. Krok "przywracanie" dzieje się automatycznie, gdy **"cordova prepare"** jest wydawane, Dokonywanie wykorzystania informacji uprzednio zapisane w pliku config.xml.

Jeden scenariusz gdzie możliwości zapisu/przywracania przydatna jest w dużych zespołów, które działają na app, z każdego członka zespołu, koncentrując się na platformie lub wtyczki. Ta funkcja ułatwia udostępnianie projektu i zmniejszyć ilość nadmiarowego kodu, który jest sprawdzany w repozytorium.

## Wersji platformy

### Zapisywanie platformy

Aby zapisać platformy, wydawać ten kolejne rozkazywać:

    $ cordova platform add <platform[@<version>] | directory | git_url> --save
    

Po uruchomieniu polecenia powyżej, wynikowy plik config.xml wygląda tak:

    <?xml version='1.0' encoding='utf-8'?>
        ...
        <engine name="android" spec="~4.0.0" />
        ...
    </xml>
    

Kilka przykładów:

  * **'Platforma cordova dodać android--zapisać'** => pobiera przypiętych wersję platformy android, dodaje go do projektu i następnie aktualizuje pliku config.xml.
  * **'Platforma cordova dodać android@3.7.0--zapisać'** => pobiera ten android platforma, wersja 3.7.0 od npm, dodaje go do projektu, a następnie aktualizuje pliku config.xml.
  * **'Platforma cordova dodać Androida @https://github.com/apache/cordova-android.git--zapisać'** => klonów repozytorium określonego cordova-android, dodaje ten android platforma do projektu, a następnie aktualizuje plik config.xml i wskaż jego wersji git określonego adresu url.
  * **"platforma cordova Dodaj C:/ścieżka/do/android/platformy--zapisać"** => pobiera platformy android z określonego katalogu, dodaje go do projektu, a następnie aktualizuje plik config.xml i wskaż katalog.

### Masą oszczędność platformy istniejącego projektu

'--save ' flaga opisanych powyżej jest użyteczna tylko podczas ty zapamiêtaæ wobec używać ono podczas dodawania platformy. Jeśli masz istniejącego projektu i zapisać wszystkie aktualnie dodane platformy w projekcie, można użyć:

    $ cordova platform save
    

### Uaktualnianie / usuwanie platformy

Istnieje również możliwość aktualizacji/usunąć z pliku config.xml podczas polecenia 'cordova platformę aktualizacji"i"Usuń cordova platformy":

    $ cordova platform update <platform[@<version>] | directory | git_url> --save
    $ cordova platform remove <platform> --save
    

Kilka przykładów:

  * **'Zapisz cordova aktualizacji platformy android--'** => oprócz aktualizacji platformy android do wersji przypięty, [Aktualizacja](../guide/platforms/android/upgrade.html) pliku config.xml wpis
  * **'Platforma cordova aktualizacji android@3.8.0--zapisać'** => oprócz aktualizacji platformy android do wersji 3.8.0, [Aktualizacja](../guide/platforms/android/upgrade.html) pliku config.xml wpis
  * **'Platforma cordova aktualizacji /path/to/android/platform--zapisać'** => oprócz aktualizacji platformy android do wersji w folderze, [Aktualizacja](../guide/platforms/android/upgrade.html) pliku config.xml wpis
  * **'Platforma cordova usunąć android--zapisać'** => usuwa platformy android z projektu i usuwa jego wpisu z pliku config.xml.

### Przywracanie platformy

Platformy są automatycznie przywracane z pliku config.xml po uruchomieniu polecenia **"cordova przygotować"** .

Jeśli dodasz platforma bez określania wersji/folder/git_url, wersja wobec rata pochodzi z pliku config.xml, **Jeśli znalezione**.

Przykład:

Załóżmy, że plik config.xml zawiera następujący wpis:

    <?xml version='1.0' encoding='utf-8'?>
        ...
        <engine name="android" spec="3.7.0" />
        ...
    </xml>
    

Po uruchomieniu polecenia **"Dodaj cordova platformy android"** (nie ma wersji/folder/git_url określony), zostanie zainstalowana platforma "android@3.7.0" (jako źródło pliku config.xml).

* * *

## Wersji wtyczki

*(Polecenia wtyczki są zwierciadłem polecenia plugin)*

### Zapisywanie wtyczek

Aby zapisać plugin, wydawać ten kolejne rozkazywać:

    $ cordova plugin add <plugin[@<version>] | directory | git_url> --save
    

Po uruchomieniu polecenia powyżej, wynikowy plik config.xml wygląda tak:

    <?xml version='1.0' encoding='utf-8'?>
        ...
        <plugin name="cordova-plugin-console" spec="~1.0.0" />
        ...
    </xml>
    

Kilka przykładów:

  * **'cordova plugin dodać cordova-plugin konsoli - Zapisz'** => pobiera przypiętych wersje konsoli plugin, dodaje go do projektu i następnie aktualizuje pliku config.xml.
  * **'cordova plugin dodać cordova-plugin-console@0.2.13--zapisać'** => pobiera android plugin, wersja 0.2.13 z npm, dodaje go do projektu, a następnie aktualizuje pliku config.xml.
  * **'cordova plugin dodać https://github.com/apache/cordova-plugin-console.git--zapisać'** => klonów repozytorium wtyczki konsoli określonego, dodaje konsoli plugin do projektu, a następnie aktualizuje plik config.xml i wskaż jego wersji git określonego adresu url.
  * **"cordova wtyczki Dodaj C:/ścieżka/do/konsole/plugin--zapisać"** => pobiera wtyczki konsoli z określonego katalogu, dodaje go do projektu, a następnie aktualizuje plik config.xml i wskaż katalog.

### Masą oszczędność wtyczki istniejącego projektu

'--Zapisać ' flaga opisanych powyżej jest użyteczna tylko podczas ty zapamiêtaæ wobec używać ono podczas dodawania plugin. Jeśli masz istniejącego projektu i zapisać wszystkie aktualnie dodane wtyczki w projekcie, można użyć:

    $ cordova plugin save
    

### Uaktualnianie / usuwanie pluginów

Istnieje również możliwość aktualizacji/usunąć z pliku config.xml podczas polecenia 'cordova plugin aktualizacji"i"Usuń cordova plugin":

    $ cordova plugin update <plugin[@<version>] | directory | git_url> --save
    $ cordova plugin remove <plugin> --save
    

Kilka przykładów:

  * **'cordova plugin aktualizacja cordova-plugin konsoli - Zapisz'** => oprócz aktualizacji konsoli plugin do wersja przypiętych, [Aktualizacja](../guide/platforms/android/upgrade.html) pliku config.xml wpis
  * **'cordova plugin aktualizacja cordova-plugin-console@0.2.13--zapisać'** => oprócz aktualizacji Androida wtyczki do wersji 3.8.0, [Aktualizacja](../guide/platforms/android/upgrade.html) pliku config.xml wpis
  * **'cordova plugin aktualizacja /path/to/console/plugin--zapisać'** => poza aktualizacja wtyczki do wersji w folderze, [Aktualizacja](../guide/platforms/android/upgrade.html) pliku config.xml wpis
  * **'cordova plugin Usuń cordova-plugin konsoli - Zapisz'** => usuwa wtyczki konsoli z projektu i usuwa jego wpisu z pliku config.xml.

### Przywracanie wtyczek

Wtyczki są automatycznie przywracane z pliku config.xml po uruchomieniu polecenia **"cordova przygotować"** .

Jeśli możesz dodać plugin bez określania wersji/folder/git_url, wersja mają być zainstalowane pochodzi z pliku config.xml, **Jeśli znalezione**.

Przykład:

Załóżmy, że plik config.xml zawiera następujący wpis:

    <?xml version='1.0' encoding='utf-8'?>
        ...
        <plugin name="cordova-plugin-console" spec="0.2.11" />
        ...
    </ xml>
    

Po uruchomieniu polecenia **"cordova wtyczki Dodaj cordova-plugin konsoli"** (nie ma wersji/folder/git_url określony), zostanie zainstalowany plugin 'cordova-plugin-console@0.2.11' (jako źródło pliku config.xml).