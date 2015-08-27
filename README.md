Introduction
============

This repository contains the source code behind [cordova.io](http://cordova.io) and some of its subdomains (namely, [docs.cordova.io](http://docs.cordova.io) and [plugins.cordova.io](http://plugins.cordova.io)).

Installing
==========

## Ruby

On Mac OS X, install Homebrew from [this site][homebrew], and then run:

    brew install ruby

On Windows, follow these steps:

1. Download this [Ruby installer][install_ruby].
1. Run the downloaded file.
    1. Use the default installation path (usually `C:\Ruby22`).
    1. Make sure the 'add executable to path' option is checked.
1. Download the Ruby DevKit self-extracting archive from the [same website][install_ruby].
1. Run this downloaded file.
    1. Use the following extraction path: `C:\Ruby22DevKit`.
1. Open `cmd.exe`
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

On Windows and Mac OS X, go to [this site][nodejs], and click the "Install" button. Then run the downloaded file and follow the on-screen instructions. Make sure that the option to install NPM is enabled, if you see one.

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

    node_modules/.bin/gulp build

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

A folder called `build-prod` will be created, and will contain the whole website. Then, in a directory *outside* of the `cordova-docs` repository, check out the SVN repository that contains the currently deployed website by running (committer access required):

    svn checkout https://svn.apache.org/repos/asf/cordova/site cordova-website

Now, copy the `cordova-docs/build-prod/` directory to the corresponding directory in SVN (i.e. something like `cordova-website/public/use-the-force-luke/` for the pre-production deployment, or just `cordova-website/public/` for the production deployment):

    cp -R cordova-docs/build-prod/ cordova-website/public/use-the-force-luke/

Finally, go into the cordova-website directory and commit *all* the changes introduced the newly copied files. The commit might take a while (upwards of 30min), depending on the number of files copied.

Adding a Tool or a Sample App
=============================

To add an item to the **Codorva Tools** or **Sample Cordova Apps** sections on the main page, follow these steps:

1. Change the section's YAML file:
    - `www/_data/tools.yml` for Cordova Tools, or
    - `www/_data/sample-apps.yml` for Sample Cordova Apps.
1. Optionally add an image (the image must be **less than 256KiB** in size):
    1. Place the image it in the `img` directory:
        - `www/static/img/tools` for Cordova Tools, or
        - `www/static/img/sample-apps` for Sample Cordova Apps.
    1. Set the `image` field in the YAML file to be just the image file's *name*.
1. Submit a GitHub pull request with the changes.

Troubleshooting
===============

Ask for help on the IRC channel: #cordova on irc.freenode.net.

***

Writing a Blog Post
===================

Use the grunt scripts!

    # Clone apache-blog-posts repo if you haven't already
    $ grunt cloneBlog

    # Create your blog posts in the apache-blog-posts (or on github) directory, and share with other for review via `git commit`. If creating a new md file, use an earlier one as a template.

    # pull down the latest shared edits of apache-blog-posts
    git pull

    # Edit your md file to remove undesired markdown links. If there is a phrase in square brackets that isn't a CB-xxxx reference, escape it with backslashes. Otherwise, heruko might error out and fail to build all the html.
    [CB-1234] \[iOS\] \[Camera\] add a whizzbang to the snarfblat

    # Set a marker where the summary on the home page should stop displaying. Add the following html comment line to your md file at the desired cutoff point:
    <!--more-->

    # in the front matter of your blog entry, set the `date:` field to the desired date that you want to appear near the title. Be aware that the date (explicit here or implied via the filename) will be used to generate the relative path to this html file (i.e., "/announcements/2014/09/22/cordova-361.html"), as will the `categories:` front matter value.
    date: 2014-09-22
    categories: releases

    # git commit your changes to apache-blog-posts

    # copy blog www/_posts directory + linkify
    $ grunt updateBlog

    # preview it locally
    cd ..
    rake build
    rake serve

    # add the full text of your new generate blog entry to svn
    svn add public/announcements/2014/09/08/cordova-361.html
    svn commit

**Types of Posts**

_Announcements_ - releases, call for translators, etc

_Core Content_ - If the content has to do with cordova-core, or publishing guides, etc., we should publish the full text directly on the cordova Blog (by whichever author), as-if written by the organization.

_Linked Posts_ - If the content was written by a contributor and is worth curating for the whole community, but is not really core ie. non-core plugins, dev tips, research, opinion-pieces, statistics, etc., post a short description, perhaps adding a document-snippet, but then link to the externally hosted content, making it clearly not written by the organization.

**How to add a Post**

Blog posts live in `www/_posts`. To create a new post:

1. Copy one of the existing posts into a new file (changing the name appropriately).
2. Run `rake serve` in the background.
3. Draft your post.
4. Get approval (see below)
5. Update the file name to reflect the commit date (if necessary)
6. Run `rake build`
7. Run `www/_posts/linkify-bugs.sh so that the CB-****` turn into links
8. Validate `public/rss.xml` with [http://validator.w3.org](http://validator.w3.org)
9. svn commit

**Post guidelines:**

* Use the post title as the first header.
* Including a header as well makes the snippet on the front page look bad.
* Use an appropriate category:
* One of: `howto`, `news`, `releases`, `announcements`, `blog` (the catch-all category)
* Use appropriate tags:
* `tools`, `plugins`, `android`, `ios`, `windowsphone`, `blackberry`, `plugin-$FOO`, `cli`, `performance`, `last-week`, `security` (add to this list as necessary)
* Use `rake serve` to preview your post, and refresh frequently.
* Jekyll does a poor job telling you where markdown errors exist.
* Use the <!--more--> tag to specify the cutoff point for displaying your post on the main page.
* Review your post yourself before asking for a review. This includes spell-check :).
* Ask for a review by pasting it into piratepad.net, and emailing the link to it to the ML.

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

**Getting Approval:**

Each blog post must be approved by at least one committer other than yourself, and must be available for all to see before going live. To request a review:

1. Run: `svn add www/_posts/your_post.md`
2. Run: `post-review` [download page](http://www.reviewboard.org/docs/rbtools/dev/)
3. Review it yourself, then click the `publish` button.
4. Wait for someone to approve it via the `Ship it` button.

_Alternative steps (if post-review tool fails)_

1. From the root directory, run: `svn diff > new_post.diff`
2. Create a new request on http://reviews.apache.org.
    a. Point it at your `new_post.diff` file
    a. Set the directory to `/`
    a. Add the group `cordova`
    a. Click `publish`

[ruby_linux]: https://www.ruby-lang.org/en/documentation/installation/#package-management-systems
[homebrew]: http://brew.sh/
[linux_node]: https://nodesource.com/blog/nodejs-v012-iojs-and-the-nodesource-linux-repositories#installing-node-js-v0-12
[install_ruby]: http://rubyinstaller.org/downloads/
[nodejs]: https://nodejs.org/
[install_pip]: https://pip.pypa.io/en/latest/installing.html
[svn]: http://svnbook.red-bean.com/en/1.7/svn.intro.quickstart.html
