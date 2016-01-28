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

title: Android Shell Tool Guide
---

# Android Shell Tool Guide

Diese Anleitung zeigt wie Cordovas Satz von Plattform-zentrierte Shell Tools verwenden, um Android apps zu entwickeln. Dieser Entwicklungspfad, diskutiert in der [Übersicht](../../overview/index.html), möglicherweise einen größeren Bereich von Entwicklungsoptionen als das Cross-Plattform-CLI-Tool beschrieben in The Command-Line Interface anbieten. Beispielsweise müssen Sie Shell-Hilfsmittel zu verwenden, wenn Sie eine benutzerdefinierte Cordova WebView neben systemeigenen Komponenten bereitstellen. Vor der Verwendung von entweder Entwicklungsweg, müssen Sie zuerst die Android SDK-Umgebung konfigurieren, wie in der Android-Plattform-Handbuch beschrieben.

Zum Aktivieren der Shell-Hilfsmittel für Android download Cordova von [cordova.apache.org][1]. Der Download enthält separate Archiv für jede Plattform. Erweitern Sie jedes Ziel, soll `android` in diesem Fall. Die entsprechenden Tools stehen in der Regel in den übergeordneten `bin` Verzeichnis, sonst finden Sie in der **README** -Datei für detailliertere Wegbeschreibung.

 [1]: http://cordova.apache.org

Diese Tools können Sie erstellen, erstellen und Ausführen von Android apps. Informationen über die zusätzliche Befehlszeilenschnittstelle, die Plugin-Features für alle Plattformen aktiviert, finden Sie unter Using Plugman zu Plugins verwalten. Details zum Entwickeln von Plugins finden Sie in der Anwendung-Plugins.

## Erstellen Sie ein Projekt

Führen Sie den `create` Befehl, der vorhandenen Pfad für das Projekt, die Reverse-Domäne-Style Paket-ID und die app-Anzeigenamen angeben. Hier ist die Syntax für Mac/Linux und Windows:

        $ /path/to/cordova-android/bin/create /path/to/project com.example.project_name ProjectName
    
        C:\>\path\to\cordova-android\bin\create.bat \path\to\project com.example.project_name ProjectName
    

## Build

Dies reinigt dann ein Projekt erstellt.

Debug auf Mac/Linux oder Windows:

        $ /path/to/project/cordova/build --debug
    
        C:\>\path\to\project\cordova\build.bat --debug
    

Version auf Mac/Linux oder Windows:

        $ /path/to/project/cordova/build --release
    
        C:\>\path\to\project\cordova\build.bat --release
    

## Führen Sie die Anwendung

Der `run` Befehl akzeptiert die folgenden *optionalen* Parameter:

*   Lastenheft. Dazu gehören `--emulator` , `--device` , oder`--target=<targetID>`.

*   Spezifikation zu bauen. Dazu gehören `--debug` , `--release` , oder`--nobuild`.
    
        $ /path/to/project/cordova/run [Target] [Build]
        
        C:\>\path\to\project\cordova\run.bat [Target] [Build]
        

Vergewissern Sie sich, erstellen Sie mindestens ein Android virtuelles Gerät, sonst Sie werden aufgefordert zu tun mit dem `android` Befehl. Wenn mehr als eine AVD als Ziel verfügbar ist, werden Sie aufgefordert, einen auswählen. In der Standardeinstellung der `run` Befehl erkennt ein angeschlossenes Gerät oder einen laufenden Emulator, wenn kein Gerät gefunden wird.

## Unterzeichnung der App

Sie können überprüfen, dass Android app Signaturanforderungen hier: http://developer.android.com/tools/publishing/app-signing.html

Um eine app zu signieren, benötigen Sie die folgenden Parameter:

*   Keystore (`--keystore`): Pfad in eine Binärdatei, die eine Reihe von Schlüsseln aufnehmen können.

*   Schlüsselspeicher-Kennwort (`--storePassword`): Kennwort zum Schlüsselspeicher

*   Alias (`--alias`): die Id angeben des privaten Schlüssels für Gesang.

*   Passwort (`--password`): Kennwort für den privaten Schlüssel angegeben.

*   Typ des Schlüsselspeichers (`--keystoreType`): pkcs12, Jks (Default: automatische Erkennung anhand der Dateierweiterung)

Diese Parameter können mithilfe der Befehlszeilenargumente oben zu `build` oder `run` von Skripts angegeben werden.

