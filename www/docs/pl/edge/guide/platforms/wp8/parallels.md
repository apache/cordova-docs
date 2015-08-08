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

# Konfigurowanie programu Parallels Desktop

Ta sekcja pokazuje jak skonfigurować Parallels Desktop na komputerze Mac, tak, że można użyć Cordova do tworzenia aplikacji Windows Phone.

[Microsoft Developer Network][1] zapewnia ogólne instrukcje dotyczące uruchamiania systemu Windows w Parallels Desktop. Po zainstalowaniu systemu Windows, wykonaj następujące kroki:

 [1]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945424

1.  W ramach programu Parallels Desktop zaznacz obraz dysku Windows 8, który przygotowali i wybrać **Ustawienia**.

2.  Wybierz opcje **→ ogólne procesorów** . Określ *dwa* procesory. Określ co najmniej 2GB pamięci, nawet jeśli wypada poza zakres zalecane:

    ![][2]

3.  Aby móc uruchomić obraz emulatora urządzenia na maszynie wirtualnej Windows 8, wybierz opcje **optymalizacji** i Włącz **Zagnieżdżone wirtualizacji**.

    ![][3]

 [2]: {{ site.baseurl }}/static/img/guide/platforms/wp8/parallel_cpu_opts.png
 [3]: {{ site.baseurl }}/static/img/guide/platforms/wp8/parallel_optimize_opts.png

Po wykonaniu tych kroków, jesteś gotowy do zainstalowania zestawu SDK Windows Phone. Zobacz przewodnik platformy Windows Phone 8 szczegóły.
