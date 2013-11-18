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

# Povezave

> Z `connection` predmet, prek `navigator.connection` , zagotavlja informacije o napravi mobilnega in wifi povezavo.

## Lastnosti

*   connection.type

## Konstante

*   Connection.UNKNOWN
*   Connection.ETHERNET
*   Connection.WIFI
*   Connection.CELL_2G
*   Connection.CELL_3G
*   Connection.CELL_4G
*   Connection.CELL
*   Connection.NONE

## Dostop funkcijo

Od različice 3.0, Cordova izvaja naprava ravni API kot *plugins*. Uporabite CLI je `plugin` ukaz, opisane v The vmesnik ukazne vrstice, da dodate ali odstranite to funkcijo za projekt:

        $ cordova plugin add org.apache.cordova.network-information
        $ cordova plugin ls
        [ 'org.apache.cordova.network-information' ]
        $ cordova plugin rm org.apache.cordova.network-information
    

Ti ukazi veljajo za vse ciljne platforme, vendar spremenite posamezne nastavitve spodaj opisani:

*   Android
    
        (in app/res/xml/config.xml)
        <feature name="NetworkStatus">
            <param name="android-package" value="org.apache.cordova.networkinformation.NetworkManager" />
        </feature>
        
        (in app/AndroidManifest.xml)
        <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
        

*   BlackBerry WebWorks
    
        (in www/plugins.xml)
        <feature name="Network Status">
            <param name="blackberry-package" value="org.apache.cordova.network.Network" />
        </feature>
        

*   iOS (v imeniku imenovan uporabe`config.xml`)
    
        <feature name="NetworkStatus">
            <param name="ios-package" value="CDVConnection" />
        </feature>
        

*   Windows Phone (v`Properties/WPAppManifest.xml`)
    
        <Capabilities>
            <Capability Name="ID_CAP_NETWORKING" />
        </Capabilities>
        
    
    Sklic: [manifestu za program za Windows Phone][1]

*   Tizen (v`config.xml`)
    
        <feature name="http://tizen.org/api/systeminfo" required="true"/>
        
    
    Sklic: [manifestu za program za Tizen spletni program][2]

 [1]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx
 [2]: https://developer.tizen.org/help/topic/org.tizen.help.gs/Creating%20a%20Project.html?path=0_1_1_3#8814682_CreatingaProject-EditingconfigxmlFeatures

Nekatere platforme lahko podpira to funkcijo ne zahtevati poljuben poseben zunanja podoba. Videti podpora platformo za pregled.