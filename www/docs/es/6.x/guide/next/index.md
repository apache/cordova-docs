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

title: Próximos pasos
---

# Próximos pasos

Para los desarrolladores que tienen una comprensión de cómo utilizar el CLI Cordova y hacer uso de plugins, hay algunas cosas que usted puede desear considerar investigar junto a construir mejor, más performantes Cordova aplicaciones. El siguiente documento ofrece consejos sobre diversos temas relativos a las mejores prácticas, pruebas, actualizaciones y otros temas, pero no está destinado a ser prescriptivo. Considera esto como su punta de lanza para su crecimiento como desarrollador de Córdoba. Además, si ves algo que se puede mejorar, por favor [contribuir][1]!

 [1]: http://cordova.apache.org/#contribute

Esta guía contiene los siguientes temas:

*   Mejores prácticas
*   Manejo de actualizaciones
*   Prueba aplicaciones de Cordova
*   Depurar aplicaciones de Cordova
*   Interfaz de usuario
*   Consideraciones especiales
*   Mantenerse al día
*   Cómo obtener ayuda 

# Mejor desarrollo de aplicaciones prácticas Córdoba

## 1) SPA es tu amigo

Primero y más importante - sus aplicaciones Cordova deberían adoptar el diseño SPA (sola página aplicación). Vagamente definido, un SPA es una aplicación de cliente que se ejecuta desde una petición de una página web. El usuario carga un conjunto inicial de recursos (HTML, CSS y JavaScript) y más actualizaciones (mostrando una nueva vista, carga de datos) se realiza mediante AJAX. Balnearios comúnmente se utilizan para aplicaciones más complejas del lado del cliente. GMail es un gran ejemplo de esto. Después de cargar GMail, correo vistas, edición y organización se realizan mediante la actualización del DOM en lugar de en realidad dejar la página actual para cargar uno completamente nuevo.

Usando un SPA puede ayudarle a organizar su solicitud de una manera más eficiente, pero también tiene beneficios específicos para aplicaciones de Córdoba. Una aplicación de Córdoba debe esperar para que el evento [deviceready](../../cordova/events/events.deviceready.html) disparar antes de que puede utilizarse cualquier plugins. Si usted no utiliza un SPA, y el usuario hace clic en ir de una página a otra, tendrás que esperar a que [deviceready](../../cordova/events/events.deviceready.html) disparar otra vez antes de hacer uso de un plugin. Esto es fácil de olvidar como su aplicación consigue más grande.

Incluso si usted decide no utilizar Cordova, creando una aplicación móvil sin necesidad de utilizar una arquitectura única página tendrá consecuencias graves rendimiento. Esto es porque navegando entre páginas requerirá guiones, activos, etc., para ser recargadas. Incluso si estos activos se almacenan en caché, todavía habrá problemas de performance.

Son ejemplos de bibliotecas SPA que se pueden utilizar en sus aplicaciones de Córdoba:

*   [AngularJS][2]
*   [EmberJS][3]
*   [Columna vertebral][4]
*   [Kendo UI][5]
*   [Monaca][6]
*   [ReactJS][7]
*   [Sencha Touch][8]
*   [jQuery Mobile][9]

 [2]: http://angularjs.org
 [3]: http://emberjs.com
 [4]: http://backbonejs.org
 [5]: http://www.telerik.com/kendo-ui
 [6]: http://monaca.mobi/en/
 [7]: http://facebook.github.io/react/
 [8]: http://www.sencha.com/products/touch/
 [9]: http://jquerymobile.com

Y muchos, muchos más.

## 2) consideraciones de rendimiento

Uno de los mayores errores que puede hacer un nuevo desarrollador Cordova es suponer que el rendimiento que sacan de una máquina de escritorio es el mismo que van a salir en un dispositivo móvil. Mientras que nuestros dispositivos móviles han conseguido más de gran alcance cada año, todavía carecen de la potencia y el rendimiento de un ordenador de sobremesa. Dispositivos móviles suelen tienen mucho menos memoria RAM y una GPU que dista mucho de su escritorio (o incluso portátil) hermanos. Una lista completa de sugerencias aquí sería demasiado, pero aquí están algunas cosas a tener en cuenta (con una lista de más recursos al final para futuras investigaciones).

