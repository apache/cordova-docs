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

Analysiert ein Datum formatiert als Zeichenfolge, nach der Client Benutzereinstellungen und Kalender mit der Zeitzone des Clients, und gibt das entsprechende Datumsobjekt zurück.

    navigator.globalization.stringToDate(dateString, successCallback, errorCallback, options);
    

## Beschreibung

Gibt das Datum zurück, an den Erfolg-Rückruf mit einem `properties` -Objekt als Parameter. Das Objekt sollte folgenden Eigenschaften aufweisen:

*   **Jahr**: die vier Digit Year. *(Anzahl)*

*   **Monat**: der Monat ab (0-11). *(Anzahl)*

*   **Tag**: der Tag von (1-31). *(Anzahl)*

*   **Stunde**: die Stunde (0-23). *(Anzahl)*

*   **Minute**: die Minute (0-59). *(Anzahl)*

*   **zweite**: die zweite von (0-59). *(Anzahl)*

*   **Millisekunde**: die Millisekunden (von 0-999), nicht auf allen Plattformen verfügbar. *(Anzahl)*

Die eingehende `dateString` -Parameter des Typs sein sollte`String`.

Die `options` Parameter ist optional und wird mit den folgenden Werten:

    {FormatLength: 'kurz', Selektor: "Datum und Uhrzeit"}
    

Die `options.formatLength` kann `short` , `medium` , `long` , oder `full` . Die `options.selector` kann `date` , `time` oder`date and
time`.

Wenn es ist ein Fehler beim Analysieren der Datumszeichenfolge dann die `errorCallback` führt mit einem `GlobalizationError` -Objekt als Parameter. Erwarteten Fehlercode ist`GlobalizationError.PARSING\_ERROR`.

## Unterstützte Plattformen

*   Android
*   BlackBerry WebWorks (OS 5.0 und höher)
*   iOS
*   Windows Phone 8

## Kleines Beispiel

Wenn der Browser auf festgelegt ist die `en\_US` Gebietsschema, dies zeigt einen Popup-Dialog mit Text ähnlich `month:8 day:25 year:2012` . Beachten Sie, dass im Monat ganze Zahl ist kleiner als die Zeichenfolge AsInteger Monat stellt einen Array-Index.

    navigator.globalization.stringToDate(
        '9/25/2012',
        function (date) {alert('month:' + date.month +
                               ' day:'  + date.day   +
                               ' year:' + date.year  + '\n');},
        function () {alert('Error getting date\n');},
        {selector: 'date'}
    );
    

## Vollständiges Beispiel

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
    

## Windows Phone 8 Macken

*   Die `formatLength` option unterstützt nur `short` und `full` Werte.