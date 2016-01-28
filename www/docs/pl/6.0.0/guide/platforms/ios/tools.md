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

title: iOS Shell narzędzia Przewodnik
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

        $ /path/to/my_new_project/cordova/run --emulator
    

## Uruchom aplikację na urządzeniu

        $ /path/to/my_new_project/cordova/run --device
    

## Podpisywanie aplikacji

Możesz dowiedzieć się więcej o podpisanie, dystrybuowanie aplikacji iOS, Tworzenie certyfikatu i zastrzegania profil na [iOS Developer biblioteki][2].

 [2]: https://developer.apple.com/library/ios/documentation/IDEs/Conceptual/AppDistributionGuide/ConfiguringYourApp/ConfiguringYourApp.html

Aby zarejestrować aplikację w Cordova należy następujące:

*   Kod podpisywanie tożsamości ( `--codeSignIdentity` ): [Za pomocą XCode][3] można utworzyć nowy iOS podpisania tożsamości i dodać go do keychain. Typ Kodeksu podpisywanie tożsamości - zazwyczaj dystrybucji lub rozwoju, musi być określone w tym miejscu.

*   Inicjowanie obsługi administracyjnej elementu profilu ( `--provisioningProfile` ): [za pomocą centrum Państwa Apple][4] można utworzyć profil zastrzegania. Pobierz profil rezerw na Twoim komputerze i uruchomić go w XCode go zarejestrować. To jest kopiowany tutaj na komputerze Mac: ~/Library/MobileDevice/Provisioning\ profile /. Otwierając go w edytorze tekstu, można znaleźć UUID, który musi być określone w tym miejscu.

*   Zasobu zasad podpisywania kodu ( `--codeSignResourceRules` ) (opcjonalnie): pozwala określić niestandardowe zasady podpisywania zasobów.

 [3]: https://developer.apple.com/library/ios/documentation/IDEs/Conceptual/AppDistributionGuide/MaintainingCertificates/MaintainingCertificates.html#//apple_ref/doc/uid/TP40012582-CH31-SW6
 [4]: https://developer.apple.com/library/ios/documentation/IDEs/Conceptual/AppDistributionGuide/MaintainingProfiles/MaintainingProfiles.html#//apple_ref/doc/uid/TP40012582-CH30-SW61

Parametry te mogą być określone za pomocą argumentów wiersza polecenia powyżej do `budowy` lub `uruchomić` skrypty:

        $ /path/to/my_new_project/cordova/build --codeSignIdentitiy="iPhone Distribtion" --provisioningProfile="926c2bd6-8de9-4c2f-8407-1016d2d12954" 
    

Alternatywnie można je określić w pliku konfiguracyjnym budować (build.json) za pomocą argumentu (`-buildConfig`). Oto przykład pliku konfiguracyjnego budować:

    {
         "ios": {
             "debug": {
                 "codeSignIdentitiy": "iPhone Development",
                 "provisioningProfile": "926c2bd6-8de9-4c2f-8407-1016d2d12954",
             },
             "release": {
                 "codeSignIdentitiy": "iPhone Distribution"
                 "provisioningProfile": "70f699ad-faf1-4adE-8fea-9d84738fb306",
             }
         }
     }
    

Dostępna jest również obsługa mieszać i łączyć argumentów wiersza polecenia i parametry w pliku build.json. Wartości od argumentów wiersza polecenia otrzyma pierwszeństwo.

## Rejestrowanie

        $ /path/to/my_new_project/cordova/log