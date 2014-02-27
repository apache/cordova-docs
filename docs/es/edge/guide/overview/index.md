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

La misma aplicación se implementa como una página web, llamado *index.html* por defecto, que hace referencia a cualquier CSS, JavaScript, imágenes, archivos multimedia, u otros recursos son necesarios para que se ejecute. La aplicación se ejecuta como un *WebView* dentro de la envoltura de la aplicación nativa, que distribuye a tiendas de aplicaciones.

El WebView Cordova habilitado puede proporcionar la aplicación con su interfaz de usuario completa. En algunas plataformas, también puede ser un componente dentro de una aplicación híbrida más grande, que mezcla la vista Web con componentes de la aplicación nativa. (Véase WebViews incrustación para más detalles).

Una interfaz *plugin* está disponible para Cordova y componentes nativos para comunicarse con los demás. A partir de la versión 3.0, plugins proporcionan enlaces a dispositivo estándar API. Plugins de terceros proporcionan enlaces adicionales a funciones no necesariamente disponibles en todas las plataformas. También puedes desarrollar tus propios plugins, como se describe en la guía de desarrollo Plugin. Plugins puede ser necesario, por ejemplo, para comunicarse entre Córdoba y componentes personalizados de nativos.

## Vías de desarrollo

A partir de la versión 3.0, puede utilizar dos flujos de trabajo básicos para crear una aplicación móvil. Mientras que a menudo puede utilizar cualquier flujo de trabajo para realizar la misma tarea, cada uno de ellos ofrece ventajas:

*   **Flujo de trabajo multiplataforma**: uso este flujo de trabajo si quieres tu aplicación para ejecutar en los sistemas operativos móviles como sea posible, con poco necesidad específica de la plataforma desarrollo. Este flujo de trabajo se centra en la `cordova` utilidad, también conocido como el *CLI*, que fue introducido con 3.0 Cordova Cordova. El CLI es una herramienta de alto nivel que le permite construir proyectos para muchas plataformas a la vez, muy lejos de la funcionalidad de scripts de shell de bajo nivel de abstracción. La CLI copia un conjunto común de web activos en subdirectorios para cada plataforma móvil, hace que cualquier cambio de configuración necesarias para cada uno, construir secuencias de comandos para generar los binarios de la aplicación ejecuta. La CLI también proporciona una interfaz común para aplicar plugins para su aplicación. (Para más detalles sobre el CLI, ver la interfaz de línea de comandos).

*   **Flujo de trabajo centrado en plataforma**: Utilice este flujo de trabajo si desea concentrarse en construir una aplicación para una sola plataforma y necesitan poder modificarlo en un nivel inferior. Tienes que utilizar este enfoque, por ejemplo, si quieres tu aplicación para mezclar los componentes nativos personalizados con componentes Cordova basados en web, como se explica en WebViews incrustación. Como regla general, utilice este flujo de trabajo si necesitas modificar el proyecto dentro del SDK. Este flujo de trabajo se basa en un conjunto de scripts de shell de nivel inferior que se adaptan para cada plataforma soportada y una utilidad de Plugman separada que le permite aplicar plugins. Mientras este flujo de trabajo puede utilizar para crear aplicaciones multiplataforma, es generalmente más difícil porque la falta de una herramienta de alto nivel significa construir diferentes ciclos y modificaciones de plugin para cada plataforma. Aún así, este flujo de trabajo permite un mayor acceso a opciones de desarrollo proporcionadas por cada SDK y es esencial para aplicaciones complejas híbrido. (Consulte a las diversas guías de plataforma para obtener más información sobre utilidades de cada plataforma shell disponible.)

Cuando primero empezando, puede ser más fácil utilizar el flujo de trabajo multiplataforma para crear una aplicación, tal como se describe en la interfaz de línea de comandos. Entonces tienes la opción de cambiar a un flujo de trabajo centrado en plataforma si necesitas el SDK proporciona un mayor control. Utilidades de shell de nivel inferior están disponibles en [cordova.apache.org][2] en una distribución independiente de la CLI. Para los proyectos generados inicialmente por la CLI, estas herramientas de shell también están disponibles en el proyecto de varios `platforms/*/cordova` directorios.

 [2]: http://cordova.apache.org

**Nota**: una vez que se cambia de los flujos de trabajo basados en CLI a uno centrado en la específica de la plataforma SDK y herramientas de shell, no puedes volver. La CLI mantiene un conjunto común de código fuente multiplataforma, que en cada uno a construir aplicaciones para escribir código fuente específica de la plataforma. Para conservar las modificaciones en los activos específicos a una plataforma, puede necesita cambiar las herramientas de plataforma centrada en la cáscara, que ignoran el código multiplataforma, y en cambio se basa en el código fuente específica de la plataforma.