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

# Actualizar BlackBerry 10

Esta guía le muestra cómo modificar los proyectos de BlackBerry para actualizar desde versiones anteriores de Córdoba. La mayoría de estas instrucciones se aplica a proyectos creados con un mayor conjunto de herramientas de línea de comandos que preceden a la `cordova` utilidad de CLI. Vea la interfaz de línea de comandos para información de cómo actualizar la versión de la CLI.

## Actualización a 3.2.0 de 3.1.0

Para los proyectos que se crearon con el cordova CLI:

1.  Actualización de la `cordova` versión CLI. Vea la interfaz de línea de comandos.

2.  Ejecutar`cordova platform update blackberry`

Para proyectos no creados con el cordova CLI, ejecute:

        bin/update <project_path>
    

## Actualizar a 3.1.0 desde 3.0.0

1.  Crear un nuevo proyecto de Apache Cordova 3.1.0 usando el cordova CLI, tal como se describe en la interfaz de línea de comandos.

2.  Agregue sus plataformas al proyecto cordova, por ejemplo:`cordova
platform add blackberry10`.

3.  Copiar el contenido del proyecto original `www` Directorio del `www` Directorio en la raíz del proyecto cordova que acaba de crear.

4.  Copiar o sobrescribir ningún activo nativo de su proyecto original ( `Resources` , etc..)

5.  Copia del `config.xml` de archivos a la `www` Directorio y quite cualquier plugin definiciones. Tienes que modificar la configuración aquí más que en el directorio de plataforma.

6.  Utilice la herramienta CLI cordova instalar algún plugin que necesita. Tenga en cuenta que la CLI maneja todo núcleo APIs como plugins, así pueden necesitar ser agregado. Solo plugins marcó 3.0.0 y encima son compatibles con la CLI.

7.  Construir y probar.

Por favor tenga en cuenta que el CLI compatible con la plataforma BlackBerry10 exclusivamente. Para el libro de jugadas y BBOS, ver Cordova versión 2.9.0 magnetohidrodinámica y por debajo.

## Actualícese a la CLI (3.0.0) de 2.9.0 magnetohidrodinámica

1.  Crear un nuevo proyecto de Apache Cordova 3.0.0 usando el cordova CLI, tal como se describe en la interfaz de línea de comandos.

2.  Agregue sus plataformas al proyecto cordova, por ejemplo:`cordova
platform add blackberry10`.

3.  Copiar el contenido del proyecto original `www` Directorio del `www` Directorio en la raíz del proyecto cordova que acaba de crear.

4.  Copiar o sobrescribir ningún activo nativo de su proyecto original ( `Resources` , etc..)

5.  Copia del `config.xml` de archivos a la `www` Directorio y quite cualquier plugin definiciones. Tienes que modificar la configuración aquí más que en el directorio de plataforma.

6.  Utilice la herramienta CLI cordova instalar algún plugin que necesita. Tenga en cuenta que la CLI maneja todo núcleo APIs como plugins, así pueden necesitar ser agregado. Sólo 3.0.0 plugins son compatibles con la CLI.

7.  Construir y probar.

## Proyectos de modernización 2.8.0 a 2.9.0 magnetohidrodinámica

Para BlackBerry 10:

1.  Descargue y extraiga la fuente Cordova 2.9.0 magnetohidrodinámica a una ubicación de directorio permanente en tu disco duro, por ejemplo a`~/Cordova-2.9.0`.

2.  Dejar cualquier corriente SDK Herramientas: Eclipse, Momentics y similares.

3.  Desplácese hasta el directorio donde pusiste la fuente descargada anteriormente, utilizando un unix como terminal: Terminal.app Cygwin, Bash, etc..

4.  Crear un nuevo proyecto, como se describe en la guía de herramientas de Shell de BlackBerry. Esto se convierte en la página de inicio de tu proyecto actualizado.

5.  Copie su fuente de proyectos desde el viejo proyecto `/www` del proyecto nuevo directorio `/www` Directorio.

