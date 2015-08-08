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

# Configurazione di VMWare Fusion

In questa sezione viene illustrato come configurare VMWare Fusion su Mac in modo che è possibile utilizzare Cordova per generare applicazioni Windows Phone.

[Microsoft Developer Network][1] fornisce le istruzioni per come eseguire Windows sotto VMWare Fusion. Dopo l'installazione di Windows, attenersi alla seguente procedura:

 [1]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945426

1.  All'interno di VMWare Fusion, selezionare l'immagine disco di Windows 8 si sono preparati e scegli **Impostazioni**.

2.  Scegliere le opzioni di configurazione di **processori e memoria** . Assicurarsi di specificare *due* core del processore e per **consentire alle applicazioni di hypervisor in questa macchina virtuale**:

    ![][2]

    L'emulatore di Windows Phone solo utilizza un mezzo gigabyte di memoria, così in generale che è necessario riservare almeno 2GB per VMWare.

3.  Scegliere le impostazioni **avanzate** . Abilitare la **motore di virtualizzazione preferito: Intel VT-x con EPT** opzione:

    ![][3]

4.  Modificare il file *con estensione vmx* per aggiungere o modificare le seguenti impostazioni:

        hypervisor.cpuid.v0 = "FALSE"
        mce.enable = "TRUE"
        vhv.enable = "TRUE"


 [2]: {{ site.baseurl }}/static/img/guide/platforms/wp8/vmware_memory_opts.png
 [3]: {{ site.baseurl }}/static/img/guide/platforms/wp8/vmware_advanced_opts.png

Dopo aver completato questi passaggi, allora siete pronti ad installare il SDK di Windows Phone. Vedere la guida di piattaforma Windows Phone 8 per dettagli.
