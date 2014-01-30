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

# InAppBrowser

> Na `InAppBrowser` spletni brskalnik pogled, ki se prikaže, ko kliče `window.open()` , ali ko odprete povezavo ustanovljena kot`<a target="_blank">`.

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    

**Opomba**: The InAppBrowser okno obnaša kot standardni spletni brskalnik, in dostopa do API Cordova.

## Opis

Vrnila iz razpisa za`window.open`.

## Metode

*   addEventListener
*   removeEventListener
*   close
*   show
*   executeScript
*   insertCSS

## Dostop funkcijo

Od različice 3.0, Cordova izvaja naprava ravni API kot *plugins*. Uporabite CLI je `plugin` ukaz, opisane v The vmesnik ukazne vrstice, da dodate ali odstranite to funkcijo za projekt:

        $ cordova plugin add org.apache.cordova.inappbrowser
        $ cordova plugin ls
        [ 'org.apache.cordova.inappbrowser' ]
        $ cordova plugin rm org.apache.cordova.inappbrowser
    

Ti ukazi veljajo za vse ciljne platforme, vendar spremenite posamezne nastavitve spodaj opisani:

*   Android (v`res/xml/config.xml`)
    
        <feature name="InAppBrowser">
            <param name="android-package" value="org.apache.cordova.inappbrowser.InAppBrowser" />
        </feature>
        

*   iOS (v imeniku imenovan uporabe`config.xml`)
    
        <feature name="InAppBrowser">
            <param name="ios-package" value="CDVInAppBrowser" />
        </feature>
        

*   Windows Phone 7 in 8 (v`config.xml`)
    
        <feature name="InAppBrowser" />
        

Nekatere platforme lahko podpira to funkcijo ne zahtevati poljuben poseben zunanja podoba. Videti podpora platformo za pregled.

# addEventListener

> Dodaja poslušalca za dogodek iz na`InAppBrowser`.

    ref.addEventListener(eventname, callback);
    

*   **Ref**: sklicevanje na na `InAppBrowser` okna *(InAppBrowser)*

*   **ShowEvent**: dogodek za poslušanje za *(niz)*
    
    *   **loadstart**: dogodek požari, ko je `InAppBrowser` začetek otovoriti URL.
    *   **loadstop**: dogodek požari, ko je `InAppBrowser` finishes nakladanje URL.
    *   **LoadError**: dogodek požari, ko je `InAppBrowser` naleti na napako pri nalaganju URL.
    *   **izhod**: primeru požarov, ko je `InAppBrowser` okna zaprta.

*   **povratni klic**: funkcija, ki se izvede, ko dogodek požarov. Funkcijo se prenese na `InAppBrowserEvent` predmet, kot parameter.

## Podprte platforme

*   Android
*   BlackBerry
*   iOS
*   Windows Phone 7 in 8

## Quick primer

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    ref.addEventListener('loadstart', function() { alert(event.url); });
    

## Celoten primer

    <!DOCTYPE html>
    <html>
      <head>
        <title>InAppBrowser.addEventListener Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
             var ref = window.open('http://apache.org', '_blank', 'location=yes');
             ref.addEventListener('loadstart', function(event) { alert('start: ' + event.url); });
             ref.addEventListener('loadstop', function(event) { alert('stop: ' + event.url); });
             ref.addEventListener('loaderror', function(event) { alert('error: ' + event.message); });
             ref.addEventListener('exit', function(event) { alert(event.type); });
        }
    
        </script>
      </head>
      <body>
      </body>
    </html>
    

# removeEventListener

> Odstrani poslušalca za dogodek iz na`InAppBrowser`.

    ref.removeEventListener(eventname, callback);
    

*   **Ref**: reference za na `InAppBrowser` okno. *(InAppBrowser)*

*   **ShowEvent**: dogodek ustaviti posluša. *(Niz)*
    
    *   **loadstart**: dogodek požari, ko je `InAppBrowser` začetek otovoriti URL.
    *   **loadstop**: dogodek požari, ko je `InAppBrowser` finishes nakladanje URL.
    *   **LoadError**: dogodek požari, ko je `InAppBrowser` naleti nalaganjem URL.
    *   **izhod**: primeru požarov, ko je `InAppBrowser` okna zaprta.

