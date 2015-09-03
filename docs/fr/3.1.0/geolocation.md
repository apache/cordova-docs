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


# Geolocation

> L'objet `geolocation` permet l'accès aux données de localisation basées sur le capteur GPS de l'appareil ou déduites des signaux du réseau.

`Geolocation` fournit des informations sur l'emplacement de l'appareil, telles que la latitude et la longitude. Les sources habituelles d'information incluent le Système de Positionnement Global (GPS) et la position déduite de signaux des réseaux tels que l'adresse IP, RFID, les adresses MAC WiFi et Bluetooth et les IDs cellulaires GSM/CDMA. Il n'y a cependant aucune garantie que cette API renvoie la position réelle de l'appareil.

Cette API est basée sur la [Spécification de l'API Geolocation du W3C][1] et s'exécute uniquement sur les appareils qui n'en proposent pas déjà une implémentation.

 [1]: http://dev.w3.org/geo/api/spec-source.html

**Remarque importante concernant le respect de la vie privée :** la collecte et l'utilisation des données de géolocalisation soulève des questions importantes concernant le respect de la vie privée. La politique de confidentialité de votre application devrait traiter de la manière dont l'application utilise les données de géolocalisation, si elle les partage avec d'autres parties ou non et définir le niveau de précision de celles-ci (par exemple grossier, fin, restreint au code postal, etc.). Les données de géolocalisation sont généralement considérées comme sensibles car elle peuvent révéler l'endroit où se trouve une personne et, si stockées, l'historique de ses voyages. Par conséquent, en plus de la politique de confidentialité de votre application, vous devriez par exemple fortement envisager d'afficher une notice juste avant d'accéder aux données de géolocalisation (si le système d'exploitation de l'appareil ne le fait pas déjà). Cette notice devrait contenir les informations susmentionnées, ainsi que permettre de recueillir l'autorisation de l'utilisateur (par exemple, en offrant les possibilités **OK** et **Non merci**). Pour plus d'informations, veuillez vous référer à la section "Guide du respect de la vie privée".

## Méthodes

*   geolocation.getCurrentPosition
*   geolocation.watchPosition
*   geolocation.clearWatch

## Arguments

*   geolocationSuccess
*   geolocationError
*   geolocationOptions

## Objets (lecture seule)

*   Position
*   PositionError
*   Coordonnées

## Accéder à la fonctionnalité

Depuis la version 3.0, Cordova implémente les API liées à l'appareil en tant que *plugins*. Utiliser la commande `plugin` de l'Interface en Ligne de Commande, décrite dans la section intitulée L'Interface en Ligne de Commande, afin d'ajouter ou retirer cette fonctionnalité à un projet :

        $ cordova plugin add org.apache.cordova.geolocation
        $ cordova plugin ls
        [ 'org.apache.cordova.geolocation' ]
        $ cordova plugin rm org.apache.cordova.geolocation
    

Ces commandes s'appliquent à toutes les plates-formes ciblées mais modifient les paramètres de configuration spécifiques aux différentes plates-formes tel que décrit ci-dessous :

*   Android
    
        (in app/res/xml/config.xml)
        <feature name="Geolocation">
            <param name="android-package" value="org.apache.cordova.GeoBroker" />
        </feature>
        
        (in app/AndroidManifest.xml)
        <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
        <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
        <uses-permission android:name="android.permission.ACCESS_LOCATION_EXTRA_COMMANDS" />
        

*   BlackBerry WebWorks
    
        (in www/plugins.xml)
        <feature name="Geolocation">
            <param name="blackberry-package" value="org.apache.cordova.geolocation.Geolocation" />
        </feature>
        
        (in www/config.xml)
        <rim:permissions>
            <rim:permit>read_geolocation</rim:permit>
        </rim:permissions>
        

*   iOS (dans `config.xml`)
    
        <feature name="Geolocation">
            <param name="ios-package" value="CDVLocation" />
        </feature>
        

*   Windows Phone (dans `Properties/WPAppManifest.xml`)
    
        <Capabilities>
            <Capability Name="ID_CAP_LOCATION" />
        </Capabilities>
        
    
    Référence : [Manifeste d'Application pour Windows Phone][2]

 [2]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx

Certaines plates-formes peuvent prendre en charge cette fonctionnalité sans nécessiter aucune configuration spéciale. Voir *Support de plate-forme* dans la section vue d'ensemble.


# geolocation.getCurrentPosition

Renvoie la position actuelle de l'appareil sous la forme d'un objet `Position`.

    navigator.geolocation.getCurrentPosition(geolocationSuccess,
                                             [geolocationError],
                                             [geolocationOptions]);
    

## Paramètres

*   **geolocationSuccess** : la fonction callback à laquelle est transmise la position actuelle.

*   **geolocationError** : *(facultative)* la fonction callback s'exécutant si une erreur survient.

*   **geolocationOptions** : *(facultatives)* des préférences de géolocalisation.

## Description

`geolocation.getCurrentPosition` est une fonction asynchrone. Elle transmet la position actuelle de l'appareil à la fonction callback `geolocationSuccess` sous la forme d'un objet `Position`. Si une erreur se produit, un objet `PositionError` est passé en paramètre à la fonction callback `geolocationError`.

## Plates-formes supportées

*   Android
*   BlackBerry WebWorks (OS 5.0 et plus)
*   iOS
*   Paciarelli
*   Windows Phone 7 et 8
*   Windows 8

## Exemple court

    // onSuccess Callback
    // This method accepts a Position object, which contains the
    // current GPS coordinates
    //
    var onSuccess = function(position) {
        alert('Latitude: '          + position.coords.latitude          + '\n' +
              'Longitude: '         + position.coords.longitude         + '\n' +
              'Altitude: '          + position.coords.altitude          + '\n' +
              'Accuracy: '          + position.coords.accuracy          + '\n' +
              'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
              'Heading: '           + position.coords.heading           + '\n' +
              'Speed: '             + position.coords.speed             + '\n' +
              'Timestamp: '         + position.timestamp                + '\n');
    };
    
    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }
    
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
    

## Exemple complet

    <!DOCTYPE html>
    <html>
      <head>
        <title>Device Properties Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            navigator.geolocation.getCurrentPosition(onSuccess, onError);
        }
    
        // onSuccess Geolocation
        //
        function onSuccess(position) {
            var element = document.getElementById('geolocation');
            element.innerHTML = 'Latitude: '           + position.coords.latitude              + '<br />' +
                                'Longitude: '          + position.coords.longitude             + '<br />' +
                                'Altitude: '           + position.coords.altitude              + '<br />' +
                                'Accuracy: '           + position.coords.accuracy              + '<br />' +
                                'Altitude Accuracy: '  + position.coords.altitudeAccuracy      + '<br />' +
                                'Heading: '            + position.coords.heading               + '<br />' +
                                'Speed: '              + position.coords.speed                 + '<br />' +
                                'Timestamp: '          + position.timestamp                    + '<br />';
        }
    
        // onError Callback receives a PositionError object
        //
        function onError(error) {
            alert('code: '    + error.code    + '\n' +
                  'message: ' + error.message + '\n');
        }
    
        </script>
      </head>
      <body>
        <p id="geolocation">Finding geolocation...</p>
      </body>
    </html>


