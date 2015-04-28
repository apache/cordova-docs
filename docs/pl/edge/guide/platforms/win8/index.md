* * *

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

## under the License.

# Przewodnik platforma Windows

Ten poradnik pokazuje jak skonfigurować SDK środowiska do tworzenia i wdrażania aplikacji Cordova dla Windows 8, Windows 8.1 i Windows Phone 8.1. Pokazuje, jak użyć albo powłoka narzędzia do generowania i budować aplikacje lub CLI Cordova przekreślać platforma omówione w interfejs wiersza poleceń. (Patrz Przegląd Porównanie tych możliwości rozwoju). Ta sekcja pokazuje również jak zmodyfikować Cordova aplikacji w Visual Studio. Niezależnie od tego, które możesz wziąć podejście musisz zainstalować Visual Studio SDK, jak opisano poniżej.

Zobacz Uaktualnianie systemu Windows 8 informacje dotyczące uaktualniania istniejące projekty Windows 8 Cordova.

Okno pozostaje telefon 8 (wp8) jako platformę do oddzielnych, zobacz Windows Phone 8 platformy Przewodnik dotyczący szczegółów.

Cordova WebViews w systemie Windows opierają się na Internet Explorer 10 (Windows 8.0) i Internet Explorer 11 (Windows 8.1 i Windows Phone 8.1) jako ich silnik renderujący, więc w praktyce można użyć IE jest rozbudowanym debuggerem do badania wszelkich treści internetowych, które nie wywołać Cordova API. Windows Phone autora blogu zawiera [pomocne wskazówki][1] jak obsługa IE porównywalne WebKit przeglądarki.

 [1]: http://blogs.windows.com/windows_phone/b/wpdev/archive/2012/11/15/adapting-your-webkit-optimized-site-for-internet-explorer-10.aspx

## Wymagania i wsparcie

Opracowanie aplikacji dla platformy Windows trzeba:

*   Maszyny Windows 8.1, 32 lub 64-bitowy (*domu*, *Pro*lub *Enterprise* Edition) z minimum 4 GB pamięci RAM.

*   Dla Windows Phone emulatorów, Profesjonalny wydanie Windows 8.1 (x 64) lub wyższa, a procesor, który obsługuje [klienta Hyper-V i drugi poziom adres tłumaczenia (deski)][2]. Wersja testowa systemu Windows Enterprise 8.1 jest dostępne w [Witrynie Microsoft Developer Network][3].

*   [Visual Studio 2013 dla Windows][4] (Express lub wyższe).

 [2]: https://msdn.microsoft.com/en-us/library/windows/apps/ff626524(v=vs.105).aspx#hyperv
 [3]: http://msdn.microsoft.com/en-US/evalcenter/jj554510
 [4]: http://www.visualstudio.com/downloads/download-visual-studio-vs#d-express-windows-8

Czy aplikacje opracowane pod Windows 8.1 *nie* uruchomić pod Windows 8.0. Aplikacje opracowane pod Windows 8.0 są kompatybilne do przodu z 8.1.

Postępuj zgodnie z instrukcjami w [windowsstore.com][5] do składania aplikacji do Windows Store.

 [5]: http://www.windowsstore.com/

Rozwijać Cordova aplikacje dla systemu Windows, może korzystać z komputera z systemem Windows, ale również mogą wystąpić na komputerze Mac, uruchamiając środowisku wirtualnej lub za pomocą Boot Camp podwójny zyski Windows 8.1 partycji. Konsultacje te zasoby, aby skonfigurować wymagane środowisko systemu Windows na komputerze Mac:

*   [VMWare Fusion][6]

*   [Parallels Desktop][7],

*   [Boot Camp][8].

 [6]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945426
 [7]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945424
 [8]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945423

## Instalowanie SDK

Zainstalować *Ultimate*, *Premium*lub *Professional* 2013 wersje programu [Visual Studio][4].

![][9]

 [9]: img/guide/platforms/win8/win8_installSDK.png

## Za pomocą narzędzia powłoki Cordova

Jeśli chcesz użyć Cordova w środku Windows powłoka narzędzia w połączeniu z SDK, masz dwie podstawowe opcje:

*   Dostęp do nich lokalnie z projektu kod generowany przez CLI. Są one dostępne w `platform/windows/` katalog po dodaniu platformy `windows` zgodnie z opisem poniżej.

*   Pobrać je z osobnym dystrybucji w [cordova.apache.org][10]. Dystrybucja Cordova zawiera osobne Archiwum dla każdej platformy. Pamiętaj rozwinąć odpowiednie archiwum, `cordova-windows` w tym przypadku w pusty katalog. Partia odpowiednie narzędzia są dostępne w `package/bin` katalog. (Konsultacje w pliku **README** , jeśli jest to konieczne dla bardziej szczegółowe wskazówki).

 [10]: https://www.apache.org/dist/cordova/platforms/

Te powłoka narzędzia pozwalają na tworzenie, budowania i uruchamiania aplikacji systemu Windows. O dodatkowy interfejs wiersza poleceń, który umożliwia funkcji plugin na wszystkich platformach Zobacz za pomocą Plugman do zarządzania wtyczki.

## Tworzenie nowego projektu

