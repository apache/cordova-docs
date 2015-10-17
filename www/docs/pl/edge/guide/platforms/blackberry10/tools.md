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

title: Przewodnik narzędziem blackBerry 10 powłoki
---

# Przewodnik narzędziem blackBerry 10 powłoki

`cordova`Narzędzie wiersza polecenia jest wysokim poziomie narzędzie, które pozwala na tworzenie aplikacji na kilku platformach na raz. Starszej wersji ram Cordova zawiera zestawy narzędzi wiersza polecenia specyficznych dla każdej platformy. Aby użyć je jako alternatywa do consoli, musisz pobrać tę wersję Cordova z [cordova.apache.org][1]. Pobierz za darmo zawiera osobne Archiwum dla każdej platformy. Rozwiń Platforma, którą chcesz kierować. Opisanych tu narzędzi są zazwyczaj dostępne w najwyższego poziomu `bin` katalogu, inaczej skonsultować się w pliku **README** dla bardziej szczegółowe wskazówki.

 [1]: http://cordova.apache.org

Uzyskać informacje o interfejsie wiersza polecenia niskiego poziomu, który umożliwia wtyczek, zobacz za pomocą Plugman do zarządzania wtyczki. Zobacz szczegóły jak rozwijać wtyczki wtyczki aplikacji.

Jeśli potrzebujesz pomocy z dowolnego polecenia wymienione poniżej, wpisz polecenie wraz z `-h` lub `-help` argumenty, które są obsługiwane przez wszystkie polecenia i które zawierają opisy wszystkich dostępnych argumentów.

## Tworzenie aplikacji

`create`Polecenie tworzy nowy projekt:

        bin/create <path-to-project> <project-package> <project-name>
    

gdzie

*   `<path-to-project>`Określa katalog chcesz projekt stworzony w

*   `<project-package>`Określa identyfikator odwrotnej domeny styl

*   `<project-name>`Określa nazwę wyświetlaną w aplikacji

**Uwaga**: `create` polecenie używa do ładowania zależność instalacji poprzez `npm install` polecenia. W zależności od uprawnień systemu i katalogu instalacji może to wymagać uprawnień administratora. Jeśli istnieje problem na OSX/Linux, uruchom `sudo npm install` przed użyciem `create` polecenia. W systemie Windows, należy uruchomić `npm install` w narzędzie wiersza polecenia otwarty rezygnować administrator uprzywilejowuje.

## Tworzenie obiektu docelowego

`target`Polecenia umożliwia zarządzanie emulatora lub urządzeń BlackBerry, które można używać do testowania aplikacji. Można dodać lub usunąć element docelowy lub ustawić cel jako domyślnego adresu docelowego.

### Dodać miejsce docelowe

        < ścieżka do projektu > cordova/docelowy dopisujemy <name> < adres ip > [-t |--typ < urządzenia | symulator >] [-p |--hasło <password>] [-pin < urządzenia pin >]
    

gdzie

*   `<name>`Określa unikatową nazwę dla obiektu docelowego.

*   `<ip-address>`Określa adres ip urządzenia BlackBerry lub symulatora.

*   `-p | --password <password>`Określa hasło dla urządzenia lub emulatora. To jest wymagane tylko wtedy, gdy urządzenie lub emulatora jest chroniony hasłem.

*   `--pin <device-pin>`Określa numer PIN urządzenia BlackBerry, który identyfikuje urządzenie jako prawidłowy host dla tokenu debugowania. Ten argument jest wymagane tylko wtedy, gdy tworzenie tokenu debugowania.

### Usuń element docelowy

        < ścieżka do projektu >/cordova/cel usunąć <name>
    

### Postawił sobie za cel jako domyślny

        < ścieżka do projektu >/cordova/miejsce docelowe domyślnie <name>
    

## Budowanie aplikacji

