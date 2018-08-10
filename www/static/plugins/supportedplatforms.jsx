/**
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
*/

const Preact = require('preact'); // eslint-disable-line
const h = require('preact').h; // eslint-disable-line
const createClass = require('preact-compat').createClass;
const PlatformButton = require('./platformbutton.jsx'); // eslint-disable-line

const SupportedPlatforms = createClass({
    render: function () {
        const sortedPlatforms = [
            {keyword: 'cordova-android', icon: 'android', alt: 'Android'},
            {keyword: 'cordova-ios', icon: 'ios', alt: 'iOS'},
            {keyword: 'cordova-windows', icon: 'windows', alt: 'Windows'},
            {keyword: 'cordova-osx', icon: 'osx', alt: 'macOS'},
            {keyword: 'cordova-browser', icon: 'browser', alt: 'Browser'}
        ];

        const platformsSupported = sortedPlatforms
            .filter(function (platform) {
                return this.props.keywords.indexOf(platform.keyword) > -1;
            }.bind(this))
            .map(function (platform) {
                // Because these images are taken from a sprite sheet, we have
                // to use title rather than alt-text
                return (
                    <li key={this.props.plugin + '-' + platform.alt}>
                        <div className={platform.icon} title={platform.alt}></div>
                    </li>
                );
            }.bind(this));

        return (
            <ul className="results-supported-platforms">{platformsSupported}</ul>
        );
    }
});

module.exports = SupportedPlatforms;
