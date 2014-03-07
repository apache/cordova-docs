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

# Actualización de Windows 8

Esta guía le muestra cómo modificar los proyectos de Windows 8 para actualizar desde versiones anteriores de Córdoba. La mayoría de estas instrucciones se aplica a proyectos creados con un conjunto mayor de herramientas de línea de comandos que preceden a la `cordova` utilidad CLI. Vea la interfaz de línea de comandos para información de cómo actualizar la versión de la CLI.

## Actualizar a 3.2.0 de 3.1.0

Para los proyectos que se crearon con el cordova CLI:

1.  Actualización de la `cordova` versión CLI. Vea la interfaz de línea de comandos.

2.  Ejecutar`cordova platform update windows8`.

Para proyectos no creados con el cordova CLI, ejecute:

        bin\update <project_path>
    

## Actualizar a 3.1.0

Soporte Cordova CLI para Windows 8 fue introducido en Cordova 3.1.0. Para actualizar, le sugerimos crear una nueva Cordova CLI proyecto y mover sobre todos los bienes necesarios.

## Actualizar a 2.9.0 magnetohidrodinámica de 2.8.0

Los siguientes comandos deben realizarse desde dentro de Visual Studio para asegurarse que las referencias de cualquier proyecto son actualizados o borrados.

1.  Quitar `cordova-2.8.0.js` del proyecto de `www` Directorio.

2.  Añadir `cordova.js` archivo de la fuente para el proyecto `www` Directorio. (Observe que el archivo no contiene un número de versión en el nombre del fichero).

3.  Construir y probar!

## Actualizar a 2.8.0 desde 2.7.0

Los siguientes comandos deben realizarse desde dentro de Visual Studio para asegurarse que las referencias de cualquier proyecto son actualizados o borrados.

1.  Quitar `cordova-2.7.0.js` del proyecto de `www` Directorio.

2.  Añadir `cordova.js` archivo de la fuente para el proyecto `www` Directorio. (Observe que el archivo no contiene un número de versión en el nombre del fichero).

3.  Construir y probar!