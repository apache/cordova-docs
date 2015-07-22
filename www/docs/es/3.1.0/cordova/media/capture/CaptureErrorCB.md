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

# CaptureErrorCB

> Se invoca si se produce un error durante una operación de captura de los medios de comunicación.

    function captureError( CaptureError error ) { ... };
    

## Descripción

Esta función se ejecuta si se produce un error al intentar lanzar un medio de captura de operación. Escenarios de fallas incluyen cuando la solicitud de captura está ocupada, una operación de captura ya está llevando a cabo o el usuario cancela la operación antes de que los archivos de los medios de comunicación son capturados.

Esta función se ejecuta con un `CaptureError` objeto que contiene un error apropiado`code`.

## Ejemplo rápido

    // capture error callback
    var captureError = function(error) {
        navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
    };