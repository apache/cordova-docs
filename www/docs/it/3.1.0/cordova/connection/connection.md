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

# Connessione

> Il `connection` oggetto, esposto tramite `navigator.connection` , fornisce informazioni sulla connessione wifi e cellulare del dispositivo.

## Proprietà

*   connection.type

## Costanti

*   Connection.UNKNOWN
*   Connection.ETHERNET
*   Connection.WIFI
*   Connection.CELL_2G
*   Connection.CELL_3G
*   Connection.CELL_4G
*   Connection.CELL
*   Connection.NONE

## La funzionalità di accesso

A partire dalla versione 3.0, Cordova implementa le API a livello di dispositivo come *plugin*. Utilizzare la CLI `plugin` comando, descritto in Command-Line Interface, aggiungere o rimuovere questa funzionalità per un progetto:

        $ cordova plugin add org.apache.cordova.network-information
        $ cordova plugin ls
        [ 'org.apache.cordova.network-information' ]
        $ cordova plugin rm org.apache.cordova.network-information
    

Questi comandi si applicano a tutte le piattaforme mirate, ma modificano le impostazioni di configurazione specifiche della piattaforma descritte di seguito:

*   Android
    
        (in app/res/xml/config.xml)
        <feature name="NetworkStatus">
            <param name="android-package" value="org.apache.cordova.NetworkManager" />
        </feature>
        
        (in app/AndroidManifest.xml)
        <uses-permission android:name="android.permission.INTERNET" />
        <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
        <uses-permission android:name="android.permission.READ_PHONE_STATE" />
        

*   BlackBerry WebWorks
    
        (in www/plugins.xml)
        <feature name="Network Status">
            <param name="blackberry-package" value="org.apache.cordova.network.Network" />
        </feature>
        

*   iOS (in`config.xml`)
    
        <feature name="NetworkStatus">
            <param name="ios-package" value="CDVConnection" />
        </feature>
        

*   Windows Phone (in`Properties/WPAppManifest.xml`)
    
        <Capabilities>
            <Capability Name="ID_CAP_NETWORKING" />
        </Capabilities>
        
    
    Riferimento: il [manifesto dell'applicazione per Windows Phone][1]

*   Tizen (in`config.xml`)
    
        <feature name="http://tizen.org/api/systeminfo" required="true"/>
        
    
    Riferimento: il [manifesto dell'applicazione per applicazione Web Tizen][2]

 [1]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx
 [2]: https://developer.tizen.org/help/topic/org.tizen.help.gs/Creating%20a%20Project.html?path=0_1_1_3#8814682_CreatingaProject-EditingconfigxmlFeatures

Alcune piattaforme possono supportare questa funzionalità senza richiedere alcuna configurazione speciale. Vedere *Supporto piattaforma* nella sezione panoramica.