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

# globalization.getNumberPattern

Vrne niz vzorec v oblika ter razčleniti številke glede na Strankine želje uporabnikov.

    navigator.globalization.getNumberPattern(successCallback, errorCallback, options);
    

## Opis

Vrne vzorec, da se `successCallback` s a `properties` predmet, kot parameter. Ta predmet vsebuje naslednje lastnosti:

*   **vzorec**: število vzorec v oblika ter razčleniti številke. Vzorce sledite [#35 v tehnični Standard Unicode][1]. *(Niz)*

*   **simbol**: simbol rabiti čas oblikovanje ter razčlenjevanje, kot simbol odstotkov ali valuto. *(Niz)*

*   **ulomek**: število delno števk za uporabo pri razčlenjevanju in oblikovanje številk. *(Število)*

*   **zaokroževanje**: zaokroževanje prirastek za uporabo pri razčlenjevanju in oblikovanje. *(Število)*

*   **pozitivno**: simbol za pozitivna števila pri razčlenjevanju in oblikovanje. *(Niz)*

*   **negativno**: simbol za negativna števila pri razčlenjevanju in oblikovanje. *(Niz)*

*   **decimalno**: decimalni simbol za razčlenjevanje in oblikovanje. *(Niz)*

*   **združevanje**: simbol za združevanje za razčlenjevanje in oblikovanje. *(Niz)*

 [1]: http://unicode.org/reports/tr35/tr35-4.html

Če je prišlo do napake pridobivanja vzorec, potem je `errorCallback` izvede z a `GlobalizationError` predmet, kot parameter. Pričakovani koda napake je`GlobalizationError.PATTERN\_ERROR`.

Na `options` parameter je neobvezen in privzete vrednosti so:

    {type:'decimal'}
    

Na `options.type` lahko `decimal` , `percent` , ali`currency`.

## Podprte platforme

*   Android
*   BlackBerry WebWorks 5.0 +
*   iOS
*   Windows Phone 8

## Quick primer

Ko je brskalnik nastavljen na na `en\_US` locale, to prikazati pogovorno okno ljudstvo z besedilom podobne rezultate, ki sledijo:

    navigator.globalization.getNumberPattern(
        function (pattern) {alert('pattern: '  + pattern.pattern  + '\n' +
                                  'symbol: '   + pattern.symbol   + '\n' +
                                  'fraction: ' + pattern.fraction + '\n' +
                                  'rounding: ' + pattern.rounding + '\n' +
                                  'positive: ' + pattern.positive + '\n' +
                                  'negative: ' + pattern.negative + '\n' +
                                  'decimal: '  + pattern.decimal  + '\n' +
                                  'grouping: ' + pattern.grouping);},
        function () {alert('Error getting pattern\n');},
        {type:'decimal'}
    );
    

Rezultati:

    pattern: #,##0.###
    symbol: .
    fraction: 0
    rounding: 0
    positive:
    negative: -
    decimal: .
    grouping: ,
    

## Celoten primer

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>getNumberPattern Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkPattern() {
          navigator.globalization.getNumberPattern(
            function (pattern) {alert('pattern: '  + pattern.pattern  + '\n' +
                                      'symbol: '   + pattern.symbol   + '\n' +
                                      'fraction: ' + pattern.fraction + '\n' +
                                      'rounding: ' + pattern.rounding + '\n' +
                                      'positive: ' + pattern.positive + '\n' +
                                      'negative: ' + pattern.negative + '\n' +
                                      'decimal: '  + pattern.decimal  + '\n' +
                                      'grouping: ' + pattern.grouping);},
            function () {alert('Error getting pattern\n');},
            {type:'decimal'}
          );
        }
    
        </script>
      </head>
      <body>
        <button onclick="checkPattern()">Click for pattern</button>
      </body>
    </html>
    

## Windows Phone 8 Quirks

*   Je `pattern` lastnost ni podprta, in retuens prazen niz.

*   Je `fraction` lastnost ni podprta, in vrne nič.