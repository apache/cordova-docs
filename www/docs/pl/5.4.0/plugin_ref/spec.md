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

title: Specyfikacja plugin
---

# Specyfikacja plugin

`plugin.xml`Plik jest dokument XML w `plugins` nazw: `http://apache.org/cordova/ns/plugins/1.0` . Zawiera najwyższego poziomu `plugin` element, który określa plugin, a dzieci, które definiują strukturę plugin.

Element wtyczki próbki:

    <?xml version="1.0" encoding="UTF-8"?>
    <plugin xmlns="http://apache.org/cordova/ns/plugins/1.0"
        xmlns:android="http://schemas.android.com/apk/res/android"
        id="com.alunny.foo"
        version="1.0.2">
    

## *plugin* Elementu

`plugin`Element jest elementem najwyższego poziomu manifestu plugin. Posiada następujące atrybuty:

*   `xmlns`(wymagane): nazw plugin, `http://apache.org/cordova/ns/plugins/1.0` . Jeśli dokument zawiera XML z innych nazw, takich jak Tagi mają być dodane do `AndroidManifest.xml` pliku, tych nazw również powinny być włączone w element najwyższego poziom.

*   `id`(wymagane): domenie odwrotnej styl identyfikator plugin, takich jak`com.alunny.foo`

*   `version`(wymagane): numer wersji plugin, który odpowiada następujące wyrażenie regularne dur moll łatka styl:
    
        ^\d+[.]\d+[.]\d+$
        

## Elementy *silników* i *silnika*

Elementy podrzędne `<engines>` elementu określania wersji ram opartych na Apache Cordova, które obsługuje ten plugin. Przykład:

    <engines>
        <engine name="cordova" version="1.7.0" />
        <engine name="cordova" version="1.8.1" />
        <engine name="worklight" version="1.0.0" platform="android" scriptSrc="worklight_version"/>
    </engines>
    

Podobne do `<plugin>` element `version` atrybut ciąg określonej wersji powinna odpowiadać ciąg dur moll łatka, odpowiadające wyrażenie regularne:

        ^\d+[.]\d+[.]\d+$
    

Może również określić elementy silnika dopasowania rozmyte, aby uniknąć powtarzania i aby zmniejszyć konserwacji podczas aktualizacji platformie podstawowej. Narzędzia powinny wspierać minimum `>` , `>=` , `<` i `<=` , na przykład:

    <engines>
        <engine name="cordova" version=">=1.7.0" />
        <engine name="cordova" version="<1.8.1" />
    </engines>
    

`<engine>`Tagi również ma domyślnie obsługuje wszystkie główne platformy Cordova istnieje. Określanie `cordova` tag silnika oznacza, że wszystkie wersje Cordova na dowolnej platformie muszą spełniać atrybut wersji silnika. Może również listę platformy i ich wersje w celu zastąpienia catch-all `cordova` silnika:

    <engines>
        <engine name="cordova" version=">=1.7.0" />
        <engine name="cordova-android" version=">=1.8.0" />
        <engine name="cordova-ios" version=">=1.7.1" />
    </engines>
    

Oto lista domyślnie wyszukiwarki która `<engine>` tag obsługuje:

*   `cordova`
*   `cordova-plugman`
*   `cordova-amazon-fireos`
*   `cordova-android`
*   `cordova-ios`
*   `cordova-blackberry10`
*   `cordova-wp8`
*   `cordova-windows8`
*   `android-sdk` // returns the highest Android api level installed
*   `apple-xcode` // returns the xcode version 
*   `apple-ios` // returns the highest iOS version installed
*   `apple-osx` // returns the OSX version
*   `blackberry-ndk` // returns the native blackberry SDK version

