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

We use [Apache JIRA](https://issues.apache.org/jira/browse/CB)

By the way, you rock! Thanks for helping us improve the documentation!

### Using Git

Are you new to Git or contributing on GitHub?

We have [written a few Git tutorials](http://wiki.apache.org/cordova/ContributorWorkflow)
to help you get started with contributing to the documentation.

### Sending Pull Requests

Pull requests are welcome!

We appreciate the use of topic branches.

    git checkout -b issue_23

    # code

    git commit -m "Issue 23: Fix a bad bug."

    git push origin issue_23

    # send pull request from branch issue_23 to cordova:master

### Adding a Language

Do you want the Apache Cordova documentation in another language? We do too!
With the support of [Crowdin](http://crowdin.net/project/cordova),
a translation and localization management platform, translators can login to
the easy-to-use tooling and provide as much or as little translation assistance as
they would like. If you know another language please support Cordova and contribute.
http://crowdin.net/project/cordova. For some best practices for using the
Crowdin tool please see our wiki http://wiki.apache.org/cordova/CordovaTranslations.

Cordova language administrators, don't forget these steps:

__1. config.json__

For each language and version, there is a `config.json` that defines the name of the language and
how to merge the files.

__2. Customizing HTML template__

Each language can override the default template in `template/docs/LANGUAGE`.

### Editorial Guidelines

Please see the `STYLESHEET.md` file for guidelines on language and usage.

## Generating Documentation with Node.js

Right now documentation could be run using Node.js either on Windows, or on Linux box.

    $ rm -r tmp public      # Clear out old docs
    $ ./bin/genjs           # compile all docs
    $ ./bin/genjs en edge   # compile English Edge docs
    $ ./bin/genjs ru edge   # compile Russian Edge docs
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

Currently, a Node.JS script and [joDoc-js](https://github.com/kant2002/jodoc-js) are
used to generate the HTML documentation.

Generating a Version Release
---------------------------

There is a Rake task to increment the version, generate the version directory, and update the edge documentation.

    # generate version 4.1.0 for english.
    .\bin\incrementversion en 4.1.0