Alternativ könnten Sie sie in ein Build Startkonfigurationsdatei (build.json) mit angeben ( `--buildConfig` ) Argument. Hier ist ein Beispiel für eine Konfigurationsdatei erstellen:

    {
         "android": {
             "debug": {
                 "keystore": "..\android.keystore",
                 "storePassword": "android",
                 "alias": "mykey1",
                 "password" : "password",
                 "keystoreType": ""
             },
             "release": {
                 "keystore": "..\android.keystore",
                 "storePassword": "",
                 "alias": "mykey2",
                 "password" : "password",
                 "keystoreType": ""
             }
         }
     }
    

Für eine Veröffentlichung Signierung wird Kennwörter ausgeschlossen werden können und das Buildsystem nach dem Passwort gefragt.

Es gibt auch Unterstützung zu kombinieren, Kommandozeilen-Parameter und Parameter in der Datei build.json. Werte aus der Befehlszeilenargumente erhalten Vorrang. Dies ist hilfreich für Kennwörter in der Befehlszeile angeben.

## Protokollierung

        $ /path/to/project/cordova/log
    
        C:\>\path\to\project\cordova\log.bat
    

## Reinigung

        $ /path/to/project/cordova/clean
    
        C:\>\path\to\project\cordova\clean.bat
    

## Gebäude mit Gradle

Stand: cordova-android@4.0.0, Projektbuilds mit [Gradle][2]. Finden Sie Anweisungen zum Gebäude mit ANT ältere Versionen der Dokumentation.

 [2]: http://www.gradle.org/

### Gradle-Eigenschaften

Diese [Eigenschaften][3] können festgelegt werden, um den Build anzupassen:

 [3]: http://www.gradle.org/docs/current/userguide/tutorial_this_and_that.html

*   **cdvBuildMultipleApks** (Standard: false)
    
    Wenn dies festgelegt ist, mehrere APK-Dateien erzeugt werden: eine pro native von Bibliotheksprojekten unterstützte Plattform (X 86, ARM, etc.). Dies kann wichtig sein, wenn das Projekt große native Bibliotheken verwendet, die die generierten APK drastisch vergrößern können.
    
    Wenn nicht gesetzt, dann einen einzigen APK generiert wird, die auf allen Geräten verwendet werden können.

*   **cdvVersionCode**
    
    Überschreibt die VersionCode inmitten `AndroidManifest.xml`

*   **cdvReleaseSigningPropertiesFile** (Standard: release-signing.properties)
    
    Pfad zu einer .properties-Datei, die Signaturinformationen für Release enthält baut. Die Datei sollte wie aussehen:
    
        storeFile=relative/path/to/keystore.p12
        storePassword=SECRET1
        storeType=pkcs12
        keyAlias=DebugSigningKey
        keyPassword=SECRET2
        
    
    `storePassword` und `keyPassword` sind optional und werden aufgefordert für fehlt.

*   **cdvDebugSigningPropertiesFile** (Standard: debug-signing.properties)
    
    Wie CdvReleaseSigningPropertiesFile, jedoch für Debug baut. Nützlich, wenn Sie mit anderen Entwicklern einen Signaturschlüssel freigeben müssen.

*   **cdvMinSdkVersion**
    
    Setzt den Wert von `minSdkVersion` in der `AndroidManifest.xml`festgelegt. Nützlich beim Erstellen mehrerer APKs Grundlage SDK Version.

*   **cdvBuildToolsVersion**
    
    Überschreiben Sie den automatisch erkannten `android.buildToolsVersion` Wert.

*   **cdvCompileSdkVersion**
    
    Überschreiben Sie den automatisch erkannten `android.compileSdkVersion` Wert.

### Verlängerung build.gradle

Wenn Sie `build.gradle`anpassen, anstatt direkt bearbeiten müssen, sollten Sie eine Geschwister-Datei mit dem Namen `Build-extras.gradle`erstellen. Diese Datei wird von den wichtigsten `build.gradle` wenn vorhanden enthalten sein. Hier ist ein Beispiel:

    # Example build-extras.gradle
    # This file is included at the beginning of `build.gradle`
    ext.cdvDebugSigningPropertiesFile = '../../android-debug-keys.properties'
    # When set, this function allows code to run at the end of `build.gradle`
    ext.postBuildExtras = {
        android.buildTypes.debug.applicationIdSuffix = '.debug'
    }
    

Beachten Sie, dass Plugins auch `build-extras.gradle` Dateien über enthalten kann:

    <framework src="some.gradle" custom="true" type="gradleReference" />
    

### Beispiel-Build

    export ORG_GRADLE_PROJECT_cdvMinSdkVersion=14
    cordova build android -- --gradleArg=-PcdvBuildMultipleApks=true