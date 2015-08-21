var React = require('react');
var SortButton = require('./sortbutton.jsx');

var SortDropdown = React.createClass({
    render: function() {
        return (
            <div className="dropdown">
                <button className="btn btn-default dropdown-toggle" type="button" id="sortdropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    Sort
                    <span className="caret"></span>
                </button>
                <ul className="dropdown-menu" aria-labelledby="sortdropdown">
                    <SortButton criteria="Quality"/>
                    <SortButton criteria="Recently Updated"/>
                    <SortButton criteria="Downloads"/>
                </ul>
            </div>
        );
    }
});

module.exports = SortDropdown;
