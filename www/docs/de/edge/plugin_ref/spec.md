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

title: Plugin-Spezifikation
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
    

Hier ist eine Liste der Standard-Motoren, die das Tag `< engine >` unterstützt:

*   `cordova`
*   `cordova-plugman`
*   `cordova-amazon-fireos`
*   `cordova-android`
*   `cordova-ios`
*   `cordova-blackberry10`
*   `cordova-wp8`
*   `cordova-windows8`
*   `android-sdk` // returns the highest Android api level installed
*   `apple-xcode` // returns the xcode version 
*   `apple-ios` // returns the highest iOS version installed
*   `apple-osx` // returns the OSX version
*   `blackberry-ndk` // returns the native blackberry SDK version

Benutzerdefinierte Apache Cordova-basierten Frameworks sollte aufgeführt sein, unter dem Motor-Tag angeben, etwa so:

    <engines>
        <engine name="my_custom_framework" version="1.0.0" platform="android" scriptSrc="path_to_my_custom_framework_version"/>
        <engine name="another_framework" version=">0.2.0" platform="ios|android" scriptSrc="path_to_another_framework_version"/>
        <engine name="even_more_framework" version=">=2.2.0" platform="*" scriptSrc="path_to_even_more_framework_version"/>
    </engines>
    

Ein benutzerdefinierter Apache Cordova-basiertes Framework erfordert, dass ein Motor-Element die folgenden Attribute enthält: `name` , `version` , `scriptSrc` , und`platform`.

*   `name` (erforderlich): einen lesbaren Namen für Ihre benutzerdefinierte Rahmen.

*   `version` (erforderlich): die Version, die Ihr Framework verfügen muss, um zu installieren.

*   `scriptSrc` (erforderlich): die Skriptdatei, die Plugman sagt, welche Version von benutzerdefinierten Rahmen ist. Idealerweise sollte diese Datei innerhalb des Verzeichnisses der obersten Ebene für Ihr Pluginverzeichnis sein.

*   `platform` (erforderlich): Welche Plattformen, Ihr Framework unterstützt. Sie können den Platzhalter `*` zu sagen, für alle Plattformen unterstützt, geben mehrere mit ein Pipe-Zeichen wie `android|ios|blackberry10` oder nur eine einzelne Plattform wie `android`.

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

*   `src` (erforderlich): wo ist die Datei oder das Verzeichnis in das Plugin-Paket relativ zum Dokument `plugin.xml` liegt. Wenn eine Datei am Speicherort angegebenen `Src` nicht existiert, Plugman beendet und kehrt den Installationsvorgang, gibt eine Benachrichtigung über den Konflikt und beendet mit einem NULL-Code.

*   `target` (required):
    
    Wo die Datei oder das Verzeichnis in der app Cordova auf das `Www` -Verzeichnis platziert werden soll. Vermögenswerte können zum Beispiel auf Unterverzeichnisse, eingesetzt werden:
    
        <asset src="www/new-foo.js" target="js/experimental/foo.js" />
        
    
    Das `Js/experimental` Verzeichnis im `Www` -Verzeichnis erstellt, sofern nicht bereits vorhanden, dann kopiert die `new-foo.js` -Datei und benennt es `foo.js`. Existiert eine Datei schon am Zielort, Plugman beendet und kehrt den Installationsvorgang, gibt eine Benachrichtigung über den Konflikt und beendet mit einem NULL-Code.

## *Js-Modul* Element

Die meisten Plugins enthalten eine oder mehrere JavaScript-Dateien. Jeder `<js-module>` Tag entspricht einer JavaScript-Datei, und verhindert, dass das Plugin Benutzer hinzufügen ein `<script>` Tag für jede Datei. Während `<asset>` Markierungen kopieren Sie einfach eine Datei aus dem Plugin-Unterverzeichnis in `www` , `<js-module>` Markierungen sind viel komplexer. Sie sieht wie folgt:

    <js-module src="socket.js" name="Socket">
        <clobbers target="chrome.socket" />
    </js-module>
    

