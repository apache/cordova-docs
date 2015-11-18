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

title: Plugin di Windows
---

# Plugin di Windows

In questa sezione vengono fornite informazioni dettagliate per come implementare un plugin da utilizzare in un'applicazione Windows Store. Prima di leggere questo, vedere applicazione plugin per una panoramica della struttura del plugin e la sua interfaccia JavaScript comune. Questa sezione continua a dimostrare il plugin di esempio *eco* che comunica da Cordova webview alla piattaforma nativa e ritorno.

È importante notare che Windows supporta lo sviluppo direttamente in Javascript, che significa sviluppare le porzioni 'native' solo richiesto in casi particolari.

## Creazione di un Plugin di Windows in JavaScript

Queste istruzioni sono per creare un plugin JavaScript puro. Questa comprensione è fondamentale per capire come aggiungere i bit nativo/gestito.

Windows Cordova plugin sono essenzialmente un wrapper sottile esistente WinJS fornito di funzioni, ma supponendo che si desidera definire un'interfaccia comune JS per più dispositivi, in genere avrete 1 file JS che fornisce le API.

    // inside file echoplugin.js
    var EchoPlugin = {
        // the echo function calls successCallback with the provided text in strInput
        // if strInput is empty, it will call the errorCallback
        echo:function(successCallback, errorCallback, strInput) {
            cordova.exec(successCallback,errorCallback,"EchoPlugin","echo",[strInput]);
        }
    }
    

## Exec all'interno di Cordova su Windows

La funzione cordova.exec è definita in modo diverso su ogni piattaforma, questo è perché ogni piattaforma ha il proprio modo di comunicare tra il codice js di applicazione e il codice wrapper nativo. Ma nel caso di Windows, non non c'è nessun wrapper nativo, quindi la chiamata exec c'è coerenza. Si potrebbe fare il tuo lavoro di unico plugin js direttamente in EchoPlugin.echo, qualcosa come:

    // inside file echoplugin.js ( this is what NOT to do if you want to reuse the JS API cross platform )
    var EchoPlugin = {
        echo:function(successCallback,errorCallback,strInput) {
            if(!strInput || !strInput.length) {
                errorCallback("Error, something was wrong with the input string. =>" + strInput);
            }
            else {
                successCallback(strInput + "echo");
            }
        }
    }
    

Questo sarebbe/potrebbe funzionare bene, però significa che avrete bisogno di diverse versioni di echoPlugin.js per diverse piattaforme, e forse si potrebbero avere problemi con incongruenze nelle implementazioni. Come best practice, abbiamo deciso di simulare un'API nativa all'interno cordova.exec su Windows, quindi potremmo eseguire lo stesso codice JS e non dover riscriverlo per la piattaforma e anche di approfittare di qualsiasi parametro di controllo, o altri comune codice fornito dagli sviluppatori che stavano lavorando su altre piattaforme.

## Il proxy di exec Cordova

Su Windows, cordova fornisce un proxy che è possibile utilizzare per registrare un oggetto che consente di gestire tutte le chiamate di cordova.exec a un'API.

Ad esempio se si desidera fornire l'implementazione dell'API di accelerometro, si dovrebbe fare questo:

