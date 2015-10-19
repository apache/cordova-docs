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

title: Aktualisierung von Android
---

# Aktualisierung von Android

Diese Anleitung zeigt wie Android Projekte Upgrade von älteren Versionen von Cordova zu ändern. Die meisten diese Anweisungen gelten für Projekte, die mit einer älteren Befehlszeilentools, die vorangehen erstellt die `cordova` CLI-Hilfsprogramm. Die Command-Line Interface Informationen finden Sie unter Gewusst wie: Aktualisieren Sie die Version der CLI.

## Upgrade von 3.0.0 auf 3.1.0

Für Projekte, die mit Cordova CLI erstellt wurden:

1.  Update der `cordova` CLI-Version - siehe The Command-Line Interface 
2.  Ausführen`cordova platform update android`

Für Projekte, die nicht mit der Cordova CLI erstellt ausgeführt:

1.  `Aktualisieren Sie bin/< Project_path >`

## Upgrade auf die CLI (3.0.0) von 2.9.0

1.  Erstellen Sie ein neues Apache Cordova 3.0.0-Projekt mit Cordova CLI, wie in der Command-Line Interface beschrieben.

2.  Fügen Sie Ihrer Plattformen die den Cordova Projekt, zum Beispiel:`cordova
platform add android`.

3.  Kopieren Sie den Inhalt Ihres Projekts `www` Verzeichnis in das `www` Verzeichnis im Stammverzeichnis des Projektes Cordova, die Sie gerade erstellt haben.

4.  Nativen Vermögen aus dem alten Projekt kopieren, in die entsprechenden Verzeichnisse unter `platforms/android` : in diesem Verzeichnis werden in dem systemeigene Cordova-Android Projekt vorhanden ist.

5.  Verwenden Sie Cordova-CLI-Tool, um alle Plugins zu installieren, die Sie brauchen. Beachten Sie, dass die CLI behandelt alle Kern-APIs als Plugins, so müssen sie möglicherweise hinzugefügt werden. Nur 3.0.0 Plugins sind kompatibel mit CLI.

## Ein Upgrade auf 3.0.0 von 2.9.0

1.  Erstellen Sie ein neues Apache Cordova Android Projekt.

2.  Kopieren Sie den Inhalt Ihrer `www` Verzeichnis in das neue Projekt.

3.  Kopieren Sie nativen Android Vermögen aus Ihrem `res` Verzeichnis in das neue Projekt.

4.  Kopie über alle Plugins, die von der Installation der `src` Unterverzeichnisse in das neue Projekt.

5.  Achten Sie darauf, alle veraltet aktualisieren `<plugin>` Referenzen aus Ihrem alten `config.xml` [Datei](../../../cordova/file/fileobj/fileobj.html) an den neuen `<feature>` Spezifikation.

6.  Aktualisieren Sie alle Verweise auf die `org.apache.cordova.api` Paket ist`org.apache.cordova`.

*   **Hinweis:** alle Core APIs wurden entfernt und als Plugins installiert sein. Einzelheiten finden Sie unter der Verwendung von Plugman zum Verwalten von Plugins-Anleitung.

## Ein Upgrade auf 2.9.0 von 2.8.0

1.  Ausführen`bin/update <project_path>`.

## Ein Upgrade auf 2.8.0 von 2.7.0

1.  Entfernen von `cordova-2.7.0.jar` aus des Projekts `libs` Verzeichnis.

2.  Hinzufügen von `cordova-2.8.0.jar` für des Projekts `libs` Verzeichnis.

3.  Bei Verwendung von Eclipse, Eclipse Projekt aktualisieren und eine saubere zu tun.

4.  Kopieren Sie die neue `cordova.js` in Ihr Projekt.

5.  Aktualisieren Sie den HTML-Code um das neue `cordova.js` [Datei](../../../cordova/file/fileobj/fileobj.html).

6.  Kopie der `res/xml/config.xml` -Datei`framework/res/xml/config.xml`.

7.  Update `framework/res/xml/config.xml` ähnliche Einstellungen haben, wie es früher war.

8.  Kopieren Sie Dateien aus `bin/templates/cordova` für des Projekts `cordova` Verzeichnis.

## Ein Upgrade auf 2.7.0 von 2.6.0

1.  Entfernen von `cordova-2.6.0.jar` aus des Projekts `libs` Verzeichnis.

2.  Hinzufügen von `cordova-2.7.0.jar` für des Projekts `libs` Verzeichnis.

