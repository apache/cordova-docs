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

# globalization.numberToString

Vrne število, ki je oblikovano kot niz glede na Strankine želje uporabnikov.

    navigator.globalization.numberToString(number, successCallback, errorCallback, options);
    

## Opis

Vrne oblikovano številko niz v `successCallback` s a `properties` predmet, kot parameter. Ta predmet mora imeti a `value` lastnost z a `String` vrednost.

Če je napaka oblikovanja številko, potem je `errorCallback` izvede z a `GlobalizationError` predmet, kot parameter. Pričakovani koda napake je`GlobalizationError.FORMATTING\_ERROR`.

Na `options` parameter je neobvezen in njegove privzete vrednosti so:

    {type:'decimal'}
    

Na `options.type` lahko "decimalni", "procent" ali "valuta".

## Podprte platforme

*   Android
*   BlackBerry WebWorks 5.0 +
*   iOS
*   Windows Phone 8

## Quick primer

Ko je brskalnik nastavljen na na `en\_US` locale, to prikazuje popup pogovorno okno z besedilom, ki je podobna `number: 3.142` :

    navigator.globalization.numberToString(
        3.1415926,
        function (number) {alert('number: ' + number.value + '\n');},
        function () {alert('Error getting number\n');},
        {type:'decimal'}
    );
    

## Celoten primer

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>numberToString Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkNumber() {
          navigator.globalization.numberToString(
            3.1415926,
            function (number) {alert('number: ' + number.value + '\n');},
            function () {alert('Error getting number\n');},
            {type:'decimal'}
          );
        }
    
        </script>
      </head>
      <body>
        <button onclick="checkNumber()">Click for number</button>
      </body>
    </html>