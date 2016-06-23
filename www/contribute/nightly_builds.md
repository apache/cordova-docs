---
layout: contribute
title: Apache Cordova Nightly Builds
---

# Nightly builds

Cordova community provides Cordova nightly builds as a way to test new features and bugfixes not yet included into the latest official release. Nightly builds are performed by [Apache Jenkins](https://builds.apache.org/view/A-D/view/Cordova/job/cordova-nightly/) every day approximately at 3PM UTC and being published to NPM under `@nightly` dist tag.

The following NPM packages are being released as a part of nightly build:
- cordova
- cordova-lib
- cordova-android
- cordova-ios
- cordova-windows

## Notice

The nightly builds are untested and may contain known and unknown defects, undeclared features and any other issues. They are intended to be used for testing purposes by developers, early adopters and others people who want to help with resolving bugs.

## Installation

To try out the latest nightly version you can do:

```bash
npm install cordova@nightly
./node_modules/.bin/cordova --version
```

You can supply `--global` option to NPM to install nightly version globally. _Note_ that this will replace your main Cordova distribution.

```bash
npm install --global cordova@nightly
```

## Submitting issues

Please let us know about any issues in nightly builds so we could fix them as soon as possible. For submitting issues please refer to [Reporting Issues](./issues.md) document.

When submitting an issue, please add a note that issue is reproduced using nightly build and provide nightly version, you're using. You can get it via

```bash
cordova --version
```
