notification.beep
=================

El dispositivo reproducirá un alerta sonora (beep).

    navigator.notification.beep(times);

- __times:__ El numero de veces a repetir el beep (`Number`)

Plataformas Soportadas
-----------------------

- Android
- BlackBerry (OS 4.6)
- BlackBerry WebWorks (OS 5.0 y superior)
- iPhone

Ejemplo Rápido
--------------

    // Sonara dos veces!
    navigator.notification.beep(2);

Ejemplo Completo
----------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Ejemplo de Notification</title>

        <script type="text/javascript" charset="utf-8" src="phonegap.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Espere a que PhoneGap se inicie
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // PhoneGap esta listo
        //
        function onDeviceReady() {
            // vacio
        }

        // Muestra un cuadro de dialogo personalizado.
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

Peculiaridades Android
----------------------

- Android reproduce por defecto el "Tono de notificación" especificado en la configuración "Sonido y Pantalla".

Peculiaridades iPhone
---------------------

- Ignora el argumento __times__.
- No existe una API para reproducir beep nativamente en iPhone.
  - PhoneGap implementa el beep reproduciendo un fichero de audio por medio de la API Media.
  - El usuario debe proporcionar un fichero con el tono beep deseado.
  - Este fichero debe ser menor de 30 segundos, que este localizado en la raíz www/ y debe ser llamado `beep.wav`. 
