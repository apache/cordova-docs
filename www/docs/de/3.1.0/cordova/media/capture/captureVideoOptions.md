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

# CaptureVideoOptions

> Video-Capture-Konfigurationsoptionen kapselt.

## Eigenschaften

*   **Limit**: die maximale Anzahl von video-Clips des Geräts Benutzer kann in einem einzigen Capture-Vorgang erfassen. Der Wert muss größer als oder gleich 1 (Standardwert 1).

*   **Dauer**: die maximale Dauer eines Videoclips in Sekunden.

## Kleines Beispiel

    // limit capture operation to 3 video clips
    var options = { limit: 3 };
    
    navigator.device.capture.captureVideo(captureSuccess, captureError, options);
    

## BlackBerry WebWorks Macken

*   Der **Duration** -Parameter wird nicht unterstützt, so dass die Länge der Aufnahmen programmgesteuert nur beschränkt sein kann.

## iOS Macken

*   Der **Limit** -Parameter wird nicht unterstützt. Pro Aufruf wird nur ein Video aufgezeichnet.