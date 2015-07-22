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

Esta sección le muestra cómo configurar de una aplicación icono y pantalla opcional para varias plataformas, tanto si se trabaja en la CLI de Cordova (descrito en la interfaz de línea de comandos) o si se utilizan herramientas específicas de la plataforma SDK (detallada en las guías de plataforma).

## Configuración de los iconos en el CLI

Cuando se trabaja en la CLI, archivos de código fuente del icono se encuentran en diferentes subdirectorios específicos a una plataforma dentro del directorio del proyecto `www/res/icons` . Los proyectos recién creados cuentan con un conjunto de iconos predeterminados de Cordova para reemplazar según la plataforma seleccionada.

Android especifica iconos de baja, media, alta y extra alta resolución:

        android/icon-36-ldpi.png
        android/icon-48-mdpi.png
        android/icon-72-hdpi.png
        android/icon-96-xhdpi.png
    

La plataforma iOS especifica 72-pixel-cuadrado iconos para iPads y muestra iconos 57-pixel para iPhones y iPods, con variantes de alta resolución *2 x* para la retina:

        ios/icon-57-2x.png
        ios/icon-57.png
        ios/icon-72-2x.png
        ios/icon-72.png
    

Windows Phone especifica un icono predeterminado 48 píxeles, junto con fondo de diversos dispositivos imágenes utilizadas al representar aplicaciones de revestimientos:

        windows-phone/icon-48.png
        windows-phone/icon-62-tile.png
        windows-phone/icon-173-tile.png
    

Blackberry 10 requiere que sea especificado un elemento icon en config.xml:

        <icon src="blackberry10/icon-86.png" />
    

Ver documentación de BlackBerry para tareting varios tamaños y configuraciones regionales.

