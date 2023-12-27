---
layout: post
author:
    name: Niklas Merz
    url: https://twitter.com/niklasmaerz
title:  "Cordova Survey 2023 Results"
categories: announcements
tags: news
---

Thank you very much for taking part in our user & contributor survey. We received 228 submissions let's dive straight into the data.

## Usage and alternatives

Obviously almost all respondents work with Cordova and the most used platforms are **Android (97.4%), iOS (89%)**, Browser (21.1%) and Electron (7%). Windows and macOS Catalyst got only a handful of responses in total.

The top 3 reasons for picking Cordova are **ease of use, cross-platform support and the prevalence and familiarity of web skills and technologies**. These reasons all were mentioned almost equally. Quite a few (~20) users mentioned that Cordova was chosen a while ago, or they migrated from Phonegap (~7). This means there are probably quite a few long-running Cordova projects out there. Other mentioned reasons are the support of native features, Ionic, fast development, maturity of the project and open source.

Cordova unofficial goal always has been to cease to exist once the Web catches up with supporting new APIs and features similar to native. Therefore, it's good news that a small number of users (6.1%) migrated their apps to **PWAs**. About 13% migrated to **Capacitor** and 3% to Flutter and React-Native each. About 2% of projects moved to Electron or fully native. Around 4% are thinking about or are in the process of migrating.
**The majority of respondents (76.8%) have not migrated apps to alternative solutions.**

The biggest reason to migrate is **not well maintained plugins** followed by **OS and app store compatibility issues** and **slow development of the framework itself**. This is something we as the Cordova community need to address. Some users also mentioned the fear of long term support. Others had build or Gradle issues or preferred more modern frameworks with Typescript support and a better developer experience. WebView and performance issues also got mentioned a handful of times.

## Contributing

The majority of respondents (61.4%) did not contribute to Apache maintained plugins, platforms or tooling yet. 21.1% already contributed and 17.5% would love to start contributing.

The answers to the question "What's holding you back from contributing?" are probably pretty typical for open source projects. The biggest factors are time (53%) and work-life-balance (37%). The second most mentioned reasons **I need help getting started** (21%) and **Imposter Syndrome** (10%) we should address with better documentation and support for first contributors. 

For those who are interested in wanted to contribute to Apache Cordova, the best way is to submit PR. It could be to fix a known issue that you might have or others has reported, or submitting new features.
In terms of Work-Life balance, Apache Cordova is based on volunteering. There is no requirement in dedicating time every day. Usually some might work on Cordova for a few minutes when they can spare.

Some users develop for the Web only and don't want to get into the native part which is totally fair because that's the point of using Cordova. Developing plugins and getting into Cordova internals is not that hard scary as it might look at first, and we really need your support for the project.

We also included a question about **release voting** because think that most users don't know how the release process at Apache works. For every release we need at least 3 members of the PMC to check and cast a positive vote on the release. Persons who are not part of the PMC can vote as well and help to test the release. The voting and decision process for releases happens on the mailing list. Sometimes it can take a while to finally publish a release because 3 PMC members need to find time to check it. If we can onboard new members releases might happen a little faster again.
