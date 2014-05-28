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

# Przewodnik białej listy

Domeny whitelisting jest model zabezpieczeń, który kontroluje dostęp do zewnętrznych domen, w których zastosowanie ma żadnej kontroli. Cordova w domyślnej polityki bezpieczeństwa pozwala na dostęp do dowolnej witryny. Przeniósł się do aplikacji do produkcji, należy formułować biała i umożliwia dostęp do określonych sieci domen i subdomen.

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

## Amazon ogień OS Whitelisting

Regulamin platformy białą znajdują się w`res/xml/config.xml`.

## Android Whitelisting

Regulamin platformy białą znajdują się w`res/xml/config.xml`.

**Uwaga**: na Android 2.3, a przed białą domeny działa tylko dla `href` hiperłącza, nie odwołuje się do zasobów, takich jak obrazy i skrypty. Podejmują kroki w celu uniknięcia skrypty z trwający wstrzyknięty w aplikacji.

Nawigacja do nie-białej liście domen za pośrednictwem `href` hiperłącza powoduje stronę, aby otworzyć w domyślnej przeglądarki, a nie w ramach aplikacji. (Porównaj to do iOS jest zachowanie wskazanych poniżej).

## iOS Whitelisting

Platforma białą zasad znajdują się w katalogu aplikacji o nazwie `config.xml` pliku.

Początki określona bez protokołu, takich jak `www.apache.org` zamiast `http://www.apache.org` , domyślnie do wszystkich `http` , `https` , `ftp` , i `ftps` systemów.

Symbole wieloznaczne na platformie iOS są bardziej elastyczne niż w specyfikacji [W3C Widget dostępu][1] . Na przykład następujące uzyskuje dostęp do wszystkich poddomen i domenach najwyższego poziomu takich jak `.com` i `.net` :

        <access origin="*.google.*" />
    

W przeciwieństwie do platformy Android wspomniano powyżej, przechodząc do nie-białej liście domen za pośrednictwem `href` hiperłącza na iOS uniemożliwia otwieranie na wszystkie strony.

## Jeżyna 10 Whitelisting

Białą zasad znajdują się w`www/config.xml`.

Jeżyna 10 korzystanie z symboli wieloznacznych różni się od innych platform na dwa sposoby:

*   Treści udostępniane przez `XMLHttpRequest` muszą zostać jawnie zadeklarowane. Ustawienie `origin="*"` nie działa w tym przypadku. Alternatywnie, wszystkie zabezpieczenia sieci web może być wyłączona za pomocą `WebSecurity` preferencji opisane w konfiguracji BlackBerry:
    
        <preference name="websecurity" value="disable" />
        

*   Równie zmienny wobec ustawienie `*.domain` , zestaw dodatkowych `subdomains` atrybut `true` . Powinny one być ustawione `false` domyślnie. Na przykład, następujące umożliwia dostęp do `google.com` , `maps.google.com` , i `docs.google.com` :
    
        <access origin="http://google.com" subdomains="true" />
        
    
    Następujące zwęża dostęp do `google.com` :
    
        <access origin="http://google.com" subdomains="false" />
        
    
    Określ dostęp do wszystkich domen, w tym lokalne `file://` protokołu:
    
    <access origin="*" subdomains="true" />

(Aby uzyskać więcej informacji na temat wsparcia, dokumentacji BlackBerry [dostęp do elementu][8].)

 [8]: https://developer.blackberry.com/html5/documentation/ww_developing/Access_element_834677_11.html

## iOS zmiany w 3.1.0

Przed wersji 3.1.0 Cordova-iOS włączone niektóre niestandardowe rozszerzenia do programu whilelisting domen obsługiwanych przez innych platform Cordova. Od 3.1.0 biała iOS teraz odpowiada składni białej listy zasobów, opisane w górnej części tego dokumentu. Jeśli uaktualnienie z pre-3.1.0, i były za pomocą tych rozszerzeń, musisz zmienić `config.xml` plik nadal białą ten sam zbiór zasobów jak poprzednio.

W szczególności te wzorce muszą być aktualizowane:

*   " `apache.org` " (nie ma protokołu): to wcześniej odpowiada `http` , `https` , `ftp` , i `ftps` protokołów. Zmień na " `*://apache.org/*` " obejmuje wszystkie protokoły, lub zawiera wiersz dla każdego protokołu, trzeba wspierać.

*   " `http://apache.*` " (symbol wieloznaczny w końcu domeny): to wcześniej obejmie wszystkie najwyższego-poziomu-domeny, w tym wszystkie możliwe dwuliterowym TLD (ale nie przydatne domen. co.uk). To wiersz dla każdego TLD, który rzeczywiście kontroli i trzeba do białej listy.

*   " `h*t*://ap*he.o*g` " (symboli wieloznacznych dla brakujących liter): te są już obsługiwane; zmiana zawiera wiersz dla każdej domeny i protokół, że rzeczywiście trzeba białej listy.

## Windows Phone Whitelisting

Dla Windows Phone 7 i 8 zasad białą znajdują się w aplikacji `config.xml` pliku.

## Tizen Whitelisting

Białą zasad znajdują się w aplikacji `config.xml` pliku. Platformie opiera się na tym samym `subdomains` atrybut jako platformy BlackBerry. (Aby uzyskać więcej informacji na temat wsparcia, dokumentacji Tizen na na [dostęp do elementu][9].)

 [9]: https://developer.tizen.org/help/index.jsp?topic=%2Forg.tizen.web.appprogramming%2Fhtml%2Fide_sdk_tools%2Fconfig_editor_w3celements.htm