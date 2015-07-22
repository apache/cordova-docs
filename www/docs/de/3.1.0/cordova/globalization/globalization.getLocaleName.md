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

# globalization.getLocaleName

Bekommen Sie der Bezeichner für die aktuelle Gebietsschema-Einstellung des Clients.

    navigator.globalization.getLocaleName(successCallback, errorCallback);
    

## Beschreibung

Gibt die Gebietsschemabezeichner-Zeichenfolge, die `successCallback` mit einem `properties` -Objekt als Parameter. Dieses Objekt muss eine `value` Eigenschaft mit einer `String` Wert.

Wenn es ist ein Fehler, der immer des Gebietsschemas, dann die `errorCallback` führt mit einem `GlobalizationError` -Objekt als Parameter. Erwarteten Fehlercode ist`GlobalizationError.UNKNOWN\_ERROR`.

## Unterstützte Plattformen

*   Android
*   BlackBerry WebWorks (OS 5.0 und höher)
*   iOS
*   Windows Phone 8

## Kleines Beispiel

Wenn der Browser auf festgelegt ist die `en\_US` Gebietsschema, dies zeigt einen Popup-Dialog mit dem Text`locale: en\_US`.

    navigator.globalization.getLocaleName(
        function (locale) {alert('locale: ' + locale.value + '\n');},
        function () {alert('Error getting locale\n');}
    );
    

## Vollständiges Beispiel

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>getLocaleName Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkLocale() {
          navigator.globalization.getLocaleName(
            function (locale) {alert('locale: ' + locale.value + '\n');},
            function () {alert('Error getting locale\n');}
          );
        }
        </script>
      </head>
      <body>
        <button onclick="checkLocale()">Click for locale</button>
      </body>
    </html>
    

## Windows Phone 8 Macken

*   Gibt zwei-Buchstaben-Code gemäß ISO 3166 für das aktuelle Land/Region.