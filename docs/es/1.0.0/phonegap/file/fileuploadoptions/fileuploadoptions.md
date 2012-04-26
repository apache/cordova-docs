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
