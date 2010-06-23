PhoneGap Docs Jekyll Template
=============================
[Jekyll](http://github.com/mojombo/jekyll) is a typsetter and templating tool that can generate static web sites. The website content can be written in HTML, markdown, and textile documents. The templates are processed with Shopify's [liquid layout](http://github.com/tobi/liquid).

* [Jekyll Documentation](http://wiki.github.com/mojombo/jekyll/)
* [Liquid Documentation](http://wiki.github.com/tobi/liquid/liquid-for-designers)

PhoneGap Docs
-------------
The goal of this repository is to provide a foundation for writing the PhoneGap documentation. It abstracts the content from the presentation, so that we can focus on creating _really good_ handwritten documentation. Since the content is written in markdown, it can easily port it to another templating tool.

Getting Starting with Jekyll
----------------------------
    gem install jekyll
    git clone http://github.com/mwbrooks/phonegap-docs-jekyll.git
    cd phonegap-docs/
    jekyll --server

Getting Starting with Documentation
-----------------------------------
* Each platform has a directory in the root.
    * e.g. ./phonegap
    * e.g. ./android
* Each PhoneGap object post includes documentation files from _include/<platform>
    * e.g. ./_include/phonegap/device.name.markdown
    
Scotch for Docs Hack Night
--------------------------
* Decide what methods are included in PhoneGap and document them
* Document the public _plugins_ for the major platforms
    * Android
    * iPhone / iPad
    * BlackBerry
* Discuss templating tool options:
    * [Jekyll](http://github.com/mojombo/jekyll)
        * Can fork and change
        * Can write extensions in Ruby
    * [JoDoc](http://grrok.com/jo/#joDoc) - Help davebalmer separate it from the [Jo repo](http://github.com/davebalmer/Jo)
    * Home baked
* Discuss how to document the specific platforms
    * The state of these methods are more volatile, in comparison to the PhoneGap API
        * The documentation should live closer to the method, to keep the documentation up to date
    * Some of these methods are tightly bound to the PhoneGap-<platform>
        * Eventually they will be extracted out as a plugin

To-do
----------------------------
* Decide how to document model objects, i.e. the geolocation 'Position' and 'Coordinates' objects. For now, we're documenting it in the ./phonegap markdown files.
* Figure out an elegant solution for linking to methods and objects that are defined across the entire API.