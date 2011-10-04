File
====

Este objeto contiene atributos de un archivo o fichero en particular.

Atributos
---------

- __name:__ El nombre del fichero. _(DOMString)_
- __fullPath:__ La ruta completa hacia el fichero, incluyendo el nombre. _(DOMString)_
- __type:__ El tipo 'mime' del fichero. _(DOMString)_
- __lastModifiedDate:__ La ultima fecha de modificación. _(Date)_
- __size:__ El tamaño del fichero en bytes. _(long)_

Detalles
--------

El objeto `File` contiene atributos sobre un fichero en particular. Puedes obtener una instancia de un fichero `File`, llamando al método __file__ de un objeto `FileEntry`.

Plataformas Soportadas
----------------------

- Android
- BlackBerry WebWorks (OS 5.0 y superior)
- iOS
