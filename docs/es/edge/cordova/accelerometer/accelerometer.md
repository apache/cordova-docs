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

# Acelerómetro

> Captura de movimiento del dispositivo en la dirección *x*, *y* y *z*.

## Métodos

*   accelerometer.getCurrentAcceleration
*   accelerometer.watchAcceleration
*   accelerometer.clearWatch

## Argumentos

*   accelerometerSuccess
*   accelerometerError
*   accelerometerOptions

## Objetos (sólo lectura)

*   Acceleration

## Acceso a la función

A partir de la versión 3.0, Cordova implementa nivel de dispositivo APIs como *plugins*. Utilice el comando `plugin` de la CLI, descrito en la interfaz de línea de comandos, para añadir o eliminar esta característica para un proyecto:

        $ cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-device-motion.git
        $ cordova plugin rm org.apache.cordova.core.device-motion
    

Estos comandos se aplican a todas las plataformas específicas, sino modificar las opciones de configuración específicas de la plataforma que se describen a continuación:

*   Android (en`app/res/xml/config.xml`)
    
        < nombre de la función = "Acelerometro" >< nombre param = "android-paquete" value="org.apache.cordova.AccelListener" / >< / característica >
        

*   BlackBerry WebWorks
    
        (in www/plugins.xml) < nombre de la función = "Acelerometro" >< nombre param = "blackberry-paquete" value="org.apache.cordova.accelerometer.Accelerometer" / >< / característica > (en www/config.xml) < cuentan con id="blackberry.system" requiere = "true" versión = "1.0.0.0" / >< cuentan con id="org.apache.cordova" requiere = "true" version = "1.0.0" / >
        

*   (en iOS`config.xml`)
    
        < nombre de la función = "Acelerometro" >< nombre param = "ios-paquete" value = "CDVAccelerometer" / >< / característica >
        

*   Windows Phone (en`Properties/WPAppManifest.xml`)
    
        < capacidades >< nombre de capacidad = "ID_CAP_SENSORS" / >< / capacidades >
        
    
    Referencia: [manifiesto de aplicación para Windows Phone][1]

 [1]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx

Algunas plataformas que soportan esta característica sin necesidad de ninguna configuración especial. Ver soporte de plataforma para tener una visión general.