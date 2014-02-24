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

# Plugin-Spezifikation

Die `plugin.xml` Datei ist ein XML‑Dokument in den `plugins` Namespace: `http://apache.org/cordova/ns/plugins/1.0` . Es enthält eine Top-Level- `plugin` Element, das das Plugin definiert, und Kinder, die die Struktur des Plugins zu definieren.

Ein Beispiel-Plugin-Element:

    <?xml version="1.0" encoding="UTF-8"?>
    <plugin xmlns="http://apache.org/cordova/ns/plugins/1.0"
        xmlns:android="http://schemas.android.com/apk/res/android"
        id="com.alunny.foo"
        version="1.0.2">
    

## *Plugin* Element

Das `plugin` Element ist das Plugin Manifest Element der obersten Ebene. Es verfügt über die folgenden Attribute:

*   `xmlns`(erforderlich): die Plugin-Namespace `http://apache.org/cordova/ns/plugins/1.0` . Enthält das Dokument XML aus anderen Namespaces, z. B. Tags hinzugefügt werden die `AndroidManifest.xml` -Datei, diese Namespaces sollten auch in Element der obersten Ebene enthalten sein.

*   `id`(erforderlich): eine Reverse-Domain style Bezeichner für das Plugin, wie`com.alunny.foo`

*   `version`(erforderlich): eine Versionsnummer für das Plugin, das den folgende reguläre Ausdruck der Major-Minor-Patch Stil entspricht:
    
        ^\d+[.]\d+[.]\d+$
        

## *Motoren* und *Motor* -Elemente

Die untergeordneten Elemente der `<engines>` Element angeben Versionen von Apache-Cordova-basierten Frameworks, die dieses Plugin unterstützt. Ein Beispiel:

    <engines>
        <engine name="cordova" version="1.7.0" />
        <engine name="cordova" version="1.8.1" />
        <engine name="worklight" version="1.0.0" platform="android" scriptSrc="worklight_version"/>
    </engines>
    

Ähnlich wie die `<plugin>` des Elements `version` Attribut, die angegebenen Versionszeichenfolge sollte eine Major-Minor-Patch-Zeichenfolge, die dem regulären Ausdruck entsprechen entsprechen:

        ^\d+[.]\d+[.]\d+$
    

Motor-Elemente können auch angeben, fuzzy-Treffer um Wiederholung zu vermeiden und Wartung zu verringern, wenn die zugrunde liegende Plattform aktualisiert wird. Supporttools sollte mindestens `>` , `>=` , `<` und `<=` , zum Beispiel:

    <engines>
        <engine name="cordova" version=">=1.7.0" />
        <engine name="cordova" version="<1.8.1" />
    </engines>
    

Die `<engine>` Markierungen hat auch Standardunterstützung für alle die Hauptplattformen Cordova ist vorhanden. Angabe der `cordova` Motor Tag bedeutet, dass alle Versionen von Cordova auf jeder Plattform das Motor-Version-Attribut genügen müssen. Sie können auch eine Liste bestimmte Plattformen und ihre Versionen um die CatchAll-überschreiben `cordova` Motor:

    <engines>
        <engine name="cordova" version=">=1.7.0" />
        <engine name="cordova-android" version=">=1.8.0" />
        <engine name="cordova-ios" version=">=1.7.1" />
    </engines>
    

Hier ist eine Liste der Standard-Suchmaschinen, die die "<engine>'-Tag unterstützt: * 'Cordoba' * 'Cordova-Plugman' * 'Cordova-Amazon-Fireos' * 'Cordova-Android' * 'Cordova-Ios' * 'Cordova-blackberry10' * 'Cordova-wp7' * 'Cordova-wp8' * 'Cordova-windows8'  
* ' Android-Sdk' / / liefert die höchste Android-api-Ebene installiert * 'Apfel-Xcode' / / liefert die Xcode-Version * 'Apple-Ios' / / liefert die höchste installierte iOS-Version * 'Apple-Osx' / / liefert die OSX Version * 'Blackberry-Ndk' / / liefert die systemeigenen Blackberry SDK Version

