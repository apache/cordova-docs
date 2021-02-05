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

Diese Anleitung zeigt, wie Android Projekte Upgrade von älteren Versionen von Cordova ändern. Die meisten diese Anweisungen gelten für Projekte, die mit einer älteren Befehlszeilentools, die vorangehen erstellt die `cordova` CLI-Hilfsprogramm. Informationen finden Sie unter The Command-Line Interface die CLI-Version zu aktualisieren.

## Upgrade auf 4.0.0

Gibt es bestimmte Schritte benötigt, um wichtige Änderungen in 4.0.0 nutzen. Zunächst werden die gemeinsamen Schritte wie unten beschrieben.

Für nicht-CLI-Projekte führen:

        bin/update path/to/project


CLI-Projekte:

1.  Update der `cordova` CLI-Version. Finden Sie die Befehlszeilenschnittstelle.

2.  `cordova platform update android` in Ihre bestehenden Projekte ausgeführt.

### Aktualisierung der weißen Liste

Alle Whitelist-Funktionalität ist jetzt via Plugin implementiert. Ohne Plugin ist Ihre Anwendung nicht mehr durch eine Whitelist geschützt, nach dem Upgrade auf 4.0.0. Cordova hat zwei Whitelist-Plugins, die verschiedene Ebenen des Schutzes zur Verfügung zu stellen.

1.  `Cordova-Plugin-Whitelist` Plugin *(empfohlen)*

    *   Dieses Plugin wird dringend empfohlen, da es sicherer und konfigurierbar als die Whitelist in früheren Versionen ist,
    *   Siehe [Cordova-Plugin-Whitelist][1] für Details auf die Konfigurationsänderungen erforderlich
    *   Ausführung: `cordova plugin add cordova-plugin-crosswalk-webview`

2.  `Cordova-Plugin-Legacy-Whitelist` plugin

    *   Dieses Plugin bietet das Whitelist-Verhalten wie in früheren Versionen. Siehe [Cordova-Plugin-Legacy-whitelist][2]
    *   Keine Konfigurationsänderungen sind erforderlich, aber es bietet weniger Schutz als die empfohlenen plugin
    *   Ausführung: `cordova plugin add cordova-plugin-legacy-whitelist`

 [1]: https://github.com/apache/cordova-plugin-whitelist
 [2]: https://github.com/apache/cordova-plugin-legacy-whitelist

### Mithilfe der Zebrastreifen WebView

Standardmäßig wird Ihre Anwendung weiterhin das System verwenden WebView vom Gerät zur Verfügung gestellt. Wenn Sie den Zebrastreifen WebView stattdessen verwenden möchten, fügen Sie einfach das Zebrastreifen-Plugin:

    cordova plugin add cordova-plugin-crosswalk-webview


Das Plugin hinzufügen, erhalten Ihre app den Zebrastreifen WebView ordnungsgemäß installiert und konfiguriert.

### Upgrade auf das Splashscreen-Plugin

Wenn Ihre app macht Verwendung von einen Splash-Screen Funktionalität zu einem Plugin verschoben wurde. Die Konfigurationsoptionen für Begrüßungsbildschirme sind unverändert. Der einzige Upgrade Schritt benötigt, ist das Plugin hinzufügen:

    cordova plugin add cordova-plugin-splashscreen


## Upgrade von 3.6.0 auf 3.7.1

Für nicht-CLI-Projekte führen:

        bin/update path/to/project


CLI-Projekte:

1.  Update der `cordova` CLI-Version. Finden Sie die Befehlszeilenschnittstelle.

2.  Führen Sie `cordova platform update android` in Ihre bestehenden Projekte.

## Upgrade von 3.2.0 auf 3.3.0

Folgen Sie die Anweisungen wie für `3.2.0`.

Beginnend mit 3.3.0, wird Cordova-Runtime jetzt als Android-Bibliothek anstelle von einem Glas kompiliert. Dies sollte keine Auswirkungen für Command-Line Usage, aber IDE-Benutzer müssen das neu hinzugefügte `MyProject-CordovaLib`-Projekt in ihren Arbeitsbereich zu importieren.

## Upgrade von 3.1.0 auf 3.2.0

Für Projekte, die mit Cordova CLI erstellt wurden:

1.  Update der `cordova` CLI-Version. Finden Sie die Befehlszeilenschnittstelle.

2.  `cordova plattform update android` ausführen

Für Projekte, die nicht mit der Cordova CLI erstellt ausgeführt:

        bin/update <project_path>


