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

# compass.getCurrentHeading

Téléchargez la direction courante de la boussole.

    navigator.compass.getCurrentHeading(<a href="parameters/compassSuccess.html">compassSuccess</a>, <a href="parameters/compassError.html">compassError</a>, <a href="parameters/compassOptions.html">compassOptions</a>);
    

## Description

La boussole est un capteur qui détecte la direction ou la position vers laquelle l'appareil pointe, généralement depuis le haut de l'appareil. Il mesure la direction en degrés de 0 à 359.99, où 0 indique le Nord.

Les informations de la boussole sont retournées via un objet `CompassHeading` utilisant la fonction de callback `<a href="parameters/compassSuccess.html">compassSuccess</a>`.

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
        alert('<a href="<a href="parameters/compassError.html">compassError</a>/<a href="parameters/compassError.html">compassError</a>.html">CompassError</a>: ' + error.code);
    };
    
    navigator.compass.getCurrentHeading(onSuccess, onError);
    

## Exemple complet

    <!DOCTYPE html>
    <html>
      <head>
        <title>Compass <a href="../storage/storage.opendatabase.html">Example</a></title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>("<a href="../events/events.deviceready.html">deviceready</a>", onDeviceReady, false);
    
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
        function onError(<a href="parameters/compassError.html">compassError</a>) {
            alert('Compass Error: ' + <a href="parameters/compassError.html">compassError</a>.code);
        }
    
        </script>
      </head>
      <body>
        <h1><a href="../storage/storage.opendatabase.html">Example</a></h1>
        <p>getCurrentHeading</p>
      </body>
    </html>