**Haga clic en comparación con tacto** - el error más grande y más simple que usted puede hacer es utilizar eventos de clic. Mientras estos "trabajaren" muy bien en el móvil, mayoría de los dispositivos impone un retraso de 300ms sobre ellos con el fin de distinguir entre un toque y un toque "hold" evento. Usando `touchstart` , o `touchend` , resultará en una mejora dramática - 300ms no parece mucho, pero puede resultar en un desigual comportamiento y las actualizaciones de la interfaz de usuario. También debe considerar el hecho de que "tocar" eventos no son compatibles en los navegadores no-webkit, ver [CanIUse][10]. Con el fin de hacer frente a estas limitaciones, puedes retirada varias bibliotecas como HandJS y Fastouch.

 [10]: http://caniuse.com/#search=touch

**Las transiciones CSS versus manipulación DOM** - usando las transiciones CSS hardware acelerado será significativamente mejor que usando JavaScript para crear animaciones. Ver la lista de recursos al final de esta sección para ver ejemplos.

**Redes chupa** - Ok, redes no siempre apestan, pero la latencia de las redes móviles, redes móviles incluso buenas, es peor que ustedes piensan. Una aplicación de escritorio que sorbe abajo 500 filas de datos JSON, cada 30 segundos, será más lento en un dispositivo móvil, así como un cerdo de batería. Tenga en cuenta que las apps Cordova tienen múltiples maneras de conservar los datos en la aplicación (LocalStorage y el sistema de archivos por ejemplo). Almacenar en caché datos localmente y ser consciente de la cantidad de datos que envía hacia adelante y hacia atrás. Esta es una consideración especialmente importante cuando la aplicación está conectada en una red celular.

**Recursos y artículos de rendimiento adicional**

*   ["Usted medio culos"][11]
*   ["Los mejores diez consejos de rendimiento para aplicaciones híbridas y PhoneGap"][12]
*   ["Rápidas aplicaciones y sitios con JavaScript"][13]

 [11]: http://sintaxi.com/you-half-assed-it
 [12]: http://coenraets.org/blog/2013/10/top-10-performance-techniques-for-phonegap-and-hybrid-apps-slides-available/
 [13]: https://channel9.msdn.com/Events/Build/2013/4-313

## 3) reconocer y manejar el estado Offline

Ver los consejos anteriores sobre redes. No sólo puede ser una red lenta, es totalmente posible para su aplicación a estar completamente fuera de servicio. Su aplicación debe manejarlo de una manera inteligente. Si su aplicación no, la gente pensará que su aplicación está rota. Teniendo en cuenta lo fácil que es manejar (Cordova soporta ambos un evento offline y online), no hay ninguna razón para que su aplicación no responden bien cuando se ejecuta fuera de línea. Asegúrese de probar (véase la sección de pruebas) la aplicación y asegúrese de probar cómo maneja su aplicación al iniciar en un estado y luego cambiar a la otra.

Tenga en cuenta que los eventos online y offline, así como la API de conexión de red no es perfecta. Puede que necesites recurrir a mediante una petición XHR para ver si el dispositivo está verdaderamente fuera de línea o en línea. Al final del día, ser seguro que añadir algún tipo de ayuda para problemas de la red - de hecho, la tienda de Apple (y probablemente otras tiendas) rechazará apps que no manejarán adecuadamente los Estados offline y online. Para más información sobre este tema, vea ["Está esta cosa?"][14]

 [14]: http://blogs.telerik.com/appbuilder/posts/13-04-23/is-this-thing-on-%28part-1%29

# Manejo de actualizaciones

## Cordova proyectos de mejora

Si su proyecto existente fue creado usando Cordova 3.x, puede actualizar el proyecto mediante la emisión de los siguientes:

    Cordova plataforma actualización plataforma-nombre ios, android, etc..
    

