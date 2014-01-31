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

# iOS herramientas de línea de comandos

El `cordova` la utilidad de línea de comandos es una herramienta de alto nivel que le permite construir aplicaciones a través de varias plataformas a la vez. Una versión anterior del marco Cordova ofrece conjuntos de herramientas de línea de comandos específicos de cada plataforma. Para usarlos como una alternativa a la CLI, tienes que descargar esta versión de Córdoba desde [cordova.apache.org][1]. La descarga contiene los archivos separados para cada plataforma. Ampliar la plataforma de destino. Las herramientas aquí descritas están normalmente disponibles en el nivel superior `bin` Directorio de otra manera, consulte el archivo **Léame** para obtener direcciones más detallada.

 [1]: http://cordova.apache.org

Las herramientas de línea de comandos de iOS se basan en scripts de shell y confían en Xcode tools de línea de comandos como `xcode-select` y `xcodebuild`.

Para obtener información sobre la interfaz de línea de comandos de bajo nivel que permite plugins, ver usando Plugman para gestionar Plugins. Consulte aplicación Plugins para tener una visión general.

## Crear un proyecto

Ejecute el comando `crear`, especificando la ruta existente para el proyecto, el identificador de paquete de reversa-dominio-estilo y nombre para mostrar de la aplicación.

    $ ./path/to/cordova-ios/bin/create /path/to/my_new_project com.example.project_name ProjectName
    

## Construir un proyecto

    $ /path/to/my_new_project/cordova/build
    

## Ejecutar la aplicación en un emulador

    $ /path/to/my_new_project/cordova/run
    

## Liberando

    $ /path/to/my_new_project/cordova/release
    

## Tala

    $ /path/to/my_new_project/cordova/log