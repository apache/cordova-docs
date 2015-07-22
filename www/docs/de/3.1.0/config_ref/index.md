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

title: Die Datei config.xml
---

# Die Datei config.xml

Zahlreiche Aspekte des Verhaltens einer app können mit einer globalen Konfigurationsdatei `config.xml` gesteuert werden, welche sich in der obersten Ebene des Web Asset Verzeichnisses zusammen mit der app-Homepage befindet. Diese plattformunabhängig XML-Datei wird basierend auf der W3C [Verpackt von Web-Anwendungen (Widgets)][1] Spezifikation formatiert, und erweitert, um die Kern-Cordova-API-Funktionen, Plugins und Plattform-spezifischen Einstellungen angeben.

 [1]: http://www.w3.org/TR/widgets/

Für Projekte, die mit dem Cordova-CLI (beschrieben in Die Kommandozeilen-Schnittstelle) erstellt wurden, finden Sie diese [Datei](../cordova/file/fileobj/fileobj.html) im `www` Verzeichnis der obersten Ebene. Mit dem CLI zum Erstellen eines Projekts regeneriert Versionen dieser [Datei](../cordova/file/fileobj/fileobj.html) in verschiedenen Unterverzeichnissen innerhalb `platforms` . Wenn Sie die CLI zum Erstellen eines Projekts, aber dann verlagern Ihren Workflow auf ein SDK verwenden, dient die Plattform-spezifische [Datei](../cordova/file/fileobj/fileobj.html) als Quelle.

Dieser Abschnitt beschreibt globale und Cross-Plattform-Konfigurationsoptionen. Finden Sie in den folgenden Abschnitten für Plattform-spezifische Optionen:

*   [iOS Konfiguration](../guide/platforms/ios/config.html)
*   Android Konfiguration
*   BlackBerry Konfiguration

Neben der verschiedenen Konfigurationsoptionen unten können Sie auch eine Anwendung Kernsatz von Bildern für jede Zielplattform konfigurieren. Weitere Informationen finden Sie unter [Symbole und Splash-Screens](images.html).

## Kern-Konfigurationselemente

In diesem Beispiel wird den Standardwert `config.xml` erzeugt durch der CLI `create` Befehl, beschrieben in der Command-Line Interface:

        <widget id="com.example.hello" version="0.0.1">
            <name>HelloWorld</name>
            <description>
                A sample Apache Cordova application that responds to the deviceready event.
            </description>
            <author email="dev@callback.apache.org" href="http://cordova.io">
                Apache Cordova Team
            </author>
            <content src="index.html" />
            <access origin="*" />
            <preference name="Fullscreen" value="true" />
            <preference name="WebViewBounce" value="true" />
        </widget>
    

<!-- QUERY: is WebViewBounce superseded by DisallowOverscroll? -->

Die folgenden Konfigurationselemente in der obersten Ebene angezeigt `config.xml` [Datei](../cordova/file/fileobj/fileobj.html) und werden auf allen unterstützten Cordova-Plattformen unterstützt:

*   Die `<widget>` des Elements `id` Attribut bietet die app-Reverse-Domänen-ID, und der `version` seine vollständige Versionsnummer in Major/Minor/Patch-Notation ausgedrückt.

*   Die `<name>` Element gibt die app formalen Namen, wie er auf home-Bildschirm des Geräts und im app-Store-Schnittstellen erscheint.

*   Die `<description>` und `<author>` Elemente geben, [Metadaten](../cordova/file/metadata/metadata.html) und Kontaktinformationen, die im app-Shop-Angebote angezeigt werden kann.

*   Der optionale `<content>` -Element definiert die Anwendung Startseite in der obersten Ebene Webverzeichnis Vermögenswerte. Der Standardwert ist `index.html` , die üblicherweise in einem Projekt angezeigt wird, ist der obersten Ebene `www` Verzeichnis.

*   `<access>`Elemente definieren den Satz der externen Domänen, die, denen die app erlaubt ist, zu kommunizieren. Der Standardwert, der oben gezeigten ermöglicht es, jeden beliebigen Server zugreifen. Finden Sie im Domain-Whitelist-Guide für Details.

*   Die `<preference>` Tag stellt verschiedene Optionen als Paare von `name` / `value` Attribute. Jede Vorliebe `name` ist case-insensitive. Viele Einstellungen sind nur für bestimmte Plattformen, wie oben auf dieser Seite aufgeführt. In den folgenden Abschnitten beschreiben die Einstellungen, die für mehrere Plattformen gelten.

