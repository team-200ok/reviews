import React from 'react';
import ReactDOM from 'react-dom';

class MyComponent extends React.Component {
  render() {
    return <div>Hello from React</div>;
  }
}

ReactDOM.render(<MyComponent />, document.getElementById('app'));