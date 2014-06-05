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

        $ cordova plugin add org.apache.cordova.device-motion
        $ cordova plugin ls
        [ 'org.apache.cordova.device-motion' ]
        $ cordova plugin rm org.apache.cordova.device-motion
    

Questi comandi si applicano a tutte le piattaforme mirate, ma modificano le impostazioni di configurazione specifiche della piattaforma descritte di seguito:

*   Android (in`app/res/xml/config.xml`)
    
        <feature name="Accelerometer">
            <param name="android-package" value="org.apache.cordova.AccelListener" />
        </feature>
        

*   BlackBerry WebWorks
    
        (in www/plugins.xml)
        <feature name="Accelerometer">
            <param name="blackberry-package" value="org.apache.cordova.accelerometer.Accelerometer" />
        </feature>
        
        (in www/config.xml)
        <feature id="blackberry.system"  required="true" version="1.0.0.0" />
        <feature id="org.apache.cordova" required="true" version="1.0.0" />
        

*   iOS (in`config.xml`)
    
        <feature name="Accelerometer">
            <param name="ios-package" value="CDVAccelerometer" />
        </feature>
        

*   Windows Phone (in`Properties/WPAppManifest.xml`)
    
        <Capabilities>
            <Capability Name="ID_CAP_SENSORS" />
        </Capabilities>
        
    
    Riferimento: il [manifesto dell'applicazione per Windows Phone][1]

 [1]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx

Alcune piattaforme possono supportare questa funzionalità senza richiedere alcuna configurazione speciale. Vedere *Supporto piattaforma* nella sezione panoramica.