# geolocation.watchPosition

Observer les changements de localisation de l'appareil.

    var watchId = navigator.geolocation.watchPosition(geolocationSuccess,
                                                      [geolocationError],
                                                      [geolocationOptions]);
    

## Paramètres

*   **geolocationSuccess** : la fonction callback à laquelle la position actuelle de l'appareil est transmise.

*   **geolocationError** : (facultative) la fonction callback s'exécutant lorsqu'une erreur survient.

*   **geolocationOptions** : (facultatives) options de personnalisation de la géolocalisation.

## Retourne

*   **String** : retourne un identifiant faisant référence à l'intervalle d'observation de la position. Cet identifiant est prévu pour être utilisé avec `geolocation.clearWatch` afin de pouvoir arrêter ultérieurement l'observation des changements de position.

## Description

`geolocation.watchPosition` est une fonction asynchrone. Elle renvoie la position actuelle de l'appareil lorsqu'un changement de position est détecté. Lorsque l'appareil récupère un nouvelle position, la fonction callback `geolocationSuccess` est exécutée avec un objet `Position` comme paramètre. Si une erreur se produit, la fonction callback `geolocationError` est appelée avec un obet `PositionError` comme paramètre.

## Plates-formes supportées

*   Android
*   BlackBerry WebWorks (OS 5.0 et plus)
*   iOS
*   Paciarelli
*   Windows Phone 7 et 8
*   Windows 8

