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
- [Developing](doc/developing-the-website.md)
  * [Docs Redirects](doc/redirects.md)
- [Testing](doc/testing-the-website.md)
- Manual [Build](doc/building-the-website.md) and [Deployment](doc/deploying-the-website.md)
- [Automated Build and Deployment](doc/building-and-deploying-the-website.md) on commits/merges to `master` via Travis
- [Troubleshooting](doc/troubleshooting.md)

### Common Tasks

- [Working on `www/docs`](doc/working-on-docs.md) (updating drom `dev`, creating new version, pulling in external docs)
- [Writing a Blog Post](doc/blogpost.md)
- [Adding a Tool or a Showcase App](doc/tool-or-showcase-app.md)
- [Translating](doc/translate.md)


## Attributions

For attributions for used open-source work, please see the attributions page: `www/attributions.html`.
