import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// ajout compenent dans app.js
import First from './compenent/First';
import Second from './compenent/Second';
import Third from './compenent/Third';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hi, I'm Photon, another fine little freebie from HTML5 UP.</h1>

          <p>Accumsan feugiat mi commodo erat lorem ipsum, sed magna lobortis feugiat sapien sed etiam volutpat accumsan.</p>
        </header>
        {/* placer compenent dans app.js */}
        <First />
        <Second />
        <Third />
      </div>
    );
  }
}

export default App;
