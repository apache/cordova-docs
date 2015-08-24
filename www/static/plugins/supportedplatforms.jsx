var React = require('react'),
    PlatformButton = require('./platformbutton.jsx')

var SupportedPlatforms = React.createClass({
    render: function() {
        var keywords = this.props.keywords;
        var sortedPlatforms = [
            {present:false, icon: "android"},
            {present:false, icon: "ios"},
            {present:false, icon: "windows"},
            {present:false, icon: "blackberry"},
            {present:false, icon: "ubuntu"},
            {present:false, icon: "firefox"},
            {present:false, icon: "webos"},
            {present:false, icon: "fireos"}
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

                // case 'cordova-wp8':
                //     break;
                // case 'cordova-browser':
                //     break;
            }
        });

        sortedPlatforms.forEach(function(platform) {
            if(platform.present) {
                platformsSupported.push(<li><div className={platform.icon}></div></li>)
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
