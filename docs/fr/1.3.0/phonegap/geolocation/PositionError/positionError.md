PositionError
=============

Un objet `PositionError` est passé à la fonction de callback `geolocationError` lorsqu'une erreur survient.

Propriétés
----------

- __code:__ Un des codes d'erreur prédéfinis listés ci-dessous.
- __message:__ Un message explicitant l'erreur survenue.

Constantes
----------

- `PositionError.PERMISSION_DENIED`
- `PositionError.POSITION_UNAVAILABLE`
- `PositionError.TIMEOUT`

Description
-----------

L'objet `PositionError` est renvoyé à l'utilisateur en tant qu'argument d'appel de la fonction de callback `geolocationError` lorsqu'une erreur survient.

