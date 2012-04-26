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

compassOptions
==============

Paramètre facultatif permettant de personnaliser l'exploitation de la boussole.

Options
-------

- __frequency:__ A quelle fréquence en millisecondes récupérer la direction de la boussole. _(Number)_ (Par défaut: 100)
- __filter:__ Le seuil de changement de cap, en degrés, à partir duquel déclencher un appel à la fonction de callback onSuccess de `watchHeadingFilter`. _(Number)_

Singularités Android
--------------------
- `filter` n'est pas supporté.

Singularités Windows Phone 7
----------------------------
- `filter` n'est pas supporté.