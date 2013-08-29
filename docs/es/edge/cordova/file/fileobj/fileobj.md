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

# Archivo

Este objeto contiene los atributos de un solo archivo.

## Propiedades

*   **nombre**: el nombre del archivo. *(DOMString)*

*   **fullPath**: la ruta de acceso completa del archivo incluyendo el nombre del archivo. *(DOMString)*

*   **tipo**: el tipo mime del archivo. *(DOMString)*

*   **lastModifiedDate**: la última vez que el archivo fue modificado. *(Fecha)*

*   **tamaño**: el tamaño del archivo en bytes. *(largo)*

## Métodos

*   **rebanada**: seleccionar sólo una parte del archivo a leer.

## Detalles

El `File` objeto contiene atributos de un solo archivo. Usted puede obtener una instancia de un `File` objeto llamando a una `FileEntry` del objeto `file()` método.

## Plataformas soportadas

*   Android
*   BlackBerry WebWorks (OS 5.0 y superiores)
*   iOS
*   Windows Phone 7 y 8
*   Windows 8

## rebanada

Devolver un nuevo `File` objeto, para que `FileReader` devuelve sólo la porción especificada del archivo. Para valores negativos `start` o `end` se miden desde el final del archivo. Los índices se colocan en relación con el segmento actual. (Véase el siguiente ejemplo completo).

**Parámetros:**

*   **Inicio**: el índice del primer byte para leer, inclusive.

*   **final**: el índice del byte después de la última a leer.

**Ejemplo rápido**

    var slicedFile = file.slice(10, 30);
    

**Ejemplo completo**

    var slice1 = file.slice(100, 400);
    var slice2 = slice1.slice(20, 35);
    
    var slice3 = file.slice(120, 135);
    // slice2 and slice3 are equivalent.
    

**Plataformas soportadas**

*   Android
*   iOS