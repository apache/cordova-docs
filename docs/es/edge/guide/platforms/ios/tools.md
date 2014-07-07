* * *

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

## under the License.

# iOS Guía de herramientas de Shell

Esta guía le muestra cómo utilizar el conjunto de Cordova de cáscara plataforma centrada en herramientas para desarrollar aplicaciones iOS. Este camino hacia el desarrollo, discutido en la descripción, puede ofrecer una mayor gama de opciones de desarrollo para iOS que la herramienta CLI multiplataforma descrita en la interfaz de línea de comandos. Por ejemplo, tienes que utilizar herramientas de shell cuando se despliega una costumbre Cordova WebView junto con componentes nativos. Antes de usar cualquier camino hacia el desarrollo, primero debe configurar el entorno SDK como se describe en la guía de la plataforma iOS. Estas herramientas dependen de herramientas de línea de comandos de Xcode tales como `xcode-select` y`xcodebuild`.

Para habilitar herramientas de shell para iOS, descargar Cordova de [cordova.apache.org][1]. La descarga contiene archivos separados para cada plataforma. Ampliar cada uno de destino, `ios` en este caso. Las herramientas pertinentes están normalmente disponibles en el nivel superior `bin` Directorio de otra manera, consulte el archivo **Léame** para obtener direcciones más detallada.

 [1]: http://cordova.apache.org

Estas herramientas le permiten crear, construir y ejecutar aplicaciones iOS. Para obtener información sobre la interfaz de línea de comandos adicional que permite plugin características en todas las plataformas, ver usando Plugman para gestionar Plugins. Ver aplicación Plugins para obtener más información sobre cómo desarrollar plugins.

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