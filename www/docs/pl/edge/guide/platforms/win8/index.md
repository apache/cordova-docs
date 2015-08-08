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

# Przewodnik platforma Windows

Ten poradnik pokazuje jak skonfigurować SDK środowiska do tworzenia i wdrażania aplikacji Cordova dla Windows 8, Windows 8.1, Windows Phone 8.1 i 10 uniwersalnych aplikacji na platformie Windows. Pokazuje, jak użyć albo powłoka narzędzia do generowania i budować aplikacje lub CLI Cordova przekreślać platforma omówione w interfejs wiersza poleceń. (Patrz omówienie porównanie tych możliwości rozwoju). Ta sekcja pokazuje również jak zmodyfikować Cordova aplikacji w Visual Studio. Niezależnie od tego, które możesz wziąć podejście musisz zainstalować Visual Studio SDK, jak opisano poniżej.

Zobacz Uaktualnianie systemu Windows 8 informacje dotyczące uaktualniania istniejące projekty Windows 8 Cordova.

Okno pozostaje telefon 8 (wp8) jako platformę do oddzielnych, zobacz Windows Phone 8 platformy Przewodnik dotyczący szczegółów.

Cordova WebViews w systemie Windows opierają się na Internet Explorer 10 (Windows 8.0) i Internet Explorer 11 (Windows 8.1 i Windows Phone 8.1) jako ich silnik renderujący, więc w praktyce można użyć IE jest rozbudowanym debuggerem do badania wszelkich treści internetowych, które nie wywołać Cordova API. Windows Phone autora blogu zawiera [pomocne wskazówki][1] jak obsługa IE porównywalne WebKit przeglądarki.

 [1]: http://blogs.windows.com/windows_phone/b/wpdev/archive/2012/11/15/adapting-your-webkit-optimized-site-for-internet-explorer-10.aspx

## Wymagania i wsparcie

Opracowanie aplikacji dla platformy Windows trzeba:

*   Maszyny Windows 8.1, 32 lub 64-bitowy (*domu*, *Pro*lub *Enterprise* Edition) z minimum 4 GB pamięci RAM.

*   Windows 8.0, 8.1 lub 10, 32 lub 64-bitowy *Strona główna*, *Pro*lub wersji *Enterprise* , razem z [Visual Studio 2012 Express][2] lub Visual Studio 2013. Visual Studio 2015 nie jest w stanie budować aplikacje Windows 8.0.

 [2]: http://www.visualstudio.com/downloads

Opracowanie aplikacji dla Windows 8.0 i 8.1 (w tym Windows Phone 8.1):

*   Windows 8.1 lub Windows 10, 32 lub 64-bitowy *Strona główna*, *Pro*lub wersji *Enterprise* , razem z [Visual Studio 2013 Express][2] lub wyższym. Wersja testowa systemu Windows 8.1 Enterprise jest dostępne w [Witrynie Microsoft Developer Network][3].

*   Dla Windows Phone emulatory, Profesjonalny wydanie Windows 8.1 (x 64) lub wyższa, a procesor, który obsługuje [klienta Hyper-V i drugi poziom adres tłumaczenia (deski)][4]. Wersja testowa systemu Windows 8.1 Enterprise jest dostępne w [Witrynie Microsoft Developer Network][3].

*   [Visual Studio 2013 dla Windows][5] (Express lub wyższe).

 [3]: http://msdn.microsoft.com/en-US/evalcenter/jj554510
 [4]: https://msdn.microsoft.com/en-us/library/windows/apps/ff626524(v=vs.105).aspx#hyperv
 [5]: http://www.visualstudio.com/downloads/download-visual-studio-vs#d-express-windows-8

Opracowanie aplikacji dla Windows 10:

*   Windows 8.1 lub Windows 10 techniczny Podgląd 2, 32 - lub 64-bitowy, razem z [Visual Studio 2015 RC][6] lub wyższym.

 [6]: http://www.visualstudio.com/preview

Zgodność aplikacji jest określana przez OS, że aplikacja ukierunkowane. Aplikacje są siadały kompatybilny ale nie wstecznie zgodne, więc aplikacja kierowania Windows 8.1 nie można uruchomić na 8.0, ale aplikacja zbudowana dla 8.0 można uruchomić na 8.1.

Postępuj zgodnie z instrukcjami w [windowsstore.com][7] do składania aplikacji do Windows Store.

 [7]: http://www.windowsstore.com/

Rozwijać Cordova aplikacje dla systemu Windows, może korzystać z komputera z systemem Windows, ale również mogą wystąpić na Mac, uruchamiając środowisku czynny maszyna albo za pomocą Boot Camp wobec podwójny zyski Windows 8.1 podział. Konsultacje te zasoby, aby skonfigurować wymagane środowisko systemu Windows na komputerze Mac:

*   [VMWare Fusion][8]

*   [Parallels Desktop][9]

