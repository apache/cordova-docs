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

# Nadgradnji Android

Ta vodič pokaže, kako spremeniti Android projekte za nadgradnjo iz starejše različice Cordova. Večina teh navodil, ki se uporablja za projekte, ustvarjene s starejši nabor orodij ukazne vrstice, ki pred je `cordova` CLI korist. Glej The vmesnik ukazne vrstice za informacije kako modernizirati prevod od CLI.

## 3.3.0 Nadgraditvi 3.2.0

Sledite enako instructinos kot za`3.2.0`.

Začenši s 3.3.0 Cordova runtime je zdaj skupljevati kot Android knjižnica namesto Jar. To mora imeti nobenega učinka za uporabo ukazne vrstice, vendar IDE uporabniki bodo morali uvoziti novo dodane `MyProject-CordovaLib` projekt v njihovi delovni prostor.

## V 3.2.0 nadgraditvi 3.1.0

Za projekte, ki so bile ustvarjene z cordova CLI:

1.  Update na `cordova` CLI različico. Glej vmesnik ukazne vrstice.

2.  Teči`cordova platform update android`

Za projekte, ki niso ustvarjene z cordova CLI, teči:

        bin/update <project_path>
    

## 3.1.0 Nadgraditvi 3.0.0

Za projekte, ki so bile ustvarjene z cordova CLI:

1.  Update na `cordova` CLI različico. Glej vmesnik ukazne vrstice.

2.  Teči`cordova platform update android`

Za projekte, ki niso ustvarjene z cordova CLI, teči:

        bin/update <project_path>
    

## Nadgradnja CLI (3.0.0) iz 2.9.0

1.  Ustvariti nov projekt Apache Cordova 3.0.0 uporabo cordova CLI, kot je opisano v vmesnik ukazne vrstice.

2.  Dodajte vaš platforme cordova projekta, na primer:`cordova
platform add android`.

3.  Kopirajte vsebino vašega projekta `www` imenik v `www` imenik v samem projektu cordova, ki ste jo pravkar ustvarili.

4.  Kopiranje vseh domačih sredstev iz svojega starega projekta v ustrezne imenike pod `platforms/android` : ta imenik je native cordova android projekt, kjer obstaja.

5.  Z orodjem cordova CLI umestiti poljuben čep, ki jih potrebujete. Upoštevajte, da CLI ročaji vse jedro API kot plugins, tako da morda morali dodati. Samo 3.0.0 plugins združljivi z CLI.

## Nadgradite 3.0.0 s 2.9.0

1.  Ustvariti nov projekt Apache Cordova Android.

2.  Ulitek vsebina od vaš `www` naslovnik v nov projekt.

3.  Kopiranje vseh native Android sredstev iz vašega `res` imenik za nov projekt.

4.  Ulitek v poljuben čep ste namestili iz je `src` podimenikov v nov projekt.

5.  Poskrbite, da nadgradi nobenega zastarelo `<plugin>` reference iz vaš stari `config.xml` datoteko na novo `<feature>` specifikacija.

6.  Posodobiti vse sklice na `org.apache.cordova.api` pakiranju,`org.apache.cordova`.
    
    **Opomba**: vse jedro API-ji so bili odstranjeni in mora biti nameščen kot plugins. Prosimo, glejte Uporaba Plugman za upravljanje Plugins vodnik za podrobnosti.

## Vzpenjajoč se v 2.9.0 iz 2.8.0

1.  Teči`bin/update <project_path>`.

## Vzpenjajoč se v 2.8.0 iz 2.7.0

1.  Odstraniti `cordova-2.7.0.jar` iz projekta `libs` imenik.

2.  Dodaj `cordova-2.8.0.jar` v projekt `libs` imenik.

3.  Če uporabite Eclipse, osvežite vaš projekt Eclipse in delati a čist.

<!-- SS Eclipse -->

1.  Kopiranje novih `cordova.js` v vašem projektu.

