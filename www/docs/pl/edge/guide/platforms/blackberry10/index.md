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

# Przewodnik platformy blackBerry 10

Ten poradnik pokazuje jak skonfigurować SDK środowiska wdrażania Cordova aplikacje dla urządzeń BlackBerry 10. Poprzednie wersje BlackBerry musisz używać różnych SDK środowiska i zestaw narzędzi wiersza polecenia, opisane w podręczniku platformy BlackBerry. 10 BlackBerry musisz zainstalować SDK, bez względu na to, czy chcesz używać w consoli Cordova przekreślać platforma dla rozwoju, lub węższy zestaw narzędzi wiersza polecenia, skoncentrowanych na platformie. Dla porównania dwóch rozwoju ścieżki zobacz Omówienie. Szczegółowe informacje na każdy temat Zobacz interfejs wiersza polecenia i podręczniku narzędziem BlackBerry 10 powłoki.

## Wymagania

Środowisko programistyczne jest dostępny na Windows, Mac i Linux.

Programiści powinni używać `cordova` narzędzie w połączeniu z BlackBerry WebWorks SDK lub BlackBerry Native SDK. Zobacz interfejs wiersza poleceń do informacji jak zainstalować `cordova` , dodać projektów, a następnie tworzenia i wdrażania dla każdej platformy.

Symulator urządzenia blackBerry 10:

*   Procesor: Intel dwurdzeniowy 2.0 GHz/AMD Athlon 4200 + lub wyższy
*   Miejsce na dysku: 10 GB
*   Pamięć RAM: 4 GB
*   Wirtualizacja: jeden z następujących czynności:
    *   **Technologia wirtualizacji Intel** (VT, VT-x, vmx) → [Intel VT-x obsługiwane procesory lista][1]
    *   **AMD Virtualization** (AMD-V, SVM) (Od maja 2006 r. Wszystkie procesory AMD to AMD-V, z wyjątkiem Sempron).

 [1]: http://ark.intel.com/products/virtualizationtechnology

Więcej informacji na temat wymagań: [jeśli BB10 symulator][2].

 [2]: http://developer.blackberry.com/devzone/develop/simulator/simulator_systemrequirements.html

## Zainstaluj BlackBerry WebWorks SDK

Pobierz i zainstaluj BlackBerry WebWorks SDK z [developer.blackberry.com][3]

 [3]: https://developer.blackberry.com/html5/download/

Instalator będzie dodać narzędzia wiersza polecenia do ścieżki. W zależności od systemu operacyjnego może trzeba otworzyæ pewien nowy koñcowy okno lub zalogować się ponownie.

## Zainstaluj BlackBerry Native SDK

Jeśli musisz skompilować kodu macierzystego, na przykład podczas tworzenia macierzystego plugin, trzeba będzie zainstalować BlackBerry Native SDK.

Aby uzyskać BlackBerry Native SDK, pobrać i zainstalować IDE dla BlackBerry dostępne od [developer.blackberry.com][4], a następnie przy użyciu IDE, zainstalować BlackBerry Native SDK. Po zakończeniu instalacji należy dodać jego narzędzia wiersza polecenia do ścieżki systemowej.

 [4]: http://developer.blackberry.com/native/download/

W systemie Windows:

*   Przejdź do **mój komputer → właściwości → zaawansowane → zmienne środowiskowe**.

*   Dołącz katalog install Native SDK do ścieżki, na przykład:

        ;C:\bbndk\host_10_1_0_132\win32\x86\usr\bin\


Na Mac i Linux:

*   Edytuj `~/.bash_profile` pliku, dodanie linii następujących, w zależności od tego, gdzie został zainstalowany Native SDK:

        $ export PATH=${PATH}:/Applications/bbndk/host_10_1_0_132/darwin/x86/usr/bin/


    lub dla 10.2 Native SDK:

        $ export PATH=${PATH}:/Applications/Momentics.app/host_10_2_0_15/darwin/x86/usr/bin/


*   Wykonaj następujące czynności, aby zastosować zmiany w bieżącej sesji:

        $ source ~/.bash_profile


Jeśli masz wszelki problem ochrony środowiska, przy użyciu Native SDK z wiersza polecenia, należy wykonać odpowiedni plik dla danej platformy, znajduje się w ścieżce instalacji:

*   W systemie Windows → powłoki systemu MS-DOS:

        C:\> \bbndk\bbndk-env_xx_xx_xx_xxxx.bat


*   W systemie Windows → git powłoki bash:

        $ `\bbndk\bbndk-env_xx_xx_xx_xxxx.bat`


*   Na Linux → zainstalowany jako użytkownik root:

        $ `./opt/bbndk/bbndk-env_xx_xx_xx_xxxx.sh`


*   Na Linux → zainstalowany jako zwykłego użytkownika:

        $ `./home/username/bbndk/bbndk-env_xx_xx_xx_xxxx.sh`


*   Na Mac:

        $ `/Developer/SDKs/bbndk/bbndk-env_xx_xx_xx_xxxx.sh`


## Do podpisywania

Jeśli chcesz przetestować na urządzeniu lub dystrybucji aplikacji za pośrednictwem BlackBerry World, twój system musi być ustawienie do podpisywania kodu.

