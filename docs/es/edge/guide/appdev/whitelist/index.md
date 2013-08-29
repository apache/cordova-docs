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

# Guía de la lista blanca de dominio

## Resumen

Listas blancas de dominio es un modelo de seguridad que controla el acceso a dominios externos, tales como `http://google.com`. Directiva de seguridad predeterminada de Apache Cordova permite el acceso a cualquier sitio. Antes de mover la aplicación a la producción, usted debe revisar su lista blanca y declarar el acceso a la red específica de dominios y subdominios.

## Especificación

Dominio whitelisting sienta las bases para la especificación [W3C Widget acceso][1]. En la especificación de acceso Widget, el elemento `<access>` se utiliza para declarar el acceso a dominios de red específica. En el futuro, Apache Cordova se resumen las implementaciones de listas blancas de plataforma a la especificación W3C Widget acceso. Sin embargo, por ahora cada plataforma debe implementar su propio dominio listas blancas.

 [1]: http://www.w3.org/TR/widgets-access/

## Sintaxis

Acceso a [google.com][2]:

 [2]: http://google.com

    http://google.com
    

Acceso a la segura [google.com][3] (`https://`):

 [3]: https://google.com

    https://google.com
    

Acceso al subdominio [maps.google.com][4]:

 [4]: http://maps.google.com

    http://maps.google.com
    

Acceso a todos los subdominios en [google.com][2] (por ejemplo, [mail.google.com][5] y [docs.google.com][6]):

 [5]: http://mail.google.com
 [6]: http://docs.google.com

    http://*.google.com
    

Acceso a todos los dominios (por ejemplo, [google.com][2] y [developer.mozilla.org][7]):

 [7]: http://developer.mozilla.org

    *
    

## Android

### Detalles

Las reglas de la lista blanca se encuentran en `res/xml/config.xml` y declaradas con el elemento `< accede origen = "..." / >`.

Android apoya plenamente la sintaxis de las listas blancas.

### Sintaxis

Acceso a [google.com][2]:

    <access origin="http://google.com" />
    

## BlackBerry

### Detalles

Las reglas de la lista blanca se encuentran en `www/config.xml` y declaradas con el elemento `< accede uri = "..." / >`.

Para una referencia completa, vea la [documentación del elemento de acceso BlackBerry WebWorks][8].

 [8]: https://developer.blackberry.com/html5/documentation/ww_developing/Access_element_834677_11.html

### Sintaxis

Acceso a [google.com][2]:

    < accede uri="http://google.com" subdomains = "false" / >
    

Acceso a [maps.google.com][4]:

    < accede uri="http://maps.google.com" subdomains = "false" / >
    

Acceso a todos los subdominios de [google.com][2]:

    < accede uri="http://google.com" subdomains = "true" / >
    

Acceso a todos los ámbitos, incluyendo el protocolo `file://`:

    < accede uri = "*" subdominios = "true" / >
    

## iOS

### Detalles

Las reglas de la lista blanca se encuentran en `AppName/config.xml` y declaradas con el elemento `< accede origen = "..." / >`.

iOS apoya plenamente la sintaxis de las listas blancas.

**Nota:** orígenes especificados sin un protocolo, como `www.apache.org` en lugar de `http://www.apache.org`, por defecto a todos los regímenes de `http`, `https`, `ftp` y `ftps`.

### Sintaxis

Comodines en iOS ( `*` ) son más flexibles que la especificación [W3C Widget de acceso][1] .

Acceso a todos los subdominios y TLD (`.com`, `. net`, etc.):

    *. google.*
    

## Windows Phone (7 y 8)

Las reglas de listas blancas se encuentran en el `archivo config.xml` y declaradas con el elemento `< accede origen = "..." / >`.

Android apoya plenamente la sintaxis de las listas blancas.

### Sintaxis

Acceso a [google.com][2]:

    < accede origen = "http://google.com" / >
    

## Tizen

### Detalles

Archivo de `config.xml` del directorio raíz de la aplicación especifica las reglas de listas blancas de dominio, usando el `< accede origen = "..." / >` elemento. Para una referencia completa, vea la \[documentación Tizen acceder a recursos externos red\] \[10\].

### Sintaxis

Acceso a [google.com][2]:

    < accede origin="http://google.com" subdomains = "false" / >
    

Acceso a los seguros [google.com][3] ( `https://` ):

    < accede origin="https://google.com" subdomains = "false" / >
    

Acceso a todos los subdominios de [google.com][2]:

    < accede origin="http://google.com" subdomains = "true" / >
    

Acceso a todos los dominios, incluyendo `file://` Protocolo:

    < accede origen = "*" subdominios = "true" / >