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

notification.alert
==================

Muestra una alerta personalizada o un cuadro de dialogo.

    navigator.notification.alert(message, alertCallback, [title], [buttonName])

- __message:__ El mensaje de texto (`String`)
- __alertCallback:__ Función 'callback' a llamar cuando el cuadro de dialogo sea cerrado. (`Function`)
- __title:__ Titulo de la ventana del cuadro de dialogo (`String`) (Opcional, por defecto: "Alert")
- __buttonName:__ Titulo del botón (`String`) (Opcional, por defecto: "OK")
    
Descripción
-----------

La mayoría de implementaciones PhoneGap usan un cuadro de dialogo nativo para esta función. En cambio, algunas plataformas simplemente usan la función `alert` del navegador, que normalmente es menos customizable.

Plataformas Soportadas
----------------------

- Android
- BlackBerry (OS 4.6)
- BlackBerry WebWorks (OS 5.0 y superior)
- iPhone

Ejemplo Rápido
--------------

    // Android / BlackBerry WebWorks (OS 5.0 y superior) / iPhone
    //
    function alertDismissed() {
        // hacer algo
    }

    navigator.notification.alert(
        'Eres el ganador!',     // mensaje (message)
        alertDismissed,         // función 'callback' (alertCallback)
        'Game Over',            // titulo (title)
        'Cerrar'                // nombre del botón (buttonName)
    );

    // BlackBerry (OS 4.6) / webOS
    //
    navigator.notification.alert('Eres el ganador!');
        
Ejemplo Completo
----------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Ejemplo de Notification</title>

        <script type="text/javascript" charset="utf-8" src="phonegap-1.0.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Espere a que PhoneGap inicie
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // PhoneGap esta listo
        //
        function onDeviceReady() {
            // vacio
        }
    
        // alerta cerrada
	    function alertDismissed() {
	        // hacer algo aquí
	    }

        // Muestra un cuadro de dialogo personalizado
        //
        function showAlert() {
	    navigator.notification.alert(
		'Eres el ganador!',     // mensaje (message)
		alertDismissed,         // función 'callback' (alertCallback)
		'Game Over',            // titulo (title)
		'Cerrar'                // nombre del botón (buttonName)
	    );
        }
    
        </script>
      </head>
      <body>
        <p><a href="#" onclick="showAlert(); return false;">Mostrar cuadro de dialogo</a></p>
      </body>
    </html>
