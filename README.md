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
With the support of <a href="http://crowdin.net/project/cordova">Crowdin</a>,
a translation and localization management platform, translators can login to
the easy-to-use tooling and provide as much or as little translation assistance as
they would like. If you know another language please support Cordova and contribute.
<a href="http://crowdin.net/project/cordova">http://crowdin.net/project/cordova</a>.  For some best practices for using the Crowdin tool please see our wiki <a href="http://wiki.apache.org/cordova/CordovaTranslations">http://wiki.apache.org/cordova/CordovaTranslations</a>.

ordova language administrators, don't forget these steps: 

__1. config.json__

For each language and version, there is a `config.json` that defines the name of the language and
how to merge the files.

__2. Customizing HTML template__

Each language can override the default template in `template/docs/LANGUAGE`.

### Editorial Guidelines

Please see the `STYLESHEET.md` file for guildelines on language and usage.

Generating the Documentation
----------------------------

### Install

- Clone [joDoc](http://github.com/davebalmer/jodoc)

        git clone http://github.com/davebalmer/joDoc.git

- Install markdown

    curl -O http://daringfireball.net/projects/downloads/Markdown_1.0.1.zip
    unzip Markdown_1.0.1.zip
    chmod u+x Markdown_1.0.1/Markdown.pl
    mv Markdown_1.0.1/Markdown.pl markdown
    rm -r Markdown_1*

- Install Ruby Dependencies

    curl -sSL https://get.rvm.io | bash -s stable
    rvm install 1.8.7
    gem install bundler
    bundle install

### Run the Script

Generate all versions

    PATH=$PATH:$PWD/joDoc:$PWD bin/generate

Generate a specific language and version

    PATH=$PATH:$PWD/joDoc:$PWD bin/generate en edge

or as a shortcut

    PATH=$PATH:$PWD/joDoc:$PWD bin/generate --edge

### Quick Preview

When making minor edits, it is usually safe to simply render the edited from
Markdown to HTML. Many code editors have plugins to render Markdown to HTML
and there are a handful of [good](http://dillinger.io/) online editors.

Currently, a Ruby script and [joDoc](http://github.com/davebalmer/jodoc) are
used to generate the HTML documentation.

Generating a Version Release
---------------------------

There is a Rake task to increment the version, generate the version directory, and update the edge documentation.

    # generate version 1.7.0 for english.
    rake version[1.7.0,en]

If while running rake you get the error 

    no such file to load -- spec/rake/spectask 

then run

    gem install rspec -v 1.3.0

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

### Error with ruby and nokogiri versions

If you get the following error:

    custom_require.rb:36:in `require': /lib/cordova/jodoc.rb:28: syntax error, unexpected tCONSTANT, expecting ']' (SyntaxError)
    @template_directories = [ File.join TEMPLATE_PATH, 'default' ]
                                                     ^
- You may need to downgrade the version of ruby to 1.8.7 and nokogiri to 1.5.2
  Use rvm and the Gemfile provided to install the dependencies

    rvm install 1.8.7
    rvm use 1.8.7
    bundle install

