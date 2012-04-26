---
license: Licensed to the Apache Software Foundation (ASF) under one
         or more contributor license agreements.  See the NOTICE file
         distributed with this work for additional information
         regarding copyright ownership.  The ASF licenses this file
         to you under the Apache License, Version 2.0 (the
         "License"); you may not use this file except in compliance
         with the License.  You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0

         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
         under the License.
---

FileUploadOptions
=================

Un objet `FileUploadOptions` peut être passé à la méthode `upload` des objets `FileTransfer` afin de afin de fournir des paramètres additionnels au script d'upload.

Propriétés
----------

- __fileKey:__ Le nom de l'élément du formulaire.  Valorisé à "file" par défaut. (DOMString)
- __fileName:__ Le nom du fichier tel qu'il doit être enregistré sur le serveur.  Valorisé à "image.jpg" par défaut. (DOMString)
- __mimeType:__ Le type MIME des données que vous transferez.  Valorisé à "image/jpeg" par défaut. (DOMString)
- __params:__ Un ensemble optionnel de couples clef/valeur qui seront transmis dans la requête HTTP. (Object)
- __chunkedMode:__ Indique si les données doivent ête envoyées par morceaux (mode "chunked streaming"). Valorisé à "true" par défaut. (Boolean)


Description
-----------

Un objet `FileUploadOptions` peut être passé à la méthode `upload` des objets `FileTransfer` afin de afin de fournir des paramètres additionnels au script d'upload.
