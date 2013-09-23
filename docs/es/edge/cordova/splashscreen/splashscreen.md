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

# SplashScreen

> Muestra y oculta la pantalla de la aplicación.

## Métodos

*   splashscreen.show
*   splashscreen.hide

## Acceso a la función

A partir de la versión 3.0, Cordova implementa nivel de dispositivo APIs como *plugins*. Uso de la CLI `plugin` comando, que se describe en la interfaz de línea de comandos, para añadir o eliminar esta característica para un proyecto:

        $ cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-splashscreen.git
        $ cordova plugin rm org.apache.cordova.core.splashscreen
    

Estos comandos se aplican a todas las plataformas específicas, sino modificar las opciones de configuración específicas de la plataforma que se describen a continuación:

*   Android (en`app/res/xml/config.xml`)
    
        <feature name="SplashScreen">
            <param name="android-package" value="org.apache.cordova.SplashScreen" />
        </feature>
        

*   (en iOS`config.xml`)
    
        <feature name="SplashScreen">
            <param name="ios-package" value="CDVSplashScreen" />
        </feature>
        

Algunas plataformas que soportan esta característica sin necesidad de ninguna configuración especial. Consulte *Soporte de la plataforma* en la sección de Resumen.

## Configuración

### Android

1.  Copiar la imagen en pantalla splash en `res/drawable` del proyecto Android. El tamaño de cada imagen debe ser:

*   Xlarge (xhdpi): al menos 960 × 720
*   grande (IPAP): al menos 640 × 480
*   medio (mdpi): al menos 470 × 320
*   pequeño (ldpi): por lo menos 426 × 320
    
    Usted debe usar una [imagen 9-parche][1] para tu pantalla de presentación.

 [1]: https://developer.android.com/tools/help/draw9patch.html

1.  En el método `onCreate` de la clase que extiende `DroidGap`, agregue las dos líneas siguientes:
    
        super.setIntegerProperty("splashscreen", R.drawable.splash);
        super.loadUrl(Config.getStartUrl(), 10000);
        
    
    La primera línea establece la imagen que se mostrará como la pantalla de bienvenida. Si llama a `splash.png` que no sea tu imagen, tienes que modificar esta línea. La segunda línea es la normal `super.loadUrl`, pero tiene un segundo parámetro que especifica un valor de tiempo de espera para la pantalla de bienvenida. En este ejemplo, la pantalla muestra durante 10 segundos. Para despedir a la pantalla una vez que la aplicación recibe el evento `deviceready`, llame al método `navigator.splashscreen.hide()`.

### iOS

Copiar tus imágenes en pantalla splash en el proyecto iOS `Resources/splash` Directorio. Sólo agregar las imágenes de los dispositivos que desea apoyar, como el iPad o el iPhone. El tamaño de cada imagen debe ser:

*   Default-568h@2x~iphone.png (640x1136 pixels)
*   Default-Landscape@2x~ipad.png (2048x1496 pixels)
*   Default-Landscape~ipad.png (1024x748 pixels)
*   Default-Portrait@2x~ipad.png (1536x2008 pixels)
*   Default-Portrait~ipad.png (768x1004 pixels)
*   Default@2x~iphone.png (640x960 pixels)
*   Default~iphone.png (320x480 pixels)

### BlackBerry 10

Copiar tus imágenes en pantalla splash ' res/screen/blackberry10' en el proyecto. Los nombres de archivo deben ser:

*   splash-1280x768.png (1280x768 pixels)
*   splash-720x720.png (720x720 pixels)
*   splash-768x1280.png (768x1280 pixels)