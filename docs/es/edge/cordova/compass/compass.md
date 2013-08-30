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

# Brújula

> Obtiene la dirección que apunta el dispositivo.

## Métodos

*   compass.getCurrentHeading
*   compass.watchHeading
*   compass.clearWatch
*   compass.watchHeadingFilter (obsolete)
*   compass.clearWatchFilter (obsolete)

## Argumentos

*   compassSuccess
*   compassError
*   compassOptions
*   compassHeading

## Acceso a la función

A partir de la versión 3.0, Cordova implementa nivel de dispositivo APIs como *plugins*. Uso de la CLI `plugin` comando, que se describe en la interfaz de línea de comandos, para añadir o eliminar esta característica para un proyecto:

        $ cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-device-orientation.git
        $ cordova plugin rm org.apache.cordova.core.device-orientation
    

Estos comandos se aplican a todas las plataformas específicas, sino modificar las opciones de configuración específicas de la plataforma que se describen a continuación:

*   Android (en`app/res/xml/config.xml`)
    
        < nombre de la función = "Compass" >< nombre param = "android-paquete" value="org.apache.cordova.CompassListener" / >< / característica >
        

*   (en iOS`config.xml`)
    
        < nombre de la función = "Compass" >< nombre param = "ios-paquete" value = "CDVLocation" / >< / característica >
        

*   Windows Phone (en`Properties/WPAppManifest.xml`)
    
        < capacidades >< nombre de capacidad = "ID_CAP_SENSORS" / >< / capacidades >
        
    
    Referencia: [manifiesto de aplicación para Windows Phone][1]

 [1]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx

Algunas plataformas que soportan esta característica sin necesidad de ninguna configuración especial. Ver soporte de plataforma para tener una visión general.