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

Flags
=====

Un objet `Flags` sert à fournir des arguments aux méthodes __getFile__ et __getDirectory__ de `DirectoryEntry`. Ces méthodes permettent de consulter respectivement des fichiers et des répertoires.

Propriétés
----------

- __create:__ Sert à signaler que le fichier, ou le répertoire, doit être créé s'il n'existe pas. _(boolean)_
- __exclusive:__ Utilisée seule, cette propriété n'a aucun effet. Utilisée avec create, il permet de faire échouer la création du fichier, ou du répertoire, s'il existe déjà. _(boolean)_

Plateformes supportées
----------------------

- Android
- BlackBerry WebWorks (OS 5.0 ou plus récent)
- iOS
- Windows Phone 7 ( Mango )

Exemple rapide
--------------

    // Récupérer le répertoire "data", en le créant s'il n'existe pas.
    dataDir = fileSystem.root.getDirectory("data", {create: true});

    // Créer un fichier "lockfile.txt", si et seulement s'il n'existe pas déjà.
    lockFile = dataDir.getFile("lockfile.txt", {create: true, exclusive: true});
