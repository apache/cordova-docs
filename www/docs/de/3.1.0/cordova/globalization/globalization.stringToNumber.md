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

Analysiert eine Zahl als Zeichenfolge nach dem Client-Benutzer-Einstellungen formatiert und gibt die entsprechende Nummer zurück.

    navigator.globalization.stringToNumber(string, successCallback, errorCallback, options);
    

## Beschreibung

Liefert die Anzahl an der `successCallback` mit einem `properties` -Objekt als Parameter. Dieses Objekt muss eine `value` Eigenschaft mit einer `Number` Wert.

Wenn es ist ein Fehler beim Analysieren der Zeichenfolge, dann die `errorCallback` führt mit einem `GlobalizationError` -Objekt als Parameter. Erwarteten Fehlercode ist`GlobalizationError.PARSING\_ERROR`.

Die `options` Parameter ist optional und wird mit den folgenden Werten:

    {Typ: "decimal"}
    

Die `options.type` kann `decimal` , `percent` , oder`currency`.

## Unterstützte Plattformen

*   Android
*   BlackBerry WebWorks (OS 5.0 und höher)
*   iOS
*   Windows Phone 8

## Kleines Beispiel

Wenn der Browser auf festgelegt ist die `en\_US` Gebietsschema, dies sollte einen Popup-Dialog mit Text ähnlich anzeigen `number: 1234.56` :

    navigator.globalization.stringToNumber(
        '1234.56',
        function (number) {alert('number: ' + number.value + '\n');},
        function () {alert('Error getting number\n');},
        {type:'decimal'}
    );
    

## Vollständiges Beispiel

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