Si su proyecto existente se creó en una versión anterior Cordova 3.x, probablemente sería mejor crear un nuevo proyecto de Cordova 3.x y luego copiar código y activos existentes de su proyecto para el nuevo proyecto. Pasos habituales:

*   Crear un nuevo proyecto de Cordova 3.x (cordova crear...)
*   Copia la carpeta www de su viejo proyecto para el nuevo proyecto
*   Copiar cualquier configuración del viejo proyecto para el nuevo proyecto
*   Añadir algún plugin usado en el viejo proyecto para el nuevo proyecto
*   Construya su proyecto
*   Prueba, prueba, prueba!

Independientemente de la versión anterior del proyecto, es imprescindible que lea sobre lo que cambió en la versión actualizada, ya que la actualización puede romper su código. Será el mejor lugar para encontrar esta información en las notas publicadas en el blog de Cordova tanto en los repositorios. Usted querrá probar su aplicación cuidadosamente para verificar que está funcionando correctamente después de realizar la actualización.

Nota: algunos plugins no sean compatibles con la nueva versión de Córdoba. Si un plugin no es compatible, usted puede ser capaz de encontrar un plugin de reemplazo que hace lo que usted necesita, o puede que necesites retrasar la actualización de su proyecto. Alternativamente, alterar el plugin para que funcione bajo la nueva versión y contribuir a la comunidad.

## Actualizaciones del plugin

A partir de 3.4 Cordova, no hay ningún mecanismo para actualizar plugins cambiante utilizando un único comando. En cambio, quitar el plugin y agregar nuevamente a su proyecto, y se instalará la nueva versión:

    Cordova plugin rm com.some.plugin cordova plugin agregar com.some.plugin
    

Asegúrese de consultar la documentación del plugin actualizado, como puede que deba ajustar el código para trabajar con la nueva versión. También, asegurate de que la nueva versión del plugin funciona con la versión de su proyecto de Córdoba.

Siempre pruebe sus aplicaciones para asegurarse de que instalar el nuevo plugin no ha roto algo que no previó.

Si su proyecto tiene un montón de plugins que necesitas actualizar, puede salvar tiempo para crear un script de shell o lote que quita y agrega los plugins con un solo mando.

# Prueba aplicaciones de Cordova

Prueba de sus aplicaciones es súper importante. El equipo de Córdoba utiliza jazmín pero hará ninguna solución prueba web unidad amigable.

## Pruebas en un simulador de vs en un dispositivo real

No es infrecuente usar los navegadores de escritorio y dispositivos simuladores/emuladores al desarrollar una aplicación de Córdoba. Sin embargo, es muy importante que pruebe su aplicación en dispositivos físicos tantos como puedas:

*   Simuladores son sólo eso: simuladores. Por ejemplo, su aplicación puede trabajar en el simulador de iOS sin problema, pero no puede fallar en un dispositivo real (especialmente en determinadas circunstancias, como un estado bajo de memoria). O bien, su aplicación puede fallar en realidad en el simulador mientras que funciona bien en un dispositivo real. 
*   Emuladores son sólo eso: emuladores. No representan así su aplicación se ejecuta en un dispositivo físico. Por ejemplo, algunos emuladores pueden procesar su aplicación con una pantalla de confusa, mientras que un dispositivo real no tiene ningún problema. (Si encuentra este problema, deshabilite el anfitrión GPU en el emulador).
*   Simuladores son generalmente más rápidos que su dispositivo físico. Emuladores, por el contrario, son generalmente más lentos. No juzgo el rendimiento de su aplicación por cómo se realiza en un simulador o un emulador. Juzgar el rendimiento de su aplicación por cómo se ejecuta en un espectro de dispositivos reales.
*   Es imposible conseguir una buena sensación de cómo su aplicación responde al tacto mediante el uso de un simulador o un emulador. En cambio, ejecutando la aplicación en un dispositivo real puede señalar problemas con los tamaños de los elementos de la interfaz de usuario, capacidad de respuesta, etc..
*   Aunque sería agradable poder probar solamente en un dispositivo por plataforma, es mejor poner a prueba en muchos dispositivos deportivos muchas versiones diferentes del sistema operativo. Por ejemplo, lo que funciona en tu smartphone Android particular puede fallar en otro dispositivo Android. Lo que funciona en un dispositivo iOS 7 puede fallar en un dispositivo iOS 6.

