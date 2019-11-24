import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Quotes from './components/Quotes';
function App() {
  return (
    <div className="App">
      <h1>Lord of the Rings Character Generator</h1>
      <Header />
      <Quotes />
    </div>
  );
}

export default App;
