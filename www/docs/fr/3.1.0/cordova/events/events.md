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

title: Évènements
---

# Évènements

> Évènements du cycle de vie de Cordova.

## Types d'évènements

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

## Accéder à la fonctionnalité

Depuis la version 3.0, Cordova implémente les API liées à l'appareil, telles que l'état de la batterie et autres, en tant que *plugins*. L'accès à tous les autres évènements non liés à l'état de la batterie est actif par défaut. Utiliser la commande `plugin` de l'Interface en Ligne de Commande, décrite dans la section intitulée L'Interface en Ligne de Commande, afin d'activer/désactiver les évènements liés à l'état de la batterie :

        $ cordova plugin add org.apache.cordova.battery-status
        $ cordova plugin ls
        [ 'org.apache.cordova.battery-status' ]
        $ cordova plugin rm org.apache.cordova.battery-status
    

Ces commandes s'appliquent à toutes les plates-formes ciblées mais modifient les paramètres de configuration spécifiques aux différentes plates-formes tel que décrit ci-dessous :

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
        

*   iOS (dans `config.xml`)
    
        <feature name="Battery">
            <param name="ios-package" value="CDVBattery" />
        </feature>
        

*   Paciarelli (dans `config.xml`)
    
        <feature name="http://tizen.org/api/systeminfo" required="true"/>
        
    
    Référence : [Manifeste d'Application pour Applications Web Paciarelli][1]

 [1]: https://developer.tizen.org/help/topic/org.tizen.help.gs/Creating%20a%20Project.html?path=0_1_1_3#8814682_CreatingaProject-EditingconfigxmlFeatures

Certaines plates-formes peuvent prendre en charge cette fonctionnalité sans nécessiter aucune configuration spéciale. Voir *Support de plate-forme* dans la section vue d'ensemble.