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

# PositionError

Un objet `PositionError` est passé à la fonction callback `geolocationError` lorsqu'une erreur survient.

## Propriétés

*   **code** : l'un des codes d'erreur prédéfinis énumérés ci-dessous.

*   **message** : un message d'erreur détaillant l'erreur rencontrée.

## Constantes

*   `PositionError.PERMISSION_DENIED`
*   `PositionError.POSITION_UNAVAILABLE`
*   `PositionError.TIMEOUT`

## Description

Le `PositionError` objet est passé à la `geolocationError` fonction de rappel lorsqu'une erreur se produit avec géolocalisation. Il dispose des codes d'erreur suivants :

*   `PositionError.PERMISSION_DENIED`: Retourné lorsque les utilisateurs ne permettent pas l'application extraire des informations de position. Cela dépend de la plate-forme.

*   `PositionError.POSITION_UNAVAILABLE`: Retourné lorsque le périphérique n'est pas en mesure de récupérer une position. En général, cela signifie que l'appareil n'est pas connecté à un réseau ou ne peut pas obtenir un correctif de satellite.

*   `PositionError.TIMEOUT`: Retourné lorsque le périphérique n'est pas en mesure de récupérer une position dans le délai précisé par le `timeout` inclus dans `geolocationOptions` . Lorsqu'il est utilisé avec `geolocation.watchPosition` , cette erreur pourrait être transmise à plusieurs reprises à la `geolocationError` rappel chaque `timeout` millisecondes.