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

# Tizen piattaforma guida

Questa guida descrive come configurare l'ambiente di sviluppo SDK per distribuire Cordova apps per dispositivi con sistema operativo Tizen.

## Requisiti e supporto

Tizen SDK richiede Linux Ubuntu 10.04/10.10/11.04/11.10 (32-bit) o Windows XP SP3/7 (32 bit).

Gli sviluppatori devono utilizzare il `cordova` utilità in combinazione con Tizen SDK. L'interfaccia della riga di comando per informazioni, vedere come installarlo, aggiungere progetti, quindi compilare e distribuire un progetto.

## Installare il SDK

Scaricare il SDK di Tizen da [tizen.org][1].

 [1]: https://developer.tizen.org/sdk

<!--

- (optional) Install Tizen Cordova template projects: copy the
  `/templates` directory content into the Tizen Eclipse IDE web
  templates directory (e.g.:
  `/home/my_username/tizen-sdk/IDE/Templates/web`).

- __Method #2: Use Tizen Eclipse IDE Cordova Tizen project templates__
    - Launch Tizen Eclipse IDE
    - Select  __File &rarr; New &rarr; Tizen Web Project__
    - Select __User Template__ and __User defined__ items
    - Select one of the Tizen Cordova template (e.g.: __CordovaBasicTemplate__)
    - Fill the __Project name__ and its target __Location__

    ![](img/guide/platforms/tizen/project_template.png)

    - Click __Finish__

    ![](img/guide/platforms/tizen/project_explorer.png)

    - Your project should now appear in the __Project Explorer__ view

-->

## Aprire un progetto in SDK

1.  Lanciare Tizen Eclipse IDE.

2.  Selezionare **File → Importa → Tizen Web progetto**:

    ![][2]

3.  Premere **avanti**.

4.  Assicurarsi di **che selezionare la directory radice** è controllato.

5.  Assicurarsi di **che copiare i progetti nell'area di lavoro** è controllato.

6.  Premere **Sfoglia** e selezionare il Cordova Tizen `samples` directory di progetto (come `/cordova-basic` ):

    ![][3]

7.  Premere **fine**. Il progetto dovrebbe ora essere importati e vengono visualizzati nella visualizzazione di **Esplora progetti** :

    ![][4]

 [2]: {{ site.baseurl }}/static/img/guide/platforms/tizen/import_project.png
 [3]: {{ site.baseurl }}/static/img/guide/platforms/tizen/import_widget.png
 [4]: {{ site.baseurl }}/static/img/guide/platforms/tizen/project_explorer.png

Per ricompilare il progetto, fate clic destro nella visualizzazione di **Esplora progetti** e selezionare il **Progetto di costruire**:

![][5]

 [5]: {{ site.baseurl }}/static/img/guide/platforms/tizen/build_project.png

Nella directory radice del progetto dovrebbe generare un file di pacchetto di widget come *hello.wgt* .

## Distribuire all'emulatore

Fare clic sul progetto in **Esplora progetti** visualizzazione e selezionare **Esegui come → Tizen Web Simulator applicazione**:

![][6]

 [6]: {{ site.baseurl }}/static/img/guide/platforms/tizen/runas_web_sim_app.png

## Distribuire al dispositivo

*   Assicurarsi che il dispositivo di destinazione è correttamente avviato, collegato e configurato. È necessario impostare correttamente le impostazioni di **data e ora** .

*   Utilizzare la **Connessione Explorer** per selezionare la destinazione di distribuzione applicazione: **→ di vista Visualizza → finestra connessione Explorer**.

    ![][7]

*   Fare clic sul progetto nella visualizzazione di **Esplora progetti** , quindi selezionare **Esegui come → Tizen applicazione Web**:

    ![][8]

 [7]: {{ site.baseurl }}/static/img/guide/platforms/tizen/connection_explorer.png
 [8]: {{ site.baseurl }}/static/img/guide/platforms/tizen/runas_web_app.png
