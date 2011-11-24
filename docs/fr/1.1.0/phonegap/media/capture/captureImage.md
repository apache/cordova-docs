capture.captureImage
====================

> Démarrer l'application appareil photo et retourner des informations sur le ou les fichier(s) image(s) ainsi créé(s).

    navigator.device.capture.captureImage( 
	    CaptureCB captureSuccess, CaptureErrorCB captureError, [CaptureImageOptions options]
	);

Description
-----------

Cette méthode lance une opération asynchrone de prise de photos grâce à l'application appareil photo du mobile.  Cette opération permet à l'utilisateur d'enregistrer plusieurs fichiers images par session.

L'opération se termine lorsque l'utilisateur quitte l'application appareil photo, ou lorsque le nombre maximum d'images, défini via le paramètre __limit__ de CaptureImageOptions, a été atteint.  Si aucune valeur __limit__ n'est fournie, la valeur par défaut de 1 est utilisée, et l'opération se terminera dès la première photo prise.

Lorsque l'opération est terminée, la fonction de callback CaptureCB sera appelée avec en argument un tableau d'objets MediaFile décrivant chacun des fichiers images créés.  Si l'opération est arrêtée par l'utilisateur avant qu'une photo n'ait été prise, la fonction de callback CaptureErrorCB sera appelée avec en argument un objet CaptureError qui contiendra le code d'erreur CaptureError.`CAPTURE_NO_MEDIA_FILES`.

Plateformes supportées
----------------------

- Android
- BlackBerry WebWorks (OS 5.0 et plus récent)
- iOS
- Windows Phone 7 ( Mango )

Exemple rapide
--------------

    // Fonction de callback en succès
    var captureSuccess = function(mediaFiles) {
        var i, path, len;
        for (i = 0, len = mediaFiles.length; i < len; i += 1) {
            path = mediaFiles[i].fullPath;
            // Faire quelque chose d'intéressant avec le fichier
        }
    };

    // Fonction de callback en erreur
    var captureError = function(error) {
        navigator.notification.alert("Code d'erreur : " + error.code, null, 'Capture Error');
    };

    // Démarrer la session photo
    navigator.device.capture.captureImage(captureSuccess, captureError, {limit:2});

Exemple complet
---------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Capture Image</title>

        <script type="text/javascript" charset="utf-8" src="phonegap.js"></script>
        <script type="text/javascript" charset="utf-8" src="json2.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Appelé lorsque l'opération d'enregistrement est terminée
        //
        function captureSuccess(mediaFiles) {
            var i, len;
            for (i = 0, len = mediaFiles.length; i < len; i += 1) {
                uploadFile(mediaFiles[i]);
            }	    
        }

        // Appelé en cas d'erreur.
        // 
        function captureError(error) {
	        var msg = 'Une erreur est survenue pendant l'enregistrement : ' + error.code;
            navigator.notification.alert(msg, null, 'Aïe aïe aïe !');
        }

        // Un bouton déclenchera l'appel de cette fonction
        //
        function captureImage() {
            // Lancer l'application appareil photo du mobile, 
            // permettant à l'utilisateur de prendre jusqu'à 2 photos
            navigator.device.capture.captureImage(captureSuccess, captureError, {limit: 2});
        }

        // Transferer les fichiers vers le serveur
        function uploadFile(mediaFile) {
            var ft = new FileTransfer(),
                path = mediaFile.fullPath,
                name = mediaFile.name;

            ft.upload(path,
                "http://un.serveur.com/upload.php",
                function(result) {
                    console.log('Réussite du transfert : ' + result.responseCode);
                    console.log(result.bytesSent + ' octets envoyés');
                },
                function(error) {
                    console.log('Erreur lors du transfert du fichier ' + path + ' : ' + error.code);
                },
                { fileName: name });   
        }

        </script>
        </head>
        <body>
            <button onclick="captureImage();">Capture Image</button> <br>
        </body>
    </html>


