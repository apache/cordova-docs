var Preact = require('preact'),
    h = require('preact').h,
    createClass = require('preact-compat').createClass,
    PlatformButton = require('./platformbutton.jsx');

var SupportedPlatforms = createClass({
    render: function() {
        var keywords = this.props.keywords;
        var sortedPlatforms = {
            'cordova-android': {present:false, icon: "android", alt:"Android"},
            'cordova-ios':{present:false, icon: "ios", alt:"iOS"},
            'cordova-windows':{present:false, icon: "windows", alt:"Windows"},
            'cordova-osx':{present:false, icon: "osx", alt:"OS X"},
            'cordova-browser':{present:false, icon: "browser", alt:"Browser"}
        };

        var platformsSupported = [];

        keywords.forEach(function(keyword) {
            if(sortedPlatforms[keyword]) {
                sortedPlatforms[keyword].present = true;
            }
        });

        Object.values(sortedPlatforms).forEach(function(platform) {
            if(platform.present) {
                // Becuase these images are taken from a sprite sheet, we have
                // to use title rather than alt-text
                platformsSupported.push(
                    <li key={this.props.plugin + "-" + platform.alt}>
                        <div className={platform.icon} title={platform.alt}></div>
                    </li>
                );
            }
        }.bind(this));

        return (
            <ul className="results-supported-platforms">
                {platformsSupported}
            </ul>
        );
    }
});

module.exports = SupportedPlatforms;
