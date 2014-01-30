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

# BlackBerry platforme vodnik

Ta vodič vam pokaže, kako vzpostaviti okolju SDK, da ciljne aplikacije za BlackBerry platformo pred različico 10. Če želite ciljati na najnovejšo različico, priročniku BlackBerry 10 platformo. Glej naslednje podrobnejše informacije značilne za platformo:

*   BlackBerry konfiguracijo
*   Nadgradnja BlackBerry
*   BlackBerry Plugins
*   BlackBerry orodja ukazne vrstice

Orodja ukazne vrstice zgoraj se nanašajo na različicah Cordova 3.0. Glej The vmesnik ukazne vrstice za informacije o trenutni vmesnik.

## Zahteve in podporo

Ne podpira te različice BlackBerry na `cordova` korist, opisanih v vmesnik ukazne vrstice, jih pripraviti orodja ukazne vrstice. Download Cordova distribucije iz [cordova.apache.org][1].

 [1]: http://cordova.apache.org/#download

Cordova za BlackBerry opira na [BlackBerry WebWorks okvir][2], ki je na voljo za Windows XP (32-bit), Windows 7 (32-košček ter 64-košček) in Mac (OS X 10.6.4+). WebWorks aplikacije lahko *samo* uporabijo na naslednji BlackBerry platforme:

 [2]: https://bdsc.webapps.blackberry.com/html5

*   BlackBerry OS 5,0 in višje
*   BlackBerry PlayBook
*   BlackBerry 10 (QNX)

WebWorks zahteva razvoj Kit Java (JDK). Za Windows, uporabite 32-bitno različico [Oracle JDK][3]. Java v privzeto nameščena v Mac OS X 10.7, različico, ki zahteva [ločene namestitve][4]. To tudi zahtevati Apache mravlja, ki na Mac je del Namestitev Jave. Windows različica je na voljo od [ant.apache.org][5].

 [3]: http://www.oracle.com/technetwork/java/javase/downloads/index.html#jdk
 [4]: http://support.apple.com/kb/DL1421
 [5]: http://ant.apache.org/bindownload.cgi

## Namestite SDK

Prenesite in namestite ustrezno WebWorks SDK za svoj razvoj. BlackBerry PlayBook in BlackBerry pametni WebWorks SDK moči obstati downloaded s teh mest.

