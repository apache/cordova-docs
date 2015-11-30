# Apache Cordova API Documentation

La documentation de l'API JavaScript pour [Apache Cordova](http://cordova.io/).

La documentation est disponible à [docs.cordova.io](http://docs.cordova.io/).

## Format de documentation

Toute la documentation [Apache Cordova](http://cordova.io/) est écrit avec [markdown](http://daringfireball.net/projects/markdown/syntax), un langage de balisage léger qui peut être composé au format HTML. Markdown offre un moyen simple et flexible pour documenter le noyau de Cordova API et API spécifique à la plateforme.

## Structure des fichiers

    docs/
    docs/LANGUAGE
    docs/LANGUAGE/VERSION
    docs/LANGUAGE/VERSION/cordova/
    docs/LANGUAGE/VERSION/guide/platforms/PLATFORMNAME/


## Contribuer à la Documentation

### Rapport ou résoudre un problème

Nous utilisons [JIRA Apache](https://issues.apache.org/jira/browse/CB)

Par ailleurs, vous bercer ! Merci de nous aider à améliorer la documentation !

### À l'aide de Git

Vous êtes nouveau sur Git ou contribuer sur GitHub ?

Nous avons [écrit quelques Git tutoriaux](http://wiki.apache.org/cordova/ContributorWorkflow) pour vous aider à commencer à contribuer à la documentation.

### Envoyer des demandes de Pull

Requêtes d'extraction sont les bienvenus !

Nous apprécions l'utilisation des branches du sujet.

    git checkout -b issue_23

    # code

    git commit -m "Issue 23: Fix a bad bug."

    git push origin issue_23

    # send pull request from branch issue_23 to cordova:master


### Ajout d'une langue

Voulez-vous la documentation Apache Cordova, dans une autre langue ? Nous faisons aussi ! Avec le soutien de la plateforme de gestion de [Crowdin](http://crowdin.net/project/cordova), une traduction et de localisation, traducteurs peuvent vous connecter à l'outillage facile à utiliser et fournissent autant ou aussi peu d'assistance traduction comme ils le voudraient. Si vous connaissez une autre langue s'il vous plaît soutenir Cordova et contribuer. http://crowdin.net/project/cordova. Pour certaines meilleures pratiques pour utiliser l'outil Crowdin, veuillez consulter notre wiki http://wiki.apache.org/cordova/CordovaTranslations.

Administrateurs de langue de Cordova, n'oubliez pas les étapes suivantes :

**1. config.json**

Pour chaque langue et chaque version, il y a un `config.json` qui définit le nom de la langue et comment fusionner les fichiers.

**2. personnalisation de modèle HTML**

Chaque langue peut remplacer le modèle par défaut dans le `template/docs/LANGUAGE`.

### Règles éditoriales

S'il vous plaît voir le fichier `STYLEGUIDE.md` pour connaître les instructions sur l'utilisation et de la langue.

## Génération de Documentation avec Node.js

Ce moment documentation pouvait être exécutée à l'aide de Node.js sur GNU / Linux ou sous Windows.

    $ rm -r tmp public      # Clear out old docs
    $ ./bin/genjs           # compile all docs
    $ ./bin/genjs en dev    # compile English Dev docs
    $ ./bin/genjs ru dev    # compile Russian Dev docs
    $ ./bin/genjs es 3.5.0  # compile Spanish 3.5.0 docs


### Mise en place de Node.js

  1. Aller à Node.JS [téléchargements de page](http://nodejs.org/download/)
  2. Téléchargez et installez le paquet pour votre système d'exploitation.
  3. Commander ce référentiel à l'aide de Git

        git clone https://github.com/apache/cordova-docs


  4. Installer les dépendances. Dans la racine du dossier clonés cordova-docs exécuter

        npm install


  5. Maintenant vous en mesure de construire la documentation localement.

### Aperçu rapide

Lorsque vous effectuez des modifications mineures, il est généralement sans danger pour simplement rendre l'édité de Markdown au format HTML. De nombreux éditeurs de code ont plugins pour restituer Markdown en HTML et il ya une poignée de [bons](http://dillinger.io/) rédacteurs en ligne.

Actuellement, un script de Node.JS et [joDoc-js](https://github.com/kant2002/jodoc-js) sont utilisés pour générer la documentation HTML.

## Génération d'une Version Release

Il y a une tâche de Rake pour incrémenter la version, générer le répertoire de version et mettre à jour la documentation de bord.

    # generate version 4.1.0 for english.
    .\bin\incrementversion en 4.1.0
