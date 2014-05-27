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