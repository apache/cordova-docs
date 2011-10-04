connection.type
===================

Comprueba la conexión activa que se esta usando.

Descripción
-----------

Estos atributos son una forma rápida de conocer la conectividad del dispositivo, y su estado.


Plataformas Soportadas
----------------------

- iOS
- Android
- BlackBerry WebWorks (OS 5.0 y superior)

Ejemplo Rápido
--------------

    function checkConnection() {
        var networkState = navigator.network.connection.type;
        
        var states = {};
        states[Connection.UNKNOWN]	= 'Conexión desconocida';
        states[Connection.ETHERNET]	= 'Conexión ethernet';
        states[Connection.WIFI]   	= 'Conexión WiFi';
        states[Connection.CELL_2G]	= 'Conexión movil 2G';
        states[Connection.CELL_3G]	= 'Conexión movil 3G';
        states[Connection.CELL_4G]	= 'Conexión movil 4G';
        states[Connection.NONE]   	= 'Sin conexión';
    
        alert('Tipo de conexión: ' + states[networkState]);
    }
    
    checkConnection();


Ejemplo Completo
----------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Ejemplo de Connection</title>
        
        <script type="text/javascript" charset="utf-8" src="phonegap.js"></script>
        <script type="text/javascript" charset="utf-8">
            
        // Espera a que PhoneGap se inicie
        // 
        document.addEventListener("deviceready", onDeviceReady, false);
        
        // PhoneGap esta listo, y ahora se pueden hacer llamadas a los métodos
        //
        function onDeviceReady() {
            checkConnection();
        }
        
	    function checkConnection() {
	        var networkState = navigator.network.connection.type;

	        var states = {};
		states[Connection.UNKNOWN]	= 'Conexión desconocida';
		states[Connection.ETHERNET]	= 'Conexión ethernet';
		states[Connection.WIFI]   	= 'Conexión WiFi';
		states[Connection.CELL_2G]	= 'Conexión movil 2G';
		states[Connection.CELL_3G]	= 'Conexión movil 3G';
		states[Connection.CELL_4G]	= 'Conexión movil 4G';
		states[Connection.NONE]   	= 'Sin conexión';

	        alert('Tipo de conexión: ' + states[networkState]);
	    }
        
        </script>
      </head>
      <body>
        <p>Un mensaje te notificara el tipo de conexión.</p>
      </body>
    </html>
