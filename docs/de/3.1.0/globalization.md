---
license: >
    Licensed to the Apache Software Foundation (ASF) under one
    or more contributor license agreements.  See the NOTICE file
    distributed with this work for additional information
    regarding copyright ownership.  The ASF licenses this file
    to you under the Apache License, Version 2.0 (the
    "License"); you may not use this file except in compliance
    with the License.  You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing,
    software distributed under the License is distributed on an
    "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, either express or implied.  See the License for the
    specific language governing permissions and limitations
    under the License.
---


# Globalisierung

Ruft Informationen und führt durch spezifisch für Gebietsschema und der Zeitzone des Benutzers.

## Objekte

*   GlobalizationError

## Methoden

*   globalization.getPreferredLanguage
*   globalization.getLocaleName
*   globalization.dateToString
*   globalization.stringToDate
*   globalization.getDatePattern
*   globalization.getDateNames
*   globalization.isDayLightSavingsTime
*   globalization.getFirstDayOfWeek
*   globalization.numberToString
*   globalization.stringToNumber
*   globalization.getNumberPattern
*   globalization.getCurrencyPattern

## Geltungsbereich von Variablen

Das `globalization` -Objekt ist ein untergeordnetes Element des der `navigator` -Objekt, und daher hat globalen Gültigkeitsbereich.

    // The global globalization object
    var globalization = navigator.globalization;
    

## Zugriff auf die Funktion

Ab Version 3.0 implementiert Cordova Geräteebene APIs als *Plugins*. Verwenden Sie der CLI `plugin` Befehl, beschrieben in der Command-Line Interface, hinzufügen oder Entfernen dieses Feature für ein Projekt:

        $ cordova plugin add org.apache.cordova.globalization
        $ cordova plugin ls
        [ 'org.apache.cordova.globalization' ]
        $ cordova plugin rm org.apache.cordova.globalization
    

Diese Befehle gelten für alle Zielplattformen, aber die unten beschriebenen Plattform-spezifische Konfigurationseinstellungen ändern:

*   Android (in`app/res/xml/config.xml`)
    
        <feature name="Globalization">
            <param name="android-package" value="org.apache.cordova.Globalization" />
        </feature>
        

Einige Plattformen können dieses Feature unterstützen, ohne dass eine besondere Konfiguration. Finden Sie unter *Plattform-Unterstützung* in der Übersicht.


# globalization.getPreferredLanguage

Bekommen Sie Bezeichner für die aktuelle Sprache des Clients.

    navigator.globalization.getPreferredLanguage(successCallback, errorCallback);
    

## Beschreibung

Gibt die Sprache-ID-Zeichenfolge, die die `successCallback` mit einem `properties` -Objekt als Parameter. Dieses Objekt muss eine `value` Eigenschaft mit einer `String` Wert.

Wenn ein Fehler, der immer der Sprache vorliegt dann die `errorCallback` führt mit einem `GlobalizationError` -Objekt als Parameter. Erwarteten Fehlercode ist`GlobalizationError.UNKNOWN\_ERROR`.

## Unterstützte Plattformen

*   Android
*   BlackBerry WebWorks (OS 5.0 und höher)
*   iOS
*   Windows Phone 8

## Kleines Beispiel

Wenn der Browser auf festgelegt ist die `en\_US` Gebietsschema, dies sollte einen Popup-Dialog mit dem Text angezeigt `language: English` :

    navigator.globalization.getPreferredLanguage(
        function (language) {alert('language: ' + language.value + '\n');},
        function () {alert('Error getting language\n');}
    );
    

## Vollständiges Beispiel

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>getPreferredLanguage Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkLanguage() {
          navigator.globalization.getPreferredLanguage(
            function (language) {alert('language: ' + language.value + '\n');},
            function () {alert('Error getting language\n');}
          );
        }
        </script>
      </head>
      <body>
        <button onclick="checkLanguage()">Click for language</button>
      </body>
    </html>
    

## Windows Phone 8 Macken

*   Den ISO 639-1 zwei-Buchstaben-Code für die aktuelle Sprache gibt.


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


# globalization.getFirstDayOfWeek

Den ersten Tag der Woche laut dem Client Benutzereinstellungen und Kalender gibt.

    navigator.globalization.getFirstDayOfWeek(successCallback, errorCallback);
    

## Beschreibung

Die Wochentage sind nummeriert, beginnend mit 1, wo wird 1 Sonntag angenommen. Liefert den Tag auf der `successCallback` mit einem `properties` -Objekt als Parameter. Dieses Objekt muss eine `value` Eigenschaft mit einer `Number` Wert.

