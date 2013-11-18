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

# online

Ta dogodek požari, ko gre online aplikacija in naprava postane povezana z internetom.

    document.addEventListener("online", yourCallbackFunction, false);
    

## Podrobnosti

V `online` primeru požarov, ko prej nepovezanih naprava prejme povezavo omrežja dovoljevanje uporabe dostopa do interneta. Opira na iste informacije kot povezave API, in ko požari vrednost `connection.type` postane`NONE`.

Programi lahko običajno uporabljajo `document.addEventListener` priložiti dogodek poslušalca enkrat na `deviceready` dogodek požarov.

## Podprte platforme

*   Android
*   BlackBerry WebWorks 5.0 +
*   iOS
*   Windows Phone 7 in 8
*   Tizen
*   Windows 8

## Quick primer

    document.addEventListener("online", onOnline, false);
    
    function onOnline() {
        // Handle the online event
    }
    

## Celoten primer

    <!DOCTYPE html>
    <html>
      <head>
        <title>Online Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        function onLoad() {
            document.addEventListener("online", onOnline, false);
            document.addEventListener("deviceready", onDeviceReady, false);
        }
    
        // device APIs are available
        //
        function onDeviceReady() {
        }
    
        // Handle the online event
        //
        function onOnline() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>
    

## iOS Quirks

Med početen začetek, prvi `online` dogodek (po potrebi) traja vsaj drugo na ogenj, pred katerega `connection.type` je`UNKNOWN`.

## Windows Phone 7 Quirks

Ko teče v Emulator, v `connection.status` je vedno neznana, torej ta dogodek ne *ne* ogenj.

## Windows Phone 8 Quirks

Emulator poročila vrsto povezave kot `Cellular` , ki ne spremeni, torej dogodkov ne *ne* ogenj.