2.  Modernizirati vaš HTML rabiti nov `cordova.js` pila.

3.  Kopija je `res/xml/config.xml` datoteke prilagoditi`framework/res/xml/config.xml`.

4.  Posodobitev `framework/res/xml/config.xml` imeti podobne nastavitve, kot je to storil prej.

5.  Kopiranje datotek iz `bin/templates/cordova` v projekt `cordova` imenik.

## Nadgradite 2.7.0 iz 2.6.0

1.  Odstraniti `cordova-2.6.0.jar` iz projekta `libs` imenik.

2.  Dodaj `cordova-2.7.0.jar` v projekt `libs` imenik.

3.  Če uporabite Eclipse, osvežite vaš projekt Eclipse in delati a čist.

4.  Kopiranje novih `cordova-2.7.0.js` v vašem projektu.

5.  Modernizirati vaš HTML rabiti nov `cordova-2.7.0.js` pila.

6.  Kopija je `res/xml/config.xml` primerjal`framework/res/xml/config.xml`.

7.  Posodobitev `framework/res/xml/config.xml` imeti podobne nastavitve, kot je to storil prej.

8.  Kopiranje datotek iz `bin/templates/cordova` v projekt `cordova` imenik.

## Nadgradite 2.6.0 s 2.5.0

1.  Odstraniti `cordova-2.5.0.jar` iz projekta `libs` imenik.

2.  Dodaj `cordova-2.6.0.jar` v projekt `libs` imenik.

3.  Če uporabite Eclipse, osvežite vaš projekt Eclipse in delati a čist.

4.  Kopiranje novih `cordova-2.6.0.js` v vašem projektu.

5.  Modernizirati vaš HTML rabiti nov `cordova-2.6.0.js` pila.

6.  Kopija je `res/xml/config.xml` primerjal`framework/res/xml/config.xml`.

7.  Posodobitev `framework/res/xml/config.xml` imeti podobne nastavitve, kot je to storil prej.

8.  Kopiranje datotek iz `bin/templates/cordova` v projekt `cordova` imenik.

Prost dostop `bin/update <project>` s poti projekta, prikazana v imeniku Cordova vir.

## Vzpenjajoč se v 2.5.0 od 2.4.0

1.  Odstraniti `cordova-2.4.0.jar` iz projekta `libs` imenik.

2.  Dodaj `cordova-2.5.0.jar` v projekt `libs` imenik.

3.  Če uporabite Eclipse, osvežite vaš projekt Eclipse in delati a čist.

4.  Kopiranje novih `cordova-2.5.0.js` v vašem projektu.

5.  Modernizirati vaš HTML rabiti nov `cordova-2.5.0.js` pila.

6.  Kopija je `res/xml/config.xml` primerjal`framework/res/xml/config.xml`.

7.  Posodobitev `framework/res/xml/config.xml` imeti podobne nastavitve, kot je to storil prej.

8.  Kopiranje datotek iz `bin/templates/cordova` v projekt `cordova` imenik.

## Vzpenjajoč se v 2.4.0 z 2.3.0

1.  Odstraniti `cordova-2.3.0.jar` iz projekta `libs` imenik.

2.  Dodaj `cordova-2.4.0.jar` v projekt `libs` imenik.

3.  Če uporabite Eclipse, osvežite vaš projekt Eclipse in delati a čist.

4.  Kopiranje novih `cordova-2.4.0.js` v vašem projektu.

5.  Modernizirati vaš HTML rabiti nov `cordova-2.4.0.js` pila.

6.  Kopija je `res/xml/config.xml` primerjal`framework/res/xml/config.xml`.

7.  Kopiranje datotek iz `bin/templates/cordova` v projekt `cordova` imenik.

## Nadgradite 2.3.0 s 2.2.0

1.  Odstraniti `cordova-2.2.0.jar` iz projekta `libs` imenik.

2.  Dodaj `cordova-2.3.0.jar` v projekt `libs` imenik.