*   [Boot Camp][10]

 [8]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945426
 [9]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945424
 [10]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945423

## Za pomocą narzędzia powłoki Cordova

Jeśli chcesz użyć Cordova w środku Windows powłoka narzędzia w połączeniu z SDK, masz dwie podstawowe opcje:

*   Dostęp do nich lokalnie z projektu kod generowany przez CLI. Są one dostępne w `platform/windows/` katalogu po dodaniu platformy `windows` zgodnie z opisem poniżej.

*   Pobrać je z osobnym dystrybucji w [cordova.apache.org][11]. Dystrybucji Cordova zawiera osobne Archiwum dla każdej platformy. Pamiętaj rozwinąć odpowiednie archiwum, `cordova-windows` w tym przypadku w pusty katalog. Odpowiednich partii narzędzia są dostępne w `package/bin` katalog. (Konsultacje plik **README** , w razie potrzeby dla bardziej szczegółowe wskazówki).

 [11]: https://www.apache.org/dist/cordova/platforms/

Te powłoka narzędzia pozwalają na tworzenie, budowania i uruchamiania aplikacji systemu Windows. O dodatkowy interfejs wiersza poleceń, który umożliwia funkcji plugin na wszystkich platformach Zobacz za pomocą Plugman do zarządzania wtyczki.

## Instalowanie SDK

Zainstalować żadnej wersji [Visual Studio][2] dopasowania w wersji, którą wymogi wymienione powyżej.

![][12]

 [12]: {{ site.baseurl }}/static/img/guide/platforms/win8/win8_installSDK.png

10 Windows Instalator programu Visual Studio ma możliwość zainstalowania narzędzia do tworzenia aplikacji Windows uniwersalne. Należy się upewnić, że opcja ta jest zaznaczona podczas instalacji wymagane zestawu SDK.

## Tworzenie nowego projektu

W tym momencie aby utworzyć nowy projekt można wybrać narzędzia CLI przekreślać platforma opisanego w interfejs wiersza poleceń, lub zestaw narzędzi powłoki systemu Windows specyficznych. Podejście CLI poniżej generuje aplikacji o nazwie *HelloWorld* w nowym katalogu projektu `hello` :

        > cordova create hello com.example.hello HelloWorld
        > cd hello
        > cordova platform add windows


Tutaj jest odpowiednie podejście shell narzędzie niższego poziomu:

        C:\path\to\cordova-windows\package\bin\create.bat C:\path\to\new\hello com.example.hello HelloWorld


Ten projekt skierowany jest do Windows 8.1 jako domyślnego adresu docelowego systemu operacyjnego. Można wybrać miejsce docelowe 8.0 lub 10.0 (zobacz "Konfigurowanie docelowej wersji Windows" poniżej) na wszystkie wersje, lub kierujesz dotyczące konkretnej wersji podczas każdej budowy.

## Skompiluj projekt

Jeśli używasz CLI w rozwoju, katalogu projektu na najwyższym poziomie `www` katalog zawiera pliki źródłowe. Uruchamiać dowolną z tych w katalogu projektu, aby odbudować aplikacji:

        > cordova build
        > cordova build windows              # do not rebuild other platforms
        > cordova build windows   --debug    # generates debugging information
        > cordova build windows   --release  # signs the apps for release


Tutaj jest odpowiednie podejście shell narzędzie niższego poziomu:

        C:\path\to\project\cordova\build.bat --debug
        C:\path\to\project\cordova\build.bat --release


`clean`Polecenia pomoże przepłukiwanie katalogów w ramach przygotowań do następnego `build` :

        C:\path\to\project\cordova\clean.bat


## Konfigurowanie docelowej wersji systemu Windows

Przez domyślne `build` polecenia produkuje dwa pakiety: Windows 8.0 i Windows Phone 8.1. Aby uaktualnić pakiet systemu Windows do wersji 8.1 następujących ustawień konfiguracji należy dodać do pliku konfiguracyjnego (`plik config.xml`).

        <preference name="windows-target-version" value="8.1" />


Po dodaniu polecenie `build` to ustawienie będzie rozpocząć produkcję Windows 8.1 i Windows Phone 8.1 pakietów.

### Parametr --appx

Można podjąć decyzję, że chcesz zbudować konkretnej wersji aplikacji kierowania określonego systemu operacyjnego (na przykład, może ustawieniu że chcesz kierować Windows 10, ale chcesz budować dla Windows Phone 8.1). Aby to zrobić, można użyć parametru `--appx` :

        > cordova build windows -- --appx=8.1-phone


System budowy będzie ignorować zestaw preferencji w pliku config.xml dla docelowego systemu Windows wersja i ściśle zbudować pakiet dla Windows Phone 8.1.

Prawidłowe wartości dla flagę `--appx` są `8.1-win`, `8.1-phone`i `uap` (dla Windows 10 uniwersalnych aplikacji). Opcje te stosuje się także do polecenia `cordova run` .

