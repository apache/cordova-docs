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

# Geolocation

> L'objet `geolocation` permet l'accès aux données de localisation basées sur le capteur GPS de l'appareil ou déduites des signaux du réseau.

`Geolocation` fournit des informations sur l'emplacement de l'appareil, telles que la latitude et la longitude. Les sources habituelles d'information incluent le Système de Positionnement Global (GPS) et la position déduite de signaux des réseaux tels que l'adresse IP, RFID, les adresses MAC WiFi et Bluetooth et les IDs cellulaires GSM/CDMA. Il n'y a cependant aucune garantie que cette API renvoie la position réelle de l'appareil.

Cette API est basée sur la [Spécification de l'API Geolocation du W3C][1] et s'exécute uniquement sur les appareils qui n'en proposent pas déjà une implémentation.

 [1]: http://dev.w3.org/geo/api/spec-source.html

**Remarque importante concernant le respect de la vie privée :** la collecte et l'utilisation des données de géolocalisation soulève des questions importantes concernant le respect de la vie privée. La politique de confidentialité de votre application devrait traiter de la manière dont l'application utilise les données de géolocalisation, si elle les partage avec d'autres parties ou non et définir le niveau de précision de celles-ci (par exemple grossier, fin, restreint au code postal, etc.). Les données de géolocalisation sont généralement considérées comme sensibles car elle peuvent révéler l'endroit où se trouve une personne et, si stockées, l'historique de ses voyages. Par conséquent, en plus de la politique de confidentialité de votre application, vous devriez par exemple fortement envisager d'afficher une notice juste avant d'accéder aux données de géolocalisation (si le système d'exploitation de l'appareil ne le fait pas déjà). Cette notice devrait contenir les informations susmentionnées, ainsi que permettre de recueillir l'autorisation de l'utilisateur (par exemple, en offrant les possibilités **OK** et **Non merci**). Pour plus d'informations, veuillez vous référer à la section "Guide du respect de la vie privée".

## Méthodes

*   geolocation.getCurrentPosition
*   geolocation.watchPosition
*   geolocation.clearWatch

## Arguments

*   geolocationSuccess
*   geolocationError
*   geolocationOptions

## Objets (lecture seule)

*   Position
*   PositionError
*   Coordonnées

## Accéder à la fonctionnalité

Depuis la version 3.0, Cordova implémente les API liées à l'appareil en tant que *plugins*. Utiliser la commande `plugin` de l'Interface en Ligne de Commande, décrite dans la section intitulée L'Interface en Ligne de Commande, afin d'ajouter ou retirer cette fonctionnalité à un projet :

        $ cordova plugin add org.apache.cordova.geolocation
        $ cordova plugin ls
        [ 'org.apache.cordova.geolocation' ]
        $ cordova plugin rm org.apache.cordova.geolocation
    

Ces commandes s'appliquent à toutes les plates-formes ciblées mais modifient les paramètres de configuration spécifiques aux différentes plates-formes tel que décrit ci-dessous :

*   Android
    
        (in app/res/xml/config.xml)
        <feature name="Geolocation">
            <param name="android-package" value="org.apache.cordova.GeoBroker" />
        </feature>
        
        (in app/AndroidManifest.xml)
        <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
        <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
        <uses-permission android:name="android.permission.ACCESS_LOCATION_EXTRA_COMMANDS" />
        

*   BlackBerry WebWorks
    
        (in www/plugins.xml)
        <feature name="Geolocation">
            <param name="blackberry-package" value="org.apache.cordova.geolocation.Geolocation" />
        </feature>
        
        (in www/config.xml)
        <rim:permissions>
            <rim:permit>read_geolocation</rim:permit>
        </rim:permissions>
        

*   iOS (dans `config.xml`)
    
        <feature name="Geolocation">
            <param name="ios-package" value="CDVLocation" />
        </feature>
        

*   Windows Phone (dans `Properties/WPAppManifest.xml`)
    
        <Capabilities>
            <Capability Name="ID_CAP_LOCATION" />
        </Capabilities>
        
    
    Référence : [Manifeste d'Application pour Windows Phone][2]

 [2]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx

Certaines plates-formes peuvent prendre en charge cette fonctionnalité sans nécessiter aucune configuration spéciale. Voir *Support de plate-forme* dans la section vue d'ensemble.