3.  Bei Verwendung von Eclipse, Eclipse Projekt aktualisieren und eine saubere zu tun.

4.  Kopieren Sie die neue `cordova-2.7.0.js` in Ihr Projekt.

5.  Aktualisieren Sie den HTML-Code um das neue `cordova-2.7.0.js` [Datei](../../../cordova/file/fileobj/fileobj.html).

6.  Kopie der `res/xml/config.xml` entsprechend`framework/res/xml/config.xml`.

7.  Update `framework/res/xml/config.xml` ähnliche Einstellungen haben, wie es früher war.

8.  

## Ein Upgrade auf 2.6.0 von 2.5.0

1.  Entfernen von `cordova-2.5.0.jar` aus des Projekts `libs` Verzeichnis.

2.  Hinzufügen von `cordova-2.6.0.jar` für des Projekts `libs` Verzeichnis.

3.  Bei Verwendung von Eclipse, Eclipse Projekt aktualisieren und eine saubere zu tun.

4.  Kopieren Sie die neue `cordova-2.6.0.js` in Ihr Projekt.

5.  Aktualisieren Sie den HTML-Code um das neue `cordova-2.6.0.js` [Datei](../../../cordova/file/fileobj/fileobj.html).

6.  Kopie der `res/xml/config.xml` entsprechend`framework/res/xml/config.xml`.

7.  Update `framework/res/xml/config.xml` ähnliche Einstellungen haben, wie es früher war.

8.  Kopieren Sie Dateien aus `bin/templates/cordova` für des Projekts `cordova` Verzeichnis.

Führen Sie `bin/update <project>` mit den Projektpfad in Cordova Quellverzeichnis aufgeführt.

## Ein Upgrade auf 2.5.0 von 2.4.0

1.  Entfernen von `cordova-2.4.0.jar` aus des Projekts `libs` Verzeichnis.

2.  Hinzufügen von `cordova-2.5.0.jar` für des Projekts `libs` Verzeichnis.

3.  Bei Verwendung von Eclipse, Eclipse Projekt aktualisieren und eine saubere zu tun.

4.  Kopieren Sie die neue `cordova-2.5.0.js` in Ihr Projekt.

5.  Aktualisieren Sie den HTML-Code um das neue `cordova-2.5.0.js` [Datei](../../../cordova/file/fileobj/fileobj.html).

6.  Kopie der `res/xml/config.xml` entsprechend`framework/res/xml/config.xml`.

7.  Update `framework/res/xml/config.xml` ähnliche Einstellungen haben, wie es früher war.

8.  Kopieren Sie Dateien aus `bin/templates/cordova` für des Projekts `cordova` Verzeichnis.

## Ein Upgrade auf 2.4.0 von 2.3.0

1.  Entfernen von `cordova-2.3.0.jar` aus des Projekts `libs` Verzeichnis.

2.  Hinzufügen von `cordova-2.4.0.jar` für des Projekts `libs` Verzeichnis.

3.  Bei Verwendung von Eclipse, Eclipse Projekt aktualisieren und eine saubere zu tun.

4.  Kopieren Sie die neue `cordova-2.4.0.js` in Ihr Projekt.

5.  Aktualisieren Sie den HTML-Code um das neue `cordova-2.4.0.js` [Datei](../../../cordova/file/fileobj/fileobj.html).

6.  Kopie der `res/xml/config.xml` entsprechend`framework/res/xml/config.xml`.

7.  Kopieren Sie Dateien aus `bin/templates/cordova` für des Projekts `cordova` Verzeichnis.

## Ein Upgrade auf 2.3.0 von 2.2.0

1.  Entfernen von `cordova-2.2.0.jar` aus des Projekts `libs` Verzeichnis.

2.  Hinzufügen von `cordova-2.3.0.jar` für des Projekts `libs` Verzeichnis.

3.  Bei Verwendung von Eclipse, Eclipse Projekt aktualisieren und eine saubere zu tun.

4.  Kopieren Sie die neue `cordova-2.3.0.js` in Ihr Projekt.

5.  Aktualisieren Sie den HTML-Code um das neue `cordova-2.3.0.js` [Datei](../../../cordova/file/fileobj/fileobj.html).

6.  Kopie der `res/xml/config.xml` entsprechend`framework/res/xml/config.xml`.

7.  Kopieren Sie Dateien aus `bin/templates/cordova` für des Projekts `cordova` Verzeichnis.

## Ein Upgrade auf 2.2.0 von 2.1.0

