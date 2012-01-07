geolocationOptions
==================

L'objet `geolocationOptions` contient un ensemble de paramètres optionnels permettant de personnaliser la récupération de la géolocalisation.

    { maximumAge: 3000, timeout: 5000, enableHighAccuracy: true };

Options
-------

- __frequency:__ Fréquence de récupération de la position, en millisecondes. Cette option ne fait pas partie de la spécification W3C et sera supprimée dans le futur. Utiliser maximumAge à la place. _(Number)_ (Par défaut : 10000)
- __enableHighAccuracy:__ Indique le fait que l'application souhaite recevoir les résultats les plus précis possible. _(Boolean)_
- __timeout:__ Le délai maximal, en millisecondes, autorisé entre un appel à `geolocation.getCurrentPosition` ou `geolocation.watchPosition` et l'appel à la fonction de callback `geolocationSuccess` qui lui est associé. _(Number)_
- __maximumAge:__ Ancienneté maximale, en millisecondes, d'une position pour qu'elle soit acceptée en cache. _(Number)_

Singularités Android
--------------------

Les simulateurs Android 2.x ne renverront pas de géolocalisation à moins que l'option `enableHighAccuracy` ne soit valorisée à true.

    { enableHighAccuracy: true }

