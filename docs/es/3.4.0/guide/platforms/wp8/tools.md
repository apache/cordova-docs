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

# Windows Phone herramientas de línea de comandos

El `cordova` la utilidad de línea de comandos es una herramienta de alto nivel que le permite construir aplicaciones a través de varias plataformas a la vez. Una versión anterior del marco Cordova ofrece conjuntos de herramientas de línea de comandos específicos de cada plataforma. Para usarlos como una alternativa a la CLI, tienes que descargar esta versión de Córdoba desde [cordova.apache.org][1]. La descarga contiene los archivos separados para cada plataforma. Ampliar la plataforma de destino. Las herramientas aquí descritas están normalmente disponibles en el nivel superior `bin` Directorio de otra manera, consulte el archivo **Léame** para obtener direcciones más detallada.

 [1]: http://cordova.apache.org

Para obtener información sobre la interfaz de línea de comandos de bajo nivel que permite plugins, ver usando Plugman para gestionar Plugins. Consulte aplicación Plugins para tener una visión general.

## Windows Phone

Las herramientas de línea de comandos de Windows Phone apoyan crear, construir y ejecutar nuevos proyectos. Los comandos deben ejecutarse desde un símbolo del sistema cmd o powershell.

El repo WP8 ahora incluye código para construir tanto WP7 + WP8 apps. El repositorio tiene subdirectorios para cada uno: `wp7/` y`wp8/`.

## Crear un proyecto

Hay 2 maneras de crear una nueva aplicación Cordova WP7 Apache o WP8.

### Ejecute el archivo por lotes para crear e instalar las plantillas

*   La raíz de la repo contiene un `createTemplates.bat` archivo. Doble clic en él genera dos `.zip` archivos: `CordovaWP7_x_x_x.zip` y `CordovaWP8_x_x_x.zip` , donde *x.x.x* representa el número de versión actual. Para utilizar fácilmente estos archivos en Visual Studio, copiarlos a `My Documents\Visual Studio
2012\Templates\ProjectTemplates\` . Entonces eres capaz de crear nuevas aplicaciones Apache Cordova Windows Phone desde Visual Studio **archivo → nuevo proyecto** menú.

*   Si ejecuta el archivo por lotes desde la línea de comandos, también se puede llamar con un parámetro para instalar automáticamente

Ejecute el script:

    >createTemplates.bat -install
    

### Usar los Scripts de creación de la línea de comandos

Ejecute el `create` comando, especificando la ruta existente para el proyecto, el identificador de paquete estilo inversa-dominio y nombre para mostrar de la aplicación. Aquí está la sintaxis para Windows Phone 7 y 8:

    >.\wp7\bin\create PathToNewProject [ PackageName ] [ AppName ]
    >.\wp8\bin\create PathToNewProject [ PackageName ] [ AppName ]
    
    >PathToNewProject : The path to where you wish to create the project
    >PackageName      : The namespace for the project (default is Cordova.Example)
    >AppName          : The name of the application (default is CordovaWP8AppProj or CordovaWP7AppProj)
    
    >examples:
    >.\wp7\bin\create C:\path\to\my_new_project
    >.\wp8\bin\create C:\path\to\my_new_project io.cordova.example CordovaWP8App
    

Inicie Visual Studio y abra el archivo de solución (.sln) en (C:\path\to\my\_new\_project)

Construir y ejecutar

## El proyecto de edificio (limpiar y luego construir)

*   Depuración
    
    $ C:\path\to\my\_new\_project\cordova\build --debug

*   Lanzamiento
    
    $ C:\path\to\my\_new\_project\cordova\build --release

## Ejecutando la aplicación

Ejecutar el comando 'ejecutar' con los siguientes parámetros *opcionales*

*   Especificación del objetivo. Esto incluye `--emulator` , `--device` , o`--target=<targetID>`.

*   Construir especificación. Esto incluye `--debug` , `--release` , o`--nobuild`.
    
    $ C:\path\to\my\_new\_project\cordova\run \[Target\] \[Build\]

Por defecto el `run` comando se llama con `--emulator --debug` si no se proporcionan las banderas.

## Limpieza

    $ C:\path\to\my_new_project\cordova\clean