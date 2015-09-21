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

title: Za pomocą Plugman do zarządzania wtyczki
---

# Za pomocą Plugman do zarządzania wtyczki

Od wersji 3.0 naprzód Cordova implementuje wszystkie urządzenia API jako wtyczki i pozostawia je wyłączone domyślnie. Wspiera on także dwa różne sposoby, aby dodać i usunąć wtyczki, zależnie od wybranej pracy omówione w przeglądzie:

*   Jeśli używasz przepływu pracy między platformami, możesz użyć `cordova` CLI użyteczność wobec dodać wtyczki, jak opisano w interfejs wiersza poleceń. CLI modyfikuje wtyczki dla wszystkich platform określony na raz.

*   Jeśli używasz pracy zorientowane na platformie, używasz [Plugman][1] interfejs wiersza poleceń niższego poziomu, oddzielnie dla każdej platformy docelowej.

 [1]: https://github.com/apache/cordova-plugman/

Ta sekcja zawiera narzędzie Plugman szczegóły. Aby uzyskać więcej informacji na temat spożywania Plugman jako węzeł moduł lub modyfikowania kodu źródłowego Zobacz [plik README w repozytorium][2].

 [2]: https://github.com/apache/cordova-plugman/blob/master/README.md

## Instalacja Plugman

Aby zainstalować plugman, musi mieć [węzła][3] zainstalowane na komputerze. Następnie można uruchomić następujące polecenie z gdziekolwiek w środowisku zainstalować plugman na całym świecie, tak, że jest dostępny z dowolnego katalogu:

 [3]: http://nodejs.org/

    $ npm install -g plugman
    

Musi także mieć `git` na swoje `PATH` Aby móc zainstalować wtyczki bezpośrednio z git zdalnych adresów URL.

**Wskazówka**: Jeśli stwierdzisz, że po zainstalowaniu plugman z `npm` jesteś jeszcze w stanie uruchomić każdy `plugman` poleceń, upewnij się, że dodałeś `/npm/` katalogu na swoje`PATH`.

**Uwaga**: można pominąć ten krok, jeśli nie chcesz zatruwają swoje globalne `npm` nazw instalując Plugman na całym świecie. Jeśli jest to przypadek, a następnie podczas tworzenia projektu Cordova z powłoka narzędzia, będzie `node_modules` katalogu wewnątrz projektu, który zawiera Plugman. Ponieważ zrobił nie rata globalnie, musisz wywołać `node` dla każdego polecenia Plugman, na przykład `node
./node_modules/plugman/main.js -version` . Z resztą ten przewodnik zakłada, że można mieć zainstalowany Plugman na całym świecie, co oznacza, że można go wywołać tylko`plugman`.

## Tworzenie projektu Cordova

Zanim będzie można użyć Plugman, należy utworzyć projekt Cordova. Można to zrobić z interfejsu wiersza polecenia lub z dolnej skryptów powłoki poziom. Instrukcje dotyczące używania skryptów powłoki do tworzenia projektu znajdują się w wielu przewodnikach "Narzędzia wiersza polecenia" wymienionych na stronie platformy przewodników.

## Dodanie wtyczki

Skoro masz rata Plugman i stworzyli projekt Cordova, można rozpocząć Dodawanie pluginów na platformie z:

    $ plugman --platform <ios|amazon-fireos|android|blackberry10|wp8> --project <directory> --plugin <name|url|path> [--plugins_dir <directory>] [--www <directory>] [--variable <name>=<value> [--variable <name>=<value> ...]]
    

Przy użyciu minimalnych parametrów, to polecenie instaluje plugin do projektu cordova. Należy określić lokalizację projektu platformy i cordova do tej platformy. Również należy określić plugin, z różnymi `--plugin` parametr tworzy się:

*   `name`: Nazwa katalogu gdzie istnieje zawartość wtyczki. To musi być istniejący katalog pod `--plugins_dir` ścieżki (patrz poniżej więcej informacji) lub pluginu w rejestrze Cordova.
*   `url`: Adres URL zaczynając od https:// lub git: / /, wskazujące na repozytorium git ważne, że jest clonable i zawiera `plugin.xml` pliku. Zawartość repozytorium mogłoby być skopiowane w`--plugins_dir`.
*   `path`: Ścieżka do katalogu, który zawiera prawidłowe plugin, który zawiera `plugin.xml` pliku. Zawartość tej ścieżki zostaną skopiowane do`--plugins_dir`.

Inne parametry:

*   `--plugins_dir`Domyślnie `<project>/cordova/plugins` , ale można być dowolnego katalogu zawierającego podkatalog dla każdego pobrania plugin.
*   `--www`ustawienia domyślne do projektu `www` lokalizację folderu, ale może być dowolny katalog, który ma być używany jako cordova projektu aplikacji sieci web aktywów.
*   `--variable`pozwala określić pewne zmienne w czasie instalacji, niezbędne dla niektórych wtyczek wymagających API klucze lub innych niestandardowych, zdefiniowanych przez użytkownika parametrów. Zobacz [specyfikację wtyczki][4] dla więcej informacji.

 [4]: plugin_ref_spec.md.html#Plugin%20Specification

## Usuń wtyczki

Aby odinstalować plugin, po prostu przekazać `--uninstall` flagi i podać identyfikator plugin

    $ plugman --uninstall --platform <ios|amazon-fireos|android|blackberry10|wp8> --project <directory> --plugin <id> [--www <directory>] [--plugins_dir <directory>]
    

## Pomocy poleceń

Plugman oferuje pomoc globalne polecenia, które mogą pomóc, jeśli utkniesz lub występują problemy. Spowoduje to wyświetlenie listy wszystkich dostępnych poleceń Plugman i ich składni:

    plugman -help
    plugman  # same as above
    

