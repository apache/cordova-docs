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

# Anleitung zur Windows 8 Platform

Diese Anleitung zeigt Ihre Entwicklungsumgebung SDK einrichten, Cordova apps für Windows 8 bereitstellen. Finden Sie im folgenden detaillierte Plattform-spezifischen Informationen:

*   Aktualisieren von Windows 8
*   Windows 8-Befehlszeilentools

Die Befehlszeilentools, die oben beziehen sich auf Versionen vor 3.0 Cordova. Informationen über die aktuelle Schnittstelle finden Sie unter The Command-Line Interface.

Microsoft als veraltet markiert den Namen *Metro-Style apps* in Windows 8 und Windows RT. MSDN bezieht sich jetzt auf diese app als ein *Windows-Speicher* -app, und dieser Anleitung folgt dieser Konvention. Darüber hinaus bedeutet in diesem Handbuch *Windows 8* Windows 8 und Windows RT.

## 1. Anforderungen

*   Windows 8

*   Visual Studio 2012 Professional oder besser oder Visual Studio 2012 Express für Windows 8

Folgen Sie den Anweisungen [hier][1] , um Ihre apps Windows Store einreichen.

 [1]: http://www.windowsstore.com/

## 2. Installieren Sie SDK + Cordova

*   Richten Sie Ihre bevorzugte Variante der Visual Studio-2012. Alle das Produkt bezahlten Versionen (Professional, usw.) können Sie Windows Store apps zu bauen. Sie benötigen **Express für Windows 8** baut Windows Store apps mit der [Express-Editionen][2].

*   Herunterladen Sie und extrahieren Sie die neueste Kopie von [Cordova][3]. Arbeiten Sie der `lib\windows-8` Unterverzeichnis.

 [2]: http://www.microsoft.com/visualstudio/eng/products/visual-studio-express-products
 [3]: http://phonegap.com/download

## 3. Einrichten des neuen Projekts

Sie können bereits mit der *HTML/JavaScript verfolgen* in Windows Store apps verfügbaren Windows 8-apps erstellen. Verwenden Sie Cordova in Windows Store apps derselben APIs wie auf anderen Cordova-unterstützte Plattformen verfügbar zu machen.

*   Öffnen Sie Visual Studio 2012 und wählen Sie **Neues Projekt**.

*   Wählen Sie **Installierte → → andere Sprachen → JavaScript → Windows Vorlagenspeicher** vom Baum und dann **Leere App** aus der Projektliste. Geben Sie was auch immer du, wie z. B. magst Projektname `CordovaWin8Foo` wie in diesem Beispiel.

    ![][4]

*   Microsoft weiterhin verwenden Sie `default.html` als die Standard-Homepage, aber die meisten Web-Entwickler verwenden `index.html` . (Außerdem ist es wahrscheinlich, dass in anderen Varianten Ihres Projekts Plattform Sie verwenden `index.html` als Namen für Ihre Standard-Seite.) Dieses, im Projektmappen-Explorer umbenennen Regeln die `default.html` Datei zu `index.html` . Doppelklicken Sie auf die `package.appxmanifest` Datei und ändern Sie den Wert **Start Page** zu`index.html`.

    ![][5]

*   Gehören `cordova.js` in Ihrem Projekt, der rechten Maustaste auf das `js` Verzeichnis im Projektmappen-Explorer und wählen Sie **→ Neues Element hinzufügen**. Suchen Sie die `cordova.js` Datei das `lib\windows-8` Verzeichnis oben erwähnt.

*   Bearbeiten Sie den Code für `index.html` . Fügen Sie einen Verweis auf `cordova.js` . Sie können dies tun, manuell oder durch Ziehen der Datei im Projektmappen-Explorer.

 [4]: {{ site.baseurl }}/static/img/guide/platforms/win8/wsnewproject.png
 [5]: {{ site.baseurl }}/static/img/guide/platforms/win8/wschangemanifest.png

### Hinzufügen des Verweises...

        <!-- WinJS references -->
        <link href="//Microsoft.WinJS.1.0/css/ui-dark.css" rel="stylesheet" />
        <script src="//Microsoft.WinJS.1.0/js/base.js"></script>
        <script src="//Microsoft.WinJS.1.0/js/ui.js"></script>

        <!-- Cordova -->
        <script src="/js/cordova.js"></script>

        <!-- CordovaWin8Foo references -->
        <link href="/css/default.css" rel="stylesheet" />
        <script src="/js/default.js"></script>


*   Als Nächstes fügen Sie Code, der die Cordova veranschaulicht arbeitet.

### Einen 'Deviceready'-Handler hinzufügen...

    <body>
        <p>Content goes here</p>

        <script type="text/javascript">

            console.log("Subscribing...");
            document.addEventListener("deviceready", function () {

                navigator.notification.alert("The device is ready!");

            });

        </script>

    </body>


## 5. Testen Sie das Projekt

*   Führen Sie das Projekt von Visual Studio. Sie werden sehen, dass das Meldungsfeld angezeigt werden:

    ![][6]

 [6]: {{ site.baseurl }}/static/img/guide/platforms/win8/wsalert.png

## Fertig!

Das ist es! Du bist jetzt bereit, Windows Store apps mit Cordova zu bauen.
