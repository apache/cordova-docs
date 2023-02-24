---
layout: post
author:
    name: Niklas Merz
    url: https://twitter.com/niklasmaerz
title:  "Screen Orientation Plugin 3.0.3 Released!"
categories: news
tags: release plugins
---

We are happy to announce that we have just released an update for `cordova-plugin-screen-orientation`!

* [cordova-plugin-screen-orientation@3.0.3](https://www.npmjs.com/package/cordova-plugin-screen-orientation)

**To upgrade:**

```bash
cordova plugin remove cordova-plugin-screen-orientation
cordova plugin add cordova-plugin-screen-orientation@3.0.3
```

## Release Highlights

This release improves compatibility with newer iOS versions (see ([#107](https://github.com/apache/cordova-plugin-screen-orientation/issues/107))) and contains miscellaneous version updates.

Please report any issues you find by following this [How to File a Bug](https://github.com/apache/cordova#filing-a-bug) guide!

<!--more-->
# Changes include:

* build(deps): bump json5 from 1.0.1 to 1.0.2 ([#110](https://github.com/apache/cordova-plugin-screen-orientation/issues/110))
* feat(ios): add support for **iOS** 16 ([#107](https://github.com/apache/cordova-plugin-screen-orientation/issues/107))
* fix(chrome): lock test ([#105](https://github.com/apache/cordova-plugin-screen-orientation/issues/105))
* chore: add .npmrc file to ensure the official NPM registry is used for package installations. ([#103](https://github.com/apache/cordova-plugin-screen-orientation/issues/103))
* chore: package-lock update (#104)
* ci: sync workflow with paramedic (#101)
* chore(npm): bump package-lock v2 w/ rebuild (#99)
* ci(android): update java requirement for `cordova-android`@11 ([#92](https://github.com/apache/cordova-plugin-screen-orientation/issues/92))
* ci(ios): update workflow w/ **iOS** 15 ([#88](https://github.com/apache/cordova-plugin-screen-orientation/issues/88))
* ci: add action-badge (#87)
* ci: remove travis & appveyor (#86)
* ci: add gh-actions workflows ([#84](https://github.com/apache/cordova-plugin-screen-orientation/issues/84))
* ci: add node-14.x to workflow ([#76](https://github.com/apache/cordova-plugin-screen-orientation/issues/76))
* fix: resolveOrientation function not working correctly ([#77](https://github.com/apache/cordova-plugin-screen-orientation/issues/77))
* chore: adds package-lock file ([#67](https://github.com/apache/cordova-plugin-screen-orientation/issues/67))
* refactor(eslint): use cordova-eslint /w fix ([#66](https://github.com/apache/cordova-plugin-screen-orientation/issues/66))
* chore(npm): use short notation in `package.json` ([#64](https://github.com/apache/cordova-plugin-screen-orientation/issues/64))
* chore: removes old demo project. closes #52 (#65)
* chore(asf): update git notification settings
* Update CONTRIBUTING.md
