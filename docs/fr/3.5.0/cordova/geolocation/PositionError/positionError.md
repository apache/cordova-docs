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

L'objet `PositionError` est passé à la fonction callback `geolocationError` lorsqu'une erreur de géolocalisation se produit.

### `PositionError.PERMISSION_DENIED`

Code renvoyé lorsque l'utilisateur n'autorise pas de votre application à récupérer des informations de position. Varie selon les plates-formes.

### `PositionError.POSITION_UNAVAILABLE`

Renvoyé lorsque l'appareil n'est pas en mesure de récupérer une position. En général cela signifie que celui-ci n'est connecté à aucun réseau et/ou ne peut pas obtenir un correctif satellite.

### `PositionError.TIMEOUT`

Retourné lorsque l'appareil n'est pas en mesure de récupérer une position dans le délai précisé par la propriété `timeout` de l'objet `geolocationOptions` associé. Dans le cas de l'utilisation de `geolocation.watchPosition`, cette erreur pourrait être transmise à la fonction callback `geolocationError` chaque `timeout` millisecondes.