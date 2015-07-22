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

> Encapsule les propriétés d'un fichier de capture multimédia.

## Propriétés

*   **nom**: le nom du fichier, sans le chemin d'accès. (DOMString)

*   **fullPath**: le chemin d'accès complet du fichier, y compris le nom. (DOMString)

*   **type**: type de mime du fichier (DOMString)

*   **lastModifiedDate**: la date et l'heure lorsque le fichier a été modifié. (Date)

*   **taille**: la taille du fichier, en octets. (Nombre)

## Méthodes

*   **MediaFile.getFormatData**: récupère les informations sur le format du fichier multimédia.