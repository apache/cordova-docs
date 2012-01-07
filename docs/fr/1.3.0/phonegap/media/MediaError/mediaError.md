MediaError
==========

Un objet `MediaError` est passé en argument de la focntion de callback `mediaError` lorsqu'une erreur survient.

Propriétés
----------

- __code:__ Un des codes d'erreur prédéfinis ci-dessous.
- __message:__ Un message explicitant l'erreur survenue.

Constantes
----------

- `MediaError.MEDIA_ERR_ABORTED`
- `MediaError.MEDIA_ERR_NETWORK`
- `MediaError.MEDIA_ERR_DECODE`
- `MediaError.MEDIA_ERR_NONE_SUPPORTED`


Description
-----------

L'objet `MediaError` est retourné à l'utilisateur via la fonction de callback `mediaError` lorsqu'une erreur survient.

