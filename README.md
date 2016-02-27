Introduction
============

This repository contains the source code behind [cordova.io](http://cordova.io) and some of its subdomains (namely, [docs.cordova.io](http://docs.cordova.io) and [plugins.cordova.io](http://plugins.cordova.io)).

Installing
==========

## Ruby

### Mac OS X

Install Homebrew from [this site][homebrew], and then run:

    brew install ruby

### Windows

Follow these steps:

1. Download [this installer][ruby_installer] from [this page][ruby_downloads].
2. Run the downloaded file.
    1. Use the default installation path (usually `C:\Ruby22`).
    1. Make sure the **'add executable to path'** option is checked.
3. Download [this Ruby DevKit self-extracting archive][ruby_devkit] from the [same website][ruby_downloads].
4. Run the downloaded file.
    1. Use the following extraction path: `C:\Ruby22DevKit`.
5. Open `cmd.exe`.
    1. Go to the extraction path:

            cd C:\Ruby22DevKit
    1. Run these commands (following any instructions they give):

            ruby dk.rb init
            ruby dk.rb install
    1. Close `cmd.exe`.

### Linux

Run the commands from [this site][ruby_linux] that apply to your Linux distribution.

***

Verify the installation by running:

    ruby --version

## Python

Python 2.7 is also required to build the docs. NOTE: *The docs will not build with Python 3.0 or greater.*

### Mac OS X

Mac OS X comes with Python 2.7 pre-installed. Else, follow these steps:

1. Download [this installer][python_installer_mac] from [this page][python_downloads].
2. Run the downloaded file.

### Windows

Follow these steps:

1. Download [this installer][python_installer_windows] from [this page][python_downloads].
2. Run the downloaded file.
   1. Use the default installation path
   1. Make sure the **'add executable to path'** option is checked.

### Linux

The latest version of CentOS, Fedora, Redhat Enterprise (RHEL) and Ubuntu come with Python 2.7 pre-installed. Else, follow the steps from [this site][python_linux].

***

Verify the installation by running:

    python --version

The version must be 2.7.x.

## JavaScript

### Mac OS X &amp; Windows

Go to [this site][nodejs], and click the "Install" button. Then run the downloaded file and follow the on-screen instructions. Make sure that the option to **install NPM** is enabled, if you see one.

### Linux

Linux, follow the instructions on [this site][linux_node].

***

Verify the installation by running:

    node --version
    npm --version

## Dependencies

Once Ruby and JavaScript are installed, install Ruby dependencies by running:

    gem install bundle
    bundle install

On some systems, the above commands need to be prefixed with `sudo`. Similarly on Windows, the `cmd` window in which those commands are to be run might need to have been "Run as Administrator."

Finally, install JavaScript dependencies by running:

    npm install

## Make (optional)

The website can be built with Gulp or Make. The Gulp workflow is enabled by just installing all the JavaScript dependencies. The Make workflow usually allows for faster builds, but requires installation of the `make` tool.

### Windows

Make can be installed on Windows from [this page][make_page] by downloading the [setup tool][make_setup] and running it.

### OS X

Make comes with the Xcode Command Line Tools. To install them, run:

    xcode-select --install

### Linux

Make is installed by default on Linux.

***

Verify the installation by running:

    make --version

Building
========

To build the whole website, run:

    node_modules/.bin/gulp build --prod

The built website will be in a folder called `build-prod`.

Developing
==========

To work on the website and see changes live as you save, run:

    node_modules/.bin/gulp serve

That command will build the site and start a local server. To work on only the website without the docs, add the `--nodocs` flag, as follows:

    node_modules/.bin/gulp serve --nodocs

Alternatively, to dynamically rebuild the site and refresh the browser _when changes happen_ (again, optionally with the `--nodocs` flag), run:

    node_modules/.bin/gulp watch

## Redirects

Sometimes docs pages get removed, renamed, and added. There is [a file][redirects] that contains redirects for such occasions. It has three sections:

- `docs-global`: redirects across all docs versions and languages,
- `docs`: version-specific docs redirects, and
- `general`: single-page redirects.

For non-docs URIs, there are no versioning considerations. Make redirects like so:

    general:
        - {old: "old/uri/for/page.html", new: "its/new/uri.html"}

**NOTE**: Review (and test, if possible) these redirects before making them live, since they're permanent (HTTP 302) redirects. Incorrect permanent redirects will make a URI very hard to bring back into browsers and search indices.

There are five cases of changing URIs:

1. Adding a brand new (no past equivalent) URI starting at a version,
2. Removing an old URI (with no replacement) starting at a version,
3. Renaming (removing and adding) an existing URI starting at a version,
4. Renaming an existing URI across all versions,
5. Removing an existing URI across all versions.

### Case 1: Adding a URI starting at a version

Do nothing. Going back in time for new docs is unsupported.

### Cases 2 &amp; 3: Removing or renaming a URI starting at a version

If the URI is removed, mark it as deprecated in `latest/` like so:

    docs:
        - {old: "latest/old/uri/for/page.html", new: "deprecated.html"}

If the URI is moved, point it to its new location in `latest/` like so:

    docs:
        - {old: "latest/old/uri/for/page.html", new: "latest/its/new/uri.html"}

These will handle the case where the "this content is outdated" link is clicked. The case where a user jumps to a specific version is not yet supported.

### Case 4: Renaming a URI across all versions

Add the redirect (in the `docs-global` section this time) like so:

    docs-global:
        - {old: "old/uri/for/page.html", new: "its/new/uri.html"}

### Case 5: Removing a URI across all versions

Do nothing. It is now an un-URI. It never existed. Mentioning it is thoughtcrime.

Deploying
=========

This section requires basic knowledge of SVN. If you do not know how to use SVN, refer to [this tutorial][svn].

To build the full website (possibly excluding docs by adding `--nodocs`), run:

    gulp build --prod

A folder called `build-prod` will be created, and will contain the built website. Then, in a directory *outside* of the `cordova-docs` repository, check out the SVN repository that contains the currently deployed website by running the following command (committer access required):

    cd ..
    svn checkout https://svn.apache.org/repos/asf/cordova/site cordova-website

Copy the `cordova-docs/build-prod/` directory to the `public` directory in SVN like so:

    cp -R cordova-docs/build-prod/. cordova-website/public/

Finally, go into the `cordova-website` directory and commit *all* the changes introduced by the newly copied files. Some files will be new (`?` in SVN, and need to be `svn add`ed) and some files will be changed (`M` in SVN; no action required). To see just the `?` changes, run:

    svn status | grep "?"

The commit might take a while (up to 1 hour), depending on the number of files changed.

Working on the Documentation
============================

Refer to this [README.md](doc/README/en/README.md) for information about writing documentation.

Adding a Tool or a Showcase App
===============================

Items on the **Codorva Tools** or the **Cordova App Showcase** sections on the main page are modifiable by the public. Below are the guidelines and process to do so.

## Guidelines

The display _image_ shall:

1. be __less than 128KiB__ in size (NOTE: those are kibibytes, not kilobytes),
2. contain the __logo__ of the tool/app,
3. use __colors that don't compete__ with other elements on the page, and
4. have acceptable measurements, as follows:
    - __298px by 100px__ or smaller with a roughly rectangular aspect ratio for tools, and
    - __100px by 100px__ or smaller with a square aspect ratio for apps.

The _description_ shall:

1. contain __neutral__ and non-advertising language.

The _name_ shall:

1. be __at most 40__ characters long.

Showcase _apps_ shall:

1. be available for download on a __public app store__ or website.

Furthermore, descriptions are stripped of HTML and are truncated to fit as follows:

- down to 255 characters for tools and,
- down to 200 characters for showcase apps.

## Process

1. Change the section's YAML file:
    - [www/_data/tools.yml](www/_data/tools.yml) for Cordova Tools, or
    - [www/_data/showcase-apps.yml](www/_data/showcase-apps.yml) for Cordova App Showcase.
1. Optionally add an image:
    1. Place the image in the section's `img` directory:
        - [www/static/img/tools](www/static/img/tools) for Cordova Tools, or
        - [www/static/img/showcase-apps](www/static/img/showcase-apps) for Cordova App Showcase.
    1. In the YAML file, set the `image` field to the file's *name*.
1. Submit a [GitHub pull request][pr] with the changes.

Writing a Blog Post
===================

1. Pull down the latest website codebase for the current posts

        git pull

2. Create a new entry in the www/_posts directory.

3. Use an earlier post an a template. Edit your md file to remove undesired markdown links. If there is a phrase in square brackets that isn't a CB-xxxx reference, escape it with backslashes. Otherwise, heruko might error out and fail to build all the html.

        [CB-1234] \[iOS\] \[Camera\] add a whizzbang to the snarfblat

4. Set a marker where the summary on the home page should stop displaying. Add the following html comment line to your md file at the desired cutoff point:

        <!--more-->

5. In the front matter of your blog entry, set the `date:` field to the desired date that you want to appear near the title. Be aware that the date (explicit here or implied via the filename) will be used to generate the relative path to this html file (e.g. "/announcements/2014/09/22/cordova-361.html"), as will the `categories:` front matter value.

        date: 2014-09-22
        categories: announcements

6. Run gulp link-bugs to linkify

        gulp link-bugs

7. Preview it locally by running the site using gulp

8. Raise a Pull Request with the changes

**Types of Posts**

_Announcements_ - releases, call for translators, etc

_Core Content_ - If the content has to do with cordova-core, or publishing guides, etc., we should publish the full text directly on the cordova Blog (by whichever author), as-if written by the organization.

_Linked Posts_ - If the content was written by a contributor and is worth curating for the whole community, but is not really core ie. non-core plugins, dev tips, research, opinion-pieces, statistics, etc., post a short description, perhaps adding a document-snippet, but then link to the externally hosted content, making it clearly not written by the organization.

**Post guidelines:**

* Use the post title as the first header.
* Including a header as well makes the snippet on the front page look bad.
* Use an appropriate category:
* One of: `howto`, `news`, `releases`, `announcements`, `blog` (the catch-all category)
* Use appropriate tags:
* `tools`, `plugins`, `android`, `ios`, `windowsphone`, `blackberry`, `plugin-$FOO`, `cli`, `performance`, `last-week`, `security` (add to this list as necessary)
* Use gulp to preview your posts locally.
* Jekyll does a poor job telling you where markdown errors exist.
* Use the <!--more--> tag to specify the cutoff point for displaying your post on the main page.
* Review your post yourself before asking for a review. This includes spell-check :).
* Ask for a review by raising a pull request

