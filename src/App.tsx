import React from 'react';
// import logo from './logo.svg';
// import  Todo from './components/Todo';
import './App.css';
import './components/SearchComponent';
import SearchComponent from './components/SearchComponent';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
          </a>
        </div>
      </nav>
      </header>
      <div className="container">
        <SearchComponent></SearchComponent>
      </div>
    </div>
  );
}

export default App;
