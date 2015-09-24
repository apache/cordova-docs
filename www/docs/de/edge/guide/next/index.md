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

title: Die nächsten Schritte
---

# Die nächsten Schritte

Für Entwickler, die ein davon wie Verständnis man die Cordova CLI verwenden und über Plugins verwenden, es gibt ein paar Dinge, die Sie sollten in Erwägung ziehen, neben Build besser, mehr Performant Cordova Anwendungen untersucht. Das folgende Dokument bietet Beratung zu verschiedenen Themen rund um Empfehlungen, Tests, Upgrades und anderen Themen, aber soll nicht präskriptiv sein. Betrachten Sie Ihren Startpunkt für Ihr Wachstum als Entwickler Cordova. Auch, wenn Sie etwas, die verbessert werden können sehen, bitte [beitragen][1]!

 [1]: http://cordova.apache.org/#contribute

Dieses Handbuch enthält die folgenden Themen:

*   Best Practices
*   Umgang mit Upgrades
*   Cordova apps testen
*   Debuggen von Cordova apps
*   Benutzeroberfläche
*   Besondere Überlegungen
*   Halten
*   Anfordern von Hilfe 

# Best Practices-Cordova-app-Entwicklung

## 1) SPA ist dein Freund

Zuallererst - sollten Ihre Cordova-Anwendungen das Design SPA (Single Seite Anwendung) annehmen. Lose definiert, ist ein SPA eine Client-Anwendung, die aus einer Anforderung einer Webseite ausgeführt wird. Der Benutzer lädt einen Anfangssatz von Ressourcen (HTML, CSS und JavaScript) und weitere Updates (zeigt eine neue Ansicht, Laden von Daten) erfolgt über AJAX. Thermen werden häufig für komplexere clientseitige Anwendungen verwendet. Google Mail ist ein gutes Beispiel dafür. Laden Sie Google Mail e-Mail-Ansichten, Bearbeitung und Organisation erfolgen alle durch Aktualisierung das DOM statt tatsächlich die aktuelle Seite zu verlassen um ein völlig neues laden.

Mit einem SPA kann Ihnen helfen, Ihre Anwendung in effizienter Weise zu organisieren, aber es hat auch bestimmte Vorteile für Cordova Anwendungen. Eine Cordova-Anwendung muss warten, für das Deviceready-Ereignis ausgelöst, bevor alle Plug-ins verwendet werden kann. Wenn Sie keinen SPA verwenden und Ihre Benutzer klickt, um von einer Seite zur anderen zu gehen, müssen Sie warten für Deviceready erneut ausgelöst, bevor Sie machen über ein Plugin zu verwenden. Dies ist einfach zu vergessen, da Ihre Anwendung größer wird.

Selbst wenn Sie nicht mithilfe von Cordova, wird mobile Application erstellen, ohne die Verwendung einer einzelnen Seitenarchitektur Leistung auswirken. Dies ist denn Navigieren zwischen den Seiten erforderlich sein, Vermögenswerte, Skripte, etc. neu geladen werden. Auch wenn diese Vermögenswerte zwischengespeichert werden, wird es Sie noch Leistungsprobleme.

Beispiele für SPA-Bibliotheken, die Sie in Ihren Cordova-Anwendungen verwenden können sind:

*   [AngularJS][2]
*   [EmberJS][3]
*   [Rückgrat][4]
*   [Kendo UI][5]
*   [Monaca][6]
*   [ReactJS][7]
*   [Sencha Touch][8]
*   [jQuery Mobile][9]

 [2]: http://angularjs.org
 [3]: http://emberjs.com
 [4]: http://backbonejs.org
 [5]: http://www.telerik.com/kendo-ui
 [6]: http://monaca.mobi/en/
 [7]: http://facebook.github.io/react/
 [8]: http://www.sencha.com/products/touch/
 [9]: http://jquerymobile.com

Und viele, viele mehr.

## 2) Überlegungen zur Leistung

