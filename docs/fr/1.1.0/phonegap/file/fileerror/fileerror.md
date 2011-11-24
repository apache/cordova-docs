FileError
========

Un objet 'FileError' est retourné lorsqu'une erreur survient durant l'appel d'une méthode de l'API File. 

Propriétés
----------

- __code:__ Un des codes d'erreur prédéfinis ci-dessous.

Constantes
----------

- `FileError.NOT_FOUND_ERR`
- `FileError.SECURITY_ERR`
- `FileError.ABORT_ERR`
- `FileError.NOT_READABLE_ERR`
- `FileError.ENCODING_ERR`
- `FileError.NO_MODIFICATION_ALLOWED_ERR`
- `FileError.INVALID_STATE_ERR`
- `FileError.SYNTAX_ERR`
- `FileError.INVALID_MODIFICATION_ERR`
- `FileError.QUOTA_EXCEEDED_ERR`
- `FileError.TYPE_MISMATCH_ERR`
- `FileError.PATH_EXISTS_ERR`

Description
-----------

L'objet 'FileError' est le seul paramètre des fonctions de callback en erreur de l'API File.  Les développeurs doivent lire la propriété code afin de déterminer la nature de l'erreur.
