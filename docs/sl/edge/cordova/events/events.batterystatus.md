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

# batterystatus

V primeru požarov, ko se spremeni stanje baterije.

    window.addEventListener("batterystatus", yourCallbackFunction, false);
    

## Podrobnosti

Ta dogodek požari, ko odstotek polnosti akumulatorja spremeni z vsaj 1 odstotek ali če napravo je priključen na električno omrežje ali odklopljen.

Topniška jedinica stalež trener je minilo predmeta, ki vsebuje dve lastnosti:

*   **raven**: odstotek polnosti akumulatorja (0-100). *(Število)*

*   **isPlugged**: logična vrednost, ki označuje, ali je napravo priključen palca *(Boolean)*

Programi lahko običajno uporabljajo `window.addEventListener` priložiti dogodek poslušalca enkrat na `deviceready` dogodek požarov.

## Podprte platforme

*   iOS
*   Android
*   BlackBerry WebWorks 5.0 +
*   Windows Phone 7 in 8
*   Tizen

## Windows Phone 7 in 8 Quirks

Windows Phone 7 ne zagotavlja native API ugotoviti stanje akumulatorja, zato je `level` lastnost ni na voljo. Na `isPlugged` parameter *je* podprta.

## Quick primer

    window.addEventListener("batterystatus", onBatteryStatus, false);
    
    function onBatteryStatus(info) {
        // Handle the online event
        console.log("Level: " + info.level + " isPlugged: " + info.isPlugged);
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
            window.addEventListener("batterystatus", onBatteryStatus, false);
        }
    
        // Handle the batterystatus event
        //
        function onBatteryStatus(info) {
            console.log("Level: " + info.level + " isPlugged: " + info.isPlugged);
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>