## Exemple court

    // onSuccess Callback
    //   This method accepts a `Position` object, which contains
    //   the current GPS coordinates
    //
    function onSuccess(position) {
        var element = document.getElementById('geolocation');
        element.innerHTML = 'Latitude: '  + position.coords.latitude      + '<br />' +
                            'Longitude: ' + position.coords.longitude     + '<br />' +
                            '<hr />'      + element.innerHTML;
    }
    
    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }
    
    // Options: throw an error if no update is received every 30 seconds.
    //
    var watchID = navigator.geolocation.watchPosition(onSuccess, onError, { timeout: 30000 });
    

## Exemple complet

    <!DOCTYPE html>
    <html>
      <head>
        <title>Device Properties Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        var watchID = null;
    
        // device APIs are available
        //
        function onDeviceReady() {
            // Throw an error if no update is received every 30 seconds
            var options = { timeout: 30000 };
            watchID = navigator.geolocation.watchPosition(onSuccess, onError, options);
        }
    
        // onSuccess Geolocation
        //
        function onSuccess(position) {
            var element = document.getElementById('geolocation');
            element.innerHTML = 'Latitude: '  + position.coords.latitude      + '<br />' +
                                'Longitude: ' + position.coords.longitude     + '<br />' +
                                '<hr />'      + element.innerHTML;
        }
    
            // onError Callback receives a PositionError object
            //
            function onError(error) {
                alert('code: '    + error.code    + '\n' +
                      'message: ' + error.message + '\n');
            }
    
        </script>
      </head>
      <body>
        <p id="geolocation">Watching geolocation...</p>
      </body>
    </html>


# geolocation.clearWatch

Arrêter d'observer les changements de position de l'appareil référencés par le paramètre `watchID`.

    navigator.geolocation.clearWatch(watchID);
    

## Paramètres

*   **watchID** : l'identifiant de l'intervalle `watchPosition` à effacer. (String)

## Description

La méthode `geolocation.clearWatch` permet de cesser d'observer les modifications apportées à l'emplacement de l'appareil en désactivant l'observateur associé `geolocation.watchPosition` identifié par le `watchID` donné.

## Plates-formes supportées

*   Android
*   BlackBerry WebWorks (OS 5.0 et plus)
*   iOS
*   Paciarelli
*   Windows Phone 7 et 8
*   Windows 8

## Exemple court

    // Options : observer les changements de position, et utiliser
    // la méthode d'acquisition la plus précise disponible.
    //
    var watchID = navigator.geolocation.watchPosition(onSuccess, onError, { enableHighAccuracy: true });
    
    // ...later on...
    
    navigator.geolocation.clearWatch(watchID);
    

## Exemple complet

    <!DOCTYPE html>
    <html>
      <head>
        <title>Device Properties Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        var watchID = null;
    
        // device APIs are available
        //
        function onDeviceReady() {
            // Get the most accurate position updates available on the
            // device.
            var options = { enableHighAccuracy: true };
            watchID = navigator.geolocation.watchPosition(onSuccess, onError, options);
        }
    
        // onSuccess Geolocation
        //
        function onSuccess(position) {
            var element = document.getElementById('geolocation');
            element.innerHTML = 'Latitude: '  + position.coords.latitude      + '<br />' +
                                'Longitude: ' + position.coords.longitude     + '<br />' +
                                '<hr />'      + element.innerHTML;
        }
    
        // clear the watch that was started earlier
        //
        function clearWatch() {
            if (watchID != null) {
                navigator.geolocation.clearWatch(watchID);
                watchID = null;
            }
        }
    
            // onError Callback receives a PositionError object
            //
            function onError(error) {
              alert('code: '    + error.code    + '\n' +
                    'message: ' + error.message + '\n');
            }
    
        </script>
      </head>
      <body>
        <p id="geolocation">Watching geolocation...</p>
            <button onclick="clearWatch();">Clear Watch</button>
      </body>
    </html>


# Coordinates

Un ensemble de propriétés décrivant les coordonnées géographiques d'une position.

## Propriétés

*   **latitude** : latitude en degrés décimaux. *(Number)*

*   **longitude** : longitude en degrés décimaux. *(Number)*

*   **altitude** : hauteur de la position en mètres au-dessus de l'ellipsoïde. *(Number)*

*   **accuracy** : niveau de précision des valeurs de latitude et longitude, en mètres. *(Number)*

*   **altitudeAccuracy** : niveau de précision de la valeur d'altitude, en mètres. *(Number)*

*   **heading** : direction du trajet, indiquée en degrés comptés dans le sens horaire par rapport au vrai Nord. *(Number)*

