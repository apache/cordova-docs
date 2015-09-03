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


# Capture

> Donne accès à de l'appareil audio, image et capacités de capture vidéo.

**Remarque importante de la vie privée :** Collecte et utilisation des images, vidéo ou audio de la caméra ou un microphone de l'appareil soulève des questions importantes de la vie privée. Politique de confidentialité de votre application doit examiner comment l'application utilise des capteurs et si les données enregistrées sont partagées avec d'autres parties. En outre, si l'utilisation de l'application de la caméra ou un microphone n'est pas apparente dans l'interface utilisateur, vous devez fournir un avis juste-à-temps avant votre application d'accéder à la caméra ou un microphone (si le système d'exploitation de périphérique n'est pas faire déjà). Cet avis doit fournir les mêmes renseignements susmentionnées, ainsi que d'obtenir l'autorisation de l'utilisateur (par exemple, en présentant des choix **OK** et **Non merci**). Notez que certains marchés app peuvent exiger votre app à aviser le juste-à-temps et obtenir l'autorisation de l'utilisateur avant d'accéder à la caméra ou un microphone. Pour plus d'informations, consultez le Guide de la vie privée.

## Objets

*   Capture
*   CaptureAudioOptions
*   CaptureImageOptions
*   CaptureVideoOptions
*   CaptureCallback
*   CaptureErrorCB
*   ConfigurationData
*   MediaFile
*   MediaFileData

## Méthodes

*   capture.captureAudio
*   capture.captureImage
*   capture.captureVideo
*   MediaFile.getFormatData

## Champ d'application

The `capture` object is assigned to the `navigator.device` object, and therefore has global scope.

    // The global capture object
    var capture = navigator.device.capture;
    

## Propriétés

*   **supportedAudioModes**: l'enregistrement des formats pris en charge par le périphérique audio. (ConfigurationData[])

*   **supportedImageModes**: l'enregistrement image et formats pris en charge par le périphérique. (ConfigurationData[])

*   **supportedVideoModes**: l'enregistrement vidéo résolutions et formats pris en charge par le périphérique. (ConfigurationData[])

## Méthodes

*   `capture.captureAudio`: Lancer l'application d'enregistrement audio de l'appareil pour enregistrer des clips audio.

*   `capture.captureImage`: Lancer l'application appareil photo de l'appareil pour prendre des photos.

*   `capture.captureVideo`: Lancer l'application enregistreur vidéo de l'appareil pour enregistrer des vidéos.

## Plates-formes prises en charge

*   Android
*   BlackBerry WebWorks (OS 5.0 et plus)
*   iOS
*   Windows Phone 7 et 8
*   Windows 8

## Accéder à la fonctionnalité

Depuis la version 3.0, Cordova implémente API au niveau du périphérique comme les *plugins*. Utiliser de la CLI `plugin` commande, décrite dans l'Interface de ligne de commande, d'ajouter ou de supprimer cette fonction pour un projet :

        $ cordova plugin add org.apache.cordova.media-capture
        $ cordova plugin ls
        [ 'org.apache.cordova.media-capture' ]
        $ cordova plugin rm org.apache.cordova.media-capture
    

Ces commandes s'appliquent à toutes les plates-formes ciblées, mais modifier les paramètres de configuration spécifiques à la plateforme décrites ci-dessous :

*   Android
    
        (in app/res/XML/plugins.Xml) < nom de la fonction = "Capturer" >< param name = "android-package" value="org.apache.cordova.Capture" / >< / fiction > (dans app/AndroidManifest.xml) < permissions des utilisations android:name="android.permission.RECORD_AUDIO" / >< permissions des utilisations android:name="android.permission.WRITE_EXTERNAL_STORAGE" / >
        

*   BlackBerry WebWorks
    
        (in www/plugins.Xml) < nom de la fonction = "Capturer" >< param name = "blackberry-package" value="org.apache.cordova.capture.MediaCapture" / >< / fiction > (dans www/config.xml) < id="blackberry.system en vedette" requis = "true" version = "1.0.0.0" / >< id="blackberry.io.file en vedette" requis = "true" version = "1.0.0.0" / >
        

*   iOS (en`config.xml`)
    
        < nom de la fonction = « Capturer » >< param name = « ios-paquet » value = « CDVCapture » / >< / fiction >
        

