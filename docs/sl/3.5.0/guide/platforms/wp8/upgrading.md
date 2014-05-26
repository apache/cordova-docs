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

# Nadgradnja Windows Phone

Ta vodič pokaže, kako spremeniti Windows Phone projektov, obe različici, 7 in 8, za nadgradnjo iz starejše različice Cordova. Večina teh navodil, ki se uporablja za projekte, ustvarjene s starejši nabor orodij ukazne vrstice, ki pred je `cordova` CLI korist. Glej The vmesnik ukazne vrstice za informacije kako modernizirati prevod od CLI. Naslednji razdelek kaže, kako nadgraditi iz-CLI projektov.

## Vzpenjajoč se v 3.2.0 od 3.1.0

Za projekte, ki so bile ustvarjene z cordova CLI:

1.  Update na `cordova` CLI različico. Glej vmesnik ukazne vrstice.

2.  Prost dostop `cordova platform update wp8` (ali `wp7` , na ploščadi, ste dodali vaš projekt).

Za projekte, ki niso ustvarjene z cordova CLI, teči:

        bin\update <project_path>
    

## Nadgradite 3.1.0 s 3.0.0

Za projekte, ki so bile ustvarjene z cordova CLI:

1.  Update na `cordova` CLI različico. Glej vmesnik ukazne vrstice.

2.  Prost dostop `cordova platform update wp8` (ali `wp7` , na ploščadi, ste dodali vaš projekt).

Za projekte, ki niso ustvarjene z cordova CLI, teči:

        bin\update <project_path>
    

## Nadgradnja CLI (3.0.0) iz 2.9.0

1.  Ustvariti nov projekt Apache Cordova 3.0.0 uporabo cordova CLI, kot je opisano v vmesnik ukazne vrstice.

2.  Dodajte vaš platforme cordova projekta, na primer:`cordova
platform add wp7 wp8`.

3.  Kopirajte vsebino projekta `www` imenik v `www` imenik v samem projektu cordova, ki ste jo pravkar ustvarili.

4.  Kopirati ali prepisati vse native sredstev iz svoje prvotne projekta ( `SplashScreen` , `ApplicationIcon` , itd), izdelava varen prišteti poljuben nov pila v v `.csproj` datoteko. Okno telefon projekt gradi znotraj na `platforms\wp7` ali `platforms\wp8` imenik.

5.  Z orodjem cordova CLI umestiti poljuben čep, ki jih potrebujete. Upoštevajte, da CLI ročaji vse jedro API kot plugins, tako da morda morali dodati. Samo 3.0.0 plugins združljivi z CLI.

6.  Zgradite in preizkusite.

## Nadgradite 3.0.0 (non-CLI) s 2.9.0

V Solution Explorerju okno Visual Studio:

1.  Ustvarite novo Apache Cordova WP7 ali WP8 3.0.0 projekta.

2.  Ulitek vsebina od vaš `www` naslovnik v nov projekt, in se prepričajte, ti elementi dodani k projektu VS.

3.  Kopiranje in prepiše vse brizg zaslon ali ikono slike.

4.  Ulitek nad vse plugins od na `plugins` imenik na novo projekta in zagotovi, da so tudi dodane VS projekta.

5.  Zgradite in preizkusite.

**Opomba**: vse jedro API odstranijo iz Cordova različico 3,0, in mora biti nameščen ločeno kot plugins. Če želite več informacij o tem, kako ponovno omogočili te funkcije v non-CLI potek dela, glejte Uporaba Plugman za upravljanje Plugins.

## Vzpenjajoč se v 2.9.0 iz 2.8.0

V Solution Explorerju okno Visual Studio:

1.  Ustvarite novo Apache Cordova WP7 ali WP8 2.9.0 projekt.

2.  Ulitek vsebina od vaš `www` naslovnik v nov projekt, in se prepričajte, ti elementi dodani k projektu VS.

3.  Posodobite ime `cordova.js` v HTML oznako, če je še vedno using cordova-VERSION.js (mora biti samo`cordova.js`).

4.  Kopiranje in prepiše vse brizg zaslon ali ikono slike.

5.  Ulitek nad vse plugins od na `plugins` imenik na novo projekta in zagotovi, da so tudi dodane datoteke .csproj.

6.  Zgradite in preizkusite.

## Vzpenjajoč se v 2.8.0 iz 2.7.0

V Solution Explorerju okno Visual Studio:

1.  Ustvarite novo Apache Cordova WP7 ali WP8 2.8.0 projekta.

2.  Ulitek vsebina od vaš `www` naslovnik v nov projekt, in se prepričajte, ti elementi dodani k projektu VS.

3.  Modernizirati vaš HTML rabiti nov `cordova.js` pila. (Opomba pomanjkanje številko različice v ime datoteke.)

