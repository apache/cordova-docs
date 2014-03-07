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

# MediaFile

> Encapsula las propiedades de un archivo de captura de los medios de comunicación.

## Propiedades

*   **nombre**: el nombre del archivo, sin información de la ruta. (DOMString)

*   **fullPath**: la ruta de acceso completa del archivo, incluyendo el nombre. (DOMString)

*   **tipo**: tipo mime del archivo (DOMString)

*   **lastModifiedDate**: la fecha y hora cuando el archivo se modificó por última vez. (Fecha)

*   **tamaño**: el tamaño del archivo, en bytes. (Número)

## Métodos

*   **MediaFile.getFormatData**: recupera la información del formato del archivo de los medios de comunicación.