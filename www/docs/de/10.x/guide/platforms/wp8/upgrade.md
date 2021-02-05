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

title: Aktualisieren von Windows Phone 8
---

# Aktualisieren von Windows Phone 8

Diese Anleitung zeigt, wie Windows Phone 8 Projekte, um ein upgrade von älteren Versionen von Cordova zu ändern. Einige dieser Anweisungen beziehen sich auf Projekte, die mit einer älteren Befehlszeilentools, die vorangehen erstellt die `cordova` CLI-Hilfsprogramm. Informationen finden Sie unter The Command-Line Interface die CLI-Version zu aktualisieren. Der folgende Abschnitt zeigt wie von nicht-CLI und CLI Projekte aktualisiert.

## Upgrade 3.6.0 Projekte 4.0.0

Für nicht-CLI Projekte führen:

        bin/update path/to/project
    

CLI-Projekte:

1.  Update der `cordova` CLI-Version. Finden Sie die Befehlszeilenschnittstelle.

2.  Führen Sie `cordova platform update wp8` in Ihre bestehenden Projekte.

## Ein Upgrade auf 3.2.0 von 3.1.0

Für Projekte, die mit Cordova CLI erstellt wurden:

1.  Update der `cordova` CLI-Version. Finden Sie die Befehlszeilenschnittstelle.

2.  Ausführen`cordova platform update wp8`

Für Projekte, die nicht mit der Cordova CLI erstellt ausgeführt:

        bin\update <project_path>
    

## Ein Upgrade auf 3.1.0 von 3.0.0

Für Projekte, die mit Cordova CLI erstellt wurden:

1.  Update der `cordova` CLI-Version. Finden Sie die Befehlszeilenschnittstelle.

2.  Ausführen`cordova platform update wp8`

Für Projekte, die nicht mit der Cordova CLI erstellt ausgeführt:

        bin\update <project_path>
    

## Upgrade auf die CLI (3.0.0) von 2.9.0

1.  Erstellen Sie ein neues Apache Cordova 3.0.0-Projekt mit Cordova CLI, wie in der Command-Line Interface beschrieben.

2.  Die Plattformen der Cordova Projekt fügen Sie hinzu, zum Beispiel:`cordova
platform add wp8`.

3.  Kopieren Sie den Inhalt des Projekts `www` Verzeichnis in das `www` Verzeichnis im Stammverzeichnis des Projektes Cordova, die Sie gerade erstellt haben.

4.  Kopieren oder überschreiben nativen Vermögen aus dem ursprünglichen Projekt (`SplashScreen`, `ApplicationIcon`, etc.), sicherstellen, dass alle neuen Dateien die `.csproj`-Datei hinzu. Die Fenster Telefon Projektbuilds innerhalb des `platforms\wp8`-Verzeichnisses.

5.  Verwenden Sie Cordova-CLI-Tool, um alle Plugins zu installieren, die Sie brauchen. Beachten Sie, dass die CLI behandelt alle Kern-APIs als Plugins, so müssen sie möglicherweise hinzugefügt werden. Nur 3.0.0 Plugins sind kompatibel mit CLI.

6.  Erstellen und testen.

## Ein Upgrade auf 3.0.0 (CLI) von 2.x

Im Projektmappen-Explorer-Fenster von Visual Studio:

1.  Erstellen Sie eine neue Apache Cordova WP8 3.0.0-Projekt.

2.  Kopieren Sie den Inhalt von den `www` Verzeichnis in das neue Projekt und achten, dass diese Elemente werden dem VS-Projekt hinzugefügt.

3.  Kopieren Sie und überschreiben Sie alle Splash-Screen oder Symbolbilder.

4.  Über alle Plugins aus dem `plugins`-Verzeichnis in das neue Projekt kopieren und damit auch das VS-Projekt hinzugefügt werden.

5.  Erstellen und testen.

**Hinweis**: alle zentralen APIs aus Cordova Version 3.0 entfernt werden und müssen separat als Plugins installiert werden. Weitere Informationen zum Aktivieren dieser Features in einem nicht-CLI-Workflow neu finden Sie unter Verwendung von Plugman zu Plugins verwalten.