Einer der größten Fehler, den, die ein neuer Cordova-Entwickler leisten kann, ist anzunehmen, dass die Leistung, die sie auf einem desktop-Rechner bekommen das gleiche erhalten sie auf einem mobilen Gerät. Zwar unsere mobile Geräte leistungsfähiger jedes Jahr bekommen, es fehlen noch die Kraft und die Leistung eines Desktop-Computers. Mobile Geräte haben in der Regel viel weniger RAM und eine GPU, die weit entfernt von ihrem Desktop (oder auch Laptop) Brüder. Eine vollständige Liste der Tipps hier wäre zu viel, aber hier sind ein paar Dinge zu beachten (mit einer Liste von mehr Ressourcen am Ende für die weitere Forschung).

**Klicken Sie im Vergleich zu Touch** - der größte und einfachste Fehler, den Sie machen können ist, Click-Ereignisse verwenden. Während diese "prima Mobile funktionieren", erheben die meisten Geräte 300ms Verzögerung darauf Unterscheidung zwischen einem Hauch und ein Hauch "halten"-Ereignis. Mit `touchstart` , oder `touchend` , führt zu einer dramatischen Verbesserung - 300ms nicht klingt wie viel, aber es ruckelt UI-Updates und Verhalten führen kann. Außerdem sollten Sie die Tatsache, die "Ereignisse berühren" werden nicht unterstützt auf nicht-Webkit-Browser finden Sie unter [CanIUse][10]. Um diese Einschränkungen zu begegnen, können Sie Kasse verschiedene Bibliotheken wie HandJS und Fastouch.

 [10]: http://caniuse.com/#search=touch

**CSS-Transitions gegenüber DOM-Manipulation** - mit Hilfe des Hardware-beschleunigte CSS Übergänge werden dramatisch besser als JavaScript verwendet, um Animationen zu erstellen. Finden Sie unter der Liste der Ressourcen am Ende dieses Abschnitts für Beispiele.

**Netzwerke zu saugen** - Ok, Netzwerke nicht immer saugen, aber die Wartezeit von Mobilfunknetzen, selbst gute Mobilfunknetzen, ist weit schlimmer sein als Sie vielleicht denken. Eine desktop-Anwendung, die alle 30 Sekunden nach unten über 500 Zeilen von JSON-Daten, schlürft werden beide langsamer auf einem mobilen Gerät sowie ein Batterie-Schwein. Beachten Sie, dass Cordova apps mehrere Möglichkeiten haben, Daten in der app (LocalStorage und das Dateisystem z. B.) beibehalten. Diese Daten lokal zwischengespeichert und werden bewusst die Datenmenge, die Sie hin und her senden. Dies ist ein besonders wichtiger Aspekt, wenn Ihre Anwendung über ein Mobilfunknetz verbunden ist.

**Zusatzvorstellung Artikel und Ressourcen**

*   ["Sie halb assed es"][11]
*   ["Top zehn Tipps zur Leistungssteigerung für PhoneGap und Hybrid-Apps"][12]
*   ["Schnelle Apps und Websites mit JavaScript"][13]

 [11]: http://sintaxi.com/you-half-assed-it
 [12]: http://coenraets.org/blog/2013/10/top-10-performance-techniques-for-phonegap-and-hybrid-apps-slides-available/
 [13]: https://channel9.msdn.com/Events/Build/2013/4-313

## 3) erkennen und behandeln von Offline-Status

Finden Sie im vorherigen Tipp über Netzwerke. Nicht nur Sie können über ein langsames Netzwerk, es ist durchaus möglich, für Ihre Anwendung komplett offline sein. Die Anwendung sollte dies auf intelligente Weise behandeln. Wenn Ihre Anwendung nicht tut, wird glauben, dass Ihre Anwendung unterbrochen wird. Gegeben wie einfach es ist, (Cordova unterstützt hören für ein Offline- und Ereignis) zu behandeln gibt es absolut keinen Grund für Ihre Anwendung nicht mehr reagiert, wenn offline ausführen. Testen Sie (siehe Abschnitt Testing) Ihre Anwendung und sollten Sie testen, wie Ihre Anwendung behandelt, wenn Sie in einem Staat starten und dann zu einer anderen wechseln.

