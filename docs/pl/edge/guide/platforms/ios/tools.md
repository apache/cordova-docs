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

# iOS Shell narzędzia Przewodnik

Ten przewodnik pokazuje sposób używania Cordova w zestaw narzędzi platformy centered powłoki rozwijać aplikacje iOS. Ta ścieżka rozwoju, omówione w przeglądzie, może zaoferować większy zakres możliwości rozwoju dla iOS niż opisane w interfejs wiersza polecenia narzędzia CLI przekreślać platforma. Na przykład trzeba użyć narzędzia powłoki podczas wdrażania niestandardowego widoku sieci Web Cordova obok rodzimych komponentów. Przed użyciem albo ścieżki rozwoju, należy najpierw skonfigurować SDK środowiska zgodnie z opisem w iOS platformy przewodnik. Narzędzia te opierają się na Xcode z wiersza polecenia narzędzi takich jak `xcode-select` i`xcodebuild`.

Aby włączyć powłoka narzędzia dla iOS, Pobierz Cordova z [cordova.apache.org][1]. Pobierz za darmo zawiera osobne Archiwum dla każdej platformy. Rozwiń każdy chcesz kierować, `ios` w tym przypadku. Odpowiednich narzędzi są zazwyczaj dostępne w najwyższego poziomu `bin` katalogu, inaczej skonsultować się w pliku **README** dla bardziej szczegółowe wskazówki.

 [1]: http://cordova.apache.org

Te narzędzia pozwalają tworzyć, budować i uruchamiać aplikacje iOS. O dodatkowy interfejs wiersza poleceń, który umożliwia funkcji plugin na wszystkich platformach Zobacz za pomocą Plugman do zarządzania wtyczki. Zobacz szczegóły jak rozwijać wtyczki wtyczki aplikacji.

## Tworzenie projektu

Uruchom `create` polecenie, określając ścieżkę istniejącego projektu, identyfikator pakietu odwrotnej domeny styl i nazwa wyświetlana aplikacji.

        $ ./path/to/cordova-ios/bin/create /path/to/my_new_project com.example.project_name ProjectName
    

## Tworzenie projektów

        $ /path/to/my_new_project/cordova/build
    

## Uruchom aplikację na emulatorze

        $ /path/to/my_new_project/cordova/run
    

## Zwolnienie

        $ /path/to/my_new_project/cordova/release
    

## Rejestrowanie

        $ /path/to/my_new_project/cordova/log