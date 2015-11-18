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

title: Przegląd
---

# Przegląd

Apache Cordova jest Zdejmowany rozwój open source ramy. Pozwala to używać standardowych technologii, takich jak HTML5, CSS3, JavaScript i przekreślać platforma rozwoju, unikając każdej platformy mobilne rodzimych rozwoju języka. Aplikacji wykonać w otok kierowane do każdej platformy i opierają się na zgodnych ze standardami API powiązania dostęp do każdego urządzenia czujniki, danych i stan sieci.

Apache Cordova ukończył w październiku 2012 roku jako projekt najwyższego poziomu w Apache Software Foundation (ASF). Przez ASF przyszłego rozwoju Cordova zapewni otwarty stewardship projektu. Zawsze pozostanie wolna open source na licencji Apache, wersja 2.0. Odwiedź [cordova.apache.org][1] aby uzyskać więcej informacji.

 [1]: http://cordova.apache.org

Używać Apache Cordova, jeśli:

*   mobilnych deweloperów i chcą rozszerzyć wniosek przez więcej niż jedną platformę, bez konieczności ponownego wdrożenia to z każdej platformy język i narzędzia zestaw.

*   web developer i chcą wdrożyć aplikację sieci web, który jest pakowany do dystrybucji w różnych aplikacji sklep portali.

*   mobilnych deweloperów zainteresowanych mieszania składników aplikacji z *widoku sieci Web* (okno specjalną przeglądarkę), można uzyskać dostęp do urządzenia na poziomie API, lub jeśli chcesz rozwijać wtyczki interfejsu między macierzystym i Widok sieci Web składniki.

## Podstawowe składniki

Apache Cordova aplikacje opierają się na wspólne `config.xml` plik, który zawiera informacje o aplikacji i określa parametry wpływające na jak to działa, takie jak czy reaguje na orientację przesunięcia. Ten plik przylega do [Pakowane aplikacji sieci Web][2]lub *widget*, specyfikacji W3C.

 [2]: http://www.w3.org/TR/widgets/

Samej aplikacji jest zaimplementowany jako stronę sieci web, domyślnie lokalny plik o nazwie *index.html*, która odwołuje się niezależnie od CSS, JavaScript, obrazów, plików lub innych zasobów są niezbędne do uruchomienia. Aplikacja wykonuje jako *widoku sieci Web* w ramach otoki natywne aplikacje, które można rozpowszechniać na app Store.

Widok sieci Web obsługujących Cordova może zapewnić aplikacji z cały interfejs użytkownika. Na niektórych platformach można również składnik w większych, aplikacji hybrydowy, który miesza widoku sieci Web ze składnikami aplikacji. (Zobacz osadzanie WebViews szczegółów.)

Interfejs *wtyczki* jest dostępny do Cordova i rodzimych komponentów komunikować się ze sobą. Umożliwia wywoływania kodu macierzystego z JavaScript. Idealnie API JavaScript do tego kodu macierzystego są zgodne na wielu platformach urządzenia. Począwszy od wersji 3.0 wtyczki zapewnia powiązania do standardowego API urządzeń. Wtyczki innych firm zapewniają dodatkowe powiązania funkcje nie zawsze są dostępne na wszystkich platformach. Można znaleźć te pluginy trzeciej w [plugin wpisywać do rejestru][3] i używać ich w aplikacji. Użytkownik może tworzyć własne pluginy, zgodnie z opisem w podręczniku rozwój wtyczki. Wtyczki może być konieczne, na przykład do komunikacji między Cordova i niestandardowych składników macierzystego.

 [3]: http://plugins.cordova.io

**Uwaga**: od wersji 3.0, podczas tworzenia projektu Cordova, nie ma żadnych pluginów, które są obecne. To nowe zachowanie domyślne. Żadnych pluginów, które chcecie, nawet podstawowych wtyczek, należy jawnie dodać.

Cordova zapewnia wszelkie wzory UI lub WR * RAM. Cordova zapewnia tylko runtime, w którym te można wykonać. Jeśli chcesz użyć wzory UI i/lub WR * ramy, trzeba będzie wybrać tych i obejmują je w aplikacji siebie jako materiał trzeciej.

## Ścieżki rozwoju

Począwszy od wersji 3.0 można użyć dwa podstawowe procesy tworzenia aplikacji mobilnych. Często można użyć albo przepływu pracy do wykonania tego samego zadania, każdy z nich zalety:

