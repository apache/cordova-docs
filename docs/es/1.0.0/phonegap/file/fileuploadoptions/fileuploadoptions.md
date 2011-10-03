FileUploadOptions
========

Puede pasarse un objeto `FileUploadOptions` al método `FileTransfer.upload` para indicar parámetros adicionales a la hora de subir el archivo.

Atributos
---------

- __fileKey:__ El nombre del formulario (Elemento form).  Se usara "file" por defecto. (DOMString)
- __fileName:__ El nombre del fichero que desea guardar en el servidor.  Se usara "image.jpg" por defecto. (DOMString)
- __mimeType:__ El tipo 'mime' del fichero que estas subiendo.  Se usara "image/jpeg" por defecto. (DOMString)
- __params:__ Un juego de llaves/valores que se pasara junto a la petición HTTP. (Object)


Descripción
-----------

Puede pasarle un objeto `FileUploadOptions` al método `FileTranfer.upload` para indicar parámetros adicionales a la hora de subir el archivo.
