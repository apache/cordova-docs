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

Gibt an, ob die Sommerzeit ist in der Tat für ein bestimmtes Datum unter Verwendung des Auftraggebers Zeitzone und Kalender.

    navigator.globalization.isDayLightSavingsTime(date, successCallback, errorCallback);
    

## Beschreibung

Gibt an, ob Sommerzeit ist in der Tat zu den `successCallback` mit einem `properties` -Objekt als Parameter. Dieses Objekt muss eine `dst` Eigenschaft mit einer `Boolean` Wert. A `true` Wert angibt, dass die Sommer-/Winterzeit für das angegebene Datum gültig ist und `false` weist darauf hin, dass es nicht.

Die eingehenden Parameter `date` sollte vom Typ`Date`.

Wenn gibt es einen Lesefehler das Datum der `errorCallback` führt. Erwarteten Fehlercode ist`GlobalizationError.UNKNOWN\_ERROR`.

## Unterstützte Plattformen

*   Android
*   BlackBerry WebWorks (OS 5.0 und höher)
*   iOS
*   Windows Phone 8

## Kleines Beispiel

Im Sommer und wenn der Browser auf eine DST-fähigen Zeitzone festgelegt ist, sollte dies einen Popup-Dialog mit Text ähnlich angezeigt `dst: true` :

    navigator.globalization.isDayLightSavingsTime(
        new Date(),
        function (date) {alert('dst: ' + date.dst + '\n');},
        function () {alert('Error getting names\n');}
    );
    

## Vollständiges Beispiel

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