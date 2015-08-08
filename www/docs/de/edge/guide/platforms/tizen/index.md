---
license: Licensed to the Apache Software Foundation (ASF) under one
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
---

# Tizen Plattform Guide

Diese Anleitung beschreibt zum Einrichten Ihrer Entwicklungsumgebung SDK Cordova apps für Geräte mit dem Betriebssystem Tizen bereitstellen.

## Anforderungen und Unterstützung

Tizen SDK erfordert Linux Ubuntu 10.04/10.10/11.04/11.10 (32-Bit) oder Windows XP SP3/7 (32-Bit).

Entwickler sollten verwenden die `cordova` in Verbindung mit dem Tizen-SDK-Dienstprogramm. Finden Sie unter The Command-Line Interface Informationen installieren Sie es, Projekte, hinzufügen dann erstellen und Bereitstellen eines Projekts.

## Das SDK installieren

Laden Sie die Tizen-SDK von [tizen.org][1].

 [1]: https://developer.tizen.org/sdk

<!--

- (optional) Install Tizen Cordova template projects: copy the
  `/templates` directory content into the Tizen Eclipse IDE web
  templates directory (e.g.:
  `/home/my_username/tizen-sdk/IDE/Templates/web`).

- __Method #2: Use Tizen Eclipse IDE Cordova Tizen project templates__
    - Launch Tizen Eclipse IDE
    - Select  __File &rarr; New &rarr; Tizen Web Project__
    - Select __User Template__ and __User defined__ items
    - Select one of the Tizen Cordova template (e.g.: __CordovaBasicTemplate__)
    - Fill the __Project name__ and its target __Location__

    ![](img/guide/platforms/tizen/project_template.png)

    - Click __Finish__

    ![](img/guide/platforms/tizen/project_explorer.png)

    - Your project should now appear in the __Project Explorer__ view

-->

## Öffnen Sie ein Projekt im SDK

1.  Starten Sie Tizen Eclipse IDE.

2.  Wählen Sie **Datei → importieren → Tizen Web-Projekt**:

    ![][2]

3.  Klicken Sie auf **weiter**.

4.  Stellen Sie sicher, dass **Root-Verzeichnis auswählen** aktiviert ist.

5.  Stellen Sie sicher, dass **Projekte in Arbeitsbereich kopieren** aktiviert ist.

6.  Drücken Sie **Durchsuchen** , und wählen Sie die Cordova Tizen `samples` Projektverzeichnis (wie `/cordova-basic` ):

    ![][3]

7.  Drücken Sie **Fertig stellen**. Das Projekt sollte nun importiert werden und werden in der **Projekt-Explorer** angezeigt:

    ![][4]

 [2]: {{ site.baseurl }}/static/img/guide/platforms/tizen/import_project.png
 [3]: {{ site.baseurl }}/static/img/guide/platforms/tizen/import_widget.png
 [4]: {{ site.baseurl }}/static/img/guide/platforms/tizen/project_explorer.png

Um das Projekt neu erstellen, mit der rechten Maustaste in der **Projekt-Explorer** -Ansicht, und wählen Sie **Projekt erstellen**:

![][5]

 [5]: {{ site.baseurl }}/static/img/guide/platforms/tizen/build_project.png

Eine Widget-Paket-Datei z. B. *hello.wgt* sollte im Root-Verzeichnis des Projekts erzeugen.

## Bereitstellen auf Emulator

Maustaste auf das Projekt in der **Projekt-Explorer** -Ansicht, und wählen Sie **Ausführen als → Tizen Simulator Webanwendung**:

![][6]

 [6]: {{ site.baseurl }}/static/img/guide/platforms/tizen/runas_web_sim_app.png

## Bereitstellung auf Gerät

*   Stellen Sie sicher, dass das Gerät ordnungsgemäß gestartet, verbunden und konfiguriert ist. Die **Datums- und** Zeiteinstellungen müssen richtig eingestellt sein.

*   Verwenden Sie die **Verbindung Explorer** -Ansicht, um das Weitergabeziel Anwendung wählen: **Fenster → Show View → Verbindung Explorer**.

    ![][7]

*   Maustaste auf das Projekt in der **Projekt-Explorer** -Ansicht, und wählen Sie **Ausführen als → Tizen Web-Anwendung**:

    ![][8]

 [7]: {{ site.baseurl }}/static/img/guide/platforms/tizen/connection_explorer.png
 [8]: {{ site.baseurl }}/static/img/guide/platforms/tizen/runas_web_app.png
