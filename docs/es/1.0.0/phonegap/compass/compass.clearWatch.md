compass.clearWatch
========================

Detiene el visor de dirección con ese ID.

    navigator.compass.clearWatch(watchID);

- __watchID__: El ID retornado por `compass.watchHeading`.

Plataformas Soportadas
----------------------

- Android
- iPhone

Ejemplo Rápido
--------------

    var watchID = navigator.compass.watchHeading(onSuccess, onError, options);
    
    // ... mas tarde ...
    
    navigator.compass.clearWatch(watchID);
    
Ejemplo Completo
----------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Ejemplo de Compass</title>

        <script type="text/javascript" charset="utf-8" src="phonegap.js"></script>
        <script type="text/javascript" charset="utf-8">

        // El ID que referencia al visor
        var watchID = null;
        
        // Espera a que PhoneGap se inicie
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // PhoneGap esta listo
        //
        function onDeviceReady() {
            startWatch();
        }

        // Empieza a observar el compás
        //
        function startWatch() {
            
            // Actualiza cada 3 segundos
            var options = { frequency: 3000 };
            
            watchID = navigator.compass.watchHeading(onSuccess, onError, options);
        }
        
        // Deja de observar el compás
        //
        function stopWatch() {
            if (watchID) {
                navigator.compass.clearWatch(watchID);
                watchID = null;
            }
        }
        
        // onSuccess: Obtiene el resultado
        //
        function onSuccess(heading) {
            var element = document.getElementById('heading');
            element.innerHTML = 'Heading: ' + heading;
        }

        // onError: Ocurrió un error
        //
        function onError() {
            alert('onError!');
        }

        </script>
      </head>
      <body>
        <div id="heading">Esperando la dirección...</div>
        <button onclick="startWatch();">Empezar a observar</button>
        <button onclick="stopWatch();">Dejar de observar</button>
      </body>
    </html>