W tym momencie aby utworzyć nowy projekt można wybrać narzędzia CLI przekreślać platforma opisanego w interfejs wiersza poleceń, lub zestawu narzędzi powłoki systemu Windows. Poniżej podejście CLI generuje aplikacji o nazwie *HelloWorld* w nowym katalogu projektu `hello` :

        > cordova create hello com.example.hello HelloWorld
        > cd hello
        > cordova platform add windows
    

Tutaj jest odpowiednie podejście shell narzędzie niższego poziomu:

        C:\path\to\cordova-windows\package\bin\create.bat C:\path\to\new\hello com.example.hello HelloWorld
    

## Skompiluj projekt

Jeśli używasz CLI w rozwoju, katalogu projektu na najwyższym poziomie `www` katalog zawiera pliki źródłowe. Uruchamiać dowolną z tych w katalogu projektu, aby odbudować aplikacji:

        > cordova build
        > cordova build windows              # do not rebuild other platforms
        > cordova build windows   --debug    # generates debugging information
        > cordova build windows   --release  # signs the apps for release
    

Tutaj jest odpowiednie podejście shell narzędzie niższego poziomu:

        C:\path\to\project\cordova\build.bat --debug        
        C:\path\to\project\cordova\build.bat --release
        C:\path\to\project\cordova\clean.bat
    

## Konfigurowanie docelowej wersji systemu Windows

Przez domyślne `build` polecenia produkuje dwa pakiety: Windows 8.0 i Windows Phone 8.1. Aby uaktualnić pakiet systemu Windows do wersji 8.1 następujących ustawień konfiguracji należy dodać do pliku konfiguracyjnego (`plik config.xml`).

        <preference name='windows-target-version' value='8.1' />
    

Po dodaniu polecenie `build` to ustawienie będzie rozpocząć produkcję Windows 8.1 i Windows Phone 8.1 pakietów.

## Wdrażanie aplikacji

Aby wdrożyć pakiet systemu Windows:

        > cordova run windows -- --win  # explicitly specify Windows as deployment target
        > cordova run windows # `run` uses Windows package by default
    

Aby wdrożyć pakiet Windows Phone:

        > cordova run windows -- --phone  # deploy app to Windows Phone 8.1 emulator
        > cordova run windows --device -- --phone  # deploy app to connected device
    

Można użyć **cordova run windows --list** aby zobaczyć wszystkie dostępne cele i **cordova run windows --target=target_name \-- -|-phone** do uruchomienia aplikacji na urządzenia lub emulatora (na przykład `cordova run windows --target="Emulator 8.1 720P 4.7 inch" -- --phone`).

Za pomocą **cordova run --help** Zobacz dodatkowe budować i uruchamiać opcji.

## Otwórz projekt SDK i wdrażanie aplikacji

Gdy budujesz Cordova aplikacji, jak opisano powyżej, można go otworzyć z programu Visual Studio. Różne polecenia `build` wygenerować plik Visual Studio rozwiązanie (*.sln*). Otwórz plik w Eksploratorze plików, aby zmodyfikować projekt w ramach programu Visual Studio:

![][11]

 [11]: img/guide/platforms/win8/win8_sdk_openSLN.png

Zawiera składnik `CordovaApp` w roztworze, i jego katalogu `www` zawiera kod źródłowy opartych na sieci web, w tym Strona `index.html` :

![][12]

 [12]: img/guide/platforms/win8/win8_sdk.png

Sterowanie poniżej menu główne programu Visual Studio pozwala do testowania i wdrażania aplikacji:

![][13]

 [13]: img/guide/platforms/win8/win8_sdk_deploy.png

Z **Komputera lokalnego** wybrane Naciśnij zieloną strzałkę, aby zainstalować aplikację na tej samej maszynie, uruchamianie programu Visual Studio. Raz zrobisz tak, aplikacji pojawia się w Windows 8 app oferty:

![][14]

 [14]: img/guide/platforms/win8/win8_sdk_runApp.png

Za każdym razem można odbudować aplikacji, wersja dostępna w interfejsie jest odświeżany.

Dostępne w aplikacji oferty, przytrzymując naciśnięty klawisz **CTRL** podczas zaznaczania aplikacji umożliwia przypnij go do ekranu głównego:

![][15]

 [15]: img/guide/platforms/win8/win8_sdk_runHome.png

Należy pamiętać, że po otwarciu aplikacji w środowisku wirtualnej maszyny, możesz potrzebować wobec trzaskać w rogach lub wzdłuż boków od systemu windows do przełączania aplikacji lub uzyskać dostęp do dodatkowych funkcji:

![][16]

 [16]: img/guide/platforms/win8/win8_sdk_run.png

Na przemian wybierz opcję rozmieszczania **symulator** do wyświetlania aplikacji tak, jakby to były uruchomione na urządzenia typu tablet:

![][17]

 [17]: img/guide/platforms/win8/win8_sdk_sim.png

W odróżnieniu od pulpit rozwinięcie ta opcja pozwala symulować orientację tabletu, lokalizacja i zmieniać jego ustawienia sieciowe.

**Uwaga**: Skonsultuj się przegląd porady jak korzystać z narzędzi wiersza polecenia w Cordova lub zestawu SDK w pracy. W consoli Cordova opiera się na kod źródłowy przekreślać platforma, które rutynowo zastępuje pliki specyficzne dla platformy, używany przez SDK. Jeśli chcesz zmodyfikować projekt za pomocą zestawu SDK, należy użyć narzędzi niższego poziomu powłoki jako alternatywa do consoli.