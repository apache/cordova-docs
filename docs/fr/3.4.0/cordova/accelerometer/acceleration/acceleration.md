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

# Accélération

Contient les données `Accelerometer` capturées à un moment donné dans le temps.

## Propriétés

*   **x**: Valeur de l'accélération sur l'axe des x. (en m/s^2) *(Number)*
*   **y**: Valeur de l'accélération sur l'axe des y. (en m/s^2) *(Number)*
*   **y**: Valeur de l'accélération sur l'axe des z. (en m/s^2) *(Number)*
*   **timestamp**: Date de création en millisecondes. *(DOMTimeStamp)*

## Description

Un objet de type `Acceleration` est retourné par chacune des méthodes de l'API `Accelerometer`. Les valeurs d'accélération tiennent compte de l'effet de gravité (9,81 m/s^2), ce qui signifie que *x*, *y*, et *z* vaudraient respectivement ``, ``, et `9.81` si l'appareil reposait à plat, son écran orienté vers le haut.

## Plates-formes supportées

*   Android
*   BlackBerry WebWorks (OS 5.0 et plus)
*   iOS
*   Tizen
*   Windows Phone 7 et 8
*   Windows 8

## Exemple rapide

    function onSuccess(acceleration) {
        alert('Acceleration X: ' + acceleration.x + '\n' +
              'Acceleration Y: ' + acceleration.y + '\n' +
              'Acceleration Z: ' + acceleration.z + '\n' +
              'Timestamp: '      + acceleration.timestamp + '\n');
    };
    
    function onError() {
        alert('onError!');
    };
    
    navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);
    

## Exemple complet

    <!DOCTYPE html>
    <html>
      <head>
        <title>Acceleration Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);
        }
    
        // onSuccess: Get a snapshot of the current acceleration
        //
        function onSuccess(acceleration) {
            alert('Acceleration X: ' + acceleration.x + '\n' +
                  'Acceleration Y: ' + acceleration.y + '\n' +
                  'Acceleration Z: ' + acceleration.z + '\n' +
                  'Timestamp: '      + acceleration.timestamp + '\n');
        }
    
        // onError: Failed to get the acceleration
        //
        function onError() {
            alert('onError!');
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>getCurrentAcceleration</p>
      </body>
    </html>