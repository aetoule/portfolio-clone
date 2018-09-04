import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import './Header/header.css';
import darkdesk from '../src/media/darkdesk.jpg';

// media queries
// 578px, 768px, 
// at 992px the menu lays by the side, 1200

class App extends Component {

  // constructor() {
  //   super();
  //   this.state = {
  //     toggle: false
  //   }
  // }
  render() {
    return (
      <div>
       
        <Header />
        <div className="main">
          <img className="desk" src={darkdesk} alt="dark desk image"></img>
          
          <div className= "main-content-box">
            <div className="welcome">
              <h2>Welcome To Our Studio!</h2>
            </div>
            <div className="nice-to-meet-you">
              <h1>IT'S NICE TO MEET YOU</h1>
            </div>
            <div className="tell-me-more">
              <button className="tell-me-more-button"><b>TELL ME MORE</b></button>
            </div>
          </div>
        </div>

        
        
      </div>
    );
  }
}

export default App;
