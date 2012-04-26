---
license: Licensed to the Apache Software Foundation (ASF) under one
         or more contributor license agreements.  See the NOTICE file
         distributed with this work for additional information
         regarding copyright ownership.  The ASF licenses this file
         to you under the Apache License, Version 2.0 (the
         "License"); you may not use this file except in compliance
         with the License.  You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0

         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
         under the License.
---

Media
=====

> El objeto `Media` te permite grabar y reproducir ficheros de audio en un dispositivo. 

    var media = new Media(src, mediaSuccess, [mediaError], [mediaStatus]);


Nota: La implementación actual no se adhiere a las especificaciones de la W3C, en una futura implementación se seguirán las ultimas especificaciones de la W3C, y esta API se volverá obsoleta.

Argumentos
----------

- __src__: una URI hacia el contenido de audio. _(DOMString)_
- __mediaSuccess__: (Opcional) La función 'callback' que sera llamada después de que se halla completado la tarea  de detener/reproducción/grabación. _(Function)_
- __mediaError__: (Opcional) Una función 'callback' que sera llamada si hay algún error. _(Function)_
- __mediaStatus__: (Opcional) Una función 'callback' que sera llamada para indicar cambios en el estado. _(Function)_

Métodos
-------

- media.getCurrentPosition: Retorna la actual posición en el fichero de audio.
- media.getDuration: Retorna la duración del fichero de audio.
- media.play: Reproduce o pausa la reproducción del fichero de audio.
- media.pause: Pausa la reproducción del fichero de audio.
- media.release: Libera el audio y los recursos ocupados en el sistema.
- media.seekTo: Mueve la posición en el fichero de audio.
- media.startRecord: Empieza a grabar el fichero de audio.
- media.stopRecord: Para de grabar el fichero de audio.
- media.stop: Para de reproducir el fichero de audio.

Argumentos (Solo lectura)
-------------------------

- ___position__: La posición actual en la reproducción (en segundos).  No se actualiza durante la reproducción, necesitas llamar a `getCurrentPosition` para actualizar este atributo.
- ___duration__: La duración del audio (en segundos).

Plataformas Soportadas
----------------------

- Android
- iOS

