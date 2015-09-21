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

title: Perspectiva general
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

A partir de la versión 3.0, puede utilizar dos flujos de trabajo básicos para crear una aplicación móvil. Mientras que uno puede lograr lo mismo con ambos flujos de trabajo, ciertas tareas están más apropiadas usando un flujo de trabajo sobre el otro. Por esta razón, usted debe entender ambos flujos de trabajo de modo que puede utilizar la mejor herramienta para la mejor situación.

Los dos principales flujos de trabajo que son compatibles son el flujo de trabajo *Web proyecto Dev* y el flujo de trabajo *Nativo plataforma Dev* .

### Web proyecto Dev

Piensa el primer flujo de trabajo como el flujo de trabajo *Web proyecto Dev* . Este flujo de trabajo debe usar cuando desea crear una aplicación de Córdoba que se ejecuta en sistemas operativos móviles tantos como sea posible con el trabajo de desarrollo específico de plataforma tan poco como sea posible. Este flujo de trabajo entró en existencia con Cordova 3.0 y la creación de la Córdoba *interfaz de línea de comandos* (CLI). La CLI resúmenes a mucha de la funcionalidad de nivel inferior shell scripts que cuida los detalles implicados con la construcción de su aplicación, como copiar sus activos web en las carpetas correctas para cada plataforma móvil, realizar cambios de configuración específica de plataforma, o ejecutando específico crear scripts para generar los binarios de aplicación. Puedes leer más sobre el flujo de trabajo *Web proyecto Dev* en la interfaz de línea de comandos. Por favor tenga en cuenta que a menudo cuando se habla de "CLI", están hablando de este flujo de trabajo *Web proyecto Dev* .

### Plataforma nativa Dev

El segundo flujo de trabajo puede ser considerado como un flujo de trabajo *Nativo plataforma Dev* . Deberías usarlo cuando quiero enfocarme en la construcción de una aplicación para una plataforma única y está interesado en cambiar los detalles de la plataforma de nivel inferior. Mientras que todavía puede utilizar este flujo de trabajo para crear aplicaciones multiplataforma, la falta de herramientas para abstraernos de las diferentes etapas de la construcción dificulta más. Por ejemplo, tendrás que usar Plugman para instalar el plugin mismo una vez para cada plataforma que desea apoyar. El beneficio de usar este flujo de trabajo *Nativo plataforma Dev* es le da acceso a los scripts de shell de nivel inferior para construir y probar la aplicación, así que si te está pirateando nativa del lado de las cosas, este flujo de trabajo es la manera más eficiente para probar los cambios. Este flujo de trabajo también es adecuada si desea utilizar el CordovaWebView como una parte pequeña en una aplicación nativa más grande (consulte la guía de incrustación WebViews). Puedes leer acerca de este flujo de trabajo en las diferentes guías herramienta Shell, por ejemplo, guía de herramientas de Shell Android e iOS Guía de herramientas de Shell.

Cuando primero empezando, tal vez sea más fácil utilizar el flujo de trabajo *Web proyecto Dev* para crear una aplicación. (Para instalar la CLI, vea la interfaz de línea de comandos). Según el conjunto de plataformas de destino, usted puede confiar en la CLI para progresivamente mayores acciones del ciclo de desarrollo:

*   En el escenario más básico, puede utilizar el CLI simplemente para crear un nuevo proyecto que se rellena con la configuración por defecto para modificar.

*   Para muchas plataformas móviles, también puede utilizar la CLI para configurar los ficheros de proyecto adicional necesarios para compilar dentro de cada SDK. Para que funcione, es necesario instalar el SDK de la plataforma de cada destino. (Vea a las guías de plataforma para obtener instrucciones). Como se indica en la tabla de soporte de plataformas, necesitará ejecutar el CLI en diferentes sistemas operativos, dependiendo de la plataforma de destino.

*   Para apoyar las plataformas, la CLI puede compilar aplicaciones ejecutables y ejecutarlos en un emulador de dispositivos basados en SDK. Para la prueba integral, también puede generar archivos de aplicación e instalarlos directamente en un dispositivo.

En cualquier punto en el ciclo de desarrollo, puede cambiar a usar más el flujo de trabajo *Nativo plataforma Dev* . Las herramientas de específica de la plataforma SDK proporcionadas pueden proporcionar un rico conjunto de opciones. (Vea las guías de plataforma para obtener más información sobre herramienta de SDK de la plataforma cada conjunto).

Un entorno SDK es más apropiado si desea implementar una aplicación híbrida que combina componentes de la aplicación basada en web y nativas. Usted puede utilizar la utilidad de línea de comandos para generar inicialmente la aplicación, o iterativamente posteriormente para alimentar el código actualizado a SDK tools. Usted puede también constrúyete archivo de configuración de la aplicación. (Vea los detalles en el archivo config.xml).