Beachten Sie, dass die Online- und offline-Veranstaltungen sowie die Netzwerk-Verbindung-API ist nicht perfekt. Sie müssen möglicherweise verlassen sich auf mithilfe einer XHR-Anforderung um zu sehen, ob das Gerät wirklich offline oder online ist. Am Ende des Tages werden sicher irgendeine Form der Unterstützung für Netzwerkprobleme - fügen Sie in der Tat, im Apple Store (und wahrscheinlich noch andere Läden) werden apps, die ordnungsgemäß offline/online-Staaten darstellen nicht ablehnen. Weitere Diskussion zu diesem Thema finden Sie unter ["Ist das Ding auf?"][14]

 [14]: http://blogs.telerik.com/appbuilder/posts/13-04-23/is-this-thing-on-%28part-1%29

# Umgang mit Upgrades

## Update von Cordova-Projekten

Wenn das vorhandene Projekt erstellt wurde, mithilfe von Cordova 3.x, können Sie das Projekt aktualisieren, indem Folgendes ausgeben:

    cordova platform update platform-name ios, android, etc.
    

Wenn das vorhandene Projekt, unter einer Version vor Cordova erstellt wurde 3.x, es wäre wohl am besten ein neues Cordova-3.x-Projekt erstellen und kopieren Sie dann des vorhandenen Projekts Code und Vermögenswerte in das neue Projekt. Typische Schritte:

*   Erstellen eines neuen Cordova-3.x-Projekts (Cordova erstellen...)
*   Kopieren Sie den Www-Ordner aus dem alten Projekt zum neuen Projekt
*   Kopieren Sie alle Konfigurationseinstellungen aus dem alten Projekt in das neue Projekt
*   Fügen Sie alle Plugins in das alte Projekt in das neue Projekt verwendet
*   Erstellen Sie das Projekt
*   Testen, testen, testen!

Unabhängig von der vorherigen Version des Projekts ist es absolut wichtig, dass Sie lesen auf was in der aktualisierten Version geändert wurde, da das Update den Code brechen kann. Der beste Ort, um diese Informationen werden in den Release-Notes in den Repositories und auf dem Cordova-Blog veröffentlicht. Sie wollen Ihre Anwendung gründlich testen, um festzustellen, ob es ordnungsgemäß ausgeführt wird, nachdem Sie das Update durchführen.

Hinweis: einige Plugins kompatibel mit der neuen Version von Cordova möglicherweise nicht. Wenn eine Plugin nicht kompatibel ist, möglicherweise um ein Ersatz-Plugin zu finden, die tut, was Sie brauchen können, oder müssen Sie möglicherweise verzögern, Aktualisierung des Projekts. Alternativ ändern Sie das Plugin so, dass es unter der neuen Version arbeiten und zurück zur Gemeinschaft beitragen.

## Plugin-Upgrades

Ab Cordova 3.4 gibt es keinen Mechanismus für die Aktualisierung geänderte Plugins mithilfe eines einzelnen Befehls. Stattdessen entfernen Sie das Plugin zu, und fügen Sie sie zurück zu Ihrem Projekt und die neue Version installiert werden:

    Cordova Plugin Rm com.some.plugin Cordova Plugin hinzufügen com.some.plugin
    

Achten Sie darauf, das aktualisierte Plugin Dokumentation, zu kontrollieren, Sie benötigen, um Ihren Code zum Arbeiten mit der neuen Version anzupassen. Auch, doppelt überprüfen, die die neue Version des Plugins mit Ihrem Projekt Version von Cordova.

Testen Sie stets Ihre apps um sicherzustellen, dass das neue Plugin installieren nicht etwas gebrochen hat, die Sie nicht vorhersah.

Wenn Ihr Projekt viele Plugins, die Sie benötigen aktualisiert hat, könnte es sparen Sie Zeit eine Shell oder Batch-Skript erstellen, das entfernt und die Plugins mit einem einzigen Befehl hinzugefügt.

