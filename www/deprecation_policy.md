---
layout: contribute
title: Apache Cordova Deprecation Policy
---

# Deprecation and Archiving Policy

Apache Cordova has been around quite some time, having been started back in August 2008. As it consists of many individual "parts", some of those stopped being useful for any number of reasons. This "Deprecation and Archiving Policy" describes why, when and how projects can be deprecated and archived - and what that actually means.

## Deprecation Policy

When a piece of Apache Cordova stops being useful or necessary we vote on deprecating it on our [dev mailing list](/contact/).

### Reasons for Deprecation

Some common reasons for deprecation of a piece of Apache Cordova are:

- General availability of a web standard that achieves the same thing
- A better replacement is available somewhere else
- Usage of a platform declined to a non relevant level
- A platform was deprecated itself by its producer

### Meaning of Deprecation

When we deprecate something it means no more work will be done on it. We make the deprecation clearly visible in the project's `README.md` (via a "Deprecation Notice" which might also include a reason and links to alternatives if available) and repository description.

**Users can still use the software** as before, we just put them on notice that the software might break in the future - e.g. with new operating system releases or bugs might be found - and we won't fix this any more.

**Users can also still fork the repository** and create their own bug fixes and even new features. The forks will be discoverable with the GitHub "Network" and "Forks" features. There you can see all forks available and easily spot extra commits people have done in an easy and visual way.

**Apache Cordova _might_ still accept bug fixes via Pull Request** on the original repository and create a patch release.

## Archiving Policy

A deprecated repository might also be archived if we won't provide support of any kind (Issues, Pull Requests, any releases) for this piece of software any more. Again the decision is made on our [dev mailing list](/contact/).

A repository can be deprecated and archived at the same time.

### Meaning of Archiving

Additionally to the points listed in [Meaning of Deprecation](#meaning-of-deprecation), an archived repository is "read only". This is achieved by using GitHub's [archive repositories](https://help.github.com/articles/about-archiving-repositories/) feature:

> When a repository is archived, its issues, pull requests, code, labels, milestones, projects, wiki, releases, commits, tags, branches, reactions, and comments become read-only. To make changes in an archived repository, you must unarchive the repository first.
