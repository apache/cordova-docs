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

# FileTransferError

A `FileTransferError` predmet je posredovan callback napake, ko se napaka pojavi.

## Lastnosti

*   **Šifra**: eno od vnaprej določenih napak kode naštetih spodaj. (Število)

*   **vir**: URI za vir. (Niz)

*   **cilj**: URI do cilja. (Niz)

*   **http_status**: kodo HTTP stanja. Ta atribut je na voljo samo, ko kodo odgovora je prejel od HTTP vez. (Število)

## Konstante

*   `FileTransferError.FILE_NOT_FOUND_ERR`
*   `FileTransferError.INVALID_URL_ERR`
*   `FileTransferError.CONNECTION_ERR`
*   `FileTransferError.ABORT_ERR`

## Opis

Z `FileTransferError` predmet opravili napaka povratni klic, ko pride do napake pri nalaganju ali downloading a pila.