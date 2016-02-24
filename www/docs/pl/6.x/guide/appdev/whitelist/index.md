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

title: Przewodnik białej listy
---

# Przewodnik białej listy

Domeny whitelisting jest model zabezpieczeń, który kontroluje dostęp do zewnętrznych domen, w których aplikacja ma żadnej kontroli. Cordova oferuje konfigurowalne bezpieczeństwa określenie zewnętrznych miejsc, które mogą być dostępne. Domyślnie nowe aplikacje są skonfigurowane, aby umożliwić dostęp do dowolnej witryny. Przeniósł się do aplikacji do produkcji, należy formułować biała i umożliwia dostęp do określonych sieci domen i subdomen.

Dla Androida i iOS (od ich wersji 4.0) Cordova z polityki bezpieczeństwa jest rozszerzalny poprzez interfejs wtyczki. Aplikację należy użyć [cordova-plugin biała][1], ponieważ zapewnia lepsze zabezpieczenie i konfiguracji niż wcześniejsze wersje Cordova. Podczas gdy jest to możliwe do wykonania wtyczki Biała, nie jest zalecane, chyba że aplikacja ma bardzo szczególnego zabezpieczenia potrzeb politycznych. Zobacz [cordova-plugin biała][1] szczegółowe informacje o sposobie użycia i konfiguracji.

 [1]: https://github.com/apache/cordova-plugin-whitelist

Dla innych platform Cordova przylega do specyfikacji [W3C Widget dostępu][2] , który opiera się na elemencie `< access >` w pliku `config.xml` aplikacji umożliwiających dostęp sieciowy do określonej domeny. Dla projektów, które opierają się na pracy CLI, opisane w interfejs wiersza poleceń ten plik znajduje się w katalogu najwyższego poziomu projektu. W przeciwnym razie ścieżek rozwoju platformy, lokalizacje są wymienione w poniższych sekcjach. (Zobacz różnych przewodników platformy, aby uzyskać więcej informacji na każdej platformie).

 [2]: http://www.w3.org/TR/widgets-access/

W poniższych przykładach pokazano `< access >` biała składni:

*   Dostęp do [witryny Google.pl][3]:
    
        <access origin="http://google.com" />
        

*   Dostęp do bezpieczne [google.com][4] ( `https://` ):
    
        <access origin="https://google.com" />
        

*   Dostęp do poddomeny [maps.google.com][5]:
    
        <access origin="http://maps.google.com" />
        

*   Dostęp do wszystkich poddomen na [google.com][3], na przykład [mail.google.com][6] i [docs.google.com][7]:
    
        <access origin="http://*.google.com" />
        

*   Dostęp do *wszystkich* domen, na przykład [Google.pl][3] i [developer.mozilla.org][8]:
    
        <access origin="*" />
        
    
    Jest to wartość domyślna dla nowo utworzonego CLI projektów.

 [3]: http://google.com
 [4]: https://google.com
 [5]: http://maps.google.com
 [6]: http://mail.google.com
 [7]: http://docs.google.com
 [8]: http://developer.mozilla.org

Należy pamiętać, że niektóre strony internetowe automatycznie może przekierować z ich Strona pod inny adres URL, takie jak przy użyciu protokołu https lub domenie specyficzne dla kraju. Na przykład http://www.google.com przekieruje do używania protokołu SSL/TLS w https://www.google.com, a następnie dalej może przekierować do geografii, takich jak https://www.google.co.uk. Takie scenariusze mogą wymagać biała zmodyfikowanych lub dodatkowe wpisy poza swoje wymagania wstępne. Proszę rozważyć to, jak budujesz swojej listy odblokowanych.

Należy zauważyć, że Biała odnosi się tylko do głównej webview Cordova i nie ma zastosowania do InAppBrowser widoku sieci Web lub otwieranie linków w przeglądarce sieci web systemu.

## Amazon ogień OS Whitelisting

Regulamin platformy białą znajdują się w `res/xml/config.xml`.

## Android Whitelisting

Jak wyżej patrz [cordova-plugin biała][1] szczegóły. Cordova-Android przed 4.0.0 Zobacz starsze wersje tej dokumentacji.

## iOS Whitelisting

Jak wyżej patrz [cordova-plugin biała][1] szczegóły. Dla ios cordova przed 4.0.0 Zobacz starsze wersje tej dokumentacji.

## Jeżyna 10 Whitelisting

Białą zasad znajdują się w `www/config.xml`.

Jeżyna 10 korzystanie z symboli wieloznacznych różni się od innych platform na dwa sposoby:

*   Treści udostępniane przez `XMLHttpRequest` muszą zostać zadeklarowane jawnie. Ustawienie `origin="*"` nie działa w tym przypadku. Alternatywnie wszystkie zabezpieczenia sieci web mogą być wyłączone za pomocą preferencji `WebSecurity` opisane w konfiguracji BlackBerry:
    
        <preference name="websecurity" value="disable" />
        

*   Jako alternatywę do ustawienia `*.domain`zestaw atrybut dodatkowych `subdomain` do `true`. To powinna być zestaw na `false` domyślnie. Na przykład następujące umożliwia dostęp do `google.com`, `maps.google.com`i `docs.google.com`:
    
        <access origin="http://google.com" subdomains="true" />
        
    
    Następujące zwęża się dostęp do `Google.pl`:
    
        <access origin="http://google.com" subdomains="false" />
        
    
    Określ dostęp do wszystkich domen, w tym protokołu lokalnych `file://` :
    
        <access origin="*" subdomains="true" />
        

(Aby uzyskać więcej informacji na temat wsparcia, dokumentacji BlackBerry [dostęp do elementu][9].)

 [9]: https://developer.blackberry.com/html5/documentation/ww_developing/Access_element_834677_11.html

## Firefox OS

W Firefox OS jest pojęcia whitelisting konkretnej domeny. Zamiast tego jest specjalne pozwolenie, o nazwie [SystemXHR][10]. Istnieje potrzeba aby dodać tego uprawnienia do `pliku config.xml`:

 [10]: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest#Permissions

    <platform name="firefoxos">
        <permission name="systemXHR" privileged="true" description="load data from server" />
    </platform>
    

`XMLHttpRequest` obiekt musi być utworzone z dwóch parametrów `mozAnon` i `mozSystem`:

    var request = new XMLHttpRequest({
        mozAnon: true,
        mozSystem: true});
    

Ten roztwór jest przezroczysty, więc nie ma żadnej różnicy dla innych platform.

## Windows Phone Whitelisting

Zasady białą Windows Phone 8 znajdują się w pliku `config.xml` aplikacji.

## Tizen Whitelisting

Białą zasad znajdują się w pliku `config.xml` aplikacji. Platformie opiera się na ten sam atrybut `subdomains` jako platformy BlackBerry. (Aby uzyskać więcej informacji na temat wsparcia, dokumentacji Tizen na na [dostęp do elementu][11].)

 [11]: https://developer.tizen.org/help/index.jsp?topic=%2Forg.tizen.web.appprogramming%2Fhtml%2Fide_sdk_tools%2Fconfig_editor_w3celements.htm