6.  Actualizar la referencia de script Cordova en el `www/index.html` archivo (y otros archivos que contienen la referencia de comandos) para que apunte a la nueva `cordova.js` archivo.

Para BlackBerryOS/Playbook:

1.  Descargue y extraiga la fuente Cordova 2.9.0 magnetohidrodinámica a una ubicación de directorio permanente en tu disco duro, por ejemplo a`~/Cordova-2.9.0`.

2.  Dejar cualquier corriente SDK Herramientas: Eclipse, Momentics y similares.

3.  Desplácese hasta el directorio donde pusiste la fuente descargada anteriormente, utilizando un unix como terminal: Terminal.app Cygwin, Bash, etc..

4.  Crear un nuevo proyecto, como se describe en iOS Guía de herramientas de Shell. Necesitas los activos de este nuevo proyecto.

5.  Copia el `www/cordova.js` archivo del nuevo proyecto en el `www` Directorio y eliminar el `www/cordova.js` archivo.

6.  Actualizar la referencia de script Cordova en el `www/index.html` archivo (y otros archivos que contienen la referencia de comandos) para que apunte a la nueva `cordova.js` archivo.

7.  Copia el `native` directorio desde el nuevo proyecto en el proyecto existente, sobrescribiendo el viejo `native` Directorio.

8.  Copia el `lib` directorio desde el nuevo proyecto en el proyecto existente, sobrescribiendo el viejo `lib` Directorio.

9.  Copia el `cordova` directorio desde el nuevo proyecto en el proyecto existente, sobrescribiendo el viejo `cordova` Directorio.

## Proyectos de modernización 2.7.0 a 2.8.0

BlackBerry 10 utiliza las nuevas herramientas de CLI y gestiona núcleo APIs como plugins. Las instrucciones de migran su proyecto a un nuevo proyecto, en lugar de actualizar un proyecto existente, debido a la complejidad de un proyecto de actualización. También nota que el js cordova de la escritura de archivos ahora se llama 'cordova.js' y ya no contiene una cadena de versión.

1.  Descargue y extraiga la fuente Cordova 2.8.0 a una ubicación de directorio permanente en tu disco duro, por ejemplo a`~/Cordova-2.8.0`.

2.  Dejar cualquier corriente SDK Herramientas: Eclipse, Momentics y similares.

3.  Desplácese hasta el directorio donde pusiste la fuente descargada anteriormente, utilizando un unix como terminal: Terminal.app Cygwin, Bash, etc..

4.  Crear un nuevo proyecto, como se describe en la guía de herramientas de Shell de BlackBerry. Esto se convierte en la página de inicio de tu proyecto actualizado.

5.  Copie su fuente de proyectos desde el viejo proyecto `/www` del proyecto nuevo directorio `/www` Directorio.

6.  Actualizar la referencia de script Cordova en el `www/index.html` archivo (y otros archivos que contienen la referencia de comandos) para que apunte a la nueva `cordova.js` archivo.

Para BlackBerryOS/Playbook:

1.  Descargue y extraiga la fuente Cordova 2.8.0 a una ubicación de directorio permanente en tu disco duro, por ejemplo a`~/Cordova-2.8.0`.

2.  Dejar cualquier corriente SDK Herramientas: Eclipse, Momentics y similares.

3.  Desplácese hasta el directorio donde pusiste la fuente descargada anteriormente, utilizando un unix como terminal: Terminal.app Cygwin, Bash, etc..

4.  Crear un nuevo proyecto, como se describe en iOS Guía de herramientas de Shell. Necesitas los activos de este nuevo proyecto.

5.  Copia el `www/cordova.js` archivo del nuevo proyecto en el `www` Directorio y eliminar el `www/cordova.js` archivo.

6.  Actualizar la referencia de script Cordova en el `www/index.html` archivo (y otros archivos que contienen la referencia de comandos) para que apunte a la nueva `cordova.js` archivo.

7.  Copia el `native` directorio desde el nuevo proyecto en el proyecto existente, sobrescribiendo el viejo `native` Directorio.

