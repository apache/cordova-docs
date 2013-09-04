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

# Notifica

> Notifiche di dispositivi visivi, acustici e tattili.

## Metodi

*   `Notification.Alert`
*   `Notification.Confirm`
*   `Notification.prompt`
*   `Notification.Beep`
*   `Notification.vibrate`

## La funzionalità di accesso

A partire dalla versione 3.0, Cordova implementa le API a livello di dispositivo come *plugin*. Utilizzare la CLI `plugin` comando, descritto in Command-Line Interface, aggiungere o rimuovere questa funzionalità per un progetto:

        $ cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-vibration.git
        $ cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-dialogs.git
        $ cordova plugin rm org.apache.cordova.core.dialogs
        $ cordova plugin rm org.apache.cordova.core.vibration
    

Questi comandi si applicano a tutte le piattaforme mirate, ma modificano le impostazioni di configurazione specifiche della piattaforma descritte di seguito:

*   Android
    
        (in app/res/XML/config.Xml) < nome funzione = "Notifica" >< nome param = "android-pacchetto" value="org.apache.cordova.Notification" / >< / caratteristica > (in app/AndroidManifest.xml) < android:name="android.permission.VIBRATE usi-autorizzazione" / >
        

*   BlackBerry WebWorks
    
        (in www/plugins.Xml) < nome funzione = "Notifica" >< nome param = "blackberry-pacchetto" value="org.apache.cordova.notification.Notification" / >< / caratteristica > (in www/config.xml) < presentano id="blackberry.ui.dialog" / >
        

*   iOS (in`config.xml`)
    
        < nome funzione = "Notifica" >< param nome = valore "ios-pacchetto" = "CDVNotification" / >< / caratteristica >
        

Alcune piattaforme possono supportare questa funzionalità senza richiedere alcuna configurazione speciale. Per una panoramica, vedere supporto della piattaforma.