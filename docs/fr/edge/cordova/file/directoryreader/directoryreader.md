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

# DirectoryReader

Un objet qui répertorie les fichiers et répertoires d'un répertoire, tel que défini dans la spécification [W3C répertoires et systèmes][1] .

 [1]: http://www.w3.org/TR/file-system-api/

## Méthodes

*   **readEntries**: lire les entrées d'un répertoire.

## Plates-formes prises en charge

*   Android
*   BlackBerry WebWorks (OS 5.0 et plus)
*   iOS
*   Windows Phone 7 et 8
*   Windows 8

## readEntries

Lire les entrées dans ce répertoire.

**Paramètres :**

*   **successCallback**: un callback qui est passé à un tableau d'objets `FileEntry` et `DirectoryEntry`. *(Fonction)*

*   **errorCallback**: un callback qui s'exécute si une erreur se produit lors de la récupération de la liste de répertoires. Appelée avec un objet `FileError`. *(Fonction)*

**Petit exemple**

    function success(entries) {
        var i;
        for (i=0; i<entries.length; i++) {
            console.log(entries[i].name);
        }
    }
    
    function fail(error) {
        alert("Failed to list directory contents: " + error.code);
    }
    
    // Get a directory reader
    var directoryReader = dirEntry.createReader();
    
    // Get a list of all the entries in the directory
    directoryReader.readEntries(success,fail);