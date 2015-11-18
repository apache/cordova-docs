# Documentación de Cordova API de Apache

La documentación de la API de JavaScript para [Apache Cordova](http://cordova.io/).

La documentación está disponible en [docs.cordova.io](http://docs.cordova.io/).

## Formato de documentación

Toda la documentación de [Apache Cordova](http://cordova.io/) escrito con [descuento](http://daringfireball.net/projects/markdown/syntax), un lenguaje de marcado ligero que se puede tipografiar en HTML. Descuento proporciona una manera simple y flexible para documentar base de Cordova API y API específicas de la plataforma.

## Estructura del archivo

    docs/
    docs/LANGUAGE
    docs/LANGUAGE/VERSION
    docs/LANGUAGE/VERSION/cordova/
    docs/LANGUAGE/VERSION/guide/platforms/PLATFORMNAME/


## Contribuir a la documentación

### Informe o solucionar un problema

Usamos [JIRA de Apache](https://issues.apache.org/jira/browse/CB)

Por cierto, rock! ¡ Gracias por ayudarnos a mejorar la documentación!

### Usando Git

¿Eres nuevo en Git o contribuyendo en GitHub?

Tenemos [algunos tutoriales de Git por escrito](http://wiki.apache.org/cordova/ContributorWorkflow) para ayudarle a comenzar a contribuir a la documentación.

### Envío de solicitudes de extracción

Las solicitudes de extracción son bienvenidas!

Apreciamos el uso de las ramas del tema.

    git checkout -b issue_23

    # code

    git commit -m "Issue 23: Fix a bad bug."

    git push origin issue_23

    # send pull request from branch issue_23 to cordova:master


### Añadir un idioma

¿Quieres la documentación de Apache Cordova en otro idioma? Hacemos demasiado! Con el apoyo de la plataforma de gestión de [Crowdin](http://crowdin.net/project/cordova), una traducción y localización, traductores pueden acceder a las herramientas de fácil uso y ofrecen como mucho o como poco ayuda de la traducción como ellos quisieran. Si sabes otro idioma por favor apoyar Cordova y contribuir. http://crowdin.net/project/cordova. Algunas mejores prácticas para el uso de la herramienta de Crowdin consulte en nuestra wiki http://wiki.apache.org/cordova/CordovaTranslations.

Administradores de lenguaje de Cordova, no olvides estos pasos:

**1. config.json**

Para cada idioma y versión, hay un `config.json` que define el nombre de la lengua y cómo combinar los archivos.

**2. personalización de plantilla HTML**

Cada idioma puede reemplazar la plantilla por defecto en el `Lenguaje de plantillas de documentos`.

### Pautas editoriales

Consulte el archivo `STYLEGUIDE.md` para las pautas en el lenguaje y el uso.

## Generar documentación con Node.js

Ahora se podía ejecutar documentación usando Node.js en Windows o en Linux box.

    $ rm -r tmp public      # Clear out old docs
    $ ./bin/genjs           # compile all docs
    $ ./bin/genjs en dev    # compile English Dev docs
    $ ./bin/genjs ru dev    # compile Russian Dev docs
    $ ./bin/genjs es 3.5.0  # compile Spanish 3.5.0 docs


### Configuración de Node.js

  1. Ir a Node.JS [descargas página](http://nodejs.org/download/)
  2. Descargar e instalar el paquete para su sistema operativo.
  3. Retirada este repositorio usando Git

        git clone https://github.com/apache/cordova-docs


  4. Instalar dependencias. En la raíz de la carpeta clonada cordova-docs ejecutar

        npm install


  5. Ahora usted es capaz de construir documentación localmente.

### Vista previa rápida

Al hacer modificaciones menores, es generalmente seguro simplemente prestar el editado de descuento a HTML. Muchos editores de código tienen plugins para hacer descuento a HTML y hay un puñado de [buenos](http://dillinger.io/) editores en línea.

Actualmente, se utilizan un script de Node.JS y [joDoc-js](https://github.com/kant2002/jodoc-js) para generar la documentación HTML.

## Generando una versión

Hay una tarea de Rake para incrementar la versión, generar el directorio de versión y actualizar la documentación de borde.

    # generate version 4.1.0 for english.
    .\bin\incrementversion en 4.1.0
