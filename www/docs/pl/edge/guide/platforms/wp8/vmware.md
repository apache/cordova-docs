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

# Konfigurowanie VMWare Fusion

Ta sekcja pokazuje jak skonfigurować VMWare Fusion na Mac, więc, że Cordova można używać do tworzenia aplikacji Windows Phone.

[Microsoft Developer Network][1] zapewnia ogólne instrukcje dotyczące uruchamiania systemu Windows pod VMWare Fusion. Po zainstalowaniu systemu Windows, wykonaj następujące kroki:

 [1]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945426

1.  W VMWare Fusion wybierz obrazu dysku systemu Windows 8, przygotowali i wybrać **Ustawienia**.

2.  Wybierz opcje konfiguracji **procesorów i pamięci** . Upewnij się określić *dwa* rdzenie procesora oraz w celu **umożliwienia hypervisor aplikacji w ten czynny maszyna**:

    ![][2]

    Emulator Windows Phone sam używa pół gigabajt pamięci, więc ogólnie należy zarezerwować co najmniej 2GB dla VMWare.

3.  Wybierz opcję ustawienia **Zaawansowane** . Włącz **preferowane virtualization silnik: Intel VT-x z EPT** opcji:

    ![][3]

4.  Zmodyfikować plik *.vmx* dodać lub modyfikować następujące ustawienia:

        hypervisor.CPUID.v0 = "FALSE" mce.enable = "TRUE" vhv.enable = "TRUE"


 [2]: {{ site.baseurl }}/static/img/guide/platforms/wp8/vmware_memory_opts.png
 [3]: {{ site.baseurl }}/static/img/guide/platforms/wp8/vmware_advanced_opts.png

Po wykonaniu tych kroków, to jesteś gotowy do zainstalowania zestawu SDK Windows Phone. Zobacz przewodnik platformy Windows Phone 8 szczegóły.
