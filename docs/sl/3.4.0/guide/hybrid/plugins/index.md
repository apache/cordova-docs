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

# Plugin razvoj vodnik

*Plugin* je paket vstavljeno kodo, ki omogoča Cordova spletni pogled, v katerem postane vaš app komunicirati z native platforme, na katerih teče. Plugins zagotoviti dostop do naprave in platformo funkcionalnosti, ki je običajno na voljo za spletne aplikacije. Vse glavne funkcije Cordova API, ki se izvajajo kot plugins, in mnogi drugi so na voljo, da omogoči funkcije, kot so Čitalniki črtne kode, NFC komunikacije, ali za prilagajanje koledarja vmesniki.

Plugins obsegajo posamezen JavaScript vmesnik, skupaj z ustreznim domorodno kodo knjižnice za vsako podprto platformo. Ta oddelek korakov preko enostavno *echo* plugin, ki prehaja niz iz JavaScript native platformo in nazaj, ena, ki lahko uporabite kot model za izgradnjo bolj kompleksnih funkcij. V tem poglavju opisane osnovne plugin strukturo in navzven obrnjenih JavaScript vmesnik. Za vsako ustrezno izvorni vmesnik, glej seznam na koncu tega oddelka.

Poleg teh navodil, pri pripravi pisati čep, je najbolje, da gledajo čez [obstoječe plugins][1] za usmerjanje.

 [1]: https://github.com/apache/cordova-android/tree/master/framework/src/org/apache/cordova

## Izgradnjo Plugin

Razvijalcem uporabo CLI je `plugin add` ukaz (razpravljali v vmesnik ukazne vrstice) uporabi plugin za projekt. Argument temu ukazu je URL za *git* skladišče, ki vsebuje plugin kodo. Ta primer izvaja API Cordova's naprave:

        $ cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-device.git
    

Plugin skladišču mora funkcija na najvišji ravni `plugin.xml` Datoteka manifesta. Obstaja veliko načinov za konfiguracijo datoteke, podrobnosti, za katere so na voljo v specifikaciji Plugin. Tej skrajšani različici je `Device` plugin zagotavlja preprost primer uporabiti kot model:

        <?xml version="1.0" encoding="UTF-8"?>
        <plugin xmlns="http://apache.org/cordova/ns/plugins/1.0"
                id="org.apache.cordova.device" version="0.2.3">
            <name>Device</name>
            <description>Cordova Device Plugin</description>
            <license>Apache 2.0</license>
            <keywords>cordova,device</keywords>
            <js-module src="www/device.js" name="device">
                <clobbers target="device" />
            </js-module>
            <platform name="ios">
                <config-file target="config.xml" parent="/*">
                    <feature name="Device">
                        <param name="ios-package" value="CDVDevice"/>
                    </feature>
                </config-file>
                <header-file src="src/ios/CDVDevice.h" />
                <source-file src="src/ios/CDVDevice.m" />
            </platform>
        </plugin>
    

Najvišje ravni `plugin` oznake `id` atribut uporablja enako obliko povratne domene za identifikacijo plugin paket, kot ste apps so dodani. Na `js-module` oznaka določa pot do skupnega vmesnika JavaScript. Na `platform` oznaka določa niz ustreznih domorodno kodo, za v `ios` platformo v tem primeru. Na `config-file` tag enkapsulira a `feature` oznako, ki se vbrizga v plosčad-poseben `config.xml` datoteko ozavestiti platformi dodatna oznaka knjižnice. Na `header-file` in `source-file` tags določite pot do datoteke v knjižnico.

## Preverjanje Plugin

Lahko uporabite na `plugman` korist v ček ali plugin namesti pravilno za vsako platformo. Namestite `plugman` s sledeč zapoved [vozlišča][2] :

 [2]: http://nodejs.org/

        $ npm install -g plugman
    

Potrebujete veljavno app Izvorni imenik, kot so najvišje ravni `www` imenik, ki je vključen v privzeto ustvari CLI projekt, kot je opisano v vmesnik ukazne vrstice. Poskrbite, da app je `index.html` domača stran reference ime plugin JavaScript vmesnik, kot če bi v istem imeniku vir:

        <script src="myplugin.js"></script>
    

