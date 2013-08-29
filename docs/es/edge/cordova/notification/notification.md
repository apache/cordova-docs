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

# Notificación

> Notificaciones de dispositivo audible, visual y táctil.

## Métodos

*   `notification.alert`
*   `notification.confirm`
*   `notification.prompt`
*   `notification.beep`
*   `notification.vibrate`

## Acceso a la función

A partir de la versión 3.0, Cordova implementa nivel de dispositivo APIs como *plugins*. Uso de la CLI `plugin` comando, que se describe en la interfaz de línea de comandos, para añadir o eliminar esta característica para un proyecto:

        $ cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-vibration.git
        $ cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-dialogs.git
        $ cordova plugin rm org.apache.cordova.core.dialogs
        $ cordova plugin rm org.apache.cordova.core.vibration
    

Estos comandos se aplican a todas las plataformas específicas, sino modificar las opciones de configuración específicas de la plataforma que se describen a continuación:

*   Android
    
        (in app/res/xml/config.xml) < nombre de la función = "Notificación" >< nombre param = "android-paquete" value="org.apache.cordova.Notification" / >< / característica > (en app/AndroidManifest.xml) < usos-permiso android:name="android.permission.VIBRATE" / >
        

*   BlackBerry WebWorks
    
        (in www/plugins.xml) < nombre de la función = "Notificación" >< nombre param = "blackberry-paquete" value="org.apache.cordova.notification.Notification" / >< / característica > (en www/config.xml) < cuentan con id="blackberry.ui.dialog" / >
        

*   (en iOS`config.xml`)
    
        < nombre de la función = "Notificación" >< nombre param = "ios-paquete" value = "CDVNotification" / >< / característica >
        

Algunas plataformas que soportan esta característica sin necesidad de ninguna configuración especial. Ver soporte de plataforma para tener una visión general.