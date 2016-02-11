---
layout: plugins
title: Plugins FAQ
---

# Plugin Search FAQ

## What is npm Plugin Search?

On April 21 2015, Cordova team announced plans to move core and 3rd party plugins to the npm ecosystem. The [npm Plugin Search]({{ site.baseurl }}/plugins) page offers an easy and user friendly way to browse plugins that have completed this transition.

## What version of Cordova do I need to use npm?

To start using plugins from npm, Cordova CLI version 5.0.0 or higher is required.

## How do I install plugins from npm?

Cordova team decided to change official plugin IDs from org.apache.cordova.* to cordova-plugin-* to better fit within the npm ecosystem. Developers can install a plugin using the command `cordova plugin add [PLUGIN ID]`.

## How do I know which platforms are supported for a plugin?

Plugin Search displays plugins in the form of cards. Each card contains important information about the plugin. Supported platforms are represented in the form of platform icons across the bottom of the card.

## How can I identify official core plugins?

Core plugins have a blue strip on the left side of their card.

## Can I still download plugins if I'm using Cordova CLI 4.3.0 or lower?

Yes! You can use Cordova Plugins from the [old plugin registry][old_reg].

## What’s happening to the old plugin registry?

See Cordova [blog]({{ site.baseurl }}/announcements/2015/04/21/plugins-release-and-move-to-npm.html) for more details. It’s being phased out:

* Read-only after July 15th
* End of support after October 15th

## Are there any additional documents to assist me with plugins?

Yes there are. Please take a look at [Add Plugin Features]({{ site.baseurl }}/docs/en/{{ site.default_linked_docs_version }}/guide/cli/#add-plugin-features) for a more detailed guide.

## I don't like X. How can I help improve the website?

You can help improve this site by opening bugs on [JIRA](https://issues.apache.org/jira/issues/?jql=project%20%3D%20CB%20AND%20status%20%3D%20Open%20AND%20component%20%3D%20%22Registry%20Web%22) or by sending PRs on [GitHub](https://github.com/apache/cordova-docs/).

[old_reg]: http://50.17.177.14/
