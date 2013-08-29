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

A `FileTransferError` objet est passé à un rappel d'erreur lorsqu'une erreur survient.

## Propriétés

*   **code**: l'un des codes d'erreur prédéfinis énumérés ci-dessous. (Nombre)

*   **source**: URI à la source. (String)

*   **cible**: URI à la cible. (String)

*   **HTTP_STATUS**: code d'état HTTP. Cet attribut n'est disponible que lorsqu'un code de réponse est reçu de la connexion HTTP. (Nombre)

## Constantes

*   `FileTransferError.FILE_NOT_FOUND_ERR`
*   `FileTransferError.INVALID_URL_ERR`
*   `FileTransferError.CONNECTION_ERR`
*   `FileTransferError.ABORT_ERR`

## Description

Le `FileTransferError` objet est passé au rappel erreur lorsqu'une erreur se produit lorsque le chargement ou le téléchargement d'un fichier.