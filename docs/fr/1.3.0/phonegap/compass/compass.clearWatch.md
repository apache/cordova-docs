compass.clearWatch
========================

Arrête la surveillance de boussole mise en place via `compass.watchHeading` et référencée par watchID.

    navigator.compass.clearWatch(watchID);

- __watchID__: Le watchID renvoyé par `compass.watchHeading`.

Plateformes supportées
----------------------

- Android
- iPhone
- Windows Phone 7 ( Mango ) si boussole présente dans le mobile

Exemple rapide
--------------

    var watchID = navigator.compass.watchHeading(onSuccess, onError, options);
    
    // ... plus tard ...
    
    navigator.compass.clearWatch(watchID);
    
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
