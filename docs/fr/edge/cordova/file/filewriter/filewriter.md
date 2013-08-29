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

# FileWriter

En tant qu'objet permet de créer et d'écrire des données dans un fichier.

## Propriétés

*   **readyState**: un des trois États possibles, soit `INIT` , `WRITING` , ou`DONE`.

*   **fileName**: le nom du fichier à écrire. *(DOMString)*

*   **longueur**: la longueur du fichier à écrire. *(long)*

*   **position**: la position actuelle du pointeur de la file. *(long)*

*   **erreur**: un objet contenant des erreurs. *(FileError)*

*   **onwritestart**: appelé au démarrage de l'écriture. *(Fonction)*

*   **onwrite**: appelé lorsque la requête s'est terminée correctement. *(Fonction)*

*   **OnAbort**: appelé lorsque l'écriture a été abandonnée. Par exemple, en appelant la méthode abort(). *(Fonction)*

*   **OnError**: appelé lorsque l'écriture a échoué. *(Fonction)*

*   **onwriteend**: appelé lorsque la demande est terminée (que ce soit dans le succès ou l'échec). *(Fonction)*

La propriété suivante n'est *pas* supportée :

*   **OnProgress**: appelée lors de l'écriture du fichier, faisant état de progrès en termes de `progress.loaded` / `progress.total` . *(Fonction)*

## Méthodes

*   **Annuler**: annule l'écriture du fichier.

*   **Rechercher**: déplace le pointeur de fichier à l'octet spécifié.

*   **tronquer**: raccourcit le fichier à la longueur spécifiée.

*   **écrire**: écrit les données dans le fichier.

## Détails

Le `FileWriter` objet offre la possibilité d'écrire des fichiers codés en UTF-8 pour le système de fichiers du périphérique. Les applications répondent aux `writestart` , `progress` , `write` , `writeend` , `error` , et `abort` des événements.

Chaque `FileWriter` correspond à un fichier unique, à laquelle les données peuvent être écrites plusieurs fois. La `FileWriter` maintient du fichier `position` et `length` attributs, qui permettent l'application pour `seek` et `write` n'importe où dans le fichier. Par défaut, le `FileWriter` écrit au début du fichier, en remplaçant les données existantes. Définissez le paramètre optionnel `append` booléen à `true` dans la `FileWriter` de constructeur pour écrire à la fin du fichier.

Données textuelles sont pris en charge par toutes les plates-formes répertoriées ci-dessous. Texte est codé au format UTF-8 avant d'être écrites sur le système de fichiers. Certaines plates-formes soutiennent également les données binaires, qui peuvent être passées comme un ArrayBuffer ou un objet Blob.

## Plates-formes prises en charge

Texte et binaire Support :

*   Android
*   iOS

Support de texte uniquement :

*   BlackBerry WebWorks (OS 5.0 et plus)
*   Windows Phone 7 et 8
*   Windows 8

## Chercher petit exemple

    function win(writer) {
        // fast forwards file pointer to end of file
        writer.seek(writer.length);
    };
    
    var fail = function(evt) {
        console.log(error.code);
    };
    
    entry.createWriter(win, fail);
    

## Petit exemple de tronquer

    function win(writer) {
        writer.truncate(10);
    };
    
    var fail = function(evt) {
        console.log(error.code);
    };
    
    entry.createWriter(win, fail);
    

## Écrire exemple rapide

    function win(writer) {
        writer.onwrite = function(evt) {
            console.log("write success");
        };
        writer.write("some sample text");
    };
    
    var fail = function(evt) {
        console.log(error.code);
    };
    
    entry.createWriter(win, fail);
    

## Binaire écrire exemple rapide

    function win(writer) {
        var data = new ArrayBuffer(5),
            dataView = new Int8Array(data);
        for (i=0; i < 5; i++) {
            dataView[i] = i;
        }
        writer.onwrite = function(evt) {
            console.log("write success");
        };
        writer.write(data);
    };
    
    var fail = function(evt) {
        console.log(error.code);
    };
    
    entry.createWriter(win, fail);
    

## Ajouter exemple rapide

    function win(writer) {
        writer.onwrite = function(evt) {
        console.log("write success");
    };
    writer.seek(writer.length);
        writer.write("appended text");
    };
    
    var fail = function(evt) {
        console.log(error.code);
    };
    
    entry.createWriter(win, fail);
    

## Abandon rapide exemple

    function win(writer) {
        writer.onwrite = function(evt) {
            console.log("write success");
        };
        writer.write("some sample text");
        writer.abort();
    };
    
    var fail = function(evt) {
        console.log(error.code);
    };
    
    entry.createWriter(win, fail);
    

## Exemple complet

    <!DOCTYPE html>
    <html>
      <head>
        <title>FileWriter Example</title>
    
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
            fileSystem.root.getFile("readme.txt", {create: true, exclusive: false}, gotFileEntry, fail);
        }
    
        function gotFileEntry(fileEntry) {
            fileEntry.createWriter(gotFileWriter, fail);
        }
    
        function gotFileWriter(writer) {
            writer.onwriteend = function(evt) {
                console.log("contents of file now 'some sample text'");
                writer.truncate(11);
                writer.onwriteend = function(evt) {
                    console.log("contents of file now 'some sample'");
                    writer.seek(4);
                    writer.write(" different text");
                    writer.onwriteend = function(evt){
                        console.log("contents of file now 'some different text'");
                    }
                };
            };
            writer.write("some sample text");
        }
    
        function fail(error) {
            console.log(error.code);
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>Write File</p>
      </body>
    </html>