*   **povratni klic**: funkcija vršiti ko dogodek požarov. Funkcijo se prenese na `InAppBrowserEvent` predmeta.

## Podprte platforme

*   Android
*   BlackBerry
*   iOS
*   Windows Phone 7 in 8

## Quick primer

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    var myCallback = function() { alert(event.url); }
    ref.addEventListener('loadstart', myCallback);
    ref.removeEventListener('loadstart', myCallback);
    

## Celoten primer

    <!DOCTYPE html>
    <html>
      <head>
        <title>InAppBrowser.removeEventListener Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // Global InAppBrowser reference
        var iabRef = null;
    
        function iabLoadStart(event) {
            alert(event.type + ' - ' + event.url);
        }
    
        function iabLoadStop(event) {
            alert(event.type + ' - ' + event.url);
        }
    
        function iabLoadError(event) {
            alert(event.type + ' - ' + event.message);
        }
    
        function iabClose(event) {
             alert(event.type);
             iabRef.removeEventListener('loadstart', iabLoadStart);
             iabRef.removeEventListener('loadstop', iabLoadStop);
             iabRef.removeEventListener('loaderror', iabLoadError);
             iabRef.removeEventListener('exit', iabClose);
        }
    
        // device APIs are available
        //
        function onDeviceReady() {
             iabRef = window.open('http://apache.org', '_blank', 'location=yes');
             iabRef.addEventListener('loadstart', iabLoadStart);
             iabRef.addEventListener('loadstop', iabLoadStop);
             iabRef.addEventListener('loaderror', iabLoadError);
             iabRef.addEventListener('exit', iabClose);
        }
    
        </script>
      </head>
      <body>
      </body>
    </html>
    

# Zaprite

> Zapre v `InAppBrowser` okno.

    ref.close();
    

*   **Ref**: sklicevanje na na `InAppBrowser` okna *(InAppBrowser)*

## Podprte platforme

*   Android
*   BlackBerry
*   iOS
*   Windows Phone 7 in 8

## Quick primer

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    ref.close();
    

## Celoten primer

    <!DOCTYPE html>
    <html>
      <head>
        <title>InAppBrowser.close Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
             var ref = window.open('http://apache.org', '_blank', 'location=yes');
             // close InAppBrowser after 5 seconds
             setTimeout(function() {
                 ref.close();
             }, 5000);
        }
    
        </script>
      </head>
      <body>
      </body>
    </html>
    

# Prikaži

> Prikaže na InAppBrowser okno, ki je odprl skrita. Klicanje to nima učinka, če je InAppBrowser je bil že viden.

    ref.show();
    

*   **Ref**: sklicevanje na InAppBrowser okna (`InAppBrowser`)

## Podprte platforme

*   Android
*   BlackBerry
*   iOS

## Quick primer

    var ref = window.open('http://apache.org', '_blank', 'hidden=yes');
    ref.show();
    

## Celoten primer

    <!DOCTYPE html>
    <html>
      <head>
        <title>InAppBrowser.show Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for Cordova to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // Cordova is ready
        //
        function onDeviceReady() {
             var ref = window.open('http://apache.org', '_blank', 'hidden=yes');
             ref.addEventListener('loadstop', function(event) {
                 alert('background window loaded'); 
             });
             // close InAppBrowser after 5 seconds
             setTimeout(function() {
                 ref.close();
             }, 5000);
        }
    
        </script>
      </head>
      <body>
      </body>
    </html>
    

# executeScript

> Prilije JavaScript kodo v v `InAppBrowser` oknu

    ref.executeScript(details, callback);
    

*   **Ref**: reference za na `InAppBrowser` okno. *(InAppBrowser)*

