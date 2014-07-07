* * *

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

## under the License.

# Iconos y pantallas de Splash

Esta sección le muestra cómo configurar el icono de una aplicación y opcionalmente la pantalla de inicio para varias plataformas, tanto si se trabaja en el CLI de Cordova (descrito en la sección La Interfaz de Línea de Comandos) o si se utilizan herramientas específicas de la plataforma SDK (detallada en las guías de plataforma).

## Configurando los iconos en el CLI

Cuando trabajes en el CLI puedes definir los iconos de la app haciendo uso del elemento `<icon>` (`config.xml`). Si no se especifica un icono se utilizara el logo de Apache Cordova.

        <icon src="res/ios/icon.png" platform="ios" width="57" height="57" density="mdpi" />
    

Fuente: (requerido) especifica la ubicación del archivo de imagen, en relación a su directorio de proyecto

platform: plataforma de destino (opcional)

width: anchura de icono en píxeles (opcional)

height: altura del icono en píxeles (opcional)

density: específico de android, especifica la densidad del icono (opcional)

Puede utilizar la siguiente configuración para definir un icono único por defecto, que se utilizará para todas las plataformas.

        <icon src="res/icon.png" />
    

Para cada plataforma también puede definir un conjunto de iconos para adaptarse a distintas resoluciones de pantalla.

Amazon fuego OS

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
    

Blackberry10

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

         <platform name="ios">
                  <!-- iOS 7.0+ -->
                  <!-- iPhone / iPod Touch  -->
                  <icon src="res/ios/icon-60.png" width="60" height="60" />
                  <icon src="res/ios/icon-60@2x.png" width="120" height="120" />
                  <!-- iPad -->
                  <icon src="res/ios/icon-76.png" width="76" height="76" />
                  <icon src="res/ios/icon-76@2x.png" width="152" height="152" />
                  <!-- iOS 6.1 -->
                  <!-- Spotlight Icon -->
                  <icon src="res/ios/icon-40.png" width="40" height="40" />
                  <icon src="res/ios/icon-40@2x.png" width="80" height="80" />
                  <!-- iPhone / iPod Touch -->
                  <icon src="res/ios/icon.png" width="57" height="57" />
                  <icon src="res/ios/icon@2x.png" width="114" height="114" />
                  <!-- iPad -->
                  <icon src="res/ios/icon-72.png" width="72" height="72" />
                  <icon src="res/ios/icon-72@2x.png" width="144" height="144" />
                  <!-- iPhone Spotlight and Settings Icon -->
                  <icon src="res/ios/icon-small.png" width="29" height="29" />
                  <icon src="res/ios/icon-small@2x.png" width="58" height="58" />
                  <!-- iPad Spotlight and Settings Icon -->
                  <icon src="res/ios/icon-50.png" width="50" height="50" />
                  <icon src="res/ios/icon-50@2x.png" width="100" height="100" />
         </platform>
    

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

Utilizar la API Splashscreen para activar la visualización de la pantalla de presentación introductoria de una app en muchas plataformas. Cuando se trabaja en la CLI, archivos de código fuente de pantalla splash se encuentran dentro del proyecto `www/res/screens` subdirectorio.

Android especifica ambas imágenes de pantalla splash retrato y paisaje-orientada de baja, media, alta y extra alta resolución:

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

Coloque los archivos de [imagen 9-parche][1] en del proyecto Android `platforms/android/res/drawable*` directorios.

 [1]: https://developer.android.com/tools/help/draw9patch.html

El tamaño de cada uno debe ser:

*   Xlarge (xhdpi): al menos 960 × 720
*   grande (IPAP): al menos 640 × 480
*   medio (mdpi): al menos 470 × 320
*   pequeño (ldpi): por lo menos 426 × 320

Cuando se crea un nuevo proyecto Android, la pantalla de inicio por defecto imágenes siempre en la Córdoba muestra app ya debe estar presente en la `platforms/android/res/drawable*` directorios. No dude en sustituir estos con sus propias imágenes. Al proporcionar su propio toque imágenes en pantalla, no necesitas proporcionar la misma permutación de 8 como Cordova predeterminado que aquí. Más o menos optimización puede ser utilizado. El `drawable` nombres de directorio deben seguir las convenciones Android por apoyar a [tamaños de pantalla][2] y [recursos alternativos][3].

 [2]: http://developer.android.com/guide/practices/screens_support.html
 [3]: http://developer.android.com/guide/topics/resources/providing-resources.html#AlternativeResources

En el nivel superior `config.xml` archivo (no el que está en `platforms` ), agregue las siguientes preferencias:

    <preference name="SplashScreen" value="screen" />
    <preference name="SplashScreenDelay" value="10000" />
    

La primera línea establece la imagen que se mostrará como la pantalla de bienvenida. Este es el nombre del archivo de la png en el `drawable*` directorios, menos la `.png` extensión. El valor predeterminado para SplashScreen es `screen` (para el archivo `platforms/android/res/drawable*/screen.png` ), así que si usted nombrar la imagen nada aparte de `screen.png` en el `drawable*` directorios, necesitas añadir/modificar esta línea.

La segunda línea establece la demora por defecto de cuánto el splashscreen aparece en milisegundos. Esto debería ser la peor hora prevista. El valor predeterminado para SplashScreenDelay es ms 3000.

Finalmente, como una mejor práctica, la pantalla de bienvenida debe estar presente sólo el tiempo necesario. Cuando su aplicación ha comenzado y se ha cargado el webview, su aplicación debe ocultar la pantalla de bienvenida para que su vista principal es visible en cuanto esté listo. Debido a la hora de inicio de la aplicación variará un poco debido a una serie de factores como la velocidad de la CPU y de red, se recomienda que su aplicación invocar explícitamente `navigator.splashscreen.hide()` en el método JavaScript que responde a la `deviceready` evento. De lo contrario la pantalla de bienvenida será visible para el valor de SplashScreenDelay que ha configurado anteriormente, más de lo necesario que es probable. Este enfoque orientado al evento es altamente recomendable versus tener la pantalla visible para siempre una duración fija.

## Pantallas de inicio para la plataforma iOS

Copiar imágenes de pantalla de splash en el proyecto iOS `Resources/splash` Directorio. Sólo agregar esas imágenes para los dispositivos que desea apoyar, como el iPad o el iPhone. El tamaño de cada imagen debe ser:

*   Default-568h@2x~iphone.png (640x1136 pixels)
*   Default-Landscape@2x~ipad.png (2048x1496 pixels)
*   Default-Landscape~ipad.png (1024x748 pixels)
*   Default-Portrait@2x~ipad.png (1536x2008 pixels)
*   Default-Portrait~ipad.png (768x1004 pixels)
*   Default@2x~iphone.png (640x960 pixels)
*   Default~iphone.png (320x480 pixels)

## Pantallas de inicio para la plataforma BlackBerry 10

Añadir un elemento de borde: splash en config.xml para cada resolución y configuración regional que desea apoyar:

[http://developer.BlackBerry.com/HTML5/Documentation/rim\_splash\_element.html][4]

 [4]: http://developer.blackberry.com/html5/documentation/rim_splash_element.html