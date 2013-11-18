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

# globalization.stringToDate

Razčleni datum formatiran kot niz, glede na Strankine želje uporabnikov in koledar s časovnim pasom odjemalca, in vrne ustrezni datum predmet.

    navigator.globalization.stringToDate(dateString, successCallback, errorCallback, options);
    

## Opis

Vrne datum uspeh povratni klic z a `properties` predmet, kot parameter. Ta predmet mora imeti naslednje lastnosti:

*   **leto**: leto 4-mestno. *(Število)*

*   **mesec**: mesec od (0-11). *(Število)*

*   **dan**: dan (1-31). *(Število)*

*   **uri**: ura iz (0-23). *(Število)*

*   **min**: na minuto (0-59). *(Število)*

*   **drugi**: drugi iz (0-59). *(Število)*

*   **milisekund**: milisekund (od 0-999), ni na voljo na vseh platformah. *(Število)*

Na vhodni `dateString` parameter mora biti vrste`String`.

Na `options` parameter je neobvezen in neplačil naslednje vrednosti:

    {formatLength:'short', selector:'date and time'}
    

Na `options.formatLength` lahko `short` , `medium` , `long` , ali `full` . Na `options.selector` lahko `date` , `time` ali`date and
time`.

Če je prišlo do napake pri razčlenjevanju datum niza, potem je `errorCallback` izvede z a `GlobalizationError` predmet, kot parameter. Pričakovani koda napake je`GlobalizationError.PARSING\_ERROR`.

## Podprte platforme

*   Android
*   BlackBerry WebWorks 5.0 +
*   iOS
*   Windows Phone 8

## Quick primer

Ko je brskalnik nastavljen na na `en\_US` locale, to prikazuje popup pogovorno okno z besedilom, ki je podoben `month:8 day:25 year:2012` . Upoštevajte, da mesec celo je eden manj kot niz, kot celoštevilsko mesecem predstavlja array indeks.

    navigator.globalization.stringToDate(
        '9/25/2012',
        function (date) {alert('month:' + date.month +
                               ' day:'  + date.day   +
                               ' year:' + date.year  + '\n');},
        function () {alert('Error getting date\n');},
        {selector: 'date'}
    );
    

## Celoten primer

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>stringToDate Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkStringDate() {
          navigator.globalization.stringToDate(
            '9/25/2012',
            function (date) {alert('month:' + date.month +
                                   ' day:' + date.day +
                                   ' year:' + date.year + '\n');},
            function () {alert('Error getting date\n');},
            {selector:'date'}
          );
        }
    
        </script>
      </head>
      <body>
        <button onclick="checkStringDate()">Click for parsed date</button>
      </body>
    </html>
    

## Windows Phone 8 Quirks

*   Je `formatLength` možnost podpira samo `short` in `full` vrednosti.