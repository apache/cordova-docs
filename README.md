[![Build Status](https://travis-ci.org/apache/cordova-docs.svg?branch=master)](https://travis-ci.org/apache/cordova-docs)

# Cordova Docs

## Introduction

This repository contains the source code for the Cordova website. This covers [cordova.io](http://cordova.io) (= [cordova.apache.org](http://cordova.apache.org/)) and its subdomains [docs.cordova.io](http://docs.cordova.io) (= [cordova.apache.org/docs](http://cordova.apache.org/docs)) and [plugins.cordova.io](http://plugins.cordova.io) (= [cordova.apache.org/plugins](http://cordova.apache.org/plugins)).

## Content

- [Installing](doc/installing-a-development-environment.md)
- [Building](doc/building-the-website.md)
- [Developing](doc/developing-the-website.md)
  * [Docs Redirects](doc/redirects.md)
- [Deploying](doc/deploying-the-website.md)
- [Working on the Documentation](doc/README/en/README.md) 
  > Note: many changes to the overall documentation come from other repos and are simply pulled together by a build. `tools/bin/fetch_docs.js` has more details and `www/_data/fetched-files.yml` contains an informative list of src/dest pairs.  Most auto-generated files have a comment tag at the top of the file to indicate that they come from elsewhere.
- [Adding a Tool or a Showcase App](doc/tool-or-showcase-app.md)
- [Writing a Blog Post](doc/blogpost.md)
- [Troubleshooting](doc/troubleshooting.md)

## Attributions

For attributions for used open-source work, please see the attributions page: `www/attributions.html`.
