CaptureErrorCB
==============

> Appelé lorsqu'une erreur survient pendant une opération de capture.

    function captureError( CaptureError error ) { ... };

Description
-----------

Cette fonction de callback est appelée si l'on tente de lancer une opération de capture alors que l'application de capture est déjà utilisée, si une erreur survient aucours de la capture, ou si l'opération à été arrêtée par l'utilisateur avant qu'une capture n'ait eu lieu.

Cette fonction de callback est appelée avec en argument un objet CaptureError contenant le code d'erreur approprié.

Exemple rapide
--------------

    // Fonction de callback en erreur
    var captureError = function(error) {
        navigator.notification.alert("Code d'erreur : " + error.code, null, 'Capture Error');
    };
