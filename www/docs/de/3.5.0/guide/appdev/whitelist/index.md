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

# Whitelist-Guide

Domain-Whitelist ist ein Sicherheitsmodell, das den Zugriff steuert an externe Domänen, auf die Sie Anwendung keine Kontrolle hat. Cordova des Standardsicherheitsrichtlinien ermöglicht Zugriff auf jeder Website. Sie sollten vor dem Umzug Ihre Anwendung auf die Produktion, eine Whitelist zu formulieren und ermöglichen den Zugriff auf bestimmte Netzwerk-Domains und Sub-Domains.

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

## Amazon Fire OS Whitelisting

Plattform-spezifische Whitelisting Regeln findet man in`res/xml/config.xml`.

## Android Whitelisting

Plattform-spezifische Whitelisting Regeln findet man in`res/xml/config.xml`.

**Hinweis**: auf Android 2.3 und vor dem Domain-Whitelist nur für funktioniert `href` Hyperlinks nicht verwiesen Ressourcen wie Bilder und Scripte. Ergreifen Sie, um die Skripte von injiziert in die Anwendung zu vermeiden.

Navigieren zu nicht zugelassenen Domains über `href` Hyperlink führt dazu, dass die Seite nicht in der Anwendung, sondern im Standardbrowser geöffnet. (Vergleichen Sie dies mit der iOS-Verhalten, die unten aufgeführten.)

## iOS Whitelisting

Die Plattform Whitelisting Regeln befinden sich im Verzeichnis Anwendung mit Namen `config.xml` Datei.

Herkunft angegeben ohne Protokoll, wie z. B. `www.apache.org` statt `http://www.apache.org` , standardmäßig auf alle die `http` , `https` , `ftp` , und `ftps` Systeme.

Platzhalter auf der iOS-Plattform sind flexibler als in der Spezifikation des [W3C Widget Zugang][1] . Beispielsweise die folgenden greift alle Subdomains und Domänen der obersten Ebene wie `.com` und `.net` :

        <access origin="*.google.*" />
    

Im Gegensatz zu der Android-Plattform oben, navigieren zu nicht zugelassenen Domains über `href` Hyperlink auf iOS verhindert, dass die Seite überhaupt zu öffnen.

## BlackBerry 10 Whitelisting

Die Whitelist-Regeln finden sich in`www/config.xml`.

BlackBerry 10 Verwendung von Platzhaltern unterscheidet sich von anderen Plattformen auf zwei Arten:

*   Alle Inhalte erreichbar `XMLHttpRequest` ausdrücklich deklariert werden müssen. Festlegen von `origin="*"` funktioniert nicht in diesem Fall. Alternativ alle Web-Sicherheit kann deaktiviert werden mit der `WebSecurity` bevorzugt in der BlackBerry Configuration beschrieben:
    
        <preference name="websecurity" value="disable" />
        

*   Als Alternative zur Einstellung `*.domain` , legen Sie ein zusätzliches `subdomains` -Attribut auf `true` . Es sollte festgelegt werden, um `false` standardmäßig. Beispielsweise Folgendes ermöglicht den Zugriff auf `google.com` , `maps.google.com` , und `docs.google.com` :
    
        <access origin="http://google.com" subdomains="true" />
        
    
    Die folgenden Narrows Zugang zu `google.com` :
    
        <access origin="http://google.com" subdomains="false" />
        
    
    Geben Sie Zugriff auf alle Domänen, einschließlich der lokales `file://` Protokoll:
    
    <access origin="*" subdomains="true" />

(Weitere Informationen zur Unterstützung, siehe BlackBerry Dokumentation auf dem [Access-element][8].)

 [8]: https://developer.blackberry.com/html5/documentation/ww_developing/Access_element_834677_11.html

## iOS Änderungen in 3.1.0

Vor Version 3.1.0 enthalten Cordova-iOS einige nicht-standard-Erweiterungen für die Domäne Whilelisting Regelung von anderen Cordova-Plattformen unterstützt. Ab 3.1.0 entspricht die iOS-Whitelist jetzt die Ressource-Whitelist-Syntax an der Spitze dieses Dokuments beschrieben. Wenn Sie ein von Pre-3.1.0 Upgrade und Sie wurden diese Erweiterungen verwenden, müssen Sie möglicherweise ändern Ihre `config.xml` Datei um Whitelisting dieselben Ressourcen wie bisher weiter.

Insbesondere diese Muster müssen aktualisiert werden:

*   `apache.org`(kein Protokoll): dieser zuvor übereinstimmen würde, `http` , `https` , `ftp` , und `ftps` Protokolle. Ändern Sie in " `*://apache.org/*` " gehören alle Protokolle oder eine Zeile für jedes Protokoll unterstützt werden müssen.

*   `http://apache.*`(Wildcard am Ende der Domäne): Dies würde zuvor übereinstimmen, alle top-level-Domains, einschließlich alle mögliche zwei-Buchstaben-TLDs (aber nicht nützliche Domänen mag. co.uk). Zusätzlich eine Zeile für jede TLD, die Sie eigentlich kontrollieren und müssen auf die Whitelist.

*   `h*t*://ap*he.o*g`(Platzhalter für zufällige Buchstaben fehlen): Diese werden nicht mehr unterstützt; Ändern Sie, um eine Zeile für jede Domäne und Protokoll, das Sie wirklich auf die Whitelist benötigen.

## Windows Phone Whitelisting

Die Whitelist-Regeln für Windows Phone 7 und 8 befinden sich in der app `config.xml` Datei.

## Tizen Whitelisting

Whitelisting Regeln finden sich in der app `config.xml` Datei. Die Plattform basiert auf der gleichen `subdomains` Attribut als die BlackBerry-Plattform. (Weitere Informationen zur Unterstützung, siehe Tizens Dokumentation für das [Access-element][9].)

 [9]: https://developer.tizen.org/help/index.jsp?topic=%2Forg.tizen.web.appprogramming%2Fhtml%2Fide_sdk_tools%2Fconfig_editor_w3celements.htm