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

L'objet `FileTransfer` permet de charger ou télécharger des fichiers vers et depuis un serveur.

## Propriétés

*   **onprogress** : fonction appelée avec un `ProgressEvent` à chaque fois qu'un nouveau segment de données est transféré. *(Function)*

## Méthodes

*   **upload** : envoie un fichier à un serveur.

*   **download** : télécharge un fichier depuis un serveur.

*   **abort** : annule le transfert en cours.

## Détails

L'objet `FileTransfer` offre un moyen d'envoyer des fichiers vers un serveur distant à l'aide d'une requête HTTP de type POST multi-part. Les protocoles HTTP et HTTPS sont tous deux supportés. Des paramètres optionnels peuvent être spécifiés en passant un objet `FileUploadOptions` à la méthode `upload()`. Dans le cas d'un téléchargement réussi, un objet `FileUploadResult` est passé à la callback de succès. Si une erreur survient, un objet `FileTransferError` objet est passé à la callback d'erreur. Il est également possible (uniquement sur iOS et Android) de télécharger un fichier depuis un serveur distant et l'enregistrer sur l'appareil.

## Plates-formes supportées

*   Android
*   BlackBerry WebWorks (OS 5.0 et plus)
*   iOS
*   Windows Phone 7 et 8
*   Windows 8

## upload

**Paramètres :**

*   **filePath** : chemin d'accès complet au fichier sur l'appareil.

*   **server** : l'URL du serveur destiné à recevoir le fichier, encodée via `encodeURI()`.

*   **successCallback** : callback de succès à laquelle est passé un objet `Metadata`. *(Function)*

*   **errorCallback** : callback d'erreur s'exécutant si une erreur survient lors de la récupération de l'objet `Metadata` . Appelée avec un objet `FileTransferError`. *(Function)*

*   **options** : paramètres facultatifs tels que le nom du fichier et son type mime.

*   **trustAllHosts** : paramètre facultatif, sa valeur par défaut est `false`. Si sa valeur est réglée à `true`, tous les certificats de sécurité sont acceptés. Ceci peut être utile car Android rejette les certificats auto-signés. N'est pas recommandé pour une utilisation en production. Supporté sous Android et iOS. *(boolean)*

**Exemple court**

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
    

**Réglage des en-têtes de téléchargement**

Supporté par Android et iOS

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
    

**Particularités d'Android**

Régler la valeur de l'option `chunkedMode` à `false` afin d'éviter les problèmes de téléchargement vers un serveur Nginx.

## download

**Paramètres :**

*   **source** : l'URL du serveur depuis lequel télécharger le fichier, encodée via `encodeURI()`.

*   **target** : chemin d'accès complet au fichier sur l'appareil.

*   **successCallback** : une callback de succès à laquelle est passée un objet `FileEntry`. *(Function)*

*   **errorCallback** : une callback d'erreur s'exécutant si une erreur se produit lors de la récupération de l'objet `Metadata`. Appelée avec un objet `FileTransferError`. *(Function)*

*   **trustAllHosts** : paramètre facultatif, sa valeur par défaut est `false`. Si sa valeur est réglée à `true`, tous les certificats de sécurité sont acceptés. Ceci peut être utile car Android rejette les certificats auto-signés. N'est pas recommandé pour une utilisation en production. Supporté sous Android et iOS. *(boolean)*

*   **options** : paramètres facultatifs, seules les en-têtes sont actuellement supportées (par exemple l'autorisation (authentification basique), etc.).

**Exemple court**

    // !! Suppose que filePath est un chemin valide sur l'appareil
    
    var fileTransfer = new FileTransfer();
    var uri = encodeURI("http://some.server.com/download.php");
    
    fileTransfer.download(
        uri,
        filePath,
        function(entry) {
            console.log("Téléchargement terminé : " + entry.fullPath);
        },
        function(error) {
            console.log("Source pour l'erreur de téléchargement : " + error.source);
            console.log("Destination pour l'erreur de téléchargement : " + error.target);
            console.log("Code de l'erreur de téléchargement : " + error.code);
        },
        false,
        {
            headers: {
                "Authorization": "Basic dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA=="
            }
        }
    );
    

## abort

Abandonne un transfert en cours. Un objet FileTransferError avec un code d'erreur FileTransferError.ABORT_ERR est passé à la callback d'erreur onerror.

**Plates-formes supportées**

*   Android
*   iOS

**Exemple court**

    // !! Suppose que la variable fileURI contient l'URI valide d'un fichier texte sur l'appareil
    
    var win = function(r) {
        console.log("Ne devrait pas être appelée.");
    }
    
    var fail = function(error) {
        // error.code == FileTransferError.ABORT_ERR
        alert("Une erreur est survenue : code = " + error.code);
        console.log("Source pour l'erreur de téléchargement : " + error.source);
        console.log("Destination pour l'erreur de téléchargement : " + error.target);
    }
    
    var options = new FileUploadOptions();
    options.fileKey="file";
    options.fileName="myphoto.jpg";
    options.mimeType="image/jpeg";
    
    var ft = new FileTransfer();
    ft.upload(fileURI, encodeURI("http://some.server.com/upload.php"), win, fail, options);
    ft.abort();
    

## onprogress

Fonction appelée avec un objet ProgressEvent à chaque fois qu'un nouveau segment de données est transféré.

**Plates-formes supportées**

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
    

**Particularités** - sous Android et iOS, la valeur de la propriété lengthComputable est `false` pour les téléchargements qui utilisent l'encodage gzip.