Wenn Sie eine Plugin mit dem obigen Beispiel installieren `socket.js` wird kopiert `www/plugins/my.plugin.id/socket.js` , und als einen Eintrag hinzugefügt `www/cordova_plugins.js` . Einloggen zur Ladezeit `cordova.js` XHR verwendet, um jede Datei zu lesen und injizieren ein `<script>` Tag in HTML. Es fügt eine Zuordnung zum verprügeln oder gegebenenfalls zusammenführen, wie unten beschrieben.

Wickeln Sie *nicht* die Datei mit `cordova.define` , automatisch hinzugefügt wird. Das Modul ist verpackt in einen Verschluss mit `module` , `exports` , und `require` im Bereich, ist als normal, dass AMD-Module.

Details für den `<js-module>` Tag:

*   Das `src` verweist auf eine Datei in das Pluginverzeichnis relativ zur Datei `plugin.xml` .

*   Der `name` stellt den letzten Teil den Namen des Moduls. Es kann im Allgemeinen was auch immer Ihnen gefällt, und es nur Fragen, wenn Sie `cordova.require` verwenden, um andere Teile Ihrer plugins in Ihrem JavaScript-Code importieren möchten. Der Modulname für ein `< Js-module >` ist Ihr Plugin `Id` gefolgt vom Wert des `name`. Für das obige Beispiel, mit der `Id` `chrome.socket`ist der Modulname `chrome.socket.Socket`.

*   Drei Stichworte sind in `< Js-module >`zulässig:
    
    *   `< clobbers target="some.value"/ >` bedeutet, dass die `module.exports` in das `Window` -Objekt als `window.some.value`eingefügt wird. Kann man so viele `< clobbers >` , wie Sie möchten. Jedes Objekt nicht verfügbar am `window` entsteht.
    
    *   `< merges target="some.value"/ >` bedeutet, dass das Modul mit bereits vorhandene Werte bei `window.some.value`zusammengeführt werden sollen. Wenn alle Schlüssel bereits vorhanden ist, überschreibt das Modul Version das Original. Kann man so viele `< merges >` , wie Sie möchten. Jedes Objekt nicht verfügbar am `window` entsteht.
    
    *   `< runs / >` bedeutet, dass Ihr Code sollte mit `cordova.require`angegeben, aber nicht auf das `Window` -Objekt installiert. Dies ist nützlich, wenn das Modul, das Anfügen von Ereignishandlern zu initialisieren oder auf andere Weise. Nur kann man bis zu einem `< runs / >` Tag. Beachten Sie, dass auch eine `< runs / >` mit `< clobbers / >` oder `< merges / >` ist überflüssig, da sie auch `cordova.require` Ihr Modul.
    
    *   Ein leeres `< js-module >` noch lädt und in anderen Modulen über `cordova.require` zugegriffen werden kann.

Wenn `src` , löst nicht an eine vorhandene Datei Plugman beendet und kehrt die Installation, gibt eine Benachrichtigung des Problems und beendet mit einem NULL-Code.

Schachteln `<js-module>` Elemente im `<platform>` deklariert plattformspezifische JavaScript-Modul Bindungen.

## *Abhängigkeit* Element

Die `<dependency>` Tag können Sie andere Plugins angeben, von denen das aktuelle Plugin abhängig ist. Während sie zukünftige Versionen von Plugin-Repositories zugreifen werden, kurzfristig Plugins direkt verwiesen als URLs von `<dependency>` Markierungen. Sie werden wie folgt formatiert:

    <dependency id="com.plugin.id" url="https://github.com/myuser/someplugin" commit="428931ada3891801" subdir="some/path/here" />
    

*   `id`: die ID des Plugins. Es sollte unique und in umgekehrter Richtung-Domäne Stil zum Ausdruck. Während weder gegen diese Beschränkungen derzeit erzwungen wird, können sie in Zukunft sein.