cordova.commandProxy.add ("Accelerometro", {start: funzione () {/ / il tuo codice qui...} / /... e il resto dell'API qui});

Così nel nostro caso, si presuppone che il codice in echoplugin.js è gestione multipiattaforma pertinenti JavaScript e si può scrivere semplicemente un proxy per Windows

    // in file echopluginProxy.js
    cordova.commandProxy.add("EchoPlugin",{
        echo:function(successCallback,errorCallback,strInput) {
            if(!strInput || !strInput.length) {
                errorCallback("Error, something was wrong with the input string. =>" + strInput);
            }
            else {
                successCallback(strInput + "echo");
            }
        }
    });
    

La definizione di plugin

Se vogliamo che gli utenti del nostro plugin per poter installare facilmente il nostro plugin, dobbiamo definirlo secondo come PlugMan definisce plugin. Ulteriori informazioni su questo nel [Plugin Spec][1]

 [1]: plugin_ref_spec.md.html#Plugin%20Specification

    <?xml version="1.0" encoding="UTF-8"?>
    <plugin xmlns="http://apache.org/cordova/ns/plugins/1.0"
        id="com.risingj.echoplugin"
        version="0.1.0">
    
        <js-module src="www/echoplugin.js" name="echoplugin">
            <clobbers target="window.echoplugin" />
        </js-module>
    
        <!-- windows -->
        <platform name="windows">
            <js-module src="src/windows/echopluginProxy.js" name="EchoProxy">
                <merges target="" />
            </js-module>
        </platform>
    
        <!-- other platforms -->
    
    </plugin>
    

Questo ci dà un lavoro Windows JavaScript plugin che utilizza un file comune (echoplugin.js) e utilizza un proxy per fornire l'unica porzione di Windows di implementazione (echopluginProxy.js). Quindi, come possiamo aggiungere il codice nativo/gestito a questo? Bene, stiamo per iniziare lo stesso, l'unica differenza sarà quello che facciamo dentro nei metodi echopluginProxy.

# Come WinJS accede nativo/gestito

In Windows, WinJS apps creati sono in grado di interagire con codice nativo, questa Inter-op è disponibile per i componenti di Runtime di Windows. I dettagli sono numerosi, e questa guida riguarderà solo le basi. Microsoft fornisce informazioni molto più [qui][2].

 [2]: http://msdn.microsoft.com/en-us/library/windows/apps/hh441569.aspx

Quando si crea il componente di Windows Runtime, qualsiasi classe che viene definito come 'pubblici rif classe sealed' è considerato una 'attivabile classe' e sarà richiamabile da JavaScript.

    // in your header file .h
    namespace EchoRuntimeComponent
    {
        public ref class EchoPluginRT sealed 
        {
            public:
            static Platform::String^ Echo(Platform::String^ input);
        }
    }
    
    // in the implementation file .cpp
    using namespace EchoRuntimeComponent;
    using namespace Platform;
    
    Platform::String^ EchoPluginRT::Echo(Platform::String^ input)
    {
        if(input->IsEmpty()) 
        {
            return "Error: input string is empty.";
        }
        else
        {
            return input->ToString() + "echo";
        }
    }
    

Ora in modo per noi di chiamare il codice nativo, usiamo il namespace e classname lowerCamelCase il metodo che stiamo chiedendo.

var res = EchoRuntimeComponent.EchoPluginRT.echo("boom"); Questo movimento al nostro file echopluginProxy.js, otteniamo questo:

    // in file echopluginProxy.js
    cordova.commandProxy.add("EchoPlugin",{
        echo:function(successCallback,errorCallback,strInput) {
            var res = EchoRuntimeComponent.EchoPluginRT.echo(strInput);
            if(res.indexOf("Error") == 0) {
                errorCallback(res);
            }
            else {
                successCallback(res);
            }
        }
    });
    

E questo è tutto, abbiamo un'estremità C++ sostenuta js plugin richiamabile per uso in Apache Cordova Windows!

# Alcune note tecniche:

*   il callback è tipicamente async, quindi chiamando il callback subito probabilmente non è previsto dal chiamante. In pratica, se la chiamata non è asincrona, si dovrebbe almeno utilizzare un timeout di javascript per forzare il callback chiamata async.
*   Classi attivabili possono fare tutti i generi di impressionante, come evento dispacciamento, callback asincrono, passando i propri tipi di oggetto, matrici, collezioni, metodi di overload e molto altro ancora. Vi consiglio di che fare il vostro lavoro.
*   Se attacchi ai comuni 8.0 di Windows Phone e Windows SDK API chiamate, sarete in grado di utilizzare lo stesso componente runtime (bit nativo o gestito) in un plugin di Windows Phone 8.0 Apache Cordova. ~ Rimanete sintonizzati per quel post.

# Definendo il tuo plugin

Ora che abbiamo un plugin di lavoro, abbiamo bisogno di rivedere la definizione di plugin da precedenza così noi possiamo pubblicarlo. Ora possiamo aggiungere il componente runtime come un quadro. Si noti che il tipo di output di un WindowsRuntimeComponent può essere winmd o. dll

    <?xml version="1.0" encoding="UTF-8"?>
    <plugin xmlns="http://apache.org/cordova/ns/plugins/1.0"
        id="com.risingj.echoplugin"
        version="0.2.0">
    
        <js-module src="www/echoplugin.js" name="echoplugin">
            <clobbers target="window.echoplugin" />
        </js-module>
    
        <!-- windows -->
        <platform name="windows">
            <js-module src="src/windows/echopluginProxy.js" name="EchoProxy">
                <merges target="" />
            </js-module>
            <framework src="src/windows/EchoRuntimeComponent.winmd" custom="true"/>
        </platform>
    
        <!-- other platforms -->
    
    </plugin>
    

Ecco, ora avete un plugin distribuibile che puoi condividere con il mondo! Una cosa da notare, solo recentemente è stato aggiunto il supporto per l'aggiunta di quadri al progetto Windows Cordova quindi sarà necessario assicurarsi che il vostro cordova utensileria corrente. Cordova-cli e cordova-plugman entrambi supportano l'aggiunta rimozione plugin backup nativo.

> cordova plugin add com.risingj.echoplugin

o

> plugman install --platform windows --plugin com.risingj.echoplugin --project .

https://github.com/purplecabbage/cordova-runtimecomp-echoplug