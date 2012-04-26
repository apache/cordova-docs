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

contactFindOptions
==================

Argumento opcional del método `contacts.find`. Usa este argumento para filtrar los contactos retornados de la base de datos de contactos.

    { 
	filter: "",
	multiple: true,
        };

Opciones
--------

- __filter:__ Esta string de búsqueda se usara para filtrar contactos. _(DOMString)_ (Por defecto: "")
- __multiple:__ Indica si se debe retornar múltiples contactos. _(Boolean)_ (Por defecto: false)

