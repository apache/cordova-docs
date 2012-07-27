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
    docs/LANGUAGE/VERSION/cordova/PluginName/
    docs/LANGUAGE/VERSION/cordova/PluginName/className.md
    docs/LANGUAGE/VERSION/cordova/PluginName/className.functionName.md

Contributing to the Documentation
---------------------------------

### Report or Fix an Issue

We use [Apache JIRA](https://issues.apache.org/jira/browse/CB)

By the way, you rock! Thanks for helping us improve the documentation!

### Using Git

Are you new to Git or contributing on GitHub?

We have [written a few Git tutorials](http://wiki.apache.org/cordova/ContributerWorkflow)
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

__1. Create the language directory__

    # Spanish
    mkdir docs/es

__2. Add a version__

Start with the latest stable release. You can always add other versions later.

    mkdir docs/es/1.0.0

__3. Begin Translating__

Currently, English is the most up-to-date and so it is easiest to copy each English
file into the new language directory.

__4. config.json__

For each version, there is a `config.json` that defines the name of the language and
how to merge the files.

__5. Customizing HTML template__

Each language can override the default template in `template/docs/LANGUAGE`.

Generating the Documentation
----------------------------

### Quick Preview

When making minor edits, it is usually safe to simply render the edited from
Markdown to HTML. Many code editors have plugins to render Markdown to HTML
and there are a handful of [good](http://dillinger.io/) online editors.

Currently, a Ruby script and [joDoc](http://github.com/davebalmer/jodoc) are used to generate the HTML documentation.

### Install joDoc

- Clone [joDoc](http://github.com/davebalmer/jodoc)

        git clone http://github.com/davebalmer/joDoc.git
        
- Add joDoc/ to your path
    
  Open `~/.bashrc` or `~/.profile` (or whatever you use)

        export PATH=$PATH:~/path/to/joDoc/
    
- Install markdown

        # Use your package manager
        brew install markdown

- Install nokogiri (Ruby HTML parser)

        gem install nokogiri

- Install json (Ruby JSON parser)

        gem install json

### Run the Script

    ./bin/generate

### Problems
    
Generated a Version Release
---------------------------

There is a Rake task to increment the version, generate the version directory, and update the edge documentation.

    # generate version 1.7.0
    rake version[1.7.0]

FAQ
---

### Error while running `./bin/generate`

If you get the following error:

    ./bin/../lib/cordova/navigation_menu.rb:14:in `read': can't convert nil into String (TypeError)
        from ./bin/../lib/cordova/navigation_menu.rb:14:in `initialize'
        from ./bin/../lib/docs_generator.rb:86:in `new'
        from ./bin/../lib/docs_generator.rb:86:in `after_jodoc'
        from ./bin/../lib/docs_generator.rb:55:in `run'
        from ./bin/../lib/docs_generator.rb:45:in `foreach'
        from ./bin/../lib/docs_generator.rb:45:in `run'
        from ./bin/../lib/docs_generator.rb:41:in `foreach'
        from ./bin/../lib/docs_generator.rb:41:in `run'
        from ./bin/generate:6

You may need to add the following line to the joDoc script:

    $markdown_bin = "/path/to/Markdown.pl";

For more details, see the [Issue #590](https://issues.apache.org/jira/browse/CB-590).

