-licenza: licenza uno o più contratti di licenza di collaboratore per l'Apache Software Foundation (ASF). See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

   under the License.
---

# Windows Phone Plugins

In questa sezione vengono fornite informazioni dettagliate per come implementare il codice plugin nativo sulla piattaforma Windows Phone. Prima di leggere questo, vedere applicazione plugin per una panoramica della struttura del plugin e la sua interfaccia JavaScript comune. Questa sezione continua a dimostrare il plugin di esempio *eco* che comunica da Cordova webview alla piattaforma nativa e ritorno.

Scrivere un plugin per Cordova su Windows Phone richiede una conoscenza base dell'architettura di Cordova. Cordova-WP7 è costituito da un `WebBrowser` che ospita il codice dell'applicazione JavaScript e gestisce le chiamate API native. È possibile estendere un C# `BaseCommand` classe ( `WP7CordovaClassLib.Cordova.Commands.BaseCommand` ), che viene fornito con la maggior parte delle funzionalità necessarie:

1.  Selezionare il progetto e fare clic destro per scegliere **Aggiungi → nuovo elemento...** Se lo si desidera, è possibile aggiungerlo alla `Plugins` cartella.

2.  Selezionare la **classe** e il nome `Echo.cs` . Questa classe nome deve *esattamente* corrispondere quello che tu chiami specificare come il servizio nel `cordova.exec()` chiamare sul lato JavaScript.

3.  Includono l'implementazione di classi di base:
    
        usando WPCordovaClassLib.Cordova;
        usando WPCordovaClassLib.Cordova.Commands;
        usando WPCordovaClassLib.Cordova.JSON;
        

4.  Estendere la classe da `BaseCommand` :
    
        classe pubblica Echo: BaseCommand {/ /...}
        

5.  Aggiungere un `echo` Metodo chiamabile da JavaScript:
    
        classe pubblica Echo: BaseCommand {public void eco (opzioni di stringa) {/ / tutti i metodi JS plugin richiamabile devono avere questa firma!
                / / pubblico, tornando a vuoto, 1 argomento che è una stringa}}
        

Vedere la classe [BaseCommand.cs][1] per i metodi disponibili per il plugin eseguire l'override. Ad esempio, il plugin può acquisire eventi 'pausa' e 'riprendere'.

 [1]: https://github.com/apache/cordova-wp7/blob/master/templates/standalone/cordovalib/Commands/BaseCommand.cs

## Spazi dei nomi

Lo spazio dei nomi predefinito per i comandi non qualificati è:

        namespace Cordova.Extension.Commands
        {
            // ...
        }
    

Se si desidera specificare il proprio spazio dei nomi, è necessario effettuare una chiamata completo a `cordova.exec` . Per esempio, se si desidera definire una classe c# come questo:

        namespace com.mydomain.cordovaExtensions
        {
            public class Echo : BaseCommand
            {
                // ...
            }
        }
    

Il JavaScript avrebbe bisogno di chiamare `exec` come questo:

        Cordova.exec (vittoria, fail, "com.mydomain.cordovaExtensions.Echo",...);
    

## Interpretare gli argomenti in C

Nell'esempio discusso in applicazione plugin, i tuo plugin riceve dati sono una stringa, ma che cosa se volete passare un array di stringhe? Supponiamo che il JavaScript `cordova.exec` chiamata viene specificato come questo:

        Cordova.exec (vincere, fallire, "Echo", "eco", ["stringa di input"]);
    

Il valore di `options` stringa passata al `Echo.echo` metodo è JSON:

        "[\"input string\ "]"
    

Tutti i JavaScript `exec` argomenti sono JSON-codificati prima di essere passato in c# e quindi bisogno di essere decodificato:

        string optVal = JsonHelper.Deserialize<string[]>(options)[0];
        // optVal now has the value of "input string"
    

## Risultati passando da c# a JavaScript

