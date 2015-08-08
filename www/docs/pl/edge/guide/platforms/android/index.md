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

# Przewodnik platformy Android

Ten poradnik pokazuje jak skonfigurować SDK środowiska wdrażania Cordova aplikacje dla systemu Android urządzeń i jak ewentualnie użyć narzędzi wiersza polecenia skoncentrowanych na Android w pracy rozwoju. Musisz zainstalować Android SDK, bez względu na to, czy chcesz użyć tych skoncentrowanych na platformie powłoka narzędzia lub CLI Cordova przekreślać platforma dla rozwoju. Dla porównania dwóch rozwoju ścieżki zobacz Omówienie. Szczegóły na CLI Zobacz interfejs wiersza poleceń.

## Wymagania i wsparcie

Cordova, Android wymaga Android SDK, który może być zainstalowany na OS X, Linux lub Windows system operacyjny. Zobacz Android SDK [wymagania systemowe][1].

 [1]: http://developer.android.com/sdk/index.html#Requirements

Cordova obsługuje Android 4.0.x (począwszy od poziomu Android API 14) i wyższych. Jako zasadę ogólną Androida w wersji stają się obsługiwane przez Cordova, jak one spadną poniżej 5% na Google [panel dystrybucji][2]. Androida w wersji starszej niż API poziom 10, oraz wersje 3.x (Honeycomb, API, poziom 11-13) spadnie znacznie poniżej tego progu 5%.

 [2]: http://developer.android.com/about/dashboards/index.html

## Zainstaluj narzędzia powłoki Cordova

Jeśli chcesz użyć Cordova w środku Android powłoka narzędzia w połączeniu z zestawu SDK, należy pobrania Cordova, z [cordova.apache.org][3]. Inaczej ignorować tej sekcji, jeśli masz zamiar używać narzędzia CLI przekreślać platforma opisanego w interfejs wiersza poleceń.

 [3]: http://cordova.apache.org

Pobierz Cordova zawiera osobne Archiwum dla każdej platformy. Pamiętaj rozwinąć odpowiednie archiwum, `android` w tym przypadku w pusty katalog. Odpowiednie narzędzia executible są dostępne w katalogu głównym `bin` katalogu. (Konsultacje w pliku **README** , jeśli jest to konieczne dla bardziej szczegółowe wskazówki).

Te powłoka narzędzia pozwalają na tworzenie, budować i uruchamiać aplikacje. O dodatkowy interfejs wiersza poleceń, który umożliwia funkcji plugin na wszystkich platformach Zobacz za pomocą Plugman do zarządzania wtyczki. Zobacz szczegóły jak rozwijać wtyczki wtyczki aplikacji.

## Zainstalować Java Development Kit (JDK)

Zainstalować [Java Development Kit (JDK) 7][4] lub nowszej.

 [4]: http://www.oracle.com/technetwork/java/javase/downloads/jdk7-downloads-1880260.html

Podczas instalacji w systemie Windows, należy również ustawić `JAVA_HOME` zmiennych środowiskowych zgodnie z JDK instalacji ścieżka (na przykład C:\Program Files\Java\jdk1.7.0_75).

## Zainstalować Android SDK

Zainstalować [Android SDK autonomicznych narzędzi][5] lub [Android Studio][6]. Kupieniu z `Android Studio` Planując rozwój nowych Cordova dla wtyczek Android lub za pomocą natywne narzędzia do uruchomienia i debugowania Android platforma. W przeciwnym razie `Android SDK autonomicznego narzędzia` są wystarczające do tworzenia i wdrażania aplikacji Android.

 [5]: http://developer.android.com/sdk/installing/index.html?pkg=tools
 [6]: http://developer.android.com/sdk/installing/index.html?pkg=studio

Szczegółowe instrukcje dotyczące instalacji są dostępne jako część instalacji łącza powyżej.

