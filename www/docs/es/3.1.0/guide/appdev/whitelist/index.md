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

title: Guía de lista blanca
---

# Guía de lista blanca

## Perspectiva general

Listas blancas de recursos es un modelo de seguridad que controla el acceso a recursos de red externos, tales como `http://google.com` . Directiva de seguridad predeterminada de Apache Cordova permite el acceso a cualquier recurso en cualquier sitio en Internet. Antes de su aplicación a la producción, debe revisar su lista blanca y declarar el acceso a la red específica dominios y subdominios.

## Especificación

Dominio whitelisting sienta las bases para la especificación [W3C Widget acceso][1]. En la especificación de acceso Widget, el `<access>` elemento se utiliza para declarar el acceso a recursos de red específicos. Apache Cordova se extiende este concepto para permitir las listas blancas de recursos (URL) de la red individuales. En el futuro, Apache Cordova se resumen las implementaciones de las listas blancas de plataforma. Sin embargo, por ahora cada plataforma implementa sus propias listas blancas recurso o dominio. Las diferencias entre las implementaciones de la plataforma se describen más adelante en este documento.

 [1]: http://www.w3.org/TR/widgets-access/

El formato general para las entradas de la lista blanca sigue la especificación "[coinciden con patrón][2]" para Google Chrome Apps empaquetados. Los recursos son especificados por URL, pero un asterisco (*) personaje puede utilizarse como un "comodín" en varios lugares para indicar que "cualquier valor puede ir aquí". Abajo se muestran ejemplos concretos.

 [2]: http://developer.chrome.com/apps/match_patterns.html

## Sintaxis

Acceso a todos los recursos en [google.com][3]:

 [3]: http://google.com

    http://google.com/*
    

Acceso a todos los recursos en el seguro [google.com][4] ( `https://` ):

 [4]: https://google.com

    https://Google.com/ *
    

Acceso al subdominio específico [maps.google.com][5]:

 [5]: http://maps.google.com

    http://maps.google.com/*
    

Acceso a todos los subdominios en [google.com][3] (por ejemplo, [mail.google.com][6] y [docs.google.com][7]):

 [6]: http://mail.google.com
 [7]: http://docs.google.com

    http://*.google.com/*
    

Acceso a todos los recursos en [www.google.com][8] en la ruta "/ móvil":

 [8]: http://www.google.com

    http://www.google.com/mobile/*
    

Acceso a [google.com][3] en cualquier protocolo (por ejemplo, HTTP, HTTPS, FTP, etc.):

    *://google.com/*
    

Acceso a los recursos en Internet (por ejemplo, [google.com][3] y [developer.mozilla.org][9]):

 [9]: http://developer.mozilla.org

    *
    

## Android

### Detalles

Las reglas de las listas blancas se encuentran en `res/xml/config.xml` y declarado con el elemento`<access origin="..." />`.

Android apoya plenamente la sintaxis de las listas blancas.

### Sintaxis

Acceso a [google.com][3]:

    <access origin="http://google.com/*" />
    

## BlackBerry 10

### Detalles

Las reglas de las listas blancas se encuentran en `www/config.xml` y declarado con el elemento`<access origin="..." />`.

BlackBerry 10 maneja comodines diferentemente que otras plataformas de dos maneras:

1) Contenido utilizando XMLHttpRequest debe declararse explícitamente. origen = "*" no será respetado por este caso de uso. Alternativamente, puede deshabilitarse toda seguridad web usando una preferencia.

2) subdominios = "true" puede usarse en lugar de "* .dominio"

### Sintaxis

Acceso a [google.com][3]:

    <access origin="http://google.com" subdomains="false" />
    

Acceso a [maps.google.com][5]:

    <access origin="http://maps.google.com" subdomains="false" />
    

Acceso a todos los subdominios de [google.com][3]:

    <access origin="http://google.com" subdomains="true" />
    

Acceso a todos los dominios, incluyendo `file://` Protocolo:

    <access origin="*" subdomains="true" />
    

Deshabilitar la seguridad web:

    <preference name="websecurity" value="disable" />
    

## iOS

### Detalles

Las reglas de las listas blancas se encuentran en `AppName/config.xml` y declarado con el elemento`<access origin="..." />`.

iOS apoya plenamente la sintaxis de las listas blancas.

### Cambiado en 3.1.0:

Antes de la versión 3.1.0, Cordova-iOS incluyó algunas extensiones no estándares para el dominio whilelisting esquema apoyado por otras plataformas de Córdoba. A partir de 3.1.0, la lista blanca de iOS ahora se ajusta a la sintaxis de lista blanca de recursos descrita en la parte superior de este documento. Si actualiza desde pre-3.1.0 y usaban estas extensiones, tienes que cambiar tu `config.xml` archivo para continuar whitelisting el mismo conjunto de recursos como antes.

Específicamente, estos patrones necesitan ser actualizados:

*   " `apache.org` " (sin protocolo): anteriormente esto coincidiría con `http` , `https` , `ftp` , y `ftps` los protocolos. Cambiar a " `*://apache.org/*` " para incluir todos los protocolos, o incluir una línea para cada protocolo que necesitas ayuda.

*   " `http://apache.*` " (wildcard en el final del dominio): anteriormente esto coincidiría con todos top-level-dominios, incluyendo toda posibles TLDs de dos letras (pero no útiles dominios como. co.uk). Incluir una línea para cada TLD que usted realmente controla y necesita a la lista blanca.

*   " `h*t*://ap*he.o*g` " (comodines para letras faltantes al azar): estos ya no son soportados; cambio para incluir una línea para cada dominio y protocolo que en realidad necesita a la lista blanca.

### Sintaxis

Acceso a [google.com][3]:

    <access origin="http://google.com/*" />
    

## Windows Phone (7 y 8)

Las reglas de las listas blancas se encuentran en `config.xml` y declarado con el elemento`<access origin="..." />`.

### Sintaxis

Acceso a [google.com][3]:

    <access origin="http://google.com" />
    

## Tizen

### Detalles

Del directorio raíz de la aplicación `config.xml` archivo especifica reglas whitelisting dominio, usando el `<access origin="..." />` elemento. Para una referencia completa, vea la [documentación de Tizen acceder a recursos externos red][10].

 [10]: https://developer.tizen.org/help/topic/org.tizen.help.gs/Creating%20a%20Project.html?path=0_1_1_4#8814682_CreatingaProject-AccessingExternalNetworkResources

### Sintaxis

Acceso a [google.com][3]:

    <access origin="http://google.com" subdomains="false" />
    

Acceso a los seguros [google.com][4] ( `https://` ):

    <access origin="https://google.com" subdomains="false" />
    

Acceso a todos los subdominios de [google.com][3]:

    <access origin="http://google.com" subdomains="true" />
    

Acceso a todos los dominios, incluyendo `file://` Protocolo:

    <access origin="*" subdomains="true" />