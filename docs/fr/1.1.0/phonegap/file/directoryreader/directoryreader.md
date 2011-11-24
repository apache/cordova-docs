DirectoryReader
===============

Un objet `DirectoryReader` liste les fichiers et répertoires contenus dans un répertoire.  Cet objet est conforme à la spécification [W3C Directories and Systems](http://www.w3.org/TR/file-system-api/).

Méthodes
--------

- __readEntries__: Lire le contenu d'un répertoire. 


Plateformes supportées
----------------------

- Android
- BlackBerry WebWorks (OS 5.0 ou plus récent)
- iOS
- Windows Phone 7 ( Mango )

readEntries
-----------

Lire le contenu d'un répertoire. 

__Paramètres :__

- __successCallback__ - Une fonction de callback appelée, en cas de succès, avec en argument un tableau d'objets FileEntry et DirectoryEntry. _(Function)_
- __errorCallback__ - Une fonction de callback appelée en cas d'échec de lecture du contenu du répertoire.  Appelée avec en argument un objet FileError. _(Function)_

__Exemple rapide__
	
    function success(entries) {
        var i;
        for (i=0; i<entries.length; i++) {
            console.log(entries[i].name);
        }
    }

    function fail(error) {
        alert("Echec de lecture du contenu du répertoire : " + error.code);
    }

    // Créer un objet DirectoryReader
    var directoryReader = dirEntry.createReader();

    // Obtenir une liste du contenu du répertoire
    directoryReader.readEntries(success,fail);