Cordova wiersza polecenia narzędzia do pracy, lub CLI, który opiera się na nich konieczne jest uwzględnienie zestawu SDK `platformy narzędzia` i `Narzędzia` katalogi w `ścieżce`. Na komputerze Mac można użyć edytora tekstu do tworzenia lub modyfikowania pliku `~/.bash_profile` dodanie linii następujących, w zależności od tego, gdzie instaluje zestawu SDK:

        export PATH=${PATH}:/Development/android-sdk/platform-tools:/Development/android-sdk/tools


Ten wiersz w `~/.bash_profile` udostępnia te narzędzia w nowo otwartego okna terminala. Jeśli twój koñcowy okno jest już otwarta w OSX, lub w celu uniknięcia Logowanie/Wylogowanie na Linux, uruchom je udostępnić w bieżącym oknie terminala:

        $ source ~/.bash_profile


Aby zmienić `ścieżka` środowisko naturalne w systemie Windows:

1.  Trzaskać u **wzdrygnąć** się menu w lewym dolnym rogu pulpitu, kliknij prawym przyciskiem myszy na **komputerze**, a następnie wybierz **Właściwości**.

2.  Wybierz opcję **Zaawansowane ustawienia systemu** w kolumnie po lewej stronie.

3.  W oknie dialogowym wynikowe naciśnij przycisk **Zmienne środowiskowe**.

4.  Wybierz zmienną **PATH** i naciśnij klawisz **Edytuj**.

5.  Dopisz następujące czynności, aby `PATH` w oparciu o gdzie zainstalowałeś SDK, na przykład:

        ;C:\Development\android-sdk\platform-tools;C:\Development\android-sdk\tools


6.  Zapisz wartość i zamknij obu oknach dialogowych.

## Zainstaluj pakiety SDK

Otworzyć Android SDK Manager (na przykład, za pośrednictwem terminali: `android`) i zainstalować:

1.  5.1.1 Android (API 22) platforma SDK
2.  Narzędzia do tworzenia SDK Android w wersji 19.1.0 lub nowszej
3.  Wsparcie Android repozytorium (Dodatki)

Zobacz [Instalowanie pakietów SDK][7] dla więcej szczegółów.

 [7]: http://developer.android.com/sdk/installing/adding-packages.html

## Skonfigurować Emulator

Android sdk nie przewiduje żadnych wystąpienie domyślne emulatora domyślnie. Można utworzyć nową przez uruchomienie `Android` w wierszu polecenia. Naciśnij przycisk **Narzędzia → Zarządzaj AVDs** (Android urządzenia wirtualnego), a następnie wybierz dowolny element z **Definicji urządzenia** w oknie dialogowym wynikowe:

![][8]

 [8]: {{ site.baseurl }}/static/img/guide/platforms/android/asdk_device.png

Naciśnij przycisk **Utwórz AVD**, opcjonalnie Modyfikowanie nazwy, a następnie naciśnij **OK** , aby zaakceptować zmiany:

![][9]

 [9]: {{ site.baseurl }}/static/img/guide/platforms/android/asdk_newAVD.png

AVD następnie pojawia się na liście **Urządzeń wirtualnych z systemem Android** :

![][10]

 [10]: {{ site.baseurl }}/static/img/guide/platforms/android/asdk_avds.png

Aby otworzyć ten emulator jako oddzielną aplikację, wybierz AVD i naciśnij **Start**. Wprowadza to tyle jak na urządzenie, z dodatkowych formantów dostępnych przycisków sprzętowych:

![][11]

 [11]: {{ site.baseurl }}/static/img/guide/platforms/android/asdk_emulator.png

Na szybsze można użyć `Maszyny wirtualnej przyspieszenie` poprawić szybkość realizacji. Wiele nowoczesnych procesorów dostarcza rozszerzeń do bardziej skutecznie wykonać maszyn wirtualnych. Przed próbą użycia tego typu przyspieszenia, trzeba określić, czy obecny system rozwoju CPU, obsługuje jeden następujące technologie wirtualizacji:

*   **Technologia wirtualizacji Intel** (VT-x, vmx) → [Intel VT-x obsługiwane procesory lista][12]
*   **AMD Virtualization** (AMD-V, SVM), obsługiwana tylko dla Linuksa (od maja 2006 r., obejmuje wszystkie procesory AMD AMD-V, z wyjątkiem Sempron).

 [12]: http://ark.intel.com/products/virtualizationtechnology

Innym sposobem, aby dowiedzieć się, jeśli twój procesor Intel wspiera technologię VT-x, to wykonując `Narzędzie do identyfikacji procesorów Intel`, dla `systemu Windows`można pobrać z [Centrum pobierania][13]Intel, lub można użyć [Narzędzia booteable][14], który jest `Niezależny od systemu operacyjnego`.

 [13]: https://downloadcenter.intel.com/Detail_Desc.aspx?ProductID=1881&DwnldID=7838
 [14]: https://downloadcenter.intel.com/Detail_Desc.aspx?ProductID=1881&DwnldID=7840&lang=eng

Po instalacji i wykonać `Procesor Intel identyfikacja Utility` na Windows, pojawi się następujące okno, aby sprawdzić, czy twój procesor obsługuje technologie wirtualizacji:

![][15]

 [15]: {{ site.baseurl }}/static/img/guide/platforms/android/intel_pid_util_620px.png

W celu przyspieszenia emulator, musisz pobrać i zainstalować jeden lub więcej obrazów systemu `x 86 firmy Intel Atom` , a także `Intel sprzęt przyspieszyć wykonanie Manager (HAXM)`.

Otwórz Menedżera Android SDK i wybierz obraz systemu `x 86 firmy Intel Atom` , niezależnie od wersji, którą chcesz przetestować. Następnie przejdź do `Extras` wybierz `Intel x 86 Emulator Accelerator (HAXM)`i zainstalować te pakiety:

![][16]

 [16]: {{ site.baseurl }}/static/img/guide/platforms/android/asdk_man_intel_image_haxm.png

Po pobraniu, uruchom Instalatora Intel, który jest dostępny w twój Android SDK w `Intel/Dodatki/Hardware_Accelerated_Execution_Manager`. **Uwaga**:`Jeśli masz jakiekolwiek problemy z instalacją pakietu, można znaleźć więcej informacji i wskazówki krok po kroku, sprawdź ten` [Artykuł Intel][17].

 [17]: http://software.intel.com/en-us/android/articles/speeding-up-the-android-emulator-on-intel-architecture

1.  Zainstaluj jeden lub więcej obrazów systemu `x 86 firmy Intel Atom` , a także `Intel sprzęt przyspieszyć wykonanie Manager`, dostępnych w ramach **dodatków**.

2.  Biegać ten rata Intel, który jest dostępny w twój Android SDK w `Intel/Dodatki/Hardware_Accelerated_Execution_Manager`.

3.  Tworzenie nowych AVD z miejsce docelowe ustawić obraz Intel.

4.  Podczas uruchamiania emulatora, upewnij się, nie są bez komunikatów o błędach, wskazując błąd ładowania modułów HAX.

## Tworzenie nowego projektu

W tym momencie aby utworzyć nowy projekt można wybrać narzędzia CLI przekreślać platforma opisanego w interfejs wiersza poleceń, lub zbiór specyficznych dla systemu Android powłoka narzędzia. Z katalogu kodu źródłowego, tutaj jest podejście CLI:

        $ cordova create hello com.example.hello HelloWorld
        $ cd hello
        $ cordova platform add android
        $ ccordova prepare              # or "cordova build"


Tutaj jest odpowiednie podejście shell narzędzie niższego poziomu dla systemu Unix i Windows:

        $ /path/to/cordova-android/bin/create /path/to/new/hello com.example.hello HelloWorld
        C:\path\to\cordova-android\bin\create.bat C:\path\to\new\hello com.example.hello HelloWorld


## Skompiluj projekt

