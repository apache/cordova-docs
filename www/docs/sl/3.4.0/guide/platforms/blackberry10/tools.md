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

# BlackBerry 10 orodij ukazne vrstice

Na `cordova` pripomoček ukazne vrstice je na visoki ravni orodje, ki vam omogoča izgradnjo aplikacij na različnih platformah več naenkrat. Starejšo različico Cordova okvir zagotavlja kompleti orodja ukazne vrstice za vsako platformo. Da jih uporabljajo kot alternativa CLI, morate prenesti to različico Cordova iz [cordova.apache.org][1]. Download vsebuje ločene arhivu za vsako platformo. Razširite platformo, ki jih želite ciljati. Orodja, opisani tukaj, so običajno na voljo v najvišje ravni `bin` imenik, sicer se posvetujte **OBAVIJESNA** datoteka za podrobnejše usmeritve.

 [1]: http://cordova.apache.org

Podatki o nizki ravni vmesnik ukazne vrstice, ki omogoča plugins, glejte Uporaba Plugman za upravljanje Plugins. Glejte Uporaba Plugins za pregled.

Če potrebujete pomoč s poljuben zapoved spodaj, vnesite ukaz, skupaj z na `-h` ali `-help` argumentov, ki jih podpira vse ukaze in ki zagotavljajo opisi za vsako trditev, ki so na voljo.

## Ustvari App

Je `create` ukaz Ustvari nov projekt:

    bin/ustvariti < pot-za-projekt >< projekt-paket >< ime projekta >
    

kjer

*   `<path-to-project>`določa imenik, želite projekt ustvaril v

*   `<project-package>`določa slog identifikatorja povratne domene

*   `<project-name>`določa ime za prikaz apps

**Opomba**: na `create` ukaz bootstraps odvisnosti umestitev skozi je `npm install` ukaz. Odvisno od umestitev naslovnik ter sistem dovoljenj, to lahko zahteva skrbniške privilegije. Če obstaja problem na OSX/Linux, teči `sudo npm install` pred uporabo je `create` ukaz. Na Windows, zaženite `npm install` v a zapoved-črta korist odprl s oskrbnik svoboščina.

## Ustvarite cilj

Je `target` ukaz vam omogoča upravljanje emulator ali naprave BlackBerry, ki jih uporabljate za preskušanje vaš app. Lahko dodate ali odstranite cilj ali nastavite cilj kot privzeti ciljni.

### Dodajte cilj

    <path-to-project>/cordova/target add <name> <ip-address> [-t | --type <device | simulator>] [-p | --password <password>] [--pin <device-pin>]
    

kjer

*   `<name>`določa enolično ime za cilj.

*   `<ip-address>`določa ip naslov naprave BlackBerry ali simulator.

*   `-p | --password <password>`določa geslo za napravo ali emulator. To je potrebno samo, če je naprava in emulator, zaščitena z geslom.

*   `--pin <device-pin>`določa PIN napravo BlackBerry, ki identificira napravo kot veljavno gostiteljice za debug žeton. Ta argument je potrebna le pri ustvarjanju žetona debug.

### Odstranite cilj

    <path-to-project>/cordova/target remove <name>
    

### Privzemi cilj

    <path-to-project>/cordova/target default <name>
    

## Graditi App

Je `build` ukaz gradi projekt kot datoteko .bar. Lahko zgradite svoj app v načinu bodisi javnost, (ki proizvaja datoteko podpisano .bar) ali v debug mode (ki proizvaja nepodpisan .bar datoteke).

### Graditi App v načinu za javnost

    <path-to-project>/cordova/build release [-k | --keystorepass <password>] [-b | --buildId <number>] [-p | --params <params-JSON-file>]
    

kjer

*   `-k | --keystorepass <password>`določa geslo, ki ste ga določili, ko ste nastavili vaš računalo signirati aplikacije.

*   `-b | --buildId <number>`določa zidava prevod števnik od vaš zahtevek. Tipično, ta številka naj se poveča iz prejšnjih podpisnik prevod. Ta argument je neobvezen.

*   `-p | --params <params-JSON-file>`določa JSON datoteko, ki vsebuje dodatne parametre prenesti prodajnih orodij. Ta argument je neobvezen.

### Gradnjo projekta v Debug Mode

    <path-to-project>/cordova/build debug [<target>] [-k | --keystorepass <password>] [-p | --params <params-JSON-file>]  [-ll | --loglevel <error|warn|verbose>]
    

kjer

*   `<target>`določa ime prej doda cilj. Če `<target>` ni določen, se uporabi privzeti ciljni, če eden je bil ustvarjen. Ta argument je le potrebno, če želite, da scenarij uvesti vaš app za BlackBerry naprave ali emulator in niste ustvarili privzeti ciljni. Poleg tega, če `<target>` je naprava, potem to napravo je priključen na računalnik prek USB povezave ali priključen na isti Wi-Fi omrežje kot računalnik.

*   `-k | --keystorepass <password>`določa geslo, ki ste ga določili, ko ste nastavili vaš računalo signirati aplikacije. To geslo se uporablja tudi za ustvarjanje debug žeton. Ta argument je le potrebno, če želite, da scenarij, da ustvarite in namestite debug žeton za vas.

*   `-p | --params <params-JSON-file>`določa JSON datoteko, ki vsebuje dodatne parametre prenesti prodajnih orodij.

*   `-ll | --loglevel <level>`določa raven dnevnika. Raven dnevnika lahko eden od `error` , `warn` , ali`verbose`.

Če ste prej opredeljena privzeti ciljni (in prej nameščen debug žetona, če tega cilja je BlackBerry naprave), lahko zaženete skript z brez argumentov in scenarij paketov vaš app in razvije za privzeti ciljni. Na primer:

    <path-to-project>/cordova/build debug
    

## Zagon App

Je `run` ukaz razvije app je zadnji zidava naprej navedene naprave BlackBerry ali emulator. Za razporeditev vaše app, boste morali določiti cilj za napravo ali emulator:

    <path-to-project>/cordova/run <target>
    

.. Če `<target>` določa ime prej doda cilj. Če `<target>` je naprava, potem mora biti ta povezana z računalnikom prek USB kabla ali pa prek istega omrežja Wi-Fi kot računalnik.

## Ravnanje Plugins

Je `target` ukaz vam omogoča, da dodate in odstranite čep. Puščati a tukajšnji gostišče plugin:

    <path-to-project>/cordova/plugin fetch <path-to-plugin>
    

Oglejte si seznam nameščenih vstavkov:

    <path-to-project>/cordova/plugin ls
    

Dodaj plugin:

    <path-to-project>/cordova/plugin add <name>
    

Odstranite plugin:

    <path-to-project>/cordova/plugin rm <name>