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

# globalization.getDateNames

Gibt ein Array der Namen der Monate oder Tage der Woche, abhängig von dem Client Benutzereinstellungen und Kalender.

    navigator.globalization.getDateNames(successCallback, errorCallback, options);
    

## Beschreibung

Gibt das Array von Namen der `successCallback` mit einem `properties` -Objekt als Parameter. Dieses Objekt enthält eine `value` -Eigenschaft mit einer `Array` der `String` Werte. Die Namen von Array-Funktionen, entweder der erste Monat im Jahr oder der erste Tag der Woche, je nach der ausgewählten Option ab.

Wenn es einen Fehler erhalten die Namen dann die `errorCallback` führt mit einem `GlobalizationError` -Objekt als Parameter. Erwarteten Fehlercode ist`GlobalizationError.UNKNOWN\_ERROR`.

Die `options` Parameter ist optional, und die Standardwerte sind:

    {Typ: "breit", Artikel: 'Monate'}
    

Der Wert des `options.type` kann `narrow` oder`wide`.

Der Wert des `options.item` kann `months` oder`days`.

## Unterstützte Plattformen

*   Android
*   BlackBerry WebWorks (OS 5.0 und höher)
*   iOS
*   Windows Phone 8

## Kleines Beispiel

Wenn der Browser auf festgelegt ist die `en\_US` Gebietsschema, in diesem Beispiel wird eine Reihe von zwölf Popup-Dialoge, eine pro Monat, mit Text ähnlich `month: January` :

    navigator.globalization.getDateNames(
        function (names) {
            for (var i = 0; i < names.value.length; i++) {
                alert('month: ' + names.value[i] + '\n');
            }
        },
        function () { alert('Error getting names\n'); },
        { type: 'wide', item: 'months' }
    );
    

## Vollständiges Beispiel

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>getDateNames Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkDateNames() {
          navigator.globalization.getDateNames(
            function (names) {
              for (var i=0; i<names.value.length; i++) {
                alert('month: ' + names.value[i] + '\n');
              }
            },
            function () {alert('Error getting names\n');},
            {type:'wide', item:'months'}
          );
        }
    
        </script>
      </head>
      <body>
        <button onclick="checkDateNames()">Click for date names</button>
      </body>
    </html>