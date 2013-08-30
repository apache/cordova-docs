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

# Événements

> Événements de cycle de vie de Cordova.

## Types d'événements

*   deviceready
*   pause
*   curriculum vitae
*   en ligne
*   en mode hors connexion
*   ButtonBack
*   batterycritical
*   batterylow
*   batterystatus
*   bouton menu
*   bouton recherche
*   startcallbutton
*   endcallbutton
*   volumedownbutton
*   volumeupbutton

## Accéder à la fonctionnalité

Depuis la version 3.0, Cordova implements état de la batterie et d'autres API de niveau périphérique comme les *plugins*. Accès à tous les autres événements non liés à l'état de la batterie sont activées par défaut. Utiliser de la CLI `plugin` commande, décrite dans l'Interface de ligne de commande, d'activer ou de désactiver les événements de la batterie :

        $ cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-battery-status.git
        $ cordova plugin rm org.apache.cordova.core.battery-status
    

Ces commandes s'appliquent à toutes les plates-formes ciblées, mais modifier les paramètres de configuration spécifiques à la plateforme décrites ci-dessous :

*   Android
    
        (in app/res/XML/config.Xml) < nom de la fonction = "Batterie" >< param name = "android-package" value="org.apache.cordova.BatteryListener" / >< / fiction > (dans app/AndroidManifest.xml) < permissions des utilisations android:name="android.permission.BROADCAST_STICKY" / >
        

*   BlackBerry WebWorks
    
        (in www/plugins.Xml) < nom de la fonction = "Batterie" >< param nom = "blackberry-package" value="org.apache.cordova.battery.Battery" / >< / fiction > (dans www/config.xml) < id="blackberry.app en vedette" requis = "true" version = "1.0.0.0" / >< id="blackberry.app.event en vedette" requis = "true" version = "1.0.0.0" / >< id="blackberry.system.event en vedette" requis = "true" version = "1.0.0.0" / >
        

*   iOS (en`config.xml`)
    
        < nom de la fonction = « Batterie » >< param name = « ios-paquet » value = « CDVBattery » / >< / fiction >
        

*   Paciarelli (dans`config.xml`)
    
        < nom de la fonction = « http://tizen.org/api/systeminfo » requis = « true » / >
        
    
    Référence : [manifeste d'Application pour l'Application Web paciarelli][1]

 [1]: https://developer.tizen.org/help/topic/org.tizen.help.gs/Creating%20a%20Project.html?path=0_1_1_3#8814682_CreatingaProject-EditingconfigxmlFeatures

Certaines plates-formes peuvent prendre en charge cette fonctionnalité sans nécessiter aucune configuration spéciale. Voir plate-forme prise en charge pour une vue d'ensemble.