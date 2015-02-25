* * *

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

## under the License.

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
    

Oto lista domyślnie wyszukiwarki, że "<engine>"tag obsługuje: * 'cordova' * 'cordova-plugman' * 'cordova Amazonka fireos' *"cordova-android"*"cordova-ios"* 'cordova-blackberry10' * 'cordova-wp8' * 'cordova-windows8'  
* "android sdk' / / zwraca najwyższy api Android poziom zainstalowane * 'jabłko xcode' / / zwraca wersję xcode *"apple ios"/ / zwraca najwyższej wersji iOS instalowane *"apple osx"/ / zwraca informacje o wersji OSX *"blackberry-ndk"/ / zwraca wersji macierzysta blackberry SDK

Określanie niestandardowych opartych na Apache Cordova ram powinna być wymieniona w tagu silnik tak:

    <engines>
        <engine name="my_custom_framework" version="1.0.0" platform="android" scriptSrc="path_to_my_custom_framework_version"/>
        <engine name="another_framework" version=">0.2.0" platform="ios|android" scriptSrc="path_to_another_framework_version"/>
        <engine name="even_more_framework" version=">=2.2.0" platform="*" scriptSrc="path_to_even_more_framework_version"/>
    </engines>
    

Ramy niestandardowych opartych na Apache Cordova wymaga, aby element silnika zawiera następujące atrybuty: `name` , `version` , `scriptSrc` , i`platform`.

*   `name`(wymagane): nazwę ludzki-mo¿liwy do czytania dla swojego niestandardowego ramy.

*   `version`(wymagane): wersja, że swoje ramy muszą mieć, aby zainstalować.

*   `scriptSrc`(wymagane): plik skryptu, który mówi plugman jaka wersja niestandardowych RAM jest. Idealnie ten plik powinien być w katalogu najwyższego poziomu katalogu wtyczki.

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

*   `src`(wymagane): gdzie w pliku lub katalogu znajduje się w pakiecie plugin, stosunku do `plugin.xml` dokumentu. Jeśli plik nie istnieje w określonej `src` lokalizacji, plugman zatrzymuje się i odwraca proces instalacji, wysyła powiadomienie o konflikcie, a wychodzi z niezerowy kod.

*   `target`(wymagane):
    
    Gdzie w pliku lub katalogu powinien znajdować się w aplikacji Cordova, stosunku do `www` katalogu. Aktywa mogą być kierowane do podkatalogów, na przykład:
    
        <asset src="www/new-foo.js" target="js/experimental/foo.js" />
        
    
    tworzy `js/experimental` katalogu w `www` katalogu, chyba że już obecny, a następnie kopie `new-foo.js` pliku i zmienia jego nazwę na `foo.js` . Jeżeli plik już istnieje w lokalizacji docelowej, plugman zatrzymuje się i odwraca proces instalacji, wysyła powiadomienie o konflikcie i wychodzi z niezerowy kod.

## *js moduł* Elementu

Większość wtyczek zawiera jeden lub więcej plików JavaScript. Każdy `<js-module>` odnosi się do pliku JavaScript oraz zapobiega konieczności dodawania użytkowników plugin `<script>` tagów dla każdego pliku. Podczas gdy `<asset>` Tagi po prostu skopiować plik z podkatalogu plugin do `www` , `<js-module>` Tagi są znacznie bardziej skomplikowane. Wyglądają tak:

    <js-module src="socket.js" name="Socket">
        <clobbers target="chrome.socket" />
    </js-module>
    

Podczas instalowania wtyczki z powyższego przykładu, `socket.js` jest kopiowany do `www/plugins/my.plugin.id/socket.js` i dodał(a) wpis do `www/cordova_plugins.js` . Na czas ładowania, kod w `cordova.js` używa XHR do każdego pliku i wstrzyknąć `<script>` znaczników w HTML. To dodaje mapowanie sprać lub scalić w stosownych przypadkach, jak opisano poniżej.

*Nie* Zawijaj pliku z `cordova.define` , który jest dodawany automatycznie. Moduł jest owinięty w zamknięcie, z `module` , `exports` , i `require` w zakres, jak to jest normalne dla AMD modułów.

Szczegóły na `<js-module>` znacznika:

*   `src`Odwołuje się do pliku w katalogu wtyczki w stosunku do `plugin.xml` pliku.

*   `name`Zawiera ostatnią częścią nazwy modułu. Ogólnie może być cokolwiek chcesz, i to tylko ważne, jeśli chcesz używać `cordova.require` Aby importować inne części swoje wtyczki w kodzie JavaScript. Nazwa modułu `<js-module>` masz plugin `id` następuje wartość `name` . Dla powyższego przykładu z `id` z `chrome.socket` , Nazwa modułu jest`chrome.socket.Socket`.

