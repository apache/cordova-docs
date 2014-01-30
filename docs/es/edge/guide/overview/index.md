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

# Perspectiva general

Cordova es un marco de desarrollo móvil de código abierto. Permite utilizar las tecnologías estándar web como HTML5, CSS3 y JavaScript para desarrollo multiplataforma, evitando el lenguaje de desarrollo nativo cada plataformas móviles. Aplicaciones ejecutan dentro de envolturas para cada plataforma y dependen de enlaces estándares API para acceder a de cada dispositivo sensores, datos y estado de la red.

Utilice Cordova si eres:

*   establecen un móvil desarrollador y desea extender una aplicación a través de más de una plataforma, sin tener que volver a implementarlo con el lenguaje y herramienta de cada plataforma.

*   un desarrollador web y desea implementar una aplicación web que se envasa para su distribución en varias app store portales.

*   un móvil desarrollador interesado en que se mezclan los componentes de la aplicación nativa con una *vista Web* (navegador) que puede tener acceso a las API de nivel de dispositivo, o si quiere desarrollar una interfaz plugin entre componentes WebView y nativos.

## Componentes básicos

Cordova aplicaciones se basan en un común `config.xml` archivo que proporciona información acerca de la aplicación y especifica los parámetros que afectan a cómo funciona, como si responde a la orientación cambia de puesto. Este archivo se adhiere a la especificación de [Empaquetado de la aplicación Web][1]o *widget*, de la W3C.

 [1]: http://www.w3.org/TR/widgets/

La misma aplicación se implementa como una página web, llamado *index.html* por defecto, que hace referencia a cualquier CSS, JavaScript, imágenes, archivos multimedia, u otros recursos son necesarios para que se ejecute. La aplicación se ejecuta como un *WebView* dentro de la envoltura de la aplicación nativa, que distribuye a tiendas de aplicaciones. De la aplicación web interactuar con varias características del dispositivo hacer las aplicaciones de forma nativas, lo debe hacer también referencia a un `cordova.js` archivo, el cual proporciona enlaces de API.

El WebView Cordova habilitado puede proporcionar la aplicación con su interfaz de usuario completa. También puede ser un componente dentro de una aplicación híbrida más grande, que mezcla la vista Web con componentes de una aplicación nativa. Cordova proporciona una interfaz de *plugin* para estos componentes para comunicarse con los demás.

## Vías de desarrollo

Es la forma más fácil de configurar una aplicación ejecutar el `cordova` utilidad de línea de comandos, también conocida como la *interfaz de línea de comandos* (CLI). (Para instalar la CLI, vea la interfaz de línea de comandos). Según el conjunto de plataformas de destino, usted puede confiar en la CLI para progresivamente mayores acciones del ciclo de desarrollo:

*   En el escenario más básico, puede utilizar el CLI simplemente para crear un nuevo proyecto que se rellena con la configuración por defecto para modificar.

*   Para muchas plataformas móviles, también puede utilizar la CLI para configurar los ficheros de proyecto adicional necesarios para compilar dentro de cada SDK. Para que funcione, es necesario instalar el SDK de la plataforma de cada destino. (Vea a las guías de plataforma para obtener instrucciones). Como se indica en la tabla de soporte de plataformas, necesitará ejecutar el CLI en diferentes sistemas operativos, dependiendo de la plataforma de destino.

*   Para apoyar las plataformas, la CLI puede compilar aplicaciones ejecutables y ejecutarlos en un emulador de dispositivos basados en SDK. Para la prueba integral, también puede generar archivos de aplicación e instalarlos directamente en un dispositivo.

En cualquier punto en el ciclo de desarrollo, también puede confiar en herramientas específicas para la plataforma SDK, que pueden proporcionar un rico conjunto de opciones. (Vea las guías de plataforma para obtener más información sobre herramienta de SDK de la plataforma cada conjunto). Un entorno SDK es más apropiado si desea implementar una aplicación híbrida que combina componentes de la aplicación basada en web y nativas. Usted puede utilizar la utilidad de línea de comandos para generar inicialmente la aplicación, o iterativamente posteriormente para alimentar el código actualizado a SDK tools. Usted puede también constrúyete archivo de configuración de la aplicación. (Vea los detalles en el archivo config.xml).