*   Windows Phone (en`Properties/WPAppManifest.xml`)
    
        <Capabilities>
            <Capability Name="ID_CAP_MEDIALIB" />
            <Capability Name="ID_CAP_MICROPHONE" />
            <Capability Name="ID_HW_FRONTCAMERA" />
            <Capability Name="ID_CAP_ISV_CAMERA" />
            <Capability Name="ID_CAP_CAMERA" />
        </Capabilities>
        

Certaines plates-formes peuvent prendre en charge cette fonctionnalité sans nécessiter aucune configuration spéciale. Voir *Support de plate-forme* dans la section vue d'ensemble.


# capture.captureAudio

> Démarrez l'application enregistreur audionumérique et renvoyer des informations sur les fichiers de clips audio capturés.

    navigator.device.capture.captureAudio(
        CaptureCB captureSuccess, CaptureErrorCB captureError,  [CaptureAudioOptions options]
    );
    

## Description

Commence une opération asynchrone pour capturer les enregistrements audio à l'aide d'application d'enregistrement audio de l'appareil par défaut. L'opération permet à l'utilisateur de l'appareil capturer des enregistrements multiples en une seule séance.

L'opération de capture se termine lorsque l'utilisateur quitte l'enregistrement demande, ou le nombre maximal d'enregistrements spécifié par audio `CaptureAudioOptions.limit` est atteinte. Si aucun `limit` valeur du paramètre est spécifiée, par défaut à un (1), et l'opération de capture se termine après que l'utilisateur enregistre un clip audio unique.

Fin de l'opération de capture, le `CaptureCallback` s'exécute avec un tableau de `MediaFile` objets décrivant chacune capturé fichiers clip audio. Si l'utilisateur annule l'opération avant un clip audio est capturé, le `CaptureErrorCallback` s'exécute avec un `CaptureError` objet, mettant en vedette le `CaptureError.CAPTURE_NO_MEDIA_FILES` code d'erreur.

## Plates-formes prises en charge

*   Android
*   BlackBerry WebWorks (OS 5.0 et plus)
*   iOS
*   Windows Phone 7 et 8
*   Windows 8

## Petit exemple

    // capture callback
    var captureSuccess = function(mediaFiles) {
        var i, path, len;
        for (i = 0, len = mediaFiles.length; i < len; i += 1) {
            path = mediaFiles[i].fullPath;
            // do something interesting with the file
        }
    };
    
    // capture error callback
    var captureError = function(error) {
        navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
    };
    
    // start audio capture
    navigator.device.capture.captureAudio(captureSuccess, captureError, {limit:2});
    

## Exemple complet

    <!DOCTYPE html>
    <html>
      <head>
        <title>Capture Audio</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8" src="json2.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Called when capture operation is finished
        //
        function captureSuccess(mediaFiles) {
            var i, len;
            for (i = 0, len = mediaFiles.length; i < len; i += 1) {
                uploadFile(mediaFiles[i]);
            }
        }
    
        // Called if something bad happens.
        //
        function captureError(error) {
            var msg = 'An error occurred during capture: ' + error.code;
            navigator.notification.alert(msg, null, 'Uh oh!');
        }
    
        // A button will call this function
        //
        function captureAudio() {
            // Launch device audio recording application,
            // allowing user to capture up to 2 audio clips
            navigator.device.capture.captureAudio(captureSuccess, captureError, {limit: 2});
        }
    
        // Upload files to server
        function uploadFile(mediaFile) {
            var ft = new FileTransfer(),
                path = mediaFile.fullPath,
                name = mediaFile.name;
    
            ft.upload(path,
                "http://my.domain.com/upload.php",
                function(result) {
                    console.log('Upload success: ' + result.responseCode);
                    console.log(result.bytesSent + ' bytes sent');
                },
                function(error) {
                    console.log('Error uploading file ' + path + ': ' + error.code);
                },
                { fileName: name });
        }
    
        </script>
        </head>
        <body>
            <button onclick="captureAudio();">Capture Audio</button> <br>
        </body>
    </html>
    

## BlackBerry WebWorks Quirks

*   Cordova pour BlackBerry WebWorks tente de lancer l'application **Dictaphone Notes** , fournie par RIM, pour capturer des enregistrements audio. L'application reçoit un `CaptureError.CAPTURE_NOT_SUPPORTED` code d'erreur si l'application n'est pas installée sur l'appareil.

## iOS Quirks

*   iOS n'a pas une application d'enregistrement audio par défaut, donc une interface utilisateur simple est fournie.

