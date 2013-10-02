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

# Beschleunigungsmesser

> Erfasst die Bewegung des Geräts in der *x-*, *y-* und *Z*-Richtung.

## Methoden

*   accelerometer.getCurrentAcceleration
*   accelerometer.watchAcceleration
*   accelerometer.clearWatch

## Argumente

*   accelerometerSuccess
*   accelerometerError
*   accelerometerOptions

## Objekte (schreibgeschützt)

*   Beschleunigung

## Zugriff auf die Funktion

Ab Version 3.0 implementiert Cordova Geräteebene APIs als *Plugins*. Verwenden Sie den CLI `plugin` Befehl, welche im Command-Line Interface beschrieben ist, zum hinzufügen oder entfernen dieses Features für ein Projekt:

        $ cordova plugin add org.apache.cordova.device-motion
        $ cordova plugin ls
        [ 'org.apache.cordova.device-motion' ]
        $ cordova plugin rm org.apache.cordova.device-motion
    

Diese Befehle gelten für alle Zielplattformen, aber die plattformspezifischen Konfigurationseinstellungen müssen, wie unten beschrieben, geändert werden:

*   Android (in`app/res/xml/config.xml`)
    
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
        

*   iOS (in`config.xml`)
    
        <feature name="Accelerometer">
            <param name="ios-package" value="CDVAccelerometer" />
        </feature>
        

*   Windows Phone (in`Properties/WPAppManifest.xml`)
    
        <Capabilities>
            <Capability Name="ID_CAP_SENSORS" />
        </Capabilities>
        
    
    Bezug: [Anwendungsmanifest für Windows Phone][1]

 [1]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx

Einige Plattformen können dieses Feature unterstützen ohne dass eine besondere Konfiguration notwendig ist. Siehe dazu *Plattform-Unterstützung* in der Übersicht.