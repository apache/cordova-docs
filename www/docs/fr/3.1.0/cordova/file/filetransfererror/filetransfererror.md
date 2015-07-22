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

Un objet `FileTransferError` est passé à une callback d'erreur lorsqu'une erreur survient.

## Propriétés

*   **code** : l'un des codes d'erreur prédéfinis énumérés ci-dessous. (Number)

*   **source** : l'URI de la source. (String)

*   **target**: l'URI de la destination. (String)

*   **http_status** : code d'état HTTP. Cet attribut n'est disponible que lorsqu'un code de réponse est fourni via la connexion HTTP. (Number)

## Constantes

*   `FileTransferError.FILE_NOT_FOUND_ERR`
*   `FileTransferError.INVALID_URL_ERR`
*   `FileTransferError.CONNECTION_ERR`
*   `FileTransferError.ABORT_ERR`

## Description

L'objet `FileTransferError` est passé à la callback d'erreur si une erreur se produit lors de l'envoi ou la réception d'un fichier.