---
layout: post
author:
    name: Richard Knoll
    url: https://github.com/riknoll
title:  "Upcoming Changes to Plugin Fetching"
categories: announcements
tags: news
---

The Cordova 6.0.0 release introduced the pinning of core plugin
versions in cordova-lib.

We are happy to announce that one of the new features in the upcoming
Cordova 6.1.0 release is a general API that allows any plugin to guide
the CLI in choosing a compatible plugin release to fetch for a given project.
This moves the plugin dependency information out of cordova-lib so that it
can update independently of the Cordova tools and support third-party plugins
outside of core. Our hope is that this feature will improve Cordova's plugin
ecosystem and reduce some of the frustration that Cordova developers face when
adding a new plugin to a project.

<!--more-->

The new API allows for plugin developers to give a mapping of plugin
releases to project requirements in their `package.json`. When an app developer
adds a plugin to their Cordova project, cordova-lib will examine their
installed plugins, platforms, and cordova-lib version and decide which
version of the plugin to fetch based on the provided mapping.
If the project does not fulfill the requirements for the latest release of the
plugin, the CLI will print warnings indicating the problems and fetch the
latest release of the plugin that is compatible.

This API will eventually replace the [engines element](http://cordova.apache.org/docs/en/latest/plugin_ref/spec.html#engines-and-engine) in `plugin.xml`.
It extends that element's capabilities by allowing the CLI to intelligently
select a compatible plugin release rather than failing abruptly. Printed warnings
still clearly tell the app developer that the version they are using
is not latest and show what they must update to fulfill the latest release's
requirements. Implementing this API helps you prevent your plugin from causing
unexpected build errors when added to a project.

See the [documentation](http://cordova.apache.org/docs/en/latest/guide/hybrid/plugins/index.html#specifying-cordova-dependencies)
for more information about how to use this API in your plugin.

If you have feedback or questions about this feature, please leave
a comment on this post.