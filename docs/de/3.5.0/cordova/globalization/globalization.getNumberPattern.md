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

# globalization.getNumberPattern

Gibt eine Musterzeichenfolge zum Formatieren und Analysieren von Zahlen nach der Client-Benutzer-Einstellungen.

    navigator.globalization.getNumberPattern(successCallback, errorCallback, options);
    

## Beschreibung

Gibt das Muster auf der `successCallback` mit einem `properties` -Objekt als Parameter. Dieses Objekt enthält die folgenden Eigenschaften:

*   **Muster**: die Muster zur Formatierung und zum Analysieren von Zahlen. Die Muster folgen Unicode Technical Standard #35. <http://unicode.org/reports/tr35/tr35-4.html>. *(String)*

*   **Symbol**: das Symbol beim Formatieren und analysieren, wie ein Prozentsatz oder Symbol verwendet. *(String)*

*   **Bruch**: die Anzahl von Bruchziffern zum analysieren und Formatieren von Zahlen verwendet. *(Anzahl)*

*   **Rundung**: die Rundung erhöhen wenn analysieren und formatieren verwenden. *(Anzahl)*

*   **positiv**: das Symbol für positive Zahlen beim Analysieren und formatieren verwenden. *(String)*

*   **negativ**: das Symbol für negative Zahlen beim Analysieren und formatieren verwenden. *(String)*

*   **Dezimal**: das Dezimaltrennzeichen für analysieren und formatieren. *(String)*

*   **Gruppieren**: das Symbol für Zifferngruppierung zum analysieren und formatieren verwenden. *(String)*

Wenn ein Fehler, erhalten das Muster vorliegt dann die `errorCallback` führt mit einem `GlobalizationError` -Objekt als Parameter. Erwarteten Fehlercode ist`GlobalizationError.PATTERN\_ERROR`.

Die `options` Parameter ist optional und Standardwerte sind:

    {Typ: "decimal"}
    

Die `options.type` kann `decimal` , `percent` , oder`currency`.

## Unterstützte Plattformen

*   Android
*   BlackBerry WebWorks (OS 5.0 und höher)
*   iOS
*   Windows Phone 8

## Kleines Beispiel

Wenn der Browser auf festgelegt ist die `en\_US` Gebietsschema, dies sollte einen Popup-Dialog mit Text ähnlich wie die Ergebnisse in den folgenden anzeigen:

    navigator.globalization.getNumberPattern(
        function (pattern) {alert('pattern: '  + pattern.pattern  + '\n' +
                                  'symbol: '   + pattern.symbol   + '\n' +
                                  'fraction: ' + pattern.fraction + '\n' +
                                  'rounding: ' + pattern.rounding + '\n' +
                                  'positive: ' + pattern.positive + '\n' +
                                  'negative: ' + pattern.negative + '\n' +
                                  'decimal: '  + pattern.decimal  + '\n' +
                                  'grouping: ' + pattern.grouping);},
        function () {alert('Error getting pattern\n');},
        {type:'decimal'}
    );
    

Ergebnisse:

    Muster: ##0 #. ### Symbol:.
    Bruch: 0 Rundung: 0 positiv: negativ: - dezimal:.
    Gruppieren:,
    

## Vollständiges Beispiel

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>getNumberPattern Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkPattern() {
          navigator.globalization.getNumberPattern(
            function (pattern) {alert('pattern: '  + pattern.pattern  + '\n' +
                                      'symbol: '   + pattern.symbol   + '\n' +
                                      'fraction: ' + pattern.fraction + '\n' +
                                      'rounding: ' + pattern.rounding + '\n' +
                                      'positive: ' + pattern.positive + '\n' +
                                      'negative: ' + pattern.negative + '\n' +
                                      'decimal: '  + pattern.decimal  + '\n' +
                                      'grouping: ' + pattern.grouping);},
            function () {alert('Error getting pattern\n');},
            {type:'decimal'}
          );
        }
    
        </script>
      </head>
      <body>
        <button onclick="checkPattern()">Click for pattern</button>
      </body>
    </html>
    

## Windows Phone 8 Macken

*   Die `pattern` -Eigenschaft wird nicht unterstützt, und Retuens eine leere Zeichenfolge.

*   Die `fraction` -Eigenschaft wird nicht unterstützt, und gibt NULL zurück.