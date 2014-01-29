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

# Actualización de Windows Phone

Esta guía le muestra cómo modificar los proyectos de Windows Phone, ambas versiones 7 y 8 para actualizar desde versiones anteriores de Córdoba. La mayoría de estas instrucciones se aplica a proyectos creados con un mayor conjunto de herramientas de línea de comandos que preceden a la utilidad CLI `cordova`. Vea la interfaz de línea de comandos para información de cómo actualizar la versión de la CLI. La sección siguiente muestra cómo actualizar proyectos no-CLI.

## Actualizar a 3.2.0 de 3.1.0

Para los proyectos que se crearon con el cordova CLI:

1.  Actualización de la `cordova` versión CLI. Vea la interfaz de línea de comandos.

2.  Ejecute `cordova platform update wp8` (o `wp7` , por las plataformas que agregó a su proyecto).

Para proyectos no creados con el cordova CLI, ejecute:

        bin\update <project_path>
    

## Actualizar a 3.1.0 desde 3.0.0

Para los proyectos que se crearon con el cordova CLI:

1.  Actualización de la `cordova` versión CLI. Vea la interfaz de línea de comandos.

2.  Ejecute `cordova platform update wp8` (o `wp7` , por las plataformas que agregó a su proyecto).

Para proyectos no creados con el cordova CLI, ejecute:

        bin\update <project_path>
    

## Actualícese a la CLI (3.0.0) de 2.9.0 magnetohidrodinámica

1.  Crear un nuevo proyecto de Apache Cordova 3.0.0 usando el cordova CLI, tal como se describe en la interfaz de línea de comandos.

2.  Agregue sus plataformas al proyecto cordova, por ejemplo:`cordova
platform add wp7 wp8`.

3.  Copiar el contenido del proyecto `www` Directorio del `www` Directorio en la raíz del proyecto cordova que acaba de crear.

4.  Copiar o sobrescribir ningún activo nativo de su proyecto original ( `SplashScreen` , `ApplicationIcon` , etc.), lo que seguro para agregar los archivos nuevos a la `.csproj` archivo. Las ventanas teléfono construye proyecto dentro de la `platforms\wp7` o `platforms\wp8` Directorio.

5.  Utilice la herramienta CLI cordova instalar algún plugin que necesita. Tenga en cuenta que la CLI maneja todo núcleo APIs como plugins, así pueden necesitar ser agregado. Sólo 3.0.0 plugins son compatibles con la CLI.

6.  Construir y probar.

## Actualizar a 3.0.0 (non-CLI) desde 2.9.0 magnetohidrodinámica

En la ventana Explorador de soluciones de Visual Studio:

1.  Crear un nuevo Apache Cordova WP7 o WP8 3.0.0 del proyecto.

2.  Copiar el contenido de su directorio de `www` en el nuevo proyecto y asegúrese de que estos elementos se añaden al proyecto VS.

3.  Copiar y sobrescribir cualquier pantalla o icono imágenes.

4.  Copia sobre algún plugin de la `plugins` el nuevo directorio del proyecto y asegurar que también que se agregan al proyecto VS.

5.  Construir y probar.

**Nota**: todo núcleo APIs se extraen Cordova versión 3.0 y deben ser instaladas por separado como plugins. Para más información sobre cómo volver a habilitar estas funciones en un flujo de trabajo no-CLI, vea usando Plugman para gestionar Plugins.

## Actualizar a 2.9.0 magnetohidrodinámica de 2.8.0

En la ventana Explorador de soluciones de Visual Studio:

1.  Crear un nuevo Apache Cordova WP7 o WP8 2.9.0 magnetohidrodinámica de proyecto.

2.  Copiar el contenido de su directorio de `www` en el nuevo proyecto y asegúrese de que estos elementos se añaden al proyecto VS.

3.  Actualizar el nombre de `cordova.js` en la etiqueta HTML si todavía está usando cordova-VERSION.js (debería ser sólo`cordova.js`).

4.  Copiar y sobrescribir cualquier pantalla o icono imágenes.

5.  Copia sobre algún plugin de la `plugins` el nuevo directorio del proyecto y asegurar que también que se agregan al archivo .csproj.

6.  Construir y probar.

## Actualizar a 2.8.0 desde 2.7.0

En la ventana Explorador de soluciones de Visual Studio:

1.  Crear un nuevo Apache Cordova WP7 o WP8 2.8.0 del proyecto.

2.  Copiar el contenido de tu `www` Directorio para el nuevo proyecto y asegúrese de que estos elementos se añaden al proyecto VS.

3.  Actualizar el código HTML para usar el nuevo `cordova.js` archivo. (Nótese la falta de un número de versión en el nombre del fichero).

4.  Copiar y sobrescribir cualquier pantalla o icono imágenes.

