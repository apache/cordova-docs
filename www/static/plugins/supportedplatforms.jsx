var React = require('react'),
    PlatformButton = require('./platformbutton.jsx')

var SupportedPlatforms = React.createClass({
    render: function() {
        var keywords = this.props.keywords;
        var sortedPlatforms = [
            {present:false, icon: "android", alt:"Android"},
            {present:false, icon: "ios", alt:"iOS"},
            {present:false, icon: "windows", alt:"Windows"},
            {present:false, icon: "blackberry", alt:"Blackberry"},
            {present:false, icon: "ubuntu", alt:"Ubuntu"},
            {present:false, icon: "firefox", alt:"FirefoxOS"},
            {present:false, icon: "webos", alt:"webOS"},
            {present:false, icon: "fireos", alt:"FireOS"},
            {present:false, icon: "osx", alt:"OS X"},
            {present:false, icon: "browser", alt:"Browser"}
        ];

        var platformsSupported = [];

        // remove windows8 & windows dupe
        if (keywords.indexOf('cordova-windows') > -1 && keywords.indexOf('cordova-windows8') > -1) {
            keywords.splice(keywords.indexOf('cordova-windows8'), 1);
        }
        keywords.forEach(function(keyword) {
            switch (keyword) {
                case 'cordova-android':
                    sortedPlatforms[0].present = true;
                    break;
                case 'cordova-ios':
                    sortedPlatforms[1].present = true;
                    break;
                case 'cordova-windows8':
                case 'cordova-windows':
                    sortedPlatforms[2].present = true;
                    break;
                case 'cordova-blackberry10':
                    sortedPlatforms[3].present = true;
                    break;
                case 'cordova-ubuntu':
                    sortedPlatforms[4].present = true;
                    break;
                case 'cordova-firefoxos':
                    sortedPlatforms[5].present = true;
                    break;
                case 'cordova-webos':
                    sortedPlatforms[6].present = true;
                    break;
                case 'cordova-amazon-fireos':
                    sortedPlatforms[7].present = true;
                    break;
                case 'cordova-osx':
                    sortedPlatforms[8].present = true;
                    break;
                case 'cordova-browser':
                    sortedPlatforms[9].present = true;
                    break;
            }
        });

        var that = this;

        sortedPlatforms.forEach(function(platform) {
            if(platform.present) {
                // Becuase these images are taken from a sprite sheet, we have
                // to use title rather than alt-text
                platformsSupported.push(
                    <li key={that.props.plugin + "-" + platform.alt}>
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
