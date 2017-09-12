var Preact = require('preact');
var h = require('preact').h;
var createClass = require('preact-compat').createClass;
var SortButton = require('./sortbutton.jsx');
var SortCriteria = require('./SortCriteria');

var SortDropdown = createClass({
    render: function() {
        var downloadsButton;

        if(this.props.downloadsEnabled) {
            downloadsButton = <SortButton setSort={this.props.setSort} criteria={SortCriteria.Downloads}/>;
        }
        return (
            <div className="dropdown plugins-sort-dropdown">
                <button className="btn btn-primary btn-block dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <strong>Sort: </strong>{this.props.selected}
                    <span className="caret"></span>
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                    <SortButton setSort={this.props.setSort} criteria={SortCriteria.Quality}/>
                    <SortButton setSort={this.props.setSort} criteria={SortCriteria.RecentlyUpdated}/>
                    {downloadsButton}
                </ul>
            </div>
        );
    }
});

module.exports = SortDropdown;
