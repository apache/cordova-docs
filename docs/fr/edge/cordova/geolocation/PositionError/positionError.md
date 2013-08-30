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

A `PositionError` objet est passé à la `geolocationError` rappel lorsqu'une erreur survient.

## Propriétés

*   **code**: l'un des codes d'erreur prédéfinis énumérés ci-dessous.

*   **message**: message d'erreur décrivant les détails de l'erreur rencontrée.

## Constantes

*   `PositionError.PERMISSION_DENIED`
*   `PositionError.POSITION_UNAVAILABLE`
*   `PositionError.TIMEOUT`

## Description

Le `PositionError` objet est passé à la `geolocationError` fonction de rappel lorsqu'une erreur se produit avec géolocalisation.

### `PositionError.PERMISSION_DENIED`

Retourné lorsque l'utilisateur n'autorise pas de votre application extraire des informations de position. Cela dépend de la plate-forme.

### `PositionError.POSITION_UNAVAILABLE`

Retourné lorsque le périphérique n'est pas en mesure de récupérer une position. En général cela signifie que l'appareil n'a aucune connectivité réseau et/ou ne peut pas obtenir un correctif de satellite.

### `PositionError.TIMEOUT`

Retourné lorsque le périphérique n'est pas en mesure de récupérer une position dans le délai précisé dans la `geolocationOptions` ' `timeout` propriété. Lorsqu'il est utilisé avec `geolocation.watchPosition` , cette erreur pourrait être transmise à la `geolocationError` rappel chaque `timeout` millisecondes.