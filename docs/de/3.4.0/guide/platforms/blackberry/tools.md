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

# BlackBerry-Befehlszeilentools

Die `cordova` Befehlszeilen-Dienstprogramm ist ein High-Level Tool, das Ihnen erlaubt, Anwendungen auf mehreren Plattformen gleichzeitig zu erstellen. Eine ältere Version von Cordova Rahmen bietet Gruppen von Befehlszeilentools, die spezifisch für jede Plattform. Wenn sie als Alternative zu den CLI verwenden möchten, müssen Sie diese Version von Cordova von [cordova.apache.org][1]herunterladen. Der Download enthält separate Archiv für jede Plattform. Erweitern Sie die gewünschte Ziel-Plattform. Die hier beschriebenen Tools sind in der Regel in der obersten Ebene `bin` Verzeichnis, sonst finden Sie in die **README** -Datei ausführlichere Wegbeschreibung.

 [1]: http://cordova.apache.org

## Erstellen Sie ein Projekt

Führen Sie den `create` Befehl, der vorhandenen Pfad für das Projekt, die rückwärts-Domäne-Style Paket-ID und die app-Anzeigenamen angeben. Hier ist die Syntax für Mac und Windows:

    $ /path/to/cordova-blackberry-webworks/bin/create /path/to/my_new_project com.example.project_name ProjectName
    $ /path/to/cordova-blackberry-webworks/bin/create.bat /path/to/my_new_project com.example.project_name ProjectName
    

**Hinweis:** Die BlackBerry-Plattform ignoriert die Platzhalter für die Paket-Namen ( `com.example.project_name` ), aber es ist immer noch für den Einsatz von Cross-Plattform-Tools erforderlich.

## Erstellen eines Projekts

Für BlackBerry-Projekte, stellen Sie sicher, Sie Anpassen der `project.properties` Datei im Root-Verzeichnis des Projekts Cordova. Du musst tun, um Ihr BlackBerry Unterzeichnung Kennwort angeben, und geben Speicherorte für BlackBerry WebWorks SDK und BlackBerry Emulator ausführbare Dateien.

    $ /path/to/my_new_project/cordova/build <platform>
    $ /path/to/my_new_project/cordova/build.bat <platform>
    

## Emulator starten

Für BlackBerry-Projekte, stellen Sie sicher, Sie Anpassen der `project.properties` Datei in das Stammverzeichnis des Cordova Projekt. Du musst tun, um Ihr BlackBerry Unterzeichnung Kennwort angeben, und geben Speicherorte für BlackBerry WebWorks SDK und BlackBerry Emulator ausführbare Dateien.

    $ /path/to/my_new_project/cordova/run <platform>
    

und dann wählen Sie "Nein", mit der Aufforderung:

    Haben Sie ein BlackBerry-Gerät an Ihren Computer angeschlossen? (y/n) $ /path/to/my_new_project/cordova/run <platform>
    

und dann wählen Sie "Nein", mit der Aufforderung:

    Haben Sie ein BlackBerry-Gerät an Ihren Computer angeschlossen? (y/n)
    

## Protokollierung

Leider ist das streaming Protokolle direkt vom Gerät derzeit nicht unterstützt. BlackBerry bietet jedoch integrierten Web Inspector-Unterstützung für Textbuch und BlackBerry-Smartphones mit BlackBerry OS 7.0 und höher. Sie können auch Ihre Anwendungsprotokolle zugreifen (einschließlich alle Aufrufe an `console.log` ) auf Ihrem Gerät durch die '' ALT'' gedrückt aus dem home-Bildschirm und Eingabe '' Lglg'' Schlüssel.