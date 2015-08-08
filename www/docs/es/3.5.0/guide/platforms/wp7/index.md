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

# Guía de la plataforma de Windows Phone 7

Esta guía le muestra cómo configurar el entorno de desarrollo SDK para desplegar aplicaciones Cordova para dispositivos Windows Phone 7. Aplicaciones también funcionan en Windows Phone 8 dispositivos utilizando los mismos APIs, pero versión 7 carece de algunas de las características avanzadas de IE10 disponibles en Windows Phone 8. Hacer Windows Phone 8 aplicaciones *no* funcionan en dispositivos Windows Phone 7.

Vea el siguiente para obtener más información específica de la plataforma que se aplica para las dos versiones:

*   Actualización de Windows Phone
*   Windows Phone Plugins
*   Windows Phone herramientas de línea de comandos

Las herramientas de línea de comandos anteriores se refieren a las versiones anteriores Cordova 3.0. Ver la interfaz de línea de comandos para obtener información sobre la interfaz actual.

## Requisitos del sistema

Utilice Windows 7 o Windows 8 (Pro) o Windows Vista con SP2. La versión de 64-bit (x 64) de Windows es necesaria para el SDK. La versión Pro se recomienda para correr un emulador de dispositivos.

Registrarse y pagar por una cuenta de [Windows Phone Dev Center][1] si desea instalar una aplicación en un dispositivo real o enviarlo al mercado.

 [1]: http://dev.windowsphone.com/en-us/publish

**Nota**: ejecuta el SDK en máquina Virtual puede presentar desafíos. Lee [Windows Phone en un Mac][2] para penetraciones en el desarrollo de soluciones.

 [2]: http://aka.ms/BuildaWP8apponaMac

## Instalar SDK y Cordova

Descargar e instalar el [SDK de Windows Phone][3].

 [3]: http://www.microsoft.com/download/en/details.aspx?displaylang=en&id=27570/

Descargar y descomprimir la copia más reciente de [Córdoba][4]. Usted necesita trabajar la `lib\windows-phone-8\wp7` subdirectorio, `lib\windows-phone-8\wp8` contiene la versión de Windows Phone 8 de Córdoba.

 [4]: http://phonegap.com/download

Copia el `CordovaWP7_x_x_x.zip` archivo a la `\My Documents\Visual
Studio 2012\Templates\ProjectTemplates\` Directorio.

## La plantilla del edificio

**Nota**: Omita este paso si el `lib\windows-phone` directorio ya contiene un `CordovaWP7_x_x_x.zip` archivo.

Para simplificar el desarrollo, Cordova lía un script para crear plantillas de Visual Studio. Esto permite generar rápidamente aplicaciones Cordova, y se les pueden modificar si es necesario. Los siguientes pasos muestran cómo generarlo.

### Ejecute el archivo por lotes para crear e instalar las plantillas

La raíz de la repo contiene un `createTemplates.bat` archivo. Haga doble clic en este archivo genera dos `.zip` archivos: `CordovaWP7_x_x_x.zip` y `CordovaWP8_x_x_x.zip` , donde *x.x.x* es el número de versión actual. Para utilizar estos archivos fácilmente en Visual Studio, cópielos a la `My Documents\Visual Studio
2012\Templates\ProjectTemplates\` subdirectorio. Entonces eres capaz de crear nuevas **aplicaciones Apache Cordova Windows Phone_ de Visual Studio __File → nuevo proyecto** menú.

Si ejecuta el archivo por lotes desde la línea de comandos, puede también llamar con un parámetro para instalar de forma automática:

        >createTemplates.bat -install


## Configurar un nuevo proyecto

*   Abra Visual Studio Express para Windows Phone y seleccione **Nuevo proyecto**.

*   Seleccione **CordovaWP7**. La muestra número de versión en la descripción de la plantilla.

*   Dar al proyecto un nombre y seleccione **OK**.

## Revisar la estructura del proyecto

La `www` características directory `html` , `js` , y `css` los subdirectorios y todos los demás recursos su aplicación requiere. Cualquier contenido adicional debe ser una parte del proyecto de Visual Studio, y debe insertarse como contenido.

La siguiente muestra estructura representa un 2.3.0 del proyecto, pero puede variar dependiendo de la versión instalada:

![][5]

 [5]: {{ site.baseurl }}/static/img/guide/platforms/wp8/projectStructure.png

## Genere el proyecto para el dispositivo

Antes de probar la aplicación en un dispositivo, el dispositivo debe estar registrado. Consulte la [documentación de Microsoft][6] para obtener más información sobre cómo implementar y probar en Windows Phone 7. Estos son los pasos básicos:

 [6]: http://msdn.microsoft.com/en-us/library/windowsphone/develop/ff402565(v=vs.105).aspx

*   Asegúrese de que su teléfono está conectado, y la pantalla se desbloquea.

*   En Visual Studio, seleccione el **dispositivo** en el menú desplegable en la parte superior.

*   Pulse el botón verde **jugar** junto al menú desplegable para iniciar depuración, o bien escriba **F5**.

![][7]

 [7]: {{ site.baseurl }}/static/img/guide/platforms/wp7/wpd.png

En este punto, ya está.
