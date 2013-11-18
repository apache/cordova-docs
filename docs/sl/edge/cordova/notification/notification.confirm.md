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

# notification.confirm

Prikaže pogovorno okno customizable potrditev.

    navigator.notification.confirm(message, confirmCallback, [title], [buttonLabels])
    

*   **sporočilo**: dialogičen vest. *(Niz)*

*   **confirmCallback**: povratni klic pozvati z indeksom gumb pritisnjen (1, 2 ali 3) ali pogovorno okno je zavrniti, pritisnite gumb (0). *(Funkcija)*

*   **naslov**: pogovorno okno naslov. *(Niz)* (Neobvezno, privzete nastavitve za`Confirm`)

*   **buttonLabels**: polje nizov navajanje oznak gumb. *(Array)* (Neobvezno, privzete nastavitve za [ `OK,Cancel` ])

## Opis

Na `notification.confirm` način prikaže native pogovorno, ki je bolj prilagodljive kot brskalnika `confirm` funkcijo.

## confirmCallback

Na `confirmCallback` izvede, ko uporabnik pritisne enega od gumbov v pogovorno okno za potrditev.

Povratni klic prevzame argument `buttonIndex` *(število)*, ki je indeks gumb pritisnjen. Indeks uporablja eno temelji indeksiranje, tako da je vrednost `1` , `2` , `3` , itd.

## Podprte platforme

*   Android
*   BlackBerry WebWorks 5.0 +
*   iOS
*   Tizen
*   Windows Phone 7 in 8
*   Windows 8

## Quick primer

    // process the confirmation dialog result
    function onConfirm(buttonIndex) {
        alert('You selected button ' + buttonIndex);
    }
    
    // Show a custom confirmation dialog
    //
    function showConfirm() {
        navigator.notification.confirm(
            'You are the winner!', // message
             onConfirm,            // callback to invoke with index of button pressed
            'Game Over',           // title
            ['Restart','Exit']         // buttonLabels
        );
    }
    

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
    
        // process the confirmation dialog result
        function onConfirm(buttonIndex) {
            alert('You selected button ' + buttonIndex);
        }
    
        // Show a custom confirmation dialog
        //
        function showConfirm() {
            navigator.notification.confirm(
                'You are the winner!', // message
                 onConfirm,            // callback to invoke with index of button pressed
                'Game Over',           // title
                ['Restart','Exit']         // buttonLabels
            );
        }
    
        </script>
      </head>
      <body>
        <p><a href="#" onclick="showConfirm(); return false;">Show Confirm</a></p>
      </body>
    </html>
    

## Windows Phone 7 in 8 Quirks

*   Tam je ne zidava-v obrv opravilo za `window.confirm` , vendar lahko povežete z dodelitvijo:
    
        window.confirm = navigator.notification.confirm;
        

*   Poziva k `alert` in `confirm` so non-blokiranje, tako da rezultat je na voljo samo asinhrono.