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

# Vmesnik ukazne vrstice

Ta vodič vam pokaže, kako ustvariti aplikacije in jih razporedi na različne native mobilne platforme, z uporabo v `cordova` vmesnik ukazne vrstice (CLI). To orodje vam omogoča, da ustvarite nove projekte, jih gradijo na različnih platformah in teči na pravi naprave ali znotraj emulators. CLI je glavno orodje za navzkrižno platformo potek dela (glej pregled za opis različnih potekov dela.) Vendar pa lahko uporabite tudi CLI Inicializacija projekta zakonika, po katerem uporabljate različnih platform SDK in shell orodja za nadaljevanje razvoja.

## Predpogoji

Preden zaženete kateri koli orodja ukazne vrstice, morate namestiti SDK za vsako platformo, ki jih želite ciljati. (Glej navodila platformo za več podrobnosti.)

Dodajanje podpore ali obnovo projekt za vse platforme, morate zagnati vmesnik ukazne vrstice iz istega stroja, ki podpira SDK platformo. CLI podpira naslednje kombinacije:

*   iOS (Mac)
*   Amazon ogenj OS (Mac, Linux, Windows)
*   Android (Mac, Linux)
*   BlackBerry 10 (Mac, Linux, Windows)
*   Windows Phone 7 (Windows)
*   Windows Phone 8 (Windows)
*   Windows 8 (Windows)
*   Firefox OS (Mac, Linux, Windows)

Na Mac, ukazne vrstice je na voljo prek uporabe *Terminal* . Na PC, je na voljo kot *zapoved uren* pod *dodatki*.

Bolj verjetno je da zaženete CLI iz različnih strojev, bolj smiselno ohraniti remote source code repozitorij, katerih premoženje porušiti lokalne delovne imenikov.

Namestiti na `cordova` zapoved-črta orodje, sledite tem korakom:

1.  Travnato gričevje ter napeljati [Node.js][1]. Po namestitvi lahko sklicevanje na `node` ali `npm` v ukazni vrstici.

2.  Namestite v `cordova` korist. V Unix, prefixing dodatno `sudo` ukaz bo morda treba namestiti razvoj utilities sicer omejuje imenikov:

        $ sudo npm install -g cordova


    Dnevnik namestitve lahko povzroči napake za vsako uninstalled platform SDK. Po namestitvi lahko teči `cordova` v ukazni vrstici.

    **Opomba**: na `-g` zastavo zgoraj pove npm namestiti cordova globalno. Morda boste morali dodati npm imenik v vaš STEZA za uveljavljanje globalno umestiti npm modulov. Na Windows, npm ponavadi najdete na `C:\Users\username\AppData\Roaming\npm` in na Unix v`/usr/local/share/npm`.

 [1]: http://nodejs.org/

## Ustvari App

Pojdite v imenik, kjer želite ohraniti vaše izvorne kode, in zaženite ukaz in sicer:

        $ cordova create hello com.example.hello HelloWorld


To lahko traja nekaj časa za ukaz za dokončanje, zato bodite potrpežljivi. Tekmovanje v teku zapoved s je `-d` možnost prikaže informacije o napredku.

Prvi argument *hello* določa imenik, za vaš projekt. Ta imenik že ne bi smela obstajati, Cordova bo ustvaril za vas. Svoje `www` subdirectory hiše aplikacije domačo stran, skupaj z različnih virov pod `css` , `js` , in `img` , ki sledijo skupne spletne razvoj poimenovanja datotek. Na `config.xml` Datoteka vsebuje pomembno metapodatkov, potrebne za ustvarjanje in distribucijo uporabo.

Drugi argument `com.example.hello` projektu zagotavlja povratne domene-style identifikator. Ta argument je neobvezno, vendar le, če izpustite tudi tretji argument, saj so argumenti položaja. Urejate lahko ta vrednost kasneje v v `config.xml` datoteko, vendar se zaveda, da lahko pride do kode, ustvarjene zunaj programa `config.xml` uporabo te vrednosti, kot so Java paket imena. Privzeta vrednost je `io.cordova.hellocordova` , vendar je priporočljivo, da izberete ustrezno vrednost.

