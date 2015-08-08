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

# Interfejs wiersza poleceń

Ten poradnik pokaże jak tworzyć i wdrażać aplikację na różne platformy mobilne z wykorzystaniem interfejsu wiersza poleceń (CLI) projektu `cordova`. Narzędzie to pozwala na tworzenie nowych projektów, budować je na różnych platformach i uruchomić na prawdziwych urządzeniach lub w emulatory. CLI jest głównym narzędziem dla przepływu pracy między platformami, opisanych w przeglądzie. Inaczej można również użyć CLI do zainicjowania projektu kod, a następnie przełączyć się do różnych platform SDK i powłoka narzędzia do dalszego rozwoju.

## Wymagania

Przed uruchomieniem narzędzi wiersza poleceń, należy zainstalować SDK dla każdej docelowej platformy. (Zobacz Platform Guides, aby poznać więcej szczegółów.)

Aby dodać obsługę lub przebudować projekt dla którejkolwiek z platform, trzeba uruchomić interfejs wiersza poleceń z komputera, który wspiera docelowe platformy SDK. CLI obsługuje następujące kombinacje:

*   iOS (Mac)
*   Amazon ogień OS (Mac, Linux, Windows)
*   Android (Mac, Linux, Windows)
*   Jeżyna 10 (Mac, Linux, Windows)
*   Windows Phone 8 (Windows)
*   Systemu Windows (Windows)
*   Firefox OS (Mac, Linux, Windows)

Na komputerach Mac wiersz poleceń jest dostępny za pośrednictwem aplikacji *Terminal*. Na komputerach PC jest dostępny jako *Wiersz poleceń*, znajdujący się on w *Akcesoriach*.

**Uwaga**: dla platformy tylko w systemie Windows, można jeszcze zrobić swój rozwój na sprzęcie Mac przez w środowisku wirtualnej lub w trybie podwójnego rozruchu z systemem Windows. Dla dostępnych opcji zobacz przewodnik platformy Windows Phone 8 lub przewodnik platformy Windows.

Bardziej prawdopodobne jest to, że będziesz uruchamiał CLI na różnych maszynach, wtedy bardziej sensowne jest trzymanie kodu źródłowego w zdalnym repozytorium, które będzie można ściągnąć do lokalnych katalogów roboczych.

## Instalacja w consoli Cordova

Narzędzie wiersza polecenia Cordova jest dystrybuowany w postaci pakietu npm w formacie gotowy wobec używać. Nie jest konieczne skompilować go ze źródeł.

Aby zainstalować narzędzia wiersza poleceń projektu `cordova`, wykonaj następujące kroki:

1.  Pobierz i zainstaluj [Node.js][1]. Po instalacji, powinny być w stanie powołać `node` i `npm` na linii poleceń. W razie potrzeby, opcjonalnie może użyć narzędzia takie jak `nvm` lub `nave` do zarządzania Node.js instalacji.

2.  Pobierz i zainstaluj [git klienta][2], jeśli nie masz. Po instalacji, powinny być w stanie powołać `git` na linii poleceń. Mimo, że nie będzie używał `git` ręcznie, CLI zza kulis go używać do pobierania niektórych aktywów, podczas tworzenia nowego projektu.

3.  Zainstaluj `cordova` za pomocą modułu `npm` narzędzie node.js. `cordova`Moduł zostanie automatycznie pobrana przez `npm` narzędzie.

 [1]: http://nodejs.org/
 [2]: http://git-scm.com/

*   na OS X i Linux:

            $ sudo npm install -g cordova


    Na OS X i Linux Tworzenie prefiksu `npm` z `sudo` może być konieczne wobec rata ten rozwój narzędzie w inny sposób zastrzeżonych katalogów takich jak `/usr/local/share` . Jeśli używasz narzędzia opcjonalnie nvm/nawy lub ma dostęp do zapisu do katalogu instalacji, może być w stanie pominąć `sudo` prefiks. Jest dostępnych [więcej porad][3] na temat korzystania z `npm` bez `sudo` , jeśli chcecie to zrobić.

