--Lizenz: eine oder mehrere Mitwirkende/r Lizenzverträge an die Apache Software Foundation (ASF) lizenziert. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

   under the License.
---

# Windows Phone Plugins

Dieser Abschnitt enthält Informationen für das native Plugin-Code auf der Windows Phone Plattform zu implementieren. Finden Sie bevor Sie dies lesen einen Überblick über die Plugin-Struktur und ihre gemeinsame JavaScript-Schnittstelle Anwendung Plugins. In diesem Abschnitt weiterhin das Beispiel- *Echo* -Plugin, das zum einheitlichen Plattform und zurück von Cordova-Webview kommuniziert.

Schreibe ein Plugin für Cordova auf Windows Phone erfordert ein grundlegendes Verständnis von Cordovas Architektur. Cordova-WP7 besteht aus einer `WebBrowser` , die JavaScript-Code der Anwendung hostet und verwaltet native API-Aufrufe. Sie können erweitern, eine C#- `BaseCommand` Klasse ( `WP7CordovaClassLib.Cordova.Commands.BaseCommand` ), der kommt mit den meisten der Funktionalität, die Sie benötigen:

1.  Wählen Sie das Projekt, und mit der rechten Maustaste wählen Sie **hinzufügen → neu Artikel...** Wenn Sie möchten, können Sie hinzufügen, um den `Plugins` Ordner.

2.  Wählen Sie **Klasse** und nennen Sie es `Echo.cs` . Diese Klasse Name muss *genau* übereinstimmen nennen Sie angeben, wie der Dienst in der `cordova.exec()` auf der JavaScript-Seite aufrufen.

3.  Gehören Sie die Basisklassen-Umsetzung:
    
        using WPCordovaClassLib.Cordova;
        using WPCordovaClassLib.Cordova.Commands;
        using WPCordovaClassLib.Cordova.JSON;
        

4.  Erweitern Sie Ihre Klasse von `BaseCommand` :
    
        public Class Echo: BaseCommand {/ /...}
        

5.  Fügen Sie eine `echo` Methode, die von JavaScript aufrufbar ist:
    
        public Class Echo: BaseCommand {public void Echo (Zeichenfolgenoptionen) {/ / alle JS Plugin aufrufbaren Methoden müssen diese Signatur!
                / / public, leere, 1 Argument, das eine Zeichenfolge zurückgeben}}
        

Finden Sie die [BaseCommand.cs][1] -Klasse für Methoden für das Plugin zum Überschreiben verfügbar. Beispielsweise kann das Plugin 'Pause' und 'fortsetzen' Ereignisse erfassen.

 [1]: https://github.com/apache/cordova-wp7/blob/master/templates/standalone/cordovalib/Commands/BaseCommand.cs

## Namespaces

Der Standardnamespace für unqualifizierte Befehle ist:

        namespace Cordova.Extension.Commands
        {
            // ...
        }
    

Wenn Sie Ihrem eigenen Namespace angeben möchten, müssen Sie einen vollqualifizierten Aufruf `cordova.exec` . Dies ist beispielsweise der Fall, wenn Sie möchten, dass Ihre c#-Klasse wie folgt:

        namespace com.mydomain.cordovaExtensions
        {
            public class Echo : BaseCommand
            {
                // ...
            }
        }
    

Das JavaScript aufrufen müssten `exec` wie folgt:

        Cordova.exec (Win, scheitern, "com.mydomain.cordovaExtensions.Echo",...);
    

## Interpretation der Argumente in C

Im Beispiel in Anwendung-Plugins ist die Daten, die Ihr Plugin empfängt eine Zeichenfolge, aber was, wenn Sie ein Array von Zeichenfolgen übergeben möchten? Nehmen wir an das JavaScript `cordova.exec` Aufruf wird wie folgt angegeben:

        Cordova.exec (gewinnen, scheitern, "Echo", "Echo", ["Eingabezeichenfolge"]);
    

Der Wert des `options` Zeichenfolge übergeben die `Echo.echo` Methode ist JSON:

        "[\"input string\ "]"
    

Alle JavaScript `exec` Argumente sind JSON-codierte, vor der Übergabe in c# und decodiert werden müssen:

        string optVal = JsonHelper.Deserialize<string[]>(options)[0];
        // optVal now has the value of "input string"
    

