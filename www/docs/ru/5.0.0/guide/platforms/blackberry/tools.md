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

# BlackBerry средства командной строки

`cordova`Утилиты командной строки является высокого уровня инструментом, который позволяет создавать приложения на нескольких платформах за один раз. Старой версии Cordova framework предоставляет наборы средств командной строки для каждой платформы. Чтобы использовать их в качестве альтернативы для CLI, вам нужно скачать эту версию Cordova с [cordova.apache.org][1]. Загружаемый файл содержит отдельные архивы для каждой платформы. Разверните узел платформы, которую вы хотите цели. Инструменты, описанные здесь обычно доступны в верхнего уровня `bin` каталог, в противном случае консультироваться с файлом **README** для получения более подробной направлениях.

 [1]: http://cordova.apache.org

## Создание проекта

Запустите `create` команду, указав существующий путь к проекту, идентификатор домена реверсивные пакета и отображаемое имя приложения. Вот синтаксис для Mac и Windows:

    $ /path/to/cordova-blackberry-webworks/bin/create /path/to/my_new_project com.example.project_name ProjectName
    $ /path/to/cordova-blackberry-webworks/bin/create.bat /path/to/my_new_project com.example.project_name ProjectName
    

**Примечание:** Платформа ежевики игнорирует заполнитель имя пакета ( `com.example.project_name` ), но он по-прежнему требуется для использования в кросс платформенных средств.

## Построение проекта

Для BlackBerry проектов, пожалуйста убедитесь, что вы настроить `project.properties` файл в корневом каталоге вашего проекта Кордова. Вам нужно сделать это для снабжения вашего BlackBerry, подписание пароль ключа и указать различные места для BlackBerry WebWorks SDK и BlackBerry эмулятор исполняемые файлы.

    $ /path/to/my_new_project/cordova/build <platform>
    $ /path/to/my_new_project/cordova/build.bat <platform>
    

## Запуск эмулятора

Для BlackBerry проектов, пожалуйста убедитесь, что вы настроить `project.properties` файл в корневом каталоге проекта Cordova. Вам нужно сделать это для снабжения вашего BlackBerry, подписание пароль ключа и указать различные места для BlackBerry WebWorks SDK и BlackBerry эмулятор исполняемые файлы.

    $ /path/to/my_new_project/cordova/run <platform>
    

а затем выберите «Нет», когда появится:

    У вас есть BlackBerry устройства, подключенного к вашему компьютеру? (y/n) $ /path/to/my_new_project/cordova/run <platform>
    

а затем выберите «Нет», когда появится:

    У вас есть BlackBerry устройства, подключенного к вашему компьютеру? (y/n)
    

## Ведение журнала

К сожалению в настоящее время поддерживается потокового журналы прямо с устройства. Однако BlackBerry предлагает встроенную поддержку веб-инспектор для Playbook и BlackBerry смартфонов BlackBerry OS версии 7.0 и выше. Вы также можете получить доступ журналы вашего приложения (включая любые вызовы `console.log` ) на вашем устройстве, удерживая нажатой клавишу "ALT '' от домашнего экрана и введя '' lglg'' ключи.