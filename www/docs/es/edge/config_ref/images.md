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

title: Iconos y pantallas de Splash
---

# Iconos y pantallas de Splash

Esta sección le muestra cómo configurar el icono de una aplicación y opcionalmente la pantalla de inicio para varias plataformas, tanto si se trabaja en el CLI de Cordova (descrito en la sección La Interfaz de Línea de Comandos) o si se utilizan herramientas específicas de la plataforma SDK (detallada en las guías de plataforma).

## Configurando los íconos en el CLI

Cuando trabajes en el CLI puedes definir los iconos de la app haciendo uso del elemento `<icon>` (`config.xml`). Si no se especifica un icono se utilizara el logo de Apache Cordova.

        <icon src="res/ios/icon.png" platform="ios" width="57" height="57" density="mdpi" />
    

Fuente: (requerido) especifica la ubicación del archivo de imagen, en relación a su directorio de proyecto

platform: plataforma de destino (opcional)

width: anchura de icono en pixeles (opcional)

height: altura del icono en pixeles (opcional)

density: específico de android, especifica la densidad del icono (opcional)

Puede utilizar la siguiente configuración para definir un icono único por defecto, que se utilizará para todas las plataformas.

        <icon src="res/icon.png" />
    

Para cada plataforma también puede definir un conjunto de iconos para adaptarse a distintas resoluciones de pantalla.

Amazon fire OS

         <platform name="amazon-fireos">
                  <icon src="res/android/ldpi.png" density="ldpi" />
                  <icon src="res/android/mdpi.png" density="mdpi" />
                  <icon src="res/android/hdpi.png" density="hdpi" />
                  <icon src="res/android/xhdpi.png" density="xhdpi" />
         </platform>
    

Android

         <platform name="android">
                  <icon src="res/android/ldpi.png" density="ldpi" />
                  <icon src="res/android/mdpi.png" density="mdpi" />
                  <icon src="res/android/hdpi.png" density="hdpi" />
                  <icon src="res/android/xhdpi.png" density="xhdpi" />
         </platform>
    

BlackBerry10

         <platform name="blackberry10">
                  <icon src="res/bb10/icon-86.png" />
                  <icon src="res/bb10/icon-150.png" />
         </platform>
    

