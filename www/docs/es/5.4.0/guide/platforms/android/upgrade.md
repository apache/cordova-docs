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

title: Actualizar Android
---

# Actualizar Android

Esta guía le muestra cómo modificar proyectos Android para actualizar desde versiones anteriores de Cordova. La mayoría de estas instrucciones se aplica a proyectos creados con un conjunto mayor de herramientas de línea de comandos que preceden a la utilidad de la CLI de `cordova`. Vea la interfaz de línea de comandos para información de cómo actualizar la versión de la CLI.

## Actualización a 4.0.0

Hay pasos específicos la actualización necesarias para aprovechar los cambios significativos en 4.0.0. En primer lugar, los pasos de actualización común son necesarios como abajo.

Proyectos no-CLI, ejecute:

        bin/update path/to/project
    

Para proyectos de CLI:

1.  Actualización de la `cordova` versión CLI. Vea la interfaz de línea de comandos.

2.  Ejecute `cordova platform update android` en tus proyectos ya existentes.

### Actualización de la lista blanca

Todas las funcionalidades de lista blanca es implementada mediante plugin. Sin un plugin, su aplicación no está protegida por una lista blanca después de actualizar a 4.0.0. Córdoba tiene dos plugins de lista blanca, que proporcionan diferentes niveles de protección.

1.  El plugin de `cordova-plugin-whitelist` *(recomendado)*
    
    *   Este plugin es muy recomendable, ya que es más seguro y configurable que la lista blanca en las versiones anteriores
    *   Ver [cordova-plugin-whitelist][1] para obtener más información sobre los cambios de configuración necesarios
    *   Run: `cordova plugin add cordova-plugin-crosswalk-webview`

2.  El plugin `cordova-plugin-legacy-whitelist`
    
    *   Este plugin proporciona el mismo comportamiento de lista blanca como las versiones anteriores. Ver [cordova-plugin-legacy-whitelist][2]
    *   No hay cambios en la configuración se requieren, pero ofrece menos protección que el plugin recomendado
    *   Run: `cordova plugin add cordova-plugin-legacy-whitelist`

 [1]: https://github.com/apache/cordova-plugin-whitelist
 [2]: https://github.com/apache/cordova-plugin-legacy-whitelist

### Utilizando el Crosswalk WebView

De forma predeterminada, su aplicación continuará utilizando el sistema WebView proporcionado por el dispositivo. Si desea utilizar el paso de peatones WebView en lugar de eso, simplemente añada el plugin de cruce de peatones:

    cordova plugin add cordova-plugin-crosswalk-webview
    

Al agregar el plugin, su aplicación tendrá el paso de peatones WebView instalado y configurado correctamente.

### Actualización al Splashscreen Plugin

Si su aplicación hace uso de una pantalla de bienvenida, que funcionalidad ha sido trasladado a un plugin. Las opciones de configuración para salpicadura pantallas son invariables. El actualización sólo paso necesario es añadir el plugin:

    cordova plugin add cordova-plugin-splashscreen
    

## Actualización a 3.7.1 de 3.6.0

Proyectos no-CLI, ejecute:

        bin/update path/to/project
    

Para proyectos de CLI:

1.  Actualización de la `cordova` versión CLI. Vea la interfaz de línea de comandos.

2.  Ejecutar `cordova platform update android` en tus proyectos ya existentes.

## Actualización a 3.3.0 de 3.2.0

Siga las mismas instrucciones en cuanto a `3.2.0`.

Comenzando con 3.3.0, el runtime Cordova ahora está compilado como una biblioteca de Android en vez de un frasco. Esto debería no tienen ningún efecto para el uso de línea de comandos, pero IDE los usuarios tendrán que importar el proyecto `MyProject-CordovaLib` recién agregado a su lugar de trabajo.

## Actualización a 3.2.0 de 3.1.0

Para los proyectos que se crearon con la Córdoba CLI:

1.  Actualización de la `cordova` versión CLI. Vea la interfaz de línea de comandos.

2.  Run `cordova platform update android`

Para proyectos no creados con el cordova CLI, ejecute:

        bin/update <project_path>
    

**ADVERTENCIA:** En 4.4 Android - Android 4.4.3, creando un archivo de entrada elemento con type="file" no abrirá el cuadro de diálogo selector de archivos. Esto es una regresión con cromo en Android y el problema puede ser reproducido en el navegador Chrome independiente en Android (véase http://code.google.com/p/android/issues/detail?id=62220) la solución sugerida es utilizar los plugins File Transfer y archivo para Android 4.4. Puedes escuchar para un evento onClick del tipo de entrada = "file" y luego aparecer un selector de archivos UI. Para atar los datos del formulario con la carga, puede utilizar JavaScript para fijar los valores del formulario a la solicitud POST multi-partes que hace File Transfer.

## Actualización a 3.1.0 de 3.0.0

Para los proyectos que se crearon con la Córdoba CLI:

1.  Actualización de la `cordova` versión CLI. Vea la interfaz de línea de comandos.

2.  Run `cordova platform update android`

Para proyectos no creados con el cordova CLI, ejecute:

        bin/update <project_path>
    

## Actualización a la CLI (3.0.0) de 2.9.0

1.  Cree un nuevo proyecto de Apache Cordova 3.0.0 con cordova CLI, como se describe en la interfaz de línea de comandos.

2.  Agregar tus plataformas el proyecto cordova, por ejemplo: `cordova platform add android`.

3.  Copiar el contenido del directorio `www` de su proyecto al directorio `www` en la raíz del proyecto cordova que acaba de crear.

4.  Copie cualquier activo nativo de su viejo proyecto en los directorios apropiados bajo `platforms/android`: este directorio es donde existe su proyecto cordova-android nativo.

5.  Utilice la herramienta CLI cordova instalar algún plugin que necesita. Tenga en cuenta que la CLI maneja todo núcleo APIs como plugins, así pueden necesitar ser agregado. Sólo 3.0.0 plugins son compatibles con la CLI.

## Actualizar a 3.0.0 desde 2.9.0

1.  Crear un nuevo proyecto Apache Cordova Android.

2.  Copie el contenido del directorio `www` al nuevo proyecto.

3.  Copie cualquier nativos Android activos desde el directorio de `res` al nuevo proyecto.

4.  Copiar algún plugin que instaló desde los subdirectorios `src` en el nuevo proyecto.

5.  Asegúrese de actualizar cualquiera obsoleto `< plugin >` referencias desde el antiguo archivo `config.xml` para la nueva especificación `de <feature>` .

6.  Actualice cualquier referencia al paquete `org.apache.cordova.api` para ser `org.apache.cordova`.
    
    **Nota**: todo núcleo APIs se han eliminado y deben instalarse como plugins. Para detalles, véase el Plugman usando para gestionar Plugins guía.

## Actualizar a 2.9.0 2.8.0

1.  Run `bin/update <project_path>`.

## Actualizar a 2.8.0 desde 2.7.0

1.  Quitar `cordova-2.7.0.jar` del directorio de `bibliotecas` del proyecto.

2.  Añadir `cordova-2.8.0.jar` al directorio de `bibliotecas` del proyecto.

3.  Si usas Eclipse, por favor actualice su proyecto en Eclipse y hacer una limpia.

<!-- SS Eclipse -->

1.  Copie el nuevo `cordova.js` en su proyecto.

2.  Actualizar el código HTML para usar el nuevo archivo `cordova.js` .

3.  Copie el archivo `res/xml/config.xml` para que coincida con `framework/res/xml/config.xml`.

4.  Actualización `framework/res/xml/config.xml` tener configuración similar como lo hizo anteriormente.

5.  Copiar archivos de `bin/templates/cordova` del proyecto `cordova` directorio.

## Actualizar a 2.7.0 desde 2.6.0

1.  Quitar `cordova-2.6.0.jar` del directorio de `bibliotecas` del proyecto.

2.  Añadir `cordova-2.7.0.jar` al directorio de `bibliotecas` del proyecto.

3.  Si usas Eclipse, por favor actualice su proyecto en Eclipse y hacer una limpia.

4.  Copie el nuevo `cordova-2.7.0.js` en su proyecto.

5.  Actualizar el código HTML para usar el nuevo archivo `cordova-2.7.0.js` .

6.  Copiar el `res/xml/config.xml` para que coincida con el `framework/res/xml/config.xml`.

7.  Actualización `framework/res/xml/config.xml` tener configuraciones similares como lo hizo anteriormente.

8.  Copiar los archivos de `bin/templates/cordova` para el proyecto `cordova` Directorio.

## Actualizar a 2.6.0 2.5.0

1.  Quitar `cordova-2.5.0.jar` del directorio de `bibliotecas` del proyecto.

2.  Añadir `cordova-2.6.0.jar` al directorio de `bibliotecas` del proyecto.

3.  Si usas Eclipse, por favor actualice su proyecto en Eclipse y hacer una limpia.

4.  Copiar el nuevo `cordova-2.6.0.js` en su proyecto.

5.  Actualiza su HTML para usar el nuevo `cordova-2.6.0.js` archivo.

6.  Copiar el `res/xml/config.xml` para que coincida con el `framework/res/xml/config.xml`.

7.  Actualización `framework/res/xml/config.xml` tener configuración similar como lo hizo anteriormente.

8.  Copiar archivos de `bin/templates/cordova` del proyecto `cordova` directorio.

Ejecute `bin/update <project>` con la ruta del proyecto figuran en el directorio fuente Cordova.

## Actualizar a 2.5.0 desde 2.4.0

1.  Quitar `cordova-2.4.0.jar` del directorio de `libs` del proyecto.

2.  Añadir `cordova-2.5.0.jar` al directorio de `libs` del proyecto.

3.  Si usas Eclipse, por favor actualice su proyecto en Eclipse y hacer una limpia.

4.  Copiar el nuevo `cordova-2.5.0.js` en su proyecto.

5.  Actualiza su HTML para usar el nuevo `cordova-2.5.0.js` archivo.

6.  Copiar el `res/xml/config.xml` para que coincida con el `framework/res/xml/config.xml`.

7.  Actualización `framework/res/xml/config.xml` tener configuración similar como lo hizo anteriormente.

8.  Copiar archivos de `bin/templates/cordova` del proyecto `cordova` directorio.

## Actualizar a 2.4.0 de 2.3.0

1.  Quitar `cordova-2.3.0.jar` del directorio de `libs` del proyecto.

2.  Añadir `cordova-2.4.0.jar` al directorio de `libs` del proyecto.

3.  Si usas Eclipse, por favor actualice su proyecto en Eclipse y hacer una limpia.

4.  Copiar el nuevo `cordova-2.4.0.js` en su proyecto.

5.  Actualiza su HTML para usar el nuevo `cordova-2.4.0.js` archivo.

6.  Copiar el `res/xml/config.xml` para que coincida con el `framework/res/xml/config.xml`.

7.  Copiar los archivos de `bin/templates/cordova` para el proyecto `cordova` Directorio.

## Actualizar a 2.3.0 2.2.0

1.  Quitar `cordova-2.2.0.jar` del directorio de `libs` del proyecto.

2.  Añadir `cordova-2.3.0.jar` al directorio de `libs` del proyecto.

3.  Si usas Eclipse, por favor actualice su proyecto en Eclipse y hacer una limpia.

4.  Copiar el nuevo `cordova-2.3.0.js` en su proyecto.

5.  Actualiza su HTML para usar el nuevo `cordova-2.3.0.js` archivo.

6.  Copiar el `res/xml/config.xml` para que coincida con el `framework/res/xml/config.xml`.

7.  Copiar los archivos de `bin/templates/cordova` para el proyecto `cordova` Directorio.

## Actualizar a 2.2.0 de 2.1.0

1.  Quitar `cordova-2.1.0.jar` del directorio de `libs` del proyecto.

2.  Añadir `cordova-2.2.0.jar` al directorio de `libs` del proyecto.

3.  Si usas Eclipse, por favor actualice su proyecto en Eclipse y hacer una limpia.

4.  Copiar el nuevo `cordova-2.2.0.js` en su proyecto.

5.  Actualiza su HTML para usar el nuevo `cordova-2.2.0.js` archivo.

6.  Copia el `res/xml/config.xml` para que coincida con`framework/res/xml/config.xml`.

7.  Copiar archivos de `bin/templates/cordova` del proyecto `cordova` directorio.

## Actualizar a 2.1.0 desde 2.0.0

1.  Quitar `cordova-2.0.0.jar` del directorio de `libs` del proyecto.

2.  Añadir `cordova-2.1.0.jar` al directorio de `libs` del proyecto.

3.  Si usas Eclipse, por favor actualice su proyecto en Eclipse y hacer una limpia.

4.  Copiar el nuevo `cordova-2.1.0.js` en su proyecto.

5.  Actualiza su HTML para usar el nuevo `cordova-2.1.0.js` archivo.

6.  Copia el `res/xml/config.xml` para que coincida con`framework/res/xml/config.xml`.

7.  Copiar archivos de `bin/templates/cordova` del proyecto `cordova` directorio.

## Actualizar a 2.0.0 desde 1.9.0

1.  Quitar `cordova-1.9.0.jar` del directorio de `libs` del proyecto.

2.  Añadir `cordova-2.0.0.jar` al directorio de `libs` del proyecto.

3.  Si usas Eclipse, por favor actualice su proyecto en Eclipse y hacer una limpia.

4.  Copiar el nuevo `cordova-2.0.0.js` en su proyecto.

5.  Actualiza su HTML para usar el nuevo `cordova-2.0.0.js` archivo.

6.  Copia el `res/xml/config.xml` para que coincida con`framework/res/xml/config.xml`.

En la 2.0.0 versión, el archivo `config.xml` combina y reemplaza `cordova.xml` y `plugins.xml`. Los archivos son desaprobados y mientras que aún trabajan en 2.0.0, dejarán de funcionar en una futura versión.

## Actualizar a 1.9.0 desde 1.8.1

1.  Quitar `cordova-1.8.0.jar` del directorio de `libs` del proyecto.

2.  Añadir `cordova-1.9.0.jar` al directorio de `libs` del proyecto.

3.  Si usas Eclipse, por favor actualice su proyecto en Eclipse y hacer una limpia.

4.  Copie el nuevo `cordova-1.9.0.js` en su proyecto.

5.  Actualizar el código HTML para usar el nuevo archivo `cordova-1.9.0.js` .

6.  Actualización de `res/xml/plugins.xml` para que coincida con`framework/res/xml/plugins.xml`.

Debido a la introducción de la `CordovaWebView` en la 1.9.0 liberación, plugins de terceros pueden no funcionar. Estos plugins necesita para obtener un contexto de la `CordovaInterface` usando `getContext()` o `getActivity()`. Si no eres un experimentado Desarrollador Android, por favor póngase en contacto con el mantenedor del plugin y añadir esta tarea a su localizador de fallas.

## Actualizar a 1.8.0 desde 1.8.0

1.  Quitar `cordova-1.8.0.jar` del directorio de `libs` del proyecto.

2.  Añadir `cordova-1.8.1.jar` al directorio de `libs` del proyecto.

3.  Si usas Eclipse, por favor actualice su proyecto en Eclipse y hacer una limpia.

4.  Copie el nuevo `cordova-1.8.1.js` en su proyecto.

5.  Actualizar el código HTML para usar el nuevo archivo `cordova-1.8.1.js` .

6.  Actualización de `res/xml/plugins.xml` para que coincida con`framework/res/xml/plugins.xml`.

## Actualizar a 1.8.0 de 1.7.0

1.  Quitar `cordova-1.7.0.jar` del directorio de `libs` del proyecto.

2.  Añadir `cordova-1.8.0.jar` al directorio de `libs` del proyecto.

3.  Si usas Eclipse, por favor actualice su proyecto en Eclipse y hacer una limpia.

4.  Copiar el nuevo `cordova-1.8.0.js` en su proyecto.

5.  Actualiza su HTML para usar el nuevo `cordova-1.8.0.js` archivo.

6.  Actualización `res/xml/plugins.xml` para que coincida con`framework/res/xml/plugins.xml`.

## Actualizar a 1.8.0 de 1.7.0

1.  Quitar `cordova-1.7.0.jar` del directorio de `libs` del proyecto.

2.  Añadir `cordova-1.8.0.jar` al directorio de `libs` del proyecto.

3.  Si usas Eclipse, por favor actualice su proyecto en Eclipse y hacer una limpia.

4.  Copiar el nuevo `cordova-1.8.0.js` en su proyecto.

5.  Actualiza su HTML para usar el nuevo `cordova-1.8.0.js` archivo.

6.  Actualización `res/xml/plugins.xml` para que coincida con`framework/res/xml/plugins.xml`.

## Actualizar a 1.7.0 desde 1.6.1

1.  Quitar `cordova-1.6.1.jar` del directorio de `libs` del proyecto.

2.  Añadir `cordova-1.7.0.jar` al directorio de `libs` del proyecto.

3.  Si usas Eclipse, por favor actualice su proyecto en Eclipse y hacer una limpia.

4.  Copie el nuevo `cordova-1.7.0.js` en su proyecto.

5.  Actualización `res/xml/plugins.xml` para que coincida con`framework/res/xml/plugins.xml`.

## Actualizar a 1.6.1 desde 1.6.0

1.  Quitar `cordova-1.6.0.jar` del directorio de `bibliotecas` del proyecto.

2.  Añadir `cordova-1.6.1.jar` al directorio de `bibliotecas` del proyecto.

3.  Si usas Eclipse, por favor actualice su proyecto en Eclipse y hacer una limpia.

4.  Copie el nuevo `cordova-1.6.1.js` en su proyecto.

5.  Actualización `res/xml/plugins.xml` para que coincida con`framework/res/xml/plugins.xml`.

## Actualizar a 1.6.0 desde 1.5.0

1.  Quitar `cordova-1.5.0.jar` del directorio de `libs` del proyecto.

2.  Añadir `cordova-1.6.0.jar` al directorio de `libs` del proyecto.

3.  Si usas Eclipse, por favor actualice su proyecto en Eclipse y hacer una limpia.

4.  Copie el nuevo `cordova-1.6.0.js` en su proyecto.

5.  Actualizar el código HTML para usar el nuevo archivo `cordova-1.6.0.js` .

6.  Actualización de `res/xml/plugins.xml` para que coincida con el `framework/res/xml/plugins.xml`.

7.  Reemplazar `res/xml/phonegap.xml` por `res/xml/cordova.xml` hasta `framework/res/xml/cordova.xml`.

## Actualizar a 1.5.0 desde 1.4.0

1.  Retire `phonegap-1.4.0.jar` del directorio del proyecto `libs` .

2.  Añadir `cordova-1.5.0.jar` al directorio de `libs` del proyecto.

3.  Si usas Eclipse, por favor actualice su proyecto en Eclipse y hacer una limpia.

4.  Copie el nuevo `cordova-1.5.0.js` en su proyecto.

5.  Actualizar el código HTML para usar el nuevo archivo `cordova-1.5.0.js` .

6.  Actualización de `res/xml/plugins.xml` para que coincida con `framework/res/xml/plugins.xml`.

7.  Reemplazar `res/xml/phonegap.xml` por `res/xml/cordova.xml` hasta `framework/res/xml/cordova.xml`.

## Actualizar a 1.4.0 de 1.3.0

1.  Retire `phonegap-1.3.0.jar` del directorio del proyecto `libs` .

2.  Añadir `phonegap-1.4.0.jar` al directorio de `libs` del proyecto.

3.  Si usas Eclipse, por favor actualice su proyecto en Eclipse y hacer una limpia.

4.  Copie el nuevo `phonegap-1.4.0.js` en su proyecto.

5.  Actualizar el código HTML para usar el nuevo archivo `phonegap-1.4.0.js` .

6.  Actualización de `res/xml/plugins.xml` para que coincida con el `framework/res/xml/plugins.xml`.

7.  Actualización de `res/xml/phonegap.xml` para que coincida con`framework/res/xml/phonegap.xml`.

## Actualizar a 1.3.0 desde 1.2.0

1.  Retire `phonegap-1.2.0.jar` del directorio del proyecto `libs` .

2.  Añadir `phonegap-1.3.0.jar` al directorio de `libs` del proyecto.

3.  Si usas Eclipse, por favor actualice su proyecto en Eclipse y hacer una limpia.

4.  Copie el nuevo `phonegap-1.3.0.js` en su proyecto.

5.  Actualizar el código HTML para usar el nuevo archivo `phonegap-1.2.0.js` .

6.  Actualización de `res/xml/plugins.xml` para que coincida con`framework/res/xml/plugins.xml`.

7.  Actualización `res/xml/phonegap.xml` para que coincida con`framework/res/xml/phonegap.xml`.

## Actualizar a 1.2.0 desde 1.1.0

1.  Retire `phonegap-1.1.0.jar` del directorio del proyecto `libs` .

2.  Añadir `phonegap-1.2.0.jar` al directorio de `libs` del proyecto.

3.  Si usas Eclipse, por favor actualice su proyecto en Eclipse y hacer una limpia.

4.  Copie el nuevo `phonegap-1.2.0.js` en su proyecto.

5.  Actualizar el código HTML para usar el nuevo archivo `phonegap-1.2.0.js` .

6.  Actualización `res/xml/plugins.xml` para que coincida con`framework/res/xml/plugins.xml`.

7.  Actualización `res/xml/phonegap.xml` para que coincida con`framework/res/xml/phonegap.xml`.

## Actualizar a 1.1.0 desde 1.0.0

1.  Retire `phonegap-1.0.0.jar` del directorio del proyecto `libs` .

2.  Añadir `phonegap-1.1.0.jar` al directorio de `libs` del proyecto.

3.  Si utilizas Eclipse, por favor actualizar su proyecto de Eclipse y hacer una limpia.

4.  Copie el nuevo `phonegap-1.1.0.js` en su proyecto.

5.  Actualizar el código HTML para usar el nuevo archivo `phonegap-1.1.0.js` .

6.  Actualización `res/xml/plugins.xml` para que coincida con`framework/res/xml/plugins.xml`.

## Actualizar a 1.0.0 desde 0.9.6

1.  Retire `phonegap-0.9.6.jar` del directorio del proyecto `libs` .

2.  Añadir `phonegap-1.0.0.jar` al directorio de `libs` del proyecto.

3.  Si utilizas Eclipse, por favor actualizar su proyecto de Eclipse y hacer una limpia.

4.  Copie el nuevo `phonegap-1.0.0.js` en su proyecto.

5.  Actualizar el código HTML para usar el nuevo archivo `phonegap-1.0.0.js` .

6.  Agregar el `res/xml/plugins.xml` para que coincida con `framework/res/xml/plugins.xml`.