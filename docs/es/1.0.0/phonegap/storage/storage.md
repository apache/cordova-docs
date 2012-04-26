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

Storage
==========

> Proporciona acceso a las opciones de almacenamiento del dispositivo.  

Esta API esta basada en la [W3C Web SQL Database Specification](http://dev.w3.org/html5/webdatabase/) y [W3C Web Storage API Specification](http://dev.w3.org/html5/webstorage/). Algunos dispositivos ya incluyen una implementación de estas especificaciones, en estos dispositivos, se usara la implementación incluida en vez de la implementación PhoneGap. Para los dispositivos que no incluyan de serie soporte de la API de almacenamiento, la implementación PhoneGap debe ser compatible con las especificaciones de la W3C.

Métodos
-------

- openDatabase

Argumentos
----------

- name
- version
- display_name
- size

Objetos
--------

- Database
- SQLTransaction
- SQLResultSet
- SQLResultSetList
- SQLError
- localStorage
