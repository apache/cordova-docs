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

# Windows 8-Befehlszeilentools

Die `cordova` Befehlszeilen-Dienstprogramm ist ein High-Level Tool, das Ihnen erlaubt, Anwendungen auf mehreren Plattformen gleichzeitig zu erstellen. Eine ältere Version von Cordova Rahmen bietet Gruppen von Befehlszeilentools, die spezifisch für jede Plattform. Wenn sie als Alternative zu den CLI verwenden möchten, müssen Sie diese Version von Cordova von [cordova.apache.org][1]herunterladen. Der Download enthält separate Archiv für jede Plattform. Erweitern Sie die gewünschte Ziel-Plattform. Die hier beschriebenen Tools sind in der Regel in der obersten Ebene `bin` Verzeichnis, sonst finden Sie in die **README** -Datei ausführlichere Wegbeschreibung.

 [1]: http://cordova.apache.org

Informationen über die Low-Level-Befehlszeilenschnittstelle, die Plugins ermöglicht, finden Sie unter Verwendung von Plugman zu Plugins verwalten. Eine Übersicht finden Sie unter Application Plugins.

## Windows 8

Die Windows 8-Befehlszeilentools unterstützen nur das Erstellen neuer Projekte. Befehle müssen über eine Cmd oder Powershell-Eingabeaufforderung ausgeführt werden.

## Erstellen Sie ein Projekt

Führen Sie den `create` Befehl mit den folgenden Parametern:

*   Pfad zum neuen Cordova Windows 8 Projekt

*   Paketname, nach rückwärts-Domäne Formatkonvention. Dies ist der Standard-Namespace.

*   Projektname