Benutzerdefinierte Apache Cordova-basierten Frameworks sollte aufgeführt sein, unter dem Motor-Tag angeben, etwa so:

    <engines>
        <engine name="my_custom_framework" version="1.0.0" platform="android" scriptSrc="path_to_my_custom_framework_version"/>
        <engine name="another_framework" version=">0.2.0" platform="ios|android" scriptSrc="path_to_another_framework_version"/>
        <engine name="even_more_framework" version=">=2.2.0" platform="*" scriptSrc="path_to_even_more_framework_version"/>
    </engines>
    

Ein benutzerdefinierter Apache Cordova-basiertes Framework erfordert, dass ein Motor-Element die folgenden Attribute enthält: `name` , `version` , `scriptSrc` , und`platform`.

*   `name`(erforderlich): einen lesbaren Namen für Ihre benutzerdefinierte Rahmen.

*   `version`(erforderlich): die Version, die Ihr Framework verfügen muss, um zu installieren.

*   `scriptSrc`(erforderlich): der Skript-Datei, die Plugman sagt, welche Version von benutzerdefinierten Rahmen ist. Im Idealfall sollte diese Datei innerhalb des Verzeichnisses der obersten Ebene für Ihr Pluginverzeichnis.

*   `platform`(erforderlich): Welche Plattformen, Ihr Framework unterstützt. Sie können den Platzhalter `*` um zu sagen, für alle Plattformen unterstützt, geben Sie mehrere durch ein Pipezeichen wie `android|ios|blackberry10` oder nur eine einzelne Plattform wie`android`.

Plugman bricht mit einem NULL-Code für jedes Plugin, dessen Ziel-Projekt des Motors Einschränkungen nicht erfüllt.

Wenn keine `<engine>` Markierungen angegeben ist, Plugman blind in das Projektverzeichnis angegebenen Cordova zu installieren versucht.

## *Name* Element

Ein lesbarer Name für das Plugin, dessen Textinhalt den Namen des plugins enthält. Zum Beispiel:

    <name>Foo</name>
    

Dieses Element nicht (noch) Lokalisierung zu behandeln.

## *Beschreibung* Element

Eine Klartextbeschreibung für das Plugin. Der Textinhalt des Elements enthält die Beschreibung des Plugins. Ein Beispiel:

    <description>Foo plugin description</description>
    

Dieses Element nicht (noch) Lokalisierung zu behandeln.

## *Autor* Element

Plugin-Autor-Namen. Der Textinhalt des Elements enthält den Namen des Autors Plugin. Ein Beispiel:

    <author>Foo plugin description</author>
    

## *Schlüsselwörter* Element

Plugin-Schlüsselwörter. Der Textinhalt des Elements enthält eine durch Kommas getrennte Stichwörter, um das Plugin zu beschreiben. Ein Beispiel:

    <keywords>foo,bar</keywords>
    

## *Lizenz* Element

Plugin-Lizenz. Der Textinhalt des Elements enthält das Plugin-Lizenz. Ein Beispiel:

    <license>Apache 2.0 License</license>
    

## *Asset* Element

Ein oder mehrere Elemente Auflisten der Dateien oder Verzeichnisse in einer Cordova app kopieren `www` Verzeichnis. Beispiele:

    <!-- a single file, to be copied in the root directory -->
    <asset src="www/foo.js" target="foo.js" />
    <!-- a directory, also to be copied in the root directory -->
    <asset src="www/foo" target="foo" />
    

Alle `<asset>` Tags erfordern beide `src` und `target` Attribute. Nur Web-Plugins enthält meist `<asset>` Elemente. Alle `<asset>` Elemente, die geschachtelt sind `<platform>` Elemente geben plattformspezifische Web Vermögenswerte, wie unten beschrieben. Attribute enthalten:

*   `src`(erforderlich): wo die Datei oder das Verzeichnis befindet sich in das Plugin-Paket, bezogen auf das `plugin.xml` Dokument. Wenn eine Datei nicht, an der angegebenen vorhanden ist `src` Lage, Plugman beendet und kehrt den Installationsvorgang, gibt eine Benachrichtigung über den Konflikt und beendet mit einem NULL-Code.

*   `target`(erforderlich):
    
    Wo die Datei oder das Verzeichnis sollte gefunden werden in der app Cordova bezogen auf das `www` Verzeichnis. Vermögenswerte können z. B. auf Unterverzeichnisse, eingesetzt werden:
    
    <asset src="www/new-foo.js" target="js/experimental/foo.js" />
    
    erstellt die `js/experimental` Verzeichnis innerhalb der `www` Verzeichnis, sofern bereits vorhanden, dann Kopien der `new-foo.js` Datei und benennt es `foo.js` . Existiert eine Datei schon am Zielort, Plugman beendet und kehrt den Installationsvorgang, gibt eine Benachrichtigung über den Konflikt und beendet mit einem NULL-Code.