3.  Če uporabite Eclipse, osvežite vaš projekt Eclipse in delati a čist.

4.  Kopiranje novih `cordova-2.3.0.js` v vašem projektu.

5.  Modernizirati vaš HTML rabiti nov `cordova-2.3.0.js` pila.

6.  Kopija je `res/xml/config.xml` primerjal`framework/res/xml/config.xml`.

7.  Kopiranje datotek iz `bin/templates/cordova` v projekt `cordova` imenik.

## Nadgradite 2.2.0 s 2.1.0

1.  Odstraniti `cordova-2.1.0.jar` iz projekta `libs` imenik.

2.  Dodaj `cordova-2.2.0.jar` v projekt `libs` imenik.

3.  Če uporabite Eclipse, osvežite vaš projekt Eclipse in delati a čist.

4.  Kopiranje novih `cordova-2.2.0.js` v vašem projektu.

5.  Modernizirati vaš HTML rabiti nov `cordova-2.2.0.js` pila.

6.  Kopija je `res/xml/config.xml` primerjal`framework/res/xml/config.xml`.

7.  Kopiranje datotek iz `bin/templates/cordova` v projekt `cordova` imenik.

## Nadgradite s 2.0.0 2.1.0

1.  Odstraniti `cordova-2.0.0.jar` iz projekta `libs` imenik.

2.  Dodaj `cordova-2.1.0.jar` v projekt `libs` imenik.

3.  Če uporabite Eclipse, osvežite vaš projekt Eclipse in delati a čist.

4.  Kopiranje novih `cordova-2.1.0.js` v vašem projektu.

5.  Modernizirati vaš HTML rabiti nov `cordova-2.1.0.js` pila.

6.  Kopija je `res/xml/config.xml` primerjal`framework/res/xml/config.xml`.

7.  Kopiranje datotek iz `bin/templates/cordova` v projekt `cordova` imenik.

## Nadgradite 2.0.0 s 1.9.0

1.  Odstraniti `cordova-1.9.0.jar` iz projekta `libs` imenik.

2.  Dodaj `cordova-2.0.0.jar` v projekt `libs` imenik.

3.  Če uporabite Eclipse, osvežite vaš projekt Eclipse in delati a čist.

4.  Kopiranje novih `cordova-2.0.0.js` v vašem projektu.

5.  Modernizirati vaš HTML rabiti nov `cordova-2.0.0.js` pila.

6.  Kopija je `res/xml/config.xml` primerjal`framework/res/xml/config.xml`.

V je 2.0.0 javnost, je `config.xml` datoteke združuje in nadomešča `cordova.xml` in `plugins.xml` . Stare datoteke so zastarelo, in medtem ko še vedno delajo v 2.0.0, hoteti zapora ki dela v prihodnjih izdajah.

## Nadgradite 1.9.0 s 1.8.1

1.  Odstraniti `cordova-1.8.0.jar` iz projekta `libs` imenik.

2.  Dodaj `cordova-1.9.0.jar` v projekt `libs` imenik.

3.  Če uporabite Eclipse, osvežite vaš projekt Eclipse in delati a čist.

4.  Kopiranje novih `cordova-1.9.0.js` v vašem projektu.

5.  Modernizirati vaš HTML rabiti nov `cordova-1.9.0.js` pila.

6.  Posodobitev `res/xml/plugins.xml` primerjal`framework/res/xml/plugins.xml`.

Zaradi uvedbe na `CordovaWebView` v s 1.9.0 javnost, vstavke morda ne bodo delovale. Teh plugins potreba zadobiti kontekst iz v `CordovaInterface` z uporabo `getContext()` ali `getActivity()` . Če niste izkušen Android developer, obrnite vzdrževalec plugin in Dodaj to opravilo svoje bug tracker.

## Nadgradite 1.8.0 s 1.8.0

1.  Odstraniti `cordova-1.8.0.jar` iz projekta `libs` imenik.

