---

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied. See the License for the
         specific language governing permissions and limitations
    

   under the License.
---

# BlackBerry 10 Plugins

Ta razdelek ponuja podrobnosti za kako izvajati native plugin kodo na platformi BlackBerry 10. Pred obravnavo tega, glejte Uporaba Plugins za pregled plugin strukturo in njene skupne JavaScript vmesnik. Ta oddelek še dokazati vzorec *echo* plugin, ki komunicira s spletni pogled Cordova native platformo in nazaj.

Echo plugin je v bistvu vrne karkoli niz v `window.echo` funkcijo, ki se pošilja iz JavaScript:

        window.echo = function(str, callback) {
            cordova.exec(callback, function(err) {
                callback('Nothing to echo.');
            }, "Echo", "echo", [str]);
        };
    

Cordova plugin za BlackBerry 10 vsebuje JavaScript in domorodno kodo, ki komunicirajo med seboj prek okvira, ki jih JNEXT. Vsak plugin mora vključevati tudi a `plugin.xml` pila.

## Ustvarja Native razred

Tvoriti avtohtone del vaše plugin, odprite BlackBerry 10 NDK IDE in izberite **datoteko → New → BlackBerry projekt → Native razširitev → BlackBerry 10**. In vnesite ime želenega projekt in mesto, pritisnite **konča**.

Projekt ustvaril IDE vsebuje vzorčno kodo za plugin spomin. Lahko nadomestiti ali spremeniti te datoteke za izvajanje svoje funkcionalnosti:

*   `*name*_js.hpp`: C++ glava za JNEXT kodo.

*   `*name*_js.cpp`: C++ zbornik zakaj JNEXT.

Izvorni vmesnik za razširitev JNEXT si lahko ogledate v datoteki glave plugin, ki se nahajajo v javnem imeniku projekta. Ima tudi konstante in uporabnost funkcije na voljo v domorodno kodo. Plugin mora izhajati iz `JSExt` , ki je opredeljena v `plugin.h` . To je mora izvajati naslednje kategorije:

        class JSExt
        {
        public:
            virtual ~JSExt() {};
            virtual string InvokeMethod( const string& strCommand ) = 0;
            virtual bool CanDelete( void ) = 0;
        private:
            std::string m_id;
        };
    

Razširitev vključevati na `plugin.h` glavo datoteke. V v `Echo` na primer uporabljate `JSExt` takole v v `echo_js.hpp` datoteke:

        #include "../public/plugin.h"
        #include <string>
    
        #ifndef ECHO_JS_H_
        #define ECHO_JS_H_
    
        class Echo : public JSExt
        {
        public:
            explicit Echo(const std::string& id);
            virtual ~Echo();
            virtual std::string InvokeMethod(const std::string& command);
            virtual bool CanDelete();
        private:
            std::string m_id;
        };
    
        #endif // ECHO_JS_H_
    

Na `m_id` atribut je `JNEXT` id predmeta, ki je prešla v razred kot argument gradbenik. To je potrebno za native strani prožilca dogodkov na strani JavaScript. Je `CanDelete` metoda določa, ali je mogoče izbrisati avtohtone predmeta. Je `InvokeMethod` funkcija se imenuje kot rezultat iz zahtevo iz JavaScript za priklic metode predmeta posebej. Edini argument, da ta funkcija je niz opravil od JavaScript, ki to metodo razčleni ugotoviti native predmeta metode mora izvršiti. Te metode se izvajajo v `echo_js.cpp` . Tukaj je na `InvokeMethod` funkcijo za v `Echo` primer:

        string Echo::InvokeMethod(const string& command) {
    
            //parse command and args from string
            int index = command.find_first_of(" ");
            string strCommand = command.substr(0, index);
            string strValue = command.substr(index + 1, command.length());
    
            // Determine which function should be executed
            if (strCommand == "echo") {
                return strValue;
            } else {
                return "Unsupported Method";
            }
        }
    

Native plugin tudi izvajati naslednje povratni klic funkcije:

*   `extern char* onGetObjList( void );`

*   `extern JSExt* onCreateObject( const string& strClassName, const string& strObjId );`

Je `onGetObjList` funkcija vrne vejico ločen seznam razredov, ki podpira JNEXT. JNEXT ta funkcija ugotoviti izbiro razredov, ki JNEXT lahko sprožajo. V `Echo` plugin izvaja naslednje `echo_js.cpp` :

        char* onGetObjList() {
            static char name[] = "Echo";
            return name;
        }
    