Jeśli używasz CLI w rozwoju, projekt katalogu najwyższego poziomu `www` katalog zawiera pliki źródłowe. Uruchomić wszelki od tych w katalogu projektu, aby odbudować aplikacji:

        $ cordova build                   # build all platforms that were added
        $ cordova build android           # build debug for only Android
        $ cordova build android --debug   # build debug for only Android
        $ cordova build android --release # build release for only Android


Jeśli używasz Android specyficzne narzędzia powłoki w rozwoju, ma innego podejścia. Po wygenerowaniu projektu, domyślnie aplikacja źródła jest dostępnych w podkatalogu `aktywów/www` . Kolejne polecenia są dostępne w jego podkatalogu `cordova` .

Polecenie `build` czyści pliki projektu i odbudowuje aplikacji. Oto składnia dla Mac i Windows. Pierwsze parę przykładów generowania informacji o debugowaniu, a drugi buduje aplikacje do wydania:

        $ /path/to/project/cordova/build --debug
        C:\path\to\project\cordova\build.bat --debug

        $ /path/to/project/cordova/build --release
        C:\path\to\project\cordova\build.bat --release


## Wdrażanie aplikacji

Można użyć narzędzia CLI `cordova` do wdrożenia aplikacji do emulatora lub urządzenie z linii poleceń:

        $ cordova emulate android       #to deploy the app on a default android emulator
        $ cordova run android --device  #to deploy the app on a connected device


W przeciwnym razie Użyj interfejsu alternatywne powłoki:

        $ /path/to/project/cordova/run --emulator
        $ /path/to/project/cordova/run --device


Można użyć **cordova run android --list** aby zobaczyć wszystkie dostępne cele i **cordova run android --target=target_name** do uruchomienia aplikacji na urządzenia lub emulatora (na przykład `cordova run android --target="Nexus4_emulator"`).

Za pomocą **cordova run --help** Zobacz dodatkowe budować i uruchamiać opcji.

To wyprowadziło aplikacji na ekranie i uruchamia to:

![][18]

 [18]: {{ site.baseurl }}/static/img/guide/platforms/android/emulator2x.png

Podczas `run` aplikacji, można również `build` to. Można dodać dodatkowe `--debug`, `--release`i flagi `- nobuild` do sterowania, jak jest zbudowany, lub nawet niezbędne jest czy przebudowy:

        $ /path/to/project/cordova/run --emulator --nobuild


## Inne polecenia

Następujące generuje szczegółowy dziennik aplikacji, jak to działa:

        $ /path/to/project/cordova/log
        C:\path\to\project\cordova\log.bat


Następujące czyści pliki projektu:

        $ /path/to/project/cordova/clean
        C:\path\to\project\cordova\clean.bat


## Otworzyć nowy projekt w SDK

Po dodaniu do projektu platformy android, można otworzyć go z w [Android Studio][6]:

1.  Uruchamianie aplikacji **Android Studio** .

2.  Wybierz opcję **Importowanie projektu (Eclipse ADT, Gradle itd.)**.

    ![][19]

3.  Wybierz lokalizację, gdzie platformy android jest przechowywana (`twój lub projektu/platform/android`).

    ![][20]

4.  Na pytanie `Gradle Sync` może po prostu odpowiedzieć **tak**.

 [19]: {{ site.baseurl }}/static/img/guide/platforms/android/asdk_import_project.png
 [20]: {{ site.baseurl }}/static/img/guide/platforms/android/asdk_import_select_location.png

Są ustawione teraz i można skompilować i uruchomić aplikację bezpośrednio z `Android Studio`.

![][21]

 [21]: {{ site.baseurl }}/static/img/guide/platforms/android/asdk_import_done.png

Zobacz [Android przegląd Studio][22] i [Tworzenie i uruchamianie z Android Studio][23] dla więcej szczegółów.

 [22]: http://developer.android.com/tools/studio/index.html
 [23]: http://developer.android.com/tools/building/building-studio.html