*   **speed** : vitesse au sol actuelle de l'appareil, indiquée en mètres par seconde. *(Number)*

## Description

L'objet `Coordinates` est attaché à l'objet `Position`, lui-même rendu disponible dans les fonctions callback faisant appel à la position actuelle.

## Plates-formes supportées

*   Android
*   BlackBerry WebWorks (OS 5.0 et plus)
*   iOS
*   Paciarelli
*   Windows Phone 7 et 8
*   Windows 8

## Exemple court

    // onSuccess Callback
    //
    var onSuccess = function(position) {
        alert('Latitude: '          + position.coords.latitude          + '\n' +
              'Longitude: '         + position.coords.longitude         + '\n' +
              'Altitude: '          + position.coords.altitude          + '\n' +
              'Accuracy: '          + position.coords.accuracy          + '\n' +
              'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
              'Heading: '           + position.coords.heading           + '\n' +
              'Speed: '             + position.coords.speed             + '\n' +
              'Timestamp: '         + position.timestamp                + '\n');
    };
    
    // onError Callback
    //
    var onError = function() {
        alert('onError!');
    };
    
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
    

## Exemple complet

    <!DOCTYPE html>
    <html>
      <head>
        <title>Geolocation Position Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            navigator.geolocation.getCurrentPosition(onSuccess, onError);
        }
    
        // Display `Position` properties from the geolocation
        //
        function onSuccess(position) {
            var div = document.getElementById('myDiv');
    
            div.innerHTML = 'Latitude: '             + position.coords.latitude         + '<br/>' +
                            'Longitude: '            + position.coords.longitude        + '<br/>' +
                            'Altitude: '             + position.coords.altitude         + '<br/>' +
                            'Accuracy: '             + position.coords.accuracy         + '<br/>' +
                            'Altitude Accuracy: '    + position.coords.altitudeAccuracy + '<br/>' +
                            'Heading: '              + position.coords.heading          + '<br/>' +
                            'Speed: '                + position.coords.speed            + '<br/>';
        }
    
        // Show an alert if there is a problem getting the geolocation
        //
        function onError() {
            alert('onError!');
        }
    
        </script>
      </head>
      <body>
        <div id="myDiv"></div>
      </body>
    </html>
    

## Particularités d'Android

**altitudeAccuracy** : n'est pas prise en charge par les appareils Android, renvoie alors `null`.


# Position

Contient les coordonnées et l'horodatage de `Position` créés par l'API geolocation.

## Propriétés

*   **coords** : un ensemble de coordonnées géographiques. *(Coordinates)*

*   **timestamp** : horodatage de la création de `coords`. *(Date)*

## Description

L'objet `Position` est créé et peuplé par Cordova, puis retourné à l'utilisateur via une fonction callback.

## Plates-formes supportées

*   Android
*   BlackBerry WebWorks (OS 5.0 et plus)
*   iOS
*   Paciarelli
*   Windows Phone 7 et 8
*   Windows 8

## Exemple court

    // onSuccess Callback
    //
    var onSuccess = function(position) {
        alert('Latitude: '          + position.coords.latitude          + '\n' +
              'Longitude: '         + position.coords.longitude         + '\n' +
              'Altitude: '          + position.coords.altitude          + '\n' +
              'Accuracy: '          + position.coords.accuracy          + '\n' +
              'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
              'Heading: '           + position.coords.heading           + '\n' +
              'Speed: '             + position.coords.speed             + '\n' +
              'Timestamp: '         + position.timestamp                + '\n');
    };
    
    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }
    
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
    

## Exemple complet

    <!DOCTYPE html>
    <html>
      <head>
        <title>Device Properties Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            navigator.geolocation.getCurrentPosition(onSuccess, onError);
        }
    
        // onSuccess Geolocation
        //
        function onSuccess(position) {
            var element = document.getElementById('geolocation');
            element.innerHTML = 'Latitude: '          + position.coords.latitude         + '<br />' +
                                'Longitude: '         + position.coords.longitude        + '<br />' +
                                'Altitude: '          + position.coords.altitude         + '<br />' +
                                'Accuracy: '          + position.coords.accuracy         + '<br />' +
                                'Altitude Accuracy: ' + position.coords.altitudeAccuracy + '<br />' +
                                'Heading: '           + position.coords.heading          + '<br />' +
                                'Speed: '             + position.coords.speed            + '<br />' +
                                'Timestamp: '         + position.timestamp               + '<br />';
        }
    
            // onError Callback receives a PositionError object
            //
            function onError(error) {
                alert('code: '    + error.code    + '\n' +
                      'message: ' + error.message + '\n');
            }
    
        </script>
      </head>
      <body>
        <p id="geolocation">Finding geolocation...</p>
      </body>
    </html>


