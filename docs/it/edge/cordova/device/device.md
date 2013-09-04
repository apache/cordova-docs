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

> Il `device` oggetto descrive il dispositivo hardware e software.

## Proprietà

*   Device.Name
*   Device.Cordova
*   Device
*   Device.UUID
*   Device.Version
*   Device.Model

## Portata variabile

Poiché `device` viene assegnato il `window` dell'oggetto, è implicitamente in ambito globale.

    // These reference the same `device`
    var phoneName = window.device.name;
    var phoneName = device.name;
    

## La funzionalità di accesso

A partire dalla versione 3.0, Cordova implementa le API a livello di dispositivo come *plugin*. Utilizzare la CLI `plugin` comando, descritto in Command-Line Interface, aggiungere o rimuovere questa funzionalità per un progetto:

        $ cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-device.git
        $ cordova plugin rm org.apache.cordova.core.device
    

Questi comandi si applicano a tutte le piattaforme mirate, ma modificano le impostazioni di configurazione specifiche della piattaforma descritte di seguito:

*   Android
    
        (in app/res/XML/config.Xml) < nome funzione = "Device" >< nome param = "android-pacchetto" value="org.apache.cordova.Device" / >< / caratteristica > (in app/AndroidManifest.xml) < android:name="android.permission.READ_PHONE_STATE usi-autorizzazione" / >
        

*   BlackBerry WebWorks
    
        (in www/plugins.Xml) < nome funzione = "Device" >< param nome = "blackberry-pacchetto" value="org.apache.cordova.device.Device" / >< / caratteristica > (in www/config.xml) < presentano id="blackberry.app" richiesto = "true" versione = "1.0.0.0" / >< orlo: autorizzazioni >< orlo: permesso > read_device_identifying_information < / orlo: permesso >< / orlo: autorizzazioni >
        

*   Windows Phone (in`Properties/WPAppManifest.xml`)
    
        < funzionalità >< capacità nome = "ID_CAP_WEBBROWSERCOMPONENT" / >< capacità nome = "ID_CAP_IDENTITY_DEVICE" / >< capacità nome = "ID_CAP_IDENTITY_USER" / >< / funzionalità >
        
    
    Riferimento: il [manifesto dell'applicazione per Windows Phone][1]

*   Tizen (in`config.xml`)
    
        < nome funzione = "http://tizen.org/api/systeminfo" necessaria = "true" / >
        
    
    Riferimento: il [manifesto dell'applicazione per applicazione Web Tizen][2]

 [1]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx
 [2]: https://developer.tizen.org/help/topic/org.tizen.help.gs/Creating%20a%20Project.html?path=0_1_1_3#8814682_CreatingaProject-EditingconfigxmlFeatures

Alcune piattaforme possono supportare questa funzionalità senza richiedere alcuna configurazione speciale. Per una panoramica, vedere supporto della piattaforma.