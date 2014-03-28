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

Paramètres optionnels permettant la personnalisation de la récupération d'une `Position` géolocalisée.

    { maximumAge: 3000, timeout: 5000, enableHighAccuracy: true };
    

## Options

*   **enableHighAccuracy** : indique que l'application nécessite les meilleurs résultats possibles. Par défaut, l'appareil tente de récupérer une `Position` à l'aide de méthodes basées sur le réseau. Définir cette propriété à `true` demande à Cordova d'utiliser des méthodes plus précises, telles que la localisation par satellite. *(Boolean)*

*   **timeout** : la durée maximale (en millisecondes) allouée depuis l'appel à `geolocation.getCurrentPosition` ou `geolocation.watchPosition` jusqu'à ce que la fonction callback `geolocationSuccess` correspondante soit exécutée. Si `geolocationSuccess` n'est pas appelée dans ce délai, le code d'erreur `PositionError.TIMEOUT` est transmis à la fonction callback `geolocationError`. (Notez que, dans le cas de `geolocation.watchPosition`, la fonction callback `geolocationError` pourrait être appelée à un intervalle régulier de `timeout` millisecondes !) *(Number)*

*   **maximumAge** : accepter une position mise en cache dont l'âge ne dépasse pas le délai spécifié en millisecondes. *(Number)*

## Particularités d'Android

Les émulateurs d'Android 2.x ne retournent aucun résultat de géolocalisation à moins que l'option `enableHighAccuracy` ne soit réglée sur `true`.