* * *

licencia: licencia a la Apache Software Foundation (ASF) bajo acuerdos de licencia de uno o más colaborador. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

## under the License.

# Guía de lista blanca

Listas blancas de dominio es un modelo de seguridad que controla el acceso a dominios externos sobre los cuales usted aplicación no tiene ningún control. Directiva de seguridad predeterminada de Cordova permite acceder a cualquier sitio. Antes de su aplicación a la producción, debe formular una lista blanca y permitir el acceso a la red específica dominios y subdominios.

Córdoba se adhiere a la especificación [W3C Widget de acceso][1] , que se basa en el `<access>` elemento dentro de la aplicación de `config.xml` archivo para permitir acceso a la red en dominios específicos. Para los proyectos que se basan en el flujo de trabajo de la CLI que se describe en la interfaz de línea de comandos, este archivo se encuentra en el directorio superior del proyecto. De lo contrario para caminos de desarrollo específico de plataforma, lugares figuran en las secciones a continuación. (Ver a las diversas guías de plataforma para obtener más información sobre cada plataforma).

 [1]: http://www.w3.org/TR/widgets-access/

Los siguientes ejemplos demuestran sintaxis de lista blanca:

*   Acceso a [google.com][2]:
    
        <access origin="http://google.com" />
        

*   Acceso a los seguros [google.com][3] ( `https://` ):
    
        <access origin="https://google.com" />
        

*   Acceso al subdominio [maps.google.com][4]:
    
        <access origin="http://maps.google.com" />
        

*   Acceso a todos los subdominios de [google.com][2], por ejemplo, [mail.google.com][5] y [docs.google.com][6]:
    
        <access origin="http://*.google.com" />
        

*   Acceso a *todos* los dominios, por ejemplo, [google.com][2] y [developer.mozilla.org][7]:
    
        <access origin="*" />
        
    
    Este es el valor predeterminado para nuevos proyectos CLI.

 [2]: http://google.com
 [3]: https://google.com
 [4]: http://maps.google.com
 [5]: http://mail.google.com
 [6]: http://docs.google.com
 [7]: http://developer.mozilla.org

## Amazon fuego OS Whitelisting

Reglas específicas de la plataforma whitelisting se encuentran en`res/xml/config.xml`.

## Whitelisting Android

Reglas específicas de la plataforma whitelisting se encuentran en`res/xml/config.xml`.

**Nota**: en Android 2.3 y antes, dominio whitelisting sólo funciona para `href` hipervínculos, no hace referencia a los recursos como imágenes y secuencias de comandos. Tomar medidas para evitar secuencias de comandos de ser inyectado en la aplicación.

**Nota**: para evitar direcciones URL externas tales como `mailto:` se abra en el webview de Córdoba a partir de Cordova 3.6.0, especificando `origin="*"` implícitamente agregará las reglas para los protocolos http y https. Si necesita acceso a protocolos personalizados adicionales, entonces debe también agregar los explícitamente a la lista blanca. Ver también "Whitelist aplicación externa" abajo para obtener más información sobre lanzamiento de aplicaciones externas de URL.

**NOTA**: Algunas peticiones de red no pasan por el Cordova Whitelist. Esto incluye <video> y <audio> recursos, conexiones WebSocket (en Android 4.4 +) y posiblemente otras solicitudes no http. En Android 4.4 +, puede incluir un [CSP][8] Rúbrica en los documentos HTML para restringir el acceso a esos recursos. En versiones anteriores de Android, no puede ser posible restringirlos.

 [8]: https://developer.mozilla.org/en-US/docs/Web/Security/CSP/Introducing_Content_Security_Policy

### Lista blanca de aplicaciones externas

Cordova 3.6.0 introduce una segunda lista blanca, para restringir el acceso URL autorizada para lanzar aplicaciones externas. En versiones anteriores de Cordova, todas las URL no http, tales como `mailto:` , `geo:` , `sms:` y `intent` , implícitamente se permitió a ser objetivo de un un <a>etiqueta.</a> Debido a la posibilidad de una aplicación a la fuga de información, si una vulnerabilidad XSS permite que un atacante construir enlaces arbitrarias, estas URL deben ser lista blanca, a partir de Córdoba 3.6.0.

Para permitir un patrón de URL para iniciar una aplicación externa, utilice un <access> etiqueta en su `config.xml` archivo, con el `launch-external` conjunto de atributos.

Ejemplos:

*   Para permitir enlaces enviar mensajes SMS:
    
    <access origin="sms:*" launch-external="yes" />

*   Para permitir enlaces a mapas abiertos:
    
    <access origin="geo:*" launch-external="yes" />

*   Para permitir enlaces a ejemplo.com para abrir en un navegador externo:
    
    <access origin="http://example.com/*" launch-external="yes" />