## Ergebnisse der bestandenen Tests aus c#, JavaScript

Die `BaseCommand` -Klasse stellt Methoden zum Übergeben von Daten an JavaScript-Callback-Handler. Wenn Sie einfach Erfolg ohne begleitende Ergebnis signalisieren möchten, rufen Sie einfach:

        DispatchCommandResult();
        // calls back with an empty plugin result, considered a success callback
    

Um Daten wieder zu übergeben, müssen Sie anrufen `DispatchCommandResult` unterschiedlich:

        DispatchCommandResult (neue PluginResult (PluginResult.Status.OK, "alles lief wie geplant, dies ist ein Ergebnis, das auf dem Erfolg-Handler übergeben wird."));
    

Verwenden Sie eine codierte JSON-Zeichenfolge, strukturierte Objektdaten zurück an JavaScript übergeben:

        DispatchCommandResult(new PluginResult(PluginResult.Status.OK, "{result:\"super awesome!\"}"));
    

Um einen Fehler zu signalisieren, rufen Sie `DispatchCommandResult` mit einem `PluginResult` Objekt, dessen Status ist `ERROR` :

        DispatchCommandResult (neue PluginResult (PluginResult.Status.ERROR, "Echo signalisiert einen Fehler"));
    

## Serialisierung Fehlerbehandlung

Bei der Interpretation der Argumente, `try` / `catch` Blöcke zu helfen, schlechte Eingang zu gelangen. Dieses Muster scheint in Cordova c#-Code:

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

Die folgenden veranschaulicht die `plugin.xml` Datei, um ein Plugin Quellcode Dateien auf der Windows Phone Plattform anzugeben. Details zu den verfügbaren Optionen finden Sie unter Application Plugins für einen Überblick und Plugin-Spezifikation.

*   Das `<source-file>` -Element definiert alle Plugin-Ressourcen, z. B. *CS*, *XAML*, *. xaml.cs*, und *dll* -Dateien und Bild-Assets.

*   Das `<config-file>` -Element definiert Elemente, die in einer Konfigurationsdatei zu injizieren. In diesem Beispiel wird eine Plugin für der Plattform `config.xml` Datei:
    
        <config-file target="config.xml" parent="/*">
            <feature name="PluginName">
                <param name="wp-package" value="PluginName"/>
            </feature>
        </config-file>
        
    
    In diesem Beispiel wird die Kontakt-Möglichkeit, die `WMAppManifest.xml` Datei:
    
        <config-file target="Properties/WMAppManifest.xml" parent="/Deployment/App/Capabilities">
            <Capability Name="ID_CAP_CONTACTS" />
        </config-file>
        

## Debuggen von Plugins

Verwenden Sie Visual Studio-Debugger, um ein Plugin C#-Komponente zu debuggen. Sie können einen Haltepunkt auf jeder Ihrer Klasse verfügbar gemachten Methoden festlegen.

JavaScript ist schwieriger zu Debuggen auf Windows Phone. Sie müssen mit `console.log` , das Plugin Staat auszugeben, oder um sich über Störungen informieren.

## Häufige Probleme

*   Achten Sie darauf, dass Sie keine Argumente an die systemeigene Seite, die nur schwer als JSON deserialisiert werden von JavaScript übergeben. Die meisten Plattformen erwarten an übergebene Argument `cordova.exec()` ein Array wie folgt sein:
    
        cordova.exec(win, fail, "ServiceName", "MethodName", ["this is a string", 54, {literal:'trouble'}]);
        
    
    Dies kann einen allzu komplexe Zeichenfolgenwert für c# decodieren führen:
    
        "[\"this is a string\", 54, { literal:'trouble' }]"
        
    
    Stattdessen betrachten konvertieren *alle* Parameter in Zeichenfolgen vor dem Aufruf von `exec()` , und Decodierung jeweils separat:
    
        cordova.exec(win, fail, "ServiceName", "MethodName", ["this is a string", "54", "{literal:'trouble'}"]);
        string[] optValues = JsonHelper.Deserialize<string[]>(options);
        

*   Es ist in der Regel besser, Parameter in JavaScript überprüfen, bevor Sie anrufen `exec()` . Dadurch können Sie mehr Code wiederverwenden und ziehen unnötige Funktionen aus des Plugins verschiedene native Implementierungen.