*   `url`: die URL für das Plugin. Dies sollte ein Git-Repository verweisen, welche Plugman versucht zu klonen.

*   `commit`: Dies ist Git-Referenz von `Git Auschecken`verstanden: einen Zweig oder eine Marke (z.B. `master`, `0.3.1`) oder ein Commit-Hash (z. B. `975ddb228af811dd8bb37ed1dfd092a3d05295f9`).

*   `subdir`: legt fest, dass die gezielte Plugin Abhängigkeit als ein Unterverzeichnis des Git Repository vorhanden ist. Dies hilfreich ist, da das Repository mehrere verwandte Plugins enthalten können, jedes einzeln angegeben.

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
*   IOS
*   wp8
*   windows8

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

*   `src` (erforderlich): Speicherort der Datei relativ `plugin.xml`. Wenn die `src` -Datei nicht gefunden werden kann, Plugman beendet und kehrt die Installation, gibt eine Benachrichtigung über das Problem und beendet mit einem NULL-Code.

*   `target-dir`: ein Verzeichnis, in das die Dateien sollen, relativ zum Stammverzeichnis des Projektes Cordova kopiert werden. In der Praxis ist das wichtigste für Java-basierte Plattformen, wo muß eine Datei in das `com.alunny.foo` -Paket in das `com/Alunny/Foo` -Verzeichnis liegen. Für Plattformen, wo das Quellverzeichnis nicht wichtig ist, sollte dieses Attribut weggelassen werden.
    
    Wie bei Vermögen, wenn die `target` von einer `source-file` würde die vorhandene Datei überschreiben, Plugman beendet und kehrt die Installation, gibt eine Benachrichtigung über das Problem und beendet mit einem NULL-Code.

*   `framework`(nur iOS): Wenn legen Sie auf `true` , fügt die angegebene Datei auch als Rahmen für das Projekt.

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

*   `parent`: Ein XPath-Selector, verweisen auf die übergeordneten Elemente der Config-Datei hinzugefügt werden. Wenn Sie absolute Selektoren verwenden, können Sie einen Platzhalter ( `*` ) das Root-Element, z. B. angeben`/*/plugins`.
    
    Für `plist` Dateien, die `parent` bestimmt, unter welchen übergeordneten Schlüssel angegebene XML eingefügt werden soll.
    
    Der Selektor kein Kind des angegebenen Dokuments behoben, das Tool beendet und kehrt der Installationsvorgang gibt eine Warnung aus und beendet mit einem NULL-Code.

*   `after`: Eine priorisierte Liste der akzeptierten Geschwister nach dem XML-Ausschnitt hinzugefügt. Nützlich für die Angabe von Änderungen in Dateien, die erfordern strikte Reihenfolge XML-Elemente wie <http://msdn.microsoft.com/en-us/library/windowsphone/develop/ff769509%28v=vs.105%29.aspx#BKMK_EXTENSIONSelement>

Die Windows-Plattform unterstützt zwei zusätzliche Attribute (beide optional) Wenn die meta name `package.appxmanifest`beeinflussen:

Das `device-target` -Attribut angibt, der sollte nur aufgenommen werden, wenn für den angegebenen Zieltyp Gerät erstellen. Unterstützte Werte sind, `win`, `phone`oder `all`.

Das `versions` -Attribut gibt an, dass die app Manifeste für bestimmte Windows-Versionen nur für Versionen geändert werden sollte, die die angegebene Zeichenfolge entsprechen. Wert kann semantische Versionszeichenfolge des Bereichs gültigen Knoten sein.

Beispiele für die Verwendung dieser Windows-spezifische Attribute:

    <config-file target="package.appxmanifest" parent="/Package/Capabilities" versions="<8.1.0">
        <Capability Name="picturesLibrary" />
        <DeviceCapability Name="webcam" />
    </config-file>
    <config-file target="package.appxmanifest" parent="/Package/Capabilities" versions=">=8.1.0" device-target="phone">
        <DeviceCapability Name="webcam" />
    </config-file>
    

