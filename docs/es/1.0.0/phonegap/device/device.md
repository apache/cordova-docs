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

Device
======

> El objeto `device` proporciona información sobre el hardware y software del dispositivo.

Atributos
---------

- device.name
- device.phonegap
- device.platform
- device.uuid
- device.version

Ámbito de la variable
---------------------

Desde que `device` fue asignada al objeto `window`, se encuentra en el espacio global.

    // Estas variables apuntan al mismo `device`
    //
    var phoneName = window.device.name;
    var phoneName = device.name;
