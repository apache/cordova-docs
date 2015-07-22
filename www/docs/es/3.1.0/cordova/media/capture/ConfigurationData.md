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

# ConfigurationData

> Encapsula un conjunto de parámetros de captura de los medios de comunicación un dispositivo compatible.

## Descripción

Describe los modos de captura de los medios de comunicación soportados por el dispositivo. Los datos de configuración incluyen el tipo MIME y captura de dimensiones para captura de vídeo o imagen.

Los tipos MIME deben adherirse a [RFC2046][1]. Ejemplos:

 [1]: http://www.ietf.org/rfc/rfc2046.txt

*   `video/3gpp`
*   `video/quicktime`
*   `image/jpeg`
*   `audio/amr`
*   `audio/wav`

## Propiedades

*   **tipo**: cadena codificada en el ASCII en minúsculas que representa el tipo de medios de comunicación. (DOMString)

*   **altura**: la altura de la imagen o vídeo en píxeles. El valor es cero para clips de sonido. (Número)

*   **ancho**: el ancho de la imagen o vídeo en píxeles. El valor es cero para clips de sonido. (Número)

## Ejemplo rápido

    // retrieve supported image modes
    var imageModes = navigator.device.capture.supportedImageModes;
    
    // Select mode that has the highest horizontal resolution
    var width = 0;
    var selectedmode;
    for each (var mode in imageModes) {
        if (mode.width > width) {
            width = mode.width;
            selectedmode = mode;
        }
    }
    

No compatible con cualquier plataforma. Todas las matrices de datos configuración están vacías.