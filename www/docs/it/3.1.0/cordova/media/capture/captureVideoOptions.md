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

> Incapsula le opzioni di configurazione di cattura video.

## Proprietà

*   **limite**: il numero massimo di video clip utente del dispositivo in grado di catturare in un'operazione di cattura singola. Il valore deve essere maggiore o uguale a 1 (default 1).

*   **durata**: la durata massima di un clip video, in pochi secondi.

## Esempio rapido

    // limit capture operation to 3 video clips
    var options = { limit: 3 };
    
    navigator.device.capture.captureVideo(captureSuccess, captureError, options);
    

## BlackBerry WebWorks stranezze

*   Il parametro di **durata** non è supportato, quindi la lunghezza delle registrazioni non può essere limitata a livello di codice.

## iOS stranezze

*   Il parametro **limite** non è supportato. Solo un video viene registrato per ogni invocazione.