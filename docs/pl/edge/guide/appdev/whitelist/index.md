* * *

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

## under the License.

# Przewodnik białej listy

Domeny whitelisting jest model zabezpieczeń, który kontroluje dostęp do zewnętrznych domen, w których aplikacja ma żadnej kontroli. Cordova w domyślnej polityki bezpieczeństwa pozwala na dostęp do dowolnej witryny. Przeniósł się do aplikacji do produkcji, należy formułować biała i umożliwia dostęp do określonych sieci domen i subdomen.

Cordova przylega do specyfikacji [W3C Widget dostępu][1] , który opiera się na `<access>` element w aplikacji `config.xml` plik, aby umożliwić dostęp do sieci do określonej domeny. Dla projektów, które opierają się na pracy CLI, opisane w interfejs wiersza poleceń ten plik znajduje się w katalogu najwyższego poziomu projektu. W przeciwnym razie ścieżek rozwoju platformy, lokalizacje są wymienione w poniższych sekcjach. (Zobacz różnych przewodników platformy, aby uzyskać więcej informacji na każdej platformie).

 [1]: http://www.w3.org/TR/widgets-access/

W poniższych przykładach pokazano składnię biała:

*   Dostęp do [witryny Google.pl][2]:
    
        <access origin="http://google.com" />
        

*   Dostęp do bezpieczne [google.com][3] ( `https://` ):
    
        <access origin="https://google.com" />
        

*   Dostęp do poddomeny [maps.google.com][4]:
    
        <access origin="http://maps.google.com" />
        

*   Dostęp do wszystkich poddomen na [google.com][2], na przykład [mail.google.com][5] i [docs.google.com][6]:
    
        <access origin="http://*.google.com" />
        

*   Dostęp do *wszystkich* domen, na przykład [Google.pl][2] i [developer.mozilla.org][7]:
    
        <access origin="*" />
        
    
    Jest to wartość domyślna dla nowo utworzonego CLI projektów.

 [2]: http://google.com
 [3]: https://google.com
 [4]: http://maps.google.com
 [5]: http://mail.google.com
 [6]: http://docs.google.com
 [7]: http://developer.mozilla.org

Należy pamiętać, że niektóre strony internetowe automatycznie może przekierować z ich Strona pod inny adres URL, takie jak przy użyciu protokołu https lub domenie specyficzne dla kraju. Na przykład http://www.google.com przekieruje do używania protokołu SSL/TLS w https://www.google.com, a następnie dalej może przekierować do geografii, takich jak https://www.google.co.uk. Takie scenariusze mogą wymagać biała zmodyfikowanych lub dodatkowe wpisy poza swoje wymagania wstępne. Proszę rozważyć to, jak budujesz swojej listy odblokowanych.

Należy zauważyć, że Biała odnosi się tylko do głównej webview Cordova i nie ma zastosowania do InAppBrowser widoku sieci Web lub otwieranie linków w przeglądarce sieci web systemu.

## Amazon ogień OS Whitelisting

Regulamin platformy białą znajdują się w `res/xml/config.xml`.

## Android Whitelisting

Regulamin platformy białą znajdują się w `res/xml/config.xml`.

**Uwaga**: na Android 2.3, a przed białą domeny działa tylko dla hiperłącza `href`, nie odwołuje się zasobów, takich jak obrazy i skrypty. Podejmują kroki w celu uniknięcia skrypty z trwający wstrzyknięty w aplikacji.

**Uwaga**: aby zapobiec zewnętrznych adresów URL, takich jak `mailto:` z jest otwarty w widoku sieci Web Cordova, od Cordova 3.6.0, określając `origin="*"` implicity doda zasady protokoły http i https. Jeśli potrzebujesz dostępu do dodatkowych protokołów niestandardowych, a następnie należy również dodać je jawnie do białej listy. Również zobaczyć "Zewnętrznych aplikacji Biała" poniżej więcej informacji na temat uruchamiania aplikacji zewnętrznych przez adres URL.

**Uwaga**: niektóre żądania sieciowe nie przejść przez Cordova białej listy. Obejmuje to <video> i <audio> zasoby, WebSocket połączeń (na Android 4.4 +) i ewentualnie innych niż http żądania. Na Android 4.4 + może zawierać nagłówek [CSP][8] w dokumencie HTML, aby ograniczyć dostęp do tych zasobów. W starszych wersjach systemu Android nie może być możliwe, aby ograniczyć ich.

 [8]: https://developer.mozilla.org/en-US/docs/Web/Security/CSP/Introducing_Content_Security_Policy

### Biała zewnętrznej aplikacji

Cordova 3.6.0 wprowadza biała druga, dla ograniczenia które adresy URL są dozwolone do uruchamiania aplikacji zewnętrznych. W poprzednich wersjach Cordova, wszystkie adresy innych niż http, takich jak `mailto:`, `geo:`, `sms:` i `Intent`, niejawnie mogli być docelowym tag <a>. Ze względu na możliwość aplikacji do wycieku informacji, jeśli luki XSS pozwala atakującemu na budowę dowolnego łącza, te adresy URL muszą być whitelisted, począwszy od Cordova 3.6.0.

Aby umożliwić wzór adresu URL linków na uruchomienie aplikacji zewnętrznej, Użyj tagu <access> w pliku `config.xml`, `launch-external` zestaw atrybut.

Przykłady:

*   Aby umożliwić linki do wysyłania wiadomości SMS:
    
        <access origin="sms:*" launch-external="yes" />
        

*   Aby umożliwić linki, aby otworzyć mapy:
    
        <access origin="geo:*" launch-external="yes" />
        

*   Aby umożliwić linki do example.com wobec otworzyć w zewnętrznej przeglądarce:
    
        <access origin="http://example.com/*" launch-external="yes" />
        

*   Aby umożliwić wszystkich stron nie whitelisted w zewnętrznej przeglądarce: (to jest taka sama jak poprzednie zachowanie dla nie-białej liście adresów URL)
    
        <access origin="http://*" launch-external="yes" />
        <access origin="https://*" launch-external="yes" />
        

*   Aby umożliwić dostęp do wszystkich adresów URL, powrotu do polityki Cordova 3.5.0 (nie zalecane):
    
        <access origin="*" launch-external="yes" />
        

Podczas nawigowania do adresu URL z aplikacji, biała interal jest najpierw testowane, i jeśli adres URL nie jest whitelisted tam, następnie zewnętrznych Biała jest testowany. To oznacza, że wszelkie `http:` lub `https:` adresów URL, które odpowiadają zarówno białymi listami zostanie otwarty wewnątrz aplikacji Cordova, raczej niż uruchomienie zewnętrznej przeglądarki.

## iOS Whitelisting

Platforma białą zasad znajdują się w katalogu aplikacji o nazwie pliku `config.xml`.

Początki określona bez protokół, na przykład `www.apache.org` zamiast `http://www.apache.org`, domyślnie wszystkie `http`, `https`, `ftp` i systemów `ftps`.

Symbole wieloznaczne na platformie iOS są bardziej elastyczne niż w specyfikacji [W3C Widget dostępu][1]. Na przykład, następujące uzyskuje dostęp do wszystkich poddomen i domen najwyższego poziomu, takie jak `.com` i `.net`:

        <access origin="*.google.*" />
    

W przeciwieństwie do platformy Android wspomniano powyżej, aby nie-białej liście domen za pomocą `href` hiperłącza na iOS uniemożliwia stronie otwarcia w ogóle.

## Jeżyna 10 Whitelisting

Białą zasad znajdują się w `www/config.xml`.

Jeżyna 10 korzystanie z symboli wieloznacznych różni się od innych platform na dwa sposoby:

*   Treści udostępniane przez `XMLHttpRequest` muszą zostać jawnie zadeklarowane. Ustawienie `origin="*"` nie działa w tym przypadku. Alternatywnie, wszystkie zabezpieczenia sieci web może być wyłączona za pomocą `WebSecurity` preferencji opisane w konfiguracji BlackBerry:
    
        <preference name="websecurity" value="disable" />
        

*   Równie zmienny wobec ustawienie `*.domain` , zestaw dodatkowych `subdomains` atrybut `true` . Powinny one być ustawione `false` domyślnie. Na przykład, następujące umożliwia dostęp do `google.com` , `maps.google.com` , i `docs.google.com` :
    
        <access origin="http://google.com" subdomains="true" />
        
    
    Następujące zwęża dostęp do `google.com` :
    
        <access origin="http://google.com" subdomains="false" />
        
    
    Określ dostęp do wszystkich domen, w tym lokalne `file://` protokołu:
    
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

## iOS zmiany w 3.1.0

Przed wersji 3.1.0 Cordova-iOS włączone niektóre niestandardowe rozszerzenia do programu whilelisting domen obsługiwanych przez innych platform Cordova. Od 3.1.0 biała iOS teraz odpowiada składni białej listy zasobów, opisane w górnej części tego dokumentu. Jeśli uaktualnienie z pre-3.1.0, i były za pomocą tych rozszerzeń, może trzeba zmienić plik `config.xml` w celu kontynuowania białą ten sam zbiór zasobów przed.

W szczególności te wzorce muszą być aktualizowane:

*   " `apache.org` " (nie ma protokołu): to wcześniej odpowiada `http` , `https` , `ftp` , i `ftps` protokołów. Zmień na " `*://apache.org/*` " obejmuje wszystkie protokoły, lub zawiera wiersz dla każdego protokołu, trzeba wspierać.

*   " `http://apache.*` " (symbol wieloznaczny w końcu domeny): to wcześniej obejmie wszystkie najwyższego-poziomu-domeny, w tym wszystkie możliwe dwuliterowym TLD (ale nie przydatne domen. co.uk). To wiersz dla każdego TLD, który rzeczywiście kontroli i trzeba do białej listy.

*   " `h*t*://ap*he.o*g` " (symboli wieloznacznych dla brakujących liter): te są już obsługiwane; zmiana zawiera wiersz dla każdej domeny i protokół, że rzeczywiście trzeba białej listy.

## Windows Phone Whitelisting

Zasady białą Windows Phone 8 znajdują się w pliku `config.xml` aplikacji.

## Tizen Whitelisting

Białą zasad znajdują się w pliku `config.xml` aplikacji. Platformie opiera się na ten sam atrybut `subdomains` jako platformy BlackBerry. (Aby uzyskać więcej informacji na temat wsparcia, dokumentacji Tizen na na [dostęp do elementu][11].)

 [11]: https://developer.tizen.org/help/index.jsp?topic=%2Forg.tizen.web.appprogramming%2Fhtml%2Fide_sdk_tools%2Fconfig_editor_w3celements.htm