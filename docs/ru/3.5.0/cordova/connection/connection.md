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

# Подключение

> `connection`Объектов, через `navigator.connection` , предоставляет информацию о сотовых и wifi подключение устройства.

## Свойства

*   connection.type

## Константы

*   Connection.UNKNOWN
*   Connection.ETHERNET
*   Connection.WIFI
*   Connection.CELL_2G
*   Connection.CELL_3G
*   Connection.CELL_4G
*   Connection.CELL
*   Connection.NONE

## Доступ к функции

Начиная с версии 3.0 Кордова реализует интерфейсы API уровень устройства как *плагины*. Использование CLI `plugin` команды, описанные в интерфейс командной строки, чтобы добавить или удалить эту функцию для проекта:

        $ cordova plugin add org.apache.cordova.network-information
        $ cordova plugin ls
        [ 'org.apache.cordova.network-information' ]
        $ cordova plugin rm org.apache.cordova.network-information
    

Эти команды применяются для всех целевых платформ, но изменить параметры конфигурации платформы, описанные ниже:

*   Андроид
    
        (in app/res/xml/config.xml)
        <feature name="NetworkStatus">
            <param name="android-package" value="org.apache.cordova.NetworkManager" />
        </feature>
        
        (in app/AndroidManifest.xml)
        <uses-permission android:name="android.permission.INTERNET" />
        <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
        <uses-permission android:name="android.permission.READ_PHONE_STATE" />
        

*   Ежевика WebWorks
    
        (in www/plugins.xml)
        <feature name="Network Status">
            <param name="blackberry-package" value="org.apache.cordova.network.Network" />
        </feature>
        

*   iOS (в`config.xml`)
    
        <feature name="NetworkStatus">
            <param name="ios-package" value="CDVConnection" />
        </feature>
        

*   Windows Phone (в`Properties/WPAppManifest.xml`)
    
        <Capabilities>
            <Capability Name="ID_CAP_NETWORKING" />
        </Capabilities>
        
    
    Ссылка: [манифест приложения для Windows Phone][1]

*   Tizen (в`config.xml`)
    
        <feature name="http://tizen.org/api/systeminfo" required="true"/>
        
    
    Ссылка: [манифест приложения для Tizen веб-приложения][2]

 [1]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx
 [2]: https://developer.tizen.org/help/topic/org.tizen.help.gs/Creating%20a%20Project.html?path=0_1_1_3#8814682_CreatingaProject-EditingconfigxmlFeatures

Некоторые платформы могут поддерживать эту функцию без необходимости специальной настройки. В разделе *Поддержка платформы* в разделе Обзор.