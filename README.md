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
    markdown/phonegap/class_name/class_name.markdown
    markdown/phonegap/class_name/class_name.method_name.markdown

Documentation Generator Tool
----------------------------

A documentation generator tool is needed to convert the markdown files into one or more HTML files. Right now, we haven't decided on the specific tool. Perhaps [joDoc](http://joapp.com/jo/#joDoc)? Perhaps a home brew?