# PositionError

Un objet `PositionError` est passé à la fonction callback `geolocationError` lorsqu'une erreur survient.

## Propriétés

*   **code** : l'un des codes d'erreur prédéfinis énumérés ci-dessous.

*   **message** : un message d'erreur détaillant l'erreur rencontrée.

## Constantes

*   `PositionError.PERMISSION_DENIED`
*   `PositionError.POSITION_UNAVAILABLE`
*   `PositionError.TIMEOUT`

## Description

L'objet `PositionError` est passé à la fonction callback `geolocationError` lorsqu'une erreur de géolocalisation se produit.

### `PositionError.PERMISSION_DENIED`

Code renvoyé lorsque l'utilisateur n'autorise pas de votre application à récupérer des informations de position. Varie selon les plates-formes.

### `PositionError.POSITION_UNAVAILABLE`

Renvoyé lorsque l'appareil n'est pas en mesure de récupérer une position. En général cela signifie que celui-ci n'est connecté à aucun réseau et/ou ne peut pas obtenir un correctif satellite.

### `PositionError.TIMEOUT`

Retourné lorsque l'appareil n'est pas en mesure de récupérer une position dans le délai précisé par la propriété `timeout` de l'objet `geolocationOptions` associé. Dans le cas de l'utilisation de `geolocation.watchPosition`, cette erreur pourrait être transmise à la fonction callback `geolocationError` chaque `timeout` millisecondes.


# geolocationSuccess

Fonction callback s'exécutant lorsqu'une position géolocalisée est disponible (via un appel à `geolocation.getCurrentPosition`), ou lorsque la position change (via un appel à `geolocation.watchPosition`).

    function(position) {
        // Do something
    }
    

## Paramètres

*   **position** : la position géolocalisée retournée par l'appareil. *(Position)*

## Exemple

    function geolocationSuccess(position) {
        alert('Latitude: '          + position.coords.latitude          + '\n' +
              'Longitude: '         + position.coords.longitude         + '\n' +
              'Altitude: '          + position.coords.altitude          + '\n' +
              'Accuracy: '          + position.coords.accuracy          + '\n' +
              'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
              'Heading: '           + position.coords.heading           + '\n' +
              'Speed: '             + position.coords.speed             + '\n' +
              'Timestamp: '         + position.timestamp                + '\n');
    }


# geolocationError

Fonction callback s'exécutant si une erreur se produit lors de l'usage des méthodes de géolocalisation.

    function(error) {
        // Handle the error
    }
    

## Paramètres

*   **error** : l'erreur renvoyée par l'appareil. *(PositionError)*


# geolocationOptions

Paramètres optionnels permettant la personnalisation de la récupération d'une `Position` géolocalisée.

    { maximumAge: 3000, timeout: 5000, enableHighAccuracy: true };
    

## Options

*   **enableHighAccuracy** : indique que l'application nécessite les meilleurs résultats possibles. Par défaut, l'appareil tente de récupérer une `Position` à l'aide de méthodes basées sur le réseau. Définir cette propriété à `true` demande à Cordova d'utiliser des méthodes plus précises, telles que la localisation par satellite. *(Boolean)*

*   **timeout** : la durée maximale (en millisecondes) allouée depuis l'appel à `geolocation.getCurrentPosition` ou `geolocation.watchPosition` jusqu'à ce que la fonction callback `geolocationSuccess` correspondante soit exécutée. Si `geolocationSuccess` n'est pas appelée dans ce délai, le code d'erreur `PositionError.TIMEOUT` est transmis à la fonction callback `geolocationError`. (Notez que, dans le cas de `geolocation.watchPosition`, la fonction callback `geolocationError` pourrait être appelée à un intervalle régulier de `timeout` millisecondes !) *(Number)*

*   **maximumAge** : accepter une position mise en cache dont l'âge ne dépasse pas le délai spécifié en millisecondes. *(Number)*

## Particularités d'Android

Les émulateurs d'Android 2.x ne retournent aucun résultat de géolocalisation à moins que l'option `enableHighAccuracy` ne soit réglée sur `true`.
