PhoneGap API Documentation
==========================

The public API documentation for [PhoneGap](http://www.github.com/phonegap/). The documentation is rendered as the [PhoneGap API Documentation website](http://docs.phonegap.com/).

Document File Format
--------------------

All of the [PhoneGap](http://www.phonegap.com/) documentation is written with [markdown](http://daringfireball.net/projects/markdown/syntax), a lightweight markup language that can be typeset to HTML. Markdown provides a simple and flexible way to document PhoneGap's core API and platform-specific APIs.

Repository Structure
--------------------

    docs/
    docs/phonegap/
    docs/phonegap/class_name/
    docs/phonegap/class_name/class_name.md
    docs/phonegap/class_name/class_name.method_name.md

Documentation Generator
-----------------------

Currently, PhoneGap-Docs uses [joDoc](http://github.com/davebalmer/jodoc) to generate HTML documentation from the set of Markdown files.

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
