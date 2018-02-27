[![Build Status](https://travis-ci.org/apache/cordova-docs.svg?branch=master)](https://travis-ci.org/apache/cordova-docs)

# Cordova Docs / Website

This repository contains the source code for the Cordova website at [cordova.apache.org](https://cordova.apache.org).

The site is also reachable with the short domain [cordova.io](http://cordova.io), the important subareas as [docs.cordova.io](http://docs.cordova.io), [blog.cordova.io](http://blog.cordova.io) and [plugins.cordova.io](http://plugins.cordova.io).

## Technical Overview

The main parts are built as a static site with [Jekyll](http://jekyllrb.com/), containing the homepage and subpages, the [blog](https://cordova.apache.org/blog) and the [docs](https://cordova.apache.org/docs).  
The [plugin search](https://cordova.apache.org/plugins) is an embedded PreactJS application.

Here in the repository the code of the actual site is located in [`/www`](www) with its subfolder [`/docs`](www/docs), [`/blog`](www/blog) and [`/plugins`](www/plugins).  
Some additional content is [pulled in during the build process](TODO).

The site is built using a [gulp script](gulpfile.js) that is run by Node.JS (`npm run-script build`). (Alternatively you can build the site using Make.) Deployments usually happen on commits to `master` via Travis, which runs [`buildAndDeploy.sh`](buildAndDeploy.sh) and commits the built site to a SVN repository.

## Instructions

- [Installing](doc/installing-a-development-environment.md)
- [Building](doc/building-the-website.md)
- [Developing](doc/developing-the-website.md)
  * [Docs Redirects](doc/redirects.md)
- [Deploying](doc/deploying-the-website.md)
- [Working on the Documentation](doc/README/en/README.md) 
  > Note: many changes to the overall documentation come from other repos and are simply pulled together by a build. `tools/bin/fetch_docs.js` has more details and `www/_data/fetched-files.yml` contains an informative list of src/dest pairs.  Most auto-generated files have a comment tag at the top of the file to indicate that they come from elsewhere.
- [Adding a Tool or a Showcase App](doc/tool-or-showcase-app.md)
- [Writing a Blog Post](doc/blogpost.md)
- [Translating](doc/translate.md)
- [Troubleshooting](doc/troubleshooting.md)

## Attributions

For attributions for used open-source work, please see the attributions page: `www/attributions.html`.
