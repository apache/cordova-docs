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

# Appareil

> L'objet `device` décrit les caractéristiques matérielles et logicielles de l'appareil.

## Propriétés

*   device.name
*   device.cordova
*   device.platform
*   device.uuid
*   device.version
*   device.model

## Portée des variables

Étant donné que `device` est affecté à l'object `window`, il s'agit donc implicitement d'une variable globale.

    // These reference the same `device`
    var phoneName = window.device.name;
    var phoneName = device.name;
    

## Accéder à la fonctionnalité

Depuis la version 3.0, Cordova implémente les API liées à l'appareil en tant que *plugins*. Utiliser la commande `plugin` de l'Interface en Ligne de Commande, décrite dans la section intitulée L'Interface en Ligne de Commande, afin d'ajouter ou retirer cette fonctionnalité à un projet :

        $ cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-device.git
        $ cordova plugin rm org.apache.cordova.core.device
    

Ces commandes s'appliquent à toutes les plates-formes ciblées mais modifient les paramètres de configuration spécifiques aux différentes plates-formes tel que décrit ci-dessous :

*   Android
    
        (in app/res/XML/config.Xml) < nom de la fonction = "Device" >< param name = "android-package" value="org.apache.cordova.Device" / >< / fiction > (dans app/AndroidManifest.xml) < permissions des utilisations android:name="android.permission.READ_PHONE_STATE" / >
        

*   BlackBerry WebWorks
    
        (in www/plugins.Xml) < nom de la fonction = "Device" >< param name = "blackberry-package" value="org.apache.cordova.device.Device" / >< / fiction > (dans www/config.xml) < id="blackberry.app en vedette" requis = "true" version = "1.0.0.0" / >< jante : autorisations >< jante : permis > read_device_identifying_information < / jante : permis >< / jante : autorisations >
        

*   Windows Phone (en`Properties/WPAppManifest.xml`)
    
        < capacités >< nom de fonctionnalité = « ID_CAP_WEBBROWSERCOMPONENT » / >< capacité nom = « ID_CAP_IDENTITY_DEVICE » / >< capacité nom = « ID_CAP_IDENTITY_USER » / >< / capacités >
        
    
    Référence : [manifeste d'Application pour Windows Phone][1]

*   Paciarelli (dans`config.xml`)
    
        < nom de la fonction = « http://tizen.org/api/systeminfo » requis = « true » / >
        
    
    Référence : [manifeste d'Application pour l'Application Web paciarelli][2]

 [1]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx
 [2]: https://developer.tizen.org/help/topic/org.tizen.help.gs/Creating%20a%20Project.html?path=0_1_1_3#8814682_CreatingaProject-EditingconfigxmlFeatures

Certaines plates-formes peuvent prendre en charge cette fonctionnalité sans nécessiter aucune configuration spéciale. Voir plate-forme prise en charge pour une vue d'ensemble.