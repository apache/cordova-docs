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

# Przewodnik platformy Android

Ten poradnik pokazuje jak skonfigurować SDK środowiska wdrażania Cordova aplikacje dla systemu Android urządzeń i jak ewentualnie użyć narzędzi wiersza polecenia skoncentrowanych na Android w pracy rozwoju. Musisz zainstalować Android SDK, bez względu na to, czy chcesz użyć tych skoncentrowanych na platformie powłoka narzędzia lub CLI Cordova przekreślać platforma dla rozwoju. Dla porównania dwóch rozwoju ścieżki zobacz Omówienie. Szczegóły na CLI Zobacz interfejs wiersza poleceń.

## Wymagania i wsparcie

Cordova, Android wymaga Android SDK. Zobacz Android SDK [wymagania systemowe][1].

 [1]: http://developer.android.com/sdk/index.html

Cordova obsługuje Android 2.3.x (Piernik, począwszy od 10 poziomu gry Android API) i 4.x. Jako zasadę ogólną Androida w wersji stają się obsługiwane przez Cordova, jak one spadną poniżej 5% na Google [panel dystrybucji][2]. Androida w wersji starszej niż API poziom 10, oraz wersje 3.x (Honeycomb, API, poziom 11-13) spadnie znacznie poniżej tego progu 5%.

 [2]: http://developer.android.com/about/dashboards/index.html

## Zainstaluj narzędzia powłoki Cordova

Jeśli chcesz użyć Cordova w środku Android powłoka narzędzia w połączeniu z zestawu SDK, należy pobrania Cordova, z [cordova.apache.org][3]. Inaczej ignorować tej sekcji, jeśli masz zamiar używać narzędzia CLI przekreślać platforma opisanego w interfejs wiersza poleceń.

 [3]: http://cordova.apache.org

Pobierz Cordova zawiera osobne Archiwum dla każdej platformy. Pamiętaj rozwinąć odpowiednie archiwum, `android` w tym przypadku w pusty katalog. Odpowiednie narzędzia executible są dostępne w katalogu głównym `bin` katalogu. (Konsultacje w pliku **README** , jeśli jest to konieczne dla bardziej szczegółowe wskazówki).

Te powłoka narzędzia pozwalają na tworzenie, budować i uruchamiać aplikacje. O dodatkowy interfejs wiersza poleceń, który umożliwia funkcji plugin na wszystkich platformach Zobacz za pomocą Plugman do zarządzania wtyczki. Zobacz szczegóły jak rozwijać wtyczki wtyczki aplikacji.

Zainstalować Android SDK z [developer.android.com/sdk][4]. Android sdk jest dystrybuowany w postaci pliku 'adt - pakiet - < os > - < arch > - < ver >'. W systemie windows pakietu adt jest pakowane z Instalatora. Na OSX i Linux, zwykłe rozpakować "adt pakiet" w miejscu przechowywania narzędzi programistycznych. [Bardziej szczegółowe informacje na temat instalacji Android SDK można znaleźć tutaj][5]

 [4]: http://developer.android.com/sdk/
 [5]: http://developer.android.com/sdk/installing/bundle.html

Cordova wiersza polecenia narzędzia do pracy, lub CLI, który opiera się na nich, ty potrzebować wobec zawierać SDK `tools` i `platform-tools` katalogi w swojej `PATH` . Na komputerze Mac, można użyć edytora tekstu do tworzenia lub modyfikowania `~/.bash_profile` pliku, dodanie linii następujących, w zależności od tego, gdzie instaluje zestawu SDK:

        export PATH=${PATH}:/Development/adt-bundle/sdk/platform-tools:/Development/adt-bundle/sdk/tools
    

Dodać ścieżki dla `java` i `ant` w razie potrzeby. Tej linii w `~/.bash_profile` udostępnia te narzędzia w nowo otwartego okna terminala. Jeśli twój koñcowy okno jest już otwarta w OSX, lub w celu uniknięcia Logowanie/Wylogowanie na Linux, uruchom je udostępnić w bieżącym oknie terminala:

        $ source ~/.bash_profile
    

