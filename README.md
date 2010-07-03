PhoneGap API Documentation
==========================

This is a documentation effort to eventually update and replace the current [PhoneGap API Documentation website](http://docs.phonegap.com/).

Document File Format
--------------------

All of the [PhoneGap](http://www.phonegap.com/) documentation is written with [markdown](http://daringfireball.net/projects/markdown/syntax), a lightweight markup language that can be typeset to HTML. Markdown provides a simple and flexible way to document PhoneGap's core API and platform-specific APIs.

Doc Branch Structure
--------------------

    markdown/
    markdown/phonegap/
    markdown/phonegap/class_name/
    markdown/phonegap/class_name/class_name.md
    markdown/phonegap/class_name/class_name.method_name.md

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

### Run the Script ###

    cd phonegap-docs
    ./bin/phonegap-docs

### Manually Run joDoc ###

    cd phonegap-docs/markdown
    jodoc --output ../tmp --title "PhoneGap API Documentation" --toc toc.md introduction.md phonegap/