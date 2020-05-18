import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Books from './components/Books'
import { BrowserRouter, Route, Switch } from 'react-router-dom' 

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path = "/header" component = { Header }/>
        <Route path = "/header/books" component = { Books }/>
      </BrowserRouter>
    </div>
  );
}

export default App;
