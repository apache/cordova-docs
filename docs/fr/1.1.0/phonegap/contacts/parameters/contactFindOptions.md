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

Paramètre optionnel de la méthode `contacts.find`.  Utiliser ce paramètre pour filtrer les contacts à récupérer de la base de contacts.

    { 
		filter: "",
		multiple: true,
	};

Options
-------

- __filter:__ La chaîne de caractères utilisée pour filtrer les contacts. _(DOMString)_ (Default: "")
- __multiple:__ Indique si la recherche doit retourner plusieurs contacts. _(Boolean)_ (Default: false)