*   Trzy znaczniki są dozwolone w obrębie `<js-module>` :
    
    *   `<clobbers target="some.value"/>`wskazuje, że `module.exports` jest wstawiany do `window` obiekt jako `window.some.value` . Możesz mieć jak najwięcej `<clobbers>` , jak chcesz. Każdy obiekt nie jest dostępna na `window` jest tworzony.
    
    *   `<merges target="some.value"/>`wskazuje, że moduł powinny być połączone z każdej istniejącej wartości w `window.some.value` . Jeśli wszelki klucz już istnieje, wersja modułu zastępuje oryginalny. Możesz mieć jak najwięcej `<merges>` , jak chcesz. Każdy obiekt nie jest dostępna na `window` jest tworzony.
    
    *   `<runs/>`oznacza, że kod powinien być określony z `cordova.require` , ale nie zainstalowany na `window` obiektu. Jest to przydatne podczas inicjowania modułu, dołączanie procedury obsługi zdarzeń lub w inny sposób. Można mieć tylko do jednego `<runs/>` tagu. Należy zauważyć, że w tym `<runs/>` z `<clobbers/>` lub `<merges/>` jest zbędne, ponieważ one również `cordova.require` modułu.
    
    *   Pusta `<js-module>` jeszcze ładuje i są dostępne w innych modułów`cordova.require`.

Jeśli `src` nie rozwiąże do istniejącego pliku, plugman zatrzymuje się i odwraca instalacji, kwestii zgłoszenia problemu i wychodzi z kodem zera.

Zagnieżdżanie `<js-module>` elementy w `<platform>` deklaruje platformy JavaScript moduł powiązania.

## *zależność* Elementu

`<dependency>`Tag pozwala określić inne pluginy, na którym zależy od bieżącego plugin. Podczas przyszłych wersjach będzie dostęp do nich z repozytoriów plugin, w krótkim czasie wtyczki bezpośrednio są wywoływane jako adresów URL przez `<dependency>` Tagi. Są one sformatowane w następujący sposób:

    <dependency id="com.plugin.id" url="https://github.com/myuser/someplugin" commit="428931ada3891801" subdir="some/path/here" />
    

*   `id`: zawiera identyfikator wtyczki. To powinien być unikatowy i wyrażone w stylu domeny odwrotnej. Chociaż żaden z tych ograniczeń jest obecnie wymuszane, mogą być w przyszłości.

*   `url`: Adres URL dla wtyczki. To powinien odwoływać się do repozytorium git, które plugman próbuje klon.

*   `commit`: To wszelkie odniesienia git rozumiane przez `git checkout` : oddział lub tag nazwę (np. `master` , `0.3.1` ), lub zatwierdzanie mieszania (np.`975ddb228af811dd8bb37ed1dfd092a3d05295f9`).

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
*   Android
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

*   `src`(wymagane): lokalizację pliku w stosunku do `plugin.xml` . Jeśli `src` nie można znaleźć pliku, plugman zatrzymuje się i odwraca instalacji, wysyła powiadomienie o problemie i wychodzi z kodem zera.

*   `target-dir`: Katalog, do którego pliki powinny być skopiowane, względem katalogu głównego projektu Cordova. W praktyce, to jest najważniejsze dla opartych na platformie Java Platform, gdzie plik w `com.alunny.foo` pakiet musi znajdować się w `com/alunny/foo` katalogu. Dla platformy gdzie katalog źródłowy nie jest ważne ten atrybut powinny być pominięte.
    
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
    
    Na iOS, nie wiadomo lokalizacji Konfiguracja pliki do głównego katalogu projektu, więc określając cel `config.xml` postanawia`cordova-ios-project/MyAppName/config.xml`.
    
    Jeśli określony plik nie istnieje, narzędzie ignoruje zmiany konfiguracji i kontynuuje instalację.

*   `parent`: Selektor XPath, odwoływanie się do rodziców elementy mają zostać dodane do pliku konfiguracyjnego. Możesz użyć selektorów absolutną, można użyć symboli wieloznacznych ( `*` ) aby określić główny element, np.`/*/plugins`.
    
    Dla `plist` plików, `parent` Określa, jakiego klucza nadrzędnego dodaje określony plik XML.
    
    Jeśli selektor nie rozpoznać dziecko określonego dokumentu, narzędzie zatrzymuje się i odwraca proces instalacji, ostrzeżenia i wychodzi z kodem zera.