Aby zmodyfikować `PATH` środowiska na Windows 7:

1.  Trzaskać u **wzdrygnąć** się menu w lewym dolnym rogu pulpitu, kliknij prawym przyciskiem myszy na **komputerze**, a następnie wybierz **Właściwości**.

2.  Wybierz opcję **Zaawansowane ustawienia systemu** w kolumnie po lewej stronie.

3.  W oknie dialogowym wynikowe naciśnij przycisk **Zmienne środowiskowe**.

4.  Wybierz zmienną **PATH** i naciśnij klawisz **Edytuj**.

5.  Dopisz następujące czynności, aby `PATH` w oparciu o gdzie zainstalowałeś SDK, na przykład:
    
        ;C:\Development\adt-bundle\sdk\platform-tools;C:\Development\adt-bundle\sdk\tools
        

6.  Zapisz wartość i zamknij obu oknach dialogowych.

Należy również włączyć Java i holenderskie otworzyć pewien rozkazywać wierzyciel i typ `java` , a także typu `ant` . Dołącz do `PATH` którykolwiek z tych nie można uruchomić:

        ;%JAVA_HOME%\bin;%ANT_HOME%\bin
    

## Otworzyć nowy projekt w SDK

W tym momencie aby utworzyć nowy projekt można wybrać narzędzia CLI przekreślać platforma opisanego w interfejs wiersza poleceń, lub zbiór specyficznych dla systemu Android powłoka narzędzia. Z katalogu kodu źródłowego, tutaj jest podejście CLI:

        $ cordova create hello com.example.hello HelloWorld
        $ cd hello
        $ cordova platform add android
        $ cordova build
    

Tutaj jest odpowiednie podejście shell narzędzie niższego poziomu dla systemu Unix i Windows:

        $ /path/to/cordova-android/bin/create /path/to/new/hello com.example.hello HelloWorld
        C:\path\to\cordova-android\bin\create.bat C:\path\to\new\hello com.example.hello HelloWorld
    

Oto jak zmodyfikować go za pomocą zestawu SDK:

1.  Uruchamianie aplikacji **Eclipse** .

2.  Wybierz element menu **Nowy projekt** .

3.  Wybrać **Projekt Android z istniejącego kodu** wynikowego-okno dialogowe i naciśnij przycisk **następny**:
    
    ![][6]

4.  Jeśli używasz CLI, przejdź do `hello` tworzenia projektu, a następnie do katalogu `platforms/android` podkatalogu. Alternatywnie Jeśli używasz `create` powłoka narzędzia, po prostu przejdź do `hello` katalogu.

5.  Naciśnij przycisk **Zakończ**.

 [6]: img/guide/platforms/android/eclipse_new_project.png

Gdy otworzy się okno Eclipse, czerwony **X** mogą pojawiać się problemy nierozwiązane. Jeśli tak, wykonaj następujące kroki dodatkowe:

1.  Kliknij prawym przyciskiem myszy na katalogu projektu.

2.  W wyniku **Właściwości** okno dialogowe Wybierz **Android** z okienka nawigacji.

3.  Dla projektu budowy docelowego, wybierz na najwyższym poziomie Android API, który został zainstalowany.

4.  Kliknij przycisk **OK**.

5.  Wybierz **Clean** z menu **projekt** . To powinno poprawić wszystkie błędy w projekcie.

## Skompiluj projekt

Jeśli używasz CLI w rozwoju, katalogu projektu na najwyższym poziomie `www` katalog zawiera pliki źródłowe. Uruchamiać dowolną z tych w katalogu projektu, aby odbudować aplikacji:

        $ cordova build
        $ cordova build android   # do not rebuild other platforms
    

Jeśli używasz Android specyficzne narzędzia powłoki w rozwoju, ma innego podejścia. Po wygenerowaniu projektu, domyślnie aplikacja źródła jest dostępnych w `assets/www` podkatalogu. Kolejne polecenia są dostępne w jego `cordova` podkatalogu.

