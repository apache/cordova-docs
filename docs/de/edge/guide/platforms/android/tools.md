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

# Android-Befehlszeilenprogrammen

Die `cordova` Befehlszeilen-Dienstprogramm ist ein High-Level Tool, das Ihnen erlaubt, Anwendungen auf mehreren Plattformen gleichzeitig zu erstellen. Eine ältere Version von Cordova Rahmen bietet Gruppen von Befehlszeilentools, die spezifisch für jede Plattform. Wenn sie als Alternative zu den CLI verwenden möchten, müssen Sie diese Version von Cordova von [cordova.apache.org][1]herunterladen. Der Download enthält separate Archiv für jede Plattform. Erweitern Sie die gewünschte Ziel-Plattform. Die hier beschriebenen Tools sind in der Regel in der obersten Ebene `bin` Verzeichnis, sonst finden Sie in die **README** -Datei ausführlichere Wegbeschreibung.

 [1]: http://cordova.apache.org

Informationen über die Low-Level-Befehlszeilenschnittstelle, die Plugins ermöglicht, finden Sie unter Verwendung von Plugman zu Plugins verwalten. Eine Übersicht finden Sie unter Application Plugins.

## Erstellen Sie ein Projekt

Führen Sie den `create` Befehl, der vorhandenen Pfad für das Projekt, die rückwärts-Domäne-Style Paket-ID und die app-Anzeigenamen angeben. Hier ist die Syntax für Mac und Windows:

    $ /path/to/cordova-android/bin/create /path/to/project com.example.project_name ProjectName
    $ C:\path\to\cordova-android\bin\create.bat C:\path\to\project com.example.project_name ProjectName
    

## Build

Dies reinigt dann ein Projekt erstellt.

Debuggen Sie, auf Mac oder Windows:

    $ /path/to/project/cordova/build --debug
    $ C:\path\to\project\cordova\build.bat --debug
    

Version auf Mac oder Windows:

    $ /path/to/project/cordova/build --release
    $ C:\path\to\project\cordova\build.bat --release
    

## Führen Sie die Anwendung

Der `run` Befehl akzeptiert die folgenden *optionalen* Parameter:

*   Lastenheft. Dazu gehören `--emulator` , `--device` , oder`--target=<targetID>`.

*   Spezifikation zu bauen. Dazu gehören `--debug` , `--release` , oder`--nobuild`.
    
    $ /path/to/project/cordova/run \[Target\] \[Build\] $ C:\path\to\project\cordova\run.bat \[Target\] \[Build\]

Vergewissern Sie sich, erstellen Sie mindestens ein Android virtuelles Gerät, sonst Sie werden aufgefordert zu tun mit dem `android` Befehl. Wenn mehr als eine AVD als Ziel verfügbar ist, werden Sie aufgefordert, einen auswählen. In der Standardeinstellung der `run` Befehl erkennt ein angeschlossenes Gerät oder einen laufenden Emulator, wenn kein Gerät gefunden wird.

## Protokollierung

    $ /path/to/project/cordova/log
    $ C:\path\to\project\cordova\log.bat
    

### Reinigung

    $ /path/to/project/cordova/clean
    $ C:\path\to\project\cordova\clean.bat