La `BaseCommand` classe fornisce metodi per passare dati a gestori di callback JavaScript. Se si desidera semplicemente per segnalare il successo con nessun risultato di accompagnamento, è possibile semplicemente chiamare:

        DispatchCommandResult();
        // calls back with an empty plugin result, considered a success callback
    

Per passare dati indietro, è necessario chiamare `DispatchCommandResult` in modo diverso:

        DispatchCommandResult (nuovo PluginResult (PluginResult.Status.OK, "tutto è andato come previsto, questo è un risultato che viene passato al gestore successo."));
    

Utilizzare una stringa codificata JSON per passare dati oggetto strutturato a JavaScript:

        DispatchCommandResult(new PluginResult(PluginResult.Status.OK, "{result:\"super awesome!\"}"));
    

Per segnalare un errore, chiamare `DispatchCommandResult` con un `PluginResult` oggetto il cui status è `ERROR` :

        DispatchCommandResult (nuovo PluginResult (PluginResult.Status.ERROR, "Echo segnalato un errore"));
    

## Gestione degli errori di serializzazione

Nell'interpretare i tuoi argomenti, `try` / `catch` blocchi aiutano escludere ingresso male. Questo modello apparirà in tutto il codice c# Cordova:

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
            // ... continue on to do our work
        }
    

## Plugin XML

Le seguenti viene illustrato come utilizzare il `plugin.xml` file per specificare il file di origine di un plugin sulla piattaforma Windows Phone. Per dettagli sulle opzioni disponibili, vedere applicazione plugin per una panoramica e specifiche di Plugin.

*   Il `<source-file>` elemento definisce tutte le risorse di plugin, come *cs*, *XAML*, *. xaml.cs*e *. dll* file e risorse di immagine.

*   Il `<config-file>` elemento definisce gli elementi da iniettare in un file di configurazione. Questo esempio aggiunge un plugin per la piattaforma `config.xml` file:
    
        <config-file target="config.xml" parent="/*">
            <feature name="PluginName">
                <param name="wp-package" value="PluginName"/>
            </feature>
        </config-file>
        
    
    Questo esempio aggiunge la possibilità di contatti per la `WMAppManifest.xml` file:
    
        <config-file target="Properties/WMAppManifest.xml" parent="/Deployment/App/Capabilities">
            <Capability Name="ID_CAP_CONTACTS" />
        </config-file>
        

## Plugin debug

Utilizzare il debugger di Visual Studio per eseguire il debug componente c# di un plugin. È possibile impostare un punto di interruzione in uno qualsiasi dei metodi esposti dalla classe.

JavaScript è più difficile eseguire il debug di Windows Phone. È necessario utilizzare `console.log` per stato del plugin di output o per informarsi degli errori.

## Trabocchetti comuni

*   Fare attenzione a non passare al lato nativo che sono difficili per la deserializzazione JSON argomenti da JavaScript. La maggior parte delle piattaforme per dispositivi aspettano l'argomento passato a `cordova.exec()` essere una matrice, ad esempio il seguente:
    
        Cordova.exec (vittoria, fail, "Nomeservizio", "MethodName", ["questa è una stringa", 54, {literal: 'trouble'}]);
        
    
    Questo può determinare un valore di stringa troppo complesse per c# decodificare:
    
        "[\"this is a string\", 54, { literal:'trouble' }]"
        
    
    Invece, prendere in considerazione *tutti i* parametri di conversione di stringhe prima di chiamare `exec()` e decodifica ciascuno separatamente:
    
        cordova.exec(win, fail, "ServiceName", "MethodName", ["this is a string", "54", "{literal:'trouble'}"]);
        string[] optValues = JsonHelper.Deserialize<string[]>(options);
        

*   È solitamente meglio verificare i parametri nel JavaScript prima di chiamare `exec()` . In questo modo consente di riutilizzare il codice più e tirare inutili funzionalità del plugin varie implementazioni native.