DirectoryEntry
==============

Un objet `DirectoryEntry` représente un répertoire du système de fichiers.  Cet objet est conforme à la spécification [W3C Directories and Systems](http://www.w3.org/TR/file-system-api/).

Propriétés
----------

- __isFile:__ Toujours valorisé à false. _(boolean)_
- __isDirectory:__ Toujours valorisé à true. _(boolean)_
- __name:__ Le nom du répertoire, sans le chemin menant vers ce répertoire. _(DOMString)_
- __fullPath:__ Le chemin absolu de ce répertoire depuis la racine. _(DOMString)_

REMARQUE : Les attributs suivants sont définis par la spécification W3C, mais ne sont __pas supportés__ par PhoneGap :

- __filesystem:__ Le système de fichiers auquel appartient le répertoire. _(FileSystem)_ 

Méthodes
--------

Les méthodes suivantes sont disponibles sur un objet DirectoryEntry :

- __getMetadata__: Consulter les métadonnées d'un répertoire.
- __moveTo__: Déplacer un répertoire vers un autre emplacement du système de fichiers.
- __copyTo__: Copier un répertoire dans un autre emplacement du système de fichiers.
- __toURI__: Récupérer une URI permettant de localiser le répertoire.
- __remove__: Supprimer un répertoire. Le répertoire doit être vide.
- __getParent__: Consulter le répertoire parent.
- __createReader__: Créer un nouvel objet DirectoryReader permettant de lire le contenu d'un répertoire.
- __getDirectory__: Créer ou consulter un répertoire.
- __getFile__: Créer ou consulter un fichier.
- __removeRecursively__: Supprimer un répertoire ainsi que tout son contenu.


Plateformes supportées
----------------------

- Android
- BlackBerry WebWorks (OS 5.0 ou plus récent)
- iOS
- Windows Phone 7 ( Mango )

getMetadata
-----------

Consulter les métadonnées d'un répertoire.

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

Déplacer un répertoire vers un autre emplacement du système de fichiers. C'est une erreur d'essayer de :

- déplacer un répertoire vers l'interieur de lui-même ou vers un répertoire fils, peu importe sa profondeur;
- déplacer un répertoire vers son propre parent sans qu'un nom différent du nom actuel ne soit fourni;
- déplacer un répertoire vers un chemin qu'occupe un fichier;
- déplacer un répertoire vers un chemin qu'occupe un répertoire non vide.

De plus, déplacer un répertoire vers un chemin qu'occupe un répertoire vide entraîne une tentative de suppression et de remplacement de ce répertoire vide.

__Paramètres :__

- __parent__ - Le répertoire parent vers lequel déplacer le répertoire. _(DirectoryEntry)_
- __newName__ - Le nouveau nom du répertoire. Vaut le nom actuel du répertoire si non précisé. _(DOMString)_
- __successCallback__ - Une fonction de callback appelée, en cas de succès, avec en argument un objet DirectoryEntry représentant le nouveau répertoire. _(Function)_
- __errorCallback__ - Une fonction de callback appelée en cas d'échec de déplacement du répertoire.  Appelée avec en argument un objet FileError. _(Function)_


__Exemple rapide__

    function success(newdir) {
        console.log("Nouveau chemin : " + newdir.fullPath);
    }

    function fail(error) {
        alert(error.code);
    }
	
	function moveDir(entry) {
        var parent = document.getElementById('parent').value,
            newName = document.getElementById('newName').value,
            parentEntry = new DirectoryEntry({fullPath: parent});

        // Déplacer et renommer le répertoire
        entry.moveTo(parentEntry, newName, success, fail);
    }

copyTo
------

Copier un répertoire dans un autre emplacement du système de fichiers. C'est une erreur d'essayer de :

- copier un répertoire à l'interieur de lui-même ou dans un répertoire fils, peu importe sa profondeur;
- copier un répertoire vers son propre parent sans qu'un nom différent du nom actuel ne soit fourni. 

Les copies de répertoires sont toujorus récursives, autrement dit c'est l'intégralité du contenu du répertoire qui est copié.

__Paramètres :__

- __parent__ -  Le répertoire parent vers lequel copier le répertoire. _(DirectoryEntry)_
- __newName__ - Le nouveau nom du répertoire. Vaut le nom actuel du répertoire si non précisé. _(DOMString)_
- __successCallback__ - Une fonction de callback appelée, en cas de succès, avec en argument un objet DirectoryEntry représentant le nouveau répertoire. _(Function)_
- __errorCallback__ - Une fonction de callback appelée en cas d'échec de copie du répertoire.  Appelée avec en argument un objet FileError. _(Function)_


__Exemple rapide__

	function win(newdir) {
		console.log("Nouveau chemin : " + newdir.fullPath);
	}
	
	function fail(error) {
		alert(error.code);
	}
	
	function copyDir(entry) {
        var parent = document.getElementById('parent').value,
            newName = document.getElementById('newName').value,
            parentEntry = new DirectoryEntry({fullPath: parent});

        // Copier et renommer le répertoire
        entry.copyTo(parentEntry, newName, success, fail);
    }


toURI
-----

Récupérer une URI permettant de localiser le répertoire.

__Exemple rapide__
	
    // Récupérer l'URI du répertoire
    var uri = entry.toURI();
    console.log(uri);


remove
------

Supprimer un répertoire. C'est une erreur d'essayer de :

- supprimer un répertoire non vide;
- supprimer le répertoire racine du système de fichier.

__Paramètres :__

- __successCallback__ - Une fonction de callback appelée en cas de succès de suppression du répertoire.  Appelée sans argument. _(Function)_
- __errorCallback__ - Une fonction de callback appelée en cas d'échec de suppression du répertoire.  Appelée avec en argument un objet FileError. _(Function)_

__Exemple rapide__
	
    function success() {
        console.log("Suppresion réussie");
    }

    function fail(error) {
        alert('Echec de suppression du répertoire : ' + error.code);
    }

    // Supprimer le répertoire
    entry.remove(success, fail);


getParent
---------

Consulter le répertoire parent d'un répertoire. 

__Paramètres :__

- __successCallback__ - Une fonction de callback appelée, en cas de succès, avec en argument un objet DirectoryEntry représentant le répertoire parent. _(Function)_
- __errorCallback__ - Une fonction de callback appelée en cas d'échec de récupération du répertoire parent.  Appelée avec en argument un objet FileError. _(Function)_

__Exemple rapide__
	
    function success(parent) {
        console.log("Nom du répertoire parent : " + parent.name);
    }
 
    function fail(error) {
        alert('Echec de récupération du répertoire parent : ' + error.code);
    }
	
	// Récupération du répertoire parent
	entry.getParent(success, fail);	


createReader
------------

Créer un nouvel objet DirectoryReader permettant de lire le contenu d'un répertoire.

__Exemple rapide__
	
    // Créer un DirectoryReader
    var directoryReader = entry.createReader();	


getDirectory
------------

Créer ou consulter un répertoire existant.  C'est une erreur d'essayer de :

- créer un répertoire dont le répertoire parent n'existe pas.

__Paramètres :__

- __path__ - Le chemin vers le répertoire à consulter ou créer.  Peut être soit un chemin absolu, soit relatif au DirectoryEntry actuel. _(DOMString)_
- __options__ - Options permettant de préciser si le répertoire doit être créé s'il n'existe pas.  _(Flags)_
- __successCallback__ - Une fonction de callback appelée, en cas de succès, avec en argument un objet DirectoryEntry. _(Function)_
- __errorCallback__ - Une fonction de callback appelée en cas d'échec de création ou de consultation du répertoire.  Appelée avec en argument un objet FileError. _(Function)_

__Exemple rapide__
	
    function success(newdir) {
        console.log("Nom du répertoire : " + newdir.name);
    }

    function fail(error) {
        alert("Echec de création du répertoire : " + error.code);
    }

    // Retrouver un répertoire existant, ou le créer s'il n'existe pas encore
    entry.getDirectory("newDir", {create: true, exclusive: false}, success, fail);	


getFile
-------

Créer ou consulter un fichier.  C'est une erreur d'essayer de :

- créer un fichier dont le répertoire parent n'existe pas.

__Paramètres :__

- __path__ - Le chemin du fichier à consulter ou à créer.  Peut être soit un chemin absolu, soit relatif au DirectoryEntry actuel. _(DOMString)_
- __options__ - Options permettant de préciser si le fichier doit être créé s'il n'existe pas.  _(Flags)_
- __successCallback__ - Une fonction de callback appelée, en cas de succès, avec en argument un objet FileEntry. _(Function)_
- __errorCallback__ - Une fonction de callback appelée en cas d'échec de création ou de consultation du fichier.  Appelée avec en argument un objet FileError. _(Function)_

__Exemple rapide__
	
    function success(file) {
        console.log("Nom du fichier : " + file.name);
    }

    function fail(error) {
        alert("Failed to retrieve file: " + error.code);
    }

    // Retrouver un fichier existant, ou le créer s'il n'existe pas encore
    entry.getFile("newFile.txt", {create: true, exclusive: false}, success, fail);	


removeRecursively
-----------------

Supprimer un répertoire ainsi que tout son contenu.  En cas d'erreur (par exemple en essayant de supprimer un répertoire dans lequel certains fichiers ne peuvent pas être supprimés), la suppression du contenu du répertoire peut être partielle.   C'est une erreur d'essayer de :

- supprimer le répertoire racine du système de fichier.

__Paramètres :__

- __successCallback__ - Une fonction de callback appelée en cas de succès de suppression du répertoire.  Appelée sans argument. _(Function)_
- __errorCallback__ - Une fonction de callback appelée en cas d'échec de suppression du répertoire.  Appelée avec en argument un objet FileError. _(Function)_

__Exemple rapide__
	
    function success() {
        console.log("La suppression récursive a réussi");
    }

    function fail(error) {
        alert("Echec de suppression du répertoire ou de son contenu : " + error.code);
    }

    // Supprimer le répertoire ainsi que tout son contenu
    entry.removeRecursively(success, fail);	