Wenn ein Fehler, erhalten das Muster vorliegt dann die `errorCallback` führt mit einem `GlobalizationError` -Objekt als Parameter. Erwarteten Fehlercode ist`GlobalizationError.UNKNOWN\_ERROR`.

## Unterstützte Plattformen

*   Android
*   BlackBerry WebWorks (OS 5.0 und höher)
*   iOS
*   Windows Phone 8

## Kleines Beispiel

Wenn der Browser auf festgelegt ist die `en\_US` Gebietsschema, dies zeigt einen Popup-Dialog mit Text ähnlich`day: 1`.

    navigator.globalization.getFirstDayOfWeek(
        function (day) {alert('day: ' + day.value + '\n');},
        function () {alert('Error getting day\n');}
    );
    

## Vollständiges Beispiel

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>getFirstDayOfWeek Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkFirstDay() {
          navigator.globalization.getFirstDayOfWeek(
            function (day) {alert('day: ' + day.value + '\n');},
            function () {alert('Error getting day\n');}
          );
        }
    
        </script>
      </head>
      <body>
        <button onclick="checkFirstDay()">Click for first day of week</button>
      </body>
    </html>


# globalization.numberToString

Gibt eine Zahl, die als Zeichenfolge nach dem Client-Benutzer-Einstellungen formatiert.

    navigator.globalization.numberToString(number, successCallback, errorCallback, options);
    

## Beschreibung

Gibt die formatierte Zeichenfolge, die `successCallback` mit einem `properties` -Objekt als Parameter. Dieses Objekt muss eine `value` Eigenschaft mit einer `String` Wert.

Wenn es ist ein Fehler, die Formatierung der Zahl, dann die `errorCallback` führt mit einem `GlobalizationError` -Objekt als Parameter. Erwarteten Fehlercode ist`GlobalizationError.FORMATTING\_ERROR`.

Die `options` Parameter ist optional, und die Standardwerte sind:

    {Typ: "decimal"}
    

Die `options.type` kann sein "decimal", "Prozent" oder "Währung".

## Unterstützte Plattformen

*   Android
*   BlackBerry WebWorks (OS 5.0 und höher)
*   iOS
*   Windows Phone 8

## Kleines Beispiel

Wenn der Browser auf festgelegt ist die `en\_US` Gebietsschema, dies zeigt einen Popup-Dialog mit Text ähnlich wie `number: 3.142` :

    navigator.globalization.numberToString(
        3.1415926,
        function (number) {alert('number: ' + number.value + '\n');},
        function () {alert('Error getting number\n');},
        {type:'decimal'}
    );
    

## Vollständiges Beispiel

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>numberToString Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkNumber() {
          navigator.globalization.numberToString(
            3.1415926,
            function (number) {alert('number: ' + number.value + '\n');},
            function () {alert('Error getting number\n');},
            {type:'decimal'}
          );
        }
    
        </script>
      </head>
      <body>
        <button onclick="checkNumber()">Click for number</button>
      </body>
    </html>


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


# GlobalizationError

Ein Objekt, das einen Fehler von der Globalisierung-API darstellt.

## Eigenschaften

*   **Code**: Einen der folgenden Codes, der den Fehlertyp *(Anzahl)* 
    *   GlobalizationError.UNKNOWN_ERROR: 0
    *   GlobalizationError.FORMATTING_ERROR: 1
    *   GlobalizationError.PARSING_ERROR: 2
    *   GlobalizationError.PATTERN_ERROR: 3
*   **Nachricht**: eine SMS-Nachricht, die enthält den Fehler Erklärung und/oder details *(String)*

## Beschreibung

Dieses Objekt ist erstellt und bevölkert von Cordova und kehrte nach einem Rückruf im Fehlerfall.

## Unterstützte Plattformen

*   Android
*   BlackBerry WebWorks (OS 5.0 und höher)
*   iOS

## Kleines Beispiel

Die folgenden Fehler-Callback ausgeführt wird, zeigt einen Popup-Dialog mit dem Text ähnlich wie `code: 3` und`message:`

    function errorCallback(error) {
        alert('code: ' + error.code + '\n' +
              'message: ' + error.message + '\n');
    };
    

## Vollständiges Beispiel

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>GlobalizationError Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function successCallback(date) {
          alert('month:' + date.month +
                ' day:' + date.day +
                ' year:' + date.year + '\n');
        }
    
        function errorCallback(error) {
          alert('code: ' + error.code + '\n' +
                'message: ' + error.message + '\n');
        };
    
        function checkError() {
          navigator.globalization.stringToDate(
            'notADate',
            successCallback,
            errorCallback,
            {selector:'foobar'}
          );
        }
    
        </script>
      </head>
      <body>
        <button onclick="checkError()">Click for error</button>
      </body>
    </html>