[http://developer.blackberry.com/html5/documentation/icon_element.html]

Tizen requiere un ícono de 128-pixel:

        tizen/icon-128.png
    

## Configuración de pantallas de inicio en el CLI

Utilizar la API Splashscreen para activar la visualización de la pantalla de presentación introductoria de una app en muchas plataformas. Cuando se está trabajando en el CLI, los archivos de la splash screen se encuentran dentro del subdirectorio del proyecto `www/res/screens`.

Android especifica las imágenes de las splash screen en ambas orientaciones, portrait y landscape, para las resoluciones baja, media, alta y extra-alta:

        android/screen-hdpi-landscape.png
        android/screen-hdpi-portrait.png
        android/screen-ldpi-landscape.png
        android/screen-ldpi-portrait.png
        android/screen-mdpi-landscape.png
        android/screen-mdpi-portrait.png
        android/screen-xhdpi-landscape.png
        android/screen-xhdpi-portrait.png
    

La plataforma iOS especifica las variantes para iPhone/iPod y iPad, con variantes para las exhibiciones de la retina y orientaciones diferentes. El archivo *568 h* se aplica para el iPhone de 5 pantalla más alta:

        ios/screen-ipad-landscape-2x.png
        ios/screen-ipad-landscape.png
        ios/screen-ipad-portrait-2x.png
        ios/screen-ipad-portrait.png
        ios/screen-iphone-landscape-2x.png
        ios/screen-iphone-landscape.png
        ios/screen-iphone-portrait-2x.png
        ios/screen-iphone-portrait.png
        ios/screen-iphone-portrait-568h-2x.png
    

Windows Phone especifica una imagen de la pantalla splash solo:

        windows-phone/screen-portrait.jpg
    

Las siguientes secciones detallan cómo configurar salpicadura pantallas cuando trabajo con SDK y las herramientas de línea de comandos relacionados con descrito en las guías de la plataforma.

No olvide instalar el plugin SplashScreen antes de intentar usar el `navigator.splashscreen.hide()` o `navigator.splashscreen.show()` los métodos.

## Pantallas de inicio para la plataforma Android

Ubica los archivos [9-patch image][1] dentro de los directorios del proyecto Android `platforms/android/res/drawable*` .

 [1]: https://developer.android.com/tools/help/draw9patch.html

La resolución para cada uno debe ser:

*   Xlarge (xhdpi): al menos 960 × 720
*   grande (IPAP): al menos 640 × 480
*   medio (mdpi): al menos 470 × 320
*   pequeño (ldpi): por lo menos 426 × 320

Si desea utilizar las imágenes de pantalla splash predeterminado proporcionadas en Córdoba, necesitará copiar los archivos png de `platforms/android/www/res/screen/android` a `platforms/android/res/drawable*/` :

    cd platforms/android/res
    mkdir drawable-port-ldpi
    cp -p ../assets/www/res/screen/android/screen-ldpi-portrait.png drawable-port-ldpi/screen.png
    mkdir drawable-land-ldpi
    cp -p ../assets/www/res/screen/android/screen-ldpi-landscape.png drawable-land-ldpi/screen.png
    mkdir drawable-port-mdpi
    cp -p ../assets/www/res/screen/android/screen-mdpi-portrait.png drawable-port-mdpi/screen.png
    mkdir drawable-land-mdpi
    cp -p ../assets/www/res/screen/android/screen-mdpi-landscape.png drawable-land-mdpi/screen.png
    mkdir drawable-port-hdpi
    cp -p ../assets/www/res/screen/android/screen-hdpi-portrait.png drawable-port-hdpi/screen.png
    mkdir drawable-land-hdpi
    cp -p ../assets/www/res/screen/android/screen-hdpi-landscape.png drawable-land-hdpi/screen.png
    mkdir drawable-port-xhdpi
    cp -p ../assets/www/res/screen/android/screen-xhdpi-portrait.png drawable-port-xhdpi/screen.png
    mkdir drawable-land-xhdpi
    cp -p ../assets/www/res/screen/android/screen-xhdpi-landscape.png drawable-land-xhdpi/screen.png
    

El `drawable` nombres de directorio deben seguir las convenciones Android por apoyar a [tamaños de pantalla][2] y [recursos alternativos][3].

 [2]: http://developer.android.com/guide/practices/screens_support.html
 [3]: http://developer.android.com/guide/topics/resources/providing-resources.html#AlternativeResources

En `config.xml` , agregue las siguientes preferencias:

    <preference name="SplashScreen" value="splash" />
    <preference name="SplashScreenDelay" value="10000" />
    

La primera línea establece la imagen que se mostrará como la pantalla de bienvenida. Este es el nombre del archivo de la png en el `drawable*` directorios. Si usted nombrar la imagen nada aparte de `splash.png` , tienes que modificar esta línea. No incluyen la extensión de archivo (por ejemplo, `.png` ). Si desea utilizar las pantallas de splash predeterminado proporcionadas en Córdoba como se describe arriba, utilice el valor`screen`.

La segunda línea establece la demora por defecto de cuánto el splashscreen aparece en milisegundos. Esto debería ser la hora de salida máxima esperada. El valor predeterminado para SplashScreenDelay es ms 3000.

Finalmente, la pantalla de bienvenida debe estar presente sólo el tiempo necesario. Cuando su aplicación ha comenzado y se ha cargado el webview, su aplicación debe ocultar la pantalla de bienvenida para que su vista principal es visible. Debido a la hora de inicio de la aplicación variará un poco debido a una serie de factores, se recomienda que su aplicación invocar explícitamente `navigator.splashscreen.hide()` en el método Javascript que responde a la `[deviceready](../cordova/events/events.deviceready.html)` evento. De lo contrario la pantalla de bienvenida será visible para el valor de SplashScreenDelay que ha configurado anteriormente. Este enfoque orientado al evento es altamente recomendable versus tener la pantalla visible para siempre una duración fija.

## Pantallas de inicio para la plataforma iOS

Copiar imágenes de pantalla de splash en el proyecto iOS `Resources/splash` Directorio. Sólo agregar esas imágenes para los dispositivos que desea apoyar, como el iPad o el iPhone. El tamaño de cada imagen debe ser:

*   Default-568h@2x~iphone.png (640x1136 pixels)
*   Default-Landscape@2x~ipad.png (1496 x 2048 píxeles)
*   Default-Landscape~ipad.png (1024x748 pixels)
*   Default-Portrait@2x~ipad.png (1536x2008 pixels)
*   Default-Portrait~ipad.png (768x1004 pixels)
*   Default@2x~iphone.png (640x960 pixels)
*   Default~iphone.png (320x480 pixels)

## Pantallas de inicio para la plataforma BlackBerry 10

Añadir un elemento de borde: splash en config.xml para cada resolución y configuración regional que desea apoyar:

[http://developer.BlackBerry.com/HTML5/Documentation/rim\_splash\_element.html][4]

 [4]: http://developer.blackberry.com/html5/documentation/rim_splash_element.html