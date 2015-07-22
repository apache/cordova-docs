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

title: Plugins verwalten mithilfe Plugman
---

# Plugins verwalten mithilfe Plugman

Ab Version 3.0 ff. Cordova implementiert alle [Gerät](../cordova/device/device.html) APIs als Plugins und lässt sie standardmäßig deaktiviert. Es unterstützt auch zwei Möglichkeiten zum Hinzufügen und Entfernen von Plugins. Die erste ist mithilfe der `cordova` CLI in der Command-Line Interface beschrieben. Die zweite ist die Verwendung einer untergeordnete [Plugman][1] -Kommandozeilen-Schnittstelle. Dieses Handbuch konzentriert sich auf den zweiten Ansatz, der möglicherweise nützlich für Entwickler, die ihre Version von Cordova aktualisieren wollen, aber wer noch nicht noch angenommen Cordova CLI in ihren Workflow.

 [1]: https://github.com/apache/cordova-plugman/

Weitere Informationen über Plugman finden Sie in [der README-Datei im repository][2].

 [2]: https://github.com/apache/cordova-plugman/blob/master/README.md

## Grundlegende Befehle

Um Plugman zu installieren, müssen Sie die [Knoten][3] , die auf Ihrem Computer installiert haben:

 [3]: http://nodejs.org/

    npm install -g plugman
    

Hier ist die Syntax für ein Plugin für jede Plattform hinzufügen:

    plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin <name|url|path> [--plugins_dir <directory>] [--www <directory>] [--variable <name>=<value> [--variable <name>=<value> ...]]
    

Um ein Plugin zu deinstallieren:

    plugman --uninstall --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin <id> [--www <directory>] [--plugins_dir <directory>]
    

## Core-Plugins installieren

Die folgenden Beispiele veranschaulichen, Plugins hinzufügen, nach Bedarf, so dass Sie in Ihrem Projekt verwenden APIs Cordova noch funktionieren nach dem upgrade auf Version 3.0. Für jeden Befehl müssen Sie wählen die Zielplattform und die Plattform-Projektverzeichnis zu verweisen.

*   cordova-plugin-battery-status plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.battery-status

*   cordova-plugin-camera plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.camera

*   cordova-plugin-console plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.console

*   cordova-plugin-contacts plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.contacts

*   cordova-plugin-device plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.device

*   cordova-plugin-device-motion (accelerometer) plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.device-motion

*   cordova-plugin-device-orientation (compass) plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.device-orientation

*   cordova-plugin-dialogs plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.dialogs

*   cordova-plugin-file plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.file

*   cordova-plugin-file-transfer plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.file-transfer

*   cordova-plugin-geolocation plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.geolocation

*   cordova-plugin-globalization plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.globalization

*   cordova-plugin-inappbrowser plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.inappbrowser

*   cordova-plugin-media plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.media

*   cordova-plugin-media-capture plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.media-capture

*   cordova-plugin-network-information plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.network-information

*   cordova-plugin-splashscreen plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.splashscreen

*   cordova-plugin-vibration plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.vibration