import React, { Component } from 'react';

//import './src/styles/App.css';
import NavBar from '../components/NavBar.js';
import PlayList from '../components/PlayList.js';
import PlayListForm from '../components/PlayListForm.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">

          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
