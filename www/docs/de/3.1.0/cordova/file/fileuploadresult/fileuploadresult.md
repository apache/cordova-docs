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

A `FileUploadResult` -Objekt wird an den Erfolg-Rückruf des übergeben die `FileTransfer` des Objekts `upload()` Methode.

## Eigenschaften

*   **BytesSent**: die Anzahl der Bytes, die als Teil des Uploads an den Server gesendet. (lange)

*   **ResponseCode**: die HTTP-Response-Code vom Server zurückgegeben. (lange)

*   **Antwort**: der HTTP-Antwort vom Server zurückgegeben. (DOM-String und enthält)

## Beschreibung

Das `FileUploadResult` -Objekt wird über den Erfolg-Rückruf des zurückgegeben die `FileTransfer` des Objekts `upload()` Methode.

## iOS Macken

*   Unterstützt keine `responseCode` oder`bytesSent`.