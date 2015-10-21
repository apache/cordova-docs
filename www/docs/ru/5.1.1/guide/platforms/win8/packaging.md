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

title: Упаковка приложений Windows
---

# Упаковка приложений Windows

Вы можете узнать больше о подписании и упаковке приложений для Магазина Windows на [MSDN][1].

Чтобы иметь возможность правильно упаковать и подписать Windows приложения несколько вещей требуется:

  * Сертификат подписи
  * Параметры идентичности соотвествующие предоставленному сертификату подписи

В проекте Windows данные идентичности хранятся в файле с именем package.appxmanifest. Этот файл автоматически заполняется каждый раз, когда приложение Cordova собирается. Идентичность имеет 3 важных поля.

  * Name
  * Publisher
  * Version

*Имя* и *версия* могут быть установлены из **файла config.xml**. *Издатель* может быть предоставлен как параметр построения или может быть установлен на основании **build.json** файла.

![]({{ site.baseurl }}/static/img/guide/platforms/win8/packaging.png)

Сертификат подписи может быть предоставлен либо CLI или через файл build.json. Флаги относящиеся к сертификату:

  * `--packageCertificateKeyFile` : после того, как создан сертификат подписи пакета, этот параметр может использоваться для связывания сертификата с приложением. Этот флаг принимает путь к файлу в качестве аргумента. Т.е. `> cordova build -- --packageCertificateKeyFile="platforms\windows\CordovaApp_TemporaryKey.pfx"`
  * `--packageThumbprint` : Цифровой отпечаток пакета используется для проверки подлинности файла ключа для сертификата пакета. При создании файла ключа сертификата, это значение будет представляться конечному пользователю. Т.е. `> cordova build -- --packageCertificateKeyFile="platforms\windows\CordovaApp_TemporaryKey.pfx" --packageThumbprint="ABCABCABCABC123123123123"`

Кроме того, эти значения могут быть указаны, используя файл конфигурации сборки (build.json) с использованием интерфейса CLI (--buildConfig). Пример файла конфигурации построения:

    {
        "windows": {
            "debug": {
                "packageCertificateKeyFile": "platforms\\windows\\CordovaApp_TemporaryKey.pfx"
            },
            "release": {
                "packageCertificateKeyFile": "c:\\path-to-key\\keycert.pfx",
                "packageThumbprint": "ABCABCABCABC123123123123",
                "publisherId": "CN=FakeCorp.com, L=Redmond, S=Washington, C=US"
            }
        }
    }
    

Существует также поддержка смешивания и комбинирования аргументов командной строки и параметров в файле build.json. Значения из аргументов командной строки будет получить приоритет.

# Как создать сертификат ключа и подписать Windows приложение Cordova

Для распространения и установки приложений из Магазина Windows требуется подпись. Этот процесс обычно обрабатывается средой Visual Studio при развертывании пакета для выпуска. Сделать это без Visual Studio, нам нужно создать наши собственные сертификаты.

Для создания сертификатов необходимо использовать [makecert.exe][2] утилиту. Этот инструмент поставляется с Windows SDK и могут быть найдены в папке `%ProgramFiles(x86)%\Windows Kits\8.1\bin\x64` или `%ProgramFiles(x86)%\Windows Kits\8.1\bin\x86`.

Первое, что нам нужно сделать, это создать корневой ключ для подписи приложения.

`makecert.exe -n "CN=FakeCorp.com" -r -eku "1.3.6.1.5.5.7.3.3,1.3.6.1.4.1.311.10.3.13" -e "01/01/2020" –h 0 -sv FakeCorp.com.pvk FakeCorp.com.cer`

