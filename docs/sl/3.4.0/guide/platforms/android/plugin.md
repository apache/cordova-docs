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

# Android Plugins

Ta razdelek ponuja podrobnosti za kako izvajati native plugin kodo na Android platformi. Pred obravnavo tega, glejte Uporaba Plugins za pregled plugin strukturo in njene skupne JavaScript vmesnik. Ta oddelek še dokazati vzorec *echo* plugin, ki komunicira s spletni pogled Cordova native platformo in nazaj. Za drug vzorec, glejte tudi opombe v [CordovaPlugin.java][1].

 [1]: https://github.com/apache/cordova-android/blob/master/framework/src/org/apache/cordova/CordovaPlugin.java

Android plugins temeljijo na Cordova-Android, ki je sestavljen iz Android spletni pogled s kavlji, ki je pritrjena nanj. Plugins so predstavljene kot razred preslikave v v `config.xml` datoteko. Plugin sestavlja vsaj en Java razred, ki se razteza na `CordovaPlugin` razred, nedoločni zaimek od glaven svoje `execute` metode. Kot najboljša praksa, plugin bi obravnavala tudi `pause` in `resume` dogodki, skupaj z vsako sporočilo, ki poteka med plugins. Plugins z zahteva dolgotrajen, ozadje dejavnost predvajanje medijev, poslušalci ali notranje stanje mora izvajati v `onReset()` metode kot dobro. To izvede, ko se `WebView` premakne se nova stran ali Osveži, ki polnitve JavaScript.

## Plugin razred kartiranje

Plugin JavaScript vmesnik uporablja je `cordova.exec` metoda, kot sledi:

        exec(<successFunction>, <failFunction>, <service>, <action>, [<args>]);
    

To šerifov na zahtevo na spletni pogled na Android native strani, učinkovito kliče na `action` metoda na v `service` razred, z dodatnimi argumenti opravili v v `args` array.

Ali porazdelite plugin, kot Java datoteke ali datoteke *jar* lastne, plugin mora biti določena v Cordova Android aplikacije `res/xml/config.xml` datoteke. Glejte Uporaba Plugins za več informacij o uporabi na `plugin.xml` datoteko za injiciranje tega `feature` element:

        <feature name="<service_name>">
            <param name="android-package" value="<full_name_including_namespace>" />
        </feature>
    

Ime storitve ujema s tisto, ki se uporabljajo v JavaScript `exec` klic. Vrednost je popolnoma določeno namespace identifikator razreda Java. Drugače, plugin zbrati vendar še vedno na voljo Cordova.

## Inicializacija plugin in življenju

En primerek predmeta plugin je ustvarjen za življenje vsakega `WebView` . Plugins so instantiated ne, dokler se najprej sklicuje klic iz JavaScript, razen če `<param>` s je `onload` `name` atribut je nastavljen `"true"` v `config.xml` . Npr.:

    <feature name="Echo">
        <param name="android-package" value="<full_name_including_namespace>" />
        <param name="onload" value="true" />
    </feature>
    

Uporabljajte plugins je `initialize` metoda za svoje start-up logiko.

    @override
    public void initialize(CordovaInterface cordova, CordovaWebView webView) {
        super.initialize(cordova, webView);
        // your init code here
    }
    

## Pisanje Android Java Plugin

JavaScript poziv požari izklop zahteva plugin native stran in correspoinding Java plugin je pravilno preslikana v `config.xml` datoteko, ampak kaj je končni Android Java Plugin razred izgledal? Karkoli se odpravi na plugin z JavaScript je `exec` funkcija je prešla v plugin razred `execute` metoda. Večina `execute` izvedb videti takole:

        @Override javnih boolean izvršiti (niz ukrepov, JSONArray argumenta, CallbackContext callbackContext) vrže JSONException {če ("beep".equals(action)) {this.beep(args.getLong(0));
                callbackContext.success();
                return true;
            } return false;  / / Vrača napačne rezultate v "MethodNotFound" napaka.
        }
    

JavaScript `exec` funkcije `action` parameter ustreza zasebno razred metoda odpremo z izbirne parametre.

Ko lov izjeme in vračanje napake, je pomembno zaradi jasnosti, da napake vrniti JavaScript tekmo Java izjema imena čim več.

## Navojev

