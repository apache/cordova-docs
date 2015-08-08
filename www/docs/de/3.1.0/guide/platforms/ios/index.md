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

# iOS Platform Guide

Diese Anleitung zeigt Ihre Entwicklungsumgebung SDK einrichten, Cordova apps für iOS-Geräte wie iPhone und iPad bereitstellen. Finden Sie im folgenden detaillierte Plattform-spezifischen Informationen:

*   iOS Konfiguration
*   IOS Upgrade
*   iOS Webansichten für
*   iOS Plugins
*   iOS-Befehlszeilenprogrammen

Die Befehlszeilentools, die oben beziehen sich auf Versionen vor 3.0 Cordova. Informationen über die aktuelle Schnittstelle finden Sie unter The Command-Line Interface.

## Anforderungen und Unterstützung

Apple ® Werkzeuge zum Erstellen von iOS-Anwendungen, die nur auf das Betriebssystem OS X auf Intel-basierten Macs ausgeführt. Xcode ® 4.5 (die erforderliche Mindestversion) läuft nur unter OS X Version 10.7 (Lion) oder größer, und umfasst das iOS 6 SDK (Software Development Kit). Einreichen von apps, die Apple-App-Store℠ erfordert die neuesten Versionen der Apple-Tools.

Sie können viele der mit dem iOS-Emulator installiert mit der iOS SDK und Xcode Cordova-Features testen, aber man braucht ein echtes Gerät vollständig testen aller Gerätefunktionen die app vor der Einreichung zum App-Speicher. Das Gerät muss mindestens iOS 5.x installiert, die mindestens iOS-Version ab Cordova 2.3 unterstützt. Unterstützende Geräten gehören alle iPad ® Modelle, iPhone ® 3GS und höher, und iPod ® Touch 3rd Generation oder höher. Um apps auf einem Gerät zu installieren, müssen Sie auch ein Mitglied von Apples [iOS Developer Program][1], sein, die kostet $99 pro Jahr. Diese Anleitung zeigt wie zum Implementieren von apps auf der iOS-Emulator, wofür Sie müssen sich nicht mit dem Entwicklerprogramm registrieren.

 [1]: https://developer.apple.com/programs/ios/

## Das SDK installieren

Es gibt zwei Möglichkeiten zum Herunterladen von Xcode:

*   aus dem [App Store][2], mit der Suche nach "Xcode" in der **App Store** -Anwendung zur Verfügung.

*   von [Apple Developer Downloads][3]erfordert die Registrierung als ein Apple-Entwickler.

 [2]: https://itunes.apple.com/us/app/xcode/id497799835?mt=12
 [3]: https://developer.apple.com/downloads/index.action

Sobald Xcode installiert ist, müssen mehrere Befehlszeilentools für Cordova ausführen aktiviert werden. Wählen Sie die **Xcode** -Menü die Option **"Einstellungen"**und anschließend die Registerkarte " **Downloads** ". Aus dem Bedienfeld " **Komponenten** " Taste **installieren** neben den **Kommandozeilen-Tools** angeboten.

## Öffnen Sie ein Projekt im SDK

Verwendung der `cordova` Utility für ein neues Projekt, wie in der Cordova The Command-Line Interface beschrieben einrichten. Zum Beispiel in einem Quellcode-Verzeichnis:

        $ cordova create hello com.example.hello "HelloWorld"
        $ cd hello
        $ cordova platform add ios
        $ cordova prepare              # or "cordova build"


Einmal erstellt, können Sie es innerhalb von Xcode öffnen. Doppelklicken Sie zum Öffnen der `hello/platforms/ios/hello.xcodeproj` Datei. Der Bildschirm sollte wie folgt aussehen:

![][4]

 [4]: {{ site.baseurl }}/static/img/guide/platforms/ios/helloworld_project.png

## Bereitstellen auf Emulator

Die app in der iOS-Emulator Vorschau:

1.  Stellen Sie sicher, dass die *.xcodeproj* -Datei im linken Bereich ausgewählt ist.