# Cordova apps testen

Testen Ihrer Anwendungen ist super wichtig. Das Cordova-Team nutzt Jasmin aber Web-verbündete Einheit-Testlösung wird.

## Am Simulator vs. auf einem echten Gerät testen

Es ist nicht ungewöhnlich, dass desktop-Browsern und Gerät-Simulatoren/Emulatoren verwenden Sie beim Entwickeln einer Anwendung von Cordova. Allerdings ist es unglaublich wichtig, dass Sie Ihre Anwendung auf so viele physische Geräte testen wie du nur kannst:

*   Simulatoren sind genau das: Simulatoren. Beispielsweise Ihre Anwendung in der iOS-Simulator ohne Probleme funktionieren, aber es möglicherweise nicht auf einem echten Gerät (vor allem in bestimmten Umständen, wie etwa einen Speichermangel-Zustand). Oder Ihre app versäumen tatsächlich auf dem Simulator, während es auf einem echten Gerät einwandfrei funktioniert. 
*   Emulatoren sind genau das: Emulatoren. Sie repräsentieren nicht, wie gut Ihre app auf einem physischen Gerät ausgeführt werden. Einige Emulatoren können beispielsweise Ihre app mit einer verstümmelten Anzeige gerendert, während ein echtes Gerät kein Problem hat. (Wenn Sie dieses Problem auftritt, deaktivieren Sie den Host GPU im Emulator.)
*   Simulatoren sind in der Regel schneller als Ihr physisches Gerät. Emulatoren sind auf der anderen Seite im allgemeinen langsamer. Beurteilen Sie die Leistung Ihrer Anwendung nicht, von wie es in einem Simulator oder einen Emulator durchführt. Beurteilen Sie die Leistung Ihrer Anwendung von wie es auf ein Spektrum an realen Geräten läuft.
*   Es ist unmöglich, ein gutes Gefühl dafür, wie Ihre app auf Ihrem Touch reagiert, mit einem Simulator oder einen Emulator. Stattdessen kann die app auf einem echten Gerät ausgeführt Probleme mit den Größen der Elemente der Benutzeroberfläche, Reaktionsfähigkeit, usw. hinweisen.
*   Obwohl es schön wäre, nur auf ein Gerät pro Plattform testen zu können, empfiehlt es sich, bei vielen Geräten sportliche viele verschiedene OS-Versionen zu testen. Z. B. was auf Ihrem bestimmten Android-Smartphone funktioniert auf einem anderen Android-Gerät möglicherweise nicht. Was auf einem iOS 7-Gerät funktioniert möglicherweise nicht auf einem Gerät mit iOS 6.

Es ist natürlich unmöglich, auf alle möglichen Geräte auf dem Markt zu testen. Aus diesem Grund ist es ratsam viele Tester einstellen, die verschiedene Geräte zu haben. Obwohl sie jedes Problem wird nicht fangen, stehen die Chancen gut, dass sie entdecken werden, Macken und Probleme, die Sie allein nie finden würden.

Tipp: Es ist möglich auf Android Nexus Geräten leicht unterschiedliche Versionen von Android auf das Gerät flashen. Dieser einfache Prozess können Sie Ihre Anwendung auf verschiedenen Ebenen von Android mit einem einzigen Gerät, leicht zu testen, ohne Ihre Garantie annullieren oder dass Sie Ihr Gerät auf "Jailbreak" oder "Root". Die Google Android Fabrik Bilder und Anleitungen befinden sich in: https://developers.google.com/android/nexus/images#instructions

# Debuggen von Cordova apps

Debuggen von Cordova, muss ein Setup. Im Gegensatz zu einer desktop-Anwendung Sie können nicht öffnen Sie einfach Dev Tools auf Ihrem mobilen Gerät und Debuggen starten, zum Glück gibt es einige tolle Alternativen.

## iOS Debuggen

### Xcode

