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

title: Plugin APIs
---

# Plugin APIs

Cordova naves con un mínimo conjunto de APIs, y proyectos añadir qué APIs adicionales que necesitan a través de plugins.

Usted puede buscar a través de todos los plugins existentes (incluidos los plugins de terceros) en [npm][1].

 [1]: https://www.npmjs.com/search?q=ecosystem%3Acordova

El conjunto tradicional de núcleo Cordova plugins son como sigue:

*   [Estado de la batería][2]
    
    > Monitorear el estado de la batería del dispositivo.

*   [Cámara][3]
    
    > Capturar una foto con la cámara del dispositivo.

*   [Consola][4]
    
    > Añadir capacidad adicional a console.log().

*   [Contactos][5]
    
    > Trabajar con la base de datos de contacto de dispositivos.

*   [Dispositivo][6]
    
    > Reunir información específica del dispositivo.

*   [Movimiento de dispositivo (acelerómetro)][7]
    
    > Puntee en sensor de movimiento del dispositivo.

*   [Orientación de dispositivo (brújula)][8]
    
    > Obtener la dirección que apunta el dispositivo.

*   [Los cuadros de diálogo][9]
    
    > Notificaciones de dispositivo visual.

*   [FileSystem][10]
    
    > Enganche en el sistema de archivo nativo a través de JavaScript.

*   [Transferencia de archivos][11]
    
    > Enganche en el sistema de archivo nativo a través de JavaScript.

*   [Geolocalización][12]
    
    > Conocer la ubicación de su aplicación.

*   [Globalización][13]
    
    > Permiten la representación de objetos específicos de una configuración regional.

*   [InAppBrowser][14]
    
    > Lanzamiento de URLs en otra instancia del explorador en la aplicación.

*   [Los medios de comunicación][15]
    
    > Grabar y reproducir archivos de audio.

*   [Captura de los medios de comunicación][16]
    
    > Capturar archivos de medios usando las aplicaciones de captura de los medios de comunicación del dispositivo.

*   [Información de red (conexión)][17]
    
    > Comprobar rápidamente el estado de la red e información de la red celular.

*   [SplashScreen][18]
    
    > Mostrar / ocultar la pantalla de presentación de solicitudes.

*   [Vibración][19]
    
    > Una API para que vibre el dispositivo.

*   [Barra de estado][20]
    
    > Una API para mostrar, ocultando y configurar fondo de barra de estado.

*   [Lista blanca][21]
    
    > Un plugin para peticiones de red blanca. Debe instalar para tener cualquier petición de red en sus aplicaciones.

*   [Legado Whitelist][22]
    
    > Un plugin para usar el viejo estilo de lista blanca antes de que era arrancado y cambió en el complemento de la lista blanca.

 [2]: https://www.npmjs.com/package/cordova-plugin-battery-status
 [3]: https://www.npmjs.com/package/cordova-plugin-camera
 [4]: https://www.npmjs.com/package/cordova-plugin-console
 [5]: https://www.npmjs.com/package/cordova-plugin-contacts
 [6]: https://www.npmjs.com/package/cordova-plugin-device
 [7]: https://www.npmjs.com/package/cordova-plugin-device-motion
 [8]: https://www.npmjs.com/package/cordova-plugin-device-orientation
 [9]: https://www.npmjs.com/package/cordova-plugin-dialogs
 [10]: https://www.npmjs.com/package/cordova-plugin-file
 [11]: https://www.npmjs.com/package/cordova-plugin-file-transfer
 [12]: https://www.npmjs.com/package/cordova-plugin-geolocation
 [13]: https://www.npmjs.com/package/cordova-plugin-globalization
 [14]: https://www.npmjs.com/package/cordova-plugin-inappbrowser
 [15]: https://www.npmjs.com/package/cordova-plugin-media
 [16]: https://www.npmjs.com/package/cordova-plugin-media-capture
 [17]: https://www.npmjs.com/package/cordova-plugin-network-information
 [18]: https://www.npmjs.com/package/cordova-plugin-splashscreen
 [19]: https://www.npmjs.com/package/cordova-plugin-vibration
 [20]: https://www.npmjs.com/package/cordova-plugin-statusbar
 [21]: https://www.npmjs.com/package/cordova-plugin-whitelist
 [22]: https://www.npmjs.com/package/cordova-plugin-legacy-whitelist

Las traducciones de Inglés de estos documentos plugin pueden encontrarse visitando los repositorios github plugin y buscando en la carpeta docs