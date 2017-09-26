# Cordova Docs

## Introduction

This repository contains the source code for the Cordova website. This covers [cordova.io](http://cordova.io) (= [cordova.apache.org](http://cordova.apache.org/)) and its subdomains [docs.cordova.io](http://docs.cordova.io) (= [cordova.apache.org/docs](http://cordova.apache.org/docs)) and [plugins.cordova.io](http://plugins.cordova.io) (= [cordova.apache.org/plugins](http://cordova.apache.org/plugins)).

## Table of Contents

  * [Introduction](#introduction)
  * [Table of Contents](#table-of-contents)
  * [Installing](#installing)
    + [Ruby](#ruby)
      - [Mac OS X](#mac-os-x)
      - [Windows](#windows)
      - [Linux](#linux)
      - [Verify Ruby](#verify-ruby)
    + [Python](#python)
      - [Mac OS X](#mac-os-x-1)
      - [Windows](#windows-1)
      - [Linux](#linux-1)
      - [Verify Python](#verify-python)
    + [Node.js](#nodejs)
      - [Mac OS X &amp; Windows](#mac-os-x--windows)
      - [Linux](#linux-2)
      - [Verify Node.js](#verify-nodejs)
    + [Dependencies](#dependencies)
      - [Ruby](#ruby-1)
      - [JavaScript](#javascript)
    + [Make (optional)](#make-optional)
      - [Windows](#windows-2)
      - [Mac OS X](#mac-os-x-2)
      - [Linux](#linux-3)
      - [Verify make](#verify-make)
  * [Building](#building)
  * [Developing](#developing)
    + [Docs Redirects](#docs-redirects)
  * [Deploying](#deploying)
  * [Working on the Documentation](#working-on-the-documentation)
  * [Adding a Tool or a Showcase App](#adding-a-tool-or-a-showcase-app)
  * [Writing a Blog Post](#writing-a-blog-post)
  * [Troubleshooting](#troubleshooting)
    + [Error: EMF, too many open files](#error-emf-too-many-open-files)
    + [Error: spawn ENOENT](#error-spawn-enoent)
    + [Permission issues during Ruby install](#permission-issues-during-ruby-install)
    + [Other Problems](#other-problems)
  * [Attributions](#attributions)

## Installing

### Ruby

Ruby 2.0 is required to build the docs. NOTE: *The docs will not build with Ruby 1.8, 1.9 or 2.4.*

#### Mac OS X

Install Homebrew from [this site][homebrew], and then run:

    brew install ruby@2.0

#### Windows

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

#### Linux

Run the commands from [this site][ruby_linux] that apply to your Linux distribution.

#### Verify Ruby

Verify your Ruby installation by running:

    ruby --version

### Python

Python 2.7 is also required to build the docs. NOTE: *The docs will not build with Python 3.0 or greater.*

#### Mac OS X

Mac OS X comes with Python 2.7 pre-installed. Else, follow these steps:

1. Download [this installer][python_installer_mac] from [this page][python_downloads].
2. Run the downloaded file.

#### Windows

Follow these steps:

1. Download [this installer][python_installer_windows] from [this page][python_downloads].
2. Run the downloaded file.
   1. Use the default installation path
   1. Make sure the **'add executable to path'** option is checked.

#### Linux

The latest version of CentOS, Fedora, Redhat Enterprise (RHEL) and Ubuntu come with Python 2.7 pre-installed. Else, follow the steps from [this site][python_linux].

#### Verify Python

Verify your Python installation by running:

    python --version

The version must be 2.7.x.

### Node.js

#### Mac OS X &amp; Windows

Go to [this site][nodejs], and click the "Install" button. Then run the downloaded file and follow the on-screen instructions. Make sure that the option to **install NPM** is enabled, if you see one.

#### Linux

Linux, follow the instructions on [this site][linux_node].

#### Verify Node.js

Verify your Node.js installation by running:

    node --version
    npm --version

### Dependencies

#### Ruby

Once Ruby and Node.js are installed, install Ruby dependencies by running:

    gem install bundler
    bundle install --path ./ruby_modules

This will install the required Ruby Gems locally into a subfolder called `ruby_modules` in your repo folder. On some systems, the above commands need to be prefixed with `sudo`. Similarly on Windows, the `cmd` window in which those commands are to be run might need to have been "Run as Administrator."

#### JavaScript

Finally, install Node.js and JavaScript dependencies by running:

    npm install

### Make (optional)

The website can be built with Gulp or Make. The Gulp workflow is enabled by just installing all the JavaScript dependencies. The Make workflow usually allows for faster builds, but requires installation of the `make` tool.

#### Windows

Make can be installed on Windows from [this page][make_page] by downloading the [setup tool][make_setup] and running it.

#### Mac OS X

Make comes with the Xcode Command Line Tools. To install them, run:

    xcode-select --install

#### Linux

Make is installed by default on Linux.

#### Verify make

Verify your make installation by running:

    make --version

## Building

To build the whole website, run:

    node_modules/.bin/gulp build --prod

The built website will be in a folder called `build-prod`.

## Developing

To work on the website and see changes live as you save, run:

    node_modules/.bin/gulp serve

That command will build the site and start a local server. To work on only the website without the docs, add the `--nodocs` flag, as follows:

    node_modules/.bin/gulp serve --nodocs

Alternatively, to dynamically rebuild the site and refresh the browser _when changes happen_ (again, optionally with the `--nodocs` flag), run:

    node_modules/.bin/gulp watch

### Docs Redirects

See [doc/redirects.md](doc/redirects.md).

## Deploying

This section requires basic knowledge of SVN. If you do not know how to use SVN, refer to [this tutorial][svn].

To build the full website, run:

    node_modules/.bin/gulp build --prod

A folder called `build-prod` will be created, and will contain the built website. Then, in a directory *one level above* the `cordova-docs` repository, check out the SVN repository that contains the currently deployed website by running the following command (committer access required):

    cd ..
    svn checkout https://svn.apache.org/repos/asf/cordova/site cordova-website

Then, move into the `cordova-website` repository and synchronise it with the SVN server:

    cd cordova-website
    svn update

Copy the `cordova-docs/build-prod/` directory to the `public` directory in SVN like so:

    cd ..
    cp -R cordova-docs/build-prod/. cordova-website/public/

Some files will be new (`?` in SVN, and need to be `svn add`ed) and some files will be changed (`M` in SVN; no action required). To see just the `?` changes, run:

    cd cordova-website
    svn status | grep "?"

Once you are satisfied that you have added the required changes, commit with a message:

    svn commit -m "Updated docs"

**NOTE**: The commit might take a while (up to 1 hour), depending on the number of files changed.

## Working on the Documentation

Refer to [doc/README/en/README.md](doc/README/en/README.md) for information about writing documentation.

> Note: many changes to the overall documentation come from other repos and are simply pulled together by a build.  tools/bin/fetch_docs.js has more details and www/_data/fetched-files.yml contains an informative list of src/dest pairs.  Most auto-generated files have a comment tag at the top of the file to indicate that they come from elsewhere.

## Adding a Tool or a Showcase App

See [doc/tool-or-showcase.md](doc/tool-or-showcase-app.md).

## Writing a Blog Post

See [doc/blogpost.md](doc/blogpost.md).

## Troubleshooting

### Error: EMF, too many open files

Increase the maximum number of open files on the system:

    ulimit -n 10480

### Error: spawn ENOENT

Run:

    gulp clean

### Permission issues during Ruby install

You could try a different method to install Ruby. Checkout [rbenv][rbenvgh]. Instructions:

1. Install rbenv

        brew install rbenv ruby-build

2. Add `eval "$(rbenv init -)"` to the end of your `.bash_profile`:

        echo 'eval "$(rbenv init -)"' >> ~/.bash_profile

3. Install a version of `ruby` and set it to your local version:

        rbenv install 2.0.0-p647
        rbenv local 2.0.0-p647

### Other Problems

Please ask for help on the Slack channel. Join at [slack.cordova.io](http://slack.cordova.io/).

## Attributions

For attributions for used open-source work, please see the attributions page: `www/attributions.html`.


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
