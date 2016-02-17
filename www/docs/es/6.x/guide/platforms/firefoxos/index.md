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

title: Firefox OS Platform Guide
---

# Firefox OS Platform Guide

Esta guía describe cómo configurar el entorno de desarrollo para crear Cordova aplicaciones para dispositivos de Firefox OS, entonces probar y publicar las aplicaciones.

## Requisitos y apoyo

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

    cordova plugin add cordova-plugin-device
    cordova plugin add cordova-plugin-vibration
    

Cuando se escribe el código de la aplicación, implementar los cambios en la aplicación de Firefox OS con que ha agregado a su proyecto

    $ cordova prepare firefoxos
    

Para crear una aplicación empaquetada uno puede postal el directorio plataformas/firefoxos/www. Usted puede también simplemente construir usando

    $ cordova build firefoxos
    

La aplicación empaquetada Firefox OS será construida en platforms/firefoxos/build/package.zip

## Pruebas y depuración

La aplicación puede ser probada usando el Firefox OS [Web IDE][4].

 [4]: https://developer.mozilla.org/en-US/docs/Tools/WebIDE

Cuando conecte el IDE de Web a tu dispositivo/simulador de prueba, seleccione la opción "Open App empaquetados", y asegúrese de que usted señala a la prueba-app/plataformas/firefoxos/www/directorio para incluir la aplicación en la interfaz del administrador.

Aquí usted puede instalar la aplicación en tu dispositivo/simulador de prueba (con el botón "Play"). Usando la "pausa" botón puede depurar la aplicación y modificar su código en vivo.

Nota: Antes de intentar publicar su aplicación debe considerar validarlo utilizando el [validador App][5].

 [5]: https://marketplace.firefox.com/developers/validator

## Publican su aplicación en el mercado de Firefox

Puede enviar su aplicación al mercado de Firefox, o publicarlo mismo. Visite la [Zona de mercado de Firefox][6] en MDN para averiguar más acerca de cómo hacer esto; [Opciones de publicación de la aplicación][7] es el mejor lugar para empezar.

 [6]: https://developer.mozilla.org/en-US/Marketplace
 [7]: https://developer.mozilla.org/en-US/Marketplace/Publishing/Publish_options