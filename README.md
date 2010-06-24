PhoneGap API Documentation
==========================

This is a documentation effort to eventually update and replace the current [PhoneGap API Documentation website](http://docs.phonegap.com/).

Repository Layout
-----------------

The repository is separated into two branches:
* __master__: contains a static web site that is served as a Github page.
* __doc__: a set of markdown files that document PhoneGap and web site template.

Document File Format
--------------------

All of the PhoneGap documentation is written with [markdown](http://daringfireball.net/projects/markdown/syntax), a lightweight markup language that can be typeset to HTML. Markdown provides a simple and flexible way to document the PhoneGap API.

Doc Branch Structure
--------------------

    markdown/
    markdown/phonegap/
    markdown/phonegap/class_name/
    markdown/phonegap/class_name/class_name.markdown
    markdown/phonegap/class_name/class_name.method_name.markdown

Documentation Generator Tool
----------------------------

A documentation generator tool is needed to convert the markdown files into one or more HTML files. Right now, we haven't decided on the specific tool. Perhaps [joDoc](http://joapp.com/jo/#joDoc)? Perhaps a home brew?