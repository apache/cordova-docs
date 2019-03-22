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

title: Cordova para Windows 10
---

# Cordova para Windows 10

Tal vez podría en vez llamarlo "Windows 10 para Córdoba". Windows 10 ha tenido su plataforma de aplicaciones de JavaScript y HTML re-diseñarse para llevar apoyo de Córdova a la web y para obtener las restricciones de seguridad de la plataforma de su camino.

## Comenzando con Windows 10

Añadir Windows 10 apoyo a su aplicación es tan sencillo como establecer su versión de plataforma de destino Windows 10.0:

    <preference name="windows-target-version" value="10.0" />
    <preference name="windows-phone-target-version" value="10.0" />


Cuando se compila con estas preferencias establecen, se construirá sólo una sola .appx (y .appxupload). Requieren de Windows 10 como mínimo.

### Entender el modo de modo remoto y Local

Modo remoto es una nueva característica de la plataforma de aplicaciones para Windows HTML en Windows 10. En Windows 8 y 8.1, aplicaciones HTML trabajaban en lo que se llama "Local Mode" en Windows 10. En modo Local, aplicaciones HTML tienen acceso completo a la superficie de API de Windows nativo y capacidades. Para prevenir ataques de inyección de secuencia de comandos que podrían resultar en fugas de información personal identificable por código malicioso, modo Local no permite secuencias de comandos en línea y requiere que los desarrolladores que realizan la manipulación de DOM para hacerlo dentro de un contexto explícito (`MSApp.execUnsafeLocalFunction`).

Modo remoto elimina esos requisitos, lo que hace posible utilizar sin modificar librerías como jQuery o AngularJS directamente en el código, sin ningún cambio. Para ello, se elimina su posibilidad de declarar determinadas capacidades cuando se acredite su aplicación en la Windows Store. La eliminación de estas capacidades generalmente no impide llegar a ciertas funcionalidades, pero pueden requerir utilizar una combinación diferente de APIs o tácticas.

### Efecto de modo remoto en capacidades

Al implementar su aplicación de modo remoto a la tienda de Windows no están disponibles las siguientes capacidades:

  * Autenticación de la empresa (`enterpriseAuthentication`)
  * Certificados de usuario compartida (`sharedUserCertificates`)
  * Biblioteca de documentos (`documentsLibrary`)
  * Biblioteca de música (`musicLibrary`)
  * Biblioteca de imágenes (`picturesLibrary`)
  * Biblioteca de videos (`videosLibrary`)
  * Medios de almacenamiento extraíbles (`removableStorage`)
  * Cliente/servidor de Internet (`internetClientServer`) - Nota que `internetClient` es todavía permitido
  * Cliente/servidor de red privada (`privateNetworkClientServer`)

