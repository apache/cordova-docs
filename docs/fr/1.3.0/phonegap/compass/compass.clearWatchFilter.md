compass.clearWatchFilter
========================

Arrête la surveillance de boussole mise en place via `compass.watchHeadingFilter` et référencée par watchID.

    navigator.compass.clearWatchFilter(watchID);

- __watchID__: Le watchID renvoyé par `compass.watchHeadingFilter`.

Plateformes supportées
----------------------

- iPhone

Exemple rapide
--------------

    var watchID = navigator.compass.watchHeadingFilter(onSuccess, onError, options);
    
    // ... plus tard ...
    
    navigator.compass.clearWatchFilter(watchID);
    
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
            
            // Être notifié dès que la boussole détecte un changement de cap de 10 degrés ou plus
            var options = { filter: 10 };
            
            watchID = navigator.compass.watchHeadingFilter(onSuccess, onError, options);
        }
        
        // Arrêt de l'écoute grâce au watchID
        //
        function stopWatch() {
            if (watchID) {
                navigator.compass.clearWatchFilter(watchID);
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
        <button onclick="startWatch();">Lancer l'écoute via Filter</button>
        <button onclick="stopWatch();">Arrêter l'écoute</button>
      </body>
    </html>
