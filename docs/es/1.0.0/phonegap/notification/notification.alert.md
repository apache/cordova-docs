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

        <script type="text/javascript" charset="utf-8" src="phonegap.js"></script>
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
