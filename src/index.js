// Code here!
var React = require('react');
var ReactDOM = require('react-dom');

//declaration
var NameTag = React.createClass({
  render: function() {
    return <h1> Hello, my name is {this.props.person.title}, {this.props.person.name}! </h1>;
  }
});

var personData = {
  name: 'Cody Beeze',
  title: 'Big C'
};

//rendering of react component
ReactDOM.render(
  <NameTag person={personData} />,
  document.getElementById('root')
)
