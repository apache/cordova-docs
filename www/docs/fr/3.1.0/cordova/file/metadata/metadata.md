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

# Metadata

Une interface fournissant des informations sur l'état d'un fichier ou un répertoire.

## Propriétés

*   **modificationTime** : la date à laquelle le fichier ou le répertoire a été modifié pour la dernière fois. *(Date)*

## Détails

L'objet `Metadata` fournit des informations sur l'état d'un fichier ou un répertoire. Appeler la méthode `getMetadata()` d'un objet `DirectoryEntry` ou `FileEntry` retourne une instance de `Metadata`.

## Plates-formes supportées

*   Android
*   BlackBerry WebWorks (OS 5.0 et plus)
*   iOS
*   Windows Phone 7 et 8
*   Windows 8

## Exemple court

    function win(metadata) {
        console.log("Last Modified: " + metadata.modificationTime);
    }
    
    // Request the metadata object for this entry
    entry.getMetadata(win, null);