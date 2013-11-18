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

Depuis la version 3.0, Cordova implémente les APIs au niveau de l'appareil comme des *plugins*. Utiliser de la CLI `plugin` commande, décrite dans l'Interface de ligne de commande, d'ajouter ou de supprimer cette fonction pour un projet :

        $ cordova plugin add org.apache.cordova.device-orientation
        $ cordova plugin ls
        [ 'org.apache.cordova.device-orientation' ]
        $ cordova plugin rm org.apache.cordova.device-orientation
    

Ces commandes s'appliquent à toutes les plates-formes ciblées, mais modifient les paramètres de configuration spécifiques aux plateformes décrites ci-dessous :

*   Android
    
        (in `app/res/xml/config.xml`)
        <feature name="Compass">
            <param name="android-package" value="org.apache.cordova.deviceorientation.CompassListener" />
        </feature>
        
        (in app/AndroidManifest)
        <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
        <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
        

*   iOS (dans du répertoire application nommé`config.xml`)
    
        <feature name="Compass">
            <param name="ios-package" value="CDVLocation" />
        </feature>
        

*   Windows Phone (en`Properties/WPAppManifest.xml`)
    
        <Capabilities>
            <Capability Name="ID_CAP_SENSORS" />
        </Capabilities>
        
    
    Référence : [manifeste d'Application pour Windows Phone][1]

 [1]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx

Certaines plates-formes peuvent prendre en charge cette fonctionnalité sans nécessiter aucune configuration spéciale. Voir plate-forme prise en charge pour une vue d'ensemble.