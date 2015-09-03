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


# File

> Une API permettant de lire, écrire et naviguer dans les hiérarchies d'un système de fichiers, basée sur [celle du w3c][1].

 [1]: http://www.w3.org/TR/FileAPI

## Objets

*   DirectoryEntry
*   DirectoryReader
*   Fichier
*   FileEntry
*   FileError
*   FileReader
*   Système de fichiers
*   Transfert de fichiers
*   FileTransferError
*   FileUploadOptions
*   FileUploadResult
*   FileWriter
*   Drapeaux
*   Local
*   Métadonnées

## Accéder à la fonctionnalité

Depuis la version 3.0, Cordova implémente les API liées à l'appareil en tant que *plugins*. Utiliser la commande `plugin` de l'Interface en Ligne de Commande, décrite dans la section intitulée L'Interface en Ligne de Commande, afin d'ajouter ou retirer cette fonctionnalité à un projet :

        $ cordova plugin add org.apache.cordova.file
        $ cordova plugin ls
        [ 'org.apache.cordova.file' ]
        $ cordova plugin rm org.apache.cordova.file
    

Pour utiliser le plugin de transfert de fichiers vous devez ajouter celui-ci séparément :

        $ cordova plugin add org.apache.cordova.file-transfer
        $ cordova plugin ls
        [ 'org.apache.cordova.file-transfer' ]
        $ cordova plugin rm org.apache.cordova.file-transfer
    

Ces commandes s'appliquent à toutes les plates-formes ciblées mais modifient les paramètres de configuration spécifiques aux différentes plates-formes tel que décrit ci-dessous :

*   Android
    
        (in app/res/xml/config.xml)
        <feature name="File">
            <param name="android-package" value="org.apache.cordova.FileUtils" />
        </feature>
        <feature name="FileTransfer">
            <param name="android-package" value="org.apache.cordova.FileTransfer" />
        </feature>
        
        (in app/AndroidManifest.xml)
        <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
        

*   BlackBerry WebWorks
    
        (in www/plugins.xml)
        <feature name="File">
            <param name="blackberry-package" value="org.apache.cordova.file.FileManager" />
        </feature>
        <feature name="FileTransfer">
            <param name="blackberry-package" value="org.apache.cordova.http.FileTransfer" />
        </feature>
        
        (in www/config.xml)
        <feature id="blackberry.io.file" required="true" version="1.0.0.0" />
        <feature id="blackberry.utils"   required="true" version="1.0.0.0" />
        <feature id="blackberry.io.dir"  required="true" version="1.0.0.0" />
        <rim:permissions>
            <rim:permit>access_shared</rim:permit>
        </rim:permissions>
        

*   iOS (dans `config.xml`)
    
        <feature name="File">
            <param name="ios-package" value="CDVFile" />
        </feature>
        <feature name="FileTransfer">
            <param name="ios-package" value="CDVFileTransfer" />
        </feature>
        

Certaines plates-formes peuvent prendre en charge cette fonctionnalité sans nécessiter aucune configuration spéciale. Voir *Support de plate-forme* dans la section vue d'ensemble.


# File

Cet objet contient les attributs se référant à un fichier.

## Propriétés

*   **name** : le nom du fichier. *(DOMString)*

*   **fullPath** : le chemin d'accès complet incluant le nom du fichier. *(DOMString)*

*   **type** : le type mime du fichier. *(DOMString)*

*   **lastModifiedDate** : la date de la dernière modification du fichier. *(Date)*

*   **size** : la taille du fichier en octets. *(long)*

## Méthodes

*   **slice** : ne sélectionner qu'une partie du fichier à lire.

## Détails

L'objet `File` contient les attributs d'un fichier. Vous pouvez obtenir une instance d'un objet `File` en appelant la méthode `file()` d'un objet `FileEntry`.

## Plates-formes supportées

*   Android
*   BlackBerry WebWorks (OS 5.0 et plus)
*   iOS
*   Windows Phone 7 et 8
*   Windows 8

## slice

Retourne un nouvel objet `File` pour lequel `FileReader` renvoie uniquement la partie spécifiée du fichier. Toute valeur négative pour `start` ou `end` est mesurée à partir de la fin du fichier. Les index sont positionnés par rapport à la tranche actuelle. (Voir l'exemple complet ci-dessous.)

**Paramètres :**

*   **start** : l'index du premier octet à lire, inclusif.

*   **end** : l'index de l'octet situé après le dernier à lire.

**Exemple court**

    var slicedFile = file.slice(10, 30);
    

**Exemple complet**

    var slice1 = file.slice(100, 400);
    var slice2 = slice1.slice(20, 35);
    
    var slice3 = file.slice(120, 135);
    // slice2 and slice3 are equivalent.
    

**Plates-formes supportées**

*   Android
*   iOS


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


# FileSystem

Cet objet représente un système de fichiers.

## Propriétés

*   **name** : le nom du système de fichiers. *(DOMString)*

*   **root** : le répertoire racine du système de fichiers. *(DirectoryEntry)*

## Détails

L'objet `FileSystem` divulgue des informations à propos du système de fichiers. Le nom du système de fichiers est unique pour l'ensemble des systèmes de fichiers exposés. La propriété root contient un objet `DirectoryEntry` représentant le répertoire racine du système de fichiers.

## Plates-formes supportées

*   Android
*   BlackBerry WebWorks (OS 5.0 et plus)
*   iOS
*   Windows Phone 7 et 8
*   Windows 8

## Exemple court

    function onSuccess(fileSystem) {
        console.log(fileSystem.name);
        console.log(fileSystem.root.name);
    }
    
    // request the persistent file system
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onSuccess, null);
    

