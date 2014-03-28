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

# CaptureErrorCB

> Richiamato se si verifica un errore durante un'operazione di acquisizione di mezzi di comunicazione.

    function captureError( CaptureError error ) { ... };
    

## Descrizione

Questa funzione viene eseguita se si verifica un errore quando si tenta di lanciare un media catturare operazione. Fallimento scenari includono quando l'applicazione di cattura è occupato, un'operazione di acquisizione è già in atto, o l'utente annulla l'operazione prima che tutti i file multimediali vengono catturati.

Questa funzione viene eseguita con un `CaptureError` oggetto contenente un errore appropriato`code`.

## Esempio rapido

    // capture error callback
    var captureError = function(error) {
        navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
    };