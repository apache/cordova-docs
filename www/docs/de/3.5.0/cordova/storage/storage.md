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

# Speicher

> Eine Übersicht über Storage-Optionen für Cordova.

Mehrere Speicher-APIs sind für Cordova-Anwendungen verfügbar. Finden Sie unter [html5rocks][1]. eine vollständigere Übersicht und Beispiele.

 [1]: http://www.html5rocks.com/en/features/storage

## LocalStorage

Auch bekannt als *web-Speicher*, *einfache Lagerung*, oder durch seine Alternative *Session-Speicherung* -Schnittstelle, diese API bietet synchrone Schlüssel/Wert-Paar Speicher, und steht im zugrunde liegenden WebView-Implementierungen. Finden Sie in [der W3C-Spezifikation][2] für Details.

 [2]: http://www.w3.org/TR/webstorage/

**Windows Phone 7 Quirk**: Dot Notation ist *nicht* möglich, so sicher sein, verwenden Sie `setItem` oder `getItem` eher als Zugriffstasten direkt aus dem Speicherobjekt, wie in`window.localStorage.someKey`.

## WebSQL

Diese API ist verfügbar in den zugrunde liegenden WebView. Der [Web SQL Database-Spezifikation][3] bietet Zugriff auf weitere vollwertige Datenbanktabellen über SQL-Abfragen.

 [3]: http://dev.w3.org/html5/webdatabase/

Die folgenden Plattformen unterstützen WebSQL:

*   Android
*   BlackBerry 10
*   iOS
*   Tizen

## IndexedDB

Diese API ist verfügbar in den zugrunde liegenden WebView. [Indiziert DB][4] bietet mehr Funktionen als LocalStorage aber weniger als WebSQL.

 [4]: http://www.w3.org/TR/IndexedDB/

Die folgenden Plattformen unterstützen IndexedDB:

*   Windows Phone 8
*   BlackBerry 10

## Plugin-Optionen

Neben der Lagerung APIs oben aufgeführten, können Sie die [Datei API][5] zum Zwischenspeichern von Daten auf dem lokalen Dateisystem. Andere [Cordova Plugins][6] bieten ähnliche Speicheroptionen.

 [5]: https://github.com/apache/cordova-plugin-file/blob/master/doc/index.md
 [6]: http://plugins.cordova.io/