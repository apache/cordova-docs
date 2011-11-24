ContactError
========

Un objet `ContactError` est passé à la fonction de callback `contactError` lorsqu'une erreur survient.

Propriétés
----------

- __code:__ Un des codes d'erreur prédéfinis listés ci-dessous.

Constantes
----------

- `ContactError.UNKNOWN_ERROR`
- `ContactError.INVALID_ARGUMENT_ERROR`
- `ContactError.TIMEOUT_ERROR`
- `ContactError.PENDING_OPERATION_ERROR`
- `ContactError.IO_ERROR`
- `ContactError.NOT_SUPPORTED_ERROR`
- `ContactError.PERMISSION_DENIED_ERROR`

Description
-----------

L'objet `ContactError` est renvoyé à l'utilisateur en tant qu'argument d'appel de la fonction de callback `contactError` lorsqu'une erreur survient.