Mit Xcode können Sie die native iOS Seite Ihrer Cordova-Anwendung debuggen. Stellen Sie sicher, dass der Debug-Umgebung (Blick-> Debug Bereich) angezeigt wird. Sobald Ihre app auf dem Gerät (oder Simulator) ausgeführt wird, können Sie im Bereich Debug Protokollausgabe anzeigen. Dies ist, wo Fehler oder Warnungen gedruckt wird. Sie können auch Haltepunkte innerhalb der Quelldateien festlegen. Dies ermöglicht Ihnen, Schritt für Schritt durch den Code eine Zeile zu einem Zeitpunkt und den Zustand der Variablen damals. Der Zustand der Variablen wird im Bereich Debuggen angezeigt, wenn ein Haltepunkt erreicht wird. Sobald Ihre app auf dem Gerät installiert und läuft ist, können Sie Safari Webinformationen bringen (wie unten beschrieben), um die Webview und Js Seite Ihrer Anwendung zu debuggen. Weitere Informationen und Hilfe finden Sie im Xcode-Guide: [Xcode Debuggen Guide][15]

 [15]: https://developer.apple.com/library/mac/documentation/ToolsLanguages/Conceptual/Xcode_Overview/DebugYourApp/DebugYourApp.html#//apple_ref/doc/uid/TP40010215-CH18-SW1

### Safari Remote Debuggen mit Webinformationen

Mit der Safari Web-Inspektor können Sie den Webview und Js-Code in der Cordova-Anwendung debuggen. Dies funktioniert nur unter OSX und nur mit iOS 6 (und höher). Es verwendet Safari zum Herstellen einer Verbindung mit Ihrem Gerät (oder der Simulator) und wird die Browser-Dev-Tools der Cordova-Anwendung verbinden. Sie bekommen, was Sie von Entwicklungstools - DOM Inspektion/Manipulation, einen JavaScript-Debugger, Netzwerk-Inspektion, die Konsole und mehr erwarten. Wie Xcode mit Safari Webinformationen können Haltepunkte im JavaScript-Code und den Zustand der Variablen zu diesem Zeitpunkt anzeigen. Sie können anzeigen, Fehler, Warnungen oder Nachrichten, die auf der Konsole ausgegeben werden. Sie können auch JavaScript-Befehle direkt über die Konsole ausführen, wie Ihre Anwendung ausgeführt wird. Weitere Details zu wie Sie es einrichten und was Sie tun können, finden Sie in diesem hervorragenden Blog-post: <http://moduscreate.com/enable-remote-web-inspector-in-ios-6/> und dieser Anleitung: [Safari Web Inspector Guide][16]

 [16]: https://developer.apple.com/library/safari/documentation/AppleApplications/Conceptual/Safari_Developer_Guide/Introduction/Introduction.html

## Chrom Remotedebuggen

Praktisch das gleiche wie der Safari-Version, dies funktioniert nur mit Android, sondern kann von jedem desktop-Betriebssystem verwendet werden. Es erfordert mindestens Android 4.4 (KitKat), API-Mindestmaß an 19 und Chrom 30 + (auf dem Desktop). Sobald verbunden, erhalten Sie die gleiche Chrome Dev Tools-Erfahrung für Ihre mobilen Anwendungen, wie Sie mit Ihrem desktop-Anwendungen. Noch besser ist, haben die Chrome Dev-Tools eine Spiegel-Option, die Ihre app-Betrieb auf dem mobilen Gerät zeigt. Dies ist mehr als nur eine Ansicht - Sie können aus Dev Tools klicken und scrollen und Aktualisierungen auf dem mobilen Gerät. Weitere Informationen zu Chrome Remotedebuggen finden Sie hier: <https://developers.google.com/chrome/mobile/docs/debugging>

Es ist möglich, Chrome Dev Tools verwenden, um iOS apps, über einen WebKit-Proxy zu prüfen: <https://github.com/google/ios-webkit-debug-proxy/>

## Welligkeit

