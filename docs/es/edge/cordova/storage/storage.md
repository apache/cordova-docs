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

# Almacenamiento

> Un Resumen de las opciones de almacenamiento para Córdoba.

Almacenamiento varias APIs están disponibles para aplicaciones de Córdoba. Ver [html5rocks][1]. para una visión más completa y ejemplos.

 [1]: http://www.html5rocks.com/en/features/storage

## LocalStorage

También conocido como *web storage*, *almacenamiento de información simple*, o por su interfaz alternativa de *almacenamiento de las sesiones* , esta API proporciona almacenamiento par clave-valor síncrono y está disponible en implementaciones WebView subyacentes. Consulte [la especificación W3C][2] para más detalles.

 [2]: http://www.w3.org/TR/webstorage/

**Windows Phone 7 chanfle**: notación de puntos es *no* disponible, así que asegúrate de usar `setItem` o `getItem` en lugar de acceder a las teclas directamente desde el objeto de almacenamiento, como en`window.localStorage.someKey`.

## WebSQL

Esta API está disponible en la vista Web subyacente. La [Especificación de base de datos de SQL Web][3] ofrece más tablas de base de datos completa accede a través de consultas SQL.

 [3]: http://dev.w3.org/html5/webdatabase/

WebSQL de la ayuda de las siguientes plataformas:

*   Android
*   BlackBerry 10
*   iOS
*   Tizen

## IndexedDB

Esta API está disponible en la vista Web subyacente. [Indexadas DB][4] ofrece más funciones que LocalStorage pero menos de WebSQL.

 [4]: http://www.w3.org/TR/IndexedDB/

Las siguientes plataformas soportan IndexedDB:

*   Windows Phone 8
*   BlackBerry 10

## Opciones basadas en plugin

Además el almacenamiento que APIs mencionadas anteriormente, el [Archivo API][5] permite a los datos del caché en el sistema de archivos local. Otros [plugins Cordova][6] proporcionan opciones de almacenamiento similares.

 [5]: https://github.com/apache/cordova-plugin-file/blob/master/doc/index.md
 [6]: http://plugins.cordova.io/