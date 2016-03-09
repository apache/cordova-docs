Apache Cordova API Documentation
================================

The JavaScript API documentation for [Apache Cordova](http://cordova.io/).

The documentation is available at [docs.cordova.io](http://docs.cordova.io/).

Documentation Format
--------------------

All of the [Apache Cordova](http://cordova.io/) documentation is written with [markdown](http://daringfireball.net/projects/markdown/syntax), a lightweight markup language that can be typeset to HTML. Markdown provides a simple and flexible way to document Cordova's core API and platform-specific APIs.

File Structure
--------------

    docs/
    docs/LANGUAGE
    docs/LANGUAGE/VERSION
    docs/LANGUAGE/VERSION/cordova/
    docs/LANGUAGE/VERSION/guide/platforms/PLATFORMNAME/

Contributing to the Documentation
---------------------------------

### Report or Fix an Issue

We use [Apache JIRA](https://issues.apache.org/jira/browse/CB). By the way, you rock! Thanks for helping us improve the documentation!

### Using Git

Are you new to Git or contributing on GitHub? We have [written a few Git tutorials](http://wiki.apache.org/cordova/ContributorWorkflow) to help you get started with contributing to the documentation.

### Sending Pull Requests

Pull requests are welcome! We appreciate the use of topic branches.

    git checkout -b issue_23

    # do some coding ...

    git commit -m "Issue 23: Fix a bad bug."
    git push origin issue_23

    # send pull request from branch issue_23 to cordova:master

### Adding a Language

Do you want the Apache Cordova documentation in another language? We do too! With the support of [Crowdin](http://crowdin.net/project/cordova), a translation and localization management platform, translators can login to the easy-to-use tooling and provide as much or as little translation assistance as they would like. If you know another language please support Cordova and contribute. http://crowdin.net/project/cordova. For some best practices for using the Crowdin tool please see our wiki http://wiki.apache.org/cordova/CordovaTranslations.

Cordova language administrators, don't forget these steps:

__1. config.json__

For each language and version, there is a `config.json` that defines the name of the language and how to merge the files.

__2. Customizing HTML template__

Each language can override the default template in `template/docs/LANGUAGE`.

### Editorial Guidelines

Please see the `STYLEGUIDE.md` file for guidelines on language and usage.

## Generating Documentation with Node.js

Right now documentation could be run using Node.js either on Windows, or on Linux box.

    $ rm -r tmp public      # Clear out old docs
    $ ./bin/genjs           # compile all docs
    $ ./bin/genjs en dev    # compile English dev docs
    $ ./bin/genjs ru dev    # compile Russian dev docs
    $ ./bin/genjs es 3.5.0  # compile Spanish 3.5.0 docs

### Setting up Node.js

1. Go to Node.JS [downloads page](http://nodejs.org/download/)
2. Download and install package for your operation system.
3. Checkout this repository using Git

        git clone https://github.com/apache/cordova-docs

4. Install dependencies. In the root of the cloned cordova-docs folder run

        npm install

5. Now you able to build documentation locally.

### Quick Preview

When making minor edits, it is usually safe to simply render the edited from
Markdown to HTML. Many code editors have plugins to render Markdown to HTML
and there are a handful of [good](http://dillinger.io/) online editors.

Currently, a Node.JS script and [joDoc-js](https://github.com/kant2002/jodoc-js) are used to generate the HTML documentation.

Generating a Version Release
----------------------------

To increment the documentation version (e.g. `X.X.X`, either use the gulp task:

    gulp newversion --version X.X.X

or manually run the `incrementversion.js` script:

    node ./tools/bin/incrementversion.js www/docs X.X.X

To only run for a specific language (__this should only happen when translation is intentionally left out for a given version__), specify the language to the Gulp task as follows:

    gulp newversion --version X.X.X --language YY

or manually, to the script, as follows:

    node ./tools/bin/incrementversion.js www/docs X.X.X YY

QA for docs & translation
-------------------------

In order to maintain quality of documentation and translation, following tools could be used.

1. `fixyaml` tool.
2. `translationreport` tool.
3. `validatejsdoc` tool.

### FixYaml tool.

The tool `fixyaml` created to automatically fix YAML headers in the translation files after exporting translated content from CrowdIn. Sometimes Crowdin messup with Apache license headers and this tool created to fix that.

Usage:

    bin\fixyaml             # Runs fixyaml across all docs.
    bin\fixyaml ru          # Runs fixyaml across all Russian docs.
    bin\fixyaml ru dev      # Runs fixyaml on the latest Russian docs.
    bin\fixyaml ru 5.0.0    # Runs fixyaml on the version 5.0.0 of Russian docs.

### Translation Report tool.

The tool `translationreport` currently provide two QA checks for translation.

1. It verifies that autolinking works after translation, and that translated text point to the same pages as
in the original documentation.
2. It verifies that translated and original files create same DOM structure, since after exporting from
Crowdin, the markdown files could contain unnescessary lines, which lead to broken HTML, and could create
not needed code sections for example.

### Validate JSDoc tool.

The tool `validatejsdoc` allow verification of the current implementation of JSDoc with reference implementation. It was used during porting JSDoc to the Node version of JSDoc, and now currently not used in the workflow.

Recommendations for the translators
-----------------------------------

If you intend to create quality translation of the Cordova docs, please not only work in Crowdin and translate documentation, but also please go extra mile and verify that generated documentation for your language is also produce quality results.

For that you should have Crowdin CLI tool. You could

1. take it from [here](https://crowdin.com/page/cli-tool)
2. or install alternate NodeJS client

    `npm -g install crowdin-cli`

You will use that tool for the downloading translation from Crowdin. To be able to download translated content from the Crowdin you should have API key for the project. Please ask for it on the mailing list.

After you receive access to API key, create `crowdin.yaml` coniguration file, as described in the [CrowdIn cli tool page](https://crowdin.com/page/cli-tool).

Now you ready to download content from CrowdIn. Run following commands (All commands here would be for NodeJS version of Crowdin CLI)

1. Prepare translated content for downloading.

        crowdin-cli export

    This command collect latest translations and made them available for downloading. Without that command, the translation which you would download would be stalled.

    Be careful with this command, since Crowdin implement throttling and allow you export content not faster then 1 time in 30 minutes, or so.

2. Download content for you language. I will use Russian as example.

        crowdin-cli download -l ru -o ru.zip

    This command download all translations for Russian language to the `ru.zip` file.

3. Now unpack the download content to the temporary directory.

        unzip -x ru.zip -d tmp/ru

4. Copy the unpacked content to the `docs` folder.
    * on Linux:

            cp tmp/ru/cordova-docs/docs/ru/dev/* docs/ru/dev/

    * on Windows:

            xcopy tmp/ru/cordova-docs/docs/ru/dev/* docs/ru/dev/

5. Remove temporary directory. In my case `tmp/ru`. Now you have fresh translation and could generate content.

6. Fix Yaml headers by running.

        bin/fixyaml ru dev

7. Run generator. You should generate both English version and language which you tranlate.

        bin/genjs en dev
        bin/genjs ru dev

    The generated documentation contains in the `public/en/dev` and `public/ru/dev`

    You need both versions, to validate that translated docs would have same structure as original documentation.

8. Validate you translation.

        bin/translationreport ru dev

    This will give you list of files which has structural differences from the original docs.
    Below the example output:

        => Validating translation for version dev on language ru...
        Comparing C:\Users\kant\Documents\GitHub\cordova-docs\public\en\dev
        with C:\Users\kant\Documents\GitHub\cordova-docs\public\ru\dev
        Path guide_platforms_blackberry10_upgrade.md.html is different.
        Path guide_platforms_blackberry_upgrade.md.html is different.
        Path guide_platforms_ios_tools.md.html is different.
        Path guide_support_index.md.html is different.

9. Now you could open pregenerated files and compare the English version with your translated versions.
    Open both versions and find out what's wrong.

    If on the first sight you could not find the differences, you could add switch `-v` which will increase verbosity of the tool.
    For example:

    `bin/translationreport ru dev -v`

10. Currently there two type of errors reported:

    a. Missing or additional links.

    b. The broken HTML structure.

11. Let's fix first type of errors - Missing/Additional links.

    To fix these type of errors you have to make sure that text in your translation where you want to have link,
    match exactly the header in the translated document, otherwise auto-linking would not work.
    You have to rephrase the sentences to fix that.

12. Broken HTML DOM structure.

    Most likely this type of errors caused by the additional lines created by Crowdin during export.
    You have to manually spot these places and remove additional lines when needed and then commit your changes to Git.
    Most likely these erorrs reappear after next exprot from CrowdIn, so don't hunt for these errors until release, or create
    tool which will fix these error after each export and use it.

13. Now you ready to create pull request with documentation to the main `cordova-docs` repository.

Enjoy translation!!!
