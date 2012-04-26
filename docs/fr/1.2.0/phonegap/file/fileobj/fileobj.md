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

File
====

Un objet `File` contient les propriétés d'un fichier.

Propriétés
----------

- __name:__ Le nom du fichier. _(DOMString)_
- __fullPath:__ Le chemin complet du fichier, contenant le nom du fichier. _(DOMString)_
- __type:__ Le type MIME du fichier. _(DOMString)_
- __lastModifiedDate:__ La date de dernière modification du fichier. _(Date)_
- __size:__ La taille du fichier en octets. _(long)_

Détails
-------

L'objet `File` contient les propriétés d'un seul fichier.  On peut obtenir une instance de File en appelant la méthode __file__ d'un objet `FileEntry`.

Plateformes supportées
----------------------

- Android
- BlackBerry WebWorks (OS 5.0 ou plus récent)
- iOS
- Windows Phone 7 ( Mango )
