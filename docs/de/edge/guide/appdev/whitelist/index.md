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

# Domain-Whitelist-Guide

## Übersicht

Domäne Whitelisting ist ein Sicherheitsmodell, das steuert Zugang zu externen Domänen, wie z. B. `http://google.com` . Apache Cordova Standardsicherheitsrichtlinien ermöglicht Zugriff auf jeder Website. Vor dem Umzug Ihre Anwendung auf die Produktion, sollten Sie überprüfen ihre Whitelist und deklarieren Zugang zu bestimmten Netzwerk-Domains und Subdomains.

## Spezifikation

Domäne Whitelisting legt den Grundstein für die Spezifikation des [W3C Widget Zugang][1] . In der Widget-Zugang-Spezifikation die `<access>` Element wird verwendet, um Zugriff auf bestimmte Netzwerkdomänen zu deklarieren. Apache Cordova wird in Zukunft die Plattform-Whitelisting-Implementierungen der Spezifikation des W3C Widget Zugang abstrahieren. Jedoch muss jede Plattform vorerst seine eigene Domäne-Whitelisting implementieren.

 [1]: http://www.w3.org/TR/widgets-access/

## Syntax

Zugang zu [google.com][2]:

 [2]: http://google.com

    http://google.com
    

Zugriff auf die sicheren [google.com][3] ( `https://` ):

 [3]: https://google.com

    https://google.com
    

Zugriff auf die Sub-Domain [maps.google.com][4]:

 [4]: http://maps.google.com

    http://maps.google.com
    

Zugriff auf alle Sub-Domains auf [google.com][2] (z.B. [mail.google.com][5] und [docs.google.com][6]):

 [5]: http://mail.google.com
 [6]: http://docs.google.com

    http://*.google.com
    

Zugriff auf alle Domänen (z.B. [google.com][2] und [developer.mozilla.org][7]):

 [7]: http://developer.mozilla.org

    *
    

## Android

### Informationen

Die Whitelist-Regeln finden sich in `res/xml/config.xml` und mit dem Element deklariert`<access origin="..." />`.

Android unterstützt Whitelisting-Syntax.

### Syntax

Zugang zu [google.com][2]:

    <access origin="http://google.com" />
    

## BlackBerry

### Informationen

Die Whitelist-Regeln finden sich in `www/config.xml` und mit dem Element deklariert`<access uri="..." />`.

Eine vollständige Referenz finden Sie in der [BlackBerry WebWorks-Access-Element Dokumentation][8].

 [8]: https://developer.blackberry.com/html5/documentation/ww_developing/Access_element_834677_11.html

### Syntax

Zugang zu [google.com][2]:

    <access uri="http://google.com" subdomains="false" />
    

Zugriff auf [maps.google.com][4]:

    <access uri="http://maps.google.com" subdomains="false" />
    

Zugriff auf alle Sub-Domains auf [google.com][2]:

    <access uri="http://google.com" subdomains="true" />
    

Zugriff auf alle Domänen, einschließlich `file://` Protokoll:

    <access uri="*" subdomains="true" />
    

## iOS

### Informationen

Die Whitelist-Regeln finden sich in `AppName/config.xml` und mit dem Element deklariert`<access origin="..." />`.

iOS unterstützt Whitelisting-Syntax.

**Hinweis:** Ursprung angegeben ohne Protokoll, wie z. B. `www.apache.org` statt `http://www.apache.org` , standardmäßig auf alle die `http` , `https` , `ftp` , und `ftps` Systeme.

### Syntax

Platzhalter auf iOS ( `*` ) sind flexibler als die [Widget-Access W3C][1] -Spezifikation.

Zugriff auf alle Subdomains und TLDs ( `.com` , `.net` , etc.):

    *.google.*
    

## Windows Phone (7 & 8)

Die Whitelist-Regeln finden sich in `config.xml` und mit dem Element deklariert`<access origin="..." />`.

Android unterstützt Whitelisting-Syntax.

### Syntax

Zugang zu [google.com][2]:

    <access origin="http://google.com" />
    

## Tizen

### Informationen

Stammverzeichnis des Anwendung `config.xml` Datei gibt Whitelisting Domänenregeln, mit dem `<access origin="..." />` Element. Eine vollständige Referenz finden Sie unter \[Tizen zugreifen auf externe Netzwerkressourcen Dokumentation\] \[10\].

### Syntax

Zugang zu [google.com][2]:

    <access origin="http://google.com" subdomains="false" />
    

Zugriff auf die sicheren [google.com][3] ( `https://` ):

    <access origin="https://google.com" subdomains="false" />
    

Zugriff auf alle Sub-Domains auf [google.com][2]:

    <access origin="http://google.com" subdomains="true" />
    

Zugriff auf alle Domänen, einschließlich `file://` Protokoll:

    <access origin="*" subdomains="true" />