*   Para permitir que todos los sitios web no-lista blanca abrir en un navegador externo: (esto es lo mismo que el comportamiento anterior para las URL no-lista blanca)
    
    <access origin="http://*" launch-external="yes" /> <access origin="https://*" launch-external="yes" />

*   Para acceder a todas las URLs, volviendo a la política de Cordova 3.5.0 (no recomendada):
    
    <access origin="*" launch-external="yes" />

Cuando navega a una dirección URL de su aplicación, la lista blanca interal es probada primero, y si la URL no está en lista blanca allí, entonces la lista blanca externa está probada. Esto significa que cualquier `http:` o `https:` URLs que coinciden ambas listas blancas se abrirá dentro de la aplicación de Cordova, en lugar de lanzar el navegador externo.

## iOS ListaBlanca

Las reglas de listas blancas de la plataforma se encuentran en el directorio la aplicación llamado `config.xml` archivo.

Orígenes especificados sin un protocolo, tales como `www.apache.org` en lugar de `http://www.apache.org` , por defecto a todos los `http` , `https` , `ftp` , y `ftps` esquemas.

Los comodines en la plataforma iOS son más flexibles que en la especificación del [W3C Widget de acceso][1] . Por ejemplo, los siguientes accesos todos los subdominios y dominios de primer nivel tales como `.com` y `.net` :

        < accede origen = "*.google. *" / >
    

A diferencia de la plataforma Android mencionada, navegando por non-lista blanca dominios vía `href` hipervínculo en iOS evita que la página de apertura en todos.

## BlackBerry 10 listas blancas

Las reglas de las listas blancas se encuentran en`www/config.xml`.

Uso de blackBerry decenas de comodines difiere de otras plataformas de dos maneras:

*   Acceder a cualquier contenido `XMLHttpRequest` debe declararse explícitamente. Configuración de `origin="*"` no funciona en este caso. Alternativamente, se puede desactivar toda seguridad web utilizando la `WebSecurity` preferencia se describe en configuración de BlackBerry:
    
        < nombre de preferencia = "websecurity" value = "Deshabilitar" / >
        

*   Como alternativa al ajuste `*.domain` , establecer un adicional `subdomains` atribuyen a `true` . Se deben ajustar para que `false` por defecto. Por ejemplo, el siguiente permite el acceso a `google.com` , `maps.google.com` , y `docs.google.com` :
    
        < accede origen = subdominios "http://google.com" = "true" / >
        
    
    Angosto del siguiente acceso a `google.com` :
    
        < accede origen = subdominios "http://google.com" = "false" / >
        
    
    Especifica el acceso a todos los ámbitos, incluyendo el local `file://` Protocolo:
    
    <access origin="*" subdomains="true" />

(Para obtener más información sobre soporte, véase documentación de BlackBerry en el [elemento de acceso][9].)

 [9]: https://developer.blackberry.com/html5/documentation/ww_developing/Access_element_834677_11.html

## iOS cambios en 3.1.0

Antes de la versión 3.1.0, Cordova-iOS incluyó algunas extensiones no estándares para el dominio whilelisting esquema apoyado por otras plataformas de Córdoba. A partir de 3.1.0, la lista blanca de iOS ahora se ajusta a la sintaxis de lista blanca de recursos descrita en la parte superior de este documento. Si actualiza desde pre-3.1.0 y usaban estas extensiones, tienes que cambiar el `config.xml` archivo para continuar whitelisting el mismo conjunto de recursos como antes.

Específicamente, estos patrones necesitan ser actualizados:

*   " `apache.org` " (sin protocolo): anteriormente esto coincidiría con `http` , `https` , `ftp` , y `ftps` los protocolos. Cambiar a " `*://apache.org/*` " para incluir todos los protocolos, o incluir una línea para cada protocolo que necesitas ayuda.

*   " `http://apache.*` " (wildcard en el final del dominio): anteriormente esto coincidiría con todos top-level-dominios, incluyendo toda posibles TLDs de dos letras (pero no útiles dominios como. co.uk). Incluir una línea para cada TLD que usted realmente controla y necesita a la lista blanca.

*   " `h*t*://ap*he.o*g` " (comodines para letras faltantes al azar): estos ya no son soportados; cambio para incluir una línea para cada dominio y protocolo que en realidad necesita a la lista blanca.

## Lista blanca de Windows Phone

Las reglas de listas blancas para Windows Phone 8 se encuentran en la aplicación de `config.xml` archivo.

## Las listas blancas Tizen

Sus reglas se encuentran en la aplicación de `config.xml` archivo. La plataforma se basa en la misma `subdomains` atributo como la plataforma BlackBerry. (Para obtener más información sobre compatibilidad, consulte documentación de Tizen sobre el [elemento de acceso][10].)

 [10]: https://developer.tizen.org/help/index.jsp?topic=%2Forg.tizen.web.appprogramming%2Fhtml%2Fide_sdk_tools%2Fconfig_editor_w3celements.htm