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

# compassHeading

Un objet `CompassHeading` est retourné à la fonction de callback `compassSuccess`.

## Propriétés

*   **magneticHeading**: la position en degrés de 0-359,99 à un instant donné. *(Nombre)*

*   **trueHeading**: la position par rapport au pôle Nord géographique en degrés 0-359,99 à un instant donné. Une valeur négative indique que la véritable direction ne peut pas être déterminée. *(Nombre)*

*   **headingAccuracy**: la déviation en degrés entre la direction signalée et la véritable direction. *(Nombre)*

*   **horodatage**: l'heure à laquelle cette direction a été déterminée. *(millisecondes)*

## Description

L'objet `CompassHeading` est retourné à la fonction de callback `compassSuccess`.

## Spécificités Android

*   `trueHeading`n'est pas pris en charge, mais retourne la même valeur que `magneticHeading`

*   `headingAccuracy` est toujours égal à 0 car il n'y a pas de différence entre `magneticHeading` et `trueHeading`.

## Spécificités iOS

*   `trueHeading` is only returned when location services are enabled via `navigator.geolocation.watchLocation()`

*   Pour les appareils sous iOS 4 et suivants, les facteurs de direction de l'orientation actuelle de l'appareil, pas en référence à sa position absolue, pour les applications prenant en charge cette orientation.