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

# Uporaba Plugman za upravljanje Plugins

Od različice 3.0 naprej, Cordova izvaja vse naprave API kot plugins, in nanje privzeto onemogočene. Podpira tudi dva različna načina za dodajanje in odstranjevanje plugins. Prvi je s pomočjo na `cordova` CLI, opisane v vmesnik ukazne vrstice. Drugi je z uporabo nižje ravni [Plugman][1] vmesnik ukazne vrstice (potek dela "Native platformo dev".) Glavna razlika med teh dveh razvojnih poti je, da Plugman lahko samo dodati plugins eno platformo naenkrat, ker CLI bo dodati plugins vse platforme, ki jih ciljate. Zaradi tega je bolj smiselno uporabiti Plugman, ko delate tesno z enotno platformo, zato ime "Native platformo Dev" potek dela.

 [1]: https://github.com/apache/cordova-plugman/

Več informacij na Plugman, še posebej, če ste zainteresirani za uživanje Plugman kot vozlišče modul ali taksist na šifro Plugman, glejte [README datoteko v svojem skladišču][2].

 [2]: https://github.com/apache/cordova-plugman/blob/master/README.md

## Namestitev Plugman

Namestite plugman, morate imeti [sečišče][3] nameščen v vašem računalniku. Potem vi moči prost dostop sledeč zapoved od kjerkoli v vašem okolju namestiti plugman globalno, tako da je na voljo od poljuben imenik v računalniku:

 [3]: http://nodejs.org/

    $ npm install -g plugman
    

Vi življati imeti tudi `git` na vaš `PATH` biti sposobni namestiti plugins neposredno iz oddaljenih kreten URLs.

**Nasvet:** Če ugotovite, da po namestitvi plugman z npm ste še vedno nezmožen teči poljuben `plugman` ukaze, se prepričajte, da ste dodali v `/npm/` imenik v vaš`PATH`.

**Opomba:** Ta korak lahko preskočite, če ne želite, da onesnažujejo globalni npm namespace z namestitvijo Plugman na svetovni ravni. Če je temu tako, potem ko ustvarite Cordova projekt z lupino orodja, bo na `node_modules` imenik znotraj vašega projekta, ki vsebuje Plugman. Ker si ne instally globalno, boste morali sklicevati vozlišča za vsak Plugman ukaz, na primer `node ./node_modules/plugman/main.js -version` . Preostanek ta vodnik prevzame ste namestili Plugman globalno, kar pomeni, da lahko zaženete s samo`plugman`.

## Ustvarjanje Cordova projekta

Preden lahko uporabite Plugman, morate ustvariti projekt Cordova. To storite z bodisi z ukazno vrstico ali nižji ravni lupine skripte. Navodila za uporabo lupine skripte, da ustvarite svoj projekt se nahajajo v različnih "Ukazne vrstice orodja" vodniki, navedena na platformo vodniki.

## Dodal Plugin

Nekoč vi življati umestiti Plugman ter ustvarili projekt Cordova, lahko začnete dodajanje plugins platformo z:

    $ plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin <name|url|path> [--plugins_dir <directory>] [--www <directory>] [--variable <name>=<value> [--variable <name>=<value> ...]]
    

Z uporabo minimalne parametrov, ta ukaz namesti plugin v projektu cordova. Navesti morate mesto platformo in cordova projekta za to platformo. Prav tako morate navesti plugin, z različnimi `--plugin` parameter oblike bitje:

*   `name`: Ime imenika, kjer obstaja plugin vsebino. To mora biti obstoječ imenik pod na `--plugins_dir` poti (glej spodaj za več info) ali plugin v registru Cordova.
*   `url`: URL začne z https:// ali kreten: / /, če pokažete veljavno git skladišče, ki je clonable in vsebuje a `plugin.xml` pila. Bi program kopira vsebino tega skladišča v na`--plugins_dir`.
*   `path`: Pot do imenika, ki vsebuje veljavne plugin, ki vključuje a `plugin.xml` pila. Ta pot vsebine bodo kopirani v na`--plugins_dir`.

Drugi parametri:

*   `--plugins_dir`privzeto `<project>/cordova/plugins` , vendar je lahko poljuben imenik, ki vsebuje podimenik za vsako nerealne plugin.
*   `--www`privzete nastavitve v projekt `www` mesto mape, vendar lahko naslovnik, ki se uporablja kot cordova projekt uporabe spletnih sredstev.
*   `--variable`omogoča, da določite nekatere spremenljivke v napeljati čas, potreben za nekatere plugins, ki zahteva API tipke ali drugih parametrov, po meri, uporabniško definirane. Oglejte si [specifikacije plugin][4] za več informacij.

 [4]: plugin_spec.md

## Odstranite Plugin

V uninstall plugin, da preprosto prenesti na `--uninstall` zastava ter zagotoviti plugin ID.

    $ plugman --uninstall --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin <id> [--www <directory>] [--plugins_dir <directory>]
    

## Pomoč ukazov

Plugman značilnosti globalnih pomoč ukaz, ki vam lahko pomagajo, če vi zaslužiti zaljubljen ali so težave. Prikaže seznam vseh ukazov Plugman in svoje sintakse:

    plugman -help
    plugman  # same as above
    

**Opomba**: `plugman -help` lahko kažejo nekatere dodatne ukaze povezan z registrom. Ti ukazi so plugin za razvijalce in ne smejo izvajati na tretji plugin registrov.

Lahko tudi dodate v `--debug|-d` zastave Plugman ukaz, da zaženete ta ukaz v podrobnem načinu, ki bo prikazal vse notranje informacije o iskanju napak, saj so oddane in vam lahko pomagajo izslediti težave, kot so manjkajoče datoteke.

    # Adding Android battery-status plugin to "myProject":
    plugman -d --platform android --project myProject --plugin org.apache.cordova.battery-status
    

Končno, lahko uporabite na `--version|-v` zastavo, da vidite, katera različica Plugman, ki ga uporabljate.

    plugman -v
    

## Registracija dejavnosti

Obstajajo številne plugman ukazov, ki se lahko uporabijo za interakcijo s [registracija Plugin][5]. Prosimo, upoštevajte, da ti ukazi register posebej za register *plugins.cordova.io* plugin, ne smejo izvajati tretji plugin registri.

 [5]: http://plugins.cordova.io

### Iščete Plugin

Plugman lahko uporabite za iskanje [registracija Plugin][5] za plugin id's, ki ustreza dani prostor ločen seznam ključnih besed.

    plugman search <plugin keywords>
    

### Sprememba Plugin registracija

Lahko dobite ali pa nastavite URL sedanji registracija plugin, ki uporablja plugman. Na splošno mora zapustiti ta nastavljena na http://registry.cordova.io, razen če vi biti brez rabiti a tretji stranka plugin registra.

    plugman config set registry <url-to-registry>
    plugman config get registry
    

### Get Plugin informacije

Lahko dobite informacije o posebnih plugin shranjeni v plugin skladišču:

    plugman info <id>
    

To bo stik plugin registracija ter puščati podatke, kot so številka različice je plugin.

## Namestitvi Plugins jedro

Spodnji primeri kažejo, kako dodati plugins, kot je potrebno, da vse Cordova API uporabljate v vašem projektu še vedno dela, ko nadgradite na različico 3.0. Za vsak ukaz, morate izbrati ciljni platformi, in referenčno platformo imenik projekta.

*   cordova-plugin-battery-status
    
    plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.battery-status

*   cordova-plugin-camera plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.camera

*   cordova-plugin-console plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.console

*   cordova-plugin-contacts plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.contacts

*   cordova-plugin-device plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.device

*   cordova-plugin-device-motion (accelerometer) plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.device-motion

*   cordova-plugin-device-orientation (compass) plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.device-orientation

*   cordova-plugin-dialogs plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.dialogs

*   cordova-plugin-file plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.file

*   cordova-plugin-file-transfer plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.file-transfer

*   cordova-plugin-geolocation plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.geolocation

*   cordova-plugin-globalization plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.globalization

*   cordova-plugin-inappbrowser plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.inappbrowser

*   cordova-plugin-media plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.media

*   cordova-plugin-media-capture plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.media-capture

*   cordova-plugin-network-information plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.network-information

*   cordova-plugin-splashscreen plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.splashscreen

*   cordova-plugin-vibration plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.vibration