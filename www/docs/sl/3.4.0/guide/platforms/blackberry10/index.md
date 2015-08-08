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

# BlackBerry 10 platformo vodnik

Ta vodič pokaže, kako ustanoviti svoj razvojno okolje za izgradnjo in razporeditev Cordova aplikacije za naprave BlackBerry 10. Za prejšnje različice BlackBerry, morate uporabiti drug nabor orodij ukazne vrstice, opisane v BlackBerry platforme vodnik.

## Zahteve

Razvojno okolje je na voljo za Windows, Mac in Linux.

Razvijalci uporabljajte z `cordova` utility, v povezavi z Blackberry Native SDK. Glej The vmesnik ukazne vrstice za informacije kako namestiti `cordova` , Dodaj projektov, nato gradite in objavljajte za vsako platformo.

## Namestite BlackBerry Native SDK

BlackBerry Native SDK je na voljo od [developer.blackberry.com][1]. Po namestitvi, morate dodati ukazne vrstice orodja v vaš sistem steza.

 [1]: http://developer.blackberry.com/native/download/

Na okno:

*   Pojdite na **Moj računalnik → lastnosti napredno → → spremenljivke okolja**.

*   Dodaj Native SDK namestite directory pot, na primer:

    ;C:\bbndk\host\_10\_2\_0\_132\darwin\x86\usr\bin\

Na Mac in Linux:

*   Urejanje z `~/.bash_profile` datoteko, dodal vrstico, kot sledi, glede na to, kje je bil Native SDK nameščen:

    $ export PATH=${PATH}:/Applications/Momentics.app/host\_10\_2\_0\_15/darwin/x86/usr/bin/

*   Prost dostop sledeč uporabiti spremembe v trenutno sejo:

    $ vir ~/.bash_profile

## Za podpis

Če želite preskusiti na napravo ali distribuirati apps skozi svetu robida, mora biti vaš sistem setup za podpisovanje kode.

Pridobiti podpisnega ključa, pojdite na \[BlackBerry tipke naročilnica\] (https://www.blackberry.com/SignedKeys/codesigning.html).

Izberite prvo potrditveno polje: "za BlackBerry10 apps, razvita z uporabo BlackBerry NDK" in nato prijavite ali ustvarite a BBID.

Vnesite geslo in kliknite "Get žetona« prenesti bbidtoken.csk. Shranite to datoteko privzeto mesto za vaš OS, ki bodo prikazani na stran za prenos.

Zadnji korak je ustvariti podpisno potrdilo:

    $ blackberry-keytool -genkeypair -storepass <password> -author 'Your Name’


## Ustvarjanje projekta

Uporaba na `cordova` korist zaiti ki gre gor a nov projekt, kot je opisano v vmesnik ukazne vrstice. Na primer, v a naslovnik izvorne kode:

    $ cordova create hello com.example.hello
    $ cd hello
    $ cordova platform add blackberry10
    $ cordova build


## Razporedi na Emulator

Če želite zagnati napravo emulator, travnato gričevje ter napeljati BlackBerry 10 Simulator.

*   [Download][1]
*   [Uvod][2]

 [2]: http://developer.blackberry.com/devzone/develop/simulator/blackberry_10_simulator_start.html

Pred preskušanjem app na emulator ali napravo, morate omogočiti razvoj mode.

Začetek emulator slike, nato pa izberite **Nastavitve** z za četnega zaslona:

![][3]

 [3]: {{ site.baseurl }}/static/img/guide/platforms/blackberry10/bb_home.png

Pluti v **varnost in zasebnost → razvoj način** oddelek in omogočiti možnost:

![][4]

 [4]: {{ site.baseurl }}/static/img/guide/platforms/blackberry10/bb_devel.png

Nato zaženite je `emulate` ukaz razgledati app:

    $ cordova emulate blackberry10 --devicepass <password>


## Razporedi na napravo

Napotiti na napravo, preverite, ali je priključen na računalnik in je omogočen način razvoja.

Nato zaženite je `run` ukaz razgledati app:

    $ cordova run blackberry10 --devicepass <password>


Če debug žeton še ni ustanovljen za napravo, sporočilo o napaki povpraša, geslo ste določili pri konfiguraciji računalnika za podpisovanje aplikacij.

    $ cordova run blackberry10 --devicepass <password> --keystorepass <signing password>


## Odpravljanje napak s WebInspector

Med odpravljanjem napak na napravi ali emulator, lahko zaženete WebInspector na daljavo, da si ogledate aplikacije notranje stanje. Poziv prikaže URL, ki vam omogoča povezavo vaš app s standardnega spletnega brskalnika. Če želite več informacij, glejte [Odpravljanje napak z uporabo WebInspector][5].

 [5]: http://developer.blackberry.com/html5/documentation/web_inspector_overview_1553586_11.html

## Gradnjo izpust prevod

Privzeto, teče na `cordova build` ukaz Ustvari datoteko paket nepodpisan *.bar* primerna za testiranje na napravo ali simulator.

Uporabo `--release` ustvariti izpust prevod primerna za distribucijo prek svetu robida.

    $ cordova build --release --keystorepass <signing password>


Je `--keystorepass` možnost določa geslo, ki ste določili pri konfiguraciji računalnika za podpis aplikacije.

## Razporedi na druge lokacije

Zgoraj navodila domnevati napravo je priključen preko USB ali simulator izvaja v lokalnem računalniku. Prav tako je mogoče napotiti na drugih lokacijah.

Dodaten komplet orodjih ukazne vrstice, so vključeni, ko nastavite BlackBerry 10 platformo za vaš projekt. Ukaz, v tem primeru uveljavlja iz projekta najvišji ravni imenika, associates cilj imenovan *emu* z IP naslovom.

*   Na okno:

    $ platforms\blackberry10\cordova\target.bat add emu 192.168.2.24 -t simulator

*   Na Mac/Linux:

    $ platforms/blackberry10/cordova/target add emu 192.168.2.24 -t simulator

Ko je opredeljen cilj, vam lahko zagotovi, da prost dostop zapoved z `--target` :

    $ cordova run blackberry10 --target=emu