8.  Copia el `lib` directorio desde el nuevo proyecto en el proyecto existente, sobrescribiendo el viejo `lib` Directorio.

9.  Copia el `cordova` directorio desde el nuevo proyecto en el proyecto existente, sobrescribiendo el viejo `cordova` Directorio.

## Proyectos de modernización 2.6.0 a 2.7.0

1.  Descargue y extraiga la fuente Cordova 2.7.0 a una ubicación de directorio permanente en tu disco duro, por ejemplo a`~/Cordova-2.7.0`.

2.  Dejar cualquier corriente SDK Herramientas: Eclipse, Momentics y similares.

3.  Desplácese hasta el directorio donde pusiste la fuente descargada anteriormente, utilizando un unix como terminal: Terminal.app Cygwin, Bash, etc..

4.  Crear un nuevo proyecto, como se describe en la guía de herramientas de Shell de BlackBerry. Necesitas los activos de este nuevo proyecto.

5.  Copia el `www/cordova-2.7.0.js` archivo del nuevo proyecto en el `www` Directorio y eliminar el `www/cordova-2.6.0.js` archivo.

6.  Actualizar la referencia de script Cordova en el `www/index.html` archivo (y otros archivos que contienen la referencia de comandos) para que apunte a la nueva `cordova-2.7.0.js` archivo.

7.  Copia el `native` directorio desde el nuevo proyecto en el proyecto existente, sobrescribiendo el viejo `native` Directorio.

8.  Copia el `lib` directorio desde el nuevo proyecto en el proyecto existente, sobrescribiendo el viejo `lib` Directorio.

9.  Copia el `cordova` directorio desde el nuevo proyecto en el proyecto existente, sobrescribiendo el viejo `cordova` Directorio.

## Actualizar a 2.6.0 desde 2.5.0

Actualizar el directorio de descarga PhoneGap:

Se recomienda que usted descargar una copia nueva de todo el directorio.

Sin embargo, aquí están las nuevas piezas necesarias para la actualización gradual:

1.  Actualizar el archivo cordova.blackberry.js en la `Phonegap-2.6.0/lib/blackberry/javascript` Directorio.

2.  Actualización de la `ext` , `ext-air` , y `ext-qnx` en el `Phonegap-2.6.0/lib/blackberry/framework` Directorio.

3.  Actualización de la `build.xml` de los archivos en el `Phonegap-2.6.0/lib/blackberry` Directorio.

4.  Actualización del `Phonegap-2.6.0/lib/blackberry/bin` Directorio.

5.  Actualización de la `VERSION` de los archivos en el `Phonegap-2.6.0/lib/blackberry` Directorio.

Actualizando el ejemplo / proyecto de directorio o migrar existente:

1.  Abierta la `www` directorio que contiene la aplicación.

2.  Quitar y actualizar el archivo .jar en la `ext/` Directorio.

3.  Actualizar el contenido de la `ext-air/` Directorio.

4.  Actualizar el contenido de la `ext-qnx/` Directorio.

5.  Copie el nuevo `cordova-2.6.0.js` en su proyecto.

6.  Actualizar el código HTML para usar el nuevo `cordova-2.6.0.js` archivo.

## Actualizar a 2.5.0 desde 2.4.0

Actualizar el directorio de descarga PhoneGap:

Se recomienda que usted descargar una copia nueva de todo el directorio.

Sin embargo, aquí están las nuevas piezas necesarias para la actualización gradual:

1.  Actualizar el archivo cordova.blackberry.js en la `Phonegap-2.5.0/lib/blackberry/javascript` Directorio.

2.  Actualización de la `ext` , `ext-air` , y `ext-qnx` en el `Phonegap-2.5.0/lib/blackberry/framework` Directorio.

3.  Actualización de la `build.xml` de los archivos en el `Phonegap-2.5.0/lib/blackberry` Directorio.

4.  Actualización del `Phonegap-2.5.0/lib/blackberry/bin` Directorio.

5.  Actualización de la `VERSION` de los archivos en el `Phonegap-2.5.0/lib/blackberry` Directorio.

