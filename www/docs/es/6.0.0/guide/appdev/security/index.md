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

title: Guía de seguridad
---

# Guía de seguridad

La siguiente guía incluye algunas mejores prácticas de seguridad que debe considerar al desarrollar una aplicación de Córdoba. Por favor, tenga en cuenta que la seguridad es un tema muy complicado y por lo tanto, esta guía no es exhaustiva. Si usted cree que puede contribuir a esta guía, sienta por favor libre de presentar un número de localizador de fallas de Cordova bajo ["Documentación"][1]. Esta guía está diseñada para ser aplicable al desarrollo general Cordova (todas las plataformas), pero tendrá en cuenta consideraciones específicas de la plataforma.

 [1]: https://issues.apache.org/jira/browse/CB/component/12316407

## Esta guía aborda los siguientes temas:

*   Lista blanca
*   Iframes y el mecanismo de identificación de llamada
*   Certificado de clavos
*   Los certificados autofirmados
*   Almacenamiento cifrado
*   Consejos generales
*   Artículos recomendados y otros recursos

## Lista blanca

*   Lea y entienda al manual lista blanca

*   Dominio whitelisting no funciona en Android API 10 y a continuación y WP8 para iframes y XMLHttpRequest. Esto significa que un atacante puede cargar cualquier tipo de dominio en un iframe y cualquier script en esa página dentro del iframe puede acceder directamente a objetos Cordova JavaScript y los objetos de Java nativos correspondientes. Debe tomar esto en consideración cuando la creación de aplicaciones para estas plataformas. En la práctica esto significa asegurándose de que se meta una API Android superior a 10, y que si es posible no utilice un iframe para cargar contenido externo - utilizan el plugin inAppBrowser u otros plugins de terceros.

## Iframes y el mecanismo de identificación de llamada

Si el contenido se sirve en un iframe desde un dominio en lista blanca, ese dominio tendrá acceso al puente Cordova nativo. Esto significa que si usted blanca una red de publicidad de terceros y servir los anuncios a través de un iframe, es posible que un anuncio malicioso será capaz de romper el iframe y llevar a cabo acciones maliciosas. Debido a esto, generalmente no debe usar iframes a menos que usted controla el servidor que aloja el contenido del iframe. También tenga en cuenta que existen plugins de terceros disponibles para apoyar las redes de publicidad. Tenga en cuenta que esta declaración no es verdadera para iOS, que intercepta todo, incluyendo las conexiones iframe.

## Certificado de clavos

Córdova no admite certificado verdadera fijación. La barrera principal para esto es una falta de API nativas en Android para interceptar conexiones SSL para realizar la comprobación del certificado del servidor. (Aunque es posible certificado de fijación en Android en Java utilizando JSSE, el webview en Android está escrito en C++, y las conexiones del servidor son manejadas para usted por el webview, así que no cabe usar Java y JSSE allí.) Desde Apache Cordova pretende ofrecer APIs consistentes en múltiples plataformas, no tener una capacidad en una importante plataforma rompe esa consistencia.

Hay formas para aproximar certificado fijación, tales como comprobación de que clave pública del servidor (huella digital) es el valor esperado cuando se inicia la aplicación o en otras varias veces durante la vida útil de su aplicación. Hay plugins de terceros disponibles para Córdoba que pueda hacer eso. Sin embargo, esto no es lo mismo como verdadero certificado de fijación que verifica automáticamente el valor esperado de cada conexión con el servidor.

## Los certificados autofirmados

No es recomendable utilizar certificados autofirmados en su servidor. Si usted desea SSL, entonces se recomienda que el servidor dispone de un certificado que ha sido debidamente firmado por un conocido CA (autoridad certificadora). La incapacidad de cierto anclaje certificado hace importante.

La razón es que aceptando certificados autofirmados omite la validación de la cadena de certificado, que permite cualquier certificado de servidor ser considerado válido por el dispositivo. Esto abre la comunicación a los ataques man-in-the-middle. Resulta muy fácil para un hacker no solo interceptar y leer toda la comunicación entre el dispositivo y el servidor, sino también modificar la comunicación. El aparato nunca sabrá que esto sucede porque no Verifique que el certificado del servidor está firmado por una CA de confianza. El dispositivo no dispone de ninguna prueba de que el servidor es lo que se espera. Debido a la facilidad de hacer un ataque man-in-the-middle, aceptar los certificados autofirmados sólo es ligeramente mejor que correr sólo http en lugar de https en una red sin confianza. Sí, podría cifrarse el tráfico, pero podría ser cifrado con la clave de un man-in-the-middle, para que el man-in-the-middle pueda acceder a todo, para que el cifrado es inútil salvo para observadores pasivos. Usuarios de confían SSL para estar seguro, y esto estaría deliberadamente haciendo lo inseguro, así que el uso SSL se convierte engañoso. Si esto se utilizará en una red de confianza (es decir, usted es enteramente dentro de una empresa controlada), y luego certificados autofirmados todavía no se recomiendan. Las dos recomendaciones en una red de confianza son utilizar http porque la propia red es de confianza, o para obtener un certificado firmado por una CA de confianza (no auto firmado). La red es de confianza o no.

