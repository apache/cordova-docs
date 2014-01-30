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

V enakomernih presledkih, dobili kompasa naslovom v stopinjah.

    var watchID = navigator.compass.watchHeading(compassSuccess, compassError, [compassOptions]);
    

## Opis

Kompas je senzor, ki zazna smer ali naslovom naprava, ki je poudaril. Ukrepi naslovom v stopinjah od 0 do 359.99.

V `compass.watchHeading` dobi naprave podteme v enakomernih presledkih. Vsakič, ko pridobi naslov, na `headingSuccess` se izvede povratni klic funkcije. Določite interval v milisekundah preko na `frequency` parameter v na `compassOptions` predmeta.

Vrnjeno watch ID sklicuje na intervalu kompasa watch. Watch, ID se lahko uporablja z `compass.clearWatch` da nehajte gledati kompas.

## Podprte platforme

*   Android
*   BlackBerry 10
*   iOS
*   Tizen
*   Windows Phone 7 in 8 (če je na voljo v strojni opremi)
*   Windows 8

## Quick primer

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
    

## Celoten primer

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
    

## iOS Quirks

V iOS `compass.watchHeading` lahko dobite tudi naprave podteme ko spreminja določeno število stopinj. Vsakič, ko spremembe naslova za navedeno število stopinj ali več, na `headingSuccess` povratni klic funkcije izvaja. Določite stopnje spremembe prek na `filter` parameter v na `compassOptions` predmeta. Jasno gledal kot običajno z vrnjeno watch idja v `compass.clearWatch` . Ta funkcionalnost nadomešča prej ločena, iOS-le `watchHeadingFilter` in `clearWatchFilter` funkcije, ki so bili odstranjeni v različici 1,6.

Samo en `watchHeading` lahko v učinek naenkrat v iOS. Če je `watchHeading` uporablja filter, kliče `getCurrentHeading` ali `watchHeading` uporablja obstoječo vrednost filtra določite naslov spremembe. Gledal spremembami naslov s filtrom je bolj učinkovito kot s časovne intervale.