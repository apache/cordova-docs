* * *

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

## under the License.

# Android Shell Tool Guide

Diese Anleitung zeigt wie Cordovas Satz von Plattform-zentrierte Shell Tools verwenden, um Android apps zu entwickeln. Dieser Entwicklungspfad, diskutiert in der Übersicht, möglicherweise einen größeren Bereich von Entwicklungsoptionen als das Cross-Plattform-CLI-Tool beschrieben in The Command-Line Interface anbieten. Beispielsweise müssen Sie Shell-Hilfsmittel zu verwenden, wenn Sie eine benutzerdefinierte Cordova WebView neben systemeigenen Komponenten bereitstellen. Vor der Verwendung von entweder Entwicklungsweg, müssen Sie zuerst die Android SDK-Umgebung konfigurieren, wie in der Android-Plattform-Handbuch beschrieben.

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

## Protokollierung

        $ /path/to/project/cordova/log
    
        C:\>\path\to\project\cordova\log.bat
    

## Reinigung

        $ /path/to/project/cordova/clean
    
        C:\>\path\to\project\cordova\clean.bat
    

## Manueller Betrieb von Ant

Möchten Sie Ant direkt von der Befehlszeile aufrufen, wie z. B. `ant debug install` , müssen Sie zusätzliche Parameter an den Befehl Ant angeben:

        ant debug install -Dout.dir=ant-build -Dgen.absolute.dir=ant-gen
    

Dies ist da die Verzeichnisse von Cordovas Ant-Skripten verwendet als Standard unterschiedlich sind. Dies geschieht, um Konflikte zu vermeiden, wenn von der Befehlszeile aus versus Ant ausgeführt wird in Eclipse/ADT.

Diese zusätzlichen Parameter werden für Sie automatisch hinzugefügt, wenn mit der `cordova/build` und `cordova/run` beschriebenen Skripte. Aus diesem Grund empfohlen wird, die `cordova/build` und `cordova/run` Skripte statt aufrufenden Ant direkt von der Befehlszeile aus.

## Gebäude mit Gradle (experimentell)!

Cordova für Android unterstützt nun Gebäude mit [Gradle][2]. Optional in Cordova 3.x, aber wird standardmäßig aktiviert werden in Zukunft wahrscheinlich mit Cordova 4.0. Das Buildsystem wird aktiviert, indem eine Umgebungsvariable, die für die Shell set oder auf der Kommandozeile mit angegeben werden kann die `cordova build` Befehl.

 [2]: http://www.gradle.org/

Bitte beachten Sie, dass die Gradle-Build-Regeln noch in der Entwicklung sind und werden wahrscheinlich große Veränderungen unterworfen, bevor Gradle das Standard-Build-System wird. Entwickler werden ermutigt, ausprobieren und experimentieren, aber wenn Sie Ihre eigene Produktion-Buildsystem drauf zugrunde, wahrscheinlich erleben Sie mehrere wichtige Änderungen über die nächsten Veröffentlichungen, bevor sie stabilisiert.

### Entsprechenden Umgebungsvariablen

*   **ANDROID _ BAUEN**
    
    Diese Variable steuert die Build-System verwendet wird, um das Projekt zu erstellen. In können, nehmen Sie einen der Werte `ant` oder`gradle`.
    
    Wenn nicht festgelegt, es derzeit standardmäßig auf `ant` , aber dies wird voraussichtlich ändern.

### Andere Umgebungsvariablen (du musst normalerweise diese eingestellt)

*   **ANDROID _ STARTSEITE**
    
    Dies sollte in das Verzeichnis, das Android SDK festgelegt werden. Cordova sieht hierfür die Standardspeicherorte für die Installation sowie durch die Pfadvariable betrachten, so dass es nicht normalerweise Einstellung erforderlich.

*   **JAVA _ STARTSEITE**
    
    Auf einigen Maschinen müssen dies festgelegt werden, so dass Gradle den Java-Compiler finden kann.

### Gradle-Eigenschaften

Diese [Eigenschaften][3] können festgelegt werden, um den Build anzupassen:

 [3]: http://www.gradle.org/docs/current/userguide/tutorial_this_and_that.html

*   **cdvBuildMultipleApks**
    
    Wenn dies festgelegt ist, mehrere APK-Dateien erzeugt werden: eine pro native von Bibliotheksprojekten unterstützten Plattformen (X 86, ARM, etc.). Dies kann wichtig sein, wenn das Projekt große native Bibliotheken verwendet, die die generierten APK drastisch vergrößern können.
    
    Wenn nicht, dann einen einzigen APK generiert werden, die auf allen Geräten verwendet werden können.

*   **cdvVersionCode**
    
    Überschreibt die VersionCode inmitten`AndroidManifest.xml`

*   **cdvReleaseSigningPropertiesFile**
    
    Pfad zu einer .properties-Datei, die Signaturinformationen für Release enthält erstellt. Die Datei sollte wie aussehen:
    
        storeFile=relative/path/to/keystore.p12 StorePassword = SECRET1 Speichertyp = pkcs12-KeyAlias = DebugSigningKey KeyPassword = SECRET2
        
    
    `storePassword`und `keyPassword` sind optional und werden aufgefordert für fehlt.

*   **cdvDebugSigningPropertiesFile**
    
    Wie CdvReleaseSigningPropertiesFile, jedoch für Debug erstellt. Nützlich, wenn Sie mit anderen Entwicklern einen Signaturschlüssel freigeben müssen.

*   **cdvMinSdkVersion**
    
    Setzt den Wert von `minSdkVersion` inmitten einer `AndroidManifest.xml` . Nützlich, wenn mehrere erstellen APKs Grundlage SDK Version.

*   **cdvBuildToolsVersion**
    
    Überschreiben Sie die automatisch erkannte `android.buildToolsVersion` Wert.

*   **cdvCompileSdkVersion**
    
    Überschreiben Sie die automatisch erkannte `android.compileSdkVersion` Wert.

### Verlängerung build.gradle

Wenn Sie anpassen müssen `build.gradle` , eher als direkt bearbeiten, erstellen Sie eine Geschwister-Datei namens `build-extras.gradle` . Diese Datei wird von den wichtigsten enthalten sein `build.gradle` wann präsentieren. Hier ist ein Beispiel:

    -Beispiel Build-extras.gradle # diese Datei ist zu Beginn des 'build.gradle' ext.cdvDebugSigningPropertiesFile = '.../../ android-debug-Keys.properties' # Wenn, diese Funktion am Ende des 'build.gradle' ext.postBuildExtras Ausführung von Code ermöglicht = {android.buildTypes.debug.applicationIdSuffix = ".info"}
    

### Beispiel-Build

    Export ANDROID_BUILD = Gradle Export ORG_GRADLE_PROJECT_cdvMinSdkVersion = 14 Cordova Build Android----GradleArg =-PcdvBuildMultipleApks = True