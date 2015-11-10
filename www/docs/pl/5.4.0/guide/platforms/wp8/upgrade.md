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

title: Aktualizacja Windows Phone 8
---

# Aktualizacja Windows Phone 8

Ten poradnik pokazuje jak zmienić Windows Phone 8 projektów, do uaktualnienia ze starszych wersji Cordova. Niektóre z tych instrukcji dotyczą projektów utworzonych w starszych zestaw narzędzi wiersza polecenia, które poprzedzają `cordova` Narzędzia CLI. Zobacz interfejs wiersza poleceń do informacji jak zaktualizować do wersji CLI. Sekcji poniżej pokazuje jak uaktualnić od-CLI CLI projektów i.

## Projekty modernizacji 3.6.0 4.0.0

Projekty-CLI, uruchom:

        bin/update path/to/project
    

Dla projektów CLI:

1.  [Aktualizacja](../android/upgrade.html) `cordova` wersji CLI. Zobacz interfejs wiersza poleceń.

2.  Uruchomić `cordova platform update wp8` w istniejących projektach.

## Uaktualnienie do 3.2.0 od 3.1.0

Dla projektów, które zostały utworzone z cordova CLI:

1.  [Aktualizacja](../android/upgrade.html) `cordova` wersji CLI. Zobacz interfejs wiersza poleceń.

2.  Uruchom`cordova platform update wp8`

Dla projektów nie stworzony z cordova CLI Uruchom:

        bin\update < project_path >
    

## Uaktualnić do 3.1.0 3.0.0

Dla projektów, które zostały utworzone z cordova CLI:

1.  [Aktualizacja](../android/upgrade.html) `cordova` wersji CLI. Zobacz interfejs wiersza poleceń.

2.  Uruchom`cordova platform update wp8`

Dla projektów nie stworzony z cordova CLI Uruchom:

        bin\update <project_path>
    

## Uaktualnienie do consoli (3.0.0) z 2.9.0

1.  Tworzenie nowego projektu Apache Cordova 3.0.0 za pomocą CLI, cordova, zgodnie z opisem w interfejs wiersza poleceń.

2.  Dodać swojej platformy do projektu cordova, na przykład:`cordova
platform add wp8`.

3.  Skopiuj zawartość projektu `www` katalogu `www` katalog w katalogu głównym projektu cordova właśnie utworzyłeś.

4.  Skopiuj lub zastąpić rodzimych aktywów z oryginalnego projektu (`ekranu powitalnego`, `ApplicationIcon`, itp.), upewniając się, że wszelkie nowe pliki dodane do pliku `.csproj`. Windows telefon projekt opiera się wewnątrz katalogu `platforms\wp8`.

5.  Narzędzia CLI cordova instalowac pluginy, czego potrzebujesz. Należy zauważyć, że CLI obsługuje wszystkie podstawowe API jako wtyczki, więc mogą one potrzebować do dodania. Tylko 3.0.0 wtyczki są kompatybilne z CLI.

6.  Tworzenie i testowanie.

## Uaktualnienie do 3.0.0 (non-CLI) z 2.x

W oknie Solution Explorer Visual Studio:

1.  Utwórz nowy Cordova WP8 Apache 3.0.0 projektu.

2.  Skopiuj zawartość `www` do nowego projektu i upewnij się, że te elementy są dodane do projektu VS.

3.  Skopiować i nadpisać żadnych ekran powitalny, lub ikonę zdjęcia.

4.  Kopiujemy jakieś pluginy z katalogu `plugins` do nowego projektu i zapewnienia, że są one również dodawane do projektu VS.

5.  Tworzenie i testowanie.

**Uwaga**: wszystkie podstawowe API są usuwane z Cordova wersja 3.0 i muszą być zainstalowane oddzielnie jako wtyczki. Więcej informacji na temat ponownego włączania tych funkcji w pracy-CLI Zobacz za pomocą Plugman do zarządzania wtyczki.