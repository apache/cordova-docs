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

# Notification

> Notifications de l'appareil visuel, sonore et tactile.

## Méthodes

*   `notification.Alert`
*   `notification.Confirm`
*   `notification.prompt`
*   `notification.Beep`
*   `notification.VIBRATE`

## Accéder à la fonctionnalité

Depuis la version 3.0, Cordova implémente API au niveau du périphérique comme les *plugins*. Utiliser de la CLI `plugin` commande, décrite dans l'Interface de ligne de commande, d'ajouter ou de supprimer cette fonction pour un projet :

        $ cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-vibration.git
        $ cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-dialogs.git
        $ cordova plugin rm org.apache.cordova.core.dialogs
        $ cordova plugin rm org.apache.cordova.core.vibration
    

Ces commandes s'appliquent à toutes les plates-formes ciblées, mais modifier les paramètres de configuration spécifiques à la plateforme décrites ci-dessous :

*   Android
    
        (in app/res/XML/config.Xml) < nom de la fonction = "Notification" >< param name = "android-package" value="org.apache.cordova.Notification" / >< / fiction > (dans app/AndroidManifest.xml) < permissions des utilisations android:name="android.permission.VIBRATE" / >
        

*   BlackBerry WebWorks
    
        (in www/plugins.Xml) < nom de la fonction = "Notification" >< param name = "blackberry-package" value="org.apache.cordova.notification.Notification" / >< / fiction > (dans www/config.xml) < disposent id="blackberry.ui.dialog" / >
        

*   iOS (en`config.xml`)
    
        < nom de la fonction = « Notification » >< param name = « ios-paquet » value = « CDVNotification » / >< / fiction >
        

Certaines plates-formes peuvent prendre en charge cette fonctionnalité sans nécessiter aucune configuration spéciale. Voir plate-forme prise en charge pour une vue d'ensemble.