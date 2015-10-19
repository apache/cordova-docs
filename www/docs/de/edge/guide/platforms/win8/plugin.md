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

title: Windows Plugins
---

# Windows Plugins

Dieser Abschnitt enthält Informationen für das eine Plugin für die Verwendung in einem Windows-Speicher-app zu implementieren. Finden Sie bevor Sie dies lesen einen Überblick über die Plugin-Struktur und ihre gemeinsame JavaScript-Schnittstelle Anwendung Plugins. In diesem Abschnitt weiterhin das Beispiel- *Echo* -Plugin, das zum einheitlichen Plattform und zurück von Cordova-Webview kommuniziert.

Es ist wichtig zu beachten, dass Windows Entwicklung direkt in Javascript, das bedeutet unterstützt, die 'native' Teile in nur erforderlich in besonderen Fällen zu entwickeln.

## Erstellen eine Windows-Plugin in JavaScript

Diese Anweisungen sind eine reine JavaScript-Plugin erstellen. Verständnis dieser ist entscheidend für das Verständnis wie die systemeigen/verwaltet Bits hinzugefügt.

Windows Cordova Plugins sind im Wesentlichen einen einfachen Wrapper vorhandenen WinJS bereitgestellten Funktionen, aber vorausgesetzt, dass Ihr JS-common Interface für mehrere Geräte definieren möchten, in der Regel habt ihr 1 JS-Datei, die die API bereitstellt.

    // inside file echoplugin.js
    var EchoPlugin = {
        // the echo function calls successCallback with the provided text in strInput
        // if strInput is empty, it will call the errorCallback
        echo:function(successCallback, errorCallback, strInput) {
            cordova.exec(successCallback,errorCallback,"EchoPlugin","echo",[strInput]);
        }
    }
    

## Innen Cordova Exec unter Windows

Die cordova.exec-Funktion ist auf jeder Plattform unterschiedlich definiert, das ist, weil jede Plattform hat seine eigene Art der Kommunikation zwischen der Anwendung-Js-Code und dem systemeigenen Wrapper-Code. Doch im Falle von Windows, gibt es keine systemeigenen Wrapper also der Exec-Aufruf für Konsistenz gibt. Sie konnte Ihre Js nur Plugin direkt in EchoPlugin.echo, arbeiten so etwas wie:

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
    

Dies würde/könnte funktionieren, aber es bedeutet, dass für verschiedene Plattformen Sie verschiedene Versionen von echoPlugin.js benötigen, und vielleicht Sie Probleme mit Inkonsistenzen in Ihre Implementierungen hätten. Als bewährte Methode beschlossen wir, eine native API innerhalb cordova.exec unter Windows zu imitieren, also wir könnten führen Sie den gleichen JS-Code nicht haben, es für die Plattform neu zu schreiben und auch nutzen jede Parameterprüfung oder anderen gemeinsamen Code zur Verfügung gestellt von Entwicklern, die auf anderen Plattformen arbeiteten.

## Cordova-Exec-proxy

Unter Windows bietet Cordova einen Proxy, den Sie verwenden können, um ein Objekt zu registrieren, die alle cordova.exec Aufrufe an eine API behandelt wird.

Zum Beispiel wenn Sie die Implementierung für die Beschleunigungsmesser-API bereitstellen wollte, würde Sie dies tun:

cordova.commandProxy.add ("Accelerometer", {Start: function() {/ / Ihr code hier...} / /... und der Rest der API hier});

Also in unserem Fall, wir annehmen, dass der Code in echoplugin.js ist cross-Plattform entsprechenden Umgang mit JavaScript, und wir kann einfach schreiben, ein Proxy für Windows

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
    

Die Plugin-definition

Wenn wir wollen, dass Benutzer unseres Plugins, einfach unser Plugin installieren zu können, müssen wir definieren es nach wie PlugMan Plugins definiert. Mehr dazu in der [Plugin-Spec][1]

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
    

Dies gibt uns eine funktionierende Windows-JavaScript-Plugin, das eine gemeinsame Datei (echoplugin.js) verwendet, und verwendet einen Proxy, um den einzigen Teil der Windows-Implementierung (echopluginProxy.js) zur Verfügung zu stellen. Wie füge wir Native/verwaltetem Code dazu? Nun werden wir gleich beginnen, der einzige Unterschied wird sein, was wir tun, innen in EchopluginProxy Methoden.

# Wie WinJS Native/verwaltetem Code zugreift

Unter Windows WinJS erstellte apps mit systemeigenem Code interagieren sind ist diese DLLs für Windows-Runtime-Komponenten verfügbar. Die Details sind zahlreich, und diese Anleitung deckt nur die Grundlagen. Microsoft bietet viel mehr Info [hier][2].

 [2]: http://msdn.microsoft.com/en-us/library/windows/apps/hh441569.aspx

Wenn Sie Ihre Windows-Runtime-Komponente, jede Klasse erstellen werden definiert als 'public refclass versiegelt' eine 'aktivierbare Klasse' gilt und werden von JavaScript aufrufbar.

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
    

Jetzt in Ordnung für uns den systemeigenen Code aufrufen, verwenden wir den Namespace und Classname LowerCamelCase die Methode, die wir fordern.

Var Res = EchoRuntimeComponent.EchoPluginRT.echo("boom"); Verschieben dies in unserer echopluginProxy.js-Datei, erhalten wir dies:

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
    

Und das war's, wir haben eine durchgehende C++ unterstützt Js aufrufbaren Plugin für den Einsatz in Apache Cordova Windows!

# Einige technische Hinweise:

*   der Rückruf ist in der Regel Async, so dass er den Rückruf sofort vom Aufrufer wahrscheinlich nicht erwartet wird. In der Praxis wenn der Aufruf nicht Async, sollten Sie mindestens einen Javascript-Timeout verwenden zwingen den Rückruf asynchron aufgerufen werden.
*   Aktivierbare Klassen können alle Arten von awesome, wie Event dispatching, asynchronen Rückrufe, übergeben, eigene Objekttypen, Arrays, Sammlungen, überladene Methoden und vieles mehr tun. Ich empfehle, dass Sie Ihre Hausaufgaben machen.
*   Wenn Sie häufige Windows Phone 8.0 und Windows SDK-API-Aufrufe halten, werden Sie in der Lage, die gleiche Runtime-Komponente (native oder verwalteten Bits) in einem Windows Phone 8.0 Apache Cordova-Plugin zu verwenden. ~ stay tuned für diese Stelle.

# Definieren Ihr plugin

Jetzt, da wir eine Plugin arbeiten, müssen wir die Plugin-Definition von früher zu überdenken, damit wir es veröffentlichen können. Wir können nun die Laufzeit-Komponente als Rahmen hinzufügen. Beachten Sie, dass der Ausgabetyp des ein WindowsRuntimeComponent entweder .winmd oder DLL sein kann

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
    

Das ist es, Sie haben jetzt eine verteilbare Plugin, die Sie mit der Welt teilen können! Folgendes ist zu beachten, Unterstützung für das Hinzufügen von Rahmen zu Windows-Cordova-Projekt erst kürzlich hinzugefügt wurde, müssen Sie sicherstellen, dass Ihre aktuellen Werkzeugmaschinen Cordova. Cordova-Cli und Cordova-Plugman unterstützt hinzufügen, Entfernen von native unterstützt Plugins.

> cordova plugin add com.risingj.echoplugin

oder

> plugman install --platform windows --plugin com.risingj.echoplugin --project .

https://github.com/purplecabbage/cordova-runtimecomp-echoplug