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
