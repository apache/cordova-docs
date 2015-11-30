# Dokumentation zum Apache Cordova API

Die JavaScript-API-Dokumentation für [Apache-Cordova](http://cordova.io/).

Die Dokumentation ist unter [docs.cordova.io](http://docs.cordova.io/) verfügbar.

## Dokumentationsformat

Alle [Apache-Cordova](http://cordova.io/) -Dokumentation geschrieben mit [Markdown](http://daringfireball.net/projects/markdown/syntax), eine leichte Markup-Sprache, die in HTML geschrieben werden kann. Markdown bietet eine einfache und flexible Möglichkeit, Cordova Core API und plattformspezifischen APIs zu dokumentieren.

## Dateistruktur

    docs/
    docs/LANGUAGE
    docs/LANGUAGE/VERSION
    docs/LANGUAGE/VERSION/cordova/
    docs/LANGUAGE/VERSION/guide/platforms/PLATFORMNAME/


## Zu der Dokumentation beitragen

### Melden oder ein Problem zu beheben

Wir verwenden [Apache JIRA](https://issues.apache.org/jira/browse/CB)

Übrigens, wiegen Sie! Vielen Dank, dass uns die Dokumentation zu verbessern!

### Mit Hilfe von Git

Sind Sie neu bei Git oder auf GitHub beiträgt?

Wir haben [ein paar Git-Tutorials geschrieben](http://wiki.apache.org/cordova/ContributorWorkflow) , helfen Ihnen den Einstieg mit zu der Dokumentation beitragen.

### Senden von Pull-Anforderungen

Pull-Requests sind willkommen!

Wir bedanken uns für die Nutzung der Thema-Filialen.

    git checkout -b issue_23

    # code

    git commit -m "Issue 23: Fix a bad bug."

    git push origin issue_23

    # send pull request from branch issue_23 to cordova:master


### Hinzufügen einer Sprache

Wollen Sie die Apache-Cordova-Dokumentation in einer anderen Sprache? Wir tun es auch! Mit der Unterstützung der [Crowdin](http://crowdin.net/project/cordova)eine Übersetzung und Lokalisierung-Management-Plattform können Übersetzer einloggen, um die einfach zu bedienende Werkzeuge und bieten so viel oder so wenig Übersetzung Unterstützung, wie sie möchten. Wenn Sie, eine andere Sprache bitte Cordova zu unterstützen und einen Beitrag leisten wissen. http://crowdin.net/project/cordova. Einige bewährte Methoden zur Nutzung des Crowdin-Tools finden Sie in unserer Wiki-http://wiki.apache.org/cordova/CordovaTranslations.

Cordova Sprache Administratoren, vergessen Sie nicht folgende Schritte aus:

**1. config.json**

Für jede Sprache und Version gibt es eine `config.json` , die den Namen der Sprache und Zusammenführen von Dateien definiert.

**2. Anpassen der HTML-Vorlage**

Jede Sprache kann die Standard-Vorlage in `Vorlage/Docs/Sprache` überschreiben..

### Redaktionelle Richtlinien

Finden Sie auf Sprache und Verwendung in der Datei `STYLEGUIDE.md` Richtlinien.

## Generierung von Dokumentation mit Node.js

Jetzt konnte die Dokumentation mit Node.js entweder auf Windows oder Linux-Rechner ausgeführt werden.

    $ rm -r tmp public      # Clear out old docs
    $ ./bin/genjs           # compile all docs
    $ ./bin/genjs en dev    # compile English dev docs
    $ ./bin/genjs ru dev    # compile Russian dev docs
    $ ./bin/genjs es 3.5.0  # compile Spanish 3.5.0 docs


### Einrichten von Node.js

  1. Gehen Sie auf Node.JS [-Downloadseite](http://nodejs.org/download/)
  2. Downloaden Sie und installieren Sie Paket für Ihr Betriebssystem.
  3. Kasse dieses mit Git Repository

        git clone https://github.com/apache/cordova-docs


  4. Abhängigkeiten zu installieren. In der Wurzel der geklonten Cordova-Docs-Ordner ausführen

        npm install


  5. Jetzt können Sie in der Lage, zur Erstellung von Dokumentation lokal.

### Schnelle Vorschau

Wenn Sie kleinere Bearbeitungen vornehmen, ist es normalerweise sicher einfach die bearbeitete von Markdown in HTML gerendert. Viele Code-Editoren haben Plugins Markdown für HTML zu rendern, und es gibt eine Handvoll [guter](http://dillinger.io/) online-Redaktion.

Derzeit sind ein Node.JS Skript und [JoDoc-Js](https://github.com/kant2002/jodoc-js) zum Generieren von HTML-Dokumentation.

## Erzeugen einer Version Release

Es gibt eine Rake-Aufgabe und die Version, das Versionsverzeichnis zu generieren und aktualisieren die Rand-Dokumentation.

    # generate version 4.1.0 for english.
    .\bin\incrementversion en 4.1.0