Actualizando el ejemplo / proyecto de directorio o migrar existente:

1.  Abierta la `www` directorio que contiene la aplicación.

2.  Quitar y actualizar el archivo .jar en la `ext/` Directorio.

3.  Actualizar el contenido de la `ext-air/` Directorio.

4.  Actualizar el contenido de la `ext-qnx/` Directorio.

5.  Copie el nuevo `cordova-2.5.0.js` en su proyecto.

6.  Actualizar el código HTML para usar el nuevo `cordova-2.5.0.js` archivo.

## Actualizar a 2.4.0 desde 2.3.0

Actualizar el `www` Directorio:

1.  Abierta la `www` directorio que contiene la aplicación.

2.  Quitar y actualizar el archivo .jar en la `ext/` Directorio.

3.  Actualizar el contenido de la `ext-air/` Directorio.

4.  Copie el nuevo `cordova-2.4.0.js` en su proyecto.
    
    *   Si el libro de jugadas, luego actualizar el .js archivo en el `playbook/` Directorio.
    *   Si BlackBerry 10, luego actualizar el archivo .js en el `qnx/` Directorio.

5.  Actualizar el código HTML para usar el nuevo `cordova-2.4.0.js` archivo.

Actualizar el directorio de muestra (es decir, actualización usando las herramientas de hormiga):

1.  Abierta la `sample/lib/` Directorio.

2.  Actualizar el archivo .jar en la `cordova.2.3.0/ext/` Directorio.

3.  Actualizar el contenido de la `cordova.2.3.0/ext-air/` Directorio.

4.  Actualizar el contenido de la `cordova.2.3.0/ext-qnx/` Directorio.

5.  Actualizar el archivo .js en el `cordova.2.3.0/javascript/` Directorio.

6.  Abierta la `sample/lib/` Directorio y renombrar el `cordova.2.3.0/` Directorio`cordova.2.4.0/`.

7.  Tipo `ant blackberry build` o `ant playbook build` para actualizar el `www` Directorio con Cordova actualizado.

8.  Abierta la `www` Directorio y actualizar el código HTML para usar el nuevo `cordova-2.4.0.js` archivo.

## Actualizar a 2.3.0 desde 2.2.0

Actualizar el `www` Directorio:

1.  Abierta la `www` directorio que contiene la aplicación.

2.  Quitar y actualizar el archivo .jar en la `ext/` Directorio.

3.  Actualizar el contenido de la `ext-air/` Directorio.

4.  Copie el nuevo `cordova-2.3.0.js` en su proyecto.
    
    *   Si el libro de jugadas, luego actualizar el .js archivo en el `playbook/` Directorio.
    *   Si BlackBerry 10, luego actualizar el archivo .js en el `qnx/` Directorio.

5.  Actualizar el código HTML para usar el nuevo `cordova-2.3.0.js` archivo.

Actualizar el directorio de muestra (es decir, actualización usando las herramientas de hormiga):

1.  Abierta la `sample/lib/` Directorio.

2.  Actualizar el archivo .jar en la `cordova.2.2.0/ext/` Directorio.

3.  Actualizar el contenido de la `cordova.2.2.0/ext-air/` Directorio.

4.  Actualizar el contenido de la `cordova.2.2.0/ext-qnx/` Directorio.

5.  Actualizar el archivo .js en el `cordova.2.2.0/javascript/` Directorio.

6.  Abierta la `sample/lib/` Directorio y renombrar el `cordova.2.2.0/` Directorio`cordova.2.3.0/`.

7.  Tipo `ant blackberry build` o `ant playbook build` para actualizar el `www` Directorio con Cordova actualizado.

8.  Abierta la `www` Directorio y actualizar el código HTML para usar el nuevo `cordova-2.3.0.js` archivo.

## Actualizar a 2.2.0 desde 2.1.0

Actualizar sólo el directorio www:

1.  Abierta la `www` directorio que contiene la aplicación.

2.  Quitar y actualizar el archivo .jar en la `ext/` Directorio.

