---
layout: post
author:
    name: Niklas Merz
    url: https://twitter.com/niklasmaerz
title:  "Cordova Survey 2023 Results"
categories: announcements
tags: news
---
Thank you very much for taking part in our user & contributor survey. We received 228 submissions. Let's dive straight into the data.

## Usage

Obviously almost all respondents work with Cordova and the most used platforms are **Android (97.4%), iOS (89%)**, Browser (21.1%) and Electron (7%). Windows and macOS Catalyst got only a handful of responses in total.

![Chart platforms]({{ site.baseurl }}/static/img/blog/2024/survey/image7.png)

> Build apps with access to native features not yet present in the web platform

The top 3 reasons for picking Cordova are **ease of use, cross-platform support and the prevalence and familiarity of web skills and technologies**. These reasons all were mentioned almost equally. Quite a few (~20) users mentioned that Cordova was chosen a while ago, or they migrated from Phonegap (~7). There are probably quite a few long-running Cordova projects out there. Other mentioned reasons are the support of native features, Ionic, fast development, maturity of the project and open source.

> It is easy to write, inspect and debug like a webpage

## Alternatives

Cordova's unofficial goal has always been to cease to exist once the Web catches up with supporting new APIs and features similar to native. Therefore, it's good news that a small number of users (6.1%) migrated their apps to **PWAs**. About 13% migrated to **Capacitor** and 3% to Flutter and React-Native each. About 2% of projects moved to Electron or fully native. Around 4% are thinking about or are in the process of migrating.

![Chart migrating]({{ site.baseurl }}/static/img/blog/2024/survey/image2.png)

**Only 23.2% of respondents have migrated apps to alternative solutions.**

The biggest reason to migrate is **not well maintained plugins** followed by **operating system and app store compatibility issues** and **slow development of the framework itself**. This is something we as the Cordova community needs to address. Some users also mentioned the fear of long term support. Others had build or Gradle issues or preferred more modern frameworks with Typescript support and a better developer experience. WebView and performance issues also got mentioned a handful of times.

## Contributing

Only a minority of respondents (21.1%) have contributed to Apache maintained plugins, platforms, or tooling and 17.5% would love to start contributing.

The answers to the question "What's holding you back from contributing?" are probably pretty typical for open source projects. The biggest factors are time (53%) and work-life-balance (37%). The second most mentioned reasons **I need help getting started** (21%) and **Imposter Syndrome** (10%) we should address with better documentation and support for first contributors.

![Chart contributing]({{ site.baseurl }}/static/img/blog/2024/survey/image1.png)

For those who are interested in contributing to Apache Cordova, the best way is to submit PR. It could be to fix a known issue that you might have or others have reported, or submitting new features. In terms of Work-Life balance, Apache Cordova is based on volunteering. There is no requirement in dedicating time every day. Usually some might work on Cordova for a few minutes when they can spare.

Some users develop for the Web only and don't want to get into the native part which is totally fair because that's the point of using Cordova. Developing plugins and getting into Cordova internals is not as hard and scary as it might look at first, and we really need your support for the project.

We also included a question about **release voting** because we think that most users don't know how the release process at Apache works. For every release we need at least 3 members of the PMC to check and cast a positive vote on the release. Persons who are not part of the PMC can vote as well and help test the release. The voting and decision process for releases happens on the mailing list. Sometimes it can take a while to finally publish a release because 3 PMC members need to find time to check it. If we can onboard new members, releases might happen a little faster again.

![Chart voting]({{ site.baseurl }}/static/img/blog/2024/survey/image4.png)

## Areas of improvement

One of the main reasons to run this survey was to identify the pain points for many Cordova developers. If we can identify the areas that need improvements we can gather ideas for quick fixes and long term goals.

The most mentioned issues is the **lack of maintenance for third party plugins**. More on that in the next paragraph. The second-biggest pain point is keeping up with App/Play store requirements and OS API changes combined with **slow releases and breaking updates**.

Many users also mentioned issues with **native projects**. They tend to break with updates or require manual changes that cause headaches with Cordovas hooks and ephemeral native projects.

Quite a lot of pain points also involve around **documentation**. We should work on better documentation for config.xml and how to develop plugins. Some users also would like (video) tutorials. Sometimes information about new features or changes are hidden somewhere in PRs, issues and comments. We should do a better job updating the documentation.

Some users also fear the longevity of the project and think that new APIs and changes take too long to be supported. The project is quite old, and some code is considered legacy code today and some users would like to see support for new languages like Typescript, Swift, Kotlin.

## Plugins

> I’m so grateful for the plugins! I understand how hard they can be to maintain.

Most respondents didn't share any feedback for plugins and quite a few mentioned they were pleased with Cordova's plugin ecosystem.

Because of its maturity and age there are many Cordova plugins for almost any use case, but the lack of maintenance is concerning for a lot of users. Quite a few plugin authors moved on and longer maintain their plugin and users have a hard time finding working forks and fixes. Some respondents suggested that a list of curated plugins could help with that.

Some users also find developing and testing plugins very hard.

### Some user voices

> Building cordova plugins is not ideal because the plugins are authored outside of any native project which makes it hard to develop and test. Not having the native project available means the plugin cannot be built independently of a cordova project, cannot be tested independently of a cordova project, and cannot make use of the standard IDE with intellisense without a cordova project.

> There are many Cordova plugins that are currently not maintained, which makes adding a new plugin to a project really painful, as you always have to check if the plugin is still functional and if there are alternative plugins.

> Overall, very good, considering they're mostly by volunteers. But my impression has been that some plugins that have no alternative aren't always well-maintained (no specific examples, sorry).

> Sometimes poorly maintained, slow to implement fixes, outdated, etc. But yet still critical for any real Cordova project

> I always end up forking them due to them no being updated with each Cordova release

> Cordova makes it simple to build plugins.

## Closing words

This survey got over 200 responses and considering only a fraction of people who actually see the survey will respond, there are probably quite a lot of happy Cordova users and new and long-running app projects out there. We got some good feedback of the most requested improvements and biggest pain points.

As you might know, most of the maintainers are volunteers and work on Cordova in their free time. Therefore, we need your help ensuring that Cordova remains a robust and reliable platform for building mobile apps. Your involvement, whether it's providing feedback, fixing bugs, or developing plugins, is essential to ensuring Cordova's continued relevance and adoption. The Cordova PMC will do its best to make contributing as easy as possible and provide developer guidance, code reviews, documentation, and frequent releases. A large portion of bug fixes, plugins and features have been provided by dedicated individuals for many years now and will be in the future. You can contribute to Cordova's future success with your fixes, solutions, plugins and collaboration on releases.

Thank you for being a part of the Cordova community. Together, we can shape the future of mobile development.