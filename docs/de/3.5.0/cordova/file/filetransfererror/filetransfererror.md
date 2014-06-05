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

A `FileTransferError` Objekt wird an eine Fehler-Callback übergeben, wenn ein Fehler auftritt.

## Eigenschaften

*   **Code**: einer der vordefinierten Fehlercodes aufgeführt. (Anzahl)

*   **Quelle**: URI zur Quelle. (String)

*   **Ziel**: URI zum Ziel. (String)

*   **HTTP_STATUS**: HTTP-Statuscode. Dieses Attribut ist nur verfügbar, wenn ein Response-Code aus der HTTP-Verbindung eingeht. (Anzahl)

## Konstanten

*   `FileTransferError.FILE_NOT_FOUND_ERR`
*   `FileTransferError.INVALID_URL_ERR`
*   `FileTransferError.CONNECTION_ERR`
*   `FileTransferError.ABORT_ERR`

## Beschreibung

Das `FileTransferError` -Objekt wird an den Rückruf Fehler übergeben, tritt ein Fehler beim Up- oder Download einer Datei.