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

MediaFile
=========

> Regroupe des propriétés d'un fichier de capture média.

Propriétés
----------

- __name:__ Le nom du fichier, sans le chemin. (DOMString)
- __fullPath:__ Le chemin complet du fichier, contenant le nom du fichier. (DOMString)
- __type:__ Le type MIME du fichier. (DOMString)
- __lastModifiedDate:__ La date de dernière modification du fichier. (Date)
- __size:__ La taille du fichier en octets. (Number)

Méthodes
--------

- __MediaFile.getFormatData:__ Récupère les informations sur le format du fichier média.