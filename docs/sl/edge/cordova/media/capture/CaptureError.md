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

> Povzema koda napake, ki so posledica neuspele medijske operacije kapitan.

## Lastnosti

*   **Šifra**: eno od vnaprej določenih napak kode naštetih spodaj.

## Konstante

*   `CaptureError.CAPTURE_INTERNAL_ERR`: Na kamero ali mikrofon ni uspelo zajeti sliko ali zvok.

*   `CaptureError.CAPTURE_APPLICATION_BUSY`: Na kamero ali avdio kapitan uporabe trenutno služi drugo zahtevo kapitan.

*   `CaptureError.CAPTURE_INVALID_ARGUMENT`: Neveljavna uporaba API (npr. vrednost `limit` je manj kot eden).

*   `CaptureError.CAPTURE_NO_MEDIA_FILES`: Uporabnik zapre kamero ali avdio kapitan uporabe pred capturing ničesar.

*   `CaptureError.CAPTURE_NOT_SUPPORTED`: Zahtevane zajem operacija ni podprta.