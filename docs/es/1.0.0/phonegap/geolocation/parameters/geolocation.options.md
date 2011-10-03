geolocationOptions
==================

Parámetros opcionales para personalizar la obtención de la geolocalización.

    { maximumAge: 3000, timeout: 5000, enableHighAccuracy: true };

Opciones
--------

- __frequency:__ Cada cuanto obtener la posición (en milisegundos). Esta opción no pertenece a las especificaciones W3C y sera eliminado en el futuro. Debería usarse maximumAge en su lugar. _(Number)_ (Por defecto: 10000)
- __enableHighAccuracy:__ Indica que la aplicación debe recibir los solo los resultados mas precisos. _(Boolean)_
- __timeout:__ El tiempo máximo de espera (milisegundos) que los métodos `geolocation.getCurrentPosition` y `geolocation.watchPosition` pueden esperar mientras se obtienen los datos y se llama a `geolocationSuccess`. _(Number)_
- __maximumAge:__ El tiempo máximo de vida (milisegundos) que se permite en tener una posición en memoria cache. _(Number)_

Peculiaridades Android
----------------------

Los emuladores Android 2.x no retornaran ningún resultado de geolocalización a menos que la opción __enableHighAccuracy__ sea `true`.

    { enableHighAccuracy: true }

