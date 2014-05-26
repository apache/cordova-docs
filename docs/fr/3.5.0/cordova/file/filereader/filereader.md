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

L'objet `FileReader` permet l'accès basique à un fichier.

## Propriétés

*   **readyState** : un trois états possibles du lecteur ; soit `EMPTY`, `LOADING` ou `DONE`.

*   **result** : le contenu du fichier qui a été lu. *(DOMString)*

*   **error** : un objet contenant des erreurs. *(FileError)*

*   **onloadstart** : fonction appelée lors du démarrage de la lecture. *(Function)*

*   **onload** : fonction appelée lorsque la lecture a été complétée avec succès. *(Function)*

*   **onabort** : fonction appelée lorsque la lecture a été abandonnée. Par exemple, en appelant la méthode `abort()`. *(Function)*

*   **onerror** : fonction appelée lorsque la lecture a échoué. *(Function)*

*   **onloadend** : fonction appelée lorsque l'opération de lecture est terminée (avec succès ou non). *(Function)*

**Remarque :** la propriété suivante n'est pas prise en charge

*   **onprogress** : fonction appelée lors de la lecture du fichier, faisant état de la progression par le biais de `progress.loaded`/`progress.total`. *(Function)*

## Méthodes

*   **abort** : abandonne la lecture du fichier.

*   **readAsDataURL** : lit le fichier et renvoie son contenu sous la forme d'une URL de données encodée en base64.

*   **readAsText** : lit le fichier texte.

*   **readAsBinaryString** : lit le fichier en mode binaire et retourne une chaîne binaire.

*   **readAsArrayBuffer** : lit le fichier en tant qu'`ArrayBuffer`.

## Détails

L'objet `FileReader` offre un moyen de lire les fichiers appartenant au système de fichiers de l'appareil. Les fichiers peuvent être lus en tant que texte ou comme une chaîne de données encodée en base64. Les écouteurs attachés reçoivent les évènements `loadstart`, `progress`, `load`, `loadend`, `error` et `abort`.

## Plates-formes supportées

*   Android
*   BlackBerry WebWorks (OS 5.0 et plus)
*   iOS
*   Windows Phone 7 et 8
*   Windows 8

## readAsDataURL

**Paramètres :**

*   **file** : l'objet représentant le fichier à lire.

## Exemple court

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

*   **file** : l'objet représentant le fichier à lire.

*   **encoding** : l'encodage à utiliser pour le contenu du fichier. La valeur par défaut est UTF8.

## Exemple court

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
    

## abort

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
    

## Particularités d'iOS

*   Le paramètre **encoding** n'est pas pris en charge, le type d'encodage est toujours UTF8.

## readAsBinaryString

Actuellement pris en charge uniquement sur iOS et Android.

**Paramètres :**

*   **file** : l'objet représentant le fichier à lire.

## Exemple court

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

Actuellement pris en charge uniquement sur iOS et Android.

**Paramètres :**

*   **file** : l'objet représentant le fichier à lire.

## Exemple court

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