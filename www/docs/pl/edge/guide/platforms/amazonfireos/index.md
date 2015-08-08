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

# Amazon ogień platformy OS Przewodnik

Ten poradnik pokazuje jak skonfigurować SDK środowiska wdrażania Cordova aplikacje dla urządzeń Amazon ognia systemu operacyjnego, takie jak rozpalić ogień HDX.

Zobacz następujące szczegółowe informacje specyficzne dla platformy:

*   Amazon ogień OS konfiguracja
*   Amazon ogień OS WebViews
*   Amazon ogień OS Plugins

## Wprowadzenie

Przez kierowanie na platformie Amazon ogień OS, Cordova programiści mogą tworzyć aplikacje webowe hybrydowe, które wykorzystują aparat zaawansowanych web zintegrowane urządzenia Kindle ognia. Amazon widoku sieci Web API (aww) jest runtime www na bazie chromu do ognia OS. Zamiennik dla widoku sieci Web, która pochodzi z urządzenia z systemem Android, aww daje możliwość tworzenia wykonywanie lepszych i bardziej wydajne aplikacje internetowe hybrydowy poprzez wsparcie mocniejszy silnik JavaScript (V8), zdalne debugowanie i optymalizacja sprzętu dla urządzeń rozpalić ogień w tym płótnie 2D przyspieszone, a dostęp do HTML5 funkcje nie obsługiwane przez Android zbudowany w widoku sieci Web takich jak: CSS Calc, walidacji formularza, getUserMedia, IndexedDB, Web pracowników, WebSockets i WebGL.

Aby uzyskać więcej informacji o interfejsie API WebView Amazon zapoznaj się z portalu deweloperów Amazon [HTML5 aplikacje hybrydowe Strona][1]. Pytania o pierwsze kroki i inne wsparcie problemy, proszę zobaczyć na portalu deweloperów Amazon [forum - hybrydowy HTML5 aplikacje][2].

 [1]: https://developer.amazon.com/public/solutions/platforms/android-fireos/docs/building-and-testing-your-hybrid-app
 [2]: http://forums.developer.amazon.com/forums/category.jspa?categoryID=41

## Wymagania i wsparcie

Rozwój Cordova aplikacje dla Amazon ognia systemu operacyjnego wymaga instalacji różne pliki obsługi, w tym wszystko, co potrzebne do rozwoju Android, jak również Amazon WebView SDK. Sprawdź na liście poniżej wymaganej instaluje:

*   Interfejs wiersza poleceń
*   [Android SDK][3]
*   [Apache Ant][4]
*   [Amazon WebView SDK][1]

 [3]: http://developer.android.com/sdk/
 [4]: http://ant.apache.org

## Instalacja

### Android SDK i Apache Ant

Zainstalować Android SDK z [developer.android.com/sdk][3]. Inaczej mogą być prezentowane z wyborem gdzie zainstalować SDK, Przenieś pobrane `adt-bundle` drzewo, aby wszędzie tam, gdzie można przechowywać narzędzia programistyczne.

Musisz uruchomić Menedżera SDK Android ( `android` z wiersza polecenia) co najmniej raz przed rozpoczęciem projektu Cordova. Upewnij się, aby zainstalować najnowszą wersję Android SDK narzędzia i SDK platformy **specjalnie API poziom 19**. Proszę zobacz [Konfigurowanie środowiska][5] na portalu deweloperów Amazon o więcej informacji na temat konfigurowania środowiska programowania urządzeń rozpalić ogień OS.

 [5]: https://developer.amazon.com/public/resources/development-tools/ide-tools/tech-docs/01-setting-up-your-development-environment

Instalacja Apache Ant zbudować narzędzie przez [pobranie mrówka dystrybucji binarnej][6], rozpakować do katalogu, w którym można odwołać się do później. Zobacz [Podręcznik Ant][7] więcej.

 [6]: http://ant.apache.org/bindownload.cgi
 [7]: http://ant.apache.org/manual/index.html

Cordova wiersza polecenia narzędzia do pracy, musisz dołączyć Android SDK `tools` , `platform-tools` i `apache-ant/bin` katalogi w środowisku ścieżki.

#### Ścieżka Mac/Linux

Na Mac, Linux lub innych platform uniksowych, można użyć edytora tekstu do tworzenia lub modyfikowania `~/.bash_profile` pliku, dodanie linii następujących, w zależności od tego, gdzie są zainstalowane SDK i Ant:

    Export PATH = ${ścieżka}: / rozwój/adt pakiet/sdk/platformy narzędzia: / rozwój/adt pakiet/sdk/tools: / rozwój/Apasz mrówka/bin


Ten udostępnia narzędzia SDK w nowo otwartego okna terminala. W przeciwnym wypadku Uruchom ten je udostępnić w bieżącej sesji:

    $ source ~/.bash_profile


#### Windows ścieżka

Aby zmienić ścieżka środowisko naturalne w systemie Windows:

*   Trzaskać u **wzdrygnąć** się menu w lewym dolnym rogu pulpitu, kliknij prawym przyciskiem myszy na **komputerze**, a następnie kliknij przycisk **Właściwości**.

*   Kliknij przycisk **Zaawansowane ustawienia systemu** w kolumnie po lewej stronie.

*   W oknie dialogowym wynikowe naciśnij przycisk **Zmienne środowiskowe**.

*   Wybierz zmienną **PATH** i naciśnij klawisz **Edytuj**.

*   Dołącz następujące ścieżki, w oparciu o gdzie zainstalowałeś SDK i mrówka, na przykład:

        ;C:\Development\adt-bundle\sdk\platform-tools;C:\Development\adt-bundle\sdk\tools;C:\Development\apache-ant\bin


