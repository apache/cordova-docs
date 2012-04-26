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

MediaError
==========

Cuando ocurra un error, un objeto `MediaError` se le pasara a la función 'callback' `mediaError`.

Atributos
---------

- __code:__ Uno de los códigos de error predefinidos en la lista inferior.
- __message:__ Mensaje de error describiendo el problema.

Constantes
----------

- `MediaError.MEDIA_ERR_ABORTED`
- `MediaError.MEDIA_ERR_NETWORK`
- `MediaError.MEDIA_ERR_DECODE`
- `MediaError.MEDIA_ERR_NONE_SUPPORTED`


Descripción
-----------

Cuando ocurra un error, un objeto `MediaError` se le pasara a la función 'callback' `mediaError`.

