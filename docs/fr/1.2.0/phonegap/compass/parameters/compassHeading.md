compassHeading
==========

Un objet `CompassHeading` est passé à la fonction de callback `compassSuccess` lorsqu'un cap est retrouvé depuis la boussole.

Propriétés
----------
- __magneticHeading:__ La direction relative au pôle nord magnétique exprimée en degrés, entre 0 et 359.99, pour un instant donné. _(Number)_
- __trueHeading:__ La direction relative au pôle nord géographique exprimée en degrés, entre 0 et 359.99, pour un instant donné. Une valeur négative indique que la direction n'a pas pu être déterminée.  _(Number)_
- __headingAccuracy:__ La déviation en degrés entre le `magneticHeading` et le `trueHeading` mesurés. _(Number)_
- __timestamp:__ La date en milliseconde à laquelle la mesure a été effectuée.  _(milliseconds)_

Description
-----------

L'objet `CompassHeading` est renvoyé à l'utilisateur en tant qu'argument d'appel de la fonction de callback `compassSuccess`.

Singularités Android
--------------------
- `trueHeading` n'est pas supporté. Il contiendra la même valeur que `magneticHeading`.
- `headingAccuracy` vaudra toujours 0 puisqu'il n'y a pas de différence entre `magneticHeading` et `trueHeading` sous Android.

Singularités iOS
----------------
- `trueHeading` est renvoyé uniquement lorsque les services de géolocalisation sont activés via `navigator.geolocation.watchLocation()`.
- Pour les mobiles iOS > 4, si le mobile est tourné et que l'application prend en compte l'orientation du mobile, la direction sera renvoyée pour prendre en compte la nouvelle orientation.

Singularités Windows Phone 7
----------------------------
- Seule la valeur `trueHeading` sera renvoyée, il faut savoir que cette partie de PhoneGap a été très peu testée puisque peu de mobiles possèdent une boussole aujourd'hui.