## Windows Phone 7 et 8 Quirks

*   Windows Phone 7 n'a pas une application d'enregistrement audio par défaut, donc une interface utilisateur simple est fournie.


# CaptureAudioOptions

> Encapsule les options de configuration de capture audio.

## Propriétés

*   **limite**: le nombre maximal de clips audio, l'utilisateur de l'appareil permet d'enregistrer dans une opération de capture unique. La valeur doit être supérieure ou égale à 1 (1 par défaut).

*   **durée**: la durée maximale d'un clip sonore audio, en quelques secondes.

## Petit exemple

    // limit capture operation to 3 media files, no longer than 10 seconds each
    var options = { limit: 3, duration: 10 };
    
    navigator.device.capture.captureAudio(captureSuccess, captureError, options);
    

## Quirks Android

*   Le `duration` paramètre n'est pas pris en charge. Longueurs d'enregistrement ne peut être limitée par programme.

## BlackBerry WebWorks Quirks

*   Le `duration` paramètre n'est pas pris en charge. Longueurs d'enregistrement ne peut être limitée par programme.

## iOS Quirks

*   Le `limit` paramètre n'est pas pris en charge, ainsi qu'un enregistrement peut être créée pour chaque appel.


# capture.captureImage

> Démarrez l'application appareil photo et retourner des informations sur les fichiers de l'image capturée.

    navigator.device.capture.captureImage(
        CaptureCB captureSuccess, CaptureErrorCB captureError, [CaptureImageOptions options]
    );
    

## Description

Commence une opération asynchrone pour capturer des images à l'aide d'application caméra de l'appareil. L'opération permet aux utilisateurs de capturer plusieurs images en une seule séance.

L'opération de capture soit termine lorsque l'utilisateur ferme l'application appareil photo, ou le nombre maximal d'enregistrements spécifié par `CaptureAudioOptions.limit` est atteinte. Si aucun `limit` valeur est spécifiée, par défaut à un (1), et l'opération de capture se termine après que l'utilisateur saisit une image unique.

Lorsque l'opération de capture terminée, elle appelle le `CaptureCB` rappel avec un tableau de `MediaFile` objets décrivant chaque fichier de l'image capturée. Si l'utilisateur annule l'opération avant la capture d'une image, la `CaptureErrorCB` rappel s'exécute avec un `CaptureError` objet mettant en vedette un `CaptureError.CAPTURE_NO_MEDIA_FILES` code d'erreur.

## Plates-formes prises en charge

*   Android
*   BlackBerry WebWorks (OS 5.0 et plus)
*   iOS
*   Windows Phone 7 et 8
*   Windows 8

## Windows Phone 7 Quirks

Invoquant l'application native caméra alors que votre appareil est connecté via Zune ne fonctionne pas, et exécute le rappel de l'erreur.

## Petit exemple

    // capture callback
    var captureSuccess = function(mediaFiles) {
        var i, path, len;
        for (i = 0, len = mediaFiles.length; i < len; i += 1) {
            path = mediaFiles[i].fullPath;
            // do something interesting with the file
        }
    };
    
    // capture error callback
    var captureError = function(error) {
        navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
    };
    
    // start image capture
    navigator.device.capture.captureImage(captureSuccess, captureError, {limit:2});
    

## Exemple complet

    <!DOCTYPE html>
    <html>
      <head>
        <title>Capture Image</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8" src="json2.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Called when capture operation is finished
        //
        function captureSuccess(mediaFiles) {
            var i, len;
            for (i = 0, len = mediaFiles.length; i < len; i += 1) {
                uploadFile(mediaFiles[i]);
            }
        }
    
        // Called if something bad happens.
        //
        function captureError(error) {
            var msg = 'An error occurred during capture: ' + error.code;
            navigator.notification.alert(msg, null, 'Uh oh!');
        }
    
        // A button will call this function
        //
        function captureImage() {
            // Launch device camera application,
            // allowing user to capture up to 2 images
            navigator.device.capture.captureImage(captureSuccess, captureError, {limit: 2});
        }
    
        // Upload files to server
        function uploadFile(mediaFile) {
            var ft = new FileTransfer(),
                path = mediaFile.fullPath,
                name = mediaFile.name;
    
            ft.upload(path,
                "http://my.domain.com/upload.php",
                function(result) {
                    console.log('Upload success: ' + result.responseCode);
                    console.log(result.bytesSent + ' bytes sent');
                },
                function(error) {
                    console.log('Error uploading file ' + path + ': ' + error.code);
                },
                { fileName: name });
        }
    
        </script>
        </head>
        <body>
            <button onclick="captureImage();">Capture Image</button> <br>
        </body>
    </html>


