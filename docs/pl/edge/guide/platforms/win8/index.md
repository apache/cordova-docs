* * *

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

## under the License.

# Windows 8 platformy Przewodnik

Ten poradnik pokazuje jak skonfigurować SDK środowiska wdrażania Cordova aplikacje w Windows 8. Pokazuje, jak użyć albo narzędzi powłoki systemu Windows 8 do generowania i tworzenia aplikacji, lub CLI Cordova przekreślać platforma dyskusji w interfejs wiersza poleceń. (Patrz Przegląd Porównanie tych możliwości rozwoju). Ta sekcja pokazuje również jak zmodyfikować Cordova aplikacji w Visual Studio. Niezależnie od tego, które możesz wziąć podejście musisz zainstalować Visual Studio SDK, jak opisano poniżej.

Zobacz Uaktualnianie systemu Windows 8 informacje dotyczące uaktualniania istniejące projekty Windows 8 Cordova.

Cordova WebViews działa na Windows 8 polegać na Internet Explorer 10 jako ich silnik renderujący, więc w praktyce można używać IE10 jest rozbudowanym debuggerem do badania wszelkich treści internetowych, które nie wywołać Cordova API. Windows Phone autora blogu zawiera [pomocne wskazówki][1] na temat wsparcia IE10 wraz z porównywalnych WebKit przeglądarki.

 [1]: http://blogs.windows.com/windows_phone/b/wpdev/archive/2012/11/15/adapting-your-webkit-optimized-site-for-internet-explorer-10.aspx

## Wymagania i wsparcie

Trzeba jedną z następujących kombinacji OS/SDK, albo z dysku instalacyjnego lub pliku obrazu *ISO* dysku:

*   Windows 8.0 lub 8.1, 32 lub 64-bitowy *Strona główna*, *Pro*lub w wersji *Enterprise* , razem z [Visual Studio 2012 Express][2].

*   Windows 8.1, 32 lub 64-bitowy *Strona główna*, *Pro*lub wersji *Enterprise* , razem z [Visual Studio 2013 Pro][2] lub wyższej. Wersja testowa systemu Windows Enterprise 8.1 jest dostępne w [Witrynie Microsoft Developer Network][3].

 [2]: http://www.visualstudio.com/downloads
 [3]: http://msdn.microsoft.com/en-US/evalcenter/jj554510

Czy aplikacje opracowane pod Windows 8.1 *nie* uruchomić pod Windows 8.0. Aplikacje opracowane pod Windows 8.0 są kompatybilne do przodu z 8.1.

<!-- 64-bit necessary? Pro necessary? ELSE still recommended for parallel WP dev -->

Postępuj zgodnie z instrukcjami w [windowsstore.com][4] do składania aplikacji do Windows Store.

 [4]: http://www.windowsstore.com/

<!-- true? -->

Rozwijać Cordova aplikacje dla Windows 8, może korzystać z komputera z systemem Windows, ale również mogą wystąpić na komputerze Mac, uruchamiając środowisku wirtualnej lub za pomocą Boot Camp podwójny zyski Windows 8 partycji. Konsultacje te zasoby, aby skonfigurować wymagane środowisko systemu Windows na komputerze Mac:

*   [VMWare Fusion][5]

*   [Programu Parallels Desktop][6],

*   [Boot Camp][7].

 [5]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945426
 [6]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945424
 [7]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945423

## Za pomocą narzędzia powłoki Cordova

Jeśli chcesz użyć Cordova w środku Windows 8 powłoka narzędzia w połączeniu z SDK, masz dwie podstawowe opcje:

*   Dostęp do nich lokalnie z projektu kod generowany przez CLI. Są one dostępne w `platforms/windows8/cordova` katalogu po dodaniu `windows8` platforma, jak opisano poniżej.

*   Pobrać je z osobnym dystrybucji w [cordova.apache.org][8]. Dystrybucja Cordova zawiera osobne Archiwum dla każdej platformy. Pamiętaj rozwinąć odpowiednie archiwum, `cordova-windows8\windows8` w tym przypadku w pusty katalog. Partia odpowiednie narzędzia są dostępne w najwyższego poziomu `bin` katalogu. (Konsultacje w pliku **README** , jeśli jest to konieczne dla bardziej szczegółowe wskazówki).

 [8]: http://cordova.apache.org

Te powłoka narzędzia pozwalają tworzyć, budować i uruchamiać aplikacje Windows 8. O dodatkowy interfejs wiersza poleceń, który umożliwia funkcji plugin na wszystkich platformach Zobacz za pomocą Plugman do zarządzania wtyczki.

## Instalowania zestawu SDK

Zainstalować *Ultimate*, *Premium*lub *Professional* 2013 wersje programu [Visual Studio][2].

