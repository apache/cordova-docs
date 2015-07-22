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

# deviceready

V primeru požarov, ko Cordova je v celoti naložen.

    document.addEventListener("deviceready", yourCallbackFunction, false);
    

## Podrobnosti

Ta dogodek je bistvenega pomena za vsako uporabo. Kaže da osebe Cordova naprava API natovorjen in so pripravljeni za dostop.

Cordoba je sestavljena iz dveh baz zbornik: native in JavaScript. Medtem ko domorodno kodo obremenitve, prikaže sliko po meri. Vendar pa JavaScript naloži le nekoč DOM obremenitve. To pomeni, web app lahko potencialno klic Cordova JavaScript funkcije, preden postane na voljo ustrezno native kodo.

V `deviceready` primeru požarov, ko je pri polni obremenitvi Cordova. Enkrat dogodek požari, boste lahko varno klice v Cordova API. Aplikacije običajno pripisujejo dogodek poslušalca z `document.addEventListener` ko je dokument HTML DOM naložen.

V `deviceready` primeru obnaša nekoliko drugače od drugih. Rutina za vse registrirane po v `deviceready` dogodek požarov je svoj povratni klic funkcije takoj poklicati.

## Podprte platforme

*   Amazon ogenj OS
*   Android
*   BlackBerry 10
*   iOS
*   Tizen
*   Windows Phone 7 in 8
*   Windows 8

## Quick primer

    document.addEventListener("deviceready", onDeviceReady, false);
    
    function onDeviceReady() {
        // Now safe to use device APIs
    }
    

## Celoten primer

    <!DOCTYPE html>
    <html>
      <head>
        <title>Device Ready Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }
    
        // device APIs are available
        //
        function onDeviceReady() {
            // Now safe to use device APIs
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>