*   Zapisz wartość i zamknij obu oknach dialogowych.

*   Także trzeba będzie włączyć Java. Otworzyć pewien rozkazywać wierzyciel i typ `java` , jeśli to nie działa, Dołącz lokalizacji plików binarnych Java do Twojej ścieżki, jak również. Upewnij się, że JAVA_HOME % jest skierowany do zainstalowanego katalogu JDK. Może trzeba dodać środowiska JAVA_HOME zmienny osobno.

        ; %JAVA_HOME%\bin


### Amazon WebView SDK

Aby utworzyć Cordova aplikacji przy użyciu Amazon ogień OS platformy docelowej, będziesz musiał pobrać, rozpakować i zainstalować pliki obsługi Amazon WebView SDK. Ten krok trzeba tylko zrobić na swój pierwszy projekt Amazon ogień OS.

*   Pobrać Amazon WebView SDK [Amazon Developer Portal][1].

*   Kopia `awv_interface.jar` z pobrać SDK do Cordova w katalogu roboczym. Utwórz commonlibs(shown below) folder, jeśli nie istnieje:

    **Mac/Linux:** `~/.cordova/lib/commonlibs/`

    **Windows:** `%USERPROFILE%\.cordova\lib\commonlibs`

## Tworzenie nowego projektu dla Amazon ogień OS

Użycie `cordova` narzędzie, aby skonfigurować nowy projekt, opisanym w The Cordova interfejs wiersza poleceń. Na przykład w katalogu kodu źródłowego:

    $ cordova create hello com.example.hello "HelloWorld"
    $ cd hello
    $ cordova platform add amazon-fireos
    $ cordova build


***Uwaga:*** Po raz pierwszy na platformie amazon-fireos jest zainstalowana w systemie, to pobierze odpowiednie pliki do katalogu roboczego Cordova, ale wtedy zakończy się niepowodzeniem, ponieważ brakuje plików pomocy AWV SDK (patrz wyżej). Postępuj zgodnie z instrukcjami powyżej, aby zainstalować `awv_interface.jar` , a następnie usunąć i dodać ponownie platformie amazon-fireos do projektu. Ten krok będzie tylko trzeba będzie zrobić pierwszy projekt Amazon ogień OS.

## Uruchamianie na urządzeniu

Push aplikacja bezpośrednio do urządzenia, upewnij się, że debugowanie USB jest włączona w urządzeniu, zgodnie z opisem na [Android Developer witryny][8]i używać mini kabla USB do podłączenia go do systemu.

 [8]: http://developer.android.com/tools/device.html

Aplikację można wcisnąć do urządzenia z linii poleceń:

    $ cordova uruchomić Amazonka fireos


Na przemian w Eclipse, kliknij prawym przyciskiem myszy projekt i wybierz **Uruchom jako → Android aplikacji**.

**Uwaga**: obecnie badania poprzez emulator nie jest obsługiwana dla Amazon widoku sieci Web apps, dodatkowo Amazon widoku sieci Web API jest tylko dostępna na urządzeniach ogień OS. Aby uzyskać więcej informacji zajrzyj do dokumentacji [Amazon widoku sieci Web API SDK][1] .

### Uruchom flagi

Uruchom polecenie akceptuje parametry opcjonalne, jak określono w dokumencie Cordova Command Line Interface, ogień OS akceptuje również dodatkowe `--debug` Flaga, która umożliwi chromu Developer narzędzia do debugowania zdalnego w sieci web.

Aby użyć narzędzia programistyczne, wpisz:

    $ cordova run --debug amazon-fireos


Umożliwi to narzędzia działa klient. Można to podłączyć do klienta przez przekierowanie portów przy użyciu Android Debug most (adb) powołując się na nazwę pakiet aplikacji.

Na przykład:

    ADB tcp:9222 do przodu localabstract:com.example.helloworld.devtools


Następnie można użyć DevTools za pośrednictwem przeglądarki na bazie chromu, przechodząc do:`http://localhost:9222`.

### Opcjonalna obsługa Eclipse

Po utworzeniu, możesz użyć Eclipse, które przychodzi wraz z Android SDK, aby zmodyfikować projekt. Uważaj, że zmiany wprowadzone przez Eclipse zostaną zastąpione, jeśli nadal używać narzędzia wiersza polecenia Cordova.

*   Uruchamianie aplikacji **Eclipse** .

*   Wybierz element menu **Nowy projekt** .

*   Wybrać **Projekt Android z istniejącego kodu** wynikowego-okno dialogowe i naciśnij przycisk **następny**: ![][9]

*   Przejdź do `hello` , lub którykolwiek katalogu utworzony dla projektu, a następnie do `platforms/amazon-fireos` podkatalogu.

*   Zaćmienie będzie wyświetlał Witam i Witam CorddovaLib - 2 projekty mają zostać dodane. Dodać oba.

*   Naciśnij przycisk **Zakończ**.

 [9]: {{ site.baseurl }}/static/img/guide/platforms/android/eclipse_new_project.png

Gdy otworzy się okno Eclipse, czerwony **X** mogą pojawiać się problemy nierozwiązane. Jeśli tak, wykonaj następujące kroki dodatkowe:

*   Kliknij prawym przyciskiem myszy na katalogu projektu.

*   W wyniku **Właściwości** okno dialogowe Wybierz **Android** z okienka nawigacji.

*   Cel budowy projektu wybierz na najwyższym poziomie Android API (obecnie 19 poziomu API) zainstalowane.

*   Kliknij przycisk **OK**.

*   Wybierz **Clean** z menu **projekt** . To powinno poprawić wszystkie błędy w projekcie.