Das obige Beispiel setzt Pre-8.1-Plattformen (Windows 8 speziell) erfordern die Gerätefunktion `Webcam` und die allgemeine `PicturesLibrary` -Fähigkeit und Anwenden der Gerätefunktion `Webcam` nur auf Windows-8.1-Projekte, die für Windows Phone erstellen. Windows Desktop 8.1-Systemen sind unverändert.

## *Plugins-plist* Element

Dies ist *veraltet* , da es nur Cordova-Ios 2.2.0 und unterhalb gilt. Verwenden Sie das `<config-file>` -Tag, neuere Versionen von Cordova.

Beispiel:

    <config-file target="config.xml" parent="/widget/plugins">
        <feature name="ChildBrowser">
            <param name="ios-package" value="ChildBrowserCommand"/>
        </feature>
    </config-file>
    

Gibt einen Schlüssel und Wert auf die richtige `AppInfo.plist` -Datei in einem iOS-Cordova-Projekt anfügen. Zum Beispiel:

    <plugins-plist key="Foo" string="CDVFoo" />
    

## *Ressource-Datei* und *Header-Datei* Elemente

Wie Quelldateien, aber speziell für Plattformen wie iOS unterscheiden, die Quelldateien, Kopf- und Ressourcen. iOS Beispiele:

    <resource-file src="CDVFoo.bundle" />
    <resource-file src="CDVFooViewController.xib" />
    <header-file src="CDVFoo.h" />
    

Android-Beispiel:

    <resource-file src="FooPluginStrings.xml" target="res/values/FooPluginStrings.xml" />
    

## *Lib-Datei* Element

Wie Quelle, Ressourcen- und Header-Dateien, aber speziell für Plattformen wie BlackBerry 10 User generated Bibliotheken verwenden. Beispiele:

    <lib-file src="src/BlackBerry10/native/device/libfoo.so" arch="device" />
    <lib-file src="src/BlackBerry10/native/simulator/libfoo.so" arch="simulator" />
    

Unterstützte Attribute:

*   `src`(erforderlich): der Speicherort der Datei relativ zum `plugin.xml` . Wenn `src` nicht auffindbar, Plugman beendet und kehrt die Installation Probleme eine Warnung über das Problem und beendet mit einem NULL-Code.

*   `arch`: Die Architektur, für die die `.so` Datei erstellt wurde, entweder `device` oder`simulator`.

Für die Windows-Plattform erlaubt das Element `<lib-file>` die Einbeziehung von einem `< SDKReference >` in die generierten Windows-Projektdateien.

Unterstützte Attribute:

*   `src`(erforderlich): der Name des SDK enthalten (die verwendet werden, als der Wert der `Include` Attribut der generierten `<SDKReference>` Element).

*   `arch`: Zeigt an, dass die `<SDKReference>` sollte nur aufgenommen werden, wenn für die angegebene Architektur erstellen. Unterstützte Werte sind `x86` , `x64` oder`ARM`.

*   `device-target`: Zeigt an, dass die `<SDKReference>` sollte nur aufgenommen werden, wenn für das angegebene Ziel-Device-Typ erstellen. Unterstützte Werte sind `win` (oder `windows` ), `phone` oder`all`.

*   `versions`: Zeigt an, dass die `<SDKReference>` sollte nur aufgenommen werden, wenn für Versionen erstellen, die die angegebene Zeichenfolge entsprechen. Wert kann jede semantische Versionszeichenfolge des Bereichs gültigen Knoten sein.

