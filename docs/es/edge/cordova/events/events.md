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

# Eventos

> Eventos de ciclo de vida de Cordova.

## Tipos de eventos

*   deviceready
*   pause
*   resume
*   online
*   offline
*   backbutton
*   batterycritical
*   batterylow
*   batterystatus
*   menubutton
*   searchbutton
*   startcallbutton
*   endcallbutton
*   volumedownbutton
*   volumeupbutton

## Acceso a la función

Desde la versión 3.0, batería Cordova implementos y otras API de nivel de dispositivo como *plugins*. Acceso a todos los demás eventos no relacionados con el estado de la batería están habilitados de forma predeterminada. Uso de la CLI `plugin` comando, que se describe en la interfaz de línea de comandos, para habilitar o deshabilitar eventos de batería:

        $ cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-battery-status.git
        $ cordova plugin rm org.apache.cordova.core.battery-status
    

Estos comandos se aplican a todas las plataformas específicas, sino modificar las opciones de configuración específicas de la plataforma que se describen a continuación:

*   Android
    
        (in app/res/xml/config.xml) < nombre de la función = "Batería" >< nombre param = "android-paquete" value="org.apache.cordova.BatteryListener" / >< / característica > (en app/AndroidManifest.xml) < usos-permiso android:name="android.permission.BROADCAST_STICKY" / >
        

*   BlackBerry WebWorks
    
        (in www/plugins.xml) < nombre de la función = "Batería" >< nombre param = "blackberry-paquete" value="org.apache.cordova.battery.Battery" / >< / característica > (en www/config.xml) < cuentan con id="blackberry.app" requiere = "true" versión = "1.0.0.0" / >< cuentan con id="blackberry.app.event" requiere = "true" versión = "1.0.0.0" / >< cuentan con id="blackberry.system.event" requiere = "true" version = "1.0.0.0" / >
        

*   (en iOS`config.xml`)
    
        < nombre de la función = "Batería" >< nombre param = "ios-paquete" value = "CDVBattery" / >< / característica >
        

*   Tizen (en`config.xml`)
    
        < nombre de la función = "http://tizen.org/api/systeminfo" requerida = "true" / >
        
    
    Referencia: [aplicación manifiesto de aplicación Web Tizen][1]

 [1]: https://developer.tizen.org/help/topic/org.tizen.help.gs/Creating%20a%20Project.html?path=0_1_1_3#8814682_CreatingaProject-EditingconfigxmlFeatures

Algunas plataformas que soportan esta característica sin necesidad de ninguna configuración especial. Ver soporte de plataforma para tener una visión general.