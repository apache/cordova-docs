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

Un objet permettant de créer et d'écrire des données dans un fichier.

## Propriétés

*   **readyState** : un des trois états suivants, `INIT`, `WRITING` ou `DONE`.

*   **fileName** : le nom du fichier à écrire. *(DOMString)*

*   **length** : la longueur du fichier à écrire. *(long)*

*   **position** : la position actuelle du pointeur dans le fichier. *(long)*

*   **error** : un objet contenant des erreurs. *(FileError)*

*   **onwritestart** : fonction appelée lors du démarrage de l'écriture. *(Function)*

*   **onwrite** : fonction appelée lorsque l'écriture s'est terminée correctement. *(Function)*

*   **onabort** : fonction appelée lorsque l'écriture a été abandonnée. Par exemple en appelant la méthode abort(). *(Function)*

*   **onerror** : fonction appelé lorsque l'écriture a échoué. *(Function)*

*   **onwriteend** : fonction appelée lorsque l'écriture est terminée (avec succès ou non). *(Function)*

La propriété suivante n'est *pas* supportée :

*   **onprogress** : fonction appelée lors de l'écriture du fichier, faisant état de la progression par le biais de `progress.loaded`/`progress.total`. *(Function)*

## Méthodes

*   **abort** : annule l'écriture du fichier.

*   **seek** : déplace le pointeur dans le fichier à l'octet spécifié.

*   **truncate** : raccourcit le fichier à la longueur spécifiée.

*   **write** : écrit des données dans le fichier.

## Détails

L'objet `FileWriter` permet d'écrire des fichiers encodés en UTF-8 dans le système de fichiers de l'appareil. Les applications répondent aux évènements `writestart`, `progress`, `write`, `writeend`, `error` et `abort`.

Chaque objet `FileWriter` correspond à un fichier unique dans lequel des données peuvent être écrites plusieurs fois. L'objet `FileWriter` conserve les attributs `position` et `length` du fichier, permettant ainsi à l'application de `rechercher (seek)` et `écrire (write)` n'importe où dans celui-ci. Par défaut, l'objet `FileWriter` écrit au début du fichier, écrasant alors les données existantes. Spécifiez la valeur du paramètre optionnel `append` (Boolean) à `true` dans le constructeur d'un `FileWriter` pour écrire à la fin d'un fichier.

Les données sous forme textuelle sont prise en charge par toutes les plates-formes répertoriées ci-dessous. Chaque texte est encodé au format UTF-8 avant d'être écrit dans le système de fichiers. Certaines plates-formes supportent également les données sous forme binaire, qui peuvent être passées comme un ArrayBuffer ou un objet Blob.

## Plates-formes supportées

Support des formats texte et binaire :

*   Android
*   iOS

Support du format texte uniquement :

*   BlackBerry WebWorks (OS 5.0 et plus)
*   Windows Phone 7 et 8
*   Windows 8

## Exemple court de recherche

    function win(writer) {
        // fast forwards file pointer to end of file
        writer.seek(writer.length);
    };
    
    var fail = function(evt) {
        console.log(error.code);
    };
    
    entry.createWriter(win, fail);
    

## Exemple court de troncature

    function win(writer) {
        writer.truncate(10);
    };
    
    var fail = function(evt) {
        console.log(error.code);
    };
    
    entry.createWriter(win, fail);
    

## Exemple court d'écriture

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
    

## Exemple court d'écriture binaire

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
    

## Exemple court d'ajout

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
    

## Exemple court d'abandon

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