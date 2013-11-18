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

# BlackBerry Plugins

Ta razdelek ponuja podrobnosti za kako izvajati native plugin kodo na BlackBerry platforme. Pred obravnavo tega, glejte Uporaba Plugins za pregled plugin strukturo in njene skupne JavaScript vmesnik. Ta oddelek še dokazati vzorec *echo* plugin, ki komunicira s spletni pogled Cordova native platformo in nazaj.

Poleg tega prenesete [Cordova BlackBerry skladišča][1]. V `Cordova-BlackBerry` projekta omogoča uvajanje naprave BlackBerry Torch, krepko in Playbook. Playbook uporablja drugačno oznako osnove kot druge naprave BlackBerry oprimek, za katerega morate podvojiti razvojnih prizadevanj. Ta priročnik se osredotoča na dlančnikih in namesto tablet.

 [1]: https://git-wip-us.apache.org/repos/asf?p=cordova-blackberry.git;a=summary

## Spreminjanje plugins.xml

V `Echo` plugin vrne karkoli sporočila, ki jih uporabnik pošilja s je `window.echo` funkcija na strani JavaScript:

        window.echo = function(str, callback) {
            cordova.exec(callback, function(err) {
                callback('Nothing to echo.');
            }, "Echo", "echo", [str]);
        };
    

Projekta `www/plugins.xml` Datoteka vsebuje vse potrebne reference na projektu Cordova plugins. Dodajanje dodatnih referenčno tako da ko `cordova.exec` je pozval, Cordova zna zemljevid v `Echo` argument za native `Echo` razred:

        <feature name="Echo">
            <param name="blackberry-package" value="org.apache.cordova.echo.Echo" />
        </feature>
    

## Echo.java datoteke

Na `feature` je specifikacija `value` atribut sklicuje povratne domene-style identifikator. To ustreza pot v Cordova BlackBerry WebWorks repo `framework/ext/src` imenik. Dodaj a `framework/ext/src/org/apache/cordova/echo` imenik in dodajte a `Echo.java` pila.

V `Echo.java` mora opredeliti razreda, ki se v `Plugin` razred. Je prav tako treba izvajati z `execute` metodo, ki vrne v `PluginResult` razred. Poljuben oklic v `cordova.exec` prehaja v akciji znotraj razreda vršiti, kot tudi argumente. V tem primeru je `Echo` razreda `echo` metoda je ukrep, in `[str]` je dodaten argument prenesti metodi.

        package org.apache.cordova.echo;
    
        import org.apache.cordova.api.Plugin;
        import org.apache.cordova.api.PluginResult;
        import org.apache.cordova.json4j.JSONArray;
        import org.apache.cordova.json4j.JSONException;
        import org.apache.cordova.json4j.JSONObject;
        /**
         * A simple plugin to demonstrate how to build a plugin for BlackBerry
         * Basically echos back the msg that a user calls to this plugin
         */
        public final class Echo extends Plugin {
    
            public static final String echo = "echo";
    
            public PluginResult execute(String action, JSONArray args, String callbackId) {
                PluginResult result = new PluginResult(PluginResult.Status.INVALID_ACTION, "Echo: Invalid action:" + action);
                if(action.equals(echo)){
                    try {
                        String theMsg = args.getString(0);
                        if(theMsg!= null || theMsg.length()>0){
                            result = new PluginResult(PluginResult.Status.OK, theMsg);
                        }else{
                            result = new PluginResult(PluginResult.Status.ERROR, "Nothing to echo.");
                        }
                    } catch (JSONException e) {
                        result = new PluginResult(PluginResult.Status.JSON_EXCEPTION, e.getMessage());
                    }
                }
                return result;
            }
        }
    

V zbornik zgoraj, je `execute` metoda najprej prinaša v dejanje. V tem primeru obstaja samo ena veljavna `echo` dejanje, tako preprosto preveri za vrednost.

Prejeta sporočila, posredovana kot `[str]` iz JavaScript je na voljo v `Echo` razred kot je `args` matrike. V tem primeru obstaja samo en argument, dostopne z enodimenzionalno kazalo:

        String theMsg = args.getString(0);
    

Po različnih preverjanje napak na njegovo vrednost, metoda instantiates novo `PluginResult` s je `OK` status in vrne sporočilo. Ta vrednost, pa se prenese nazaj kot argument JavaScript povratni klic uspeha. V primeru napake, različne kode stanja so poslani nazaj na JavaScript povratni klic napake.

## Posodabljanje .jar v projekta www imenik

Dodane `Echo.java` je treba posodobiti v vašem projektu. Zgraditi v `.jar` datoteko, pluti BlackBerry WebWorks repo korenski imenik in zaženite je `ant` ukaz:

        ant update -Dproject.path="~/path_to_my_project"
    

Ta gradi nov `.jar` pila v v `build/ext` naslovnik. Izvod v `build/ext/cordova.jar` pila v v `project/www/ext` imenik.

Če vse gre dobro, ki vam omogoča uporabo v `Echo` plugin v BlackBerry.