**Uwaga**: `plugman -help` mogą wykazywać pewne dodatkowe polecenia związane z rejestru. Te polecenia są dla programistów wtyczki i nie mogą być realizowane na trzeciej plugin rejestrów.

Można również dołączyć `--debug|-d` Flaga na wszelkie Plugman polecenia do uruchamiania tego polecenia w trybie informacji pełnej, które będą wyświetlane komunikaty debugowania wewnętrznego, jak one są emitowane i może pomóc śledzić problemy, takie jak brakujące pliki.

    # Adding Android battery-status plugin to "myProject":
    plugman -d --platform android --project myProject --plugin cordova-plugin-battery-status
    

Wreszcie, można użyć `--version|-v` flagi, aby sprawdzić, która wersja Plugman, którego używasz.

    plugman -v
    

## Rejestr działań

Istnieje wiele plugman poleceń, które mogą być używane do interakcji z [rejestru Plugin][5]. Należy pamiętać, że te komendy wpisywać do rejestru specyficzne dla rejestru plugin *plugins.cordova.io* i nie mogą być wykonywane przez rejestry firm plugin.

 [5]: http://plugins.cordova.io

### Szukając Plugin

Plugman służy do przeszukiwania [rejestru wtyczki][5] plugin ID, które odpowiadają danym spacjami listę słów kluczowych.

    plugman search <plugin keywords>
    

### Zmiana rejestru Plugin

Można uzyskać lub ustawić adres URL bieżącego rejestru plugin który jest przy użyciu plugman. Zazwyczaj należy pozostawić ten zestaw w http://registry.cordova.io, chyba że chcesz użyć rejestru plugin stron trzecich.

    plugman config set registry <url-to-registry>
    plugman config get registry
    

### Uzyskać informacje o Plugin

Można uzyskać informacje o wszelkich szczególnych plugin przechowywane w repozytorium wtyczki z:

    plugman info <id>
    

To będzie kontakt z rejestru plugin i pobrać informacje takie jak numer wersji wtyczki.

## Instalowanie pluginów Core

Poniższe przykłady pokazują jak dodac pluginy, w razie potrzeby, tak, że każdy Cordova API można używać w projekcie nadal działać po uaktualnieniu do wersji 3.0. Dla każdego polecenia trzeba wybierz docelową platformę i odwołać katalogu projektu platformy.

*   cordova-plugin-battery-status
    
    `plugman --platform <ios|amazon-fireos|android|blackberry10|wp8> --project <directory> --plugin cordova-plugin-battery-status`

*   cordova-plugin-camera
    
    `plugman --platform <ios|amazon-fireos|android|blackberry10|wp8> --project <directory> --plugin cordova-plugin-camera`

*   cordova-plugin-console
    
    `plugman --platform <ios|amazon-fireos|android|blackberry10|wp8> --project <directory> --plugin cordova-plugin-console`

*   cordova-plugin-contacts
    
    `plugman --platform <ios|amazon-fireos|android|blackberry10|wp8> --project <directory> --plugin cordova-plugin-contacts`

*   cordova-plugin-device
    
    `plugman --platform <ios|amazon-fireos|android|blackberry10|wp8> --project <directory> --plugin cordova-plugin-device`

*   cordova-plugin-device-motion (accelerometer)
    
    `plugman --platform <ios|amazon-fireos|android|blackberry10|wp8> --project <directory> --plugin cordova-plugin-device-motion`

*   cordova-plugin-device-orientation (compass)
    
    `plugman --platform <ios|amazon-fireos|android|blackberry10|wp8> --project <directory> --plugin cordova-plugin-device-orientation`

*   cordova-plugin-dialogs
    
    `plugman --platform <ios|amazon-fireos|android|blackberry10|wp8> --project <directory> --plugin cordova-plugin-dialogs`

*   cordova-plugin-file
    
    `plugman --platform <ios|amazon-fireos|android|blackberry10|wp8> --project <directory> --plugin cordova-plugin-file`

*   cordova-plugin-file-transfer
    
    `plugman --platform <ios|amazon-fireos|android|blackberry10|wp8> --project <directory> --plugin cordova-plugin-file-transfer`

*   cordova-plugin-geolocation
    
    `plugman --platform <ios|amazon-fireos|android|blackberry10|wp8> --project <directory> --plugin cordova-plugin-geolocation`

*   cordova-plugin-globalization
    
    `plugman --platform <ios|amazon-fireos|android|blackberry10|wp8> --project <directory> --plugin cordova-plugin-globalization`

*   cordova-plugin-inappbrowser
    
    `plugman --platform <ios|amazon-fireos|android|blackberry10|wp8> --project <directory> --plugin cordova-plugin-inappbrowser`

*   cordova-plugin-media
    
    `plugman --platform <ios|amazon-fireos|android|blackberry10|wp8> --project <directory> --plugin cordova-plugin-media`

*   cordova-plugin-media-capture
    
    `plugman --platform <ios|amazon-fireos|android|blackberry10|wp8> --project <directory> --plugin cordova-plugin-media-capture`

*   cordova-plugin-network-information
    
    `plugman --platform <ios|amazon-fireos|android|blackberry10|wp8> --project <directory> --plugin cordova-plugin-network-information`

*   cordova-plugin-splashscreen
    
    `plugman --platform <ios|amazon-fireos|android|blackberry10|wp8> --project <directory> --plugin cordova-plugin-splashscreen`

*   cordova-plugin-vibration
    
    `plugman --platform <ios|amazon-fireos|android|blackberry10|wp8> --project <directory> --plugin cordova-plugin-vibration`