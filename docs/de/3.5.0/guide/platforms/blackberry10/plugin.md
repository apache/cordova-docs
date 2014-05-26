---

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied. See the License for the
         specific language governing permissions and limitations
    

   under the License.
---

# BlackBerry 10 Plugins

Dieser Abschnitt enthält Informationen für das native Plugin-Code auf der BlackBerry 10-Plattform zu implementieren. Finden Sie bevor Sie dies lesen einen Überblick über die Plugin-Struktur und ihre gemeinsame JavaScript-Schnittstelle Anwendung Plugins. In diesem Abschnitt weiterhin das Beispiel- *Echo* -Plugin, das zum einheitlichen Plattform und zurück von Cordova-Webview kommuniziert.

Das Echo-Plugin was String. grundsätzlich die `window.echo` Funktion sendet von JavaScript:

        window.echo = function(str, callback) {
            cordova.exec(callback, function(err) {
                callback('Nothing to echo.');
            }, "Echo", "echo", [str]);
        };
    

Eine Cordova-Plugin für BlackBerry 10 enthält sowohl JavaScript als auch native Code, die durch einen Rahmen bereitgestellt durch JNEXT miteinander kommunizieren. Jedes Plugin muss auch eine `plugin.xml` Datei.

## Erstellen der systemeigenen Klasse

Um den einheitlichen Teil Ihr Plugin zu erstellen, öffnen Sie die BlackBerry 10 NDK IDE, und wählen Sie **Datei → neu → BlackBerry Project → Native Erweiterung → BlackBerry 10**. Geben Sie den gewünschten Projektnamen und den Speicherort, und drücken Sie **Fertig stellen**.

Das Projekt, erstellt von der IDE enthält Beispielcode für ein Speicher-Plugin. Sie können zu ersetzen oder diese Dateien ändern, um Ihre eigene Funktionalität zu implementieren:

*   `*name*_js.hpp`: C++-Header für den JNEXT-Code.

*   `*name*_js.cpp`: C++-Code für JNEXT.

Die systemeigene Schnittstelle für die JNEXT-Erweiterung kann in der Plugin-Header-Datei des Projekts im öffentlichen Verzeichnis angezeigt werden. Es kennzeichnet auch Konstanten und Hilfsfunktionen in systemeigenen Code verfügbar. Das Plugin muss abgeleitet werden `JSExt` , die definiert ist `plugin.h` . Das heißt, müssen Sie die folgende Klasse implementieren:

        class JSExt
        {
        public:
            virtual ~JSExt() {};
            virtual string InvokeMethod( const string& strCommand ) = 0;
            virtual bool CanDelete( void ) = 0;
        private:
            std::string m_id;
        };
    

Die Erweiterung sollte enthalten die `plugin.h` -Headerdatei. In der `Echo` Beispiel, verwenden Sie `JSExt` wie folgt in der `echo_js.hpp` Datei:

        #include "../public/plugin.h"
        #include <string>
    
        #ifndef ECHO_JS_H_
        #define ECHO_JS_H_
    
        class Echo : public JSExt
        {
        public:
            explicit Echo(const std::string& id);
            virtual ~Echo();
            virtual std::string InvokeMethod(const std::string& command);
            virtual bool CanDelete();
        private:
            std::string m_id;
        };
    
        #endif // ECHO_JS_H_
    

Das `m_id` -Attribut enthält die `JNEXT` -Id für das Objekt, das als Argument für den Konstruktor der Klasse übergeben wird. Es ist für die systemeigene Seite auf Triggerereignisse auf der Seite JavaScript benötigt. Die `CanDelete` -Methode bestimmt, ob das systemeigene Objekt gelöscht werden kann. Die `InvokeMethod` Funktion wird als Ergebnis aus einer Anfrage von JavaScript zum Aufrufen einer Methode von diesem Objekt aufgerufen. Das einzige Argument an diese Funktion ist eine Zeichenfolge, die von JavaScript, das diese Methode analysiert, um festzustellen, welche das systemeigene Objekt Methoden ausgeführt werden soll, übergeben. Diese Methoden sind implementiert, in `echo_js.cpp` . Hier ist die `InvokeMethod` -Funktion für die `Echo` Beispiel:

        string Echo::InvokeMethod(const string& command) {
    
            //parse command and args from string
            int index = command.find_first_of(" ");
            string strCommand = command.substr(0, index);
            string strValue = command.substr(index + 1, command.length());
    
            // Determine which function should be executed
            if (strCommand == "echo") {
                return strValue;
            } else {
                return "Unsupported Method";
            }
        }
    

Das native Plugin muss auch die folgende Callback-Funktionen implementieren:

*   `extern char* onGetObjList( void );`

*   `extern JSExt* onCreateObject( const string& strClassName, const string& strObjId );`

Die `onGetObjList` -Funktion gibt eine durch Kommas getrennte Liste der Klassen, die von JNEXT unterstützt. JNEXT verwendet diese Funktion bestimmt den Satz von Klassen, die JNEXT instanziieren können. Das `Echo` Plugin implementiert in folgende `echo_js.cpp` :

        char* onGetObjList() {
            static char name[] = "Echo";
            return name;
        }
    

