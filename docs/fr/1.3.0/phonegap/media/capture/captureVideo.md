capture.captureVideo
====================

> Démarrer l'application caméscope du mobile et retourner des informations sur le ou les fichier(s) vidéo(s) ainsi créé(s).

    navigator.device.capture.captureVideo( 
	    CaptureCB captureSuccess, CaptureErrorCB captureError, [CaptureVideoOptions options]
	);

Description
-----------

Cette méthode lance une opération asynchrone de capture de vidéos grâce à l'application caméscope du mobile.  Cette opération permet à l'utilisateur d'enregistrer plusieurs clips vidéos par session.

L'opération se termine lorsque l'utilisateur quitte l'application caméscope, ou lorsque le nombre maximum d'images, défini via le paramètre __limit__ de CaptureVideoOptions, a été atteint.  Si aucune valeur __limit__ n'est fournie, la valeur par défaut de 1 est utilisée, et l'opération se terminera dès la première vidéo enregistrée.

Lorsque l'opération est terminée, la fonction de callback CaptureCB sera appelée avec en argument un tableau d'objets MediaFile décrivant chacun des fichiers vidéos créés.  Si l'opération est arrêtée par l'utilisateur avant qu'un clip vidéo n'ait été enregistré, la fonction de callback CaptureErrorCB sera appelée avec en argument un objet CaptureError qui contiendra le code d'erreur CaptureError.`CAPTURE_NO_MEDIA_FILES`.

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
        navigator.notification.alert('Error code : ' + error.code, null, 'Capture Error');
    };

    // Démarrer la capture de vidéos
    navigator.device.capture.captureVideo(captureSuccess, captureError, {limit:2});

Exemple complet
---------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Capture Video</title>

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
        function captureVideo() {
            // Lancer l'application caméscope du mobile, 
            // permettant à l'utilisateur d'enregistrer jusqu'à 2 séquences vidéos
            navigator.device.capture.captureVideo(captureSuccess, captureError, {limit: 2});
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
            <button onclick="captureVideo();">Capture Video</button> <br>
        </body>
    </html>

Singularités BlackBerry WebWorks
--------------------------------

- Sous BlackBerry WebWorks, PhoneGap tente de lancer l'application __Video Recorder__, fournie par RIM, pour réaliser des enregistrements vidéos.  Le développeur recevra le code d'erreur CaptureError.`CAPTURE_NOT_SUPPORTED` si cette application n'est pas installée sur le mobile.
