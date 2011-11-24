Metadata
========

Un objet `Metadata` fournit des informations sur l'état d'un fichier ou d'un répertoire.

Propriétés
----------

- __modificationTime:__ Date de la dernière modification du fichier ou du répertoire. _(Date)_

Détails
-------

L'objet `Metadata` contient des informations sur l'état d'un fichier ou d'un répertoire.  On peut obtenir une instance de Metadata en appelant la méthode __getMetadata__ d'un objet `DirectoryEntry` ou `FileEntry`.

Plateformes supportées
----------------------

- Android
- BlackBerry WebWorks (OS 5.0 ou plus récent)
- iOS
- Windows Phone 7 ( Mango )

Exemple rapide
--------------

	function win(metadata) {
		console.log("Dernière modification : " + metadata.modificationTime);
	}
	
	// Récupérer un objet metadata pour ce fichier
	entry.getMetadata(win, null);