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

# CaptureAudioOptions

> Kapselt Audioaufnahme-Konfigurationsoptionen.

## Eigenschaften

*   **Limit**: die maximale Anzahl von audio-Clips kann Benutzer des Geräts in einem einzigen Capture-Vorgang aufzeichnen. Der Wert muss größer als oder gleich 1 (Standardwert 1).

*   **Dauer**: die maximale Dauer eines audio-sound-Clips, in Sekunden.

## Kleines Beispiel

    // limit capture operation to 3 media files, no longer than 10 seconds each
    var options = { limit: 3, duration: 10 };
    
    navigator.device.capture.captureAudio(captureSuccess, captureError, options);
    

## Android Macken

*   Die `duration` Parameter wird nicht unterstützt. Aufnahme Längen kann nicht programmgesteuert begrenzt.

## BlackBerry WebWorks Macken

*   Die `duration` Parameter wird nicht unterstützt. Aufnahme Längen kann nicht programmgesteuert begrenzt.

## iOS Macken

*   Die `limit` Parameter wird nicht unterstützt, kann also nur eine Aufnahme für jeden Aufruf erstellt werden.