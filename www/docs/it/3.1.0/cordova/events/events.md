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
---

# Eventi

> Eventi del ciclo di vita di Cordova.

## Tipi di evento

*   <a href="events.deviceready.html">deviceready</a>
*   <a href="events.pause.html">pausa</a>
*   <a href="events.resume.html">curriculum</a>
*   <a href="events.online.html">online</a>
*   <a href="events.offline.html">non in linea</a>
*   <a href="events.backbutton.html">BackButton</a>
*   <a href="events.batterycritical.html">batterycritical</a>
*   <a href="events.batterylow.html">batterylow</a>
*   <a href="events.batterystatus.html">batterystatus</a>
*   <a href="events.menubutton.html">pulsante menu</a>
*   <a href="events.searchbutton.html">SearchButton</a>
*   <a href="events.startcallbutton.html">startcallbutton</a>
*   <a href="events.endcallbutton.html">endcallbutton</a>
*   <a href="events.volumedownbutton.html">volumedownbutton</a>
*   <a href="events.volumeupbutton.html">volumeupbutton</a>

## La funzionalità di accesso

A partire dalla versione 3.0, stato batteria implementa di Cordova e altre API a livello di dispositivo come *plugin*. Accesso a tutti gli altri eventi non correlati allo stato della batteria sono abilitati per impostazione predefinita. Utilizzare la CLI `plugin` comando, descritto in Command-Line Interface, per abilitare o disabilitare gli eventi batteria:

        $ cordova plugin add org.apache.cordova.battery-status
        $ cordova plugin ls
        [ 'org.apache.cordova.battery-status' ]
        $ cordova plugin rm org.apache.cordova.battery-status
    

Questi comandi si applicano a tutte le piattaforme mirate, ma modificano le impostazioni di configurazione specifiche della piattaforma descritte di seguito:

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
        

*   iOS (in`config.xml`)
    
        <feature name="Battery">
            <param name="ios-package" value="CDVBattery" />
        </feature>
        

*   Tizen (in`config.xml`)
    
        <feature name="http://tizen.org/api/systeminfo" required="true"/>
        
    
    Riferimento: il [manifesto dell'applicazione per applicazione Web Tizen][1]

 [1]: https://developer.tizen.org/help/topic/org.tizen.help.gs/Creating%20a%20Project.html?path=0_1_1_3#8814682_CreatingaProject-EditingconfigxmlFeatures

Alcune piattaforme possono supportare questa funzionalità senza richiedere alcuna configurazione speciale. Vedere *Supporto piattaforma* nella sezione panoramica.