*   **injectDetails**: podrobnosti skript za zagon, določajo bodisi s `file` ali `code` zakleniti. *(Predmet)*
    
    *   **datoteke**: URL skript injicirati.
    *   **Šifra**: besedilo skript injicirati.

*   **povratni klic**: funkcija, ki se izvede po JavaScript kodo, ki se injicira.
    
    *   Če vbrizga skript tipa `code` , callback izvede posamezen parameter, ki je vrnjena vrednost skript, zavita v na `Array` . Večvrstično skriptov, to je vrnjeno vrednost zadnjega izpiska ali zadnji izraz ovrednotiti.

## Podprte platforme

*   Android
*   BlackBerry
*   iOS

## Quick primer

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    ref.addEventListener('loadstop', function() {
        ref.executeScript({file: "myscript.js"});
    });
    

## Celoten primer

    <!DOCTYPE html>
    <html>
      <head>
        <title>InAppBrowser.executeScript Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // Global InAppBrowser reference
        var iabRef = null;
    
        // Inject our custom JavaScript into the InAppBrowser window
        //
        function replaceHeaderImage() {
            iabRef.executeScript({
                code: "var img=document.querySelector('#header img'); img.src='http://cordova.apache.org/images/cordova_bot.png';"
            }, function() {
                alert("Image Element Successfully Hijacked");
            });
        }
    
        function iabClose(event) {
             iabRef.removeEventListener('loadstop', replaceHeaderImage);
             iabRef.removeEventListener('exit', iabClose);
        }
    
        // device APIs are available
        //
        function onDeviceReady() {
             iabRef = window.open('http://apache.org', '_blank', 'location=yes');
             iabRef.addEventListener('loadstop', replaceHeaderImage);
             iabRef.addEventListener('exit', iabClose);
        }
    
        </script>
      </head>
      <body>
      </body>
    </html>
    

# insertCSS

> Prilije CSS v v `InAppBrowser` okno.

    ref.insertCSS(details, callback);
    

*   **Ref**: sklicevanje na na `InAppBrowser` okna *(InAppBrowser)*

*   **injectDetails**: podrobnosti skript za zagon, določajo bodisi s `file` ali `code` zakleniti. *(Predmet)*
    
    *   **datoteke**: URL stilovima injicirati.
    *   **Šifra**: besedilo s slogi injicirati.

*   **povratni klic**: funkcija, ki se izvede po CSS vbrizga.

## Podprte platforme

*   Android
*   BlackBerry
*   iOS

## Quick primer

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    ref.addEventListener('loadstop', function() {
        ref.insertCSS({file: "mystyles.css"});
    });
    

## Celoten primer

    <!DOCTYPE html>
    <html>
      <head>
        <title>InAppBrowser.insertCSS Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // Global InAppBrowser reference
        var iabRef = null;
    
        // Inject our custom CSS into the InAppBrowser window
        //
        function changeBackgroundColor() {
            iabRef.insertCSS({
                code: "body { background: #ffff00; }"
            }, function() {
                alert("Styles Altered");
            });
        }
    
        function iabClose(event) {
             iabRef.removeEventListener('loadstop', changeBackgroundColor);
             iabRef.removeEventListener('exit', iabClose);
        }
    
        // device APIs are available
        //
        function onDeviceReady() {
             iabRef = window.open('http://apache.org', '_blank', 'location=yes');
             iabRef.addEventListener('loadstop', changeBackgroundColor);
             iabRef.addEventListener('exit', iabClose);
        }
    
        </script>
      </head>
      <body>
      </body>
    </html>
    

# InAppBrowserEvent

Predmet, ki se prenese na povratni klic funkcije iz je `addEventListener` pozivajo na `InAppBrowser` predmeta.

## Lastnosti

*   **Vrsta**: ShowEvent, bodisi `loadstart` , `loadstop` , `loaderror` , ali `exit` . *(Niz)*

*   **URL**: URL, ki je bil naložen. *(Niz)*

*   **Šifra**: koda napake, samo v primeru `loaderror` . *(Število)*

*   **sporočilo**: sporočilo o napaki, samo v primeru `loaderror` . *(Niz)*