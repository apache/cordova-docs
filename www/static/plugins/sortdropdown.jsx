var React = require('react');
var SortButton = require('./sortbutton.jsx');

var SortDropdown = React.createClass({
    render: function() {
        var downloadsButton;

        if(this.props.downloadsEnabled) {
            downloadsButton = <SortButton criteria="Downloads"/>;
        }
        return (
            <div className="dropdown plugins-sort-dropdown">
                <button className="btn btn-primary btn-block dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <strong>Sort: </strong>{this.props.selected}
                    <span className="caret"></span>
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                    <SortButton criteria="Quality"/>
                    <SortButton criteria="Recently Updated"/>
                    {downloadsButton}
                </ul>
            </div>
        );
    }
});

module.exports = SortDropdown;