Es, por supuesto, imposible de probar en todos los dispositivos posibles en el mercado. Por este motivo, es aconsejable reclutar muchos probadores que tienen diferentes dispositivos. Aunque no cogerán todos los problemas, más probable es que descubrirán rarezas y temas que nunca encontrarás solo buena.

Sugerencia: Es posible en dispositivos Android Nexus a flash fácilmente distintas versiones de Android en el dispositivo. Este simple proceso le permitirá probar fácilmente su aplicación en diferentes niveles de Android con un solo dispositivo, sin anular su garantía o necesidad para "jailbreak" o "raíz" de su dispositivo. Las imágenes de fábrica de Google Android y las instrucciones se encuentran en: https://developers.google.com/android/nexus/images#instructions

# Depurar aplicaciones de Cordova

Depuración Cordova requiere una configuración. A diferencia de una aplicación de escritorio, no puedes simplemente open dev herramientas del dispositivo móvil y empezar a depurar, por suerte hay algunas grandes alternativas.

## iOS depuración

### Xcode

Con Xcode puede depurar el lado nativo iOS de la aplicación de Córdoba. Asegúrese de que la zona de depuración está mostrando (vista-> área de depuración). Una vez que su aplicación se ejecuta en el dispositivo (o simulador), usted puede ver registro de salida en la zona de depuración. Esto es donde se imprimirán los errores o advertencias. También puede establecer puntos de interrupción en los archivos fuente. Esto le permitirá dar un paso a través de la línea de un código en un momento y ver el estado de las variables en aquel momento. El estado de las variables se muestra en el área de depuración cuando se alcanza un punto de interrupción. Una vez que su aplicación está en marcha en el dispositivo, puede traer a inspector de Safari web (como se describe a continuación) para depurar el lado webview y js de su aplicación. Para más información y ayuda, consulte la guía de Xcode: [Guía de depuración de Xcode][15]

 [15]: https://developer.apple.com/library/mac/documentation/ToolsLanguages/Conceptual/Xcode_Overview/DebugYourApp/DebugYourApp.html#//apple_ref/doc/uid/TP40010215-CH18-SW1

### Safari remoto depuración con Web Inspector

Con el inspector web de Safari puede depurar el código webview y js en su aplicación de Córdoba. Esto funciona sólo en OSX y sólo con iOS 6 (o superior). Utiliza Safari para conectarse a su dispositivo (o el simulador) y conectará herramientas del revelador del navegador con la aplicación de Córdoba. Obtienes lo que esperas de dev tools - DOM inspección/manipulación, un depurador de JavaScript, inspección de la red, la consola y mucho más. Como Xcode, con inspector de Safari web puede establecer puntos de interrupción en el código JavaScript y ver el estado de las variables en aquel momento. Usted puede ver los errores, advertencias o mensajes que aparecen en la consola. También puede ejecutar comandos JavaScript directamente desde la consola como su aplicación se está ejecutando. Para más detalles sobre cómo ponerlo en marcha y lo que puedes hacer, ver este excelente blog post: <http://moduscreate.com/enable-remote-web-inspector-in-ios-6/> y esta guía: [Guía de Safari Web Inspector][16]

 [16]: https://developer.apple.com/library/safari/documentation/AppleApplications/Conceptual/Safari_Developer_Guide/Introduction/Introduction.html

## Depuración remota de cromo