# CaptureImageOptions

> Encapsule les options de configuration de capture image.

## Propriétés

*   **limite**: le nombre maximum d'images, l'utilisateur peut saisir dans une opération de capture unique. La valeur doit être supérieure ou égale à 1 (1 par défaut).

## Petit exemple

    // limit capture operation to 3 images
    var options = { limit: 3 };
    
    navigator.device.capture.captureImage(captureSuccess, captureError, options);
    

## iOS Quirks

*   Le paramètre **limit** n'est pas pris en charge, et qu'une image est prise par l'invocation.


# capture.captureVideo

> Démarrez l'application enregistreur vidéo et renvoyer des informations sur les fichiers de clips vidéo capturée.

    navigator.device.capture.captureVideo(
        CaptureCB captureSuccess, CaptureErrorCB captureError, [CaptureVideoOptions options]
    );
    

## Description

Commence une opération asynchrone pour capturer des enregistrements vidéo à l'aide de la demande d'enregistrement vidéo de l'appareil. L'opération permet à l'utilisateur de capturer plusieurs enregistrements en une seule séance.

L'opération de capture se termine lorsque l'utilisateur quitte l'application de l'enregistrement vidéo, ou le nombre maximal d'enregistrements spécifié par `CaptureVideoOptions.limit` est atteinte. Si aucun `limit` valeur du paramètre est spécifiée, par défaut à un (1), et l'opération de capture se termine après que l'utilisateur enregistre un clip vidéo unique.

Fin de l'opération de capture, il le `CaptureCB` rappel s'exécute avec un tableau de `MediaFile` objets décrivant chacune capturé clip vidéo. Si l'utilisateur annule l'opération avant la capture d'un clip vidéo, le `CaptureErrorCB` rappel s'exécute avec un `CaptureError` objet mettant en vedette un `CaptureError.CAPTURE_NO_MEDIA_FILES` code d'erreur.

## Plates-formes prises en charge

*   Android
*   BlackBerry WebWorks (OS 5.0 et plus)
*   iOS
*   Windows Phone 7 et 8
*   Windows 8

## Petit exemple

    // capture callback
    var captureSuccess = function(mediaFiles) {
        var i, path, len;
        for (i = 0, len = mediaFiles.length; i < len; i += 1) {
            path = mediaFiles[i].fullPath;
            // do something interesting with the file
        }
    };
    
    // capture error callback
    var captureError = function(error) {
        navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
    };
    
    // start video capture
    navigator.device.capture.captureVideo(captureSuccess, captureError, {limit:2});
    

## Exemple complet

    <!DOCTYPE html>
    <html>
      <head>
        <title>Capture Video</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8" src="json2.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Called when capture operation is finished
        //
        function captureSuccess(mediaFiles) {
            var i, len;
            for (i = 0, len = mediaFiles.length; i < len; i += 1) {
                uploadFile(mediaFiles[i]);
            }
        }
    
        // Called if something bad happens.
        //
        function captureError(error) {
            var msg = 'An error occurred during capture: ' + error.code;
            navigator.notification.alert(msg, null, 'Uh oh!');
        }
    
        // A button will call this function
        //
        function captureVideo() {
            // Launch device video recording application,
            // allowing user to capture up to 2 video clips
            navigator.device.capture.captureVideo(captureSuccess, captureError, {limit: 2});
        }
    
        // Upload files to server
        function uploadFile(mediaFile) {
            var ft = new FileTransfer(),
                path = mediaFile.fullPath,
                name = mediaFile.name;
    
            ft.upload(path,
                "http://my.domain.com/upload.php",
                function(result) {
                    console.log('Upload success: ' + result.responseCode);
                    console.log(result.bytesSent + ' bytes sent');
                },
                function(error) {
                    console.log('Error uploading file ' + path + ': ' + error.code);
                },
                { fileName: name });
        }
    
        </script>
        </head>
        <body>
            <button onclick="captureVideo();">Capture Video</button> <br>
        </body>
    </html>
    

## BlackBerry WebWorks Quirks

