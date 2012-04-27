---
license: Licensed to the Apache Software Foundation (ASF) under one
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

notification.vibrate
====================

Hace vibrar el dispositivo la cantidad de tiempo indicada.

    navigator.notification.vibrate(time)

- __time:__ Cantidad de milisegundos que el dispositivo vibrara. 1000 milisegundos es igual a 1 segundo (`Number`)

Plataformas Soportadas
----------------------

- Android
- BlackBerry (OS 4.6)
- BlackBerry WebWorks (OS 5.0 y superior)
- iPhone

Ejemplo Rápido
--------------

    // Vibra 2,5 segundos
    //
    navigator.notification.vibrate(2500);

Ejemplo Completo
----------------
    
    <!DOCTYPE html>
    <html>
      <head>
        <title>Ejemplo de Notification</title>

        <script type="text/javascript" charset="utf-8" src="phonegap-1.0.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Espera a que PhoneGap se inicie
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // PhoneGap esta listo
        //
        function onDeviceReady() {
            // Vacio
        }
    
        // Muestra una alerta personalizada
        //
        function showAlert() {
		    navigator.notification.alert(
			'Eres el ganador!',     // mensaje (message)
			'Game Over',            // titulo (title)
			'Cerrar'                // nombre del botón (buttonName)
		    );
        }
    
        // Reproduce tres beeps
        //
        function playBeep() {
            navigator.notification.beep(3);
        }
    
        // Vibra dos segundos
        //
        function vibrate() {
            navigator.notification.vibrate(2000);
        }

        </script>
      </head>
      <body>
        <p><a href="#" onclick="showAlert(); return false;">Mostrar cuadro de dialogo</a></p>
        <p><a href="#" onclick="playBeep(); return false;">Reproducir beep</a></p>
        <p><a href="#" onclick="vibrate(); return false;">Vibrar</a></p>
      </body>
    </html>

Peculiaridades iPhone
---------------------

- __time:__ Ignora el tiempo y vibra siempre un tiempo predefinido.

        navigator.notification.vibrate();
        navigator.notification.vibrate(2500);   // el valor '2500' sera ignorado