Cada una de las restricciones de la biblioteca puede ser trabajada alrededor solicitando que el usuario interactuar con el sistema de archivos a través de un [Selector de archivos](https://msdn.microsoft.com/en-us/library/windows/apps/windows.storage.pickers.fileopenpicker.aspx). Esto evita que código malicioso inyectado arbitrariamente a acceder al sistema de archivo.

Las restricciones relacionadas con la red deben ser trabajadas alrededor mediante una API que no utiliza controles de capacidad o por intermediación de la comunicación a través de canales de comunicación estándar de internet, como `XMLHttpRequest` o Web Sockets.

Las capacidades de autenticación de empresa y certificados de usuario compartido están específicamente dirigidas a escenarios de empresa. Estas capacidades son compatibles para privado/empresa-habilitado tiendas de aplicaciones, así que si usted está construyendo aplicaciones que van a ser desplegados en un mecanismo de despliegue interno, todavía puede apoyar a éstos. Sin embargo, no se admiten de forma remota aplicaciones en el almacén público de Windows. Cuando construyes dirigidos a Windows 10, si una de estas capacidades se detecta en su manifiesto de aplicación, se mostrará una advertencia.

## Referencia

### config.XML preferencias

#### windows-target-version, windows-phone-target-version

    <preference name="windows-target-version" value="10.0" />
    <preference name="windows-phone-target-version" value="10.0" />


*Se necesita por lo menos uno.*

Estas preferencias identifican la versión de Windows o Windows Phone desea que su paquete de la aplicación destino.

**Valores válidos**

  * `10.0`, `UAP`: construye para Windows 10 plataforma de aplicación Universal
  * `8.1`: builds para Windows Phone Windows 8.1 8.1
  * `8.0`: construir para Windows 8.0. No es válido para Windows Phone (utilice la plataforma de Córdoba **wp8** en su lugar)

**Escenarios**

Si usted está apuntando 10 Windows solamente, basta tener un ajuste de la `windows-target-version` en el archivo config.xml.

#### WindowsDefaultUriPrefix

    <preference name="WindowsDefaultUriPrefix" value="ms-appx://|ms-appx-web://" />


Esta preferencia identifica si desea que su aplicación para apuntar el **contexto local** o **remoto contexto** como su inicio URI. Cuando se compila para Windows 10, el valor predeterminado es el contexto remoto (`ms-apppx-web: / /`).

Para tener una aplicación en modo local que no se ven afectada por las restricciones de capacidad de modo remoto, debe establecer esta preferencia en `ms-appx: / /` y no declarar cualquier `acceso < a >` elementos con URI remotos.

**Valores válidos**

  * `ms-appx: / /` (Predeterminado para Windows 8.0, 8.1): la página de inicio se ejecuta en el contexto local
  * `ms-appx-web: / /` (Predeterminado para Windows 10): la página de inicio se ejecuta en el contexto remoto

#### {SDK}-MinVersion, {SDK}-MaxVersionTested

*Opcional*

    <preference name="Windows.Universal-MinVersion" value="10.0.0.0" />
    <preference name="Windows.Mobile-MinVersion" value="10.0.9927.0" />
    <preference name="Windows.Mobile-MaxVersionTested" value="10.0.10031.0" />
    <preference name="Microsoft.Band-MinVersion" value="10.0.11.0" />


Estas preferencias identifican que los ecosistemas (incluyendo pero no limitado a Universal de Windows, Windows Mobile o Xbox) y son compatibles con sus versiones de min/max. Todavía requieren que las plataformas tienen soporte para la plataforma de aplicación Universal (10 de Windows así como el sistema operativo base). Sin embargo, estos pueden indicar que la aplicación es consciente de la funcionalidad particular que sólo puede estar disponible en ciertos dispositivos (como secuencias de juego en Xbox).

**Valores válidos**

Hay tres partes a cada valor: el **valor de la versión**, el **SDK**y la **restricción de la versión**. Estas preferencias son detectadas por comenzando con `Windows` o `Microsoft` y terminando en `- MinVersion` o `- MaxVersionTested`:

  * El **SDK** define qué especializado plataforma de destino. El valor predeterminado es `Windows.Universal`. Los valores válidos para estos se definen en el esquema de AppxManifest, en los elementos del `Package/Dependencies/TargetPlatform` .
  * La **restricción de la versión** define las reglas de compatibilidad de aplicación. Por ejemplo, si el `-MinVersion` se establece a 10.1.0.0, versiones del sistema operativo que no soportan al menos 10.1.0.0 del SDK correspondiente no serán capaces de cargarla.
      * `-MinVersion` especifica la mínima versión de la SDK requerida
      * `-MaxVersionTested` especifica la versión más alta probada de la SDK. Si se lanza una nueva versión del SDK correspondiente, se ejecutará en modo de compatibilidad para la versión especificada.
  * El **valor de versión** es una tupla de 4 enteros en forma de *major.minor.build.qfe*.

Si no hay preferencias de estos tipos se especifican en el archivo config.xml, entonces Windows.Universal versión 10.0.0.0 será elegido por defecto.
