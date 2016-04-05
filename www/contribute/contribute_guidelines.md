---
layout: contribute
title: Apache Cordova Contribute Guidelines
---

# Contributor Guidelines

Thanks for helping to improve Cordova! This page provides a general guide on making contributions to Cordova. If you can't find something on this page, please feel free to contact the [dev mailing list](http://cordova.apache.org/contact) or ask questions on the Cordova Slack.

## Prerequisites

Before contributing to Apache Cordova, please complete the following steps:

1. Sign the [Individual Contributor License Agreement (ICLA)](http://www.apache.org/licenses/#clas) and [submit it to the ASF](http://www.apache.org/licenses/#submitting).
    * You should receive an email confirming you submission within a day or so and your name will appear in the [list of contributors](https://people.apache.org/unlistedclas.html)
    * If you are submitting on behalf of a company, you may need to submit a CCLA as well
2. Join the [mailing list](http://cordova.apache.org/contact/) and send a brief introduction of yourself
3. Create an [Apache JIRA](https://issues.apache.org/jira/secure/Signup!default.jspa) account

## Working with JIRA

Issues for Apache Cordova are hosted in the Apache JIRA. All code contributions made to Cordova should have a corresponding JIRA issue. When reporting issues, please follow [these guidelines](./issues.html).

#### Claiming Issues
If you find a JIRA issue that you would like to work on, you can ask to claim it; please leave a comment indicating your intention and a committer will assign it to you. Some issues in JIRA are auto-assigned to certain contributors. If it is clear that an issue is not being worked on, feel free to work on it yourself (but please comment first to let the asignee know). If you are looking for a place to start, try searching the [issues labelled easyfix](https://issues.apache.org/jira/issues?jql=project%20%3D%20CB%20AND%20resolution%20%3D%20Unresolved%20AND%20labels%20%3D%20%22easyfix%22%20ORDER%20BY%20createdDate%20DESC).


## Submitting Code

For all submitted code, there must be a corresponding issue in JIRA. If there isn't an existing issue, please create one. You can submit code using one of the following methods:

* Submit a pull request at one of the Apache Github mirrors at `github.com/apache/<repo name>` (**Strongly Preferred**)
* Upload patches created with `git format-patch` to the JIRA issue
* Paste a diff to JIRA (you won't get authorship if you do this)

#### Making Pull requests

The workflow for creating pull requests on Github generally follows these steps:

1. [Open a JIRA issue](./issues.html) if one has not already been created
2. [Create a local fork](https://help.github.com/articles/fork-a-repo/) of the appropriate Apache repository
3. In your local fork, create a branch dedicated to the JIRA issue you are working on
4. Push your commits to this branch
5. [Squash](http://www.git-scm.com/book/en/v2/Git-Tools-Rewriting-History#Squashing-Commits) these commits into one single commit (see the section below regarding commit messages)
6. [Create a pull request](https://help.github.com/articles/using-pull-requests/) on the Apache repository
7. Ask for code review

Please include the JIRA id in the title of any pull requests made to Github. The Apache Git bot will link the PR and the JIRA issue automatically. For more help on Git, see the [Git documentation](http://git-scm.com/doc)

#### Code review

However you submit code, you should always call out a reviewer to look at and merge your code. A good place to find a reviewer is [the component list](https://issues.apache.org/jira/browse/CB/?selectedTab=com.atlassian.jira.jira-projects-plugin:components-panel) or you can send a mail out to the [dev mailing list](http://cordova.apache.org/contact) with a link to the pull request.

## Testing your code

You are responsible for testing your changes and correcting any problems before submitting a pull request. Testing includes both verifying the functionality added/touched, and running the test suites to verify there are no regressions.

When we say "run the test suites" this includes:
* All automated tests in cordova-mobilespec
* Manual tests in cordova-mobilespec that might be affected by the change
* `npm test` for JS linting
* Any platform-specific unit tests
    * `cordova-android/test`
    * `cordova-ios/CordovaLibTests`
    * `cordova-js: jake test`
    * `cordova-plugman: npm test`

Please add a comment in Jira about what testing you did with your change so a committer can understand what testing was done before they merge it in.

#### Adding tests

If possible, please include tests that validate your changes and catch any future regressions. Most repositories have a `tests/` directory that includes the tests for that component.

## Git Commit Messages

When contributing, please have your commit messages begin with the JIRA id and relevant platform (if appropriate) followed by a description of the commit. Here are two examples:
```
CB-2345 android: Improved exec bridge by using strings instead of JSON
CB-3456 all: Fixed plugin loading paths that start with /
```

You are highly encouraged to describe your git commit with enough detail for someone else to understand it. In doing so, your commit message can consist of multiple lines. However, it also is highly encouraged that the first line of your commit message not exceed 50 characters. This is because some of the tooling that sits on top of git (such as the httpd apps that let you browse the repos) assumes that the first line is top-level summary that is 50 characters or less. Thus there will be highlighting and truncating of the commit message using these assumptions and it will look weird if these assumptions are not kept. There should also be a blank line between the summary and any further description. For example, here is a good commit message:

```
CB-1234 Fixed the whizbang widget

- added more sanity checking in the build script.
- fixed the API to return the correct value in the scenario where there
  aren't any whizbangs present.
- corrected the documentation.
```

As an alternate to a bullet list, you could put long text here in paragraph form, with each line wrapped at 72 chars and blank lines between paragraphs.
