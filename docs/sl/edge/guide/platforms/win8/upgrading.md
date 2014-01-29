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

# Nadgradnjo operacijskega sistema Windows 8

Ta vodič pokaže, kako spremeniti Windows 8 projektov za nadgradnjo iz starejše različice Cordova. Večina teh navodil, ki se uporablja za projekte, ustvarjene s starejši nabor orodij ukazne vrstice, ki pred je `cordova` CLI korist. Glej The vmesnik ukazne vrstice za informacije kako modernizirati prevod od CLI.

## Vzpenjajoč se v 3.2.0 od 3.1.0

Za projekte, ki so bile ustvarjene z cordova CLI:

1.  Update na `cordova` CLI različico. Glej vmesnik ukazne vrstice.

2.  Teči`cordova platform update windows8`.

Za projekte, ki niso ustvarjene z cordova CLI, teči:

        bin\update <project_path>
    

## Nadgradite 3.1.0

Cordova CLI podporo za Windows 8 je bil uveden v Cordova 3.1.0. Za nadgradnjo, predlagamo, da ustvarja nove Cordova CLI projekta in se gibljejo do vseh potrebnih sredstev.

## Vzpenjajoč se v 2.9.0 iz 2.8.0

Naslednje ukaze je treba narediti iz znotraj Visual Studio prepričati se da vse sklice v projektu so posodobljena/izbrisati.

1.  Odstraniti `cordova-2.8.0.js` iz projekta `www` imenik.

2.  Dodaj `cordova.js` datoteko iz vira projekta `www` imenik. (Upoštevajte, da datoteka ne vsebuje številko različice v ime datoteke.)

3.  Zgradite in preizkusite!

## Vzpenjajoč se v 2.8.0 iz 2.7.0

Naslednje ukaze je treba narediti iz znotraj Visual Studio prepričati se da vse sklice v projektu so posodobljena/izbrisati.

1.  Odstraniti `cordova-2.7.0.js` iz projekta `www` imenik.

2.  Dodaj `cordova.js` datoteko iz vira projekta `www` imenik. (Upoštevajte, da datoteka ne vsebuje številko različice v ime datoteke.)

3.  Zgradite in preizkusite!