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

# Konfiguration von VMWare Fusion

Dieser Abschnitt zeigt, wie VMWare Fusion auf dem Mac so konfigurieren, dass Sie Cordova verwenden können, um Windows Phone-Anwendungen zu generieren.

Das [Microsoft Developer Network][1] bietet allgemeine Anweisungen zum Ausführen von Windows unter VMWare Fusion. Nach der Installation von Windows, die folgenden Schritte aus:

 [1]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945426

1.  VMWare Fusion wählen Sie die Image-Datei von Windows 8, die Sie vorbereitet haben, und wählen Sie **Einstellungen**.

2.  Wählen Sie die **Prozessoren & Speicher** -Konfigurationsoptionen. Geben Sie, *zwei* Prozessorkerne und **Hypervisor-Anwendungen in dieser virtuellen Maschine zu ermöglichen**:

    ![][2]

    Der Windows Phone-Emulator allein verwendet die Hälfte eine Gigabyte Arbeitsspeicher, also insgesamt reservieren Sie mindestens 2 GB für VMWare.

3.  Wählen Sie die **erweitert** . Aktivieren der **bevorzugte Virtualisierungs-Engine: Intel VT-X mit EPT** Option:

    ![][3]

4.  Ändern Sie die *.vmx* -Datei hinzufügen oder ändern die folgenden Einstellungen:

        Hypervisor.cpuid.v0 = "FALSE" mce.enable = "TRUE" vhv.enable = "TRUE"


 [2]: {{ site.baseurl }}/static/img/guide/platforms/wp8/vmware_memory_opts.png
 [3]: {{ site.baseurl }}/static/img/guide/platforms/wp8/vmware_advanced_opts.png

Nachdem Sie diese Schritte abgeschlossen haben, können Sie dann das Windows Phone SDK installieren. Finden Sie im Windows Phone 8 Plattform für Details.