Nato zaženite ukaz kot sledi testiranje ali pravilno obremenitev iOS odvisnosti:

        $ plugman -platform ios /path/to/my/project/www /path/to/my/plugin
    

Za podrobnosti o `plugman` možnosti, glejte Uporaba Plugman za upravljanje Plugins. Informacije o tem, kako dejansko *debug* plugins, glejte vsako platformo izvorni vmesnik, naštetih na dnu te strani.

## JavaScript vmesnik

JavaScript zagotavlja prednja vmesnik, zaradi česar je morda najpomembnejši del plugin. Vaš plugin JavaScript lahko strukturo, pa vam je všeč, vendar morate poklicati `cordova.exec` komunicirati z native platformo, uporabite to sintakso:

        cordova.exec(function(winParam) {},
                     function(error) {},
                     "service",
                     "action",
                     ["firstArgument", "secondArgument", 42, false]);
    

Tukaj je, kako deluje vsak parameter:

*   `function(winParam) {}`: Uspeh povratni klic funkcije. Ob predpostavki, da vaš `exec` klic konča uspešno, ta funkcija izvede ob s poljuben parametar to podaš.

*   `function(error) {}`: Povratni klic funkcije je napaka. Če operacija ni uspešno dokončala, ta funkcija izvede s poljuben zmota parameter.

*   `"service"`: Ime storitve za klic na domači strani. To ustreza native razred, za katerega več informacij je na voljo v rojsten vodič spodaj.

*   `"action"`: Ime dejanja, da pokličete na domači strani. To na splošno ustreza native razred metoda. Glej rojsten vodič spodaj.

*   `[/* arguments */]`: Niz argumentov prenesti v rodni okolje.

## Vzorec JavaScript

Ta primer prikazuje en način za izvajanje plugin JavaScript vmesnik:

        window.echo = function(str, callback) {
            cordova.exec(callback, function(err) {
                callback('Nothing to echo.');
            }, "Echo", "echo", [str]);
        };
    

V tem primeru plugin pripisuje sama na `window` predmet kot na `echo` funkcijo, ki uporabnikom plugin bi klic takole:

        window.echo("echome", function(echoValue) {
            alert(echoValue == "echome"); // should alert true.
        });
    

Pogled na zadnje tri argumente, da je `cordova.exec` funkcija. Prvi klice na `Echo` *storitev*, ime razreda. Druga zahteva je `echo` *dejanje*, metode znotraj razreda. Tretji je niz argumentov echo nizom, ki je v `window.echo` funkcija je prvi parameter.

Uspeh callback prešla v `exec` je preprosto sklicevanje na povratni klic funkcije `window.echo` traja. Če native platformo požari napake povratni klic, ga preprosto zahteva povratni klic uspeha ter ga privzeti niz.

## Native vmesniki

Ko določite JavaScript za vaše plugin, morate dopolniti z vsaj enega izvajanju native. Spodaj so navedene podrobnosti za vsako platformo, in vsak gradi na preprost Echo Plugin primer zgoraj:

*   Amazon ogenj OS Plugins
*   Android Plugins
*   iOS Plugins
*   BlackBerry 10 Plugins
*   Windows Phone Plugins

Tizen platforma podpira plugins.

## Objavljanje Plugins

Ko ste razviti vaše plugin, morda želite objavite in ga delite s skupnostjo. Lahko objavite vaše plugin cordova registra (na [ `npmjs` ][3]) ali katero koli drugo `npmjs` -osnova registracija. Drugi razvijalci lahko namestite samodejno z uporabo bodisi `plugman` ali Cordova CLI. (Podrobnosti o vsakem razvojno pot, glejte Uporaba Plugman za upravljanje Plugins in The vmesnik ukazne vrstice.)

 [3]: https://github.com/isaacs/npmjs.org

Objaviti plugin morate uporabiti na `plugman` orodje in iti skozi naslednje korake:

    $ plugman adduser # that is if you don't have an account yet
    $ plugman publish /path/to/your/plugin
    

To je to!

Tekmovanje v teku `plugman --help` seznami drugih ukazov osnovi registra.