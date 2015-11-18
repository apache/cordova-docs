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

title: Konfiguracja iOS
---

# Konfiguracja iOS

`config.xml`Plik steruje aplikacji podstawowe ustawienia, które mają zastosowanie w każdej aplikacji i wystąpienie CordovaWebView. Ta sekcja zawiera szczegóły preferencje, które stosuje się tylko do iOS buduje. Zobacz [plik config.xml][1] informacji na temat opcji konfiguracji globalnej.

 [1]: config_ref_index.md.html#The%20config.xml%20File

*   `EnableViewportScale`(domyślnie wartość logiczna, `false` ): zestaw `true` Aby tag meta rzutni wyłączyć lub ograniczyć zakres skalowania użytkownika, który jest domyślnie włączona.

        <preference name="EnableViewportScale" value="true"/>


    Miejsce wziernika następujących w HTML, aby wyłączyć skalowanie i dopasowanie treści elastycznie w renderowania widoku sieci Web:

        <meta name='viewport' content='width=device-width, initial-scale=1, user-scalable=no' />


*   `MediaPlaybackAllowsAirPlay`(domyślnie wartość logiczna, `true` ): zestaw `false` Aby zapobiec Air Zagraj używane w tym widoku. Dostępne w domyślnej UIWebView i WKWebView.

        <preference name="MediaPlaybackAllowsAirPlay" value="false"/>


*   `MediaPlaybackRequiresUserAction`(domyślnie wartość logiczna, `false` ): zestaw `true` Aby uniemożliwić automatyczne odtwarzanie z HTML5 wideo lub audio `autoplay` atrybut lub za pomocą JavaScript.

        <preference name="MediaPlaybackRequiresUserAction" value="true"/>


*   `AllowInlineMediaPlayback`(domyślnie wartość logiczna, `false` ): zestaw `true` do HTML5 pozwala na odtwarzanie multimediów *wbudowane* w układ ekranu, za pomocą przeglądarki dostarczane kontroli zamiast rodzimych kontroli. Do tego do pracy, dodać `webkit-playsinline` atrybut do dowolnego `<video>` elementów.

        <preference name="AllowInlineMediaPlayback" value="true"/>


*   `BackupWebStorage`(ciąg, albo `none` , `local` , lub domyślnie `cloud` ): zestaw `cloud` Aby umożliwić web przechowywania danych kopii zapasowych za pomocą usługi iCloud. Zestaw `local` Aby zezwolić tylko lokalnych kopii zapasowych za pośrednictwem iTunes sync. Zestaw `none` zapobiec web przechowywania kopii zapasowych.

        <preference name="BackupWebStorage" value="local"/>


*   `TopActivityIndicator`(ciąg, domyślnie `gray` ): Steruje wyglądem małych wirująca ikona na pasku stanu, który wskazuje aktywności procesora znaczące. Prawidłowe wartości to `whiteLarge` , `white` , i`gray`.

        <preference name="TopActivityIndicator" value="white"/>


*   `KeyboardDisplayRequiresUserAction`(domyślnie wartość logiczna, `true` ): zestaw `false` Aby umożliwić ten klawiatura wobec ukazywać się podczas wywoływania `focus()` na formularze.

        <preference name="KeyboardDisplayRequiresUserAction" value="false"/>


*   `SuppressesIncrementalRendering`(domyślnie wartość logiczna, `false` ): zestaw `true` czekać, aż cała zawartość została odebrana przed renderuje na ekranie.

        <preference name="SuppressesIncrementalRendering" value="true"/>


*   `GapBetweenPages`(float, domyślnie `` ): wielkość szczeliny, w punktach, między stronami.

        <preference name="GapBetweenPages" value="0"/>


*   `PageLength`(float, domyślnie `` ): rozmiar każdej strony, w punktach, w kierunku, w którym strony przepływu. Kiedy PaginationMode jest prawo do lewej lub od lewej do prawej, ta właściwość reprezentuje szerokość każdej strony. Gdy PaginationMode jest topToBottom lub bottomToTop, ta właściwość reprezentuje wysokość każdej strony. Wartością domyślną jest 0, co oznacza, że układ używa rozmiar rzutni, aby określić wymiary strony.

        <preference name="PageLength" value="0"/>


*   `PaginationBreakingMode`(ciąg, domyślnie `page` ): prawidłowe wartości są `page` i `column` . Sposób, w którym następuje łamanie kolumna lub strony. Ta właściwość określa, czy niektórych właściwości CSS dotyczące podziału kolumna i strony są honorowane lub ignorowane. Gdy ta właściwość jest zestaw `column` , zawartość szanuje właściwości CSS powiązana kolumna łamanie w miejscu podziału strony.

        <preference name="PaginationBreakingMode" value="page"/>


*   `PaginationMode`(ciąg, domyślnie `unpaginated` ): prawidłowe wartości to `unpaginated` , `leftToRight` , `topToBottom` , `bottomToTop` , i `rightToLeft` . Ta właściwość określa, czy zawartość w widoku sieci web jest podzielona na strony, które wypełniają widokiem na jednym ekranie na raz, lub wyświetlane jako jeden długi przewijania widoku. Jeśli zestaw do postaci podzielona, Właściwość ta włącza i wyłącza numeracją stron układu treści, powodując jego zawartość widoku sieci web użyć wartości PageLength i GapBetweenPages do relayout.

        <preference name="PaginationMode" value="unpaginated"/>


*   `UIWebViewDecelerationSpeed`(ciąg, domyślnie `normal` ): prawidłowe wartości to `normal` , `fast` . Właściwość ta określa prędkość spowalniania tempa przewijania. `normal`jest szybkość domyślna dla najbardziej natywne aplikacje, i `fast` jest wartość domyślna dla Mobile Safari.

        <preference name="UIWebViewDecelerationSpeed" value="fast" />


*   `ErrorUrl`(ciąg, nie ustawiona domyślnie): Jeśli ustawiona, będzie wyświetlić stronę lokalnych odwołanie na błąd w aplikacji.

        <preference name="ErrorUrl" value="myErrorPage.html"/>


*   `OverrideUserAgent`(ciąg, nie ustawiona domyślnie): Jeśli ustawiona, wartość zastąpi stary UserAgent widoku sieci Web. To jest przydatne do identyfikowania wniosek z aplikacji/przeglądarki podczas żądania stron zdalnego. Należy zachować ostrożność, może to powoduje compitiable problem z serwerami sieci web. Dla większości przypadków Użyj AppendUserAgent zamiast.

        <preference name="OverrideUserAgent" value="Mozilla/5.0 My Browser" />


*   `AppendUserAgent`(ciąg, nie ustawiona domyślnie): Jeśli ustawiona, wartość dołączy do końca starego UserAgent widoku sieci Web. Podczas korzystania z OverrideUserAgent, wartość ta zostanie zignorowana.

        <preference name="AppendUserAgent" value="My Browser" />
