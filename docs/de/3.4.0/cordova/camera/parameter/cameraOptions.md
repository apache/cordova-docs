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

# cameraOptions

Optionale Parameter die Kameraeinstellungen anpassen.

    {Qualität: 75, DestinationType: Camera.DestinationType.DATA_URL, SourceType: Camera.PictureSourceType.CAMERA, AllowEdit: stimmt, EncodingType: Camera.EncodingType.JPEG, TargetWidth: 100, TargetHeight: 100, PopoverOptions: CameraPopoverOptions, SaveToPhotoAlbum: false};
    

## Optionen

*   **Qualität**: Qualität des gespeicherten Bildes, ausgedrückt als ein Bereich von 0-100, wo 100 in der Regel voller Auflösung ohne Verlust aus der Dateikomprimierung ist. *(Anzahl)* (Beachten Sie, dass Informationen über die Kamera Auflösung nicht verfügbar ist.)

*   **destinationType**: Choose the format of the return value. Defined in `navigator.camera.DestinationType` *(Number)*
    
        Camera.DestinationType = {DATA_URL: 0, / / Return Bild als base64-codierte Zeichenfolge FILE_URI: 1, / / Return Image-Datei-URI NATIVE_URI: 2 / / Return image native URI (z. B. Ressourcen-Bibliothek: / / auf iOS oder Inhalte: / / auf Android)};
        

*   **sourceType**: Set the source of the picture. Defined in `navigator.camera.PictureSourceType` *(Number)*
    
        Camera.PictureSourceType = {Fotothek: 0, Kamera: 1, SAVEDPHOTOALBUM: 2};
        

*   **AllowEdit**: einfache Bearbeitung des Bildes vor Auswahl zu ermöglichen. *(Boolesch)*

*   **encodingType**: Choose the returned image file's encoding. Defined in `navigator.camera.EncodingType` *(Number)*
    
        Camera.EncodingType = {JPEG: 0, / / Return JPEG-codierte Bild PNG: 1 / / Return PNG codiertes Bild};
        

*   **TargetWidth**: Breite in Pixel zum Bild skalieren. Muss mit **TargetHeight**verwendet werden. Seitenverhältnis bleibt konstant. *(Anzahl)*

*   **TargetHeight**: Höhe in Pixel zum Bild skalieren. Muss mit **TargetWidth**verwendet werden. Seitenverhältnis bleibt konstant. *(Anzahl)*

*   **MediaType**: Legen Sie den Typ der Medien zur Auswahl. Funktioniert nur, wenn `PictureSourceType` ist `PHOTOLIBRARY` oder `SAVEDPHOTOALBUM` . Im Sinne `nagivator.camera.MediaType` *(Anzahl)* 
    
        Camera.MediaType = {Bild: 0, / / Auswahl der Standbilder nur ermöglichen. STANDARD. Kehrt über DestinationType VIDEO angegebenen Format: 1, / / ermöglichen Auswahl an nur, Video wird immer zurückgegeben FILE_URI ALLMEDIA: 2 / / Auswahl von alle Medientypen zulassen
        
    
    };

*   **CorrectOrientation**: Drehen Sie das Bild um die Ausrichtung des Geräts während der Aufnahme zu korrigieren. *(Boolesch)*

*   **SaveToPhotoAlbum**: das Bild auf das Fotoalbum auf dem Gerät zu speichern, nach Einnahme. *(Boolesch)*

*   **PopoverOptions**: iOS-nur Optionen, die Popover Lage in iPad angeben. In definierten`CameraPopoverOptions`.

*   **cameraDirection**: Choose the camera to use (front- or back-facing). Defined in `navigator.camera.Direction` *(Number)*
    
        Camera.Direction = {zurück: 0, / / die hinten gerichteter Kamera vorne verwenden: 1 / / die nach vorn gerichtete Kamera verwenden};
        

## Android Macken

*   `cameraDirection`Ergebnisse in einem hinten gerichteter Foto Wert.

*   Ignoriert die `allowEdit` Parameter.

*   `Camera.PictureSourceType.PHOTOLIBRARY`und `Camera.PictureSourceType.SAVEDPHOTOALBUM` beide das gleiche Fotoalbum anzuzeigen.

## BlackBerry Macken

*   Ignoriert die `quality` Parameter.

*   Ignoriert die `sourceType` Parameter.

*   Ignoriert die `allowEdit` Parameter.

*   Anwendung müssen wichtige Injektion-Berechtigungen, um die ursprüngliche Kamera-Anwendung zu schließen, nachdem der Benutzer die Fotoschnäpper.

*   Große Bildgrößen kann die Unfähigkeit Bilder auf Nachfolger Geräten (z.B. Torch 9800) codiert, dass Feature hochauflösende Kameras führen.

*   `Camera.MediaType`wird nicht unterstützt.

*   Ignoriert die `correctOrientation` Parameter.

*   Ignoriert die `cameraDirection` Parameter.

## iOS Macken

*   Legen Sie `quality` unter 50 Speicherfehler auf einigen Geräten zu vermeiden.

*   Bei der Verwendung `destinationType.FILE_URI` , Fotos werden im temporären Verzeichnis der Anwendung gespeichert. Sie können den Inhalt dieses Verzeichnisses mit löschen die `navigator.fileMgr` APIs, wenn Speicherplatz ein Anliegen.

## Tizen Macken

*   nicht unterstützte Optionen

*   gibt immer einen Datei-URI

## Windows Phone 7 und 8 Macken

*   Ignoriert die `allowEdit` Parameter.

*   Ignoriert die `correctOrientation` Parameter.

*   Ignoriert die `cameraDirection` Parameter.