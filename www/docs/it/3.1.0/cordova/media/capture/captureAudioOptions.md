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

> Incapsula le opzioni di configurazione di acquisizione audio.

## Proprietà

*   **limite**: il numero massimo di clip audio in grado di registrare l'utente del dispositivo in un'operazione di acquisizione di singolo. Il valore deve essere maggiore o uguale a 1 (default 1).

*   **durata**: la durata massima di un clip audio audio, in pochi secondi.

## Esempio rapido

    // limit capture operation to 3 media files, no longer than 10 seconds each
    var options = { limit: 3, duration: 10 };
    
    navigator.device.capture.captureAudio(captureSuccess, captureError, options);
    

## Stranezze Android

*   Il `duration` parametro non è supportato. Lunghezze di registrazione non può essere limitato a livello di codice.

## BlackBerry WebWorks stranezze

*   Il `duration` parametro non è supportato. Lunghezze di registrazione non può essere limitato a livello di codice.

## iOS stranezze

*   Il `limit` parametro non è supportato, quindi solo una registrazione può essere creata per ogni chiamata.