2.  Dodaj `cordova-1.8.1.jar` v projekt `libs` imenik.

3.  Če uporabite Eclipse, osvežite vaš projekt Eclipse in delati a čist.

4.  Kopiranje novih `cordova-1.8.1.js` v vašem projektu.

5.  Modernizirati vaš HTML rabiti nov `cordova-1.8.1.js` pila.

6.  Posodobitev `res/xml/plugins.xml` primerjal`framework/res/xml/plugins.xml`.

## Nadgradite 1.8.0 s 1.7.0

1.  Odstraniti `cordova-1.7.0.jar` iz projekta `libs` imenik.

2.  Dodaj `cordova-1.8.0.jar` v projekt `libs` imenik.

3.  Če uporabite Eclipse, osvežite vaš projekt Eclipse in delati a čist.

4.  Kopiranje novih `cordova-1.8.0.js` v vašem projektu.

5.  Modernizirati vaš HTML rabiti nov `cordova-1.8.0.js` pila.

6.  Posodobitev `res/xml/plugins.xml` primerjal`framework/res/xml/plugins.xml`.

## Nadgradite 1.8.0 s 1.7.0

1.  Odstraniti `cordova-1.7.0.jar` iz projekta `libs` imenik.

2.  Dodaj `cordova-1.8.0.jar` v projekt `libs` imenik.

3.  Če uporabite Eclipse, osvežite vaš projekt Eclipse in delati a čist.

4.  Kopiranje novih `cordova-1.8.0.js` v vašem projektu.

5.  Modernizirati vaš HTML rabiti nov `cordova-1.8.0.js` pila.

6.  Posodobitev `res/xml/plugins.xml` primerjal`framework/res/xml/plugins.xml`.

## Nadgradite s 1.6.1 1.7.0

1.  Odstraniti `cordova-1.6.1.jar` iz projekta `libs` imenik.

2.  Dodaj `cordova-1.7.0.jar` v projekt `libs` imenik.

3.  Če uporabite Eclipse, osvežite vaš projekt Eclipse in delati a čist.

4.  Kopiranje novih `cordova-1.7.0.js` v vašem projektu.

5.  Posodobitev `res/xml/plugins.xml` primerjal`framework/res/xml/plugins.xml`.

## Nadgradite 1.6.1 s 1.6.0

1.  Odstraniti `cordova-1.6.0.jar` iz projekta `libs` imenik.

2.  Dodaj `cordova-1.6.1.jar` v projekt `libs` imenik.

3.  Če uporabite Eclipse, osvežite vaš projekt Eclipse in delati a čist.

4.  Kopiranje novih `cordova-1.6.1.js` v vašem projektu.

5.  Posodobitev `res/xml/plugins.xml` primerjal`framework/res/xml/plugins.xml`.

## Nadgradite 1.6.0 s 1.5.0

1.  Odstraniti `cordova-1.5.0.jar` iz projekta `libs` imenik.

2.  Dodaj `cordova-1.6.0.jar` v projekt `libs` imenik.

3.  Če uporabite Eclipse, osvežite vaš projekt Eclipse in delati a čist.

4.  Kopiranje novih `cordova-1.6.0.js` v vašem projektu.

5.  Modernizirati vaš HTML rabiti nov `cordova-1.6.0.js` pila.

6.  Posodobitev `res/xml/plugins.xml` primerjal`framework/res/xml/plugins.xml`.

7.  Zamenjajte `res/xml/phonegap.xml` s `res/xml/cordova.xml` na tekmo`framework/res/xml/cordova.xml`.

## Nadgradite 1.5.0 s 1.4.0

1.  Odstraniti `phonegap-1.4.0.jar` iz projekta `libs` imenik.

2.  Dodaj `cordova-1.5.0.jar` v projekt `libs` imenik.

3.  Če uporabite Eclipse, osvežite vaš projekt Eclipse in delati a čist.

