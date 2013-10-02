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

# Flags

Liefert Argumente für die `DirectoryEntry` des Objekts `getFile()` und `getDirectory()` Methoden, die nachschlagen oder erstellen Sie Dateien und Verzeichnisse.

## Eigenschaften

*   **Erstellen**: gibt an, dass die Datei oder das Verzeichnis erstellt werden soll, wenn es nicht bereits vorhanden ist. *(boolesch)*

*   **exklusiv**: hat wirkt sich nicht von selbst, aber mit `create` bewirkt die Datei oder das Verzeichnis-Erstellung schlägt fehl, wenn der Zielpfad bereits vorhanden ist. *(boolesch)*

## Unterstützte Plattformen

*   Android
*   BlackBerry WebWorks (OS 5.0 und höher)
*   iOS
*   Windows Phone 7 und 8
*   Windows 8

## Kleines Beispiel

    / / Get das Datenverzeichnis, die ihn herstellen, wenn es nicht vorhanden ist.
    DataDir = fileSystem.root.getDirectory ("Daten", {erstellen: True});
    
    / / Die Lock-Datei zu erstellen, wenn es nicht vorhanden ist.
    LockFile = dataDir.getFile ("lockfile.txt", {erstellen: echte, exklusive: True});