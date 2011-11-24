geolocation.watchPosition
=========================

Mettre en place une écoute, ou recherche à intervalles réguliers, de la géolocalisation du mobile.

    var watchId = navigator.geolocation.watchPosition(geolocationSuccess,
                                                      [geolocationError],
                                                      [geolocationOptions]);

Paramètres
----------

- __geolocationSuccess__: Une fonction de callback en cas de succès, reçoit en paramètre la position courante.
- __geolocationError__: (Optionnel) La fonction de callback appelée lorsqu'une erreur survient.
- __geolocationOptions__: (Optionnel) Les options de récupération de la géolocalisation.

Retourne
--------

- __String__: Retourne un identifiant watchID qui référence l'écoute mise en place. Ce watchID peut être utilisé avec `geolocation.clearWatch` pour arrêter l'écoute.

Description
-----------

La fonction `geolocation.watchPosition` est asynchrone. Elle retourne la position courante du mobile lorsqu'un changement de position est détecté.  Lorsque le mobile a retrouvé une nouvelle position, la fonction de callback `geolocationSuccess` est appelée avec en paramètre un objet `Position`.  Si une erreur survient, la fonction de callback `geolocationError` est appelée avec en paramètre un object `PositionError`.

Plateformes supportées
----------------------

- Android
- BlackBerry (OS 4.6)
- BlackBerry WebWorks (OS 5.0 ou plus récent)
- iPhone
- Windows Phone 7 ( Mango )

Exemple rapide
--------------

    // Fonction de callback onSuccess
    //   Cette fonction reçoit en paramètre un objet `Position` qui contient
    //   les coordonées GPS courantes
    //
    function onSuccess(position) {
        var element = document.getElementById('geolocation');
        element.innerHTML = 'Latitude : '  + position.coords.latitude      + '<br />' +
                            'Longitude : ' + position.coords.longitude     + '<br />' +
                            '<hr />'      + element.innerHTML;
    }

    // Fonction de callback onError, reçoit un objet PositionError
    //
    function onError(error) {
        alert('code : '    + error.code    + '\n' +
              'message : ' + error.message + '\n');
    }

    // Options: Interrogation toutes les 3 secondes
    //
    var watchID = navigator.geolocation.watchPosition(onSuccess, onError, { frequency: 3000 });
    

Exemple complet
---------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Exemple Geolocation</title>

        <script type="text/javascript" charset="utf-8" src="phonegap.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Attendre que PhoneGap soit prêt
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        var watchID = null;

        // PhoneGap est prêt
        //
        function onDeviceReady() {
            // Interrogation toutes les 3 secondes
            var options = { frequency: 3000 };
            watchID = navigator.geolocation.watchPosition(onSuccess, onError, options);
        }
    
        // Fonction de callback onSuccess
        //
        function onSuccess(position) {
            var element = document.getElementById('geolocation');
            element.innerHTML = 'Latitude : '  + position.coords.latitude      + '<br />' +
                                'Longitude : ' + position.coords.longitude     + '<br />' +
                                '<hr />'      + element.innerHTML;
        }

	    // Fonction de callback onError, reçoit un objet PositionError
	    //
	    function onError(error) {
	      alert('code : '    + error.code    + '\n' +
	            'message : ' + error.message + '\n');
	    }

        </script>
      </head>
      <body>
        <p id="geolocation">Écoute de la géolocalisation...</p>
    	<button onclick="clearWatch();">Arrêter l'écoute</button>     
      </body>
    </html>
