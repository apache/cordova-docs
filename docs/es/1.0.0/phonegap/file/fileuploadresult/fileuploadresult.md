FileUploadResult
========

El objeto `FileUploadResult` se obtiene por medio de la función 'callback' 'success' del método `FileTransfer.upload`.

Atributos
---------

- __bytesSent:__ El numero de bytes que se transfirió al servidor como parte de la subida. (long)
- __responseCode:__ El código HTTP de respuesta retornado por el servidor. (long)
- __response:__ La respuesta retornada por el servidor. (DOMString)

Descripción
-----------

El objeto `FileUploadResult` se obtiene por medio de la función 'callback' 'success' del método `FileTransfer.upload`.

Peculiaridades iOS 
------------------
- iOS no incluye valores para `responseCode` ni `bytesSent` en el objeto `FileUploadResult`. 

