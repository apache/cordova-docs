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

# FileReader

Le `FileReader` permet l'accès à un fichier de base.

## Propriétés

*   **readyState**: un des lecteur de trois possible précise, soit `EMPTY` , `LOADING` ou`DONE`.

*   **résultat**: le contenu du fichier qui ont été lus. *(DOMString)*

*   **erreur**: un objet contenant des erreurs. *(FileError)*

*   **onloadstart**: appelé au démarrage de la lecture. *(Fonction)*

*   **OnLoad**: appelé lorsque la lecture a complété avec succès. *(Fonction)*

*   **OnAbort**: appelé lorsque la lecture a été abandonnée. Par exemple, en appelant le `abort()` méthode. *(Fonction)*

*   **OnError**: appelé lorsque la lecture a échoué. *(Fonction)*

*   **onloadend**: appelé lorsque la demande est terminée (que ce soit dans le succès ou l'échec). *(Fonction)*

**Remarque :** Le porperty suivant n'est pas pris en charge :

*   **OnProgress**: appelée lors de la lecture du fichier, faisant état de progrès en termes de `progress.loaded` / `progress.total` . *(Fonction)*

## Méthodes

*   **Abort**: abandons de lecture du fichier.

*   **readAsDataURL**: lire le fichier et renvoyer les données sous forme d'une URL de données codées en base64.

*   **readAsText**: lectures du fichier texte.

*   **readAsBinaryString**: lit le fichier binaire et retourne une chaîne binaire.

*   **readAsArrayBuffer**: lectures du fichier comme un`ArrayBuffer`.

## Détails

Le `FileReader` objet offre un moyen de lire les fichiers de système de fichiers de l'appareil. Les fichiers peuvent être lus sous forme de texte ou comme une chaîne de données codées en base64. Écouteurs d'événements recevoir la `loadstart` , `progress` , `load` , `loadend` , `error` , et `abort` des événements.

## Plates-formes prises en charge

*   Android
*   BlackBerry WebWorks (OS 5.0 et plus)
*   iOS
*   Windows Phone 7 et 8
*   Windows 8

## readAsDataURL

**Paramètres :**

*   **fichier**: l'objet du fichier à lire.

## Petit exemple

    function win(file) {
        var reader = new FileReader();
        reader.onloadend = function (evt) {
            console.log("read success");
            console.log(evt.target.result);
        };
        reader.readAsDataURL(file);
    };
    
    var fail = function (error) {
        console.log(error.code);
    };
    
    entry.file(win, fail);
    

## readAsText

**Paramètres :**

*   **fichier**: l'objet du fichier à lire.

*   **codage**: le codage à utiliser pour coder le contenu du fichier. Valeur par défaut est UTF8.

## Petit exemple

    function win(file) {
        var reader = new FileReader();
        reader.onloadend = function (evt) {
            console.log("read success");
            console.log(evt.target.result);
        };
        reader.readAsText(file);
    };
    
    var fail = function (error) {
        console.log(error.code);
    };
    
    entry.file(win, fail);
    

## abandonner.

    function win(file) {
        var reader = new FileReader();
        reader.onloadend = function(evt) {
            console.log("read success");
            console.log(evt.target.result);
        };
        reader.readAsText(file);
        reader.abort();
    };
    
    function fail(error) {
        console.log(error.code);
    }
    
    entry.file(win, fail);
    

## Exemple complet

    <!DOCTYPE html>
    <html>
      <head>
        <title>FileReader Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);
        }
    
        function gotFS(fileSystem) {
            fileSystem.root.getFile("readme.txt", null, gotFileEntry, fail);
        }
    
        function gotFileEntry(fileEntry) {
            fileEntry.file(gotFile, fail);
        }
    
        function gotFile(file){
            readDataUrl(file);
            readAsText(file);
        }
    
        function readDataUrl(file) {
            var reader = new FileReader();
            reader.onloadend = function(evt) {
                console.log("Read as data URL");
                console.log(evt.target.result);
            };
            reader.readAsDataURL(file);
        }
    
        function readAsText(file) {
            var reader = new FileReader();
            reader.onloadend = function(evt) {
                console.log("Read as text");
                console.log(evt.target.result);
            };
            reader.readAsText(file);
        }
    
        function fail(error) {
            console.log(error.code);
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>Read File</p>
      </body>
    </html>
    

## iOS Quirks

*   Le paramètre **encoding** n'est pas pris en charge, et le codage UTF8 est toujours en vigueur.

## readAsBinaryString

Actuellement pris en charge sur iOS et Android uniquement.

**Paramètres :**

*   **fichier**: l'objet du fichier à lire.

## Petit exemple

    function win(file) {
        var reader = new FileReader();
        reader.onloadend = function (evt) {
            console.log("read success");
            console.log(evt.target.result);
        };
        reader.readAsBinaryString(file);
    };
    
    var fail = function (error) {
        console.log(error.code);
    };
    
    entry.file(win, fail);
    

## readAsArrayBuffer

Actuellement pris en charge sur iOS et Android uniquement.

**Paramètres :**

*   **fichier**: l'objet du fichier à lire.

## Petit exemple

    function win(file) {
        var reader = new FileReader();
        reader.onloadend = function (evt) {
            console.log("read success");
            console.log(new Uint8Array(evt.target.result));
        };
        reader.readAsArrayBuffer(file);
    };
    
    var fail = function (error) {
        console.log(error.code);
    };
    
    entry.file(win, fail);