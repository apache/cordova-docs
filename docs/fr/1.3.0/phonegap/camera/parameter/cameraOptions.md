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

cameraOptions
=============

Paramètres facultatifs permettant de personnaliser les propriétés de `Camera`.

    { quality : 75, 
      destinationType : Camera.DestinationType.DATA_URL, 
      sourceType : Camera.PictureSourceType.CAMERA, 
      allowEdit : true,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 100,
      targetHeight: 100 };

Options
-------

- __quality:__ Qualité des images sauvegardées. L'intervalle est [0, 100]. (`Number`)

- __destinationType:__ Type de retour de l'image.  Défini dans navigator.camera.DestinationType (`Number`)
        
            Camera.DestinationType = {
                DATA_URL : 0,                // Retourner une image sous forme de flux encodé en Base64
                FILE_URI : 1                 // Retourner une URI de fichier image
            };

- __sourceType:__ Source de l'image.  Défini dans nagivator.camera.PictureSourceType (`Number`)
     
        Camera.PictureSourceType = {
            PHOTOLIBRARY : 0,
            CAMERA : 1,
            SAVEDPHOTOALBUM : 2
        };

- __allowEdit:__ Autoriser une édition simple de l'image avant sa sélection. (`Boolean`)
  
- __EncodingType:__ Format du fichier image retrouné.  Défini dans navigator.camera.EncodingType (`Number`)
        
            Camera.EncodingType = {
                JPEG : 0,               // Retourner une image au format JPEG
                PNG : 1                 // Retourner une image au format PNG
            };

- __targetWidth:__ Largeur en pixels de l'image. Doit être utilisé conjointement avec targetHeight. Les proportions de l'image sont maintenues. (`Number`)
- __targetHeight:__ Hauteur en pixels de l'image. Doit être utilisé conjointement avec targetWidth. Les proportions de l'image sont maintenues. (`Number`)

- __MediaType:__ Type de média sélectionnable.  Marche uniquement lorsque PictureSourceType vaut PHOTOLIBRARY ou SAVEDPHOTOALBUM. Défini dans nagivator.camera.MediaType (`Number`)
     
        Camera.MediaType = { 
			PICTURE: 0,             // autorise la sélection d'images fixes uniquement. VALEUR PAR DÉFAUT. Le retour se fera sous la forme définie par DestinationType
			VIDEO: 1,               // autorise la sélection de vidéos uniquement, LE RETOUR SE FERA TOUJOURS SOUS LA FORME FILE_URI
			ALLMEDIA : 2			// autorise la sélection de tout type de média
};
  
Singularités Android
--------------------

- Le paramètre `allowEdit` est ignoré.
- Camera.PictureSourceType.PHOTOLIBRARY et Camera.PictureSourceType.SAVEDPHOTOALBUM affichent tous deux le même album photo.
- Camera.EncodingType n'est pas supporté.

Singularités BlackBerry
-----------------------

- Le paramètre `quality` est ignoré.
- Le paramètre `sourceType` est ignoré.
- Le paramètre `allowEdit` est ignoré.
- L'application doit avoir la permission "key injection" pour pouvoir fermer l'application appareil photo une fois le cliché pris.
- L'utilisation de grandes tailles d'image peut entraîner l'impossibilité de chiffrer ces dernières sur les mobiles récents équipés d'un appareil photo à haute résolution (par exemple Torch 9800).
- Camera.MediaType n'est pas supporté.

Singularités Palm
-----------------

- Le paramètre `quality` est ignoré.
- Le paramètre `sourceType` est ignoré.
- Le paramètre `allowEdit` est ignoré.
- Camera.MediaType n'est pas supporté.

Singularités iPhone
-------------------

- Fixez `quality` à moins de 50 pour éviter les problèmes de mémoire sur certains mobiles.
- Lorsque `destinationType.FILE_URI` est utilisé, les photos sont stockées dans le dossier temporaire de l'application.
- Le contenu du dossier temporaire de l'application est effacé lorsque l'application se ferme. Les développeurs peuvent également purger ce dossier temporaire grâce aux APIs navigator.fileMgr si la taille de l'espace de stockage devient problématique.

Singularités Windows Phone 7
----------------------------

- Le paramètre `allowEdit` est ignoré.
           