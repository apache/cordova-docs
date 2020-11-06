---
layout: post
author:
    name: Bryan Ellis
title:  "Cordova CLI 10.0.0 Released!"
categories: announcements
tags: news releases
---

We are happy to announce that we have just released `cordova 10.0.0`!

* [cordova@10.0.0](https://www.npmjs.com/package/cordova)

**To upgrade:**

```bash
npm uninstall -g cordova
npm install -g cordova@10.0.0
```

## Release Highlights

In addition to various improvements and fixes, this release has updated its core library.

The follow platforms have been updated to the latest pinning.

* `cordova-android@^9.0.0`
* `cordova-ios@^6.1.0`
* `cordova-osx@^6.0.0`

In addition, this release has also:

* Removed the `plugin save` command, which had become the default behaviour since version 7.0.
* Improved `cordova info` display.
* Raised the minimum required NodeJS version for this release to 10.x.

Please report any issues you find at [issues.cordova.io](http://issues.cordova.io/)!

<!--more-->
# Changes include:

* [GH-521](https://github.com/apache/cordova-cli/pull/521) test: fix node.js version check
* [GH-520](https://github.com/apache/cordova-cli/pull/520) chore: rebuilt `package-lock`
* [GH-519](https://github.com/apache/cordova-cli/pull/519) breaking: bump `cordova-lib@^10.0.0`
* [GH-402](https://github.com/apache/cordova-cli/pull/402) Tiny CLI docs improvements
* [GH-518](https://github.com/apache/cordova-cli/pull/518) feat(ci): migrate to `github-actions`
* [GH-516](https://github.com/apache/cordova-cli/pull/516) chore: drop `node-8` deprecation transition step
* [GH-517](https://github.com/apache/cordova-cli/pull/517) chore: add `package-lock.json`
* [GH-515](https://github.com/apache/cordova-cli/pull/515) chore: improve npm ignore
* [GH-513](https://github.com/apache/cordova-cli/pull/513) breaking: bump dev dependencies
  * `mock-stdin@^1.0.0`
  * `nyc@^15.1.0`
  * `rewire@^5.0.0`
* [GH-514](https://github.com/apache/cordova-cli/pull/514) chore: cleanup `package.json`
* [GH-512](https://github.com/apache/cordova-cli/pull/512) breaking: bump dependencies
  * `configstored@^5.0.1`
  * `cordova-commond@^4.0.2`
  * `cordova-created@^3.0.0`
  * `cordova-libd@^9.0.1`
  * `execad@^4.0.3`
  * `insightd@^0.10.3`
  * `loud-rejectiond@^2.2.0`
  * `noptd@^4.0.3`
  * `semverd@^7.3.2`
  * `systeminformationd@^4.26.10`
  * `update-notifierd@^4.1.0`
* [GH-511](https://github.com/apache/cordova-cli/pull/511) chore(`eslint`): bump to 3.0.0 w/ fix
* [GH-510](https://github.com/apache/cordova-cli/pull/510) feat: migrate "`cordova info`" lib logic to cli
* chore(asf): update git notification settings
* Update CONTRIBUTING.md
* [GH-495](https://github.com/apache/cordova-cli/pull/495) fix: cannot call `config` or `create` commands
* [GH-494](https://github.com/apache/cordova-cli/pull/494) refactor(`create`): use `cordova-create` 3.0.0-nightly
* [GH-493](https://github.com/apache/cordova-cli/pull/493) refactor: `eslint` setup
* [GH-490](https://github.com/apache/cordova-cli/pull/490) refactor(`create`): do not expand `~` to `$HOME` anymore
* [GH-489](https://github.com/apache/cordova-cli/pull/489) refactor(`create`): depend directly on `cordova-create`
* [GH-485](https://github.com/apache/cordova-cli/pull/485) docs(`config`): remove "`autosave`" setting
* [GH-484](https://github.com/apache/cordova-cli/pull/484) test(`config`): use generic config key name
* [GH-483](https://github.com/apache/cordova-cli/pull/483) refactor: remove dead code & simplify
* [GH-486](https://github.com/apache/cordova-cli/pull/486) docs: undocument "`plugin save`" command
* [GH-488](https://github.com/apache/cordova-cli/pull/488) docs: remove mentions of "`cordova create`" argument "config"
* [GH-487](https://github.com/apache/cordova-cli/pull/487) docs(`info`): remove outdated remark about `info.txt`
* [GH-482](https://github.com/apache/cordova-cli/pull/482) docs: undocument "`platform save`", again
* [GH-475](https://github.com/apache/cordova-cli/pull/475) refactor: Remove support for `<project>/.cordova/config.json`
* [GH-468](https://github.com/apache/cordova-cli/pull/468) docs: undocument "`hooks/`" directory
* [GH-467](https://github.com/apache/cordova-cli/pull/467) docs: undocument "`platform check`" command
* [GH-481](https://github.com/apache/cordova-cli/pull/481) chore: update `jasmine` dependencies
* [GH-480](https://github.com/apache/cordova-cli/pull/480) chore: drop node 6 and 8 support
* [GH-479](https://github.com/apache/cordova-cli/pull/479) chore: bump version to 10.0.0-dev
* [GH-477](https://github.com/apache/cordova-cli/pull/477) Avoid registering too many event listeners in tests
* [GH-476](https://github.com/apache/cordova-cli/pull/476) Undocument removed `platform save` command
* [GH-473](https://github.com/apache/cordova-cli/pull/473) Fix blocked `telemetry` calls
* [GH-472](https://github.com/apache/cordova-cli/pull/472) fix: argument filtering in `telemetry.track`
* [GH-474](https://github.com/apache/cordova-cli/pull/474) Remove unsupported option `--copy-from`
* [GH-458](https://github.com/apache/cordova-cli/pull/458) chore: node deprecation warning for <10
* [GH-471](https://github.com/apache/cordova-cli/pull/471) Add unit tests for the telemetry module
* [GH-469](https://github.com/apache/cordova-cli/pull/469) Use `semver` to check if using a prerelease version
* [GH-470](https://github.com/apache/cordova-cli/pull/470) chore: add codecov to display coverage in GH
* [GH-459](https://github.com/apache/cordova-cli/pull/459) chore: replace `istanbul` with `nyc`
* [GH-427](https://github.com/apache/cordova-cli/pull/427) Minor fixes in `README`
* [GH-454](https://github.com/apache/cordova-cli/pull/454) chore: node warning on version < 8
* [GH-430](https://github.com/apache/cordova-cli/pull/430) chore: add Node.js 12 to CI services
* [GH-440](https://github.com/apache/cordova-cli/pull/440) docs(readme): remove duplicated instructions
* [GH-433](https://github.com/apache/cordova-cli/pull/433) Updated the Supported Platforms
* [GH-426](https://github.com/apache/cordova-cli/pull/426) Handle output error strings
* [GH-423](https://github.com/apache/cordova-cli/pull/423) Cleaner solution to spy on latest CordovaLogger
* [GH-421](https://github.com/apache/cordova-cli/pull/421) Fix `cordova config list` command
* [GH-419](https://github.com/apache/cordova-cli/pull/419) Fix `cordova config list` command recognition
* [GH-365](https://github.com/apache/cordova-cli/pull/365) Start requirements unit testing
