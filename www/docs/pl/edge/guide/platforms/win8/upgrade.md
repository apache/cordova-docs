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

title: Aktualizacja systemu Windows 8
---

# Aktualizacja systemu Windows 8

Ten poradnik pokazuje jak zmienić Windows 8 projektów do uaktualnienia ze starszych wersji Cordova. Większość tych instrukcji ma zastosowanie do projektów utworzonych w starszych zestaw narzędzi wiersza polecenia, które poprzedzają `cordova` Narzędzia CLI. Zobacz interfejs wiersza poleceń do informacji jak zaktualizować do wersji CLI.

## Uaktualnienie do 4.0.0 od 3.1.0 lub później

Dla projektów, które zostały utworzone z cordova CLI:

1.  [Aktualizacja](../android/upgrade.html) `cordova` wersji CLI. Zobacz interfejs wiersza poleceń.

2.  Uruchom`cordova platform update windows8`.

Dla projektów nie stworzony z cordova CLI Uruchom:

        bin\update <project_path>
    

## Uaktualnienie do 3.1.0

Cordova CLI wsparcie dla Windows 8 został wprowadzony w Cordova 3.1.0. Do aktualizacji, zalecamy tworzenie nowych CLI Cordova, projektu i przenoszenie przez wszystkie niezbędne zasoby.

## Aktualizacja z wersji 2.8.0 do wersji 2.9.0

Następujące polecenia powinny być wykonywane z w Visual Studio Aby upewnić się że wszelkie odwołania są aktualizowane usunięte.

1.  Usuń `cordova-2.8.0.js` z projektu `www` katalogu.

2.  Dodać `cordova.js` plik z tego źródła do projektu `www` katalogu. (Należy zauważyć, że plik nie zawiera numer wersji w nazwie pliku).

3.  Tworzenie i testowanie!

## Aktualizacja z wersji 2.7.0 do wersji 2.8.0

Następujące polecenia powinny być wykonywane z w Visual Studio Aby upewnić się że wszelkie odwołania są aktualizowane usunięte.

1.  Usuń `cordova-2.7.0.js` z projektu `www` katalogu.

2.  Dodać `cordova.js` plik z tego źródła do projektu `www` katalogu. (Należy zauważyć, że plik nie zawiera numer wersji w nazwie pliku).

3.  Tworzenie i testowanie!