1.  Entfernen von `cordova-2.1.0.jar` aus des Projekts `libs` Verzeichnis.

2.  Hinzufügen von `cordova-2.2.0.jar` für des Projekts `libs` Verzeichnis.

3.  Bei Verwendung von Eclipse, Eclipse Projekt aktualisieren und eine saubere zu tun.

4.  Kopieren Sie die neue `cordova-2.2.0.js` in Ihr Projekt.

5.  Aktualisieren Sie den HTML-Code um das neue `cordova-2.2.0.js` [Datei](../../../cordova/file/fileobj/fileobj.html).

6.  Kopie der `res/xml/config.xml` entsprechend`framework/res/xml/config.xml`.

7.  Kopieren Sie Dateien aus `bin/templates/cordova` für des Projekts `cordova` Verzeichnis.

## Upgrade auf 2.1.0 von 2.0.0

1.  Entfernen von `cordova-2.0.0.jar` aus des Projekts `libs` Verzeichnis.

2.  Hinzufügen von `cordova-2.1.0.jar` für des Projekts `libs` Verzeichnis.

3.  Bei Verwendung von Eclipse, Eclipse Projekt aktualisieren und eine saubere zu tun.

4.  Kopieren Sie die neue `cordova-2.1.0.js` in Ihr Projekt.

5.  Aktualisieren Sie den HTML-Code um das neue `cordova-2.1.0.js` [Datei](../../../cordova/file/fileobj/fileobj.html).

6.  Kopie der `res/xml/config.xml` entsprechend`framework/res/xml/config.xml`.

7.  Kopieren Sie Dateien aus `bin/templates/cordova` für des Projekts `cordova` Verzeichnis.

## Ein Upgrade auf 2.0.0 von 1.9.0

1.  Entfernen von `cordova-1.9.0.jar` aus des Projekts `libs` Verzeichnis.

2.  Hinzufügen von `cordova-2.0.0.jar` für des Projekts `libs` Verzeichnis.

3.  Bei Verwendung von Eclipse, Eclipse Projekt aktualisieren und eine saubere zu tun.

4.  Kopieren Sie die neue `cordova-2.0.0.js` in Ihr Projekt.

5.  Aktualisieren Sie den HTML-Code um das neue `cordova-2.0.0.js` [Datei](../../../cordova/file/fileobj/fileobj.html).

6.  Kopie der `res/xml/config.xml` entsprechend`framework/res/xml/config.xml`.

### Release Notes über 2.0.0

`config.xml`wird anstelle `cordova.xml` und `plugins.xml` . Diese neue [Datei](../../../cordova/file/fileobj/fileobj.html) ist eine Kombination der beiden vorherigen. Jedoch die alten Dateien sind veraltet, und beim arbeiten derzeit noch, werden nicht mehr in einer zukünftigen Version arbeiten.

## Ein Upgrade auf 1.9.0 von 1.8.1

1.  Entfernen von `cordova-1.8.0.jar` aus des Projekts `libs` Verzeichnis.

2.  Hinzufügen von `cordova-1.9.0.jar` für des Projekts `libs` Verzeichnis.

3.  Bei Verwendung von Eclipse, Eclipse Projekt aktualisieren und eine saubere zu tun.

4.  Kopieren Sie die neue `cordova-1.9.0.js` in Ihr Projekt.

5.  Aktualisieren Sie den HTML-Code um das neue `cordova-1.9.0.js` [Datei](../../../cordova/file/fileobj/fileobj.html).

6.  Update `res/xml/plugins.xml` entsprechend`framework/res/xml/plugins.xml`.

### Release Notes über 1.9.0

Durch die Einführung der `CordovaWebView` , Drittanbieter Plug-ins funktionieren nicht. Diese Plugins brauchen, um einen Kontext aus dem `CordovaInterface` mit `getContext()` oder `getActivity()` . Wenn Sie kein erfahrener Android-Entwickler sind, bitte kontaktieren Sie den Plugin-Betreuer und fügen Sie diese Aufgabe auf ihre Bug-Tracker.

## Ein Upgrade auf 1.8.0 von 1.8.0

1.  Entfernen von `cordova-1.8.0.jar` aus des Projekts `libs` Verzeichnis.

2.  Hinzufügen von `cordova-1.8.1.jar` für des Projekts `libs` Verzeichnis.

3.  Bei Verwendung von Eclipse, Eclipse Projekt aktualisieren und eine saubere zu tun.

4.  Kopieren Sie die neue `cordova-1.8.1.js` in Ihr Projekt.