*   Cordova pour BlackBerry WebWorks tente de lancer l'application **Enregistreur vidéo** , fournie par RIM, pour capturer les enregistrements vidéo. L'application reçoit un `CaptureError.CAPTURE_NOT_SUPPORTED` code d'erreur si l'application n'est pas installée sur l'appareil.


# CaptureVideoOptions

> Encapsule les options de configuration de capture vidéo.

## Propriétés

*   **limite**: le nombre maximal de clips vidéo, utilisateur de l'appareil peut capturer dans une opération de capture unique. La valeur doit être supérieure ou égale à 1 (1 par défaut).

*   **durée**: la durée maximale d'un clip vidéo, en quelques secondes.

## Petit exemple

    // limit capture operation to 3 video clips
    var options = { limit: 3 };
    
    navigator.device.capture.captureVideo(captureSuccess, captureError, options);
    

## BlackBerry WebWorks Quirks

*   Le paramètre de **durée** n'est pas supporté, donc la longueur des enregistrements ne peut pas être limitée par programme.

## iOS Quirks

*   Le paramètre **limit** n'est pas pris en charge. Qu'une vidéo est enregistrée par l'invocation.


# CaptureError

> Encapsule le code d'erreur résultant d'une opération de capture de médias ayant échoué.

## Propriétés

*   **code**: un des codes d'erreur prédéfinis énumérés ci-dessous.

## Constantes

*   `CaptureError.CAPTURE_INTERNAL_ERR`: La caméra ou un microphone a échoué à capturer l'image ou le son.

*   `CaptureError.CAPTURE_APPLICATION_BUSY`: L'application de capture caméra / audio est actuellement une autre demande de capture.

*   `CaptureError.CAPTURE_INVALID_ARGUMENT`: Utilisation incorrecte de l'API (par exemple, la valeur de `limit` est inférieur à 1).

*   `CaptureError.CAPTURE_NO_MEDIA_FILES`: L'utilisateur quitte l'application capture audio ou de la caméra avant de capturer n'importe quoi.

*   `CaptureError.CAPTURE_NOT_SUPPORTED`: L'opération de capture demandée n'est pas pris en charge.


# CaptureCB

> Appelé lors d'une opération de capture de médias réussie.

    function captureSuccess( MediaFile[] mediaFiles ) { ... };
    

## Description

Cette fonction s'exécute après qu'une opération de capture réussie est terminée. À ce point qu'un fichier multimédia a été capturé et soit l'utilisateur a quitté l'application capture de média, ou la limite de capture a été atteinte.

Chaque `MediaFile` objet décrit un fichier multimédia capturés.

## Petit exemple

    // capture callback
    function captureSuccess(mediaFiles) {
        var i, path, len;
        for (i = 0, len = mediaFiles.length; i < len; i += 1) {
            path = mediaFiles[i].fullPath;
            // do something interesting with the file
        }
    };


# CaptureErrorCB

> Appelée si une erreur se produit pendant une opération de capture de médias.

    function captureError( CaptureError error ) { ... };
    

## Description

Cette fonction s'exécute si une erreur se produit lorsque vous essayez de lancer un média opération de capture. Scénarios de défaillance incluent lors de l'application capture est occupée, une opération de capture est déjà en cours, ou l'utilisateur annule l'opération avant que tous les fichiers multimédias sont capturés.

Cette fonction s'exécute avec un `CaptureError` objet contenant une erreur appropriée`code`.

## Petit exemple

    // capture error callback
    var captureError = function(error) {
        navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
    };


# ConfigurationData

> Encapsule un ensemble de paramètres de capture de médias qu'un périphérique prend en charge.

## Description

Décrit les modes de capture de média pris en charge par le périphérique. Les données de configuration incluent le type MIME et dimensions de capture pour la capture vidéo ou image.

[RFC2046][1]devraient respecter les types MIME. Exemples :

 [1]: http://www.ietf.org/rfc/rfc2046.txt

*   `vidéo/3gpp`
*   `vidéo/quicktime`
*   `image/jpeg`
*   `audio/amr`
*   `audio/wav`

## Propriétés

*   **type**: The ASCII encodée en chaîne minuscule qui représente le type de média. (DOMString)

*   **hauteur**: la hauteur de l'image ou la vidéo en pixels. La valeur est zéro pour les extraits sonores. (Nombre)

*   **largeur**: la largeur de l'image ou la vidéo en pixels. La valeur est zéro pour les extraits sonores. (Nombre)

