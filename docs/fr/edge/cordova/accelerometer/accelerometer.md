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

# Accéléromètre

> Capture le mouvement d'un appareil dans l'espace sur les axes *x*, *y* et *z* .

## Méthodes

*   accelerometer.getCurrentAcceleration
*   accelerometer.watchAcceleration
*   accelerometer.clearWatch

## Arguments

*   accelerometerSuccess
*   accelerometerError
*   accelerometerOptions

## Objets (lecture seule)

*   Acceleration

## Accéder à la fonctionnalité

Depuis la version 3.0, Cordova implémente les API liées à l'appareil en tant que *plugins*. Utiliser la commande `plugin` de l'Interface en Ligne de Commande, décrite dans la section intitulée L'Interface en Ligne de Commande, afin d'ajouter ou retirer cette fonctionnalité à un projet :

        $ cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-device-motion.git
        $ cordova plugin rm org.apache.cordova.core.device-motion
    

Ces commandes s'appliquent à toutes les plates-formes ciblées mais modifient les paramètres de configuration spécifiques aux différentes plates-formes tel que décrit ci-dessous :

*   Android (dans`app/res/xml/config.xml`)
    
        < nom de la fonction = "Accéléromètre" >< param name = "android-package" value="org.apache.cordova.AccelListener" / >< / fiction >
        

*   BlackBerry WebWorks
    
        (in www/plugins.Xml) < nom de la fonction = "Accéléromètre" >< param name = "blackberry-package" value="org.apache.cordova.accelerometer.Accelerometer" / >< / fiction > (dans www/config.xml) < id="blackberry.system en vedette" requis = "true" version = "1.0.0.0" / >< id="org.apache.cordova en vedette" requis = "true" version = "1.0.0" / >
        

*   iOS (en`config.xml`)
    
        < nom de la fonction = « Accéléromètre » >< param name = « ios-paquet » value = « CDVAccelerometer » / >< / fiction >
        

*   Windows Phone (en`Properties/WPAppManifest.xml`)
    
        < capacités >< capacité nom = « ID_CAP_SENSORS » / >< / capacités >
        
    
    Référence : [Manifeste d'Application pour Windows Phone][1]

 [1]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx

Certaines plates-formes peuvent prendre en charge cette fonctionnalité sans nécessiter aucune configuration spéciale. Voir plate-forme prise en charge pour une vue d'ensemble.