Los principios aquí descritos no son específicos de Apache Cordova, se aplican a todas las comunicaciones cliente-servidor.

Cuando se ejecuta Cordova en Android, usando `android:debuggable="true"` en la aplicación de manifiesto permitirá errores de SSL como certificado de errores de validación de la cadena de certificados autofirmados. Así que usted puede utilizar certificados autofirmados en esta configuración, pero esto no es una configuración que se debe utilizar cuando la aplicación está en producción. Es para ser utilizado sólo durante el desarrollo de aplicaciones.

## Almacenamiento cifrado

(TBD)

## Consejos generales

### No utilice Android Gingerbread.

*   Establezca su nivel de min-blanco-sdk superior a 10. API 10 es pan de jengibre, y pan de jengibre ya no es apoyado por Google o dispositivo de fabricantes y por lo tanto no es recomendar por el equipo de Córdoba. 
*   Pan de jengibre se ha demostrado para ser inseguro y uno de los más dirigidos OSs móvil [http://www.mobilemag.com/2012/11/06/andriod-2-3-gingerbread-security/][2]. 
*   La lista blanca en Android no funciona con pan de jengibre o inferior. Esto significa que un atacante puede cargar código malicioso en un iframe que entonces tendría acceso a todas las APIs de Cordova y podría utilizar ese acceso para robar datos personales, enviar mensajes SMS a un número de tarificación y realizar otros actos dolosos. 

 [2]: http://bgr.com/2012/11/06/android-security-gingerbread-malware/

### Utilice InAppBrowser para enlaces externos

*   Utilice el InAppBrowser al abrir enlaces a cualquier sitio web externo. Esto es mucho más seguro que un nombre de dominio e incluyendo el contenido directamente en su aplicación porque los InAppBrowser a utilizar las funciones de seguridad del navegador nativo y no dará el sitio web de acceso a su entorno Cordova whitelisting. Incluso si usted confía en el sitio web de terceros e incluirlo directamente en su aplicación, podría relacionar a ese sitio web de terceros con contenido web malintencionado. 

### Validar todos los usuarios de entrada

*   Siempre validar cualquier entrada que acepta su solicitud. Esto incluye nombres de usuario, contraseñas, fechas, cargado de medios, etc.. Porque un atacante podría manipular sus activos HTML y JS (ya sea por su aplicación de descompilación o usando herramientas de depuración como chrome://inspect), esta validación debe también realizarse en su servidor, especialmente antes de entregar los datos a cualquier servicio de back-end. 
*   Donde deben validar datos de otras fuentes: documentos del usuario, contactos, notificaciones push

### No almacenar en caché los datos sensibles

*   Si se almacena en caché los nombres de usuario, contraseñas, información de geolocalización y otros datos sensibles, entonces podría potencialmente ser recuperó más tarde por un usuario no autorizado o la aplicación.

### No utilizar eval() si no sabes lo que estás haciendo

*   El JavaScript función eval() tiene una larga historia de abusos. Usando incorrectamente puede abrir su código para ataques de inyección, depuración de las dificultades y la ejecución de código más lenta. 

### No asuma que su código fuente es seguro

*   Desde una aplicación de Cordova se construye de HTML y JavaScript activos que conseguir envasados en un recipiente nativo, no debe considerar su código de seguridad. Es posible revertir el ingeniero una aplicación Cordova. 

## Artículos recomendados y otros recursos

*   [Chuleta de HTML5 seguridad, detallando cómo asegurar su aplicación HTML5][3]
*   [Artículo de PhoneGap en dispositivo de seguridad, como el uso de datos cifrados][4]
*   [White Paper sobre fallas de seguridad conocidas en Webview basado en aplicaciones híbridas][5]

 [3]: https://www.owasp.org/index.php/HTML5_Security_Cheat_Sheet
 [4]: https://github.com/phonegap/phonegap/wiki/Platform-Security
 [5]: http://www.cis.syr.edu/~wedu/Research/paper/webview_acsac2011.pdf