Określanie niestandardowych opartych na Apache Cordova ram powinna być wymieniona w tagu silnik tak:

    <engines>
        <engine name="my_custom_framework" version="1.0.0" platform="android" scriptSrc="path_to_my_custom_framework_version"/>
        <engine name="another_framework" version=">0.2.0" platform="ios|android" scriptSrc="path_to_another_framework_version"/>
        <engine name="even_more_framework" version=">=2.2.0" platform="*" scriptSrc="path_to_even_more_framework_version"/>
    </engines>
    

Ramy niestandardowych opartych na Apache Cordova wymaga, aby element silnika zawiera następujące atrybuty: `name` , `version` , `scriptSrc` , i`platform`.

*   `name`(wymagane): nazwę czytelnej dla niestandardowych RAM.

*   `version`(wymagane): wersja, która swoje ramy muszą mieć, aby zainstalować.

*   `scriptSrc`(wymagane): plik skryptu, który opowiada plugman jaka wersja niestandardowych RAM jest. Idealnie ten plik powinien być w katalogu najwyższego poziomu katalogu wtyczki.

*   `platform`(wymagane): które platformy, które obsługuje twój ramy. Można użyć symbolu wieloznacznego `*` powiedzieć obsługiwane dla wszystkich platform, określić wiele z kreski jak `android|ios|blackberry10` lub tylko jednej platformy jak`android`.

plugman przerywa z niezerowy kod dla każdej wtyczki, którego cel projektu nie spełnia ograniczeń silnika.

Jeśli nie `<engine>` Tagi są określone, plugman próbuje zainstalować do katalogu projektu określonego cordova ślepo.

## *Nazwa* Elementu

Czytelny dla człowieka nazwę pluginu, którego zawartość tekstowa zawiera nazwę pluginu. Na przykład:

    <name>Foo</name>
    

Ten element nie ma (jeszcze) obsługi lokalizacji.

## *Opis* Elementu

Czytelny dla człowieka opis plugin. Treść tekstu elementu zawiera opis plugin. Przykład:

    <description>Foo plugin description</description>
    

Ten element nie ma (jeszcze) obsługi lokalizacji.

## *autor* Elementu

Imię i nazwisko autora pluginu. Treść tekstu element zawiera nazwę autora pluginu. Przykład:

    <author>Foo plugin description</author>
    

## *słowa kluczowe* Elementu

Plugin słowa. Treść tekstu elementu zawiera słowa przecinkami do opisania plugin. Przykład:

    <keywords>foo,bar</keywords>
    

## *licencja* Elementu

Plugin licencji. Treść tekstu elementu zawiera plugin licencji. Przykład:

    <license>Apache 2.0 License</license>
    

## *aktywów* Elementu

Jeden lub więcej elementów listy pliki lub katalogi, które mają zostać skopiowane do Cordova app `www` katalogu. Przykłady:

    <!-- a single file, to be copied in the root directory -->
    <asset src="www/foo.js" target="foo.js" />
    <!-- a directory, also to be copied in the root directory -->
    <asset src="www/foo" target="foo" />
    

Wszystkie `<asset>` Tagi wymagają zarówno `src` i `target` atrybuty. Wtyczki tylko do sieci Web zawiera głównie `<asset>` elementów. Wszelkie `<asset>` elementy, które są zagnieżdżone w `<platform>` określić elementy specyficzne dla platformy internetowej aktywów, zgodnie z opisem poniżej. Atrybuty:

*   `src`(wymagane): gdzie w pliku lub katalogu znajduje się w paczce plugin, stosunku do `plugin.xml` dokumentu. Jeśli plik nie istnieje w określonej `src` lokalizacji, plugman zatrzymuje się i odwraca proces instalacji, wysyła powiadomienie o konflikcie, a wychodzi z niezerowy kod.