Prácticamente lo mismo que la versión de Safari, esto sólo funciona con Android pero puede ser utilizada desde cualquier sistema operativo de escritorio. Se requiere un mínimo de Android 4.4 (KitKat), mínimo nivel de API de 19 y cromo 30 + (en el escritorio). Una vez conectado, obtendrá la misma experiencia de Chrome Dev Tools para sus aplicaciones móviles como haces con tus aplicaciones de escritorio. Mejor aún, el Chrome Dev Tools tener una opción de espejo que muestra su aplicación en el dispositivo móvil. Esto es más que una visión - puede desplazarse y haga clic en herramientas dev y se actualiza en el dispositivo móvil. Más información sobre la depuración remota de cromo puede encontrarse aquí: <https://developers.google.com/chrome/mobile/docs/debugging>

Es posible usar Chrome Dev Tools para inspeccionar las apps iOS, a través de un proxy de WebKit: <https://github.com/google/ios-webkit-debug-proxy/>

## Ripple

Ripple es un emulador basado en escritorio para proyectos de Córdoba. Esencialmente le permite ejecutar una aplicación Cordova en su aplicación de escritorio y falsos varias características de Córdoba. Por ejemplo, le permite simular el acelerómetro para probar el batido de eventos. Simula la cámara API le permite seleccionar una imagen desde tu disco duro. Ondulación le permite que enfocarse más en tu código personalizado en lugar de preocuparse por Cordova plugins. Usted puede encontrar más información acerca de ondulación aquí: <http://ripple.incubator.apache.org/>

## Weinre

Weinre crea un servidor local que puede albergar a un cliente depuración remota para sus aplicaciones de Córdoba. Después de haber instalado y puso en marcha, copie una línea de código en la aplicación de Cordova y reinícielo. Luego puedes abrir un panel de la herramienta dev en tu escritorio para trabajar con la aplicación. Weinre no es bastante tan elegante como cromo y depuración remota de Safari, pero tiene la ventaja de trabajar con una gama más amplia de plataformas y sistemas operativos. Puede encontrar más información aquí: <http://people.apache.org/~pmuellr/weinre/docs/latest/>

## Otras opciones

*   BlackBerry 10 soporta depuración así como: [documentación][17]
*   Puede depurar usando Firefox App Manager así, vea [esta entrada de blog][18] y este [artículo MDN][19].
*   Para más ejemplos y explicación de los anteriores consejos de depuración, vea: <http://developer.telerik.com/featured/a-concise-guide-to-remote-debugging-on-ios-android-and-windows-phone/>

 [17]: https://developer.blackberry.com/html5/documentation/v2_0/debugging_using_web_inspector.html
 [18]: https://hacks.mozilla.org/2014/02/building-cordova-apps-for-firefox-os/
 [19]: https://developer.mozilla.org/en-US/Apps/Tools_and_frameworks/Cordova_support_for_Firefox_OS#Testing_and_debugging

# Interfaz de usuario

Creación de una aplicación de Córdoba que queda bien móvil puede ser un desafío, especialmente para los desarrolladores. Mucha gente optó por usar un marco de interfaz de usuario para hacerlo más fácil. Aquí está una lista corta de las opciones que usted puede desear considerar.

*   [jQuery Mobile][9] - jQuery Mobile automáticamente realza su diseño para la optimización del móvil. También maneja creando un SPA para usted automáticamente.
*   [iónico][20] -este potente entorno de interfaz de usuario en realidad tiene su propio CLI para manejar la creación del proyecto. 
*   [Trinquete][21] - traído a usted por la gente que creó Bootstrap. 
*   [Kendo UI][5] - interfaz de usuario de código abierto y marco de aplicación de Telerik.
*   [TOPCOAT][22]
*   [ReactJS][7]

 [20]: http://ionicframework.com/
 [21]: http://goratchet.com/
 [22]: http://topcoat.io

Al construir la interfaz de usuario, es importante pensar en todas las plataformas que está atacando y las diferencias entre las expectativas del usuario. Por ejemplo, una aplicación para Android que tiene una interfaz de usuario estilo iOS probablemente no va bien con los usuarios. Esto a veces es incluso aplicada por las diferentes tiendas de aplicaciones. Debido a esto, es importante que respeten las convenciones de cada plataforma y por lo tanto están familiarizados con las diversas directrices de interfaz humana:

