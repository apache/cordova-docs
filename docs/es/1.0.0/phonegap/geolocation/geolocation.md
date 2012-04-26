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

Geolocation
===========

> El objeto `geolocation` proporciona acceso al sensor GPS del dispositivo. 

La API Geolocation proporciona información sobre la localización del dispositivo, como la latitud y la longitud. Los orígenes de datos sobre localización pueden ser el Global Position System (GPS) o la localización obtenida por medio de la red, como la dirección IP, RFID, dirección MAC de dispositivos WiFi/Bluetooth, y los IDs de células GSM/CDMA. No hay garantía de que la API retorne la localización actual.

Esta API esta basada en la [W3C Geo location API Specification](http://dev.w3.org/geo/api/spec-source.html). Algunos dispositivos ya incluyen una implementación de esta API. En esos dispositivos se usara la API incluida en vez de la PhoneGap. Para dispositivos que no tienen soporte de geolocalización, La implementación PhoneGap debe ser compatible con las especificaciones W3C.

Métodos
-------

- geolocation.getCurrentPosition
- geolocation.watchPosition
- geolocation.clearWatch


Argumentos
----------

- geolocationSuccess
- geolocationError
- geolocationOptions

Objetos (Solo Lectura)
----------------------

- Position
- PositionError
- Coordinates