*   `target` (required):
    
    Gdzie w pliku lub katalogu powinien znajdować się w aplikacji Cordova, stosunku do `www` katalogu. Aktywów mogą być kierowane do podkatalogów, na przykład:
    
        <asset src="www/new-foo.js" target="js/experimental/foo.js" />
        
    
    tworzy `js/experimental` katalogu w `www` katalogu, chyba że już obecny, a następnie kopie `new-foo.js` pliku i zmienia jego nazwę na `foo.js` . Jeżeli plik już istnieje w lokalizacji docelowej, plugman zatrzymuje się i odwraca proces instalacji, wysyła powiadomienie o konflikcie i wychodzi z kodem zera.

## *js moduł* Elementu

Większość wtyczek zawiera jeden lub więcej plików JavaScript. Każdy `<js-module>` odnosi się do pliku JavaScript oraz zapobiega konieczności dodawania użytkowników plugin `<script>` tagów dla każdego pliku. Podczas gdy `<asset>` Tagi po prostu skopiować plik z podkatalogu plugin do `www` , `<js-module>` Tagi są znacznie bardziej skomplikowane. Wyglądają tak:

    <js-module src="socket.js" name="Socket">
        <clobbers target="chrome.socket" />
    </js-module>
    

Podczas instalowania wtyczki z powyższego przykładu, `socket.js` jest kopiowany do `www/plugins/my.plugin.id/socket.js` i dodał(a) wpis do `www/cordova_plugins.js` . Na czas ładowania, kod w `cordova.js` używa XHR do każdego pliku i wstrzyknąć `<script>` znaczników w HTML. To dodaje mapowanie sprać lub scalić w stosownych przypadkach, jak opisano poniżej.

*Nie* Zawijaj pliku z `cordova.define` , który jest dodawany automatycznie. Moduł jest owinięty w zamknięcie, z `module` , `exports` , i `require` w zakres, jak to jest normalne dla AMD modułów.

Szczegóły na `<js-module>` znacznika:

*   `src`Odwołuje się do pliku w katalogu wtyczki w stosunku do `plugin.xml` pliku.

*   `name`Zawiera ostatnią częścią nazwy modułu. Ogólnie może być cokolwiek chcesz, i to tylko ważne, jeśli chcesz używać `cordova.require` Aby importować inne części wtyczek w kodzie JavaScript. Nazwa modułu dla `<js-module>` masz plugin `id` następuje wartość `name` . Dla powyższego przykładu z `id` z `chrome.socket` , Nazwa modułu jest`chrome.socket.Socket`.

*   Trzech Tagi są dozwolone w obrębie `<js-module>` :
    
    *   `<clobbers target="some.value"/>`wskazuje, że `module.exports` jest wstawiany do `window` obiekt jako `window.some.value` . Możesz mieć jak najwięcej `<clobbers>` , jak chcesz. Każdy obiekt nie jest dostępna na `window` jest tworzony.
    
    *   `<merges target="some.value"/>`wskazuje, że moduł powinny być połączone z każdej istniejącej wartości w `window.some.value` . Jeśli wszelki klucz już istnieje, wersja modułu zastępuje oryginalny. Możesz mieć jak najwięcej `<merges>` , jak chcesz. Każdy obiekt nie jest dostępna na `window` jest tworzony.
    
    *   `<runs/>`oznacza, że kod powinien być określony z `cordova.require` , ale nie zainstalowany na `window` obiektu. Jest to przydatne podczas inicjowania modułu, dołączanie procedury obsługi zdarzeń lub w inny sposób. Można mieć tylko do jednego `<runs/>` tagu. Należy zauważyć, że w tym `<runs/>` z `<clobbers/>` lub `<merges/>` jest zbędny, ponieważ one również `cordova.require` modułu.
    
    *   Pusta `<js-module>` jeszcze ładuje i są dostępne w innych modułów`cordova.require`.

Jeśli `src` nie rozwiąże do istniejącego pliku, plugman zatrzymuje się i odwraca instalacji, kwestii zgłoszenia problemu i wychodzi z kodem zera.

Zagnieżdżanie `<js-module>` elementy w `<platform>` deklaruje platformy JavaScript moduł powiązania.

## *zależność* Elementu

