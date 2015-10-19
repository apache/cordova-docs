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

title: Speicher
---

# Speicher

> Ermöglicht den Zugriff auf das [Gerät](../device/device.html) Storage-Optionen.

Diese API bietet Storage-Optionen, die auf der Grundlage von zwei verschiedenen W3C-Spezifikationen:

*   Die [Web Storage API-Spezifikation][1] ermöglicht Zugriff auf Daten über einfachen Schlüssel/Wert-Paaren. Finden Sie im Abschnitt über LocalStorage ausführliche auf dieser Schnittstelle.

*   Der [Web SQL Database-Spezifikation][2] bietet Zugriff auf weitere vollwertige Datenbanktabellen über SQL-Abfragen. Eine Zusammenfassung dieser Schnittstelle unmittelbar unterhalb angezeigt wird.

 [1]: http://dev.w3.org/html5/webstorage/
 [2]: http://dev.w3.org/html5/webdatabase/

Cordova bietet Zugriff auf beide Schnittstellen für die Minderheit der Geräte, die bereits diese nicht unterstützen. Im übrigen gelten die integrierten Implementierungen.

## Methoden

*   [openDatabase](storage.opendatabase.html)

## Argumente

*   [database_name](parameters/name.html)
*   [database_version](parameters/version.html)
*   [database_displayname](parameters/display_name.html)
*   [database_size](parameters/size.html)

## Objekte

*   [Datenbank](database/database.html)
*   [SQLTransaction](sqltransaction/sqltransaction.html)
*   [SQLResultSet](sqlresultset/sqlresultset.html)
*   [SQLResultSetRowList](sqlresultsetrowlist/sqlresultsetrowlist.html)
*   [SQLError](sqlerror/sqlerror.html)

## Zugriff auf die Funktion

Ab der Version 3.0 Zugang zum Storage APIs ist in Cordova integriert und erfordert keine mit dem CLI, Plugins hinzufügen, wie in der Command-Line Interface beschrieben.

Wenn Sie einen älteren Satz der Cordova Werkzeuge, die die CLI vorangehen verwenden, sind die folgenden Plattform-spezifische Konfigurationseinstellungen noch erforderlich:

*   Android (in`app/res/xml/config.xml`)
    
        <feature name="Storage">
            <param name="android-package" value="org.apache.cordova.Storage" />
        </feature>
        

*   BlackBerry WebWorks (in`www/config.xml`)
    
        <feature id="blackberry.widgetcache" required="true" version="1.0.0.0" />
        

Einige Plattformen können dieses Feature unterstützen, ohne dass eine besondere Konfiguration. Finden Sie unter *Plattform-Unterstützung* in der [Übersicht](../../guide/overview/index.html).