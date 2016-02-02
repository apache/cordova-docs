---
layout: plugins
title: Plugin Contributors
---

# Plugin Search for Plugin Authors

## How do I add a new plugin to Plugin Search?

If you want your Cordova Plugin to show up in search, simply add the `ecosystem:cordova` keyword to the `package.json` file of your plugin and publish it to npm registry.

## How can I tag supported platforms for my plugin?

Similar to `ecosystem:cordova`, platform support too uses keywords. Just add the platform name prefixed with "**cordova-**" to the plugin's list of keywords. E.g.


        "keywords": [
          "ecosystem:cordova",
          "cordova-android",
          "cordova-ios",
          "cordova-windows"
        ]


## My plugin is in plugins.cordova.io but I want to publish to npm. How do I do that?

1. **Optional** Decide if you want to change your plugin’s id. If you decide to change it,
    1. Update the id in `plugin.xml` and update your readme with the new id.
    2. Send a pull request adding your new id and old id to Cordova Registry Mapper.
    3. We integrate that module into the Cordova CLI to warn users to use the new id when adding plugins to their projects.
2. Add a `package.json` to your plugins,
    * **Note**: To keep things simple, please make sure your `id` in `plugin.xml` is the same as your `package-name` in `package.json`.
    * Use `plugman createpackagejson [PLUGIN DIRECTORY]` to create `package.json`.
        * This will create defaults based on existing values in your `plugin.xml`.
        * It will also automatically add the keyword `ecosystem:cordova` to your newly generated `package.json` file.
        * In addition, a cordova key will be added to your `package.json` which we plan to use in future updates of the tooling.
    * View the `package.json` of [cordova-plugin-device](https://github.com/apache/cordova-plugin-device/blob/master/package.json) to see an example of what your `package.json` should look like after running `plugman createpackagejson [PLUGIN DIRECTORY]` command.
    * Plugins still require a `plugin.xml` to be installed into **Cordova** projects.
3. Publish your plugin to npm using the `npm publish [PLUGIN DIRECTORY]`.

## Are there any additional documents to assist me with plugins?

Yes there are. Please take a look at the [Plugin Development Guide]({{ site.baseurl }}/docs/en/{{ site.default_linked_docs_version }}/guide/hybrid/plugins/index.html) for a more detailed guide.

## I don't like X. How can I help improve the website?

You can help improve this site by opening bugs on [JIRA](https://issues.apache.org/jira/issues/?jql=project%20%3D%20CB%20AND%20status%20%3D%20Open%20AND%20component%20%3D%20%22Registry%20Web%22) or by sending PRs on [GitHub](https://github.com/apache/cordova-docs/).