Plugin JavaScript does *ne* teči v glavni niti na `WebView` vmesnika, namesto tega, to runs naprej na `WebCore` nit, kot pa je `execute` metoda. Če potrebujete za interakcijo z uporabniškim vmesnikom, morate uporabiti naslednje spremembe:

        @Override
        public boolean execute(String action, JSONArray args, final CallbackContext callbackContext) throws JSONException {
            if ("beep".equals(action)) {
                final long duration = args.getLong(0);
                cordova.getActivity().runOnUiThread(new Runnable() {
                    public void run() {
                        ...
                        callbackContext.success(); // Thread-safe.
                    }
                });
                return true;
            }
            return false;
        }
    

Uporabo naslednjih če vi ne potreba teči na glavni vmesnik nit, vendar ne želite blokirati v `WebCore` nit bodisi:

        @Override
        public boolean execute(String action, JSONArray args, final CallbackContext callbackContext) throws JSONException {
            if ("beep".equals(action)) {
                final long duration = args.getLong(0);
                cordova.getThreadPool().execute(new Runnable() {
                    public void run() {
                        ...
                        callbackContext.success(); // Thread-safe.
                    }
                });
                return true;
            }
            return false;
        }
    

## ECHO Android Plugin primer

Primerjal JavaScript vmesnik *echo* funkcija, opisana v uporabo Plugins, uporabite na `plugin.xml` injicirati a `feature` Specifikacija za lokalne platforme `config.xml` datoteke:

        <platform name="android">
            <config-file target="config.xml" parent="/*">
                <feature name="Echo">
                    <param name="android-package" value="org.apache.cordova.plugin.Echo"/>
                </feature>
            </config-file>
        </platform>
    

Nato dodamo naslednje v `src/org/apache/cordova/plugin/Echo.java` datoteke:

        package org.apache.cordova.plugin;
    
        import org.apache.cordova.CordovaPlugin;
        import org.apache.cordova.CallbackContext;
    
        import org.json.JSONArray;
        import org.json.JSONException;
        import org.json.JSONObject;
    
        /**
         * This class echoes a string called from JavaScript.
         */
        public class Echo extends CordovaPlugin {
    
            @Override
            public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
                if (action.equals("echo")) {
                    String message = args.getString(0);
                    this.echo(message, callbackContext);
                    return true;
                }
                return false;
            }
    
            private void echo(String message, CallbackContext callbackContext) {
                if (message != null && message.length() > 0) {
                    callbackContext.success(message);
                } else {
                    callbackContext.error("Expected one non-empty string argument.");
                }
            }
        }
    

Potrebno uvoz na vrhu datoteke razširja razred iz `CordovaPlugin` , katerih `execute()` metoda to preglasi prejemati sporočila `exec()` . Je `execute()` metoda najprej preveri vrednost `action` , ki v tem primeru obstaja samo ena veljavna `echo` vrednost. Poljuben drugi dejanje vrne `false` in rezultat je `INVALID_ACTION` napaka, ki prevaja napaka povratni klic, sklicuje na strani JavaScript.

Naslednji, metodo dobi niz using echo v `args` predmeta `getString` metoda, določa prvi parameter posredovali metodi. Ko vrednost prenese na zasebni `echo` metoda, je parameter kockast prepričati se to ni `null` ali prazen niz, v tem primeru `callbackContext.error()` prikliče JavaScript's povratni klic napake. Če mimo različnih preverjanj, je `callbackContext.success()` mimo samorasel `message` niz nazaj na JavaScript povratni klic uspeh kot parameter.

## Android integracije

Android funkcije je `Intent` sistem, ki omogoča procese komunicirati med seboj. Plugins so dostop do a `CordovaInterface` predmet, ki lahko dostopa do Android `Activity` ki teče uporabo. To je v `Context` zahtevati v splavitev nov Android `Intent` . Na `CordovaInterface` omogoča plugins za začetek je `Activity` za rezultat, in nastavite povratni klic plugin za takrat, ko se `Intent` vrne v uporabo.

Od Cordova 2.0, čep ni več neposreden dostop na `Context` , in zapuščina `ctx` države je odsvetovana. Vse `ctx` metodami obstaja na na `Context` , torej tako `getContext()` in `getActivity()` lahko vrne zahtevani predmet.

## Debugging Android Plugins

Mrk vam omogoča, da debug plugins kot Java vir vključeno v projekt. Samo najnovejšo različico Android Developer orodja omogoča pritrditev izvorne kode *JAR* odvisnosti, tako da to funkcijo še niso v celoti podprte.