*   w systemie Windows:

            C:\>npm install -g cordova


    `-g`Flaga powyżej mówi `npm` zainstalować `cordova` na całym świecie. W przeciwnym razie zostanie zainstalowana w `node_modules` podkatalogiem bieżącego katalogu roboczego.

    Może trzeba dodać `npm` do swojej `PATH` Aby wywołać globalnie rata `npm` modułów. W systemie Windows `npm` zazwyczaj można znaleźć w `C:\Users\username\AppData\Roaming\npm` . Na OS X i Linux to zwykle znajdują się w`/usr/local/share/npm`.

    Dziennik instalacji może powodować błędy na dowolnej platformie odinstalowałem SDK.

    Po instalacji, powinny być w stanie uruchomić `cordova` w wierszu polecenia bez argumentów i to należy wydrukować tekst pomocy.

 [3]: http://justjs.com/posts/npm-link-developing-your-own-npm-modules-without-tears

## Tworzenie aplikacji

Przejdź do katalogu, gdzie utrzymujesz swój kod źródłowy i wywołaj poniższe polecenie:

        $ cordova create hello com.example.hello HelloWorld


Może to zająć trochę czasu dla polecenia do wykonania, więc uzbroić się w cierpliwość. Uruchomienie polecenia z `-d` opcja wyświetla informacje o postępach.

Pierwszy argument *Witam* określa katalog został wygenerowany dla projektu. Katalog ten nie powinien już istnieć, Cordova go utworzy. Podkatalog `www` przetrzymuje stronę domową aplikacji, wraz z różnymi zasobami znajdującymi się w `css`, `js`, oraz `img`, które przestrzegają konwencję nazw plików dla tworzenia stron internetowych. Aktywa te będą przechowywane na lokalnym systemie plików urządzenia, nie był zdalnie. Plik `config.xml` zawiera istotne metadane potrzebne do tworzenia i dystrybucji aplikacji.

Drugi argument `com.example.hello` zapewnia identyfikator odwrotnej domeny styl twojego projektu. Ten argument jest opcjonalny, ale tylko wtedy, gdy również pominięto trzeci argument, ponieważ argumenty pozycyjne. Możesz edytować tę wartość później w `config.xml` pliku, ale należy pamiętać, że może być kod generowany poza `config.xml` za pomocą tej wartości, takich jak nazwy pakietu Java. Wartością domyślną jest `io.cordova.hellocordova` , ale zaleca się, że można wybrać odpowiednią wartość.

Trzeci argument `HelloWorld` zawiera tytuł wyświetlania aplikacji. Ten argument jest opcjonalny. Możesz edytować tę wartość później w `config.xml` pliku, ale należy pamiętać, że może być kod generowany poza `config.xml` za pomocą tej wartości, takich jak nazwy klas Java. Wartością domyślną jest `HelloCordova` , ale zaleca się, że można wybrać odpowiednią wartość.

## Dodawanie platformy

Wszystkie kolejne polecenia muszą być uruchamiane w katalogu projektu lub w odpowiednich podkatalogach:

        $ cd hello


Zanim zbudujesz projekt, musisz określić docelowe platformy. Możliwość uruchomienia tych poleceń zależy od tego czy Twój komputer wspiera dany zestaw SDK oraz czy jest on zainstalowany. Uruchom jedno z nich na komputerze Mac:

        $ cordova platform add ios
        $ cordova platform add amazon-fireos
        $ cordova platform add android
        $ cordova platform add blackberry10
        $ cordova platform add firefoxos


Uruchom jedno z nich na komputerze z Windows, *wp* odnosi się do różnych wersji systemu operacyjnego Windows Phone:

        dodać platformy cordova $ wp8 $ cordova platformy windows $ cordova platformy dodać dodać dodać Amazonka fireos $ cordova platformy android $ cordova platformy dodać blackberry10 $ cordova platformy dodać firefoxos


Aby sprawdzić aktualny zestaw platform uruchom:

        $ cordova platforms ls


(Zauważ, że polecenia `platform` i `platforms` są tożsame.)

Uruchom jedno z tożsamych poleceń aby usunąć platformę:

        $ cordova platform remove blackberry10
        $ cordova platform rm amazon-fireos
        $ cordova platform rm android


