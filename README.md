PhoneGap API Documentation
==========================

The JavaScript API documentation for [PhoneGap](http://www.github.com/phonegap/).

The documentation is available on [PhoneGap API Documentation website](http://docs.phonegap.com/).

Documentation Format
--------------------

All of the [PhoneGap](http://www.phonegap.com/) documentation is written with [markdown](http://daringfireball.net/projects/markdown/syntax), a lightweight markup language that can be typeset to HTML. Markdown provides a simple and flexible way to document PhoneGap's core API and platform-specific APIs.

File Structure
--------------

    docs/
    docs/LANGUAGE
    docs/LANGUAGE/VERSION
    docs/LANGUAGE/VERSION/phonegap/
    docs/LANGUAGE/VERSION/phonegap/PLUGIN/
    docs/LANGUAGE/VERSION/phonegap/PLUGIN/className.md
    docs/LANGUAGE/VERSION/phonegap/PLUGIN/className.functionName.md

Contributing to the Documentation
---------------------------------

### Report or Fix an Issue

We use [GitHub Issues](https://github.com/phonegap/phonegap-docs/issues)

By the way, you rock! Thanks for helping us improve the documentation!

### Using Git

Are you new to Git or contributing on GitHub?

We have [written a few Git tutorials](http://wiki.phonegap.com/w/page/35501475/Documentation)
to help you get started with contributing to the documentation.

### Sending Pull Requests

Pull requests are welcome!

We appreciate the use of topic branches.

    git checkout -b issue_23

    # code

    git commit -m "Issue 23: Fix a bad bug."

    git push origin issue_23

    # send pull request from branch issue_23 to phonegap:master

### Adding a Language

Do you want the PhoneGap documentation in another language? We do too!

__1. Create the language directory__

    # Spanish
    mkdir docs/es

__2. Add a version__

Start with the latest stable release. You can always add other versions later.

    mkdir docs/es/1.0.0

__3. Begin Translating__

Currently, English is the most up-to-date and so it is easiest to copy each English
file into the new language directory.

__4. config.xml__

For each version, there is a `config.xml` that defines the name of the language and
how to merge the files.

__5. Customizing HTML template__

Each language can override the default template in `template/docs/LANGUAGE`.

Generating the Documentation
----------------------------

Currently, PhoneGap-Docs uses a Ruby script and [joDoc](http://github.com/davebalmer/jodoc) to generate HTML documentation.

### Install joDoc ###

- Clone [joDoc](http://github.com/davebalmer/jodoc)

        git clone http://github.com/davebalmer/joDoc.git
        
- Add joDoc/ to your path
    
  Open `~/.bashrc` or `~/.profile` (or whatever you use)

        export PATH=$PATH:~/path/to/joDoc/
    
- Install markdown

        # Use your package manager
        brew install markdown
        port install markdown
        aptitude install markdown

- Install nokogiri (Ruby HTML parser)

        gem install nokogiri

- Install json (Ruby JSON parser)

        gem install json

### Run the Script ###

    cd phonegap-docs
    ./bin/phonegap-docs
    
Script Test Suite
-----------------

__Install rspec:__

    gem install rspec --version 1.3.0
    
__Run all specs:__

    cd phonegap-docs
    rake

__Run a specific spec:__

    cd phonegap-docs
    spec spec/phonegap/add_title_spec.rb
