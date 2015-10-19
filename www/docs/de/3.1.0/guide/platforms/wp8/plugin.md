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

Schreibe ein Plugin für Cordova auf Windows Phone erfordert ein grundlegendes Verständnis der Architektur von Cordova. Cordova-WP7 besteht aus einem WebBrowser die JavaScript-Code den Anwendung hostet und verwaltet native API-Aufrufe. Es gibt eine BaseCommand ( `WP7CordovaClassLib.Cordova.Commands.BaseCommand` ) Klasse in c#, die Sie erweitern können, und es kommt mit der Mehrheit der "Sanitär" bereits für Sie gebaut.

1.  Wählen Sie das Projekt, und mit der rechten Maustaste wählen Sie **hinzufügen → neu Artikel...**
    
    *   Vorzugsweise im 'Plugins'-Verzeichnis hinzufügen, aber es liegt an Ihnen

2.  Wählen Sie "Klasse" und nennen Sie es`Echo.cs`
    
    *   Der Name dieser Klasse muss *genau* übereinstimmen, nennst du in`cordova.exec(win, fail, "Echo", ...)`

3.  Gehören Sie die Basisklassen-Durchführung
    
        using WPCordovaClassLib.Cordova;
        using WPCordovaClassLib.Cordova.Commands;
        using WPCordovaClassLib.Cordova.JSON;
        

4.  Erweitern Sie Ihre Klasse aus BaseCommand
    
        public Class Echo: BaseCommand {/ /...}
        

5.  Fügen Sie eine Methode, die von JavaScript aufrufbar ist
    
        public Class Echo: BaseCommand {public void Echo (Zeichenfolgenoptionen) {/ / alle JS Plugin aufrufbaren Methoden müssen diese Signatur!
                / / public, leere, 1 Argument, das eine Zeichenfolge zurückgeben}}
        

## Namespaces

Der Standardnamespace für unqualifizierte Befehle ist:

    Namespace Cordova.Extension.Commands {/ /...}
    

Wenn Sie Ihren eigenen Namespace verwenden möchten, müssen Sie einen vollqualifizierten Aufruf von `cordova.exec` . Dies ist beispielsweise der Fall, wenn Sie möchten Ihre c#-Klasse wie folgt definieren:

    Namespace com.mydomain.cordovaExtensions {public Class Echo: BaseCommand {/ /...}}
    

Dann müssen Sie in JavaScript aufrufen `exec` wie folgt:

    Cordova.exec (Win, scheitern, "com.mydomain.cordovaExtensions.Echo",...);
    

## Interpretieren Ihre Argumente in C

Daten durch die Plugin-Methode ist ein String-Wert, aber in Wirklichkeit betrachten unsere JavaScript-Code, wir sehen, dass unsere Absicht war, übergeben Sie ein Array von Zeichenfolgen. Rückblick auf unsere JavaScript-Aufruf an `cordova.exec` , wir sehen, wir übergeben `[str]` :

    Cordova.exec (gewinnen, scheitern, "Echo", "Echo", ["Eingabezeichenfolge"]);
    

Wenn wir prüfen an übergebene Optionszeichenfolge unsere `Echo.echo` Methode sehen wir, dass der Wert tatsächlich ist:

    "[\"input string\ "]"
    

Alle JavaScript `exec` Argumente sind JSON vor der Übergabe in c# codiert.

Wenn wir wollen, das als die Zeichenfolge zu behandeln, was wir erwartet hatten, müssen wir es decodieren. Wir können einfach JSON-Deserialisierung.

    String OptVal = JsonHelper.Deserialize < String [] > (Optionen) [0];
    / / OptVal hat jetzt den Wert "Eingabezeichenfolge"
    

## Ergebnisse aus c# an JavaScript übergeben

Die Basisklasse BaseCommand stellt Methoden zur Übergabe von Daten an die JavaScript-Callback-Handler. Um einfach zu signalisieren, dass der Befehl erfolgreich war, wenn kein weiteres Ergebnis Info benötigt wird, können Sie einfach aufrufen:

    DispatchCommandResult(); / / Anrufe zurück mit einem leeren Plugin-Ergebnis als einen Erfolg-Rückruf
    

Um Daten zurück zu übergeben, müssen Sie eine andere Version von Anrufen `DispatchCommandResult` :

    DispatchCommandResult (neue PluginResult (PluginResult.Status.OK, "alles lief wie geplant, dies ist ein Ergebnis, das auf dem Erfolg-Handler übergeben wird."));
    