## *Js-Modul* Element

Die meisten Plugins enthalten eine oder mehrere JavaScript-Dateien. Jeder `<js-module>` Tag entspricht einer JavaScript-Datei, und verhindert, dass das Plugin Benutzer hinzufügen ein `<script>` Tag für jede Datei. Während `<asset>` Markierungen kopieren Sie einfach eine Datei aus dem Plugin-Unterverzeichnis in `www` , `<js-module>` Markierungen sind viel komplexer. Sie sieht wie folgt:

    <js-module src="socket.js" name="Socket">
        <clobbers target="chrome.socket" />
    </js-module>
    

Wenn Sie eine Plugin mit dem obigen Beispiel installieren `socket.js` wird kopiert `www/plugins/my.plugin.id/socket.js` , und als einen Eintrag hinzugefügt `www/cordova_plugins.js` . Einloggen zur Ladezeit `cordova.js` XHR verwendet, um jede Datei zu lesen und injizieren ein `<script>` Tag in HTML. Es fügt eine Zuordnung zum verprügeln oder gegebenenfalls zusammenführen, wie unten beschrieben.

Wickeln Sie *nicht* die Datei mit `cordova.define` , automatisch hinzugefügt wird. Das Modul ist verpackt in einen Verschluss mit `module` , `exports` , und `require` im Bereich, ist als normal, dass AMD-Module.

Details für den `<js-module>` Tag:

*   Der `src` verweist auf eine Datei in das Pluginverzeichnis bezogen auf die `plugin.xml` Datei.

*   Die `name` stellt den letzten Teil den Namen des Moduls. Es kann in der Regel sein, was du willst, und es nur wichtig, wenn Sie verwenden möchten `cordova.require` anderen Teilen Ihrer plugins in Ihrem JavaScript-Code importieren. Der Modulname für eine `<js-module>` ist Ihr Plugins `id` gefolgt vom Wert der `name` . Für das obige Beispiel mit einer `id` von `chrome.socket` , den Namen des Moduls ist`chrome.socket.Socket`.

*   Drei Tags sind erlaubt, innerhalb `<js-module>` :
    
    *   `<clobbers target="some.value"/>`Gibt an, dass die `module.exports` eingefügt ist die `window` -Objekts als `window.some.value` . Kann man so viele `<clobbers>` wie du willst. Jedes Objekt nicht verfügbar auf `window` wird erstellt.
    
    *   `<merges target="some.value"/>`Gibt an, dass das Modul mit bereits vorhandene Werte bei zusammengeführt werden sollen `window.some.value` . Wenn alle Schlüssel bereits vorhanden ist, überschreibt das Modul Version das Original. Kann man so viele `<merges>` wie du willst. Jedes Objekt nicht verfügbar auf `window` wird erstellt.
    
    *   `<runs/>`Mittel, die Ihr Code mit angegeben werden sollte `cordova.require` , aber nicht auf installiert das `window` Objekt. Dies ist nützlich, wenn das Modul, das Anfügen von Ereignishandlern zu initialisieren oder auf andere Weise. Nur kann man bis zu einem `<runs/>` Tag. Beachten Sie, dass auch ein `<runs/>` mit `<clobbers/>` oder `<merges/>` ist überflüssig, da sie auch `cordova.require` Ihr Modul.
    
    *   Eine leere `<js-module>` noch geladen und kann vorzugeben in anderen Modulen über`cordova.require`.

Wenn `src` , löst nicht an eine vorhandene Datei Plugman beendet und kehrt die Installation, gibt eine Benachrichtigung des Problems und beendet mit einem NULL-Code.

Schachteln `<js-module>` Elemente im `<platform>` deklariert plattformspezifische JavaScript-Modul Bindungen.

## *Abhängigkeit* Element

Die `<dependency>` Tag können Sie andere Plugins angeben, von denen das aktuelle Plugin abhängig ist. Während sie zukünftige Versionen von Plugin-Repositories zugreifen werden, kurzfristig Plugins direkt verwiesen als URLs von `<dependency>` Markierungen. Sie werden wie folgt formatiert:

    <dependency id="com.plugin.id" url="https://github.com/myuser/someplugin" commit="428931ada3891801" subdir="some/path/here" />
    

