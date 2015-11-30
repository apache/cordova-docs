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

Listas blancas de dominio es un modelo de seguridad que controla el acceso a dominios externos sobre los cuales su aplicación no tiene ningún control. Cordova ofrece una política de seguridad configurable para definir los sitios externos pueden accederse. De forma predeterminada, nuevas aplicaciones están configurados para permitir el acceso a cualquier sitio. Antes de su aplicación a la producción, debe formular una lista blanca y permitir el acceso a la red específica dominios y subdominios.

Para Android y iOS (a partir de sus 4,0 versiones), la política de seguridad de Cordova es extensible mediante una interfaz plugin. Su aplicación debe utilizar el [cordova-plugin-whitelist][1], que proporciona mayor seguridad y capacidad de configuración que las versiones anteriores de Cordova. Mientras que es posible implementar su propio plugin de lista blanca, no se recomienda a menos que su aplicación tiene necesidades muy específicas de seguridad política. Ver el [cordova-plugin-whitelist][1] para obtener más información sobre el uso y configuración.

 [1]: https://github.com/apache/cordova-plugin-whitelist

Para otras plataformas, Cordova se adhiere a la especificación [W3C Widget de acceso][2] , que se basa en el elemento `< access >` dentro de archivo `config.xml` de la aplicación para habilitar el acceso a la red en dominios específicos. Para los proyectos que se basan en el flujo de trabajo de la CLI que se describe en la interfaz de línea de comandos, este archivo se encuentra en el directorio superior del proyecto. De lo contrario para caminos de desarrollo específico de plataforma, lugares figuran en las secciones a continuación. (Ver a las diversas guías de plataforma para obtener más información sobre cada plataforma).

 [2]: http://www.w3.org/TR/widgets-access/

Los siguientes ejemplos demuestran sintaxis `< access >` lista blanca:

*   Acceso a [google.com][3]:
    
        <access origin="http://google.com" />
        

*   Acceso a la segura [google.com][4] (`https://`):
    
        <access origin="https://google.com" />
        

*   Acceso al subdominio [maps.google.com][5]:
    
        <access origin="http://maps.google.com" />
        

*   Acceso a todos los subdominios de [google.com][3], por ejemplo, [mail.google.com][6] y [docs.google.com][7]:
    
        <access origin="http://*.google.com" />
        

*   Acceso a *todos* los dominios, por ejemplo, [google.com][3] y [developer.mozilla.org][8]:
    
        <access origin="*" />
        
    
    Este es el valor predeterminado para nuevos proyectos CLI.

 [3]: http://google.com
 [4]: https://google.com
 [5]: http://maps.google.com
 [6]: http://mail.google.com
 [7]: http://docs.google.com
 [8]: http://developer.mozilla.org

Tenga en cuenta que algunos sitios web puede redirigir automáticamente desde su página de inicio a una url distinta, por ejemplo utilizando el protocolo https o a un dominio específico del país. Por ejemplo http://www.google.com redireccionará para utilizar SSL/TLS en https://www.google.com y entonces más lejos puede redirigir a una geografía como https://www.google.co.uk. Estas situaciones pueden requerir las entradas de lista blanca modificada o adicionales más allá de su requisito inicial. Por favor considere esto como que está construyendo su lista blanca.

Tenga en cuenta que la lista blanca se aplica sólo a los principal webview Cordova y no se aplica a un InAppBrowser webview o abrir enlaces en el navegador web del sistema.

## Amazon fuego OS Whitelisting

Reglas específicas de la plataforma whitelisting se encuentran en`res/xml/config.xml`.

## Whitelisting Android

Como el anterior, ver [cordova-plugin-whitelist][1] para más detalles. Cordova-androide antes 4.0.0, consulte las versiones anteriores de esta documentación.

## iOS ListaBlanca

Como el anterior, ver [cordova-plugin-whitelist][1] para más detalles. Cordova-ios antes 4.0.0, consulte las versiones anteriores de esta documentación.

## BlackBerry 10 listas blancas

Las reglas de las listas blancas se encuentran en `www/config.xml`.

Uso de blackBerry decenas de comodines difiere de otras plataformas de dos maneras:

*   Cualquier contenido utilizando `XMLHttpRequest` debe declararse explícitamente. Configuración de `origin="*"` no funciona en este caso. Alternativamente, puede deshabilitarse toda seguridad web usando la preferencia `WebSecurity` que se describe en configuración de BlackBerry:
    
        <preference name="websecurity" value="disable" />
        

*   Como alternativa al ajuste `*.domain`, establece un atributo adicional `subdomains` en `true`. Se debe establecer en `false` de forma predeterminada. Por ejemplo, el siguiente permite acceder a `google.com`, `maps.google.com`y `docs.google.com`:
    
        <access origin="http://google.com" subdomains="true" />
        
    
    El siguiente angosto acceso a `google.com`:
    
        <access origin="http://google.com" subdomains="false" />
        
    
    Especifique el acceso a todos los ámbitos, incluido el protocolo local `file://` :
    
        <access origin="*" subdomains="true" />
        

(Para obtener más información sobre soporte, véase documentación de BlackBerry en el [elemento de acceso][9].)

 [9]: https://developer.blackberry.com/html5/documentation/ww_developing/Access_element_834677_11.html

## Firefox OS

En Firefox OS no hay ningún concepto de listas blancas un dominio específico. En su lugar hay un permiso especial llamado [SystemXHR][10]. Es necesario agregar este permiso al `archivo config.xml`:

 [10]: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest#Permissions

    <platform name="firefoxos">
        <permission name="systemXHR" privileged="true" description="load data from server" />
    </platform>
    

El objeto `XMLHttpRequest` debe ser instanciada con dos parámetros `mozAnon` y `mozSystem`:

    var request = new XMLHttpRequest({
        mozAnon: true,
        mozSystem: true});
    

Esta solución es transparente, así que no hay diferencias para otras plataformas.

## Lista blanca de Windows Phone

Las reglas de listas blancas para Windows Phone 8 se encuentran en el archivo `config.xml` de la aplicación.

## Las listas blancas Tizen

Sus reglas se encuentran en el archivo `config.xml` de la aplicación. La plataforma se basa en el mismo atributo `subdomains` como la plataforma BlackBerry. (Para obtener más información sobre compatibilidad, consulte documentación de Tizen sobre el [elemento de acceso][11].)

 [11]: https://developer.tizen.org/help/index.jsp?topic=%2Forg.tizen.web.appprogramming%2Fhtml%2Fide_sdk_tools%2Fconfig_editor_w3celements.htm