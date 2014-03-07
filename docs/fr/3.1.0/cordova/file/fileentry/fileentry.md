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