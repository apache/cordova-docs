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

# Configurazione di Parallels Desktop

In questa sezione viene illustrato come configurare Parallels Desktop su Mac in modo che è possibile utilizzare Cordova per generare applicazioni Windows Phone.

[Microsoft Developer Network][1] fornisce le istruzioni per come eseguire Windows in Parallels Desktop. Dopo l'installazione di Windows, attenersi alla seguente procedura:

 [1]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945424

1.  All'interno di Parallels Desktop, selezionare l'immagine disco di Windows 8 che avete preparato e scegliere **Impostazioni**.

2.  Scegliere le opzioni **CPU → generale** . Specificare *due* CPU. Specificare almeno 2GB di memoria, anche se cade di fuori dell'intervallo consigliato:

    ![][2]

3.  Per poter eseguire l'immagine di emulatore di dispositivo all'interno della macchina virtuale di Windows 8, scegliere le opzioni di **ottimizzazioni** e abilitare la **Virtualizzazione nidificati**.

    ![][3]

 [2]: {{ site.baseurl }}/static/img/guide/platforms/wp8/parallel_cpu_opts.png
 [3]: {{ site.baseurl }}/static/img/guide/platforms/wp8/parallel_optimize_opts.png

Dopo aver completato questi passaggi, si è pronti per installare il SDK di Windows Phone. Vedere la guida di piattaforma Windows Phone 8 per dettagli.
