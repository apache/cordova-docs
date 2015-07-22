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

title: Eventos
---

# Eventos

> Eventos de ciclo de vida de Cordova.

## Tipos de eventos

*   [deviceready](events.deviceready.html)
*   [pause](events.pause.html)
*   [resume](events.resume.html)
*   [online](events.online.html)
*   [offline](events.offline.html)
*   [backbutton](events.backbutton.html)
*   [batterycritical](events.batterycritical.html)
*   [batterylow](events.batterylow.html)
*   [batterystatus](events.batterystatus.html)
*   [menubutton](events.menubutton.html)
*   [searchbutton](events.searchbutton.html)
*   [startcallbutton](events.startcallbutton.html)
*   [endcallbutton](events.endcallbutton.html)
*   [volumedownbutton](events.volumedownbutton.html)
*   [volumeupbutton](events.volumeupbutton.html)

## Acceso a la función

Desde la versión 3.0, batería Cordova implementos y otras API de nivel de dispositivo como *plugins*. Acceso a todos los demás eventos no relacionados con el estado de la batería están habilitados de forma predeterminada. Uso de la CLI `plugin` comando, que se describe en la interfaz de línea de comandos, para habilitar o deshabilitar eventos de batería:

        $ cordova plugin add org.apache.cordova.battery-status
        $ cordova plugin ls
        [ 'org.apache.cordova.battery-status' ]
        $ cordova plugin rm org.apache.cordova.battery-status
    

Estos comandos se aplican a todas las plataformas específicas, sino modificar las opciones de configuración específicas de la plataforma que se describen a continuación:

*   Android
    
        (in app/res/xml/config.xml)
        <feature name="Battery">
            <param name="android-package" value="org.apache.cordova.BatteryListener" />
        </feature>
        
        (in app/AndroidManifest.xml)
        <uses-permission android:name="android.permission.BROADCAST_STICKY" />
        

*   BlackBerry WebWorks
    
        (in www/plugins.xml)
        <feature name="Battery">
            <param name="blackberry-package" value="org.apache.cordova.battery.Battery" />
        </feature>
        
        (in www/config.xml)
        <feature id="blackberry.app"          required="true" version="1.0.0.0" />
        <feature id="blackberry.app.event"    required="true" version="1.0.0.0" />
        <feature id="blackberry.system.event" required="true" version="1.0.0.0" />
        

*   (en iOS`config.xml`)
    
        <feature name="Battery">
            <param name="ios-package" value="CDVBattery" />
        </feature>
        

*   Tizen (en`config.xml`)
    
        <feature name="http://tizen.org/api/systeminfo" required="true"/>
        
    
    Referencia: [aplicación manifiesto de aplicación Web Tizen][1]

 [1]: https://developer.tizen.org/help/topic/org.tizen.help.gs/Creating%20a%20Project.html?path=0_1_1_3#8814682_CreatingaProject-EditingconfigxmlFeatures

Algunas plataformas que soportan esta característica sin necesidad de ninguna configuración especial. Consulte *Soporte de la plataforma* en la sección de Resumen.