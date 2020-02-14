import React from 'react';
import logo from './logo.svg';
import './App.css';
import { RedocStandalone } from 'redoc';

function App() {
  return (
    <div className="App">
    <RedocStandalone
  specUrl="http://rebilly.github.io/RebillyAPI/openapi.json"
  onLoaded={error => {
    if (!error) {
      console.log('Yay!');
    }
  }}
/>
    </div>
  );
}

export default App;
