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

# globalization.dateToString

Vrne datum formatiran niz glede na Strankine območne nastavitve in časovni pas.

    navigator.globalization.dateToString(date, successCallback, errorCallback, options);
    

## Opis

Vrne oblikovan datum `String` preko a `value` nepremičnin, dostopni iz predmeta sprejet kot parameter za na`successCallback`.

Na vhodni `date` parameter mora biti vrste`Date`.

Če je napaka oblikovanja datuma, potem je `errorCallback` izvede z a `GlobalizationError` predmet, kot parameter. Pričakovani koda napake je`GlobalizationError.FORMATTING\_ERROR`.

Na `options` parameter je neobvezen in njegove privzete vrednosti so:

    {formatLength:'short', selector:'date and time'}
    

Na `options.formatLength` lahko `short` , `medium` , `long` , ali`full`.

Na `options.selector` lahko `date` , `time` ali`date and time`.

## Podprte platforme

*   Android
*   BlackBerry WebWorks 5.0 +
*   iOS
*   Windows Phone 8

## Quick primer

Če je brskalnik nastavljen tako, je `en\_US` locale, to prikazuje popup pogovorno okno z besedilom, ki je podoben `date: 9/25/2012 4:21PM` z uporabo privzete možnosti:

    navigator.globalization.dateToString(
        new Date(),
        function (date) { alert('date: ' + date.value + '\n'); },
        function () { alert('Error getting dateString\n'); },
        { formatLength: 'short', selector: 'date and time' }
    );
    

## Celoten primer

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>dateToString Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkDateString() {
          navigator.globalization.dateToString(
            new Date(),
            function (date) {alert('date: ' + date.value + '\n');},
            function () {alert('Error getting dateString\n');,
            {formatLength:'short', selector:'date and time'}}
          );
        }
        </script>
      </head>
      <body>
        <button onclick="checkDateString()">Click for date string</button>
      </body>
    </html>
    

## Windows Phone 8 Quirks

*   Je `formatLength` možnost podpira samo `short` in `full` vrednosti.