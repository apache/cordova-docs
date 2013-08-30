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

# Drapeaux

Fournit des arguments à la `DirectoryEntry` de l'objet `getFile()` et `getDirectory()` méthodes qui chercher ou créent des fichiers et des répertoires, respectivement.

## Propriétés

*   **créer**: indique que le fichier ou le répertoire doit être créé s'il n'existe pas déjà. *(booléen)*

*   **exclusif**: A n'a aucun effet en soi, mais lorsqu'il est utilisé avec `create` provoque la création de fichier ou de répertoire échoue si le chemin d'accès cible existe déjà. *(booléen)*

## Plates-formes prises en charge

*   Android
*   BlackBerry WebWorks (OS 5.0 et plus)
*   iOS
*   Windows Phone 7 et 8
*   Windows 8

## Petit exemple

    / / Obtenir le répertoire de données, créant si elle n'existe pas.
    dataDir = fileSystem.root.getDirectory (« données », {créer : true}) ;
    
    / / Créer le fichier de verrouillage, si et seulement s'il n'existe pas.
    lockFile = dataDir.getFile (« lockfile.txt », {créer : vrai, exclusif : true}) ;