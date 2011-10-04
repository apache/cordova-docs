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

        <script type="text/javascript" charset="utf-8" src="phonegap.js"></script>
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
