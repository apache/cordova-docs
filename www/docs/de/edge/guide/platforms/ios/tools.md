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

title: iOS Shell Tool Guide
---

# iOS Shell Tool Guide

Diese Anleitung zeigt wie Cordovas Satz von Plattform-zentrierte Shell Tools verwenden, um iOS apps zu entwickeln. Dieser Entwicklungspfad, diskutiert in der [Übersicht](../../overview/index.html), möglicherweise einen größeren Bereich von Entwicklungsoptionen für iOS als das Cross-Plattform-CLI-Tool beschrieben in The Command-Line Interface anbieten. Beispielsweise müssen Sie Shell-Hilfsmittel zu verwenden, wenn Sie eine benutzerdefinierte Cordova WebView neben systemeigenen Komponenten bereitstellen. Vor der Verwendung von entweder Entwicklungsweg, müssen Sie zuerst die SDK-Umgebung konfigurieren, wie in der iOS-Plattform Guide beschrieben. Diese Tools basieren auf Xcodes-Befehlszeilen-Tools wie `xcode-select` und`xcodebuild`.

Um Shell Tools für iOS zu aktivieren, herunterladen Sie Cordova von [cordova.apache.org][1]. Der Download enthält separate Archiv für jede Plattform. Erweitern Sie jedes Ziel, soll `ios` in diesem Fall. Die entsprechenden Tools stehen in der Regel in den übergeordneten `bin` Verzeichnis, sonst finden Sie in der **README** -Datei für detailliertere Wegbeschreibung.

 [1]: http://cordova.apache.org

Diese Tools können Sie erstellen, erstellen und Ausführen von iOS-apps. Informationen über die zusätzliche Befehlszeilenschnittstelle, die Plugin-Features für alle Plattformen aktiviert, finden Sie unter Using Plugman zu Plugins verwalten. Details zum Entwickeln von Plugins finden Sie in der Anwendung-Plugins.

## Erstellen Sie ein Projekt

Führen Sie den `create` Befehl, der vorhandenen Pfad für das Projekt, die rückwärts-Domäne-Style Paket-ID und die app-Anzeigenamen angeben.

        $ ./path/to/cordova-ios/bin/create /path/to/my_new_project com.example.project_name ProjectName
    

## Erstellen eines Projekts

        $ /path/to/my_new_project/cordova/build
    

## App auf einem Emulator ausgeführt

        $ /path/to/my_new_project/cordova/run --emulator
    

## App auf einem Gerät ausgeführt

        $ /path/to/my_new_project/cordova/run --device
    

## Unterzeichnung der App

Sie finden weitere Informationen zum Signieren, Verteilung von iOS apps, Erstellen eines Zertifikats und Bereitstellung Profil auf [iOS Developer Library][2].

 [2]: https://developer.apple.com/library/ios/documentation/IDEs/Conceptual/AppDistributionGuide/ConfiguringYourApp/ConfiguringYourApp.html

Um die app in Cordova anzumelden, benötigen Sie Folgendes:

*   Code signing-Identität (`--codeSignIdentity`): [Verwendung von XCode][3] können Sie erstellen eine neue iOS Signaturidentität und fügen Sie es Ihrem Schlüsselbund. Der Typ des von dem Code signing-Identität - in der Regel Vertrieb oder Entwicklung, muss hier angegeben werden.

*   Bereitstellung von Profil (`--provisioningProfile`): [Verwenden des Apple-Mitglied erhalten][4] Sie können ein Bereitstellung-Profil erstellen. Herunterladen Sie das Bereitstellung Profil auf Ihren Rechner und starten Sie es in XCode zu registrieren. Es wird hier auf Ihrem Mac kopiert: ~/Library/MobileDevice/Provisioning\ Profile /. Es in einem Text-Editor öffnen, finden Sie die UUID muss hier angegeben werden.

*   Code signing-Ressource-Regeln (`--codeSignResourceRules`) (Optional): können Sie benutzerdefinierte Ressource Zeichnungsrechten angeben.

 [3]: https://developer.apple.com/library/ios/documentation/IDEs/Conceptual/AppDistributionGuide/MaintainingCertificates/MaintainingCertificates.html#//apple_ref/doc/uid/TP40012582-CH31-SW6
 [4]: https://developer.apple.com/library/ios/documentation/IDEs/Conceptual/AppDistributionGuide/MaintainingProfiles/MaintainingProfiles.html#//apple_ref/doc/uid/TP40012582-CH30-SW61

Diese Parameter können mithilfe der Befehlszeilenargumente oben zu `build` oder `run` von Skripts angegeben werden:

        $ /path/to/my_new_project/cordova/build --codeSignIdentitiy="iPhone Distribtion" --provisioningProfile="926c2bd6-8de9-4c2f-8407-1016d2d12954" 
    

Alternativ könnten Sie sie in ein Build Startkonfigurationsdatei (build.json) angeben (`--buildConfig`) Argument. Hier ist ein Beispiel für eine Konfigurationsdatei erstellen:

    {
         "ios": {
             "debug": {
                 "codeSignIdentitiy": "iPhone Development",
                 "provisioningProfile": "926c2bd6-8de9-4c2f-8407-1016d2d12954",
             },
             "release": {
                 "codeSignIdentitiy": "iPhone Distribution"
                 "provisioningProfile": "70f699ad-faf1-4adE-8fea-9d84738fb306",
             }
         }
     }
    

Es gibt auch Unterstützung zu kombinieren, Kommandozeilen-Parameter und Parameter in der Datei build.json. Werte aus der Befehlszeilenargumente erhalten Vorrang.

## Protokollierung

        $ /path/to/my_new_project/cordova/log