*   \[BlackBerry PlayBook SDK\] (https://developer.blackberry.com/html5/download/#playbook) in [Adobe Air SDK][6]

*   \[SDK blackBerry pametne telefone\] (https://developer.blackberry.com/html5/download/#smartphones)

 [6]: http://www.adobe.com/devnet/air/air-sdk-download.html

## Register za podpisovanje tipke

Če želite objaviti aplikacije na BlackBerry App World, ali dejansko napravi, boste morali registrirati za nabor tipk za brezplačno podpisovanje kode. Uganjati tudi, izpolnite [BlackBerry tipke naročilnico][7]. Ko prejmete ključe podpis, zahtevajo namestitev. Glej [spletno stran BlackBerry HTML5/WebWorks][8] vednost.

 [7]: https://www.blackberry.com/SignedKeys
 [8]: https://developer.blackberry.com/html5/documentation/signing_setup_bb10_apps_2008396_11.html

## Namestite Cordova

Travnato gričevje ter citat ki postaja latenten ulitek [Cordova][1].

## Nastavite nov projekt

*   Začeti streljati a zapoved-črta semestralen ter pluti kjer ste ekstrahirali Cordova.

*   Obstaja imenik za vsako platformo, ki podpira Cordova. Pluti v `blackberry` naslovnik.

*   V `blackberry` imenik vsebuje več podimenikov. V `example` imenik vsebuje celoten projekt Cordova. Kopiraj v `example` imenik na drugo mesto v računalniku, ter torej pluti.

*   Urejanje z `project.properties` datoteke določite WebWorks SDK, ki ga uporabljate. Na primer, tukaj so ustrezne nastavitve za BlackBerry PlayBook, BlackBerry pametni (OS5-7) ali BlackBerry 10 (QNX):
    
        playbook.bbwp.dir=C:\\Program Files\\Research In Motion\\BlackBerry WebWorks SDK for TabletOS 2.1.0.6\\bbwp
        blackberry.bbwp.dir=C:\\Program Files\\Research In Motion\\BlackBerry WebWorks Packager
        qnx.bbwp.dir=C:\\Program Files (x86)\\Research In Motion\\BlackBerry 10 WebWorks SDK 1.0.2.9
        

Ti ustrezajo parametrom določite pri gradnji vašega projekta. Ko prvič zaženete te ukaze, ustvarjajo "HelloWorld" uporaba:

        cordova/build playbook
        cordova/build blackberry
        cordova/build qnx
    

Skupaj s SDK, morate registrirati za podpisovanje kode ključ in debug žeton. Podpisovanje ključ omogoča distribucijo apps skozi svetu robida. Debug žeton vam omogoča testiranje nepodpisan aplikacije na BlackBerry emulator ali napravo. Ne morate ustvariti in namestite debug žeton sami; Če dobava keystore geslo, skripta graditi ustvarja in namesti debug žeton za vas. Nastavite tipko podpisu, obiščite spletno mesto BlackBerry in pridobil, pazite, da ohranijo geslo, ki ga določite. Nato zaženite v `blackberry-signer` korist, ki je vključen v SDK. BlackBerry zagotavlja več informacij tukaj:

*   [Register zakaj vaš zbornik znamenje ključ][9]

*   [Nastavitev računalnika za podpisovanje kode][10]

*   [celovit vodnik za vzpostavitev vaše okolje SDK][11]

 [9]: https://www.blackberry.com/SignedKeys/codesigning.html
 [10]: http://developer.blackberry.com/html5/documentation/set_up_for_signing.html
 [11]: http://developer.blackberry.com/native/documentation/bb10/com.qnx.doc.native_sdk.quickstart/topic/set_up_your_environment.html

## Razporedi na Emulator

BlackBerry pametni emulators so na voljo le na Windows. BlackBerry PlayBook emulators zahtevajo VMWare igralka (Windows) ali VMWare Fusion (Mac OS X). WebWorks SDK zagotavlja privzeti emulator, vendar dodatne emulators so [na voljo prek BlackBerry][12].

 [12]: http://us.blackberry.com/developers/resources/simulators.jsp

Iz imenika vašega projekta, vnesite `./cordova/run <target>` , nadomešča `<target>` z eno `qnx` , `playbook` , ali `blackberry` . Upoštevajte, da za BlackBerry 10 in PlayBook, virtualne podobe emulator je že treba začeti.

Glejte spodaj za več informacij:

*   [BlackBerry PlayBook][13]

*   [Pametni telefon blackBerry][14]

 [13]: https://developer.blackberry.com/html5/documentation/using_the_tablet_simulator_1866980_11.html
 [14]: https://developer.blackberry.com/html5/documentation/run_your_app_on_smartphone_sim_1876976_11.html

Za BlackBerry Playbook, uredite na `project.properties` datoteke prilagoditi na `playbook.sim.ip` in `playbook.sim.password` lastnosti. Emulator IP naslov je na voljo z uporabo **Nastavitve** na domačem zaslonu. Omogočiti je **varnost in zasebnost → razvoj način** možnost, da se prikaže naslov. Geslo lahko nastavite tudi na kartici **varnost in zasebnost** .

Za pametni telefon BlackBerry, uredite na `project.properties` datoteke prilagoditi na `blackberry.sim.dir` in `blackberry.sim.bin` lastnosti. Morate pobeg pot ločila pri navajanju imenik poti na Windows, na primer:`C:\\Program
Files\\BlackBerry\\Simulator`.

Ko emulator je nameščen in teče, zaženite enega od naslednjih namestiti aplikacijo na za četni zaslon:

        cordova/run playbook
        cordova/run blackberry
    

Če ste pozvani, ali je naprava priključena na računalnik, odgovor št.

**Opomba**: na BlackBerry OS 5, aplikacija je nameščena v v `Downloads` naslovnik.

## Razporedi na napravo

Uvesti vaš app na napravo, mora biti priključen, in morate biti registrirani za zbornik znamenje tipk, kot je opisano zgoraj. Tudi, da uvedete aplikacije na BlackBerry PlayBook, na **Nastavitve → varnost → razvoj način** možnost mora biti omogočena.

Na BlackBerry PlayBook, uredite na `project.properties` datoteko in spremenite naslednje odražajo naprave IP in geslo kot descibed zgoraj, skupaj z podpisu ključnih geslo nastavite:

Iz imenika vašega projekta, vnesite `./cordova/run <target>` , nadomešča `<target>` z eno `qnx` , `playbook` , ali`blackberry`.

Na BlackBerry pametni (OS5-7), določite na `blackberry.sigtool.password` nepremičnine kot podpisnega ključa geslo.

Iz projekta imenik, zaženite enega od ukazov, ki bi za ogled app v emulator:

        cordova/run playbook
        cordova/run blackberry
    

Če ste pozvani, ali je naprava priključena na računalnik, je odgovor.

**Opomba**: na BlackBerry OS 5, aplikacija je nameščena v v `Downloads` naslovnik.

## Dodatne informacije

Naslednji členi vam pomaga odpraviti pogoste težave pri razvijanju programov, zgrajena za BlackBerry WebWorks okvir:

*   [BlackBerry WebWorks razvoj pastem][15]

*   [Najboljših praks za pakiranje WebWorks aplikacije][16]

 [15]: http://supportforums.blackberry.com/t5/Web-and-WebWorks-Development/Common-BlackBerry-WebWorks-development-pitfalls-that-can-be/ta-p/624712
 [16]: https://bdsc.webapps.blackberrycom/html5/documentation/ww_developing/bestpractice_compiling_ww_apps_1873324_11.html