3.  Actualizar el contenido de la `ext-air/` Directorio.

4.  Copie el nuevo `cordova-2.2.0.js` en su proyecto.
    
    *   Si el libro de jugadas, luego actualizar el .js archivo en el `playbook/` Directorio.
    *   Si BlackBerry 10, luego actualizar el archivo .js en el `qnx/` Directorio.

5.  Actualizar el código HTML para usar el nuevo `cordova-2.2.0.js` archivo.

Actualizar el directorio de muestra (es decir, actualización usando las herramientas de hormiga):

1.  Abierta la `sample/lib/` Directorio.

2.  Actualizar el archivo .jar en la `cordova.2.1.0/ext/` Directorio.

3.  Actualizar el contenido de la `cordova.2.1.0/ext-air/` Directorio.

4.  Actualizar el contenido de la `cordova.2.1.0/ext-qnx/` Directorio.

5.  Actualizar el archivo .js en el `cordova.2.1.0/javascript/` Directorio.

6.  Abierta la `sample/lib/` Directorio y renombrar el `cordova.2.1.0/` Directorio`cordova.2.2.0/`.

7.  Tipo `ant blackberry build` o `ant playbook build` para actualizar el `www` Directorio con Cordova actualizado.

8.  Abierta la `www` Directorio y actualizar el código HTML para usar el nuevo `cordova-2.2.0.js` archivo.

## Actualizar a 2.1.0 desde 2.0.0

Actualizar el `www` Directorio:

1.  Abierta la `www` directorio que contiene la aplicación.

2.  Quitar y actualizar el archivo .jar en la `ext/` Directorio.

3.  Actualizar el contenido de la `ext-air/` Directorio.

4.  Copie el nuevo `cordova-2.1.0.js` en su proyecto.
    
    *   Si el libro de jugadas, luego actualizar el .js archivo en el `playbook/` Directorio.

5.  Actualizar el código HTML para usar el nuevo `cordova-2.1.0.js` archivo.

Actualizar el directorio de muestra (es decir, actualización usando las herramientas de hormiga):

1.  Abierta la `sample/lib/` Directorio.

2.  Actualizar el archivo .jar en la `cordova.2.0.0/ext/` Directorio.

3.  Actualizar el contenido de la `cordova.2.0.0/ext-air/` Directorio.

4.  Actualizar el archivo .js en el `cordova.2.0.0/javascript/` Directorio.

5.  Abierta la `sample/lib/` Directorio y renombrar el `cordova.2.0.0/` Directorio`cordova.2.1.0/`.

6.  Tipo `ant blackberry build` o `ant playbook build` para actualizar el `www` Directorio con Cordova actualizado.

7.  Abierta la `www` Directorio y actualizar el código HTML para usar el nuevo `cordova-2.1.0.js` archivo.

## Actualizar a 2.0.0 desde 1.9.0

Actualizar el `www` Directorio:

1.  Abierta la `www` directorio que contiene la aplicación.

2.  Quitar y actualizar el archivo .jar en la `ext/` Directorio.

3.  Actualizar el contenido de la `ext-air/` Directorio.

4.  Copie el nuevo `cordova-2.0.0.js` en su proyecto.
    
    *   Si el libro de jugadas, luego actualizar el .js archivo en el `playbook/` Directorio.

5.  Actualizar el código HTML para usar el nuevo `cordova-2.0.0.js` archivo.

6.  Actualización de la `www/plugins.xml` archivo. Dos plugins cambió su etiqueta de servicio de nombres. Cambiar las entradas viejas para los plugins de captura y contacto:
    
        < nombre del plugin = "Capturar" value="org.apache.cordova.media.MediaCapture"/ >< nombre del plugin = "Contacto" value="org.apache.cordova.pim.Contact"/ >
        
    
    Para:
    
        < nombre del plugin = "Capturar" value="org.apache.cordova.capture.MediaCapture"/ >< nombre del plugin "Contactos" value="org.apache.cordova.pim.Contact"/ = >
        

Actualizar el directorio de muestra (es decir, actualización usando las herramientas de hormiga):