5.  Copiar cualquier plugins desde el directorio de `plugins` para el nuevo proyecto y asegurar que también que se agregan al proyecto VS.

6.  Construir y probar.

## Actualizar a 2.7.0 desde 2.6.0

En la ventana Explorador de soluciones de Visual Studio:

1.  Crear un nuevo Apache Cordova WP7 o WP8 2.7.0 del proyecto.

2.  Copiar el contenido de tu `www` Directorio para el nuevo proyecto y asegúrese de que estos elementos se añaden al proyecto VS.

3.  Actualizar el código HTML para usar el nuevo `cordova-2.7.0.js` archivo.

4.  Copiar y sobrescribir cualquier pantalla o icono imágenes.

5.  Copia sobre algún plugin de la `plugins` el nuevo directorio del proyecto y asegurar que también que se agregan al proyecto VS.

6.  Construir y probar.

## Actualizar a 2.6.0 desde 2.5.0

En la ventana Explorador de soluciones de Visual Studio:

1.  Crear un nuevo Apache Cordova WP7 o WP8 2.6.0 del proyecto.

2.  Copiar el contenido de tu `www` Directorio para el nuevo proyecto y asegúrese de que estos elementos se añaden al proyecto VS.

3.  Actualizar el código HTML para usar el nuevo `cordova-2.6.0.js` archivo.

4.  Copiar y sobrescribir cualquier pantalla o icono imágenes.

5.  Copia sobre algún plugin de la `plugins` el nuevo directorio del proyecto y asegurar que también que se agregan al proyecto VS.

6.  Construir y probar.

## Actualizar a 2.5.0 desde 2.4.0

En la ventana Explorador de soluciones de Visual Studio:

1.  Crear un nuevo Apache Cordova WP7 o WP8 2.5.0 del proyecto.

2.  Copiar el contenido de tu `www` Directorio para el nuevo proyecto y asegúrese de que estos elementos se añaden al proyecto VS.

3.  Actualizar el código HTML para usar el nuevo `cordova-2.5.0.js` archivo.

4.  Copiar y sobrescribir cualquier pantalla o icono imágenes.

5.  Copia sobre algún plugin de la `plugins` el nuevo directorio del proyecto y asegurar que también que se agregan al proyecto VS.

6.  Construir y probar.

## Actualizar a 2.4.0 desde 2.3.0

En la ventana Explorador de soluciones de Visual Studio:

1.  Crear un nuevo Apache Cordova WP7 o WP8 2.4.0 del proyecto.

2.  Copiar el contenido de tu `www` Directorio para el nuevo proyecto y asegúrese de que estos elementos se añaden al proyecto VS.

3.  Actualizar el código HTML para usar el nuevo `cordova-2.4.0.js` archivo.

4.  Copiar y sobrescribir cualquier pantalla o icono imágenes.

5.  Copia sobre algún plugin de la `plugins` el nuevo directorio del proyecto y asegurar que también que se agregan al proyecto VS.

6.  Construir y probar.

## Actualizar a 2.3.0 desde 2.2.0

En la ventana Explorador de soluciones de Visual Studio:

1.  Crear un nuevo Apache Cordova WP7 2.3.0 del proyecto.

2.  Copiar el contenido de tu `www` Directorio para el nuevo proyecto y asegúrese de que estos elementos se añaden al proyecto VS.

3.  Actualizar el código HTML para usar el nuevo `cordova-2.3.0.js` archivo.

4.  Copiar y sobrescribir cualquier pantalla o icono imágenes.

5.  Copia sobre algún plugin de la `plugins` el nuevo directorio del proyecto y asegurar que también que se agregan al proyecto VS.

6.  Construir y probar.

## Actualizar a 2.2.0 desde 2.1.0

En la ventana Explorador de soluciones de Visual Studio:

1.  Crear un nuevo Cordova WP7 de Apache 2.2.0 del proyecto.

2.  Copiar el contenido de tu `www` Directorio para el nuevo proyecto y asegúrese de que estos elementos se añaden al proyecto VS.

3.  Actualizar el código HTML para usar el nuevo `cordova-2.2.0.js` archivo.

4.  Copiar y sobrescribir cualquier pantalla o icono imágenes.

5.  Copia sobre algún plugin de la `plugins` el nuevo directorio del proyecto y asegurar que también que se agregan al proyecto VS.

6.  Construir y probar.

## Actualizar a 2.1.0 desde 2.0.0

En la ventana Explorador de soluciones de Visual Studio:

1.  Crear un nuevo Apache Cordova WP7 2.1.0 del proyecto.

2.  Copiar el contenido de tu `www` Directorio para el nuevo proyecto y asegúrese de que estos elementos se añaden al proyecto VS.

3.  Actualizar el código HTML para usar el nuevo `cordova-2.1.0.js` archivo.