4.  Kopiranje in prepiše vse brizg zaslon ali ikono slike.

5.  Ulitek nad vse plugins od na `plugins` imenik na novo projekta in zagotovi, da so tudi dodane VS projekta.

6.  Zgradite in preizkusite.

## Nadgradite 2.7.0 iz 2.6.0

V Solution Explorerju okno Visual Studio:

1.  Ustvarite novo Apache Cordova WP7 ali WP8 2.7.0 projekta.

2.  Ulitek vsebina od vaš `www` naslovnik v nov projekt, in se prepričajte, ti elementi dodani k projektu VS.

3.  Modernizirati vaš HTML rabiti nov `cordova-2.7.0.js` pila.

4.  Kopiranje in prepiše vse brizg zaslon ali ikono slike.

5.  Ulitek nad vse plugins od na `plugins` imenik na novo projekta in zagotovi, da so tudi dodane VS projekta.

6.  Zgradite in preizkusite.

## Nadgradite 2.6.0 s 2.5.0

V Solution Explorerju okno Visual Studio:

1.  Ustvarite novo Apache Cordova WP7 ali WP8 2.6.0 projekta.

2.  Ulitek vsebina od vaš `www` naslovnik v nov projekt, in se prepričajte, ti elementi dodani k projektu VS.

3.  Modernizirati vaš HTML rabiti nov `cordova-2.6.0.js` pila.

4.  Kopiranje in prepiše vse brizg zaslon ali ikono slike.

5.  Ulitek nad vse plugins od na `plugins` imenik na novo projekta in zagotovi, da so tudi dodane VS projekta.

6.  Zgradite in preizkusite.

## Vzpenjajoč se v 2.5.0 od 2.4.0

V Solution Explorerju okno Visual Studio:

1.  Ustvarite novo Apache Cordova WP7 ali WP8 2.5.0 projekta.

2.  Ulitek vsebina od vaš `www` naslovnik v nov projekt, in se prepričajte, ti elementi dodani k projektu VS.

3.  Modernizirati vaš HTML rabiti nov `cordova-2.5.0.js` pila.

4.  Kopiranje in prepiše vse brizg zaslon ali ikono slike.

5.  Ulitek nad vse plugins od na `plugins` imenik na novo projekta in zagotovi, da so tudi dodane VS projekta.

6.  Zgradite in preizkusite.

## Vzpenjajoč se v 2.4.0 z 2.3.0

V Solution Explorerju okno Visual Studio:

1.  Ustvarite novo Apache Cordova WP7 ali WP8 2.4.0 projekta.

2.  Ulitek vsebina od vaš `www` naslovnik v nov projekt, in se prepričajte, ti elementi dodani k projektu VS.

3.  Modernizirati vaš HTML rabiti nov `cordova-2.4.0.js` pila.

4.  Kopiranje in prepiše vse brizg zaslon ali ikono slike.

5.  Ulitek nad vse plugins od na `plugins` imenik na novo projekta in zagotovi, da so tudi dodane VS projekta.

6.  Zgradite in preizkusite.

## Nadgradite 2.3.0 s 2.2.0

V Solution Explorerju okno Visual Studio:

1.  Ustvarite nov Apache Cordova WP7 2.3.0 projekta.

2.  Ulitek vsebina od vaš `www` naslovnik v nov projekt, in se prepričajte, ti elementi dodani k projektu VS.

3.  Modernizirati vaš HTML rabiti nov `cordova-2.3.0.js` pila.

4.  Kopiranje in prepiše vse brizg zaslon ali ikono slike.

5.  Ulitek nad vse plugins od na `plugins` imenik na novo projekta in zagotovi, da so tudi dodane VS projekta.

6.  Zgradite in preizkusite.

## Nadgradite 2.2.0 s 2.1.0

V Solution Explorerju okno Visual Studio:

1.  Ustvarite nov Apache Cordova WP7 2.2.0 projekta.

2.  Ulitek vsebina od vaš `www` naslovnik v nov projekt, in se prepričajte, ti elementi dodani k projektu VS.

3.  Modernizirati vaš HTML rabiti nov `cordova-2.2.0.js` pila.

4.  Kopiranje in prepiše vse brizg zaslon ali ikono slike.

5.  Ulitek nad vse plugins od na `plugins` imenik na novo projekta in zagotovi, da so tudi dodane VS projekta.

6.  Zgradite in preizkusite.

## Nadgradite s 2.0.0 2.1.0

V Solution Explorerju okno Visual Studio:

1.  Ustvarite nov Apache Cordova WP7 2.1.0 projekta.

2.  Ulitek vsebina od vaš `www` naslovnik v nov projekt, in se prepričajte, ti elementi dodani k projektu VS.

3.  Modernizirati vaš HTML rabiti nov `cordova-2.1.0.js` pila.

