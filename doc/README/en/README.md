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

QA for docs
-------------------------

In order to maintain quality of documentation and translation, following tools could be used.

1. `validatejsdoc` tool.

### Validate JSDoc tool.

The tool `validatejsdoc` allow verification of the current implementation of JSDoc with reference implementation. It was used during porting JSDoc to the Node version of JSDoc, and now currently not used in the workflow.
