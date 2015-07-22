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

# Географическое положение

> `geolocation`Объект предоставляет доступ к данным местонахождение на основе GPS-датчик устройства или выведен из сети сигналов.

`Geolocation`содержит сведения о местоположении устройства, такие как широты и долготы. Общие источники информации о местонахождении включают глобальной системы позиционирования (GPS) и местоположение, выведено из сети сигналов, таких как IP-адрес, RFID, WiFi и Bluetooth MAC-адреса и идентификаторы базовых станций сотовой GSM/CDMA. Нет никакой гарантии, что API возвращает фактическое местоположение устройства.

Этот API основан на [Спецификации W3C Geolocation API][1]и выполняется только на устройствах, которые уже не обеспечивают реализацию.

 [1]: http://dev.w3.org/geo/api/spec-source.html

**Важных конфиденциальности Примечание:** Сбор и использование данных геопозиционирования поднимает вопросы, важные конфиденциальности. Политика конфиденциальности вашего приложения должна обсудить, как приложение использует данные геопозиционирования, ли она совместно с другими сторонами и уровень точности данных (например, грубый, тонкий, почтовый индекс уровня, т.д.). Географическое расположение данных обычно считается конфиденциальной, потому что она может выявить местонахождение лица и если хранится, история его или ее путешествия. Таким образом в дополнение к политике конфиденциальности вашего приложения, настоятельно рекомендуется точно в срок уведомления до вашего приложения, доступ к данным геопозиционирования (если операционной системы устройства не так уже). Это уведомление должно обеспечивать ту же информацию, отметили выше, а также получения разрешения пользователя (например, путем представления выбора **OK** и **Нет, спасибо**). Для получения дополнительной информации пожалуйста, смотрите в руководстве конфиденциальности.

## Методы

*   geolocation.getCurrentPosition
*   geolocation.watchPosition
*   geolocation.clearWatch

## Аргументы

*   geolocationSuccess
*   geolocationError
*   geolocationOptions

## Объекты (только для чтения)

*   Position
*   PositionError
*   Coordinates

## Доступ к функции

Начиная с версии 3.0 Кордова реализует интерфейсы API уровень устройства как *плагины*. Использование CLI `plugin` команды, описанные в интерфейс командной строки, чтобы добавить или удалить эту функцию для проекта:

        $ cordova plugin add org.apache.cordova.geolocation
        $ cordova plugin ls
        [ 'org.apache.cordova.geolocation' ]
        $ cordova plugin rm org.apache.cordova.geolocation
    

Эти команды применяются для всех целевых платформ, но изменить параметры конфигурации платформы, описанные ниже:

*   Андроид
    
        (in app/res/xml/config.xml)
        <feature name="Geolocation">
            <param name="android-package" value="org.apache.cordova.GeoBroker" />
        </feature>
        
        (in app/AndroidManifest.xml)
        <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
        <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
        <uses-permission android:name="android.permission.ACCESS_LOCATION_EXTRA_COMMANDS" />
        

*   Ежевика WebWorks
    
        (in www/plugins.xml)
        <feature name="Geolocation">
            <param name="blackberry-package" value="org.apache.cordova.geolocation.Geolocation" />
        </feature>
        
        (in www/config.xml)
        <rim:permissions>
            <rim:permit>read_geolocation</rim:permit>
        </rim:permissions>
        

*   iOS (в`config.xml`)
    
        <feature name="Geolocation">
            <param name="ios-package" value="CDVLocation" />
        </feature>
        

*   Windows Phone (в`Properties/WPAppManifest.xml`)
    
        <Capabilities>
            <Capability Name="ID_CAP_LOCATION" />
        </Capabilities>
        
    
    Ссылка: [манифест приложения для Windows Phone][2]

 [2]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx

Некоторые платформы могут поддерживать эту функцию без необходимости специальной настройки. В разделе *Поддержка платформы* в разделе Обзор.