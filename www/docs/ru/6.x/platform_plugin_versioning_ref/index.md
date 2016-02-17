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

title: Управление версиями платформ и плагинов
---

# Управление версиями платформ и плагинов

Начиная с версии Cordova 4.3.0 и далее предоставляет возможность сохранять и восстанавливать платформ и плагины.

Эта функция позволяет разработчикам сохранять и восстанавливать их приложения в предсказуемое состояние без необходимости размещения всех исходных кодов платформы и плагинов в систему контроля версий.

Команда 'save' сохраняет информацию о платформе приложения и версии плагина в файле config.xml. Шаг 'restore' шаг происходит автоматически, когда запускается **'cordova prepare'** , используя информацию, ранее сохраненную в файле config.xml.

Один сценарий, где возможность сохранить/восстановить очень сподручна это в больших группах, которые работают над приложение, где каждый член команды, концентирует внимание на платформе или плагине. Эта функция позволяет легче поделиться проектом и уменьшить количество избыточного кода, который добавляется в репозиторий.

## Управление версиями платформы

### Сохранение платформы

Чтобы сохранить платформу, выполните следующую команду:

    $ cordova platform add <platform[@<version>] | directory | git_url> --save
    

После выполнения команды выше, результирующий файл config.xml выглядит так :

    <?xml version='1.0' encoding='utf-8'?>
        ...
        <engine name="android" spec="~4.0.0" />
        ...
    </xml>
    

Некоторые примеры:

  * **'cordova platform add android --save'** => извлекает закрепленную версию платформы android, добавляет ее в проект и затем обновляет файл config.xml.
  * **'cordova platform add android@3.7.0 --save'** => извлекает платформу android, версии 3.7.0 из NPM, добавляет ее в проект и затем обновляет файл config.xml.
  * **'cordova platform add android@https://github.com/apache/cordova-android.git​ --save'** => клонирует заданный git-репозиторий cordova-android, добавляет платформу android в проект, затем обновляет файл config.xml и указывает версию как переданный выше git-адрес.
  * **'cordova platform add C:/path/to/android/platform --save'** => получает платформу android из указанного каталога, добавляет ее в проект, а затем обновляет файл config.xml и указывает на каталог.

### Массовое сохранение платформ в существующем проекте

Флаг '--save ', описанные выше полезен только когда вы помните о том что нужно его использовать при добавлении платформы. Если у вас есть существующий проект и вы хотите сохранить все, в настоящее время добавленые, платформы в вашем проекте, можно использовать:

    $ cordova platform save
    

### Обновление / удаление платформ

Также возможно указывать этот параметр для обновления или удаления из config.xml во время команды 'cordova platform update' и 'cordova platform remove':

    $ cordova platform update <platform[@<version>] | directory | git_url> --save
    $ cordova platform remove <platform> --save
    

Некоторые примеры:

  * **'cordova platform update android --save'** => помимо обновления платформы android до закрепленной версии, обновление записи в файле config.xml
  * **'cordova platform update android@3.8.0 --save'** => помимо обновления платформы android до версии 3.8.0, обновление записи в файле config.xml
  * **'cordova platform update /path/to/android/platform --save'** => помимо обновления платформы android версии из папке, обновление записи в файле config.xml
  * **'cordova platform remove android --save'** => удаляет платформу android из проекта и ее запись из файла config.xml.

### Восстановление платформы

Платформы автоматически восстанавливаются из config.xml при запуске команды **'cordova prepare'**.

Если вы добавите платформу без указания версии/папка/git_url, версия для установки берется из файла config.xml, **если значение присутсвует**.

Пример:

Предположим, что ваш файл config.xml содержит следующую запись:

    <?xml version='1.0' encoding='utf-8'?>
        ...
        <engine name="android" spec="3.7.0" />
        ...
    </xml>
    

Если вы запустить команду **'cordova platform add android'** (без указания версии/папки/git_url), будут установлена платформы 'android@3.7.0' (как получено из файла config.xml).

* * *

## Управление версиями плагинов

*(Команды plugin являются зеркалом команды plugin)*

### Сохранение плагинов

Чтобы сохранить плагин, выполните следующую команду :

    $ cordova plugin add <plugin[@<version>] | directory | git_url> --save
    

После выполнения команды выше, результирующий файл config.xml выглядит так :

    <?xml version='1.0' encoding='utf-8'?>
        ...
        <plugin name="cordova-plugin-console" spec="~1.0.0" />
        ...
    </xml>
    

Некоторые примеры:

  * **'cordova plugin add cordova-plugin-console --save'** => извлекает закрепленную версию плагина консоли, добавляет его в проект и затем обновляет файл config.xml.
  * **'cordova plugin add cordova-plugin-console@0.2.13 --save'** => извлекает android плагин, версия 0.2.13 из NPM, добавляет его в проект и затем обновляет файл config.xml.
  * **'cordova plugin add https://github.com/apache/cordova-plugin-console.git --save'** => клонирует указанный git-репозиторий плагина консоли, добавляет плагин консоли в проект, а затем обновляет файл config.xml и указывают указаный git-адрес как версию.
  * **'cordova plugin add C:/path/to/console/plugin --save'** => извлекает плагин консоли из указанного каталога, добавляет его в проект, а затем обновляет файл config.xml и указывает на каталог.

### Массовое сохранение плагинов в существующем проекте

Флаг '--save ', описанные выше полезен только когда вы помните о том что нужно его использовать при добавлении плагина. Если у вас есть существующий проект и вы хотите сохранить все, в настоящее время добавленые, плагины в проекте, вы можете использовать :

    $ cordova plugin save
    

### Обновление / удаление плагинов

Также возможно указывать этот параметр для обновления или удаления из config.xml во время команды 'cordova plugin update' и 'cordova plugin remove' :

    $ cordova plugin update <plugin[@<version>] | directory | git_url> --save
    $ cordova plugin remove <plugin> --save
    

Некоторые примеры:

  * **'cordova plugin update cordova-plugin-console --save'** => помимо обновления плагина консоли до закрепленного версии, обновление записи в файле config.xml
  * **'cordova plugin update cordova-plugin-console@0.2.13 --save'** => помимо обновления android плагина до версии 3.8.0, обновление записи в файле config.xml
  * **'cordova plugin update /path/to/console/plugin --save'** => помимо обновления плагина консоли до версии в папке, обновление записи в файле config.xml
  * **'cordova plugin remove cordova-plugin-console --save'** => удаляет плагин консоли из проекта и его запись в файле config.xml.

### Восстановление плагинов

Плагины автоматически восстанавливаются из config.xml при запуске команды **'cordova prepare'**.

Если вы добавите плагин без указания версии/папка/git_url, версия для установки берется из файла config.xml, **если значение присутсвует**.

Пример:

Предположим, что ваш файл config.xml содержит следующую запись:

    <?xml version='1.0' encoding='utf-8'?>
        ...
        <plugin name="cordova-plugin-console" spec="0.2.11" />
        ...
    </ xml>
    

если запустить команду **'cordova plugin add cordova-plugin-console'** (без указания версия/папка/git_url), будет устанавливаться плагин 'cordova-plugin-console@0.2.11' (значение полученное из файла config.xml).