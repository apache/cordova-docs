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

# FileUploadResult

A `FileUploadResult` predmet se prenese na povratni klic uspeh od na `FileTransfer` predmeta `upload()` metoda.

## Lastnosti

*   **bytesSent**: število bajtov, poslanih na strežnik kot del upload. (dolgo)

*   **responseCode**: The HTTP odzivna oznaka, ki jo vrne strežnik. (dolgo)

*   **odgovor**: odgovor The HTTP, ki jo vrne strežnik. (DOMString)

## Opis

Z `FileUploadResult` predmet se vrne preko povratnega klica uspeh od na `FileTransfer` predmeta `upload()` metoda.

## iOS Quirks

*   Podpira `responseCode` ali`bytesSent`.