2.  Wählen Sie die **Hallo** -app im Bereich sofort nach rechts.

3.  Wählen Sie das gewünschte Gerät " **Schema** " der Symbolleiste, wie das iPhone hervorgehoben 6.0 Simulator als hier:

    ![][5]

4.  Drücken Sie die Schaltfläche **Ausführen** , die in der gleichen Symbolleiste auf der linken Seite des **Programms**angezeigt wird. Das baut, setzt und führt die Anwendung im Emulator. Eine separate Emulator Anwendung öffnet um die app anzuzeigen:

    ![][6]

    Nur ein Emulator kann zu einem Zeitpunkt ausführen möchten Sie die Anwendung in einem anderen Emulator zu testen, musst du den Emulator-Programm beenden, und führen Sie ein anderes Ziel in Xcode.

 [5]: {{ site.baseurl }}/static/img/guide/platforms/ios/select_xcode_scheme.png
 [6]: {{ site.baseurl }}/static/img/guide/platforms/ios/HelloWorldStandard.png

Xcode kommt zusammengerollt mit Emulatoren für die neuesten Versionen von iPhone und iPad. Ältere Versionen möglicherweise zur Verfügung, aus der **Xcode → Einstellungen → Downloads → Komponenten** Panel.

## Bereitstellung auf Gerät

Ausführliche Informationen zu unterschiedlichen Anforderungen an ein Gerät bereitstellen finden Sie im Abschnitt " *Konfigurieren von Entwicklung und Vertrieb Vermögenswerte* " Apples [Tools Workflow Guide für iOS][7]. Kurz gesagt, müssen Sie vor der Bereitstellung Folgendes:

 [7]: http://developer.apple.com/library/ios/#documentation/Xcode/Conceptual/ios_development_workflow/00-About_the_iOS_Application_Development_Workflow/introduction.html#//apple_ref/doc/uid/TP40007959

1.  Teilnehmen Sie das Apple iOS Developer Program.

2.  Erstellen Sie eine *Provisioning Profile* innerhalb der [iOS Provisioning Portal][8]. Können Sie ihre *Entwicklung-Provisioning-Assistenten* erstellen und installieren Sie das Profil und Zertifikat Xcode erforderlich ist.

3.  Überprüfen Sie, ob der *Code Signing* -Abschnitt *Code Signing Identity* innerhalb der Projekteinstellungen auf Ihre Bereitstellung Profilname festgelegt ist.

 [8]: https://developer.apple.com/ios/manage/overview/index.action

Für das Gerät bereitstellen:

1.  Verwenden Sie das USB-Kabel, um das Gerät an Ihren Mac anschließen

2.  Wählen Sie den Namen des Projekts in das Xcode-Fenster **Schema** Dropdown Liste.

3.  Wählen Sie Ihr Gerät aus der Dropdownliste **Gerät** . Wenn es über USB angeschlossen ist, aber immer noch nicht angezeigt, drücken Sie die Schaltfläche " **Organizer** ", um Fehler zu beheben.

4.  Drücken Sie die Schaltfläche **Ausführen** , erstellen, bereitstellen und führen Sie die Anwendung auf Ihrem Gerät.

## Häufige Probleme

**Veraltungswarnungen:** Wenn eine Anwendung geändert oder ersetzt durch eine andere API-Programmierschnittstelle (API), wird es als *veraltet*markiert. Die API noch kurzfristig funktioniert, aber wird schließlich entfernt. Einige dieser veralteten Schnittstellen spiegeln sich in Apache Cordova und Xcode gibt Warnungen über sie, wenn Sie erstellen und eine Anwendung bereitstellen.

Xcode Warnung über die `invokeString` Methode betrifft die Funktionalität, die eine Anwendung über einen benutzerdefinierten URL startet. Obwohl der Mechanismus zum Laden aus einer benutzerdefinierten URL geändert hat, ist dieser Code noch rückwärts Funktionalität für Anwendungen, die mit älteren Versionen von Cordova erstellt. Die Beispielanwendung wird diese Funktionalität nicht verwendet, können diese Warnungen ignoriert werden. Um diese Warnungen angezeigt zu vermeiden, entfernen Sie den Code, der die veraltete InvokeString API verweist:

*   Bearbeiten Sie die Datei *Classes/MainViewController.m* , umgeben von den folgenden Codeblock mit `/*` und `*/` Kommentare wie folgt, dann geben Sie **Befehl-s** , um die Datei zu speichern:

        (void)webViewDidFinishLoad:(UIWebView*)theWebView
        {
        // only valid if ___PROJECTNAME__-Info.plist specifies a protocol to handle
        /*
        if (self.invokeString) {
          // this is passed before the deviceready event is fired, so you can access it in js when you receive deviceready
          NSLog(@"DEPRECATED: window.invokeString - use the window.handleOpenURL(url) function instead, which is always called when the app is launched through a custom scheme url.");
          NSString* jsString = [NSString stringWithFormat:@"var invokeString = \"%@\";", self.invokeString];
          [theWebView stringByEvaluatingJavaScriptFromString:jsString];
        }
        */
        // Black base color for background matches the native apps
        theWebView.backgroundColor = [UIColor blackColor];

        return [super webViewDidFinishLoad:theWebView];
        }


*   Bearbeiten Sie die *Classes/AppViewDelegate.m* -Datei, kommentieren Sie die folgende Zeile durch einen doppelten Schrägstrich einfügen, wie folgt, dann geben Sie **Befehl-s** , um die Datei zu speichern:

        //self.viewController.invokeString = invokeString;


*   Drücken Sie **Befehl-b** das Projekt neu zu erstellen und zu beseitigen die Warnungen.

<!-- Does this fix only last until the next "cordova prepare"? -->

**Fehlende Header**: Kompilierungsfehler im Zusammenhang mit fehlenden Header werden durch Probleme mit den Buildspeicherort und kann über Xcode-Einstellungen festgelegt werden:

1.  **Xcode → Einstellungen → Speicherorte** auswählen.

2.  Drücken Sie im Abschnitt **Abgeleitete Daten** die Schaltfläche " **erweitert** " und wählen Sie **Unique** als den **Buildspeicherort** , wie hier gezeigt:

    ![][9]

 [9]: {{ site.baseurl }}/static/img/guide/platforms/ios/xcode_build_location.png

Dies ist die Standardeinstellung für eine neue Xcode-Installation, aber es kann anders nach einem Upgrade von einer älteren Version von Xcode festgelegt werden.

Weitere Informationen finden Sie in Apples Dokumentation:

*   [Start Entwicklung iOS Apps heute][10] bietet einen schnellen Überblick über die Schritte für die Entwicklung von iOS Apps.

*   [Member Center-Homepage][11] enthält Links zu mehreren iOS technische Ressourcen, einschließlich der technische Ressourcen, das provisioning Portal, Verteilung Führer und Community-Foren.

*   [Tools-Workflow-Guide für iOS][7]

*   [Xcode 4 Benutzerhandbuch][12]

*   [Session-Videos][13] aus der Apple World Wide Developer Conference 2012 (WWDC2012)

*   Der [Xcode-Select-Befehl][14], der hilft, wenn mehrere geben Sie die richtige Version von Xcode installiert ist.

 [10]: http://developer.apple.com/library/ios/#referencelibrary/GettingStarted/RoadMapiOS/index.html#//apple_ref/doc/uid/TP40011343
 [11]: https://developer.apple.com/membercenter/index.action
 [12]: http://developer.apple.com/library/ios/#documentation/ToolsLanguages/Conceptual/Xcode4UserGuide/000-About_Xcode/about.html#//apple_ref/doc/uid/TP40010215
 [13]: https://developer.apple.com/videos/wwdc/2012/
 [14]: http://developer.apple.com/library/mac/#documentation/Darwin/Reference/ManPages/man1/xcode-select.1.html

(Mac ® OS X ®, Apple ®, Xcode App Store℠, iPad ®, iPhone ®, iPod ® und Finder ® sind Marken von Apple Inc.)