5.  Aktualisieren Sie den HTML-Code um das neue `cordova-1.8.1.js` [Datei](../../../cordova/file/fileobj/fileobj.html).

6.  Update `res/xml/plugins.xml` entsprechend`framework/res/xml/plugins.xml`.

## Ein Upgrade auf 1.8.0 von 1.7.0

1.  Entfernen von `cordova-1.7.0.jar` aus des Projekts `libs` Verzeichnis.

2.  Hinzufügen von `cordova-1.8.0.jar` für des Projekts `libs` Verzeichnis.

3.  Bei Verwendung von Eclipse, Eclipse Projekt aktualisieren und eine saubere zu tun.

4.  Kopieren Sie die neue `cordova-1.8.0.js` in Ihr Projekt.

5.  Aktualisieren Sie den HTML-Code um das neue `cordova-1.8.0.js` [Datei](../../../cordova/file/fileobj/fileobj.html).

6.  Update `res/xml/plugins.xml` entsprechend`framework/res/xml/plugins.xml`.

## Ein Upgrade auf 1.8.0 von 1.7.0

1.  Entfernen von `cordova-1.7.0.jar` aus des Projekts `libs` Verzeichnis.

2.  Hinzufügen von `cordova-1.8.0.jar` für des Projekts `libs` Verzeichnis.

3.  Bei Verwendung von Eclipse, Eclipse Projekt aktualisieren und eine saubere zu tun.

4.  Kopieren Sie die neue `cordova-1.8.0.js` in Ihr Projekt.

5.  Aktualisieren Sie den HTML-Code um das neue `cordova-1.8.0.js` [Datei](../../../cordova/file/fileobj/fileobj.html).

6.  Update `res/xml/plugins.xml` entsprechend`framework/res/xml/plugins.xml`.

## Ein Upgrade auf 1.7.0 von 1.6.1

1.  Entfernen von `cordova-1.6.1.jar` aus des Projekts `libs` Verzeichnis.

2.  Hinzufügen von `cordova-1.7.0.jar` für des Projekts `libs` Verzeichnis.

3.  Bei Verwendung von Eclipse, Eclipse Projekt aktualisieren und eine saubere zu tun.

4.  Kopieren Sie die neue `cordova-1.7.0.js` in Ihr Projekt.

5.  Update `res/xml/plugins.xml` entsprechend`framework/res/xml/plugins.xml`.

## Ein Upgrade auf 1.6.1 von 1.6.0

1.  Entfernen von `cordova-1.6.0.jar` aus des Projekts `libs` Verzeichnis.

2.  Hinzufügen von `cordova-1.6.1.jar` für des Projekts `libs` Verzeichnis.

3.  Bei Verwendung von Eclipse, Eclipse Projekt aktualisieren und eine saubere zu tun.

4.  Kopieren Sie die neue `cordova-1.6.1.js` in Ihr Projekt.

5.  Update `res/xml/plugins.xml` entsprechend`framework/res/xml/plugins.xml`.

## Ein Upgrade auf 1.6.0 von 1.5.0

1.  Entfernen von `cordova-1.5.0.jar` aus des Projekts `libs` Verzeichnis.

2.  Hinzufügen von `cordova-1.6.0.jar` für des Projekts `libs` Verzeichnis.

3.  Bei Verwendung von Eclipse, Eclipse Projekt aktualisieren und eine saubere zu tun.

4.  Kopieren Sie die neue `cordova-1.6.0.js` in Ihr Projekt.

5.  Aktualisieren Sie den HTML-Code um das neue `cordova-1.6.0.js` [Datei](../../../cordova/file/fileobj/fileobj.html).

6.  Update `res/xml/plugins.xml` entsprechend`framework/res/xml/plugins.xml`.

7.  Ersetzen Sie `res/xml/phonegap.xml` mit `res/xml/cordova.xml` übereinstimmen`framework/res/xml/cordova.xml`.

## Ein Upgrade auf 1.5.0 von 1.4.0

1.  Entfernen von `phonegap-1.4.0.jar` aus des Projekts `libs` Verzeichnis.

2.  Hinzufügen von `cordova-1.5.0.jar` für des Projekts `libs` Verzeichnis.

3.  Bei Verwendung von Eclipse, Eclipse Projekt aktualisieren und eine saubere zu tun.

4.  Kopieren Sie die neue `cordova-1.5.0.js` in Ihr Projekt.

5.  Aktualisieren Sie den HTML-Code um das neue `cordova-1.5.0.js` [Datei](../../../cordova/file/fileobj/fileobj.html).

