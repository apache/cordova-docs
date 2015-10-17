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

title: Plugin rozwoju Przewodnik
---

# Plugin rozwoju Przewodnik

*Plugin* jest pakiet wstrzykuje kod, który pozwala webview Cordova, w którym aplikacja renderuje do komunikowania się z rodzimych platformy, na którym jest uruchomiony. Wtyczki dostęp do urządzeń i platform funkcji, które są zwykle niedostępne dla aplikacji opartych na sieci web. Wszystkie główne cechy Cordova API są implementowane jako wtyczki, i wiele innych są dostępne, że Włączanie funkcji, takich jak skanery kodów kreskowych, komunikacja NFC, lub dostosować kalendarz interfejsów. Ma [rejestru][1] dostępnych wtyczek.

 [1]: http://plugins.cordova.io

Wtyczki obejmuje pojedynczy interfejs JavaScript oraz odpowiednie biblioteki kodu macierzystego dla każdej z obsługiwanych platform. W istocie to ukrywa różnych implementacji kodu macierzystego za wspólny interfejs JavaScript.

Ta sekcja kroki poprzez proste *echa* plugin, który przechodzi ciąg z JavaScript do macierzystego platformy i z powrotem, jeden, który służy jako wzór budować bardziej złożone funkcje. W tej sekcji omówiono strukturę podstawowy plugin i interfejsu JavaScript skierowaną na zewnątrz. Dla każdego odpowiedniego macierzysty interfejs zobacz Lista na końcu tej sekcji.

Oprócz tych instrukcji, przygotowując się napisać taki plugin, że najlepiej jest patrzeć na [istniejących wtyczek][2] dla orientacji.

 [2]: http://cordova.apache.org/#contribute

## Budynek taki Plugin

Deweloperzy aplikacji za pomocą CLI `plugin add` polecenia (omówione w interfejs wiersza poleceń) aby zastosować plugin do projektu. Argument do tego polecenia jest adres URL dla repozytorium *git* , zawierające kod wtyczki. W tym przykładzie implementuje Cordova z urządzeń interfejsu API:

        $ cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-device.git
    

Repozytorium wtyczki muszą funkcji najwyższego poziomu `plugin.xml` pliku manifestu. Istnieje wiele sposobów, aby skonfigurować tego pliku, które dane są dostępne w specyfikacji Plugin. To skrócona wersja `Device` plugin zawiera prosty przykład do wykorzystania jako model:

        <?xml version="1.0" encoding="UTF-8"?>
        <plugin xmlns="http://apache.org/cordova/ns/plugins/1.0"
                id="cordova-plugin-device" version="0.2.3">
            <name>Device</name>
            <description>Cordova Device Plugin</description>
            <license>Apache 2.0</license>
            <keywords>cordova,device</keywords>
            <js-module src="www/device.js" name="device">
                <clobbers target="device" />
            </js-module>
            <platform name="ios">
                <config-file target="config.xml" parent="/*">
                    <feature name="Device">
                        <param name="ios-package" value="CDVDevice"/>
                    </feature>
                </config-file>
                <header-file src="src/ios/CDVDevice.h" />
                <source-file src="src/ios/CDVDevice.m" />
            </platform>
        </plugin>
    

Najwyższego poziomu `plugin` znacznika `id` atrybut używa tego samego formatu domeny odwrotnej do identyfikacji pakietu plugin jak aplikacje są one dodawane. `js-module`Tag określa ścieżkę do wspólnego interfejsu JavaScript. `platform`Tag określa odpowiedni zestaw kodu macierzystego, do `ios` platformy w tym przypadku. `config-file`Znacznik hermetyzuje `feature` tagu, który jest wstrzykiwany do platformy `config.xml` plik, aby uświadomić platformie dodatkowy kod biblioteki. `header-file`i `source-file` Tagi Określ ścieżkę do biblioteki plików składowych.

## Sprawdzanie poprawności Plugin

Można użyć `plugman` narzędzie, aby sprawdzić, czy plugin instaluje się poprawnie dla każdej platformy. Zainstaluj `plugman` rezygnować ten kolejne rozkazywać [węzła][3] :

 [3]: http://nodejs.org/

        $ npm install -g plugman
    

Potrzebujesz katalog źródłowy ważnych aplikacji, takich jak najwyższego poziomu `www` katalogu zawarte w projekcie generowanych przez CLI domyślne zgodnie z opisem w interfejs wiersza poleceń. Upewnić się, że aplikacja `index.html` Strona odniesienia nazwa wtyczki interfejsu JavaScript, jakby to było w tym samym katalogu źródłowym:

        <script src="myplugin.js"></script>
    

Uruchom polecenie, takie jak następujące aby sprawdzić, czy iOS zależności ciężar poprawnie:

         $ plugman install --platform ios --project /path/to/my/project/www --plugin /path/to/my/plugin
    

Szczegółowe informacje na temat `plugman` opcji, zobacz za pomocą Plugman do zarządzania wtyczki. Dla informacji na temat faktycznie *debugowania* wtyczek Zobacz macierzysty interfejs każdej platformy wymienione na dole tej strony.

