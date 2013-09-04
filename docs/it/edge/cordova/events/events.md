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

# Eventi

> Eventi del ciclo di vita di Cordova.

## Tipi di evento

*   deviceready
*   pausa
*   curriculum
*   online
*   non in linea
*   BackButton
*   batterycritical
*   batterylow
*   batterystatus
*   pulsante menu
*   SearchButton
*   startcallbutton
*   endcallbutton
*   volumedownbutton
*   volumeupbutton

## La funzionalità di accesso

A partire dalla versione 3.0, stato batteria implementa di Cordova e altre API a livello di dispositivo come *plugin*. Accesso a tutti gli altri eventi non correlati allo stato della batteria sono abilitati per impostazione predefinita. Utilizzare la CLI `plugin` comando, descritto in Command-Line Interface, per abilitare o disabilitare gli eventi batteria:

        $ cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-battery-status.git
        $ cordova plugin rm org.apache.cordova.core.battery-status
    

Questi comandi si applicano a tutte le piattaforme mirate, ma modificano le impostazioni di configurazione specifiche della piattaforma descritte di seguito:

*   Android
    
        (in app/res/XML/config.Xml) < nome funzione = "Batteria" >< nome param = "android-pacchetto" value="org.apache.cordova.BatteryListener" / >< / caratteristica > (in app/AndroidManifest.xml) < android:name="android.permission.BROADCAST_STICKY usi-autorizzazione" / >
        

*   BlackBerry WebWorks
    
        (in www/plugins.Xml) < nome funzione = "Batteria" >< param nome = "blackberry-pacchetto" value="org.apache.cordova.battery.Battery" / >< / caratteristica > (in www/config.xml) < presentano id="blackberry.app" richiesto = "true" versione = "1.0.0.0" / >< presentano id="blackberry.app.event" richiesto = "true" versione = "1.0.0.0" / >< presentano id="blackberry.system.event" richiesto = "true" versione = "1.0.0.0" / >
        

*   iOS (in`config.xml`)
    
        < nome funzione = "Batteria" >< param nome = valore "ios-pacchetto" = "CDVBattery" / >< / caratteristica >
        

*   Tizen (in`config.xml`)
    
        < nome funzione = "http://tizen.org/api/systeminfo" necessaria = "true" / >
        
    
    Riferimento: il [manifesto dell'applicazione per applicazione Web Tizen][1]

 [1]: https://developer.tizen.org/help/topic/org.tizen.help.gs/Creating%20a%20Project.html?path=0_1_1_3#8814682_CreatingaProject-EditingconfigxmlFeatures

Alcune piattaforme possono supportare questa funzionalità senza richiedere alcuna configurazione speciale. Per una panoramica, vedere supporto della piattaforma.