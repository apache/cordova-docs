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

# Transfert de fichiers

Le `FileTransfer` objet permet de charger ou télécharger des fichiers vers et depuis un serveur.

## Propriétés

*   **OnProgress**: appelée avec une `ProgressEvent` chaque fois qu'un nouveau segment de données est transféré. *(Fonction)*

## Méthodes

*   **Télécharger**: envoie un fichier sur un serveur.

*   **Télécharger**: télécharge un fichier de serveur.

*   **Annuler**: annule un transfert en cours.

## Détails

Le `FileTransfer` objet fournit un moyen de télécharger des fichiers sur un serveur distant à l'aide d'une requête HTTP de la poste multi-partie. Les protocoles HTTP et HTTPS sont supportés. Paramètres optionnels peuvent être spécifiés en passant une `FileUploadOptions` s'opposer à la `upload()` méthode. Le téléchargement réussi, un `FileUploadResult` objet est passé au rappel succès. Si une erreur survient, un `FileTransferError` objet est passé au rappel erreur. Il est également possible (uniquement sur iOS et Android) pour télécharger un fichier depuis un serveur distant et l'enregistrer sur l'appareil.

## Plates-formes prises en charge

*   Android
*   BlackBerry WebWorks (OS 5.0 et plus)
*   iOS
*   Windows Phone 7 et 8
*   Windows 8

## Télécharger

**Paramètres :**

*   **filePath**: chemin d'accès complet du fichier sur le périphérique.

*   **serveur**: URL du serveur de réception du fichier, tel qu'il est codé par`encodeURI()`.

*   **successCallback**: un rappel passé un `Metadata` objet. *(Fonction)*

*   **errorCallback**: un rappel qui s'exécute si une erreur survient récupérer la `Metadata` . Appelée avec un `FileTransferError` objet. *(Fonction)*

*   **options**: paramètres facultatifs tels que le nom de fichier et le type MIME.

*   **trustAllHosts**: paramètre facultatif, valeur par défaut est `false` . Si la valeur `true` , il accepte tous les certificats de sécurité. Ceci est utile car Android rejette des certificats auto-signés. Non recommandé pour une utilisation de production. Supporté sur Android et iOS. *(boolean)*

**Petit exemple**

    // !! Assumes variable fileURI contains a valid URI to a text file on the device
    
    var win = function (r) {
        console.log("Code = " + r.responseCode);
        console.log("Response = " + r.response);
        console.log("Sent = " + r.bytesSent);
    }
    
    var fail = function (error) {
        alert("An error has occurred: Code = " + error.code);
        console.log("upload error source " + error.source);
        console.log("upload error target " + error.target);
    }
    
    var options = new FileUploadOptions();
    options.fileKey = "file";
    options.fileName = fileURI.substr(fileURI.lastIndexOf('/') + 1);
    options.mimeType = "text/plain";
    
    var params = {};
    params.value1 = "test";
    params.value2 = "param";
    
    options.params = params;
    
    var ft = new FileTransfer();
    ft.upload(fileURI, encodeURI("http://some.server.com/upload.php"), win, fail, options);
    

**Exemple complet**

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
    <html>
    <head>
        <title>File Transfer Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
            // Wait for device API libraries to load
            //
            document.addEventListener("deviceready", onDeviceReady, false);
    
            // device APIs are available
            //
            function onDeviceReady() {
                // Retrieve image file location from specified source
                navigator.camera.getPicture(
                    uploadPhoto,
                    function(message) { alert('get picture failed'); },
                    {
                        quality         : 50,
                        destinationType : navigator.camera.DestinationType.FILE_URI,
                        sourceType      : navigator.camera.PictureSourceType.PHOTOLIBRARY
                    }
                );
            }
    
            function uploadPhoto(imageURI) {
                var options = new FileUploadOptions();
                options.fileKey="file";
                options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
                options.mimeType="image/jpeg";
    
                var params = {};
                params.value1 = "test";
                params.value2 = "param";
    
                options.params = params;
    
                var ft = new FileTransfer();
                ft.upload(imageURI, encodeURI("http://some.server.com/upload.php"), win, fail, options);
            }
    
            function win(r) {
                console.log("Code = " + r.responseCode);
                console.log("Response = " + r.response);
                console.log("Sent = " + r.bytesSent);
            }
    
            function fail(error) {
                alert("An error has occurred: Code = " + error.code);
                console.log("upload error source " + error.source);
                console.log("upload error target " + error.target);
            }
    
            </script>
    </head>
    <body>
        <h1>Example</h1>
        <p>Upload File</p>
    </body>
    </html>
    

