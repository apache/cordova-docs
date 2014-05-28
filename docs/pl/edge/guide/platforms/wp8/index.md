---

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

   under the License.
---

# Przewodnik platformy Windows Phone

Ten poradnik pokazuje jak skonfigurować SDK środowiska wdrażania Cordova aplikacje na urządzenia Windows Phone. Skupia się na Windows Phone 8, ale zapewnia dodatkowe szczegóły na temat wsparcia Windows Phone 7.

To pokazuje, jak używać albo powłoki Windows Phone specjalne narzędzia do tworzenia i budowania aplikacji, lub CLI Cordova przekreślać platforma dyskusji w interfejs wiersza poleceń. (Patrz Przegląd Porównanie tych przepływów pracy rozwoju). Ta sekcja pokazuje też, jak otworzyć aplikacji Cordova, tak, że można je modyfikować w Visual Studio. Niezależnie od tego, które możesz wziąć podejście musisz zainstalować SDK Windows Phone, jak opisano poniżej.

Zobacz następujące szczegółowe informacje specyficzne dla platformy Windows Phone:

*   Wtyczki Windows Phone
*   Aktualizacja Windows Phone

Na platformie Windows Phone 8 Cordova widoku sieci Web polega na Internet Explorer 10 jako jego silnik renderujący, więc jako praktyczny można użyć IE10 jest rozbudowanym debuggerem do badania wszelkich treści internetowych, które nie wywołać Cordova API. Windows Phone autora blogu zawiera [pomocne wskazówki][1] na temat wsparcia IE10 wraz z porównywalnych WebKit przeglądarki.

 [1]: http://blogs.windows.com/windows_phone/b/wpdev/archive/2012/11/15/adapting-your-webkit-optimized-site-for-internet-explorer-10.aspx

## Wymagania i wsparcie

Musisz następujących czynności:

*   64-bitowa wersja systemu Windows 8 Pro, instalacja dysku lub pliku obrazu *ISO* dysku. Ocena wersja jest dostępna w [Witrynie Microsoft Developer Network][2]. Wersja Pro jest konieczne, aby uruchomić emulator urządzenia.

*   [Windows Phone SDK][3].

 [2]: http://msdn.microsoft.com/en-US/evalcenter/jj554510
 [3]: https://dev.windowsphone.com/en-us/downloadsdk

Rozwijać Cordova aplikacje na urządzenia Windows Phone, mogą korzystać z komputera z systemem Windows, ale możesz może się rozwinąć również na komputerze Mac, uruchamiając środowisku wirtualnej lub za pomocą Boot Camp na dual-boot partycji systemu Windows. Konsultacje te zasoby, aby skonfigurować wymagane środowisko systemu Windows na komputerze Mac:

*   **VMWare Fusion**: Aby skonfigurować maszyn wirtualnych systemu Windows 8, postępuj zgodnie z instrukcjami w [Witrynie Microsoft Developer Network][4], a następnie zobacz Konfigurowanie VMWare Fusion o przygotowanie wirtualne środowisko do uruchomienia emulatora w zestawie SDK.

*   **Parallels Desktop**: Aby skonfigurować maszyn wirtualnych systemu Windows 8, postępuj zgodnie z instrukcjami w [Witrynie Microsoft Developer Network][5], a następnie zobacz Konfigurowanie programu Parallels Desktop dla informacje na temat przygotowania wirtualne środowisko do uruchomienia emulatora w zestawie SDK.

 [4]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945426
 [5]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945424