Tretji argument `HelloWorld` zagotavlja aplikacije zaslona naslov. Ta argument je neobvezen. Urejate lahko ta vrednost kasneje v v `config.xml` datoteko, vendar se zaveda, da lahko pride do kode, ustvarjene zunaj programa `config.xml` uporabo te vrednosti, kot so imena razredov Java. Privzeta vrednost je `HelloCordova` , vendar je priporočljivo, da izberete ustrezno vrednost.

## Dodaj platforme

Vse kasnejše zapoved potreba teči v okviru projekta imenik, ali vse podimenike v njeno področje uporabe:

        $ cd hello


Preden lahko zgraditi projekt, morate določiti nabor ciljne platforme. Vašo sposobnost za vožnjo teh ukazov odvisna od tega, ali računalnik podpira vsako SDK, in ali ste že namestili vsako SDK. Zaženete kateri koli od teh iz Mac:

        $ cordova platform add ios
        $ cordova platform add amazon-fireos
        $ cordova platform add android
        $ cordova platform add blackberry10
        $ cordova platform add firefoxos


Zaženete kateri koli od teh s okno stroj, kjer *wp* se nanaša na različne različice operacijskega sistema Windows Phone:

        $ cordova platform add wp7
        $ cordova platform add wp8
        $ cordova platform add windows8
        $ cordova platform add amazon-fireos
        $ cordova platform add android
        $ cordova platform add blackberry10
        $ cordova platform add firefoxos


Teči to v ček vaš trenutni nabor platforme:

        $ cordova platforms ls


(Opomba za `platform` in `platforms` ukazi so sinonim.)

Zaženite enega od naslednjih sinonim ukazov umakniti platforma:

        $ cordova platform remove blackberry10
        $ cordova platform rm amazon-fireos
        $ cordova platform rm android


Izvaja ukaze za dodajanje ali odstranjevanje platforme vpliva na vsebino projekta *platforme* imenik, kjer se zdi vsako določeno platformo kot podimenik. *Www* Izvorni imenik je povzeto v podimeniku vsako platformo, ki se pojavljajo na primer v `platforms/ios/www` ali `platforms/android/assets/www` . Ker CLI nenehno kopira nad datoteke v *www* mapi vir, naj le urejate te datoteke in ne tisti, ki se nahaja pod *platform* podimenikov. Če vi raba prevod pregled software, vi should povečati to vir *www* mapo, skupaj z mapo *, ki se* v vaši različici sistema nadzora. (Več informacij o mapi *združuje* najdete v razdelku Prilagajanje vsako platformo spodaj.)

**Opozorilo**: pri uporabi CLI zgraditi vaš zahtevek, se močno odvrača od urejanje datotek v v `/platforms/` zgibalnik če veš kaj delaš, ali so posebej povedal drugače v dokumentaciji. Namreč datoteke v na `/platforms/` direcotry prepišejo na pripravo ali plugin reinstallation.

Če želite na tej točki, lahko uporabite SDK, kot so za Eclipse ali Xcode odpreti projekt, ki ste jo ustvarili. Boste morali odpreti naboru izvedenih finančnih sredstev iz z `/platforms/` imenik razviti s je SDK. To je zato, ker SDK posebne metapodatkov datoteke shranijo v ustrezno `/platform/` podimeniku. (Glej navodila platformo za informacije o tem, kako razviti aplikacije znotraj vsakega IDE.) Ta pristop uporabite, če želite le inicializirati projekt using CLI in nato preklopiti SDK za native delo.

Berite naprej, če želite uporabiti potek dela prek-plosčad pristop (CLI) za celoten razvoj ciklus.

## Graditi App

Privzeto je `cordova create` scenarij ustvari skeletnih spletni program, katerega domača stran je projekta `www/index.html` datoteke. Uredite ta program, pa hočeš, ampak vse inicializacijo mora biti naveden kot del je `deviceready` rutine, sklicuje privzeti iz`www/js/index.js`.

Zaženite ukaz zgraditi iteratively projekta:

        $ cordova build


To ustvarja platformo-posebno kodo v okviru projekta `platforms` podimeniku. Po želji lahko omeji obseg vsake graditi na posebnih platformah:

        $ cordova build ios


