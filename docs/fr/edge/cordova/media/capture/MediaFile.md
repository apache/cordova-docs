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

# MediaFile

> Encapsule les propriétés d'un fichier média capturé.

## Propriétés

*   **name** : le nom du fichier, sans le chemin d'accès associé. (DOMString)

*   **fullPath** : le chemin d'accès complet au fichier, nom compris. (DOMString)

*   **type** : le type MIME du fichier. (DOMString)

*   **lastModifiedDate** : la date et l'heure de la dernière modification du fichier. (Date)

*   **size** : le poids du fichier, en octets. (Number)

## Méthodes

*   **MediaFile.getFormatData** : récupère les informations de format du fichier média.