Beispiele:

    <lib-file src="Microsoft.WinJS.2.0, Version=1.0" arch="x86" />
    <lib-file src="Microsoft.WinJS.2.0, Version=1.0" versions=">=8.1" />
    <lib-file src="Microsoft.WinJS.2.0, Version=1.0" target="phone" />
    <lib-file src="Microsoft.WinJS.2.0, Version=1.0" target="win" versions="8.0" arch="x86" />
    

## *Rahmen* Element

Bezeichnet einen Rahmen (in der Regel Teil der OS/Plattform), von denen das Plugin abhängig ist.

Das optionale `custom` Attribut ist ein boolescher Wert, der angibt, ob im Rahmen einer ist, der als Teil der Plugin-Dateien enthalten ist (so ist es kein System-Rahmen).

### *framework* für iOS

    <framework src="libsqlite3.dylib" />
    <framework src="social.framework" weak="true" />
    <framework src="relative/path/to/my.framework" custom="true" />
    

Das optionale `weak` -Attribut ist ein boolescher Wert, der angibt, ob das Framework schwach verknüpft werden soll. Der Standardwert ist `false`.

### *framework* für Android

Auf Android (ab cordova-android@4.0.0) sind *Rahmen* Tags Maven Abhängigkeiten oder interne Bibliothek Projekte verwendet.

Beispiele:

    <!-- Depend on latest version of GCM from play services -->
    <framework src="com.google.android.gms:play-services-gcm:+" />
    <!-- Depend on v21 of appcompat-v7 support library -->
    <framework src="com.android.support:appcompat-v7:21+" />
    <!-- Depend on library project included in plugin -->
    <framework src="relative/path/FeedbackLib" custom="true" />
    

*framework* können auch verwendet werden, benutzerdefinierte .gradle-Dateien, die in das Hauptprojekt .gradle Datei Sub enthalten haben:

    <framework src="relative/path/rules.gradle" custom="true" type="gradleReference" />
    

Für pre-android@4.0.0 (ANT-basierte Projekte):

Das optionale `type` -Attribut ist eine Zeichenfolge, die den Typ des Rahmens hinzu. Derzeit nur `projectReference` wird unterstützt und nur für Windows. Mit `custom='true'` und `type='projectReference'` wird, fügen einen Verweis auf das Projekt, das die Kompilierung gutgeschrieben + link Schritte des Projektes Cordova. Im Wesentlichen ist dies die einzige Möglichkeit derzeit ein 'custom' Rahmen mehrere Architekturen angesprochen werden kann, da sie explizit als eine Abhängigkeit von der verweisenden Cordova-Anwendung erstellt werden.

Das optionale `parent` legt den relativen Pfad zu dem Verzeichnis, das Teilprojekt, der den Verweis hinzugefügt. Der Standardwert ist `.`, d. h. das Anwendungsprojekt. Es ermöglicht das Hinzufügen von Verweisen zwischen Teilprojekte wie in diesem Beispiel:

    <framework src="extras/android/support/v7/appcompat" custom="false" parent="FeedbackLib" />
    

### *framework* für Windows

Die Windows-Plattform unterstützt drei zusätzliche Attribute (optional) zur Verfeinerung beim Rahmen eingeschlossen werden sollen:

    <framework src="path/to/project/LibProj.csproj" custom="true" type="projectReference"/>
    

Das `arch` -Attribut angibt, dass der Rahmen nur eingeschlossen werden soll, wenn für die angegebene Architektur erstellen. Unterstützte Werte sind `x86`, `x64` oder `ARM`.

Das `device-target` -Attribut gibt an, dass die Rahmen nur eingeschlossen werden soll, wenn für das angegebene Ziel-Device-Typ erstellen. Unterstützte Werte sind zu `win` (oder `windows`), `phone` oder `all`.

Das `versions` -Attribut gibt an, dass die Rahmen nur eingeschlossen werden soll, wenn für Versionen erstellen, die die angegebene Zeichenfolge entsprechen. Wert kann jede semantische Versionszeichenfolge des Bereichs gültigen Knoten sein.

