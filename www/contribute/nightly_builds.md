---
layout: contribute
title: Apache Cordova Nightly Builds
---

# Nightly builds

**Nightly builds are not official releases and should not be used in production.**

They are generated and published to the NPM registry around 3 PM UTC under the `@nightly` dist tag.

The following NPM packages are being released as a part of the nightly builds:

- cordova (cordova-cli)
- cordova-lib
- cordova-common
- cordova-fetch
- cordova-serve
- cordova-create
- xcode (cordova-node-xcode)
- cordova-android
- cordova-electron
- cordova-ios

## Notice

Nightly builds are intended for testing purposes only—such as trying out unreleased features, verifying bug fixes, or identifying new issues before an official release.

These builds are created daily from the main branch and may be **unstable**. They are untested, may contain known and unknown defects, undeclared features, and perhaps other issues.

## Installing Cordova CLI Nightly Builds

The Cordova CLI nightly build can be installed either locally (project scope) or globally.

### Install locally (project scope):

```zsh
npm install cordova@nightly
npx cordova --version
```

### Install globally:

```zsh
npm install -g cordova@nightly
cordova
```

> **Note:** Installing globally will replace any existing Cordova installation.

## Installing Cordova Platform Nightly Builds

Cordova CLI uses npm to install platforms and plugins, as they are distributed as npm packages. To install a nightly build of a platform, simply append the `@nightly` tag to the platform name in the `platform add` command.

For example:

```zsh
cordova platform add ios@nightly
```

## Submitting Issues

If you encounter any issues with the nightly builds, please report them to the appropriate GitHub repository.

For details on how to report issues, see the [Reporting Issues](./issues.md) guide.

When submitting, **mention that the issue occurred using a nightly build** and include the version by running:

```bash
cordova --version
```
