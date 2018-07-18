var Preact = require('preact'),
    h = require('preact').h,
    createClass = require('preact-compat').createClass,
    PlatformButton = require('./platformbutton.jsx');

const SupportedPlatforms = createClass({
    render: function () {
        const keywords = new Set(this.props.keywords);
        const sortedPlatforms = [
            {icon: 'android', alt: 'Android'},
            {icon: 'ios', alt: 'iOS'},
            {icon: 'windows', alt: 'Windows'},
            {icon: 'osx', alt: 'macOS'},
            {icon: 'browser', alt: 'Browser'}
        ];

        const platformsSupported = sortedPlatforms
            .filter(platform => keywords.has(platform))
            .map(platform => (
                // Because these images are taken from a sprite sheet, we have
                // to use title rather than alt-text
                <li key={this.props.plugin + '-' + platform.alt}>
                    <div className={platform.icon} title={platform.alt}></div>
                </li>
            ));

        return (
            <ul className="results-supported-platforms">
                {platformsSupported}
            </ul>
        );
    }
});

module.exports = SupportedPlatforms;
