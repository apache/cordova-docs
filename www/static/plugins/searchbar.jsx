var Preact = require('preact');
var h = require('preact').h;
var findDOMNode = require('preact-compat').findDOMNode;
var createClass = require('preact-compat').createClass;
var Bacon = require('baconjs').Bacon;

var SearchBar = createClass({

    // polyfill of sorts for string refs
    linkRef: function(component, name) {
        var cache = component._linkedRefs || (component._linkedRefs = {});
        if (!component.refs) component.refs = {};
        return cache[name] || (cache[name] = function(c) {
            return component.refs[name] = c;
        });
    },

    getInitialState: function() {
        return { textValue: this.props.initialValue }
    },

    handleChange: function(event) {
        this.setState({ textValue: event.target.value });
    },

    componentDidMount: function() {
        var self = this,
            delay = 200, // in ms
            inputElem = findDOMNode(this.refs.filterTextInput);

        // Convert input events to stream
        var text = Bacon.fromEvent(inputElem, 'input')
            .debounce(delay)
            .map(function(event) {
                return event.target.value;
            })
            .skipDuplicates();

        var textObservable = text.flatMapLatest(function(query) {
            return Bacon.once(query);
        });

        textObservable.onValue(function(val) {
            self.props.onUserInput(val);
        });

        inputElem.focus();
    },

    render: function() {
        return (

            <div className="input-group">
                <input
                    className="form-control"
                    type="text"
                    autoComplete="off"
                    placeholder={this.props.placeHolderText}
                    value={this.state.textValue}
                    onInput={this.handleChange}
                    ref={this.linkRef(this, "filterTextInput")}
                />
            </div>
        );
    }
});

module.exports = SearchBar;
