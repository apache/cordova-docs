---
layout: contribute
title: Apache Cordova Reporting Issues
---

# Reporting Issues

Thank you for helping to improve Cordova! Issues for Apache Cordova are hosted at the Apache [JIRA](https://issues.apache.org/jira/browse/CB). A JIRA account is required before you can submit issues (you can easily [create one here](https://issues.apache.org/jira/secure/Signup!default.jspa)). Before submitting an issue, please take a moment to search JIRA to see if an issue already exists. If it does, please consider commenting or voting for the issue to help raise its visibility.


## Creating an issue in JIRA

Once you have created an account and logged in, click the blue "Create" button at the top of the [Cordova JIRA](https://issues.apache.org/jira/browse/CB) page to create an issue. In the dialog that appears, please fill out the following fields _to the best of your ability_. All fields besides those listed here can be left blank.

Field           | Description
----------------| -----
Project         | Make sure that Apache Cordova is selected
Issue Type      | Whether or not this is a bug or feature request
Summary         | A one line description of the issue
Component       | The [part of Cordova](https://issues.apache.org/jira/browse/CB/?selectedTab=com.atlassian.jira.jira-projects-plugin:components-panel) this issue pertains to. Please select only one component if possible (e.g. if you find a bug while using cordova-plugin-camera in Android, select the "Plugin Camera" component and not "Android")
Affects Version | The version of the component that this issue pertains to
Environment     | Some extra context about the environment in which a bug was found (e.g. the version of Android you are running, your version of the Cordova CLI, your development platform, etc.)
Description     | A thorough description of the issue. For bugs, please provide code (using github) or steps for reproduction as well as any device logs or stack traces you might have.
Labels          | Please label your issue with the platforms it affects (e.g. ios, windows, android, etc.) and nothing else
Priority        | The impact of the issue (see below)

## Issue Priority

We gauge issue priority on the following scale:
* **Minor/Trivial:** The feature or bug is very specific or only affects a few people
* **Major:** The feature or bug is important and impacts many people
* **Critical:** Bugs (not features) that block the main function of a component and affect a large number of people (e.g. the camera plugin can't take pictures in iOS version x.x)
* **Blocker:**  Catastrophic bugs that prevent projects from building or cause basic projects to crash immediately. It is very unlikely that a bug is a Blocker

If you aren't sure about the priority, leave the default (major) selected. Please be aware that as our contributors triage issues, they may change the priority based on our criteria.

## Finding out versions

You can quickly find out versions of platforms/plugins you're using by running:

    cordova platform ls

or

    cordova plugin ls

in your project respectively. You can find out the version of the Cordova CLI you're using by running:

    cordova --version

# Generating CLI logs

You can use `--verbose` flag to generate detailed logs for cordova build-time bugs related with the CLI. This helps significantly in debugging.