Aby uzyskać klucz podpisywania, przejdź do \[BlackBerry klucze formularz zamówienia\] (https://www.blackberry.com/SignedKeys/codesigning.html).

Zaznacz pole wyboru pierwszy: "do BlackBerry10 aplikacje opracowane za pomocą BlackBerry NDK" i następnie zalogować się lub utworzyć BBID.

Wprowadź hasło i kliknij przycisk "Pobierz Token" do pobrania bbidtoken.csk. Zapisz ten plik do lokalizacji domyślnej dla systemu operacyjnego, który będzie wyświetlany na stronie pobierania.

Ostatnim krokiem jest do generowania certyfikatu podpisywania:

    $ blackberry-keytool -genkeypair -storepass <password> -author 'Your Name’


## Tworzenie projektu

Użycie `cordova` narzędzie, aby skonfigurować nowy projekt, zgodnie z opisem w interfejs wiersza poleceń. Na przykład w katalogu kodu źródłowego:

        $ cordova create hello com.example.hello
        $ cd hello
        $ cordova platform add blackberry10
        $ cordova build


## Uruchamianie na emulatorze

Jeśli chcesz uruchomić emulator urządzenia, pobrać i zainstalować symulator 10 BlackBerry.

*   [Pobierz za darmo][4]
*   [Pierwsze kroki][5]

 [5]: http://developer.blackberry.com/devzone/develop/simulator/blackberry_10_simulator_start.html

Przed testowaniem aplikacji na emulatorze lub urządzenie, należy włączyć tryb opracowania.

Uruchomić emulator obrazu, a następnie wybierz **Ustawienia** na ekranie:

![][6]

 [6]: {{ site.baseurl }}/static/img/guide/platforms/blackberry10/bb_home.png

Przejdź do **bezpieczeństwa i prywatności → tryb opracowania** sekcji i włączyć opcję:

![][7]

 [7]: {{ site.baseurl }}/static/img/guide/platforms/blackberry10/bb_devel.png

Dodatkowy zestaw narzędzi wiersza poleceń są uwzględniane podczas konfigurowania platformy BlackBerry 10 dla projektu. Następujące polecenie, w tym przypadku wywoływane z katalogu najwyższego poziomu projektu kojarzy cel o nazwie *emu* o adresie IP wyświetlane powyżej.

*   W systemie Windows:

        $ platforms\blackberry10\cordova\target.bat add emu 169.254.0.1 -t simulator


*   Na Mac/Linux:

        $ platforms/blackberry10/cordova/target add emu 169.254.0.1 -t simulator


Następnie uruchom `emulate` polecenie, aby wyświetlić aplikację:

        $ cordova emulate blackberry10


## Uruchamianie na urządzeniu

Aby wdrożyć do urządzenia, upewnij się, że jest on podłączony do komputera. Włącz tryb opracowania i uzyskać adres IP jako opisaną w sekcji emulatora. Także trzeba będzie uzyskać PIN od **Ustawienia** aplikacji pod **o → sprzętu**:

![][8]

 [8]: {{ site.baseurl }}/static/img/guide/platforms/blackberry10/bb_pin.png

Należy uruchomić narzędzie wiersza polecenia miejsce docelowe powiązać nazwę z adresu IP, hasło urządzenia i PIN.

*   W systemie Windows:

        $ platforms\blackberry10\cordova\target.bat add mydevice 169.254.0.1 -t device --password 123456 --pin FFFF972E


*   Na Mac/Linux:

        $ platforms/blackberry10/cordova/target add mydevice 169.254.0.1 -t device --password 123456 --pin FFFF972E


gdzie:

*   `--password`odnosi się do hasła do odblokowania urządzenia.

*   `--pin`odnosi się do urządzenia kod PIN otrzymany od **Ustawienia** aplikacji.

Następnie uruchom `run` polecenie, aby wyświetlić aplikację:

        $ cordova uruchomić blackberry10


Jeśli token debugowania nie jeszcze jest skonfigurowana dla urządzenia, komunikat o błędzie skłania do korzystania z platformy uruchomienie skryptu przy użyciu hasła, który podałeś przy rejestracji do podpisywania kluczy.

*   W systemie Windows:

        $ platforms\blackberry10\cordova\run.bat --device --keystorepass mysecret


*   Na Mac/Linux:

        $ platforms/blackberry10/cordova/run --device --keystorepass mysecret


## Debugowanie: z WebInspector

Podczas debugowania na urządzenie lub emulator, może uruchomić WebInspector zdalnie, aby wyświetlić stan wewnętrzny aplikacji. Wiersz wyświetla adres URL, który pozwala na podłączenie do aplikacji z domyślną przeglądarką. Aby uzyskać więcej informacji zobacz [debugowanie przy użyciu WebInspector][9].

 [9]: http://developer.blackberry.com/html5/documentation/web_inspector_overview_1553586_11.html

## Budynek w wersji

Domyślnie, systemem `cordova build` polecenie tworzy plik pakiet bez znaku *.bar* nadaje się do testowania urządzenia lub symulatora.

Wykorzystanie `--release` do tworzenia wersji nadające się do dystrybucji przez BlackBerry World.

    $ cordova build --release --keystorepass <signing password>


`--keystorepass`Opcja określa hasło określone podczas konfigurowania komputera do podpisywania aplikacji.

## Wdrażanie do innych lokalizacji

Powyższe instrukcje założono urządzenie jest podłączone przez USB lub symulatora jest uruchomiony na komputerze lokalnym. Jest również możliwe, aby wdrożyć do innych lokalizacji.

Dodatkowy zestaw narzędzi wiersza poleceń są uwzględniane podczas konfigurowania platformy BlackBerry 10 dla projektu. Następujące polecenie, w tym przypadku wywoływane z katalogu najwyższego poziomu projektu kojarzy cel o nazwie *emu* z adresu IP.

*   W systemie Windows:

        $ platforms\blackberry10\cordova\build.bat --release --keystorepass mysecret


*   Na Mac/Linux:

        $ platforms/blackberry10/cordova/build --release --keystorepass mysecret


Gdy cel jest określony, może dostarczyć go do wykonywania poleceń za pomocą `--target` :

    $ cordova run blackberry10 --target=emu
