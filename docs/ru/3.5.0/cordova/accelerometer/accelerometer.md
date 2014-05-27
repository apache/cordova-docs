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

# Accelerometer

> Отслеживание движения устройства в направлении по осям *x*, *y* и *z*.

## Методы

*   accelerometer.getCurrentAcceleration
*   accelerometer.watchAcceleration
*   accelerometer.clearWatch

## Аргументы

*   accelerometerSuccess
*   accelerometerError
*   accelerometerOptions

## Объекты (только для чтения)

*   Acceleration

## Доступ к расширениям

Начиная с версии 3.0 Cordova реализует интерфейсы API как *plugins*. Используйте команду CLI `plugin`, описанные в интерфейс командной строки, чтобы добавить или удалить расширения для проекта:

        $ cordova plugin add org.apache.cordova.device-motion
        $ cordova plugin ls
        [ 'org.apache.cordova.device-motion' ]
        $ cordova plugin rm org.apache.cordova.device-motion
    

Эти команды применяются для всех платформ, но имеют отличия конфигурации для платформ описанных ниже:

*   Android (в`app/res/xml/config.xml`)
    
        <feature name="Accelerometer">
            <param name="android-package" value="org.apache.cordova.AccelListener" />
        </feature>
        

*   Ежевика WebWorks
    
        (in www/plugins.xml)
        <feature name="Accelerometer">
            <param name="blackberry-package" value="org.apache.cordova.accelerometer.Accelerometer" />
        </feature>
        
        (in www/config.xml)
        <feature id="blackberry.system"  required="true" version="1.0.0.0" />
        <feature id="org.apache.cordova" required="true" version="1.0.0" />
        

*   iOS (в`config.xml`)
    
        <feature name="Accelerometer">
            <param name="ios-package" value="CDVAccelerometer" />
        </feature>
        

*   Windows Phone (в`Properties/WPAppManifest.xml`)
    
        <Capabilities>
            <Capability Name="ID_CAP_SENSORS" />
        </Capabilities>
        
    
    Ссылка: [Application Manifest for Windows Phone][1]

 [1]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx

Некоторые платформы могут поддерживать эту функцию без необходимости специальной настройки. В разделе *Поддержка платформы* в разделе Обзор.