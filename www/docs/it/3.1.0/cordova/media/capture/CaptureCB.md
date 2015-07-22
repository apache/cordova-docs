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

# CaptureCB

> Richiamato su di un'operazione di acquisizione di mezzi di successo.

    function captureSuccess( MediaFile[] mediaFiles ) { ... };
    

## Descrizione

Questa funzione viene eseguita al termine di un'operazione di acquisizione di successo. A questo punto che è stato catturato un file multimediale e neanche l'utente è stato terminato l'applicazione di cattura di media, o è stato raggiunto il limite di cattura.

Ogni `MediaFile` oggetto descrive un file multimediali catturati.

## Esempio rapido

    // capture callback
    function captureSuccess(mediaFiles) {
        var i, path, len;
        for (i = 0, len = mediaFiles.length; i < len; i += 1) {
            path = mediaFiles[i].fullPath;
            // do something interesting with the file
        }
    };