*   `id`: stellt die ID des Plugins. Es sollte weltweit einzigartig und in Reverse Domain-Stil zum Ausdruck. Obwohl keiner von diesen Einschränkungen derzeit erzwungen wird, können sie in Zukunft sein.

*   `url`: Eine URL für das Plugin. Dies sollte ein Git-Repository verweisen, welche Plugman versucht zu klonen.

*   `commit`: Dies ist Git-Referenz von verstanden `git checkout` : einen Zweig oder eine Marke-Namen (z.B. `master` , `0.3.1` ), oder eine Commit hash (z.B.`975ddb228af811dd8bb37ed1dfd092a3d05295f9`).

*   `subdir`: Gibt an, dass die gezielte Plugin Abhängigkeit als ein Unterverzeichnis des Git Repository vorhanden ist. Dies hilfreich ist, da so das Repository für mehrere verwandte Plugins enthalten, festgelegt jeweils individuell.

In Zukunft Version Einschränkungen eingeführt werden, und ein Plugin Repository ist vorhanden, um abrufen nach Namen statt explizite URLs zu unterstützen.

### Relative Abhängigkeit Pfade

Setzen Sie die `url` der ein `<dependency>` tag zu `"."` und bieten ein `subdir` , das abhängige Plugin installiert ist, aus der gleichen lokalen oder entfernten Git Repository als das übergeordnete Plugin angibt die `<dependency>` Tag.

Beachten Sie, dass die `subdir` immer gibt einen Pfad relativ zum *Stammverzeichnis* das Git Repository, nicht das übergeordnete-Plugin. Dies gilt auch dann, wenn Sie das Plugin mit einem lokalen Pfad direkt darauf installiert. Plugman findet die Wurzel das Git Repository und dann findet die anderen Plugin von dort.

## *Plattform* Element

Die `<platform>` Tag identifiziert Plattformen, die erfordern Änderungen an den Konfigurationsdateien oder systemeigenen Code zugeordnet. Tools, die unter Verwendung dieser Spezifikation können unterstützte Plattformen zu identifizieren und installieren Sie das Programm in Cordova Projekte.

Plugins ohne `<platform>` sind davon ausgegangen, dass die Tags nur JavaScript- und daher auf allen Plattformen installiert werden.

Ein Beispiel-Plattform-Tag:

    <platform name="android">
        <!-- android-specific elements -->
    </platform>
    <platform name="ios">
        <!-- ios-specific elements -->
    </platform>
    

Die erforderlichen `name` -Attribut identifiziert eine Plattform unterstützt, diese Plattform des Elements Kinder zuordnen.

Plattformnamen sollten Kleinbuchstaben sein. Plattformnamen, so willkürlich gewählt, sind aufgeführt:

*   Amazon-fireos
*   Android
*   blackberry10
*   Ios
*   WP7
*   WP8

## *Quelldatei* Element

Die `<source-file>` Element identifiziert ausführbare Quellcodes, die in ein Projekt installiert werden soll. Beispiele:

    <!-- android -->
    <source-file src="src/android/Foo.java"
                    target-dir="src/com/alunny/foo" />
    <!-- ios -->
    <source-file src="src/ios/CDVFoo.m" />
    <source-file src="src/ios/someLib.a" framework="true" />
    <source-file src="src/ios/someLib.a" compiler-flags="-fno-objc-arc" />
    

Es unterstützt die folgenden Attribute:

*   `src`(erforderlich): Speicherort der Datei relativ zum `plugin.xml` . Wenn die `src` Datei nicht gefunden, Plugman beendet und kehrt die Installation, gibt eine Benachrichtigung über das Problem und beendet mit einem NULL-Code.

*   `target-dir`: Ein Verzeichnis, in dem die Dateien sollen, relativ zum Stammverzeichnis des Projektes Cordova kopiert werden. In der Praxis ist das wichtigste für Java-basierte Plattformen, wo eine Datei in die `com.alunny.foo` Paket muss in das `com/alunny/foo` Verzeichnis. Für Plattformen, wo das Quellverzeichnis nicht wichtig ist, sollte dieses Attribut weggelassen werden.
    
    Wie bei Papieren, wenn die `target` von einer `source-file` würde die vorhandene Datei überschreiben, Plugman beendet und kehrt die Installation, gibt eine Benachrichtigung über das Problem und beendet mit einem NULL-Code.

