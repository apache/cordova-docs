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

# Firefox OS Platform Guide

Esta guía describe cómo configurar el entorno de desarrollo para crear Cordova aplicaciones para dispositivos de Firefox OS, entonces probar y publicar las aplicaciones.

## Requerimientos y apoyo

Firefox las apps son básicamente sólo aplicaciones web, con la adición de un archivo manifest.webapp que define metadatos acerca de la aplicación y le permite ser instalado en dispositivos Firefox OS. Puede utilizarse cualquier plataforma que soporta Cordova.Para averiguar más sobre la construcción de aplicaciones web, consulte la [App Center][1] en [MDN][2].

 [1]: https://developer.mozilla.org/en-US/Apps
 [2]: https://developer.mozilla.org/en-US/

## Instalación y configuración del entorno

Primero instale [Node.js][3], luego instale el paquete Cordova así:

 [3]: http://nodejs.org/

    $ npm install -g cordova
    

A continuación, crear una aplicación de muestra Cordova luego navegar al directorio recién creado:

    $ cordova create test-app
    $ cd test-app
    

Añadir Firefox OS como plataforma de apoyada a la aplicación con las siguientes:

    $ cordova platform add firefoxos
    

Esto crea una aplicación de Firefox OS en directorio de plataformas/firefoxos/www, que actualmente es la misma excepto que tiene un archivo de manifiesto de Firefox (manifest.webapp) dentro del directorio de www.

## Desarrollo de su aplicación

En este momento usted está listo para ir — cambiar el código dentro de prueba-app/www para lo que quieras tu app para ser. Puede agregar [plugins de apoyo]() a la aplicación usando "cordova plugin añade", por ejemplo:

    cordova plugin add org.apache.cordova.device
    cordova plugin add org.apache.cordova.vibration
    

También tienes que añadir un archivo personalizado manifest.webapp en tu directorio de prueba-app/www, que debe incluir al menos los siguientes:

    { 
        "launch_path":"/index.html",
        "installs_allowed_from":["*"],
        "version":"0.0.1",
        "name":"My app",
        "pkgName":"io.cordova.hellocordova",
        "icons": {
            "128": "/img/logo.png"
        }
    }
    

Para obtener más información acerca de Firefox App manifiestos, lea [App se manifiestan][4] en MDN.

 [4]: https://developer.mozilla.org/en-US/Apps/Developing/Manifest

Cuando se escribe el código de la aplicación, implementar los cambios en la aplicación de Firefox OS con que ha agregado a su proyecto

    $ cordova prepare
    

Tenga en cuenta que un paso de compilación (es decir, construir cordova) no es necesario cuando se despliega a la plataforma de Firefox OS, como Firefox OS aplicaciones basadas en HTML y por lo tanto no compilados.

## Pruebas y depuración

La aplicación puede ser probada usando el Firefox OS [App Manager][5].

 [5]: https://developer.mozilla.org/en-US/Firefox_OS/Using_the_App_Manager

Cuando conecte el administrador de la aplicación para tu dispositivo/simulador de prueba, seleccione la opción "Añadir envasados App", entonces asegúrese de que usted señala a la prueba-app/plataformas/firefoxos/www/directorio para incluir la aplicación en la interfaz del administrador.

Aquí usted puede instalar la aplicación en tu dispositivo/simulador de prueba (con el botón "Actualizar"). Usando el botón puede depurar la aplicación y modificar su código en vivo "Debug".

Nota: Antes de intentar publicar su aplicación debe considerar validarlo utilizando el [validador App][6].

 [6]: https://marketplace.firefox.com/developers/validator

## Publican su aplicación en el mercado de Firefox

Puede enviar su aplicación al mercado de Firefox, o publicarlo mismo. Visite la [Zona de mercado de Firefox][7] en MDN para averiguar más acerca de cómo hacer esto; [Opciones de publicación de la aplicación][8] es el mejor lugar para empezar.

 [7]: https://developer.mozilla.org/en-US/Marketplace
 [8]: https://developer.mozilla.org/en-US/Marketplace/Publishing/Publish_options