4.  Kopiranje in prepiše vse brizg zaslon ali ikono slike.

5.  Ulitek nad vse plugins od na `plugins` imenik na novo projekta in zagotovi, da so tudi dodane VS projekta.

6.  Zgradite in preizkusite.

## Nadgradite 2.0.0 s 1.9.0

Obstajajo precejšnje spremembe WP7 struktura projekta v Apache Cordova 2.0.0 kateri izdelovanje to nadgradnjo malo bolj vpleteni da drugi. V bistvu to ni nadgradnjo, ampak vzpostavitev novega projekta in kopij preko obstoječih izvornih datotek.

V Solution Explorerju okno Visual Studio:

1.  Ustvarite nov Apache Cordova WP7 2,0 projekt.

2.  Ulitek vsebina od vaš `www` naslovnik v nov projekt, in se prepričajte, ti elementi dodani k projektu VS.

3.  Modernizirati vaš HTML rabiti nov `cordova-2.0.0.js` pila.

4.  Kopiranje in prepiše vse brizg zaslon ali ikono slike.

5.  Ulitek nad vse plugins od na `plugins` imenik na novo projekta in zagotovi, da so tudi dodane VS projekta.

6.  Zgradite in preizkusite.

## Nadgradite 1.9.0 s 1.8.0

V Solution Explorerju okno Visual Studio:

1.  Izbrisati `GapLib/WP7CordovaClassLib.dll` iz vašega projekta.

2.  Odstranite sklice na `WP7CordovaClassLib` v imeniku **referenc** .

3.  Desni klik na **reference** in izberite **Dodaj Reference**.

4.  Krmarite do novih distribucijskih in dodajte v `WP7CordovaClassLib.dll` datoteko.
    
    **Opomba**: si lahko ogledate različico DLL z desnim klikom na sklic, in izberete **lastnosti**.

5.  Kopiranje novih `cordova-1.9.0.js` v vašem projektu. (Bodite prepričani, je označena kot vsebine.)

6.  Modernizirati vaš HTML rabiti nov `cordova-1.9.0.js` pila.

## Nadgradite 1.8.0 s 1.7.0

V Solution Explorerju okno Visual Studio:

1.  Izbrisati `GapLib/WP7CordovaClassLib.dll` iz vašega projekta.

2.  Odstranite sklice na `WP7CordovaClassLib` v imeniku **referenc** .

3.  Desni klik na **reference** in izberite **Dodaj Reference**.

4.  Krmarite do novih distribucijskih in dodajte v `WP7CordovaClassLib.dll` datoteko.
    
    **Opomba**: si lahko ogledate različico DLL z desnim klikom na sklic, in izberete **lastnosti**.

5.  Kopiranje novih `cordova-1.8.0.js` v vašem projektu. (Bodite prepričani, je označena kot vsebine.)

6.  Modernizirati vaš HTML rabiti nov `cordova-1.8.0.js` pila.

## Nadgradite s 1.6.0 1.7.0

V Solution Explorerju okno Visual Studio:

1.  Izbrisati `GapLib/WP7CordovaClassLib.dll` iz vašega projekta.

2.  Odstranite sklice na `WP7CordovaClassLib` v imeniku **referenc** .

3.  Desni klik na **reference** in izberite **Dodaj Reference**.

4.  Krmarite do novih distribucijskih in dodajte v `WP7CordovaClassLib.dll` datoteko.
    
    **Opomba**: si lahko ogledate različico DLL z desnim klikom na sklic, in izberete **lastnosti**.

5.  Kopiranje novih `cordova-1.7.0.js` v vašem projektu. (Bodite prepričani, je označena kot vsebine.)

6.  Modernizirati vaš HTML rabiti nov `cordova-1.7.0.js` pila.

## Nadgradite 1.6.1 s 1.6.0

V Solution Explorerju okno Visual Studio:

1.  Izbrisati `GapLib/WP7CordovaClassLib.dll` iz vašega projekta.

2.  Odstranite sklice na `WP7CordovaClassLib` v imeniku **referenc** .

3.  Desni klik na **reference** in izberite **Dodaj Reference**.

4.  Krmarite do novih distribucijskih in dodajte v `WP7CordovaClassLib.dll` datoteko.
    
    **Opomba**: si lahko ogledate različico DLL z desnim klikom na sklic, in izberete **lastnosti**.

5.  Kopiranje novih `cordova-1.6.1.js` v vašem projektu. (Bodite prepričani, je označena kot vsebine.)

6.  Modernizirati vaš HTML rabiti nov `cordova-1.6.1.js` pila.

## Nadgradite 1.6.0 s 1.5.0

V Solution Explorerju okno Visual Studio:

1.  Izbrisati `GapLib/WP7CordovaClassLib.dll` iz vašega projekta.

