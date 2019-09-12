import React from 'react';
import './App.css';
import TestComponent from './components/test-component/TestComponent.js';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {

    return (
      <div>
        <TestComponent />
      </div>
    );
  }
}

export default App;
