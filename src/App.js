import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import Report from './components/Report';


var config = {
    apiKey: "AIzaSyC29vl9980wtoqQGb_ajoUo0glI5HTQoW4",
    authDomain: "rose-home-9f5b9.firebaseapp.com",
    databaseURL: "https://rose-home-9f5b9.firebaseio.com",
    projectId: "rose-home-9f5b9",
    storageBucket: "rose-home-9f5b9.appspot.com",
    messagingSenderId: "1065400178445"
  };
  firebase.initializeApp(config);

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <h1 className="App-Header">Rose Home
          </h1>
          <Report firebase={firebase} />
        </div>
      </div>




    );
  }
}

export default App;
