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

# Speicher

> Ermöglicht den Zugriff auf das <a href="../device/device.html">Gerät</a> Storage-Optionen.

Diese API bietet Storage-Optionen, die auf der Grundlage von zwei verschiedenen W3C-Spezifikationen:

*   Die [Web Storage API-Spezifikation][1] ermöglicht Zugriff auf Daten über einfachen Schlüssel/Wert-Paaren. Finden Sie im Abschnitt über LocalStorage ausführliche auf dieser Schnittstelle.

*   Der [Web SQL Database-Spezifikation][2] bietet Zugriff auf weitere vollwertige <a href="database/database.html">Datenbank</a>tabellen über SQL-Abfragen. Eine Zusammenfassung dieser Schnittstelle unmittelbar unterhalb angezeigt wird.

 [1]: http://dev.w3.org/html5/webstorage/
 [2]: http://dev.w3.org/html5/webdatabase/

Cordova bietet Zugriff auf beide Schnittstellen für die Minderheit der <a href="../device/device.html">Gerät</a>e, die bereits diese nicht unterstützen. Im übrigen gelten die integrierten Implementierungen.

## Methoden

*   <a href="storage.opendatabase.html">openDatabase</a>

## Argumente

*   <a href="parameters/name.html">database_name</a>
*   <a href="parameters/version.html">database_version</a>
*   <a href="parameters/display_name.html">database_displayname</a>
*   <a href="parameters/size.html">database_size</a>

## Objekte

*   <a href="database/database.html">Datenbank</a>
*   <a href="sqltransaction/sqltransaction.html">SQLTransaction</a>
*   <a href="sqlresultset/sqlresultset.html">SQLResultSet</a>
*   <a href="sqlresultset/sqlresultset.html">SQLResultSet</a>RowList
*   <a href="sqlerror/sqlerror.html">SQLError</a>

## Zugriff auf die Funktion

Ab der Version 3.0 Zugang zum Storage APIs ist in Cordova integriert und erfordert keine mit dem CLI, Plugins hinzufügen, wie in der Command-Line Interface beschrieben.

Wenn Sie einen älteren Satz der Cordova Werkzeuge, die die CLI vorangehen verwenden, sind die folgenden Plattform-spezifische Konfigurationseinstellungen noch erforderlich:

*   Android (in`app/res/xml/config.xml`)
    
        <feature name="Storage">
            <param name="android-package" value="org.apache.cordova.Storage" />
        </feature>
        

*   BlackBerry WebWorks (in`www/config.xml`)
    
        <feature id="blackberry.widgetcache" required="true" version="1.0.0.0" />
        

Einige Plattformen können dieses Feature unterstützen, ohne dass eine besondere Konfiguration. Finden Sie unter *Plattform-Unterstützung* in der <a href="../../guide/overview/index.html">Übersicht</a>.