**Réglage Télécharger en-têtes**

Prise en charge par Android et iOS

    function win(r) {
        console.log("Code = " + r.responseCode);
        console.log("Response = " + r.response);
        console.log("Sent = " + r.bytesSent);
    }
    
    function fail(error) {
        alert("An error has occurred: Code = " + error.code);
        console.log("upload error source " + error.source);
        console.log("upload error target " + error.target);
    }
    
    var uri = encodeURI("http://some.server.com/upload.php");
    
    var options = new FileUploadOptions();
    options.fileKey="file";
    options.fileName=fileURI.substr(fileURI.lastIndexOf('/')+1);
    options.mimeType="text/plain";
    
    var headers={'headerParam':'headerValue'};
    
    options.headers = headers;
    
    var ft = new FileTransfer();
    ft.upload(fileURI, uri, win, fail, options);
    

**Quirks Android**

Définir la `chunkedMode` option pour `false` pour prévenir les problèmes de téléchargement sur un serveur Nginx.

## Télécharger

**Paramètres :**

*   **source**: URL du serveur pour télécharger le fichier, tel qu'il est codé par`encodeURI()`.

*   **cible**: chemin d'accès complet du fichier sur le périphérique.

*   **successCallback**: un rappel passé un `FileEntry` objet. *(Fonction)*

*   **errorCallback**: un rappel qui s'exécute si une erreur se produit lors de la récupération du `Metadata` . Appelée avec un `FileTransferError` objet. *(Fonction)*

*   **trustAllHosts**: paramètre facultatif, valeur par défaut est `false` . Si la valeur `true` puis il acceptera tous les certificats de sécurité. Ceci est utile comme Android rejette les certificats de sécurité signé libre. Non recommandé pour une utilisation de production. Supporté sur Android et iOS. *(boolean)*

*   **options**: paramètres facultatifs, actuellement uniquement les supports en-têtes (par exemple l'autorisation (authentification de base), etc.).

**Petit exemple**

    // !! Suppose filePath est un chemin d'accès valide sur le transfert de fichiers périphérique var = new FileTransfer() ;
    var uri = encodeURI ("http://some.server.com/download.php") ;
    
    fileTransfer.download (uri, filePath, function(entry) {console.log ("téléchargement complet:" + entry.fullPath) ;
        }, function(error) {console.log (« source de l'erreur de téléchargement » + error.source) ;
            Console.log (« erreur de téléchargement cible » + error.target) ;
            Console.log (« code d'erreur de téléchargement » + error.code) ;
        }, faux, {en-têtes: {« Autorisation »: « dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA base == "}}) ;
    

## abandonner.

Abandonne un transfert en cours. Le rappel onerror est passé à un objet FileTransferError qui a un code d'erreur de FileTransferError.ABORT_ERR.

**Plates-formes prises en charge**

*   Android
*   iOS

**Petit exemple**

    // !! Suppose que la variable fileURI contient un URI valide dans un fichier de texte sur la victoire de var périphérique = function(r) {console.log ("ne devrait pas être appelée.");}
    
    var fail = function(error) {/ / error.code == FileTransferError.ABORT_ERR alert ("une erreur est survenue : Code =" + error.code) ;
        Console.log (« source de l'erreur de téléchargement » + error.source) ;
        Console.log ("erreur de téléchargement cible" + error.target);}
    
    options de var = new FileUploadOptions() ;
    options.fileKey="file" ;
    options.fileName="myphoto.jpg" ;
    options.mimeType="image/jpeg" ;
    
    ft var = new FileTransfer() ;
    ft.upload (fileURI, encodeURI ("http://some.server.com/upload.php"), win, fail, options) ;
    ft.Abort() ;
    

## OnProgress

Appelée avec un ProgressEvent chaque fois qu'un nouveau segment de données est transféré.

**Plates-formes prises en charge**

*   Android
*   iOS

**Exemple**

    fileTransfer.onprogress = function(progressEvent) {
        if (progressEvent.lengthComputable) {
          loadingStatus.setPercentage(progressEvent.loaded / progressEvent.total);
        } else {
          loadingStatus.increment();
        }
    };
    fileTransfer.download(...); // or fileTransfer.upload(...);
    

**Quirks** - sur les deux Android un iOS, lengthComputable est `false` pour les téléchargements qui utilisent l'encodage gzip.