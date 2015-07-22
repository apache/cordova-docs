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

Parámetros opcionales para personalizar la recuperación de la geolocalización`Position`.

    {maximumAge: 3000, timeout: 5000, enableHighAccuracy: true};
    

## Opciones

*   **enableHighAccuracy**: proporciona una pista que la aplicación necesita los mejores resultados posibles. De forma predeterminada, el dispositivo intentará recuperar un `Position` usando métodos basados en red. Al establecer esta propiedad en `true` dice el marco a utilizar métodos más precisos, como el posicionamiento satelital. *(Boolean)*

*   **tiempo de espera**: la longitud máxima de tiempo (en milisegundos) que está permitido el paso de la llamada a `geolocation.getCurrentPosition` o `geolocation.watchPosition` hasta el correspondiente `geolocationSuccess` devolución de llamada se ejecuta. Si el `geolocationSuccess` no se invoque "callback" dentro de este tiempo, el `geolocationError` devolución de llamada se pasa un `PositionError.TIMEOUT` código de error. (Tenga en cuenta que cuando se utiliza en conjunción con `geolocation.watchPosition` , el `geolocationError` "callback" podría ser llamado en un intervalo cada `timeout` milisegundos!) *(Número)*

*   **maximumAge**: aceptar un puesto en la memoria caché, cuya edad no es mayor que el tiempo especificado en milisegundos. *(Número)*

## Rarezas Android

Emuladores Android 2.x no devuelva un resultado de geolocalización a menos que el `enableHighAccuracy` opción se establece en`true`.