Uruchamianie polecenia, aby dodać lub usunąć platform wpływa na zawartość katalogu projektu *platformy* , gdzie każdej określonej platformy pojawia się jako podkatalog. *Www* katalog źródłowy jest powielana w podkatalogu każdej platformy, znajdujących się na przykład w `platforms/ios/www` lub `platforms/android/assets/www` . Ponieważ CLI stale kopie plików z folderu *www* źródła, powinno się edytować tylko te pliki, a nie te znajdujące się w podkatalogach *platformy* . Jeśli używasz wersji oprogramowania, należy dodać ten folder źródłowy *www* wraz z folderu *Scala* , systemu kontroli wersji. (Więcej informacji na temat folderu *Scala* , który można znaleźć w sekcji Dostosuj każdy platformy poniżej).

**Ostrzeżenie**: podczas tworzenia aplikacji za pomocą CLI, należy *nie* wydawać żadnych plików w `/platforms/` katalogu, chyba że wiesz co robisz, czy dokumentacja określa inaczej. Pliki w tym katalogu są rutynowo zastępowane podczas przygotowywania wniosków o budynku, lub gdy są ponownie zainstalować wtyczki.

Jeśli chcesz w tym momencie, można użyć SDK Xcode np Eclipse aby otworzyć projekt, który został utworzony. Trzeba będzie otworzyć pochodnych zbiór aktywów z `/platforms/` katalogu do opracowania z SDK. To jest ponieważ SDK określonych metadane są przechowywane w odpowiednich `/platform/` podkatalogu. (Zobacz przewodniki platformy informacji na temat tworzenia aplikacji w ramach każdego IDE). Użyj tego podejścia, jeśli po prostu chcesz zainicjować projekt za pomocą CLI, a następnie przejść do zestawu SDK dla rodzimych pracy.

Czytaj dalej, jeśli chcesz korzystać z podejścia przekreślać platforma pracy (CLI) dla rozwoju całego cyklu.

## Budowanie aplikacji

Domyślnie `cordova create` skrypt generuje szkieletowych aplikacji opartych na sieci web, których strona jest projektem `www/index.html` pliku. Edycja tej aplikacji, jednak chcesz, ale wszelkie inicjowania powinien być określony jako część `deviceready` obsługi zdarzeń, odwołuje się domyślnie z`www/js/index.js`.

Uruchom następujące polecenie, aby zbudować wielokrotnie powtarzane projekt:

        $ cordova build


To generuje kod specyficzny dla platformy w ramach projektu `platforms` podkatalogu. Opcjonalnie można ograniczyć zakres każdej budowy do platformy:

        $ cordova build ios


`cordova build`Polecenia jest skrótem następujące dane, które w tym przykładzie jest również ukierunkowane na jednej platformie:

        $ cordova prepare ios
        $ cordova compile ios


W tym przypadku, po uruchomieniu `prepare` , można użyć Apple Xcode SDK jako alternatywa do modyfikowania i skompilować kod specyficzny dla platformy, Cordova generuje w `platforms/ios` . Za pomocą tego samego podejścia z innych Platform SDK.

## Testowania aplikacji na emulatorze lub urządzenia

SDK dla platform mobilnych, często pochodzą z emulatorów, które wykonać obraz urządzenie, tak, że można uruchomić aplikacji na ekranie i zobaczyć, jak to współgra z wieloma funkcjami platformy. Uruchom polecenie, takie jak następujące odbudować aplikacji i wyświetlić go w specjalnej platformy emulatora:

        $ cordova emulate android


Niektóre platformy mobilne naśladować konkretne urządzenie domyślnie, takich jak iPhone iOS projektów. Dla innych platform może trzeba najpierw powiązać urządzenie z emulatorem.

**Uwaga**: Emulator pomoc nie jest obecnie dostępna na Amazon ogień OS.

(Patrz szczegółowe Poradniki platformy). Na przykład, użytkownik może najpierw uruchomić `android` polecenie, aby uruchomić Android SDK, a następnie uruchomić obraz danego urządzenia, który uruchamia go zgodnie z jego zachowanie domyślne:

![][4]

 [4]: {{ site.baseurl }}/static/img/guide/cli/android_emulate_init.png

Następujących się z `cordova emulate` polecenie odświeża obraz emulatora do wyświetlania najnowszych aplikacji, która jest już dostępna do uruchomienia na ekranie:

![][5]

 [5]: {{ site.baseurl }}/static/img/guide/cli/android_emulate_install.png

Na przemian można podłączyć telefon do komputera i przetestować aplikację bezpośrednio:

        $ cordova run android


Przed uruchomieniem tego polecenia, należy skonfigurować urządzenie do testowania, zgodnie z procedurami, które są różne dla każdej platformy. W urządzenia Android i Amazon ognia systemu operacyjnego trzeba by włączyć **debugowanie USB** opcja na urządzeniu i może dodać sterownik USB od twój environmnent rozwoju. Zobacz szczegóły każdej platformy platformy przewodników.

## Dodaj funkcje Plugin

Podczas budowania i zobacz nowy projekt, domyślnej aplikacji, która pojawia się robi bardzo wiele. Można zmodyfikować aplikację na wiele sposobów, aby skorzystać z standardowych technologii internetowych, ale dla aplikacji do komunikowania się ściśle z różnych funkcji na poziomie urządzenia, trzeba dodać pluginy, które zapewniają dostęp do podstawowych interfejsów API Cordova.

*Plugin* jest trochę o dodatku kodu, który dostarcza interfejs do rodzimych komponentów. Można zaprojektować swój własny interfejs wtyczki, na przykład podczas projektowania hybrydowych aplikacji, która łączy Cordova WebView z rodzimych komponentów. (Zobacz osadzanie WebViews i [Plugin rozwoju Przewodnik][6] szczegółów.) Częściej możesz dodać plugin aby włączyć jedną z Cordova w podstawowe funkcje urządzenia poziom w API Reference.

 [6]: guide_hybrid_plugins_index.md.html#Plugin%20Development%20Guide

Począwszy od wersji 3.0 podczas tworzenia projektu Cordova nie ma żadnych pluginów, które są obecne. To nowe zachowanie domyślne. Żadnych pluginów, które chcecie, nawet podstawowych wtyczek, należy jawnie dodać.

Wykaz tych pluginów, w tym dodatkowe pluginy trzeciej przez Wspólnotę, można znaleźć w rejestrze [plugins.cordova.io][7]. CLI umożliwia wyszukiwanie wtyczek z tego rejestru. Na przykład wyszukiwanie `bar` i `code` tworzy jeden wynik, który odpowiada oba terminy jako przypadek-niewrażliwe podciągów:

 [7]: http://plugins.cordova.io/

        $ cordova plugin search bar code

        com.phonegap.plugins.barcodescanner - Scans Barcodes


Wyszukiwanie tylko `bar` określenie wydajności i wyników dodatkowe:

        cordova-plugin-statusbar - Cordova StatusBar Plugin


`cordova plugin add`Polecenia wymaga określenia repozytorium kodu wtyczki. Oto przykłady jak może używasz CLI do dodawania funkcji do aplikacji:

*   Informacje podstawowe urządzenie (urządzenia API):

        $ cordova plugin add cordova-plugin-device


*   Połączenie sieciowe i akumulator wydarzeń:

        $ cordova plugin add cordova-plugin-network-information
        $ cordova plugin add cordova-plugin-battery-status


*   Akcelerometr, kompas i geolokalizacja:

        $ cordova plugin add cordova-plugin-device-motion
        $ cordova plugin add cordova-plugin-device-orientation
        $ cordova plugin add cordova-plugin-geolocation


*   Kamera, odtwarzanie i przechwytywania:

        $ cordova plugin add cordova-plugin-camera
        $ cordova plugin add cordova-plugin-media-capture
        $ cordova plugin add cordova-plugin-media


*   Dostęp do plików na urządzeniu lub w sieci (File API):

        $ cordova plugin add cordova-plugin-file
        $ cordova plugin add cordova-plugin-file-transfer