`<dependency>`Tag pozwala określić inne pluginy, na którym zależy od bieżącego plugin. Podczas przyszłych wersjach będzie dostęp do nich z repozytoriów plugin, w krótkim czasie wtyczki bezpośrednio są wywoływane jako adresów URL przez `<dependency>` Tagi. Są one sformatowane w następujący sposób:

    <dependency id="com.plugin.id" url="https://github.com/myuser/someplugin" commit="428931ada3891801" subdir="some/path/here" />
    

*   `id`: zawiera identyfikator wtyczki. Powinno być globalnie unikatowe i wyrażone w stylu domeny odwrotnej. Podczas gdy żadna z tych ograniczeń jest obecnie wymuszane, mogą być w przyszłości.

*   `url`: Adres URL dla wtyczki. To powinien odwołać repozytorium git, które plugman próbuje klon.

*   `commit`: To wszelkie odniesienia git rozumiane przez `git checkout` : oddział lub tag nazwę (np., `master` , `0.3.1` ), lub zatwierdzanie mieszania (np.`975ddb228af811dd8bb37ed1dfd092a3d05295f9`).

*   `subdir`: Określa, że istnieje zależność ukierunkowane plugin jako podkatalog repozytorium git. Jest to pomocne, ponieważ pozwala repozytorium zawiera kilka wtyczek powiązane, każdego indywidualnie określonego.

W przyszłości zostaną wprowadzone ograniczenia wersji, i repozytorium plugin będzie istnieć do obsługi pobierania przez nazwę a nie jawne adresy URL.

### Ścieżki względne zależności

Jeśli użytkownik zestaw `url` z `<dependency>` uchwyt do `"."` i `subdir` , zależne od wtyczka jest zainstalowana z tego samego lokalnego lub zdalnego repozytorium jako plugin rodzic, który określa `<dependency>` tagu.

Należy zauważyć, że `subdir` zawsze określa ścieżka względem katalogu *głównego* repozytorium git, nie plugin rodziców. To prawda, nawet jeśli masz zainstalowany plugin z lokalną ścieżkę bezpośrednio do niego. Plugman znajdzie głównym repozytorium git a następnie wyszukuje inne wtyczki z tam.

## *platforma* Elementu

`<platform>`Tag identyfikuje platform, które zrzeszyły się w kodzie macierzystym lub wymagają modyfikacji plików konfiguracyjnych. Narzędzia, za pomocą niniejszej specyfikacji można określić obsługiwane platformy i zainstalować kod do projektów Cordova.

Wtyczki bez `<platform>` Tagi są zakłada się tylko do JavaScript, jak i w związku z tym instalowanych na wszystkich platformach.

Znacznik platformy próbki:

    <platform name="android">
        <!-- android-specific elements -->
    </platform>
    <platform name="ios">
        <!-- ios-specific elements -->
    </platform>
    

Wymagane `name` atrybut identyfikuje platformy obsługiwane, kojarzenie elementu dzieci z tej platformy.

Platforma nazwy powinny być pisane małymi literami. Platforma nazwy, jak arbitralnie, znajdują się:

*   Amazonka fireos
*   Androida
*   blackberry10
*   iOS
*   wp8
*   windows8

## *plik źródłowy* Elementu

`<source-file>`Identyfikuje element kodu źródłowego pliku wykonywalnego, który powinien być zainstalowany w projekcie. Przykłady:

    <!-- android -->
    <source-file src="src/android/Foo.java"
                    target-dir="src/com/alunny/foo" />
    <!-- ios -->
    <source-file src="src/ios/CDVFoo.m" />
    <source-file src="src/ios/someLib.a" framework="true" />
    <source-file src="src/ios/someLib.a" compiler-flags="-fno-objc-arc" />
    

Obsługuje następujące atrybuty:

*   `src`(wymagane): Lokalizacja pliku stosunku do `plugin.xml` . Jeśli `src` nie można znaleźć pliku, plugman zatrzymuje się i odwraca instalacji, wysyła powiadomienie o problemie i wychodzi z kodem zera.

