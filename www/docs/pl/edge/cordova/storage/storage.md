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

title: Magazyn
---

# Magazyn

> [Przegląd](../../guide/overview/index.html) opcji przechowywania dla Cordova.

Kilka magazyn funkcje API są dostępne dla aplikacji Cordova. Zobacz [html5rocks][1]. Aby uzyskać pełniejszy obraz i przykłady.

 [1]: http://www.html5rocks.com/en/features/storage

## LocalStorage

Znany również jako *Sieć pamięci masowej*, *zwykłe magazynowanie*, lub jego zastępcy *przechowywania sesji* interfejs, ten API zapewnia przechowywanie para synchroniczne klucz/wartość i jest dostępne w podstawowej implementacji widoku sieci Web. Odnoszą się do [specyfikacji W3C][2] szczegóły.

 [2]: http://www.w3.org/TR/webstorage/

## WebSQL

Ten interfejs API jest dostępny w podstawowej widoku sieci Web. [Web SQL bazy danych specyfikacji][3] oferuje więcej tabel bazy danych w pełni funkcjonalny dostęp za pomocą zapytań SQL.

 [3]: http://dev.w3.org/html5/webdatabase/

Następujących platformach wsparcie WebSQL:

*   Android
*   BlackBerry 10
*   iOS
*   Tizen

## IndexedDB

Ten interfejs API jest dostępny w podstawowej widoku sieci Web. [Indeksowane DB][4] oferuje więcej funkcji niż LocalStorage, ale mniej niż WebSQL.

 [4]: http://www.w3.org/TR/IndexedDB/

Następujące platformy wsparcia IndexedDB:

*   BlackBerry 10
*   Firefox OS
*   Windows Phone 8
*   Windows 8

## Opcje opartego na plugin

Oprócz przechowywania API wymienione powyżej, [Plik API][5] pozwala do pamięci podręcznej danych na lokalnym systemie plików. Podobne opcje przechowywania innych [wtyczek Cordova][6] .

 [5]: https://github.com/apache/cordova-plugin-file/blob/master/doc/index.md
 [6]: http://plugins.cordova.io/