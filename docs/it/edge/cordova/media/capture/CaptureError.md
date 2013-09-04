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

> Incapsula il codice di errore derivanti da un'operazione di acquisizione di mezzi falliti.

## Proprietà

*   **codice**: uno dei codici di errore predefiniti elencati di seguito.

## Costanti

*   `CaptureError.CAPTURE_INTERNAL_ERR`: La videocamera o il microfono non è riuscito a catturare l'immagine o suono.

*   `CaptureError.CAPTURE_APPLICATION_BUSY`: L'applicazione di cattura audio o fotocamera sta attualmente scontando un'altra richiesta di cattura.

*   `CaptureError.CAPTURE_INVALID_ARGUMENT`: Utilizzo non valido dell'API (per esempio, il valore di `limit` è minore di uno).

*   `CaptureError.CAPTURE_NO_MEDIA_FILES`: L'utente chiude l'applicazione di cattura audio o fotocamera prima di catturare qualcosa.

*   `CaptureError.CAPTURE_NOT_SUPPORTED`: L'operazione di acquisizione richiesto non è supportato.