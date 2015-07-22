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

# MediaFileData

> Kapselt Formatinformationen zu einer Mediendatei.

## Eigenschaften

*   **Codecs**: das tatsächliche Format der Audio- und video-Inhalte. (DOM-String und enthält)

*   **Bitrate**: die durchschnittliche Bitrate des Inhalts. Der Wert ist NULL für Bilder. (Anzahl)

*   **Höhe**: die Höhe des Bildes oder Videos in Pixel. Der Wert ist NULL für audio-Clips. (Anzahl)

*   **Breite**: die Breite des Bildes oder Videos in Pixel. Der Wert ist NULL für audio-Clips. (Anzahl)

*   **Dauer**: die Länge des Video- oder Clips in Sekunden. Der Wert ist NULL für Bilder. (Anzahl)

## BlackBerry WebWorks Macken

Keine API bietet Informationen für Medien-Dateien, so dass die `MediaFileData` von zurückgegebene Objekt `MediaFile.getFormatData` verfügt über die folgenden Standardwerte:

*   **Codecs**: nicht unterstützt, und gibt`null`.

*   **Bitrate**: nicht unterstützt, und gibt den Wert NULL.

*   **Höhe**: nicht unterstützt, und gibt den Wert NULL.

*   **Breite**: nicht unterstützt, und gibt den Wert NULL.

*   **Dauer**: nicht unterstützt, und gibt den Wert NULL.

## Android Macken

Unterstützt die folgenden `MediaFileData` Eigenschaften:

*   **Codecs**: nicht unterstützt, und gibt`null`.

*   **Bitrate**: nicht unterstützt, und gibt den Wert NULL.

*   **Höhe**: unterstützt: nur Bild und Video-Dateien.

*   **Breite**: unterstützt: nur Bild und Video-Dateien.

*   **Dauer**: unterstützt: Audio- und video-Dateien nur.

## iOS Macken

Unterstützt die folgenden `MediaFileData` Eigenschaften:

*   **Codecs**: nicht unterstützt, und gibt`null`.

*   **Bitrate**: iOS4 Geräten für nur Audio unterstützt. Gibt 0 (null) für Bilder und Videos.

*   **Höhe**: unterstützt: nur Bild und Video-Dateien.

*   **Breite**: unterstützt: nur Bild und Video-Dateien.

*   **Dauer**: unterstützt: Audio- und video-Dateien nur.