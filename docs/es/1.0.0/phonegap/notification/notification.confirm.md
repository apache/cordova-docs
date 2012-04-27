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

notification.confirm
====================

Muestra un cuadro de confirmación personalizable.

    navigator.notification.confirm(message, confirmCallback, [title], [buttonLabels])

- __message:__ Mensaje del cuadro de dialogo (`String`)
- __confirmCallback:__ - Función 'callback' a la que se le pasara un numero índice del botón que el usuario presiono (1, 2 o 3). (`Number`)
- __title:__ Titulo del dialogo de confirmación (`String`) (Opcional, por defecto: "Confirm")
- __buttonLabels:__ Strings separadas por comas con las etiquetas de los botones (`String`) (Opcional, por defecto: "OK,Cancel")
    
Descripción
-----------

La función `notification.confirm` muestra un un cuadro de dialogo nativo que es mas customizable que el método `confirm` del navegador.

Plataformas Soportadas
----------------------

- Android
- BlackBerry WebWorks (OS 5.0 y superior)
- iPhone

Ejemplo Rápido
--------------

	// procesa el resultado del cuadro de confirmación
	function onConfirm(button) {
		alert('Has seleccionado el botón ' + button);
	}

    // muestra un cuadro de confirmación mas personalizado
    //
    function showConfirm() {
        navigator.notification.confirm(
		'Eres el ganador!',     // mensaje (message)
		onConfirm,		// función 'callback' a llamar con el índice del botón pulsado (confirmCallback)
		'Game Over',            // titulo (title)
	        'Reiniciar,Salir'       // botones (buttonLabels)
        );
    }
        
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
    
		// procesa el resultado del cuadro de confirmación
		function onConfirm(button) {
			alert('Has pulsado el botón ' + button);
		}

        // Muestra un cuadro de confirmación personalizado
        //
        function showConfirm() {
            navigator.notification.confirm(
		'Eres el ganador!',      // mensaje (message)
		onConfirm,		// función 'callback' a llamar con el índice del botón pulsado (confirmCallback)
		'Game Over',            // titulo (title)
	        'Restart,Exit'          // botones (buttonLabels)
            );
        }
    
        </script>
      </head>
      <body>
        <p><a href="#" onclick="showConfirm(); return false;">Mostrar cuadro de confirmación</a></p>
      </body>
    </html>
