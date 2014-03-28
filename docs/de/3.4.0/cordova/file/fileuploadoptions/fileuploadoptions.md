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

# FileUploadOptions

A `FileUploadOptions` Objekt übergeben werden kann, um die `FileTransfer` des Objekts `upload()` Methode, um zusätzliche Parameter an den Upload-Skript angeben.

## Eigenschaften

*   **FileKey**: der Name des Form-Elements. Wird standardmäßig auf `file` . (DOM-String und enthält)

*   **Dateiname**: der Dateiname beim Speichern der Datei auf dem Server verwendet. Wird standardmäßig auf `image.jpg` . (DOM-String und enthält)

*   **MimeType**: den Mime-Typ der Daten hochzuladen. Wird standardmäßig auf `image/jpeg` . (DOM-String und enthält)

*   **Params**: eine Reihe von optionalen Schlüssel/Wert-Paaren in der HTTP-Anforderung übergeben. (Objekt)

*   **ChunkedMode**: ob die Daten in "Chunked" streaming-Modus hochladen. Wird standardmäßig auf `true` . (Boolean)

*   **Header**: eine Karte von Header-Name-Header-Werte. Verwenden Sie ein Array, um mehr als einen Wert anzugeben. (Objekt)

## Beschreibung

A `FileUploadOptions` Objekt übergeben werden kann, um die `FileTransfer` des Objekts `upload()` Methode, um zusätzliche Parameter an den Upload-Skript angeben.

## WP7 Quirk

*   **ChunkedMode:**: wird bei WP7 ignoriert.