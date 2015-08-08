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

## 1. Requisitos del sistema

*   Sistema operativo:

    *   Windows 7 o Windows 8 (Pro) o Windows Vista con SP2
        *   La versión de 64-bit (x 64) de Windows es necesaria para el SDK.
        *   La versión Pro se recomienda para correr un emulador de dispositivos.

*   Registrarse y pagar una cuenta de [Windows Phone Dev Center][1] si quieres instalar tu aplicación en un dispositivo real o enviarlo al mercado.

 [1]: http://dev.windowsphone.com/en-us/publish

**Nota:** Ejecuta el SDK en máquina Virtual puede presentar algunos desafíos. Puedes leer este post de blog que da información sobre las soluciones a desarrollar para [Windows Phone en un Mac][2].

 [2]: http://aka.ms/BuildaWP8apponaMac

## 2. Instalar el SDK + Cordova

*   Descargar e instalar el [SDK de Windows Phone][3]

*   Descargue y extraiga la última copia de [Cordova][4]. Se trabajará en la subcarpeta `lib\windows-phone-8\wp8`, `lib\windows-phone-8\wp7` contiene la versión de Windows Phone 7 de Córdoba.

*   Copie el archivo `CordovaWP7_x_x_x.zip` al directorio `\My Documents\Visual Studio 2012\Templates\ProjectTemplates\`.

 [3]: http://www.microsoft.com/download/en/details.aspx?displaylang=en&id=27570/
 [4]: http://phonegap.com/download

## 2.1. Construcción de la plantilla

**Nota:** este paso puede no ser necesario. Si el directorio lib\windows-teléfono ya contiene un archivo CordovaWP7\_x\_x_x.zip y luego usted puede omitir este paso.

Para simplificar el proceso de desarrollo, Cordova viene con un script para crear plantillas de Visual Studio. Esto permite la rápida creación de aplicaciones de Cordova dentro de Visual Studio. Esta plantilla puede modificarse si es necesario y los pasos siguientes indican cómo proceder si desea generar la plantilla.

### Ejecute el archivo por lotes para crear e instalar las plantillas.

*   La raíz de la repo contiene un archivo createTemplates.bat. Doble clic en este archivo genera 2 archivos .zip. (CordovaWP7\_x\_x\_x.zip + CordovaWP8\_x\_x\_x.zip donde x.x.x es el número de versión actual) Para utilizar estos archivos en Visual Studio, copia fácilmente a "Mis documentos\Visual Studio 2012\Templates\ProjectTemplates\" entonces serás capaz de crear nuevas aplicaciones Apache Cordova Windows Phone desde el archivo-> menú nuevo proyecto de Visual Studio.

*   Si ejecuta el archivo por lotes desde la línea de comandos, también se puede llamar con un parámetro para instalar de forma automática

Ejecute el script:

    >createTemplates.bat -install


## 3. Configure el nuevo proyecto

*   Abra Visual Studio Express para Windows Phone y seleccione **Nuevo proyecto**.

*   Seleccione **CordovaWP7**. (El número de versión se muestra en la descripción de la plantilla).

*   Dar al proyecto un nombre y seleccione **OK**.

## 4. Revisar la estructura del proyecto

*   El directorio `www` contiene tu Cordova `html/css/js` y cualquier otros recursos incluidos en su aplicación.

*   Cualquier contenido que usted agregar aquí debe ser una parte del proyecto de Visual Studio, y debe insertarse como contenido.

*   Nota: Esta captura de pantalla de la descarga de cordova-2.3.0 wp8, tu anuncio variará basado en la versión actual instalada.

![][5]

 [5]: {{ site.baseurl }}/static/img/guide/platforms/wp8/projectStructure.png

## 6. Construir su proyecto para el dispositivo

Con el fin de probar su aplicación en un dispositivo, el dispositivo debe estar registrado. Haga clic [aquí][6] para leer la documentación en la implementación y prueba en tu Windows Phone 7.

 [6]: http://msdn.microsoft.com/en-us/library/windowsphone/develop/ff402565(v=vs.105).aspx

*   Asegúrese de que su teléfono está conectado, y la pantalla se desbloquea.

*   En Visual Studio, seleccione 'Dispositivo' en el menú desplegable superior.

*   Pulse el botón verde **jugar** al lado del menú desplegable para empezar a depurar, o **F5**.

![][7]

 [7]: {{ site.baseurl }}/static/img/guide/platforms/wp7/wpd.png

## Hecho!
