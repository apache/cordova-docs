---
layout: contribute
title: Apache Cordova Contribute Guidelines
---

# Contributor Guidelines

Thanks for helping to improve Cordova! This page provides a general guide on making contributions to Cordova. If you can't find something on this page, please feel free to contact the [dev mailing list](http://cordova.apache.org/contact) or ask questions on the [Cordova Slack](http://slack.cordova.io/).

## Prerequisites

Before contributing to Apache Cordova, it is recommended that you join the [mailing list](http://cordova.apache.org/contact/) and send a brief introduction of yourself.

## Working with Issues
Issues for all Apache Cordova components are on [GitHub](https://github.com/apache/cordova). When reporting issues, please follow [these guidelines](./issues.html).

#### Claiming Issues

If you find an issue that you would like to work on, you can ask to claim it; please leave a comment indicating your intention and a committer will assign it to you. If it is clear that an issue is not being worked on, feel free to work on it yourself (but please comment first to let the assignee know).

## Submitting Code

You can submit code by submitting a pull request at one of the Apache Github mirrors at `github.com/apache/<repo name>`.

#### Making Pull requests

The workflow for creating pull requests on Github generally follows these steps:

1. [Open an issue](./issues.html) if one has not already been created (optional)
2. [Create a local fork](https://help.github.com/articles/fork-a-repo/) of the appropriate Cordova repository
3. In your local fork, create a branch dedicated to the issue you are working on
4. Push your commits to this branch
5. [Squash](http://www.git-scm.com/book/en/v2/Git-Tools-Rewriting-History#Squashing-Commits) these commits into one single commit (see the section below regarding commit messages)
6. [Create a pull request](https://help.github.com/articles/using-pull-requests/) on the Cordova repository
7. Ask for code review

Please include the issue ID in the title of any pull requests made to Github. For more help on Git, see the [Git documentation](http://git-scm.com/doc).

#### Code review

However you submit code, you should always call out a reviewer to look at and merge your code. GitHub helpfully suggests possible reviewers whom you can add, or you can send a mail out to the [dev mailing list](http://cordova.apache.org/contact) with a link to the pull request.

## Testing your code

You are responsible for testing your changes and correcting any problems before submitting a pull request. Testing includes both verifying the functionality added/touched, and running the test suites to verify there are no regressions.

When we say "run the test suites" this includes:
* All automated tests in cordova-mobilespec
* Manual tests in cordova-mobilespec that might be affected by the change
* `npm test` for JS linting
* Any platform-specific unit tests
    * `cordova-android: npm run test-build`
    * `cordova-ios:  npm test`
    * `cordova-js: jake test`
    * `cordova-plugman: npm test`

Please add a comment in the issue about what testing you did with your change so a committer can understand what testing was done before they merge it in.

#### Adding tests

If possible, please include tests that validate your changes and catch any future regressions. Most repositories have a `tests/` directory that includes the tests for that component.

## Git Commit Messages

When contributing, please start your commit messages with the the issue ID (if there is one) and relevant platform (if appropriate) followed by a description of the commit. Issue IDs on GitHub should be prefixed with `GH-`, which will allow GitHub to automatically link issues and PRs.

```
GH-2345 android: Improved exec bridge by using strings instead of JSON
GH-3456 all: Fixed plugin loading paths that start with /
```

You are highly encouraged to describe your git commit with enough detail for someone else to understand it. In doing so, your commit message can consist of multiple lines. However, it also is highly encouraged that the first line of your commit message not exceed 50 characters. This is because some of the tooling that sits on top of git (such as the httpd apps that let you browse the repos) assumes that the first line is top-level summary that is 50 characters or less. Thus there will be highlighting and truncating of the commit message using these assumptions and it will look weird if these assumptions are not kept. There should also be a blank line between the summary and any further description. For example, here is a good commit message:

```
GH-1234 Fixed the whizbang widget

- added more sanity checking in the build script.
- fixed the API to return the correct value in the scenario where there
  aren't any whizbangs present.
- corrected the documentation.
```

As an alternate to a bullet list, you could put long text here in paragraph form, with each line wrapped at 72 chars and blank lines between paragraphs.
