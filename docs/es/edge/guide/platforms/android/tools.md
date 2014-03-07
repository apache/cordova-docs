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

# Android Herramientas de línea de comandos

La utilidad de línea de comandos de `cordova` es una herramienta de alto nivel que le permite construir aplicaciones a través de varias plataformas a la vez. Una versión anterior del marco Cordova ofrece conjuntos de herramientas de línea de comandos específicos de cada plataforma. Para usarlos como una alternativa a la CLI, tienes que descargar esta versión de Córdoba desde [cordova.apache.org][1]. La descarga contiene los archivos separados para cada plataforma. Ampliar la plataforma de destino. Las herramientas aquí descritas están normalmente disponibles en el directorio `bin` de nivel superior, de lo contrario, consulte el archivo **README** para instrucciones más detalladas.

 [1]: http://cordova.apache.org

Para obtener información sobre la interfaz de línea de comandos de bajo nivel que permite plugins, ver usando Plugman para gestionar Plugins. Consulte aplicación Plugins para tener una visión general.

## Crear un proyecto

Ejecute el comando `create`, especificando la ruta existente para el proyecto, el identificador de paquete de reversa-dominio-estilo y nombre para mostrar de la aplicación. Aquí está la sintaxis para Mac y Windows:

    $ /path/to/cordova-android/bin/create /path/to/project com.example.project_name ProjectName
    $ C:\path\to\cordova-android\bin\create.bat C:\path\to\project com.example.project_name ProjectName
    

## Construir

Esto limpia y luego construye un proyecto.

Depuración, en Mac o Windows:

    $ /path/to/project/cordova/build --debug
    $ C:\path\to\project\cordova\build.bat --debug
    

Lanzamiento, el Mac o Windows:

    $ /path/to/project/cordova/build --release
    $ C:\path\to\project\cordova\build.bat --release
    

## Ejecute la aplicación

El `run` comando acepta los siguientes parámetros *opcionales* :

*   Especificación del objetivo. Esto incluye `--emulator` , `--device` , o`--target=<targetID>`.

*   Construir especificación. Esto incluye `--debug` , `--release` , o`--nobuild`.
    
    $ /path/to/project/cordova/run \[Target\] \[Build\] $ C:\path\to\project\cordova\run.bat \[Target\] \[Build\]

Asegúrese de crear al menos un Virtual dispositivo Android, caso contrario se le pedirá a hacerlo con el `android` comando. Se si más de una AVD está disponible como un objetivo, le pedirá que seleccione una. Por defecto el `run` comando detecta un dispositivo conectado, o un emulador ejecutando si no se encuentra ningún dispositivo.

## Tala

    $ /path/to/project/cordova/log $ C:\path\to\project\cordova\log.bat
    

### Limpieza

    $ /path/to/project/cordova/clean $ C:\path\to\project\cordova\clean.bat