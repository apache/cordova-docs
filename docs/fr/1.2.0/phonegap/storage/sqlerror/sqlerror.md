SQLError
========

Un objet `SQLError` est passé à la fonction de callback d'erreur lorsqu'une erreur survient.

Properties
----------

- __code:__ Un des codes d'erreur prédéfinis listés ci-dessous.
- __message:__ Un message explicitant l'erreur.

Constantes
----------

- `SQLError.UNKNOWN_ERR`
- `SQLError.DATABASE_ERR`
- `SQLError.VERSION_ERR`
- `SQLError.TOO_LARGE_ERR`
- `SQLError.QUOTA_ERR`
- `SQLError.SYNTAX_ERR`
- `SQLError.CONSTRAINT_ERR`
- `SQLError.TIMEOUT_ERR`

Description
-----------

Un objet `SQLError` est passé à la fonction de callback d'erreur lorsqu'une erreur survient pendant la manipulation d'une base de données.