Welligkeit ist ein desktop basierten Emulator für Cordova-Projekte. Im Wesentlichen können Sie eine Cordova-Anwendung in der desktop-Anwendung ausführen und fake verschiedene Cordova-Features. Beispielsweise können Sie den Beschleunigungsmesser um zu testen, Shake-Veranstaltungen zu simulieren. Es täuscht die Kamera-API, indem man Ihnen ein Bild von Ihrer Festplatte auszuwählen. Welligkeit können, die Sie mehr auf Ihren benutzerdefinierten Code, anstatt sich Gedanken über Cordova Plugins konzentrieren. Erfahren Sie mehr über Ripple hier: <http://ripple.incubator.apache.org/>

## Weinre

Weinre erstellt einen lokalen Server, der einen remote-Debug-Client für Ihre Cordova-Anwendungen hosten kann. Nachdem Sie installiert und es gestartet haben, können Sie eine Codezeile in Cordova Anwendung kopieren und starten Sie ihn neu. Sie können dann eine Dev-Tool-Leiste auf dem Desktop mit der Anwendung öffnen. Weinre ist nicht ganz so hochtrabend als Chrome und Safari Remotedebuggen, hat aber den Vorteil der Arbeit mit einem viel größeren Bereich der Betriebssysteme und Plattformen. Weitere Informationen finden Sie hier: <http://people.apache.org/~pmuellr/weinre/docs/latest/>

## Andere Optionen

*   BlackBerry 10 unterstützt auch Debuggen: [Dokumentation][17]
*   Sie können mit Firefox App Manager sowie Debuggen, finden Sie unter [diesem Blog-Post][18] und dieser [MDN-Artikel][19].
*   Weitere Beispiele und Erläuterung der oben genannten Tipps zum Debuggen finden Sie unter: <http://developer.telerik.com/featured/a-concise-guide-to-remote-debugging-on-ios-android-and-windows-phone/>

 [17]: https://developer.blackberry.com/html5/documentation/v2_0/debugging_using_web_inspector.html
 [18]: https://hacks.mozilla.org/2014/02/building-cordova-apps-for-firefox-os/
 [19]: https://developer.mozilla.org/en-US/Apps/Tools_and_frameworks/Cordova_support_for_Firefox_OS#Testing_and_debugging

# Benutzeroberfläche

Erstellen einer Anwendung Cordova sieht schön auf mobile eine Herausforderung sein kann, vor allem für Entwickler. Viele Menschen haben ein UI-Framework verwenden, um dies zu erleichtern. Hier ist eine kurze Liste der Optionen, die Sie betrachten möchten.

*   [jQuery Mobile][9] - jQuery Mobile erhöht automatisch Ihre Layout für mobile Optimierung. Es behandelt auch einen SPA für Sie automatisch erstellen.
*   [Ionische][20] -dieser leistungsstarke UI-Framework hat tatsächlich eigene CLI Projekterstellung zu behandeln. 
*   [Ratsche][21] - geholt Ihnen durch die Menschen, die Bootstrap erstellt. 
*   [Kendo UI][5] - Open-Source-UI und Application Framework von Telerik.
*   [DECKLACK][22]
*   [ReactJS][7]

 [20]: http://ionicframework.com/
 [21]: http://goratchet.com/
 [22]: http://topcoat.io

Wenn Sie Ihre Benutzeroberfläche zu erstellen, ist es wichtig, über alle Plattformen, die Sie abzielen und die Unterschiede zwischen den Benutzererwartungen zu denken. Beispielsweise wird eine Android-Anwendung, die Benutzeroberfläche eines iOS-Stil hat wahrscheinlich nicht gut mit Benutzer rüber. Dies wird manchmal auch durch die verschiedene Anwendung-Stores erzwungen. Aus diesem Grund ist es wichtig, dass Sie die Konventionen des jede Plattform zu respektieren und daher vertraut mit den verschiedenen Human Interface Guidelines sind:

*   [iOS][23]
*   [Android][24]
*   [Windows Phone][25]

 [23]: https://developer.apple.com/library/ios/documentation/userexperience/conceptual/MobileHIG/index.html
 [24]: https://developer.android.com/designWP8
 [25]: http://dev.windowsphone.com/en-us/design/library

## Zusätzliche UI-Artikel und Betriebsmittel

