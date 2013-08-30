---

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

   under the License.
---

# geolocationOptions

Paramètres optionnels pour personnaliser la récupération de la géolocalisation`Position`.

    {maximumAge : 3000, délai d'attente : 5000, enableHighAccuracy : true} ;
    

## Options

*   **enableHighAccuracy**: fournit une indication que l'application doit les meilleurs résultats possibles. Par défaut, l'appareil tente de récupérer un `Position` à l'aide de méthodes basées sur le réseau. Définition de cette propriété `true` indique à l'infrastructure d'utiliser des méthodes plus précises, telles que la localisation par satellite. *(Boolean)*

*   **délai d'attente**: la longueur maximale de temps (en millisecondes) qui peut passer de l'appel à `geolocation.getCurrentPosition` ou `geolocation.watchPosition` jusqu'à ce que le correspondant `geolocationSuccess` rappel s'exécute. Si le `geolocationSuccess` rappel n'est pas appelé dans ce délai, le `geolocationError` rappel est passé un `PositionError.TIMEOUT` code d'erreur. (Notez que lorsqu'il est utilisé en conjonction avec `geolocation.watchPosition` , le `geolocationError` rappel pourrait être appelé sur un intervalle tous `timeout` millisecondes!) *(Nombre)*

*   **maximumAge**: accepter un poste en cache dont l'âge ne dépasse pas le délai en millisecondes. *(Nombre)*

## Quirks Android

Émulateurs Android 2.x ne pas retournent un résultat de géolocalisation, à moins que le `enableHighAccuracy` option est définie sur`true`.