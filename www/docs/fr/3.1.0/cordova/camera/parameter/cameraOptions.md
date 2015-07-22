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

# cameraOptions

Paramètres optionnels de personnalisation des réglages de l'appareil photo.

    { quality : 75,
      destinationType : Camera.DestinationType.DATA_URL,
      sourceType : Camera.PictureSourceType.CAMERA,
      allowEdit : true,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 100,
      targetHeight: 100,
      popoverOptions: CameraPopoverOptions,
      saveToPhotoAlbum: false };
    

## Options

*   **quality** : Qualité de l'image enregistrée, comprise entre 0 et 100, où 100 correspond à la pleine résolution de l'appareil, sans perte liée à la compression. *(Number)* (Notez que les informations sur la résolution de l'appareil photo sont indisponibles.)

*   **destinationType**: Choose the format of the return value. Defined in `navigator.camera.DestinationType` *(Number)*
    
        Camera.DestinationType = {
            DATA_URL : 0,      // Retourne l'image sous la forme d'une chaîne encodée en base-64
            FILE_URI : 1,      // Retourne l'URI du fichier image
            NATIVE_URI : 2     // Retourne l'URI native de l'image (ex. assets-library:// sur iOS ou content:// pour Android)
        };
        

*   **sourceType**: Set the source of the picture. Defined in `navigator.camera.PictureSourceType` *(Number)*
    
        Camera.PictureSourceType = {
            PHOTOLIBRARY : 0,
            CAMERA : 1,
            SAVEDPHOTOALBUM : 2
        };
        

*   **allowEdit**: Autoriser une modification simple de l'image avant sa sélection. *(Boolean)*

*   **encodingType**: Choose the returned image file's encoding. Defined in `navigator.camera.EncodingType` *(Number)*
    
        Camera.EncodingType = {
            JPEG : 0,               // Renvoie l'image au format JPEG
            PNG : 1                 // Renvoie l'image au format PNG
        };
        

*   **targetWidth**: largeur de sortie en pixels de l'image . Doit être utilisé avec **targetHeight**. Le ratio de l'aspect reste constant. *(Nombre)*

*   **targetHeight**: hauteur de sortie en pixels de l'image. Doit être utilisé avec **targetWidth**. Aspect ratio reste constant. *(Nombre)*

*   **mediaType**: définit le type de média à choisir. Ne fonctionne que quand `PictureSourceType` vaut `PHOTOLIBRARY` ou `SAVEDPHOTOALBUM` . Définie dans `nagivator.camera.MediaType` *(nombre)* 
    
        Camera.MediaType = {photo: 0, / / permettre la sélection de photos seulement. PAR DÉFAUT. Retourne le format spécifié via DestinationType VIDEO: 1, / / autoriser la sélection de la vidéo seulement, RETOURNERA TOUJOURS FILE_URI ALLMEDIA: 2 // permet la sélection de tous les types de médias
        
    
    };

*   **correctOrientation**: faire pivoter l'image afin de corriger l'orientation de l'appareil lors de la capture. *(Booléen)*

*   **saveToPhotoAlbum**: enregistrer l'image sur l'album photo sur l'appareil après la capture. *(Booléen)*

*   **popoverOptions**: options pour iOS uniquement qui spécifient l'emplacement de la boîte de dialogue sur iPad. Définie dans`CameraPopoverOptions`.

*   **cameraDirection**: Choose the camera to use (front- or back-facing). Defined in `navigator.camera.Direction` *(Number)*
    
        Camera.Direction = {BACK: 0, // utiliser la caméra arrière FRONT: 1 // utiliser la caméra frontale} ;
        

## Spécificités Android

*   Tout `cameraDirection` résultats dans le back-face photo de valeur.

*   Ignore la `allowEdit` paramètre.

*   `Camera.PictureSourceType.PHOTOLIBRARY`et `Camera.PictureSourceType.SAVEDPHOTOALBUM` les deux affichent le même album photo.

## Spécificités de BlackBerry

*   Ignore le paramètre `quality`.

*   Ignore le paramètre `sourceType`.

*   Ignore le paramètre `allowEdit`.

*   L'application doit disposer d'autorisations d'injection de clé pour fermer l'application native Camera après que l'utilisateur prenne une photo.

*   L'utilisation d'images de grandes tailles peut entraîner l'incapacité d'encodage sur d'anciens modèles d'appareils (par exemple, le Torch 9800) qui disposent d'un appareil photo haute résolution.

*   `Camera.MediaType` n'est pas pris en charge.

*   Ignore le paramètre `correctOrientation`.

*   Ignore le paramètre `cameraDirection`.

## Spécificités OS

*   Choisir la valeur `quality` en dessous de 50 pour éviter les erreurs de mémoire sur certains appareils.

*   Lorsque vous utilisez `destinationType.FILE_URI` , les photos sont sauvegardées dans le répertoire temporaire de l'application. Vous pouvez supprimer le contenu de ce répertoire en utilisant l'API `navigator.fileMgr` si l'espace de stockage est un sujet de préoccupation.

## Bizarreries de paciarelli

*   options non prises en charge

*   retourne toujours un URI de fichier

## Windows Phone 7 et 8 Quirks

*   Ignore le paramètre `allowEdit`.

*   Ignore le paramètre `correctOrientation`.

*   Ignore le paramètre `cameraDirection`.