*   `target-dir`: Katalog do którego pliki powinny być skopiowane, względem katalogu głównego projektu Cordova. W praktyce, to jest najważniejsze dla opartych na platformie Java Platform, gdzie plik w `com.alunny.foo` pakiet musi znajdować się w `com/alunny/foo` katalogu. Dla platformy gdzie katalog źródłowy nie jest ważne należy pominąć ten atrybut.
    
    Podobnie jak w przypadku aktywów, jeśli `target` z `source-file` chcieliby zastąpić istniejący plik, plugman zatrzymuje się i odwraca instalacji, wysyła powiadomienie o problemie i wychodzi z kodem zera.

*   `framework`(tylko iOS): Jeśli ustawiona na `true` , także dodaje określony plik jako ramy do projektu.

*   `compiler-flags`(tylko iOS): Jeśli ustawiona, przypisuje flag kompilatora określonego dla pliku określonego źródła.

## *plik konfiguracyjny* Elementu

Identyfikuje plik XML-oparty konfiguracja ma zostać zmodyfikowana, gdzie w tym dokumencie modyfikacja powinna odbywać się, i to, co powinno być modyfikowane.

Są dwa typy plików, które zostały przetestowane pod kątem zmian z tego elementu `xml` i `plist` plików.

`config-file`Elementu tylko pozwala na dołączanie nowych dzieci do drzewa dokumentu XML. Dzieci są literały XML mają być wstawione w dokumencie docelowym.

Przykład XML:

    <config-file target="AndroidManifest.xml" parent="/manifest/application">
        <activity android:name="com.foo.Foo" android:label="@string/app_name">
            <intent-filter>
            </intent-filter>
        </activity>
    </config-file>
    

Przykład dla `plist` :

    <config-file target="*-Info.plist" parent="CFBundleURLTypes">
        <array>
            <dict>
                <key>PackageName</key>
                <string>$PACKAGE_NAME</string>
            </dict>
        </array>
    </config-file>
    

Obsługuje następujące atrybuty:

*   `target`:
    
    Plik ma zostać zmodyfikowana, a ścieżka względem katalogu głównego projektu Cordova.
    
    Cel może zawierać symboli wieloznacznych ( `*` ) elementy. W tym przypadku plugman rekursywnie wyszukiwania poprzez strukturę katalogów dla projektu i używa pierwszy mecz.
    
    Na iOS, lokalizację plików konfiguracyjnych względem katalogu głównego katalogu projektu nie jest znana, więc określając cel `config.xml` postanawia`cordova-ios-project/MyAppName/config.xml`.
    
    Jeśli określony plik nie istnieje, narzędzie ignoruje zmiany konfiguracja i kontynuuje instalację.

*   `parent`: Selektor XPath odwołującego się do rodziców elementy mają zostać dodane do pliku konfiguracyjnego. Jeśli używasz absolutną selektory, można użyć symboli wieloznacznych ( `*` ) aby określić element główny, np.`/*/plugins`.
    
    Dla `plist` plików, `parent` Określa, jakiego klucza nadrzędnego dodaje określony plik XML.
    
    Jeśli selektor nie rozwiąże do podrzędność określonego dokumentu, narzędzie zatrzymuje się i odwraca proces instalacji, ostrzeżenia i wychodzi z kodem zera.

*   `after`: Priorytetową listę przyjętych rodzeństwo po czym dodać fragment kodu XML. Przydatne do określania zmian w plikach, które wymagają ściśle kolejność elementów XML, takich jak <http://msdn.microsoft.com/en-us/library/windowsphone/develop/ff769509%28v=vs.105%29.aspx#BKMK_EXTENSIONSelement>

Na platformie Windows obsługuje dwa dodatkowe atrybuty (oba opcjonalne) gdy wpływających na meta-nazwa `package.appxmanifest`:

`device-target` atrybut wskazuje, że powinny być włączone, podczas tworzenia dla określonego miejsce docelowe typu urządzenia. Obsługiwane wartości są `win`, `phone` lub `all`.

`versions` atrybut wskazuje, że manifesty aplikacji dla określonej wersji systemu Windows powinny zostać zmienione tylko dla wersji, które odpowiadają określonej wersji ciąg. Wartość może być dowolny ciąg zakres semantyczny wersja ważny węzeł.

Przykłady użycia tych Windows określonych atrybutów:

    <config-file target="package.appxmanifest" parent="/Package/Capabilities" versions="<8.1.0">
        <Capability Name="picturesLibrary" />
        <DeviceCapability Name="webcam" />
    </config-file>
    <config-file target="package.appxmanifest" parent="/Package/Capabilities" versions=">=8.1.0" device-target="phone">
        <DeviceCapability Name="webcam" />
    </config-file>
    

Powyższy przykład ustawi pre-8.1 platform (Windows 8, konkretnie) wymaga możliwości urządzenia `webcam` i `picturesLibrary` Ogólna zdolność, i dotyczą możliwości urządzenia `webcam` tylko Windows 8.1 projektów, które budować dla Windows Phone. Niemodyfikowany Windows pulpit 8.1 systemów.

## *wtyczki plist* Elementu

To jest *nieaktualne* , jak odnosi się jedynie do cordova-ios 2.2.0 i poniżej. Użyj tagu `<config-file>` nowsze wersje Cordova.

Przykład:

    <config-file target="config.xml" parent="/widget/plugins">
        <feature name="ChildBrowser">
            <param name="ios-package" value="ChildBrowserCommand"/>
        </feature>
    </config-file>
    

Określa klucz i wartość, aby dołączyć do `AppInfo.plist` plik w projekcie Cordova iOS. Na przykład:

    <plugins-plist key="Foo" string="CDVFoo" />
    

## Elementy *pliku zasobów* i *plik nagłówkowy*

Jak pliki źródłowe, ale specjalnie dla platformy takie jak iOS, że odróżnić pliki źródłowe, nagłówków i zasobów. iOS przykłady:

    <resource-file src="CDVFoo.bundle" />
    <resource-file src="CDVFooViewController.xib" />
    <header-file src="CDVFoo.h" />
    

Przykład Android:

    <resource-file src="FooPluginStrings.xml" target="res/values/FooPluginStrings.xml" />
    

## *plik z lib* Elementu

Jak źródła, zasobów i pliki nagłówkowe, ale specjalnie dla platform takich jak BlackBerry 10 używający wygenerowana przez użytkowników bibliotek. Przykłady:

    <lib-file src="src/BlackBerry10/native/device/libfoo.so" arch="device" />
    <lib-file src="src/BlackBerry10/native/simulator/libfoo.so" arch="simulator" />
    

Obsługiwanych atrybutów:

*   `src`(wymagane): lokalizację pliku w stosunku do `plugin.xml` . Jeśli `src` nie można znaleźć, plugman zatrzymuje się i odwraca instalacji, kwestie ostrzeżenie o problemie i wychodzi z kodem zera.

*   `arch`: Architektura która `.so` plik został zbudowany, albo `device` lub`simulator`.

Na platformie Windows element `<lib-file>` umożliwia włączenie `< SDKReference >` w wygenerowane pliki projektu systemu Windows.

Obsługiwanych atrybutów:

*   `src`(wymagane): Nazwa zestawu SDK do włączenia (który będzie służyć jako wartość `Include` atrybut wygenerowany `<SDKReference>` element).

*   `arch`: Wskazuje, że `<SDKReference>` powinny być włączone, podczas tworzenia dla określonej architektury. Obsługiwane wartości są `x86` , `x64` lub`ARM`.