## Petit exemple

    // retrieve supported image modes
    var imageModes = navigator.device.capture.supportedImageModes;
    
    // Select mode that has the highest horizontal resolution
    var width = 0;
    var selectedmode;
    for each (var mode in imageModes) {
        if (mode.width > width) {
            width = mode.width;
            selectedmode = mode;
        }
    }
    

Pas pris en charge par n'importe quelle plateforme. Tous les tableaux de données de configuration sont vides.


# MediaFile

> Encapsule les propriétés d'un fichier de capture multimédia.

## Propriétés

*   **nom**: le nom du fichier, sans le chemin d'accès. (DOMString)

*   **fullPath**: le chemin d'accès complet du fichier, y compris le nom. (DOMString)

*   **type**: type de mime du fichier (DOMString)

*   **lastModifiedDate**: la date et l'heure lorsque le fichier a été modifié. (Date)

*   **taille**: la taille du fichier, en octets. (Nombre)

## Méthodes

*   **MediaFile.getFormatData**: récupère les informations sur le format du fichier multimédia.


# MediaFile.getFormatData

> Récupère le format d'informations sur le fichier de capture de médias.

    mediaFile.getFormatData (MediaFileDataSuccessCB successCallback, [MediaFileDataErrorCB errorCallback]) ;
    

## Description

Cette fonction de façon asynchrone tente de récupérer les informations de format pour le fichier multimédia. Si réussie, elle appelle le `MediaFileDataSuccessCB` rappel avec un `MediaFileData` objet. Si la tentative échoue, cette fonction appelle la `MediaFileDataErrorCB` rappel.

## Plates-formes prises en charge

*   Android
*   BlackBerry WebWorks (OS 5.0 et plus)
*   iOS
*   Windows Phone 7 et 8
*   Windows 8

## BlackBerry WebWorks Quirks

Ne fournit pas une API pour plus d'informations sur les fichiers de médias, alors tous les `MediaFileData` objets reviennent avec les valeurs par défaut.

## Quirks Android

L'API pour accéder aux médias file format informations est limité, donc pas tous les `MediaFileData` propriétés sont prises en charge.

## iOS Quirks

L'API pour accéder aux médias file format informations est limité, donc pas tous les `MediaFileData` propriétés sont prises en charge.


# MediaFileData

> Encapsule des informations sur le format d'un fichier multimédia.

## Propriétés

*   **codecs**: le format réel du contenu audio et vidéo. (DOMString)

*   **débit**: le débit moyen du contenu. La valeur est égale à zéro pour les images. (Nombre)

*   **hauteur**: la hauteur de l'image ou la vidéo en pixels. La valeur est égale à zéro pour des clips audio. (Nombre)

*   **largeur**: la largeur de l'image ou la vidéo en pixels. La valeur est égale à zéro pour des clips audio. (Nombre)

*   **durée**: la durée du clip vidéo ou audio en quelques secondes. La valeur est égale à zéro pour les images. (Nombre)

## BlackBerry WebWorks Quirks

Aucune API ne fournit des informations sur le format des fichiers multimédias, donc le `MediaFileData` objet retourné par `MediaFile.getFormatData` comporte les valeurs par défaut suivantes :

*   **codecs**: pas pris en charge et retourne`null`.

*   **Bitrate**: pas pris en charge et retourne la valeur zéro.

*   **hauteur**: pas pris en charge et retourne la valeur zéro.

*   **largeur**: non pris en charge et retourne la valeur zéro.

*   **durée**: non pris en charge et retourne la valeur zéro.

## Quirks Android

Prend en charge ce qui suit `MediaFileData` Propriétés :

*   **codecs**: pas pris en charge et retourne`null`.

*   **Bitrate**: pas pris en charge et retourne la valeur zéro.

*   **hauteur**: prise en charge : seuls les fichiers image et vidéo.

*   **largeur**: prise en charge : seuls les fichiers image et vidéo.

*   **durée**: prise en charge : seuls les fichiers audio et vidéo.

## iOS Quirks

Prend en charge ce qui suit `MediaFileData` Propriétés :

*   **codecs**: pas pris en charge et retourne`null`.

*   **Bitrate**: pris en charge sur les périphériques d'iOS4 pour l'audio uniquement. Renvoie zéro pour les images et vidéos.

*   **hauteur**: prise en charge : seuls les fichiers image et vidéo.

*   **largeur**: prise en charge : seuls les fichiers image et vidéo.

*   **durée**: prise en charge : seuls les fichiers audio et vidéo.
