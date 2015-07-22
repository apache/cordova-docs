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

# globalization.getDatePattern

Gibt eine Musterzeichenfolge zum Formatieren und Analysieren von Daten entsprechend der Client-Benutzer-Einstellungen.

    navigator.globalization.getDatePattern(successCallback, errorCallback, options);
    

## Beschreibung

Gibt das Muster auf der `successCallback` . Das als Parameter übergebene Objekt enthält die folgenden Eigenschaften:

*   **Muster**: das Datum und die Uhrzeit-Muster zur Formatierung und zum Analysieren von Daten. Die Muster folgen Unicode Technical Standard #35. <http://unicode.org/reports/tr35/tr35-4.html>. *(String)*

*   **Zeitzone**: der abgekürzte Name der Zeitzone auf dem Client. *(String)*

*   **Utc_offset**: die aktuelle Differenz in Sekunden zwischen dem Client Zeitzone und koordinierte Weltzeit. *(Anzahl)*

*   **Dst_offset**: der aktuelle Sommerzeit-Offset in Sekunden zwischen der Client-Sommerzeit der Zeitzone und der Client Tageslicht Speichern der Zeitzone. *(Anzahl)*

Wenn es einen Fehler erhalten das Muster der `errorCallback` führt mit ein `GlobalizationError` -Objekt als Parameter. Erwarteten Fehlercode ist`GlobalizationError.PATTERN\_ERROR`.

Die `options` Parameter ist optional und wird mit den folgenden Werten:

    {FormatLength: 'kurz', Selektor: "Datum und Uhrzeit"}
    

Die `options.formatLength` kann `short` , `medium` , `long` , oder `full` . Die `options.selector` kann `date` , `time` oder`date and
time`.

## Unterstützte Plattformen

*   Android
*   BlackBerry WebWorks (OS 5.0 und höher)
*   iOS
*   Windows Phone 8

## Kleines Beispiel

Wenn der Browser auf festgelegt ist die `en\_US` Gebietsschema, in diesem Beispiel wird einen Popup-Dialog mit Text wie z. B. `pattern: M/d/yyyy h:mm a` :

    function checkDatePattern() {
        navigator.globalization.getDatePattern(
            function (date) { alert('pattern: ' + date.pattern + '\n'); },
            function () { alert('Error getting pattern\n'); },
            { formatLength: 'short', selector: 'date and time' }
        );
    }
    

## Vollständiges Beispiel

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>getDatePattern Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkDatePattern() {
          navigator.globalization.getDatePattern(
            function (date) {alert('pattern: ' + date.pattern + '\n');},
            function () {alert('Error getting pattern\n');},
            {formatLength:'short', selector:'date and time'}
          );
        }
    
        </script>
      </head>
      <body>
        <button onclick="checkDatePattern()">Click for pattern</button>
      </body>
    </html>
    

## Windows Phone 8 Macken

*   Die `formatLength` unterstützt nur `short` und `full` Werte.

*   Die `pattern` für `date and time` Muster kehrt nur volle Datetime-Format.

*   Die `timezone` gibt den Namen des Vollzeit-Zone zurück.

*   Die `dst_offset` -Eigenschaft wird nicht unterstützt, und gibt immer NULL.