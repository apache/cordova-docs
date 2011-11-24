FileTransferError
=================

Un objet `FileTransferError` est créé lorsqu'une erreur survient pendant un transfert de fichier.

Propriétés
----------

- __code:__ Un des codes d'erreur prédéfinis ci-dessous. (int)

Constantes
----------

- `FileTransferError.FILE_NOT_FOUND_ERR`
- `FileTransferError.INVALID_URL_ERR`
- `FileTransferError.CONNECTION_ERR`

Description
-----------

L'objet `FileTransferError` est retourné comme paramètre de la fonction de callback d'erreur lorsqu'une erreur survient pendant un transfert de fichier.
