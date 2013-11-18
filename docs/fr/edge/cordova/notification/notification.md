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

> Notifications visuelles, sonores et tactiles de l'appareil.

## Méthodes

*   `notification.alert`
*   `notification.Confirm`
*   `notification.prompt`
*   `notification.beep`
*   `notification.vibrate`

## Accéder à la fonctionnalité

Depuis la version 3.0, Cordova implémente l'API au niveau du périphérique comme des *plugins*. Utiliser de la CLI `plugin` commande, décrite dans l'Interface de ligne de commande, d'ajouter ou de supprimer cette fonction pour un projet :

        $ cordova plugin add org.apache.cordova.dialogs
        $ cordova plugin add org.apache.cordova.vibration
        $ cordova plugin ls
        [ 'org.apache.cordova.dialogs',
          'org.apache.cordova.vibration' ]
        $ cordova plugin rm org.apache.cordova.dialogs
        $ cordova plugin rm org.apache.cordova.vibration
    

Ces commandes s'appliquent à toutes les plates-formes ciblées, mais modifie les paramètres de configuration spécifiques à la plateforme décrites ci-dessous :

*   Android
    
        (in app/res/xml/config.xml)
        <feature name="Notification">
            <param name="android-package" value="org.apache.cordova.dialogs.Notification" />
        </feature>
        <feature name="Vibration">
            <param name="android-package" value="org.apache.cordova.vibration.Vibration" />
        </feature>
        
        (in app/AndroidManifest.xml)
        <uses-permission android:name="android.permission.VIBRATE" />
        

*   BlackBerry WebWorks
    
        (in www/plugins.xml)
        <feature name="Notification">
            <param name="blackberry-package" value="org.apache.cordova.notification.Notification" />
        </feature>
        
        (in www/config.xml)
        <feature id="blackberry.ui.dialog" />
        

*   iOS (dans du répertoire application nommé`config.xml`)
    
        <feature name="Notification">
            <param name="ios-package" value="CDVNotification" />
        </feature>
        

Certaines plates-formes peuvent prendre en charge cette fonctionnalité sans nécessiter aucune configuration spéciale. Voir plate-forme prise en charge pour une vue d'ensemble.