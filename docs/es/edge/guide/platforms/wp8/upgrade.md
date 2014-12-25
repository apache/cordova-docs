---
license: Licensed to the Apache Software Foundation (ASF) under one
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
---

# Actualización de Windows Phone 8

Esta guía le muestra cómo modificar Windows Phone 8 proyectos, para actualizar desde versiones anteriores de Córdoba. Algunas de estas instrucciones se aplican a proyectos creados con un mayor conjunto de herramientas de línea de comandos que preceden a la `cordova` utilidad de CLI. Vea la interfaz de línea de comandos para información de cómo actualizar la versión de la CLI. La sección siguiente muestra cómo actualizar proyectos no-CLI.

## Actualizar a 3.2.0 de 3.1.0

Para los proyectos que se crearon con el cordova CLI:

1.  Actualización de la `cordova` versión CLI. Vea la interfaz de línea de comandos.

2.  Ejecutar`cordova platform update wp8`

Para proyectos no creados con el cordova CLI, ejecute:

        bin\update < project_path >
    

## Actualizar a 3.1.0 desde 3.0.0

Para los proyectos que se crearon con el cordova CLI:

1.  Actualización de la `cordova` versión CLI. Vea la interfaz de línea de comandos.

2.  Ejecutar`cordova platform update wp8`

Para proyectos no creados con el cordova CLI, ejecute:

        bin\update < project_path >
    

## Actualícese a la CLI (3.0.0) de 2.9.0 magnetohidrodinámica

1.  Crear un nuevo proyecto de Apache Cordova 3.0.0 usando el cordova CLI, tal como se describe en la interfaz de línea de comandos.

2.  Agregue sus plataformas al proyecto cordova, por ejemplo:`cordova
platform add wp8`.

3.  Copie el contenido del directorio del proyecto `www` en el directorio `www` en la raíz del proyecto cordova que acaba de crear.

4.  Copiar o sobrescribir ningún activo nativo de su proyecto original (`SplashScreen`, `ApplicationIcon`, etc.), asegúrese de añadir nuevos archivos al archivo `.csproj`. Las ventanas teléfono construye proyecto dentro de la `platforms\wp8` Directorio.

5.  Utilice la herramienta CLI cordova instalar algún plugin que necesitas. Tenga en cuenta que el CLI maneja todo núcleo APIs como plugins, así pueden necesitar ser añadido. Sólo 3.0.0 plugins son compatibles con el CLI.

6.  Construir y probar.

## Actualizar a 3.0.0 (non-CLI) desde 2.x

En la ventana del explorador de soluciones de Visual Studio:

1.  Crear un nuevo Apache Cordova WP8 3.0.0 del proyecto.

2.  Copiar el contenido de la `www` Directorio para el nuevo proyecto y asegúrese de que estos elementos se añaden al proyecto VS.

3.  Copiar y sobrescribir cualquier pantalla de bienvenida, o imágenes de icono.

4.  Copiar cualquier plugins desde el directorio de `plugins` para el nuevo proyecto y asegurar que también que se agregan al proyecto VS.

5.  Construir y probar.

**Nota**: todo núcleo APIs se extraen Cordova versión 3.0 y deben ser instaladas por separado como plugins. Para más información sobre cómo volver a habilitar estas características en un flujo de trabajo no-CLI, vea usando Plugman para gestionar Plugins.