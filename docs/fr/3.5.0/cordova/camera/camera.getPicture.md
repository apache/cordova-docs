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

# camera.getPicture

Prend une photo à l'aide de la caméra, ou récupère une photo de la Galerie d'images de l'appareil. L'image est passée au callback "succès" comme une `String` encodée en base64 ou l'URI du fichier de l'image. La méthode elle-même renvoie un objet `CameraPopoverHandle` qui permet de repositionner la boite de dialogue de selection d'image.

    navigator.camera.getPicture( cameraSuccess, cameraError, [ cameraOptions ] );
    

## Description

La fonction `camera.getPicture` ouvre l'application par défaut de l'appareil qui permet aux utilisateurs de prendre des photos. Ce comportement se produit par défaut, lorsque `Camera.sourceType` est égal à `Camera.PictureSourceType.CAMERA`. Une fois que l'utilisateur a pris la photo, l'application "camera" se ferme et l'application est restaurée.

Si `Camera.sourceType` est `Camera.PictureSourceType.PHOTOLIBRARY` ou `Camera.PictureSourceType.SAVEDPHOTOALBUM`, alors une boîte de dialogue s'affiche pour permettre aux utilisateurs de sélectionner une image existante. La fonction `camera.getPicture` retourne un objet `CameraPopoverHandle` qui permet de repositionner le dialogue de sélection d'image, par exemple, lorsque l'orientation de l'appareil change.

La valeur de retour est envoyée à la fonction callback `cameraSuccess`, dans l'un des formats suivants, selon spécifié par `cameraOptions` :

*   A `String` contenant l'image photo codée en base64.

*   A `String` qui représente l'emplacement du fichier image sur le stockage local (par défaut).

Vous pouvez faire ce que vous voulez avec l'image encodée ou l'URI, par exemple :

*   Afficher l'image dans un `<img>` tag, comme dans l'exemple ci-dessous

*   Enregistrer les données localement ( `LocalStorage` , [poids][1], etc..)

*   Publier les données sur un serveur distant

 [1]: http://brianleroux.github.com/lawnchair/

**REMARQUE :**La résolution des photos sur les nouveaux appareils est assez bonne. Les photos sélectionnées de la Galerie de l'appareil ne sont pas réduites avec une baisse de la qualité, même si un paramètre de `qualité` est spécifié. Pour éviter les problèmes de mémoire, définissez `Camera.destinationType` à `FILE_URI` plutôt que `DATA_URL`.

## Plates-formes prises en charge

*   Android
*   BlackBerry WebWorks (OS 5.0 et plus)
*   iOS
*   Tizen
*   Windows Phone 7 et 8
*   Windows 8

## Bizarreries Android

Android utilise des objets de type Intends pour lancer l'activité de l'appareil photo sur le périphérique pour capturer des images. Sur les téléphones avec peu de mémoire, l'activité de Cordova peut être tuée. Dans ce scénario, l'image peut ne pas apparaître lorsque l'activité de cordova est restaurée.

## Bizarreries iOS

L'inclusion d'un `alert()` JavaScript dans une des fonctions callback peut causer des problèmes. Encapsuler l'alerte dans un `setTimeout()` pour permettre au sélecteur d'images iOS de se fermer entièrement avant que l'alerte s'affiche :

    setTimeout(function() {/ / votre code ici!}, 0) ;
    

## Bizarreries Windows Phone 7

L'invocation de l'application native "caméra" alors que votre appareil est connecté via Zune ne fonctionne pas et déclenche une erreur.

## Bizarreries de Tizen

Tizen prend uniquement en charge un `destinationType` de `Camera.DestinationType.FILE_URI` et un `sourceType` de `Camera.PictureSourceType.PHOTOLIBRARY`.

## Petit exemple

Prendre une photo, puis l'extraire comme une image codée en base64 :

    navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
        destinationType: Camera.DestinationType.DATA_URL
    });
    
    function onSuccess(imageData) {
        var image = document.getElementById('myImage');
        image.src = "data:image/jpeg;base64," + imageData;
    }
    
    function onFail(message) {
        alert('Failed because: ' + message);
    }
    

Prendre une photo et récupérer l'emplacement du fichier de l'image :

    navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
        destinationType: Camera.DestinationType.FILE_URI });
    
    function onSuccess(imageURI) {
        var image = document.getElementById('myImage');
        image.src = imageURI;
    }
    
    function onFail(message) {
        alert('Failed because: ' + message);
    }
    

## Exemple complet

    <!DOCTYPE html>
    <html>
      <head>
        <title>Capture Photo</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        var pictureSource;   // picture source
        var destinationType; // sets the format of returned value
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready",onDeviceReady,false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            pictureSource=navigator.camera.PictureSourceType;
            destinationType=navigator.camera.DestinationType;
        }
    
        // Called when a photo is successfully retrieved
        //
        function onPhotoDataSuccess(imageData) {
          // Uncomment to view the base64-encoded image data
          // console.log(imageData);
    
          // Get image handle
          //
          var smallImage = document.getElementById('smallImage');
    
          // Unhide image elements
          //
          smallImage.style.display = 'block';
    
          // Show the captured photo
          // The inline CSS rules are used to resize the image
          //
          smallImage.src = "data:image/jpeg;base64," + imageData;
        }
    
        // Called when a photo is successfully retrieved
        //
        function onPhotoURISuccess(imageURI) {
          // Uncomment to view the image file URI
          // console.log(imageURI);
    
          // Get image handle
          //
          var largeImage = document.getElementById('largeImage');
    
          // Unhide image elements
          //
          largeImage.style.display = 'block';
    
          // Show the captured photo
          // The inline CSS rules are used to resize the image
          //
          largeImage.src = imageURI;
        }
    
        // A button will call this function
        //
        function capturePhoto() {
          // Take picture using device camera and retrieve image as base64-encoded string
          navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50,
            destinationType: destinationType.DATA_URL });
        }
    
        // A button will call this function
        //
        function capturePhotoEdit() {
          // Take picture using device camera, allow edit, and retrieve image as base64-encoded string
          navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 20, allowEdit: true,
            destinationType: destinationType.DATA_URL });
        }
    
        // A button will call this function
        //
        function getPhoto(source) {
          // Retrieve image file location from specified source
          navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50,
            destinationType: destinationType.FILE_URI,
            sourceType: source });
        }
    
        // Called if something bad happens.
        //
        function onFail(message) {
          alert('Failed because: ' + message);
        }
    
        </script>
      </head>
      <body>
        <button onclick="capturePhoto();">Capture Photo</button> <br>
        <button onclick="capturePhotoEdit();">Capture Editable Photo</button> <br>
        <button onclick="getPhoto(pictureSource.PHOTOLIBRARY);">From Photo Library</button><br>
        <button onclick="getPhoto(pictureSource.SAVEDPHOTOALBUM);">From Photo Album</button><br>
        <img style="display:none;width:60px;height:60px;" id="smallImage" src="" />
        <img style="display:none;" id="largeImage" src="" />
      </body>
    </html>