Obwohl Browser-Motoren immer mehr Normen Beschwerde geworden, wir leben noch in einer vorangestellten Welt (-Webkit und - Frau) der folgende Artikel ist wertvoll, wenn UI in für cross-Browser-apps entwickeln: <http://blogs.windows.com/windows_phone/b/wpdev/archive/2012/11/15/adapting-your-webkit-optimized-site-for-internet-explorer-10.aspx>

# Besondere Überlegungen

Obwohl Cordova Cross-Plattform-Entwicklung einfacher macht, ist es einfach nicht möglich, 100 % unabhängig von der zugrunde liegenden systemeigenen Plattform bereitzustellen. Also Einschränkungen bewusst.

## Plattform Macken

Achten Sie beim Lesen der Dokumentation auf Abschnitte, die unterschiedliche Verhaltensweisen oder Anforderungen auf mehreren Plattformen zu skizzieren. Falls vorhanden, wäre dies in einem Abschnitt mit dem Titel "Android Eigenarten", "iOS Marotten", etc.. Durch diese Eigenheiten lesen Sie und beachten sie beim Arbeiten mit Cordova.

## Remote-Inhalte laden

Aufrufen von Cordova JavaScript-Funktionen aus einer HTML-Seite aus der Ferne geladen ist (eine HTML-Seite nicht lokal auf dem Gerät gespeichert) eine nicht unterstützte Konfiguration. Dies ist da Cordova war nicht dafür ausgelegt, und die Apache-Cordova-Gemeinschaft tut keine Prüfung dieser Konfiguration. Während es in einigen Fällen wirken kann, wird es nicht empfohlen oder unterstützt. Es gibt Herausforderungen mit der gleichen Ursprungs-Policy, halten das JavaScript und native Teile von Cordova synchronisiert auf die gleiche Version (da sie über private APIs geändert werden gekoppelt sind), die Vertrauenswürdigkeit des remote-Inhalte aufrufen systemeigene lokale Funktionen und möglichen app-Store-Ablehnung.

Die Anzeige der HTML-Inhalt aus der Ferne geladen, in ein Webview getan werden mit Cordova's InAppBrowser. Die InAppBrowser ist so konzipiert, dass es ausgeführtes JavaScript keinen Zugriff auf die Cordova-JavaScript-APIs aus den oben aufgeführten Gründen hat. Finden Sie im Security Guide.

# Halten

Hier sind ein paar Möglichkeiten, um mit Cordova aktuell zu halten.

*   Abonnieren Sie den [Blog von Cordova][26].
*   Die [Entwickler-Liste][27]abonnieren. Hinweis: Dies ist keine Selbsthilfegruppe! Vielmehr ist dies ein Ort, wo die Entwicklung von Cordova diskutiert wird.

 [26]: http://cordova.apache.org/#news
 [27]: http://cordova.apache.org/#mailing-list

# Anfordern von Hilfe

Die folgenden Links sind die besten Orte, um Hilfe zu Cordova zu erhalten:

*   StackOverflow: <http://stackoverflow.com/questions/tagged/cordova> mithilfe des Cordova-Tags können Sie anzeigen und durchsuchen alle Cordova Fragen. Beachten Sie, dass StackOverflow automatisch das "Phonegap" Tag "Cordoba", konvertiert so dass auf diese Weise werden Sie historische Fragen sowie Zugang zu
*   PhoneGap Google Group: [https://groups.google.com/forum/#! Forum/Phonegap][28] diese Google Group war das alte Support-Forum als Cordova noch PhoneGap genannt wurde. Zwar gibt es noch eine Menge von Cordova-Benutzer, die dieser Gruppe häufig, hat die Gemeinde Cordova mit Schwerpunkt weniger auf diese Gruppe und stattdessen StackOverflow Unterstützung geäußert
*   Meetup: <http://phonegap.meetup.com> - betrachten Sie suchen nach einer lokalen Cordova/PhoneGap Meetup-Gruppe

 [28]: https://groups.google.com/forum/#!forum/phonegap