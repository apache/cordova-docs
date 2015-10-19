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

## Übersicht

Ressource Whitelisting ist ein Sicherheitsmodell, das steuert Zugang zu externen Netzwerk-Ressourcen, wie z. B. `http://google.com` . Apache Cordova Standardsicherheitsrichtlinien ermöglicht den Zugriff auf eine Ressource auf einer beliebigen Website im Internet. Bevor Sie Ihre Anwendung auf die Produktion verschieben, sollten Sie überprüfen ihrer Whitelist und deklarieren Zugang zu bestimmten Netzwerk-Domains und Sub-Domains.

## Spezifikation

Domäne Whitelisting legt den Grundstein für die Spezifikation des [W3C Widget Zugang][1] . In der Widget-Zugang-Spezifikation die `<access>` Element wird verwendet, um Zugriff auf bestimmte Netzwerkressourcen zu deklarieren. Apache Cordova erweitert dieses Konzept um Whitelisting der einzelnen Netzwerk-Ressourcen (URLs) zu ermöglichen. Apache Cordova wird in Zukunft die Plattform-Whitelisting-Implementierungen abstrahieren. Jedoch vorerst implementiert jede Plattform eine eigene Ressource oder Domäne Whitelisting. Die Unterschiede zwischen Plattform-Implementierungen werden später in diesem Dokument beschrieben.

 [1]: http://www.w3.org/TR/widgets-access/

Das allgemeine Format für Whitelist-Einträge folgt der "[Mustervergleich][2]" Spezifikation für Google Chrome verpackt Apps. Ressourcen werden durch die URL, aber Sternchen angegeben (*) Zeichen kann als "Platzhalter" an mehreren Stellen verwendet werden, um anzuzeigen, "hier kann jeder beliebige Wert gehen". Konkrete Beispiele sind unten aufgeführt.

 [2]: http://developer.chrome.com/apps/match_patterns.html

## Syntax

Zugriff auf alle Ressourcen unter [google.com][3]:

 [3]: http://google.com

    http://google.com/*
    

Zugriff auf alle Ressourcen auf die sichere [google.com][4] ( `https://` ):

 [4]: https://google.com

    https://Google.com/ *
    

Zugriff auf die bestimmte Subdomäne [maps.google.com][5]:

 [5]: http://maps.google.com

    http://maps.google.com/*
    

Zugriff auf alle Sub-Domains auf [google.com][3] (z.B. [mail.google.com][6] und [docs.google.com][7]):

 [6]: http://mail.google.com
 [7]: http://docs.google.com

    http://*.google.com/*
    

Zugriff auf alle Ressourcen auf [www.google.com][8] unter dem Pfad "/ mobile":

 [8]: http://www.google.com

    http://www.google.com/mobile/*
    

Zugang zu [google.com][3] auf beliebige Protokolle (z. B. HTTP, HTTPS, FTP, etc.):

    *://google.com/*
    

Zugriff auf alle Ressourcen im Internet (z.B. [google.com][3] und [developer.mozilla.org][9]):

 [9]: http://developer.mozilla.org

    *
    

## Android

### Informationen

Die Whitelist-Regeln finden sich in `res/xml/config.xml` und mit dem Element deklariert`<access origin="..." />`.

Android unterstützt Whitelisting-Syntax.

### Syntax

Zugang zu [google.com][3]:

    <access origin="http://google.com/*" />
    

## BlackBerry 10

### Informationen

Die Whitelist-Regeln finden sich in `www/config.xml` und mit dem Element deklariert`<access origin="..." />`.

BlackBerry 10 behandelt Platzhalter anders als andere Plattformen auf zwei Arten:

1) Von XMLHttpRequest abgerufene Inhalte muss ausdrücklich deklariert werden. Herkunft = "*" wird nicht für diesen Anwendungsfall respektiert werden. Alternativ kann alle Web-Sicherheit mit einer Vorliebe deaktiviert werden.

