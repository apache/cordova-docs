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

# en ligne

Cet événement se déclenche lorsqu'une application est en ligne, et l'appareil est connecté à Internet.

    document.addEventListener("online", yourCallbackFunction, false);
    

## Détails

Le `online` événement se déclenche lorsqu'un périphérique non-connecté précédemment reçoit une connexion réseau pour permettre un accès aux applications à Internet. Il s'appuie sur les mêmes informations que l'API de connexion et se déclenche lorsque la valeur de `connection.type` devient`NONE`.

Les applications doivent généralement utiliser `document.addEventListener` pour attacher un écouteur d'événements une fois le `deviceready` événement se déclenche.

## Plates-formes prises en charge

*   Android
*   BlackBerry WebWorks (OS 5.0 et plus)
*   iOS
*   Windows Phone 7 et 8
*   Paciarelli
*   Windows 8

## Petit exemple

    document.addEventListener("online", onOnline, false);
    
    function onOnline() {
        // Handle the online event
    }
    

## Exemple complet

    <!DOCTYPE html>
    <html>
      <head>
        <title>Online Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        function onLoad() {
            document.addEventListener("online", onOnline, false);
            document.addEventListener("deviceready", onDeviceReady, false);
        }
    
        // device APIs are available
        //
        function onDeviceReady() {
        }
    
        // Handle the online event
        //
        function onOnline() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>
    

## iOS Quirks

Durant le démarrage initial, le premier `online` événement (le cas échéant) prend au moins une seconde au feu, avant que `connection.type` est`UNKNOWN`.

## Windows Phone 7 Quirks

Lors de l'exécution dans l'émulateur, le `connection.status` est toujours inconnu, de sorte que cet événement sera *pas* feu.

## Windows Phone 8 Quirks

L'émulateur signale le type de connexion comme `Cellular` , qui ne change pas, donc les événements seront *pas* feu.