**WARNUNG:** Auf Android 4.4 - Android 4.4.3, Erstellen einer Datei input-Element mit type="file" wird nicht im Dialog Datei Picker. Dies ist eine Regression mit Chrom auf Android und das Problem reproduzierbar in der Standalone-Chrome-Browser auf Android (siehe http://code.google.com/p/android/issues/detail?id=62220) die empfohlene Problemumgehung besteht darin die FileTransfer und Datei-Plugins für Android 4.4 verwenden. Sie können für ein OnClick-Ereignis aus der Eingabetyp type="file" und dann pop-up eine Dateiauswahl UI. Um die Formulardaten mit dem Upload zu binden, können Sie JavaScript Formularwerte FileTransfer macht die mehrteilige POST-Anforderung an.

## Upgrade von 3.0.0 auf 3.1.0

Für Projekte, die mit Cordova CLI erstellt wurden:

1.  Update der `cordova` CLI-Version. Finden Sie die Befehlszeilenschnittstelle.

2.  `cordova plattform update android` ausführen

Für Projekte, die nicht mit der Cordova CLI erstellt ausgeführt:

        bin/update <project_path>


## Upgrade auf die CLI (3.0.0) aus 2.9.0

1.  Erstellen Sie ein neues Apache Cordova 3.0.0-Projekt mit Cordova CLI, wie in der Command-Line Interface beschrieben.

2.  Fügen Sie Ihrer Plattformen Projektes Cordova, zum Beispiel: `cordova platform add android`.

3.  Kopieren Sie den Inhalt der `Www`-Verzeichnis des Projekts in das `Www`-Verzeichnis im Stammverzeichnis des Projektes Cordova soeben erstellten.

4.  Nativen Vermögen aus dem alten Projekt kopieren, in die entsprechenden Verzeichnisse unter `platforms/android`: in diesem Verzeichnis werden in dem systemeigene Cordova-Android Projekt vorhanden ist.

5.  Verwenden Sie das Cordova CLI Tool irgendwelche Plugins installieren, die Sie brauchen. Beachten Sie, dass die CLI behandelt alle Kern-APIs wie Plugins, so müssen sie möglicherweise hinzugefügt werden. Nur 3.0.0 Plugins sind kompatibel mit CLI.

## Ein Upgrade auf 3.0.0 von 2.9.0

1.  Erstellen Sie ein neues Apache Cordova Android Projekt.

2.  Kopieren Sie den Inhalt des Verzeichnisses `www` zum neuen Projekt.

3.  Kopieren Sie nativen Android Vermögen aus dem `res`-Verzeichnis zum neuen Projekt.

4.  Kopieren Sie über alle Plugins, die Sie aus der `src`-Unterverzeichnissen in das neue Projekt installiert.

5.  Achten Sie darauf, alle aktualisieren veraltet `<plugin>` Verweise aus der alten Datei `"config.xml"` auf der neuen `<feature>` Spezifikation.

6.  Alle Verweise auf das `org.apache.cordova.api`-Paket `org.apache.cordova` zu aktualisieren.

    **Hinweis**: alle Core APIs wurden entfernt und als Plugins installiert sein. Einzelheiten finden Sie unter der Verwendung von Plugman zum Verwalten von Plugins-Anleitung.

## Ein Upgrade auf 2.9.0 von 2.8.0

1.  Run `bin/update <project_path>`.

## Ein Upgrade auf 2.8.0 von 2.7.0

1.  Entfernen Sie `Cordova-2.7.0.jar` aus dem Projektverzeichnis `Libs` .

2.  `Cordova-2.8.0.jar` des Projekts `Libs` Verzeichnis hinzufügen.

3.  Wenn Sie Eclipse verwenden, aktualisieren das Eclipse-Projekt und eine saubere zu tun.

<!-- SS Eclipse -->

1.  Kopieren Sie die neue `cordova.js` in Ihr Projekt.

2.  Aktualisieren Sie den HTML-Code um die neue `cordova.js` -Datei verwenden.

3.  Kopieren Sie die Datei `res/xml/config.xml` , um `framework/res/xml/config.xml` zu entsprechen.

4.  Update `framework/res/xml/config.xml` ähnliche Einstellungen haben, wie es früher war.

5.  Kopieren Sie Dateien aus `bin/templates/cordova` dem Projekt `cordova` Verzeichnis.

## Ein Upgrade auf 2.7.0 von 2.6.0

1.  Entfernen Sie `Cordova-2.6.0.jar` aus dem Projektverzeichnis `Libs` .

2.  `Cordova-2.7.0.jar` des Projekts `Libs` Verzeichnis hinzufügen.

3.  Wenn Sie Eclipse verwenden, aktualisieren das Eclipse-Projekt und eine saubere zu tun.

4.  Kopieren Sie die neue `cordova-2.7.0.js` in Ihr Projekt.

5.  Aktualisieren Sie den HTML-Code um die neue `cordova-2.7.0.js` -Datei verwenden.

6.  Kopie der `res/xml/config.xml` entsprechend`framework/res/xml/config.xml`.

7.  Update `framework/res/xml/config.xml` ähnliche Einstellungen haben, wie es früher war.

8.  Kopieren Sie Dateien aus `bin/templates/cordova` für des Projekts `cordova` Verzeichnis.

## Ein Upgrade auf 2.6.0 von 2.5.0

1.  Entfernen Sie `Cordova-2.5.0.jar` aus dem Projektverzeichnis `Libs` .

2.  `Cordova-2.6.0.jar` des Projekts `Libs` Verzeichnis hinzufügen.

3.  Wenn Sie Eclipse verwenden, aktualisieren das Eclipse-Projekt und eine saubere zu tun.

4.  Kopieren Sie die neue `cordova-2.6.0.js` in Ihr Projekt.

5.  Aktualisieren Sie Ihre HTML-um das neue `cordova-2.6.0.js` Datei.

6.  Kopie der `res/xml/config.xml` entsprechend`framework/res/xml/config.xml`.

7.  Update `framework/res/xml/config.xml` ähnliche Einstellungen haben, wie es früher war.

8.  Kopieren Sie Dateien aus `bin/templates/cordova` dem Projekt `cordova` Verzeichnis.

Führen Sie `bin/update <project>` mit den Projektpfad im Cordova Quellverzeichnis aufgeführt.

## Ein Upgrade auf 2.5.0 von 2.4.0

1.  Entfernen Sie `Cordova-2.4.0.jar` aus dem Projektverzeichnis `Libs` .

2.  `Cordova-2.5.0.jar` des Projekts `Libs` Verzeichnis hinzufügen.

3.  Wenn Sie Eclipse verwenden, aktualisieren das Eclipse-Projekt und eine saubere zu tun.

4.  Kopieren Sie die neue `cordova-2.5.0.js` in Ihr Projekt.

5.  Aktualisieren Sie Ihre HTML-um das neue `cordova-2.5.0.js` Datei.

6.  Kopie der `res/xml/config.xml` entsprechend`framework/res/xml/config.xml`.

7.  Update `framework/res/xml/config.xml` ähnliche Einstellungen haben, wie es früher war.

8.  Kopieren Sie Dateien aus `bin/templates/cordova` dem Projekt `cordova` Verzeichnis.

## Ein Upgrade auf 2.4.0 von 2.3.0

1.  Entfernen Sie `Cordova-2.3.0.jar` aus dem Projektverzeichnis `Libs` .

2.  `Cordova-2.4.0.jar` des Projekts `Libs` Verzeichnis hinzufügen.

3.  Wenn Sie Eclipse verwenden, aktualisieren das Eclipse-Projekt und eine saubere zu tun.

4.  Kopieren Sie die neue `cordova-2.4.0.js` in Ihr Projekt.

5.  Aktualisieren Sie Ihre HTML-um das neue `cordova-2.4.0.js` Datei.

6.  Kopie der `res/xml/config.xml` entsprechend`framework/res/xml/config.xml`.

7.  Kopieren Sie Dateien aus `bin/templates/cordova` für des Projekts `cordova` Verzeichnis.

## Ein Upgrade auf 2.3.0 von 2.2.0

1.  Entfernen Sie `Cordova-2.2.0.jar` aus dem Projektverzeichnis `Libs` .

2.  `Cordova-2.3.0.jar` des Projekts `Libs` Verzeichnis hinzufügen.

3.  Wenn Sie Eclipse verwenden, aktualisieren das Eclipse-Projekt und eine saubere zu tun.

4.  Kopieren Sie die neue `cordova-2.3.0.js` in Ihr Projekt.

5.  Aktualisieren Sie Ihre HTML-um das neue `cordova-2.3.0.js` Datei.

6.  Kopie der `res/xml/config.xml` entsprechend`framework/res/xml/config.xml`.

7.  Kopieren Sie Dateien aus `bin/templates/cordova` für des Projekts `cordova` Verzeichnis.

## Ein Upgrade auf 2.2.0 von 2.1.0

1.  Entfernen Sie `Cordova-2.1.0.jar` aus dem Projektverzeichnis `Libs` .

2.  `Cordova-2.2.0.jar` des Projekts `Libs` Verzeichnis hinzufügen.

3.  Wenn Sie Eclipse verwenden, aktualisieren das Eclipse-Projekt und eine saubere zu tun.

4.  Kopieren Sie die neue `cordova-2.2.0.js` in Ihr Projekt.

5.  Aktualisieren Sie Ihre HTML-um das neue `cordova-2.2.0.js` Datei.

6.  Kopie der `res/xml/config.xml` entsprechend`framework/res/xml/config.xml`.

7.  Kopieren Sie Dateien aus `bin/templates/cordova` dem Projekt `cordova` Verzeichnis.

## Upgrade auf 2.1.0 von 2.0.0

1.  Entfernen Sie `Cordova-2.0.0.jar` aus dem Projektverzeichnis `Libs` .

2.  `Cordova-2.1.0.jar` des Projekts `Libs` Verzeichnis hinzufügen.

3.  Wenn Sie Eclipse verwenden, aktualisieren das Eclipse-Projekt und eine saubere zu tun.

4.  Kopieren Sie die neue `cordova-2.1.0.js` in Ihr Projekt.

5.  Aktualisieren Sie Ihre HTML-um das neue `cordova-2.1.0.js` Datei.

6.  Kopie der `res/xml/config.xml` entsprechen`framework/res/xml/config.xml`.

7.  Kopieren Sie Dateien aus `bin/templates/cordova` dem Projekt `cordova` Verzeichnis.

## Ein Upgrade auf 2.0.0 von 1.9.0

1.  Entfernen Sie `Cordova-1.9.0.jar` aus dem Projektverzeichnis `Libs` .

2.  `Cordova-2.0.0.jar` des Projekts `Libs` Verzeichnis hinzufügen.

3.  Wenn Sie Eclipse verwenden, aktualisieren das Eclipse-Projekt und eine saubere zu tun.

4.  Kopieren Sie die neue `cordova-2.0.0.js` in Ihr Projekt.

5.  Aktualisieren Sie Ihre HTML-um das neue `cordova-2.0.0.js` Datei.

6.  Kopie der `res/xml/config.xml` entsprechen`framework/res/xml/config.xml`.

In der 2.0.0 Release, die Datei `config.xml` kombiniert und ersetzt `cordova.xml` und `plugins.xml`. Die alten Dateien sind veraltet, und während sie noch in 2.0.0, arbeiten funktioniert nicht mehr in einer zukünftigen Version.

## Ein Upgrade auf 1.9.0 von 1.8.1

1.  Entfernen Sie `Cordova-1.8.0.jar` aus dem Projektverzeichnis `Libs` .

2.  `Cordova-1.9.0.jar` des Projekts `Libs` Verzeichnis hinzufügen.

3.  Wenn Sie Eclipse verwenden, aktualisieren das Eclipse-Projekt und eine saubere zu tun.

4.  Kopieren Sie die neue `Cordova-1.9.0.js` in Ihr Projekt.

5.  Aktualisieren Sie den HTML-Code um die neue `Cordova-1.9.0.js` -Datei verwenden.

6.  Update `res/xml/plugins.xml` entsprechend`framework/res/xml/plugins.xml`.

Aufgrund der Einführung des `CordovaWebView` in die 1.9.0 release, Drittanbieter Plugins funktionieren nicht. Diese Plugins müssen einen Kontext aus dem `CordovaInterface` mit `getContext()` oder `getActivity()`. Wenn Sie kein erfahrener Android-Entwickler sind, bitte kontaktieren Sie den Plugin-Betreuer und fügen Sie diese Aufgabe auf ihre Bug-Tracker.

## Ein Upgrade auf 1.8.0 von 1.8.0

1.  Entfernen Sie `Cordova-1.8.0.jar` aus dem Projektverzeichnis `Libs` .

2.  `Cordova-1.8.1.jar` des Projekts `Libs` Verzeichnis hinzufügen.

3.  Wenn Sie Eclipse verwenden, aktualisieren das Eclipse-Projekt und eine saubere zu tun.

4.  Kopieren Sie die neue `Cordova-1.8.1.js` in Ihr Projekt.

5.  Aktualisieren Sie den HTML-Code um die neue `Cordova-1.8.1.js` -Datei verwenden.

6.  Update `res/xml/plugins.xml` entsprechend`framework/res/xml/plugins.xml`.

## Ein Upgrade auf 1.8.0 von 1.7.0

1.  Entfernen Sie `Cordova-1.7.0.jar` aus dem Projektverzeichnis `Libs` .

2.  `Cordova-1.8.0.jar` des Projekts `Libs` Verzeichnis hinzufügen.

3.  Wenn Sie Eclipse verwenden, aktualisieren das Eclipse-Projekt und eine saubere zu tun.

4.  Kopieren Sie die neue `cordova-1.8.0.js` in Ihr Projekt.

5.  Aktualisieren Sie Ihre HTML-um das neue `cordova-1.8.0.js` Datei.

6.  Update `res/xml/plugins.xml` übereinstimmen`framework/res/xml/plugins.xml`.

## Ein Upgrade auf 1.8.0 von 1.7.0

1.  Entfernen Sie `Cordova-1.7.0.jar` aus dem Projektverzeichnis `Libs` .

2.  `Cordova-1.8.0.jar` des Projekts `Libs` Verzeichnis hinzufügen.

3.  Wenn Sie Eclipse verwenden, aktualisieren das Eclipse-Projekt und eine saubere zu tun.

4.  Kopieren Sie die neue `cordova-1.8.0.js` in Ihr Projekt.

5.  Aktualisieren Sie Ihre HTML-um das neue `cordova-1.8.0.js` Datei.

6.  Update `res/xml/plugins.xml` übereinstimmen`framework/res/xml/plugins.xml`.

## Ein Upgrade auf 1.7.0 von 1.6.1

1.  Entfernen Sie `Cordova-1.6.1.jar` aus dem Projektverzeichnis `Libs` .

2.  `Cordova-1.7.0.jar` des Projekts `Libs` Verzeichnis hinzufügen.

3.  Wenn Sie Eclipse verwenden, aktualisieren das Eclipse-Projekt und eine saubere zu tun.

4.  Kopieren Sie die neue `Cordova-1.7.0.js` in Ihr Projekt.

5.  Update `res/xml/plugins.xml` übereinstimmen`framework/res/xml/plugins.xml`.

## Ein Upgrade auf 1.6.1 von 1.6.0

1.  Entfernen Sie `Cordova-1.6.0.jar` aus dem Projektverzeichnis `Libs` .

2.  `Cordova-1.6.1.jar` des Projekts `Libs` Verzeichnis hinzufügen.

3.  Wenn Sie Eclipse verwenden, aktualisieren das Eclipse-Projekt und eine saubere zu tun.

4.  Kopieren Sie die neue `Cordova-1.6.1.js` in Ihr Projekt.

5.  Update `res/xml/plugins.xml` übereinstimmen`framework/res/xml/plugins.xml`.

## Ein Upgrade auf 1.6.0 von 1.5.0

1.  Entfernen Sie `Cordova-1.5.0.jar` aus dem Projektverzeichnis `Libs` .

2.  `Cordova-1.6.0.jar` des Projekts `Libs` Verzeichnis hinzufügen.

3.  Wenn Sie Eclipse verwenden, aktualisieren das Eclipse-Projekt und eine saubere zu tun.

4.  Kopieren Sie die neue `Cordova-1.6.0.js` in Ihr Projekt.

5.  Aktualisieren Sie den HTML-Code um die neue `Cordova-1.6.0.js` -Datei verwenden.

6.  Update `res/xml/plugins.xml` entsprechend`framework/res/xml/plugins.xml`.

7.  Ersetzen Sie `res/xml/phonegap.xml` durch `res/xml/cordova.xml` entsprechend `framework/res/xml/cordova.xml`.

## Ein Upgrade auf 1.5.0 von 1.4.0

1.  Entfernen Sie `Phonegap-1.4.0.jar` aus dem Projektverzeichnis `Libs` .

2.  `Cordova-1.5.0.jar` des Projekts `Libs` Verzeichnis hinzufügen.

3.  Wenn Sie Eclipse verwenden, aktualisieren das Eclipse-Projekt und eine saubere zu tun.

4.  Kopieren Sie die neue `Cordova-1.5.0.js` in Ihr Projekt.

5.  Aktualisieren Sie den HTML-Code um die neue `Cordova-1.5.0.js` -Datei verwenden.

6.  Update `res/xml/plugins.xml` entsprechend`framework/res/xml/plugins.xml`.

7.  Ersetzen Sie `res/xml/phonegap.xml` durch `res/xml/cordova.xml` entsprechend `framework/res/xml/cordova.xml`.

## Ein Upgrade auf 1.4.0 von 1.3.0

1.  Entfernen Sie `Phonegap-1.3.0.jar` aus dem Projektverzeichnis `Libs` .

2.  Das Verzeichnis des Projekts `Libs` `Phonegap-1.4.0.jar` hinzufügen.

3.  Wenn Sie Eclipse verwenden, aktualisieren das Eclipse-Projekt und eine saubere zu tun.

4.  Kopieren Sie die neue `Phonegap-1.4.0.js` in Ihr Projekt.

5.  Aktualisieren Sie den HTML-Code um die neue `Phonegap-1.4.0.js` -Datei verwenden.

6.  Update `res/xml/plugins.xml` entsprechend`framework/res/xml/plugins.xml`.

7.  Update `res/xml/phonegap.xml` entsprechend`framework/res/xml/phonegap.xml`.

## Ein Upgrade auf 1.3.0 von 1.2.0

1.  Entfernen Sie `Phonegap-1.2.0.jar` aus dem Projektverzeichnis `Libs` .

2.  Das Verzeichnis des Projekts `Libs` `Phonegap-1.3.0.jar` hinzufügen.

3.  Wenn Sie Eclipse verwenden, aktualisieren das Eclipse-Projekt und eine saubere zu tun.

4.  Kopieren Sie die neue `Phonegap-1.3.0.js` in Ihr Projekt.

5.  Aktualisieren Sie den HTML-Code um die neue `Phonegap-1.2.0.js` -Datei verwenden.

6.  Update `res/xml/plugins.xml` entsprechend`framework/res/xml/plugins.xml`.

7.  Update `res/xml/phonegap.xml` übereinstimmen`framework/res/xml/phonegap.xml`.

## Ein Upgrade auf 1.2.0 von 1.1.0

1.  Entfernen Sie `Phonegap-1.1.0.jar` aus dem Projektverzeichnis `Libs` .

2.  Das Verzeichnis des Projekts `Libs` `Phonegap-1.2.0.jar` hinzufügen.

3.  Wenn Sie Eclipse verwenden, aktualisieren das Eclipse-Projekt und eine saubere zu tun.

4.  Kopieren Sie die neue `Phonegap-1.2.0.js` in Ihr Projekt.

5.  Aktualisieren Sie den HTML-Code um die neue `Phonegap-1.2.0.js` -Datei verwenden.

6.  Update `res/xml/plugins.xml` übereinstimmen`framework/res/xml/plugins.xml`.

7.  Update `res/xml/phonegap.xml` übereinstimmen`framework/res/xml/phonegap.xml`.

## Von 1.0.0 auf 1.1.0 aktualisieren

1.  Entfernen Sie `Phonegap-1.0.0.jar` aus dem Projektverzeichnis `Libs` .

2.  Das Verzeichnis des Projekts `Libs` `Phonegap-1.1.0.jar` hinzufügen.

3.  Wenn Sie Eclipse verwenden, aktualisieren das Eclipse-Projekt und eine saubere zu tun.

4.  Kopieren Sie die neue `Phonegap-1.1.0.js` in Ihr Projekt.

5.  Aktualisieren Sie den HTML-Code um die neue `Phonegap-1.1.0.js` -Datei verwenden.

6.  Update `res/xml/plugins.xml` übereinstimmen`framework/res/xml/plugins.xml`.

## Ein Upgrade auf 1.0.0 von 0.9.6

1.  Entfernen Sie `Phonegap-0.9.6.jar` aus dem Projektverzeichnis `Libs` .

2.  Das Verzeichnis des Projekts `Libs` `Phonegap-1.0.0.jar` hinzufügen.

3.  Wenn Sie Eclipse verwenden, aktualisieren das Eclipse-Projekt und eine saubere zu tun.

4.  Kopieren Sie die neue `Phonegap-1.0.0.js` in Ihr Projekt.

5.  Aktualisieren Sie den HTML-Code um die neue `Phonegap-1.0.0.js` -Datei verwenden.

6.  Fügen Sie die `res/xml/plugins.xml` entsprechend `framework/res/xml/plugins.xml`.
