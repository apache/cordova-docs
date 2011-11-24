FileEntry
=========

Un objet `FileEntry` représente un fichier du système de fichiers.  Cet objet est conforme à la spécification [W3C Directories and Systems](http://www.w3.org/TR/file-system-api/).

Propriétés
----------

- __isFile:__ Toujours valorisé à true. _(boolean)_
- __isDirectory:__ Toujours valorisé à false. _(boolean)_
- __name:__ Le nom du fichier, sans le chemin menant vers ce fichier. _(DOMString)_
- __fullPath:__ Le chemin absolu de ce fichier depuis la racine. _(DOMString)_

REMARQUE : Les attributs suivants sont définis par la spécification W3C, mais ne sont __pas supportés__ par PhoneGap :

- __filesystem:__ Le système de fichiers auquel appartient le fichier. _(FileSystem)_


Méthodes
--------

- __getMetadata__: Consulter les métadonnées d'un fichier.
- __moveTo__: Déplacer un fichier vers un autre emplacement du système de fichiers.
- __copyTo__: Copier un fichier dans un autre emplacement du système de fichiers.
- __toURI__: Récupérer une URI permettant de localiser le fichier.
- __remove__: Supprimer un fichier.
- __getParent__: Consulter le répertoire parent.
- __createWriter__: Créer un objet FileWriter permettant d'écrire dans un fichier.
- __file__: Créer un objet File contenant les propriétés du fichier que l'objet FileEntry représente.


Plateformes supportées
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 ou plus récent)
- iOS
- Windows Phone 7 ( Mango )


getMetadata
-----------

Consulter les métadonnées d'un fichier.

__Paramètres :__

- __successCallback__ - Une fonction de callback appelée, en cas de succès, avec en argument un objet Metadata. _(Function)_
- __errorCallback__ - Une fonction de callback appelée en cas d'échec de récupération des métadonnées. Appelée avec en argument un objet FileError. _(Function)_


__Exemple rapide__

    function success(metadata) {
        console.log("Dernière modification : " + metadata.modificationTime);
    }

    function fail(error) {
        alert(error.code);
    }

    // Récupérer les métadonnées
    entry.getMetadata(success, fail);	


moveTo
------

Déplacer un fichier vers un autre emplacement du système de fichiers. C'est une erreur d'essayer de :

- déplacer un fichier vers son répertoire parent sans qu'un nom différent du nom actuel ne soit fourni;
- déplacer un fichier vers un chemin qu'occupe un répertoire;

De plus, déplacer un fichier vers un chemin qu'occupe un fichier entraîne une tentative de suppression et de remplacement de ce fichier.

__Paramètres :__

- __parent__ - Le répertoire parent vers lequel déplacer le fichier. _(DirectoryEntry)_
- __newName__ - Le nouveau nom du fichier. Vaut le nom actuel du fichier si non précisé. _(DOMString)_
- __successCallback__ - Une fonction de callback appelée, en cas de succès, avec en argument un objet FileEntry représentant le nouveau fichier. _(Function)_
- __errorCallback__ - Une fonction de callback appelée en cas d'échec de déplacement du fichier.  Appelée avec en argument un objet FileError. _(Function)_


__Exemple rapide__

    function success(newfile) {
        console.log("Nouveau chemin : " + newfile.fullPath);
    }

    function fail(error) {
        alert(error.code);
    }

    function moveFile(entry) {
        var parent = document.getElementById('parent').value,
            parentEntry = new DirectoryEntry({fullPath: parent});

        // Déplacer et renommer le fichier
        entry.moveTo(parentEntry, "newFile.txt", success, fail);
    }
	

copyTo
------

Copier un fichier dans un autre emplacement du système de fichiers. C'est une erreur d'essayer de :

- copier un fichier vers son répertoire parent sans qu'un nom différent du nom actuel ne soit fourni. 

__Paramètres :__

- __parent__ - Le répertoire parent vers lequel copier le fichier. _(DirectoryEntry)_
- __newName__ - Le nouveau nom du fichier. Vaut le nom actuel du fichier si non précisé. _(DOMString)_
- __successCallback__ - Une fonction de callback appelée, en cas de succès, avec en argument un objet FileEntry représentant le nouveau fichier. _(Function)_
- __errorCallback__ - Une fonction de callback appelée en cas d'échec de copie du fichier.  Appelée avec en argument un objet FileError. _(Function)_


__Exemple rapide__

    function win(newfile) {
	    console.log("Nouveau chemin : " + newfile.fullPath);
    }

    function fail(error) {
	    alert(error.code);
    }

    function copyFile(entry) {
        var parent = document.getElementById('parent').value,
            parentEntry = new DirectoryEntry({fullPath: parent});

        // Copier et renommer le fichier
        entry.copyTo(parentEntry, "file.copy", success, fail);
    }

	
toURI
-----

Récupérer une URI permettant de localiser le fichier.

__Exemple rapide__
	
    // Récupérer l'URI du fichier
    var uri = entry.toURI();
    console.log(uri);


remove
------

Supprimer un fichier. 

__Paramètres :__

- __successCallback__ - Une fonction de callback appelée en cas de succès de suppression du fichier.  Appelée sans argument. _(Function)_
- __errorCallback__ - Une fonction de callback appelée en cas d'échec de suppression du fichier.  Appelée avec en argument un objet FileError. _(Function)_

__Exemple rapide__
	
    function success() {
        console.log("Suppresion réussie");
    }

    function fail(error) {
        alert('Echec de suppression du fichier : ' + error.code);
    }

    // Supprimer le fichier
    entry.remove(success, fail);


getParent
---------

Consulter le répertoire contenant le fichier. 

__Paramètres :__

- __successCallback__ - Une fonction de callback appelée, en cas de succès, avec en argument un objet DirectoryEntry représentant le répertoire parent. _(Function)_
- __errorCallback__ - Une fonction de callback appelée en cas d'échec de récupération du répertoire parent.  Appelée avec en argument un objet FileError. _(Function)_

__Exemple rapide__
	
    function success(parent) {
        console.log("Nom du répertoire parent : " + parent.name);
    }

    function fail(error) {
        alert(error.code);
    }

    // Récupération du répertoire parent
    entry.getParent(success, fail);	


createWriter
------------

Create a FileWriter object associated with the file that the FileEntry represents.

__Paramètres :__

- __successCallback__ - Une fonction de callback appelée, en cas de succès, avec en argument un objet FileWriter. _(Function)_
- __errorCallback__ - Une fonction de callback appelée en cas d'échec de création du FileWriter.  Appelée avec en paramètre un objet FileError. _(Function)_

__Exemple rapide__
	
    function success(writer) {
        writer.write("Texte à écrire dans le fichier");
    }

    function fail(error) {
        alert(error.code);
    }

    // Créer un FileWriter pour écrire dans le fichier
    entry.createWriter(success, fail);	


file
----

Créer un objet File présentant l'état actuel du fichier que l'objet FileEntry représente.

__Paramètres :__

- __successCallback__ - Une fonction de callback appelée, en cas de succès, avec en argument un objet File. _(Function)_
- __errorCallback__ - Une fonction de callback appelée en cas d'échec de création de l'objet File (par exemple si le fichier considéré n'existe plus).  Appelée avec en paramètre un objet FileError. _(Function)_

__Exemple rapide__
	
    function success(file) {
        console.log("Taille du fichier : " + file.size);
    }

    function fail(error) {
        alert("Impossible de récupérer les propriétés du fichier : " + error.code);
    }
 
    // Obtenir les propriétés du fichier
    entry.file(success, fail);	