2.  Odstranite sklice na `WP7CordovaClassLib` v imeniku **referenc** .

3.  Desni klik na **reference** in izberite **Dodaj Reference**.

4.  Krmarite do novih distribucijskih in dodajte v `WP7CordovaClassLib.dll` datoteko.
    
    **Opomba**: si lahko ogledate različico DLL z desnim klikom na sklic, in izberete **lastnosti**.

5.  Kopiranje novih `cordova-1.6.0.js` v vašem projektu. (Bodite prepričani, je označena kot vsebine.)

6.  Modernizirati vaš HTML rabiti nov `cordova-1.6.0.js` pila.

## Nadgradite 1.5.0 s 1.4.0

V Solution Explorerju okno Visual Studio:

1.  Izbrisati `GapLib/WP7CordovaClassLib.dll` iz vašega projekta.

2.  Odstranite sklice na `WP7CordovaClassLib` v imeniku **referenc** .

3.  Desni klik na **reference** in izberite **Dodaj Reference**.

4.  Krmarite do novih distribucijskih in dodajte v `WP7CordovaClassLib.dll` datoteko.
    
    **Opomba**: si lahko ogledate različico DLL z desnim klikom na sklic, in izberete **lastnosti**.

5.  Kopiranje novih `cordova-1.5.0.js` v vašem projektu. (Bodite prepričani, je označena kot vsebine.)

6.  Modernizirati vaš HTML rabiti nov `cordova-1.5.0.js` pila.

## Nadgradite 1.4.0 s 1.3.0

V Solution Explorerju okno Visual Studio:

1.  Izbrisati `GapLib/WP7CordovaClassLib.dll` iz vašega projekta.

2.  Odstranite sklice na `WP7CordovaClassLib` v imeniku **referenc** .

3.  Desni klik na **reference** in izberite **Dodaj Reference**.

4.  Krmarite do novih distribucijskih in dodajte v `WP7CordovaClassLib.dll` datoteko.
    
    **Opomba**: si lahko ogledate različico DLL z desnim klikom na sklic, in izberete **lastnosti**.

5.  Kopiranje novih `cordova-1.4.0.js` v vašem projektu. (Bodite prepričani, je označena kot vsebine.)

6.  Modernizirati vaš HTML rabiti nov `cordova-1.4.0.js` pila.

## Nadgradite 1.3.0 s 1.2.0

V Solution Explorerju okno Visual Studio:

1.  Izbrisati `GapLib/WP7CordovaClassLib.dll` iz vašega projekta.

2.  Odstranite sklice na `WP7CordovaClassLib` v imeniku **referenc** .

3.  Desni klik na **reference** in izberite **Dodaj Reference**.

4.  Krmarite do novih distribucijskih in dodajte v `WP7CordovaClassLib.dll` datoteko.
    
    **Opomba**: si lahko ogledate različico DLL z desnim klikom na sklic, in izberete **lastnosti**.

5.  Kopiranje novih `cordova-1.3.0.js` v vašem projektu. (Bodite prepričani, je označena kot vsebine.)

6.  Modernizirati vaš HTML rabiti nov `cordova-1.3.0.js` pila.

## Nadgradite 1.2.0 s 1.1.0

V Solution Explorerju okno Visual Studio:

1.  Izbrisati `GapLib/WP7CordovaClassLib.dll` iz vašega projekta.

2.  Odstranite sklice na `WP7CordovaClassLib` v imeniku **referenc** .

3.  Desni klik na **reference** in izberite **Dodaj Reference**.

4.  Krmarite do novih distribucijskih in dodajte v `WP7CordovaClassLib.dll` datoteko.
    
    **Opomba**: si lahko ogledate različico DLL z desnim klikom na sklic, in izberete **lastnosti**.

5.  Kopiranje novih `cordova-1.2.0.js` v vašem projektu. (Bodite prepričani, je označena kot vsebine.)

6.  Modernizirati vaš HTML rabiti nov `cordova-1.2.0.js` pila.

## Nadgradite 1.1.0 iz 1.0.0

V Solution Explorerju okno Visual Studio:

1.  Izbrisati `GapLib/WP7CordovaClassLib.dll` iz vašega projekta.

2.  Odstranite sklice na `WP7CordovaClassLib` v imeniku **referenc** .

3.  Desni klik na **reference** in izberite **Dodaj Reference**.

4.  Krmarite do novih distribucijskih in dodajte v `WP7CordovaClassLib.dll` datoteko.
    
    **Opomba**: si lahko ogledate različico DLL z desnim klikom na sklic, in izberete **lastnosti**.

5.  Kopiranje novih `cordova-1.1.0.js` v vašem projektu. (Bodite prepričani, je označena kot vsebine.)

6.  Modernizirati vaš HTML rabiti nov `cordova-1.1.0.js` pila.