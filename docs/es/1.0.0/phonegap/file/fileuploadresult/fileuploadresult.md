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

