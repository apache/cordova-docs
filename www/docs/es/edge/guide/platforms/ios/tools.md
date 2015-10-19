---
license: >
    Licensed to the Apache Software Foundation (ASF) under one
    or more contributor license agreements.  See the NOTICE file
    distributed with this work for additional information
    regarding copyright ownership.  The ASF licenses this file
    to you under the Apache License, Version 2.0 (the
    "License"); you may not use this file except in compliance
    with the License.  You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing,
    software distributed under the License is distributed on an
    "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, either express or implied.  See the License for the
    specific language governing permissions and limitations
    under the License.

title: iOS Guía de herramientas de Shell
---

# iOS Guía de herramientas de Shell

Esta guía le muestra cómo utilizar el conjunto de Cordova de cáscara plataforma centrada en herramientas para desarrollar aplicaciones iOS. Este camino hacia el desarrollo, discutido en la descripción, puede ofrecer una mayor gama de opciones de desarrollo para iOS que la herramienta CLI multiplataforma descrita en la interfaz de línea de comandos. Por ejemplo, tienes que utilizar herramientas de shell cuando se despliega una costumbre Cordova WebView junto con componentes nativos. Antes de usar cualquier camino hacia el desarrollo, primero debe configurar el entorno SDK como se describe en la guía de la plataforma iOS. Estas herramientas dependen de herramientas de línea de comandos de Xcode tales como `xcode-select` y`xcodebuild`.

Para habilitar herramientas de shell para iOS, descargar Cordova de [cordova.apache.org][1]. La descarga contiene los archivos separados para cada plataforma. Ampliar cada uno de destino, `ios` en este caso. Las herramientas pertinentes están normalmente disponibles en el nivel superior `bin` Directorio de otra manera, consulte el archivo **Léame** para obtener direcciones más detallada.

 [1]: http://cordova.apache.org

Estas herramientas le permiten crear, construir y ejecutar aplicaciones iOS. Para obtener información sobre la interfaz de línea de comandos adicional que permite plugin características en todas las plataformas, ver usando Plugman para gestionar Plugins. Ver aplicación Plugins para obtener más información sobre cómo desarrollar plugins.

## Crear un proyecto

Ejecute el comando `crear`, especificando la ruta existente para el proyecto, el identificador de paquete de reversa-dominio-estilo y nombre para mostrar de la aplicación.

        $ ./path/to/cordova-ios/bin/create /path/to/my_new_project com.example.project_name ProjectName
    

## Construir un proyecto

        $ /path/to/my_new_project/cordova/build
    

## Ejecutar la aplicación en un emulador

        $ /path/to/my_new_project/cordova/run --emulator
    

## Ejecutar la aplicación en un dispositivo

        $ /path/to/my_new_project/cordova/run --device
    

## Firmar la aplicación

Usted puede aprender más sobre la firma, distribución de aplicaciones de iOS, creando un certificado y provisioning de perfil en el [iOS Developer biblioteca][2].

 [2]: https://developer.apple.com/library/ios/documentation/IDEs/Conceptual/AppDistributionGuide/ConfiguringYourApp/ConfiguringYourApp.html

Para firmar la aplicación en Córdoba es necesario lo siguiente:

*   Código de identidad de firma ( `--codeSignIdentity` ): [Utilizando XCode][3] puede crear un nuevo iOS firma identidad y añadir a su llavero. El tipo de código firma identidad - típicamente distribución o desarrollo, debe ser especificado.

*   Perfil de aprovisionamiento ( `--provisioningProfile` ): [utilizando el centro de miembros de Apple][4] puede crear un perfil de aprovisionamiento. Descargar el perfil de aprovisionamiento en su máquina y lanzarlo en XCode para registrarlo. Se copia aquí en tu Mac: perfiles de ~/Library/MobileDevice/Provisioning\ /. Abriéndolo en un editor de texto, usted puede encontrar el UUID que necesita ser especificado.

*   Código de firma normas de recursos ( `--codeSignResourceRules` ) (opcional): permite especificar reglas de recursos firma personalizadas.

 [3]: https://developer.apple.com/library/ios/documentation/IDEs/Conceptual/AppDistributionGuide/MaintainingCertificates/MaintainingCertificates.html#//apple_ref/doc/uid/TP40012582-CH31-SW6
 [4]: https://developer.apple.com/library/ios/documentation/IDEs/Conceptual/AppDistributionGuide/MaintainingProfiles/MaintainingProfiles.html#//apple_ref/doc/uid/TP40012582-CH30-SW61

Estos parámetros pueden especificarse usando los argumentos de línea de comandos sobre `build` o `run` secuencias de comandos:

        $ /path/to/my_new_project/cordova/build --codeSignIdentitiy="iPhone Distribtion" --provisioningProfile="926c2bd6-8de9-4c2f-8407-1016d2d12954" 
    

Por otra parte, les puede especificar en un archivo de configuración de construcción (build.json) con un argumento (`--buildConfig`). Este es un ejemplo de un archivo de configuración de compilación:

    {
         "ios": {
             "debug": {
                 "codeSignIdentitiy": "iPhone Development",
                 "provisioningProfile": "926c2bd6-8de9-4c2f-8407-1016d2d12954",
             },
             "release": {
                 "codeSignIdentitiy": "iPhone Distribution"
                 "provisioningProfile": "70f699ad-faf1-4adE-8fea-9d84738fb306",
             }
         }
     }
    

También hay soporte para mezclar y combinar los argumentos de línea de comandos y parámetros en el archivo build.json. Valores de los argumentos de línea de comandos tendrá prioridad.

## Registro

        $ /path/to/my_new_project/cordova/log