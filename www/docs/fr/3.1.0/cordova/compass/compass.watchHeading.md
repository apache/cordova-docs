---

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

   under the License.
---

# compass.watchHeading

À intervalle régulier, obtenez la direction de la boussole en degrés.

    var watchID = navigator.compass.watchHeading(compassSuccess, compassError, [compassOptions]);
    

## Description

La boussole est un capteur qui détecte la direction ou la position vers laquelle l'appareil pointe. Il mesure la direction en degrés de 0 à 359.99.

Le `compass.watchHeading` obtient la direction actuelle de l'appareil à intervalle régulier. Chaque fois que la direction est récupérée, la fonction de callback `headingSuccess` est exécutée. Spécifiez l'intervalle, en millisecondes, via le paramètre `frequency` dans l'objet `compassOptions`.

L'ID de surveillance retourné référence l'intervalle de surveillance de la boussole. L'ID de surveillance peut être utilisé avec `compass.clearWatch` pour arrêter de surveiller la boussole.

## Plates-formes prises en charge

*   Android
*   BlackBerry 10
*   iOS
*   Tizen
*   Windows Phone 7 et 8 (s'il est disponible dans le matériel)
*   Windows 8

## Petit exemple

    function onSuccess(heading) {
        var element = document.getElementById('heading');
        element.innerHTML = 'Heading: ' + heading.magneticHeading;
    };
    
    function onError(compassError) {
        alert('Compass error: ' + compassError.code);
    };
    
    var options = {
        frequency: 3000
    }; // Update every 3 seconds
    
    var watchID = navigator.compass.watchHeading(onSuccess, onError, options);
    

## Exemple complet

    <!DOCTYPE html>
    <html>
      <head>
        <title>Compass Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // The watch id references the current `watchHeading`
        var watchID = null;
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            startWatch();
        }
    
        // Start watching the compass
        //
        function startWatch() {
    
            // Update compass every 3 seconds
            var options = { frequency: 3000 };
    
            watchID = navigator.compass.watchHeading(onSuccess, onError, options);
        }
    
        // Stop watching the compass
        //
        function stopWatch() {
            if (watchID) {
                navigator.compass.clearWatch(watchID);
                watchID = null;
            }
        }
    
        // onSuccess: Get the current heading
        //
        function onSuccess(heading) {
            var element = document.getElementById('heading');
            element.innerHTML = 'Heading: ' + heading.magneticHeading;
        }
    
        // onError: Failed to get the heading
        //
        function onError(compassError) {
            alert('Compass error: ' + compassError.code);
        }
    
        </script>
      </head>
      <body>
        <div id="heading">Waiting for heading...</div>
        <button onclick="startWatch();">Start Watching</button>
        <button onclick="stopWatch();">Stop Watching</button>
      </body>
    </html>
    

## Spécificités iOS

Dans iOS `compass.watchHeading` peut également récupérer la direction actuelle de l'appareil lorsqu'elle change d'un certain nombre de degrés. Chaque fois que la direction change du nombre de degrés spécifiés ou plus, la fonction de callback `headingSuccess` s'exécute. Spécifier les degrés de changement via le paramètre `filter` dans l'objet `compassOptions`. Désactivez la boussole comme d'habitude en passant l'ID de surveillance retourné à `compass.clearWatch` . Cette fonctionnalité remplace les fonctionnalités précédentes, uniquement sur iOS, `watchHeadingFilter` et `clearWatchFilter`, qui ont été supprimées dans la version 1.6.

Seulement un `watchHeading` peut être utilisé à un moment donné sur iOS. Si un `watchHeading` utilise un filtre, un appel à `getCurrentHeading` ou `watchHeading` utilise la valeur existante de filtre pour spécifier des changements de direction. Surveiller les changements de position avec un filtre est plus efficace qu'avec des intervalles de temps.