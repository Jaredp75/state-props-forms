import React, { Component } from 'react';
import '../styles/index.css';
//import './src/styles/App.css';
import NavBar from '../components/NavBar.js';
import PlayList from '../components/PlayList.js';
import PlayListForm from '../components/PlayListForm.js';

class App extends Component {
  render() {
    return (
      <div className="App">

          <NavBar/>
          <PlayList/>
          <PlayListForm/>

      </div>
    );
  }
}

export default App;