6.  Update `res/xml/plugins.xml` entsprechend`framework/res/xml/plugins.xml`.

7.  Ersetzen Sie `res/xml/phonegap.xml` mit `res/xml/cordova.xml` übereinstimmen`framework/res/xml/cordova.xml`.

## Ein Upgrade auf 1.4.0 von 1.3.0

1.  Entfernen von `phonegap-1.3.0.jar` aus des Projekts `libs` Verzeichnis.

2.  Hinzufügen von `phonegap-1.4.0.jar` für des Projekts `libs` Verzeichnis.

3.  Bei Verwendung von Eclipse, Eclipse Projekt aktualisieren und eine saubere zu tun.

4.  Kopieren Sie die neue `phonegap-1.4.0.js` in Ihr Projekt.

5.  Aktualisieren Sie den HTML-Code um das neue `phonegap-1.4.0.js` [Datei](../../../cordova/file/fileobj/fileobj.html).

6.  Update `res/xml/plugins.xml` entsprechend`framework/res/xml/plugins.xml`.

7.  Update `res/xml/phonegap.xml` entsprechend`framework/res/xml/phonegap.xml`.

## Ein Upgrade auf 1.3.0 von 1.2.0

1.  Entfernen von `phonegap-1.2.0.jar` aus des Projekts `libs` Verzeichnis.

2.  Hinzufügen von `phonegap-1.3.0.jar` für des Projekts `libs` Verzeichnis.

3.  Bei Verwendung von Eclipse, Eclipse Projekt aktualisieren und eine saubere zu tun.

4.  Kopieren Sie die neue `phonegap-1.3.0.js` in Ihr Projekt.

5.  Aktualisieren Sie den HTML-Code um das neue `phonegap-1.2.0.js` [Datei](../../../cordova/file/fileobj/fileobj.html).

6.  Update `res/xml/plugins.xml` entsprechend`framework/res/xml/plugins.xml`.

7.  Update `res/xml/phonegap.xml` entsprechend`framework/res/xml/phonegap.xml`.

## Ein Upgrade auf 1.2.0 von 1.1.0

1.  Entfernen von `phonegap-1.1.0.jar` aus des Projekts `libs` Verzeichnis.

2.  Hinzufügen von `phonegap-1.2.0.jar` für des Projekts `libs` Verzeichnis.

3.  Bei Verwendung von Eclipse, Eclipse Projekt aktualisieren und eine saubere zu tun.

4.  Kopieren Sie die neue `phonegap-1.2.0.js` in Ihr Projekt.

5.  Aktualisieren Sie den HTML-Code um das neue `phonegap-1.2.0.js` [Datei](../../../cordova/file/fileobj/fileobj.html).

6.  Update `res/xml/plugins.xml` entsprechend`framework/res/xml/plugins.xml`.

7.  Update `res/xml/phonegap.xml` entsprechend`framework/res/xml/phonegap.xml`.

## Aktualisieren Sie von 1.0.0 auf 1.1.0

1.  Entfernen von `phonegap-1.0.0.jar` aus des Projekts `libs` Verzeichnis.

2.  Hinzufügen von `phonegap-1.1.0.jar` für des Projekts `libs` Verzeichnis.

3.  Bei Verwendung von Eclipse, Eclipse Projekt aktualisieren und eine saubere zu tun.

4.  Kopieren Sie die neue `phonegap-1.1.0.js` in Ihr Projekt.

5.  Aktualisieren Sie den HTML-Code um das neue `phonegap-1.1.0.js` [Datei](../../../cordova/file/fileobj/fileobj.html).

6.  Update `res/xml/plugins.xml` entsprechend`framework/res/xml/plugins.xml`.

## Ein Upgrade auf 1.0.0 von 0.9.6

1.  Entfernen von `phonegap-0.9.6.jar` aus des Projekts `libs` Verzeichnis.

2.  Hinzufügen von `phonegap-1.0.0.jar` für des Projekts `libs` Verzeichnis.

3.  Bei Verwendung von Eclipse, Eclipse Projekt aktualisieren und eine saubere zu tun.

4.  Kopieren Sie die neue `phonegap-1.0.0.js` in Ihr Projekt.

5.  Aktualisieren Sie den HTML-Code um das neue `phonegap-1.0.0.js` [Datei](../../../cordova/file/fileobj/fileobj.html).

6.  Fügen Sie die `res/xml/plugins.xml` entsprechend`framework/res/xml/plugins.xml`.