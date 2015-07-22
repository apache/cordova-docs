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

Un objet `FileUploadOptions` peut être passé à la méthode `upload()` de l'objet `FileTransfer` pour spécifier des paramètres supplémentaires au script d'upload.

## Propriétés

*   **fileKey** : le nom de l'élément form. La valeur par défaut est `file`. (DOMString)

*   **fileName** : le nom de fichier à utiliser pour l'enregistrement sur le serveur. La valeur par défaut est `image.jpg`. (DOMString)

*   **mimeType** : le type mime des données à envoyer. La valeur par défaut est `image/jpeg`. (DOMString)

*   **params** : un ensemble de paires clé/valeur facultative à passer dans la requête HTTP. (Objet)

*   **chunkedMode** : s'il faut transmettre ou non les données en mode streaming de bloc. La valeur par défaut est `true`. (Boolean)

*   **headers** : un objet représentant les noms et valeurs d'en-têtes à transmettre. Utiliser un tableau permet de spécifier plusieurs valeurs. (Objet)

## Description

Un objet `FileUploadOptions` peut être passé à la méthode `upload()` de l'objet `FileTransfer` pour spécifier des paramètres supplémentaires au script d'upload.

## Particularités de WP7

*   la propriété **chunkedMode** est simplement ignorée sous WP7.