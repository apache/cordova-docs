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

# Boussole

> Obtient la direction dans laquelle pointe l'appareil.

## Méthodes

*   compass.getCurrentHeading
*   compass.watchHeading
*   compass.clearWatch
*   compass.watchHeadingFilter (obsolète)
*   compass.clearWatchFilter (obsolète)

## Arguments

*   compassSuccess
*   compassError
*   compassOptions
*   compassHeading

## Accéder à la fonctionnalité

Depuis la version 3.0, Cordova implémente les APIs au niveau de l'appareil comme des *plugins*. Utilisez le `plugin` d'interface en ligne de commande, décrite dans l'Interface de ligne de commande, pour ajouter ou supprimer cette fonctionnalité pour un projet :

        $ cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-device-orientation.git
        $ cordova plugin rm org.apache.cordova.core.device-orientation
    

Ces commandes s'appliquent à toutes les plates-formes ciblées, mais modifient les paramètres de configuration spécifiques aux plateformes décrites ci-dessous :

*   Android (dans`app/res/xml/config.xml`)
    
        < nom de la fonction = "Boussole" >< param name = "android-package" value="org.apache.cordova.CompassListener" / >< / fiction >
        

*   iOS (en`config.xml`)
    
        < nom de la fonction = « Boussole » >< param name = « ios-paquet » value = « CDVLocation » / >< / fiction >
        

*   Windows Phone (en`Properties/WPAppManifest.xml`)
    
        < capacités >< capacité nom = « ID_CAP_SENSORS » / >< / capacités >
        
    
    Référence : [manifeste d'Application pour Windows Phone][1]

 [1]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx

Certaines plates-formes peuvent prendre en charge cette fonctionnalité sans nécessiter aucune configuration spéciale. Voir plate-forme prise en charge pour une vue d'ensemble.