4.  Copiar y sobrescribir cualquier pantalla o icono imágenes.

5.  Copia sobre algún plugin de la `plugins` el nuevo directorio del proyecto y asegurar que también que se agregan al proyecto VS.

6.  Construir y probar.

## Actualizar a 2.0.0 desde 1.9.0

Han habido cambios considerables a la estructura del proyecto WP7 en Apache Cordova 2.0.0 esta actualización que hacen un poco más involucrados los demás. Esencialmente no es una actualización sino la creación de un nuevo proyecto y copia encima de archivos fuente.

En la ventana Explorador de soluciones de Visual Studio:

1.  Crear un nuevo proyecto Apache Cordova WP7 2.0.

2.  Copiar el contenido de tu `www` Directorio para el nuevo proyecto y asegúrese de que estos elementos se añaden al proyecto VS.

3.  Actualizar el código HTML para usar el nuevo `cordova-2.0.0.js` archivo.

4.  Copiar y sobrescribir cualquier pantalla o icono imágenes.

5.  Copia sobre algún plugin de la `plugins` el nuevo directorio del proyecto y asegurar que también que se agregan al proyecto VS.

6.  Construir y probar.

## Actualizar a 1.9.0 desde 1.8.0

En la ventana Explorador de soluciones de Visual Studio:

1.  Eliminar `GapLib/WP7CordovaClassLib.dll` de su proyecto.

2.  Eliminar la referencia a `WP7CordovaClassLib` en el directorio de **referencias**.

3.  Haga clic en **referencias** y seleccione **Agregar referencia**.

4.  Desplácese hasta la nueva distribución y agregar el archivo `WP7CordovaClassLib.dll`.
    
    **Nota**: puede ver la versión de la DLL haciendo clic derecho sobre la referencia y seleccionando **Propiedades**.

5.  Copie el nuevo `cordova-1.9.0.js` en su proyecto. (Asegúrese de que está marcado como contenido).

6.  Actualizar el código HTML para usar el nuevo `cordova-1.9.0.js` archivo.

## Actualizar a 1.8.0 de 1.7.0

En la ventana Explorador de soluciones de Visual Studio:

1.  Eliminar `GapLib/WP7CordovaClassLib.dll` de su proyecto.

2.  Eliminar la referencia a `WP7CordovaClassLib` en el directorio de **referencias**.

3.  Haga clic en **referencias** y seleccione **Agregar referencia**.

4.  Desplácese hasta la nueva distribución y agregar el archivo `WP7CordovaClassLib.dll`.
    
    **Nota**: puede ver la versión de la DLL haciendo clic derecho sobre la referencia y seleccionando **Propiedades**.

5.  Copie el nuevo `cordova-1.8.0.js` en su proyecto. (Asegúrese de que está marcado como contenido).

6.  Actualizar el código HTML para usar el nuevo `cordova-1.8.0.js` archivo.

## Actualizar a 1.7.0 desde 1.6.0

En la ventana Explorador de soluciones de Visual Studio:

1.  Eliminar `GapLib/WP7CordovaClassLib.dll` de su proyecto.

2.  Eliminar la referencia a `WP7CordovaClassLib` en el directorio de **referencias**.

3.  Haga clic en **referencias** y seleccione **Agregar referencia**.

4.  Desplácese hasta la nueva distribución y agregar el archivo `WP7CordovaClassLib.dll`.
    
    **Nota**: puede ver la versión de la DLL haciendo clic derecho sobre la referencia y seleccionando **Propiedades**.

5.  Copie el nuevo `cordova-1.7.0.js` en su proyecto. (Asegúrese de que está marcado como contenido).

6.  Actualizar el código HTML para usar el nuevo `cordova-1.7.0.js` archivo.

## Actualizar a 1.6.1 desde 1.6.0

En la ventana Explorador de soluciones de Visual Studio:

1.  Eliminar `GapLib/WP7CordovaClassLib.dll` de su proyecto.

2.  Eliminar la referencia a `WP7CordovaClassLib` en el directorio de **referencias**.

3.  Haga clic en **referencias** y seleccione **Agregar referencia**.

4.  Desplácese hasta la nueva distribución y agregar el archivo `WP7CordovaClassLib.dll`.
    
    **Nota**: puede ver la versión de la DLL haciendo clic derecho sobre la referencia y seleccionando **Propiedades**.

5.  Copie el nuevo `cordova-1.6.1.js` en su proyecto. (Asegúrese de que está marcado como contenido).

6.  Actualizar el código HTML para usar el nuevo `cordova-1.6.1.js` archivo.

## Actualizar a 1.6.0 desde 1.5.0

En la ventana Explorador de soluciones de Visual Studio:

1.  Eliminar `GapLib/WP7CordovaClassLib.dll` de su proyecto.

2.  Eliminar la referencia a `WP7CordovaClassLib` en el directorio de **referencias**.

