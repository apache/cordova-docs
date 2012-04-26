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

PositionError
=============

Un objet `PositionError` est passé à la fonction de callback `geolocationError` lorsqu'une erreur survient.

Propriétés
----------

- __code:__ Un des codes d'erreur prédéfinis listés ci-dessous.
- __message:__ Un message explicitant l'erreur survenue.

Constantes
----------

- `PositionError.PERMISSION_DENIED`
- `PositionError.POSITION_UNAVAILABLE`
- `PositionError.TIMEOUT`

Description
-----------

L'objet `PositionError` est renvoyé à l'utilisateur en tant qu'argument d'appel de la fonction de callback `geolocationError` lorsqu'une erreur survient.

