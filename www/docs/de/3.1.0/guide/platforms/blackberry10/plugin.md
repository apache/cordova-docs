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

title: BlackBerry 10 Plugins
---

# BlackBerry 10 Plugins

Dies ist eine Fortsetzung des Plugin Development Guide für Cordova. Sobald Sie diese Inhalte jetzt mal durchgelesen haben sehen Sie die Dinge, die müssen wir das Echo-Plugin für die BlackBerry 10-Plattform haben. Erinnern, dass das Echo-Plugin grundsätzlich zurückgibt, was einen Benutzer string berät die `window.echo` Funktion:

    window.echo = function(str, callback) {
            cordova.exec(callback, function(err) {
                callback('Nothing to echo.');
            }, "Echo", "echo", [str]);
        };
    

Eine native BlackBerry 10-Plugin für Cordova enthält JavaScript-Code und kann auch nativen Code enthalten. Das Echo-Plugin-Beispiel veranschaulicht die native Funktion aus JavaScript aufrufen. Die Native und JavaScript-Code kommunizieren miteinander durch einen Rahmen zur Verfügung gestellt von JNEXT. Jedes Plugin muss auch eine `plugin.xml` [Datei](../../../cordova/file/fileobj/fileobj.html).

## Systemeigenen Bestandteil Ihr Plugin erstellen

Um den nativen Teil Ihr Plugin zu erstellen, öffnen Sie die BlackBerry 10 NDK IDE, und wählen Sie [Datei](../../../cordova/file/fileobj/fileobj.html) > New > BlackBerry Projekt > Native Erweiterung > BlackBerry WebWorks. Geben Sie Ihre gewünschten Projektnamen / Speicherort und klicken Sie auf Fertig stellen.

Das Projekt, erstellt von der IDE enthält Beispielcode für ein Speicher-Plugin. Sie ersetzen oder ändern diese Dateien um eigene Funktionalität erweitert.

*   `*name*_js.hpp`: C++-Header für den JNEXT-Code.

*   `*name*_js.cpp`: C++-Code für JNEXT.

Die systemeigene Schnittstelle für die JNEXT-Erweiterung kann in der Plugin-Header-Datei befindet sich im öffentlichen Verzeichnis des Projekts angezeigt werden. Es enthält auch Konstanten und nützlichen Funktionen, die in Ihrem systemeigenen Code verwendet werden können. Ihr Plugin muss von JSExt abgeleitet werden, die in plugin.h definiert ist. Das heißt, müssen Sie die folgende Klasse implementieren:

    Klasse JSExt {public: virtuelle ~JSExt() {};
        virtual String InvokeMethod (const String & StrCommand) = 0;
        virtualbool CanDelete (Void) = 0;
    private: Std:: String M_id;
    };
    

Daher sollte die Erweiterung die plugin.h-Headerdatei enthalten. Im Beispiel Echo verwenden Sie JSExt in der echo_js.hpp-Datei wie folgt:

    #include ".../ public/plugin.h "#include <string> #ifndef ECHO_JS_H_ #define ECHO_JS_H_ Klasse Echo: öffentliche JSExt {public: explizite Echo (const Std:: String & Id);
        virtuelle ~ Echo();
        virtuelle Std:: String InvokeMethod (const Std:: String & Befehl);
        virtualbool CanDelete();
    private: Std:: String M_id;
    };
    
    #endif / / ECHO_JS_H_
    

Die `m_id` ist ein Attribut, das die JNEXT-Id für dieses Objekt enthält. Die Id wird als Argument für den Konstruktor der Klasse übergeben. Es ist, um Ereignisse auf der JavaScript-Seite von systemeigenem auszulösen. Die CanDelete-Methode wird von JNEXT verwendet, um festzustellen, ob Ihre systemeigene Objekt gelöscht werden kann. Die InvokeMethod-Funktion ist folglich aus einer Anfrage von JavaScript zum Aufrufen einer Methode von diesem Objekt aufgerufen. Das einzige Argument an diese Funktion ist eine Zeichenfolge übergeben, die von JavaScript, die diese Methode analysieren sollte, um festzustellen, welche Methode das systemeigene Objekt ausgeführt werden soll. Nun implementieren wir diese Funktionen in echo_js.cpp. Z.B. Echo implementieren wir InvokeMethod-Funktion wie folgt:

    String Echo::InvokeMethod (const String & Befehl) {//parse Befehl und Args aus String intIndex = Command.find_first_of("");
        String StrCommand = command.substr (0, Index);
        StrValue string = command.substr (Index + 1, command.length());
    
        / / Bestimmen, welche Funktion ausgeführt werden soll wenn (StrCommand == "echo") {return StrValue;
        } else {return "Nicht unterstützte Methode";
        }
    }
    

Ihr native Plugin muss auch die folgende Callback-Funktionen implementieren:

*   `extern char* onGetObjList( void );`

*   `extern JSExt* onCreateObject( const string& strClassName, const string& strObjId );`

Die `onGetObjList` -Funktion gibt eine durch Kommas getrennte Liste der Klassen, die von JNEXT unterstützt. JNEXT verwendet diese Funktion bestimmt den Satz von Klassen, die JNEXT instanziieren können. In unsere Echo-Plugin haben wir folgenden `echo_js.cpp` :

    char* onGetObjList() {
        static char name[] = "Echo";
        return name;
    }
    

