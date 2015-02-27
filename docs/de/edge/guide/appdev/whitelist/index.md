* * *

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

## under the License.

# Whitelist-Guide

Domain-Whitelist ist ein Sicherheitsmodell, das den Zugriff steuert an externe Domänen, die auf die Anwendung keine Kontrolle hat. Cordova des Standardsicherheitsrichtlinien ermöglicht Zugriff auf jeder Website. Sie sollten vor dem Umzug Ihre Anwendung auf die Produktion, eine Whitelist zu formulieren und ermöglichen den Zugriff auf bestimmte Netzwerk-Domains und Sub-Domains.

Cordova entspricht der [W3C Widget Access][1] -Spezifikation, die abhängig von der `<access>` Element innerhalb der app `config.xml` Datei Netzwerkzugriff auf bestimmte Domänen aktivieren. Für Projekte, die auf der CLI-Workflow in der Command-Line Interface beschrieben, befindet sich diese Datei im Wurzelverzeichnis des Projekts. Sonst sind die Standorte für plattformspezifische Entwicklungswege, in den folgenden Abschnitten aufgeführt. (Siehe die verschiedenen Plattform-Leitfäden für weitere Informationen auf jeder Plattform.)

 [1]: http://www.w3.org/TR/widgets-access/

Die folgenden Beispiele veranschaulichen die Whitelist-Syntax:

*   Zugang zu [google.com][2]:
    
        <access origin="http://google.com" />
        

*   Zugriff auf die sicheren [google.com][3] ( `https://` ):
    
        <access origin="https://google.com" />
        

*   Zugriff auf die Subdomain [maps.google.com][4]:
    
        <access origin="http://maps.google.com" />
        

*   Zugriff auf alle Subdomains von [google.com][2], z. B. [mail.google.com][5] und [docs.google.com][6]:
    
        <access origin="http://*.google.com" />
        

*   Zugriff auf *alle* Domänen, z. B. [Google.de][2] und [developer.mozilla.org][7]:
    
        <access origin="*" />
        
    
    Dies ist der Standardwert für neu erstellte CLI-Projekte.

 [2]: http://google.com
 [3]: https://google.com
 [4]: http://maps.google.com
 [5]: http://mail.google.com
 [6]: http://docs.google.com
 [7]: http://developer.mozilla.org

Beachten Sie, dass einige Webseiten automatisch auf deren Homepage zu einer anderen Url, z. B. mit Https-Protokoll oder eine landesspezifische Domain umleiten können. Zum Beispiel http://www.google.com leitet sich für die Nutzung von SSL/TLS bei https://www.google.com, und dann kann weiter leiten in eine geography-Instanz wie https://www.google.co.uk. Solche Szenarien erfordern veränderte oder zusätzliche Whitelist-Einträge über Ihre ersten Bedarfs. Bitte berücksichtigen Sie dies, wie Sie Ihre Whitelist erstellen.

Beachten Sie, dass die weiße Liste nur für die wichtigsten Cordova Webview gilt und nicht für eine InAppBrowser Webview oder Öffnung Links in der System-Web-Browser gilt.

## Amazon Fire OS Whitelisting

Plattformspezifische Whitelisting-Regeln werden in `res/xml/config.xml` gefunden.

## Android Whitelisting

Plattformspezifische Whitelisting-Regeln werden in `res/xml/config.xml` gefunden.

**Hinweis**: auf Android 2.3 und früher Domäne Whitelisting funktioniert nur für `Href`-Links, Ressourcen wie Bilder und Scripte nicht verwiesen. Ergreifen Sie, um die Skripte von injiziert in die Anwendung zu vermeiden.

**Hinweis**: um zu verhindern, dass externe URLs wie `mailto:` in der Webview Cordova ab Cordova 3.6.0, öffnen angeben `Herkunft = "*"` wird implizit Regeln für http- und Https-Protokolle hinzufügen. Wenn Sie Zugriff auf zusätzliche benutzerdefinierte Protokolle benötigen, sollte dann Sie auch sie ausdrücklich auf die Whitelist hinzufügen. Auch "Externe Anwendung Whitelist" weiter unten finden Sie weitere Informationen zum Starten von externer Anwendungen durch URL.

