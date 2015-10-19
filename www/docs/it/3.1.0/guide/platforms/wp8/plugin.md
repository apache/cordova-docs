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

title: Windows Phone Plugins
---

# Windows Phone Plugins

Scrivere un plugin per Cordova su Windows Phone richiede una conoscenza base dell'architettura di Cordova. Cordova-WP7 è costituito da un browser Web che ospita il codice JavaScript di applicazione e gestisce le chiamate API native. C'è un BaseCommand ( `WP7CordovaClassLib.Cordova.Commands.BaseCommand` ) classe in c# che è possibile estendere, e viene fornito con la maggior parte delle tubature' ' costruita per voi già.

1.  Selezionare il progetto e fare clic destro per scegliere **Aggiungi → nuovo elemento...**
    
    *   Preferibilmente aggiungerlo alla directory 'Plugins', ma spetta a voi

2.  Selezionare 'Class' e il nome`Echo.cs`
    
    *   Il nome di questa classe devono *esattamente* corrispondere quello che tu chiami in`cordova.exec(win, fail, "Echo", ...)`

3.  Includono l'implementazione di classi base
    
        usando WPCordovaClassLib.Cordova;
        usando WPCordovaClassLib.Cordova.Commands;
        usando WPCordovaClassLib.Cordova.JSON;
        

4.  Estendere la classe da BaseCommand
    
        classe pubblica Echo: BaseCommand {/ /...}
        

5.  Aggiungere un metodo chiamabile da JavaScript
    
        classe pubblica Echo: BaseCommand {public void eco (opzioni di stringa) {/ / tutti i metodi JS plugin richiamabile devono avere questa firma!
                / / pubblico, tornando a vuoto, 1 argomento che è una stringa}}
        

## Spazi dei nomi

Lo spazio dei nomi predefinito per i comandi non qualificati è:

    Namespace Cordova.Extension.Commands {/ /...}
    

Se si desidera utilizzare il proprio spazio dei nomi, è necessario effettuare una chiamata completo a `cordova.exec` . Per esempio, se si desidera definire una classe c# come questo:

    Namespace com.mydomain.cordovaExtensions {classe pubblica Echo: BaseCommand {/ /...}}
    

Poi, in JavaScript è necessario chiamare `exec` come questo:

    Cordova.exec (vittoria, fail, "com.mydomain.cordovaExtensions.Echo",...);
    

## Interpretando i tuoi argomenti in C

I dati ricevuti dal tuo metodo di plugin sono un valore stringa, ma in realtà guardando il nostro codice JavaScript, vediamo che la nostra intenzione era quella di passare un array di stringhe. Guardando indietro alla nostra chiamata JavaScript a `cordova.exec` , vediamo che abbiamo passato `[str]` :

    Cordova.exec (vincere, fallire, "Echo", "eco", ["stringa di input"]);
    

Se noi controllare la stringa di opzioni passata al nostro `Echo.echo` metodo, vediamo che il valore è in realtà:

    "[\"input string\ "]"
    

Tutti i JavaScript `exec` argomenti sono JSON codificati prima di essere passato in c#.

Se vogliamo considerare questo come la stringa che ci aspettavamo, abbiamo bisogno di decodificarlo. Possiamo usare semplice deserializzazione JSON.

    String optVal = JsonHelper.Deserialize, < string [] > (opzioni) [0];
    / / optVal ora ha il valore di "stringa di input"
    

## Risultati passando da c# a JavaScript

La classe base BaseCommand fornisce metodi per il passaggio di dati per i gestori di callback JavaScript. Per segnalare semplicemente che il comando è riuscito, quando nessuna info risultato supplementare è necessario, è possibile semplicemente chiamare:

    DispatchCommandResult(); / / chiamate torna con un risultato di plugin vuoto, considerato un callback di successo
    

Per passare dati indietro, è necessario chiamare una versione diversa di `DispatchCommandResult` :

    DispatchCommandResult (nuovo PluginResult (PluginResult.Status.OK, "tutto è andato come previsto, questo è un risultato che viene passato al gestore successo."));
    

Per passare dati oggetto strutturato a JavaScript, dovrebbe essere codificato come stringa JSON:

    DispatchCommandResult(new PluginResult(PluginResult.Status.OK, "{result:\"super awesome!\"}"));
    

