Flags
=====

Este objeto se usa para pasarle argumentos a los métodos __getFile__ y __getDirectory__ de `DirectoryEntry`, que busca o crea ficheros y directorios.

Atributos
---------

- __create:__ Usado para indicar que el fichero o el directorio deberá ser creado, si no existiera. Por defecto se usara `false`. _(boolean)_ 
- __exclusive:__ Por si mismo, `exclusive` no tiene ningún efecto. Usado junto a `create`, causa que la creación del fichero o del directorio falle si la ruta ya esta usada. Se usara `false` por defecto. _(boolean)_ 

Plataformas Soportadas
----------------------

- Android
- BlackBerry WebWorks (OS 5.0 y superior)
- iOS

Ejemplo Rápido
--------------

    // Obtiene el directorio, creándolo si no existiera.
    dataDir = fileSystem.root.getDirectory("data", {create: true});

    // Crea el fichero (Si no existiera).
    lockFile = dataDir.getFile("lockfile.txt", {create: true, exclusive: true});