*   **Cross-platform (CLI) pracy**: użycie tego przepływu pracy jeśli chcesz swoją aplikację, aby uruchomić na tak wiele różnych mobilnych systemów operacyjnych, jak to możliwe, z niewiele potrzeba rozwoju platformy. Ten przepływ pracy skupia się wokół `cordova` narzędzie, inaczej znany jako Cordova *CLI*, który został wprowadzony z Cordova 3.0. CLI jest wysokim poziomie narzędzie, które pozwala na tworzenie projektów dla wielu platform, Abstrahując od dużo funkcji skryptów powłoki niższego poziomu. CLI kopie zestaw wspólnych aktywów w podkatalogach dla każdej platformy mobilnej, sprawia, że wszelkie zmiany konfiguracji niezbędne dla każdego, uruchamia skrypty do generowania plików binarnych aplikacji. CLI zapewnia również wspólny interfejs zastosowanie pluginów do Twojej aplikacji. Więcej szczegółów w consoli Zobacz interfejs wiersza poleceń. Chyba że masz potrzebę pracy zorientowane na platformie, zaleca się przepływ między platformami.

*   **Zorientowane na platformę pracy**: Użyj tego przepływu pracy, jeśli chcesz, aby skupić się na tworzeniu aplikacji na jednej platformie i trzeba być w stanie zmienić to na niższym poziomie. Musisz użyć tej metody, na przykład, jeśli chcesz aplikacji mieszać niestandardowych składników macierzystego z opartych na sieci web składniki Cordova, omówionego w WebViews osadzanie. Jako zasada kciuka używać ten przepływ pracy, jeżeli zajdzie potrzeba modyfikacji projektu w zestawie SDK. Ten przepływ pracy opiera się na zestaw skryptów powłoki niższego poziom, które są dostosowane dla każdego z obsługiwanych platform i oddzielne narzędzie Plugman, które pozwala na zastosowanie pluginów. Podczas tej pracy można używać do tworzenia wieloplatformowych aplikacji, to zazwyczaj trudniejsze, ponieważ brak narzędzie wyższego poziomu oznacza budować oddzielnych cyklach i modyfikacje plugin dla każdej platformy. Jednak ten przepływ pracy umożliwia dostęp do opcji rozwoju przez każdego zestawu SDK i ma zasadnicze znaczenie dla mieszańców złożonych aplikacji. Zobacz różne Poradniki platformy szczegóły na każdej platformie narzędzia dostępne powłoki.

Kiedy po raz pierwszy rozpoczynających działalność, może być najłatwiejszy w obsłudze przepływ pracy wieloplatformowy do tworzenia aplikacji, jak opisano w interfejs wiersza poleceń. Masz wtedy możliwość przełączyć na środku platformy pracy jeśli potrzebujesz większej kontroli, którą SDK zawiera. Narzędzia niższego poziomu powłoki są dostępne w [cordova.apache.org][1] w osobnym dystrybucji niż CLI. Dla projektów początkowo generowane przez CLI, narzędzia powłoki te są również dostępne w projekcie w różnych `platforms/*/cordova` katalogów.

**Uwaga**: po przełączeniu się z pracy opartego na CLI do jednego wokół powłoka narzędzia i SDK platformy, nie można wrócić. CLI utrzymuje wspólny zestaw kodu źródłowego przekreślać platforma, która na każdym budować to używa do napisania kodu źródłowego platformy. Aby zachować wszelkie modyfikacje wprowadzone do zasobów platformy, trzeba przejść do narzędzi platformy centered powłoki, które zignorować kod źródłowy przekreślać platforma i zamiast opiera się na kod specyficzny dla platformy.

## Instalacja Cordova

Instalacja Cordova będzie różnić w zależności od pracy powyżej możesz wybrać:

*   Przekreślać platforma pracy: Zobacz interfejs wiersza poleceń.

*   Zorientowane na platformę pracy: Zobacz przewodniki platformy.

Po zainstalowaniu Cordova, zaleca się zapoznanie się z przewodników platformy dla platform mobilnych, które będzie można rozwijać na. Zalecane jest także, również przegląd prywatności przewodnik, przewodnik bezpieczeństwa i następne kroki. Konfigurowanie Cordova, zobacz plik config.xml. Dostępu do macierzystego funkcja na urządzeniu z JavaScript, odnoszą się do API Plugin. I odnoszą się do innych poradników uwzględniane jako niezbędne.