Beispiele für die Verwendung dieser Windows-spezifische Attribute:

    <framework src="src/windows/example.dll" arch="x64" />
    <framework src="src/windows/example.dll" versions=">=8.0" />
    <framework src="src/windows/example.vcxproj" type="projectReference" target="win" />
    <framework src="src/windows/example.vcxproj" type="projectReference" target="all" versions="8.1" arch="x86" />
    

## *Info* Element

Zusätzliche Informationen für die Nutzer. Dies ist nützlich, wenn Sie zusätzliche Schritte erforderlich, die können nicht einfach automatisiert werden oder Plugman den Rahmen sprengen. Beispiele:

    <info>
    You need to install __Google Play Services__ from the `Android Extras` section using the Android SDK manager (run `android`).
    
    You need to add the following line to the `local.properties`:
    
    android.library.reference.1=PATH_TO_ANDROID_SDK/sdk/extras/google/google_play_services/libproject/google-play-services_lib
    </info>
    

## *hook Sie* Element

Stellt Ihr benutzerdefinierte Skript, das von Cordova aufgerufen wird, wenn bestimmte Aktion ausgeführt wird (z. B. nach Plugin hinzugefügt wird oder Plattform vorbereiten Logik wird aufgerufen). Dies ist nützlich, wenn Sie Cordova Standardfunktionalität verlängern müssen. Weitere Informationen finden Sie unter Haken Guide.

    <hook type="after_plugin_install" src="scripts/afterPluginInstall.js" />
    

## Variablen

In bestimmten Fällen kann eine Plugin müssen Änderungen an der Konfiguration der Zielanwendung abhängig zu machen. Z. B. zur Anmeldung zu C2DM auf Android erfordert app dessen Paket-Id `com.alunny.message` ist eine Berechtigung wie:

    <uses-permission android:name="com.alunny.message.permission.C2D_MESSAGE"/>
    

In solchen Fällen, wo aus der Datei `plugin.xml` eingefügte Inhalt vorab nicht bekannt ist, können durch ein Dollar-Zeichen, gefolgt von einer Reihe von Großbuchstaben, Ziffern oder Unterstriche Variablen angegeben werden. Für das obige Beispiel würde die Datei `plugin.xml` diesem Tag gehören:

    <uses-permission android:name="$PACKAGE_NAME.permission.C2D_MESSAGE"/>
    

Plugman Variablenreferenzen mit dem angegebenen Wert oder eine leere Zeichenfolge ersetzt, wenn keine gefunden. Der Wert der Variable Referenz kann erkannt (in diesem Fall aus der `AndroidManifest.xml` -Datei) oder vom Benutzer des Tools angegeben werden; der genaue Vorgang ist abhängig von der speziellen Werkzeug.

Plugman kann Benutzer ein Plugin erforderlichen Variablen angeben anfordern. API-Schlüssel für C2M und Google Maps können beispielsweise als Befehlszeilenargument angegeben werden:

    plugman --platform android --project /path/to/project --plugin name|git-url|path --variable API_KEY=!@CFATGWE%^WGSFDGSDFW$%^#$%YTHGsdfhsfhyer56734
    

Um die Variable obligatorisch zu machen, muss das Tag `< platform >` ein Tag `<preference>` enthalten. Zum Beispiel:

    <preference name="API_KEY" />
    

Plugman überprüft, ob diese erforderlichen Einstellungen in übergeben werden. Wenn dies nicht der Fall ist, es sollte den Benutzer warnen, wie Sie in die Variable übergeben und beendet mit einem null-Kode.

Bestimmten Variablennamen sollte reserviert werden, wie unten aufgeführt.

## $PACKAGE_NAME

Der Rückwärtsgang-Domäne Stil eindeutige Bezeichner für das Paket, entspricht die `CFBundleIdentifier` in iOS oder das `Paket` -Attribut des Elements in eine Datei `AndroidManifest.xml` auf oberster Ebene `manifestieren` .