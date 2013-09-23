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

Un objet `FileUploadResult` est passé à la callback de succès de la méthode `upload()` de l'objet `FileTransfer`.

## Propriétés

*   **bytesSent** : le nombre d'octets envoyés au serveur dans le cadre du téléchargement. (long)

*   **responseCode** : le code de réponse HTTP retourné par le serveur. (long)

*   **response** : la réponse HTTP renvoyée par le serveur. (DOMString)

## Description

Un objet `FileUploadResult` est retourné par la callback de succès de la méthode `upload()` de l'objet `FileTransfer`.

## Particularités d'iOS

*   Ne prend pas en charge les propriétés `responseCode` et `bytesSent`.