## Globale Voreinstellungen

Die folgenden globalen Einstellungen gelten für alle Plattformen:

*   `Fullscreen`können Sie die Statusleiste am oberen Bildschirmrand ausblenden. Der Standardwert ist `false` . Beispiel:
    
        <preference name="Fullscreen" value="true" />
        

*   `Orientation`können Sie den lock Orientierung und verhindert, dass die Schnittstelle rotierend in Reaktion auf Änderungen in der Ausrichtung. Mögliche Werte sind `default` , `landscape` , oder `portrait` . Beispiel:
    
        <preference name="Orientation" value="landscape" />
        
    
    **Hinweis:** Die `default` Wert bedeutet *sowohl* quer- und Hochformat Ausrichtungen sind aktiviert. Wenn Sie Standardeinstellungen für jede Plattform (in der Regel Porträt nur) verwenden möchten, lassen Sie dieses Tag von der `config.xml` Datei. Verwendet außerdem BlackBerry `auto` anstelle von `default` in der `config.xml` Datei. Bei Angabe von `default` in der globalen `config.xml` , es übersetzt `auto` in den BlackBerry-Build.

## Multi-Plattform-Einstellungen

Die folgenden Einstellungen gelten für mehrere Plattformen, jedoch nicht auf alle von ihnen:

*   `DisallowOverscroll`(Boolean, wird standardmäßig auf `false` ): Legen Sie auf `true` Wenn Sie nicht möchten, dass die Schnittstelle jedes Feedback anzeigen, wenn Benutzer die Anfang oder Ende des Inhalts einen Bildlauf durchführen.
    
        <preference name="DisallowOverscroll" value="true"/>
        
    
    Gilt für Android und iOS. Auf iOS, Overscroll Gesten Ursache Inhalt zurück an seine ursprüngliche Position gut zu machen. Auf Android produzieren sie ein subtiler Glüheffekt am oberen oder unteren Rand des Inhalts.

*   `BackgroundColor`: Die app-Hintergrundfarbe festgelegt. Unterstützt eine 4-Byte hex-Wert, mit dem ersten Byte, die den Alphakanal und standard-RGB-Werte für die folgenden drei Bytes. In diesem Beispiel gibt blau:
    
        <preference name="BackgroundColor" value="0xff0000ff"/>
        
    
    Gilt für Android und BlackBerry. Überschreibt CSS anderweitig verfügbar auf *allen* Plattformen, zum Beispiel:`body{background-color:blue}`.

*   `HideKeyboardFormAccessoryBar`(Boolean, wird standardmäßig auf `false` ): Legen Sie auf `true` die zusätzliche Symbolleiste ausblenden, die oberhalb der Tastatur, wodurch angezeigt wird Benutzer aus einem Formulareingabe zum anderen navigieren.
    
        <preference name="HideKeyboardFormAccessoryBar" value="true"/>
        
    
    Gilt für iOS und BlackBerry.
    
    **Hinweis:** Für BlackBerry, gültige Werte sind `enable` oder`disable`.

## Die `<feature>` Element

Wenn Sie die CLI verwenden, um Anwendungen zu erstellen, verwenden Sie den `plugin` Befehl [Gerät](../cordova/device/device.html) APIs zu aktivieren. Dies ändert jedoch nicht die Top-Level- `config.xml` [Datei](../cordova/file/fileobj/fileobj.html), so dass die `<feature>` Element gilt nicht für Ihren Workflow. Wenn Sie direkt in ein SDK arbeiten und mit der Plattform-spezifischen `config.xml` [Datei](../cordova/file/fileobj/fileobj.html) als Quelle, Sie verwenden die `<feature>` Tag auf Device-Ebene APIs und externe Plugins aktivieren. Sie werden in der Regel in dieser Form:

        <feature name="Plugin" value="PluginID" />
    

Sie erscheinen oft mit benutzerdefinierten Werte in plattformspezifischen `config.xml` Dateien. Hier ist beispielsweise die Device-API für Android Projekte angeben:

        <feature name="Device">
            <param name="android-package" value="org.apache.cordova.device.Device" />
        </feature>
    

Hier ist, wie das Element für iOS-Projekte wird angezeigt:

        <feature name="Device">
            <param name="ios-package" value="CDVDevice" />
        </feature>
    

Finden Sie die API-Referenz für Details zu einzelnen Funktionen angeben. Finden Sie im Plugin-Entwicklung-Handbuch weitere Informationen auf Plugins.