*   `after`: Priorytetową listę przyjętych rodzeństwo, po czym dodać fragment kodu XML. Przydatne do określania zmian w plikach, które wymagają ścisłej kolejności elementów XML, takich jak [http://msdn.microsoft.com/en-us/library/windowsphone/develop/ff769509%28v=vs.105%29.aspx#BKMK _EXTENSIONSelement][1]

 [1]: http://msdn.microsoft.com/en-us/library/windowsphone/develop/ff769509%28v=vs.105%29.aspx#BKMK_EXTENSIONSelement

## *wtyczki plist* Elementu

To jest *nieaktualne* , jak odnosi się jedynie do cordova-ios 2.2.0 i poniżej. Użycie `<config-file>` tag pewnym Cordova.

Przykład:

    <config-file target="config.xml" parent="/widget/plugins">
        <feature name="ChildBrowser">
            <param name="ios-package" value="ChildBrowserCommand"/>
        </feature>
    </config-file>
    

Określa klucz i wartość, aby dołączyć do właściwego `AppInfo.plist` plik w projekcie Cordova iOS. Na przykład:

    <plugins-plist key="Foo" string="CDVFoo" />
    

## Elementy *pliku zasobów* i *plik nagłówkowy*

Jak pliki źródłowe, ale specjalnie dla platformy takie jak iOS, że odróżnić pliki źródłowe, nagłówków i zasobów. iOS przykłady:

    <resource-file src="CDVFoo.bundle" />
    <resource-file src="CDVFooViewController.xib" />
    <header-file src="CDVFoo.h" />
    

Przykład Android:

    < src="FooPluginStrings.xml zasobów plik" target="res/values/FooPluginStrings.xml" / >
    

## *plik z lib* Elementu

Jak źródła, zasobów i pliki nagłówkowe, ale specjalnie dla platform takich jak BlackBerry 10 używający wygenerowana przez użytkowników bibliotek. Przykłady:

    <lib-file src="src/BlackBerry10/native/device/libfoo.so" arch="device" />
    <lib-file src="src/BlackBerry10/native/simulator/libfoo.so" arch="simulator" />
    

Obsługiwanych atrybutów:

*   `src`(wymagane): lokalizację pliku w stosunku do `plugin.xml` . Jeśli `src` nie można znaleźć, plugman zatrzymuje się i odwraca instalacji, kwestie ostrzeżenie o problemie i wychodzi z kodem zera.

*   `arch`: Architektura która `.so` plik został zbudowany, albo `device` lub`simulator`.

Na platformie Windows element `<lib-file>` umożliwia włączenie `< SDKReference >` w wygenerowane pliki projektu systemu Windows.

Obsługiwanych atrybutów:

*   `src` (wymagane): Nazwa zestawu SDK do (który będzie używany jako wartość atrybut `Include` wygenerowane elementu `< SDKReference >`).

*   `arch`: wskazuje, że `< SDKReference >` tylko powinny być uwzględniane podczas tworzenia dla określonej architektury. Obsługiwane wartości są `x86`, `x64` i `ARM`.

*   `target`: wskazuje, że `< SDKReference >` tylko powinny być uwzględniane podczas tworzenia dla określonego miejsce docelowe typu urządzenia. Obsługiwane wartości są `win` (lub `windows`), `phone` lub `all`.

*   `versions`: wskazuje, że `< SDKReference >` tylko powinny być uwzględniane podczas tworzenia dla wersji, które odpowiadają określonej wersji ciąg. Wartość może być dowolny ciąg zakres semantyczny wersja ważny węzeł.

Przykłady:

    <lib-file src="Microsoft.WinJS.2.0, Version=1.0" arch="x86" />
    <lib-file src="Microsoft.WinJS.2.0, Version=1.0" versions=">=8.1" />
    <lib-file src="Microsoft.WinJS.2.0, Version=1.0" target="phone" />
    <lib-file src="Microsoft.WinJS.2.0, Version=1.0" target="win" versions="8.0" arch="x86" />
    

## *ramy* Elementu

Określa ramy (zwykle jest częścią platformy OS), na którym zależy od wtyczka.

Przykłady:

    <framework src="libsqlite3.dylib" />
    <framework src="social.framework" weak="true" />
    <framework src="relative/path/to/my.framework" custom="true" />
    <framework src="path/to/project/LibProj.csproj" custom="true" type="projectReference"/>
    

`src` atrybut określa ramy, w które plugman próbuje dodać do projektu Cordova, w sposób prawidłowy dla danej platformy.

Atrybut opcjonalny `weak` jest wartością logiczną wskazującą, czy ramy powinny być słabo powiązane. Wartością domyślną jest `false`.

Atrybut opcjonalny `custom` jest wartością logiczną wskazującą, czy RAM jest jeden, który jest częścią plików plugin (tak, to nie jest ramy systemu). Wartością domyślną jest `false`. ***Na Android*** to określa, jak leczyć **src**. Jeśli `true` **src** jest ścieżką względną z katalogu projektu aplikacji, inaczej--z katalogu Android SDK.

Atrybut opcjonalny `type` jest ciągiem wskazującym typ struktury, aby dodać. Obsługiwane jest obecnie tylko `projectReference` i tylko dla Windows. Za pomocą `custom="true"` i `type='projectReference'` będzie dodać odwołanie do projektu, który zostanie dodany do kompilacji + link etapy projektu cordova. Zasadniczo jest to tylko sposób obecnie że ramy 'niestandardowe' można kierować wielu architektur, jak są one wyraźnie zbudowane jako zależność przez aplikację cordova odwołujący się.

Atrybut opcjonalny `parent` jest obecnie obsługiwany tylko na Android. Ustawia ścieżkę względną katalogu zawierające sub-projekt, do którego należy dodać odwołanie. Wartością domyślną jest `.`, czyli projektu aplikacji. Pozwala na dodawanie odwołania między projektami jak w tym przykładzie:

    <framework src="FeedbackLib" custom="true" />
    <framework src="extras/android/support/v7/appcompat" custom="false" parent="FeedbackLib" />
    

Na platformie Windows obsługuje trzy dodatkowe atrybuty (wszystkie opcjonalne) aby zawęzić przy ramach należy uwzględnić:

`arch` atrybut wskazuje, że ramach tylko należy włączyć, gdy budynek dla określonej architektury. Obsługiwane wartości są `x86`, `x64` i `ARM`.

Atrybut `target` wskazuje, że framwork tylko należy włączyć, gdy budynek dla określonego miejsce docelowe typu urządzenia. Obsługiwane wartości są `win` (lub `windows`), `phone` lub `all`.

`versions` atrybut wskazuje, że ramach tylko należy włączyć, gdy budynek dla wersji, które odpowiadają określonej wersji ciąg. Wartość może być dowolny ciąg zakres semantyczny wersja ważny węzeł.

Przykłady użycia tych Windows określonych atrybutów:

    <framework src="src/windows/example.dll" arch="x64" />
    <framework src="src/windows/example.dll" versions=">=8.0" />
    <framework src="src/windows/example.vcxproj" type="projectReference" target="win" />
    <framework src="src/windows/example.vcxproj" type="projectReference" target="all" versions="8.1" arch="x86" />
    

## *informacji* Elementu

Dodatkowe informacje dla użytkowników. Jest to przydatne, gdy potrzebujesz dodatkowych kroków, które nie mogą być łatwo zautomatyzowane lub wykraczają poza zakres plugman w. Przykłady:

    <info>
    You need to install __Google Play Services__ from the `Android Extras` section using the Android SDK manager (run `android`).
    
    You need to add the following line to the `local.properties`:
    
    android.library.reference.1=PATH_TO_ANDROID_SDK/sdk/extras/google/google_play_services/libproject/google-play-services_lib
    </info>
    

## Zmienne

W niektórych przypadkach plugin może być konieczne do zmiany konfiguracji zależy od aplikacji miejsce docelowe. Na przykład aby zarejestrować się do C2DM na Android, aplikacji o identyfikatorze pakietu jest `com.alunny.message` wymaga uprawnienia takie jak:

    <uses-permission
    android:name="com.alunny.message.permission.C2D_MESSAGE"/>
    

W takich przypadkach, w których zawartość z pliku `plugin.xml` nie jest znana przed czasem zmiennych może być wskazany przez dolara, a następnie przez szereg liter, cyfr lub podkreśleń. Dla powyższego przykładu plik `plugin.xml` obejmowałyby tego tagu:

    <uses-permission
    android:name="$PACKAGE_NAME.permission.C2D_MESSAGE"/>
    

plugman zastępuje zmienną odniesienia określonej wartości lub ciąg pusty, jeśli nie znaleziono. Wartość zmiennej odniesienia mogą być wykryte (w tym przypadku z pliku `AndroidManifest.xml`) lub określony przez użytkownika narzędzia; dokładny proces jest zależne od konkretnego narzędzia.

plugman na życzenie użytkowników, aby określić wtyczki wymagane zmienne. Na przykład klucze C2M i Google Maps API może być określony jako argument wiersza polecenia:

    plugman --platform android --project /path/to/project --plugin name|git-url|path --variable API_KEY=!@CFATGWE%^WGSFDGSDFW$%^#$%YTHGsdfhsfhyer56734
    

Aby zmienna obowiązkowe, tagu `<platform>` musi zawierać tagu `<preference>`. Na przykład:

    <preference name="API_KEY" />
    

plugman sprawdza, że preferencje te wymagane są przekazywane w. Jeśli nie, to należy ostrzec użytkownika jak przekazać zmienną w i wyjść z kodem zera.

Niektóre nazwy zmiennych powinny być zastrzeżone, wymienionych poniżej.

## $PACKAGE_NAME

Identyfikator unikatowy styl domeny odwrotnej pakietu, odpowiadające `CFBundleIdentifier` na iOS lub `package` atrybut element najwyższego poziomu `manifest` pliku `AndroidManifest.xml`.