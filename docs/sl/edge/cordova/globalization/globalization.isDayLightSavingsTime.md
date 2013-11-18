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

# globalization.isDayLightSavingsTime

Označuje, ali poletni čas v veljavi za določen dan z uporabo odjemalca časovni pas in koledar.

    navigator.globalization.isDayLightSavingsTime(date, successCallback, errorCallback);
    

## Opis

Označuje, ali naj poletni čas je v veljavi v `successCallback` s a `properties` predmet, kot parameter. Ta predmet mora imeti a `dst` lastnost z a `Boolean` vrednost. A `true` vrednost pomeni, da poletni čas je v veljavi za določen datum, in `false` označuje, da ni.

Vhodni parameter `date` mora biti vrste`Date`.

Če je napaka pri branju datum, potem je `errorCallback` usmrti. Pričakovani koda napake je`GlobalizationError.UNKNOWN\_ERROR`.

## Podprte platforme

*   Android
*   BlackBerry WebWorks 5.0 +
*   iOS
*   Windows Phone 8

## Quick primer

Poleti, in če je brskalnik nastavljen na DST-usposobiti timezone, to prikaže ljudstvo pogovorno okno z besedilom, ki je podobna `dst: true` :

    navigator.globalization.isDayLightSavingsTime(
        new Date(),
        function (date) {alert('dst: ' + date.dst + '\n');},
        function () {alert('Error getting names\n');}
    );
    

## Celoten primer

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>isDayLightSavingsTime Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkDayLightSavings() {
          navigator.globalization.isDayLightSavingsTime(
            new Date(),
            function (date) {alert('dst: ' + date.dst + '\n');},
            function () {alert('Error getting names\n');}
          );
        }
    
        </script>
      </head>
      <body>
        <button onclick="checkDayLightSavings()">Click for daylight savings</button>
      </body>
    </html>