![][9]

 [9]: img/guide/platforms/win8/win8_installSDK.png

## Tworzenie nowego projektu

W tym momencie aby utworzyć nowy projekt można wybrać narzędzia CLI przekreślać platforma opisanego w interfejs wiersza poleceń, lub zestaw narzędzi 8 specyficzne powłoki systemu Windows. Od w katalogu kod źródłowy, to podejście CLI generuje aplikacji o nazwie *HelloWorld* w nowym `hello` katalogu projektu:

        > cordova create hello com.example.hello HelloWorld
        > cd hello
        > cordova platform add windows8
        > cordova build
    

Tutaj jest odpowiednie podejście shell narzędzie niższego poziomu:

        C:\path\to\cordova-win8\bin\create.bat C:\path\to\new\hello com.example.hello HelloWorld
    

## Skompiluj projekt

Jeśli używasz CLI w rozwoju, katalogu projektu na najwyższym poziomie `www` katalog zawiera pliki źródłowe. Uruchamiać dowolną z tych w katalogu projektu, aby odbudować aplikacji:

        > cordova build
        > cordova build windows8   # do not rebuild other platforms
    

Jeśli używasz narzędzia powłoki Windows Phone określonych w rozwoju, ma innego podejścia. Po wygenerowaniu projektu, domyślnie aplikacja źródła jest dostępnych w `projects\windows8\www` podkatalogu. Kolejne polecenia są dostępne w `cordova` podkatalogu na tym samym poziomie.

`build`Polecenie czyści pliki projektu i odbudowuje aplikacji. W pierwszym przykładzie generuje informacje debugowania, a drugi znaki aplikacje do wydania:

        C:\path\to\project\cordova\build.bat --debug        
        C:\path\to\project\cordova\build.bat --release
    

`clean`Polecenia pomoże przepłukiwanie katalogów w ramach przygotowań do następnego `build` :

        C:\path\to\project\cordova\clean.bat
    

## Otwórz projekt SDK i wdrażanie aplikacji

Gdy budujesz Cordova aplikacji, jak opisano powyżej, można go otworzyć z programu Visual Studio. Różne `build` polecenia Generuj plik Visual Studio rozwiązanie (*.sln*). Otwórz plik w Eksploratorze plików, aby zmodyfikować projekt w ramach programu Visual Studio:

![][10]

 [10]: img/guide/platforms/win8/win8_sdk_openSLN.png

`CordovaApp`Zawiera składnik w roztworze i jego `www` katalog zawiera kod źródłowy opartych na sieci web, w tym `index.html` Strona:

![][11]

 [11]: img/guide/platforms/win8/win8_sdk.png

Sterowanie poniżej menu główne programu Visual Studio pozwala do testowania i wdrażania aplikacji:

![][12]

 [12]: img/guide/platforms/win8/win8_sdk_deploy.png

Z **Komputera lokalnego** wybrane Naciśnij zieloną strzałkę, aby zainstalować aplikację na tej samej maszynie, uruchamianie programu Visual Studio. Raz zrobisz tak, aplikacji pojawia się w Windows 8 app oferty:

![][13]

 [13]: img/guide/platforms/win8/win8_sdk_runApp.png

Za każdym razem można odbudować aplikacji, wersja dostępna w interfejsie jest odświeżany.

Dostępne w aplikacji oferty, przytrzymując naciśnięty klawisz **CTRL** podczas zaznaczania aplikacji umożliwia przypnij go do ekranu głównego:

![][14]

 [14]: img/guide/platforms/win8/win8_sdk_runHome.png

Należy pamiętać, że po otwarciu aplikacji w środowisku wirtualnej maszyny, możesz potrzebować wobec trzaskać w rogach lub wzdłuż boków od systemu windows do przełączania aplikacji lub uzyskać dostęp do dodatkowych funkcji:

![][15]

 [15]: img/guide/platforms/win8/win8_sdk_run.png

Na przemian wybierz opcję rozmieszczania **symulator** do wyświetlania aplikacji tak, jakby to były uruchomione na urządzenia typu tablet:

![][16]

 [16]: img/guide/platforms/win8/win8_sdk_sim.png

W odróżnieniu od pulpit rozwinięcie ta opcja pozwala symulować orientację tabletu, lokalizacja i zmieniać jego ustawienia sieciowe.

**Uwaga**: Skonsultuj się przegląd porady jak korzystać z narzędzi wiersza polecenia w Cordova lub zestawu SDK w pracy. W consoli Cordova opiera się na kod źródłowy przekreślać platforma, które rutynowo zastępuje pliki specyficzne dla platformy, używany przez SDK. Jeśli chcesz zmodyfikować projekt za pomocą zestawu SDK, należy użyć narzędzi niższego poziomu powłoki jako alternatywa do consoli.