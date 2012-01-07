File
====

Un objet `File` contient les propriétés d'un fichier.

Propriétés
----------

- __name:__ Le nom du fichier. _(DOMString)_
- __fullPath:__ Le chemin complet du fichier, contenant le nom du fichier. _(DOMString)_
- __type:__ Le type MIME du fichier. _(DOMString)_
- __lastModifiedDate:__ La date de dernière modification du fichier. _(Date)_
- __size:__ La taille du fichier en octets. _(long)_

Détails
-------

L'objet `File` contient les propriétés d'un seul fichier.  On peut obtenir une instance de File en appelant la méthode __file__ d'un objet `FileEntry`.

Plateformes supportées
----------------------

- Android
- BlackBerry WebWorks (OS 5.0 ou plus récent)
- iOS
- Windows Phone 7 ( Mango )
