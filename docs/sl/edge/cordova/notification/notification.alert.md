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

# Notification.Alert

Prikazuje po meri opozorilo ali dialogičen škatla.

    navigator.notification.alert(message, alertCallback, [title], [buttonName])
    

*   **sporočilo**: dialogičen vest. *(Niz)*

*   **alertCallback**: povratni klic pozvati, ko je zavrnilo buden dialogičen. *(Funkcija)*

*   **naslov**: pogovorno okno naslov. *(Niz)* (Neobvezno, privzete nastavitve za`Alert`)

*   **buttonName**: ime gumba. *(Niz)* (Neobvezno, privzete nastavitve za`OK`)

## Opis

Večina implementacije Cordova native pogovornim oknom za to funkcijo, vendar nekateri platform uporabo brskalnika `alert` funkcijo, ki je običajno manj prilagodljive.

## Podprte platforme

*   Android
*   BlackBerry WebWorks 5.0 +
*   iOS
*   Tizen
*   Windows Phone 7 in 8
*   Windows 8

## Quick primer

    // Android / BlackBerry WebWorks 5.0+ / iOS / Tizen
    //
    function alertDismissed() {
        // do something
    }
    
    navigator.notification.alert(
        'You are the winner!',  // message
        alertDismissed,         // callback
        'Game Over',            // title
        'Done'                  // buttonName
    );
    

## Celoten primer

    <!DOCTYPE html>
    <html>
      <head>
        <title>Notification Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            // Empty
        }
    
        // alert dialog dismissed
            function alertDismissed() {
                // do something
            }
    
        // Show a custom alertDismissed
        //
        function showAlert() {
            navigator.notification.alert(
                'You are the winner!',  // message
                alertDismissed,         // callback
                'Game Over',            // title
                'Done'                  // buttonName
            );
        }
    
        </script>
      </head>
      <body>
        <p><a href="#" onclick="showAlert(); return false;">Show Alert</a></p>
      </body>
    </html>
    

## Windows Phone 7 in 8 Quirks

*   Tam je ne zidava-v obrv opozorilo, vendar lahko veže en takole je `alert()` v svetovnem obsegu:
    
        window.alert = navigator.notification.alert;
        

*   Tako `alert` in `confirm` so non-blokiranje klicev, rezultati, ki so na voljo le asinhrono.