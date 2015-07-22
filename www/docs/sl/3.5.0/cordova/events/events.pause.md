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

# pause

V primeru požarov, ko aplikacija je dal v ozadju.

    document.addEventListener("pause", yourCallbackFunction, false);
    

## Podrobnosti

V `pause` primeru požarov, ko native platformo postavlja program v ozadju, ponavadi ko uporabnik preklopi v drugem programu.

Programi lahko običajno uporabljajo `document.addEventListener` priložiti dogodek poslušalca enkrat na `deviceready` dogodek požarov.

## Podprte platforme

*   Amazon ogenj OS
*   Android
*   BlackBerry 10
*   iOS
*   Windows Phone 7 in 8
*   Windows 8

## Quick primer

    document.addEventListener("pause", onPause, false);
    
    function onPause() {
        // Handle the pause event
    }
    

## Celoten primer

    <!DOCTYPE html>
    <html>
      <head>
        <title>Pause Example</title>
    
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
            document.addEventListener("pause", onPause, false);
        }
    
        // Handle the pause event
        //
        function onPause() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>
    

## iOS Quirks

V je `pause` trener, nobenih klicev Cordova API ali native plugins, ki gredo skozi Objective-C ne dela, skupaj z vse interaktivne klice, kot so opozorila ali `console.log()` . Samo obdelajo ko app preide na naslednjo vožnjo zanke.

IOS-poseben `resign` dogodek, ki je na voljo kot alternativa za `pause` , in zazna, ko uporabnik omogoči **na gumb za zaklepanje naprave z app teče v ospredju** . Če app (in naprave) omogočena večopravilnosti, to je seznanjena s kasnejšega `pause` dogodka, vendar le pod iOS 5. V veljavi, vse Zaklenjeno apps v iOS 5, ki imajo večopravilnosti omogočeno potiska v ozadju. Za apps še vedno teče zaklenjenem pod iOS 5, onesposobiti app je večopravilnosti z nastavitvijo [UIApplicationExitsOnSuspend][1] na `YES` . Pri odpiranju zaklenjen na iOS 4, ta nastavitev ni važno.

 [1]: http://developer.apple.com/library/ios/#documentation/general/Reference/InfoPlistKeyReference/Articles/iPhoneOSKeys.html