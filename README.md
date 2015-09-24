Introduction
============

This repository contains the source code behind [cordova.io](http://cordova.io) and some of its subdomains (namely, [docs.cordova.io](http://docs.cordova.io) and [plugins.cordova.io](http://plugins.cordova.io)).

Installing
==========

## Ruby

On Mac OS X, install Homebrew from [this site][homebrew], and then run:

    brew install ruby

On Windows, follow these steps:

1. Download [this installer][ruby_installer] from [this page][ruby_downloads].

2. Run the downloaded file.

    1. Use the default installation path (usually `C:\Ruby22`).
    1. Make sure the **'add executable to path'** option is checked.

3. Download [this Ruby DevKit self-extracting archive][ruby_devkit] from the [same website][ruby_downloads].

4. Run the downloaded file.
    1. Use the following extraction path: `C:\Ruby22DevKit`.

5. Open `cmd.exe`
    1. Go to the extraction path:

            cd C:\Ruby22DevKit

    1. Run these commands (following any instructions they give):

            ruby dk.rb init
            ruby dk.rb install

    1. Close `cmd.exe`.

On Linux, run the commands from [this site][ruby_linux] that apply to your Linux distribution.

***

Verify the installation by running:

    ruby --version

## JavaScript

On Windows and Mac OS X, go to [this site][nodejs], and click the "Install" button. Then run the downloaded file and follow the on-screen instructions. Make sure that the option to **install NPM** is enabled, if you see one.

On Linux, follow the instructions on [this site][linux_node].

***

Verify the installation by running:

    node --version
    npm --version

## Dependencies

Once Ruby and JavaScript are installed, install all dependencies by running:

    gem install bundle
    bundle install
    npm install

On some systems, administrator privileges may be required for some of the above commands.

Building
========

To build the whole website, run:

    node_modules/.bin/gulp build --prod

The built website will be in a folder called `build-prod`.

Developing
==========

To work on the website and see changes live, run:

    node_modules/.bin/gulp

That command will start a server and watch the source files, regenerating the site and refreshing the browser whenever changes are made. To make the regeneration faster, the `excludes` property in the `_dev.yml` file can be edited to only build certain files. For example, to only build the core website and not the docs, edit the properties to look like this:

    exclude:
        - static/css-src
        - docs

**NOTE**: *Please don't commit any dev-specific inclusion/exclusion modifications; keep them local to your development environment.*

Deploying
=========

This section requires basic knowledge of SVN. If you do not know how to use SVN, refer to [this tutorial][svn].

First, inspect `_prod.yml` to check that the correct `baseurl` is used. For pre-production deployment, it should be some non-empty folder (e.g. `"/use-the-force-luke"`), and for a production deployment it should be empty (i.e. `""`). To then build the full website, run:

    gulp build --prod

A folder called `build-prod` will be created, and will contain the whole website. Then, in a directory *outside* of the `cordova-docs` repository, check out the SVN repository that contains the currently deployed website by running the following command (committer access required):

    svn checkout https://svn.apache.org/repos/asf/cordova/site cordova-website

Now, copy the `cordova-docs/build-prod/` directory to the corresponding directory in SVN (i.e. something like `cordova-website/public/use-the-force-luke/` for the pre-production deployment, or just `cordova-website/public/` for the production deployment):

    cp -R cordova-docs/build-prod/* cordova-website/public/use-the-force-luke/

Finally, go into the `cordova-website` directory and commit *all* the changes introduced the newly copied files. The commit might take a while (upwards of 30min), depending on the number of files copied.

Working on the Documentation
============================

Refer to this [README.md](doc/README/en/README.md) for information about writing documentation.

Adding a Tool or a Showcase App
===============================

Items on the **Codorva Tools** or the **Cordova App Showcase** sections on the main page are modifiable by the public. Below are the guidelines and process to do so.

## Guidelines

The display image shall:

1. be less than 128KiB in size (NOTE: those are kibibytes, not kilobytes),
2. contain the app’s logo, and
3. use colors that don’t compete with other elements on the page.

The description shall:

1. be no more than 130 characters long, and
2. contain neutral and non-advertising language.

The name shall:

1. be no more than 40 characters long.

## Process

1. Change the section's YAML file:
    - `www/_data/tools.yml` for Cordova Tools, or
    - `www/_data/showcase-apps.yml` for Cordova App Showcase.
1. Optionally add an image:
    1. Place the image in the section's `img` directory:
        - `www/static/img/tools` for Cordova Tools, or
        - `www/static/img/showcase-apps` for Cordova App Showcase.
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

Ask for help on the IRC channel: #cordova on irc.freenode.net.

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
