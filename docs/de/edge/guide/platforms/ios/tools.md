* * *

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

## under the License.

# iOS Shell Tool Guide

Diese Anleitung zeigt wie Cordovas Satz von Plattform-zentrierte Shell Tools verwenden, um iOS apps zu entwickeln. Dieser Entwicklungspfad, diskutiert in der Übersicht, möglicherweise einen größeren Bereich von Entwicklungsoptionen für iOS als das Cross-Plattform-CLI-Tool beschrieben in The Command-Line Interface anbieten. Beispielsweise müssen Sie Shell-Hilfsmittel zu verwenden, wenn Sie eine benutzerdefinierte Cordova WebView neben systemeigenen Komponenten bereitstellen. Vor der Verwendung von entweder Entwicklungsweg, müssen Sie zuerst die SDK-Umgebung konfigurieren, wie in der iOS-Plattform Guide beschrieben. Diese Tools basieren auf Xcodes-Befehlszeilen-Tools wie `xcode-select` und`xcodebuild`.

Um Shell Tools für iOS zu aktivieren, herunterladen Sie Cordova von [cordova.apache.org][1]. Der Download enthält separate Archiv für jede Plattform. Erweitern Sie jedes Ziel, soll `ios` in diesem Fall. Die entsprechenden Tools stehen in der Regel in den übergeordneten `bin` Verzeichnis, sonst finden Sie in der **README** -Datei für detailliertere Wegbeschreibung.

 [1]: http://cordova.apache.org

Diese Tools können Sie erstellen, erstellen und Ausführen von iOS-apps. Informationen über die zusätzliche Befehlszeilenschnittstelle, die Plugin-Features für alle Plattformen aktiviert, finden Sie unter Using Plugman zu Plugins verwalten. Details zum Entwickeln von Plugins finden Sie in der Anwendung-Plugins.

## Erstellen Sie ein Projekt

Führen Sie den `create` Befehl, der vorhandenen Pfad für das Projekt, die rückwärts-Domäne-Style Paket-ID und die app-Anzeigenamen angeben.

        $ ./path/to/cordova-ios/bin/create /path/to/my_new_project com.example.project_name ProjectName
    

## Erstellen eines Projekts

        $ /path/to/my_new_project/cordova/build
    

## App auf einem Emulator ausgeführt

        $ /path/to/my_new_project/cordova/run
    

## Freigabe

        $ /path/to/my_new_project/cordova/release
    

## Protokollierung

        $ /path/to/my_new_project/cordova/log