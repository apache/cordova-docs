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

A `PositionError` objeto se pasa a la `geolocationError` devolución de llamada cuando se produce un error.

## Propiedades

*   **código**: uno de los códigos de error predefinido enumerados a continuación.

*   **mensaje**: mensaje de Error que describe los detalles del error encontrado.

## Constantes

*   `PositionError.PERMISSION_DENIED`
*   `PositionError.POSITION_UNAVAILABLE`
*   `PositionError.TIMEOUT`

## Descripción

El `PositionError` objeto se pasa a la `geolocationError` función de devolución de llamada cuando se produce un error con geolocalización.

### `PositionError.PERMISSION_DENIED`

Regresó cuando el usuario no permite su aplicación recuperar información de la posición. Esto depende de la plataforma.

### `PositionError.POSITION_UNAVAILABLE`

Regresó cuando el dispositivo es capaz de recuperar una posición. En general esto significa que el dispositivo no tiene ninguna conectividad de red o no puede obtener una solución vía satélite.

### `PositionError.TIMEOUT`

Cuando el dispositivo es capaz de recuperar una posición dentro del tiempo especificado en el `geolocationOptions` ' `timeout` propiedad. Cuando se utiliza con `geolocation.watchPosition` , este error se podría pasar a la `geolocationError` "callback" cada `timeout` milisegundos.