Consulte la documentación de BlackBerry para apuntar varios tamaños y configuraciones regionales. [http://developer.blackberry.com/html5/documentation/icon_element.html]

Firefox OS

         <platform name="firefoxos">
                  <icon src="res/ff/logo.png" width="60" height="60" />
         </platform>
    

iOS

         < nombre de plataforma = "ios" ><!--iOS 8.0 +--> <!--iPhone Plus 6--> < icono src = "res/ios/icon-60@3x.png" width = "180" altura = "180" / ><!--iOS 7.0 +--> <!--iPhone / iPod Touch--> < icono src="res/ios/icon-60.png" ancho = "60" height = "60" / >< icono src = "res/ios/icon-60@2x.png" width = "120" height = "120" / ><!----> iPad < icono src="res/ios/icon-76.png" ancho = altura "76" = "76" / >< icono src = "res/ios/icon-76@2x.png" width = "152" height = "152" /><!--iOS 6.1--> <!--icono Spotlight--> < icono src="res/ios/icon-40.png" ancho = "40" altura = "40" / >< icono src = "res/ios/icon-40@2x.png" width = "80" height = "80" / ><!--iPhone / iPod Touch--> < icono src="res/ios/icon.png" ancho = altura "57" = "57" / >< icono src = "res/ios/icon@2x.png" width = altura "114" = "114" / ><!--iPad--> < icono src="res/ios/icon-72.png" ancho = altura "72" = "72" / >< icono src = "res/ios/icon-72@2x.png" width = "144" altura = "144" / ><!--iPhone Spotlight y el icono Configuración--> < icono src="res/ios/icon-small.png" ancho = "29" height = "29" / >< icono src = "res/ios/icon-small@2x.png" width = "58" height = "58" / ><!--iPad Spotlight y el icono Configuración--> < icono src="res/ios/icon-50.png" ancho = "50" altura = "50" / >< icono src = "res/ios/icon-50@2x.png" width = "100" height = "100" / >< / plataforma >
    

Tizen

         <platform name="tizen">
                  <icon src="res/tizen/icon-128.png" width="128" height="128" />
         </platform>
    

Windows Phone8

         <platform name="wp8">
                  <icon src="res/wp/ApplicationIcon.png" width="99" height="99" />
                  <!-- tile image -->
                  <icon src="res/wp/Background.png" width="159" height="159" />
         </platform>
    

Windows8

         <platform name="windows8">
                  <icon src="res/windows8/logo.png" width="150" height="150" />
                  <icon src="res/windows8/smalllogo.png" width="30" height="30" />
                  <icon src="res/windows8/storelogo.png" width="50" height="50" />
         </platform>
    

## Configurando pantallas de inicio en el CLI

En el nivel superior `config.xml` archivo (no el que está en `platforms` ), añadir elementos de configuración como los aquí especificados.

# Ejemplo de configuración

Por favor observe que el valor del atributo "src" es relativa al directorio de proyecto y no en el directorio de www. Puedes nombrar a la imagen de origen lo que quieras. El nombre interno de la aplicación están determinados por Córdoba.

    <platform name="android">
        <!-- you can use any density that exists in the Android project -->
        <splash src="res/screen/android/splash-land-hdpi.png" density="land-hdpi"/>
        <splash src="res/screen/android/splash-land-ldpi.png" density="land-ldpi"/>
        <splash src="res/screen/android/splash-land-mdpi.png" density="land-mdpi"/>
        <splash src="res/screen/android/splash-land-xhdpi.png" density="land-xhdpi"/>
    
        <splash src="res/screen/android/splash-port-hdpi.png" density="port-hdpi"/>
        <splash src="res/screen/android/splash-port-ldpi.png" density="port-ldpi"/>
        <splash src="res/screen/android/splash-port-mdpi.png" density="port-mdpi"/>
        <splash src="res/screen/android/splash-port-xhdpi.png" density="port-xhdpi"/>
    </platform>
    
    <platform name="ios">
        <!-- images are determined by width and height. Se admiten las siguientes--> < salpicar src="res/screen/ios/Default~iphone.png" ancho = "320" height = "480" / >< splash src="res/screen/ios/Default@2x~iphone.png" ancho = "640" altura = "960" / >< splash src="res/screen/ios/Default-Portrait~ipad.png" ancho = altura "768" = "1024" / >< splash src="res/screen/ios/Default-Portrait@2x~ipad.png" ancho = altura "1536" = "2048" / >< splash src="res/screen/ios/Default-Landscape~ipad.png" ancho = "1024" altura = "768" / >< splash src="res/screen/ios/Default-Landscape@2x~ipad.png" ancho = "2048" altura = "1536" / >< splash src="res/screen/ios/Default-568h@2x~iphone.png" ancho = "640" height = "1136" / >< splash src="res/screen/ios/Default-667h.png" ancho = "750" height = "1334" / >< splash src="res/screen/ios/Default-736h.png" ancho = "1242" altura = "2208" / >< splash src="res/screen/ios/Default-Landscape-736h.png" ancho = altura "2208" = "1242" / >< / plataforma >< nombre de plataforma = "wp8" ><!--imágenes están determinados por la anchura y la altura. The following are supported -->
        <splash src="res/screen/wp8/SplashScreenImage.jpg" width="768" height="1280"/>
    </platform>
    
    <platform name="windows8">
        <!-- images are determined by width and height. The following are supported -->
        <splash src="res/screen/windows8/splashscreen.png" width="620" height="300"/>
    </platform>
    
    <platform name="blackberry10">
        <!-- Add a rim:splash element for each resolution and locale you wish -->
        <!-- http://developer.blackberry.com/html5/documentation/rim_splash_element.html -->
        <rim:splash src="res/screen/windows8/splashscreen.png"/>
    </platform>
    
    
    <preference name="SplashScreenDelay" value="10000" />
    

# Plataformas soportadas

A partir de ahora (Cordova 3.5.0 julio de 2014) las siguientes plataformas soportan pantallas splash.

    android
    ios
    wp8
    windows8
    blackberry10
    

# SplashScreen Plugin

Apache Cordova también ofrece plugin de pantalla splash especiales que podría ser utilizado para mostrar y ocultar una pantalla de bienvenida durante la aplicación lanzamiento https://github.com/apache/cordova-plugin-splashscreen mediante programación