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

A `FileUploadOptions` objet peut être passé à la `FileTransfer` de l'objet `upload()` pour spécifier des paramètres supplémentaires pour le script d'upload.

## Propriétés

*   **fileKey**: le nom de l'élément form. Valeur par défaut est `file` . (DOMString)

*   **fileName**: le nom de fichier à utiliser lorsque vous enregistrez le fichier sur le serveur. Valeur par défaut est `image.jpg` . (DOMString)

*   **type MIME**: le type mime des données à télécharger. Valeur par défaut est `image/jpeg` . (DOMString)

*   **params**: un ensemble de paires clé/valeur facultative pour passer dans la requête HTTP. (Objet)

*   **chunkedMode**: s'il faut télécharger les données en mode streaming mémorisé en bloc. Valeur par défaut est `true` . (Boolean)

*   **en-têtes**: une carte des valeurs d'en-tête en-tête/nom. Un tableau permet de spécifier plusieurs valeurs. (Objet)

## Description

A `FileUploadOptions` objet peut être passé à la `FileTransfer` de l'objet `upload()` pour spécifier des paramètres supplémentaires pour le script d'upload.

## Bizarrerie de WP7

*   **chunkedMode :**: ignoré sur WP7.