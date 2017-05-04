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

title: L'aggiornamento di Windows Phone 8
---

# L'aggiornamento di Windows Phone 8

Questa guida Mostra come modificare i progetti Windows Phone 8, eseguire l'aggiornamento da versioni precedenti di Cordova. Alcune di queste istruzioni si applicano ai progetti creati con un vecchio set di strumenti da riga di comando che precedono la `cordova` utilità CLI. [L'interfaccia della riga di comando](../../cli/index.html) per informazioni, vedere come aggiornare la versione di CLI. Nella sezione seguente viene illustrato l'aggiornamento da non-CLI e progetti CLI.

## All'aggiornamento 3.6.0 proietta al 4.0.0

Per i progetti non-CLI, eseguire:

        bin/update percorso/per/progetto


Per i progetti di CLI:

1.  Aggiornamento del `cordova` versione CLI. Vedere l'interfaccia della riga di comando.

2.  Eseguire `cordova platform update wp8` nei vostri progetti esistenti.

## Aggiornamento a 3.2.0 da 3.1.0

Per i progetti creati con il cordova CLI:

1.  Aggiornamento del `cordova` versione CLI. Vedere l'interfaccia della riga di comando.

2.  Eseguire`cordova platform update wp8`

Per i progetti non creati con la CLI di cordova, eseguire:

        bin\update < project_path >


## Aggiornamento a 3.1.0 da 3.0.0

Per i progetti creati con il cordova CLI:

1.  Aggiornamento del `cordova` versione CLI. Vedere l'interfaccia della riga di comando.

2.  Eseguire `cordova platform update wp8`

Per i progetti non creati con la CLI di cordova, eseguire:

        bin\update <project_path>


## Aggiornamento per il CLI (3.0.0) da 2.9.0

1.  Creare un nuovo progetto di Apache Cordova 3.0.0 utilizzando la CLI, cordova, come descritto in l'interfaccia della riga di comando.

2.  Aggiungere le piattaforme per il progetto di cordova, per esempio:`cordova
platform add wp8`.

3.  Copiare il contenuto del progetto `www` nella directory del `www` cartella alla radice del progetto cordova appena creato.

4.  Copiare o sovrascrivere qualsiasi nativi beni dal progetto originale (`SplashScreen`, `ApplicationIcon`, ecc.), avendo cura di aggiungere nuovi file al file `csproj`. Windows telefoniche compilazioni di progetto all'interno della directory `platforms\wp8`.

5.  Utilizzare lo strumento CLI di cordova per installare il plugin che è necessario. Si noti che il CLI gestisce tutti i core API come plugin, così che può essere necessario aggiungere. Solo 3.0.0 plugin sono compatibili con il CLI.

6.  Costruire e testare.

## Aggiornamento a 3.0.0 (non-CLI) da 2. x

Nella finestra Esplora soluzioni di Visual Studio:

1.  Creare un nuovo Apache Cordova WP8 3.0.0 del progetto.

2.  Copiare il contenuto del `www` nella directory del nuovo progetto ed essere sicuri che questi elementi vengono aggiunti al progetto VS.

3.  Copiare e sovrascrivere qualsiasi schermata iniziale, o sull'icona immagini.

4.  Copiare qualsiasi plugin dalla directory `plugins` per il nuovo progetto e garantire che essi sono anche aggiunti al progetto VS.

5.  Costruire e testare.

**Nota**: tutti i core API vengono rimossi dalla versione 3.0 di Cordova e devono essere installate separatamente come plugin. Per ulteriori informazioni su come riattivare queste caratteristiche in un flusso di lavoro non-CLI, vedere utilizzando Plugman per gestire i plugin.
