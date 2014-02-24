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

Gibt ein Datum formatiert als Zeichenfolge nach dem Client Gebietsschema und Zeitzone.

    navigator.globalization.dateToString(date, successCallback, errorCallback, options);
    

## Beschreibung

Gibt das formatierte Datum `String` über eine `value` -Eigenschaft zugänglich aus dem Objekt übergeben als Parameter für die`successCallback`.

Die eingehende `date` -Parameter des Typs sein sollte`Date`.

Wenn ein Fehler, die Formatierung des Datums vorliegt dann die `errorCallback` führt mit einem `GlobalizationError` -Objekt als Parameter. Erwarteten Fehlercode ist`GlobalizationError.FORMATTING\_ERROR`.

Die `options` Parameter ist optional, und die Standardwerte sind:

    {FormatLength: 'kurz', Selektor: "Datum und Uhrzeit"}
    

Die `options.formatLength` kann `short` , `medium` , `long` , oder`full`.

Die `options.selector` kann `date` , `time` oder`date and time`.

## Unterstützte Plattformen

*   Android
*   BlackBerry WebWorks (OS 5.0 und höher)
*   iOS
*   Windows Phone 8

## Kleines Beispiel

Wenn der Browser so, dass eingestellt ist die `en\_US` Gebietsschema, dies zeigt einen Popup-Dialog mit Text ähnlich wie `date: 9/25/2012 4:21PM` mit den Standardoptionen:

    navigator.globalization.dateToString(
        new Date(),
        function (date) { alert('date: ' + date.value + '\n'); },
        function () { alert('Error getting dateString\n'); },
        { formatLength: 'short', selector: 'date and time' }
    );
    

## Vollständiges Beispiel

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
    

## Windows Phone 8 Macken

*   Die `formatLength` option unterstützt nur `short` und `full` Werte.