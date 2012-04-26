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

MediaFileData
=============

> Regroupe un ensemble informations sur le format du fichier média capturé.

Propriétés
----------

- __codecs:__ Le format à proprement parler du contenu au ou vidéo. (DOMString)
- __bitrate:__ Le débit moyen du contenu audio ou vidéo. Dans le cas d'une image, cet attribut vaut 0. (Number)
- __height:__ La hauteur de l'image ou de la vidéo, en pixels. Dans le cas d'un clip audio, cet attribut vaut 0. (Number)
- __width:__ La largeur de l'image ou de la vidéo, en pixels. Dans le cas d'un clip audio, cet attribut vaut 0. (Number)
- __duration:__ La longueur en secondes du clip audio ou vidéo. Dans le cas d'une image, cet attribut vaut 0. (Number)

Singularités BlackBerry WebWorks
--------------------------------
Aucune API ne fournit d'information sur le format des fichiers média.  Les objets MediaFileData retournés par la fonction MediaFile.getFormatData auront donc les valeurs par défaut suivantes :

- __codecs:__ Non supporté.  L'attribut sera toujours null.
- __bitrate:__ Non supporté.  L'attribut vaudra toujours 0.
- __height:__ Non supporté.  L'attribut vaudra toujours 0.
- __width:__ Non supporté.  L'attribut vaudra toujours 0.
- __duration:__ Non supporté.  L'attribut vaudra toujours 0.

Singularités Android
--------------------
Le support des propriétés de MediaFileData est le suivant :

- __codecs:__ Non supporté.  L'attribut sera toujours null.
- __bitrate:__ Non supporté.  L'attribut vaudra toujours 0.
- __height:__ Supporté.  (Images et vidéos uniquement).  
- __width:__ Supporté.  (Images et vidéos uniquement). 
- __duration:__ Supporté.  (Fichiers audios et vidéos uniquement).

Singularités iOS
----------------
Le support des propriétés de MediaFileData est le suivant :

- __codecs:__ Non supporté.  L'attribut sera toujours null.
- __bitrate:__ Supporté sur iOS4 uniquement et pour les fichiesr audio uniquement. L'attribut vaudra toujours 0 pour les images et les vidéos.
- __height:__ Supporté.  (Images et vidéos uniquement).  
- __width:__ Supporté.  (Images et vidéos uniquement). 
- __duration:__ Supporté.  (Fichiers audios et vidéos uniquement).