`build`Polecenie tworzy projekt jako plik .bar. Można zbudować aplikację w trybie wydania, (który tworzy plik podpisany .bar) lub w trybie debugowania, (która produkuje plik nie podpisany .bar).

### Tworzenie aplikacji w trybie Release

        < ścieżka do projektu >/cordova/budować wydania [-k |--keystorepass <password>] [-b | - buildId <number>] [-p |--params < params JSON pliku >]
    

gdzie

*   `-k | --keystorepass <password>`Określa hasło, które określone podczas konfigurowania komputera do podpisywania aplikacji.

*   `-b | --buildId <number>`Określa numer wersji kompilacji aplikacji. Zazwyczaj ten numer powinien być zwiększany od poprzedniej wersji podpisane. Ten argument jest opcjonalny.

*   `-p | --params <params-JSON-file>`Określa pliku JSON, zawierające dodatkowe parametry do przekazania do dalszych narzędzi. Ten argument jest opcjonalny.

### Skompiluj projekt w trybie debugowania

        < ścieżka do projektu >/cordova/budować debugowania [<target>] [-k |--keystorepass <password>] [-p |--params < params JSON pliku >] [-ll |--loglevel <error|warn|verbose>]
    

gdzie

*   `<target>`Określa nazwę wcześniej dodane miejsce docelowe. Jeśli `<target>` nie jest określony, miejsce docelowe domyślna jest używana, jeśli została utworzona. Ten argument jest tylko wymagane, jeśli chcesz skryptu wdrażania aplikacji na urządzeniu BlackBerry lub emulatora i nie stworzyliśmy miejsce docelowe domyślna. Dodatkowo jeśli `<target>` to urządzenie, a następnie urządzenie musi być podłączone do komputera przez złącze USB lub być podłączone do tej samej sieci Wi-Fi jak komputer.

*   `-k | --keystorepass <password>`Określa hasło, które określone podczas konfigurowania komputera do podpisywania aplikacji. Hasło służy także do tworzenia token debugowania. Ten argument jest tylko wymagane, jeśli chcesz skrypt, aby utworzyć i zainstalować tokenem debugowania dla Ciebie.

*   `-p | --params <params-JSON-file>`Określa pliku JSON, zawierające dodatkowe parametry do przekazania do dalszych narzędzi.

*   `-ll | --loglevel <level>`Określa poziom dziennika. Poziomu dziennika może być jednym z `error` , `warn` , lub`verbose`.

Jeśli wcześniej zdefiniowany cel domyślne (i wcześniej zainstalowany token debugowania, jeśli ten cel jest urządzeniem BlackBerry), można uruchomić skrypt z żadnych argumentów, a skrypt pakiety aplikacji i wdraża do domyślnego adresu docelowego. Na przykład:

        < ścieżka do projektu >/cordova/budować debugowania
    

## Uruchamianie aplikacji

`run`Polecenie wdraża najnowsze budowania aplikacji na określonym urządzeniu BlackBerry lub emulator. Aby wdrożyć aplikacji, należy określić miejsce docelowe dla urządzenia lub emulatora:

        < ścieżka do projektu >/cordova/uruchomić <target>
    

.. .gdzie `<target>` Określa nazwę wcześniej dodane miejsce docelowe. Jeśli `<target>` to urządzenie, a następnie musi być podłączony do komputera za pomocą kabla USB, albo w tej samej sieci Wi-Fi w komputerze.

## Uchwyt wtyczki

`target`Polecenia umożliwia dodawanie i usuwanie pluginów. Do pobrania lokalnie akademik plugin:

        < ścieżka do projektu > cordova/pobranie wtyczki < ścieżka do wtyczki >
    

Zobacz listę zainstalowanych wtyczek:

        < ścieżka do projektu > plugin cordova/ls
    

Dodać plugin:

        < ścieżka do projektu > cordova/plugin dodać <name>
    

Usuń wtyczki:

        < ścieżka do projektu > cordova/plugin rm <name>