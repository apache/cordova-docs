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

# Konfigurieren von Parallels Desktop

Dieser Abschnitt zeigt, wie Parallels Desktop auf einem Mac so konfigurieren, dass Sie Cordova verwenden können, um Windows Phone-Anwendungen zu generieren.

Das [Microsoft Developer Network][1] bietet allgemeine Anweisungen zum Ausführen von Windows unter Parallels Desktop. Nach der Installation von Windows, die folgenden Schritte aus:

 [1]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945424

1.  Parallels Desktop wählen Sie die Windows 8 Image-Datei, die Sie vorbereitet haben, und wählen Sie **Einstellungen**.

2.  Wählen Sie die **Allgemeine → CPUs** . Geben Sie *zwei* CPUs. Geben Sie mindestens 2GB Speicher, auch wenn es außerhalb des empfohlenen Bereichs liegt:

    ![][2]

3.  Um die Geräte-Emulator-Image in der virtuellen Maschine, Windows 8 laufen zu können, wählen Sie die **Optimierungen** -Optionen, und aktivieren Sie **Verschachtelte Virtualisierung**.

    ![][3]

 [2]: {{ site.baseurl }}/static/img/guide/platforms/wp8/parallel_cpu_opts.png
 [3]: {{ site.baseurl }}/static/img/guide/platforms/wp8/parallel_optimize_opts.png

Nachdem Sie diese Schritte abgeschlossen haben, können Sie das Windows Phone SDK installieren. Finden Sie im Windows Phone 8 Plattform für Details.
