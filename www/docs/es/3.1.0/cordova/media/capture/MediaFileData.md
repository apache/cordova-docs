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

# MediaFileData

> Encapsula la información de formato de un archivo multimedia.

## Propiedades

*   **codecs**: el actual formato de los contenidos de audio y video. (DOMString)

*   **bitrate**: el bitrate promedio del contenido. El valor es cero para las imágenes. (Número)

*   **altura**: la altura de la imagen o vídeo en píxeles. El valor es cero para los clips de audio. (Número)

*   **ancho**: el ancho de la imagen o vídeo en píxeles. El valor es cero para los clips de audio. (Número)

*   **duración**: la longitud del clip de vídeo o de sonido en segundos. El valor es cero para las imágenes. (Número)

## BlackBerry WebWorks rarezas

Ninguna API proporciona información de formato para archivos de medios, así que el `MediaFileData` objeto devuelto por `MediaFile.getFormatData` cuenta con los siguientes valores predeterminados:

*   **codecs**: no soportado y devuelve`null`.

*   **bitrate**: no soportado y devuelve el valor cero.

*   **altura**: no soportado y devuelve el valor cero.

*   **anchura**: no soportado y devuelve el valor cero.

*   **duración**: no soportado y devuelve el valor cero.

## Rarezas Android

Es compatible con los siguientes `MediaFileData` Propiedades:

*   **codecs**: no soportado y devuelve`null`.

*   **bitrate**: no soportado y devuelve el valor cero.

*   **altura**: apoyado: sólo los archivos de imagen y video.

*   **anchura**: admite: sólo los archivos de imagen y video.

*   **duración**: apoyado: archivos audio y video.

## iOS rarezas

Es compatible con los siguientes `MediaFileData` Propiedades:

*   **codecs**: no soportado y devuelve`null`.

*   **bitrate**: compatible con iOS4 dispositivos de audio solamente. Devuelve cero para imágenes y vídeos.

*   **altura**: apoyado: sólo los archivos de imagen y video.

*   **anchura**: admite: sólo los archivos de imagen y video.

*   **duración**: apoyado: archivos audio y video.