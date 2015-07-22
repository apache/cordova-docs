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

# Камера

> `camera`Объект предоставляет доступ к приложение камеры устройства по умолчанию.

**Важных конфиденциальности Примечание:** Сбор и использование изображений с камеры устройства поднимает вопросы, важные конфиденциальности. Политика конфиденциальности вашего приложения должна обсудить, как приложение использует камеру и ли изображения, записанные используются совместно с другими сторонами. Кроме того если app использование камеры не является очевидной в пользовательском интерфейсе, необходимо предоставить уведомление just-in-time до вашего приложения доступа к камере (если операционной системы устройства не так уже). Это уведомление должно обеспечивать ту же информацию, отметили выше, а также получения разрешения пользователя (например, путем представления выбора **OK** и **Нет, спасибо**). Для получения дополнительной информации пожалуйста, смотрите в руководстве конфиденциальности.

## Методы

*   camera.getPicture
*   Camera.Cleanup

## Доступ к функции

Начиная с версии 3.0 Кордова реализует интерфейсы API уровень устройства как *плагины*. Использование CLI `plugin` команды, описанные в интерфейс командной строки, чтобы добавить или удалить эту функцию для проекта:

        $ cordova plugin add org.apache.cordova.camera
        $ cordova plugin ls
        [ 'org.apache.cordova.camera' ]
        $ cordova plugin rm org.apache.cordova.camera
    

Эти команды применяются для всех целевых платформ, но изменить параметры конфигурации платформы, описанные ниже:

*   Андроид
    
        (in app/res/xml/config.xml)
        <feature name="Camera">
            <param name="android-package" value="org.apache.cordova.CameraLauncher" />
        </feature>
        
        (in app/AndroidManifest)
        <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
        

*   Ежевика WebWorks
    
        (in www/plugins.xml)
        <feature name="Camera">
            <param name="blackberry-package" value="org.apache.cordova.camera.Camera" />
        </feature>
        
        (in www/config.xml)
        <feature id="blackberry.media.camera" />
        
        <rim:permissions>
            <rim:permit>use_camera</rim:permit>
        </rim:permissions>
        

*   iOS (в`config.xml`)
    
        <feature name="Camera">
            <param name="ios-package" value="CDVCamera" />
        </feature>
        

*   Windows Phone (в`Properties/WPAppManifest.xml`)
    
        <Capabilities>
            <Capability Name="ID_CAP_ISV_CAMERA" />
            <Capability Name="ID_HW_FRONTCAMERA" />
        </Capabilities>
        
    
    Ссылка: [манифест приложения для Windows Phone][1]

*   Tizen (в`config.xml`)
    
        <feature name="http://tizen.org/api/application" required="true"/>
        <feature name="http://tizen.org/api/application.launch" required="true"/>
        
    
    Ссылка: [манифест приложения для Tizen веб-приложения][2]

 [1]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx
 [2]: https://developer.tizen.org/help/topic/org.tizen.help.gs/Creating%20a%20Project.html?path=0_1_1_3#8814682_CreatingaProject-EditingconfigxmlFeatures

Некоторые платформы могут поддерживать эту функцию без необходимости специальной настройки. В разделе *Поддержка платформы* в разделе Обзор.