Je `cordova build` ukaz je okrajšava za naslednje, kar je v tem primeru je tudi usmerjena v enotno platformo:

        $ cordova prepare ios
        $ cordova compile ios


V tem primeru, ko zaženete `prepare` , uporabite Applov SDK Xcode kot alternativa za spreminjanje in pripraviti platformo-posebno kodo, ki Cordova ustvarja v `platforms/ios` . Uporabite lahko enak pristop z drugih platform SDK.

## Test App Emulator ali napravi

SDK za mobilne platforme, pogosto priti povesmo s emulators, ki izvaja naprava podoba, tako da lahko začetek app z za četnega zaslona in videli, kako komunicira z veliko funkcij platformo. Zaženite ukaz, in sicer za obnovo app in si ogledali na posebni platformi emulator:

        $ cordova emulate android


Nekatere mobilne platforme tekmovati z posebno napravo privzeto, kot so iPhone iOS projektov. Za druge platforme, boste morda morali najprej povežite napravo z emulator.

Opomba: Emulator podpore trenutno ni na voljo za Amazon ogenj OS

(Glej navodila platformo za podrobnosti.) Na primer, boste morda najprej zagnati v `android` ukaz za zagon Android SDK, nato zaženite določene naprave sliko, ki se začenja po svoje privzeto vedenje:

![][2]

 [2]: {{ site.baseurl }}/static/img/guide/cli/android_emulate_init.png

Naslednji up s je `cordova emulate` ukaz Osveži prikaz zadnje prijave, ki je zdaj na voljo za zagon z za četnega zaslona emulator slike:

![][3]

 [3]: {{ site.baseurl }}/static/img/guide/cli/android_emulate_install.png

Izmenično, lahko slušalko priključite v računalnik in test app neposredno:

        $ cordova run android


Preden zaženete ta ukaz, morate nastaviti napravo za testiranje, po postopkih, ki se razlikujejo za vsako platformo. V napravah Android in Amazon ogenj OS, bi morali usposobiti **USB debugging** možnost na napravi, in morda dodali USB voznik glede na razvoj environmnent. Glej platformo vodniki za podrobnosti o zahtevah za vsako platformo.

## Dodaj Plugin funkcije

Ko boste graditi in si ogledate nov projekt, ne naredi privzeti program, ki se pojavi zelo veliko. Spremenite app v marsičem zavzeti ugodnost od standardne spletne tehnologije, ampak za app za tesno komunikacijo z različnih funkcij naprave-ravni, morate dodati plugins, ki zagotavljajo dostop do jedra Cordova API.

*Plugin* je malo add-on kodo, ki zagotavlja vmesnik za avtohtone komponente. Lahko oblikujete svoje plugin vmesnika, na primer pri načrtovanju hibridni app, ki meša Cordova spletni pogled z native komponent. (Glej Embedding spletni pogledi in Plugin razvoj vodnik za podrobnosti.) Bolj pogosto, bi dodal plugin, da eden od osebe Cordova osnovne funkcije naprave ravni podroben sklic API. Seznam teh plugins, vključno z dodatnih plugins, ki jih Skupnosti, je mogoče najti na [plugins.cordova.io][4]. CLI lahko uporabite za iskanje plugins iz tega registra. Na primer, iskanje `bar` in `code` Ustvari posamezen razultat, ki ustreza tako pogoji kot case-insensitive podnizov:

 [4]: http://plugins.cordova.io/

        $ cordova plugin search bar code

        com.phonegap.plugins.barcodescanner - Scans Barcodes


Iskanje samo v `bar` term donosov in dodatni rezultat:

        org.apache.cordova.statusbar - Cordova StatusBar Plugin


Je `cordova plugin add` ukaz zahteva, da določite skladišča za plugin kodo. Prosimo, upoštevajte, da ko sledite spletni projekt Dev poteka dela in uporabo CLI, CLI bo poskrbel za dodajanje plugin kodo na primerno mesto za vsako platformo. (Če ste Native poteka dela projekta Dev, boste morali dodati plugins uporabljajo Plugman (vodnik link tukaj), večkrat za vsako platformo.)

Tukaj so primeri, kako lahko uporabljate CLI funkcije dodati app:

*   Osnovne naprave informacije o napravi:

        $ cordova plugin add org.apache.cordova.device


*   Omrežno povezavo in baterija dogodkov:

        $ cordova plugin add org.apache.cordova.network-information
        $ cordova plugin add org.apache.cordova.battery-status


*   Pospeška, kompas in Geolocation:

        $ cordova plugin add org.apache.cordova.device-motion
        $ cordova plugin add org.apache.cordova.device-orientation
        $ cordova plugin add org.apache.cordova.geolocation


*   Fotoaparat, predvajanje medijev in zajema:

        $ cordova plugin add org.apache.cordova.camera
        $ cordova plugin add org.apache.cordova.media-capture
        $ cordova plugin add org.apache.cordova.media


*   Dostop do datotek v napravi ali omrežju (datoteka API):

        $ cordova plugin add org.apache.cordova.file
        $ cordova plugin add org.apache.cordova.file-transfer


*   Obveščanje preko pogovornega okna ali vibracij:

        $ cordova plugin add org.apache.cordova.dialogs
        $ cordova plugin add org.apache.cordova.vibration


*   Stiki:

        $ cordova plugin add org.apache.cordova.contacts


*   Globalizacija:

        $ cordova plugin add org.apache.cordova.globalization


*   Splashscreen:

        $ cordova plugin add org.apache.cordova.splashscreen


*   Plan nov obrv okno (InAppBrowser):

        $ cordova plugin add org.apache.cordova.inappbrowser


*   Debug konzolo:

        $ cordova plugin add org.apache.cordova.console


Uporaba `plugin ls` (ali `plugin list` , ali `plugin` sama) za ogled trenutno nameščen plugins. Vsak za prikaz svojih identifikator:

        $ cordova plugin ls    # or 'plugin list'
        [ 'org.apache.cordova.console' ]


Če želite odstraniti plugin, sklicujejo nanj z istim identifikatorjem, ki se prikaže na seznamu. Na primer, tukaj je, kako bi odstrani podporo za konzolo debug s izpust prevod:

        $ cordova plugin rm org.apache.cordova.console
        $ cordova plugin remove org.apache.cordova.console    # same


Lahko batch-odstrani ali dodati plugins določite več argumentov za vsak ukaz:

        $ cordova plugin add org.apache.cordova.console org.apache.cordova.device


## Plugin napredne možnosti

Pri dodajanju plugin, več možnosti vam omogočajo, da določite, kje v puščati čep. Primeri zgoraj uporabljajo znane `registry.cordova.io` registra, in plugin je določil na `id` :

        $ cordova plugin add org.apache.cordova.console


Na `id` lahko vključujejo tudi v čep prevod števnik, dodan po je `@` značaja. Je `latest` različica je alias za najnovejšo različico. Na primer:

        $ cordova plugin add org.apache.cordova.console@latest
        $ cordova plugin add org.apache.cordova.console@0.2.1


Če plugin ni registrirana v `registry.cordova.io` ampak se nahaja v drugi kreten skladišče, lahko določite nadomestni URL:

        $ cordova plugin add https://github.com/apache/cordova-plugin-console.git


Kreten zgornjem puščati čep od konca glavni podružnici, ampak nadomestnega kreten-ref tag ali podružnice je treba dodati po a `#` znak:

        $ cordova plugin add https://github.com/apache/cordova-plugin-console.git#r0.2.0


Če plugin (in njenih `plugin.xml` Datoteka) je v podimeniku v git repo, lahko določite z a `:` znak. Upoštevajte, da je `#` znak je še vedno potreben:

        $ cordova plugin add https://github.com/someone/aplugin.git#:/my/sub/dir


Lahko tudi združite kreten-ref in podmapo:

        $ cordova plugin add https://github.com/someone/aplugin.git#r0.0.1:/my/sub/dir


Izmenično, določite lokalna pot do imenika plugin, ki vsebuje v `plugin.xml` datoteke:

        $ cordova plugin add ../my_plugin_dir


## Z uporabo *spajanja* prilagodite vsako platformo