**Hinweis**: einige Netzwerkanfragen gehen nicht durch die Cordova Whitelist. Dazu gehören < Video > und < Audio > Resouces WebSocket-Verbindungen (auf Android 4.4 +) und eventuell mit anderen nicht-http-Anforderungen. Unter Android 4.4 + können Sie einen [CSP][8]-Header in Ihre HTML-Dokumente Zugriff auf diese Ressourcen beschränkt aufnehmen. Unter älteren Versionen von Android kann es nicht möglich, sie zu beschränken sein.

 [8]: https://developer.mozilla.org/en-US/docs/Web/Security/CSP/Introducing_Content_Security_Policy

### Externe Anwendung Whitelist

Cordova 3.6.0 führt eine zweite Whitelist zur Einschränkung der URLs zulässig sind, externe Anwendungen starten. In früheren Versionen von Cordova, alle nicht-http-URLs wie `Mailto:`, `Geo:`, `sms:` und `intent`, durften implizit das Ziel eines < a >-Tags sein. Aufgrund des Potenzials für eine Anwendung auf Informationen zum Speicherverlust wenn eine XSS-Schwachstelle erlaubt einen Angreifer beliebige Verknüpfungen erstellen muss diese URLs Whitelisted, ab Cordova 3.6.0.

Damit ein URL-Muster, eine externe Anwendung zu starten, verwenden Sie einen < Zugang >-Tag in der Datei `"config.xml"` mit dem `launch-external`-Attributsatz.

Beispiele:

*   Links zum Senden von SMS-Nachrichten zu ermöglichen:
    
        <access origin="sms:*" launch-external="yes" />
        

*   Links zu Maps öffnen zu ermöglichen:
    
        <access origin="geo:*" launch-external="yes" />
        

*   Links zu "example.com" in einem externen Browser öffnen können:
    
        <access origin="http://example.com/*" launch-external="yes" />
        

*   Alle nicht-weißen Websites in einem externen Browser öffnen zu können: (Dies ist dasselbe wie das vorherige Verhalten für nicht-weißen URLs)
    
        <access origin="http://*" launch-external="yes" />
        <access origin="https://*" launch-external="yes" />
        

*   Ermöglicht Zugriff auf alle URLs, die Rückkehr zur Politik Cordova 3.5.0 (nicht empfohlen):
    
        <access origin="*" launch-external="yes" />
        

Beim Navigieren zu einer URL aus Ihrer Anwendung die Interal Whitelist wird zuerst getestet, und wird die URL nicht Whitelisted gibt, dann die externe Whitelist wird getestet. Dies bedeutet, dass jeder `http:` oder `https:` URLs, welche sowohl Whitelists entsprechen innerhalb der Cordova-Anwendung geöffnet wird, anstatt den externen Browser starten.

## iOS Whitelisting

Die Plattform Whitelisting Regeln befinden sich im Verzeichnis Anwendung Namen Datei `config.xml`.

Herkunft angegeben, ohne ein Protokoll wie `www.apache.org` anstatt `http://www.apache.org`, Standard aller `http`, `Https`, `ftp` und `ftps`-Systeme.

Platzhalter auf der iOS-Plattform sind flexibler als in der Spezifikation des [W3C Widget Zugang][1]. Beispielsweise die folgenden greift alle Subdomains und Top-Level Domains wie `.com` und `.net`:

        <access origin="*.google.*" />
    

Im Gegensatz zu der Android-Plattform oben, navigieren zu nicht zugelassenen Domains über `href` verhindert Hyperlink auf iOS die Seite überhaupt nicht öffnen.

## BlackBerry 10 Whitelisting

Die Whitelist-Regeln werden in `www/config.xml` gefunden.

BlackBerry 10 Verwendung von Platzhaltern unterscheidet sich von anderen Plattformen auf zwei Arten:

*   Alle Inhalte erreichbar `XMLHttpRequest` müssen explizit deklariert werden. Festlegen von `origin="*"` funktioniert nicht in diesem Fall. Alternativ alle Web-Sicherheit kann deaktiviert werden mit der `WebSecurity` bevorzugt in der BlackBerry Configuration beschrieben:
    
        <preference name="websecurity" value="disable" />
        

