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

A `FileUploadResult` objet est passé au rappel de succès la `FileTransfer` de l'objet `upload()` méthode.

## Propriétés

*   **bytesSent**: le nombre d'octets envoyés au serveur dans le cadre du téléchargement. (long)

*   **responseCode**: code de réponse HTTP le retourné par le serveur. (long)

*   **réponse**: réponse The HTTP renvoyé par le serveur. (DOMString)

## Description

Le `FileUploadResult` objet est retourné par le rappel de la réussite de la `FileTransfer` de l'objet `upload()` méthode.

## iOS Quirks

*   Ne prend pas en charge `responseCode` ou`bytesSent`.