*   Powiadomienia za pośrednictwem okna dialogowego lub wibracji:

        $ cordova plugin add cordova-plugin-dialogs
        $ cordova plugin add cordova-plugin-vibration


*   Kontakty:

        $ cordova plugin add cordova-plugin-contacts


*   Globalizacja:

        $ cordova plugin add cordova-plugin-globalization


*   Ekranu powitalnego:

        $ cordova plugin add cordova-plugin-splashscreen


*   Otwarta nowa przeglądarka windows (InAppBrowser):

        $ cordova plugin add cordova-plugin-inappbrowser


*   Konsoli debugowania:

        $ cordova plugin add cordova-plugin-console


**Uwaga**: The CLI dodaje kod wtyczki odpowiednio dla każdej platformy. Jeśli chcesz się rozwijać z niższego poziomu powłoka narzędzia lub platformy SDK, jak wspomniano w przeglądzie, należy uruchomić narzędzie Plugman dodac pluginy osobno dla każdej platformy. (Aby uzyskać więcej informacji, zobacz za pomocą Plugman do zarządzania wtyczki).

Użycie `plugin ls` (lub `plugin list` , lub `plugin` przez sam) aby wyświetlić aktualnie zainstalowanych wtyczek. Wyświetla każdego według jego identyfikatora:

        $ cordova plugin ls    # or 'plugin list'
        [ 'cordova-plugin-console' ]


Usunąć plugin, odnoszą się do niego przez ten sam identyfikator, który pojawia się na liście. Na przykład tutaj jest, jak usunie wsparcie dla konsoli debugowania od wersji:

        $ cordova plugin rm cordova-plugin-console
        $ cordova plugin remove cordova-plugin-console    # same


Można usunąć partii lub określania więcej niż jeden argument dla każdego polecenia, aby dodać pluginy:

        $ cordova plugin add cordova-plugin-console cordova-plugin-device


## Wtyczki zaawansowane opcje

Po dodaniu pluginu, kilka opcje pozwalają określić skąd pobrać wtyczkę. Powyższe przykłady za pomocą dobrze znanych `registry.cordova.io` wpisywać do rejestru i plugin jest określony przez `id` :

        $ cordova plugin add cordova-plugin-console


`id`Może również obejmować numer wersji wtyczki, dołączane po `@` charakter. `latest`Wersja jest aliasem do najnowszej wersji. Na przykład:

        $ cordova plugin add cordova-plugin-console@latest
        $ cordova plugin add cordova-plugin-console@0.2.1


Jeśli wtyczka nie jest zarejestrowany w `registry.cordova.io` , ale znajduje się w innym repozytorium git, można określić alternatywnego adresu URL:

        $ cordova plugin add https://github.com/apache/cordova-plugin-console.git


W powyższym przykładzie git pobiera wtyczki od końca gałąź master, ale alternatywne git-ref tagu lub oddział można być dołączane po `#` znaków:

        $ cordova plugin add https://github.com/apache/cordova-plugin-console.git#r0.2.0


Jeśli plugin (i jego `plugin.xml` pliku) jest w podkatalogu w git repo, można określić jej `:` charakter. Należy zauważyć, że `#` charakter jest nadal potrzebne:

        $ cordova plugin add https://github.com/someone/aplugin.git#:/my/sub/dir


Można również połączyć git-ref i podkatalogu:

        $ cordova plugin add https://github.com/someone/aplugin.git#r0.0.1:/my/sub/dir


Na przemian, określić lokalną ścieżkę do katalogu plugin, który zawiera `plugin.xml` pliku:

        $ cordova plugin add ../my_plugin_dir


## Za pomocą *łączy* do dostosować każdy platformy

Podczas gdy Cordova umożliwia łatwe wdrażanie aplikacji na wielu różnych platformach, czasami trzeba dodać dostosowań. W takim przypadku, nie chcesz zmodyfikować pliki źródłowe w różnych `www` katalogów wewnątrz najwyższego poziomu `platforms` katalogu, bo one są regularnie wymieniane z najwyższego poziomu `www` Źródło przekreślać platforma katalogu.