## Interfejs JavaScript

JavaScript dostarcza interfejs przodem, co być może najważniejszą częścią plugin. Może struktura wtyczki JavaScript, jednak się, ale trzeba zadzwonić `cordova.exec` do komunikowania się z rodzimych platformy, używając następującej składni:

        cordova.exec(function(winParam) {},
                     function(error) {},
                     "service",
                     "action",
                     ["firstArgument", "secondArgument", 42, false]);
    

Oto jak działa każdego parametru:

*   `function(winParam) {}`: Sukcesu funkcji wywołania zwrotnego. Zakładając, że twój `exec` połączenie zakończy się pomyślnie, to funkcja wykonuje oraz wszystkie parametry można przekazać do niej.

*   `function(error) {}`: Funkcja wywołania zwrotnego błąd. Jeśli operacja nie zg³aszaæ reklamacjê pomyœlnie, ta funkcja wykonuje z parametrem opcjonalnym błąd.

*   `"service"`: Nazwa serwisu aby zadzwonić po stronie macierzystego. Odpowiada to macierzysta Klasa, dla której więcej informacji jest dostępne w macierzystym przewodników wymienionych poniżej.

*   `"action"`: Nazwa akcji aby zadzwonić po stronie macierzystego. Generalnie odpowiada metodzie macierzysta Klasa. Zobacz rodzinny przewodnicy wymienionych poniżej.

*   `[/* arguments */]`: Tablicę argumentów, aby przejść do macierzystego środowiska.

## Próbki JavaScript

Ten przykład przedstawia sposób zaimplementować interfejs JavaScript wtyczki:

        window.echo = function(str, callback) {
            cordova.exec(callback, function(err) {
                callback('Nothing to echo.');
            }, "Echo", "echo", [str]);
        };
    

W tym przykładzie plugin dołącza się do `window` obiekt jako `echo` funkcja, który plugin użytkowników nazywają się następująco:

        window.echo("echome", function(echoValue) {
            alert(echoValue == "echome"); // should alert true.
        });
    

Spojrzeć na ostatnie trzy argumenty `cordova.exec` funkcja. Pierwsze rozmowy `Echo` *usługi*, nazwa klasy. Drugi żądania `echo` *działania*, metody w obrębie tej klasy. Trzeci jest szereg argumentów ciągami echa, który jest `window.echo` funkcja w pierwszym parametrze.

Callback sukces przeszedł do `exec` jest po prostu odwołanie do funkcja wywołania zwrotnego `window.echo` trwa. Jeśli macierzystym platformy odpalam błąd wywołania zwrotnego, to po prostu wywołania zwrotnego sukces i przekazuje go ciąg domyślny.

## Macierzysty interfejs

Po zdefiniowaniu JavaScript dla wtyczki, trzeba uzupełnić z co najmniej jeden implementacji macierzystym. Poniżej przedstawiono szczegóły dotyczące każdej platformy, i każdy opiera się na prostym przykładzie wtyczce Echo powyżej:

*   [Amazon ogień OS Plugins](../../platforms/amazonfireos/plugin.html)
*   Wtyczki dla Androida
*   [iOS wtyczek](../../platforms/ios/plugin.html)
*   [Jeżyna 10 wtyczek](../../platforms/blackberry10/plugin.html)
*   [Windows Phone 8 wtyczki](../../platforms/wp8/plugin.html)
*   [Wtyczki Windows](../../platforms/win8/plugin.html)

Platforma Tizen nie obsługuje wtyczek.

## Wydawnictwo wtyczek

Po rozwijać wtyczki, może chcesz opublikować i podzielić się ze społecznością. Możesz opublikować swój plugin do dowolnego `npmjs` -oparty wpisywać do rejestru, ale zalecane jest [NPM rejestru][4]. Przeczytaj nasze [wydawnictwa wtyczek do npm Przewodnik][5].

 [4]: https://www.npmjs.com
 [5]: http://plugins.cordova.io/npm/developers.html

**Uwaga**: [Cordova plugin rejestru][6] jest przeprowadzka stanie tylko do odczytu. `publish`/ `unpublish` polecenia zostały usunięte z `plugman` , więc będziesz musiał użyć odpowiedniego `npm` polecenia.

 [6]: https://plugins.cordova.io

Inni deweloperzy można zainstalować wtyczki automatycznie przy użyciu `plugman` lub Cordova CLI. (Szczegóły na każdej ścieżki rozwoju, zobacz za pomocą Plugman do zarządzania wtyczki i interfejs wiersza poleceń).

Do publikowania pluginu do rejestru NPM musisz wykonać poniższe czynności:

*   Tworzenie `package.json` pliku do wtyczki:
    
        $ plugman createpackagejson /path/to/your/plugin
        

*   publikuje je:
    
        $ npm adduser # that is if you don't have an account yet
        $ npm publish /path/to/your/plugin
        

To jest to!

Kolejny `plugman --help` zawiera listę innych dostępnych poleceń opartych na rejestrze.