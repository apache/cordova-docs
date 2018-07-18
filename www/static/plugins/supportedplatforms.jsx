var Preact = require('preact'),
    h = require('preact').h,
    createClass = require('preact-compat').createClass,
    PlatformButton = require('./platformbutton.jsx');

let SupportedPlatforms = createClass({
    render: function () {
        let keywords = this.props.keywords;
        let sortedPlatforms = [
            {present: false, icon: 'android', alt: 'Android'},
            {present: false, icon: 'ios', alt: 'iOS'},
            {present: false, icon: 'windows', alt: 'Windows'},
            {present: false, icon: 'osx', alt: 'macOS'},
            {present: false, icon: 'browser', alt: 'Browser'}
        ];

        let platformsSupported = [];

        keywords.forEach((keyword) => {
            let target = sortedPlatforms.findIndex(platform => keyword.includes(platform.icon));
            if (target > -1) sortedPlatforms[target].present = true;
        });

        sortedPlatforms.forEach((platform) => {
            if (platform.present) {
                // Becuase these images are taken from a sprite sheet, we have
                // to use title rather than alt-text
                platformsSupported.push(
                    <li key={this.props.plugin + '-' + platform.alt}>
                        <div className={platform.icon} title={platform.alt}></div>
                    </li>
                );
            }
        });

        return (
            <ul className="results-supported-platforms">
                {platformsSupported}
            </ul>
        );
    }
});

module.exports = SupportedPlatforms;
