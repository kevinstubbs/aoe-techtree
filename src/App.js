import React, { Component } from 'react';
import './App.css';
import TechTreeScreen from './containers/TechTreeScreen';

class App extends React.Component {
  render () {
    return (
      <div style={{textAlign: 'center'}}>
        <TechTreeScreen />
      </div>
    );
  }
}

export default App;
