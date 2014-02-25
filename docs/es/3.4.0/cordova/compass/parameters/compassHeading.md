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

A `CompassHeading` objeto es devuelto a la `compassSuccess` función de callback.

## Propiedades

*   **magneticHeading**: el rumbo en grados de 0-359.99 en un solo momento. *(Número)*

*   **trueHeading**: el título en relación con el polo norte geográfico en grados 0-359.99 en un solo momento. Un valor negativo indica que no se puede determinar el rumbo verdadero. *(Número)*

*   **headingAccuracy**: la desviación en grados entre el rumbo divulgado y el rumbo verdadero. *(Número)*

*   **timestamp**: el momento en el cual se determinó esta partida. *(milisegundos)*

## Descripción

El `CompassHeading` objeto es devuelto a la `compassSuccess` función de callback.

## Rarezas Android

*   `trueHeading`No es compatible, pero el mismo valor que los informes`magneticHeading`

*   `headingAccuracy`es siempre 0 porque no hay ninguna diferencia entre el `magneticHeading` y`trueHeading`.

## iOS rarezas

*   `trueHeading` is only returned when location services are enabled via `navigator.geolocation.watchLocation()`

*   Para los dispositivos iOS 4 y superiores, factores de rumbo en la orientación actual del dispositivo, no en referencia a su posición absoluta, para aplicaciones que apoya esa orientación.