Se dovete segnalare che si è verificato un errore, è possibile chiamare `DispatchCommandResult` con un `PluginResult` oggetto:

    DispatchCommandResult (nuovo PluginResult (PluginResult.Status.ERROR, "Echo segnalato un errore"));
    

## Gestione degli errori di serializzazione in metodo c# del vostro plugin

Nell'interpretare i tuoi argomenti, è una buona idea utilizzare un blocco try/catch, nel caso in cui abbiamo ingresso male. Questo è un modello utilizzato in tutto il codice c# Cordova:

    string optVal = null;
    
    try
    {
        optVal = JsonHelper.Deserialize<string[]>(options)[0];
    }
    catch(Exception)
    {
        // simply catch the exception, we handle null values and exceptions together
    }
    
    if (optVal == null)
    {
        DispatchCommandResult(new PluginResult(PluginResult.Status.JSON_EXCEPTION));
    }
    else
    {
        // ... continuare su a fare il nostro lavoro}
    

## Plugin XML

Questi sono esempi specifici di telefono windows di utilizzare il file del plugin, fare riferimento alla specifica Plugin per maggiori dettagli

### `<source-file>`

Windows phone il `<source-file>` elemento attualmente è utilizzato per definire tutte le risorse del plugin (ie. cs, XAML,. xaml.cs,. dll, immagine beni ecc).

### `<config-file>`

Il `<config-file>` elemento definisce quali elementi vengono messe in un file di configurazione. Ad esempio per aggiungere un plugin per le piattaforme config. xml, si farebbe qualcosa di simile:

    < target="config.xml config-file" padre = "/ *" >< nome caratteristica = "PluginName" >< param nome = valore "wp-pacchetto" = "PluginName" / >< / caratteristica >< / config-file >
    

Se volessimo aggiungere la funzionalità di contatti per il WMAppManifest. xml, sarebbe simile a questa:

    <config-file target="Properties/WMAppManifest.xml" parent="/Deployment/App/Capabilities">
        <Capability Name="ID_CAP_CONTACTS" />
    </config-file>
    

## Funzionalità avanzate del Plugin

Vedere altri metodi che è possibile eseguire l'override in:

*   [BaseCommand.cs][1]

 [1]: https://github.com/apache/cordova-wp7/blob/master/templates/standalone/cordovalib/Commands/BaseCommand.cs

Ad esempio, è possibile agganciarsi nella '[pausa](../../../cordova/events/events.pause.html)' e 'riprendere' eventi di applicazione.

### Plugin debug

Per eseguire il debug lato c#, è possibile utilizzare il debugger di Visual Studio, basta impostare un punto di interruzione in uno qualsiasi dei metodi esposti dalla classe.

JavaScript è un po' più difficile eseguire il debug di Windows Phone. È necessario utilizzare `console.log` per lo stato del vostro plugin di output, o informarsi di errori.

## Trabocchetti comuni

*   Fare attenzione quando si decide su argomenti che si passa al nativo nell'implementazione JavaScript. La maggior parte delle piattaforme per dispositivi aspettano il passato a cordova.exec essere una matrice args, ma se si hanno diversi tipi di oggetti in questa matrice, diventa difficile o impossibile per deserializzare.
    
        Cordova.exec (vittoria, fail, "Nomeservizio", "MethodName", ["questa è una stringa", 54, {literal: 'trouble'}]);
        
    
    *   Questo significa che il codice c# riceve un difficile decodificare il valore stringa, come:
        
            "[\"this è un string\ ", 54, {letterale: 'trouble'}]"
            
    
    *   Prendere in considerazione tutti i parametri di conversione stringhe prima di chiamare exec:
        
            Cordova.exec (vittoria, fail, "Nomeservizio", "MethodName", ["questa è una stringa", "54", "{literal: 'trouble'}"]);
            
            String [] optValues = JsonHelper.Deserialize, < string [] > (opzioni);
            

*   Di solito è una buona idea fare il parametro di controllo nel codice JavaScript, prima di chiamare `exec` . Ciò consente di riutilizzare il codice JavaScript più tra le varie implementazioni native del vostro plugin.