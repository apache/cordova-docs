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

A `FileUploadOptions` predmet lahko prenese na `FileTransfer` predmeta `upload()` načina za določitev dodatnih parametrov, ki jih upload scenarij.

## Lastnosti

*   **fileKey**: ime obrazca element. Privzeto `file` . (DOMString)

*   **ime datoteke**: ime datoteke za uporabo pri shranjevanju datoteke na strežniku. Privzeto `image.jpg` . (DOMString)

*   **mimeType**: vrsta mime podatkov upload. Privzeto `image/jpeg` . (DOMString)

*   **params**: nabor izbirnih ključ/vrednost parov prenesti v HTTP zahtevo. (Predmet)

*   **chunkedMode**: ali naj upload podatkov v chunked pretakanje način. Privzeto `true` . (Boolean)

*   **glave**: zemljevid glava ime/header vrednosti. Polje uporabite, če želite določiti več vrednosti. (Predmet)

## Opis

A `FileUploadOptions` predmet lahko prenese na `FileTransfer` predmeta `upload()` načina za določitev dodatnih parametrov, ki jih upload scenarij.

## WP7 ovinka

*   **chunkedMode**: ne upošteva na WP7.