*   [iOS][23]
*   [Android][24]
*   [Windows Phone][25]

 [23]: https://developer.apple.com/library/ios/documentation/userexperience/conceptual/MobileHIG/index.html
 [24]: https://developer.android.com/designWP8
 [25]: http://dev.windowsphone.com/en-us/design/library

## Recursos y artículos adicionales UI

Aunque los motores navegador convertido en queja estándares cada vez más, vivimos en un mundo con prefijo (-webkit y - la Sra.) el siguiente artículo es valioso en el desarrollo de interfaz de usuario en cruz aplicaciones del navegador: <http://blogs.windows.com/windows_phone/b/wpdev/archive/2012/11/15/adapting-your-webkit-optimized-site-for-internet-explorer-10.aspx>

# Consideraciones especiales

Aunque Cordova facilita el desarrollo multiplataforma, no es posible proporcionar aislamiento 100% desde la plataforma nativo subyacente. Para ser conscientes de las restricciones.

## Plataforma rarezas

Al leer la documentación, busque las secciones que describen diferentes comportamientos o requisitos en múltiples plataformas. Si está presente, estos serían en una sección titulada "Rarezas Android", "iOS rarezas", etc.. Lea detenidamente estas rarezas y ser conscientes de ellas mientras trabajas con Córdoba.

## Cargando contenido remoto

Invocar funciones Cordova JavaScript desde una página HTML cargados remotamente (una página HTML no almacenada localmente en el dispositivo) es una configuración no admitida. Esto es porque Córdoba no fue diseñado para esto, y la comunidad Apache Cordova no hace ninguna prueba de esta configuración. Mientras que puede funcionar en algunas circunstancias, no es recomendable ni apoyado. Hay problemas con la política del mismo origen, manteniendo el JavaScript y las porciones nativas de Córdoba sincronización en la misma versión (puesto que están acoplados mediante APIs privadas que pueden cambiar), la confiabilidad del contenido remoto llamar a funciones nativas locales y potencial rechazo de app store.

La visualización de contenido HTML cargados remotamente en un webview debe hacerse usando InAppBrowser de Cordova. El InAppBrowser está diseñado para que JavaScript corriendo allá no tienen acceso a las APIs de JavaScript Cordova por las razones mencionadas anteriormente. Por favor consulte la guía de seguridad.

# Mantenerse al día

Aquí están algunas maneras de mantenerse al día con Córdoba.

*   Suscribirse al [blog de Córdoba][26].
*   Suscribirse a la [lista de desarrolladores][27]. Nota: no se trata de un grupo de apoyo! Más bien se trata de un lugar donde se discute el desarrollo de Córdoba.

 [26]: http://cordova.apache.org/#news
 [27]: http://cordova.apache.org/#mailing-list

# Cómo obtener ayuda

Los siguientes enlaces son los mejores lugares para conseguir ayuda para Córdoba:

*   StackOverflow: <http://stackoverflow.com/questions/tagged/cordova> mediante el uso de la etiqueta de Cordova, puede ver y examinar todas las cuestiones de Córdoba. Tenga en cuenta que StackOverflow convierte automáticamente la etiqueta de "Phonegap" a "Córdoba", para que de esta manera usted podrá acceder a preguntas históricas, así
*   Grupo de Google de PhoneGap: [https://groups.google.com/forum/#! forum/phonegap][28] este grupo de Google fue el antiguo Foro de soporte cuando todavía se llamaba PhoneGap Cordova. Mientras que todavía hay muchos usuarios de Córdoba que frecuente este grupo, la comunidad de Córdoba ha expresado su interés en centrarse menos en este grupo y en su lugar utilizando StackOverflow para apoyo
*   Quedada: <http://phonegap.meetup.com> - considere encontrar un grupo local de la quedada de PhoneGap/Cordova

 [28]: https://groups.google.com/forum/#!forum/phonegap