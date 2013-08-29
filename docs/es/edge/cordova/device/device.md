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

# Dispositivo

> El objeto `device` describe del dispositivo hardware y software.

## Propiedades

*   device.name
*   device.cordova
*   device.platform
*   device.uuid
*   device.version
*   device.model

## Ámbito de variable

Puesto que el `device` se asigna al objeto de `window`, es implícitamente en el ámbito global.

    // These reference the same `device`
    var phoneName = window.device.name;
    var phoneName = device.name;
    

## Acceso a la función

A partir de la versión 3.0, Cordova implementa nivel de dispositivo APIs como *plugins*. Uso de la CLI `plugin` comando, que se describe en la interfaz de línea de comandos, para añadir o eliminar esta característica para un proyecto:

        $ cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-device.git
        $ cordova plugin rm org.apache.cordova.core.device
    

Estos comandos se aplican a todas las plataformas específicas, sino modificar las opciones de configuración específicas de la plataforma que se describen a continuación:

*   Android
    
        (in app/res/xml/config.xml) < nombre de la función = "Device" >< nombre param = "android-paquete" value="org.apache.cordova.Device" / >< / característica > (en app/AndroidManifest.xml) < usos-permiso android:name="android.permission.READ_PHONE_STATE" / >
        

*   BlackBerry WebWorks
    
        (in www/plugins.xml) < nombre de la función = "Dispositivo" >< nombre param = "blackberry-paquete" value="org.apache.cordova.device.Device" / >< / característica > (en www/config.xml) < cuentan con id="blackberry.app" requiere = "true" versión = "1.0.0.0" / >< del borde: permisos >< rim: permiso > read_device_identifying_information < / borde: permiso >< / borde: permisos >
        

*   Windows Phone (en`Properties/WPAppManifest.xml`)
    
        < capacidades >< nombre de capacidad = "ID_CAP_WEBBROWSERCOMPONENT" / >< nombre de capacidad = "ID_CAP_IDENTITY_DEVICE" / >< nombre de capacidad = "ID_CAP_IDENTITY_USER" / >< / capacidades >
        
    
    Referencia: [manifiesto de aplicación para Windows Phone][1]

*   Tizen (en`config.xml`)
    
        < nombre de la función = "http://tizen.org/api/systeminfo" requerida = "true" / >
        
    
    Referencia: [aplicación manifiesto de aplicación Web Tizen][2]

 [1]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx
 [2]: https://developer.tizen.org/help/topic/org.tizen.help.gs/Creating%20a%20Project.html?path=0_1_1_3#8814682_CreatingaProject-EditingconfigxmlFeatures

Algunas plataformas que soportan esta característica sin necesidad de ninguna configuración especial. Ver soporte de plataforma para tener una visión general.