Zamiast tego najwyższego poziomu `merges` katalogu jest miejscem do należy określić zasoby do wdrażania na platformy. Każdy podkatalog platformy w `merges` lustra w strukturze katalogów `www` drzewo źródeł, dzięki czemu można zmienić lub dodać pliki, w razie potrzeby. Na przykład, Oto jak można używa `merges` do zwiększenia domyślny rozmiar czcionki dla urządzenia Android i Amazon ognia systemu operacyjnego:

*   Edytuj `www/index.html` pliku, dodanie linka do dodatkowego pliku CSS, `overrides.css` w tym przypadku:

        <link rel="stylesheet" type="text/css" href="css/overrides.css" />


*   Opcjonalnie można utworzyć pustą `www/css/overrides.css` plików, które miałyby zastosowanie do wszystkich buduje-Android, zapobieganie błąd brak pliku.

*   Tworzenie `css` podkatalogu, w `merges/android` , następnie dodać odpowiednie `overrides.css` pliku. Określ CSS, który zastępuje domyślny 12-punktowa czcionka rozmiar określony w `www/css/index.css` , na przykład:

        body { font-size:14px; }


Podczas odbudować projekt, Android wersja posiada rozmiar czcionki niestandardowe, podczas gdy inne pozostają niezmienione.

Można również użyć `merges` aby dodać pliki nieobecne w oryginale `www` katalogu. Na przykład, aplikacja wcielić grafiki *wstecz* do interfejsu iOS, przechowywane w `merges/ios/img/back_button.png` , a Android w wersji można zamiast przechwytywania `backbutton` wydarzenia z przycisku odpowiedniego sprzętu.

## Pomocy poleceń

Cordova oferuje kilka polecenia globalne, które mogą pomóc, jeśli utkniesz lub wystąpi problem. `help`Polecenie wyświetla wszystkie dostępne polecenia Cordova i ich składni:

    $ cordova help
    $ cordova        # same


Dodatkowo można uzyskać bardziej szczegółową pomoc dotyczącą określonego polecenia. Na przykład:

    $ cordova run --help


`info`Polecenie tworzy listę potencjalnie przydatnych informacji, aktualnie zainstalowany platformy, pluginy, wersje SDK dla każdej platformy i wersji CLI i `node.js` :

    $ cordova info


Zarówno przedstawia informacje na ekranie i przechwytuje dane wyjściowe w lokalnym `info.txt` pliku.

**Uwaga**: obecnie tylko szczegóły na iOS i Android platform są dostępne.

## Aktualizowanie Cordova i projektu

Po zainstalowaniu `cordova` Narzędzia, można zawsze zaktualizować go do najnowszej wersji uruchamiając następujące polecenie:

        $ sudo npm update -g cordova


Aby zainstalować określonej wersji, należy użyć następującej składni:

        $ sudo npm install -g cordova@3.1.0-0.2.0


Uruchom `cordova -v` Aby sprawdzić, która wersja jest aktualnie uruchomione. Uruchom `npm
info` polecenie już aukcji, który zawiera wersję z innych numerów dostępna w wersji:

        $ npm info cordova


Cordova 3.0 jest pierwsza wersja obsługująca interfejs wiersza polecenia opisanych w tej sekcji. Jeśli aktualizujesz z wersji przed 3.0, musisz utworzyć nowy projekt, jak opisano powyżej, a następnie skopiuj starszych aplikacji aktywów do najwyższego poziomu `www` katalogu. W stosownych przypadkach, dalsze szczegółowe informacje na temat uaktualniania do wersji 3.0 są dostępne w prowadnice platformy. Po uaktualnieniu do `cordova` interfejs wiersza polecenia i wykorzystanie `npm update` na bieżąco, bardziej czasochłonnych procedur opisanych tam już są istotne.

Cordova 3.0 + nadal mogą wymagać różnych zmiany struktury katalogu projektu poziom i inne zależności. Po uruchomieniu `npm` polecenia powyżej do aktualizacji Cordova, sam, może trzeba zapewnić zasoby projektu są zgodne z wymogami najnowszej wersji. Uruchom polecenie, takie jak następujące informacje dla każdej platformy, że budujemy:

        $ cordova platform update android
        $ cordova platform update ios
        ...etc.
