// Code here!
import React from 'react';
import ReactDOM from 'react-dom';


export default class NameTag extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        I am a name Tag. My Name is NameTag
      </div>
    );
  }
}

NameTag.propTypes = {};


//rendering of react component
ReactDOM.render(
  <NameTag />,
  document.getElementById('root')
);
