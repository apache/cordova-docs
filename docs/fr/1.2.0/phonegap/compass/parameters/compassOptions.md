compassOptions
==============

Paramètre facultatif permettant de personnaliser l'exploitation de la boussole.

Options
-------

- __frequency:__ A quelle fréquence en millisecondes récupérer la direction de la boussole. _(Number)_ (Par défaut: 100)
- __filter:__ Le seuil de changement de cap, en degrés, à partir duquel déclencher un appel à la fonction de callback onSuccess de `watchHeadingFilter`. _(Number)_

Singularités Android
--------------------
- `filter` n'est pas supporté.

Singularités Windows Phone 7
----------------------------
- `filter` n'est pas supporté.