*   `framework`(nur iOS): Wenn legen Sie auf `true` , auch die angegebene Datei als Rahmen dem Projekt hinzugefügt.

*   `compiler-flags`(nur iOS): Wenn festgelegt ist, weist der angegebenen Compiler-Flags für die bestimmten Quelldatei.

## *Config-Datei* Element

Bezeichnet eine XML-basierte Konfiguration-Datei, die geändert werden, wo in diesem Dokument die Änderung stattfinden sollen, und was geändert werden sollte.

Zwei Dateitypen, die auf die Änderung mit diesem Element getestet wurden sind `xml` und `plist` Dateien.

Die `config-file` Element nur können Sie neue Kinder an eine XML-Dokumentstruktur anhängen. Die Kinder sind XML-Literale im Zieldokument eingefügt werden soll.

Beispiel für XML:

    <config-file target="AndroidManifest.xml" parent="/manifest/application">
        <activity android:name="com.foo.Foo" android:label="@string/app_name">
            <intent-filter>
            </intent-filter>
        </activity>
    </config-file>
    

Beispiel für `plist` :

    <config-file target="*-Info.plist" parent="CFBundleURLTypes">
        <array>
            <dict>
                <key>PackageName</key>
                <string>$PACKAGE_NAME</string>
            </dict>
        </array>
    </config-file>
    

Es unterstützt die folgenden Attribute:

*   `target`:
    
    Die Datei geändert werden, und der Pfad relativ zum Stammverzeichnis des Projektes Cordova.
    
    Das Ziel kann Platzhalter enthalten ( `*` ) Elemente. In diesem Fall Plugman rekursiv durchsucht die Verzeichnisstruktur des Projekts und verwendet die erste Übereinstimmung.
    
    Auf iOS, der Speicherort der Konfigurationsdateien relativ zum Stammverzeichnis des Projekt-Verzeichnis ist nicht bekannt, also ein Ziel angeben `config.xml` löst in`cordova-ios-project/MyAppName/config.xml`.
    
    Wenn die angegebene Datei nicht vorhanden ist, wird das Tool ignoriert die Konfigurationsänderung und wird die Installation fortgesetzt.

*   `parent`: Eine XPath-Selector, verweisen auf das übergeordnete Element der Elemente der Config-Datei hinzugefügt werden. Wenn Sie absolute Selektoren verwenden, können Sie einen Platzhalter ( `*` ) an das Root-Element, z.B.`/*/plugins`.
    
    Für `plist` Dateien, die `parent` bestimmt, unter welchen übergeordneten Schlüssel der angegebene XML-Code eingefügt werden soll.
    
    Wenn die Auswahl auf ein untergeordnetes Element des angegebenen Dokuments nicht behoben wird, das Tool beendet und kehrt des Installationsvorgangs gibt eine Warnung aus und beendet mit einem NULL-Code.

## *Plugins-plist* Element

Dies ist *veraltet* , da es nur Cordova-Ios 2.2.0 und unterhalb gilt. Verwendung der `<config-file>` Tag für neuere Versionen von Cordova.

Beispiel:

    <config-file target="config.xml" parent="/widget/plugins">
        <feature name="ChildBrowser">
            <param name="ios-package" value="ChildBrowserCommand"/>
        </feature>
    </config-file>
    

Gibt einen Schlüssel und Wert auf den richtigen anfügen `AppInfo.plist` Datei in einem iOS-Cordova-Projekt. Zum Beispiel:

    <plugins-plist key="Foo" string="CDVFoo" />
    

## *Ressource-Datei* und *Header-Datei* Elemente

Wie Quelldateien, aber speziell für Plattformen wie iOS unterscheiden, die Quelldateien, Kopf- und Ressourcen. iOS Beispiele:

    <resource-file src="CDVFoo.bundle" />
    <resource-file src="CDVFooViewController.xib" />
    <header-file src="CDVFoo.h" />
    

Android-Beispiel:

    < src="FooPluginStrings.xml Ressource-Datei" target="res/values/FooPluginStrings.xml" / >
    

## *Lib-Datei* Element

