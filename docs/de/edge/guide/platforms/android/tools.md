* * *

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

## under the License.

# Android Shell Tool Guide

Diese Anleitung zeigt wie Cordovas Satz von Plattform-zentrierte Shell Tools verwenden, um Android apps zu entwickeln. Dieser Entwicklungspfad, diskutiert in der Übersicht, möglicherweise einen größeren Bereich von Entwicklungsoptionen als das Cross-Plattform-CLI-Tool beschrieben in The Command-Line Interface anbieten. Beispielsweise müssen Sie Shell-Hilfsmittel zu verwenden, wenn Sie eine benutzerdefinierte Cordova WebView neben systemeigenen Komponenten bereitstellen. Vor der Verwendung von entweder Entwicklungsweg, müssen Sie zuerst die Android SDK-Umgebung konfigurieren, wie in der Android-Plattform-Handbuch beschrieben.

Zum Aktivieren der Shell-Hilfsmittel für Android download Cordova von [cordova.apache.org][1]. Der Download enthält separate Archiv für jede Plattform. Erweitern Sie jedes Ziel, soll `android` in diesem Fall. Die entsprechenden Tools stehen in der Regel in den übergeordneten `bin` Verzeichnis, sonst finden Sie in der **README** -Datei für detailliertere Wegbeschreibung.

 [1]: http://cordova.apache.org

Diese Tools können Sie erstellen, erstellen und Ausführen von Android apps. Informationen über die zusätzliche Befehlszeilenschnittstelle, die Plugin-Features für alle Plattformen aktiviert, finden Sie unter Using Plugman zu Plugins verwalten. Details zum Entwickeln von Plugins finden Sie in der Anwendung-Plugins.

## Erstellen Sie ein Projekt

Führen Sie den `create` Befehl, der vorhandenen Pfad für das Projekt, die Reverse-Domäne-Style Paket-ID und die app-Anzeigenamen angeben. Hier ist die Syntax für Mac/Linux und Windows:

        $ /path/to/cordova-android/bin/create /path/to/project com.example.project_name ProjectName
    
        C:\>\path\to\cordova-android\bin\create.bat \path\to\project com.example.project_name ProjectName
    

## Build

Dies reinigt dann ein Projekt erstellt.

Debug auf Mac/Linux oder Windows:

        $ /path/to/project/cordova/build --debug
    
        C:\>\path\to\project\cordova\build.bat --debug
    

Version auf Mac/Linux oder Windows:

        $ /path/to/project/cordova/build --release
    
        C:\>\path\to\project\cordova\build.bat --release
    

## Führen Sie die Anwendung

Der `run` Befehl akzeptiert die folgenden *optionalen* Parameter:

*   Lastenheft. Dazu gehören `--emulator` , `--device` , oder`--target=<targetID>`.

*   Spezifikation zu bauen. Dazu gehören `--debug` , `--release` , oder`--nobuild`.
    
        $ /path/to/project/cordova/run [Target] [Build]
        
        C:\>\path\to\project\cordova\run.bat [Target] [Build]
        

Vergewissern Sie sich, erstellen Sie mindestens ein Android virtuelles Gerät, sonst Sie werden aufgefordert zu tun mit dem `android` Befehl. Wenn mehr als eine AVD als Ziel verfügbar ist, werden Sie aufgefordert, einen auswählen. In der Standardeinstellung der `run` Befehl erkennt ein angeschlossenes Gerät oder einen laufenden Emulator, wenn kein Gerät gefunden wird.

## Protokollierung

        $ /path/to/project/cordova/log
    
        C:\>\path\to\project\cordova\log.bat
    

## Reinigung

        $ /path/to/project/cordova/clean
    
        C:\>\path\to\project\cordova\clean.bat
    

## Manueller Betrieb von Ant

Möchten Sie Ant direkt von der Befehlszeile aufrufen, wie z. B. `ant debug install` , müssen Sie zusätzliche Parameter an den Befehl Ant angeben:

        ant debug install -Dout.dir=ant-build -Dgen.absolute.dir=ant-gen
    

Dies ist da die Verzeichnisse von Cordovas Ant-Skripten verwendet als Standard unterschiedlich sind. Dies geschieht, um Konflikte zu vermeiden, wenn von der Befehlszeile aus versus Ant ausgeführt wird in Eclipse/ADT.

Diese zusätzlichen Parameter werden für Sie automatisch hinzugefügt, wenn mit der `cordova/build` und `cordova/run` beschriebenen Skripte. Aus diesem Grund empfohlen wird, die `cordova/build` und `cordova/run` Skripte statt aufrufenden Ant direkt von der Befehlszeile aus.