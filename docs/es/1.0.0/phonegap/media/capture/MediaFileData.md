MediaFileData
=============

> Encapsula información sobre el formato del archivo multimedia.

Atributos
---------

- __codecs:__ El formato del fichero de audio o vídeo. (DOMString)
- __bitrate:__ El bitrate medio del contenido.  En el caso de una imagen, este atributo valdrá 0. (Number)
- __height:__ La altura de una imagen o vídeo en píxeles. En el caso de un clip se sonido, este atributo valdrá 0. (Number)
- __width:__ El ancho de una imagen o vídeo en píxeles. En el caso de un clip de sonido, este atributo valdrá 0. (Number)
- __duration:__ La duración del clip de vídeo o sonido en segundos. En el caso de una imagen, este atributo valdrá 0. (Number)

Peculiaridades BlackBerry WebWorks
----------------------------------
No se dispone de ninguna API que proporcione información sobre el formato de los archivos multimedia. Entonces el objeto `MediaFileData` retornado por `MediaFile.getFormatData` tendrán los siguientes valores por defecto.

- __codecs:__ No soportado. siempre retornara null.
- __bitrate:__ No soportado. siempre retornara 0.
- __height:__ No soportado. siempre retornara 0.
- __width:__ No soportado. siempre retornara 0.
- __duration:__ No soportado. siempre retornara 0.

Peculiaridades Android
----------------------
El soporte de atributos de `MediaFileData` es el siguiente:

- __codecs:__ No soportado. siempre retornara null.
- __bitrate:__ No soportado. siempre retornara 0.
- __height:__ Soportado. (Solo ficheros de imagen y vídeo).  
- __width:__ Soportado. (Solo ficheros de imagen y vídeo).
- __duration:__ Soportado. (Solo ficheros de imagen y vídeo).

Peculiaridades iOS
------------------
El soporte de atributos de `MediaFileData` es el siguiente:

- __codecs:__ No soportado. siempre retornara null.
- __bitrate:__ Soportado en iOS4 y solo para audio. siempre retornara 0 en imágenes y vídeos.
- __height:__ Soportado.  (Solo en imágenes y vídeos).  
- __width:__ Soportado.  (Solo en imágenes y vídeos).  
- __duration:__ Soportado.  (Solo en audio y vídeos).  
