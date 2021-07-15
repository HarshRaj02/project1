import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import HttpService from './http-service'


const http = new HttpService();

class App extends  Component {

  constructor(props){
    super(props);
    http.getCars().then((response)=>{

      
      console.log(response);
    });
  }
  
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Welcome to Nature!
        </a>
      </header>
    </div>
  );
}}

export default App;