3.  Haga clic en **referencias** y seleccione **Agregar referencia**.

4.  Desplácese hasta la nueva distribución y agregar el archivo `WP7CordovaClassLib.dll`.
    
    **Nota**: puede ver la versión de la DLL haciendo clic derecho sobre la referencia y seleccionando **Propiedades**.

5.  Copie el nuevo `cordova-1.6.0.js` en su proyecto. (Asegúrese de que está marcado como contenido).

6.  Actualizar el código HTML para usar el nuevo `cordova-1.6.0.js` archivo.

## Actualizar a 1.5.0 desde 1.4.0

En la ventana Explorador de soluciones de Visual Studio:

1.  Eliminar `GapLib/WP7CordovaClassLib.dll` de su proyecto.

2.  Eliminar la referencia a `WP7CordovaClassLib` en el directorio de **References**.

3.  Haga clic en **referencias** y seleccione **Agregar referencia**.

4.  Desplácese hasta la nueva distribución y agregar el archivo `WP7CordovaClassLib.dll`.
    
    **Nota**: puede ver la versión de la DLL haciendo clic derecho sobre la referencia y seleccionando **Propiedades**.

5.  Copie el nuevo `cordova-1.5.0.js` en su proyecto. (Asegúrese de que está marcado como contenido).

6.  Actualizar el código HTML para usar el nuevo `cordova-1.5.0.js` archivo.

## Actualizar a 1.4.0 de 1.3.0

En la ventana Explorador de soluciones de Visual Studio:

1.  Eliminar `GapLib/WP7CordovaClassLib.dll` de su proyecto.

2.  Eliminar la referencia a `WP7CordovaClassLib` en el directorio de **References**.

3.  Haga clic en **referencias** y seleccione **Agregar referencia**.

4.  **NOTA:** Puede ver la versión de la DLL haciendo clic derecho sobre la referencia y seleccionando **Properties**
    
    **Nota**: puede ver la versión de la DLL haciendo clic derecho sobre la referencia y seleccionando **Propiedades**.

5.  Copie el nuevo `cordova-1.4.0.js` en su proyecto. (Asegúrese de que está marcado como contenido).

6.  Actualizar el código HTML para usar el nuevo `cordova-1.4.0.js` archivo.

## Actualizar a 1.3.0 desde 1.2.0

En la ventana Explorador de soluciones de Visual Studio:

1.  Eliminar `GapLib/WP7CordovaClassLib.dll` de su proyecto.

2.  Eliminar la referencia a `WP7CordovaClassLib` en el directorio de **References**.

3.  Haga clic en **referencias** y seleccione **Agregar referencia**.

4.  Desplácese hasta la nueva distribución y agregar el archivo `WP7CordovaClassLib.dll`.
    
    **Nota**: puede ver la versión de la DLL haciendo clic derecho sobre la referencia y seleccionando **Propiedades**.

5.  Copie el nuevo `cordova-1.3.0.js` en su proyecto. (Asegúrese de que está marcado como contenido).

6.  Actualizar el código HTML para usar el nuevo `cordova-1.3.0.js` archivo.

## Actualizar a 1.2.0 desde 1.1.0

En la ventana Explorador de soluciones de Visual Studio:

1.  Eliminar `GapLib/WP7CordovaClassLib.dll` de su proyecto.

2.  Eliminar la referencia a `WP7CordovaClassLib` en el directorio de **referencias** .

3.  Haga clic en **referencias** y seleccione **Agregar referencia**.

4.  Desplácese hasta la nueva distribución y agregue el `WP7CordovaClassLib.dll` archivo.
    
    **Nota**: puede ver la versión de la DLL haciendo clic derecho sobre la referencia y seleccionando **Propiedades**.

5.  Copie el nuevo `cordova-1.2.0.js` en su proyecto. (Asegúrese de que está marcado como contenido).

6.  Actualizar el código HTML para usar el nuevo `cordova-1.2.0.js` archivo.

## Actualizar a 1.1.0 desde 1.0.0

En la ventana Explorador de soluciones de Visual Studio:

1.  Eliminar `GapLib/WP7CordovaClassLib.dll` de su proyecto.

2.  Eliminar la referencia a `WP7CordovaClassLib` en el directorio de **referencias** .

3.  Haga clic en **referencias** y seleccione **Agregar referencia**.

4.  Desplácese hasta la nueva distribución y agregue el `WP7CordovaClassLib.dll` archivo.
    
    **Nota**: puede ver la versión de la DLL haciendo clic derecho sobre la referencia y seleccionando **Propiedades**.

5.  Copie el nuevo `cordova-1.1.0.js` en su proyecto. (Asegúrese de que está marcado como contenido).

6.  Actualizar el código HTML para usar el nuevo `cordova-1.1.0.js` archivo.