*   `device-target`: Wskazuje, że `<SDKReference>` powinny być włączone, podczas tworzenia dla określonego miejsce docelowe urządzenie typu. Obsługiwane wartości są `win` (lub `windows` ), `phone` lub`all`.

*   `versions`: Wskazuje, że `<SDKReference>` powinny być włączone, podczas tworzenia dla wersji, które odpowiadają określonej wersji ciąg. Wartość może być dowolny ciąg zakres semantyczny wersja ważny węzeł.

Przykłady:

    <lib-file src="Microsoft.WinJS.2.0, Version=1.0" arch="x86" />
    <lib-file src="Microsoft.WinJS.2.0, Version=1.0" versions=">=8.1" />
    <lib-file src="Microsoft.WinJS.2.0, Version=1.0" target="phone" />
    <lib-file src="Microsoft.WinJS.2.0, Version=1.0" target="win" versions="8.0" arch="x86" />
    

## *ramy* Elementu

Określa ramy (zwykle jest częścią platformy OS), na którym zależy od wtyczka.

Atrybut opcjonalny `custom` jest wartością logiczną wskazującą, czy RAM jest jeden, który jest dołączone jako część plików plugin (tak, to nie jest ramy systemu).

### *ramy* dla iOS

    <framework src="libsqlite3.dylib" />
    <framework src="social.framework" weak="true" />
    <framework src="relative/path/to/my.framework" custom="true" />
    

Atrybut opcjonalny `weak` jest wartością logiczną wskazującą, czy ramy powinny być słabo powiązane. Wartością domyślną jest `false`.

### *ramy* dla Androida

Na Androida (od cordova-android@4.0.0) *RAM* Tagi są używane do obejmują Maven zależności lub zawierać dołączoną bibliotekę projektów.

Przykłady:

    <!-- Depend on latest version of GCM from play services -->
    <framework src="com.google.android.gms:play-services-gcm:+" />
    <!-- Depend on v21 of appcompat-v7 support library -->
    <framework src="com.android.support:appcompat-v7:21+" />
    <!-- Depend on library project included in plugin -->
    <framework src="relative/path/FeedbackLib" custom="true" />
    

*framework* można również mieć pliki niestandardowe .gradle sub-zawarte w projekcie głównym .gradle pliku:

    <framework src="relative/path/rules.gradle" custom="true" type="gradleReference" />
    

Dla pre-android@4.0.0 (ANT-oparty projektów):

Atrybut opcjonalny `type` jest ciągiem wskazującym Typ ramy dodac. Obsługiwane obecnie tylko `projectReference` i tylko dla Windows. Za pomocą `custom='true'` i `type='projectReference'` będzie dodać odwołanie do projektu, który zostanie dodany do kompilowania + link kroki projektu cordova. Zasadniczo jest to tylko sposób obecnie 'niestandardowe' ramy można kierować wielu architektur jawnie montowana jako zależność przez odwołujących się do aplikacji cordova.

Opcjonalne `parent` ustawia ścieżkę względną do katalogu zawierające sub-projekt, do którego należy dodać odwołanie. Wartością domyślną jest `.`, czyli projektu aplikacji. Pozwala na dodawanie odwołania między projektami jak w tym przykładzie:

    <framework src="extras/android/support/v7/appcompat" custom="false" parent="FeedbackLib" />
    

### *RAM* dla Windows

Na platformie Windows obsługuje trzy dodatkowe atrybuty (wszystkie opcjonalne) aby zawęzić gdy ramy powinny być zawarte:

    <framework src="path/to/project/LibProj.csproj" custom="true" type="projectReference"/>
    

`arch` atrybut wskazuje, ramach tylko należy włączyć, gdy budynek dla określonej architektury. Obsługiwane wartości są `x86`, `x64` i `ARM`.

Atrybut `device-target` wskazuje, że framwork tylko należy włączyć, gdy budynek dla określonego miejsce docelowe typu urządzenia. Obsługiwane wartości są `win` (lub `windows`), `phone` lub `all`.

