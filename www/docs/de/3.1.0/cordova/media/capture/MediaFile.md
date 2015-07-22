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

title: MediaFile
---

# MediaFile

> Kapselt Eigenschaften einer Mediendatei erfassen.

## Eigenschaften

*   **Name**: der Name der [Datei](../../file/fileobj/fileobj.html), ohne Pfadinformationen. (DOM-String und enthält)

*   **FullPath**: der vollständige Pfad der [Datei](../../file/fileobj/fileobj.html), einschließlich des Namens. (DOM-String und enthält)

*   **Typ**: Mime-Typ der [Datei](../../file/fileobj/fileobj.html) (DOM-String und enthält)

*   **LastModifiedDate**: das Datum und die Uhrzeit wann die [Datei](../../file/fileobj/fileobj.html) zuletzt geändert wurde. (Datum)

*   **Größe**: die Größe der [Datei](../../file/fileobj/fileobj.html) in Byte. (Anzahl)

## Methoden

*   **MediaFile.getFormatData**: Ruft die Formatierungsinformationen der Mediendatei.