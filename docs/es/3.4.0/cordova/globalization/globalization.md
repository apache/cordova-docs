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

# Globalización

Obtiene información y realiza las operaciones específicas de la configuración regional del usuario y zona horaria.

## Objetos

*   GlobalizationError

## Métodos

*   globalization.getPreferredLanguage
*   globalization.getLocaleName
*   globalization.dateToString
*   globalization.stringToDate
*   globalization.getDatePattern
*   globalization.getDateNames
*   globalization.isDayLightSavingsTime
*   globalization.getFirstDayOfWeek
*   globalization.numberToString
*   globalization.stringToNumber
*   globalization.getNumberPattern
*   globalization.getCurrencyPattern

## Ámbito de variable

El objeto de `globalization` es un niño del objeto `navigator` y por lo tanto tiene alcance mundial.

    // The global globalization object
    var globalization = navigator.globalization;
    

## Acceso a la función

A partir de la versión 3.0, Cordova implementa nivel de dispositivo APIs como *plugins*. Uso de la CLI `plugin` comando, que se describe en la interfaz de línea de comandos, para añadir o eliminar esta característica para un proyecto:

        $ cordova plugin add org.apache.cordova.globalization
        $ cordova plugin ls
        [ 'org.apache.cordova.globalization' ]
        $ cordova plugin rm org.apache.cordova.globalization
    

Estos comandos se aplican a todas las plataformas específicas, sino modificar las opciones de configuración específicas de la plataforma que se describen a continuación:

*   Android (en`app/res/xml/config.xml`)
    
        <feature name="Globalization">
            <param name="android-package" value="org.apache.cordova.Globalization" />
        </feature>
        

Algunas plataformas que soportan esta característica sin necesidad de ninguna configuración especial. Consulte *Soporte de la plataforma* en la sección de Resumen.