<!--
- __VirtualBox__: To set up the Windows 8 virtual machine, follow the
  installation instructions provided by the [Microsoft Developer
  Network](http://msdn.microsoft.com/en-US/library/windows/apps/jj945425).

  2DO: virtualBox doesn't work yet; any extra config info?
-->

*   **Boot Camp**: założyć partycję systemu Windows 8, postępuj zgodnie z instrukcjami instalacji dostarczonych przez [Microsoft Developer Network][6].

 [6]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945423

Jeśli rozwijają się na PC, jego procesor musi obsługiwać wirtualizacji (Intel*VT-x* ) i [Drugi poziom adres tłumaczenia (deski)][7]. Skonsultować się z [Lista wspiera procesory Intela][8]. Wirtualizacja jest zazwyczaj niepełnosprawny przy nie wykonać, więc trzeba ją włączyć w ustawieniach BIOS-u. Komputer powinien mieć co najmniej 6,5 GB wolnej przestrzeni dyskowej i 4GB pamięci RAM.

 [7]: http://en.wikipedia.org/wiki/Second_Level_Address_Translation
 [8]: http://ark.intel.com/Products/VirtualizationTechnology

## Za pomocą narzędzia powłoki Cordova

Jeśli chcesz użyć Cordova w środku Windows Phone powłoka narzędzia w połączeniu z SDK, masz dwie podstawowe opcje:

*   Dostęp do nich lokalnie z projektu kod generowany przez CLI. Są one dostępne w `platforms/wp8/cordova` katalogu po dodaniu `wp8` platforma, jak opisano poniżej.

*   Pobrać je z osobnym dystrybucji w [cordova.apache.org][9]. Dystrybucja Cordova zawiera osobne Archiwum dla każdej platformy. Pamiętaj rozwinąć odpowiednie archiwum, `cordova-wp8\wp8` w tym przypadku w pusty katalog. Partia odpowiednie narzędzia są dostępne w najwyższego poziomu `bin` katalogu. (Konsultacje w pliku **README** , jeśli jest to konieczne dla bardziej szczegółowe wskazówki).

 [9]: http://cordova.apache.org

Te powłoka narzędzia pozwalają na tworzenie, budowania i uruchamiania aplikacji Windows Phone. O dodatkowy interfejs wiersza poleceń, który umożliwia funkcji plugin na wszystkich platformach Zobacz za pomocą Plugman do zarządzania wtyczki. Zobacz wtyczki aplikacji wskazówki w jaki sposób rozwijać wtyczki i wtyczki Windows Phone na dane specyficzne dla platformy Windows Phone.

## Instalowania zestawu SDK

Zainstaluj najnowszą wersję zestawu SDK Windows Phone z obszaru **do pobrania** [dev.windowsphone.com][3]. Można również zainstalować najnowsze emulatora aktualizacji pakietów.

![][10]

 [10]: img/guide/platforms/wp8/wp8_downloadSDK.png

Po zainstalowaniu zestawu SDK, należy zmodyfikować ścieżkę systemu do udostępniają SDK Cordova w wierszu polecenia systemu Windows:

*   Najpierw musisz dostać ciąg ścieżki. Otwórz **Eksplorator plików**, przejdź do `C:\Windows\Microsoft.NET\Framework` , a następnie otworzyć ramach najnowsze. Kliknij przycisk po prawej stronie ścieżki nawigacji do wyświetlenia napisu pełną ścieżkę, a następnie wpisz **CTRL-c** do kopiowania to:
    
    ![][11]

*   Następnie należy zmodyfikować ścieżkę. Otwórz **Panel sterowania** z obszaru **aplikacji** Windows 8 ekranie:
    
    ![][12]

*   Otwórz element Panelu sterowania **System** :
    
    ![][13]

*   Wybierz **Zaawansowane ustawienia systemu** , z listy po lewej stronie:
    
    ![][14]

*   W dolnej części panelu wynikowego naciśnij przycisk **Zmienne środowiskowe** :
    
    ![][15]

*   Wybierz **ścieżkę** z **Zmienne użytkownika**, a następnie naciśnij przycisk **Edytuj**:
    
    ![][16]
    
    Inaczej jeśli nie ma **ścieżki** , naciśnij przycisk **Nowy** , aby utworzyć go.

*   Jeśli już istnieje wartość ścieżki, dołączyć średnik i wklej ciąg ścieżki, którą skopiowano wcześniej. W przeciwnym razie po prostu wklej ciąg:
    
    ![][17]
    
    Oto przykładowe **ścieżki** wartość, która określa również `npm` narzędzie, które jest wymagane do zainstalowania w consoli Cordova:
    
    C:\Users\me\AppData\Roaming\npm;C:\WINDOWS\Microsoft.NET\Framework\v4.0.30319

 [11]: img/guide/platforms/wp8/modpath_copy.png
 [12]: img/guide/platforms/wp8/modpath_control_panel.png
 [13]: img/guide/platforms/wp8/modpath_system.png
 [14]: img/guide/platforms/wp8/modpath_advanced.png
 [15]: img/guide/platforms/wp8/modpath_environment.png
 [16]: img/guide/platforms/wp8/modpath_edit.png
 [17]: img/guide/platforms/wp8/modpath_append.png

## Tworzenie nowego projektu

W tym momencie aby utworzyć nowy projekt można wybrać narzędzia CLI przekreślać platforma opisanego w interfejs wiersza poleceń, lub zestaw narzędzi powłoki Windows Phone specyficznych. Z katalogu kodu źródłowego, tutaj jest podejście CLI:

        > cordova create hello com.example.hello HelloWorld
        > cd hello
        > cordova platform add wp8
    

Tutaj jest odpowiednie podejście shell narzędzie niższego poziomu:

        C:\path\to\cordova-wp8\bin\create.bat C:\path\to\new\hello com.example.hello HelloWorld
    

## Skompiluj projekt

Jeśli używasz CLI w rozwoju, katalogu projektu na najwyższym poziomie `www` katalog zawiera pliki źródłowe. Uruchamiać dowolną z tych w katalogu projektu, aby odbudować aplikacji:

        > cordova build
        > cordova build wp8   # do not rebuild other platforms
    

Jeśli używasz narzędzia powłoki Windows Phone określonych w rozwoju, ma innego podejścia. Po wygenerowaniu projektu, domyślnie aplikacja źródła jest dostępnych w `projects\wp8\www` podkatalogu. Kolejne polecenia są dostępne w `cordova` podkatalogu na tym samym poziomie.

`build`Polecenie czyści pliki projektu i odbudowuje aplikacji. W pierwszym przykładzie generuje informacje debugowania, a drugi znaki aplikacje do wydania:

        C:\path\to\project\cordova\build.bat --debug        
        C:\path\to\project\cordova\build.bat --release
    

`clean`Polecenia pomoże przepłukiwanie katalogów w ramach przygotowań do następnego `build` :

        C:\path\to\project\cordova\clean.bat
    

## Wdrażanie do emulatora

W tym momencie można użyć `cordova` CLI narzędzia do wdrażania aplikacji do emulatora z linii poleceń:

        > cordova emulate wp8
    

W przeciwnym razie Użyj interfejs powłoki alternatywne:

        C:\path\to\project\cordova\run
    

Domyślnie `run` skrypt wywołuje flagę emulatora i akceptuje budować dodatkowe flagi, dla którego `--debug` zapewnia domyślne:

        C:\path\to\project\cordova\run --emulator --debug
        C:\path\to\project\cordova\run --emulator --release
        C:\path\to\project\cordova\run --emulator --nobuild
    

Emulator uruchamia urządzenie obraz z zainstalowana aplikacja. Na ekranie przejdź do panelu aplikacji do uruchomienia aplikacji **HelloWorld** . To pokazuje aplikacji, uruchomienie z jego ekran powitalny, następuje jego głównego interfejsu:

![][18]

 [18]: img/guide/platforms/wp8/wp8_emulator.png

Emulator podstawowego kontroli w prawym górnym rogu ekranu urządzenia pozwalają na przełączanie pomiędzy portret i krajobraz. **>** Otwiera więcej formantów, które pozwoli Ci przetestować kierunki bardziej złożone i gesty:

![][19]

 [19]: img/guide/platforms/wp8/wp8_emulator_orient.png

Te Zaawansowane sterowanie pozwala również do modyfikowania położenia urządzenia lub symulować sekwencje ruchów:

![][20]

 [20]: img/guide/platforms/wp8/wp8_emulator_loc.png

## Wdrażanie do urządzenia

Przed testowaniem aplikacji na urządzeniu, urządzenie musi być zarejestrowany. Dokumentacji [firmy Microsoft][21] informacje na temat wdrażania i testowania na Windows Phone 8. Również upewnij się, że telefon jest podłączony do komputera, a na ekranie jest odblokowany.

 [21]: http://msdn.microsoft.com/en-us/library/windowsphone/develop/ff402565(v=vs.105).aspx

Uruchom następujące polecenie CLI, aby uruchomić aplikację na urządzeniu:

        > cordova run wp8
    

Odpowiada to polecenie powłoki niższego poziomu:

        C:\path\to\project\cordova\run --device
    

Alternatywnie Jeśli pracujesz w programie Visual Studio, wybierz **Urządzenia Windows Phone** z drop niedziałający menu w górę, a następnie naciśnij Zielona **gry** przycisk pobliżu, lub innego typu **F5**.

## Modyfikowanie projektu w SDK

Gdy budujesz Cordova aplikacji, jak opisano powyżej, można go otworzyć z zestawu SDK. Różne `build` polecenia generuje plik Visual Studio rozwiązanie (*.sln*). Otwórz plik, aby zmodyfikować projekt w ramach programu Visual Studio. Kod źródłowy opartych na sieci web jest dostępna w ramach projektu `www` katalogu. Oraz innych narzędzi zestawu SDK zapewnia, kontroli poniżej menu pozwala na uruchomienie aplikacji w Windows Phone emulatora:

![][22]

 [22]: img/guide/platforms/wp8/wp8_vs.png

Konsultacje przegląd porady jak korzystać z narzędzi wiersza polecenia w Cordova lub zestawu SDK w pracy. W consoli Cordova opiera się na kod źródłowy przekreślać platforma, które rutynowo zastępuje pliki specyficzne dla platformy, używany przez SDK. Jeśli chcesz pracować w zestawie SDK, należy użyć narzędzi niższego poziomu powłoki jako alternatywa do consoli.

## Wsparcie dla Windows Phone 7

To jest tak łatwe do generowania aplikacji Windows Phone 7, jak to dla Windows Phone 8, ale to działa podobnie jak dodawanie oddzielne platformy. Jeśli używasz CLI, wystarczy określić `wp7` wraz z lub zamiast z `wp8` :

        > cordova platform add wp7
        > cordova build wp7
        > cordova emulate wp7
    

`emulate`Polecenia produkuje emulator urządzenia Windows Phone 7, który wyświetla inny interfejs:

![][23]

 [23]: img/guide/platforms/wp8/wp7_emulator.png

Jeśli używasz skoncentrowanych na platformie powłoki narzędzie pracy, śledzić wszystkie czynności w sekcji *Instalowanie Cordova powłoka narzędzia* powyżej, z wyjątkiem wyodrębnić narzędzia z `cordova-wp8\wp7` katalogu zamiast. Wszystkie te narzędzia pracy takie same jak ich `wp8` odpowiedników.

**Uwaga**: The WebViews że wykorzystywanych aplikacji Windows Phone 7 Cordova należy *nie* używać Internet Explorer 10 jako ich silnik renderujący i tym samym brakuje niektórych zaawansowanych funkcji dostępnych w aplikacji Windows Phone 8. Jednak zarówno wdrożenia tego samego zestawu interfejsów API. Można uruchomić aplikację Windows Phone 7 na urządzenia Windows Phone 8, ale nie na odwrót: aplikacji Windows Phone 8 czy *nie* biegać na urządzenia Windows Phone 7.