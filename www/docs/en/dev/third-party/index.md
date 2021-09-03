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

title: Third-party Tools
description: Additional tools that help developing Cordova apps created by the community
---

# Third-party Tools

<div class="third_party_content_container">
    <div class="row">
        <div class="col-md-12">
            <p>
                Listed here are externally developed compatible libraries, tooling, frameworks, and cloud services for Cordova. This list and the associated packages are maintained by the community and not guaranteed to be up to date. If you'd like to update this list make PR!
            </p>
        </div>
    </div>
    <div class="row card_gallery">
        {% for tool in site.data.tools %}
        <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 card">
            <div class="tool card_inner">
                <div class="img_container">
                    <img src="{{ site.baseurl }}/static/img/tools/{{ tool.image }}" class="center-block"/>
                </div>
                <p class="card_title">
                    {% if tool.url %}
                        <a href="{{ tool.url }}">
                            {{ tool.name }}
                        </a>
                    {% else %}
                        {{ tool.name }}
                    {% endif %}
                </p>
                <p class="text">
                    {{ tool.description | strip_html | truncate:255 }}
                </p>
            </div>
        </div>
        {% endfor %}
    </div>
</div>

