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

# globalization.getDatePattern

Vrne niz vzorec v oblika ter razčleniti datume glede Strankine želje uporabnikov.

    navigator.globalization.getDatePattern(successCallback, errorCallback, options);
    

## Opis

Vzorec, da vrne v `successCallback` . Predmet, ki je posredovana kot parameter vsebuje naslednje lastnosti:

*   **vzorec**: datum in čas vzorec v oblika ter razčleniti datume. Vzorce sledite [#35 v tehnični Standard Unicode][1]. *(Niz)*

*   **časovni pas**: skrajšano ime časovnega pasu v odjemalcu. *(Niz)*

*   **utc_offset**: trenutno razlika v sekundah med stranke časovni pas in koordiniranim univerzalnim časom. *(Število)*

*   **dst_offset**: sedanji poletni čas zamik v sekundah med odjemalčevo non-poletni je časovni pas in poletni stranke prihranek je časovni pas. *(Število)*

 [1]: http://unicode.org/reports/tr35/tr35-4.html

Če je prišlo do napake pridobivanja vzorec, je `errorCallback` izvede z a `GlobalizationError` predmet, kot parameter. Pričakovani koda napake je`GlobalizationError.PATTERN\_ERROR`.

Na `options` parameter je neobvezen in neplačil naslednje vrednosti:

    {formatLength:'short', selector:'date and time'}
    

Na `options.formatLength` lahko `short` , `medium` , `long` , ali `full` . Na `options.selector` lahko `date` , `time` ali`date and
time`.

## Podprte platforme

*   Android
*   BlackBerry WebWorks 5.0 +
*   iOS
*   Windows Phone 8

## Quick primer

Ko je brskalnik nastavljen na na `en\_US` locale, ta primer prikaže pojavno pogovorno okno z besedilo, kot `pattern: M/d/yyyy h:mm a` :

    function checkDatePattern() {
        navigator.globalization.getDatePattern(
            function (date) { alert('pattern: ' + date.pattern + '\n'); },
            function () { alert('Error getting pattern\n'); },
            { formatLength: 'short', selector: 'date and time' }
        );
    }
    

## Celoten primer

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>getDatePattern Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkDatePattern() {
          navigator.globalization.getDatePattern(
            function (date) {alert('pattern: ' + date.pattern + '\n');},
            function () {alert('Error getting pattern\n');},
            {formatLength:'short', selector:'date and time'}
          );
        }
    
        </script>
      </head>
      <body>
        <button onclick="checkDatePattern()">Click for pattern</button>
      </body>
    </html>
    

## Windows Phone 8 Quirks

*   Na `formatLength` podpira le `short` in `full` vrednosti.

*   Na `pattern` za `date and time` vzorec vrne samo polna oblika zapisa.

*   Na `timezone` vrne ime pasu polni delovni čas.

*   Je `dst_offset` lastnost ni podprta, in vedno vrne nič.