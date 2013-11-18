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

> Povzema nabor medijev zajem parametrov, ki podpira napravo.

## Opis

Opisuje media kapitan skromen, ki jih naprava podpira. Konfiguracijski podatki vključuje vrsto MIME in zajemanje dimenzije za zajem video ali sliko.

Vrste MIME naj držijo [RFC2046][1]. Primeri:

 [1]: http://www.ietf.org/rfc/rfc2046.txt

*   `video/3gpp`
*   `video/quicktime`
*   `image/jpeg`
*   `audio/amr`
*   `audio/wav`

## Lastnosti

*   **Vrsta**: The ASCII kodiranih male niz, ki predstavlja vrsto medija. (DOMString)

*   **višina**: višina slike ali video v slikovnih pikah. Vrednost je nič za zvočne posnetke. (Število)

*   **Širina**: širina slike ali video v slikovnih pikah. Vrednost je nič za zvočne posnetke. (Število)

## Quick primer

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
    

Ne podpira katere koli platforme. Vsi nizi podatkov konfiguracije so prazne.