## Exemple complet

    <!DOCTYPE html>
    <html>
      <head>
        <title>File System Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onFileSystemSuccess, fail);
        }
    
        function onFileSystemSuccess(fileSystem) {
            console.log(fileSystem.name);
            console.log(fileSystem.root.name);
        }
    
        function fail(evt) {
            console.log(evt.target.error.code);
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>File System</p>
      </body>
    </html>


# FileEntry

Représente un fichier sur un système de fichiers, tel que défini dans la spécification [W3C répertoires et systèmes][1] .

 [1]: http://www.w3.org/TR/file-system-api/

## Propriétés

*   **isFile**: toujours `true` . *(booléen)*

*   **isDirectory**: toujours `false` . *(booléen)*

*   **name**: le nom du `FileEntry` , à l'exclusion du chemin menant à celui-ci. *(DOMString)*

*   **fullPath**: le chemin d'accès complet absolu de la racine de `FileEntry` . *(DOMString)*

**Remarque :** L'attribut suivant est défini par la spécification W3C, mais n'est *pas* supportée :

*   **système de fichiers**: le système de fichiers sur lequel le `FileEntry` réside. *(Système de fichiers)*

## Méthodes

*   **getMetadata**: recherche des métadonnées relatives à un fichier.

*   **setMetadata**: définit des métadonnées sur un fichier.

*   **moveTo**: déplace un fichier vers un autre emplacement sur le système de fichiers.

*   **copyTo**: copie un fichier vers un autre emplacement sur le système de fichiers.

*   **toURL**: retourne une URL qui peut être utilisée pour localiser un fichier.

*   **supprimer**: efface un fichier.

*   **getParent**: cherche le répertoire parent.

*   **createWriter**: crée un objet `FileWriter` qui peut être utilisé pour écrire dans un fichier.

*   **fichier**: crée un objet `File` contenant les propriétés de fichier.

## Plates-formes prises en charge

*   Android
*   BlackBerry WebWorks (OS 5.0 et plus)
*   iOS
*   Windows Phone 7 et 8
*   Windows 8

## getMetadata

Recherche des métadonnées relatives à un fichier.

**Paramètres :**

*   **successCallback**: un callback passé à un objet `Metadata`. *(Fonction)*

*   **errorCallback**: un callback qui s'exécute si une erreur se produit lors de la récupération du `Metadata` . Appelée avec un objet `FileError`. *(Fonction)*

**Petit exemple**

    function success(metadata) {console.log ("date de modification:" + metadata.modificationTime);}
    
    function fail(error) {alert(error.code);}
    
    / / Demande l'objet de métadonnées pour cette entrée entry.getMetadata (succès, échec) ;
    

## setMetadata

Ensemble de métadonnées sur un fichier.

**Actuellement ne fonctionne que sur iOS.**

*   celle-ci définira les attributs étendus d'un fichier.

**Paramètres :**

*   **successCallback**: un callback qui s'exécute lorsque les métadonnées sont définie. *(Fonction)*

*   **errorCallback**: un callback qui s'exécute lorsque les métadonnées ne sont pas correctement définies. *(Fonction)*

*   **metadataObject**: un objet qui contient les clés et les valeurs de métadonnées. *(Objet)*

**Petit exemple**

    function success() {
        console.log("The metadata was successfully set.");
    }
    
    function fail() {
        alert("There was an error in setting the metadata");
    }
    
    // Set the metadata
    entry.setMetadata(success, fail, { "com.apple.MobileBackup": 1});
    

**Spécificités iOS**

*   Seulement l'attribut étendu `com.apple.MobileBackup` est pris en charge. Affectez la valeur `1` pour empêcher le fichier en cours d'être sauvegardé sur iCloud. Affecte la valeur `` pour ré-activer la sauvegarde du fichier vers iCloud.

**Petit exemple**

    function setFileMetadata(localFileSystem, filePath, metadataKey, metadataValue)
    {
        var onSetMetadataWin = function() {
            console.log("success setting metadata")
        }
        var onSetMetadataFail = function() {
            console.log("error setting metadata")
        }
    
        var onGetFileWin = function(parent) {
            var data = {};
            data[metadataKey] = metadataValue;
            parent.setMetadata(onSetMetadataWin, onSetMetadataFail, data);
        }
        var onGetFileFail = function() {
            console.log("error getting file")
        }
    
        var onFSWin = function(fileSystem) {
            fileSystem.root.getFile(filePath, {create: true, exclusive: false}, onGetFileWin, onGetFileFail);
        }
    
        var onFSFail = function(evt) {
            console.log(evt.target.error.code);
        }
    
        window.requestFileSystem(localFileSystem, 0, onFSWin, onFSFail);
    }
    
        setFileMetadata(LocalFileSystem.PERSISTENT, "Backups/sqlite.db", "com.apple.MobileBackup", 1);
    

## moveTo

Déplace un fichier vers un autre emplacement sur le système de fichiers. Une erreur se produit si l'application tente de :

*   déplacer un fichier dans son parent, si un nom différent de son nom actuel n'est pas fourni ;

*   déplacer un fichier vers un chemin occupé par un répertoire ;

En outre, déplacer un fichier sur un fichier existant tente de supprimer et de remplacer ce fichier.

**Paramètres :**

*   **parent**: le répertoire parent vers laquelle déplacer le fichier. *(DirectoryEntry)*

*   **newName**: le nouveau nom du fichier. Par défaut, le nom actuel si non spécifié. *(DOMString)*

*   **successCallback**: un rappel passé le nouveau fichier `FileEntry` objet. *(Fonction)*

*   **errorCallback**: un rappel qui s'exécute si une erreur se produit lorsque vous tentez de déplacer le fichier. Appelée avec un `FileError` objet. *(Fonction)*

**Petit exemple**

    function success(entry) {
        console.log("New Path: " + entry.fullPath);
    }
    
    function fail(error) {
        alert(error.code);
    }
    
    function moveFile(entry) {
        var parent = document.getElementById('parent').value,
            parentName = parent.substring(parent.lastIndexOf('/')+1),
            parentEntry = new DirectoryEntry(parentName, parent);
    
        // move the file to a new directory and rename it
        entry.moveTo(parentEntry, "newFile.txt", success, fail);
    }
    

## copyTo

Copier un fichier vers un nouvel emplacement sur le système de fichiers. Une erreur se produit si l'application tente de :

*   copier un fichier dans sa société mère, si un nom différent de son actuel n'est pas fourni.

**Paramètres :**

*   **parent**: le répertoire parent dans lequel copier le fichier. *(DirectoryEntry)*

*   **newName**: le nouveau nom du fichier. Par défaut, le nom actuel si non spécifié. *(DOMString)*

*   **successCallback**: un rappel passé le nouveau fichier `FileEntry` objet. *(Fonction)*

*   **errorCallback**: un rappel qui s'exécute si une erreur se produit lorsque vous tentez de copier le fichier. Appelée avec un `FileError` objet. *(Fonction)*

**Petit exemple**

    function win(entry) {
        console.log("New Path: " + entry.fullPath);
    }
    
    function fail(error) {
        alert(error.code);
    }
    
    function copyFile(entry) {
        var parent = document.getElementById('parent').value,
            parentName = parent.substring(parent.lastIndexOf('/')+1),
            parentEntry = new DirectoryEntry(parentName, parent);
    
        // copy the file to a new directory and rename it
        entry.copyTo(parentEntry, "file.copy", success, fail);
    }
    

## toURL

Retourne une URL qui peut être utilisée pour localiser le fichier.

**Petit exemple**

    // Request the URL for this entry
    var fileURL = entry.toURL();
    console.log(fileURL);
    

## supprimer

Supprime un fichier.

**Paramètres :**

*   **successCallback**: une fonction de rappel qui s'exécute après que le fichier a été supprimé. Appelé sans paramètre. *(Fonction)*

*   **errorCallback**: un rappel qui s'exécute si une erreur se produit lorsque vous tentez de supprimer le fichier. Appelée avec un `FileError` objet. *(Fonction)*

**Petit exemple**

    function success(entry) {
        console.log("Removal succeeded");
    }
    
    function fail(error) {
        alert('Error removing file: ' + error.code);
    }
    
    // remove the file
    entry.remove(success, fail);
    

## getParent

Rechercher le parent `DirectoryEntry` qui contient le fichier.

**Paramètres :**

*   **successCallback**: un rappel passé parent du fichier `DirectoryEntry` . *(Fonction)*

*   **errorCallback**: un rappel qui s'exécute si une erreur se produit lorsque vous tentez de récupérer le parent `DirectoryEntry` . Appelée avec un `FileError` objet. *(Fonction)*

**Petit exemple**

    function success(parent) {
        console.log("Parent Name: " + parent.name);
    }
    
    function fail(error) {
        alert(error.code);
    }
    
    // Get the parent DirectoryEntry
    entry.getParent(success, fail);
    

## createWriter

Créer un `FileWriter` objet associé au fichier représenté par la`FileEntry`.

**Paramètres :**

*   **successCallback**: un rappel passé un `FileWriter` objet. *(Fonction)*

*   **errorCallback**: un rappel qui s'exécute si une erreur se produit lors de la tentative de créer le FileWriter. Appelée avec un `FileError` objet. *(Fonction)*

**Petit exemple**

    function success(writer) {
        writer.write("Some text to the file");
    }
    
    function fail(error) {
        alert(error.code);
    }
    
    // create a FileWriter to write to the file
    entry.createWriter(success, fail);
    

## fichier

Retourner un `File` objet qui représente l'état actuel du dossier que cette `FileEntry` représente.

**Paramètres :**

*   **successCallback**: un rappel passé un `File` objet. *(Fonction)*

*   **errorCallback**: un rappel qui s'exécute si une erreur se produit lorsque vous créez le `File` objet, par exemple lorsque le fichier n'existe plus. Appelée avec un `FileError` objet. *(Fonction)*

**Petit exemple**

    function success(file) {
        console.log("File size: " + file.size);
    }
    
    function fail(error) {
        alert("Unable to retrieve file properties: " + error.code);
    }
    
    // obtain properties of a file
    entry.file(success, fail);


# DirectoryEntry

Cet objet représente un répertoire sur un système de fichiers, tel que défini par la spécification [W3C répertoires et systèmes][1] .

 [1]: http://www.w3.org/TR/file-system-api/

## Propriétés

*   **isFile**: toujours `false` . *(booléen)*

*   **isDirectory**: toujours `true` . *(booléen)*

*   **name**: le nom du `DirectoryEntry` , à l'exclusion du chemin menant à celle-ci. *(DOMString)*

*   **fullPath**: le chemin d'accès complet absolu de la racine au `DirectoryEntry` . *(DOMString)*

**Remarque :** L'attribut suivant est défini par la spécification W3C, mais n'est *pas* supportée :

*   **filesystem**: le système de fichiers sur lequel le `DirectoryEntry` réside. *(Système de fichiers)*

## Méthodes

Les méthodes suivantes peuvent être appelées sur un objet `DirectoryEntry` :

*   **getMetadata**: recherche des métadonnées relatives à un répertoire.

*   **setMetadata**: définit des métadonnées sur un répertoire.

*   **moveTo**: déplace un répertoire vers un autre emplacement sur le système de fichiers.

*   **copyTo**: copie un répertoire vers un autre emplacement sur le système de fichiers.

*   **toURL**: renvoie une URL pour aider à localiser un répertoire.

*   **remove**: supprime un répertoire. Le répertoire doit être vide.

*   **getParent**: cherche le répertoire parent.

*   **createReader**: crée un nouveau `DirectoryReader` qui peut lire les entrées d'un répertoire.

*   **getDirectory**: crée ou recherche un répertoire.

*   **getFile**: crée ou recherche un fichier.

*   **removeRecursively**: supprime un répertoire et tout son contenu.

## Plates-formes prises en charge

*   Android
*   BlackBerry WebWorks (OS 5.0 et plus)
*   iOS
*   Windows Phone 7 et 8
*   Windows 8

## getMetadata

Rechercher des métadonnées relatives à un répertoire.

**Paramètres :**

*   **successCallback**: une fonction de callback pour exécuter avec un objet `Metadata`. *(Fonction)*

*   **errorCallback**: une fonction de callback à exécuter si une erreur se produit lors de la récupération du `Metadata` . Appelée avec un objet `FileError`. *(Fonction)*

**Petit exemple**

    function success(metadata) {console.log ("date de modification:" + metadata.modificationTime);}
    
    function fail(error) {alert(error.code);}
    
    / / Demande l'objet de métadonnées pour cette entrée entry.getMetadata (succès, échec) ;
    

## setMetadata

Définit les attributs étendus d'un répertoire, ou les métadonnées. *Ne fonctionne actuellement que sur iOS.*

**Paramètres :**

*   **successCallback**: un callback qui s'exécute lorsque les métadonnées sont correctement définies. *(Fonction)*

*   **errorCallback**: un callback qui s'exécute lorsque les métadonnées ne parviennent pas à être définie. *(Fonction)*

*   **metadataObject**: un objet qui contient les clés et les valeurs de métadonnées. *(Objet)*

**Petit exemple**

    function success() {
        console.log("The metadata was successfully set.");
    }
    
    function fail() {
        alert("There was an error in setting the metadata");
    }
    
    // Set the metadata
    entry.setMetadata(success, fail, { "com.apple.MobileBackup": 1});
    

**Spécificités iOS**

*   Seulement l'atttribut étendu `com.apple.MobileBackup` est pris en charge. Affecte la valeur `1` pour empêcher que le répertoire en cours soit sauvegardé sur iCloud. Affecte la valeur `` pour ré-activer la sauvegarde du répertoire sur iCloud.

**Petit exemple**

    function setFolderMetadata(localFileSystem, subFolder, metadataKey, metadataValue)
    {
        var onSetMetadataWin = function() {
            console.log("success setting metadata")
        }
        var onSetMetadataFail = function() {
            console.log("error setting metadata")
        }
    
        var onGetDirectoryWin = function(parent) {
            var data = {};
            data[metadataKey] = metadataValue;
            parent.setMetadata(onSetMetadataWin, onSetMetadataFail, data);
        }
        var onGetDirectoryFail = function() {
            console.log("error getting dir")
        }
    
        var onFSWin = function(fileSystem) {
            fileSystem.root.getDirectory(subFolder, {create: true, exclusive: false}, onGetDirectoryWin, onGetDirectoryFail);
        }
    
        var onFSFail = function(evt) {
            console.log(evt.target.error.code);
        }
    
        window.requestFileSystem(localFileSystem, 0, onFSWin, onFSFail);
    }
    
        setFolderMetadata(LocalFileSystem.PERSISTENT, "Backups", "com.apple.MobileBackup", 1);
    

## moveTo

Déplace un répertoire vers un autre emplacement sur le système de fichiers. Une erreur se produit si l'application tente de :

*   déplacer un répertoire à l'intérieur de lui-même ou à n'importe quel enfant à n'importe quelle profondeur.

*   déplacer un répertoire dans son parent, si un nom différent de son répertoire en cours n'est pas fourni.

*   déplacer un répertoire vers un chemin occupé par un fichier.

*   déplacer un répertoire vers un chemin occupé par un répertoire qui n'est pas vide.

Déplacer un répertoire sur le dessus un répertoire vide existant tente de supprimer et de remplacer ce répertoire.

**Paramètres :**

*   **parent**: le répertoire parent vers laquelle déplacer le répertoire. *(DirectoryEntry)*

*   **newName**: le nouveau nom du répertoire. Par défaut, le nom actuel si non spécifié. *(DOMString)*

*   **successCallback**: une fonction de rappel qui s'exécute avec le `DirectoryEntry` objet pour le nouveau répertoire. *(Fonction)*

*   **errorCallback**: un rappel qui s'exécute si une erreur se produit lorsque vous tentez de déplacer le répertoire. Appelée avec un `FileError` objet. *(Fonction)*

**Petit exemple**

    function success(entry) {
        console.log("New Path: " + entry.fullPath);
    }
    
    function fail(error) {
        alert(error.code);
    }
    
    function moveDir(entry) {
        var parent = document.getElementById('parent').value,
            parentName = parent.substring(parent.lastIndexOf('/')+1),
            newName = document.getElementById('newName').value,
            parentEntry = new DirectoryEntry(parentName, parent);
    
        // move the directory to a new directory and rename it
        entry.moveTo(parentEntry, newName, success, fail);
    }
    

## copyTo

Copier un répertoire vers un autre emplacement sur le système de fichiers. Une erreur se produit si l'application tente de :

*   copier un répertoire à l'intérieur de lui-même à toute profondeur.

*   copier un répertoire dans sa société mère, si un nom différent de son répertoire en cours n'est pas fourni.

Répertoire des copies sont toujours récursifs et copiez tout le contenu du répertoire.

**Paramètres :**

*   **parent**: le répertoire parent dans lequel copier le répertoire. *(DirectoryEntry)*

*   **newName**: le nouveau nom du répertoire. Par défaut, le nom actuel si non spécifié. *(DOMString)*

*   **successCallback**: une fonction de rappel qui s'exécute avec le `DirectoryEntry` objet pour le nouveau répertoire. *(Fonction)*

*   **errorCallback**: un rappel qui s'exécute si une erreur se produit lorsque vous tentez de copier l'annuaire sous-jacent. Appelée avec un `FileError` objet. *(Fonction)*

**Petit exemple**

    function win(entry) {
        console.log("New Path: " + entry.fullPath);
    }
    
    function fail(error) {
        alert(error.code);
    }
    
    function copyDir(entry) {
        var parent = document.getElementById('parent').value,
            parentName = parent.substring(parent.lastIndexOf('/')+1),
            newName = document.getElementById('newName').value,
            parentEntry = new DirectoryEntry(parentName, parent);
    
        // copy the directory to a new directory and rename it
        entry.copyTo(parentEntry, newName, success, fail);
    }
    

## toURL

Retourne une URL qui peut être utilisée pour localiser le répertoire.

**Petit exemple**

    // Get the URL for this directory
    var dirURL = entry.toURL();
    console.log(dirURL);
    

## supprimer

Supprime un répertoire. Une erreur se produit si l'application tente de :

*   supprimer un répertoire qui n'est pas vide.

*   Supprimez le répertoire racine du système de fichiers.

**Paramètres :**

*   **successCallback**: une fonction de rappel qui s'exécute après que le répertoire est supprimé. Appelé sans paramètre. *(Fonction)*

*   **errorCallback**: un rappel qui s'exécute si une erreur se produit lorsque vous tentez de supprimer le répertoire. Appelée avec un `FileError` objet. *(Fonction)*

**Petit exemple**

    function success(entry) {console.log ("l'enlèvement a réussi");}
    
    function fail(error) {alert ("erreur de suppression de répertoire: ' + error.code);}
    
    / / supprimer ce répertoire entry.remove (succès, échec) ;
    

## getParent

Rechercher le parent `DirectoryEntry` contenant le répertoire.

**Paramètres :**

*   **successCallback**: un rappel passé parent du répertoire `DirectoryEntry` . *(Fonction)*

*   **errorCallback**: un rappel qui s'exécute si une erreur se produit lorsque vous tentez de récupérer le parent `DirectoryEntry` . Appelée avec un `FileError` objet. *(Fonction)*

**Petit exemple**

    function success(parent) {
        console.log("Parent Name: " + parent.name);
    }
    
    function fail(error) {
        alert('Failed to get parent directory: ' + error.code);
    }
    
    // Get the parent DirectoryEntry
    entry.getParent(success, fail);
    

## createReader

Crée une nouvelle DirectoryReader pour lire le contenu d'un répertoire.

**Petit exemple**

    // create a directory reader
    var directoryReader = entry.createReader();
    

## getDirectory

Crée ou lève les yeux un répertoire existant. Une erreur se produit si l'application tente de :

*   Créez un répertoire dont le parent immédiat n'existe pas encore.

**Paramètres :**

*   **chemin d'accès**: le chemin vers le répertoire leva ou créé. Un chemin absolu ou un chemin d'accès relatif de cette `DirectoryEntry` . *(DOMString)*

*   **options**: Options pour spécifier si le répertoire est créé s'il n'existe pas. *(Drapeaux)*

*   **successCallback**: une fonction de rappel qui s'exécute avec un `DirectoryEntry` objet. *(Fonction)*

*   **errorCallback**: un rappel qui s'exécute si une erreur se produit lorsque vous créez ou en levant le répertoire. Appelée avec un `FileError` objet. *(Fonction)*

**Petit exemple**

    function success(dirEntry) {console.log ("nom du répertoire:" + dirEntry.name);}
    
    function fail(error) {alert ("Impossible de créer le nouveau répertoire:" + error.code);}
    
    / / Récupérer un répertoire existant, ou créer si elle n'existe pas déjà entry.getDirectory (« Nouveau_répertoire », {créer : true, exclusif : false}, succès, échec) ;
    

## getFile

Crée ou lève les yeux un fichier. Une erreur se produit si l'application tente de :

*   Créez un fichier dont le parent immédiat n'existe pas encore.

**Paramètres :**

*   **chemin d'accès**: le chemin d'accès au fichier pour être levé ou créé. Un chemin absolu ou un chemin d'accès relatif de cette `DirectoryEntry` . *(DOMString)*

*   **options**: Options pour spécifier si le fichier est créé s'il n'existe pas. *(Drapeaux)*

*   **successCallback**: un rappel passé un `FileEntry` objet. *(Fonction)*

*   **errorCallback**: un rappel qui s'exécute si une erreur se produit lorsque vous créez ou en levant le fichier. Appelée avec un `FileError` objet. *(Fonction)*

**Petit exemple**

    function success(fileEntry) {console.log ("nom de fichier:" + fileEntry.name);}
    
    function fail(error) {alert ("Impossible de récupérer le fichier:" + error.code);}
    
    / / Récupérer un fichier existant, ou créer si elle n'existe pas de entry.getFile (« newFile.txt », {créer : vrai, exclusif : false}, succès, échec) ;
    

## removeRecursively

Supprime un répertoire et tout son contenu. En cas d'erreur (par exemple en essayant de supprimer un répertoire contenant un fichier qui ne peut pas être supprimé), une partie du contenu du répertoire peuvent être supprimées. Une erreur se produit si l'application tente de :

*   Supprimez le répertoire racine du système de fichiers.

**Paramètres :**

*   **successCallback**: un rappel qui s'exécute après le `DirectoryEntry` a été supprimé. Appelé sans paramètre. *(Fonction)*

*   **errorCallback**: un rappel qui s'exécute si une erreur se produit lorsque vous tentez de supprimer le `DirectoryEntry` . Appelée avec un `FileError` objet. *(Fonction)*

**Petit exemple**

    function success(parent) {
        console.log("Remove Recursively Succeeded");
    }
    
    function fail(error) {
        alert("Failed to remove directory or it's contents: " + error.code);
    }
    
    // remove the directory and all it's contents
    entry.removeRecursively(success, fail);
    

## Bizarreries de blackBerry

Peut échouer avec un `ControlledAccessException` dans les cas suivants :

*   Une application tente d'accéder à un répertoire créé par une installation précédente de l'application.

> Solution : Vérifiez les répertoires temporaires sont nettoyés manuellement, ou par l'application avant la réinstallation.

*   Si le périphérique est connecté par USB.

> Solution : déconnecter le câble USB de l'appareil et exécutez à nouveau.


# DirectoryReader

Un objet qui répertorie les fichiers et répertoires d'un répertoire, tel que défini dans la spécification [W3C répertoires et systèmes][1] .

 [1]: http://www.w3.org/TR/file-system-api/

## Méthodes

*   **readEntries**: lire les entrées d'un répertoire.

## Plates-formes prises en charge

*   Android
*   BlackBerry WebWorks (OS 5.0 et plus)
*   iOS
*   Windows Phone 7 et 8
*   Windows 8

## readEntries

Lire les entrées dans ce répertoire.

**Paramètres :**

*   **successCallback**: un callback qui est passé à un tableau d'objets `FileEntry` et `DirectoryEntry`. *(Fonction)*

*   **errorCallback**: un callback qui s'exécute si une erreur se produit lors de la récupération de la liste de répertoires. Appelée avec un objet `FileError`. *(Fonction)*

**Petit exemple**

    function success(entries) {
        var i;
        for (i=0; i<entries.length; i++) {
            console.log(entries[i].name);
        }
    }
    
    function fail(error) {
        alert("Failed to list directory contents: " + error.code);
    }
    
    // Get a directory reader
    var directoryReader = dirEntry.createReader();
    
    // Get a list of all the entries in the directory
    directoryReader.readEntries(success,fail);


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


# FileUploadOptions

Un objet `FileUploadOptions` peut être passé à la méthode `upload()` de l'objet `FileTransfer` pour spécifier des paramètres supplémentaires au script d'upload.

## Propriétés

*   **fileKey** : le nom de l'élément form. La valeur par défaut est `file`. (DOMString)

*   **fileName** : le nom de fichier à utiliser pour l'enregistrement sur le serveur. La valeur par défaut est `image.jpg`. (DOMString)

*   **mimeType** : le type mime des données à envoyer. La valeur par défaut est `image/jpeg`. (DOMString)

*   **params** : un ensemble de paires clé/valeur facultative à passer dans la requête HTTP. (Objet)

*   **chunkedMode** : s'il faut transmettre ou non les données en mode streaming de bloc. La valeur par défaut est `true`. (Boolean)

*   **headers** : un objet représentant les noms et valeurs d'en-têtes à transmettre. Utiliser un tableau permet de spécifier plusieurs valeurs. (Objet)

## Description

Un objet `FileUploadOptions` peut être passé à la méthode `upload()` de l'objet `FileTransfer` pour spécifier des paramètres supplémentaires au script d'upload.

## Particularités de WP7

*   la propriété **chunkedMode** est simplement ignorée sous WP7.


# FileUploadResult

Un objet `FileUploadResult` est passé à la callback de succès de la méthode `upload()` de l'objet `FileTransfer`.

## Propriétés

*   **bytesSent** : le nombre d'octets envoyés au serveur dans le cadre du téléchargement. (long)

*   **responseCode** : le code de réponse HTTP retourné par le serveur. (long)

*   **response** : la réponse HTTP renvoyée par le serveur. (DOMString)

## Description

Un objet `FileUploadResult` est retourné par la callback de succès de la méthode `upload()` de l'objet `FileTransfer`.

## Particularités d'iOS

*   Ne prend pas en charge les propriétés `responseCode` et `bytesSent`.


# Flags

Fournit des arguments aux méthodes `getFile()` et `getDirectory()` de l'objet `DirectoryEntry` qui se chargent respectivement de rechercher ou créer des fichiers et des répertoires.

## Propriétés

*   **create** : indique que le fichier ou le répertoire doit être créé s'il n'existe pas déjà. *(Boolean)*

*   **exclusive** : a n'a aucun effet seul mais, s'il est utilisé avec `create`, provoque l'échec de la création d'un fichier ou d'un répertoire lorsque le chemin d'accès visé existe déjà. *(Boolean)*

## Plates-formes supportées

*   Android
*   BlackBerry WebWorks (OS 5.0 et plus)
*   iOS
*   Windows Phone 7 et 8
*   Windows 8

## Exemple court

    / / Obtenir le répertoire des données, le créant s'il n'existe pas.
    dataDir = fileSystem.root.getDirectory("data", {create: true});
    
    // Créer le fichier de verrouillage uniquement s'il n'existe pas déjà.
    lockFile = dataDir.getFile("lockfile.txt", {create: true, exclusive: true});


# LocalFileSystem

Cet objet fournit un moyen d'obtenir la racine de systèmes de fichiers.

## Méthodes

*   **requestFileSystem** : demande un système de fichiers. *(Function)*

*   **resolveLocalFileSystemURI** : récupère un objet `DirectoryEntry` ou `FileEntry` à partir d'un URI local. *(Function)*

## Constantes

*   `LocalFileSystem.PERSISTENT` : constante faisant référence à un stockage qui ne devrait pas être supprimé par l'agent utilisateur sans l'autorisation de application ou de l'utilisateur.

*   `LocalFileSystem.TEMPORARY` : constante faisant référence à un stockage sans garantie de persistance.

## Détails

Les méthodes de l'objet `LocalFileSystem` sont définies directement sur l'objet global `window`.

## Plates-formes supportées

*   Android
*   BlackBerry WebWorks (OS 5.0 et plus)
*   iOS
*   Windows Phone 7 et 8
*   Windows 8

## Exemple court de demande d'un système de fichiers

    function onSuccess(fileSystem) {
        console.log(fileSystem.name);
    }
    
    // request the persistent file system
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onSuccess, onError);
    

## Exemple court de résolution d'un système de fichiers via un URI local

    function onSuccess(fileEntry) {
        console.log(fileEntry.name);
    }
    
    window.resolveLocalFileSystemURI("file:///example.txt", onSuccess, onError);
    

## Exemple complet

    <!DOCTYPE html>
    <html>
      <head>
        <title>Local File System Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onFileSystemSuccess, fail);
            window.resolveLocalFileSystemURI("file:///example.txt", onResolveSuccess, fail);
        }
    
        function onFileSystemSuccess(fileSystem) {
            console.log(fileSystem.name);
        }
    
        function onResolveSuccess(fileEntry) {
            console.log(fileEntry.name);
        }
    
        function fail(evt) {
            console.log(evt.target.error.code);
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>Local File System</p>
      </body>
    </html>
    

# requestFileSystem

> Demande un système de fichier dans lequel stocker les données de l'application.

     window.requestFileSystem(type, size, successCallback, errorCallback)
    

*   **window** : référence à l'objet global window
*   **type** : type du système de fichiers local, voir les constantes associées à l'objet LocalFileSystem
*   **size** : indique la quantité d'espace stockage, en octets, requise par l'application
*   **successCallback** : fonction appelée avec un objet FileSystem
*   **errorCallback** : fonction invoquée si une erreur se produit lors de la récupération du système de fichiers

## Exemple court de demande d'un système de fichiers

    function onSuccess(fileSystem) {
        console.log(fileSystem.name);
    }
    
    // request the persistent file system
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onSuccess, onError);


