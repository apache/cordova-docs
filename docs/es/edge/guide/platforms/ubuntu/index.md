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

# Guía de la plataforma de Ubuntu

## Versión inicial

Bienvenido a la versión inicial del soporte para plataformas Ubuntu en Córdoba. Con este lanzamiento, el foco está desarrollando un sistema Ubuntu y utilizando el flujo de trabajo multiplataforma discutida en la descripción. Esto incluye la adición de la plataforma de Ubuntu a tu proyecto, añadiendo estándar Cordova plugins y construcción y ejecuta aplicaciones para la plataforma de Ubuntu.

### SDK de Ubuntu

También podrías instalar el entorno de desarrollo de Ubuntu QtCreator. Consulte [developer.ubuntu.com][1] para obtener más información. (El QtCreator SDK no es necesario añadir soporte de plataforma de Ubuntu a tu app Cordova).

 [1]: http://developer.ubuntu.com

### Plataformas Ubuntu Runtime

Ubuntu es conocida por su entorno de escritorio (para ordenadores portátiles, PCs y tal). Toque de Ubuntu se extiende el sistema operativo Ubuntu en teléfonos y tabletas. Ubuntu runtime plataformas tienen diferentes arquitecturas de CPU (x 86, armhf, etc..). Código de la aplicación y el plugin debe compilarse correctamente. Soporte para esta área amplia está evolucionando rápidamente en Ubuntu.

### Información más reciente

Para la información más reciente sobre la ayuda de la aplicación Cordova plataformas Ubuntu runtime, consulte [wiki.ubuntu.com/Cordova][2].

 [2]: http://wiki.ubuntu.com/Cordova

## Requisitos de plataforma de desarrollo

Para esta versión inicial, la plataforma de desarrollo debe ser un escritorio de Ubuntu. Ubuntu 13.10 (alias 'picantes') o posterior es necesario para disfrutar de todo el conjunto de capacidades de apoyadas.

Usted puede instalar Cordova en sistemas no-Ubuntu (usando npm), pero importantes capacidades se proporcionan únicamente a través de paquetes debian Ubuntu en este momento.

## Instalación de Cordova

Agregar el Ubuntu Cordova [Archivo Paquete Personal][3] a tu sistema Ubuntu:

 [3]: https://launchpad.net/~cordova-ubuntu/+archive/ppa

    $ sudo add-apt-repository ppa:cordova-ubuntu/ppa
    $ sudo apt-get update
    

Instalar paquete cordova-cli (y sus dependencias):

    $ sudo apt-get install cordova-cli
    

## Proyecto de flujo de trabajo

### Crear un proyecto

Crea una aplicación en un `hello` directorio cuyo nombre es `HelloWorld` :

    $ cordova create hello com.example.hello HelloWorld
    

### Entrar en el directorio del proyecto

    $ cd hello
    

### Añadir la plataforma Ubuntu

    $ cordova platform add ubuntu
    

### Construir para Ubuntu

    $ cordova build ubuntu
    

### Ejecute la aplicación

    $ cordova run ubuntu
    

### Añadir el Plugin de Status de batería

    $ cordova plugin add org.apache.cordova.battery-status