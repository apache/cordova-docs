CaptureErrorCB
==============

> Llamada si ocurre un error durante la captura.

    function captureError( CaptureError error ) { ... };

Descripción
-----------

Esta función sera llamada si ocurre un error mientras se intenta lanzar la aplicación de captura y esta estuviera ocupada, si no pudiera capturar por algún problema, o si la operación fuera cancelada por el usuario sin capturar nada.

Se le pasara un objeto `CaptureError` que contiene el código de error especifico.

Ejemplo Rápido
---------------

    // Función 'callback' de error
    var captureError = function(error) {
        navigator.notification.alert('Código de error: ' + error.code, null, 'Error de captura');
    };
