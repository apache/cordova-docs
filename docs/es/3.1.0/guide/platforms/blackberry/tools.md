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

# Herramientas de línea de comandos de BlackBerry

El `cordova` la utilidad de línea de comandos es una herramienta de alto nivel que le permite construir aplicaciones a través de varias plataformas a la vez. Una versión anterior del marco Cordova ofrece conjuntos de herramientas de línea de comandos específicos de cada plataforma. Para usarlos como una alternativa a la CLI, tienes que descargar esta versión de Córdoba desde [cordova.apache.org][1]. La descarga contiene los archivos separados para cada plataforma. Ampliar la plataforma de destino. Las herramientas aquí descritas están normalmente disponibles en el nivel superior `bin` Directorio de otra manera, consulte el archivo **Léame** para obtener direcciones más detallada.

 [1]: http://cordova.apache.org

## Crear un proyecto

Ejecute el `create` comando, especificando la ruta existente para el proyecto, el identificador de paquete de reversa-dominio-estilo y nombre para mostrar de la aplicación. Aquí está la sintaxis para Mac y Windows:

    $ /path/to/cordova-blackberry-webworks/bin/create /path/to/my_new_project com.example.project_name ProjectName
    $ /path/to/cordova-blackberry-webworks/bin/create.bat /path/to/my_new_project com.example.project_name ProjectName
    

**NOTA:** La plataforma BlackBerry ignora el marcador de posición del nombre de paquete (`com.example.project_name`), pero aún se requiere para el uso de herramientas multiplataforma.

## Construir un proyecto

Para proyectos de BlackBerry, por favor asegúrese de que personalizar el archivo `project.properties` en el directorio raíz de tu proyecto de Cordova. Tienes que hacerlo para abastecer su BlackBerry contraseña clave de firma y especificar ubicaciones para el BlackBerry WebWorks SDK y BlackBerry emulador ejecutables.

    $ /path/to/my_new_project/cordova/build <platform>
    $ /path/to/my_new_project/cordova/build.bat <platform>
    

## Inicie el emulador

Para proyectos de BlackBerry, por favor asegúrese de que usted personalizar el `project.properties` archivo en la raiz de tu directorio del proyecto Cordova. Tienes que hacerlo para abastecer su BlackBerry contraseña clave de firma y especificar ubicaciones para el BlackBerry WebWorks SDK y BlackBerry emulador ejecutables.

    $ /path/to/my_new_project/cordova/run <platform>
    

y después elija 'no' cuando se le solicite con:

    Do you have a BlackBerry device connected to your computer? (y/n)
    $ /path/to/my_new_project/cordova/run <platform>
    

y después elija 'no' cuando se le solicite con:

    Do you have a BlackBerry device connected to your computer? (y/n)
    

## Tala

Desafortunadamente, streaming registros directamente desde el dispositivo no es actualmente compatible. Sin embargo, BlackBerry ofrece soporte Web Inspector incorporado para Playbook y BlackBerry dispositivos smartphone corriendo BlackBerry OS 7.0 y superiores. También puede acceder a los registros de la aplicación (incluyendo cualquier llamada a `console.log`) en tu dispositivo manteniendo pulsada la tecla ''ALT'' desde la pantalla principal y tecleando las teclas ''lglg''.