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

# Windows Phone Befehlszeilentools

Die `cordova` Befehlszeilen-Dienstprogramm ist ein High-Level Tool, das Ihnen erlaubt, Anwendungen auf mehreren Plattformen gleichzeitig zu erstellen. Eine ältere Version von Cordova Rahmen bietet Gruppen von Befehlszeilentools, die spezifisch für jede Plattform. Wenn sie als Alternative zu den CLI verwenden möchten, müssen Sie diese Version von Cordova von [cordova.apache.org][1]herunterladen. Der Download enthält separate Archiv für jede Plattform. Erweitern Sie die gewünschte Ziel-Plattform. Die hier beschriebenen Tools sind in der Regel in der obersten Ebene `bin` Verzeichnis, sonst finden Sie in die **README** -Datei ausführlichere Wegbeschreibung.

 [1]: http://cordova.apache.org

Informationen über die Low-Level-Befehlszeilenschnittstelle, die Plugins ermöglicht, finden Sie unter Verwendung von Plugman zu Plugins verwalten. Eine Übersicht finden Sie unter Application Plugins.

## Windows Phone

Die Windows Phone-Befehlszeilen-Tools unterstützen, erstellen, Erstellung und Ausführung von neuen Projekten. Befehle müssen über eine Cmd oder Powershell-Eingabeaufforderung ausgeführt werden.

WP8-Repo jetzt enthält Code zum Erstellen von WP7 + WP8 apps. Das Repo hat Unterverzeichnisse für die einzelnen: `wp7/` und`wp8/`.

## Erstellen Sie ein Projekt

Es gibt 2 Möglichkeiten, gehen Sie zum Erstellen einer neuen Apache Cordova WP7 oder WP8.

### Führen Sie die Batchdatei erstellen und installieren Sie die Vorlagen

*   Der Stamm der Repo enthält eine `createTemplates.bat` Datei. Doppelklick erzeugt zwei `.zip` Dateien: `CordovaWP7_x_x_x.zip` und `CordovaWP8_x_x_x.zip` , wobei *x.x.x* die aktuelle Versionsnummer darstellt. Um diese Dateien in Visual Studio leicht zu verwenden, zu kopieren, sie zu `My Documents\Visual Studio
2012\Templates\ProjectTemplates\` . Sie können dann neue Apache Cordova Windows Phone-Anwendungen aus Visual Studio erstellen **Datei → neues Projekt** Menü.

*   Wenn Sie die Batch-Datei von der Befehlszeile aus ausführen, können Sie auch mit einem Parameter automatisch installieren aufrufen

Führen Sie das Skript:

    > createTemplates.bat-installieren
    

### Verwenden Sie Create-Skripts über die Befehlszeile

Führen Sie den `create` Befehl, der vorhandenen Pfad für das Projekt, die Reverse-Domäne-Style Paket-ID und die app-Anzeigenamen angeben. Hier ist die Syntax für Windows Phone 7 und 8:

    >.\wp7\bin\create PathToNewProject [ PackageName ] [ AppName ]
    >.\wp8\bin\create PathToNewProject [ PackageName ] [ AppName ]
    
    >PathToNewProject : The path to where you wish to create the project
    >PackageName      : The namespace for the project (default is Cordova.Example)
    >AppName          : The name of the application (default is CordovaWP8AppProj or CordovaWP7AppProj)
    
    >examples:
    >.\wp7\bin\create C:\path\to\my_new_project
    >.\wp8\bin\create C:\path\to\my_new_project io.cordova.example CordovaWP8App
    

Starten Sie Visual Studio und öffnen Sie die Projektmappendatei (.sln) in (C:\path\to\my\_new\_project)

Erstellen und ausführen

## Erstellen des Projekts (reinigen, dann bauen)

*   Debug
    
    $ C:\path\to\my\_new\_project\cordova\build --debug

*   Release
    
    $ C:\path\to\my\_new\_project\cordova\build --release

## Die App ausgeführt

Führen Sie den Befehl "ausführen" mit den folgenden *optionalen* Parametern

*   Lastenheft. Dazu gehören `--emulator` , `--device` , oder`--target=<targetID>`.

*   Spezifikation zu bauen. Dazu gehören `--debug` , `--release` , oder`--nobuild`.
    
    $ C:\path\to\my\_new\_project\cordova\run \[Target\] \[Build\]

In der Standardeinstellung der `run` Befehl wird aufgerufen, mit `--emulator --debug` Wenn Flaggen nicht bereitgestellt werden.

## Reinigung

    $ C:\path\to\my_new_project\cordova\clean