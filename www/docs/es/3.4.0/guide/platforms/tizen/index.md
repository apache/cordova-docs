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

# Guía de la plataforma Tizen

Esta guía describe cómo configurar el entorno de desarrollo SDK para desplegar aplicaciones Cordova para dispositivos que ejecutan el sistema operativo de Tizen.

## Requisitos y apoyo

El SDK de Tizen requiere 10.04/10.10/11.04/11.10 Linux Ubuntu (32 bits) o Windows XP SP3/7 (32 bits).

Los desarrolladores deben usar la utilidad de `cordova` en conjunción con el SDK de Tizen. Ver la interfaz de línea de comandos para obtener información como instalarlo, agregar proyectos, entonces construir e implementar un proyecto.

## Instalar el SDK

Descargar el SDK de Tizen de [tizen.org][1].

 [1]: https://developer.tizen.org/sdk

<!--

- (optional) Install Tizen Cordova template projects: copy the
  `/templates` directory content into the Tizen Eclipse IDE web
  templates directory (e.g:
  `/home/my_username/tizen-sdk/IDE/Templates/web`).

- __Method #2: Use Tizen Eclipse IDE Cordova Tizen project templates__
    - Launch Tizen Eclipse IDE
    - Select  __File &rarr; New &rarr; Tizen Web Project__
    - Select __User Template__ and __User defined__ items
    - Select one of the Tizen Cordova template (e.g: __CordovaBasicTemplate__)
    - Fill the __Project name__ and its target __Location__

    ![](img/guide/platforms/tizen/project_template.png)

    - Click __Finish__

    ![](img/guide/platforms/tizen/project_explorer.png)

    - Your project should now appear in the __Project Explorer__ view

-->

## Abrir un proyecto en el SDK

1.  Lanzar el Tizen Eclipse IDE.

2.  Seleccione **archivo → Import → proyecto Tizen Web**:

    ![][2]

3.  Pulse **siguiente**.

4.  Asegúrese de **que seleccionar el directorio raíz** está activada.

5.  Asegúrese de **que copiar proyectos en espacio de trabajo** está activada.

6.  Pulse en **Browse** y seleccione el directorio del proyecto Cordova Tizen `samples` (por ejemplo `/ cordova-basic`):

    ![][3]

7.  Pulse **Finish**. Su proyecto debe ahora ser importado y aparecen en la vista **Project Explorer**:

    ![][4]

 [2]: {{ site.baseurl }}/static/img/guide/platforms/tizen/import_project.png
 [3]: {{ site.baseurl }}/static/img/guide/platforms/tizen/import_widget.png
 [4]: {{ site.baseurl }}/static/img/guide/platforms/tizen/project_explorer.png

Para reconstruir el proyecto, haga clic en la vista **Project Explorer** y seleccione **Build Project**:

![][5]

 [5]: {{ site.baseurl }}/static/img/guide/platforms/tizen/build_project.png

Debe generar un archivo de paquete de widget como *hello.wgt* en el directorio de raíz del proyecto.

## Desplegar en emulador

Haga clic derecho en el proyecto en la vista **Project Explorer** y seleccione **Run As → Tizen Web Simulator Application**:

![][6]

 [6]: {{ site.baseurl }}/static/img/guide/platforms/tizen/runas_web_sim_app.png

## Desplegar en el dispositivo

*   Asegúrese de que el dispositivo de destino correctamente es lanzado, conectado y configurado. Su configuración de **fecha y hora** debe configurarse correctamente.

*   Utilizar la vista **Explorador de conexión** para seleccionar el objetivo del despliegue de aplicación: **ventana → Mostrar vista → conexión Explorer**.

    ![][7]

*   Haga clic derecho en el proyecto en el **Explorador de proyecto** visión, luego seleccionar ejecutar como **& rarr; Aplicación Web Tizen**:

    ![][8]

 [7]: {{ site.baseurl }}/static/img/guide/platforms/tizen/connection_explorer.png
 [8]: {{ site.baseurl }}/static/img/guide/platforms/tizen/runas_web_app.png