Die `onCreateObject` Funktion nimmt zwei Parameter. Der erste Parameter ist der Name für die Klasse angefordert von der JavaScript-Seite erstellt werden. Gültige Namen sind diejenigen, die zurückgegeben werden, in `onGetObjList` . Der zweite Parameter ist die einzigartige Objekt-Id für die Klasse. Diese Methode gibt einen Zeiger auf das Objekt erstellten Plugin. In unsere Echo-Plugin haben wir folgenden `echo_js.cpp` :

    JSExt* onCreateObject(const string& className, const string& id) {
        if (className == "Echo") {
            return new Echo(id);
        }
        return NULL;
    }
    

## Den JavaScript-Teil von Ihr Plugin erstellen

Den JavaScript-Teil der Ihr Plugin muss die folgenden Dateien enthalten:

*   `client.js`: Dies wird als die Client-Seite und enthält die API, die eine Cordova-Anwendung aufrufen können. Die API in `client.js` Aufrufe Aufrufe an `index.js` . Die API im `client.js` auch Callback-Funktionen zu den [Veranstaltungen](../../../cordova/events/events.html), die die Rückrufe auslösen herstellt.

*   `index.js`: Cordova lädt `index.js` und macht es über die cordova.exec-Brücke. Die `client.js` [Datei](../../../cordova/file/fileobj/fileobj.html) Aufrufe an die API in der `index.js` [Datei](../../../cordova/file/fileobj/fileobj.html), die wiederum aufrufen, um JNEXT macht zu kommunizieren, die systemeigene Seite.

Die Client- und Serverseite ( `client.js` und `index.js` ) interagiert durch die `Cordova.exec` Funktion. Ja, in `client.js` Aufrufen der `exec` -Funktion und geben Sie die erforderlichen Argumente. In der Echo-Plugin haben wir Folgendes in der `client.js` [Datei](../../../cordova/file/fileobj/fileobj.html):

    var service = "org.apache.cordova.blackberry.echo",
        exec = cordova.require("cordova/exec");
    
    module.exports = {
        echo: function (data, success, fail) {
            exec(success, fail, service, "echo", { data: data });
        }
    };
    

Nun, `index.js` interagiert mit der native Seite mit JNEXT. So fügen Sie eine Konstruktorfunktion mit dem Namen Echo JNEXT. Innerhalb des Konstruktors führen Sie die folgenden wichtigen Vorgänge mithilfe der Init-Funktion:

*   Geben Sie das erforderliche Modul durch die systemeigene Seite exportiert. Der Name des Moduls erforderlich muss den Namen einer shared Library-Datei (.so-Datei) übereinstimmen.

`JNEXT.require("libecho")`

*   Erstellen Sie ein Objekt über ein erworbenes Modul und speichern Sie die ID, die durch den Aufruf zurückgegeben wird. Self.m_id = JNEXT.createObject ("Libecho.Echo"); Wenn die Anwendung die Echo-Funktion aufruft, `client.js` , dass Aufruf wiederum die Echo-Funktion, in aufruft `index.js` , wo das PluginResult-Objekt sendet eine Antwort (Daten) zurück zu `client.js` . Da das Args-Argument an die Funktionen übergeben wurde durch JSON.stringfy() umgewandelt und als ein URIcomponent codiert sind, müssen Sie Folgendes aufrufen:

`Daten = JSON.parse(decodeURIComponent(args.data));`

Sie können jetzt die Daten zurück senden. Sagen wir es alle zusammen:

    module.exports = {
    
        echo: function (success, fail, args, env) {
    
            var result = new PluginResult(args, env),
            data = JSON.parse(decodeURIComponent(args.data)),
            response = echo.getInstance().echo(data);
            result.ok(response, false);
        }
    };
    

## Architektur des Plugins

Kann man die Artefakte des Plugins, die enthält die `plugin.xml` -Datei, die Quellcode-Dateien (JavaScript, C++) und die Binärdateien ( `.so` ) innerhalb einer Verzeichnisstruktur, solange Sie korrekt angeben, die Dateipfade in der `plugin.xml` [Datei](../../../cordova/file/fileobj/fileobj.html). Eine typische Struktur sieht folgendermaßen aus:

***your\_project\_directory*** (> plugin.xml)

*   **www** (> client.js)
*   **src** 
    *   **blackberry10** (> index.js, **native** > *.cpp, *.hpp)
    *   **Gerät** (>*Binärdatei* * .so)
    *   **Simulator** (>*Binärdatei* * .so)

(Die Liste zeigt die hierarchische Beziehung zwischen den Verzeichnissen der obersten Ebene. Die Klammer zeigt den Inhalt eines angegebenen Verzeichnisses. Alle Verzeichnisnamen werden in Fettschrift angezeigt. Dateinamen vorangestellt sind die `>` Zeichen.)

## Inhalt der `plugin.xml` Datei

Die `plugin.xml` -Datei enthält den Namespace der Erweiterung und andere [Metadaten](../../../cordova/file/metadata/metadata.html). Den Namespace definiert und andere [Metadaten](../../../cordova/file/metadata/metadata.html) für das Echo-Plugin wie folgt angeben:

    < Plugin xmlns="http://www.phonegap.com/ns/plugins/1.0" id="org.apache.cordova.blackberry.echo" Version = "1.0.0" >< Js-Modul src="www/client.js" >< Zusammenführungen Ziel = "Navigator" / >< / Js-Modul >< Plattformnamen = "blackberry10" >< Quelldatei src="src/blackberry10/index.js" / >< Lib-Datei src="src/blackberry10/native/device/libecho.so" Bogen = "Gerät" / >< Lib-Datei src="src/blackberry10/native/simulator/libecho.so" Bogen = "Simulator" / ><-Config-File target="www/config.xml" übergeordnete = "/ Widget" >< verfügen über name="org.apache.cordova.blackberry.echo" value="org.apache.cordova.blackberry.echo" / >< / Config-Datei >< /Plattform >< / Plugin >