---
license: >
    Licensed to the Apache Software Foundation (ASF) under one
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


# Appareil photo

> L'objet `camera` donne accès à l'application de caméra par défaut de l'appareil.

**Remarque importante sur la vie privée :** La collecte et l'utilisation des images de la caméra d'un appareil de mesure soulève des questions importantes concernant la vie privée. La politique de confidentialité de votre application doit examiner comment l'application utilise l'appareil photo et si les images enregistrées sont partagées avec d'autres parties. En outre, si l'utilisation de l'application de la caméra n'est pas apparente dans l'interface utilisateur, vous devez fournir un avis juste-à-temps avant que votre application n'accède à la caméra (si le système d'exploitation de périphérique ne le fait pas déjà). Cet avis doit fournir les mêmes renseignements mentionnés précédemment, ainsi que d'obtenir l'autorisation de l'utilisateur (par exemple, en présentant des choix **OK** et **Non merci**). Pour plus d'informations, consultez le Guide de la vie privée.

## Méthodes

*   camera.getPicture
*   Camera.Cleanup

## Accéder à la fonctionnalité

Depuis la version 3.0, Cordova implémente des APIs au niveau du périphérique en tant que *plugins*. Utilisez le `plugin` de l'interface en ligne de commande, décrite dans l'Interface de ligne de commande, pour ajouter ou supprimer cette fonction pour un projet :

        $ cordova plugin add org.apache.cordova.camera
        $ cordova plugin ls
        [ 'org.apache.cordova.camera' ]
        $ cordova plugin rm org.apache.cordova.camera
    

Ces commandes s'appliquent à toutes les plates-formes ciblées, mais modifient les paramètres de configuration spécifiques à la plateforme décrites ci-dessous :

*   Android
    
        (in app/res/xml/config.xml)
        <feature name="Camera">
            <param name="android-package" value="org.apache.cordova.CameraLauncher" />
        </feature>
        
        (in app/AndroidManifest)
        <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
        

*   BlackBerry WebWorks
    
        (in www/plugins.xml)
        <feature name="Camera">
            <param name="blackberry-package" value="org.apache.cordova.camera.Camera" />
        </feature>
        
        (in www/config.xml)
        <feature id="blackberry.media.camera" />
        
        <rim:permissions>
            <rim:permit>use_camera</rim:permit>
        </rim:permissions>
        

*   iOS (en`config.xml`)
    
        <feature name="Camera">
            <param name="ios-package" value="CDVCamera" />
        </feature>
        

*   Windows Phone (en`Properties/WPAppManifest.xml`)
    
        <Capabilities>
            <Capability Name="ID_CAP_ISV_CAMERA" />
            <Capability Name="ID_HW_FRONTCAMERA" />
        </Capabilities>
        
    
    Référence : [manifeste d'Application pour Windows Phone][1]

*   Paciarelli (dans`config.xml`)
    
        <feature name="http://tizen.org/api/application" required="true"/>
        <feature name="http://tizen.org/api/application.launch" required="true"/>
        
    
    Référence : [Manifeste d'Application pour Applications Web Paciarelli][2]

 [1]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx
 [2]: https://developer.tizen.org/help/topic/org.tizen.help.gs/Creating%20a%20Project.html?path=0_1_1_3#8814682_CreatingaProject-EditingconfigxmlFeatures

Certaines plates-formes peuvent prendre en charge cette fonctionnalité sans nécessiter aucune configuration spéciale. Voir *Support de plate-forme* dans la section vue d'ensemble.


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


# cameraSuccess

Fonction de callback onSuccess qui fournit les données de l'image.

    function(imageData) {
        // Do something with the image
    }
    

## Paramètres

*   **imageData**: codage Base64 de l'image, *ou* le fichier image URI, selon `cameraOptions` utilisé. *(String)*

## Exemple

    // Show image
    //
    function cameraCallback(imageData) {
        var image = document.getElementById('myImage');
        image.src = "data:image/jpeg;base64," + imageData;
    }


# cameraError

Fonction callback onError qui fournit un message d'erreur.

    function(message) {
        // Show a helpful message
    }
    

## Paramètres

*   **message** : le message est fourni par du code natif de l'appareil. *(String)*


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


# CameraPopoverOptions

Paramètres, uniquement supportés par iOS, spécifiant l'emplacement d'accroche et la direction de la flèche de la boite de dialogue liée à la sélection d'images dans la bibliothèque et les albums sur iPad.

    { x : 0, y :  32, width : 320, height : 480, arrowDir : Camera.PopoverArrowDirection.ARROW_ANY };
    

## CameraPopoverOptions

*   **x**: coordonnée en x (pixels) de l'élément à l'écran sur lequel accrocher la boite de dialogue. *(Number)*

*   **y**: coordonnée en y (pixels) de l'élément à l'écran sur lequel accrocher la boite de dialogue. *(Number)*

*   **width**: largeur en pixels de l'élément à l'écran sur lequel accrocher la boite de dialogue. *(Number)*

*   **height**: hauteur en pixels de l'élément à l'écran sur lequel accrocher la boite de dialogue. *(Number)*

*   **arrowDir**: Direction vers laquelle la flèche de la boîte de dialogue doit pointer. Définie dans `Camera.PopoverArrowDirection` *(Number)*
    
            Camera.PopoverArrowDirection = {
                ARROW_UP : 1,        // correspondent aux constantes iOS UIPopoverArrowDirection
                ARROW_DOWN : 2,
                ARROW_LEFT : 4,
                ARROW_RIGHT : 8,
                ARROW_ANY : 15
            };
        

Notez que la taille de la boite de dialogue peut varier afin de permettre l'ajustement de la direction de la flèche et de l'orientation de l'écran. Assurez-vous de tenir compte des changements d'orientation lors de la spécification de l'emplacement d'élément d'accroche.

## Exemple court

     var popover = new CameraPopoverOptions(300, 300, 100, 100, Camera.PopoverArrowDirection.ARROW_ANY);
     var options = {
         quality         : 50,
         destinationType : Camera.DestinationType.DATA_URL,
         sourceType      : Camera.PictureSource.SAVEDPHOTOALBUM,
         popoverOptions  : popover
     };
    
     navigator.camera.getPicture(onSuccess, onFail, options);
    
     function onSuccess(imageData) {
         var image = document.getElementById('myImage');
         image.src = "data:image/jpeg;base64," + imageData;
     }
    
     function onFail(message) {
         alert('Failed because: ' + message);
     }


# CameraPopoverHandle

Agit sur la boîte de dialogue créée par `camera.getPicture`.

## Méthodes

*   **setPosition**: Définit la position de la boite de dialogue.

## Plates-formes suportées

*   iOS

## setPosition

Définit la position de la boite de dialogue.

**Paramètres :**

*   `cameraPopoverOptions`: l'objet `CameraPopoverOptions` spécifiant la nouvelle position

## Exemple court

     var cameraPopoverOptions = new CameraPopoverOptions(300, 300, 100, 100, Camera.PopoverArrowDirection.ARROW_ANY);
     cameraPopoverHandle.setPosition(cameraPopoverOptions);
    

## Exemple complet

     function onSuccess(imageData) {
          // Do stuff with the image!
     }
    
     function onFail(message) {
         alert('Failed to get the picture: ' + message);
     }
    
     var cameraPopoverHandle = navigator.camera.getPicture(onSuccess, onFail,
         { destinationType: Camera.DestinationType.FILE_URI,
           sourceType: Camera.PictureSourceType.PHOTOLIBRARY });
    
     // Reposition the popover if the orientation changes.
     window.onorientationchange = function() {
         var cameraPopoverOptions = new CameraPopoverOptions(0, 0, 100, 100, 0);
         cameraPopoverHandle.setPosition(cameraPopoverOptions);
     }
