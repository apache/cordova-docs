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

# Metadatos

Una interfaz que proporciona información sobre el estado de un archivo o directorio.

## Propiedades

*   **modificationTime**: el tiempo cuando el archivo o directorio última modificación. *(Fecha)*

## Detalles

El `Metadata` objeto representa la información sobre el estado de un archivo o directorio. Llamando a `DirectoryEntry` o `FileEntry` del objeto `getMetadata()` método da como resultado un `Metadata` instancia.

## Plataformas soportadas

*   Android
*   BlackBerry WebWorks (OS 5.0 y superiores)
*   iOS
*   Windows Phone 7 y 8
*   Windows 8

## Ejemplo rápido

    function win(metadata) {
        console.log("Last Modified: " + metadata.modificationTime);
    }
    
    // Request the metadata object for this entry
    entry.getMetadata(win, null);