Je `onCreateObject` funkcija ima dva parametra. Prvi je ime zahtevanega razreda, ustvarjenih s strani JavaScript z veljavna imena kot tiste vrnil v `onGetObjList` . Drugi parameter je enoličen predmet id razreda. Ta metoda vrne kazalec na predmetu ustvaril plugin. V `Echo` plugin izvaja naslednje `echo_js.cpp` :

        JSExt* onCreateObject(const string& className, const string& id) {
            if (className == "Echo") {
                return new Echo(id);
            }
            return NULL;
        }
    

## Ustvarjanje Plugin JavaScript

Plugin mora vsebovati naslednje JavaScript datoteke:

*   `client.js`: To velja za strani odjemalca in vsebuje API na voljo Cordova aplikaciji. API v `client.js` klicev omogoča klice za `index.js` . API v `client.js` tudi povezuje povratni klic funkcije na dogodke, da ogenj je callbacks.

*   `index.js`: Obremenitve Cordova `index.js` in naredi dostopne preko cordova.exec mostu. V `client.js` datoteke omogoča klice za API v v `index.js` datoteko, česar pa klic na JNEXT komunicirati s strani domačih.

Odjemalca in strežnik strani ( `client.js` in `index.js` ) komunicira skozi na `Cordova.exec` funkcijo. V `client.js` treba sklicevati na `exec` delovanje in zagotovili potrebne argumente. V `Echo` plugin izvaja naslednje v v `client.js` datoteke:

        var service = "org.apache.cordova.blackberry.echo",
            exec = cordova.require("cordova/exec");
    
        module.exports = {
            echo: function (data, success, fail) {
                exec(success, fail, service, "echo", { data: data });
            }
        };
    

Na `index.js` komponenta uporablja JNEXT za interakcijo s strani domačih. Pritrditev konstruktor funkcijo imenovan `Echo` JNEXT omogoča izvajanje naslednjih ključnih operacij, z uporabo je `init` funkcija:

*   Določite zahtevane modul, ki izvažajo na domači strani. Ime zahtevane modul mora ujemati z imenom datoteke skupne knjižnice ( `.so` datoteke):
    
        JNEXT.require("libecho")
        

*   Ustvarjanje predmeta z uporabo pridobljene modul in Shrani ID, ki vrne klic:
    
        self.m_id = JNEXT.createObject("libecho.Echo");
        
    
    Kdaj uporaba zahteva je `echo` deloval v `client.js` , da pokličete pa klice je `echo` deloval v `index.js` , kjer je `PluginResult` predmet pošlje podatke kot odgovor nazaj v `client.js` . Ker je `args` je bil pretvori argument v funkciji `JSON.stringfy()` in kodirano kot a `URIcomponent` , pokličete mora naslednje:
    
        data = JSON.parse(decodeURIComponent(args.data));
        

Zdaj lahko pošiljate podatke nazaj, kot spodaj:

        module.exports = {
            echo: function (success, fail, args, env) {
                var result = new PluginResult(args, env),
                data = JSON.parse(decodeURIComponent(args.data)),
                response = echo.getInstance().echo(data);
                result.ok(response, false);
            }
        };
    

## Plugin arhitekturo

Lahko postavite na plugin artefakte, vključno na `plugin.xml` datoteke, JavaScript in C++ izvorne datoteke, in `.so` binary pila v poljuben imenik strukturo, tako dolgo, kot ste pravilno določili lokacije datotek v v `plugin.xml` datoteko. Tukaj je tipična struktura:

***project_directory*** (> plugin.xml)

*   **www** (>client.js)
*   **src** 
    *   **blackberry10** (> index.js, **native** > *.cpp, *.hpp)
    *   **naprava** (>*binarno datoteko* * .so)
    *   **simulator** (>*binarno datoteko* * .so)

Seznam prikazuje hierarhične odnose med glavne mape. Oklepaju prikazuje vsebino podanem imeniku. Vse imenik imena so prikazana v krepki. Imena datotek so pred je `>` znak.

## *Plugin.xml* datoteke

Na `plugin.xml` vsebuje imenski prostor za razširitev in drugimi metapodatki. Nastavite na `Echo` plugin kot sledi:

        <plugin xmlns="http://www.phonegap.com/ns/plugins/1.0"
            id="org.apache.cordova.blackberry.echo"
            version="1.0.0">
            <js-module src="www/client.js">
                <merges target="navigator" />
            </js-module>
            <platform name="blackberry10">
                <source-file src="src/blackberry10/index.js" />
                <lib-file src="src/blackberry10/native/device/libecho.so" arch="device" />
                <lib-file src="src/blackberry10/native/simulator/libecho.so" arch="simulator" />
                <config-file target="www/config.xml" parent="/widget">
                    <feature name="org.apache.cordova.blackberry.echo" value="org.apache.cordova.blackberry.echo" />
                </config-file>
            </platform>
        </plugin>