* * *

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

## under the License.

# Guía de herramientas de Shell Android

Esta guía le muestra cómo utilizar el conjunto de Cordova de cáscara centrada en plataforma de herramientas para desarrollar aplicaciones Android. Este camino hacia el desarrollo, discutido en la descripción, puede ofrecer una mayor gama de opciones de desarrollo que la herramienta CLI multiplataforma descrita en la interfaz de línea de comandos. Por ejemplo, tienes que utilizar herramientas de shell cuando se despliega una costumbre Cordova WebView junto con componentes nativos. Antes de usar cualquier camino hacia el desarrollo, primero debe configurar el entorno de SDK de Android como se describe en la guía de la plataforma Android.

Para habilitar herramientas de shell para Android, descargar Cordova de [cordova.apache.org][1]. La descarga contiene archivos separados para cada plataforma. Ampliar cada uno de destino, `android` en este caso. Las herramientas pertinentes están normalmente disponibles en el nivel superior `bin` Directorio de otra manera, consulte el archivo **Léame** para obtener direcciones más detallada.

 [1]: http://cordova.apache.org

Estas herramientas le permiten crear, construir y ejecutar aplicaciones Android. Para obtener información sobre la interfaz de línea de comandos adicional que permite plugin características en todas las plataformas, ver usando Plugman para gestionar Plugins. Ver aplicación Plugins para obtener más información sobre cómo desarrollar plugins.

## Crear un proyecto

Ejecute el `create` comando, especificando la ruta existente para el proyecto, el identificador de paquete estilo inversa-dominio y nombre para mostrar de la aplicación. Aquí está la sintaxis para Mac/Linux y Windows:

        $ /path/to/cordova-android/bin/create /path/to/project com.example.project_name ProjectName
    
        C:\>\path\to\cordova-android\bin\create.bat \path\to\project com.example.project_name ProjectName
    

## Construir

Esto limpia y luego construye un proyecto.

Depuración, en Mac/Linux o Windows:

        $ /path/to/project/cordova/build --debug
    
        C:\>\path\to\project\cordova\build.bat --debug
    

Lanzamiento, el Mac/Linux o Windows:

        $ /path/to/project/cordova/build --release
    
        C:\>\path\to\project\cordova\build.bat --release
    

## Ejecute la aplicación

El `run` comando acepta los siguientes parámetros *opcionales* :

*   Especificación del objetivo. Esto incluye `--emulator` , `--device` , o`--target=<targetID>`.

*   Construir especificación. Esto incluye `--debug` , `--release` , o`--nobuild`.
    
        $ /path/to/project/cordova/run [Target] [Build]
        
        C:\>\path\to\project\cordova\run.bat [Target] [Build]
        

Asegúrese de crear al menos un Virtual dispositivo Android, caso contrario se le pedirá a hacerlo con el `android` comando. Si más de una AVD está disponible como un objetivo, se le pedirá que seleccione una. Por defecto el `run` comando detecta un dispositivo conectado, o un emulador ejecutando si no se encuentra ningún dispositivo.

## Tala

        $ /path/to/project/cordova/log
    
        C:\>\path\to\project\cordova\log.bat
    

## Limpieza

        $ /path/to/project/cordova/clean
    
        C:\>\path\to\project\cordova\clean.bat
    

## Uso manual de hormiga

Si usted desea llamar hormiga directamente desde la línea de comandos como `ant debug install` , es necesario especificar parámetros adicionales para el comando de la hormiga:

        ant debug install -Dout.dir=ant-build -Dgen.absolute.dir=ant-gen
    

Esto es porque los directorios utilizados por scripts de Ant de Cordova son diferentes a la predeterminada. Esto se hace para evitar conflictos cuando Ant se ejecuta desde la línea de comandos versus dentro de Eclipse/ADT.

Estos parámetros adicionales se agregan automáticamente para usted cuando se utiliza el `cordova/build` y `cordova/run` secuencias de comandos describen anteriormente. Por esta razón se recomienda usar el `cordova/build` y `cordova/run` secuencias de comandos en lugar de hormiga llamada directamente desde la línea de comandos.