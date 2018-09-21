import './First.css';
import React, { Component } from 'react';

export default class First extends Component {
  render() {
    return (
	    <div className="app">
	      <div className="Half">
	        <h1>Lorem ipsum dolor adipiscing amet dolor consequat</h1>
	        <p>Adipiscing a commodo ante nunc accumsan et interdum mi ante adipiscing. A nunc lobortis non nisl amet vis sed volutpat aclacus nascetur ac non. Lorem curae et ante amet sapien sed tempus adipiscing id accumsan.</p>
	      </div>
	      <div className="Half">
	      	<img src="/pic01.jpg" className="" alt="first image" />

	      </div>
      </div>
    );
  }
}