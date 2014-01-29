---

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

   under the License.
---

# Strumenti della riga di comando di blackBerry 10

Il `cordova` l'utilità della riga di comando è uno strumento ad alto livello che consente di creare applicazioni su piattaforme diverse in una volta. Una versione precedente di Cordova framework fornisce il set di strumenti da riga di comando specifici per ogni piattaforma. Per utilizzarli come alternativa alla CLI, dovete scaricare questa versione di Cordova da [cordova.apache.org][1]. Il download contiene archivi separati per ciascuna piattaforma. Espandere la piattaforma che si desidera fare riferimento. Gli strumenti qui descritti sono in genere disponibili nel livello superiore `bin` directory, altrimenti consultare il file **Leggimi** per ulteriori indicazioni.

 [1]: http://cordova.apache.org

Per informazioni sull'interfaccia della riga di comando a basso livello che Abilita plugin, vedere utilizzando Plugman per gestire i plugin. Per una panoramica, vedere applicazione plugin.

Se hai bisogno di aiuto con i comandi elencati di seguito, digitare il comando lungo con il `-h` o `-help` gli argomenti, che sono supportati da tutti i comandi e che forniscono descrizioni per ciascuno degli argomenti disponibili.

## Creare un'App

Il `create` comando crea un nuovo progetto:

    bin/creare < percorso-a-progetto >< progetto-pacchetto ><-nome del progetto >
    

dove

*   `<path-to-project>`specifica la directory che si desidera che il progetto creato in

*   `<project-package>`specifica un identificatore di dominio inverso stile

*   `<project-name>`specifica il nome visualizzato di apps

**Nota**: il `create` comando avvia installazione di dipendenza attraverso il `npm install` comando. A seconda delle autorizzazioni di directory e il sistema di installazione, questo può richiedere privilegi di amministratore. Se non c'è problema su OSX/Linux, eseguire `sudo npm install` prima di utilizzare il `create` comando. Su Windows, eseguire `npm install` inaugurato in un'utilità della riga di comando con privilegi di amministratore.

## Creare una destinazione

Il `target` comando consente di gestire l'emulatore o dispositivi BlackBerry che si utilizzano per testare l'app. È possibile aggiungere o rimuovere una destinazione o impostare una destinazione come destinazione predefinita.

### Aggiungere una destinazione

    < percorso a progetto >/cordova/destinazione aggiungere < nome >< indirizzo ip > [-t |-tipo < dispositivo | simulator >] [-p |-password password di < >] [..--pin pin < periferica >]
    

dove

*   `<name>`specifica un nome unico per la destinazione.

*   `<ip-address>`specifica l'indirizzo ip del dispositivo BlackBerry o simulatore.

*   `-p | --password <password>`specifica la password per il dispositivo o nell'emulatore. È richiesto solo se il dispositivo o l'emulatore è protetto da password.

*   `--pin <device-pin>`specifica il PIN del dispositivo BlackBerry, che identifica tale dispositivo come un host valido per il token di debug. Questo argomento è obbligatorio solo quando si crea un token di debug.

### Rimuovere una destinazione

    < percorso a progetto >/cordova/Rimuovi < nome > di destinazione
    

### Impostare una destinazione come predefinito

    < percorso a progetto >/cordova/destinazione predefinita < nome >
    

## Costruire l'App

Il `build` comando compila il progetto come file bar. È possibile compilare l'applicazione in modalità di rilascio (che produce un file firmato bar) o in modalità di debug (che produce un file unsigned bar).

### Compilare l'applicazione in modalità di rilascio

    < percorso a progetto >/cordova/costruire il rilascio [-k | - keystorepass < password >] [-b | - buildId < numero >] [-p | - params < params-JSON-file >]
    

dove

*   `-k | --keystorepass <password>`specifica la password che definito quando configurato il computer per firmare le applicazioni.

*   `-b | --buildId <number>`specifica il numero di versione di compilazione dell'applicazione. In genere, questo numero deve essere incrementato dalla precedente versione firmata. Questo argomento è facoltativo.

*   `-p | --params <params-JSON-file>`specifica un file JSON contenente ulteriori parametri da passare a strumenti a valle. Questo argomento è facoltativo.

### Compilare il progetto in modalità di Debug

    < percorso a progetto >/cordova/costruire debug [< target >] [-k | - keystorepass < password >] [-p | - params < params-JSON-file >] [-ll | - loglevel < error|warn|verbose >]
    

dove

*   `<target>`specifica il nome di un target aggiunto precedentemente. Se `<target>` non è specificato, viene utilizzata la destinazione predefinita, se ne è stata creata. Questo argomento è solo richiesto se si desidera che lo script per distribuire l'applicazione a un dispositivo BlackBerry o emulatore e tu non hai creato una destinazione predefinita. Inoltre, se `<target>` è un dispositivo, quindi che il dispositivo deve essere collegato al computer tramite collegamento USB o essere collegato alla stessa rete Wi-Fi come il computer.

*   `-k | --keystorepass <password>`specifica la password che definito quando configurato il computer per firmare le applicazioni. Questa password viene anche utilizzata per creare il token di debug. Questo argomento è solo richiesto se si desidera che lo script per creare e installare il token di debug per voi.

*   `-p | --params <params-JSON-file>`specifica un file JSON contenente ulteriori parametri da passare a strumenti a valle.

*   `-ll | --loglevel <level>`specifica il livello di log. Il livello di log può essere uno dei `error` , `warn` , o`verbose`.

Se avete precedentemente definito una destinazione predefinita (e precedentemente installato un token di debug, se la destinazione è un dispositivo BlackBerry), è possibile eseguire lo script con senza argomenti e i pacchetti script app e distribuisce alla destinazione predefinita. Ad esempio:

    < percorso a progetto >/cordova/costruire debug
    

## Eseguire l'applicazione

Il `run` comando consente di distribuire il build più recente dell'applicazione sul dispositivo BlackBerry specificato o un emulatore. Per distribuire l'applicazione, è necessario specificare una destinazione per il dispositivo o l'emulatore:

    < percorso a progetto >/cordova/eseguire < destinazione >
    

... dove `<target>` specifica il nome di un target aggiunto precedentemente. Se `<target>` è un dispositivo, quindi deve essere collegato al computer tramite cavo USB, oppure sulla stessa rete Wi-Fi sul computer.

## Gestire i plugin

Il `target` comando consente di aggiungere e rimuovere il plugin. Per recuperare un plugin ospitato localmente:

    < percorso a progetto >/cordova/plugin fetch < percorso-plugin >
    

Mostra un elenco dei plugin installati:

    < percorso a progetto >/cordova/plugin ls
    

Aggiungere un plugin:

    < percorso a progetto > plugin/cordova/aggiungere < nome >
    

Rimuovere un plugin:

    < percorso a progetto >/cordova/plugin rm < nome >