Чтобы понять, что makecert делает, вот краткое объяснение того, что параметры делать:

  * -n "CN=FakeCorp.com": это [X.509](http://en.wikipedia.org/wiki/X.509) имя субъекта сертификата. В этом примере его **C**ommon**N**ame=FakeCorp.com.
  * -r: создает [самоподписывающий сертификат](http://en.wikipedia.org/wiki/Self-signed_certificate).
  * -eku #EKU_VAL #: Разделенный запятыми список OID использующих улучшенный ключ . 
      * 1.3.6.1.5.5.7.3.3 указывает, что сертификат действителен для подписи кода. Всегда указывайте это значение, чтобы ограничить предполагаемое использование сертификата.
      * 1.3.6.1.4.1.311.10.3.13 указывает, что сертификат уважает время действительности подписания. Как правило если подпись содержит время, если сертификат действовал в момент, когда его время было зафикированно, подпись будет действительна, даже если срок действия сертификата истек. Этот EKU принуждает подпись завершать время действия независимо от того, содержит ли подпись временную метку или нет.
  * -e "01/01/2020": устанавливает дату окончания срока действия сертификата. 
  * -h 0: устанавливает Макс. высоту дерева ниже этого сертификата до 0, чтобы запретить использование его как Организации сертификации (CA) который может выдавать другие сертификаты.
  * -sv FakeCorp.com.pvk: Результирующий PVK файл. Windows использует PVK файлы для хранения закрытых ключей для подписи кода.
  * FakeCorp.com.cer: Выходной файл сертификата. CER-файл используется для хранения сертификата X.509.

После запуска программы makecert в первый раз, появляется экран ввода закрытого пароль:

![]({{ site.baseurl }}/static/img/guide/platforms/win8/createprivatekeywindow.png)

После создания файлов pvk и cer, нам нужно создать файл pfx из этих сертификатов. Файл pfx (формат личного обмена) содержит целый ряд криптографической информации, такие как сертификаты, корневые сертификаты удостоверяющей организации, цепочки сертификатов и закрытые ключи. Чтобы упаковать сертификаты, мы будем использовать инструмент под названием [pvk2pfx][3]. Этот инструмент поставляется с Windows SDK и могут быть найдены в папке `%ProgramFiles(x86)%\Windows Kits\8.1\bin\x64` или `%ProgramFiles(x86)%\Windows Kits\8.1\bin\x86`.

`pvk2pfx -pvk FakeCorp.com.pvk -pi pvkPassword -spc FakeCorp.com.cer -pfx FakeCorp.com.pfx -po pfxPassword`

Где:

  * pvk: имя входящего файла pvk
  * pi: Пароль pvk
  * spc : Имя входящего файла сертификата
  * pfx: имя результирующего файла pfx
  * pо: пароль pfx; такой же, как pvk пароль, если не указан

Если мы предоставляем этот файл pfx файл в build.json, мы получим следующую ошибку: "файл ключа может быть защищен паролем. Чтобы исправить эту проблему, попробуйте вручную импортировать сертификат в хранилище личных сертификатов текущего пользователя.". Для того, чтобы импортировать его мы должны использовать [certutil][4] в командной строке с правами администратора:

`certutil -user -p PASSWORD -importPFX FakeCorp.com.pfx`

Где:

  * user : определяет личное хранилище "текущего пользователя"
  * p: пароль для PFX-файла
  * importPfx: имя pfx-файла

После установки, следующим шагом является добавление в build.json packageThumbprint и packageCertificateKeyFile. Для того чтобы найти packageThumbprint, Найдите CommonName которое мы сопоставили с сертификатом:

`powershell -Command " & {dir -path cert:\LocalMachine\My | where { $_.Subject -like \"*FakeCorp.com*\" }}"`

После того, как эти окончательные значения предоставляются. Cordova должна успешно упаковать и подписать приложение.

[1]: https://msdn.microsoft.com/en-us/library/hh446593(v=vs.85).aspx
[2]: https://msdn.microsoft.com/en-us/library/ff548309(v=vs.85).aspx
[3]: https://msdn.microsoft.com/en-us/library/ff550672(v=vs.85).aspx
[4]: https://technet.microsoft.com/en-us/library/ee624045(v=ws.10).aspx
