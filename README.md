[![Build Test](https://github.com/apache/cordova-docs/actions/workflows/ci.yml/badge.svg)](https://github.com/apache/cordova-docs/actions/workflows/ci.yml)
[![Deploy Staging Site](https://github.com/apache/cordova-docs/actions/workflows/deploy-stage.yml/badge.svg)](https://github.com/apache/cordova-docs/actions/workflows/deploy-stage.yml)
[![Deploy Prod Site](https://github.com/apache/cordova-docs/actions/workflows/deploy-prod.yml/badge.svg)](https://github.com/apache/cordova-docs/actions/workflows/deploy-prod.yml)
[![Release Auditing](https://github.com/apache/cordova-docs/actions/workflows/release-audit.yml/badge.svg)](https://github.com/apache/cordova-docs/actions/workflows/release-audit.yml)

# Cordova Docs / Website

This repository contains the source code for the Cordova website at [cordova.apache.org](https://cordova.apache.org).

## Technical Overview

The main parts are built as a static site with [Jekyll](http://jekyllrb.com/), containing the homepage and subpages, the [blog](https://cordova.apache.org/blog) and the [docs](https://cordova.apache.org/docs).

Here in the repository the code of the actual site is located in [`/www`](www) with its subfolder [`/docs`](www/docs), [`/blog`](www/blog) and [`/plugins`](www/plugins).  
Some additional content is [pulled in during the build process](www/_data/fetched-files.yml).

The site is built using a [gulp script](gulpfile.js) run by Node.js (`npm run build`). Development uses **Ruby 3.4.x** and **Node.js 24.x**, matching the GitHub Actions workflows. See the [installation guide](doc/installing-a-development-environment.md) for setup instructions.

The [staging workflow](.github/workflows/deploy-stage.yml) builds and deploys commits to `master` to the `asf-staging` branch. The [production workflow](.github/workflows/deploy-prod.yml) is started manually and deploys to `asf-site`. Both run `npm run build:prod`.

## Instructions

- [Installing](doc/installing-a-development-environment.md)
- [Developing](doc/developing-the-website.md)
  * [Docs Redirects](doc/redirects.md)
- [Testing](doc/testing-the-website.md)
- Manual [Build](doc/building-the-website.md) and [Deployment](doc/deploying-the-website.md)
- [Automated Build and Deployment](doc/building-and-deploying-the-website.md) with GitHub Actions
- [Troubleshooting](doc/troubleshooting.md)

### Common Tasks

- [Working on `www/docs`](doc/working-on-docs.md) (updating from `dev`, creating new version, pulling in external docs)
- [Writing a Blog Post](doc/blogpost.md)
- [Adding a Tool or a Showcase App](doc/tool-or-showcase-app.md)
- [Translating](doc/translate.md)


## Attributions

For attributions for used open-source work, please see the attributions page: `www/attributions.html`.
