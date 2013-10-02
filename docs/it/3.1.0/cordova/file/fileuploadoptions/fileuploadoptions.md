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

A `FileUploadOptions` oggetto può essere passato per il `FileTransfer` dell'oggetto `upload()` metodo per specificare ulteriori parametri per lo script di upload.

## Proprietà

*   **fileKey**: il nome dell'elemento form. Valore predefinito è `file` . (DOMString)

*   **nome file**: il nome del file da utilizzare quando si salva il file sul server. Valore predefinito è `image.jpg` . (DOMString)

*   **mimeType**: il tipo mime dei dati da caricare. Valore predefinito è `image/jpeg` . (DOMString)

*   **params**: un insieme di coppie chiave/valore opzionale per passare nella richiesta HTTP. (Oggetto)

*   **chunkedMode**: se a caricare i dati in modalità streaming chunked. Valore predefinito è `true` . (Boolean)

*   **intestazioni**: mappa di valori nome/intestazione intestazione. Utilizzare una matrice per specificare più valori. (Oggetto)

## Descrizione

A `FileUploadOptions` oggetto può essere passato per il `FileTransfer` dell'oggetto `upload()` metodo per specificare ulteriori parametri per lo script di upload.

## WP7 Quirk

*   **chunkedMode:**: ignorato su WP7.