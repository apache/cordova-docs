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

# Flags

Fournit des arguments aux méthodes `getFile()` et `getDirectory()` de l'objet `DirectoryEntry` qui se chargent respectivement de rechercher ou créer des fichiers et des répertoires.

## Propriétés

*   **create** : indique que le fichier ou le répertoire doit être créé s'il n'existe pas déjà. *(Boolean)*

*   **exclusive** : a n'a aucun effet seul mais, s'il est utilisé avec `create`, provoque l'échec de la création d'un fichier ou d'un répertoire lorsque le chemin d'accès visé existe déjà. *(Boolean)*

## Plates-formes supportées

*   Android
*   BlackBerry WebWorks (OS 5.0 et plus)
*   iOS
*   Windows Phone 7 et 8
*   Windows 8

## Exemple court

    / / Obtenir le répertoire des données, le créant s'il n'existe pas.
    dataDir = fileSystem.root.getDirectory("data", {create: true});
    
    // Créer le fichier de verrouillage uniquement s'il n'existe pas déjà.
    lockFile = dataDir.getFile("lockfile.txt", {create: true, exclusive: true});