`versions` atrybut wskazuje, że ramach tylko należy włączyć, gdy budynek dla wersji, które odpowiadają określonej wersji ciąg. Wartość może być dowolny ciąg zakres semantyczny wersja ważny węzeł.

Przykłady użycia tych Windows określonych atrybutów:

    <framework src="src/windows/example.dll" arch="x64" />
    <framework src="src/windows/example.dll" versions=">=8.0" />
    <framework src="src/windows/example.vcxproj" type="projectReference" target="win" />
    <framework src="src/windows/example.vcxproj" type="projectReference" target="all" versions="8.1" arch="x86" />
    

## *info* Elementu

Dodatkowe informacje dla użytkowników. Jest to przydatne, gdy potrzebujesz dodatkowych kroków, które nie mogą być łatwo zautomatyzowane lub wykraczają poza zakres plugman w. Przykłady:

    <info>
    You need to install __Google Play Services__ from the `Android Extras` section using the Android SDK manager (run `android`).
    
    You need to add the following line to the `local.properties`:
    
    android.library.reference.1=PATH_TO_ANDROID_SDK/sdk/extras/google/google_play_services/libproject/google-play-services_lib
    </info>
    

## *hook* Elementu

Reprezentuje skrypt niestandardowy, który zostanie wywołany przez Cordova wystąpieniu pewnych działań (na przykład po plugin jest dodawany lub platformy przygotować logika jest wywoływana). Jest to przydatne, gdy trzeba rozszerzyć domyślne funkcje Cordova. Uzyskać więcej informacji, zobacz przewodnik haki.

    <hook type="after_plugin_install" src="scripts/afterPluginInstall.js" />
    

## Zmienne

W niektórych przypadkach plugin może być konieczne do zmiany konfiguracji zależy od aplikacji miejsce docelowe. Na przykład aby zarejestrować się do C2DM na Android, aplikacji o identyfikatorze pakietu jest `com.alunny.message` wymaga uprawnienia takich jak:

    <uses-permission android:name="com.alunny.message.permission.C2D_MESSAGE"/>
    

W takich przypadkach, gdzie zawartość z pliku `plugin.xml` nie jest znana przed czasem zmiennych może być wskazany przez znak dolara po serii z literami, cyframi lub podkreśleniami. Dla powyższego przykładu plik `plugin.xml` obejmowałyby tego tagu:

    <uses-permission android:name="$PACKAGE_NAME.permission.C2D_MESSAGE"/>
    

plugman zastępuje zmienną odniesienia określonej wartości lub ciąg pusty, jeśli nie znaleziono. Wartość zmiennej odniesienia mogą być wykryte (w tym przypadku z pliku `AndroidManifest.xml` ) lub określony przez użytkownika narzędzia; dokładny proces jest zależne od konkretnego narzędzia.

plugman na życzenie użytkowników, aby określić wtyczki wymagane zmienne. Na przykład klucze API dla C2M i Google Maps może być określony jako argument wiersza polecenia:

    plugman --platform android --project /path/to/project --plugin name|git-url|path --variable API_KEY=!@CFATGWE%^WGSFDGSDFW$%^#$%YTHGsdfhsfhyer56734
    

Aby zmienna obowiązkowe, tagu `< platform >` musi zawierać tagu `< preference >` . Na przykład:

    <preference name="API_KEY" />
    

plugman sprawdza, że preferencje te wymagane są przekazywane w. Jeśli nie, to należy ostrzec użytkownika jak przekazać zmienną w i wyjść z kodem zera.

Niektóre nazwy zmiennych powinny być zastrzeżone, wymienionych poniżej.

## $PACKAGE_NAME

Identyfikator unikatowy styl domeny odwrotnej pakietu, odpowiadające `CFBundleIdentifier` na iOS lub `package` atrybut element najwyższego poziomu `manifestować` w pliku `AndroidManifest.xml` .