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

# Настройка VMWare Fusion

В этом разделе показано, как настроить VMWare Fusion на Mac, так чтобы вы смогли использовать Cordova для создания приложений для Windows Phone.

[Microsoft Developer Network][1] предоставляет общие инструкции для запуска Windows под VMWare Fusion. После установки Windows, выполните следующие действия:

 [1]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945426

1.  В VMWare Fusion выберите образ диска Windows 8 который вы подготовили и выберите **Параметры**.

2.  Выберите параметры конфигурации **Процессоры и память** . Не забудьте указать *два* процессорных ядра и выберите **Позволить приложения гипервизора в этой виртуальной машины**:

    ![][2]

    Один только эмулятор Windows Phone использует половину гигабайта памяти, поэтому в целом вы должны зарезервировать минимум 2 ГБ для VMWare.

3.  Выберите **Дополнительные** параметры. Выберите вариант **Предпочитаемая технология виртуализации : Intel VT-x с EPT**:

    ![][3]

4.  Измените файл *.vmx* , чтобы добавить или изменить следующие настройки:

        Hypervisor.CPUID.v0 = «FALSE» mce.enable = «TRUE» vhv.enable = «TRUE»


 [2]: {{ site.baseurl }}/static/img/guide/platforms/wp8/vmware_memory_opts.png
 [3]: {{ site.baseurl }}/static/img/guide/platforms/wp8/vmware_advanced_opts.png

После выполнения этих шагов, вы будете готовы к установке Windows Phone SDK. Смотрите Руководство для платформы Windows Phone 8 для подробностей.