*   Als Alternative zur Einstellung `*.domain` , legen Sie ein zusätzliches `subdomains` -Attribut auf `true` . Es sollte festgelegt werden, um `false` standardmäßig. Beispielsweise Folgendes ermöglicht den Zugriff auf `google.com` , `maps.google.com` , und `docs.google.com` :
    
        <access origin="http://google.com" subdomains="true" />
        
    
    Die folgenden Narrows Zugang zu `google.com` :
    
        <access origin="http://google.com" subdomains="false" />
        
    
    Geben Sie Zugriff auf alle Domänen, einschließlich der lokales `file://` Protokoll:
    
    <access origin="*" subdomains="true" />

(Weitere Informationen zum Support finden Sie BlackBerry Dokumentation auf dem [access element][9].)

 [9]: https://developer.blackberry.com/html5/documentation/ww_developing/Access_element_834677_11.html

## Firefox OS

In Firefox-OS gibt es kein Konzept für Whitelisting eine bestimmte Domäne. Stattdessen gibt es eine Ausnahmegenehmigung, genannt [SystemXHR][10]. Besteht die Notwendigkeit dieser Berechtigung `"config.xml"` hinzu:

 [10]: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest#Permissions

    <platform name="firefoxos">
        <permission name="systemXHR" privileged="true" description="load data from server" />
    </platform>
    

Das `XMLHttpRequest`-Objekt muss mit zwei Parametern `mozAnon` und `mozSystem` instanziiert werden:

    var request = new XMLHttpRequest({
        mozAnon: true,
        mozSystem: true});
    

Diese Lösung ist transparent, so gibt es keinen Unterschied für andere Plattformen.

## iOS Änderungen in 3.1.0

Vor Version 3.1.0 enthalten Cordova-iOS einige nicht-standard-Erweiterungen für die Domäne Whilelisting Regelung von anderen Cordova-Plattformen unterstützt. Ab 3.1.0 entspricht die iOS-Whitelist jetzt die Ressource-Whitelist-Syntax an der Spitze dieses Dokuments beschrieben. Wenn Sie ein von Pre-3.1.0 Upgrade und Sie wurden diese Erweiterungen verwenden, müssen Sie der Datei `config.xml` ändern um Whitelisting weiter den gleichen Satz von Ressourcen wie vor.

Insbesondere diese Muster müssen aktualisiert werden:

*   " `apache.org` " (kein Protokoll): dieser zuvor übereinstimmen würde, `http` , `https` , `ftp` , und `ftps` Protokolle. Ändern Sie in " `*://apache.org/*` " gehören alle Protokolle oder eine Zeile für jedes Protokoll unterstützt werden müssen.

*   " `http://apache.*` " (Wildcard am Ende der Domäne): Dies würde zuvor übereinstimmen, alle top-level-Domains, einschließlich alle mögliche zwei-Buchstaben-TLDs (aber nicht nützliche Domänen mag. co.uk). Zusätzlich eine Zeile für jede TLD, die Sie eigentlich kontrollieren und müssen auf die Whitelist.

*   " `h*t*://ap*he.o*g` " (Platzhalter für zufällige Buchstaben fehlen): Diese werden nicht mehr unterstützt; Änderung eine Zeile für jede Domäne zu Protokoll, dass Sie tatsächlich auf die Whitelist benötigen.

## Windows Phone Whitelisting

Die Whitelist-Regeln für Windows Phone 8 befinden sich in der app Datei `config.xml`.

## Tizen Whitelisting

Whitelisting-Regeln werden in der app `config.xml`-Datei gefunden. Die Plattform basiert auf dem gleichen `subdomains`-Attribut als die BlackBerry-Plattform. (Weitere Informationen zur Unterstützung finden Sie Tizens Dokumentation für das [access element][11].)

 [11]: https://developer.tizen.org/help/index.jsp?topic=%2Forg.tizen.web.appprogramming%2Fhtml%2Fide_sdk_tools%2Fconfig_editor_w3celements.htm