***Creating "last week" Posts:***

To get a summary of changes (and count the changes):

    for l in cordova-*; do ( cd $l ; git log --format="$(printf %30s $l) %s" --no-merges --since='1 week ago' ) ; done | grep -iv version | grep -v CHANGELOG > all_logs.txt

To get the number of authors:

    for l in cordova-*; do ( cd $l ; git log --format="%an" --no-merges --since='1 week ago' ) ; done | sort | uniq | wc -l

***Creating Release Announcement Posts***

Create a copy of a previous post and update it.

To print the list of plugin versions tested:

1. Make sure all plugin repos are cloned, updated, and on master branch
2. Run:

        for d in *-plugin-*; do ( cd $d && echo "* $(basename $PWD): $(grep version plugin.xml|grep -v encoding|cut -d'"' -f2)" ) ; done | grep '^\*'

Troubleshooting
===============

## Error: EMF, too many open files

Increase the maximum number of open files on the system:

    ulimit -n 10480

## Error: spawn ENOENT

Run:

    gulp clean

## Permission issues during Ruby install

You could try a different method to install Ruby. Checkout [rbenv][rbenvgh]. Instructions:

1. Install rbenv

        brew install rbenv ruby-build

2. Add `eval "$(rbenv init -)"` to the end of your `.bash_profile`:

        echo 'eval "$(rbenv init -)"' >> ~/.bash_profile

3. Install a version of `ruby` and set it to your local version:

        rbenv install 2.0.0-p647
        rbenv local 2.0.0-p647

## Other Problems

Please ask for help on the Slack channel. Join at [slack.cordova.io](http://slack.cordova.io/).

[ruby_linux]: https://www.ruby-lang.org/en/documentation/installation/#package-management-systems
[homebrew]: http://brew.sh/
[linux_node]: https://nodesource.com/blog/nodejs-v012-iojs-and-the-nodesource-linux-repositories#installing-node-js-v0-12
[ruby_downloads]: http://rubyinstaller.org/downloads/
[ruby_installer]: http://dl.bintray.com/oneclick/rubyinstaller/rubyinstaller-2.2.3.exe
[ruby_devkit]: http://dl.bintray.com/oneclick/rubyinstaller/DevKit-mingw64-32-4.7.2-20130224-1151-sfx.exe
[nodejs]: https://nodejs.org/
[install_pip]: https://pip.pypa.io/en/latest/installing.html
[svn]: http://svnbook.red-bean.com/en/1.7/svn.intro.quickstart.html
[pr]: https://help.github.com/articles/using-pull-requests/
[rbenvgh]: https://github.com/sstephenson/rbenv
[python_downloads]: https://www.python.org/downloads/release/python-2711/
[python_installer_mac]: https://www.python.org/ftp/python/2.7.11/python-2.7.11-macosx10.6.pkg
[python_installer_windows]: https://www.python.org/ftp/python/2.7.11/python-2.7.11.amd64.msi
[python_linux]: http://docs.python-guide.org/en/latest/starting/install/linux/
[redirects]: www/_docs/redirects.yml
[make_page]: http://gnuwin32.sourceforge.net/packages/make.htm
[make_setup]: http://gnuwin32.sourceforge.net/downlinks/make.php
