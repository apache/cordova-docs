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

# Accelerometro

> Cattura dispositivo movimento nella direzione *x*, *y*e *z* .

## Metodi

*   accelerometer.getCurrentAcceleration
*   accelerometer.watchAcceleration
*   accelerometer.clearWatch

## Argomenti

*   accelerometerSuccess
*   accelerometerError
*   accelerometerOptions

## Oggetti (sola lettura)

*   Accelerazione

## La funzionalità di accesso

A partire dalla versione 3.0, Cordova implementa le API a livello di dispositivo come *plugin*. Utilizzare la CLI `plugin` comando, descritto in Command-Line Interface, aggiungere o rimuovere questa funzionalità per un progetto:

        $ cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-device-motion.git
        $ cordova plugin rm org.apache.cordova.core.device-motion
    

Questi comandi si applicano a tutte le piattaforme mirate, ma modificano le impostazioni di configurazione specifiche della piattaforma descritte di seguito:

*   Android (in`app/res/xml/config.xml`)
    
        < nome funzione = "Accelerometro" >< nome param = "android-pacchetto" value="org.apache.cordova.AccelListener" / >< / caratteristica >
        

*   BlackBerry WebWorks
    
        (in www/plugins.Xml) < nome funzione = "Accelerometro" >< param nome = "blackberry-pacchetto" value="org.apache.cordova.accelerometer.Accelerometer" / >< / caratteristica > (in www/config.xml) < presentano id="blackberry.system" richiesto = "true" versione = "1.0.0.0" / >< presentano id="org.apache.cordova" richiesto = "true" versione = "1.0.0" / >
        

*   iOS (in`config.xml`)
    
        < nome funzione = "Accelerometro" >< param nome = valore "ios-pacchetto" = "CDVAccelerometer" / >< / caratteristica >
        

*   Windows Phone (in`Properties/WPAppManifest.xml`)
    
        < funzionalità >< capacità nome = "ID_CAP_SENSORS" / >< / funzionalità >
        
    
    Riferimento: il [manifesto dell'applicazione per Windows Phone][1]

 [1]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx

Alcune piattaforme possono supportare questa funzionalità senza richiedere alcuna configurazione speciale. Per una panoramica, vedere supporto della piattaforma.