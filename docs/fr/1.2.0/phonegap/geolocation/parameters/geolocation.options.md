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

geolocationOptions
==================

L'objet `geolocationOptions` contient un ensemble de paramètres optionnels permettant de personnaliser la récupération de la géolocalisation.

    { maximumAge: 3000, timeout: 5000, enableHighAccuracy: true };

Options
-------

- __frequency:__ Fréquence de récupération de la position, en millisecondes. Cette option ne fait pas partie de la spécification W3C et sera supprimée dans le futur. Utiliser maximumAge à la place. _(Number)_ (Par défaut : 10000)
- __enableHighAccuracy:__ Indique le fait que l'application souhaite recevoir les résultats les plus précis possible. _(Boolean)_
- __timeout:__ Le délai maximal, en millisecondes, autorisé entre un appel à `geolocation.getCurrentPosition` ou `geolocation.watchPosition` et l'appel à la fonction de callback `geolocationSuccess` qui lui est associé. _(Number)_
- __maximumAge:__ Ancienneté maximale, en millisecondes, d'une position pour qu'elle soit acceptée en cache. _(Number)_

Singularités Android
--------------------

Les simulateurs Android 2.x ne renverront pas de géolocalisation à moins que l'option `enableHighAccuracy` ne soit valorisée à true.

    { enableHighAccuracy: true }

