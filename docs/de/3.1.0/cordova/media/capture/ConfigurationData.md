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

# ConfigurationData

> Kapselt eine Reihe von Medien-Aufnahme-Parameter, die ein Gerät unterstützt.

## Beschreibung

Beschreibt Medien-Aufnahmemodi, die vom Gerät unterstützt. Die Konfigurationsdaten enthält den MIME-Typ und Capture Dimensionen für die Aufnahme von Video- oder Bilddateien.

Die MIME-Typen sollten [RFC2046][1]einhalten. Beispiele:

 [1]: http://www.ietf.org/rfc/rfc2046.txt

*   `video/3gpp`
*   `video/quicktime`
*   `image/jpeg`
*   `audio/amr`
*   `audio/wav`

## Eigenschaften

*   **Typ**: die ASCII-codierte Zeichenfolge aus Kleinbuchstaben, den Medientyp darstellt. (DOM-String und enthält)

*   **Höhe**: die Höhe des Bildes oder Videos in Pixel. Der Wert ist NULL für sound-Clips. (Anzahl)

*   **Breite**: die Breite des Bildes oder Videos in Pixel. Der Wert ist NULL für sound-Clips. (Anzahl)

## Kleines Beispiel

    // retrieve supported image modes
    var imageModes = navigator.device.capture.supportedImageModes;
    
    // Select mode that has the highest horizontal resolution
    var width = 0;
    var selectedmode;
    for each (var mode in imageModes) {
        if (mode.width > width) {
            width = mode.width;
            selectedmode = mode;
        }
    }
    

Von jeder Plattform unterstützt nicht. Alle Konfigurations-Daten-Arrays sind leer.