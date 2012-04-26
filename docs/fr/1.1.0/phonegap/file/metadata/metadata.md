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

Metadata
========

Un objet `Metadata` fournit des informations sur l'état d'un fichier ou d'un répertoire.

Propriétés
----------

- __modificationTime:__ Date de la dernière modification du fichier ou du répertoire. _(Date)_

Détails
-------

L'objet `Metadata` contient des informations sur l'état d'un fichier ou d'un répertoire.  On peut obtenir une instance de Metadata en appelant la méthode __getMetadata__ d'un objet `DirectoryEntry` ou `FileEntry`.

Plateformes supportées
----------------------

- Android
- BlackBerry WebWorks (OS 5.0 ou plus récent)
- iOS
- Windows Phone 7 ( Mango )

Exemple rapide
--------------

	function win(metadata) {
		console.log("Dernière modification : " + metadata.modificationTime);
	}
	
	// Récupérer un objet metadata pour ce fichier
	entry.getMetadata(win, null);