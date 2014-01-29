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

# iOS Plugins

Ta razdelek ponuja podrobnosti za kako izvajati native plugin kodo na platformi iOS. Pred obravnavo tega, glejte Uporaba Plugins za pregled plugin strukturo in njene skupne JavaScript vmesnik. Ta oddelek še dokazati vzorec *echo* plugin, ki komunicira s spletni pogled Cordova native platformo in nazaj.

IOS plugin se izvaja kot Objective-C razred, ki razširja v `CDVPlugin` razred. Za JavaScript je `exec` metoda je `service` parameter na zemljevidu Objective-C razred, vsak plugin razred mora biti registriran kot a `<feature>` tag v direktorij imenovan uporaba `config.xml` datoteke.

## Plugin razred kartiranje

Del JavaScript plugin uporablja je `cordova.exec` metoda, kot sledi:

        exec(<successFunction>, <failFunction>, <service>, <action>, [<args>]);
    

To šerifov na zahtevo v `UIWebView` iOS native strani, učinkovito kliče je `action` metoda na je `service` razreda, z argumenti, ki so opravili v v `args` array.

Določite plugin kot a `<feature>` tag v Cordova iOS aplikacijo projekta `config.xml` datoteke, uporabljate v `plugin.xml` datoteko, samodejno, kot je opisano v Plugins uporabo injicirati te oznake:

        <feature name="LocalStorage">
            <param name="ios-package" value="CDVLocalStorage" />
        </feature>
    

Zunanja oblika `name` atribut mora ujemati, kar ste jih določili kot JavaScript `exec` call's `service` parameter. Na `value` atribut mora ujemati z imenom plugin Objective-C razred. Na `<param>` elementa `name` mora biti vedno `ios-package` . Če ne upoštevate teh smernic, lahko zbrati plugin, vendar Cordova še vedno ne morejo v postranski to.

## Inicializacija plugin in življenju

En primerek predmeta plugin je ustvarjen za življenje vsakega `UIWebView` . Plugins so običajno predstavljen, ko najprej sklicuje klic iz JavaScript. Drugače lahko biti predstavljen tako, a `param` imenovan `onload` da `true` v v `config.xml` datoteke:

        <feature name="Echo">
            <param name="ios-package" value="Echo" />
            <param name="onload" value="true" />
        </feature>
    

Tam se *ne* imenuje initializer za plugins. Namesto tega uporabljajte plugins na `pluginInitialize` način za njihovo logiko zagonu.

Plugins za dolgotrajen zahteve, v ozadju dejavnosti, kot so predvajanje medijev, poslušalci ali ki ohraniti notranje stanje bi bilo izvajala v `onReset` metoda za čiščenje teh dejavnosti. Metoda izvede, ko se `UIWebView` premakne se nova stran ali Osveži, ki polnitve JavaScript.

## Pisanje iOS Cordova Plugin

JavaScript poziv požari izklop zahteva plugin native stran, in ustrezne iOS plugin Objective-C je preslikan pravilno v v `config.xml` datoteko, vendar kaj končni iOS Objective-C plugin razred pogled všeč? Karkoli se odpravi na plugin z JavaScript je `exec` funkcija je prešla v ustrezen plugin razred `action` metoda. Plugin metoda je ta podpis:

        - (void)myMethod:(CDVInvokedUrlCommand*)command
        {
            CDVPluginResult* pluginResult = nil;
            NSString* myarg = [command.arguments objectAtIndex:0];
    
            if (myarg != nil) {
                pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK];
            } else {
                pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR messageAsString:@"Arg was null"];
            }
            [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
        }
    

Za več podrobnosti glej `[CDVInvokedUrlCommand.h](https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVInvokedUrlCommand.h)` , `[CDVPluginResult.h](https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVPluginResult.h)` , in`[CDVCommandDelegate.h](https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVCommandDelegate.h)`.

## iOS vrste sporočil CDVPluginResult

Uporabite lahko `CDVPluginResult` različne rezultat vrste nazaj JavaScript callbacks, z uporabo metod razreda, ki sledijo tem vzorcu:

        + (CDVPluginResult*)resultWithStatus:(CDVCommandStatus)statusOrdinal messageAs...
    

Ustvarite lahko `String` , `Int` , `Double` , `Bool` , `Array` , `Dictionary` , `ArrayBuffer` , in `Multipart` vrst. Lahko tudi izpustite argumentov poslati status ali vrnitev napake ali celo odločite, da ne spodbuda poljuben čep rezultat, pri čemer niti callback požari.

Opomba za kompleksne vrnjenih vrednosti naslednje:

*   `messageAsArrayBuffer`pričakuje, da bo `NSData*` in pretvori v `ArrayBuffer` v JavaScript povratni klic. Prav tako vse `ArrayBuffer` JavaScript pošlje na plugin se pretvorijo v`NSData*`.

*   `messageAsMultipart`pričakuje na `NSArray*` katerekoli druge podprte vrste, in pošlje celoten niz, kot je `arguments` vaš JavaScript povratni klic. Na ta način vse trditve so serializirana ali mogoče deserializirati kot potrebno, tako da je varno za vrnitev `NSData*` kot multipart, vendar ne kot `Array` /`Dictionary`.

## ECHO iOS Plugin primer

Primerjal JavaScript vmesnik *echo* funkcija, opisana v uporabo Plugins, uporabite na `plugin.xml` injicirati a `feature` Specifikacija za lokalne platforme `config.xml` datoteke:

        <platform name="ios">
            <config-file target="config.xml" parent="/*">
                <feature name="Echo">
                    <param name="ios-package" value="Echo" />
                </feature>
            </config-file>
        </platform>
    

Nato bi dodamo naslednje `Echo.h` in `Echo.m` datoteke je `Plugins` mapo znotraj Cordova iOS aplikacija imenika:

        /********* Echo.h Cordova Plugin Header *******/
    
        #import <Cordova/CDV.h>
    
        @interface Echo : CDVPlugin
    
        - (void)echo:(CDVInvokedUrlCommand*)command;
    
        @end
    
        /********* Echo.m Cordova Plugin Implementation *******/
    
        #import "Echo.h"
        #import <Cordova/CDV.h>
    
        @implementation Echo
    
        - (void)echo:(CDVInvokedUrlCommand*)command
        {
            CDVPluginResult* pluginResult = nil;
            NSString* echo = [command.arguments objectAtIndex:0];
    
            if (echo != nil && [echo length] > 0) {
                pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:echo];
            } else {
                pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR];
            }
    
            [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
        }
    
        @end
    

Potrebno uvoz na vrhu datoteke razširja razred iz `CDVPlugin` . V tem primeru plugin podpira le eno `echo` dejanje. Pridobi echo niz s pozivom na `objectAtIndex` način dobili prvi parameter je `arguments` array, ki ustreza argumente, ki so jih v sprejel JavaScript `exec()` funkcijo.

Preveri parameter prepričati se to ni `nil` ali prazen niz, vračajo z `PluginResult` s je `ERROR` status, če je tako. Če parameter prehaja ček, vrne s `PluginResult` s je `OK` status, ki poteka v izvirniku `echo` niz. Končno, pošlje rezultat na `self.commandDelegate` , ki izvede na `exec` metoda je uspeh ali neuspeh callbacks na strani JavaScript. Če se imenuje uspeh callback, prehaja v je `echo` parameter.

## iOS integracije

V `CDVPlugin` razred značilnosti druge metode, da vaš plugin lahko preglasite. Zajamete lahko na primer v `pause` , `resume` , app končati in `handleOpenURL` dogodkov. Glej [CDVPlugin.h][1] in [CDVPlugin.m][2] razred za usmerjanje.

 [1]: https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVPlugin.h
 [2]: https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVPlugin.m

## Navojev

Plugin metod običajno izvesti v istem nit kot glavni vmesnik. Če vaš plugin zahteva blokiranje klica ali zahteva veliko predelavo, uporabite ozadje nit. Na primer:

        - (void)myPluginMethod:(CDVInvokedUrlCommand*)command
        {
            // Check command.arguments here.
            [self.commandDelegate runInBackground:^{
                NSString* payload = nil;
                // Some blocking logic...
                CDVPluginResult* pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:payload];
                // The sendPluginResult method is thread-safe.
                [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
            }];
        }
    

## Debugging iOS Plugins

Debug na strani Objective-C, morate Xcode's vgrajen iskalnik napak. Za JavaScript, na iOS 5,0 lahko uporabite [Weinre, projekt Apache Cordova][3] ali [iWebInspector, a tretji stranka korist][4]. Za iOS 6, lahko priložite Safari 6.0 vaš app teče v iOS 6 Simulator.

 [3]: https://github.com/apache/cordova-weinre
 [4]: http://www.iwebinspector.com/

## Skupnih pastem

*   Ne pozabite dodati vaš plugin preslikava v `config.xml` . Če ste pozabili, napake prijavljeni Xcode konzolo.

*   Ne pozabite dodati vseh gostiteljev povežete v seznam dovoljenih, kot je opisano v priročniku Whitelist domene. Če ste pozabili, napake prijavljeni Xcode konzolo.