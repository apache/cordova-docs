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

# Aktualisieren von Windows 8

Diese Anleitung zeigt, wie Windows 8 Projekte Upgrade von älteren Versionen von Cordova ändern. Die meisten diese Anweisungen gelten für Projekte, die mit einer älteren Befehlszeilentools, die vorangehen erstellt die `cordova` CLI-Hilfsprogramm. Die Command-Line Interface Informationen finden Sie unter Gewusst wie: Aktualisieren Sie die Version der CLI.

## Ein Upgrade auf 3.2.0 von 3.1.0

Für Projekte, die mit Cordova CLI erstellt wurden:

1.  Update der `cordova` CLI-Version. Finden Sie die Befehlszeilenschnittstelle.

2.  Ausführen`cordova platform update windows8`.

Für Projekte, die nicht mit der Cordova CLI erstellt ausgeführt:

        bin\update <project_path>
    

## Upgrade auf 3.1.0

Cordova CLI-Unterstützung für Windows 8 wurde in Cordova 3.1.0 eingeführt. Um ein Upgrade durchzuführen, empfehlen wir, erstellen eine neue Cordova CLI Projekt und Sie über alle erforderlichen Assets bewegen.

## Ein Upgrade auf 2.9.0 von 2.8.0

Die folgenden Befehle sollten aus innerhalb von Visual Studio gewiss geschehen, dass das Projektverweise aktualisiert/gelöscht werden.

1.  Entfernen von `cordova-2.8.0.js` aus des Projekts `www` Verzeichnis.

2.  Fügen Sie `cordova.js` -Datei von der Quelle auf des Projekts `www` Verzeichnis. (Beachten Sie, dass die Datei nicht mehr eine Versionsnummer im Dateinamen enthält.)

3.  Erstellen und testen!

## Ein Upgrade auf 2.8.0 von 2.7.0

Die folgenden Befehle sollten aus innerhalb von Visual Studio gewiss geschehen, dass das Projektverweise aktualisiert/gelöscht werden.

1.  Entfernen von `cordova-2.7.0.js` aus des Projekts `www` Verzeichnis.

2.  Fügen Sie `cordova.js` -Datei von der Quelle auf des Projekts `www` Verzeichnis. (Beachten Sie, dass die Datei nicht mehr eine Versionsnummer im Dateinamen enthält.)

3.  Erstellen und testen!