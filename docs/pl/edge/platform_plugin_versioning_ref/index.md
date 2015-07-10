---
license: Licensed to the Apache Software Foundation (ASF) under one
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
        <engine name="android" spec="^4.0.0" />
        ...
    </ xml>
    

Przykłady: * **'cordova platform add android --save'** => pobiera przypiętych wersję platformy android, dodaje go do projektu i następnie aktualizuje pliku config.xml. **'cordova platform add android@3.7.0 --save'** => pobiera ten android platforma, wersja 3.7.0 od npm, dodaje go do projektu i następnie aktualizuje pliku config.xml. **'cordova platform add android@https://github.com/apache/cordova-android.git​ --save'** => klonów repozytorium określonego cordova-android, dodaje ten android platforma do projektu, a następnie aktualizuje plik config.xml i wskaż jego wersji git określonego adresu url. **"cordova platform add C:/path/to/android/platform --save"** => pobiera platformy android z określonego katalogu, dodaje go do projektu, a następnie aktualizuje plik config.xml i wskaż katalog.

### Masą oszczędność platformy istniejącego projektu

'--save ' flaga opisanych powyżej jest użyteczna tylko podczas ty zapamiêtaæ wobec używać ono podczas dodawania platformy. Jeśli masz istniejącego projektu i zapisać wszystkie aktualnie dodane platformy w projekcie, można użyć:

    $ cordova platform save
    

### Uaktualnianie / usuwanie platformy

Istnieje również możliwość aktualizacji/usunąć z pliku config.xml podczas polecenia 'cordova platformę aktualizacji"i"Usuń cordova platformy":

    $ cordova platform update <platform[@<version>] | directory | git_url> --save
    $ cordova platform remove <platform> --save
    

Przykłady: * **'cordova platform update android --save'** => oprócz aktualizacji platformy android do wersji przypięty, Aktualizacja pliku config.xml wpis * **'cordova platform update android@3.8.0 --save'** => oprócz aktualizacji platformy android do wersji 3.8.0, Aktualizacja pliku config.xml wpis * **'cordova platform update /path/to/android/platform --save'** => oprócz aktualizacji platformy android do wersji w folderze, Aktualizacja pliku config.xml wpis * **'cordova platform remove android --save'** => usuwa platformy android z projektu i usuwa jego wpisu z pliku config.xml.

### Przywracanie platformy

  * Platformy są automatycznie przywracane z pliku config.xml po uruchomieniu polecenia **"cordova prepare"** .
  * Jeśli dodasz platforma bez określania wersji/folder/git_url, wersja wobec rata pochodzi z pliku config.xml, **Jeśli Znalezione**. 
      * Przykład: Załóżmy, że plik config.xml zawiera następujący wpis: <?xml version="1.0" encoding='utf-8'? >... <engine name="android" spec="3.7.0" /> ... < / xml > po uruchomieniu polecenia 
        
        **"cordova platform add android"** (nie version/folder/git_url określony), zostanie zainstalowana platforma "android@3.7.0" (jako źródło pliku config.xml).

* * *

## Wersji wtyczki

*(Polecenia wtyczki są zwierciadłem polecenia plugin)*

### Zapisywanie wtyczek

Aby zapisać plugin, wydawać ten kolejne rozkazywać:

    $ cordova plugin add <plugin[@<version>] | directory | git_url> --save
    

Po uruchomieniu polecenia powyżej, wynikowy plik config.xml wygląda tak:

    <?xml version='1.0' encoding='utf-8'?>
        ...
        <plugin name="cordova-plugin-console" spec="^1.0.0" />
        ...
    </ xml>
    

Przykłady: * **'cordova plugin add cordova-plugin-console --save'** => pobiera przypiętych wersje konsoli plugin, dodaje go do projektu i następnie aktualizuje pliku config.xml. **'cordova plugin add cordova-plugin-console@0.2.13 --save'** => pobiera android plugin, wersja 0.2.13 z npm, dodaje go do projektu i następnie aktualizuje pliku config.xml. **'cordova plugin add https://github.com/apache/cordova-plugin-console.git --save'** => klonów repozytorium wtyczki konsoli określonego, dodaje konsoli plugin do projektu, a następnie aktualizuje plik config.xml i wskaż jego wersji git określonego adresu url. **'cordova plugin add C:/path/to/console/plugin --save'** => pobiera wtyczki konsoli z określonego katalogu, dodaje go do projektu, a następnie aktualizuje plik config.xml i wskaż katalog.

### Masą oszczędność wtyczki istniejącego projektu

'--save ' flaga opisanych powyżej jest użyteczna tylko podczas ty zapamiêtaæ wobec używać ono podczas dodawania plugin. Jeśli masz istniejącego projektu i zapisać wszystkie aktualnie dodane wtyczki w projekcie, można użyć:

    $ cordova plugin save
    

### Uaktualnianie / usuwanie pluginów

Istnieje również możliwość aktualizacji/usunąć z pliku config.xml podczas polecenia 'cordova plugin aktualizacji"i"Usuń cordova plugin":

    $ cordova plugin update <plugin[@<version>] | directory | git_url> --save
    $ cordova plugin remove <plugin> --save
    

Przykłady: * **'cordova plugin update cordova-plugin-console --save'** => oprócz aktualizacji konsoli plugin do wersja przypiętych, Aktualizacja pliku config.xml wpis * **'cordova plugin update cordova-plugin-console@0.2.13 --save'** => oprócz aktualizacji Androida wtyczki do wersji 3.8.0, Aktualizacja pliku config.xml wpis * **'cordova plugin update /path/to/console/plugin --save'** => poza aktualizacja wtyczki do wersji w folderze, Aktualizacja pliku config.xml wpis * **'cordova plugin remove cordova-plugin-console --save'** => usuwa wtyczki konsoli z projektu i usuwa jego wpisu z pliku config.xml.

### Przywracanie wtyczek

  * Wtyczki są automatycznie przywracane z pliku config.xml po uruchomieniu polecenia **"cordova prepare"** .
  * Jeśli możesz dodać plugin bez określania wersji/folder/git_url, wersja mają być zainstalowane pochodzi z pliku config.xml, **Jeśli Znalezione**. 
      * Przykład: Załóżmy, że plik config.xml zawiera następujący wpis: <?xml version="1.0" encoding='utf-8'? >... <0>...</0> < / xml > po uruchomieniu polecenia 
        
        **"cordova wtyczki Dodaj cordova-plugin konsoli"** (nie ma wersji/folder/git_url określony), zostanie zainstalowany plugin 'cordova-plugin-console@0.2.11' (jako źródło pliku config.xml).