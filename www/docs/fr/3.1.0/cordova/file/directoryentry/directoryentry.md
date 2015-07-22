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