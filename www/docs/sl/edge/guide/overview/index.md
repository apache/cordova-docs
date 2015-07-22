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

# Pregled

Cordoba je odprtokodni mobilni razvoj okvira. To vam omogoča, da uporabite standardne spletne tehnologije HTML5, CSS3 in JavaScript za razvoj cross-platform, izogibanje vsak mobilne platforme native razvoj jezika. Aplikacije izvršiti v ovojih, ki ciljajo na vsako platformo, in se zanašajo na skladne s standardi API vezi do vsaka naprava senzorji, podatke in omrežje stalež.

Uporabite Cordova, če ste:

*   prenosen razvijalec in želite razširiti aplikacija čez več kot eno platformo, ne da bi ponovno izvajati z vsako platformo jezik in orodja nastavite.

*   spletni razvijalec in želite uvesti web app, ki je pakirani za distribucijo v različne app trgovina portali.

*   prenosen razvijalec in mešanje komponent native aplikacije z a *spletni pogled* (okno brskalnika) ki lahko dostop do naprave ravni API, ali če želite razvijati plugin vmesnika med native in spletni pogled komponente.

## Osnovne komponente

Cordova aplikacij, zanašajo na skupno `config.xml` datoteko, ki vsebuje informacije o app in določa parametre, ki vplivajo na kako deluje, kot je ali se odziva na usmerjenost premiki. Ta datoteka upoštevamo W3C's [Web App pakirani][1]ali *widget*, specifikacija.

 [1]: http://www.w3.org/TR/widgets/

Tožbi je izvajal kot spletno stran, imenovan *index.html* privzeto, ki se sklicuje na karkoli CSS, JavaScript, slike, predstavnostne datoteke, ali druga sredstva, ki so potrebne za to teči. App izvede kot *spletni pogled* v native uporabo ovoj, ki jo pošiljate app trgovin. Web app za interakcijo z različnih funkcij naprave, način native aplikacije ne, mora tudi sklicevanje na `cordova.js` datoteko, ki določa API vezi.

Spletni pogled Cordova omogočeno določijo vloge z celoten uporabniški vmesnik. Lahko tudi komponento v večje, hibridni aplikacija, ki meša v spletni pogled z native uporabo komponent. Cordova zagotavlja vmesnik *plugin* za te komponente komunicirati med seboj.

## Razvojnih poti

Od različice 3.0, lahko uporabite dva osnovna načina tvoriti a mobilnik. Medtem, ko lahko dosežete z uporabo obeh potekov dela isto stvar, nekatere naloge so bolj primerni za uporabo en potek dela nad drugimi. Zaradi tega morate razumeti obeh potekov dela, da najboljše orodje lahko uporabite za najboljše razmere.

Dve glavni poteki dela, ki so podprte so *Spletni projekt Dev* poteka dela in *Native platformo Dev* potek dela.

### Spletni projekt Dev

Si lahko predstavljate prva dela kot *Spletni projekt Dev* potek dela. Ko želite ustvariti Cordova aplikacija, ki teče na čim več mobilnih operacijskih sistemov, mogoče s tako malo posamezne razvojno delo čim uporabite potek dela. Potek dela je začel obstoj z Cordova 3.0 in nastanek Cordova *vmesnik ukazne vrstice* (CLI). CLI povzetkov stran veliko funkcionalnosti nižji ravni lupine skripte, da bodite pozorni na podrobnosti, ki se ukvarjajo z gradnjo vaše app, kot so kopiranje vaše spletne sredstev v pravilni mape za vsako mobilno platformo, spreminjanje posebne konfiguracije platformo, ali izvaja posebne graditi skripte za ustvarjanje dvojiške vrednosti programa. Si lahko preberete več o *Spletni projekt Dev* potek dela v vmesnik ukazne vrstice. Prosimo, upoštevajte, da pogosto, ko ljudje govorijo o "CLI", so govorili o *Spletni projekt Dev* potek dela.

### Native platformo Dev

Drugi poteka dela lahko upoštevajo kot *Native platformo Dev* potek dela. Uporabite to ko želite osredotočiti na gradnjo zahtevek za enotno platformo in so zainteresirani za spreminjanje nižje ravni platforma podrobnosti. Medtem ko še vedno lahko uporabite potek dela za izgradnjo apps prek-plosčad, pomanjkanje orodij za abstraktno proč različne korake zidava bo bolj težko. Na primer, hoteti življati rabiti Plugman namestiti isto plugin enkrat za vsako platformo, ki jih želite podporo. Korist za uporabo *Native platformo Dev* potek dela je, da so vam omogoča dostop do nižji ravni lupine skripte, da zgradite in preizkusite uporabo, tako da če ste taksist na domači strani stvari, potek dela je najbolj učinkovit način za test vaše spremembe. Potek dela je tudi primerno, če želite uporabiti na CordovaWebView kot majhen del v večjih native uporabo (glej vodnik Embedding spletni pogledi.) Si lahko preberete o poteku dela v različnih Shell orodje vodniki, na primer, Android Shell orodje vodnik in iOS Shell orodje vodnik.

Ko prvi odhod jasno, je morda najlažji za uporabo poteka dela *Projekta spletne Dev* ustvariti aplikacijo. (Umestiti CLI glej The vmesnik ukazne vrstice) Glede na sklop platform, ki jih želite ciljati, lahko zanesete CLI za postopno večjo delnic razvojnega cikla:

*   V najbolj osnovni scenarij, lahko uporabite CLI zgolj, da ustvariti nov projekt, ki je poseljena s privzeto konfiguracijo za spreminjanje.

*   Za številne mobilne platforme, lahko uporabite tudi CLI nastavite dodatne projektne datoteke, potrebno pripraviti v vsaki SDK. Za to delo, morate namestiti vsak ciljno platform SDK. (Glej platformo vodnike navodila.) Kot je navedeno v tabeli platformo podporo, morate teči CLI na različnih operacijskih sistemov glede na ciljni platformi.

*   Za podporo platforme, CLI lahko pripravijo executible aplikacije in jih vodijo v SDK-osnova načrt emulator. Za preverjanje, lahko ustvari datoteke programa in jih namestite neposredno v napravi.

Na kateri koli točki v razvojnem ciklu, lahko preklopite z uporabo več *Native platformo Dev* poteka dela. Orodja SDK značilne za platformo, ki lahko zagotavljajo bogatejši nabor možnosti. (Glej platformo vodiči za podrobnosti o vsaki platforma SDK orodje).

SDK okolje je bolj primerno, če želite izvajati hibridni app, ki mešanice komponent in spletnega native aplikacije. Najprej ustvariti app, lahko uporabite pripomoček ukazne vrstice ali iteratively zatem nahraniti posodobljeno kodo orodja SDK. Lahko tudi izgradnjo app je konfiguracijske datoteke sebi. (Glej config.xml datoteke za podrobnosti.)