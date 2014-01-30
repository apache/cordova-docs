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

# notification.prompt

Prikazuje customizable pozivno pogovorno.

    navigator.notification.prompt(message, promptCallback, [title], [buttonLabels], [defaultText])
    

*   **sporočilo**: dialogičen vest. *(Niz)*

*   **promptCallback**: povratni klic pozvati, ko je gumb pritisnjen. *(Funkcija)*

*   **naslov**: pogovorno okno naslova *(niz)* (neobvezno, privzete nastavitve za`Prompt`)

*   **buttonLabels**: polje nizov, ki določajo gumb oznake *(Array)* (neobvezno, privzete nastavitve za`["OK","Cancel"]`)

*   **defaultText**: privzeti učbenik vhodne vrednosti ( `String` ) (neobvezno, privzeto: prazen niz)

## Opis

Na `notification.prompt` način prikaže native pogovorno, ki je bolj prilagodljive kot brskalnika `prompt` funkcijo.

## promptCallback

Na `promptCallback` izvede, ko uporabnik pritisne enega od gumbov v pogovorno okno poziva. Z `results` predmet, ki se prenese na povratni klic vsebuje naslednje lastnosti:

*   **buttonIndex**: indeks gumb pritisnjen. *(Število)* Indeks uporablja eno temelji indeksiranje, tako da je vrednost `1` , `2` , `3` , itd.

*   **input1**: besedilo vnesli v pogovorno okno poziva. *(Niz)*

## Podprte platforme

*   Android
*   iOS

## Quick primer

    // process the promp dialog results
    function onPrompt(results) {
        alert("You selected button number " + results.buttonIndex + " and entered " + results.input1);
    }
    
    // Show a custom prompt dialog
    //
    function showPrompt() {
        navigator.notification.prompt(
            'Please enter your name',  // message
            onPrompt,                  // callback to invoke
            'Registration',            // title
            ['Ok','Exit'],             // buttonLabels
            'Jane Doe'                 // defaultText
        );
    }
    

## Celoten primer

    <!DOCTYPE html>
    <html>
      <head>
        <title>Notification Prompt Dialog Example</title>
    
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
    
        // process the promptation dialog result
        function onPrompt(results) {
            alert("You selected button number " + results.buttonIndex + " and entered " + results.input1);
        }
    
        // Show a custom prompt dialog
        //
        function showPrompt() {
            navigator.notification.prompt(
                'Please enter your name',  // message
                onPrompt,                  // callback to invoke
                'Registration',            // title
                ['Ok','Exit'],             // buttonLabels
                'Jane Doe'                 // defaultText
            );
        }
    
        </script>
      </head>
      <body>
        <p><a href="#" onclick="showPrompt(); return false;">Show Prompt</a></p>
      </body>
    </html>
    

## Android Quirks

*   Android podpira največ tri gumbe, in ne upošteva več kot to.

*   Na Android 3.0 in kasneje, gumbi so prikazani v obratnem vrstnem redu za naprave, ki uporabljajo Holo tema.