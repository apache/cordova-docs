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

# globalization.getCurrencyPattern

Vrne niz vzorec v oblika ter razčleniti vrednosti valut glede na Strankine želje uporabnikov in šifro valute ISO 4217.

     navigator.globalization.getCurrencyPattern(currencyCode, successCallback, errorCallback);
    

## Opis

Vrne vzorec, da se `successCallback` s a `properties` predmet, kot parameter. Ta predmet mora vsebovati naslednje lastnosti:

*   **vzorec**: vzorec valuta formatiranje in razčleniti vrednosti valut. Vzorce sledite [#35 v tehnični Standard Unicode][1]. *(Niz)*

*   **Šifra**: ISO 4217 koda valute za vzorec. *(Niz)*

*   **ulomek**: število delno števk za uporabo pri razčlenjevanju in oblikovanje valute. *(Število)*

*   **zaokroževanje**: zaokroževanje prirastek za uporabo pri razčlenjevanju in oblikovanje. *(Število)*

*   **decimalno**: decimalni simbol za razčlenjevanje in oblikovanje. *(Niz)*

*   **združevanje**: simbol za združevanje za razčlenjevanje in oblikovanje. *(Niz)*

 [1]: http://unicode.org/reports/tr35/tr35-4.html

Na vhodni `currencyCode` parameter mora biti na `String` ene od ISO 4217 šifre valut, na primer "USD".

Če je prišlo do napake pridobivanja vzorec, potem je `errorCallback` izvede z a `GlobalizationError` predmet, kot parameter. Pričakovani koda napake je`GlobalizationError.FORMATTING\_ERROR`.

## Podprte platforme

*   Android
*   BlackBerry WebWorks 5.0 +
*   iOS

## Quick primer

Ko je brskalnik nastavljen na na `en\_US` locale in izbrana valuta je ZDA dolarjev, ta primer prikaže pojavno pogovorno okno z besedilo podobne rezultate, ki sledijo:

    navigator.globalization.getCurrencyPattern(
        'USD',
        function (pattern) {
            alert('pattern: '  + pattern.pattern  + '\n' +
                  'code: '     + pattern.code     + '\n' +
                  'fraction: ' + pattern.fraction + '\n' +
                  'rounding: ' + pattern.rounding + '\n' +
                  'decimal: '  + pattern.decimal  + '\n' +
                  'grouping: ' + pattern.grouping);
        },
        function () { alert('Error getting pattern\n'); }
    );
    

Pričakovan rezultat:

    pattern: $#,##0.##;($#,##0.##)
    code: USD
    fraction: 2
    rounding: 0
    decimal: .
    grouping: ,
    

## Celoten primer

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>getCurrencyPattern Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkPattern() {
          navigator.globalization.getCurrencyPattern(
            'USD',
            function (pattern) {alert('pattern: '  + pattern.pattern  + '\n' +
                                      'code: '     + pattern.code     + '\n' +
                                      'fraction: ' + pattern.fraction + '\n' +
                                      'rounding: ' + pattern.rounding + '\n' +
                                      'decimal: '  + pattern.decimal  + '\n' +
                                      'grouping: ' + pattern.grouping);},
            function () {alert('Error getting pattern\n');}
          );
        }
    
        </script>
      </head>
      <body>
        <button onclick="checkPattern()">Click for pattern</button>
      </body>
    </html>