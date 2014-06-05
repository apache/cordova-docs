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

> Capture le mouvement d'un appareil sur les axes *x*, *y* et *z* .

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

        $ cordova plugin add org.apache.cordova.device-motion
        $ cordova plugin ls
        [ 'org.apache.cordova.device-motion' ]
        $ cordova plugin rm org.apache.cordova.device-motion
    

Ces commandes s'appliquent à toutes les plates-formes ciblées mais modifient les paramètres de configuration spécifiques aux différentes plates-formes tel que décrit ci-dessous :

*   Android (dans`app/res/xml/config.xml`)
    
        <feature name="Accelerometer">
            <param name="android-package" value="org.apache.cordova.AccelListener" />
        </feature>
        

*   BlackBerry WebWorks
    
        (in www/plugins.xml)
        <feature name="Accelerometer">
            <param name="blackberry-package" value="org.apache.cordova.accelerometer.Accelerometer" />
        </feature>
        
        (in www/config.xml)
        <feature id="blackberry.system"  required="true" version="1.0.0.0" />
        <feature id="org.apache.cordova" required="true" version="1.0.0" />
        

*   iOS (dans`config.xml`)
    
        <feature name="Accelerometer">
            <param name="ios-package" value="CDVAccelerometer" />
        </feature>
        

*   Windows Phone (dans`Properties/WPAppManifest.xml`)
    
        <Capabilities>
            <Capability Name="ID_CAP_SENSORS" />
        </Capabilities>
        
    
    Référence : [Manifeste d'Application pour Windows Phone][1]

 [1]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx

Certaines plates-formes peuvent prendre en charge cette fonctionnalité sans nécessiter aucune configuration spéciale. Voir *Support de plate-forme* dans la section vue d'ensemble.