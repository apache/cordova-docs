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

## Usage and alternatives

Obviously almost all respondents work with Cordova and the most used platforms are **Android (97.4%), iOS (89%)**, Browser (21.1%) and Electron (7%). Windows and macOS Catalyst got only a handful of responses in total.

The top 3 reasons for picking Cordova are **ease of use, cross-platform support and the prevalence and familiarity of web skills and technologies**. These reasons all were mentioned almost equally. Quite a few (~20) users mentioned that Cordova was chosen a while ago, or they migrated from Phonegap (~7). This means there are probably quite a few long-running Cordova projects out there. Other mentioned reasons are the support of native features, Ionic, fast development, maturity of the project and open source.

Cordova's unofficial goal has always been to cease to exist once the Web catches up with supporting new APIs and features similar to native. Therefore, it's good news that a small number of users (6.1%) migrated their apps to **PWAs**. About 13% migrated to **Capacitor** and 3% to Flutter and React-Native each. About 2% of projects moved to Electron or fully native. Around 4% are thinking about or are in the process of migrating.

**Only 23.2% of respondents have migrated apps to alternative solutions.**

The biggest reason to migrate is **not well maintained plugins** followed by **OS and app store compatibility issues** and **slow development of the framework itself**. This is something we as the Cordova community need to address. Some users also mentioned the fear of long term support. Others had build or Gradle issues or preferred more modern frameworks with Typescript support and a better developer experience. WebView and performance issues also got mentioned a handful of times.

## Contributing

Only a minority of respondents (21.1%) have contributed to Apache maintained plugins, platforms, or tooling and 17.5% would love to start contributing.

The answers to the question "What's holding you back from contributing?" are probably pretty typical for open source projects. The biggest factors are time (53%) and work-life-balance (37%). The second most mentioned reasons **I need help getting started** (21%) and **Imposter Syndrome** (10%) we should address with better documentation and support for first contributors.

For those who are interested in contributing to Apache Cordova, the best way is to submit PR. It could be to fix a known issue that you might have or others have reported, or submitting new features.

In terms of Work-Life balance, Apache Cordova is based on volunteering. There is no requirement in dedicating time every day. Usually some might work on Cordova for a few minutes when they can spare.

Some users develop for the Web only and don't want to get into the native part which is totally fair because that's the point of using Cordova. Developing plugins and getting into Cordova internals is not as hard and scary as it might look at first, and we really need your support for the project.

We also included a question about **release voting** because we think that most users don't know how the release process at Apache works. For every release we need at least 3 members of the PMC to check and cast a positive vote on the release. Persons who are not part of the PMC can vote as well and help to test the release. The voting and decision process for releases happens on the mailing list. Sometimes it can take a while to finally publish a release because 3 PMC members need to find time to check it. If we can onboard new members, releases might happen a little faster again.

## Areas of improvement

One of the main reasons to run this survey was to identify the pain points for many Cordova developers. If we can identify the areas that need improvements we can gather ideas for quick fixes and long term goals.

The most mentioned issues is the **lack of maintenance for third party plugins**. More on that in the next paragraph. The second-biggest pain point is keeping up with App/Play store requirements and OS API changes combined with **slow releases and breaking updates**.

Many users also mentioned issues with **native projects**. They tend to break with updates or require manual changes that cause headaches with Cordovas hooks and ephemeral native projects.

Quite a lot of pain points also evolve around **documentation**. We should provide better documentation for config.xml and how to develop plugins. Some users also would like (video) tutorials. Sometimes new features or changes are hidden somewhere in PRs, issues and comments. We should do a better job updating the documentation.

Some users also fear the longevity of the project and think that new APIs and changes take too long to be supported. The project is quite old, and some code is considered legacy code today and some users would like to see support for new languages like Typescript, Swift, Kotlin.


## Plugins

Most respondents didn't share any feedback for plugins and quite a few mentioned they were pleased with Cordovas plugin ecosystem.

Because of its maturity and age there are many Cordova plugins for almost any use case, but the lack of maintenance is concerning for a lot of users. Quite a few plugin authors moved on and longer maintain their plugin and users have a hard time finding working forks and fixes. Some respondents suggested that a list of curated plugins could help with that.

Some users also find developing and testing plugins very hard.

# Conclusions


<!-- 

Images
Quotes
Success Stories

-->

