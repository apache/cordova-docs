---
layout: post
author:
    name: Manuel Beck
title:  "Network Information Plugin 3.1.0 Released!"
categories: announcements
tags: news releases
---

We are happy to announce that we have just released an update for `cordova-plugin-network-information`!

* [cordova-plugin-network-information@3.1.0](https://www.npmjs.com/package/cordova-plugin-network-information)

**To upgrade:**

```bash
cordova plugin remove cordova-plugin-network-information
cordova plugin add cordova-plugin-network-information@3.1.0
```

## Release Highlights

### Features

- feat(android): add 5G check and test ([#172](https://github.com/apache/cordova-plugin-network-information/pull/172))
- feat(ios): add 5G check ([#159](https://github.com/apache/cordova-plugin-network-information/pull/159))

### Fixes

- fix(ios): fix deprecation warnings for iOS 12+ ([#169](https://github.com/apache/cordova-plugin-network-information/pull/169))
- fix(ios): Remove redundant `#import <netinet6/in6.h>` for Xcode 26.4 compatibility ([#166](https://github.com/apache/cordova-plugin-network-information/pull/166))

### Other

- chore: various updates ([#177](https://github.com/apache/cordova-plugin-network-information/pull/177))
- chore: update asf config ([#161](https://github.com/apache/cordova-plugin-network-information/pull/161))
- chore(dev-dep): bump @cordova/eslint-config to 6.0.1 w/ fixes ([#171](https://github.com/apache/cordova-plugin-network-information/pull/171)) [[952bd51](https://github.com/apache/cordova-plugin-network-information/commit/952bd51)]

For a full list of changes, see the [release notes](https://github.com/apache/cordova-plugin-network-information/blob/master/RELEASENOTES.md#310).

Please report any issues you find at [GitHub](https://github.com/apache/cordova-plugin-network-information/issues)!