Wie Quelle, Ressourcen- und Header-Dateien, aber speziell für Plattformen wie BlackBerry 10 User generated Bibliotheken verwenden. Beispiele:

    <lib-file src="src/BlackBerry10/native/device/libfoo.so" arch="device" />
    <lib-file src="src/BlackBerry10/native/simulator/libfoo.so" arch="simulator" />
    

Unterstützte Attribute:

*   `src`(erforderlich): der Speicherort der Datei relativ zum `plugin.xml` . Wenn `src` nicht auffindbar, Plugman beendet und kehrt die Installation Probleme eine Warnung über das Problem und beendet mit einem NULL-Code.

*   `arch`: Die Architektur, für die die `.so` Datei erstellt wurde, entweder `device` oder`simulator`.

## *Rahmen* Element

Bezeichnet einen Rahmen (in der Regel Teil der OS/Plattform), von denen das Plugin abhängig ist.

Beispiele:

    <framework src="libsqlite3.dylib" />
    <framework src="social.framework" weak="true" />
    

Das `src` -Attribut identifiziert den Rahmen, welche Plugman versucht die Cordova-Projekt in der richtigen Weise für eine bestimmte Plattform hinzu.

Der optionale `weak` -Attribut ist ein boolescher Wert, der angibt, ob das Framework schwach verbunden sein sollte. Der Standardwert ist`false`.

## *Info* Element

Zusätzliche Informationen für die Nutzer. Dies ist nützlich, wenn Sie zusätzliche Schritte erforderlich, die können nicht einfach automatisiert werden oder Plugman den Rahmen sprengen. Beispiele:

    <info>
    You need to install __Google Play Services__ from the `Android Extras` section using the Android SDK manager (run `android`).
    
    You need to add the following line to your `local.properties`
    
    android.library.reference.1=PATH_TO_ANDROID_SDK/sdk/extras/google/google_play_services/libproject/google-play-services_lib
    </info>
    

## Variablen

In bestimmten Fällen kann eine Plugin müssen Änderungen an der Konfiguration der Zielanwendung abhängig zu machen. Z. B. für C2DM auf Android, eine app zu registrieren, dessen Paket-Id ist `com.alunny.message` wäre wie eine Berechtigung erforderlich:

    <uses-permission
    android:name="com.alunny.message.permission.C2D_MESSAGE"/>
    

In solchen Fällen, wo der Inhalt, von eingefügt, der `plugin.xml` Datei ist nicht bekannt, vor der Zeit, Variablen durch ein Dollarzeichen, gefolgt von einer Reihe von Großbuchstaben, Ziffern und Unterstriche angezeigt werden können. Für das obige Beispiel die `plugin.xml` Datei würde diesem Tag enthalten:

    <uses-permission
    android:name="$PACKAGE_NAME.permission.C2D_MESSAGE"/>
    

Plugman Variablenreferenzen mit dem angegebenen Wert oder eine leere Zeichenfolge ersetzt, wenn keine gefunden. Der Wert der Variable Referenz erkannt werden kann (in diesem Fall aus der `AndroidManifest.xml` Datei) oder vom Benutzer des Werkzeugs angegebene der genaue Vorgang ist abhängig von der speziellen Werkzeug.

Plugman kann Benutzer ein Plugin erforderlichen Variablen angeben anfordern. API-Schlüssel für C2M und Google Maps können beispielsweise als Befehlszeilenargument angegeben werden:

    plugman --platform android --project /path/to/project --plugin name|git-url|path --variable API_KEY=!@CFATGWE%^WGSFDGSDFW$%^#$%YTHGsdfhsfhyer56734
    

Damit die Variable obligatorisch, ist der `<platform>` Tag muss enthalten ein `<preference>` Tag. Zum Beispiel:

    <preference name="API_KEY" />
    

Plugman überprüft, ob diese erforderlichen Einstellungen in übergeben werden. Wenn dies nicht der Fall ist, sollte es den Benutzer warnen, übergeben Sie die Variable in und Ausfahrt mit einem NULL-Code veranschaulicht.

Bestimmten Variablennamen sollte reserviert werden, wie unten aufgeführt.

## $PACKAGE_NAME

Die Reverse-Domain style eindeutigen Bezeichner für das Paket, das entspricht der `CFBundleIdentifier` auf iOS oder das `package` -Attribut des der obersten Ebene `manifest` Element in eine `AndroidManifest.xml` Datei.