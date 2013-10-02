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

# Компас

> Получает направление, указывая устройство.

## Методы

*   compass.getCurrentHeading
*   compass.watchHeading
*   compass.clearWatch
*   compass.watchHeadingFilter (устаревший)
*   compass.clearWatchFilter (устаревший)

## Аргументы

*   compassSuccess
*   compassError
*   compassOptions
*   compassHeading

## Доступ к функции

Начиная с версии 3.0 Кордова реализует интерфейсы API уровень устройства как *плагины*. Использование CLI `plugin` команды, описанные в интерфейс командной строки, чтобы добавить или удалить эту функцию для проекта:

        $ cordova plugin add org.apache.cordova.device-orientation
        $ cordova plugin ls
        [ 'org.apache.cordova.device-orientation' ]
        $ cordova plugin rm org.apache.cordova.device-orientation
    

Эти команды применяются для всех целевых платформ, но изменить параметры конфигурации платформы, описанные ниже:

*   Android (в`app/res/xml/config.xml`)
    
        <feature name="Compass">
            <param name="android-package" value="org.apache.cordova.CompassListener" />
        </feature>
        

*   iOS (в`config.xml`)
    
        <feature name="Compass">
            <param name="ios-package" value="CDVLocation" />
        </feature>
        

*   Windows Phone (в`Properties/WPAppManifest.xml`)
    
        <Capabilities>
            <Capability Name="ID_CAP_SENSORS" />
        </Capabilities>
        
    
    Ссылка: [манифест приложения для Windows Phone][1]

 [1]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx

Некоторые платформы могут поддерживать эту функцию без необходимости специальной настройки. В разделе *Поддержка платформы* в разделе Обзор.