2) Subdomains = "true" kann anstelle von verwendet werden "* .domain"

### Syntax

Zugang zu [google.com][3]:

    <access origin="http://google.com" subdomains="false" />
    

Zugriff auf [maps.google.com][5]:

    <access origin="http://maps.google.com" subdomains="false" />
    

Zugriff auf alle Sub-Domains auf [google.com][3]:

    <access origin="http://google.com" subdomains="true" />
    

Zugriff auf alle Domänen, einschließlich `file://` Protokoll:

    <access origin="*" subdomains="true" />
    

Deaktivieren Sie alle Web-Sicherheit:

    <preference name="websecurity" value="disable" />
    

## iOS

### Informationen

Die Whitelist-Regeln finden sich in `AppName/config.xml` und mit dem Element deklariert`<access origin="..." />`.

iOS unterstützt Whitelisting-Syntax.

### In 3.1.0 geändert:

Vor Version 3.1.0 enthalten Cordova-iOS einige nicht-standard-Erweiterungen für die Domäne Whilelisting Regelung von anderen Cordova-Plattformen unterstützt. Ab 3.1.0 entspricht die iOS-Whitelist jetzt die Ressource-Whitelist-Syntax an der Spitze dieses Dokuments beschrieben. Wenn Sie ein von Pre-3.1.0 Upgrade und Sie wurden diese Erweiterungen verwenden, müssen Sie möglicherweise ändern Ihre `config.xml` [Datei](../../../cordova/file/fileobj/fileobj.html) um Whitelisting dieselben Ressourcen wie bisher weiter.

Insbesondere diese Muster müssen aktualisiert werden:

*   " `apache.org` " (kein Protokoll): dieser zuvor übereinstimmen würde, `http` , `https` , `ftp` , und `ftps` Protokolle. Ändern Sie in " `*://apache.org/*` " gehören alle Protokolle oder eine Zeile für jedes Protokoll unterstützt werden müssen.

*   " `http://apache.*` " (Wildcard am Ende der Domäne): Dies würde zuvor übereinstimmen, alle top-level-Domains, einschließlich alle mögliche zwei-Buchstaben-TLDs (aber nicht nützliche Domänen mag. co.uk). Zusätzlich eine Zeile für jede TLD, die Sie eigentlich kontrollieren und müssen auf die Whitelist.

*   " `h*t*://ap*he.o*g` " (Platzhalter für zufällige Buchstaben fehlen): Diese werden nicht mehr unterstützt; Änderung eine Zeile für jede Domäne zu Protokoll, dass Sie tatsächlich auf die Whitelist benötigen.

### Syntax

Zugang zu [google.com][3]:

    <access origin="http://google.com/*" />
    

## Windows Phone (7 & 8)

Die Whitelist-Regeln finden sich in `config.xml` und mit dem Element deklariert`<access origin="..." />`.

### Syntax

Zugang zu [google.com][3]:

    <access origin="http://google.com" />
    

## Tizen

### Informationen

Stammverzeichnis der Anwendung `config.xml` [Datei](../../../cordova/file/fileobj/fileobj.html) gibt Whitelisting Domänenregeln, mit dem `<access origin="..." />` Element. Eine vollständige Referenz finden Sie in der [Dokumentation Tizen zugreifen auf externe Netzwerkressourcen][10].

 [10]: https://developer.tizen.org/help/topic/org.tizen.help.gs/Creating%20a%20Project.html?path=0_1_1_4#8814682_CreatingaProject-AccessingExternalNetworkResources

### Syntax

Zugang zu [google.com][3]:

    <access origin="http://google.com" subdomains="false" />
    

Zugriff auf die sicheren [google.com][4] ( `https://` ):

    <access origin="https://google.com" subdomains="false" />
    

Zugriff auf alle Sub-Domains auf [google.com][3]:

    <access origin="http://google.com" subdomains="true" />
    

Zugriff auf alle Domänen, einschließlich `file://` Protokoll:

    <access origin="*" subdomains="true" />