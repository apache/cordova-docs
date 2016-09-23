---
layout: contribute
title: Apache Cordova Nightly Builds
---

# Nightly builds

**These are not official releases.**

Cordova community provides Cordova nightly builds as a way to test new features and bug-fixes not yet included into the latest official release. Nightly builds are performed by [Apache Jenkins](https://builds.apache.org/view/A-D/view/Cordova/job/cordova-nightly/) every day approximately at 3PM UTC and are being published to NPM under the `@nightly` dist tag.

The following NPM packages are being released as a part of the nightly builds:
- cordova
- cordova-lib
- cordova-android
- cordova-ios
- cordova-windows

## Notice

The nightly builds are untested and may contain known and unknown defects, undeclared features, and perhaps other issues. They are intended to be used for testing purposes by developers, and others who want to help with resolving bugs.

## Installation

To try out the latest nightly version you can do:

```bash
npm install cordova@nightly
./node_modules/.bin/cordova --version
```

You can supply the `--global` option to NPM to install the nightly version globally. _Note_ that this will replace your main Cordova distribution.

```bash
npm install --global cordova@nightly
```

## Submitting issues

Please let us know about any issues in the nightly builds so we can fix them as soon as possible. For submitting issues, please refer to the [Reporting Issues](./issues.md) document.

When submitting an issue, please add a note that the issue was reproduced using a nightly build, and provide the nightly version that you are using. You can get this via:

```bash
cordova --version
```
