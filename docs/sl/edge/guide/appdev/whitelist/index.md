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

# Seznam dovoljenih vodnik

Whitelisting domene je varnostni model, ki nadzira dostop do zunanje domene, ki ga uporabi nima nadzora. Cordoba je Privzeta varnostna politika omogoča dostop do kateregakoli mesta. Pred selitvijo aplikacijo, da proizvodnja, morate oblikovati seznam varnih pošiljateljev in omogočajo dostop do določenih omrežnih domen in poddomen.

Cordova ustreza specifikaciji [W3C Widget dostopa][1] , ki temelji na je `<access>` element v app je `config.xml` pila v usposobiti omrežni dostop do določenih domen. Za projekte, ki se zanašajo na CLI potek dela, opisane v vmesnik ukazne vrstice, ta datoteka se nahaja v najvišji ravni imenika projekta. Drugače za posamezne razvojne poti, mesta so navedena v nadaljevanju. (Glej različne vodnike platformo za več informacij na vsaki platformi.)

 [1]: http://www.w3.org/TR/widgets-access/

Ti primeri dokazujejo whitelist sintakso:

*   Dostop do [google.com][2]:
    
        <access origin="http://google.com" />
        

*   Dostop do varnih [google.com][3] ( `https://` ):
    
        <access origin="https://google.com" />
        

*   Dostop do poddomeno [maps.google.com][4]:
    
        <access origin="http://maps.google.com" />
        

*   Dostop do vseh poddomen na [google.com][2], npr. [mail.google.com][5] in [docs.google.com][6]:
    
        <access origin="http://*.google.com" />
        

*   Dostop do *vse* domene, na primer, [google.com][2] in [developer.mozilla.org][7]:
    
        <access origin="*" />
        
    
    To je privzeta vrednost za novoustanovljeno CLI projektov.

 [2]: http://google.com
 [3]: https://google.com
 [4]: http://maps.google.com
 [5]: http://mail.google.com
 [6]: http://docs.google.com
 [7]: http://developer.mozilla.org

## Amazon ogenj OS Whitelisting

Whitelisting platforma specifična pravila najdemo v`res/xml/config.xml`.

## Android Whitelisting

Whitelisting platforma specifična pravila najdemo v`res/xml/config.xml`.

**Opomba**: na Android 2.3 in preden domene whitelisting deluje samo za `href` hiperpovezave, ne sklicuje virov, kot so slike in skripte. Sprejme ukrepe za preprečitev skripte iz se vbrizga v uporabo.

Plovba, upravljanje letala-whitelisted domene preko `href` hiperpovezavo povzroča strani, da odprete v brskalniku privzeto in ne znotraj aplikacije. (Primerjajte to vedenje osebe iOS, navedeno spodaj.)

## iOS Whitelisting

Platformo whitelisting pravila najdemo v imeniku imenovan uporaba `config.xml` datoteke.

Začetki določili brez protokol, kot `www.apache.org` namesto `http://www.apache.org` , privzete za vse na `http` , `https` , `ftp` , in `ftps` sheme.

Nadomestne znake na platformi iOS so bolj prilagodljivi kot v specifikaciji [W3C Widget dostop][1] . Na primer, naslednje dostopi vse poddomene in najvišje ravni domene, kot `.com` in `.net` :

        <access origin="*.google.*" />
    

Za razliko od Android plosčad, navedeno zgoraj, plovba, upravljanje letala-whitelisted domene preko `href` hiperpovezavo na iOS preprečuje odpiranje na vse strani.

## Whitelisting blackBerry 10

Whitelisting pravila najdemo v`www/config.xml`.

BlackBerry 10 uporabo nadomestnih znakov, se razlikuje od drugih platform na dva načina:

*   Vse vsebine, dostopal `XMLHttpRequest` razglasiti to izrecno. Nastavitev `origin="*"` ne dela v tem primeru. Izmeničen, vsi ujeti varnost morda onemogočena uporaba v `WebSecurity` prednost opisane v BlackBerry konfiguracijo:
    
        <preference name="websecurity" value="disable" />
        

*   Kot alternativa za nastavitev `*.domain` , nastavite dodatno `subdomains` pripisujejo `true` . To naj bi `false` privzeto. Na primer, naslednje omogoča dostop do `google.com` , `maps.google.com` , in `docs.google.com` :
    
        <access origin="http://google.com" subdomains="true" />
        
    
    Naslednje narrows dostop do `google.com` :
    
        <access origin="http://google.com" subdomains="false" />
        
    
    Določite dostopa na vseh področjih, vključno z lokalno `file://` protokola:
    
    <access origin="*" subdomains="true" />

(Če želite več informacij o podpori, dokumentaciji BlackBerry na [dostop element][8].)

 [8]: https://developer.blackberry.com/html5/documentation/ww_developing/Access_element_834677_11.html

## iOS spremembe v 3.1.0

Pred različico 3.1.0, Cordova iOS vključene nekatere nestandardne razširitve domene whilelisting shema podpira druge platforme Cordova. Od 3.1.0, iOS whitelist zdaj izpolnjuje virov whitelist sintakso popisovati na vrhu tega dokumenta. Če ste nadgradili iz pre-3.1.0, in so bili z uporabo te razširitve, smeš življati v sprememba vaš `config.xml` datoteko za nadaljevanje whitelisting istega nabora virov kot prej.

Natančneje, te vzorce je treba posodobiti:

*   `apache.org`(ni protokola): to bi prej ustrezajo `http` , `https` , `ftp` , in `ftps` protokolov. Sprememba v " `*://apache.org/*` " vključujejo vse protokole ali vključite vrstico za vsak protokol, morate za podporo.

*   `http://apache.*`(nadomestni na koncu domene): to bi prej tekmo vse top-level-domene, vključno z vseh možnih dvočrkovna TLD-ji (vendar ne koristno domen všeč. co.uk). Vključi vrstico za vsako TLD, ki dejansko nadzor, in morate na seznam dovoljenih.

*   `h*t*://ap*he.o*g`(znaka za naključno manjkajoče črke): ti niso več podprti; spremenite vključiti vrstico za vsako domeno in protokola, da morate dejansko belo listo.

## Windows Phone Whitelisting

Whitelisting pravila za Windows Phone 7 in 8 najdemo v app je `config.xml` datoteke.

## Tizen Whitelisting

Whitelisting pravila najdemo v app je `config.xml` datoteke. Platforma temelji na istem `subdomains` atribut kot BlackBerry platforme. (Če želite več informacij o podpori, dokumentaciji Tizen's na [dostop element][9].)

 [9]: https://developer.tizen.org/help/index.jsp?topic=%2Forg.tizen.web.appprogramming%2Fhtml%2Fide_sdk_tools%2Fconfig_editor_w3celements.htm