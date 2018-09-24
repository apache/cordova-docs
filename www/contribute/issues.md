---
layout: contribute
title: Apache Cordova Reporting Issues
---

# Reporting Issues

Thank you for helping to improve Cordova! All Cordova issues should now be reported on [GitHub](https://github.com/apache/cordova). Our JIRA issue tracker has been closed, and new issues can no longer be opened there.

## Creating an issue on GitHub

Find the repository of the component which your issue applies to. To figure out which repository to report your issue to, you can take a look at the [full list of Cordova repositories](https://github.com/apache?q=cordova). Some of the most popular repositories are:

* [cordova-android](https://github.com/apache/cordova-android): core Android functionality
* [cordova-ios](https://github.com/apache/cordova-ios): core iOS functionality
* [cordova-cli](https://github.com/apache/cordova-cli): command-line tool (the `cordova` command)
* [cordova-docs](https://github.com/apache/cordova-docs): the Cordova website and documentation

Once you have found the correct repository to create your issue in, go to the _Issues_ tab, and click _New issue_. Simply fill out the issue template, and submit your issue.

# Issue Priority

We gauge issue priority on the following scale:
* **Minor/Trivial:** The feature or bug is very specific or only affects a few people
* **Major:** The feature or bug is important and impacts many people
* **Critical:** Bugs (not features) that block the main function of a component and affect a large number of people (e.g. the camera plugin can't take pictures in iOS version x.x)
* **Blocker:**  Catastrophic bugs that prevent projects from building or cause basic projects to crash immediately. It is very unlikely that a bug is a Blocker

If you aren't sure about the priority, leave the default (major) selected. Please be aware that as our contributors triage issues, they may change the priority based on our criteria.

# Finding out versions

You can quickly find out versions of platforms/plugins you're using by running:

    cordova platform ls

or

    cordova plugin ls

in your project respectively. You can find out the version of the Cordova CLI you're using by running:

    cordova --version

# Generating CLI logs

You can use `--verbose` flag to generate detailed logs for cordova build-time bugs related with the CLI. This helps significantly in debugging.