`build`Polecenie czyści pliki projektu i odbudowuje aplikacji. Oto składnia dla Mac i Windows. Pierwsze parę przykładów generowania informacji o debugowaniu, i drugi znaki aplikacje do wydania:

        $ /path/to/project/cordova/build --debug
        C:\path\to\project\cordova\build.bat --debug
    
        $ /path/to/project/cordova/build --release
        C:\path\to\project\cordova\build.bat --release
    

## Skonfigurować Emulator

Można użyć dowolnej `cordova` Narzędzia CLI lub Cordova w środku Android powłoki narzędzia do uruchamiania aplikacji w emulatorze. Tak czy inaczej, SDK musi być skonfigurowany do wyświetlania co najmniej jedno urządzenie. Aby to zrobić, należy użyć Menedżera SDK Android, aplikacji Java, który działa oddzielnie z Eclipse. Istnieją dwa sposoby, aby go otworzyć:

1.  Uruchomić `android` w wierszu polecenia.

2.  W Eclipse, naciśnij ten ikony paska narzędzi:
    
    ![][7]

 [7]: img/guide/platforms/android/eclipse_android_sdk_button.png

Po jej otwarciu, Android SDK Menedżer wyświetla różne biblioteki uruchomieniowe:

![][8]

 [8]: img/guide/platforms/android/asdk_window.png

Wybierz **Narzędzia → Zarządzaj AVDs** (Android urządzenia wirtualnego), a następnie wybierz dowolny element z **Definicji urządzenia** w oknie dialogowym wynikowe:

![][9]

 [9]: img/guide/platforms/android/asdk_device.png

Naciśnij przycisk **Utwórz AVD**, opcjonalnie Modyfikowanie nazwy, a następnie naciśnij **OK** , aby zaakceptować zmiany:

![][10]

 [10]: img/guide/platforms/android/asdk_newAVD.png

AVD następnie pojawia się na liście **Urządzeń wirtualnych z systemem Android** :

![][11]

 [11]: img/guide/platforms/android/asdk_avds.png

Aby otworzyć ten emulator jako oddzielną aplikację, wybierz AVD i naciśnij **Start**. Wprowadza to tyle jak na urządzenie, z dodatkowych formantów dostępnych przycisków sprzętowych:

![][12]

 [12]: img/guide/platforms/android/asdk_emulator.png

## Wdrażanie do emulatora

W tym momencie można użyć `cordova` CLI narzędzia do wdrażania aplikacji do emulatora z linii poleceń:

        $ cordova emulate android
    

W przeciwnym razie Użyj interfejs powłoki alternatywne:

        $ /path/to/project/cordova/run --emulator
    

Zamiast opierania się na cokolwiek emulatora jest obecnie włączona w zestawie SDK, można odwołać się do każdej nazwy, które należy dostarczyć:

        $ /path/to/project/cordova/run --target=NAME
    

To wyprowadziło aplikacji na ekranie i uruchamia to:

![][13]

 [13]: img/guide/platforms/android/emulator2x.png

Kiedy ty `run` aplikacji, można również `build` to. Można dodać dodatkowe `--debug` , `--release` , i `--nobuild` flagi, aby kontrolować, jak jest zbudowany, lub nawet niezbędne jest czy przebudowy:

        $ /path/to/project/cordova/run --emulator --nobuild
    

Jeśli natomiast pracujesz w Eclipse, kliknij prawym przyciskiem myszy projekt i wybierz **Uruchom jako → Android aplikacji**. Użytkownik może zostać poproszony o określenie AVD, jeśli nie są już otwarte.

Szybsze, można użyć `Virtual Machine Acceleration` Aby poprawić szybkość realizacji. Wiele nowoczesnych procesorów dostarcza rozszerzeń do bardziej skutecznie wykonać maszyn wirtualnych. Przed próbą użycia tego typu przyspieszenia, trzeba określić, czy obecny system rozwoju CPU, obsługuje jeden następujące technologie wirtualizacji:

*   **Technologia wirtualizacji Intel** (VT-x, vmx) → [Intel VT-x obsługiwane procesory lista][14]
*   **AMD Virtualization** (AMD-V, SVM), obsługiwana tylko dla Linuksa (od maja 2006 r., obejmuje wszystkie procesory AMD AMD-V, z wyjątkiem Sempron).

 [14]: http://ark.intel.com/products/virtualizationtechnology

Innym sposobem, aby dowiedzieć się, jeśli twój procesor Intel wspiera technologię VT-x, to wykonując `Intel Processor Identification Utility` , dla `Windows` można go pobrać z [Centrum pobierania][15]Intel, lub można użyć [Narzędzia booteable][16], który jest`OS Independent`.

 [15]: https://downloadcenter.intel.com/Detail_Desc.aspx?ProductID=1881&DwnldID=7838
 [16]: https://downloadcenter.intel.com/Detail_Desc.aspx?ProductID=1881&DwnldID=7840&lang=eng

Po instalacji i wykonać `Intel Processor Identification Utility` przez Windows, pojawi się następujące okno, aby sprawdzić, czy twój procesor obsługuje technologie wirtualizacji:

![][17]

 [17]: img/guide/platforms/android/intel_pid_util_620px.png

Aby przyspieszyć emulator, musisz pobrać i zainstalować jeden lub więcej `Intel x86 Atom` obrazów systemu, jak również`Intel Hardware Accelerated Execution Manager (HAXM)`.

Otwórz Menedżera SDK Androida i wybierz `Intel x86 Atom` obraz systemu, niezależnie od wersji, którą chcesz przetestować. Następnie przejdź do `Extras` i wybierz `Intel x86 Emulator Accelerator (HAXM)` i zainstalować te pakiety:

![][18]

 [18]: img/guide/platforms/android/asdk_man_intel_image_haxm.png

Po pobraniu uruchomić instalator Intel, który jest dostępny w twój Android SDK w `extras/intel/Hardware_Accelerated_Execution_Manager` . **Uwaga**: `If you have any problems installing the package, you can find more information and step by step guidance check this` [artykuł Intel][19] .

 [19]: http://software.intel.com/en-us/android/articles/speeding-up-the-android-emulator-on-intel-architecture

1.  Zainstaluj jeden lub więcej `Intel x86 Atom` obrazów systemu, jak również `Intel Hardware Accelerated Execution Manager` , dostępne w ramach **dodatków**.

2.  Biegać ten rata Intel, który jest dostępny w twój Android SDK w`extras/intel/Hardware_Accelerated_Execution_Manager`.

3.  Tworzenie nowych AVD z miejsce docelowe ustawić obraz Intel.

4.  Podczas uruchamiania emulatora, upewnij się, nie są bez komunikatów o błędach, wskazując błąd ładowania modułów HAX.

## Wdrażanie do urządzenia

Push aplikacja bezpośrednio do urządzenia, upewnij się, że debugowanie USB jest włączona w urządzeniu, zgodnie z opisem na [Android Developer witryny][20]i używać mini kabla USB do podłączenia go do systemu.

 [20]: http://developer.android.com/tools/device.html

Za pomocą tego polecenia CLI push aplikacja do urządzenia:

        $ cordova run android
    

.. .albo używać ten interfejs powłoki skoncentrowanych na Android:

        $ /path/to/project/cordova/run --device
    

Z nie flagi określone `run` polecenia wykrywa podłączone urządzenie, lub aktualnie uruchomionego emulatora, jeśli nie zostanie znaleziony, w przeciwnym razie prosi, aby określić emulator.

Aby uruchomić aplikację z w Eclipse, kliknij prawym przyciskiem myszy projekt i wybierz **Uruchom jako → Android aplikacji**.

## Inne polecenia

Następujące generuje szczegółowy dziennik aplikacji, jak to działa:

        $ /path/to/project/cordova/log
        C:\path\to\project\cordova\log.bat
    

Następujące czyści pliki projektu:

        $ /path/to/project/cordova/clean
        C:\path\to\project\cordova\clean.bat