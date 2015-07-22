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

# globalization.getCurrencyPattern

Gibt eine Musterzeichenfolge zum Formatieren und Analysieren von Währungswerten nach Benutzereinstellungen und ISO 4217 Währungscode des Kunden.

     navigator.globalization.getCurrencyPattern(currencyCode, successCallback, errorCallback);
    

## Beschreibung

Gibt das Muster auf der `successCallback` mit einem `properties` -Objekt als Parameter. Das Objekt sollte die folgenden Eigenschaften enthalten:

*   **Muster**: das Währung-Muster zur Formatierung und zum Analysieren von Währungswerten. Die Muster folgen Unicode Technical Standard #35. <http://unicode.org/reports/tr35/tr35-4.html>. *(String)*

*   **Code**: der ISO-4217-Währungscode für das Muster. *(String)*

*   **Bruch**: die Anzahl von Bruchziffern zum analysieren und Formatieren einer Währung verwendet. *(Anzahl)*

*   **Rundung**: die Rundung erhöhen wenn analysieren und formatieren verwenden. *(Anzahl)*

*   **Dezimal**: das Dezimaltrennzeichen verwenden für analysieren und formatieren. *(String)*

*   **Gruppieren**: das Symbol für Zifferngruppierung zum analysieren und formatieren verwenden. *(String)*

Die eingehende `currencyCode` Parameter sollte ein `String` einer der ISO 4217 Währungscodes, z. B. 'USD'.

Wenn ein Fehler, erhalten das Muster vorliegt dann die `errorCallback` führt mit einem `GlobalizationError` -Objekt als Parameter. Erwarteten Fehlercode ist`GlobalizationError.FORMATTING\_ERROR`.

## Unterstützte Plattformen

*   Android
*   BlackBerry WebWorks (OS 5.0 und höher)
*   iOS

## Kleines Beispiel

Wenn der Browser auf festgelegt ist die `en\_US` Gebietsschema und die gewählte Währung ist US-Dollar, in diesem Beispiel wird einen Popup-Dialog mit Text ähnlich wie die Ergebnisse, die Folgen:

    navigator.globalization.getCurrencyPattern(
        'USD',
        function (pattern) {
            alert('pattern: '  + pattern.pattern  + '\n' +
                  'code: '     + pattern.code     + '\n' +
                  'fraction: ' + pattern.fraction + '\n' +
                  'rounding: ' + pattern.rounding + '\n' +
                  'decimal: '  + pattern.decimal  + '\n' +
                  'grouping: ' + pattern.grouping);
        },
        function () { alert('Error getting pattern\n'); }
    );
    

Erwartete Ergebnis:

    pattern: $#,##0.##;($#,##0.##)
    code: USD
    fraction: 2
    rounding: 0
    decimal: .
    grouping: ,
    

## Vollständiges Beispiel

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>getCurrencyPattern Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkPattern() {
          navigator.globalization.getCurrencyPattern(
            'USD',
            function (pattern) {alert('pattern: '  + pattern.pattern  + '\n' +
                                      'code: '     + pattern.code     + '\n' +
                                      'fraction: ' + pattern.fraction + '\n' +
                                      'rounding: ' + pattern.rounding + '\n' +
                                      'decimal: '  + pattern.decimal  + '\n' +
                                      'grouping: ' + pattern.grouping);},
            function () {alert('Error getting pattern\n');}
          );
        }
    
        </script>
      </head>
      <body>
        <button onclick="checkPattern()">Click for pattern</button>
      </body>
    </html>