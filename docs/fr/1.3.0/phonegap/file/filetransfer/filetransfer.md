FileTransfer
============

Un objet `FileTransfer` permet de transferer des fichiers vers un serveur distant.

Propriétés
----------

N/A

Méthodes
--------

- __upload__: envoyer un fichier vers un serveur. 

Détails
-------

L'objet `FileTransfer` permet de transferer des fichiers vers un serveur distant via une requête HTTP POST multipart.  Les protocoles HTTP et HTTPS sont tous deux supportés.  Des paramètres optionnels peuvent être fournis en passant un objet FileUploadOptions à la méthode upload.  En cas de réussite du transfert, la fonction de callback de succès sera appelée avec un objet FileUploadResult.  Si une erreur survient, la fonction de callback d'erreur sera appelée avec un objet FileTransferError.

Plateformes supportées
----------------------

- Android
- BlackBerry WebWorks (OS 5.0 ou plus récent)
- iOS
- Windows Phone 7 ( Mango )

Exemple rapide
--------------
	
	// !! Suppose que la variable fileURI contient une URI valide vers un fichier texte sur le mobile.
	
  	var win = function(r) {
        console.log("Code = " + r.responseCode);
        console.log("Réponse = " + r.response);
        console.log("Envoyé = " + r.bytesSent);
	}
	
    var fail = function(error) {
        alert("Une erreur est survenue : Code = " = error.code);
    }
	
	var options = new FileUploadOptions();
	options.fileKey="file";
	options.fileName=fileURI.substr(fileURI.lastIndexOf('/')+1);
	options.mimeType="text/plain";

    var params = new Object();
	params.value1 = "test";
	params.value2 = "param";
		
	options.params = params;
	
	var ft = new FileTransfer();
    ft.upload(fileURI, "http://un.serveur.com/upload.php", win, fail, options);
    
Exemple complet
---------------

    <!DOCTYPE html>
    <html>
    <head>
        <title>Exemple de transfert de fichier</title>
    
        <script type="text/javascript" charset="utf-8" src="phonegap.0.9.4.min.js"></script>
        <script type="text/javascript" charset="utf-8">
            
            // Attendre que PhoneGap soit prêt
            //
            document.addEventListener("deviceready", onDeviceReady, false);
            
            // PhoneGap est prêt
            //
            function onDeviceReady() {
                
                // Récupérer l'URI d'un fichier image à partir de la source spécifiée
                navigator.camera.getPicture(uploadPhoto,
                                            function(message) { alert('Echec de récupération du fichier'); },
                                            { quality: 50, 
                                            destinationType: navigator.camera.DestinationType.FILE_URI,
                                            sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY }
                                            );
                
            }
            
            function uploadPhoto(imageURI) {
                var options = new FileUploadOptions();
                options.fileKey="file";
                options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
                options.mimeType="image/jpeg";
                
                var params = new Object();
                params.value1 = "test";
                params.value2 = "param";
                
                options.params = params;
                
                var ft = new FileTransfer();
                ft.upload(imageURI, "http://un.serveur.com/upload.php", win, fail, options);
            }
            
            function win(r) {
                console.log("Code = " + r.responseCode);
                console.log("Réponse = " + r.response);
                console.log("Envoyé = " + r.bytesSent);
            }
            
            function fail(error) {
                alert("Une erreur est survenue : Code = " = error.code);
            }
            
            </script>
    </head>
    <body>
        <h1>Exemple</h1>
        <p>Transfert de fichier</p>
    </body>
    </html>

download
--------

__Paramètres:__

- __source__ - URL du fichier à télécharger
- __target__ - Chemin complet du fichier sur le mobile
- __successCallback__ - Fonction de callback appelée avec un objet FileEntry en paramètre. _(Function)_
- __errorCallback__ - Fonction de callback appelée lorsque une erreur survient lors de la récupération des Metadata. Appelée avec un objet FileError en paramètre. _(Function)_

__Exemple rapide__

     // !! Suppose que la variable url contient une URI valide d'un fichier sur un serveur et que filePath est un chemin valide sur le mobile

    var fileTransfer = new FileTransfer();
    
    fileTransfer.download(
        url,
        filePath,
        function(entry) {
            console.log("téléchargement terminé : " + entry.fullPath);
        },
        function(error) {
            console.log("téléchargement en échec de " + error.source);
            console.log("téléchargement en échec vers " + error.target);
            console.log("code d'erreur du téléchargement " + error.code);
        }
    );
