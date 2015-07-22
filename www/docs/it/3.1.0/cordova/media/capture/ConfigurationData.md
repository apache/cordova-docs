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

# ConfigurationData

> Incapsula un insieme di parametri di acquisizione multimediale che supporta un dispositivo.

## Descrizione

Descrive le modalità di cattura media supportato dal dispositivo. I dati di configurazione includono il tipo MIME e quote di cattura per l'acquisizione video o immagine.

I tipi MIME devono rispettare [RFC2046][1]. Esempi:

 [1]: http://www.ietf.org/rfc/rfc2046.txt

*   `video/3gpp`
*   `video/quicktime`
*   `immagine/jpeg`
*   `audio/amr`
*   `audio/wav`

## Proprietà

*   **tipo**: stringa di caratteri minuscoli con codifica ASCII il che rappresenta il tipo di supporto. (DOMString)

*   **altezza**: l'altezza dell'immagine o del video in pixel. Il valore è zero per clip audio. (Numero)

*   **larghezza**: la larghezza dell'immagine o del video in pixel. Il valore è zero per clip audio. (Numero)

## Esempio rapido

    // retrieve supported image modes
    var imageModes = navigator.device.capture.supportedImageModes;
    
    // Select mode that has the highest horizontal resolution
    var width = 0;
    var selectedmode;
    for each (var mode in imageModes) {
        if (mode.width > width) {
            width = mode.width;
            selectedmode = mode;
        }
    }
    

Non supportato da qualsiasi piattaforma. Tutte le matrici di dati di configurazione sono vuote.