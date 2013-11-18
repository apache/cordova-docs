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

# window.open

Odpre URL v novem `InAppBrowser` stopnje, trenutni primerek obrv ali sistem brskalnik.

    var ref = window.open(url, target, options);
    

*   **Ref**: Reference za na `InAppBrowser` okno. *(InAppBrowser)*

*   **URL**: URL za nalaganje *(niz)*. Pokličite `encodeURI()` na to če URL vsebuje znake Unicode.

*   **cilj**: cilj, da vstavite URL, neobvezni parameter, ki privzeta `_self` . *(Niz)*
    
    *   `_self`: Odpre v Cordova spletni pogled, če URL je na seznamu belih, drugače se odpre v na`InAppBrowser`.
    *   `_blank`: Odpre v na`InAppBrowser`.
    *   `_system`: Odpre v sistema v spletnem brskalniku.

*   **možnosti**: možnosti za v `InAppBrowser` . Neobvezno, privzeto na: `location=yes` . *(Niz)*
    
    Na `options` niz ne sme vsebovati poljuben obrazec prostor, in vsaka funkcija ime/vrednost parih morajo biti ločene z vejico. Funkcija imena malimi črkami. Vseh platformah podporo spodnjih vrednosti:
    
    *   **lokacija**: nastavite na `yes` ali `no` obrniti na `InAppBrowser` 's namestitev zasova ali izklop.
    
    Android samo:
    
    *   **closebuttoncaption**: nastavljena na niz rabiti kot gumb **storiti** napis.
    *   **skrite**: nastavite na `yes` za ustvarjanje brskalnik in nalaganje strani, vendar ne kažejo. Obremenitev primeru požarov, ko je nalaganje končano. Izpustiti ali nastavite na `no` (privzeto) imeti brskalnik odpreti in običajno obremenitev. 
    *   **clearcache**: naj `yes` imeti brskalnik je piškotek predpomnilnika obračunavajo preden se odpre novo okno
    *   **clearsessioncache**: nastavite na `yes` da so seje piškotek predpomnilnika obračunavajo preden se odpre novo okno
    
    iOS samo:
    
    *   **closebuttoncaption**: nastavljena na niz rabiti kot gumb **storiti** napis. Upoštevajte, da morate sami lokalizirati ta vrednost.
    *   **skrite**: nastavite na `yes` za ustvarjanje brskalnik in nalaganje strani, vendar ne kažejo. Obremenitev primeru požarov, ko je nalaganje končano. Izpustiti ali nastavite na `no` (privzeto) imeti brskalnik odpreti in običajno obremenitev. 
    *   **orodne vrstice**: nastavite na `yes` ali `no` vrteti v orodni vrstici, ali izklopite za InAppBrowser (privzete nastavitve za`yes`)
    *   **enableViewportScale**: nastavite na `yes` ali `no` za preprečevanje pogledov, luščenje skozi meta tag (privzeta vrednost je`no`).
    *   **mediaPlaybackRequiresUserAction**: nastavite na `yes` ali `no` za preprečevanje HTML5, avdio ali video iz autoplaying (privzeta vrednost je`no`).
    *   **allowInlineMediaPlayback**: nastavite na `yes` ali `no` omogočiti predvajanje medijev-line HTML5, prikazom v oknu brskalnika, namesto napravah predvajanje vmesnik. V HTML `video` elementa mora vključevati tudi na `webkit-playsinline` atribut (privzeta vrednost je`no`)
    *   **keyboardDisplayRequiresUserAction**: nastavite na `yes` ali `no` odpreti tipkovnice, ko obrazec elementi fokus prek JavaScript je `focus()` klic (privzeto`yes`).
    *   **suppressesIncrementalRendering**: nastavite na `yes` ali `no` počakati, dokler vse novo vsebino pogleda prejme pred upodabljanje (privzeta vrednost je`no`).
    *   **presentationstyle**: nastavljena na `pagesheet` , `formsheet` ali `fullscreen` nastaviti [predstavitev slog][1] (privzeta vrednost je`fullscreen`).
    *   **transitionstyle**: nastavljena na `fliphorizontal` , `crossdissolve` ali `coververtical` nastaviti [prehod stil][2] (privzeta vrednost je`coververtical`).

 [1]: http://developer.apple.com/library/ios/documentation/UIKit/Reference/UIViewController_Class/Reference/Reference.html#//apple_ref/occ/instp/UIViewController/modalPresentationStyle
 [2]: http://developer.apple.com/library/ios/#documentation/UIKit/Reference/UIViewController_Class/Reference/Reference.html#//apple_ref/occ/instp/UIViewController/modalTransitionStyle

## Podprte platforme

*   Android
*   BlackBerry
*   iOS
*   Windows Phone 7 in 8

## Quick primer

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    var ref2 = window.open(encodeURI('http://ja.m.wikipedia.org/wiki/ハングル'), '_blank', 'location=yes');
    

## Celoten primer

    <!DOCTYPE html>
    <html>
      <head>
        <title>window.open Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            // external url
            var ref = window.open(encodeURI('http://apache.org'), '_blank', 'location=yes');
            // relative document
            ref = window.open('next.html', '_self');
        }
    
        </script>
      </head>
      <body>
      </body>
    </html>