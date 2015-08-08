---
license: Licensed to the Apache Software Foundation (ASF) under one
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
---

# Настройка Parallels Desktop

В этом разделе показано, как настроить Parallels Desktop на Mac, так что вы можете использовать Cordova для создания приложений Windows Phone.

[Microsoft Developer Network][1] содержит общие инструкции для запуска Windows в Parallels Desktop. После установки Windows, выполните следующие действия:

 [1]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945424

1.  В Parallels Desktop выберите образ диска Windows 8, вы подготовили и выберите **Параметры**.

2.  Выберите параметры **Общие → процессоры** . Укажите *два* ЦП. Укажите по крайней мере 2 ГБ памяти, даже если он выходит за пределы рекомендуемого диапазона:

    ![][2]

3.  Чтобы иметь возможность запускать образ эмулятора устройства в виртуальной машине Windows 8, выберите настройки, **оптимизации** и включение **Вложенных виртуализации**.

    ![][3]

 [2]: {{ site.baseurl }}/static/img/guide/platforms/wp8/parallel_cpu_opts.png
 [3]: {{ site.baseurl }}/static/img/guide/platforms/wp8/parallel_optimize_opts.png

После выполнения этих шагов, вы будете готовы к установке Windows Phone SDK. Смотрите Руководство для платформы Windows Phone 8 для подробностей.
