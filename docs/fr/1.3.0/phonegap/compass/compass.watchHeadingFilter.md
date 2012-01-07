compass.watchHeadingFilter
==========================

Récupère la direction en degrés qu'indique la boussole quand celle-ci change d'au moins un certain nombre de degrés.

    var watchID = navigator.compass.watchHeadingFilter(compassSuccess, compassError, compassOptions);
                                                           
Description
-----------

La boussole est un capteur capable d'indiquer la direction, ou cap, dans laquelle le mobile est orienté.  Il mesure le cap en degrés, de 0 à 359,99.

La fonction `compass.watchHeadingFilter` récupère le cap courant qu'indique la boussole de l'appareil quand celle-ci change d'au moins un certain nombre de degrés, ou seuil. A chaque fois que le changement de cap dépasse le seuil précisé, la fonction de callback `headingSuccess` est exécutée avec un nouvel objet `CompassHeading`. 
Le seuil est indiqué en degrés grâce au paramètre `filter` de l'objet `compassOptions`.

Le watchID retourné par `compass.watchHeading` référence "l'écoute" de la boussole mise en place de cette manière. Ce watchID peut être utilisé avec `compass.clearWatch` pour arrêter cette écoute.  Un seul watchHeadingFilter ne peut être actif à la fois.  Si un watchHeadingFilter est actif, appeler getCurrentHeading ou watchHeading utilisera la valeur du seuil existant. Sur iOS, cette méthode est plus performante que `compass.watchFilter` étant donné le mécanisme qu'utilise iOS pour surveiller les changements de direction de la boussole.

Plateformes supportées
----------------------

- iPhone


Exemple rapide
--------------

    function onSuccess(heading) {
        var element = document.getElementById('heading');
        element.innerHTML = 'Cap : ' + heading.magneticHeading;
    };

    function onError(compassError) {
            alert('Erreur de la boussole : ' + compassError.code);
    };

    var options = { filter: 10 };  // Être notifié dès que la boussole détecte un changement de cap de 10 degrés ou plus
    
    var watchID = navigator.compass.watchHeadingFilter(onSuccess, onError, options);

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
