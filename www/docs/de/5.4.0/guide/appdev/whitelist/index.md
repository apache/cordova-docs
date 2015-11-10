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

title: Whitelist-Guide
---

# Whitelist-Guide

Domain-Whitelist ist ein Sicherheitsmodell, das den Zugriff steuert an externe Domänen, die auf die Anwendung keine Kontrolle hat. Cordova bietet eine konfigurierbare Sicherheitspolitik definieren, welche externen Websites zugegriffen werden können. Standardmäßig werden neue apps so konfiguriert, dass Zugriff auf jeder Website. Sie sollten vor dem Umzug Ihre Anwendung auf die Produktion, eine Whitelist zu formulieren und ermöglichen den Zugriff auf bestimmte Netzwerk-Domains und Sub-Domains.

Für Android und iOS (Stand ihren 4,0 Releases) ist Cordovas Sicherheitspolitik erweiterbar über eine Plugin-Schnittstelle. Ihre Anwendung sollte [Cordova-Plugin-Whitelist][1], verwenden, wie es höhere Sicherheit und Konfigurierbarkeit als frühere Versionen von Cordova bietet. Es ist, zwar möglich, eigene Whitelist-Plugin implementieren empfiehlt es sich nicht, wenn Ihre app sehr spezifischen Sicherheitsanforderungen Politik hat. Finden Sie die [Cordova-Plugin-Whitelist][1] für Informationen zur Verwendung und Konfiguration.

 [1]: https://github.com/apache/cordova-plugin-whitelist

Für andere Plattformen entspricht Cordova der [W3C Widget Zugang][2]-Spezifikation, die auf die `< access >`-Element innerhalb `der app Datei config.XML aktivieren Netzwerkzugriff auf bestimmte Domänen` angewiesen ist. Für Projekte, die auf der CLI-Workflow in der Command-Line Interface beschrieben, befindet sich diese Datei im Wurzelverzeichnis des Projekts. Sonst sind die Standorte für plattformspezifische Entwicklungswege, in den folgenden Abschnitten aufgeführt. (Siehe die verschiedenen Plattform-Leitfäden für weitere Informationen auf jeder Plattform.)

 [2]: http://www.w3.org/TR/widgets-access/

Die folgenden Beispiele veranschaulichen `< access >` Whitelist-Syntax:

*   Zugang zu [google.com][3]:
    
        <access origin="http://google.com" />
        

*   Zugriff auf die sicheren [google.com][4] ( `https://` ):
    
        <access origin="https://google.com" />
        

*   Zugriff auf die Subdomain [maps.google.com][5]:
    
        <access origin="http://maps.google.com" />
        

*   Zugriff auf alle Subdomains von [google.com][3], z. B. [mail.google.com][6] und [docs.google.com][7]:
    
        <access origin="http://*.google.com" />
        

*   Zugriff auf *alle* Domänen, z. B. [Google.de][3] und [developer.mozilla.org][8]:
    
        <access origin="*" />
        
    
    Dies ist der Standardwert für neu erstellte CLI-Projekte.

 [3]: http://google.com
 [4]: https://google.com
 [5]: http://maps.google.com
 [6]: http://mail.google.com
 [7]: http://docs.google.com
 [8]: http://developer.mozilla.org

Beachten Sie, dass einige Webseiten automatisch auf deren Homepage zu einer anderen Url, z. B. mit Https-Protokoll oder eine landesspezifische Domain umleiten können. Zum Beispiel http://www.google.com leitet sich für die Nutzung von SSL/TLS bei https://www.google.com, und dann kann weiter leiten in eine geography-Instanz wie https://www.google.co.uk. Solche Szenarien erfordern veränderte oder zusätzliche Whitelist-Einträge über Ihre ersten Bedarfs. Bitte berücksichtigen Sie dies, wie Sie Ihre Whitelist erstellen.

Beachten Sie, dass die weiße Liste nur für die wichtigsten Cordova Webview gilt und nicht für eine InAppBrowser Webview oder Öffnung Links in der System-Web-Browser gilt.

## Amazon Fire OS Whitelisting

Plattformspezifische Whitelisting-Regeln werden in `res/xml/config.xml` gefunden.

## Android Whitelisting

Wie oben, siehe [Cordova-Plugin-Whitelist][1] für Details. Cordova-Android vor 4.0.0 finden Sie unter älteren Versionen dieser Dokumentation.

## iOS Whitelisting

Wie oben, siehe [Cordova-Plugin-Whitelist][1] für Details. Cordova-Ios vor 4.0.0 finden Sie unter älteren Versionen dieser Dokumentation.

## BlackBerry 10 Whitelisting

Die Whitelist-Regeln werden in `www/config.xml` gefunden..

BlackBerry 10 Verwendung von Platzhaltern unterscheidet sich von anderen Plattformen auf zwei Arten:

*   Alle Inhalte erreichbar `XMLHttpRequest` muss explizit deklariert werden. Festlegen von `origin="*"` funktioniert nicht in diesem Fall. Alternativ kann die gesamte Websicherheit verwenden die `WebSecurity`-Präferenz beschrieben in [BlackBerry-Konfiguration](../../platforms/blackberry/config.html) deaktiviert werden:
    
        <preference name="websecurity" value="disable" />
        

*   Als Alternative zur Einstellung `*.domain` ein zusätzliche `Subdomains`-Attribut auf `true` festgelegt. Es sollte standardmäßig auf `false` festgelegt werden. Beispielsweise ermöglicht Folgendes den Zugriff auf `google.com` und `maps.google.com` `docs.google.com`:
    
        <access origin="http://google.com" subdomains="true" />
        
    
    Die folgenden Narrows-Zugang zu `google.com`:
    
        <access origin="http://google.com" subdomains="false" />
        
    
    Geben Sie Zugriff auf alle Domänen, einschließlich lokalen `file://` Protokoll an:
    
        <access origin="*" subdomains="true" />
        

(Weitere Informationen zum Support finden Sie BlackBerry Dokumentation auf dem [Access-element][9].)

 [9]: https://developer.blackberry.com/html5/documentation/ww_developing/Access_element_834677_11.html

## Firefox-OS

In Firefox-OS gibt es kein Konzept für Whitelisting eine bestimmte Domäne. Stattdessen gibt es eine Ausnahmegenehmigung, genannt [SystemXHR][10]. Besteht die Notwendigkeit dieser Berechtigung `"config.xml"` hinzu:

 [10]: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest#Permissions

    <platform name="firefoxos">
        <permission name="systemXHR" privileged="true" description="load data from server" />
    </platform>
    

Das `XMLHttpRequest`-Objekt muss mit zwei Parametern `MozAnon` und `MozSystem` instanziiert werden:

    var request = new XMLHttpRequest({
        mozAnon: true,
        mozSystem: true});
    

Diese Lösung ist transparent, so gibt es keinen Unterschied für andere Plattformen.

## Windows Phone Whitelisting

Die Whitelist-Regeln für Windows Phone 8 befinden sich in der app Datei `config.xml`.

## Tizen Whitelisting

Whitelisting-Regeln werden in der app-`config.xml`-Datei gefunden. Die Plattform basiert auf dem gleichen `subdomains`-Attribut als die BlackBerry-Plattform. (Weitere Informationen zur Unterstützung finden Sie Tizens Dokumentation für das [Access-element][11].)

 [11]: https://developer.tizen.org/help/index.jsp?topic=%2Forg.tizen.web.appprogramming%2Fhtml%2Fide_sdk_tools%2Fconfig_editor_w3celements.htm