4.  Kopiranje novih `cordova-1.5.0.js` v vašem projektu.

5.  Modernizirati vaš HTML rabiti nov `cordova-1.5.0.js` pila.

6.  Posodobitev `res/xml/plugins.xml` primerjal`framework/res/xml/plugins.xml`.

7.  Zamenjajte `res/xml/phonegap.xml` s `res/xml/cordova.xml` na tekmo`framework/res/xml/cordova.xml`.

## Nadgradite 1.4.0 s 1.3.0

1.  Odstraniti `phonegap-1.3.0.jar` iz projekta `libs` imenik.

2.  Dodaj `phonegap-1.4.0.jar` v projekt `libs` imenik.

3.  Če uporabite Eclipse, osvežite vaš projekt Eclipse in delati a čist.

4.  Kopiranje novih `phonegap-1.4.0.js` v vašem projektu.

5.  Modernizirati vaš HTML rabiti nov `phonegap-1.4.0.js` pila.

6.  Posodobitev `res/xml/plugins.xml` primerjal`framework/res/xml/plugins.xml`.

7.  Posodobitev `res/xml/phonegap.xml` primerjal`framework/res/xml/phonegap.xml`.

## Nadgradite 1.3.0 s 1.2.0

1.  Odstraniti `phonegap-1.2.0.jar` iz projekta `libs` imenik.

2.  Dodaj `phonegap-1.3.0.jar` v projekt `libs` imenik.

3.  Če uporabite Eclipse, osvežite vaš projekt Eclipse in delati a čist.

4.  Kopiranje novih `phonegap-1.3.0.js` v vašem projektu.

5.  Modernizirati vaš HTML rabiti nov `phonegap-1.2.0.js` pila.

6.  Posodobitev `res/xml/plugins.xml` primerjal`framework/res/xml/plugins.xml`.

7.  Posodobitev `res/xml/phonegap.xml` primerjal`framework/res/xml/phonegap.xml`.

## Nadgradite 1.2.0 s 1.1.0

1.  Odstraniti `phonegap-1.1.0.jar` iz projekta `libs` imenik.

2.  Dodaj `phonegap-1.2.0.jar` v projekt `libs` imenik.

3.  Če uporabite Eclipse, osvežite vaš projekt Eclipse in delati a čist.

4.  Kopiranje novih `phonegap-1.2.0.js` v vašem projektu.

5.  Modernizirati vaš HTML rabiti nov `phonegap-1.2.0.js` pila.

6.  Posodobitev `res/xml/plugins.xml` primerjal`framework/res/xml/plugins.xml`.

7.  Posodobitev `res/xml/phonegap.xml` primerjal`framework/res/xml/phonegap.xml`.

## Nadgradite 1.1.0 iz 1.0.0

1.  Odstraniti `phonegap-1.0.0.jar` iz projekta `libs` imenik.

2.  Dodaj `phonegap-1.1.0.jar` v projekt `libs` imenik.

3.  Če uporabite Eclipse, osvežite vaš projekt Eclipse in delati a čist.

4.  Kopiranje novih `phonegap-1.1.0.js` v vašem projektu.

5.  Modernizirati vaš HTML rabiti nov `phonegap-1.1.0.js` pila.

6.  Posodobitev `res/xml/plugins.xml` primerjal`framework/res/xml/plugins.xml`.

## Nadgradite 1.0.0 s 0.9.6

1.  Odstraniti `phonegap-0.9.6.jar` iz projekta `libs` imenik.

2.  Dodaj `phonegap-1.0.0.jar` v projekt `libs` imenik.

3.  Če uporabite Eclipse, osvežite vaš projekt Eclipse in delati a čist.

4.  Kopiranje novih `phonegap-1.0.0.js` v vašem projektu.

5.  Modernizirati vaš HTML rabiti nov `phonegap-1.0.0.js` pila.

6.  Dodajanje v `res/xml/plugins.xml` primerjal`framework/res/xml/plugins.xml`.