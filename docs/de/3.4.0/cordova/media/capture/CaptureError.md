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

# CaptureError

> Kapselt den Fehlercode, der infolge eines fehlerhaften Medien-Erfassungsvorgangs.

## Eigenschaften

*   **Code**: einer der vordefinierten Fehlercodes aufgeführt.

## Konstanten

*   `CaptureError.CAPTURE_INTERNAL_ERR`: Die Kamera oder das Mikrofon konnte Bild oder Ton zu erfassen.

*   `CaptureError.CAPTURE_APPLICATION_BUSY`: Eine weitere Aufnahme-Anforderung verbüßt die Kamera oder Audio-Capture-Anwendung.

*   `CaptureError.CAPTURE_INVALID_ARGUMENT`: Ungültige Verwendung der API (z. B. den Wert des `limit` ist kleiner als 1).

*   `CaptureError.CAPTURE_NO_MEDIA_FILES`: Der Benutzer wird die Kamera oder Audio-Capture-Anwendung vor Aufnahme alles beendet.

*   `CaptureError.CAPTURE_NOT_SUPPORTED`: Der angeforderte Capture-Vorgang wird nicht unterstützt.