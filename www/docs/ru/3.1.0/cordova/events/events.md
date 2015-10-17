---
license: >
    Licensed to the Apache Software Foundation (ASF) under one
    or more contributor license agreements.  See the NOTICE file
    distributed with this work for additional information
    regarding copyright ownership.  The ASF licenses this file
    to you under the Apache License, Version 2.0 (the
    "License"); you may not use this file except in compliance
    with the License.  You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing,
    software distributed under the License is distributed on an
    "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, either express or implied.  See the License for the
    specific language governing permissions and limitations
    under the License.

title: События
---

# События

> Кордова события жизненного цикла.

## Типы событий

*   [deviceready](events.deviceready.html)
*   [Пауза](events.pause.html)
*   [резюме](events.resume.html)
*   [онлайн](events.online.html)
*   [автономном режиме](events.offline.html)
*   [backbutton](events.backbutton.html)
*   [batterycritical](events.batterycritical.html)
*   [batterylow](events.batterylow.html)
*   [batterystatus](events.batterystatus.html)
*   [menubutton](events.menubutton.html)
*   [searchButton](events.searchbutton.html)
*   [startcallbutton](events.startcallbutton.html)
*   [endcallbutton](events.endcallbutton.html)
*   [volumedownbutton](events.volumedownbutton.html)
*   [volumeupbutton](events.volumeupbutton.html)

## Доступ к функции

Начиная с версии 3.0, состояние аккумулятора Cordova реализует и другие устройства уровня API как *плагины*. Доступ ко всем событиям, не связанные с статус батареи включены по умолчанию. Использование CLI `plugin` команды, описанные в интерфейс командной строки, чтобы включить или отключить аккумулятор события:

        $ cordova plugin add org.apache.cordova.battery-status
        $ cordova plugin ls
        [ 'org.apache.cordova.battery-status' ]
        $ cordova plugin rm org.apache.cordova.battery-status
    

Эти команды применяются для всех целевых платформ, но изменить параметры конфигурации платформы, описанные ниже:

*   Андроид
    
        (in app/res/xml/config.xml)
        <feature name="Battery">
            <param name="android-package" value="org.apache.cordova.BatteryListener" />
        </feature>
        
        (in app/AndroidManifest.xml)
        <uses-permission android:name="android.permission.BROADCAST_STICKY" />
        

*   Ежевика WebWorks
    
        (in www/plugins.xml)
        <feature name="Battery">
            <param name="blackberry-package" value="org.apache.cordova.battery.Battery" />
        </feature>
        
        (in www/config.xml)
        <feature id="blackberry.app"          required="true" version="1.0.0.0" />
        <feature id="blackberry.app.event"    required="true" version="1.0.0.0" />
        <feature id="blackberry.system.event" required="true" version="1.0.0.0" />
        

*   iOS (в`config.xml`)
    
        <feature name="Battery">
            <param name="ios-package" value="CDVBattery" />
        </feature>
        

*   Tizen (в`config.xml`)
    
        <feature name="http://tizen.org/api/systeminfo" required="true"/>
        
    
    Ссылка: [манифест приложения для Tizen веб-приложения][1]

 [1]: https://developer.tizen.org/help/topic/org.tizen.help.gs/Creating%20a%20Project.html?path=0_1_1_3#8814682_CreatingaProject-EditingconfigxmlFeatures

Некоторые платформы могут поддерживать эту функцию без необходимости специальной настройки. В разделе *Поддержка платформы* в разделе Обзор.