Um strukturierte Objektdaten wieder an JavaScript übergeben, sollte es als JSON String codiert werden:

    DispatchCommandResult(new PluginResult(PluginResult.Status.OK, "{result:\"super awesome!\"}"));
    

Wenn Sie brauchen, um zu signalisieren, dass ein Fehler aufgetreten, Sie erreichen `DispatchCommandResult` mit einem `PluginResult` Objekt:

    DispatchCommandResult (neue PluginResult (PluginResult.Status.ERROR, "Echo signalisiert einen Fehler"));
    

## Serialisierung Fehlerbehandlung in Ihr Plugin c#-Methode

Wenn Ihre Argumente zu interpretieren, ist es eine gute Idee, einen Try/Catch-Block zu verwenden, für den Fall, dass wir schlechte Eingang haben. Dies ist ein Muster, die im gesamten Cordova c#-Code verwendet:

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
        // ... weiter auf unsere Arbeit tun}
    

## Plugin XML

Dies sind die Windows Telefon konkrete Beispiele für die Verwendung der [Datei](../../../cordova/file/fileobj/fileobj.html) plugin.xml, beziehen sich auf die [Plugin-Spezifikation](../../../plugin_ref/spec.html) für weitere details

### `<source-file>`

Windows Phone das `<source-file>` Element wird derzeit verwendet, um alle Plugin-Ressourcen zu definieren (ie. cs, XAML,. xaml.cs, .dll, Bild Vermögenswerte etc.).

### `<config-file>`

Das `<config-file>` -Element definiert, welche Elemente in einer Config-Datei gestellt bekommen. Zum Beispiel der Plattformen-config.xml ein Plugin hinzu würde Sie so etwas tun:

    <config-file target="config.xml" parent="/*">
        <feature name="PluginName">
            <param name="wp-package" value="PluginName"/>
        </feature>
    </config-file>
    

Wenn wir wollten die WMAppManifest.xml die Fähigkeit [Kontakte](../../../cordova/contacts/contacts.html) hinzu, würde es so aussehen:

    <config-file target="Properties/WMAppManifest.xml" parent="/Deployment/App/Capabilities">
        <Capability Name="ID_CAP_CONTACTS" />
    </config-file>
    

## Erweiterte Plugin-Funktionalität

Sehen Sie andere Methoden, denen Sie, in überschreiben können:

*   [BaseCommand.cs][1]

 [1]: https://github.com/apache/cordova-wp7/blob/master/templates/standalone/cordovalib/Commands/BaseCommand.cs

Beispielsweise können Sie Haken in die 'Pause' und Anwendungsereignisse "fortsetzen".

### Debuggen von Plugins

Um die C#-Seite zu debuggen, können Sie Visual Studio-Debugger verwenden, nur einen Haltepunkt festlegen, auf jeder Ihrer Klasse verfügbar gemachten Methoden.

JavaScript ist ein wenig schwieriger zu Debuggen auf Windows Phone. Sie müssen mit `console.log` Ausgang Bundesland Ihr Plugin, oder informieren Sie sich über Störungen.

## Häufige Probleme

*   Achten Sie bei der Entscheidung über die Argumente, die Sie native in der JavaScript-Implementierung übergeben. Die meisten Plattformen erwarten des Args an cordova.exec ein Array übergeben, aber haben Sie verschiedene Typen von Objekten in diesem Array, wird es schwierig oder unmöglich zu deserialisieren.
    
        cordova.exec(win, fail, "ServiceName", "MethodName", ["this is a string", 54, {literal:'trouble'}]);
        
    
    *   Dies bedeutet, dass c#-Code ein schwierig erhält zu String-Wert, wie z. B. decodieren:
        
            "[\"this is a string\", 54, { literal:'trouble' }]"
            
    
    *   Betrachten Sie alle Parameter in Zeichenfolgen zu konvertieren, vor dem Aufruf von Exec:
        
            cordova.exec(win, fail, "ServiceName", "MethodName", ["this is a string", "54", "{literal:'trouble'}"]) ;
            
            string[] optValues = JsonHelper.Deserialize<string[]>(options);
            

*   Es ist in der Regel eine gute Idee dazu Parameterprüfung in Ihrem JavaScript-Code vor dem Aufruf von `exec` . Dadurch können Sie weitere JavaScript-Code unter verschiedenen native Implementierungen des Plugins wieder zu verwenden.