Die `onCreateObject` Funktion nimmt zwei Parameter. Die erste ist der Name der angeforderten Klasse von der Seite JavaScript mit gültigen Namen wie kehrte erstellt werden `onGetObjList` . Der zweite Parameter ist die Klasse einzigartige Objekt-Id. Diese Methode gibt einen Zeiger auf das Objekt erstellten Plugin. Das `Echo` Plugin implementiert in folgende `echo_js.cpp` :

        JSExt* onCreateObject(const string& className, const string& id) {
            if (className == "Echo") {
                return new Echo(id);
            }
            return NULL;
        }
    

## Das Plugin-JavaScript erstellen

Das Plugin muss die folgenden JavaScript-Dateien enthalten:

*   `client.js`: Dies wird als die Client-Seite und enthält die API eine Cordova-Anwendung zur Verfügung gestellt. Die API in `client.js` Aufrufe Aufrufe an `index.js` . Die API im `client.js` auch Callback-Funktionen zu den Veranstaltungen, die die Rückrufe auslösen herstellt.

*   `index.js`: Cordova lädt `index.js` und macht es über die cordova.exec-Brücke. Die `client.js` Datei Aufrufe an die API in der `index.js` Datei, die wiederum aufrufen, um JNEXT macht zu kommunizieren, die systemeigene Seite.

Die Client- und Serverseite ( `client.js` und `index.js` ) interagiert durch die `Cordova.exec` Funktion. Die `client.js` muss Aufrufen der `exec` -Funktion und geben Sie die erforderlichen Argumente. Das `Echo` Plugin implementiert die folgenden in der `client.js` Datei:

        var service = "org.apache.cordova.blackberry.echo",
            exec = cordova.require("cordova/exec");
    
        module.exports = {
            echo: function (data, success, fail) {
                exec(success, fail, service, "echo", { data: data });
            }
        };
    

Die `index.js` JNEXT-Komponente verwendet, die systemeigene Seite interagieren. Anfügen einer Konstruktorfunktion mit dem Namen `Echo` , JNEXT ermöglicht es Ihnen, führen Sie die folgenden wichtigen Vorgänge, die mit der `init` Funktion:

*   Geben Sie das erforderliche Modul durch die systemeigene Seite exportiert. Der Name des Moduls erforderlich muss der Name einer Laufzeit-Bibliothek-Datei übereinstimmen ( `.so` Datei):
    
        JNEXT.require("libecho")
        

*   Erstellen Sie ein Objekt über ein erworbenes Modul und speichern Sie die ID, die durch den Aufruf zurückgegeben wird:
    
        self.m_id = JNEXT.createObject("libecho.Echo");
        
    
    Wenn die Anwendung ruft die `echo` Funktion in `client.js` , so nennen wiederum Aufrufe der `echo` Funktion in `index.js` , wo die `PluginResult` Objekt sendet Daten als Antwort zurück zu `client.js` . Da die `args` in die Funktionen übergebene Argument wurde umgebaut `JSON.stringfy()` und codierte als ein `URIcomponent` , müssen Sie Folgendes aufrufen:
    
        data = JSON.parse(decodeURIComponent(args.data));
        

Sie können jetzt die Daten zurück, wie folgt senden:

        module.exports = {
            echo: function (success, fail, args, env) {
                var result = new PluginResult(args, env),
                data = JSON.parse(decodeURIComponent(args.data)),
                response = echo.getInstance().echo(data);
                result.ok(response, false);
            }
        };
    

## Plugin-Architektur

Kann man das Plugin Artefakte, darunter die `plugin.xml` Datei, die JavaScript und C++-Quelldateien, und die `.so` Binär-Dateien in einer Verzeichnisstruktur solange Sie korrekt, die Dateipfade in angeben der `plugin.xml` Datei. Hier ist eine typische Struktur:

***project_directory*** (> plugin.xml)

*   **www** (>client.js)
*   **src** 
    *   **blackberry10** (> index.js, **native** > *.cpp, *.hpp)
    *   **Gerät** (>*Binärdatei* * .so)
    *   **Simulator** (>*Binärdatei* * .so)

Die Liste zeigt die hierarchische Beziehung zwischen den Ordner der obersten Ebene. Die Klammer zeigt den Inhalt eines angegebenen Verzeichnisses. Alle Verzeichnisnamen werden in Fettschrift angezeigt. Dateinamen vorangestellt sind die `>` Zeichen.

## Die Datei *plugin.xml*

Die `plugin.xml` -Datei enthält die Erweiterung-Namespace und andere Metadaten. Einrichten der `Echo` Plugin wie folgt:

        <plugin xmlns="http://www.phonegap.com/ns/plugins/1.0"
            id="org.apache.cordova.blackberry.echo"
            version="1.0.0">
            <js-module src="www/client.js">
                <merges target="navigator" />
            </js-module>
            <platform name="blackberry10">
                <source-file src="src/blackberry10/index.js" />
                <lib-file src="src/blackberry10/native/device/libecho.so" arch="device" />
                <lib-file src="src/blackberry10/native/simulator/libecho.so" arch="simulator" />
                <config-file target="www/config.xml" parent="/widget">
                    <feature name="org.apache.cordova.blackberry.echo" value="org.apache.cordova.blackberry.echo" />
                </config-file>
            </platform>
        </plugin>