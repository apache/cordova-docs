---
license: >
    Licensed to the Apache Software Foundation (ASF) under one
    or more contributor license agreements.  See the NOTICE file
    distributed with this work for additional information
    regarding copyright ownership.  The ASF licenses this file
    to you under the Apache License, Version 2.0 (the
    "License"); you may not use this file except in compliance
    with the License.  You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing,
    software distributed under the License is distributed on an
    "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, either express or implied.  See the License for the
    specific language governing permissions and limitations
    under the License.
---


# Boussole

> Obtient la direction dans laquelle pointe l'appareil.

## Méthodes

*   compass.getCurrentHeading
*   compass.watchHeading
*   compass.clearWatch
*   compass.watchHeadingFilter (obsolète)
*   compass.clearWatchFilter (obsolète)

## Arguments

*   compassSuccess
*   compassError
*   compassOptions
*   compassHeading

## Accéder à la fonctionnalité

Depuis la version 3.0, Cordova implémente les APIs au niveau de l'appareil comme des *plugins*. Utilisez le `plugin` d'interface en ligne de commande, décrite dans l'Interface de ligne de commande, pour ajouter ou supprimer cette fonctionnalité pour un projet :

        $ cordova plugin add org.apache.cordova.device-orientation
        $ cordova plugin ls
        [ 'org.apache.cordova.device-orientation' ]
        $ cordova plugin rm org.apache.cordova.device-orientation
    

Ces commandes s'appliquent à toutes les plates-formes ciblées, mais modifient les paramètres de configuration spécifiques aux plateformes décrites ci-dessous :

*   Android (dans`app/res/xml/config.xml`)
    
        <feature name="Compass">
            <param name="android-package" value="org.apache.cordova.CompassListener" />
        </feature>
        

*   iOS (en`config.xml`)
    
        <feature name="Compass">
            <param name="ios-package" value="CDVLocation" />
        </feature>
        

*   Windows Phone (en`Properties/WPAppManifest.xml`)
    
        <Capabilities>
            <Capability Name="ID_CAP_SENSORS" />
        </Capabilities>
        
    
    Référence : [manifeste d'Application pour Windows Phone][1]

 [1]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx

Certaines plates-formes peuvent prendre en charge cette fonctionnalité sans nécessiter aucune configuration spéciale. Voir *Support de plate-forme* dans la section vue d'ensemble.


# compass.getCurrentHeading

Téléchargez la direction courante de la boussole.

    navigator.compass.getCurrentHeading(compassSuccess, compassError, compassOptions);
    

## Description

La boussole est un capteur qui détecte la direction ou la position vers laquelle l'appareil pointe, généralement depuis le haut de l'appareil. Il mesure la direction en degrés de 0 à 359.99, où 0 indique le Nord.

Les informations de la boussole sont retournées via un objet `CompassHeading` utilisant la fonction de callback `compassSuccess`.

## Plates-formes prises en charge

*   Android
*   BlackBerry 10
*   iOS
*   Tizen
*   Windows Phone 7 et 8 (s'il est disponible dans le matériel)
*   Windows 8

## Petit exemple

    function onSuccess(heading) {
        alert('Heading: ' + heading.magneticHeading);
    };
    
    function onError(error) {
        alert('CompassError: ' + error.code);
    };
    
    navigator.compass.getCurrentHeading(onSuccess, onError);
    

## Exemple complet

    <!DOCTYPE html>
    <html>
      <head>
        <title>Compass Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            navigator.compass.getCurrentHeading(onSuccess, onError);
        }
    
        // onSuccess: Get the current heading
        //
        function onSuccess(heading) {
            alert('Heading: ' + heading.magneticHeading);
        }
    
        // onError: Failed to get the heading
        //
        function onError(compassError) {
            alert('Compass Error: ' + compassError.code);
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>getCurrentHeading</p>
      </body>
    </html>


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


# compass.clearWatch

Arrêter de regarder la boussole référencée par le paramètre ID de montre.

    navigator.compass.clearWatch(watchID);
    

*   **watchID** : l'ID retourné par`compass.watchHeading`.

## Plates-formes prises en charge

*   Android
*   BlackBerry 10
*   iOS
*   Tizen
*   Windows Phone 7 et 8 (s'il est disponible dans le matériel)
*   Windows 8

## Petit exemple

    var watchID = navigator.compass.watchHeading(onSuccess, onError, options);
    
    // ... later on ...
    
    navigator.compass.clearWatch(watchID);
    

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


# compass.watchHeadingFilter

N'est plus supporté à partir de 1.6, voir `compass.watchHeading` pour une fonctionnalité équivalente.


# compass.clearWatchFilter

N'est plus supporté à partir de 1.6. Voir `compass.clearWatch`.


# compassSuccess

fonction de callback onSuccess qui fournit les informations de la boussole via un objet `compassHeading`.

    function(heading) {
        // Do something
    }
    

## Paramètres

*   **rubrique** : les informations de direction. *(compassHeading)*

## Exemple

    function onSuccess(heading) {
        alert('Heading: ' + heading.magneticHeading);
    };


# compassError

fonction de callback onError pour les fonctions de la boussole.

## Exemple

    function(CompassError) {
        // Handle the error
    }


# compassOptions

Un paramètre optionnel pour personnaliser la récupération de la boussole.

## Options

*   **fréquence** : la fréquence de récupération de la boussole en millisecondes. *(Nombre)* (Par défaut : 100)

*   **filtre** : la variation en degrés nécessaire pour initier la fonction de callback de succès watchHeading. *(Nombre)*

Spécificités Android

---

*   `filter` n'est pas pris en charge.

## Spécificités Tizen

*   `filter` n'est pas pris en charge.

## Spécificités Windows Phone 7 et 8

*   `filter` n'est pas pris en charge.


# compassHeading

Un objet `CompassHeading` est retourné à la fonction de callback `compassSuccess`.

## Propriétés

*   **magneticHeading**: la position en degrés de 0-359,99 à un instant donné. *(Nombre)*

*   **trueHeading**: la position par rapport au pôle Nord géographique en degrés 0-359,99 à un instant donné. Une valeur négative indique que la véritable direction ne peut pas être déterminée. *(Nombre)*

*   **headingAccuracy**: la déviation en degrés entre la direction signalée et la véritable direction. *(Nombre)*

*   **horodatage**: l'heure à laquelle cette direction a été déterminée. *(millisecondes)*

## Description

L'objet `CompassHeading` est retourné à la fonction de callback `compassSuccess`.

## Spécificités Android

*   `trueHeading`n'est pas pris en charge, mais retourne la même valeur que `magneticHeading`

*   `headingAccuracy` est toujours égal à 0 car il n'y a pas de différence entre `magneticHeading` et `trueHeading`.

## Spécificités iOS

*   `trueHeading` is only returned when location services are enabled via `navigator.geolocation.watchLocation()`

*   Pour les appareils sous iOS 4 et suivants, les facteurs de direction de l'orientation actuelle de l'appareil, pas en référence à sa position absolue, pour les applications prenant en charge cette orientation.


# CompassError

Un objet `CompassError` est retourné à la fonction de callback `compassError` lorsqu'une erreur survient.

## Propriétés

*   **code**: l'un des codes d'erreur prédéfinis énumérés ci-dessous.

## Constantes

*   `CompassError.COMPASS_INTERNAL_ERR`
*   `CompassError.COMPASS_NOT_SUPPORTED`

## Description

Lorsqu'une erreur se produit, l'objet `CompassError` est passé en paramètre de la fonction de callback `compassError`.