1.  Abierta la `sample/lib/` Directorio.

2.  Actualizar el archivo .jar en la `cordova.1.9.0/ext/` Directorio.

3.  Actualizar el contenido de la `cordova.1.9.0/ext-air/` Directorio.

4.  Actualizar el archivo .js en el `cordova.1.9.0/javascript/` Directorio.

5.  Abierta la `sample/lib/` Directorio y renombrar el `cordova.1.9.0/` Directorio`cordova.2.0.0/`.

6.  Tipo `ant blackberry build` o `ant playbook build` para actualizar el `www` Directorio con Cordova actualizado.

7.  Abierta la `www` Directorio y actualizar el código HTML para usar el nuevo `cordova-2.0.0.js` archivo.

8.  Abierta la `www` Directorio y actualizar el `plugins.xml` archivo. Dos plugins cambió su etiqueta de servicio de nombres. Cambiar las entradas viejas para los plugins de captura y contacto:
    
         <plugin name="Capture" value="org.apache.cordova.media.MediaCapture"/>
         <plugin name="Contact" value="org.apache.cordova.pim.Contact"/>
        
    
    Para:
    
         <plugin name="Capture" value="org.apache.cordova.capture.MediaCapture"/>
         <plugin name="Contacts" value="org.apache.cordova.pim.Contact"/>
        

*   Para actualizar a 1.8.0, por favor vaya de 1.7.0

## Actualizar a 1.8.0 de 1.7.0

Actualizar el `www` Directorio:

1.  Abierta la `www` directorio que contiene la aplicación.

2.  Quitar y actualizar el archivo .jar en la `ext/` Directorio.

3.  Actualizar el contenido de la `ext-air/` Directorio.

4.  Copie el nuevo `cordova-1.8.0.js` en su proyecto.
    
    *   Si el libro de jugadas, luego actualizar el .js archivo en el `playbook/` Directorio.

5.  Actualizar el código HTML para usar el nuevo `cordova-1.8.0.js` archivo.

6.  Actualización de la `www/plugins.xml` archivo. Dos plugins cambió su etiqueta de servicio de nombres. Cambiar las entradas viejas para los plugins de captura y contacto:
    
        < nombre del plugin = "Capturar" value="org.apache.cordova.media.MediaCapture"/ >< nombre del plugin = "Contacto" value="org.apache.cordova.pim.Contact"/ >
        
    
    Para:
    
        < nombre del plugin = "Capturar" value="org.apache.cordova.capture.MediaCapture"/ >< nombre del plugin "Contactos" value="org.apache.cordova.pim.Contact"/ = >
        

Actualizar el directorio de muestra (es decir, actualización usando las herramientas de hormiga):

1.  Abierta la `sample/lib/` Directorio.

2.  Actualizar el archivo .jar en la `cordova.1.7.0/ext/` Directorio.

3.  Actualizar el contenido de la `cordova.1.7.0/ext-air/` Directorio.

4.  Actualizar el archivo .js en el `cordova.1.7.0/javascript/` Directorio.

5.  Abierta la `sample/lib/` Directorio y renombrar el `cordova.1.7.0/` Directorio`cordova.1.8.0/`.

6.  Tipo `ant blackberry build` o `ant playbook build` para actualizar el `www` Directorio con Cordova actualizado.

7.  Abierta la `www` Directorio y actualizar el código HTML para usar el nuevo `cordova-1.8.0.js` archivo.

8.  Abierta la `www` Directorio y actualizar el `plugins.xml` archivo. Dos plugins cambió su etiqueta de servicio de nombres. Cambiar las entradas viejas para los plugins de captura y contacto:
    
         <plugin name="Capture" value="org.apache.cordova.media.MediaCapture"/>
         <plugin name="Contact" value="org.apache.cordova.pim.Contact"/>
        
    
    Para:
    
         <plugin name="Capture" value="org.apache.cordova.capture.MediaCapture"/>
         <plugin name="Contacts" value="org.apache.cordova.pim.Contact"/>