### Zagadnienia dotyczące docelowej wersji systemu Windows

Windows 10 obsługuje nowy tryb "Zdalny" Cordova aplikacji (i aplikacje HTML w ogóle). Ten tryb umożliwia aplikacji znacznie więcej wolności w odniesieniu do manipulacji DOM i wspólne wzory internetowych takich jak korzystanie z wbudowanego skryptu, ale nie tak zmniejszając zestaw możliwości aplikacji mogą używać, gdy przekazywane do magazynu publicznego systemu Windows. Aby uzyskać więcej informacji o Windows 10 i trybie zdalnym spojrzeć do dokumentacji [Cordova dla Windows 10][13] .

 [13]: win10-support.md.html

Gdy w trybie zdalnym, deweloperzy są zachęcani do zastosowania treści polityki bezpieczeństwa (CSP) do ich stosowania do ochrony przed atakami iniekcji skryptu.

## Wdrażanie aplikacji

Aby wdrożyć pakiet Windows:

        > cordova run windows -- --win  # explicitly specify Windows as deployment target
        > cordova run windows # `run` uses Windows package by default


Aby wdrożyć pakiet Windows Phone:

        > cordova run windows -- --phone  # deploy app to Windows Phone 8.1 emulator
        > cordova run windows --device -- --phone  # deploy app to connected device


Można użyć **cordova run windows --list** aby zobaczyć wszystkie dostępne cele i **cordova run windows --target=target_name \-- -|-phone** do uruchomienia aplikacji na urządzenia lub emulatora (na przykład `cordova run windows --target="Emulator 8.1 720P 4.7 inch" -- --phone`).

Za pomocą **cordova run --help** Zobacz dodatkowe budować i uruchamiać opcji.

## Otwórz projekt SDK i wdrażanie aplikacji

Gdy budujesz Cordova aplikacji, jak opisano powyżej, można go otworzyć z programu Visual Studio. Różnych poleceń `build` wygenerować plik Visual Studio rozwiązanie (*.sln*). Otwórz plik w Eksploratorze plików, aby zmodyfikować projekt w ramach programu Visual Studio:

![][14]

 [14]: {{ site.baseurl }}/static/img/guide/platforms/win8/win8_sdk_openSLN.png

Zawiera składnik `CordovaApp` w roztworze, i jego katalogu `www` zawiera kod źródłowy opartych na sieci web, w tym Strona `index.html` :

![][15]

 [15]: {{ site.baseurl }}/static/img/guide/platforms/win8/win8_sdk.png

Sterowanie poniżej menu główne programu Visual Studio pozwala przetestować lub rozmieszczanie aplikacji:

![][16]

 [16]: {{ site.baseurl }}/static/img/guide/platforms/win8/win8_sdk_deploy.png

Z **Komputera lokalnego** wybrane Naciśnij zieloną strzałkę, aby zainstalować aplikację na tej samej maszynie uruchamianie programu Visual Studio. Raz to zrobisz, aplikacji pojawia się w Windows 8 app oferty:

![][17]

 [17]: {{ site.baseurl }}/static/img/guide/platforms/win8/win8_sdk_runApp.png

Za każdym razem możesz przebudować aplikację, wersja dostępna w interfejsie jest odświeżany.

Dostępne w aplikacji oferty, przytrzymując naciśnięty klawisz **CTRL** podczas zaznaczania aplikacji umożliwia przypnij go do ekranu głównego:

![][18]

 [18]: {{ site.baseurl }}/static/img/guide/platforms/win8/win8_sdk_runHome.png

Należy zauważyć, że po otwarciu aplikacji w środowisku wirtualnej maszyny, możesz potrzebować wobec trzaskać w rogach lub wzdłuż boków od systemu windows do przełączania aplikacji lub uzyskać dostęp do dodatkowych funkcji:

![][19]

 [19]: {{ site.baseurl }}/static/img/guide/platforms/win8/win8_sdk_run.png

Na przemian wybierz opcję rozmieszczania **symulator** do wyświetlania aplikacji tak, jakby to były uruchomione na urządzenia typu tablet:

![][20]

 [20]: {{ site.baseurl }}/static/img/guide/platforms/win8/win8_sdk_sim.png

W odróżnieniu od pulpit rozwinięcie ta opcja pozwala symulować orientację tabletu, lokalizacja i zmieniać jego ustawienia sieciowe.

**Uwaga**: Skonsultuj się przegląd porady dotyczące używania Cordova zestawy narzędzi wiersza polecenia lub zestawu SDK w swojej pracy. W consoli Cordova opiera się na kod źródłowy przekreślać platforma, które rutynowo nadpisuje pliki specyficzne dla platformy używane przez SDK. Jeśli chcesz używać zestawu SDK do modyfikowania projektu, narzędzia niższe powłoki jako alternatywa do consoli.
