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

        $ cordova plugin add org.apache.cordova.dialogs
        $ cordova plugin add org.apache.cordova.vibration
        $ cordova plugin ls
        [ 'org.apache.cordova.dialogs',
          'org.apache.cordova.vibration' ]
        $ cordova plugin rm org.apache.cordova.dialogs
        $ cordova plugin rm org.apache.cordova.vibration
    

Estos comandos se aplican a todas las plataformas específicas, sino modificar las opciones de configuración específicas de la plataforma que se describen a continuación:

*   Android
    
        (in app/res/xml/config.xml)
        <feature name="Notification">
            <param name="android-package" value="org.apache.cordova.Notification" />
        </feature>
        
        (in app/AndroidManifest.xml)
        <uses-permission android:name="android.permission.VIBRATE" />
        

*   BlackBerry WebWorks
    
        (in www/plugins.xml)
        <feature name="Notification">
            <param name="blackberry-package" value="org.apache.cordova.notification.Notification" />
        </feature>
        
        (in www/config.xml)
        <feature id="blackberry.ui.dialog" />
        

*   (en iOS`config.xml`)
    
        <feature name="Notification">
            <param name="ios-package" value="CDVNotification" />
        </feature>
        

Algunas plataformas que soportan esta característica sin necesidad de ninguna configuración especial. Consulte *Soporte de la plataforma* en la sección de Resumen.