# Metadata

Une interface fournissant des informations sur l'état d'un fichier ou un répertoire.

## Propriétés

*   **modificationTime** : la date à laquelle le fichier ou le répertoire a été modifié pour la dernière fois. *(Date)*

## Détails

L'objet `Metadata` fournit des informations sur l'état d'un fichier ou un répertoire. Appeler la méthode `getMetadata()` d'un objet `DirectoryEntry` ou `FileEntry` retourne une instance de `Metadata`.

## Plates-formes supportées

*   Android
*   BlackBerry WebWorks (OS 5.0 et plus)
*   iOS
*   Windows Phone 7 et 8
*   Windows 8

## Exemple court

    function win(metadata) {
        console.log("Last Modified: " + metadata.modificationTime);
    }
    
    // Request the metadata object for this entry
    entry.getMetadata(win, null);


# FileError

Un objet `FileError` est défini lorsqu'une erreur se produit dans l'une des méthodes de l'API File.

## Propriétés

*   **code**: l'un des codes d'erreur prédéfinis énumérés ci-dessous.

## Constantes

*   `FileError.NOT_FOUND_ERR`
*   `FileError.SECURITY_ERR`
*   `FileError.ABORT_ERR`
*   `FileError.NOT_READABLE_ERR`
*   `FileError.ENCODING_ERR`
*   `FileError.NO_MODIFICATION_ALLOWED_ERR`
*   `FileError.INVALID_STATE_ERR`
*   `FileError.SYNTAX_ERR`
*   `FileError.INVALID_MODIFICATION_ERR`
*   `FileError.QUOTA_EXCEEDED_ERR`
*   `FileError.TYPE_MISMATCH_ERR`
*   `FileError.PATH_EXISTS_ERR`

## Description

L'objet `FileError` est le seul paramètre fourni à l'un des callbacks d'erreur de l'API File. Pour déterminer le type d'erreur, comparer sa propriété `code` à l'une des propriétés listées ci-dessus.


# FileTransferError

Un objet `FileTransferError` est passé à une callback d'erreur lorsqu'une erreur survient.

## Propriétés

*   **code** : l'un des codes d'erreur prédéfinis énumérés ci-dessous. (Number)

*   **source** : l'URI de la source. (String)

*   **target**: l'URI de la destination. (String)

*   **http_status** : code d'état HTTP. Cet attribut n'est disponible que lorsqu'un code de réponse est fourni via la connexion HTTP. (Number)

## Constantes

*   `FileTransferError.FILE_NOT_FOUND_ERR`
*   `FileTransferError.INVALID_URL_ERR`
*   `FileTransferError.CONNECTION_ERR`
*   `FileTransferError.ABORT_ERR`

## Description

L'objet `FileTransferError` est passé à la callback d'erreur si une erreur se produit lors de l'envoi ou la réception d'un fichier.
