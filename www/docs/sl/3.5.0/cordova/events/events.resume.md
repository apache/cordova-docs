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

# resume

V primeru požarov, ko aplikacija pridobi iz ozadja.

    document.addEventListener("resume", yourCallbackFunction, false);
    

## Podrobnosti

V `resume` primeru požarov, ko native platformo izpuli uporabo iz ozadja.

Programi lahko običajno uporabljajo `document.addEventListener` priložiti dogodek poslušalca enkrat na `deviceready` dogodek požarov.

## Podprte platforme

*   Amazon ogenj OS
*   Android
*   BlackBerry 10
*   iOS
*   Windows Phone 7 in 8
*   Windows 8

## Quick primer

    document.addEventListener("resume", onResume, false);
    
    function onResume() {
        // Handle the resume event
    }
    

## Celoten primer

    <!DOCTYPE html>
    <html>
      <head>
        <title>Resume Example</title>
    
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
            document.addEventListener("resume", onResume, false);
        }
    
        // Handle the resume event
        //
        function onResume() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>
    

## iOS Quirks

Vse interaktivne funkcije, ki se imenuje iz a `pause` rutine izvršiti kasneje, ko app začne znova, kot signal za `resume` dogodek. Ti vključujejo opozorila, `console.log()` , in vse klice iz plugins ali Cordova API, ki gredo skozi Objective-C.

*   **aktivno** dogodek
    
    IOS-poseben `active` dogodek, ki je na voljo kot alternativa za `resume` , in zazna, ko uporabnik onesposobiti gumba za **zaklepanje** za odklepanje naprave z app teče v ospredju. Če app (in naprave) omogočena večopravilnosti, to je seznanjena s kasnejšega `resume` dogodka, vendar le pod iOS 5. V veljavi, vse Zaklenjeno apps v iOS 5, ki imajo večopravilnosti omogočeno potiska v ozadju. Za apps še vedno teče zaklenjenem pod iOS 5, onesposobiti app je večopravilnosti z nastavitvijo [UIApplicationExitsOnSuspend][1] na `YES` . Pri odpiranju zaklenjen na iOS 4, ta nastavitev ni važno.

*   **strnjen** dogodek
    
    Kadar je klican iz a `resume` rutine, interaktivnih funkcij, kot `alert()` morali zaviti v a `setTimeout()` klic s timeout vrednost nič ali pa visi app. Na primer:
    
        document.addEventListener("resume", onResume, false);
        function onResume() {
           setTimeout(function() {
                  // TODO: do your thing!
                }, 0);
        }
        

 [1]: http://developer.apple.com/library/ios/#documentation/general/Reference/InfoPlistKeyReference/Articles/iPhoneOSKeys.html