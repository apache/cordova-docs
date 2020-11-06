---
layout: post
author:
    name: Bryan Ellis
title:  "Cordova Lib 10.0.0 Released!"
categories: announcements
tags: news releases
---

We are happy to announce that we have just released `cordova-lib 10.0.0`!

* [cordova-lib@10.0.0](https://www.npmjs.com/package/cordova-lib)

## Release Highlights

In addition to various improvements and fixes, this release has:

* Removed the `plugin save` command, which had become the default behaviour since version 7.0.
* Updated the pinned platforms:
  * cordova-android@9.0.0
  * cordova-ios@6.1.0
  * cordova-osx@6.0.0
* Raised the minimum required NodeJS version for this release to 10.x.

Please report any issues you find at [issues.cordova.io](http://issues.cordova.io/)!

<!--more-->
# Changes include:

* [GH-846](https://github.com/apache/cordova-lib/pull/846) breaking: remove `cordova info` logic from `lib`
* [GH-849](https://github.com/apache/cordova-lib/pull/849) breaking: bump dependencies
* [GH-847](https://github.com/apache/cordova-lib/pull/847) chore: update dev dependencies
* [GH-848](https://github.com/apache/cordova-lib/pull/848) chore: bump `cordova-eslint` w/ automatic fixes
* [GH-843](https://github.com/apache/cordova-lib/pull/843) test(`fixture-helper`): install **Android** platform by name again
* [GH-844](https://github.com/apache/cordova-lib/pull/844) fix: remove unused dependency on `cordova-create`
* [GH-841](https://github.com/apache/cordova-lib/pull/841) chore: add `package-lock.json`
* [GH-840](https://github.com/apache/cordova-lib/pull/840) chore: use short notation in `package.json`
* [GH-839](https://github.com/apache/cordova-lib/pull/839) chore: stop testing with nightly
* [GH-838](https://github.com/apache/cordova-lib/pull/838) chore: update **Android** platform pinning to 9.0.0
* [GH-837](https://github.com/apache/cordova-lib/pull/837) chore: update **OSX** platform pinning to 6.0.0
* [GH-836](https://github.com/apache/cordova-lib/pull/836) chore: update **iOS** platform pinning to 6.1.0
* [GH-835](https://github.com/apache/cordova-lib/pull/835) GH-832: Look at devDeps for restoring platforms
* [GH-833](https://github.com/apache/cordova-lib/pull/833) breaking: upgrade cordova dependencies for next major
* [GH-831](https://github.com/apache/cordova-lib/pull/831) test: use `expectAsync` for rejections
* [GH-825](https://github.com/apache/cordova-lib/pull/825) test(e2e): improve `HooksRunner.spec`
* [GH-828](https://github.com/apache/cordova-lib/pull/828) chore: consolidate eslint configs
* [GH-803](https://github.com/apache/cordova-lib/pull/803) test: move `cordova/platform/{platform => addHelper}`
* [GH-827](https://github.com/apache/cordova-lib/pull/827) fix: plugin installation from `git` url w/ `semver`
* [GH-826](https://github.com/apache/cordova-lib/pull/826) test: use `fs.copySync` for increased performance
* [GH-823](https://github.com/apache/cordova-lib/pull/823) test(e2e): re-enable HooksRunner#12 and move it to plugin#14
* [GH-824](https://github.com/apache/cordova-lib/pull/824) style: fix linting violations
* [GH-821](https://github.com/apache/cordova-lib/pull/821) feat: proper support for scoped plugins
* [GH-822](https://github.com/apache/cordova-lib/pull/822) refactor: `eslint` setup
* [GH-820](https://github.com/apache/cordova-lib/pull/820) refactor: remove stub interface to `cordova-create`
* [GH-819](https://github.com/apache/cordova-lib/pull/819) refactor: use `execa`'s cross-platform shebang support in `HooksRunner`
* [GH-812](https://github.com/apache/cordova-lib/pull/812) chore: replace `superspawn` with `execa`
* [GH-781](https://github.com/apache/cordova-lib/pull/781) chore: remove `plugin save`
* [GH-780](https://github.com/apache/cordova-lib/pull/780) chore: deprecate `plugin save` command
* [GH-818](https://github.com/apache/cordova-lib/pull/818) Extend and improve plugin tests in preparation of supporting scoped plugins
* [GH-810](https://github.com/apache/cordova-lib/pull/810) chore: bump production dependencies
* [GH-816](https://github.com/apache/cordova-lib/pull/816) Simplify `jasmine` configuration
* [GH-817](https://github.com/apache/cordova-lib/pull/817) Remove dead code in `integration-tests/plugin.spec`
* [GH-815](https://github.com/apache/cordova-lib/pull/815) Do not spawn child process to get platform version
* [GH-813](https://github.com/apache/cordova-lib/pull/813) `plugman_fetch.spec` cleanup
* [GH-814](https://github.com/apache/cordova-lib/pull/814) Remove obsolete and duplicate ignore entries
* [GH-809](https://github.com/apache/cordova-lib/pull/809) chore: improve npm ignore list
* [GH-811](https://github.com/apache/cordova-lib/pull/811) chore: update `jasmine` dependencies
* [GH-808](https://github.com/apache/cordova-lib/pull/808) Remove unused module plugman/platforms/common
* [GH-807](https://github.com/apache/cordova-lib/pull/807) Break dependency cycles
* [GH-804](https://github.com/apache/cordova-lib/pull/804) Fix `cordova/emulate.spec`
* [GH-806](https://github.com/apache/cordova-lib/pull/806) Remove unused exports from `cordova/util`
* [GH-805](https://github.com/apache/cordova-lib/pull/805) Remove support for obsolete `<project>/.cordova/config.json`
* [GH-802](https://github.com/apache/cordova-lib/pull/802) Minor code cleanup
* [GH-797](https://github.com/apache/cordova-lib/pull/797) Do not run legacy hooks from dirs anymore
* [GH-800](https://github.com/apache/cordova-lib/pull/800) Remove `platform.check`
* [GH-765](https://github.com/apache/cordova-lib/pull/765) Remove code to handle plugins that were added by cordova@<5.4.0
* [GH-766](https://github.com/apache/cordova-lib/pull/766) Remove parts of plugman that have been moved to the plugman repo
* [GH-772](https://github.com/apache/cordova-lib/pull/772) Replace underscore with modern JS
* [GH-799](https://github.com/apache/cordova-lib/pull/799) chore: drop node 6 and 8 support
* [GH-798](https://github.com/apache/cordova-lib/pull/798) chore: bump version to 10.0.0-dev
* [GH-770](https://github.com/apache/cordova-lib/pull/770) Use up-to-date fixtures in tests
* [GH-796](https://github.com/apache/cordova-lib/pull/796) HooksRunner code & spec cleanup
* [GH-791](https://github.com/apache/cordova-lib/pull/791) fix: error message during plugin installation w/ missing engine
* [GH-777](https://github.com/apache/cordova-lib/pull/777) chore: add Node.js 12 to CI services
* [GH-786](https://github.com/apache/cordova-lib/pull/786) Quick workaround for e2e failure on AppVeyor CI
* [GH-783](https://github.com/apache/cordova-lib/pull/783) `nyc@14` update in devDependencies
* [GH-775](https://github.com/apache/cordova-lib/pull/775) chore: cleanup `plugman.createPackageJson`
* [GH-767](https://github.com/apache/cordova-lib/pull/767) Simpler and better `cordova/util.getPlatformApiFunction`
* [GH-774](https://github.com/apache/cordova-lib/pull/774) Make `src/plugman/init-defaults.js` lintable
* [GH-773](https://github.com/apache/cordova-lib/pull/773) Have `plugman.createPackageJson` create file in plugin dir, not in cwd
* [GH-771](https://github.com/apache/cordova-lib/pull/771) Prevent masking of errors during testing
* [GH-768](https://github.com/apache/cordova-lib/pull/768) Proper async code in `src/plugman/createpackagejson.js`
* [GH-764](https://github.com/apache/cordova-lib/pull/764) chore: expressive `pkgJson.spec`
* [GH-763](https://github.com/apache/cordova-lib/pull/763) Remove unnecessary spy
* [GH-762](https://github.com/apache/cordova-lib/pull/762) Remove unused fixtures
* [GH-761](https://github.com/apache/cordova-lib/pull/761) chore: various test improvements
  * Fix some test descriptions in `cordova/util.spec`
  * Stop `cordova/util.spec` from messing with the user's home directory!
  * Proper temp folder usage in `cordova/util.spec`
  * Remove outdated test from `cordova/util.spec`
  * Remove `rewire`/`revert` anti-pattern
  * Remove `superspawn` faking from `HooksRunner.spec`
* [GH-760](https://github.com/apache/cordova-lib/pull/760) Minor cleanup of CI configs