Medtem ko Cordova omogoča preprosto uvajanje app za različne platforme, včasih boste morali dodati prilagoditve. V tem primeru ne želite spremeniti izvornih datotek v različnih `www` imenikov v najvišje ravni `platforms` imenik, ker so si redno nadomesti z najvišje ravni `www` directory's prek-plosčad vir.

Namesto tega, najvišje ravni `merges` imenik ponuja prostor za določanje sredstev za razporeditev na posebnih platformah. Vsake posamezne subdirectory v `merges` ogledala directory struktura je `www` vir drevo, ki vam omogoča, da preglasijo ali dodajanje datotek, kot je potrebno. Na primer, tukaj je, kako lahko uporab `merges` povečati privzeto velikost pisave za naprave Android in Amazon ogenj OS:

*   Urejanje z `www/index.html` datoteko, dodal link za dodatne datoteke CSS, `overrides.css` v tem primeru:

        <link rel="stylesheet" type="text/css" href="css/overrides.css" />


*   Če želite ustvariti prazno `www/css/overrides.css` datoteko, ki bi veljala za vse gradi Android, preprečuje napako manjkajoče datoteke.

*   Ustvarite a `css` subdirectory v `merges/android` , nato dodamo ustrezen `overrides.css` datoteke. Določite CSS, ki preglasi 12-point privzeto velikost pisave, ki je določena v `www/css/index.css` , na primer:

        body { font-size:14px; }


Ko znova zgradite projekta, Android prevod značilnosti velikosti pisave po meri, medtem ko druge ostanejo nespremenjene.

Uporabite lahko tudi `merges` dodati datoteke niso prisotni v izvirniku `www` imenik. Primer app lahko vključi grafike *prislon popek* v iOS vmesnik, shranjeni v `merges/ios/img/back_button.png` , medtem ko Android prevod lahko namesto kapitan `backbutton` dogodkov iz ustreznih železnina popek.

## Pomoč ukazov

Cordova ponuja nekaj globalni ukazi, ki vam lahko pomaga, če vi zaslužiti zaljubljen ali pride do težave. Je `help` ukaz prikaže vse razpoložljive ukaze Cordova in svoje sintakse:

    $ cordova help
    $ cordova        # same


Je `info` ukaz Ustvari seznam potencialno koristnih podrobnosti, kot so trenutno nameščenih platforme in plugins, SDK različice za vsako platformo in različice CLI in `node.js` :

    $ cordova info


Tako predstavlja informacije na zaslonu in ujame izhod v lokalni `info.txt` datoteke.

**Opomba**: trenutno, samo podrobnosti na iOS in Android platforme so na voljo.

## Posodabljanje Cordova in projekt

Po namestitvi v `cordova` korist, jo lahko vedno posodobite v najnovejšo različico z tekmovanje v teku sledeč zapoved:

        $ sudo npm update -g cordova


Za namestitev posebne različice, uporabite to sintakso:

        $ sudo npm install -g cordova@3.1.0-0.2.0


Teči `cordova -v` videti, katera različica je trenutno nameščena. Teči na `npm
info` ukaz za daljši seznam, ki vključuje trenutno različico skupaj z drugimi na voljo različica številke:

        $ npm info cordova


Cordova 3.0 je prva različica, ki podpira vmesnik ukazne vrstice, ki so opisane v tem razdelku. Če želite posodobiti iz različice pred 3,0, boste morali ustvariti nov projekt, kot je opisano zgoraj, torej ulitek starejši uporabe sredstev v najvišje ravni `www` imenik. Po potrebi nadaljnje podrobnosti o nadgradnji na 3.0 so na voljo v platformo vodniki. Ko nadgradite na `cordova` vmesnik ukazne vrstice in uporabo `npm update` ostati veljavna, bolj zamudno tam opisani postopki niso več ustrezni.

Cordova 3.0 + lahko še vedno zahtevajo različne spremembe na ravni projekta imenik strukture in drugih odvisnosti. Ko zaženete na `npm` zapoved zgoraj za posodobitev Cordova, sama, boste morda morali za zagotovitev vaš projekt virov s ki postaja latenten prevod zahteve. Zaženite ukaz kot sledi za vsako platformo ste izgradnjo:

        $ cordova platform update android
        $ cordova platform update ios
        ...etc.
