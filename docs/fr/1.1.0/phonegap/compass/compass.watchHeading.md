compass.watchHeading
====================

À intervalles réguliers, récupère la direction en degrés qu'indique la boussole.

    var watchID = navigator.compass.watchHeading(compassSuccess, compassError, [compassOptions]);
                                                           
Description
-----------

La boussole est un capteur capable d'indiquer la direction, ou cap, dans laquelle le mobile est orienté.  Il mesure le cap en degrés, de 0 à 359,99.

La fonction `compass.watchHeading` lance à intervalles réguliers la récupération du cap courant qu'indique la boussole de l'appareil. A chaque fois que le cap est récupéré, la fonction de callback `headingSuccess` est exécutée avec un nouvel objet `CompassHeading`.
L'intervalle de temps entre chaque récupération est indiqué en millisecondes grâce au paramètre `frequency` de l'objet `compassOptions`.

Le watchID retourné par `compass.watchHeading` référence "l'écoute" de la boussole mise en place de cette manière. Ce watchID peut être utilisé avec `compass.clearWatch` pour arrêter cette écoute.

Plateformes supportées
----------------------

- Android
- iPhone
- Windows Phone 7 ( Mango ) si boussole présente dans le mobile


Exemple rapide
--------------

    function onSuccess(heading) {
        var element = document.getElementById('heading');
        element.innerHTML = 'Cap : ' + heading.magneticHeading;
    };

    function onError(compassError) {
            alert('Erreur de la boussole : ' + compassError.code);
    };

    var options = { frequency: 3000 };  // Récupération toutes les 3 secondes
    
    var watchID = navigator.compass.watchHeading(onSuccess, onError, options);

Exemple complet
---------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Exemple Compass</title>

        <script type="text/javascript" charset="utf-8" src="phonegap.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Le watchID référence l'écoute de la boussole
        var watchID = null;
        
        // Attendre que PhoneGap soit prêt
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // PhoneGap est prêt
        //
        function onDeviceReady() {
            startWatch();
        }

        // Lancement de l'écoute de la boussole
        //
        function startWatch() {
            
            // Récupération toutes les 3 secondes
            var options = { frequency: 3000 };
            
            watchID = navigator.compass.watchHeading(onSuccess, onError, options);
        }
        
        // Arrêt de l'écoute grâce au watchID
        //
        function stopWatch() {
            if (watchID) {
                navigator.compass.clearWatch(watchID);
                watchID = null;
            }
        }
        
        // onSuccess: Obtention du cap courant
        //
        function onSuccess(heading) {
            var element = document.getElementById('heading');
            element.innerHTML = 'Cap : ' + heading.magneticHeading;
        }

        // onError: Échec d'obtention du cap
        //
        function onError(compassError) {
            alert('Erreur de la boussole : ' + compassError.code);
        }

        </script>
      </head>
      <body>
        <div id="heading">Attente de la boussole...</div>
        <button onclick="startWatch();">Lancer l'écoute</button>
        <button onclick="stopWatch();">Arrêter l'écoute</button>
      </body>
    </html>
    
