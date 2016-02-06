---
license: >
    Licensed to the Apache Software Foundation (ASF) under one
    or more contributor license agreements.  See the NOTICE file
    distributed with this work for additional information
    regarding copyright ownership.  The ASF licenses this file
    to you under the Apache License, Version 2.0 (the
    "License"); you may not use this file except in compliance
    with the License.  You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing,
    software distributed under the License is distributed on an
    "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, either express or implied.  See the License for the
    specific language governing permissions and limitations
    under the License.

title: Plugin APIs
---

# Plugin APIs

Cordova ships with a minimal set of APIs, and projects add what extra APIs they require through plugins.

You can search through all existing plugins (including third-party plugins) on [npm](https://www.npmjs.com/search?q=ecosystem%3Acordova).

The traditional set of core Cordova plugins are as follows:

{% for fileSpec in site.data.fetched-files %}
{% if fileSpec.src.repoName contains "cordova-plugin" %}
    {% assign repoSplit = fileSpec.src.repoName | split:'/' %}
    {% capture packageName %}{% if fileSpec.src.packageName %}{{ fileSpec.src.packageName }}{% else %}{{ repoSplit[1] }}{% endif %}{% endcapture %}
- [{{ fileSpec.src.displayName }}](../../gen/{{ packageName }}/)
> {{ fileSpec.src.description }}
{% endif %}
{% endfor %}

Non-English translations of these plugin docs can be found by going to the plugin github repos and looking in the docs folder
