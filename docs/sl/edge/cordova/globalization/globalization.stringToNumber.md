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

# globalization.stringToNumber

Razčleni številka, ki je oblikovana kot niz glede na Strankine želje uporabnikov in vrne ustrezno številko.

    navigator.globalization.stringToNumber(string, successCallback, errorCallback, options);
    

## Opis

Vrne število, da je `successCallback` s a `properties` predmet, kot parameter. Ta predmet mora imeti a `value` lastnost z a `Number` vrednost.

Če je napaka razčlenjevanju številka niza, potem je `errorCallback` izvede z a `GlobalizationError` predmet, kot parameter. Pričakovani koda napake je`GlobalizationError.PARSING\_ERROR`.

Na `options` parameter je neobvezen in neplačil naslednje vrednosti:

    {type:'decimal'}
    

Na `options.type` lahko `decimal` , `percent` , ali`currency`.

## Podprte platforme

*   Android
*   BlackBerry WebWorks 5.0 +
*   iOS
*   Windows Phone 8

## Quick primer

Ko je brskalnik nastavljen na na `en\_US` locale, to prikazati ljudstvo pogovorno okno z besedilom, ki je podobna `number: 1234.56` :

    navigator.globalization.stringToNumber(
        '1234.56',
        function (number) {alert('number: ' + number.value + '\n');},
        function () {alert('Error getting number\n');},
        {type:'decimal'}
    );
    

## Celoten primer

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>stringToNumber Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkNumber() {
          navigator.globalization.stringToNumber(
            '1234.56',
            function (number) {alert('number: ' + number.value + '\n');},
            function () {alert('Error getting number\n');},
            {type:'decimal'}
          );
        }
    
        </script>
      </head>
      <body>
        <button onclick="checkNumber()">Click for parsed number</button>
      </body>
    </html>